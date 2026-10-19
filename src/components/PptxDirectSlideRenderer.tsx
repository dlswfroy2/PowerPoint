import React from 'react';
import { Slide } from '../types/presentation';
import { Layers, Image as ImageIcon, Table as TableIcon, Sparkles, BookOpen } from 'lucide-react';

export type PowerPointAnimStyle = 'flyIn' | 'fadeZoom' | 'wipeLeft' | 'glowPop';

interface PptxDirectSlideRendererProps {
  slide: Slide;
  className?: string;
  isPresenterMode?: boolean;
  revealedCount?: number;
  autoRevealAll?: boolean;
  animationStyle?: PowerPointAnimStyle;
}

/**
 * Bulletproof, 100% Non-Overlapping PowerPoint Slide Renderer
 * with Authentic PowerPoint Step-by-Step Build Animations.
 * 
 * When in PowerPoint Show mode:
 * - Each key point, bullet line, and embedded image/table animates in
 *   sequentially on each click/spacebar press.
 * - Supports Fly-in, Zoom, Wipe, and Glow entrance animations.
 */
export const PptxDirectSlideRenderer: React.FC<PptxDirectSlideRendererProps> = ({
  slide,
  className = '',
  isPresenterMode = false,
  revealedCount,
  autoRevealAll = false,
  animationStyle = 'flyIn'
}) => {
  const rawPptx = slide.rawPptx;
  const bgColor = rawPptx?.backgroundColor || '#090D16';
  const bgImage = rawPptx?.backgroundImageUrl;

  const isTitleSlide = slide.id === 1 || (!slide.tableData && (!slide.gallery || slide.gallery.length === 0) && slide.keyPoints.length <= 1);
  const hasVisual = (slide.gallery && slide.gallery.length > 0) || slide.image || slide.tableData;

  // Animation CSS helper based on selected style
  const getAnimationClass = (isRevealed: boolean) => {
    if (!isRevealed) {
      switch (animationStyle) {
        case 'fadeZoom':
          return 'opacity-0 scale-90 pointer-events-none transition-all duration-300';
        case 'wipeLeft':
          return 'opacity-0 -translate-x-12 pointer-events-none transition-all duration-300';
        case 'glowPop':
          return 'opacity-0 scale-95 pointer-events-none transition-all duration-300';
        case 'flyIn':
        default:
          return 'opacity-0 translate-y-10 pointer-events-none transition-all duration-300';
      }
    }

    switch (animationStyle) {
      case 'fadeZoom':
        return 'opacity-100 scale-100 transition-all duration-500 ease-out';
      case 'wipeLeft':
        return 'opacity-100 translate-x-0 transition-all duration-450 ease-out';
      case 'glowPop':
        return 'opacity-100 scale-100 ring-2 ring-cyan-400/50 shadow-xl shadow-cyan-500/20 transition-all duration-450 ease-out';
      case 'flyIn':
      default:
        return 'opacity-100 translate-y-0 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)';
    }
  };

  // -------------------------------------------------------------
  // LAYOUT 1: Title / Cover Slide
  // -------------------------------------------------------------
  if (isTitleSlide) {
    const isSubtitleRevealed = autoRevealAll || revealedCount === undefined || revealedCount >= 1;
    const isDescriptionRevealed = autoRevealAll || revealedCount === undefined || revealedCount >= 2;

    return (
      <div 
        className={`relative w-full aspect-[16/9] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 select-none flex flex-col justify-between p-6 md:p-12 ${className}`}
        style={{
          backgroundColor: bgColor,
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Top Decorative Bar */}
        <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              {slide.category || 'পাওয়ারপয়েন্ট প্রেজেন্টেশন'}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            স্লাইড ১
          </span>
        </div>

        {/* Center Content (Title + Subtitle in separate flow containers) */}
        <div className="my-auto space-y-5 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight transition-all duration-500">
            {slide.title}
          </h1>

          {slide.subtitle && (
            <div className={`inline-block p-3.5 md:p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg max-w-2xl ${getAnimationClass(isSubtitleRevealed)}`}>
              <p className="text-base md:text-xl font-semibold text-cyan-300 leading-snug">
                {slide.subtitle}
              </p>
            </div>
          )}

          {slide.keyPoints.length > 0 && slide.keyPoints[0].description && (
            <p className={`text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl ${getAnimationClass(isDescriptionRevealed)}`}>
              {slide.keyPoints[0].description}
            </p>
          )}
        </div>

        {/* Bottom Footer Metadata */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>ডিজিটাল পাঠ সহায়তা ও প্রেজেন্টেশন</span>
          <span className="text-cyan-400 font-semibold">পাওয়ারপয়েন্ট শো</span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // LAYOUT 2: Content Slide (2-Column Grid with Sequential Build)
  // -------------------------------------------------------------
  const visualStepIdx = slide.keyPoints.length > 0 ? slide.keyPoints.length : 1;
  const isVisualRevealed = autoRevealAll || revealedCount === undefined || revealedCount >= visualStepIdx;

  return (
    <div 
      className={`relative w-full aspect-[16/9] min-h-[380px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 select-none flex flex-col justify-between p-5 md:p-8 ${className}`}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* 1. Header Row (Breadcrumb + Title + Subtitle) */}
      <div className="space-y-1.5 pb-3 border-b border-slate-800/80 shrink-0">
        <div className="flex items-center justify-between text-xs text-cyan-400 font-bold mb-1">
          <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/80 text-[11px]">
            {slide.category}
          </span>
          <span className="font-mono text-slate-400 text-[11px]">
            স্লাইড {slide.id}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
          {slide.title}
        </h2>

        {slide.subtitle && (
          <p className="text-xs md:text-sm text-cyan-300/90 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* 2. Body Grid: Content Cards (Left) + Visual/Table (Right) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 py-4 min-h-0 overflow-y-auto">
        {/* Left Column: Key Points (Animated line-by-line) */}
        <div className={`${hasVisual ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-3 overflow-y-auto pr-1`}>
          {slide.keyPoints.map((point, idx) => {
            const isPointRevealed = autoRevealAll || revealedCount === undefined || idx < revealedCount;
            return (
              <div 
                key={idx}
                className={`p-3.5 md:p-4 rounded-xl bg-slate-900/85 border border-slate-800 hover:border-slate-700 shadow-md ${getAnimationClass(isPointRevealed)}`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-black mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h3 className="text-sm md:text-base font-bold text-white leading-snug">
                      {point.heading}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {point.description}
                    </p>
                    {point.highlight && (
                      <div className="inline-block mt-1 px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[11px] font-semibold border border-cyan-800">
                        {point.highlight}
                      </div>
                    )}
                    {point.formula && (
                      <div className="inline-block mt-1 ml-1.5 px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 text-[11px] font-mono font-bold border border-amber-800">
                        {point.formula}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Visual / Table / Embedded Image (Animated) */}
        {hasVisual && (
          <div className={`lg:col-span-5 space-y-3 flex flex-col justify-start overflow-y-auto ${getAnimationClass(isVisualRevealed)}`}>
            {/* Embedded Picture from PPTX */}
            {slide.image && (
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 shadow-xl flex items-center justify-center max-h-[300px]">
                <img 
                  src={slide.image} 
                  alt={slide.imageCaption || 'পাওয়ারপয়েন্ট স্লাইড চিত্র'}
                  className="max-h-[280px] w-auto max-w-full object-contain rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Embedded Table from PPTX */}
            {slide.tableData && (
              <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 shadow-xl overflow-x-auto">
                {slide.tableData.caption && (
                  <h4 className="text-xs font-bold text-cyan-400 mb-2 flex items-center gap-1.5">
                    <TableIcon className="h-3.5 w-3.5" />
                    <span>{slide.tableData.caption}</span>
                  </h4>
                )}
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 bg-slate-800/80">
                      {slide.tableData.headers.map((h, hi) => (
                        <th key={hi} className="p-2 font-bold text-cyan-300 text-center">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {slide.tableData.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-slate-800/60 hover:bg-slate-800/40">
                        {row.map((cell, ci) => (
                          <td key={ci} className="p-2 text-slate-200 text-center">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Diagram Annotations / Callout (if present) */}
            {slide.callout && (
              <div className="rounded-xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/40 to-slate-900 p-4 shadow-xl space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{slide.callout.title}</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {slide.callout.content}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. Footer Speaker Notes */}
      {!isPresenterMode && slide.speakerNotes && (
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
          <div className="flex items-center gap-1.5 text-cyan-400 font-semibold truncate pr-2">
            <BookOpen className="h-3 w-3 shrink-0" />
            <span className="truncate">{slide.speakerNotes}</span>
          </div>
          <span className="shrink-0 text-slate-500">পাওয়ারপয়েন্ট নোটস</span>
        </div>
      )}
    </div>
  );
};
