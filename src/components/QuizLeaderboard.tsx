/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Timer, 
  Medal, 
  Clock, 
  User, 
  Trash2, 
  Flame, 
  TrendingUp, 
  Sparkles, 
  Filter, 
  ArrowUpDown, 
  RotateCcw,
  Search,
  CheckCircle2,
  Calendar,
  Award
} from 'lucide-react';

export interface LeaderboardEntry {
  id: string;
  studentName: string;
  subject: 'chemistry' | 'physics' | 'biology';
  chapter: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  timestamp: number;
  formattedDate: string;
}

const STORAGE_KEY = 'ssc_quiz_leaderboard_records_v1';
const LAST_NAME_KEY = 'ssc_quiz_last_student_name';

export const toBengaliNumber = (num: number | string): string => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (w) => bengaliDigits[+w] || w);
};

export const formatTimeDisplay = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  return `${pad(mins)}:${pad(secs)}`;
};

export const formatDurationBn = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) {
    return `${toBengaliNumber(secs)} সেকেন্ড`;
  }
  if (secs === 0) {
    return `${toBengaliNumber(mins)} মিনিট`;
  }
  return `${toBengaliNumber(mins)} মি. ${toBengaliNumber(secs)} সে.`;
};

export const getChapterName = (subject: 'chemistry' | 'physics' | 'biology', chapter: number): string => {
  const map: Record<string, string> = {
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
  return map[`${subject}-${chapter}`] || `অধ্যায় ${chapter}`;
};

export const getSubjectLabel = (subject: 'chemistry' | 'physics' | 'biology'): string => {
  if (subject === 'biology') return 'জীববিজ্ঞান';
  if (subject === 'physics') return 'পদার্থবিজ্ঞান';
  return 'রসায়ন';
};

// Seed records to inspire students if empty
const DEFAULT_SEED_RECORDS: LeaderboardEntry[] = [
  {
    id: 'seed-1',
    studentName: 'তানভীর আহমেদ',
    subject: 'chemistry',
    chapter: 1,
    score: 10,
    totalQuestions: 10,
    percentage: 100,
    timeSpentSeconds: 68,
    timestamp: Date.now() - 3600000 * 2,
    formattedDate: 'আজ, দুপুর ১২:১৫'
  },
  {
    id: 'seed-2',
    studentName: 'সুমাইয়া আক্তার',
    subject: 'chemistry',
    chapter: 1,
    score: 10,
    totalQuestions: 10,
    percentage: 100,
    timeSpentSeconds: 84,
    timestamp: Date.now() - 3600000 * 4,
    formattedDate: 'আজ, সকাল ১০:৩০'
  },
  {
    id: 'seed-3',
    studentName: 'আবির হাসান',
    subject: 'chemistry',
    chapter: 1,
    score: 9,
    totalQuestions: 10,
    percentage: 90,
    timeSpentSeconds: 72,
    timestamp: Date.now() - 3600000 * 8,
    formattedDate: 'গতকাল, রাত ৮:০০'
  },
  {
    id: 'seed-4',
    studentName: 'ফারিয়া জাহান',
    subject: 'physics',
    chapter: 4,
    score: 10,
    totalQuestions: 10,
    percentage: 100,
    timeSpentSeconds: 79,
    timestamp: Date.now() - 3600000 * 12,
    formattedDate: 'গতকাল, বিকাল ৪:২০'
  },
  {
    id: 'seed-5',
    studentName: 'নাবিল মাহমুদ',
    subject: 'biology',
    chapter: 1,
    score: 10,
    totalQuestions: 10,
    percentage: 100,
    timeSpentSeconds: 95,
    timestamp: Date.now() - 3600000 * 18,
    formattedDate: 'গতকাল, দুপুর ১:১০'
  }
];

export const loadLeaderboardRecords = (): LeaderboardEntry[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Initialize with seed records
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SEED_RECORDS));
      return DEFAULT_SEED_RECORDS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return DEFAULT_SEED_RECORDS;
  } catch (e) {
    console.warn('Failed to read leaderboard from localStorage', e);
    return DEFAULT_SEED_RECORDS;
  }
};

export const saveLeaderboardRecord = (record: Omit<LeaderboardEntry, 'id'>): LeaderboardEntry => {
  const newEntry: LeaderboardEntry = {
    ...record,
    id: `entry-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`
  };
  try {
    const existing = loadLeaderboardRecords();
    const updated = [newEntry, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // also cache last used student name
    if (record.studentName.trim()) {
      localStorage.setItem(LAST_NAME_KEY, record.studentName.trim());
    }
  } catch (e) {
    console.warn('Failed to save to localStorage', e);
  }
  return newEntry;
};

export const getLastStudentName = (): string => {
  try {
    return localStorage.getItem(LAST_NAME_KEY) || '';
  } catch {
    return '';
  }
};

interface QuizLeaderboardProps {
  currentSubject?: 'chemistry' | 'physics' | 'biology';
  currentChapter?: number;
  highlightEntryId?: string | null;
  onRetakeQuiz?: () => void;
  compact?: boolean;
}

export const QuizLeaderboard: React.FC<QuizLeaderboardProps> = ({
  currentSubject = 'chemistry',
  currentChapter = 1,
  highlightEntryId = null,
  onRetakeQuiz,
  compact = false
}) => {
  const [records, setRecords] = useState<LeaderboardEntry[]>(() => loadLeaderboardRecords());
  const [scopeFilter, setScopeFilter] = useState<'current' | 'all'>('current');
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'chemistry' | 'physics' | 'biology'>('all');
  const [sortBy, setSortBy] = useState<'rank' | 'recent' | 'time'>('rank');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  // Sync reload
  const reloadRecords = () => {
    setRecords(loadLeaderboardRecords());
  };

  const handleClearAll = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      setRecords([]);
      setShowClearConfirm(false);
    } catch (e) {
      console.warn('Error clearing leaderboard', e);
    }
  };

  const handleResetToSeeds = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SEED_RECORDS));
      setRecords(DEFAULT_SEED_RECORDS);
    } catch (e) {
      console.warn('Error resetting leaderboard', e);
    }
  };

  // Filtered and Sorted entries
  const processedRecords = useMemo(() => {
    let list = [...records];

    // Filter by scope
    if (scopeFilter === 'current') {
      list = list.filter(r => r.subject === currentSubject && r.chapter === currentChapter);
    } else if (subjectFilter !== 'all') {
      list = list.filter(r => r.subject === subjectFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(r => 
        r.studentName.toLowerCase().includes(q) ||
        getChapterName(r.subject, r.chapter).toLowerCase().includes(q)
      );
    }

    // Sorting
    list.sort((a, b) => {
      if (sortBy === 'recent') {
        return b.timestamp - a.timestamp;
      }
      if (sortBy === 'time') {
        // purely fastest completion time
        return a.timeSpentSeconds - b.timeSpentSeconds;
      }
      // Default: 'rank' -> highest score first; if equal, fastest time first
      if (b.percentage !== a.percentage) {
        return b.percentage - a.percentage;
      }
      if (a.timeSpentSeconds !== b.timeSpentSeconds) {
        return a.timeSpentSeconds - b.timeSpentSeconds;
      }
      return b.timestamp - a.timestamp;
    });

    return list;
  }, [records, scopeFilter, currentSubject, currentChapter, subjectFilter, searchQuery, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    const list = processedRecords;
    if (list.length === 0) return { totalAttempts: 0, highestScore: 0, fastestTime: 0, avgScore: 0 };
    const totalAttempts = list.length;
    const highestScore = Math.max(...list.map(r => r.percentage));
    const fastestTime = Math.min(...list.map(r => r.timeSpentSeconds));
    const avgScore = Math.round(list.reduce((acc, r) => acc + r.percentage, 0) / totalAttempts);
    return { totalAttempts, highestScore, fastestTime, avgScore };
  }, [processedRecords]);

  const top3 = processedRecords.slice(0, 3);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 md:p-7 shadow-2xl space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>শিক্ষার্থী লিডারবোর্ড ও শীর্ষ মেধাতালিকা</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-normal">
                  LocalStorage সংরক্ষিত
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                শীর্ষ স্কোর এবং দ্রুততম সময়ের ভিত্তিতে স্বয়ংক্রিয় মেধা ক্রমবিন্যাস
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {records.length === 0 ? (
            <button
              onClick={handleResetToSeeds}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>নমুনা রেকর্ড লোড করুন</span>
            </button>
          ) : (
            <>
              {showClearConfirm ? (
                <div className="flex items-center gap-2 bg-rose-950/60 p-1.5 rounded-lg border border-rose-500/40">
                  <span className="text-[11px] text-rose-300">সব মুছবেন?</span>
                  <button
                    onClick={handleClearAll}
                    className="px-2 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold"
                  >
                    হ্যাঁ, মুছুন
                  </button>
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[11px]"
                  >
                    না
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950 hover:bg-rose-950/30 hover:border-rose-500/40 text-xs text-slate-400 hover:text-rose-400 transition flex items-center gap-1.5"
                  title="লিডারবোর্ড রেকর্ড রিসেট করুন"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>রিসেট</span>
                </button>
              )}
            </>
          )}

          {onRetakeQuiz && (
            <button
              onClick={onRetakeQuiz}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>আবার পরীক্ষা দিন</span>
            </button>
          )}
        </div>
      </div>

      {/* Stats Quick Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-cyan-400" />
            <span>মোট পরীক্ষা সম্পন্ন</span>
          </div>
          <div className="text-xl font-bold font-mono text-cyan-400 mt-1">
            {toBengaliNumber(stats.totalAttempts)} বার
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            <span>সর্বোচ্চ স্কোর</span>
          </div>
          <div className="text-xl font-bold font-mono text-amber-400 mt-1">
            {toBengaliNumber(stats.highestScore)}%
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-emerald-400" />
            <span>দ্রুততম সম্পন্ন সময়</span>
          </div>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
            {stats.fastestTime ? formatTimeDisplay(stats.fastestTime) : '--:--'}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-purple-400" />
            <span>গড় নম্বর</span>
          </div>
          <div className="text-xl font-bold font-mono text-purple-400 mt-1">
            {toBengaliNumber(stats.avgScore)}%
          </div>
        </div>
      </div>

      {/* Filter and Control Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800/70">
        {/* Scope Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setScopeFilter('current')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
              scopeFilter === 'current'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            বর্তমান অধ্যায় ({toBengaliNumber(currentChapter)})
          </button>
          <button
            onClick={() => setScopeFilter('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
              scopeFilter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            সকল অধ্যায় ও বিষয় ({toBengaliNumber(records.length)})
          </button>
        </div>

        {/* Secondary filters if 'all' scope */}
        {scopeFilter === 'all' && (
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
            {(['all', 'chemistry', 'physics', 'biology'] as const).map(subj => (
              <button
                key={subj}
                onClick={() => setSubjectFilter(subj)}
                className={`px-2.5 py-1 rounded-md text-[11px] transition shrink-0 ${
                  subjectFilter === subj
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {subj === 'all' ? 'সব বিষয়' : getSubjectLabel(subj)}
              </button>
            ))}
          </div>
        )}

        {/* Search & Sort */}
        <div className="flex items-center gap-2">
          {/* Search box */}
          <div className="relative flex-1 sm:w-44">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="নাম দিয়ে খুঁজুন..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-1 text-xs text-slate-400 shrink-0">
            <ArrowUpDown className="h-3.5 w-3.5 text-cyan-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
            >
              <option value="rank">সেরা স্কোর ও সময়</option>
              <option value="time">সবচেয়ে দ্রুততম সময়</option>
              <option value="recent">সাম্প্রতিক পরীক্ষা</option>
            </select>
          </div>
        </div>
      </div>

      {/* Podium for Top 3 (if current list has at least 1) */}
      {processedRecords.length > 0 && !searchQuery && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {/* 2nd Place */}
          {top3[1] ? (
            <div className={`p-4 rounded-xl border flex flex-col justify-between items-center text-center relative order-2 sm:order-1 ${
              top3[1].id === highlightEntryId
                ? 'bg-slate-900 border-cyan-400 ring-2 ring-cyan-400/30'
                : 'bg-slate-950/80 border-slate-700/60'
            }`}>
              <div className="w-8 h-8 rounded-full bg-slate-300/10 text-slate-300 border border-slate-400/40 flex items-center justify-center font-bold text-xs mb-2 shadow-sm">
                🥈 ২
              </div>
              <div className="space-y-1 w-full">
                <h4 className="font-bold text-slate-200 text-sm truncate" title={top3[1].studentName}>
                  {top3[1].studentName}
                </h4>
                <div className="text-[11px] text-slate-400 truncate">
                  {getSubjectLabel(top3[1].subject)} · অধ্যায় {toBengaliNumber(top3[1].chapter)}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 w-full pt-2 border-t border-slate-800 text-xs">
                <span className="font-mono font-bold text-slate-200">
                  {toBengaliNumber(top3[1].score)}/{toBengaliNumber(top3[1].totalQuestions)}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1 text-[11px]">
                  <Timer className="h-3 w-3" />
                  {formatTimeDisplay(top3[1].timeSpentSeconds)}
                </span>
              </div>
            </div>
          ) : (
            <div className="hidden sm:block order-1" />
          )}

          {/* 1st Place - Champion */}
          {top3[0] && (
            <div className={`p-5 rounded-xl border flex flex-col justify-between items-center text-center relative order-1 sm:order-2 shadow-xl ${
              top3[0].id === highlightEntryId
                ? 'bg-amber-950/20 border-amber-400 ring-2 ring-amber-400/40'
                : 'bg-gradient-to-b from-amber-500/10 to-slate-950 border-amber-500/40'
            }`}>
              <div className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md shadow-amber-500/30">
                <Trophy className="h-3 w-3" />
                শীর্ষ চ্যাম্পিয়ন
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 border-2 border-amber-400 flex items-center justify-center font-extrabold text-sm mb-2 mt-1 shadow-md shadow-amber-500/20">
                🥇 ১
              </div>
              <div className="space-y-1 w-full">
                <h4 className="font-extrabold text-amber-200 text-base truncate" title={top3[0].studentName}>
                  {top3[0].studentName}
                </h4>
                <div className="text-xs text-amber-400/80 truncate">
                  {getSubjectLabel(top3[0].subject)} · অধ্যায় {toBengaliNumber(top3[0].chapter)}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-3 w-full pt-2 border-t border-amber-500/20 text-xs">
                <span className="font-mono font-extrabold text-amber-300 text-sm">
                  {toBengaliNumber(top3[0].score)}/{toBengaliNumber(top3[0].totalQuestions)} ({toBengaliNumber(top3[0].percentage)}%)
                </span>
                <span className="text-amber-500/50">·</span>
                <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                  <Timer className="h-3.5 w-3.5" />
                  {formatTimeDisplay(top3[0].timeSpentSeconds)}
                </span>
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {top3[2] ? (
            <div className={`p-4 rounded-xl border flex flex-col justify-between items-center text-center relative order-3 ${
              top3[2].id === highlightEntryId
                ? 'bg-slate-900 border-cyan-400 ring-2 ring-cyan-400/30'
                : 'bg-slate-950/80 border-amber-800/40'
            }`}>
              <div className="w-8 h-8 rounded-full bg-amber-700/20 text-amber-600 border border-amber-600/40 flex items-center justify-center font-bold text-xs mb-2 shadow-sm">
                🥉 ৩
              </div>
              <div className="space-y-1 w-full">
                <h4 className="font-bold text-slate-200 text-sm truncate" title={top3[2].studentName}>
                  {top3[2].studentName}
                </h4>
                <div className="text-[11px] text-slate-400 truncate">
                  {getSubjectLabel(top3[2].subject)} · অধ্যায় {toBengaliNumber(top3[2].chapter)}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 w-full pt-2 border-t border-slate-800 text-xs">
                <span className="font-mono font-bold text-slate-200">
                  {toBengaliNumber(top3[2].score)}/{toBengaliNumber(top3[2].totalQuestions)}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1 text-[11px]">
                  <Timer className="h-3 w-3" />
                  {formatTimeDisplay(top3[2].timeSpentSeconds)}
                </span>
              </div>
            </div>
          ) : (
            <div className="hidden sm:block order-3" />
          )}
        </div>
      )}

      {/* Main Leaderboard List/Table */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400 px-3">
          <span>তালিকাভুক্ত শিক্ষার্থী: <strong className="text-slate-200">{toBengaliNumber(processedRecords.length)}</strong> জন</span>
          <span>স্কোর ও সময় অনুযায়ী ক্রম</span>
        </div>

        {processedRecords.length === 0 ? (
          <div className="p-10 rounded-xl bg-slate-950/60 border border-slate-800 text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-slate-800 text-slate-400">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-white text-sm">কোনো রেকর্ড পাওয়া যায়নি</h5>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {scopeFilter === 'current' 
                  ? 'এই অধ্যায়ে এখনও কোনো পরীক্ষা সংরক্ষিত হয়নি। কুইজটি দিয়ে নিজের নাম লিডারবোর্ডে যুক্ত করুন!' 
                  : 'অনুসন্ধানের সাথে মেলে এমন কোনো রেকর্ড পাওয়া যায়নি।'}
              </p>
            </div>
            <button
              onClick={handleResetToSeeds}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30 transition"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>নমুনা রেকর্ড লোড করুন</span>
            </button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/70">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-[11px] font-semibold text-slate-400">
              <div className="col-span-2 sm:col-span-1 text-center">স্থান</div>
              <div className="col-span-5 sm:col-span-4">শিক্ষার্থীর নাম</div>
              <div className="hidden sm:block sm:col-span-3">অধ্যায় ও বিষয়</div>
              <div className="col-span-3 sm:col-span-2 text-center">স্কোর</div>
              <div className="col-span-2 sm:col-span-2 text-right">সময়</div>
            </div>

            {/* List entries */}
            <div className="divide-y divide-slate-800/60 max-h-[420px] overflow-y-auto">
              {processedRecords.map((entry, index) => {
                const rank = index + 1;
                const isHighlighted = entry.id === highlightEntryId;

                let rankBadge = (
                  <span className="font-mono text-xs text-slate-400 font-semibold">
                    #{toBengaliNumber(rank)}
                  </span>
                );

                if (rank === 1) {
                  rankBadge = (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400 font-bold text-xs shadow-sm">
                      ১
                    </span>
                  );
                } else if (rank === 2) {
                  rankBadge = (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-400/20 text-slate-200 border border-slate-400 font-bold text-xs shadow-sm">
                      ২
                    </span>
                  );
                } else if (rank === 3) {
                  rankBadge = (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-700/20 text-amber-500 border border-amber-700 font-bold text-xs shadow-sm">
                      ৩
                    </span>
                  );
                }

                return (
                  <div
                    key={entry.id}
                    className={`grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs transition ${
                      isHighlighted
                        ? 'bg-cyan-950/40 border-l-4 border-l-cyan-400'
                        : 'hover:bg-slate-900/50'
                    }`}
                  >
                    {/* Rank */}
                    <div className="col-span-2 sm:col-span-1 flex items-center justify-center">
                      {rankBadge}
                    </div>

                    {/* Student Name */}
                    <div className="col-span-5 sm:col-span-4 min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center text-[11px] font-bold shrink-0">
                          {entry.studentName.charAt(0) || 'শ'}
                        </div>
                        <div className="truncate">
                          <span className="font-semibold text-white block truncate" title={entry.studentName}>
                            {entry.studentName}
                          </span>
                          <span className="text-[10px] text-slate-500 flex items-center gap-1 sm:hidden truncate">
                            {getSubjectLabel(entry.subject)} · অধ্যায় {toBengaliNumber(entry.chapter)}
                          </span>
                        </div>
                      </div>
                      {isHighlighted && (
                        <span className="inline-block mt-0.5 text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                          আপনার সদ্য সমাপ্ত রেকর্ড
                        </span>
                      )}
                    </div>

                    {/* Subject & Chapter (Hidden on mobile) */}
                    <div className="hidden sm:block sm:col-span-3 min-w-0">
                      <span className="text-slate-300 font-medium block truncate" title={getChapterName(entry.subject, entry.chapter)}>
                        {getChapterName(entry.subject, entry.chapter)}
                      </span>
                      <span className="text-[10px] text-slate-500 flex items-center gap-1">
                        <Calendar className="h-2.5 w-2.5" />
                        {entry.formattedDate}
                      </span>
                    </div>

                    {/* Score */}
                    <div className="col-span-3 sm:col-span-2 text-center">
                      <div className="inline-flex items-center gap-1 font-mono font-bold text-slate-100">
                        <span className="text-cyan-400">{toBengaliNumber(entry.score)}</span>
                        <span className="text-slate-600">/</span>
                        <span>{toBengaliNumber(entry.totalQuestions)}</span>
                      </div>
                      <span className="block text-[10px] text-slate-400 font-mono">
                        {toBengaliNumber(entry.percentage)}%
                      </span>
                    </div>

                    {/* Time */}
                    <div className="col-span-2 sm:col-span-2 text-right">
                      <span className="inline-flex items-center justify-end gap-1 font-mono text-emerald-400 font-semibold text-xs">
                        <Timer className="h-3 w-3 shrink-0" />
                        <span>{formatTimeDisplay(entry.timeSpentSeconds)}</span>
                      </span>
                      <span className="block text-[10px] text-slate-500">
                        {formatDurationBn(entry.timeSpentSeconds)}
                      </span>
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
