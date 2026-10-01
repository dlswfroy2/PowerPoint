import pptxgen from 'pptxgenjs';
import { Slide } from '../types/presentation';

interface ExportPptxOptions {
  slides: Slide[];
  subjectName: string;
  chapterTitle: string;
  chapterNumber: number;
}

/**
 * Generates and downloads a real, highly-polished Microsoft PowerPoint (.pptx) file
 * from current presentation slides with complete styling, tables, keypoints, and speaker notes.
 */
export async function exportSlidesToPptx({
  slides,
  subjectName,
  chapterTitle,
  chapterNumber
}: ExportPptxOptions): Promise<void> {
  const pptx = new pptxgen();
  
  // Set 16:9 widescreen layout
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'বিজ্ঞান প্রেজেন্টেশন';
  pptx.company = 'SSC Science Virtual Lab';
  pptx.title = `${subjectName} - অধ্যায় ${chapterNumber}: ${chapterTitle}`;

  const isBiology = subjectName.includes('জীববিজ্ঞান') || subjectName.toLowerCase().includes('biology');
  const isPhysics = subjectName.includes('পদার্থবিজ্ঞান') || subjectName.toLowerCase().includes('physics');

  // Primary Theme Colors (Hex without # for pptxgenjs)
  const bgColor = '090D16'; // Deep Slate Navy
  const cardBgColor = '131B2E';
  const textWhite = 'FFFFFF';
  const textGray = '94A3B8';
  const accentColor = isBiology ? '10B981' : isPhysics ? 'F59E0B' : '06B6D4'; // Emerald / Amber / Cyan
  const highlightColor = isBiology ? '34D399' : isPhysics ? 'FBBF24' : '38BDF8';

  // ==========================================
  // SLIDE 1: Title / Cover Slide
  // ==========================================
  const coverSlide = pptx.addSlide();
  coverSlide.background = { color: bgColor };

  // Decorative Top Accent Bar
  coverSlide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: '100%',
    h: 0.15,
    fill: { color: accentColor },
    line: { color: accentColor }
  });

  // Badge: Subject & Chapter
  coverSlide.addText(`${subjectName} · অধ্যায় ${chapterNumber}`, {
    x: 1.0,
    y: 2.0,
    w: 8.5,
    h: 0.5,
    fontSize: 16,
    fontFace: 'Arial',
    bold: true,
    color: highlightColor,
    align: 'left'
  });

  // Main Presentation Title
  coverSlide.addText(chapterTitle, {
    x: 1.0,
    y: 2.6,
    w: 11.0,
    h: 1.5,
    fontSize: 40,
    fontFace: 'Arial',
    bold: true,
    color: textWhite,
    align: 'left'
  });

  // Subtitle
  coverSlide.addText('নবম-দশম ও এসএসসি শিক্ষাক্রম অনুযায়ী পূর্ণাঙ্গ ডিজিটাল প্রেজেন্টেশন ও পাঠ সহায়তা', {
    x: 1.0,
    y: 4.2,
    w: 10.5,
    h: 0.6,
    fontSize: 18,
    fontFace: 'Arial',
    color: textGray,
    align: 'left'
  });

  // Presentation metadata badge
  coverSlide.addText([
    { text: `মোট স্লাইড: `, options: { color: textGray, bold: false } },
    { text: `${slides.length}টি   |   `, options: { color: textWhite, bold: true } },
    { text: `সংস্করণ: `, options: { color: textGray, bold: false } },
    { text: `SSC পূর্ণাঙ্গ সংস্করণ`, options: { color: accentColor, bold: true } }
  ], {
    x: 1.0,
    y: 5.6,
    w: 10.0,
    h: 0.4,
    fontSize: 13,
    fontFace: 'Arial',
    align: 'left'
  });

  // ==========================================
  // SLIDES 2 to N: Topic Content Slides
  // ==========================================
  slides.forEach((slideItem, index) => {
    const slide = pptx.addSlide();
    slide.background = { color: bgColor };

    // Decorative Top Accent Bar
    slide.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: '100%',
      h: 0.08,
      fill: { color: accentColor },
      line: { color: accentColor }
    });

    // Top Category / Breadcrumb
    slide.addText(`স্লাইড ${index + 1} / ${slides.length} · ${slideItem.category || subjectName}`, {
      x: 0.8,
      y: 0.4,
      w: 9.0,
      h: 0.35,
      fontSize: 11,
      fontFace: 'Arial',
      bold: true,
      color: highlightColor
    });

    // Slide Title
    slide.addText(slideItem.title, {
      x: 0.8,
      y: 0.75,
      w: 11.5,
      h: 0.7,
      fontSize: 26,
      fontFace: 'Arial',
      bold: true,
      color: textWhite
    });

    // Slide Subtitle
    if (slideItem.subtitle) {
      slide.addText(slideItem.subtitle, {
        x: 0.8,
        y: 1.45,
        w: 11.5,
        h: 0.4,
        fontSize: 13,
        fontFace: 'Arial',
        color: textGray
      });
    }

    // Left Column: Key Points Container Card
    const hasTable = slideItem.tableData && slideItem.tableData.rows.length > 0;
    const contentW = hasTable ? 5.8 : 6.8;

    // Card background for Left Column
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 2.0,
      w: contentW,
      h: 4.8,
      fill: { color: cardBgColor },
      line: { color: '1E293B', width: 1 }
    });

    // Build Key Points Text Blocks
    const keyPointTexts: pptxgen.TextProps[] = [];
    slideItem.keyPoints.forEach((kp, kpIdx) => {
      // Heading
      keyPointTexts.push({
        text: `\n${kpIdx + 1}. ${kp.heading}\n`,
        options: {
          bold: true,
          color: highlightColor,
          fontSize: 14,
          fontFace: 'Arial'
        }
      });
      // Description
      keyPointTexts.push({
        text: `${kp.description}\n`,
        options: {
          color: textWhite,
          fontSize: 11.5,
          fontFace: 'Arial'
        }
      });
      // Highlight / Formula if present
      if (kp.highlight || kp.formula) {
        keyPointTexts.push({
          text: `   ➤ ${kp.highlight || kp.formula}\n`,
          options: {
            color: accentColor,
            bold: true,
            fontSize: 10.5,
            fontFace: 'Arial'
          }
        });
      }
    });

    slide.addText(keyPointTexts, {
      x: 1.0,
      y: 2.1,
      w: contentW - 0.4,
      h: 4.5,
      align: 'left',
      valign: 'top'
    });

    // Right Column: Table OR Diagram Annotations / Callout
    const rightX = contentW + 1.1;
    const rightW = 12.5 - rightX;

    if (hasTable && slideItem.tableData) {
      // Add table header title
      if (slideItem.tableData.caption) {
        slide.addText(slideItem.tableData.caption, {
          x: rightX,
          y: 2.0,
          w: rightW,
          h: 0.35,
          fontSize: 11,
          bold: true,
          color: highlightColor
        });
      }

      // Format table rows
      const tableRows: pptxgen.TableRow[] = [];
      // Header row
      tableRows.push(
        slideItem.tableData.headers.map((h) => ({
          text: h,
          options: {
            fill: { color: '1E293B' },
            color: highlightColor,
            bold: true,
            fontSize: 11,
            align: 'center'
          }
        }))
      );
      // Data rows
      slideItem.tableData.rows.slice(0, 8).forEach((row, rIdx) => {
        tableRows.push(
          row.map((cell) => ({
            text: String(cell),
            options: {
              fill: { color: rIdx % 2 === 0 ? cardBgColor : '0D1424' },
              color: textWhite,
              fontSize: 10,
              align: 'center'
            }
          }))
        );
      });

      slide.addTable(tableRows, {
        x: rightX,
        y: 2.4,
        w: rightW,
        colW: Array(slideItem.tableData.headers.length).fill(rightW / slideItem.tableData.headers.length),
        border: { color: '334155', pt: 0.5 }
      });
    } else if (slideItem.diagramAnnotations && slideItem.diagramAnnotations.length > 0) {
      // Annotations Box
      slide.addShape(pptx.ShapeType.roundRect, {
        x: rightX,
        y: 2.0,
        w: rightW,
        h: 4.8,
        fill: { color: cardBgColor },
        line: { color: '1E293B', width: 1 }
      });

      slide.addText('মূল অংশ ও পরিচিতি (Key Components)', {
        x: rightX + 0.2,
        y: 2.1,
        w: rightW - 0.4,
        h: 0.35,
        fontSize: 12,
        bold: true,
        color: highlightColor
      });

      const annoTexts: pptxgen.TextProps[] = [];
      slideItem.diagramAnnotations.slice(0, 5).forEach((anno, aIdx) => {
        annoTexts.push({
          text: `\n• ${anno.labelBn} (${anno.labelEn})\n`,
          options: {
            bold: true,
            color: textWhite,
            fontSize: 11,
            fontFace: 'Arial'
          }
        });
        annoTexts.push({
          text: `  ${anno.detailBn}\n`,
          options: {
            color: textGray,
            fontSize: 10,
            fontFace: 'Arial'
          }
        });
      });

      slide.addText(annoTexts, {
        x: rightX + 0.2,
        y: 2.4,
        w: rightW - 0.4,
        h: 4.2,
        align: 'left',
        valign: 'top'
      });
    } else if (slideItem.callout) {
      // Callout Highlight Box
      slide.addShape(pptx.ShapeType.roundRect, {
        x: rightX,
        y: 2.0,
        w: rightW,
        h: 3.5,
        fill: { color: cardBgColor },
        line: { color: accentColor, width: 1.5 }
      });

      slide.addText(slideItem.callout.title, {
        x: rightX + 0.3,
        y: 2.2,
        w: rightW - 0.6,
        h: 0.4,
        fontSize: 13,
        bold: true,
        color: highlightColor
      });

      slide.addText(slideItem.callout.content, {
        x: rightX + 0.3,
        y: 2.7,
        w: rightW - 0.6,
        h: 2.5,
        fontSize: 11.5,
        color: textWhite
      });
    } else {
      // Information Card
      slide.addShape(pptx.ShapeType.roundRect, {
        x: rightX,
        y: 2.0,
        w: rightW,
        h: 4.8,
        fill: { color: cardBgColor },
        line: { color: '1E293B', width: 1 }
      });

      slide.addText('শিক্ষণীয় সারসংক্ষেপ', {
        x: rightX + 0.3,
        y: 2.2,
        w: rightW - 0.6,
        h: 0.4,
        fontSize: 13,
        bold: true,
        color: highlightColor
      });

      slide.addText([
        { text: '• বিষয়বস্তুটি এসএসসি পরীক্ষার জন্য অত্যন্ত গুরুত্বপূর্ণ।\n\n', options: { color: textWhite, fontSize: 11 } },
        { text: '• ৩ডি সিমুলেশন ও চিত্র অ্যাপ্লিকেশনে সরাসরি উপলব্ধ।\n\n', options: { color: textWhite, fontSize: 11 } },
        { text: `• অধ্যায়: ${subjectName} ${chapterTitle}`, options: { color: accentColor, fontSize: 10.5, bold: true } }
      ], {
        x: rightX + 0.3,
        y: 2.8,
        w: rightW - 0.6,
        h: 3.6,
        valign: 'top'
      });
    }

    // Add Speaker Notes to Slide
    if (slideItem.speakerNotes) {
      slide.addNotes(slideItem.speakerNotes);
    }
  });

  // Generate and trigger download
  const safeFilename = `${subjectName}_অধ্যায়_${chapterNumber}_${chapterTitle.replace(/[\s,:-]+/g, '_')}.pptx`;
  await pptx.writeFile({ fileName: safeFilename });
}
