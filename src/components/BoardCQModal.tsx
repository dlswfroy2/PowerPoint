/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  FileText,
  X,
  Printer,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { BOARD_CQ_QUESTIONS, BoardCQItem } from '../data/boardCQData';

interface BoardCQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: 'chemistry' | 'physics' | 'biology';
  initialChapter?: number;
}

export const BoardCQModal: React.FC<BoardCQModalProps> = ({
  isOpen,
  onClose,
  initialSubject = 'chemistry',
  initialChapter = 8
}) => {
  const [selectedSubject, setSelectedSubject] = useState<'chemistry' | 'physics' | 'biology'>(initialSubject);
  const [selectedChapter, setSelectedChapter] = useState<number>(initialChapter);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isOpen) {
      setSelectedSubject(initialSubject);
      setSelectedChapter(initialChapter);
    }
  }, [isOpen, initialSubject, initialChapter]);

  // Available chapters for the selected subject
  const availableChapters = useMemo(() => {
    const list = BOARD_CQ_QUESTIONS.filter(cq => cq.subject === selectedSubject);
    const map = new Map<number, string>();
    list.forEach(cq => {
      if (!map.has(cq.chapter)) {
        map.set(cq.chapter, cq.chapterTitle);
      }
    });
    return Array.from(map.entries()).map(([num, title]) => ({ num, title }));
  }, [selectedSubject]);

  if (!isOpen) return null;

  // Filter CQs by subject and chapter (0 means all chapters of the subject)
  const filteredCQs = BOARD_CQ_QUESTIONS.filter(
    cq => cq.subject === selectedSubject && (selectedChapter > 0 ? cq.chapter === selectedChapter : true)
  );

  const toggleAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="flex h-[92vh] w-full max-w-5xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/40">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>বোর্ড সৃজনশীল প্রশ্ন (CQ) ব্যাংক ও মডেল উত্তর</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800">
                  ৪ ধাপের পূর্ণাঙ্গ সমাধান
                </span>
              </h2>
              <p className="text-xs text-slate-400">বিগত শিক্ষাবোর্ডের প্রশ্নপত্র ও টপ স্কোরারদের লেখার আদর্শ কৌশল</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition"
              title="প্রিন্ট করুন"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">প্রিন্ট</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-slate-950/70 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold">বিষয়:</span>
            <select
              value={selectedSubject}
              onChange={(e) => {
                const newSubj = e.target.value as 'chemistry' | 'physics' | 'biology';
                setSelectedSubject(newSubj);
                const relevant = BOARD_CQ_QUESTIONS.filter(q => q.subject === newSubj);
                if (relevant.length > 0 && !relevant.some(q => q.chapter === selectedChapter)) {
                  setSelectedChapter(relevant[0].chapter);
                }
              }}
              className="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded-lg text-white font-bold outline-none"
            >
              <option value="chemistry">রসায়ন (Chemistry)</option>
              <option value="physics">পদার্থবিজ্ঞান (Physics)</option>
              <option value="biology">জীববিজ্ঞান (Biology)</option>
            </select>

            <span className="text-slate-400 font-bold ml-2">অধ্যায়:</span>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(parseInt(e.target.value, 10))}
              className="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded-lg text-white font-bold outline-none"
            >
              <option value={0}>সবগুলো অধ্যায় (All Chapters)</option>
              {availableChapters.map(ch => (
                <option key={ch.num} value={ch.num}>
                  অধ্যায় {ch.num}: {ch.title}
                </option>
              ))}
            </select>
          </div>

          <span className="text-[11px] text-cyan-300 font-mono">
            মোট সৃজনশীল পাওয়া গেছে: {filteredCQs.length} টি
          </span>
        </div>

        {/* CQ Content List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {filteredCQs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              এই অধ্যায়ের জন্য নির্বাচিত সৃজনশীল প্রশ্ন শীঘ্রই যোগ করা হবে।
            </div>
          ) : (
            filteredCQs.map((cq) => (
              <div key={cq.id} className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 shadow-lg">
                {/* Board Source Badge */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {cq.boardSource}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cq.chapterTitle}
                  </span>
                </div>

                {/* Stimulus (উদ্দীপক) */}
                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  <span className="font-bold text-cyan-400 block mb-1">উদ্দীপক:</span>
                  {cq.stimulus}
                </div>

                {/* 4-tier Questions */}
                <div className="space-y-3 pt-2">
                  {cq.questions.map((q) => {
                    const ansKey = `${cq.id}-${q.part}`;
                    const isRevealed = revealedAnswers[ansKey];
                    return (
                      <div key={q.part} className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-xs sm:text-sm text-white font-medium flex-1">
                            <span className="font-bold text-amber-400 mr-2 font-mono">({q.part})</span>
                            <span>{q.questionText}</span>
                            <span className="text-[11px] font-mono text-slate-400 ml-2">[{q.marks} নম্বর]</span>
                          </div>

                          <button
                            onClick={() => toggleAnswer(ansKey)}
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-cyan-300 flex items-center gap-1 border border-slate-700 shrink-0 transition"
                          >
                            <span>{isRevealed ? 'উত্তর লুকান' : 'মডেল উত্তর দেখুন'}</span>
                            {isRevealed ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                          </button>
                        </div>

                        {/* Model Answer Drawer */}
                        {isRevealed && (
                          <div className="p-4 bg-slate-950 rounded-xl border border-cyan-800/50 space-y-2 mt-2 text-xs sm:text-sm text-slate-200">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-xs">
                              <span className="font-bold text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                <span>টপ স্কোরার মডেল উত্তর:</span>
                              </span>
                              <span className="text-[10.5px] font-mono text-amber-300 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                                মার্কিং ক্রাইটেরিয়া: {q.markingCriteria}
                              </span>
                            </div>
                            <div className="whitespace-pre-line text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                              {q.modelAnswer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
