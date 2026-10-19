import React, { useState, useEffect, useMemo } from 'react';
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  CheckCircle2,
  Target,
  Flame,
  Zap,
  BookOpen,
  TrendingUp,
  Clock,
  Star,
  Crown,
  Lock,
  Unlock,
  Printer,
  Search,
  ChevronRight,
  Atom,
  Dna,
  FlaskConical,
  Activity,
  FileText,
  ShieldCheck,
  X,
  Check,
  Sun,
  Apple,
  Droplet,
  Waves,
  Microscope,
  Heart,
  Edit3,
  User,
  RotateCcw
} from 'lucide-react';
import { CHAPTER_BADGES_DATA, ChapterBadgeMeta } from '../data/completionBadgesData';
import {
  loadLeaderboardRecords,
  saveLeaderboardRecord,
  getLastStudentName,
  LeaderboardEntry,
  toBengaliNumber,
  getSubjectLabel,
  formatDurationBn
} from './QuizLeaderboard';

export interface ChapterProgressData {
  id: string; // e.g. "chemistry-1"
  subject: 'chemistry' | 'physics' | 'biology';
  chapter: number;
  titleBn: string;
  totalSlides: number;
  badgeId: string;
}

export const ALL_CHAPTERS_METADATA: ChapterProgressData[] = [
  // Chemistry (12 Chapters)
  { id: 'chemistry-1', subject: 'chemistry', chapter: 1, titleBn: 'অধ্যায় ১: রসায়নের ধারণা', totalSlides: 48, badgeId: 'chemistry_ch1' },
  { id: 'chemistry-2', subject: 'chemistry', chapter: 2, titleBn: 'অধ্যায় ২: পদার্থের অবস্থা', totalSlides: 61, badgeId: 'chemistry_ch2' },
  { id: 'chemistry-3', subject: 'chemistry', chapter: 3, titleBn: 'অধ্যায় ৩: পদার্থের গঠন', totalSlides: 52, badgeId: 'chemistry_ch3' },
  { id: 'chemistry-4', subject: 'chemistry', chapter: 4, titleBn: 'অধ্যায় ৪: পর্যায় সারণি', totalSlides: 36, badgeId: 'chemistry_ch4' },
  { id: 'chemistry-5', subject: 'chemistry', chapter: 5, titleBn: 'অধ্যায় ৫: রাসায়নিক বন্ধন', totalSlides: 35, badgeId: 'chemistry_ch5' },
  { id: 'chemistry-6', subject: 'chemistry', chapter: 6, titleBn: 'অধ্যায় ৬: মোলের ধারণা ও রাসায়নিক গণনা', totalSlides: 14, badgeId: 'chemistry_ch6' },
  { id: 'chemistry-7', subject: 'chemistry', chapter: 7, titleBn: 'অধ্যায় ৭: রাসায়নিক বিক্রিয়া', totalSlides: 14, badgeId: 'chemistry_ch7' },
  { id: 'chemistry-8', subject: 'chemistry', chapter: 8, titleBn: 'অধ্যায় ৮: রসায়ন ও শক্তি', totalSlides: 14, badgeId: 'chemistry_ch8' },
  { id: 'chemistry-9', subject: 'chemistry', chapter: 9, titleBn: 'অধ্যায় ৯: এসিড-ক্ষার সমতা', totalSlides: 10, badgeId: 'chemistry_ch9' },
  { id: 'chemistry-10', subject: 'chemistry', chapter: 10, titleBn: 'অধ্যায় ১০: খনিজ সম্পদ: ধাতু ও অধাতু', totalSlides: 10, badgeId: 'chemistry_ch10' },
  { id: 'chemistry-11', subject: 'chemistry', chapter: 11, titleBn: 'অধ্যায় ১১: খনিজ সম্পদ: জীবাশ্ম', totalSlides: 10, badgeId: 'chemistry_ch11' },
  { id: 'chemistry-12', subject: 'chemistry', chapter: 12, titleBn: 'অধ্যায় ১২: আমাদের জীবনে রসায়ন', totalSlides: 10, badgeId: 'chemistry_ch12' },

  // Physics (4 Chapters)
  { id: 'physics-4', subject: 'physics', chapter: 4, titleBn: 'অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি', totalSlides: 12, badgeId: 'physics_ch4' },
  { id: 'physics-5', subject: 'physics', chapter: 5, titleBn: 'অধ্যায় ৫: পদার্থের অবস্থা ও চাপ', totalSlides: 12, badgeId: 'physics_ch5' },
  { id: 'physics-6', subject: 'physics', chapter: 6, titleBn: 'অধ্যায় ৬: বস্তুর উপর তাপের প্রভাব', totalSlides: 12, badgeId: 'physics_ch6' },
  { id: 'physics-7', subject: 'physics', chapter: 7, titleBn: 'অধ্যায় ৭: তরঙ্গ ও শব্দ', totalSlides: 12, badgeId: 'physics_ch7' },

  // Biology (14 Chapters)
  { id: 'biology-1', subject: 'biology', chapter: 1, titleBn: 'অধ্যায় ১: জীবন পাঠ', totalSlides: 55, badgeId: 'biology_ch1' },
  { id: 'biology-2', subject: 'biology', chapter: 2, titleBn: 'অধ্যায় ২: জীবকোষ ও টিস্যু', totalSlides: 60, badgeId: 'biology_ch2' },
  { id: 'biology-3', subject: 'biology', chapter: 3, titleBn: 'অধ্যায় ৩: কোষ বিভাজন', totalSlides: 60, badgeId: 'biology_ch3' },
  { id: 'biology-4', subject: 'biology', chapter: 4, titleBn: 'অধ্যায় ৪: জীবনীশক্তি', totalSlides: 60, badgeId: 'biology_ch4' },
  { id: 'biology-5', subject: 'biology', chapter: 5, titleBn: 'অধ্যায় ৫: খাদ্য, পুষ্টি এবং পরিপাক', totalSlides: 60, badgeId: 'biology_ch5' },
  { id: 'biology-6', subject: 'biology', chapter: 6, titleBn: 'অধ্যায় ৬: জীবে পরিবহন', totalSlides: 60, badgeId: 'biology_ch6' },
  { id: 'biology-7', subject: 'biology', chapter: 7, titleBn: 'অধ্যায় ৭: গ্যাসীয় বিনিময়', totalSlides: 60, badgeId: 'biology_ch7' },
  { id: 'biology-8', subject: 'biology', chapter: 8, titleBn: 'অধ্যায় ৮: রেচন প্রক্রিয়া', totalSlides: 60, badgeId: 'biology_ch8' },
  { id: 'biology-9', subject: 'biology', chapter: 9, titleBn: 'অধ্যায় ৯: দৃঢ়তা প্রদান ও চলন', totalSlides: 60, badgeId: 'biology_ch9' },
  { id: 'biology-10', subject: 'biology', chapter: 10, titleBn: 'অধ্যায় ১০: সমন্বয়', totalSlides: 60, badgeId: 'biology_ch10' },
  { id: 'biology-11', subject: 'biology', chapter: 11, titleBn: 'অধ্যায় ১১: জীবের প্রজনন', totalSlides: 60, badgeId: 'biology_ch11' },
  { id: 'biology-12', subject: 'biology', chapter: 12, titleBn: 'অধ্যায় ১২: জীবের বংশগতি ও বিবর্তন', totalSlides: 60, badgeId: 'biology_ch12' },
  { id: 'biology-13', subject: 'biology', chapter: 13, titleBn: 'অধ্যায় ১৩: জীবের পরিবেশ', totalSlides: 60, badgeId: 'biology_ch13' },
  { id: 'biology-14', subject: 'biology', chapter: 14, titleBn: 'অধ্যায় ১৪: জীবপ্রযুক্তি', totalSlides: 60, badgeId: 'biology_ch14' },
];

const UNLOCKED_BADGES_KEY = 'science_master_unlocked_badges_v1';
const VIEWED_SLIDES_KEY = 'science_master_viewed_slides_v1';

interface StudentAchievementDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  viewedSlidesMap: Record<string, number[]>;
  onSelectChapter?: (subject: 'chemistry' | 'physics' | 'biology', chapter: number, targetTab?: 'slides' | 'quiz') => void;
  customSlideCounts?: Record<string, number>;
}

export const StudentAchievementDashboardModal: React.FC<StudentAchievementDashboardModalProps> = ({
  isOpen,
  onClose,
  viewedSlidesMap: initialViewedSlidesMap,
  onSelectChapter,
  customSlideCounts
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'chapters' | 'badges' | 'quizzes'>('overview');
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'chemistry' | 'physics' | 'biology'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'inProgress' | 'notStarted'>('all');
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'unlocked' | 'locked' | 'chemistry' | 'physics' | 'biology'>('all');
  const [badgeSearch, setBadgeSearch] = useState('');
  
  // Student Name
  const [studentName, setStudentName] = useState(() => getLastStudentName() || 'মেধাবী বিজ্ঞান শিক্ষার্থী');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState('');

  // Unlocked Badges State (loaded from localStorage or automatically computed from viewedSlides)
  const [unlockedBadgesMap, setUnlockedBadgesMap] = useState<Record<string, { unlockedAt: string; xp: number }>>(() => {
    try {
      const saved = localStorage.getItem(UNLOCKED_BADGES_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Viewed slides local state so user can live-update or load demo
  const [viewedSlides, setViewedSlides] = useState<Record<string, number[]>>(initialViewedSlidesMap);

  useEffect(() => {
    setViewedSlides(initialViewedSlidesMap);
  }, [initialViewedSlidesMap]);

  // Quiz records from localStorage
  const [quizRecords, setQuizRecords] = useState<LeaderboardEntry[]>(() => loadLeaderboardRecords());

  // Reload quiz records on modal open
  useEffect(() => {
    if (isOpen) {
      setQuizRecords(loadLeaderboardRecords());
    }
  }, [isOpen]);

  // Merge custom slide counts into ALL_CHAPTERS_METADATA
  const chaptersData = useMemo(() => {
    return ALL_CHAPTERS_METADATA.map((chap) => {
      const count = customSlideCounts?.[chap.id] ?? chap.totalSlides;
      return {
        ...chap,
        totalSlides: count > 0 ? count : chap.totalSlides
      };
    });
  }, [customSlideCounts]);

  // Automatically check and award completion badges for chapters with 100% viewed slides
  useEffect(() => {
    let changed = false;
    const updated = { ...unlockedBadgesMap };

    chaptersData.forEach((chap) => {
      const key = `${chap.subject}_ch${chap.chapter}`;
      const viewed = viewedSlides[key] || [];
      const isComplete = viewed.length >= chap.totalSlides && chap.totalSlides > 0;
      
      if (isComplete && !updated[chap.badgeId]) {
        updated[chap.badgeId] = {
          unlockedAt: new Intl.DateTimeFormat('bn-BD', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).format(new Date()),
          xp: 500
        };
        changed = true;
      }
    });

    if (changed) {
      setUnlockedBadgesMap(updated);
      try {
        localStorage.setItem(UNLOCKED_BADGES_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save unlocked badges', e);
      }
    }
  }, [chaptersData, viewedSlides, unlockedBadgesMap]);

  // Compute chapter-by-chapter stats
  const chapterStats = useMemo(() => {
    return chaptersData.map((chap) => {
      const key = `${chap.subject}_ch${chap.chapter}`;
      const viewed = viewedSlides[key] || [];
      const viewedCount = Math.min(chap.totalSlides, viewed.length);
      const percentage = Math.min(100, Math.round((viewedCount / chap.totalSlides) * 100));
      const isCompleted = percentage >= 100;
      const isUnlocked = Boolean(unlockedBadgesMap[chap.badgeId] || isCompleted);

      // Best quiz score for this chapter
      const chapterQuizzes = quizRecords.filter(
        q => q.subject === chap.subject && q.chapter === chap.chapter
      );
      const bestQuiz = chapterQuizzes.length > 0
        ? chapterQuizzes.reduce((prev, curr) => (curr.percentage > prev.percentage ? curr : prev))
        : null;

      return {
        ...chap,
        key,
        viewedCount,
        percentage,
        isCompleted,
        isUnlocked,
        bestQuiz
      };
    });
  }, [chaptersData, viewedSlides, unlockedBadgesMap, quizRecords]);

  // Overall statistics across ALL 30 chapters and all subjects
  const summary = useMemo(() => {
    const totalChapters = chapterStats.length; // 30
    const completedChapters = chapterStats.filter(c => c.isCompleted).length;
    const inProgressChapters = chapterStats.filter(c => c.percentage > 0 && !c.isCompleted).length;

    const totalCurriculumSlides = chapterStats.reduce((sum, c) => sum + c.totalSlides, 0);
    const totalSlidesViewed = chapterStats.reduce((sum, c) => sum + c.viewedCount, 0);
    const overallCurriculumPercentage = Math.round((totalSlidesViewed / Math.max(1, totalCurriculumSlides)) * 100);

    // Badges stats
    const totalBadges = CHAPTER_BADGES_DATA.length;
    const unlockedBadgesCount = chapterStats.filter(c => c.isUnlocked).length;
    const totalXP = (unlockedBadgesCount * 500) + (quizRecords.reduce((sum, q) => sum + q.score * 50, 0));

    // Cumulative Quiz stats
    const totalQuizzesTaken = quizRecords.length;
    const cumulativeScore = quizRecords.reduce((sum, q) => sum + q.score, 0);
    const cumulativePossible = quizRecords.reduce((sum, q) => sum + q.totalQuestions, 0);
    const cumulativePercentage = cumulativePossible > 0 ? Math.round((cumulativeScore / cumulativePossible) * 100) : 0;

    // Subject breakdowns
    const subjects = ['chemistry', 'physics', 'biology'] as const;
    const bySubject = subjects.map(subj => {
      const chaps = chapterStats.filter(c => c.subject === subj);
      const completed = chaps.filter(c => c.isCompleted).length;
      const totalS = chaps.reduce((sum, c) => sum + c.totalSlides, 0);
      const viewedS = chaps.reduce((sum, c) => sum + c.viewedCount, 0);
      const pct = Math.round((viewedS / Math.max(1, totalS)) * 100);
      
      const subjQuizzes = quizRecords.filter(q => q.subject === subj);
      const subjScore = subjQuizzes.reduce((sum, q) => sum + q.score, 0);
      const subjPossible = subjQuizzes.reduce((sum, q) => sum + q.totalQuestions, 0);
      const subjAvgPct = subjPossible > 0 ? Math.round((subjScore / subjPossible) * 100) : 0;

      return {
        subject: subj,
        label: getSubjectLabel(subj),
        totalChapters: chaps.length,
        completedChapters: completed,
        totalSlides: totalS,
        viewedSlides: viewedS,
        percentage: pct,
        quizzesTaken: subjQuizzes.length,
        quizAverage: subjAvgPct
      };
    });

    // Academic Rank
    let rankTitle = 'নবীন বিজ্ঞান শিক্ষার্থী';
    let rankLevel = 1;
    let rankColor = 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10';
    if (unlockedBadgesCount >= 25 || completedChapters >= 25) {
      rankTitle = 'গ্র্যান্ডমাস্টার সায়েন্টিস্ট 🏆';
      rankLevel = 5;
      rankColor = 'text-amber-300 border-amber-500/50 bg-amber-500/20';
    } else if (unlockedBadgesCount >= 16 || completedChapters >= 16) {
      rankTitle = 'সিনিয়র বিজ্ঞান গবেষক 💎';
      rankLevel = 4;
      rankColor = 'text-purple-300 border-purple-500/50 bg-purple-500/20';
    } else if (unlockedBadgesCount >= 8 || completedChapters >= 8) {
      rankTitle = 'মেধাবী বিজ্ঞান অনুসন্ধানকারী ⭐';
      rankLevel = 3;
      rankColor = 'text-emerald-300 border-emerald-500/50 bg-emerald-500/20';
    } else if (unlockedBadgesCount >= 3 || completedChapters >= 3) {
      rankTitle = 'বিজ্ঞান অভিযাত্রী 🚀';
      rankLevel = 2;
      rankColor = 'text-blue-300 border-blue-500/50 bg-blue-500/20';
    }

    return {
      totalChapters,
      completedChapters,
      inProgressChapters,
      totalCurriculumSlides,
      totalSlidesViewed,
      overallCurriculumPercentage,
      totalBadges,
      unlockedBadgesCount,
      totalXP,
      totalQuizzesTaken,
      cumulativeScore,
      cumulativePossible,
      cumulativePercentage,
      bySubject,
      rankTitle,
      rankLevel,
      rankColor
    };
  }, [chapterStats, quizRecords]);

  // Handle Save Custom Student Name
  const handleSaveName = () => {
    const trimmed = tempName.trim();
    if (trimmed) {
      setStudentName(trimmed);
      try {
        localStorage.setItem('ssc_quiz_last_student_name', trimmed);
      } catch (e) {
        console.warn('Could not save student name', e);
      }
    }
    setIsEditingName(false);
  };

  // Load Demo Data for realistic preview and evaluation
  const handleLoadDemoData = () => {
    const demoSlides: Record<string, number[]> = {};
    const demoBadges: Record<string, { unlockedAt: string; xp: number }> = {};
    const today = new Intl.DateTimeFormat('bn-BD', { day: 'numeric', month: 'short' }).format(new Date());

    // Mark 12 chapters as completed with slides
    chaptersData.forEach((chap, idx) => {
      const key = `${chap.subject}_ch${chap.chapter}`;
      if (idx % 2 === 0 || idx < 8) {
        // Full completion
        demoSlides[key] = Array.from({ length: chap.totalSlides }, (_, i) => i + 1);
        demoBadges[chap.badgeId] = { unlockedAt: today, xp: 500 };
      } else if (idx % 3 === 0) {
        // Half completion
        demoSlides[key] = Array.from({ length: Math.floor(chap.totalSlides * 0.6) }, (_, i) => i + 1);
      }
    });

    setViewedSlides(demoSlides);
    setUnlockedBadgesMap(demoBadges);
    try {
      localStorage.setItem(VIEWED_SLIDES_KEY, JSON.stringify(demoSlides));
      localStorage.setItem(UNLOCKED_BADGES_KEY, JSON.stringify(demoBadges));
    } catch {}
  };

  // Reset Progress Handler
  const handleResetProgress = () => {
    if (window.confirm('আপনি কি সত্যিই সমস্ত অধ্যায় অগ্রগতি রিসেট করতে চান?')) {
      setViewedSlides({});
      setUnlockedBadgesMap({});
      try {
        localStorage.removeItem(VIEWED_SLIDES_KEY);
        localStorage.removeItem(UNLOCKED_BADGES_KEY);
      } catch {}
    }
  };

  // Print Report Card Handler
  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  // Filtered Chapters for Chapters Tab
  const filteredChapters = chapterStats.filter(c => {
    if (subjectFilter !== 'all' && c.subject !== subjectFilter) return false;
    if (statusFilter === 'completed' && !c.isCompleted) return false;
    if (statusFilter === 'inProgress' && (c.percentage === 0 || c.isCompleted)) return false;
    if (statusFilter === 'notStarted' && c.percentage > 0) return false;
    return true;
  });

  // Filtered Badges for Badges Tab
  const filteredBadges = CHAPTER_BADGES_DATA.filter(badge => {
    const isUnlocked = Boolean(unlockedBadgesMap[badge.id] || chapterStats.find(c => c.badgeId === badge.id)?.isCompleted);
    if (badgeFilter === 'unlocked' && !isUnlocked) return false;
    if (badgeFilter === 'locked' && isUnlocked) return false;
    if (badgeFilter === 'chemistry' && badge.subject !== 'chemistry') return false;
    if (badgeFilter === 'physics' && badge.subject !== 'physics') return false;
    if (badgeFilter === 'biology' && badge.subject !== 'biology') return false;
    if (badgeSearch) {
      const q = badgeSearch.toLowerCase();
      return badge.badgeNameBn.toLowerCase().includes(q) ||
             badge.badgeNameEn.toLowerCase().includes(q) ||
             badge.chapterTitleBn.toLowerCase().includes(q);
    }
    return true;
  });

  const renderBadgeIcon = (iconType: string, isUnlocked: boolean) => {
    const iconClass = `h-6 w-6 sm:h-7 sm:w-7 ${isUnlocked ? 'text-amber-400' : 'text-slate-400'}`;
    switch (iconType) {
      case 'flask': return <FlaskConical className={iconClass} />;
      case 'atom': return <Atom className={iconClass} />;
      case 'flame': return <Flame className={iconClass} />;
      case 'zap': return <Zap className={iconClass} />;
      case 'dna': return <Dna className={iconClass} />;
      case 'sun': return <Sun className={iconClass} />;
      case 'apple': return <Apple className={iconClass} />;
      case 'droplet': return <Droplet className={iconClass} />;
      case 'waves': return <Waves className={iconClass} />;
      case 'book': return <BookOpen className={iconClass} />;
      case 'microscope': return <Microscope className={iconClass} />;
      case 'heart': return <Heart className={iconClass} />;
      case 'shield': return <ShieldCheck className={iconClass} />;
      case 'activity': return <Activity className={iconClass} />;
      default: return <Award className={iconClass} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        
        {/* ========================================================================= */}
        {/* MODAL HEADER WITH STUDENT IDENTITY & ACTION BAR                          */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-800 bg-slate-950/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative p-2.5 rounded-xl bg-gradient-to-tr from-amber-500/20 via-yellow-500/20 to-cyan-500/20 border border-amber-500/40 shadow-inner">
              <Trophy className="h-6 w-6 text-amber-400 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-black text-slate-950">
                ✓
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-1.5">
                  শিক্ষার্থী অর্জন ড্যাশবোর্ড
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Achievement Hub
                  </span>
                </h2>
              </div>

              {/* Student Name & Level Rank */}
              <div className="flex flex-wrap items-center gap-2 mt-0.5 text-xs text-slate-400">
                {isEditingName ? (
                  <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded border border-cyan-500/60">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      placeholder="আপনার নাম লিখুন..."
                      className="bg-transparent text-white text-xs px-1.5 py-0.5 outline-none w-36"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={handleSaveName}
                      className="px-2 py-0.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded text-[11px]"
                    >
                      সংরক্ষণ
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingName(false)}
                      className="px-1 py-0.5 text-slate-400 hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 group cursor-pointer" onClick={() => { setTempName(studentName); setIsEditingName(true); }}>
                    <User className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="font-bold text-slate-200 group-hover:text-cyan-300 transition">{studentName}</span>
                    <Edit3 className="h-3 w-3 text-slate-500 group-hover:text-cyan-400 transition" />
                  </div>
                )}
                <span>•</span>
                <span className={`px-2 py-0.5 rounded-md font-bold border text-[11px] ${summary.rankColor}`}>
                  {summary.rankTitle}
                </span>
                <span>•</span>
                <span className="font-mono font-bold text-amber-400 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  {toBengaliNumber(summary.totalXP)} XP
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions (Print, Demo, Close) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleLoadDemoData}
              title="পরীক্ষামূলক নমুনা অর্জন ডেটা লোড করুন"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-indigo-500/40 bg-indigo-950/40 text-indigo-300 hover:bg-indigo-900/60 hover:text-white transition"
            >
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              <span className="hidden sm:inline">নমুনা ডেটা</span>
            </button>

            <button
              onClick={handlePrint}
              title="অ্যাচিভমেন্ট রিপোর্ট প্রিন্ট বা সংরক্ষণ করুন"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
            >
              <Printer className="h-3.5 w-3.5 text-slate-300" />
              <span className="hidden sm:inline">প্রিন্ট রিপোর্ট</span>
            </button>

            <button
              onClick={handleResetProgress}
              title="অগ্রগতি মুছে ফেলুন"
              className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW OF 4 CORE KPI SUMMARY CARDS (ALL SUBJECTS)                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-4 sm:p-5 bg-slate-950/50 border-b border-slate-800">
          {/* 1. Total Chapters Completed */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-500/60 transition shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="font-medium">সম্পূর্ণ অধ্যায়</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-white">
                {toBengaliNumber(summary.completedChapters)}
              </span>
              <span className="text-xs text-slate-400 font-bold">
                / {toBengaliNumber(summary.totalChapters)}টি
              </span>
              <span className="ml-auto text-xs font-black text-emerald-400">
                {toBengaliNumber(Math.round((summary.completedChapters / summary.totalChapters) * 100))}%
              </span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500"
                style={{ width: `${(summary.completedChapters / summary.totalChapters) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5">
              <span>রসায়ন: {toBengaliNumber(summary.bySubject[0].completedChapters)}/১২</span>
              <span>পদার্থ: {toBengaliNumber(summary.bySubject[1].completedChapters)}/৪</span>
              <span>জীব: {toBengaliNumber(summary.bySubject[2].completedChapters)}/১৪</span>
            </div>
          </div>

          {/* 2. Badges Earned */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 hover:border-amber-500/60 transition shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="font-medium">অর্জিত ব্যাজ</span>
              <Medal className="h-4 w-4 text-amber-400" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-amber-300">
                {toBengaliNumber(summary.unlockedBadgesCount)}
              </span>
              <span className="text-xs text-slate-400 font-bold">
                / {toBengaliNumber(summary.totalBadges)}টি
              </span>
              <span className="ml-auto text-xs font-black text-amber-400">
                {toBengaliNumber(Math.round((summary.unlockedBadgesCount / summary.totalBadges) * 100))}%
              </span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div
                className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full transition-all duration-500"
                style={{ width: `${(summary.unlockedBadgesCount / summary.totalBadges) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5">
              <span className="text-amber-300/80">🏆 মেডেল ও ট্রফি সম্মাননা</span>
              <span className="font-mono text-amber-400">+{toBengaliNumber(summary.unlockedBadgesCount * 500)} XP</span>
            </div>
          </div>

          {/* 3. Cumulative Quiz Score */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-500/60 transition shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="font-medium">কুইজ পারফরম্যান্স</span>
              <Target className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-cyan-300">
                {toBengaliNumber(summary.cumulativeScore)}
              </span>
              <span className="text-xs text-slate-400 font-bold">
                / {toBengaliNumber(summary.cumulativePossible)} পয়েন্ট
              </span>
              <span className="ml-auto text-xs font-black text-cyan-400">
                {toBengaliNumber(summary.cumulativePercentage)}%
              </span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-500"
                style={{ width: `${summary.cumulativePercentage}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5">
              <span>মোট পরীক্ষা: {toBengaliNumber(summary.totalQuizzesTaken)}টি</span>
              <span className="text-cyan-400">গড় নির্ভুলতা: {toBengaliNumber(summary.cumulativePercentage)}%</span>
            </div>
          </div>

          {/* 4. Overall Slide Coverage */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-purple-500/30 hover:border-purple-500/60 transition shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="font-medium">পাঠ্যক্রম সমাপ্তি</span>
              <BookOpen className="h-4 w-4 text-purple-400" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-purple-300">
                {toBengaliNumber(summary.totalSlidesViewed)}
              </span>
              <span className="text-xs text-slate-400 font-bold">
                / {toBengaliNumber(summary.totalCurriculumSlides)}টি স্লাইড
              </span>
              <span className="ml-auto text-xs font-black text-purple-400">
                {toBengaliNumber(summary.overallCurriculumPercentage)}%
              </span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-500"
                style={{ width: `${summary.overallCurriculumPercentage}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5">
              <span>বিজ্ঞান ৩ বিষয়</span>
              <span className="text-purple-400 font-bold">{toBengaliNumber(summary.overallCurriculumPercentage)}% পঠিত</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB NAVIGATION PILLS                                                      */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/70 px-4 sm:px-5 py-2.5 overflow-x-auto gap-2">
          <div className="flex items-center gap-1.5 text-xs shrink-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
                activeTab === 'overview'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5" />
              <span>সার্বিক সারসংক্ষেপ</span>
            </button>

            <button
              onClick={() => setActiveTab('chapters')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
                activeTab === 'chapters'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>বিষয়ভিত্তিক অধ্যায় ({toBengaliNumber(summary.totalChapters)})</span>
            </button>

            <button
              onClick={() => setActiveTab('badges')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
                activeTab === 'badges'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Medal className="h-3.5 w-3.5" />
              <span>অর্জিত ব্যাজসমূহ ({toBengaliNumber(summary.unlockedBadgesCount)}/{toBengaliNumber(summary.totalBadges)})</span>
            </button>

            <button
              onClick={() => setActiveTab('quizzes')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
                activeTab === 'quizzes'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Target className="h-3.5 w-3.5" />
              <span>কুইজ পারফরম্যান্স ও স্কোর</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW (সার্বিক সারসংক্ষেপ)                                        */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Subject Progress Summary Cards */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-300 flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-cyan-400" />
                  <span>বিষয়ভিত্তিক অগ্রগতি সারসংক্ষেপ (Subject Breakdown)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {summary.bySubject.map(s => {
                    const isChem = s.subject === 'chemistry';
                    const isPhys = s.subject === 'physics';
                    const theme = isChem
                      ? { border: 'border-cyan-500/40', bg: 'bg-cyan-950/20', text: 'text-cyan-400', bar: 'from-cyan-500 to-blue-500' }
                      : isPhys
                      ? { border: 'border-amber-500/40', bg: 'bg-amber-950/20', text: 'text-amber-400', bar: 'from-amber-500 to-orange-500' }
                      : { border: 'border-emerald-500/40', bg: 'bg-emerald-950/20', text: 'text-emerald-400', bar: 'from-emerald-500 to-teal-500' };

                    return (
                      <div
                        key={s.subject}
                        className={`p-4 rounded-xl border ${theme.border} ${theme.bg} space-y-3 hover:brightness-105 transition`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {isChem && <FlaskConical className={`h-5 w-5 ${theme.text}`} />}
                            {isPhys && <Zap className={`h-5 w-5 ${theme.text}`} />}
                            {!isChem && !isPhys && <Dna className={`h-5 w-5 ${theme.text}`} />}
                            <span className="font-extrabold text-white text-base">{s.label}</span>
                          </div>
                          <span className={`text-xs font-black ${theme.text}`}>
                            {toBengaliNumber(s.percentage)}%
                          </span>
                        </div>

                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div
                            className={`bg-gradient-to-r ${theme.bar} h-full transition-all duration-500`}
                            style={{ width: `${s.percentage}%` }}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                          <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                            <span className="text-slate-400 text-[10px] block">সম্পূর্ণ অধ্যায়:</span>
                            <span className="font-bold text-white font-mono">
                              {toBengaliNumber(s.completedChapters)} / {toBengaliNumber(s.totalChapters)}
                            </span>
                          </div>
                          <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                            <span className="text-slate-400 text-[10px] block">পঠিত স্লাইড:</span>
                            <span className="font-bold text-white font-mono">
                              {toBengaliNumber(s.viewedSlides)} / {toBengaliNumber(s.totalSlides)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/80">
                          <span className="text-slate-400">কুইজ গড়: {toBengaliNumber(s.quizAverage)}%</span>
                          {onSelectChapter && (
                            <button
                              onClick={() => {
                                const defChap = s.subject === 'physics' ? 4 : 1;
                                onSelectChapter(s.subject, defChap);
                                onClose();
                              }}
                              className={`flex items-center gap-1 font-bold ${theme.text} hover:underline`}
                            >
                              <span>অধ্যয়ন শুরু</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Showcase: Recent Earned Badges */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-300 flex items-center gap-1.5">
                    <Medal className="h-4 w-4 text-amber-400" />
                    <span>অর্জিত ব্যাজ হাইলাইটস (Recent Badges Showcase)</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('badges')}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                  >
                    <span>সব ৩০টি ব্যাজ দেখুন</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {CHAPTER_BADGES_DATA.slice(0, 8).map(badge => {
                    const isUnlocked = Boolean(
                      unlockedBadgesMap[badge.id] ||
                      chapterStats.find(c => c.badgeId === badge.id)?.isCompleted
                    );

                    return (
                      <div
                        key={badge.id}
                        className={`p-3 rounded-xl border flex flex-col items-center text-center transition ${
                          isUnlocked
                            ? 'bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-900 border-amber-500/50 shadow-md shadow-amber-500/5'
                            : 'bg-slate-900/60 border-slate-800 opacity-60'
                        }`}
                      >
                        <div className={`p-3 rounded-full mb-2 ${isUnlocked ? 'bg-amber-500/20 ring-2 ring-amber-400/40' : 'bg-slate-800'}`}>
                          {renderBadgeIcon(badge.iconType, isUnlocked)}
                        </div>
                        <h4 className={`text-xs font-bold leading-tight ${isUnlocked ? 'text-amber-300' : 'text-slate-400'}`}>
                          {badge.badgeNameBn}
                        </h4>
                        <span className="text-[10px] text-slate-500 mt-0.5 truncate w-full">
                          {badge.chapterTitleBn}
                        </span>
                        <div className="mt-2 pt-2 border-t border-slate-800/80 w-full flex items-center justify-between text-[10px]">
                          <span className={`font-bold ${isUnlocked ? 'text-emerald-400' : 'text-slate-500'}`}>
                            {isUnlocked ? '✓ অর্জিত' : '🔒 লকড'}
                          </span>
                          <span className="font-mono text-amber-400 font-bold">+৫০০ XP</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quiz Quick Performance Banner */}
              <div className="p-4 rounded-xl border border-indigo-500/40 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      সার্বিক কুইজ মূল্যায়ন স্কোর: {toBengaliNumber(summary.cumulativeScore)} / {toBengaliNumber(summary.cumulativePossible)} পয়েন্ট
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      মোট {toBengaliNumber(summary.totalQuizzesTaken)}টি কুইজে {toBengaliNumber(summary.cumulativePercentage)}% গড় নির্ভুলতা অর্জন করেছেন।
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('quizzes')}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:brightness-110 text-slate-950 font-black rounded-xl text-xs shadow-md transition"
                >
                  কুইজ হিস্ট্রি ও বিস্তারিত
                </button>
              </div>
            </>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: CHAPTERS PROGRESS (বিষয়ভিত্তিক সকল ৩০টি অধ্যায়)                   */}
          {/* ========================================================================= */}
          {activeTab === 'chapters' && (
            <div className="space-y-4">
              {/* Filter Row */}
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                {/* Subject Filter Pills */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setSubjectFilter('all')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      subjectFilter === 'all' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    সব বিষয় ({toBengaliNumber(summary.totalChapters)})
                  </button>
                  <button
                    onClick={() => setSubjectFilter('chemistry')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      subjectFilter === 'chemistry' ? 'bg-cyan-500 text-slate-950' : 'text-cyan-400 hover:text-white'
                    }`}
                  >
                    রসায়ন ({toBengaliNumber(12)})
                  </button>
                  <button
                    onClick={() => setSubjectFilter('physics')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      subjectFilter === 'physics' ? 'bg-amber-400 text-slate-950' : 'text-amber-400 hover:text-white'
                    }`}
                  >
                    পদার্থবিজ্ঞান ({toBengaliNumber(4)})
                  </button>
                  <button
                    onClick={() => setSubjectFilter('biology')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      subjectFilter === 'biology' ? 'bg-emerald-500 text-slate-950' : 'text-emerald-400 hover:text-white'
                    }`}
                  >
                    জীববিজ্ঞান ({toBengaliNumber(14)})
                  </button>
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-slate-400 text-[11px] mr-1">স্ট্যাটাস:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as any)}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 outline-none cursor-pointer"
                  >
                    <option value="all">সকল অধ্যায়</option>
                    <option value="completed">সম্পূর্ণ (১০০%)</option>
                    <option value="inProgress">চলমান</option>
                    <option value="notStarted">অনধীত</option>
                  </select>
                </div>
              </div>

              {/* Grid of Chapter Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredChapters.map(chap => {
                  const isChem = chap.subject === 'chemistry';
                  const isPhys = chap.subject === 'physics';
                  const badgeMeta = CHAPTER_BADGES_DATA.find(b => b.id === chap.badgeId);

                  return (
                    <div
                      key={chap.id}
                      className={`p-4 rounded-xl border transition ${
                        chap.isCompleted
                          ? 'bg-slate-900/90 border-emerald-500/50 shadow-sm shadow-emerald-500/10'
                          : chap.percentage > 0
                          ? 'bg-slate-900/70 border-cyan-500/40'
                          : 'bg-slate-900/40 border-slate-800 opacity-80'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                              isChem ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                              isPhys ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                              'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}>
                              {getSubjectLabel(chap.subject)}
                            </span>
                            <span className="text-xs text-slate-400">
                              {toBengaliNumber(chap.totalSlides)}টি স্লাইড
                            </span>
                          </div>
                          <h4 className="font-bold text-white text-sm leading-snug">
                            {chap.titleBn}
                          </h4>
                        </div>

                        {/* Status Tag */}
                        {chap.isCompleted ? (
                          <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[11px] font-bold shrink-0">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>১০০% সম্পন্ন</span>
                          </span>
                        ) : chap.percentage > 0 ? (
                          <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold shrink-0">
                            <span>{toBengaliNumber(chap.percentage)}% পঠিত</span>
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded-lg bg-slate-800 text-slate-400 text-[11px] font-medium shrink-0">
                            অনধীত
                          </span>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
                        <div
                          className={`h-full transition-all duration-500 ${
                            chap.isCompleted
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                              : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                          }`}
                          style={{ width: `${chap.percentage}%` }}
                        />
                      </div>

                      {/* Bottom Details & Action */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2.5 border-t border-slate-800 text-xs">
                        <div className="flex items-center gap-2">
                          {badgeMeta && (
                            <span
                              className={`flex items-center gap-1 font-semibold ${
                                chap.isUnlocked ? 'text-amber-400' : 'text-slate-500'
                              }`}
                              title={badgeMeta.descriptionBn}
                            >
                              <Medal className="h-3.5 w-3.5" />
                              <span>{badgeMeta.badgeNameBn}</span>
                            </span>
                          )}

                          {chap.bestQuiz && (
                            <span className="text-cyan-400 font-mono text-[11px] flex items-center gap-1">
                              <Target className="h-3 w-3" />
                              <span>{toBengaliNumber(chap.bestQuiz.score)}/{toBengaliNumber(chap.bestQuiz.totalQuestions)}</span>
                            </span>
                          )}
                        </div>

                        {onSelectChapter && (
                          <div className="flex items-center gap-1.5 ml-auto">
                            <button
                              onClick={() => {
                                onSelectChapter(chap.subject, chap.chapter, 'quiz');
                                onClose();
                              }}
                              className="px-2 py-1 text-[11px] font-semibold text-cyan-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition"
                              title="এই অধ্যায়ের কুইজ টেস্ট দিন"
                            >
                              কুইজ
                            </button>
                            <button
                              onClick={() => {
                                onSelectChapter(chap.subject, chap.chapter, 'slides');
                                onClose();
                              }}
                              className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition shadow-sm"
                            >
                              <span>স্লাইড পড়ুন</span>
                              <ChevronRight className="h-3 w-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: BADGES SHOWCASE (অর্জিত ব্যাজ সংগ্রহশালা)                           */}
          {/* ========================================================================= */}
          {activeTab === 'badges' && (
            <div className="space-y-4">
              {/* Filter and Search */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <button
                    onClick={() => setBadgeFilter('all')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      badgeFilter === 'all' ? 'bg-amber-400 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    সব ({toBengaliNumber(summary.totalBadges)})
                  </button>
                  <button
                    onClick={() => setBadgeFilter('unlocked')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      badgeFilter === 'unlocked' ? 'bg-emerald-500 text-slate-950 font-black' : 'text-emerald-400 hover:text-white'
                    }`}
                  >
                    অর্জিত ({toBengaliNumber(summary.unlockedBadgesCount)})
                  </button>
                  <button
                    onClick={() => setBadgeFilter('locked')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      badgeFilter === 'locked' ? 'bg-slate-700 text-white font-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    লকড ({toBengaliNumber(summary.totalBadges - summary.unlockedBadgesCount)})
                  </button>
                  <button
                    onClick={() => setBadgeFilter('chemistry')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      badgeFilter === 'chemistry' ? 'bg-cyan-500 text-slate-950 font-black' : 'text-cyan-400 hover:text-white'
                    }`}
                  >
                    রসায়ন (১২)
                  </button>
                  <button
                    onClick={() => setBadgeFilter('physics')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      badgeFilter === 'physics' ? 'bg-amber-400 text-slate-950 font-black' : 'text-amber-400 hover:text-white'
                    }`}
                  >
                    পদার্থ (৪)
                  </button>
                  <button
                    onClick={() => setBadgeFilter('biology')}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      badgeFilter === 'biology' ? 'bg-emerald-500 text-slate-950 font-black' : 'text-emerald-400 hover:text-white'
                    }`}
                  >
                    জীববিজ্ঞান (১৪)
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    value={badgeSearch}
                    onChange={(e) => setBadgeSearch(e.target.value)}
                    placeholder="ব্যাজ বা অধ্যায় খুঁজুন..."
                    className="bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400 w-44 sm:w-56"
                  />
                </div>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredBadges.map(badge => {
                  const isUnlocked = Boolean(
                    unlockedBadgesMap[badge.id] ||
                    chapterStats.find(c => c.badgeId === badge.id)?.isCompleted
                  );

                  return (
                    <div
                      key={badge.id}
                      className={`p-4 rounded-xl border transition relative overflow-hidden flex flex-col justify-between ${
                        isUnlocked
                          ? 'bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border-amber-500/50 shadow-md shadow-amber-500/10'
                          : 'bg-slate-900/60 border-slate-800 opacity-60'
                      }`}
                    >
                      {/* Top tier pill */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                          badge.tier === 'master' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                          badge.tier === 'diamond' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' :
                          'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}>
                          {badge.tier.toUpperCase()} TIER
                        </span>

                        <span className="font-mono text-xs font-bold text-amber-400 flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          +৫০০ XP
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className={`p-3 rounded-2xl shrink-0 ${
                          isUnlocked
                            ? 'bg-gradient-to-tr from-amber-500/30 to-yellow-500/20 border border-amber-400/60 shadow-lg'
                            : 'bg-slate-800 border border-slate-700'
                        }`}>
                          {renderBadgeIcon(badge.iconType, isUnlocked)}
                        </div>

                        <div>
                          <h4 className={`text-sm font-black leading-tight ${isUnlocked ? 'text-amber-300' : 'text-slate-300'}`}>
                            {badge.badgeNameBn}
                          </h4>
                          <span className="text-[11px] text-slate-400 block font-sans">
                            {badge.badgeNameEn}
                          </span>
                          <span className="text-[10px] text-cyan-400/90 font-medium">
                            {badge.chapterTitleBn}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        {badge.descriptionBn}
                      </p>

                      {/* Status Footnote */}
                      <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs mt-auto">
                        {isUnlocked ? (
                          <span className="flex items-center gap-1 font-bold text-emerald-400">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>অর্জিত সম্মাননা</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-slate-500">
                            <Lock className="h-3.5 w-3.5" />
                            <span>অধ্যায় সম্পন্ন করে আনলক করুন</span>
                          </span>
                        )}

                        {onSelectChapter && (
                          <button
                            onClick={() => {
                              onSelectChapter(badge.subject, badge.chapter, 'slides');
                              onClose();
                            }}
                            className="text-xs font-bold text-cyan-400 hover:text-white flex items-center gap-1"
                          >
                            <span>অধ্যায়ে যান</span>
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: QUIZZES PERFORMANCE & HISTORY (কুইজ পারফরম্যান্স ও স্কোর)            */}
          {/* ========================================================================= */}
          {activeTab === 'quizzes' && (
            <div className="space-y-5">
              {/* Top Banner: Quiz Scores Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                  <span className="text-xs text-slate-400">সর্বমোট অর্জিত পয়েন্ট:</span>
                  <div className="text-2xl font-black text-cyan-300 mt-0.5">
                    {toBengaliNumber(summary.cumulativeScore)} <span className="text-sm text-slate-400 font-normal">/ {toBengaliNumber(summary.cumulativePossible)}</span>
                  </div>
                  <span className="text-[11px] text-cyan-400 mt-1 block">
                    সার্বিক সঠিকতার হার: {toBengaliNumber(summary.cumulativePercentage)}%
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                  <span className="text-xs text-slate-400">মোট কুইজ প্রচেষ্টা:</span>
                  <div className="text-2xl font-black text-emerald-300 mt-0.5">
                    {toBengaliNumber(summary.totalQuizzesTaken)}টি
                  </div>
                  <span className="text-[11px] text-emerald-400 mt-1 block">
                    নিয়মিত অনুশীলনে দক্ষতা বৃদ্ধি
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30">
                  <span className="text-xs text-slate-400">কুইজ থেকে অর্জিত বোনাস XP:</span>
                  <div className="text-2xl font-black text-amber-300 mt-0.5">
                    +{toBengaliNumber(summary.cumulativeScore * 50)} XP
                  </div>
                  <span className="text-[11px] text-amber-400 mt-1 block">
                    প্রতিটি সঠিক উত্তরে ৫০ XP
                  </span>
                </div>
              </div>

              {/* Recent Quiz Attempts Table */}
              <div className="space-y-2.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <span>সাম্প্রতিক কুইজ পরীক্ষা ও ইতিহাস (Recent Quiz Records)</span>
                </h4>

                {quizRecords.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 bg-slate-950/40 rounded-xl border border-slate-800">
                    <Target className="h-8 w-8 mx-auto text-slate-600 mb-2" />
                    <p className="font-medium">এখনও কোনো কুইজ সম্পন্ন করা হয়নি।</p>
                    <p className="text-xs text-slate-500 mt-1">যেকোনো অধ্যায়ে গিয়ে কুইজ টেস্টে অংশগ্রহণ করুন!</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900 border-b border-slate-800 text-[11px] uppercase font-bold text-slate-400">
                        <tr>
                          <th className="px-4 py-3">শিক্ষার্থী / তারিখ</th>
                          <th className="px-4 py-3">বিষয় ও অধ্যায়</th>
                          <th className="px-4 py-3">স্কোর</th>
                          <th className="px-4 py-3">শতকরা</th>
                          <th className="px-4 py-3">সময়</th>
                          <th className="px-4 py-3 text-right">পদক্ষেপ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {quizRecords.map((entry) => {
                          const isPerfect = entry.percentage === 100;
                          return (
                            <tr key={entry.id} className="hover:bg-slate-900/50 transition">
                              <td className="px-4 py-3">
                                <div className="font-bold text-white">{entry.studentName}</div>
                                <div className="text-[10px] text-slate-500">{entry.formattedDate}</div>
                              </td>
                              <td className="px-4 py-3">
                                <span className="font-semibold text-cyan-300">
                                  {getSubjectLabel(entry.subject)} · অধ্যায় {toBengaliNumber(entry.chapter)}
                                </span>
                              </td>
                              <td className="px-4 py-3 font-mono font-bold text-white">
                                {toBengaliNumber(entry.score)} / {toBengaliNumber(entry.totalQuestions)}
                              </td>
                              <td className="px-4 py-3">
                                <span className={`px-2 py-0.5 rounded font-black text-[11px] ${
                                  isPerfect
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                    : entry.percentage >= 80
                                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                }`}>
                                  {toBengaliNumber(entry.percentage)}%
                                </span>
                              </td>
                              <td className="px-4 py-3 text-slate-400">
                                {formatDurationBn(entry.timeSpentSeconds)}
                              </td>
                              <td className="px-4 py-3 text-right">
                                {onSelectChapter && (
                                  <button
                                    onClick={() => {
                                      onSelectChapter(entry.subject, entry.chapter, 'quiz');
                                      onClose();
                                    }}
                                    className="px-2.5 py-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded text-[11px] transition shadow-sm"
                                  >
                                    পুনরায় কুইজ দিন
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* MODAL FOOTER                                                              */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-t border-slate-800 bg-slate-950/90 text-xs shrink-0">
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>প্রতিটি অধ্যায়ের স্লাইড ১০০% সম্পন্ন করলে স্বয়ংক্রিয়ভাবে অধ্যায়ের ব্যাজ আনলক হয়।</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition border border-slate-700 ml-auto"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
