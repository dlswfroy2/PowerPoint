import React, { useState } from 'react';
import { 
  Trophy, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Award, 
  ArrowRight, 
  Zap, 
  Flame, 
  FlaskConical, 
  Atom, 
  Dna, 
  Sun, 
  Apple, 
  Droplet, 
  Waves, 
  BookOpen, 
  Microscope, 
  Heart, 
  ShieldCheck, 
  Activity,
  Layers,
  Medal,
  Check
} from 'lucide-react';
import { CHAPTER_BADGES_DATA, ChapterBadgeMeta } from '../data/completionBadgesData';

interface CompletionBadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedBadges: Record<string, { unlockedAt: string; xp: number }>;
  onSelectChapter?: (subject: 'chemistry' | 'physics' | 'biology', chapter: number) => void;
  activeSubject?: 'chemistry' | 'physics' | 'biology';
  activeChapter?: number;
  viewedSlidesMap?: Record<string, number[]>;
}

export const CompletionBadgesModal: React.FC<CompletionBadgesModalProps> = ({
  isOpen,
  onClose,
  unlockedBadges,
  onSelectChapter,
  activeSubject = 'chemistry',
  activeChapter = 2,
  viewedSlidesMap = {}
}) => {
  const [filterSubject, setFilterSubject] = useState<'all' | 'chemistry' | 'physics' | 'biology' | 'unlocked'>('all');

  if (!isOpen) return null;

  const toBengaliNumber = (num: number): string => {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
  };

  const unlockedCount = Object.keys(unlockedBadges).length;
  const totalBadges = CHAPTER_BADGES_DATA.length;
  const totalXP = unlockedCount * 500;
  const overallPercentage = Math.round((unlockedCount / totalBadges) * 100);

  const filteredBadges = CHAPTER_BADGES_DATA.filter(badge => {
    if (filterSubject === 'all') return true;
    if (filterSubject === 'unlocked') return !!unlockedBadges[badge.id];
    return badge.subject === filterSubject;
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

  // Rough estimation of total slides per chapter for progress estimation
  const getChapterTotalSlides = (subject: string, chapter: number): number => {
    if (subject === 'chemistry') {
      if (chapter === 2) return 20;
      if (chapter === 5) return 16;
      if (chapter === 1) return 12;
      if (chapter === 9 || chapter === 10 || chapter === 11 || chapter === 12) return 10;
      return 14;
    }
    if (subject === 'physics') {
      if (chapter === 4 || chapter === 5 || chapter === 6 || chapter === 7) return 10;
      return 10;
    }
    if (subject === 'biology') {
      return 20;
    }
    return 15;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-amber-500/40 shadow-2xl shadow-amber-500/10 overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Celebration Gold Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-slate-800/80 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/40 shadow-inner">
              <Trophy className="h-6 w-6 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                  <span>অধ্যায় সমাপ্তি ব্যাজ ও সম্মাননা</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] rounded-full bg-amber-400 text-slate-950 font-black uppercase">
                    Badges System
                  </span>
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                প্রতিটি অধ্যায়ের সকল স্লাইড সফলভাবে পড়ে অর্জন করুন বিশেষ সম্মাননা মেডেল ও ৫০০ XP!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title="বন্ধ করুন"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Stats Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-4 sm:p-6 bg-slate-950/40 border-b border-slate-800/80">
          {/* Card 1: Unlocked Badges */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-amber-500/30">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">অর্জিত ব্যাজ</div>
              <div className="text-base sm:text-lg font-black text-amber-300 font-mono">
                {toBengaliNumber(unlockedCount)} / {toBengaliNumber(totalBadges)}
              </div>
            </div>
          </div>

          {/* Card 2: Academic XP */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">মোট সায়েন্স XP</div>
              <div className="text-base sm:text-lg font-black text-cyan-300 font-mono">
                +{toBengaliNumber(totalXP)} XP
              </div>
            </div>
          </div>

          {/* Card 3: Overall Progress */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">সিলেবাস সমাপ্তি</div>
              <div className="text-base sm:text-lg font-black text-emerald-300 font-mono">
                {toBengaliNumber(overallPercentage)}%
              </div>
            </div>
          </div>

          {/* Card 4: Current Badge Status */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-indigo-500/30">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0">
              <Medal className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">পরবর্তী লক্ষ্য</div>
              <div className="text-xs font-bold text-indigo-300 truncate max-w-[120px]">
                {unlockedCount === totalBadges ? 'সকল ব্যাজ অর্জিত!' : 'নতুন অধ্যায় সম্পূর্ণ করুন'}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 bg-slate-900/80 border-b border-slate-800 overflow-x-auto text-xs">
          <button
            onClick={() => setFilterSubject('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition whitespace-nowrap ${
              filterSubject === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            সকল ব্যাজ ({toBengaliNumber(totalBadges)})
          </button>

          <button
            onClick={() => setFilterSubject('chemistry')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition whitespace-nowrap ${
              filterSubject === 'chemistry'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span>🧪 রসায়ন</span>
            <span className="text-[10px] opacity-80">(১২)</span>
          </button>

          <button
            onClick={() => setFilterSubject('physics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition whitespace-nowrap ${
              filterSubject === 'physics'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span>⚡ পদার্থবিজ্ঞান</span>
            <span className="text-[10px] opacity-80">(৪)</span>
          </button>

          <button
            onClick={() => setFilterSubject('biology')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition whitespace-nowrap ${
              filterSubject === 'biology'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span>🌿 জীববিজ্ঞান</span>
            <span className="text-[10px] opacity-80">(১৪)</span>
          </button>

          <button
            onClick={() => setFilterSubject('unlocked')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition whitespace-nowrap ml-auto ${
              filterSubject === 'unlocked'
                ? 'bg-yellow-400 text-slate-950 shadow-md font-black'
                : 'text-amber-400 border border-amber-500/40 hover:bg-amber-950/40'
            }`}
          >
            <Trophy className="h-3.5 w-3.5" />
            <span>অর্জিত ব্যাজ ({toBengaliNumber(unlockedCount)})</span>
          </button>
        </div>

        {/* Badges Grid View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {filteredBadges.map((badge: ChapterBadgeMeta) => {
              const isUnlocked = !!unlockedBadges[badge.id];
              const unlockedInfo = unlockedBadges[badge.id];
              const chapterKey = `${badge.subject}_ch${badge.chapter}`;
              const viewedSlides = viewedSlidesMap[chapterKey] || [];
              const totalSlides = getChapterTotalSlides(badge.subject, badge.chapter);
              const progressPct = isUnlocked 
                ? 100 
                : Math.min(99, Math.round((viewedSlides.length / totalSlides) * 100));

              return (
                <div
                  key={badge.id}
                  className={`relative flex flex-col justify-between p-4 rounded-2xl border transition-all duration-300 group ${
                    isUnlocked
                      ? 'bg-gradient-to-br from-amber-950/40 via-slate-900/90 to-slate-950 border-amber-400/80 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/50'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
                >
                  {/* Badge Header: Icon + Status Tag */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className={`p-3 rounded-2xl border transition-transform group-hover:scale-105 shadow-md ${
                        isUnlocked
                          ? 'bg-gradient-to-br from-amber-400/30 to-yellow-600/30 border-amber-400/80 shadow-amber-500/20'
                          : 'bg-slate-950 border-slate-800 opacity-60'
                      }`}>
                        {renderBadgeIcon(badge.iconType, isUnlocked)}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        {isUnlocked ? (
                          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-sm">
                            <Check className="h-3 w-3 stroke-[3]" /> অর্জিত (+৫০০ XP)
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                            <Lock className="h-2.5 w-2.5" /> লকড
                          </span>
                        )}

                        <span className="text-[10px] font-mono text-slate-400">
                          {badge.subject === 'chemistry' ? 'রসায়ন' : badge.subject === 'physics' ? 'পদার্থ' : 'জীববিজ্ঞান'} · অধ্যায় {toBengaliNumber(badge.chapter)}
                        </span>
                      </div>
                    </div>

                    {/* Badge Title & Descriptions */}
                    <div className="space-y-1">
                      <h3 className={`text-base font-extrabold leading-snug ${isUnlocked ? 'text-amber-300' : 'text-slate-200'}`}>
                        {badge.badgeNameBn}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono italic">
                        {badge.badgeNameEn}
                      </p>
                      <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {badge.descriptionBn}
                      </p>
                    </div>
                  </div>

                  {/* Progress and Action Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2.5">
                    {/* Visual Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
                        <span className="text-slate-400">
                          {isUnlocked ? 'সম্পূর্ণ সমাপ্ত' : `স্লাইড সমাপ্তি: ${toBengaliNumber(viewedSlides.length)}/${toBengaliNumber(totalSlides)}`}
                        </span>
                        <span className={isUnlocked ? 'text-amber-400 font-bold' : 'text-cyan-400 font-bold'}>
                          {toBengaliNumber(progressPct)}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            isUnlocked 
                              ? 'bg-gradient-to-r from-amber-400 to-yellow-300 shadow-[0_0_8px_rgba(251,191,36,0.8)]' 
                              : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                          }`}
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => {
                        onSelectChapter?.(badge.subject, badge.chapter);
                        onClose();
                      }}
                      className={`w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition shadow-sm ${
                        isUnlocked
                          ? 'bg-amber-500/20 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/40'
                          : 'bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 border border-slate-700'
                      }`}
                    >
                      <span>{isUnlocked ? 'অধ্যায়টি পুনরায় দেখুন' : progressPct > 0 ? 'পড়া চালিয়ে যান' : 'অধ্যায় শুরু করুন'}</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-8 py-3.5 border-t border-slate-800/80 bg-slate-950/70 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
            <span>প্রতিটি অধ্যায়ের ২০টি স্লাইড পড়া শেষ হলে সাথে সাথে ব্যাজ আনলক হয় এবং হেডারে ট্রফি যুক্ত হয়।</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
