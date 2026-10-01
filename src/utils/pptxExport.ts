import pptxgen from 'pptxgenjs';
import { Slide } from '../types/presentation';

export async function exportSlidesToPPTX(slides: Slide[], chapterTitle: string): Promise<void> {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'SSC Chemistry Interactive Deck';
  pptx.company = 'SSC Chemistry Masterclass';
  pptx.subject = chapterTitle;
  pptx.title = chapterTitle;

  // Title Slide
  const titleSlide = pptx.addSlide();
  titleSlide.background = { color: '0A0F1D' };
  
  // Decorative header bar
  titleSlide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: '100%',
    h: 0.15,
    fill: { color: '06B6D4' }
  });

  titleSlide.addText('জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) · নবম-দশম ও এসএসসি রসায়ন', {
    x: 1.0,
    y: 1.8,
    w: 11.3,
    h: 0.5,
    fontSize: 14,
    color: '94A3B8',
    align: 'center'
  });

  titleSlide.addText(chapterTitle, {
    x: 1.0,
    y: 2.4,
    w: 11.3,
    h: 1.4,
    fontSize: 34,
    bold: true,
    color: '38BDF8',
    align: 'center'
  });

  titleSlide.addText('সম্পূর্ণ অধ্যায়ভিত্তিক প্রেজেন্টেশন, মূল তত্ত্ব, আধুনিক সচিত্র ব্যাখ্যা ও পরীক্ষা', {
    x: 1.0,
    y: 4.0,
    w: 11.3,
    h: 0.6,
    fontSize: 16,
    color: 'E2E8F0',
    align: 'center'
  });

  titleSlide.addText('তৈরি করেছে: এসএসসি রসায়ন প্রেজেন্টেশন ও ল্যাব সিস্টেম', {
    x: 1.0,
    y: 6.2,
    w: 11.3,
    h: 0.4,
    fontSize: 11,
    color: '64748B',
    align: 'center'
  });

  // Content Slides
  slides.forEach((slide, idx) => {
    const s = pptx.addSlide();
    s.background = { color: '0F172A' };

    // Top indicator
    s.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: '100%',
      h: 0.08,
      fill: { color: '0284C7' }
    });

    // Category / Slide index tag
    s.addText(`স্লাইড ${idx + 1}/${slides.length}  |  ${slide.category}`, {
      x: 0.8,
      y: 0.35,
      w: 11.5,
      h: 0.35,
      fontSize: 11,
      bold: true,
      color: '22D3EE'
    });

    // Slide Title
    s.addText(slide.title, {
      x: 0.8,
      y: 0.7,
      w: 11.5,
      h: 0.65,
      fontSize: 22,
      bold: true,
      color: 'FFFFFF'
    });

    // Subtitle
    if (slide.subtitle) {
      s.addText(slide.subtitle, {
        x: 0.8,
        y: 1.35,
        w: 11.5,
        h: 0.4,
        fontSize: 12,
        color: '94A3B8'
      });
    }

    // Key points
    let currentY = 1.9;
    slide.keyPoints.slice(0, 4).forEach((kp, kpIdx) => {
      s.addText(
        [
          { text: `${kpIdx + 1}. ${kp.heading}: `, options: { bold: true, color: '38BDF8' } },
          { text: kp.description, options: { color: 'E2E8F0' } }
        ],
        {
          x: 0.8,
          y: currentY,
          w: 11.5,
          h: 0.6,
          fontSize: 12,
          margin: 0
        }
      );
      currentY += 0.65;
    });

    // Callout Box
    if (slide.callout) {
      s.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: Math.max(currentY + 0.1, 4.8),
        w: 11.5,
        h: 1.3,
        fill: { color: '162032' },
        line: { color: '06B6D4', width: 1.5 }
      });

      s.addText(
        [
          { text: `📌 ${slide.callout.title}\n`, options: { bold: true, color: '67E8F9', fontSize: 12 } },
          { text: slide.callout.content, options: { color: 'CBD5E1', fontSize: 11 } }
        ],
        {
          x: 1.0,
          y: Math.max(currentY + 0.2, 4.9),
          w: 11.1,
          h: 1.1,
          margin: 0
        }
      );
    }

    // Speaker notes for presenter
    if (slide.speakerNotes) {
      s.addNotes(`[শিক্ষক/উপস্থাপকের নোটস]:\n${slide.speakerNotes}`);
    }
  });

  const safeName = chapterTitle.replace(/[^a-zA-Z0-9\u0980-\u09FF]/g, '_').substring(0, 40);
  await pptx.writeFile({ fileName: `${safeName}.pptx` });
}
