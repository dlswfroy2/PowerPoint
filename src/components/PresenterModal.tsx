import React, { useState, useEffect } from 'react';
import { Slide } from '../types/presentation';
import { X, Clock, Play, Pause, RotateCcw, ChevronLeft, ChevronRight, FileText, Eye } from 'lucide-react';

interface PresenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
  currentSlideIndex: number;
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const PresenterModal: React.FC<PresenterModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  setCurrentSlideIndex
}) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const currentSlide = slides[currentSlideIndex];
  const nextSlide = currentSlideIndex < slides.length - 1 ? slides[currentSlideIndex + 1] : null;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isTimerRunning]);

  if (!isOpen) return null;

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="flex h-[90vh] w-full max-w-5xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Presenter Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <FileText className="h-4 w-4" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">প্রেজেন্টার ভিউ ও স্পিকার নোটস</h2>
              <p className="text-xs text-slate-400">ক্লাসরুম বা সেমিনারে উপস্থাপনের জন্য শিক্ষক নির্দেশিকা</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Presentation Stopwatch */}
            <div className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-slate-200">
              <Clock className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-mono text-sm font-bold">{formatTime(secondsElapsed)}</span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-slate-400 hover:text-white transition"
              >
                {isTimerRunning ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              </button>
              <button
                onClick={() => setSecondsElapsed(0)}
                className="text-slate-400 hover:text-white transition"
              >
                <RotateCcw className="h-3 w-3" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {/* Left Column: Speaker Notes & Delivery Tips (7 Cols) */}
          <div className="lg:col-span-7 p-6 overflow-y-auto space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-cyan-400 tracking-wider">
                চলতি স্লাইড {currentSlideIndex + 1} / {slides.length}
              </span>
              <h3 className="text-xl font-bold text-white">{currentSlide.title}</h3>
              <p className="text-sm text-slate-400">{currentSlide.subtitle}</p>
            </div>

            {/* Core Speaker Notes */}
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                <span>বক্তব্য রূপরেখা ও উপস্থাপন নির্দেশনা</span>
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                {currentSlide.speakerNotes}
              </p>
            </div>

            {/* Quick Talking Points Summary */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                মূল পয়েন্টের সারমর্ম
              </h4>
              <ul className="space-y-2">
                {currentSlide.keyPoints.map((kp, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-slate-300 flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-mono text-cyan-400 font-bold">{idx + 1}.</span>
                    <div>
                      <strong className="text-white block">{kp.heading}</strong>
                      <span className="text-slate-400">{kp.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Next Slide Preview & Direct Jump (5 Cols) */}
          <div className="lg:col-span-5 p-6 overflow-y-auto bg-slate-950/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5 text-cyan-400" />
                <span>পরবর্তী স্লাইডের প্রিভিউ</span>
              </h4>

              {nextSlide ? (
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 space-y-2">
                  <span className="text-xs font-mono text-cyan-400">স্লাইড {currentSlideIndex + 2}</span>
                  <h5 className="text-base font-bold text-white">{nextSlide.title}</h5>
                  <p className="text-xs text-slate-400 line-clamp-2">{nextSlide.subtitle}</p>
                  <p className="text-xs text-slate-300 pt-2 border-t border-slate-800 line-clamp-3">
                    {nextSlide.keyPoints[0]?.description}
                  </p>
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-800 p-6 text-center text-xs text-slate-500">
                  এটিই প্রেজেন্টেশনের সর্বশেষ স্লাইড।
                </div>
              )}
            </div>

            {/* Bottom Step Controls inside Presenter View */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentSlideIndex === 0}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-200 hover:bg-slate-800 disabled:opacity-40 transition"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>পূর্ববর্তী</span>
              </button>

              <button
                onClick={() => setCurrentSlideIndex((prev) => Math.min(slides.length - 1, prev + 1))}
                disabled={currentSlideIndex === slides.length - 1}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 disabled:opacity-40 transition"
              >
                <span>পরবর্তী</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
