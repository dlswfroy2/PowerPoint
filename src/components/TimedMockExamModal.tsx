/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  Flag,
  RotateCcw,
  X,
  AlertCircle,
  BarChart2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { QuizQuestion } from '../types/presentation';
import { chapter8QuizQuestions } from '../data/chapter8QuizData';
import { chapter7QuizQuestions } from '../data/chapter7QuizData';
import { chapter6QuizQuestions } from '../data/chapter6QuizData';
import { chapter5QuizQuestions } from '../data/chapter5QuizData';

interface TimedMockExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSubject?: 'chemistry' | 'physics' | 'biology';
  activeChapter?: number;
}

export const TimedMockExamModal: React.FC<TimedMockExamModalProps> = ({
  isOpen,
  onClose,
  activeSubject = 'chemistry',
  activeChapter = 8
}) => {
  // Combine questions to provide a full 20-25 question test bank
  const allPool = [
    ...chapter8QuizQuestions,
    ...chapter7QuizQuestions,
    ...chapter6QuizQuestions,
    ...chapter5QuizQuestions
  ];

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<boolean[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60); // 25 minutes in seconds
  const [isExamCompleted, setIsExamCompleted] = useState<boolean>(false);
  const [durationOption, setDurationOption] = useState<number>(25); // 10 or 25 mins

  // Initialize exam questions when opened
  useEffect(() => {
    if (isOpen) {
      // Pick 20 questions
      const shuffled = [...allPool].sort(() => 0.5 - Math.random()).slice(0, 20);
      setQuestions(shuffled);
      setSelectedAnswers(new Array(shuffled.length).fill(null));
      setFlaggedQuestions(new Array(shuffled.length).fill(false));
      setCurrentIndex(0);
      setTimeLeft(durationOption * 60);
      setIsExamCompleted(false);
    }
  }, [isOpen, durationOption]);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isExamCompleted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsExamCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, isExamCompleted, timeLeft]);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (optionIdx: number) => {
    if (isExamCompleted) return;
    const updated = [...selectedAnswers];
    updated[currentIndex] = optionIdx;
    setSelectedAnswers(updated);
  };

  const toggleFlag = (idx: number) => {
    const updated = [...flaggedQuestions];
    updated[idx] = !updated[idx];
    setFlaggedQuestions(updated);
  };

  // Calculate score
  const correctCount = selectedAnswers.reduce<number>((acc, ans, idx) => {
    return ans === questions[idx]?.correctIndex ? (acc || 0) + 1 : (acc || 0);
  }, 0);
  const answeredCount = selectedAnswers.filter(a => a !== null).length;
  const scorePercent = questions.length > 0 ? Math.round(((correctCount || 0) / questions.length) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="flex h-[92vh] w-full max-w-5xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/40">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>রিয়েল-টাইম বোর্ড মক টেস্ট (Timed Mock Exam)</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-950 text-amber-300 border border-amber-800">
                  ২০ টি এমসিকিউ
                </span>
              </h2>
              <p className="text-xs text-slate-400">পরীক্ষার হলের পরিবেশে নির্দিষ্ট সময়ে প্রস্তুতি যাচাই</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Countdown Badge */}
            {!isExamCompleted && (
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono font-bold text-xs ${
                timeLeft < 300
                  ? 'bg-rose-950 text-rose-300 border-rose-500 animate-pulse'
                  : 'bg-slate-800 text-cyan-300 border-slate-700'
              }`}>
                <Clock className="h-3.5 w-3.5" />
                <span>বাকি সময়: {formatTime(timeLeft)}</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Exam Body */}
        {!isExamCompleted ? (
          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Question Card (3 Cols) */}
            <div className="lg:col-span-3 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs">
                  <span className="font-mono text-cyan-400 font-bold">
                    প্রশ্ন {currentIndex + 1} / {questions.length}
                  </span>
                  <div className="flex items-center gap-2">
                    {currentQ?.topic && (
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-mono text-[10px] border border-slate-800">
                        {currentQ.topic}
                      </span>
                    )}
                    <button
                      onClick={() => toggleFlag(currentIndex)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition ${
                        flaggedQuestions[currentIndex]
                          ? 'bg-amber-950 text-amber-300 border-amber-600'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <Flag className="h-3 w-3" />
                      <span>{flaggedQuestions[currentIndex] ? 'ফ্ল্যাগড' : 'রিভিউ রাখুন'}</span>
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed mb-6">
                  {currentQ?.question}
                </h3>

                {/* Options List */}
                <div className="space-y-2.5">
                  {currentQ?.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentIndex] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectAnswer(optIdx)}
                        className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm font-medium transition border flex items-center gap-3 ${
                          isSelected
                            ? 'bg-cyan-950/80 text-cyan-200 border-cyan-400 font-bold shadow-md'
                            : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs border ${
                          isSelected ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 text-xs font-bold text-slate-300 border border-slate-800 disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>আগের প্রশ্ন</span>
                </button>

                <button
                  onClick={() => setIsExamCompleted(true)}
                  className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-slate-950 font-bold text-xs shadow-md transition"
                >
                  পরীক্ষা সমাপ্ত করুন (Submit)
                </button>

                <button
                  disabled={currentIndex === questions.length - 1}
                  onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 text-xs font-bold text-slate-300 border border-slate-800 disabled:opacity-40"
                >
                  <span>পরের প্রশ্ন</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Question Palette Grid (1 Col) */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-300 block border-b border-slate-800 pb-2 mb-3">
                  প্রশ্ন প্যালেট (Question Palette)
                </span>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {questions.map((_, qIdx) => {
                    const isAnswered = selectedAnswers[qIdx] !== null;
                    const isFlagged = flaggedQuestions[qIdx];
                    const isCurrent = currentIndex === qIdx;
                    return (
                      <button
                        key={qIdx}
                        onClick={() => setCurrentIndex(qIdx)}
                        className={`h-8 rounded-lg text-xs font-mono font-bold transition border flex items-center justify-center relative ${
                          isCurrent
                            ? 'ring-2 ring-cyan-400 border-white text-white bg-slate-800'
                            : isAnswered
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {qIdx + 1}
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="text-[11px] space-y-1.5 text-slate-400 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-emerald-950 border border-emerald-700" />
                  <span>উত্তর দেওয়া হয়েছে ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-slate-900 border border-slate-800" />
                  <span>বাকি আছে ({questions.length - answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span>রিভিউ রাখা প্রশ্ন</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Result Summary & Analytics View */
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Score Hero Card */}
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center space-y-4">
              <Award className="h-12 w-12 text-amber-400 mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-white">মক টেস্ট ফলাফল ও পারফরম্যান্স রিপোর্ট</h3>
                <p className="text-xs text-slate-400 mt-1">সময় ব্যয়: {formatTime(durationOption * 60 - timeLeft)}</p>
              </div>

              <div className="flex items-center justify-center gap-6 pt-2">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
                  <span className="text-xs text-slate-400 block">মোট প্রাপ্ত নম্বর</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400">{correctCount} / {questions.length}</span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
                  <span className="text-xs text-slate-400 block">সঠিকতার হার (Accuracy)</span>
                  <span className="text-2xl font-bold font-mono text-cyan-400">{scorePercent}%</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const shuffled = [...allPool].sort(() => 0.5 - Math.random()).slice(0, 20);
                  setQuestions(shuffled);
                  setSelectedAnswers(new Array(shuffled.length).fill(null));
                  setFlaggedQuestions(new Array(shuffled.length).fill(false));
                  setCurrentIndex(0);
                  setTimeLeft(durationOption * 60);
                  setIsExamCompleted(false);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:brightness-110 shadow-md"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>পুনরায় মক টেস্ট দিন</span>
              </button>
            </div>

            {/* Questions Review with Explanations */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-300">প্রশ্নোত্তর ও বিশদ ব্যাখ্যা পর্যালোচনা:</h4>
              {questions.map((q, idx) => {
                const studentAns = selectedAnswers[idx];
                const isCorrect = studentAns === q.correctIndex;
                return (
                  <div key={idx} className={`p-4 rounded-xl border space-y-2 text-xs ${
                    isCorrect ? 'bg-emerald-950/20 border-emerald-800/60' : 'bg-rose-950/20 border-rose-800/60'
                  }`}>
                    <div className="flex items-start justify-between">
                      <span className="font-bold text-white">
                        {idx + 1}. {q.question}
                      </span>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold text-[11px]">
                          <CheckCircle2 className="h-3.5 w-3.5" /> সঠিক (+১)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-rose-400 font-bold text-[11px]">
                          <XCircle className="h-3.5 w-3.5" /> ভুল (০)
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                      <div className="p-2 bg-slate-900 rounded">
                        <span className="text-slate-400">আপনার উত্তর: </span>
                        <span className={isCorrect ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                          {studentAns !== null ? q.options[studentAns] : 'উত্তর দেননি'}
                        </span>
                      </div>
                      <div className="p-2 bg-slate-900 rounded">
                        <span className="text-slate-400">সঠিক উত্তর: </span>
                        <span className="text-emerald-400 font-bold">{q.options[q.correctIndex]}</span>
                      </div>
                    </div>

                    <div className="p-2 bg-slate-950 rounded text-slate-300 text-[10.5px]">
                      <span className="text-cyan-400 font-bold">ব্যাখ্যা: </span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
