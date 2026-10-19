import React, { useState, useEffect } from 'react';
import { Slide } from '../types/presentation';
import { X, Save, RotateCcw, Edit3 } from 'lucide-react';

interface SlideEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: Slide;
  slideIndex: number;
  totalSlides: number;
  onSave: (updated: Slide) => void;
  onResetOriginal?: () => void;
  isEdited?: boolean;
}

export const SlideEditModal: React.FC<SlideEditModalProps> = ({
  isOpen,
  onClose,
  slide,
  slideIndex,
  totalSlides,
  onSave,
  onResetOriginal,
  isEdited = false,
}) => {
  const [title, setTitle] = useState(slide.title);
  const [subtitle, setSubtitle] = useState(slide.subtitle);
  const [category, setCategory] = useState(slide.category);
  const [speakerNotes, setSpeakerNotes] = useState(slide.speakerNotes || '');

  useEffect(() => {
    setTitle(slide.title);
    setSubtitle(slide.subtitle);
    setCategory(slide.category);
    setSpeakerNotes(slide.speakerNotes || '');
  }, [slide]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({
      ...slide,
      title,
      subtitle,
      category,
      speakerNotes,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm select-none animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Edit3 className="h-5 w-5 text-cyan-400" />
            <span>স্লাইড সম্পাদনা করুন (স্লাইড {slideIndex + 1}/{totalSlides})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              স্লাইড শিরোনাম (Title):
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              উপ-শিরোনাম (Subtitle):
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              ক্যাটাগরি / বিষয়বস্তু (Category):
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              বক্তা নোটস / টিপস (Speaker Notes):
            </label>
            <textarea
              rows={3}
              value={speakerNotes}
              onChange={(e) => setSpeakerNotes(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 transition resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <div>
            {isEdited && onResetOriginal && (
              <button
                onClick={() => {
                  onResetOriginal();
                  onClose();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>মূল অবস্থায় ফেরত যান</span>
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              বাতিল
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow-md transition"
            >
              <Save className="h-4 w-4" />
              <span>সংরক্ষণ করুন</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
