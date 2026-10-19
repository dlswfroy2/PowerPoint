/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  FileText,
  X,
  Save,
  Trash2,
  BookOpen,
  CheckCircle2,
  Printer
} from 'lucide-react';

interface StudentNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSubject?: string;
  activeChapter?: number;
  currentSlideIndex?: number;
  slideTitle?: string;
}

export const StudentNotesModal: React.FC<StudentNotesModalProps> = ({
  isOpen,
  onClose,
  activeSubject = 'chemistry',
  activeChapter = 8,
  currentSlideIndex = 0,
  slideTitle = ''
}) => {
  const noteKey = `student_notes_${activeSubject}_ch${activeChapter}_slide${currentSlideIndex}`;
  const [noteContent, setNoteContent] = useState<string>('');
  const [saveStatus, setSaveStatus] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem(noteKey) || '';
      setNoteContent(saved);
      setSaveStatus(false);
    }
  }, [isOpen, noteKey]);

  if (!isOpen) return null;

  const handleSave = () => {
    localStorage.setItem(noteKey, noteContent);
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 2000);
  };

  const handleClear = () => {
    if (window.confirm('আপনি কি নিশ্চিত যে এই স্লাইডের নোটটি মুছে ফেলতে চান?')) {
      localStorage.removeItem(noteKey);
      setNoteContent('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="flex h-[75vh] w-full max-w-xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/40">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">আমার স্টাডি নোট (Student Notes)</h2>
              <p className="text-xs text-slate-400">
                স্লাইড {currentSlideIndex + 1}: {slideTitle || 'নির্বাচিত স্লাইড'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Editor Body */}
        <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
          <div className="flex-1 flex flex-col">
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="এই স্লাইডটির ওপর আপনার নিজস্ব প্রয়োজনীয় পয়েন্ট, পরীক্ষার টিপস বা শিক্ষক যা পড়িয়েছেন তা এখানে লিখে রাখুন..."
              className="w-full flex-1 p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-emerald-500 outline-none resize-none leading-relaxed font-sans"
            />
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-rose-950 text-xs text-rose-300 border border-slate-700 hover:border-rose-800 transition"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>মুছে ফেলুন</span>
            </button>

            <div className="flex items-center gap-3">
              {saveStatus && (
                <span className="flex items-center gap-1 text-emerald-400 text-xs font-mono font-bold">
                  <CheckCircle2 className="h-4 w-4" /> সংরক্ষিত হয়েছে!
                </span>
              )}
              <button
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold transition shadow-md"
              >
                <Save className="h-4 w-4" />
                <span>নোট সেভ করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
