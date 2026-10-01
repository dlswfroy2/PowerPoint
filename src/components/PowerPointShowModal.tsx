import React, { useState, useEffect, useRef } from 'react';
import { Slide } from '../types/presentation';
import { PptxDirectSlideRenderer, PowerPointAnimStyle } from './PptxDirectSlideRenderer';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  PenTool, 
  Maximize2, 
  Minimize2, 
  Trash2, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Layers, 
  Volume2,
  VolumeX,
  Wand2,
  ArrowRight
} from 'lucide-react';

interface PowerPointShowModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
  currentSlideIndex: number;
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  subjectName?: string;
  chapterNumber?: number;
}

/**
 * Authentic, 100% PowerPoint-like Slide Show Modal
 * Features:
 * - Sequential Step-by-Step line and image builds on every click or spacebar
 * - Configurable PowerPoint Entrance Animations (Fly In, Zoom, Wipe, Glow)
 * - Click audio cue synthesized via Web Audio API (toggleable)
 * - Laser pointer & Live Annotations Pen
 * - Works identically for standard slides & uploaded .pptx files
 */
export const PowerPointShowModal: React.FC<PowerPointShowModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
  subjectName = 'বিজ্ঞান',
  chapterNumber = 1
}) => {
  const currentSlide = slides[currentSlideIndex];
  
  // Total steps calculation for this slide:
  // Points + Visual component (table, diagram, or image)
  const hasVisual = Boolean(currentSlide?.tableData || currentSlide?.image || currentSlide?.diagramAnnotations?.length);
  const totalPoints = currentSlide?.keyPoints ? currentSlide.keyPoints.length : 0;
  const maxSteps = totalPoints > 0 ? (hasVisual ? totalPoints + 1 : totalPoints) : 1;

  // Step-by-step reveal state (0 = Title only, 1 = First point, etc.)
  const [revealedCount, setRevealedCount] = useState<number>(0);
  const [autoRevealAll, setAutoRevealAll] = useState<boolean>(false);
  const [animationStyle, setAnimationStyle] = useState<PowerPointAnimStyle>('flyIn');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Tools: Laser Pointer & Pen
  const [activeTool, setActiveTool] = useState<'cursor' | 'laser' | 'pen'>('cursor');
  const [penColor, setPenColor] = useState<string>('#facc15'); // Yellow default
  const [penWidth, setPenWidth] = useState<number>(3);
  
  // Laser Pointer Position
  const [laserPos, setLaserPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  
  // Blank Screen modes: 'none' | 'black' | 'white'
  const [blankMode, setBlankMode] = useState<'none' | 'black' | 'white'>('none');

  // Controls overlay auto-hide
  const [showToolbar, setShowToolbar] = useState<boolean>(true);
  const toolbarTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Drawing Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Audio synthesizer for crisp PowerPoint reveal click sound
  const playRevealSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1100, audioCtx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.07);
    } catch {
      // Audio not permitted or supported
    }
  };

  // Reset revealed count when slide changes
  useEffect(() => {
    if (autoRevealAll) {
      setRevealedCount(maxSteps);
    } else {
      setRevealedCount(0); // Classic PowerPoint: starts with title, first click reveals first line!
    }
    clearCanvas();
  }, [currentSlideIndex, autoRevealAll, maxSteps]);

  // Handle Canvas Resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      }
    };
    if (isOpen) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Clear Canvas
  const clearCanvas = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  // Step advancement logic
  const handleNextStep = () => {
    if (blankMode !== 'none') {
      setBlankMode('none');
      return;
    }

    if (!autoRevealAll && revealedCount < maxSteps) {
      playRevealSound();
      setRevealedCount((prev) => prev + 1);
    } else {
      // All steps on current slide are complete -> advance to next slide
      if (currentSlideIndex < slides.length - 1) {
        setCurrentSlideIndex((prev) => prev + 1);
      }
    }
  };

  // Step backwards logic
  const handlePrevStep = () => {
    if (blankMode !== 'none') {
      setBlankMode('none');
      return;
    }

    if (!autoRevealAll && revealedCount > 0) {
      setRevealedCount((prev) => prev - 1);
    } else {
      // If at start of current slide -> go to previous slide
      if (currentSlideIndex > 0) {
        setCurrentSlideIndex((prev) => prev - 1);
      }
    }
  };

  // Keyboard navigation for authentic PowerPoint behavior
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape -> close
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // 'B' or 'b' -> toggle blackout
      if (e.key === 'b' || e.key === 'B') {
        setBlankMode((prev) => (prev === 'black' ? 'none' : 'black'));
        return;
      }

      // 'W' or 'w' -> toggle whiteboard
      if (e.key === 'w' || e.key === 'W') {
        setBlankMode((prev) => (prev === 'white' ? 'none' : 'white'));
        return;
      }

      // 'L' or 'l' -> toggle laser pointer
      if (e.key === 'l' || e.key === 'L') {
        setActiveTool((prev) => (prev === 'laser' ? 'cursor' : 'laser'));
        return;
      }

      // 'P' or 'p' -> toggle pen tool
      if (e.key === 'p' || e.key === 'P') {
        setActiveTool((prev) => (prev === 'pen' ? 'cursor' : 'pen'));
        return;
      }

      // 'A' or 'a' -> toggle auto reveal all
      if (e.key === 'a' || e.key === 'A') {
        setAutoRevealAll((prev) => !prev);
        return;
      }

      // Advance step / slide: Space, Enter, RightArrow, DownArrow, PageDown
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextStep();
        return;
      }

      // Go back step / slide: LeftArrow, UpArrow, PageUp, Backspace
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        handlePrevStep();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlideIndex, revealedCount, autoRevealAll, blankMode, maxSteps]);

  // Mouse move handler for laser pointer & auto-hiding toolbar
  const handleMouseMove = (e: React.MouseEvent) => {
    setLaserPos({ x: e.clientX, y: e.clientY });

    // Show toolbar and reset hide timer
    setShowToolbar(true);
    if (toolbarTimeoutRef.current) {
      clearTimeout(toolbarTimeoutRef.current);
    }
    toolbarTimeoutRef.current = setTimeout(() => {
      setShowToolbar(false);
    }, 4000);
  };

  // Drawing Canvas Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeTool !== 'pen') return;
    setIsDrawing(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      lastPointRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || activeTool !== 'pen' || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    const rect = canvasRef.current.getBoundingClientRect();
    if (!ctx || !rect || !lastPointRef.current) return;

    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    lastPointRef.current = { x: currentX, y: currentY };
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    lastPointRef.current = null;
  };

  if (!isOpen) return null;

  // Animation CSS helper for standard slides
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

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col bg-black text-slate-100 select-none overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        cursor: activeTool === 'laser' || activeTool === 'pen' ? 'none' : 'default'
      }}
    >
      {/* Laser Pointer Dot */}
      {activeTool === 'laser' && (
        <div 
          className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
          style={{ left: laserPos.x, top: laserPos.y }}
        >
          <div className="h-4 w-4 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444] animate-pulse" />
          <div className="h-8 w-8 -translate-x-2 -translate-y-2 rounded-full border border-red-400/50" />
        </div>
      )}

      {/* Pen Drawing Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className={`absolute inset-0 z-30 w-full h-full ${
          activeTool === 'pen' ? 'pointer-events-auto cursor-crosshair' : 'pointer-events-none'
        }`}
      />

      {/* Blank Screen Overlays */}
      {blankMode === 'black' && (
        <div 
          onClick={() => setBlankMode('none')}
          className="absolute inset-0 z-40 bg-black cursor-pointer flex items-center justify-center text-slate-800 text-sm"
        >
          ব্ল্যাক স্ক্রিন সক্রিয় (যেকোনো কি বা ক্লিক করুন)
        </div>
      )}
      {blankMode === 'white' && (
        <div 
          onClick={() => setBlankMode('none')}
          className="absolute inset-0 z-40 bg-white cursor-pointer flex items-center justify-center text-slate-300 text-sm"
        >
          হোয়াইট স্ক্রিন সক্রিয় (যেকোনো কি বা ক্লিক করুন)
        </div>
      )}

      {/* Fixed Top Header Row (Never clipped, always visible at the very top) */}
      <div className="shrink-0 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-md px-4 md:px-8 py-3 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            {currentSlide.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {subjectName} · {currentSlide.chapter ? `অধ্যায় ${currentSlide.chapter}` : ''}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800 font-bold">
            স্লাইড {currentSlideIndex + 1} / {slides.length}
          </span>
          <button
            onClick={onClose}
            title="স্লাইডশো বন্ধ করুন (Esc)"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Presentation Stage (Scrolls naturally from top, never clipping) */}
      <div 
        className="flex-1 w-full overflow-y-auto px-4 md:px-12 py-6 pb-28 relative z-10"
        onClick={(e) => {
          // If clicking background while cursor tool is active, advance step
          if (activeTool === 'cursor' && (e.target as HTMLElement).tagName !== 'BUTTON' && (e.target as HTMLElement).tagName !== 'SELECT') {
            handleNextStep();
          }
        }}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col justify-start">
        {/* ------------------------------------------------------------- */}
        {/* 1. If custom uploaded PowerPoint slide -> Render with Animation */}
        {/* ------------------------------------------------------------- */}
        {currentSlide.rawPptx ? (
          <div className="flex-1 flex flex-col items-center justify-center p-1 min-h-0 w-full">
            <PptxDirectSlideRenderer 
              slide={currentSlide} 
              isPresenterMode={true}
              revealedCount={revealedCount}
              autoRevealAll={autoRevealAll}
              animationStyle={animationStyle}
              className="max-h-[75vh] w-full max-w-6xl mx-auto shadow-2xl"
            />

            {/* Click to Reveal Guidance Prompt */}
            {!autoRevealAll && revealedCount < maxSteps && (
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs text-cyan-300 animate-pulse">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>
                  {revealedCount === 0 
                    ? '১ম পয়েন্ট উন্মোচন করতে স্পেস (Space) বা ক্লিক করুন' 
                    : `পরবর্তী পয়েন্ট উন্মোচন করুন (${revealedCount} / ${maxSteps})`}
                </span>
              </div>
            )}
            {!autoRevealAll && revealedCount >= maxSteps && (
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-300">
                <span>স্লাইড সম্পূর্ণ! পরবর্তী স্লাইডে যেতে ক্লিক বা স্পেস চাপুন ➔</span>
              </div>
            )}
          </div>
        ) : (
          /* ------------------------------------------------------------- */
          /* 2. Standard Curriculum Slides (Chemistry, Physics, Biology)    */
          /* ------------------------------------------------------------- */
          <>
            {/* Slide Title & Subtitle */}
            <div className="space-y-1.5 mb-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {currentSlide.title}
              </h1>
              {currentSlide.subtitle && (
                <p className="text-base md:text-xl text-cyan-300 font-medium">
                  {currentSlide.subtitle}
                </p>
              )}
            </div>

            {/* Slide Body: 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Key Points (Animated Line-by-Line) */}
              <div className="lg:col-span-7 space-y-4">
                {currentSlide.keyPoints.map((point, idx) => {
                  const isRevealed = autoRevealAll || idx < revealedCount;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border bg-slate-900/80 border-slate-700/80 shadow-lg ${getAnimationClass(isRevealed)}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-black mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="space-y-1">
                          <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                            {point.heading}
                          </h3>
                          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                            {point.description}
                          </p>
                          {point.highlight && (
                            <div className="inline-block mt-1 px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
                              {point.highlight}
                            </div>
                          )}
                          {point.formula && (
                            <div className="inline-block mt-1 ml-1.5 px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 text-xs font-mono font-bold border border-amber-800">
                              {point.formula}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Guidance Prompt */}
                {!autoRevealAll && revealedCount < maxSteps && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 italic pt-2">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                    <span>
                      {revealedCount === 0 
                        ? '১ম পয়েন্ট উন্মোচন করতে স্পেস (Space) বা ক্লিক করুন' 
                        : `পরবর্তী পয়েন্ট উন্মোচন করুন (${revealedCount} / ${maxSteps})`}
                    </span>
                  </div>
                )}
                {!autoRevealAll && revealedCount >= maxSteps && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-2">
                    <span>স্লাইড সম্পূর্ণ! পরবর্তী স্লাইডে যেতে ক্লিক বা স্পেস চাপুন ➔</span>
                  </div>
                )}
              </div>

              {/* Right Column: Visual / Table / Annotations (Animated) */}
              <div className="lg:col-span-5 space-y-4">
                {(() => {
                  const visualStep = totalPoints > 0 ? totalPoints : 0;
                  const isVisualRevealed = autoRevealAll || revealedCount > visualStep;

                  return (
                    <div className={getAnimationClass(isVisualRevealed)}>
                      {currentSlide.tableData ? (
                        <div className="rounded-xl border border-slate-700 bg-slate-900/90 p-4 shadow-xl overflow-x-auto">
                          {currentSlide.tableData.caption && (
                            <h4 className="text-xs font-bold text-cyan-400 mb-2.5">
                              {currentSlide.tableData.caption}
                            </h4>
                          )}
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="border-b border-slate-700 bg-slate-800/80">
                                {currentSlide.tableData.headers.map((h, hi) => (
                                  <th key={hi} className="p-2 font-bold text-cyan-300 text-center">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {currentSlide.tableData.rows.map((row, ri) => (
                                <tr key={ri} className="border-b border-slate-800/60 hover:bg-slate-800/40">
                                  {row.map((cell, ci) => (
                                    <td key={ci} className="p-2 text-slate-200 text-center">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : currentSlide.diagramAnnotations && currentSlide.diagramAnnotations.length > 0 ? (
                        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-2.5 shadow-xl">
                          <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 border-b border-slate-800 pb-2">
                            <Layers className="h-4 w-4" />
                            <span>গুরুত্বপূর্ণ অঙ্গ ও অংশের পরিচিতি</span>
                          </h4>
                          <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                            {currentSlide.diagramAnnotations.slice(0, 5).map((anno, ai) => (
                              <div key={ai} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                                <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                                  <span>{anno.labelBn}</span>
                                  <span className="text-[11px] font-mono text-cyan-400">{anno.symbol || anno.labelEn}</span>
                                </div>
                                <p className="text-[11px] text-slate-300 leading-snug">{anno.detailBn}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : currentSlide.image ? (
                        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 shadow-xl flex items-center justify-center max-h-[340px]">
                          <img 
                            src={currentSlide.image} 
                            alt={currentSlide.imageCaption || 'স্লাইড চিত্র'}
                            className="max-h-[320px] w-auto max-w-full object-contain rounded-lg shadow-md"
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })()}
              </div>
            </div>
          </>
        )}
        </div>
      </div>

      {/* ============================================================= */}
      {/* FLOATING POWERPOINT TOOLBAR (Bottom overlay, auto-hiding)    */}
      {/* ============================================================= */}
      <div 
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
          showToolbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-md">
          {/* Step Back / Prev Slide */}
          <button
            onClick={handlePrevStep}
            title="পূর্ববর্তী ধাপ বা স্লাইড (Left Arrow / Backspace)"
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Slide Indicator & Step Progress */}
          <div className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-center min-w-[130px]">
            <span className="font-bold text-white">
              {currentSlideIndex + 1} / {slides.length}
            </span>
            <span className="text-cyan-400 ml-2">
              (ধাপ {revealedCount}/{maxSteps})
            </span>
          </div>

          {/* Advance Step / Next Slide */}
          <button
            onClick={handleNextStep}
            title="পরবর্তী ধাপ বা স্লাইড (Space / Click / Right Arrow)"
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition"
          >
            <span>পরবর্তী</span>
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="h-5 w-[1px] bg-slate-700 mx-1" />

          {/* Animation Style Selector */}
          <div className="flex items-center gap-1">
            <select
              value={animationStyle}
              onChange={(e) => setAnimationStyle(e.target.value as PowerPointAnimStyle)}
              title="পাওয়ারপয়েন্ট অ্যানিমেশন ইফেক্ট বেছে নিন"
              className="bg-slate-950 border border-slate-700 rounded-lg text-xs text-cyan-300 font-semibold px-2 py-1 outline-none cursor-pointer"
            >
              <option value="flyIn">🚀 উড়ে আসা (Fly In)</option>
              <option value="fadeZoom">✨ জুম ইন (Zoom In)</option>
              <option value="wipeLeft">➡️ ওয়াইপ (Wipe Left)</option>
              <option value="glowPop">🌟 পপ ও গ্লো (Glow Pop)</option>
            </select>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'সাউন্ড ইফেক্ট বন্ধ করুন' : 'সাউন্ড ইফেক্ট চালু করুন'}
            className={`p-2 rounded-xl transition ${
              soundEnabled ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800' : 'text-slate-400 hover:text-white'
            }`}
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>

          {/* Auto Reveal All Toggle */}
          <button
            onClick={() => setAutoRevealAll(!autoRevealAll)}
            title={autoRevealAll ? 'ধাপে ধাপে উন্মোচন করুন' : 'সবগুলো একসাথে দেখান'}
            className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition ${
              autoRevealAll 
                ? 'bg-amber-500 text-slate-950 font-bold' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700'
            }`}
          >
            {autoRevealAll ? 'একসাথে' : 'ধাপে ধাপে'}
          </button>

          <div className="h-5 w-[1px] bg-slate-700 mx-1" />

          {/* Laser Pointer */}
          <button
            onClick={() => setActiveTool(activeTool === 'laser' ? 'cursor' : 'laser')}
            title="লেজার পয়েন্টার (L)"
            className={`p-2 rounded-xl transition ${
              activeTool === 'laser' 
                ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-sm' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <div className="h-4 w-4 rounded-full bg-red-500 border border-white" />
          </button>

          {/* Pen Tool */}
          <button
            onClick={() => setActiveTool(activeTool === 'pen' ? 'cursor' : 'pen')}
            title="পেন টুল দিয়ে স্লাইডে আঁকুন (P)"
            className={`p-2 rounded-xl transition ${
              activeTool === 'pen' 
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <PenTool className="h-4 w-4" />
          </button>

          {activeTool === 'pen' && (
            <>
              {/* Color choices */}
              <div className="flex items-center gap-1">
                {['#facc15', '#ef4444', '#10b981', '#38bdf8'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setPenColor(c)}
                    style={{ backgroundColor: c }}
                    className={`h-4 w-4 rounded-full transition ${penColor === c ? 'ring-2 ring-white scale-110' : 'opacity-70'}`}
                  />
                ))}
              </div>

              {/* Clear Canvas */}
              <button
                onClick={clearCanvas}
                title="আঁকা মুছে ফেলুন"
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 transition"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Exit Show */}
          <button
            onClick={onClose}
            title="স্লাইডশো শেষ করুন (Esc)"
            className="p-2 rounded-xl text-rose-400 hover:text-white hover:bg-rose-950/60 transition ml-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
