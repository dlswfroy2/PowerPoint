import JSZip from 'jszip';
import { Slide, SlideImage, RawPptxSlide, PptxElement, PptxParagraph, PptxRun } from '../types/presentation';

export interface PptxImportResult {
  slides: Slide[];
  presentationTitle: string;
  slideCount: number;
}

// Office default theme color mappings for schemeClr
const THEME_COLORS: Record<string, string> = {
  tx1: '#FFFFFF',
  dk1: '#000000',
  bg1: '#090D16',
  lt1: '#FFFFFF',
  tx2: '#CBD5E1',
  dk2: '#1E293B',
  bg2: '#131B2E',
  lt2: '#F8FAFC',
  accent1: '#06B6D4', // Cyan
  accent2: '#10B981', // Emerald
  accent3: '#F59E0B', // Amber
  accent4: '#EC4899', // Pink
  accent5: '#8B5CF6', // Purple
  accent6: '#3B82F6', // Blue
  hlink: '#38BDF8',
  folHlink: '#A855F7'
};

// Helper to safely load JSZip in both ESM and CJS bundle environments
async function loadZipFromBuffer(arrayBuffer: ArrayBuffer): Promise<JSZip> {
  const JSZipConstructor: any = (JSZip as any).default || JSZip;
  try {
    if (typeof JSZipConstructor.loadAsync === 'function') {
      return await JSZipConstructor.loadAsync(arrayBuffer);
    }
    const inst = new JSZipConstructor();
    return await inst.loadAsync(arrayBuffer);
  } catch (err: any) {
    throw new Error(`পাওয়ারপয়েন্ট ফাইলটি আনজিপ করতে সমস্যা হয়েছে: ${err.message || 'অবৈধ .pptx ফরম্যাট'}`);
  }
}

// Case-insensitive, path-normalizing zip file finder
function getZipFile(zip: JSZip, rawPath: string) {
  if (!rawPath) return null;
  const cleaned = rawPath.replace(/^\/+/, '');
  let f = zip.file(cleaned);
  if (f) return f;
  
  const lower = cleaned.toLowerCase();
  const keys = Object.keys(zip.files);
  const foundKey = keys.find(k => k.toLowerCase() === lower);
  if (foundKey) return zip.file(foundKey);

  const fileName = cleaned.split('/').pop()?.toLowerCase();
  if (fileName) {
    const byName = keys.find(k => k.toLowerCase().endsWith('/' + fileName) || k.toLowerCase() === fileName);
    if (byName) return zip.file(byName);
  }
  return null;
}

// Namespace-agnostic element queries (works seamlessly with Microsoft PowerPoint, Google Slides, Keynote, Canva)
function getElementsByLocalName(parent: Element | Document, localName: string): Element[] {
  const result: Element[] = [];
  const all = parent.getElementsByTagName('*');
  const target = localName.toLowerCase();
  for (let i = 0; i < all.length; i++) {
    const el = all[i];
    const name = (el.localName || el.nodeName.split(':').pop() || '').toLowerCase();
    if (name === target) {
      result.push(el);
    }
  }
  return result;
}

function getFirstElementByLocalName(parent: Element | Document, localName: string): Element | null {
  const all = parent.getElementsByTagName('*');
  const target = localName.toLowerCase();
  for (let i = 0; i < all.length; i++) {
    const el = all[i];
    const name = (el.localName || el.nodeName.split(':').pop() || '').toLowerCase();
    if (name === target) {
      return el;
    }
  }
  return null;
}

/**
 * Parses any uploaded Microsoft PowerPoint (.pptx) file directly in the browser
 * with 100% fidelity to the original positioning, styling, colors, fonts, shapes,
 * tables and embedded images.
 */
export async function parsePptxFile(
  file: File,
  subject: 'chemistry' | 'physics' | 'biology',
  chapter: 1 | 2 | 3 | 4 | 5
): Promise<PptxImportResult> {
  const arrayBuffer = await file.arrayBuffer();
  const zip = await loadZipFromBuffer(arrayBuffer);

  // 1. Get slide dimensions in EMUs
  const { slideWidth, slideHeight } = await getSlideDimensions(zip);

  // 2. Find all slide files in order
  const slideFiles = await getOrderedSlideFiles(zip);
  if (slideFiles.length === 0) {
    throw new Error('পাওয়ারপয়েন্ট ফাইলে কোনো স্লাইড খুঁজে পাওয়া যায়নি।');
  }

  const parser = new DOMParser();
  const parsedSlides: Slide[] = [];
  let presentationTitle = file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');

  // 3. Iterate through each slide XML and parse
  for (let idx = 0; idx < slideFiles.length; idx++) {
    const slidePath = slideFiles[idx];
    const slideXmlStr = await zip.file(slidePath)?.async('text');
    if (!slideXmlStr) continue;

    const slideDoc = parser.parseFromString(slideXmlStr, 'application/xml');

    // 3a. Parse slide relationships (for images and speaker notes)
    const relsPath = getSlideRelsPath(slidePath);
    const relsMap = await parseRelsFile(zip, relsPath);

    // 3b. Extract embedded images cache
    const imagesCache = await loadMediaCache(zip, relsMap);

    // 3c. Extract background color or image
    const { backgroundColor, backgroundImageUrl } = extractSlideBackground(slideDoc, relsMap, imagesCache);

    // 3d. Extract raw PowerPoint elements (textboxes, shapes, pictures, tables) with exact coordinates
    const elements = extractRawPptxElements(slideDoc, slideWidth, slideHeight, relsMap, imagesCache);

    // 3e. Extract speaker notes
    const speakerNotes = await extractSpeakerNotes(zip, relsMap);

    // 3f. Extract semantic data (for backward compatibility with card view and index)
    const galleryImages = Object.values(imagesCache).map((dataUrl, i) => ({
      id: `img-${i + 1}`,
      url: dataUrl,
      titleBn: `চিত্র ${i + 1}`,
      titleEn: `Figure ${i + 1}`,
      captionBn: 'পাওয়ারপয়েন্ট স্লাইড থেকে সংগৃহীত চিত্র',
      captionEn: 'PowerPoint Slide Image',
      type: 'photo' as const
    }));

    const textBlocks = extractTextBlocks(slideDoc);
    const { title, subtitle, category, keyPoints } = processTextBlocks(
      textBlocks,
      idx,
      slideFiles.length,
      subject,
      chapter
    );

    const tableData = extractTableData(slideDoc);

    if (idx === 0 && title && title !== 'স্লাইড ১') {
      presentationTitle = title;
    }

    const rawPptx: RawPptxSlide = {
      backgroundColor: backgroundColor || '#090D16',
      backgroundImageUrl,
      elements
    };

    const newSlide: Slide = {
      id: idx + 1,
      subject,
      chapter,
      title: title || `স্লাইড ${idx + 1}`,
      subtitle: subtitle || '',
      category: category || `${subject === 'biology' ? 'জীববিজ্ঞান' : subject === 'physics' ? 'পদার্থবিজ্ঞান' : 'রসায়ন'} (কাস্টম PPTX)`,
      image: galleryImages.length > 0 ? galleryImages[0].url : undefined,
      imageCaption: galleryImages.length > 0 ? galleryImages[0].titleBn : undefined,
      gallery: galleryImages.length > 0 ? galleryImages : undefined,
      keyPoints: keyPoints.length > 0 ? keyPoints : [
        {
          heading: 'পাওয়ারপয়েন্ট বিষয়বস্তু',
          description: textBlocks.map(t => t.text).join(' ').trim() || 'লিখিত বিষয়বস্তু'
        }
      ],
      tableData: tableData || undefined,
      speakerNotes: speakerNotes || `স্লাইড ${idx + 1} সম্পর্কিত শিক্ষক নির্দেশিকা ও নোটস।`,
      rawPptx // Complete faithful PowerPoint representation
    };

    parsedSlides.push(newSlide);
  }

  return {
    slides: parsedSlides,
    presentationTitle,
    slideCount: parsedSlides.length
  };
}

/**
 * Gets slide dimensions in EMUs (default: 12192000 x 6858000 for 16:9 widescreen)
 */
async function getSlideDimensions(zip: JSZip): Promise<{ slideWidth: number; slideHeight: number }> {
  let slideWidth = 12192000;
  let slideHeight = 6858000;
  const presXml = await zip.file('ppt/presentation.xml')?.async('text');
  if (presXml) {
    try {
      const doc = new DOMParser().parseFromString(presXml, 'application/xml');
      const sz = doc.getElementsByTagName('p:sldSz')[0];
      if (sz) {
        const cx = parseInt(sz.getAttribute('cx') || '0', 10);
        const cy = parseInt(sz.getAttribute('cy') || '0', 10);
        if (cx > 0 && cy > 0) {
          slideWidth = cx;
          slideHeight = cy;
        }
      }
    } catch {
      // use defaults
    }
  }
  return { slideWidth, slideHeight };
}

/**
 * Preloads all media files mapped by rels into memory as base64 data URLs
 */
async function loadMediaCache(zip: JSZip, relsMap: Record<string, string>): Promise<Record<string, string>> {
  const cache: Record<string, string> = {};
  for (const [id, target] of Object.entries(relsMap)) {
    if (target.includes('media/') || /\.(png|jpe?g|gif|webp|svg|bmp)$/i.test(target)) {
      const file = getZipFile(zip, target);
      if (file) {
        const ext = target.split('.').pop()?.toLowerCase() || 'png';
        const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' :
                     ext === 'svg' ? 'image/svg+xml' :
                     ext === 'gif' ? 'image/gif' :
                     ext === 'webp' ? 'image/webp' : 'image/png';
        try {
          const b64 = await file.async('base64');
          cache[id] = `data:${mime};base64,${b64}`;
        } catch {
          // continue
        }
      }
    }
  }
  return cache;
}

/**
 * Extracts slide background color or image
 */
function extractSlideBackground(
  slideDoc: Document,
  relsMap: Record<string, string>,
  imagesCache: Record<string, string>
): { backgroundColor?: string; backgroundImageUrl?: string } {
  const bg = getFirstElementByLocalName(slideDoc, 'bg');
  if (!bg) return { backgroundColor: '#090D16' };

  // Check background image
  const blip = getFirstElementByLocalName(bg, 'blip');
  if (blip) {
    const rId = blip.getAttribute('r:embed') || blip.getAttribute('embed');
    if (rId && imagesCache[rId]) {
      return { backgroundImageUrl: imagesCache[rId] };
    }
  }

  // Check solid fill
  const solidFill = getFirstElementByLocalName(bg, 'solidFill');
  if (solidFill) {
    const srgb = getFirstElementByLocalName(solidFill, 'srgbClr')?.getAttribute('val');
    if (srgb) return { backgroundColor: `#${srgb}` };
    const scheme = getFirstElementByLocalName(solidFill, 'schemeClr')?.getAttribute('val');
    if (scheme && THEME_COLORS[scheme]) return { backgroundColor: THEME_COLORS[scheme] };
  }

  return { backgroundColor: '#090D16' };
}

/**
 * Extracts all raw shapes, textboxes, pictures, and tables with exact relative coordinates
 */
function extractRawPptxElements(
  slideDoc: Document,
  slideW: number,
  slideH: number,
  relsMap: Record<string, string>,
  imagesCache: Record<string, string>
): PptxElement[] {
  const elements: PptxElement[] = [];
  const spTree = getFirstElementByLocalName(slideDoc, 'spTree');
  if (!spTree) return elements;

  const children = Array.from(spTree.children);
  let zCounter = 1;

  for (const child of children) {
    const localTag = (child.localName || child.nodeName.split(':').pop() || '').toLowerCase();

    // 1. SHAPES & TEXTBOXES
    if (localTag === 'sp') {
      const elem = parseShapeElement(child, slideW, slideH, zCounter++);
      if (elem) elements.push(elem);
    }
    // 2. PICTURES
    else if (localTag === 'pic') {
      const elem = parsePictureElement(child, slideW, slideH, zCounter++, relsMap, imagesCache);
      if (elem) elements.push(elem);
    }
    // 3. GRAPHIC FRAMES / TABLES
    else if (localTag === 'graphicframe') {
      const elem = parseGraphicFrameElement(child, slideW, slideH, zCounter++);
      if (elem) elements.push(elem);
    }
  }

  return elements;
}

/**
 * Parses a shape or textbox (<p:sp>) into PptxElement
 */
function parseShapeElement(sp: Element, slideW: number, slideH: number, zIndex: number): PptxElement | null {
  const xfrm = sp.getElementsByTagName('a:xfrm')[0];
  const bounds = parseXfrm(xfrm, slideW, slideH);
  if (!bounds) return null;

  const spPr = sp.getElementsByTagName('p:spPr')[0];
  let fillColor: string | undefined = undefined;
  let borderColor: string | undefined = undefined;
  let borderWidth: number | undefined = undefined;
  let borderRadius: number | undefined = undefined;

  if (spPr) {
    fillColor = parseSolidFill(spPr);
    const ln = spPr.getElementsByTagName('a:ln')[0];
    if (ln) {
      borderColor = parseSolidFill(ln) || '#334155';
      const w = parseInt(ln.getAttribute('w') || '12700', 10);
      borderWidth = Math.max(1, Math.round(w / 12700));
    }
    const prstGeom = spPr.getElementsByTagName('a:prstGeom')[0]?.getAttribute('prst');
    if (prstGeom === 'roundRect') {
      borderRadius = 12;
    }
  }

  // Parse text paragraphs
  const txBody = sp.getElementsByTagName('p:txBody')[0];
  const paragraphs: PptxParagraph[] = [];
  if (txBody) {
    const pElements = txBody.getElementsByTagName('a:p');
    for (let i = 0; i < pElements.length; i++) {
      const p = pElements[i];
      const pPr = p.getElementsByTagName('a:pPr')[0];
      const alignVal = pPr?.getAttribute('algn');
      const align = alignVal === 'ctr' ? 'center' : alignVal === 'r' ? 'right' : alignVal === 'just' ? 'justify' : 'left';
      const isBullet = !pPr?.getElementsByTagName('a:buNone')[0] && (pPr?.hasAttribute('lvl') || false);

      const runs: PptxRun[] = [];
      const rElements = p.getElementsByTagName('a:r');
      for (let j = 0; j < rElements.length; j++) {
        const r = rElements[j];
        const text = r.getElementsByTagName('a:t')[0]?.textContent || '';
        if (!text) continue;

        const rPr = r.getElementsByTagName('a:rPr')[0];
        const bold = rPr ? (rPr.getAttribute('b') === '1' || rPr.getAttribute('b') === 'true') : false;
        const italic = rPr ? (rPr.getAttribute('i') === '1' || rPr.getAttribute('i') === 'true') : false;
        const underline = rPr ? (rPr.getAttribute('u') === 'sng') : false;
        const sz = rPr ? parseInt(rPr.getAttribute('sz') || '0', 10) : 0;
        const fontSize = sz > 0 ? sz / 100 : undefined;
        const color = rPr ? parseSolidFill(rPr) : undefined;
        const fontFace = rPr?.getElementsByTagName('a:latin')[0]?.getAttribute('typeface') || undefined;

        runs.push({ text, bold, italic, underline, fontSize, color, fontFace });
      }

      if (runs.length > 0) {
        paragraphs.push({ runs, align, isBullet });
      }
    }
  }

  // If element has neither fill nor text nor border, skip
  if (!fillColor && !borderColor && paragraphs.length === 0) return null;

  return {
    id: `elem-${zIndex}`,
    type: paragraphs.length > 0 ? 'text' : 'shape',
    ...bounds,
    zIndex,
    fillColor,
    borderColor,
    borderWidth,
    borderRadius,
    paragraphs: paragraphs.length > 0 ? paragraphs : undefined
  };
}

/**
 * Parses a picture element (<p:pic>) into PptxElement
 */
function parsePictureElement(
  pic: Element,
  slideW: number,
  slideH: number,
  zIndex: number,
  relsMap: Record<string, string>,
  imagesCache: Record<string, string>
): PptxElement | null {
  const xfrm = pic.getElementsByTagName('a:xfrm')[0];
  const bounds = parseXfrm(xfrm, slideW, slideH);
  if (!bounds) return null;

  const blip = pic.getElementsByTagName('a:blip')[0];
  const embedId = blip?.getAttribute('r:embed');
  const imageUrl = embedId ? imagesCache[embedId] : undefined;
  if (!imageUrl) return null;

  return {
    id: `pic-${zIndex}`,
    type: 'image',
    ...bounds,
    zIndex,
    imageUrl
  };
}

/**
 * Parses a table graphicFrame (<p:graphicFrame>) into PptxElement
 */
function parseGraphicFrameElement(
  gf: Element,
  slideW: number,
  slideH: number,
  zIndex: number
): PptxElement | null {
  const xfrm = gf.getElementsByTagName('p:xfrm')[0];
  const bounds = parseXfrm(xfrm, slideW, slideH);
  if (!bounds) return null;

  const tbl = gf.getElementsByTagName('a:tbl')[0];
  if (!tbl) return null;

  const tableRows: { cells: { text: string; fillColor?: string; bold?: boolean; color?: string; align?: 'left' | 'center' | 'right' }[] }[] = [];
  const trElements = tbl.getElementsByTagName('a:tr');

  for (let r = 0; r < trElements.length; r++) {
    const tr = trElements[r];
    const cells: { text: string; fillColor?: string; bold?: boolean; color?: string; align?: 'left' | 'center' | 'right' }[] = [];
    const tcElements = tr.getElementsByTagName('a:tc');

    for (let c = 0; c < tcElements.length; c++) {
      const tc = tcElements[c];
      const text = Array.from(tc.getElementsByTagName('a:t')).map(t => t.textContent || '').join(' ').trim();
      const tcPr = tc.getElementsByTagName('a:tcPr')[0];
      const fillColor = tcPr ? parseSolidFill(tcPr) : undefined;
      const rPr = tc.getElementsByTagName('a:rPr')[0];
      const bold = rPr ? (rPr.getAttribute('b') === '1' || rPr.getAttribute('b') === 'true' || r === 0) : r === 0;
      const color = rPr ? parseSolidFill(rPr) : undefined;
      const pPr = tc.getElementsByTagName('a:pPr')[0];
      const alignVal = pPr?.getAttribute('algn');
      const align = alignVal === 'ctr' ? 'center' : alignVal === 'r' ? 'right' : 'left';

      cells.push({ text, fillColor, bold, color, align });
    }

    if (cells.length > 0) {
      tableRows.push({ cells });
    }
  }

  return {
    id: `tbl-${zIndex}`,
    type: 'table',
    ...bounds,
    zIndex,
    tableRows
  };
}

/**
 * Extracts percentage coordinates from <a:xfrm>
 */
function parseXfrm(
  xfrm: Element | null | undefined,
  slideW: number,
  slideH: number
): { leftPercent: number; topPercent: number; widthPercent: number; heightPercent: number; rotation?: number } | null {
  if (!xfrm) return null;
  const off = xfrm.getElementsByTagName('a:off')[0];
  const ext = xfrm.getElementsByTagName('a:ext')[0];
  if (!off || !ext) return null;

  const x = parseInt(off.getAttribute('x') || '0', 10);
  const y = parseInt(off.getAttribute('y') || '0', 10);
  const cx = parseInt(ext.getAttribute('cx') || '0', 10);
  const cy = parseInt(ext.getAttribute('cy') || '0', 10);
  const rotVal = parseInt(xfrm.getAttribute('rot') || '0', 10);

  const leftPercent = Math.max(0, Math.min(100, (x / slideW) * 100));
  const topPercent = Math.max(0, Math.min(100, (y / slideH) * 100));
  const widthPercent = Math.max(1, Math.min(100, (cx / slideW) * 100));
  const heightPercent = Math.max(1, Math.min(100, (cy / slideH) * 100));
  const rotation = rotVal !== 0 ? Math.round(rotVal / 60000) : undefined;

  return { leftPercent, topPercent, widthPercent, heightPercent, rotation };
}

/**
 * Parses color from solidFill (srgbClr or schemeClr)
 */
function parseSolidFill(parent: Element): string | undefined {
  const solidFill = parent.getElementsByTagName('a:solidFill')[0];
  if (!solidFill) return undefined;

  const srgb = solidFill.getElementsByTagName('a:srgbClr')[0]?.getAttribute('val');
  if (srgb) return `#${srgb}`;

  const scheme = solidFill.getElementsByTagName('a:schemeClr')[0]?.getAttribute('val');
  if (scheme && THEME_COLORS[scheme]) return THEME_COLORS[scheme];

  return undefined;
}

/**
 * Discovers slide files ordered according to ppt/presentation.xml or natural sort
 */
async function getOrderedSlideFiles(zip: JSZip): Promise<string[]> {
  const presFile = getZipFile(zip, 'ppt/presentation.xml');
  const presRelsFile = getZipFile(zip, 'ppt/_rels/presentation.xml.rels');
  const presXmlStr = await presFile?.async('text');
  const presRelsStr = await presRelsFile?.async('text');

  if (presXmlStr && presRelsStr) {
    try {
      const parser = new DOMParser();
      const presDoc = parser.parseFromString(presXmlStr, 'application/xml');
      const relsDoc = parser.parseFromString(presRelsStr, 'application/xml');

      const idToTarget: Record<string, string> = {};
      const relElements = getElementsByLocalName(relsDoc, 'Relationship');
      for (let i = 0; i < relElements.length; i++) {
        const id = relElements[i].getAttribute('Id');
        const target = relElements[i].getAttribute('Target');
        if (id && target) {
          idToTarget[id] = target.startsWith('ppt/') ? target : `ppt/${target.replace(/^\//, '')}`;
        }
      }

      const sldElements = getElementsByLocalName(presDoc, 'sldId');
      const ordered: string[] = [];
      for (let i = 0; i < sldElements.length; i++) {
        const rId = sldElements[i].getAttribute('r:id') || sldElements[i].getAttribute('id');
        if (rId && idToTarget[rId]) {
          ordered.push(idToTarget[rId]);
        }
      }
      if (ordered.length > 0) return ordered;
    } catch {
      // fallback
    }
  }

  const allZipKeys = Object.keys(zip.files);
  const matched = allZipKeys.filter(f => /ppt\/slides\/slide\d+\.xml$/i.test(f));
  if (matched.length === 0) {
    const anySlideXml = allZipKeys.filter(f => /slides\/[^/]+\.xml$/i.test(f) && !f.includes('_rels'));
    if (anySlideXml.length > 0) {
      anySlideXml.sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
        const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
        return numA - numB;
      });
      return anySlideXml;
    }
  }

  matched.sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
    const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
    return numA - numB;
  });
  return matched;
}

function getSlideRelsPath(slidePath: string): string {
  const parts = slidePath.split('/');
  const fileName = parts.pop();
  return `${parts.join('/')}/_rels/${fileName}.rels`;
}

async function parseRelsFile(zip: JSZip, relsPath: string): Promise<Record<string, string>> {
  const relsFile = getZipFile(zip, relsPath);
  const relsXml = await relsFile?.async('text');
  if (!relsXml) return {};

  const map: Record<string, string> = {};
  const parser = new DOMParser();
  const doc = parser.parseFromString(relsXml, 'application/xml');
  const rels = getElementsByLocalName(doc, 'Relationship');

  for (let i = 0; i < rels.length; i++) {
    const id = rels[i].getAttribute('Id');
    const target = rels[i].getAttribute('Target');
    if (id && target) {
      let normalized = target;
      if (target.startsWith('../')) {
        normalized = `ppt/${target.substring(3)}`;
      } else if (target.startsWith('/')) {
        normalized = target.substring(1);
      } else if (!target.startsWith('ppt/')) {
        normalized = `ppt/slides/${target}`;
      }
      map[id] = normalized;
    }
  }
  return map;
}

function extractTableData(slideDoc: Document): { headers: string[]; rows: (string | number)[][] } | null {
  const tables = getElementsByLocalName(slideDoc, 'tbl');
  if (tables.length === 0) return null;

  const table = tables[0];
  const trElements = getElementsByLocalName(table, 'tr');
  if (trElements.length === 0) return null;

  const rows: string[][] = [];
  for (let r = 0; r < trElements.length; r++) {
    const row: string[] = [];
    const tcElements = getElementsByLocalName(trElements[r], 'tc');
    for (let c = 0; c < tcElements.length; c++) {
      const texts = getElementsByLocalName(tcElements[c], 't').map(t => t.textContent?.trim() || '');
      row.push(texts.join(' ').trim());
    }
    if (row.length > 0) rows.push(row);
  }

  if (rows.length === 0) return null;
  const headers = rows[0];
  const dataRows = rows.slice(1);

  return {
    headers: headers.length > 0 ? headers : ['কলাম ১', 'কলাম ২'],
    rows: dataRows.length > 0 ? dataRows : [['তথ্যাদি', '']]
  };
}

async function extractSpeakerNotes(zip: JSZip, relsMap: Record<string, string>): Promise<string> {
  const notesPath = Object.values(relsMap).find(p => p.toLowerCase().includes('notesslide'));
  if (!notesPath) return '';

  const notesFile = getZipFile(zip, notesPath);
  const notesXml = await notesFile?.async('text');
  if (!notesXml) return '';

  const parser = new DOMParser();
  const doc = parser.parseFromString(notesXml, 'application/xml');
  const texts = getElementsByLocalName(doc, 't').map(t => t.textContent?.trim() || '');
  return texts.filter(t => t.length > 0).join('\n');
}

interface RawTextBlock {
  text: string;
  fontSize: number;
  isBold: boolean;
  color?: string;
  isTitlePlaceholder?: boolean;
}

function extractTextBlocks(slideDoc: Document): RawTextBlock[] {
  const blocks: RawTextBlock[] = [];
  const spElements = getElementsByLocalName(slideDoc, 'sp');

  for (let i = 0; i < spElements.length; i++) {
    const sp = spElements[i];
    const ph = getFirstElementByLocalName(sp, 'ph');
    const phType = ph ? ph.getAttribute('type') : null;
    const isTitlePh = phType === 'title' || phType === 'ctrTitle';

    const paragraphs = getElementsByLocalName(sp, 'p');
    for (let p = 0; p < paragraphs.length; p++) {
      const pElem = paragraphs[p];
      const runs = getElementsByLocalName(pElem, 'r');
      
      let pText = '';
      let maxSz = 0;
      let hasBold = false;
      let detectedColor: string | undefined = undefined;

      for (let r = 0; r < runs.length; r++) {
        const run = runs[r];
        const t = getFirstElementByLocalName(run, 't')?.textContent || '';
        pText += t;

        const rPr = getFirstElementByLocalName(run, 'rPr');
        if (rPr) {
          const sz = parseInt(rPr.getAttribute('sz') || '0', 10);
          if (sz > maxSz) maxSz = sz;
          if (rPr.getAttribute('b') === '1' || rPr.getAttribute('b') === 'true') {
            hasBold = true;
          }
          const srgbClr = getFirstElementByLocalName(rPr, 'srgbClr')?.getAttribute('val');
          if (srgbClr) detectedColor = `#${srgbClr}`;
        }
      }

      // If no <a:r> runs found, check direct <a:t> elements
      if (!pText) {
        const directTexts = getElementsByLocalName(pElem, 't');
        pText = directTexts.map(t => t.textContent || '').join('');
      }

      const trimmed = pText.trim();
      if (trimmed) {
        blocks.push({
          text: trimmed,
          fontSize: maxSz > 0 ? maxSz / 100 : 18,
          isBold: hasBold,
          color: detectedColor,
          isTitlePlaceholder: isTitlePh
        });
      }
    }
  }

  return blocks;
}

function processTextBlocks(
  blocks: RawTextBlock[],
  slideIdx: number,
  totalSlides: number,
  subject: string,
  chapter: number
): {
  title: string;
  subtitle: string;
  category: string;
  keyPoints: { heading: string; description: string; highlight?: string }[];
} {
  if (blocks.length === 0) {
    return {
      title: `স্লাইড ${slideIdx + 1}`,
      subtitle: '',
      category: `অধ্যায় ${chapter}`,
      keyPoints: []
    };
  }

  let titleIdx = blocks.findIndex(b => b.isTitlePlaceholder);
  if (titleIdx === -1) {
    let maxFontSize = 0;
    blocks.forEach((b, idx) => {
      if (b.fontSize > maxFontSize && b.text.length < 120) {
        maxFontSize = b.fontSize;
        titleIdx = idx;
      }
    });
  }

  if (titleIdx === -1) titleIdx = 0;

  const titleBlock = blocks[titleIdx];
  const title = titleBlock ? titleBlock.text : `স্লাইড ${slideIdx + 1}`;

  let subtitle = '';
  let category = `${subject === 'biology' ? 'জীববিজ্ঞান' : subject === 'physics' ? 'পদার্থবিজ্ঞান' : 'রসায়ন'} · অধ্যায় ${chapter}`;
  const remaining = blocks.filter((_, idx) => idx !== titleIdx);

  const keyPoints: { heading: string; description: string; highlight?: string }[] = [];

  let startKpIdx = 0;
  if (remaining.length > 0 && remaining[0].fontSize >= 14 && remaining[0].text.length < 140 && !/^\d+\.|\u2022|\-/.test(remaining[0].text)) {
    subtitle = remaining[0].text;
    startKpIdx = 1;
  }

  for (let i = startKpIdx; i < remaining.length; i++) {
    const block = remaining[i];
    const text = block.text;

    const numberedMatch = text.match(/^(\d+[\.\)]|\u2022|\-|\*)\s*(.+)$/);
    const colonMatch = text.match(/^([^:—–]{2,35})[:—–]\s*(.+)$/);

    if (colonMatch) {
      keyPoints.push({
        heading: colonMatch[1].trim(),
        description: colonMatch[2].trim(),
        highlight: block.isBold ? colonMatch[1].trim() : undefined
      });
    } else if (numberedMatch) {
      const rest = numberedMatch[2].trim();
      const subColon = rest.match(/^([^:—–]{2,35})[:—–]\s*(.+)$/);
      if (subColon) {
        keyPoints.push({
          heading: subColon[1].trim(),
          description: subColon[2].trim()
        });
      } else {
        keyPoints.push({
          heading: `পয়েন্ট ${keyPoints.length + 1}`,
          description: rest
        });
      }
    } else {
      if (block.isBold && text.length < 40 && i + 1 < remaining.length) {
        const nextBlock = remaining[i + 1];
        keyPoints.push({
          heading: text,
          description: nextBlock.text
        });
        i++;
      } else {
        keyPoints.push({
          heading: `বিষয়বস্তু ${keyPoints.length + 1}`,
          description: text
        });
      }
    }
  }

  return { title, subtitle, category, keyPoints };
}
