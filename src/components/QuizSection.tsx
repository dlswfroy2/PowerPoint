/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { chapter1QuizQuestions } from '../data/chapter1QuizData';
import { chapter2QuizQuestions } from '../data/chapter2QuizData';
import { quizQuestions as chapter3Questions } from '../data/quizData';
import { chapter4QuizQuestions } from '../data/chapter4QuizData';
import { chapter5QuizQuestions } from '../data/chapter5QuizData';
import { chapter6QuizQuestions } from '../data/chapter6QuizData';
import { chapter7QuizQuestions } from '../data/chapter7QuizData';
import { chapter8QuizQuestions } from '../data/chapter8QuizData';
import { chapter9QuizQuestions } from '../data/chapter9QuizData';
import { chapter10QuizQuestions } from '../data/chapter10QuizData';
import { chapter11QuizQuestions } from '../data/chapter11QuizData';
import { chapter12QuizQuestions } from '../data/chapter12QuizData';
import { physicsChapter4QuizQuestions } from '../data/physicsChapter4QuizData';
import { physicsChapter5QuizQuestions } from '../data/physicsChapter5QuizData';
import { physicsChapter6QuizQuestions } from '../data/physicsChapter6QuizData';
import { physicsChapter7QuizQuestions } from '../data/physicsChapter7QuizData';
import { biologyChapter1QuizQuestions } from '../data/biologyChapter1QuizData';
import { biologyChapter2QuizQuestions } from '../data/biologyChapter2QuizData';
import { biologyChapter3QuizQuestions } from '../data/biologyChapter3QuizData';
import { biologyChapter4QuizQuestions } from '../data/biologyChapter4QuizData';
import { biologyChapter5QuizQuestions } from '../data/biologyChapter5QuizData';
import { biologyChapter6QuizQuestions } from '../data/biologyChapter6QuizData';
import { biologyChapter7QuizQuestions } from '../data/biologyChapter7QuizData';
import { biologyChapter8QuizQuestions } from '../data/biologyChapter8QuizData';
import { biologyChapter9QuizQuestions } from '../data/biologyChapter9QuizData';
import { biologyChapter10QuizQuestions } from '../data/biologyChapter10QuizData';
import { biologyChapter11QuizQuestions } from '../data/biologyChapter11QuizData';
import { biologyChapter12QuizQuestions } from '../data/biologyChapter12QuizData';
import { biologyChapter13QuizQuestions } from '../data/biologyChapter13QuizData';
import { biologyChapter14QuizQuestions } from '../data/biologyChapter14QuizData';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  HelpCircle, 
  BookOpen,
  Trophy,
  Timer,
  Clock,
  User,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Share2,
  Lock,
  Zap,
  Target
} from 'lucide-react';
import { 
  QuizLeaderboard, 
  saveLeaderboardRecord, 
  getLastStudentName,
  formatTimeDisplay,
  formatDurationBn,
  toBengaliNumber,
  getChapterName,
  getSubjectLabel
} from './QuizLeaderboard';
import {
  AchievementBadges,
  NewlyUnlockedBadgesBanner,
  checkAndUnlockBadges,
  loadUnlockedBadges,
  ALL_BADGE_DEFINITIONS,
  BadgeDefinition,
  UnlockedBadgeRecord
} from './AchievementBadges';

interface QuizSectionProps {
  activeChapter?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
  activeSubject?: 'chemistry' | 'physics' | 'biology';
}

export const QuizSection: React.FC<QuizSectionProps> = ({ 
  activeChapter = 1,
  activeSubject = 'chemistry'
}) => {
  const questions = 
    activeSubject === 'biology'
      ? (
        activeChapter === 1 ? biologyChapter1QuizQuestions :
        activeChapter === 2 ? biologyChapter2QuizQuestions :
        activeChapter === 3 ? biologyChapter3QuizQuestions :
        activeChapter === 4 ? biologyChapter4QuizQuestions :
        activeChapter === 5 ? biologyChapter5QuizQuestions :
        activeChapter === 6 ? biologyChapter6QuizQuestions :
        activeChapter === 7 ? biologyChapter7QuizQuestions :
        activeChapter === 8 ? biologyChapter8QuizQuestions :
        activeChapter === 9 ? biologyChapter9QuizQuestions :
        activeChapter === 10 ? biologyChapter10QuizQuestions :
        activeChapter === 11 ? biologyChapter11QuizQuestions :
        activeChapter === 12 ? biologyChapter12QuizQuestions :
        activeChapter === 13 ? biologyChapter13QuizQuestions :
        biologyChapter14QuizQuestions
      )
      : activeSubject === 'physics'
      ? (
        activeChapter === 4 ? physicsChapter4QuizQuestions : 
        activeChapter === 5 ? physicsChapter5QuizQuestions : 
        activeChapter === 6 ? physicsChapter6QuizQuestions : 
        physicsChapter7QuizQuestions
      )
      : (
        activeChapter === 1 ? chapter1QuizQuestions : 
        activeChapter === 2 ? chapter2QuizQuestions : 
        activeChapter === 3 ? chapter3Questions :
        activeChapter === 4 ? chapter4QuizQuestions :
        activeChapter === 5 ? chapter5QuizQuestions :
        activeChapter === 6 ? chapter6QuizQuestions :
        activeChapter === 7 ? chapter7QuizQuestions :
        activeChapter === 8 ? chapter8QuizQuestions :
        activeChapter === 9 ? chapter9QuizQuestions :
        activeChapter === 10 ? chapter10QuizQuestions :
        activeChapter === 11 ? chapter11QuizQuestions :
        chapter12QuizQuestions
      );

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  // View mode: 'quiz' | 'leaderboard' | 'badges'
  const [viewMode, setViewMode] = useState<'quiz' | 'leaderboard' | 'badges'>('quiz');

  // Timer & Leaderboard state
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [studentName, setStudentName] = useState<string>(() => getLastStudentName());
  const [hasSavedToLeaderboard, setHasSavedToLeaderboard] = useState<boolean>(false);
  const [savedEntryId, setSavedEntryId] = useState<string | null>(null);

  // Achievement Badges state
  const [unlockedBadgesMap, setUnlockedBadgesMap] = useState<Record<string, UnlockedBadgeRecord>>(() => loadUnlockedBadges());
  const [newlyUnlockedBadges, setNewlyUnlockedBadges] = useState<BadgeDefinition[]>([]);
  const [highlightBadgeId, setHighlightBadgeId] = useState<string | null>(null);

  // Timer effect
  useEffect(() => {
    let timerId: any = null;
    if (!isQuizCompleted && viewMode === 'quiz') {
      timerId = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isQuizCompleted, viewMode]);

  // Reset when chapter or subject changes
  useEffect(() => {
    setSelectedAnswers(new Array(questions.length).fill(null));
    setCurrentQuestionIdx(0);
    setShowExplanation(false);
    setIsQuizCompleted(false);
    setSecondsElapsed(0);
    setHasSavedToLeaderboard(false);
    setSavedEntryId(null);
    setNewlyUnlockedBadges([]);
    setViewMode('quiz');
    // Refresh badges
    setUnlockedBadgesMap(loadUnlockedBadges());
  }, [activeChapter, activeSubject, questions.length]);

  const currentQ = questions[currentQuestionIdx];
  const selectedAnswer = selectedAnswers[currentQuestionIdx];

  const handleSelectOption = (optIndex: number) => {
    if (selectedAnswer !== null) return; // Answer already submitted
    const updated = [...selectedAnswers];
    updated[currentQuestionIdx] = optIndex;
    setSelectedAnswers(updated);
    setShowExplanation(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const finalScore = calculateScore();
  const percentageScore = Math.round((finalScore / questions.length) * 100);

  // Handle completion check for achievement badges
  const handleCompleteQuiz = () => {
    setIsQuizCompleted(true);

    const formattedDate = new Intl.DateTimeFormat('bn-BD', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date());

    // Check and trigger badge unlocks
    const { newBadges, allUnlocked } = checkAndUnlockBadges({
      studentName: studentName.trim() || 'শিক্ষার্থী',
      subject: activeSubject,
      chapter: activeChapter,
      score: finalScore,
      totalQuestions: questions.length,
      percentage: percentageScore,
      timeSpentSeconds: Math.max(1, secondsElapsed),
      formattedDate
    });

    if (newBadges.length > 0) {
      setNewlyUnlockedBadges(newBadges);
      setUnlockedBadgesMap(allUnlocked);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      if (selectedAnswers[currentQuestionIdx + 1] !== null) {
        setShowExplanation(true);
      }
    } else {
      handleCompleteQuiz();
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers(new Array(questions.length).fill(null));
    setCurrentQuestionIdx(0);
    setShowExplanation(false);
    setIsQuizCompleted(false);
    setSecondsElapsed(0);
    setHasSavedToLeaderboard(false);
    setSavedEntryId(null);
    setNewlyUnlockedBadges([]);
    setViewMode('quiz');
  };

  const handleSaveScore = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = studentName.trim();
    if (!trimmed) return;

    const formattedDate = new Intl.DateTimeFormat('bn-BD', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date());

    const entry = saveLeaderboardRecord({
      studentName: trimmed,
      subject: activeSubject,
      chapter: activeChapter,
      score: finalScore,
      totalQuestions: questions.length,
      percentage: percentageScore,
      timeSpentSeconds: Math.max(1, secondsElapsed),
      timestamp: Date.now(),
      formattedDate
    });

    // Also update badges with student name
    const { allUnlocked } = checkAndUnlockBadges({
      studentName: trimmed,
      subject: activeSubject,
      chapter: activeChapter,
      score: finalScore,
      totalQuestions: questions.length,
      percentage: percentageScore,
      timeSpentSeconds: Math.max(1, secondsElapsed),
      formattedDate
    });
    setUnlockedBadgesMap(allUnlocked);

    setSavedEntryId(entry.id);
    setHasSavedToLeaderboard(true);
  };

  const chapterNames: Record<string, string> = {
    'chemistry-1': 'রসায়নের ধারণা',
    'chemistry-2': 'পদার্থের অবস্থা',
    'chemistry-3': 'পদার্থের গঠন',
    'chemistry-4': 'পর্যায় সারণি',
    'chemistry-5': 'রাসায়নিক বন্ধন',
    'chemistry-6': 'মোলের ধারণা ও রাসায়নিক গণনা',
    'chemistry-7': 'রাসায়নিক বিক্রিয়া',
    'chemistry-8': 'রসায়ন ও শক্তি',
    'chemistry-9': 'এসিড-ক্ষার সমতা',
    'chemistry-10': 'খনিজ সম্পদ: ধাতু ও অধাতু',
    'chemistry-11': 'খনিজ সম্পদ: জীবাশ্ম',
    'chemistry-12': 'আমাদের জীবনে রসায়ন',
    'physics-4': 'কাজ, ক্ষমতা ও শক্তি',
    'physics-5': 'পদার্থের অবস্থা ও চাপ',
    'physics-6': 'বস্তুর উপর তাপের প্রভাব',
    'physics-7': 'তরঙ্গ ও শব্দ',
    'biology-1': 'জীবন পাঠ',
    'biology-2': 'জীবকোষ ও টিস্যু',
    'biology-3': 'কোষ বিভাজন',
    'biology-4': 'জীবনীশক্তি',
    'biology-5': 'খাদ্য, পুষ্টি এবং পরিপাক',
    'biology-6': 'জীবে পরিবহন',
    'biology-7': 'গ্যাসীয় বিনিময়',
    'biology-8': 'রেচন প্রক্রিয়া',
    'biology-9': 'দৃঢ়তা প্রদান ও চলন',
    'biology-10': 'সমন্বয়',
    'biology-11': 'জীবের প্রজনন',
    'biology-12': 'জীবের বংশগতি ও বিবর্তন',
    'biology-13': 'জীবের পরিবেশ',
    'biology-14': 'জীবপ্রযুক্তি',
  };

  const subjectLabel = getSubjectLabel(activeSubject);
  const currentChapterTitle = chapterNames[`${activeSubject}-${activeChapter}`] || `অধ্যায় ${activeChapter}`;

  const unlockedCount = Object.keys(unlockedBadgesMap).length;
  const totalBadgesCount = ALL_BADGE_DEFINITIONS.length;

  // Chapter-specific badges
  const activeChapterBadges = useMemo(() => {
    return ALL_BADGE_DEFINITIONS.filter(
      (b) => b.targetSubject === activeSubject && b.targetChapter === activeChapter
    );
  }, [activeSubject, activeChapter]);

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-6 lg:p-8 space-y-6">
      {/* Quiz Top Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
            <span className="font-semibold text-cyan-400">মূল্যায়ন পরীক্ষা ও মেধা যাচাই</span>
            <span aria-hidden="true">·</span>
            <span>
              {subjectLabel} অধ্যায় {toBengaliNumber(activeChapter)}: {currentChapterTitle}
            </span>
            <span aria-hidden="true">·</span>
            <span>এসএসসি বোর্ড স্ট্যান্ডার্ড</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            অধ্যায়ভিত্তিক কুইজ ও দক্ষতা যাচাই ({currentChapterTitle})
          </h1>
          <p className="text-sm text-slate-300">
            বোর্ড প্রশ্ন সমাধান করুন, পারফেক্ট স্কোর ও দ্রুত সময় রেকর্ড গড়ে বিশেষ ব্যাজ আনলক করুন।
          </p>
        </div>

        {/* Global Navigation View Switchers */}
        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          {/* Quiz Button */}
          <button
            onClick={() => setViewMode('quiz')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm ${
              viewMode === 'quiz'
                ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>কুইজ</span>
          </button>

          {/* Achievement Badges Button */}
          <button
            onClick={() => setViewMode('badges')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg ${
              viewMode === 'badges'
                ? 'bg-amber-400 text-slate-950 shadow-amber-400/25 ring-2 ring-amber-300'
                : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 shadow-amber-500/10'
            }`}
          >
            <Award className="h-4 w-4 text-amber-400" />
            <span>অর্জন ব্যাজ</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400/20 text-[10px] font-mono text-amber-200 border border-amber-400/30">
              {toBengaliNumber(unlockedCount)}/{toBengaliNumber(totalBadgesCount)}
            </span>
          </button>

          {/* Leaderboard Button */}
          <button
            onClick={() => setViewMode('leaderboard')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-lg ${
              viewMode === 'leaderboard'
                ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            <Trophy className="h-4 w-4 text-amber-400" />
            <span>লিডারবোর্ড</span>
          </button>
        </div>
      </div>

      {/* VIEW: Achievement Badges Gallery */}
      {viewMode === 'badges' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setViewMode('quiz')}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              <span>কুইজে ফিরে যান</span>
            </button>
            <span className="text-xs text-slate-400">
              বর্তমান অধ্যায়: <strong className="text-cyan-400">{currentChapterTitle}</strong>
            </span>
          </div>

          <AchievementBadges
            currentSubject={activeSubject}
            currentChapter={activeChapter}
            highlightBadgeId={highlightBadgeId}
            onTakeQuizForBadge={(subj, chap) => {
              setViewMode('quiz');
              restartQuiz();
            }}
          />
        </div>
      ) : viewMode === 'leaderboard' ? (
        /* VIEW: Persistent Leaderboard */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setViewMode('quiz')}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              <span>কুইজে ফিরে যান</span>
            </button>
            <span className="text-xs text-slate-400">
              বর্তমান অধ্যায়: <strong className="text-cyan-400">{currentChapterTitle}</strong>
            </span>
          </div>
          <QuizLeaderboard
            currentSubject={activeSubject}
            currentChapter={activeChapter}
            highlightEntryId={savedEntryId}
            onRetakeQuiz={() => {
              setViewMode('quiz');
              restartQuiz();
            }}
          />
        </div>
      ) : !isQuizCompleted ? (
        /* VIEW: Active Quiz Running Screen */
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl space-y-6">
          {/* Quiz Top Progress Bar & Live Timer */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-cyan-400 font-bold">
                প্রশ্ন {toBengaliNumber(currentQuestionIdx + 1)} / {toBengaliNumber(questions.length)}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">
                {(currentQ as any).topic ? (
                  <>বিষয়: <strong className="text-slate-200">{(currentQ as any).topic}</strong></>
                ) : (
                  <strong className="text-slate-200">নৈর্ব্যক্তিক মূল্যায়ন</strong>
                )}
              </span>
            </div>

            {/* Live Stopwatch Timer Badge */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold shadow-inner">
                <Timer className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>সময়: {formatTimeDisplay(secondsElapsed)}</span>
              </div>
            </div>
          </div>

          {/* Progress Indicator line */}
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option: string, idx: number) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const hasAnswered = selectedAnswer !== null;

              let optionStyle = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900';

              if (hasAnswered) {
                if (isCorrect) {
                  optionStyle = 'border-emerald-500/80 bg-emerald-500/10 text-emerald-300 font-semibold';
                } else if (isSelected) {
                  optionStyle = 'border-rose-500/80 bg-rose-500/10 text-rose-300 font-semibold';
                } else {
                  optionStyle = 'border-slate-800 bg-slate-950/50 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-xs font-mono shrink-0">
                      {['ক', 'খ', 'গ', 'ঘ'][idx]}
                    </span>
                    <span>{option}</span>
                  </div>

                  {hasAnswered && (
                    <div>
                      {isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                      {isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-400" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Explanation Panel */}
          {showExplanation && (
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="h-4 w-4" />
                <span>সঠিক উত্তরের ব্যাখ্যা (Explanation):</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800 flex-wrap gap-2">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>
                বর্তমান স্কোর: <strong className="text-cyan-400 font-mono">{toBengaliNumber(calculateScore())}</strong>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 font-mono text-amber-400">
                <Clock className="h-3 w-3" />
                {formatTimeDisplay(secondsElapsed)}
              </span>
            </div>

            {selectedAnswer !== null && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition"
              >
                <span>{currentQuestionIdx < questions.length - 1 ? 'পরবর্তী প্রশ্ন' : 'ফলাফল ও মেডেল দেখুন'}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* VIEW: Quiz Completed Results & Achievement Badges Celebration Screen */
        <div className="space-y-8">
          {/* Newly Unlocked Badges Banner Notification */}
          {newlyUnlockedBadges.length > 0 && (
            <NewlyUnlockedBadgesBanner
              badges={newlyUnlockedBadges}
              onDismiss={() => setNewlyUnlockedBadges([])}
              onViewBadges={() => {
                setHighlightBadgeId(newlyUnlockedBadges[0].id);
                setViewMode('badges');
              }}
            />
          )}

          {/* Results Summary Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-6 md:p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
            {/* Top decorative badge */}
            <div className="inline-flex p-4 rounded-full bg-cyan-500/10 text-cyan-400 ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <Award className="h-12 w-12" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                কুইজ সম্পন্ন হয়েছে!
              </h2>
              <p className="text-slate-400 text-xs md:text-sm">
                আপনার ফলাফল, নির্ভুলতা এবং সম্পন্ন করার সময় নিচে প্রদর্শিত হলো:
              </p>
            </div>

            {/* Score & Time Badges */}
            <div className="flex flex-wrap justify-center items-center gap-4 py-2">
              {/* Score badge */}
              <div className="px-5 py-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-extrabold text-cyan-400 font-mono">
                  {toBengaliNumber(finalScore)}
                </span>
                <div className="text-left text-xs">
                  <span className="text-slate-500 font-mono block">/ {toBengaliNumber(questions.length)}</span>
                  <span className="text-cyan-300 font-semibold">{toBengaliNumber(percentageScore)}% নম্বর</span>
                </div>
              </div>

              {/* Time taken badge */}
              <div className="px-5 py-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <Timer className="h-7 w-7 text-emerald-400 shrink-0" />
                <div className="text-left text-xs">
                  <span className="text-slate-400 block">মোট সময়:</span>
                  <span className="text-emerald-300 font-mono font-bold text-base">
                    {formatTimeDisplay(secondsElapsed)} ({formatDurationBn(secondsElapsed)})
                  </span>
                </div>
              </div>
            </div>

            {/* Performance analysis message */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300">
              {percentageScore === 100 ? (
                <span className="text-amber-400 font-bold block leading-relaxed flex items-center justify-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  <span>পারফেক্ট স্কোর (১০০%)! এই অধ্যায়ে আপনার দক্ষতা অসাধারণ। বিশেষ ব্যাজ আনলক হয়েছে!</span>
                </span>
              ) : percentageScore >= 80 ? (
                <span className="text-emerald-400 font-semibold block leading-relaxed">
                  🎉 চমৎকার ফলাফল! অধ্যায়ের মৌলিক ধারণাগুলো আপনার আয়ত্তে রয়েছে।
                </span>
              ) : percentageScore >= 50 ? (
                <span className="text-amber-400 font-semibold block leading-relaxed">
                  👍 ভালো হয়েছে! স্লাইড ও ল্যাব রিভিশন দিয়ে ১০০% পারফেক্ট স্কোর ও দ্রুত সময়ের ব্যাজ অর্জন করুন।
                </span>
              ) : (
                <span className="text-rose-400 font-semibold block leading-relaxed">
                  📖 প্রস্তুতি আরো জোরদার করুন। স্লাইড এবং ল্যাবগুলো পুনরায় দেখে আবার পরীক্ষা দিন।
                </span>
              )}
            </div>

            {/* Unlocked Badges Preview / Status for this Chapter */}
            <div className="max-w-xl mx-auto p-5 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 text-left space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Award className="h-4 w-4 text-amber-400" />
                  <span>অধ্যায় ও মেধা অর্জন ব্যাজ (Badges Status)</span>
                </div>
                <button
                  onClick={() => setViewMode('badges')}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  <span>সব ব্যাজ দেখুন ({toBengaliNumber(unlockedCount)}/{toBengaliNumber(totalBadgesCount)})</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>

              {/* Show active chapter badges or speed record */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {activeChapterBadges.map((b) => {
                  const isUnlocked = !!unlockedBadgesMap[b.id];
                  return (
                    <div
                      key={b.id}
                      onClick={() => {
                        setHighlightBadgeId(b.id);
                        setViewMode('badges');
                      }}
                      className={`p-3 rounded-xl border cursor-pointer transition flex items-center gap-3 ${
                        isUnlocked
                          ? 'bg-amber-950/30 border-amber-500/40 text-amber-200 shadow-sm'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${isUnlocked ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-500'}`}>
                        {isUnlocked ? <Award className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                      </div>
                      <div className="min-w-0">
                        <strong className="text-xs font-bold text-white block truncate">{b.title}</strong>
                        <span className="text-[10px] text-slate-400 block truncate">
                          {isUnlocked ? '✅ আনলক হয়েছে!' : '🔒 ' + b.requirementBn}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Speedster 60s badge status */}
                {(() => {
                  const speedBadge = ALL_BADGE_DEFINITIONS.find((b) => b.id === 'speed_demon_60');
                  const isUnlocked = !!unlockedBadgesMap['speed_demon_60'];
                  if (!speedBadge) return null;
                  return (
                    <div
                      onClick={() => {
                        setHighlightBadgeId(speedBadge.id);
                        setViewMode('badges');
                      }}
                      className={`p-3 rounded-xl border cursor-pointer transition flex items-center gap-3 ${
                        isUnlocked
                          ? 'bg-rose-950/30 border-rose-500/40 text-rose-200 shadow-sm'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${isUnlocked ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-800 text-slate-500'}`}>
                        {isUnlocked ? <Timer className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                      </div>
                      <div className="min-w-0">
                        <strong className="text-xs font-bold text-white block truncate">{speedBadge.title}</strong>
                        <span className="text-[10px] text-slate-400 block truncate">
                          {isUnlocked ? '✅ অর্জিত (৬০ সে. রেকর্ড)' : '🔒 ৬০ সেকেন্ডের মধ্যে কুইজ সম্পন্ন'}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Save to Leaderboard Submission Form */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/30 text-left space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                <Trophy className="h-4 w-4" />
                <span>আপনার স্কোর ও সময় লিডারবোর্ডে সংরক্ষণ করুন</span>
              </div>

              {hasSavedToLeaderboard ? (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block font-bold">লিডারবোর্ডে সংরক্ষিত হয়েছে!</strong>
                    <span>নিচের লিডারবোর্ড তালিকায় আপনার অবস্থান হাইলাইট করা হয়েছে।</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSaveScore} className="space-y-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1.5 font-medium">
                      শিক্ষার্থীর নাম লিখুন:
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="যেমন: তানভীর আহমেদ"
                        required
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!studentName.trim()}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2"
                  >
                    <Trophy className="h-4 w-4" />
                    <span>লিডারবোর্ডে স্কোর যুক্ত করুন</span>
                  </button>
                </form>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={restartQuiz}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition"
              >
                <RotateCcw className="h-4 w-4" />
                <span>কুইজ পুনরায় শুরু করুন</span>
              </button>

              <button
                onClick={() => setViewMode('badges')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs shadow-lg transition"
              >
                <Award className="h-4 w-4" />
                <span>সমস্ত অর্জন ব্যাজ দেখুন</span>
              </button>
            </div>
          </div>

          {/* Persistent Live Leaderboard Component */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
              <Trophy className="h-4 w-4 text-amber-400" />
              <span>অধ্যায় ও সার্বিক লিডারবোর্ড রেকর্ড</span>
            </div>
            <QuizLeaderboard
              currentSubject={activeSubject}
              currentChapter={activeChapter}
              highlightEntryId={savedEntryId}
              onRetakeQuiz={restartQuiz}
            />
          </div>
        </div>
      )}
    </div>
  );
};
