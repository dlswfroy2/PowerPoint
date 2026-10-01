import React from 'react';
import { Slide } from '../types/presentation';
import { X, Layers } from 'lucide-react';

interface SlideIndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideIndexModal: React.FC<SlideIndexModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="flex h-[85vh] w-full max-w-5xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Layers className="h-4 w-4" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">সকল স্লাইডের সূচিপত্র</h2>
              <p className="text-xs text-slate-400">যেকোনো স্লাইডে সরাসরি যেতে ক্লিক করুন</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Slide Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                onSelectSlide(idx);
                onClose();
              }}
              className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between h-44 ${
                idx === currentSlideIndex
                  ? 'border-cyan-500 bg-cyan-950/40 ring-1 ring-cyan-500/50 shadow-lg'
                  : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span className="font-mono text-cyan-400 font-bold">স্লাইড {idx + 1}</span>
                  <span className="text-[11px] text-slate-400">{slide.category}</span>
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-2 mb-1">
                  {slide.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {slide.subtitle}
                </p>
              </div>

              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                <span>{slide.keyPoints.length}টি মূল বিষয়</span>
                {idx === currentSlideIndex && (
                  <span className="text-cyan-400 font-semibold text-xs">● সক্রিয় স্লাইড</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
