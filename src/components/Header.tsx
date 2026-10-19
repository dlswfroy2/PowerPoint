import { ChapterProgressInfo } from '../types/presentation';
import React from 'react';
import { 
  Play, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Layers, 
  Atom, 
  Cpu, 
  Scale, 
  CheckCircle2, 
  Compass, 
  Beaker, 
  TrendingUp, 
  Sparkles, 
  BookOpen, 
  ShieldAlert, 
  FlaskConical,
  Grid,
  Search,
  Activity,
  Link2,
  Droplets,
  Box,
  Dna,
  Zap,
  Flame,
  Thermometer,
  Waves,
  Sun,
  Radio,
  Volume2,
  Download,
  Upload,
  RotateCcw,
  Presentation,
  Battery,
  Clock,
  Award,
  Trophy,
  HelpCircle,
  ChevronDown,
  X,
  Apple,
  Orbit
} from 'lucide-react';

export type AppTab = 
  | 'slides' 
  | 'simulator' 
  | 'molecularViewer3D'
  | 'aufbau' 
  | 'isotope' 
  | 'kinetic' 
  | 'diffusion' 
  | 'heating' 
  | 'safety' 
  | 'quiz'
  | 'ptable' 
  | 'positionFinder' 
  | 'trends' 
  | 'bondingLab' 
  | 'formulaBuilder' 
  | 'compoundProps'
  | 'workEnergyLab'
  | 'energyConservationLab'
  | 'efficiencyLab'
  | 'pressureLab'
  | 'hydraulicLab'
  | 'archimedesLab'
  | 'depthPressureLab'
  | 'thermalExpansionLab'
  | 'calorimetryLab'
  | 'anomalousWaterLab'
  | 'waveSimulatorLab'
  | 'echoLab'
  | 'audioSpectrumLab'
  | 'fiveKingdomsLab'
  | 'bioCh1DiagramStudioLab'
  | 'binomialLab'
  | 'bioBranchesLab'
  | 'digestiveSystemLab'
  | 'nutritionBmiLab'
  | 'plantNutritionLab'
  | 'bioenergeticsLab'
  | 'photosynthesisLab'
  | 'respirationLab'
  | 'cellDivisionLab'
  | 'crossingOverLab'
  | 'cellCycleLab'
  | 'cellExplorerLab'
  | 'cellMembraneLab'
  | 'plantVsAnimalLab'
  | 'cellTissueLab'
  | 'moleCalculatorLab'
  | 'molarityLab'
  | 'limitingReactantLab'
  | 'empiricalFormulaLab'
  | 'oxidationLab'
  | 'redoxLab'
  | 'leChatelierLab'
  | 'reactionClassifyLab'
  | 'reactionsLab'
  | 'electrochemistryLab'
  | 'daniellCellLab'
  | 'electroplatingLab'
  | 'dryCellLab'
  | 'bondEnergyLab'
  | 'virtualRackLab'
  | 'acidBaseLab'
  | 'phScaleLab'
  | 'titrationLab'
  | 'saltHydrolysisLab'
  | 'gallery3D';

interface HeaderProps {
  activeChapter: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
  setActiveChapter: (c: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14) => void;
  activeSubject?: 'chemistry' | 'physics' | 'biology';
  setActiveSubject?: (s: 'chemistry' | 'physics' | 'biology') => void;
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  openPresenterModal: () => void;
  openPrintView: () => void;
  openPowerPointShow?: () => void;
  onExportPptx?: () => void;
  isExportingPptx?: boolean;
  onOpenPptxUpload?: () => void;
  isCustomSlidesActive?: boolean;
  onResetCustomSlides?: () => void;
  openBoardCQModal?: () => void;
  openTimedExamModal?: () => void;
  openFlashcardsModal?: () => void;
  openStudentNotesModal?: () => void;
  chapterProgress?: ChapterProgressInfo;
  openAchievementDashboard?: () => void;
  earnedBadgesCount?: number;
}

const SUBJECT_OPTIONS = [
  { id: 'chemistry', label: 'রসায়ন' },
  { id: 'physics', label: 'পদার্থবিজ্ঞান' },
  { id: 'biology', label: 'জীববিজ্ঞান' },
] as const;

const CHAPTER_OPTIONS: Record<'chemistry' | 'physics' | 'biology', { id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14; label: string }[]> = {
  chemistry: [
    { id: 1, label: 'অধ্যায় ১: রসায়নের ধারণা' },
    { id: 2, label: 'অধ্যায় ২: পদার্থের অবস্থা' },
    { id: 3, label: 'অধ্যায় ৩: পদার্থের গঠন' },
    { id: 4, label: 'অধ্যায় ৪: পর্যায় সারণি' },
    { id: 5, label: 'অধ্যায় ৫: রাসায়নিক বন্ধন' },
    { id: 6, label: 'অধ্যায় ৬: মোলের ধারণা ও গণনা' },
    { id: 7, label: 'অধ্যায় ৭: রাসায়নিক বিক্রিয়া' },
    { id: 8, label: 'অধ্যায় ৮: রসায়ন ও শক্তি' },
    { id: 9, label: 'অধ্যায় ৯: এসিড-ক্ষার সমতা' },
    { id: 10, label: 'অধ্যায় ১০: খনিজ সম্পদ: ধাতু-অধাতু' },
    { id: 11, label: 'অধ্যায় ১১: খনিজ সম্পদ: জীবাশ্ম' },
    { id: 12, label: 'অধ্যায় ১২: আমাদের জীবনে রসায়ন' },
  ],
  physics: [
    { id: 4, label: 'অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি' },
    { id: 5, label: 'অধ্যায় ৫: পদার্থের অবস্থা ও চাপ' },
    { id: 6, label: 'অধ্যায় ৬: বস্তুর উপর তাপের প্রভাব' },
    { id: 7, label: 'অধ্যায় ৭: তরঙ্গ ও শব্দ' },
  ],
  biology: [
    { id: 1, label: 'অধ্যায় ১: জীবন পাঠ' },
    { id: 2, label: 'অধ্যায় ২: জীবকোষ ও টিস্যু' },
    { id: 3, label: 'অধ্যায় ৩: কোষ বিভাজন' },
    { id: 4, label: 'অধ্যায় ৪: জীবনীশক্তি' },
    { id: 5, label: 'অধ্যায় ৫: খাদ্য, পুষ্টি এবং পরিপাক' },
    { id: 6, label: 'অধ্যায় ৬: জীবে পরিবহন' },
    { id: 7, label: 'অধ্যায় ৭: গ্যাসীয় বিনিময়' },
    { id: 8, label: 'অধ্যায় ৮: রেচন প্রক্রিয়া' },
    { id: 9, label: 'অধ্যায় ৯: দৃঢ়তা প্রদান ও চলন' },
    { id: 10, label: 'অধ্যায় ১০: সমন্বয়' },
    { id: 11, label: 'অধ্যায় ১১: জীবের প্রজনন' },
    { id: 12, label: 'অধ্যায় ১২: জীবের বংশগতি ও বিবর্তন' },
    { id: 13, label: 'অধ্যায় ১৩: জীবের পরিবেশ' },
    { id: 14, label: 'অধ্যায় ১৪: জীবপ্রযুক্তি' },
  ],
};

const toBengali = (num: number): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
};

export const Header: React.FC<HeaderProps> = ({
  activeChapter,
  setActiveChapter,
  activeSubject = 'chemistry',
  setActiveSubject,
  activeTab,
  setActiveTab,
  isFullscreen,
  toggleFullscreen,
  openPresenterModal,
  openPrintView,
  openPowerPointShow,
  onExportPptx,
  isExportingPptx = false,
  onOpenPptxUpload,
  isCustomSlidesActive = false,
  onResetCustomSlides,
  openBoardCQModal,
  openTimedExamModal,
  openFlashcardsModal,
  openStudentNotesModal,
  chapterProgress,
  openAchievementDashboard,
  earnedBadgesCount
}) => {
  const [isToolsMenuOpen, setIsToolsMenuOpen] = React.useState(false);
  const toolsMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(event.target as Node)) {
        setIsToolsMenuOpen(false);
      }
    };
    if (isToolsMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToolsMenuOpen]);

  // Theme styling based on active subject
  const subjectTheme = 
    activeSubject === 'biology' 
      ? { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', activeTab: 'bg-emerald-500 text-slate-950' }
      : activeSubject === 'physics'
      ? { text: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10', activeTab: 'bg-amber-500 text-slate-950' }
      : { text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', activeTab: 'bg-cyan-500 text-slate-950' };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a1226]/95 backdrop-blur-md shadow-lg border-b border-slate-800 text-slate-100">
      {/* Visual Chapter Completion Progress Bar in Header */}
      <div 
        onClick={openAchievementDashboard}
        className="relative w-full h-1.5 bg-slate-900/95 overflow-hidden group cursor-pointer"
        title={chapterProgress ? `অধ্যায় অগ্রগতি: ${toBengali(chapterProgress.viewedCount)}/${toBengali(chapterProgress.totalSlides)}টি স্লাইড পঠিত (${toBengali(chapterProgress.percentage)}%)` : 'অধ্যায় স্লাইড সমাপ্তি অগ্রগতি'}
      >
        {/* Background track */}
        <div className="absolute inset-0 bg-slate-900/60" />
        {/* Animated Fill Bar */}
        <div 
          className="relative h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(34,211,238,0.7)]"
          style={{ width: `${Math.min(100, Math.max(0, chapterProgress?.percentage || 0))}%` }}
        />
        {/* Completion Shimmer when 100% */}
        {chapterProgress && chapterProgress.percentage >= 100 && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
        )}
      </div>

      {/* ========================================================================= */}
      {/* ROW 1: BRAND, SUBJECT & CHAPTER SELECTOR, PRESENTATION TOOLS              */}
      {/* ========================================================================= */}
      <div className="relative mx-auto flex items-center justify-between gap-1.5 sm:gap-4 px-2.5 sm:px-5 py-2 bg-[#0c1730] border-b border-blue-900/60">
        
        {/* Left: Logo & Subject / Chapter Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 flex-1 sm:flex-initial">
          {/* Logo Section inside clean rounded white pill */}
          <div className="flex items-center justify-center rounded-xl bg-white px-1.5 sm:px-2 py-1 shadow-sm border border-slate-200 shrink-0 h-9 sm:h-10">
            <img 
              src="/logo.gif" 
              alt="প্রেজেন্টেশন ও ল্যাব" 
              className="h-7 sm:h-8 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
            />
          </div>

          <span className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg ${subjectTheme.bg} ${subjectTheme.text} ring-1 ${subjectTheme.border} shrink-0 hidden md:flex`}>
            {activeSubject === 'biology' ? (
              activeChapter === 1 ? <BookOpen className="h-5 w-5 text-emerald-400" /> :
              activeChapter === 4 ? <Sun className="h-5 w-5 text-emerald-400" /> :
              activeChapter === 5 ? <Apple className="h-5 w-5 text-emerald-400" /> :
              <Dna className="h-5 w-5 animate-pulse" />
            ) : activeSubject === 'physics' ? (
              activeChapter === 4 ? <Zap className="h-5 w-5" /> : activeChapter === 6 ? <Flame className="h-5 w-5 text-amber-400" /> : activeChapter === 7 ? <Waves className="h-5 w-5 text-cyan-400" /> : <Droplets className="h-5 w-5" />
            ) : activeChapter === 1 ? (
              <FlaskConical className="h-5 w-5" />
            ) : activeChapter === 2 ? (
              <Compass className="h-5 w-5" />
            ) : activeChapter === 3 ? (
              <Atom className="h-5 w-5" />
            ) : activeChapter === 4 ? (
              <Grid className="h-5 w-5" />
            ) : activeChapter === 5 ? (
              <Link2 className="h-5 w-5" />
            ) : activeChapter === 6 ? (
              <Scale className="h-5 w-5 text-amber-400" />
            ) : activeChapter === 7 ? (
              <Flame className="h-5 w-5 text-rose-400" />
            ) : (
              <Zap className="h-5 w-5 text-amber-400 animate-pulse" />
            )}
          </span>

          {/* ========================================================================= */}
          {/* দ্বি-বিভক্ত সিলেক্টর: ১. বিষয়ের নাম ও ২. অধ্যায়ের নাম (TWO-PART SELECTOR) */}
          {/* ========================================================================= */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 flex-1 sm:flex-initial">
            {/* পার্ট ১: বিষয়ের নাম (Subject Selector Part) */}
            <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400 rounded-xl px-2 py-1 shadow-sm transition group shrink-0">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1.5 hidden xs:inline flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                বিষয়:
              </span>
              <select
                value={activeSubject}
                onChange={(e) => {
                  const newSubj = e.target.value as 'chemistry' | 'physics' | 'biology';
                  if (setActiveSubject) {
                    setActiveSubject(newSubj);
                  }
                  // Default initial chapter per subject
                  const defChapter = newSubj === 'physics' ? 4 : 1;
                  setActiveChapter(defChapter);
                  setActiveTab('slides');
                }}
                className={`bg-transparent font-black text-xs sm:text-sm ${
                  activeSubject === 'biology' ? 'text-emerald-300' :
                  activeSubject === 'physics' ? 'text-amber-300' :
                  'text-cyan-300'
                } outline-none cursor-pointer pr-1 transition`}
                title="বিষয় নির্বাচন করুন (রসায়ন / পদার্থবিজ্ঞান / জীববিজ্ঞান)"
              >
                {SUBJECT_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id} className="bg-slate-900 text-white font-medium">
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* ডিভাইডার / সেপারেটর */}
            <span className="text-slate-600 font-light select-none hidden xs:inline">/</span>

            {/* পার্ট ২: অধ্যায়ের নাম (Chapter Selector Part) */}
            <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400 rounded-xl px-2 py-1 shadow-sm transition min-w-0 flex-1 sm:flex-initial">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1.5 hidden xs:inline flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                অধ্যায়:
              </span>
              <select
                value={activeChapter}
                onChange={(e) => {
                  const nextChapter = Number(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
                  setActiveChapter(nextChapter);
                  setActiveTab('slides');
                }}
                className="bg-transparent text-white font-bold text-xs sm:text-sm outline-none cursor-pointer transition w-full max-w-[130px] xs:max-w-[170px] sm:max-w-[220px] md:max-w-[270px] truncate"
                title="অধ্যায় নির্বাচন করুন"
              >
                {(CHAPTER_OPTIONS[activeSubject] || []).map((c) => (
                  <option key={c.id} value={c.id} className="bg-slate-900 text-white font-medium">
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Chapter Slide Progress Badge in Header */}
            {chapterProgress && (
              <button
                type="button"
                onClick={openAchievementDashboard}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  chapterProgress.percentage >= 100
                    ? 'bg-emerald-950/80 border-emerald-400/80 text-emerald-300 shadow-sm shadow-emerald-500/20 hover:brightness-125 hover:border-emerald-300'
                    : 'bg-slate-900/90 border-slate-700/80 text-cyan-300 hover:border-cyan-400'
                }`}
                title={`অধ্যায় সমাপ্তি অগ্রগতি: ${toBengali(chapterProgress.viewedCount)}/${toBengali(chapterProgress.totalSlides)}টি স্লাইড দেখা হয়েছে (${toBengali(chapterProgress.percentage)}%) - শিক্ষার্থী অর্জন ড্যাশবোর্ড খুলুন`}
              >
                {chapterProgress.percentage >= 100 ? (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="hidden sm:inline">১০০% সম্পন্ন!</span>
                    <span className="sm:hidden">১০০%</span>
                    <Trophy className="h-3 w-3 text-amber-400 ml-0.5 animate-bounce" />
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                    <span className="hidden md:inline text-slate-400 font-normal">পঠিত:</span>
                    <span className="font-mono font-bold text-white">{toBengali(chapterProgress.viewedCount)}/{toBengali(chapterProgress.totalSlides)}</span>
                    <span className="text-[10px] text-cyan-400 font-mono">({toBengali(chapterProgress.percentage)}%)</span>
                  </span>
                )}
              </button>
            )}

            {isCustomSlidesActive && (
              <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shrink-0">
                <Sparkles className="h-3 w-3" /> কাস্টম PPTX
              </span>
            )}
          </div>
        </div>

        {/* Right: Presentation & PowerPoint Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* 1. PowerPoint Show Mode (Hero Button) */}
          {activeTab === 'slides' && openPowerPointShow && (
            <button
              onClick={openPowerPointShow}
              title="পূর্ণপর্দায় পাওয়ারপয়েন্ট স্লাইডশো শুরু করুন"
              className="flex items-center gap-1 sm:gap-1.5 rounded-lg border border-cyan-500/60 bg-gradient-to-r from-cyan-600 to-blue-600 px-2 sm:px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition hover:brightness-110 shrink-0 whitespace-nowrap"
            >
              <Play className="h-3.5 w-3.5 fill-white" />
              <span className="hidden xs:inline">স্লাইডশো (F5)</span>
            </button>
          )}

          {/* Student Achievement Dashboard Button */}
          {openAchievementDashboard && (
            <button
              onClick={openAchievementDashboard}
              title="শিক্ষার্থী অর্জন ড্যাশবোর্ড: অধ্যায় সমাপ্তি, ব্যাজ ও কুইজ স্কোর"
              className="flex items-center gap-1.5 rounded-lg border border-amber-500/50 bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/10 px-2 sm:px-2.5 py-1.5 text-xs font-bold text-amber-300 transition hover:border-amber-400 hover:brightness-125 shadow-sm shadow-amber-500/10 shrink-0 whitespace-nowrap"
            >
              <Trophy className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
              <span className="hidden md:inline">অর্জন ড্যাশবোর্ড</span>
              <span className="md:hidden">অর্জন</span>
              {typeof earnedBadgesCount === 'number' && earnedBadgesCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] bg-amber-400 text-slate-950 font-black rounded-full">
                  {toBengali(earnedBadgesCount)}
                </span>
              )}
            </button>
          )}

          {/* Desktop Only Extra Tools (Visible on lg: and up) */}
          <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
            {/* Board CQ Bank Button */}
            {openBoardCQModal && (
              <button
                onClick={openBoardCQModal}
                title="বোর্ড সৃজনশীল প্রশ্ন (CQ) ব্যাংক ও ৪ ধাপের পূর্ণাঙ্গ মডেল উত্তর"
                className="flex items-center gap-1.5 rounded-lg border border-indigo-500/40 bg-indigo-950/40 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-indigo-300 transition hover:border-indigo-400 hover:bg-indigo-900/60 hover:text-white shrink-0 whitespace-nowrap"
              >
                <Award className="h-3.5 w-3.5 text-indigo-400" />
                <span className="hidden xl:inline">বোর্ড CQ</span>
              </button>
            )}

            {/* Timed Mock Exam Button */}
            {openTimedExamModal && (
              <button
                onClick={openTimedExamModal}
                title="টাইমারসহ লাইভ মক টেস্ট ও স্বয়ংক্রিয় মূল্যায়ন"
                className="flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-900/60 hover:text-white shrink-0 whitespace-nowrap"
              >
                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                <span className="hidden xl:inline">মক টেস্ট</span>
              </button>
            )}

            {/* Flashcards Button */}
            {openFlashcardsModal && (
              <button
                onClick={openFlashcardsModal}
                title="স্মার্ট রিভিশন ফ্ল্যাশকার্ড ও গুরুত্বপূর্ণ নোটস"
                className="flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-950/40 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-amber-300 transition hover:border-amber-400 hover:bg-amber-900/60 hover:text-white shrink-0 whitespace-nowrap"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span className="hidden xl:inline">ফ্ল্যাশকার্ড</span>
              </button>
            )}

            {/* Student Notes Button */}
            {openStudentNotesModal && (
              <button
                onClick={openStudentNotesModal}
                title="শিক্ষার্থীর ব্যক্তিগত নোটবুক ও রিভিশন পয়েন্ট"
                className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-900/60 hover:text-white shrink-0 whitespace-nowrap"
              >
                <FileText className="h-3.5 w-3.5 text-cyan-400" />
                <span className="hidden xl:inline">নোটস</span>
              </button>
            )}

            {/* Handout Print */}
            <button
              onClick={openPrintView}
              title="ক্লাস হ্যান্ডআউট প্রিন্ট বা PDF সংরক্ষণ"
              className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/90 px-2 sm:px-2.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white shrink-0 whitespace-nowrap"
            >
              <BookOpen className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden xl:inline">হ্যান্ডআউট</span>
            </button>

            {/* Presenter View */}
            {activeTab === 'slides' && (
              <button
                onClick={openPresenterModal}
                title="প্রেজেন্টার মোড ও শিক্ষক স্পিকার নোটস"
                className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/90 px-2 sm:px-2.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white shrink-0 whitespace-nowrap"
              >
                <FileText className="h-3.5 w-3.5 text-cyan-400" />
                <span className="hidden xl:inline">প্রেজেন্টার</span>
              </button>
            )}

            {/* PPTX Export */}
            {onExportPptx && (
              <button
                onClick={onExportPptx}
                disabled={isExportingPptx}
                title="মাইক্রোসফট পাওয়ারপয়েন্ট (.pptx) ফাইল ডাউনলোড করুন"
                className="flex items-center gap-1.5 rounded-lg border border-orange-500/40 bg-orange-500/10 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-orange-300 transition hover:border-orange-500/60 hover:bg-orange-500/20 hover:text-white disabled:opacity-50 shrink-0 whitespace-nowrap"
              >
                <Presentation className="h-3.5 w-3.5 text-orange-400" />
                <span className="hidden 2xl:inline">{isExportingPptx ? 'তৈরি হচ্ছে...' : 'PPTX ডাউনলোড'}</span>
              </button>
            )}

            {/* PPTX Upload */}
            {onOpenPptxUpload && (
              <button
                onClick={onOpenPptxUpload}
                title="সম্পাদিত পাওয়ারপয়েন্ট (.pptx) ফাইল আপলোড করুন"
                className="flex items-center gap-1.5 rounded-lg border border-indigo-500/40 bg-indigo-500/10 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-indigo-300 transition hover:border-indigo-500/60 hover:bg-indigo-500/20 hover:text-white shrink-0 whitespace-nowrap"
              >
                <Upload className="h-3.5 w-3.5 text-indigo-400" />
                <span className="hidden 2xl:inline">PPTX আপলোড</span>
              </button>
            )}

            {/* Reset to Original */}
            {isCustomSlidesActive && onResetCustomSlides && (
              <button
                onClick={onResetCustomSlides}
                title="আসল স্লাইডে ফিরে যান"
                className="flex items-center gap-1 rounded-lg border border-amber-500/40 bg-amber-500/10 px-2 py-1.5 text-xs font-semibold text-amber-300 transition hover:bg-amber-500/20 shrink-0 whitespace-nowrap"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span className="hidden 2xl:inline">আসল স্লাইড</span>
              </button>
            )}
          </div>

          {/* Mobile & Tablet Tools Dropdown (< lg:) */}
          <div className="relative lg:hidden" ref={toolsMenuRef}>
            <button
              onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
              title="সকল টুলস ও ফিচার মেনু"
              className={`flex items-center gap-1 rounded-lg border px-2 sm:px-2.5 py-1.5 text-xs font-bold transition shadow-sm whitespace-nowrap ${
                isToolsMenuOpen
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                  : 'border-slate-700 bg-slate-900/90 text-slate-200 hover:border-slate-600 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>টুলস</span>
              <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${isToolsMenuOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {/* Dropdown Menu Panel */}
            {isToolsMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-xl border border-slate-700/80 bg-[#0d162d]/98 backdrop-blur-xl shadow-2xl z-50 p-2 space-y-1 text-slate-200 animate-fadeIn divide-y divide-slate-800/60 max-h-[85vh] overflow-y-auto">
                <div className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center justify-between">
                  <span>স্টাডি ও প্রেজেন্টেশন টুলস</span>
                  <button 
                    onClick={() => setIsToolsMenuOpen(false)}
                    className="p-0.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="pt-1 space-y-1">
                  {openAchievementDashboard && (
                    <button
                      onClick={() => {
                        openAchievementDashboard();
                        setIsToolsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-left text-xs font-bold text-amber-300 hover:text-white transition"
                    >
                      <span className="p-1.5 rounded-md bg-amber-500/20 text-amber-400 shrink-0">
                        <Trophy className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-amber-200 flex items-center gap-1">
                          <span>শিক্ষার্থী অর্জন ড্যাশবোর্ড</span>
                          {typeof earnedBadgesCount === 'number' && earnedBadgesCount > 0 && (
                            <span className="px-1.5 text-[10px] bg-amber-400 text-slate-950 rounded-full font-black">
                              {toBengali(earnedBadgesCount)}
                            </span>
                          )}
                        </div>
                        <div className="text-[10.5px] text-slate-400">সকল বিষয়ের অগ্রগতি, ব্যাজ ও কুইজ স্কোর</div>
                      </div>
                    </button>
                  )}
                  {openBoardCQModal && (
                    <button
                      onClick={() => {
                        openBoardCQModal();
                        setIsToolsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-indigo-500/15 text-left text-xs font-semibold text-indigo-300 hover:text-white transition"
                    >
                      <span className="p-1.5 rounded-md bg-indigo-500/20 text-indigo-400 shrink-0">
                        <Award className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-indigo-200">বোর্ড CQ ব্যাংক</div>
                        <div className="text-[10.5px] text-slate-400">সৃজনশীল প্রশ্ন ও পূর্ণাঙ্গ মডেল উত্তর</div>
                      </div>
                    </button>
                  )}

                  {openTimedExamModal && (
                    <button
                      onClick={() => {
                        openTimedExamModal();
                        setIsToolsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-emerald-500/15 text-left text-xs font-semibold text-emerald-300 hover:text-white transition"
                    >
                      <span className="p-1.5 rounded-md bg-emerald-500/20 text-emerald-400 shrink-0">
                        <Clock className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-emerald-200">লাইভ মক টেস্ট</div>
                        <div className="text-[10.5px] text-slate-400">টাইমারসহ স্বয়ংক্রিয় মূল্যায়ন পরীক্ষা</div>
                      </div>
                    </button>
                  )}

                  {openFlashcardsModal && (
                    <button
                      onClick={() => {
                        openFlashcardsModal();
                        setIsToolsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-amber-500/15 text-left text-xs font-semibold text-amber-300 hover:text-white transition"
                    >
                      <span className="p-1.5 rounded-md bg-amber-500/20 text-amber-400 shrink-0">
                        <Sparkles className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-amber-200">স্মার্ট ফ্ল্যাশকার্ড</div>
                        <div className="text-[10.5px] text-slate-400">গুরুত্বপূর্ণ পয়েন্ট দ্রুত রিভিশন</div>
                      </div>
                    </button>
                  )}

                  {openStudentNotesModal && (
                    <button
                      onClick={() => {
                        openStudentNotesModal();
                        setIsToolsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-cyan-500/15 text-left text-xs font-semibold text-cyan-300 hover:text-white transition"
                    >
                      <span className="p-1.5 rounded-md bg-cyan-500/20 text-cyan-400 shrink-0">
                        <FileText className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-cyan-200">শিক্ষার্থীর নোটবুক</div>
                        <div className="text-[10.5px] text-slate-400">ব্যক্তিগত নোট ও রিভিশন তালিকা</div>
                      </div>
                    </button>
                  )}
                </div>

                <div className="pt-1 space-y-1">
                  <button
                    onClick={() => {
                      openPrintView();
                      setIsToolsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-slate-800 text-left text-xs font-semibold text-slate-200 hover:text-white transition"
                  >
                    <span className="p-1.5 rounded-md bg-slate-800 text-amber-400 shrink-0">
                      <BookOpen className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-bold text-white">হ্যান্ডআউট প্রিন্ট / PDF</div>
                      <div className="text-[10.5px] text-slate-400">লেকচার শিট প্রিন্ট বা সংরক্ষণ</div>
                    </div>
                  </button>

                  {activeTab === 'slides' && (
                    <button
                      onClick={() => {
                        openPresenterModal();
                        setIsToolsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-slate-800 text-left text-xs font-semibold text-slate-200 hover:text-white transition"
                    >
                      <span className="p-1.5 rounded-md bg-slate-800 text-cyan-400 shrink-0">
                        <FileText className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-white">প্রেজেন্টার মোড</div>
                        <div className="text-[10.5px] text-slate-400">শিক্ষক স্পিকার নোটস ও নিয়ন্ত্রণ</div>
                      </div>
                    </button>
                  )}
                </div>

                <div className="pt-1 space-y-1">
                  {onExportPptx && (
                    <button
                      onClick={() => {
                        onExportPptx();
                        setIsToolsMenuOpen(false);
                      }}
                      disabled={isExportingPptx}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-orange-500/15 text-left text-xs font-semibold text-orange-300 hover:text-white transition disabled:opacity-50"
                    >
                      <span className="p-1.5 rounded-md bg-orange-500/20 text-orange-400 shrink-0">
                        <Presentation className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-orange-200">{isExportingPptx ? 'তৈরি হচ্ছে...' : 'PPTX ডাউনলোড'}</div>
                        <div className="text-[10.5px] text-slate-400">মাইক্রোসফট পাওয়ারপয়েন্ট ফাইল হিসেবে নামান</div>
                      </div>
                    </button>
                  )}

                  {onOpenPptxUpload && (
                    <button
                      onClick={() => {
                        onOpenPptxUpload();
                        setIsToolsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-indigo-500/15 text-left text-xs font-semibold text-indigo-300 hover:text-white transition"
                    >
                      <span className="p-1.5 rounded-md bg-indigo-500/20 text-indigo-400 shrink-0">
                        <Upload className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-indigo-200">PPTX আপলোড</div>
                        <div className="text-[10.5px] text-slate-400">কাস্টম পাওয়ারপয়েন্ট স্লাইড আপলোড করুন</div>
                      </div>
                    </button>
                  )}

                  {isCustomSlidesActive && onResetCustomSlides && (
                    <button
                      onClick={() => {
                        onResetCustomSlides();
                        setIsToolsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-amber-500/15 text-left text-xs font-semibold text-amber-300 hover:text-white transition"
                    >
                      <span className="p-1.5 rounded-md bg-amber-500/20 text-amber-400 shrink-0">
                        <RotateCcw className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="font-bold text-amber-200">আসল স্লাইড ফিরিয়ে আনুন</div>
                        <div className="text-[10.5px] text-slate-400">কাস্টম স্লাইড বাতিল করে মূলে ফিরুন</div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 7. Fullscreen */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'ফুলস্ক্রিন বন্ধ করুন' : 'পূর্ণপর্দায় উপস্থাপন'}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/90 text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white shrink-0"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4 text-cyan-400" /> : <Maximize2 className="h-4 w-4 text-slate-300" />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ROW 2: SUB-NAVIGATION TABS (DEEP BLUE THEME)                              */}
      {/* ========================================================================= */}
      <div className="mx-auto flex items-center justify-start gap-1.5 px-2.5 py-1.5 sm:px-6 bg-[#0a1428] border-t border-blue-900/40 overflow-x-auto no-scrollbar scroll-smooth">
        
        {/* Core Slide Tab */}
        <button
          onClick={() => setActiveTab('slides')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'slides'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
              : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          <span>স্লাইড প্রেজেন্টেশন</span>
        </button>

        {/* Gallery 3D Visual Asset Library Tab */}
        <button
          onClick={() => setActiveTab('gallery3D')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'gallery3D'
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md'
              : 'text-cyan-300 hover:text-white hover:bg-cyan-950/60 border border-cyan-800/60'
          }`}
          title="সকল অধ্যায়ের ২ডি ও ৩ডি ভিজ্যুয়াল অ্যাসেট লাইব্রেরি"
        >
          <Box className="h-3.5 w-3.5 text-cyan-400" />
          <span>গ্যালারি ৩ডি (Gallery3D)</span>
        </button>

        {/* Chemistry Chapter 1 Labs */}
        {activeSubject === 'chemistry' && activeChapter === 1 && (
          <button
            onClick={() => setActiveTab('safety')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'safety'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
            }`}
          >
            <ShieldAlert className="h-3.5 w-3.5 text-emerald-400" />
            <span>ল্যাব নিরাপত্তা ও হ্যাজার্ড</span>
          </button>
        )}

        {/* Chemistry Chapter 2 Labs */}
        {activeSubject === 'chemistry' && activeChapter === 2 && (
          <>
            <button
              onClick={() => setActiveTab('kinetic')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'kinetic'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Compass className="h-3.5 w-3.5 text-cyan-400" />
              <span>কণার গতিতত্ত্ব</span>
            </button>

            <button
              onClick={() => setActiveTab('diffusion')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'diffusion'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Beaker className="h-3.5 w-3.5 text-cyan-400" />
              <span>ব্যাপন ও নিঃসরণ</span>
            </button>

            <button
              onClick={() => setActiveTab('heating')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'heating'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5 text-cyan-400" />
              <span>তাপীয় বক্ররেখা</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 3 Labs */}
        {activeSubject === 'chemistry' && activeChapter === 3 && (
          <>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'simulator'
                  ? 'bg-indigo-500 text-white font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Atom className="h-3.5 w-3.5 text-indigo-300" />
              <span>বোর সিমুলেটর</span>
            </button>

            <button
              onClick={() => setActiveTab('molecularViewer3D')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'molecularViewer3D'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Orbit className="h-3.5 w-3.5 text-emerald-300" />
              <span>3D মলিকিউলার ভিউয়ার</span>
            </button>

            <button
              onClick={() => setActiveTab('aufbau')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'aufbau'
                  ? 'bg-indigo-500 text-white font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Cpu className="h-3.5 w-3.5 text-indigo-300" />
              <span>আউফবাউ ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('isotope')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'isotope'
                  ? 'bg-indigo-500 text-white font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Scale className="h-3.5 w-3.5 text-indigo-300" />
              <span>ভর ক্যালকুলেটর</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 4 Labs */}
        {activeSubject === 'chemistry' && activeChapter === 4 && (
          <>
            <button
              onClick={() => setActiveTab('ptable')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'ptable'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Grid className="h-3.5 w-3.5 text-amber-400" />
              <span>পর্যায় সারণি</span>
            </button>

            <button
              onClick={() => setActiveTab('positionFinder')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'positionFinder'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Search className="h-3.5 w-3.5 text-amber-400" />
              <span>অবস্থান নির্ণয়</span>
            </button>

            <button
              onClick={() => setActiveTab('trends')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'trends'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-amber-400" />
              <span>পর্যায়বৃত্ত ধর্ম</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 5 Labs */}
        {activeSubject === 'chemistry' && activeChapter === 5 && (
          <>
            <button
              onClick={() => setActiveTab('bondingLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'bondingLab'
                  ? 'bg-rose-500 text-white font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Link2 className="h-3.5 w-3.5 text-rose-400" />
              <span>বন্ধন সিমুলেটর</span>
            </button>

            <button
              onClick={() => setActiveTab('formulaBuilder')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'formulaBuilder'
                  ? 'bg-rose-500 text-white font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-rose-400" />
              <span>যোজনী ও সংকেত</span>
            </button>

            <button
              onClick={() => setActiveTab('compoundProps')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'compoundProps'
                  ? 'bg-rose-500 text-white font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Droplets className="h-3.5 w-3.5 text-rose-400" />
              <span>যৌগের ধর্ম তুলনা</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 6 Labs (4 Interactive Simulators & Calculators) */}
        {activeSubject === 'chemistry' && activeChapter === 6 && (
          <>
            <button
              onClick={() => setActiveTab('moleCalculatorLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'moleCalculatorLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Scale className="h-3.5 w-3.5 text-amber-400" />
              <span>মোল ক্যালকুলেটর</span>
            </button>

            <button
              onClick={() => setActiveTab('molarityLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'molarityLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <FlaskConical className="h-3.5 w-3.5 text-amber-400" />
              <span>মোলারিটি ও দ্রবণ ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('limitingReactantLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'limitingReactantLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Flame className="h-3.5 w-3.5 text-amber-400" />
              <span>সীমিত বিক্রিয়ক ও ফলন</span>
            </button>

            <button
              onClick={() => setActiveTab('empiricalFormulaLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'empiricalFormulaLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>সংকেত ফাইন্ডার</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 7 Labs (4 Dedicated Interactive Simulators) */}
        {activeSubject === 'chemistry' && activeChapter === 7 && (
          <>
            <button
              onClick={() => setActiveTab('oxidationLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'oxidationLab' || activeTab === 'reactionsLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Zap className="h-3.5 w-3.5 text-rose-400" />
              <span>জারণ সংখ্যা নির্ণায়ক</span>
            </button>

            <button
              onClick={() => setActiveTab('redoxLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'redoxLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-rose-400" />
              <span>রেডক্স ইলেকট্রন স্থানান্তর</span>
            </button>

            <button
              onClick={() => setActiveTab('leChatelierLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'leChatelierLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Scale className="h-3.5 w-3.5 text-rose-400" />
              <span>লা শাতেলিয়ার নীতি ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('reactionClassifyLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'reactionClassifyLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Flame className="h-3.5 w-3.5 text-rose-400" />
              <span>বিক্রিয়ার শ্রেণিবিভাগ</span>
            </button>

            <button
              onClick={() => setActiveTab('virtualRackLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'virtualRackLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Beaker className="h-3.5 w-3.5 text-rose-400" />
              <span>বিকারক টেস্ট টিউব</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 8 Labs (5 Dedicated Interactive Simulators) */}
        {activeSubject === 'chemistry' && activeChapter === 8 && (
          <>
            <button
              onClick={() => setActiveTab('daniellCellLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'daniellCellLab' || activeTab === 'electrochemistryLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>ড্যানিয়েল কোষ ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('electroplatingLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'electroplatingLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>তড়িৎ লেপন সিমুলেটর</span>
            </button>

            <button
              onClick={() => setActiveTab('dryCellLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'dryCellLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Battery className="h-3.5 w-3.5 text-amber-400" />
              <span>ড্রাই সেল ব্যাটারি</span>
            </button>

            <button
              onClick={() => setActiveTab('bondEnergyLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'bondEnergyLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Scale className="h-3.5 w-3.5 text-amber-400" />
              <span>বন্ধন শক্তি ও ΔH</span>
            </button>

            <button
              onClick={() => setActiveTab('virtualRackLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'virtualRackLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Beaker className="h-3.5 w-3.5 text-amber-400" />
              <span>বিকারক টেস্ট টিউব</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 9 Labs (Acid-Base, pH Scale, Titration & Salt Hydrolysis) */}
        {activeSubject === 'chemistry' && activeChapter === 9 && (
          <>
            <button
              onClick={() => setActiveTab('phScaleLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'phScaleLab' || activeTab === 'acidBaseLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Thermometer className="h-3.5 w-3.5 text-rose-400" />
              <span>pH মিটার ও নির্দেশক ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('titrationLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'titrationLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Droplets className="h-3.5 w-3.5 text-rose-400" />
              <span>অ্যাসিড-ক্ষার টাইট্রেশন</span>
            </button>

            <button
              onClick={() => setActiveTab('saltHydrolysisLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'saltHydrolysisLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Scale className="h-3.5 w-3.5 text-rose-400" />
              <span>লবণের আর্দ্রবিশ্লেষণ</span>
            </button>

            <button
              onClick={() => setActiveTab('virtualRackLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'virtualRackLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Beaker className="h-3.5 w-3.5 text-rose-400" />
              <span>বিকারক টেস্ট টিউব</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 10 Labs (Metallurgy, Electroplating & Refining) */}
        {activeSubject === 'chemistry' && activeChapter === 10 && (
          <>
            <button
              onClick={() => setActiveTab('electroplatingLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'electroplatingLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>ধাতু বিশোধন ও তড়িৎলেপন</span>
            </button>

            <button
              onClick={() => setActiveTab('virtualRackLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'virtualRackLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Beaker className="h-3.5 w-3.5 text-amber-400" />
              <span>বিকারক টেস্ট টিউব</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 11 Labs (Fossils & Hydrocarbons) */}
        {activeSubject === 'chemistry' && activeChapter === 11 && (
          <>
            <button
              onClick={() => setActiveTab('formulaBuilder')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'formulaBuilder'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>হাইড্রোকার্বন সংকেত বিল্ডার</span>
            </button>

            <button
              onClick={() => setActiveTab('molecularViewer3D')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'molecularViewer3D'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Orbit className="h-3.5 w-3.5 text-emerald-300" />
              <span>হাইড্রোকার্বন 3D ভিউয়ার</span>
            </button>

            <button
              onClick={() => setActiveTab('virtualRackLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'virtualRackLab'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Beaker className="h-3.5 w-3.5 text-cyan-400" />
              <span>ব্রোমিন পরীক্ষা ল্যাব</span>
            </button>
          </>
        )}

        {/* Chemistry Chapter 12 Labs (Household, Cleaning & Soap) */}
        {activeSubject === 'chemistry' && activeChapter === 12 && (
          <>
            <button
              onClick={() => setActiveTab('acidBaseLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'acidBaseLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Thermometer className="h-3.5 w-3.5 text-rose-400" />
              <span>গৃহস্থালি এসিড-ক্ষার</span>
            </button>

            <button
              onClick={() => setActiveTab('titrationLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'titrationLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Droplets className="h-3.5 w-3.5 text-rose-400" />
              <span>ভিনেগার ও প্রশমন ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('virtualRackLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'virtualRackLab'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Beaker className="h-3.5 w-3.5 text-rose-400" />
              <span>বিকারক টেস্ট টিউব</span>
            </button>
          </>
        )}

        {/* Physics Chapter 4 Labs (3 Interactive Simulators) */}
        {activeSubject === 'physics' && activeChapter === 4 && (
          <>
            <button
              onClick={() => setActiveTab('workEnergyLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'workEnergyLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Compass className="h-3.5 w-3.5 text-amber-400" />
              <span>কাজ ও বল ভেক্টর ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('energyConservationLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'energyConservationLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>শক্তির নিত্যতা ও রোলারকোস্টার</span>
            </button>

            <button
              onClick={() => setActiveTab('efficiencyLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'efficiencyLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5 text-amber-400" />
              <span>ক্ষমতা ও কর্মদক্ষতা</span>
            </button>
          </>
        )}

        {/* Physics Chapter 5 Labs (3 Interactive Simulators) */}
        {activeSubject === 'physics' && activeChapter === 5 && (
          <>
            <button
              onClick={() => setActiveTab('hydraulicLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'hydraulicLab' || activeTab === 'pressureLab'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Scale className="h-3.5 w-3.5 text-cyan-400" />
              <span>প্যাসকেলের হাইড্রোলিক প্রেস</span>
            </button>

            <button
              onClick={() => setActiveTab('archimedesLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'archimedesLab'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Droplets className="h-3.5 w-3.5 text-cyan-400" />
              <span>আর্কিমিডিস ও প্লবতা ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('depthPressureLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'depthPressureLab'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-cyan-400" />
              <span>তরলের গভীরতায় চাপ (hρg)</span>
            </button>
          </>
        )}

        {/* Physics Chapter 6 Labs (3 Dedicated Interactive Simulators) */}
        {activeSubject === 'physics' && activeChapter === 6 && (
          <>
            <button
              onClick={() => setActiveTab('thermalExpansionLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'thermalExpansionLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Flame className="h-3.5 w-3.5 text-amber-400" />
              <span>তাপীয় প্রসারণ ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('calorimetryLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'calorimetryLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Thermometer className="h-3.5 w-3.5 text-amber-400" />
              <span>ক্যালরিমিতি ও তাপ বিনিময়</span>
            </button>

            <button
              onClick={() => setActiveTab('anomalousWaterLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'anomalousWaterLab'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Droplets className="h-3.5 w-3.5 text-amber-400" />
              <span>পানির ৪°C ব্যতিক্রমী প্রসারণ</span>
            </button>
          </>
        )}

        {/* Physics Chapter 7 Labs (3 Dedicated Interactive Simulators) */}
        {activeSubject === 'physics' && activeChapter === 7 && (
          <>
            <button
              onClick={() => setActiveTab('waveSimulatorLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'waveSimulatorLab'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Waves className="h-3.5 w-3.5 text-cyan-400" />
              <span>তরঙ্গ সঞ্চালন ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('echoLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'echoLab'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Radio className="h-3.5 w-3.5 text-cyan-400" />
              <span>প্রতিধ্বনি ও সোনার</span>
            </button>

            <button
              onClick={() => setActiveTab('audioSpectrumLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'audioSpectrumLab'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Volume2 className="h-3.5 w-3.5 text-cyan-400" />
              <span>শব্দ বর্ণালী ও ডেসিবেল</span>
            </button>
          </>
        )}

        {/* Biology Chapter 1 Labs (3 Interactive Simulators) */}
        {activeSubject === 'biology' && activeChapter === 1 && (
          <>
            <button
              onClick={() => setActiveTab('bioCh1DiagramStudioLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'bioCh1DiagramStudioLab'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Layers className="h-3.5 w-3.5 text-emerald-400" />
              <span>২ডি ও ৩ডি চিত্র ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('fiveKingdomsLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'fiveKingdomsLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Layers className="h-3.5 w-3.5 text-emerald-400" />
              <span>পঞ্চরাজ্য এক্সপ্লোরার</span>
            </button>

            <button
              onClick={() => setActiveTab('binomialLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'binomialLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Dna className="h-3.5 w-3.5 text-emerald-400" />
              <span>দ্বিপদ নামকরণ স্টুডিও</span>
            </button>

            <button
              onClick={() => setActiveTab('bioBranchesLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'bioBranchesLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
              <span>জীববিজ্ঞানের শাখাসমূহ</span>
            </button>
          </>
        )}

        {/* Biology Chapter 2 Labs (4 Dedicated Interactive Simulators) */}
        {activeSubject === 'biology' && activeChapter === 2 && (
          <>
            <button
              onClick={() => setActiveTab('cellExplorerLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'cellExplorerLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Dna className="h-3.5 w-3.5 text-emerald-400" />
              <span>কোষ অন্বেষণ ও অঙ্গাণু</span>
            </button>

            <button
              onClick={() => setActiveTab('cellMembraneLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'cellMembraneLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Layers className="h-3.5 w-3.5 text-emerald-400" />
              <span>২.২.১ কোষঝিল্লি (ফ্লুইড মোজাইক)</span>
            </button>

            <button
              onClick={() => setActiveTab('plantVsAnimalLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'plantVsAnimalLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>২.৩ উদ্ভিদ বনাম প্রাণীকোষ</span>
            </button>

            <button
              onClick={() => setActiveTab('cellTissueLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'cellTissueLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              <span>২.৪ উদ্ভিদ ও প্রাণী টিস্যু</span>
            </button>
          </>
        )}

        {/* Biology Chapter 3 Labs (3 Interactive Simulators) */}
        {activeSubject === 'biology' && activeChapter === 3 && (
          <>
            <button
              onClick={() => setActiveTab('cellDivisionLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'cellDivisionLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Dna className="h-3.5 w-3.5 text-emerald-400" />
              <span>মাইটোসিস ৫ পর্যায় স্টুডিও</span>
            </button>

            <button
              onClick={() => setActiveTab('crossingOverLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'crossingOverLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              <span>ক্রসিং ওভার ও রিকম্বিনেশন</span>
            </button>

            <button
              onClick={() => setActiveTab('cellCycleLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'cellCycleLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <ShieldAlert className="h-3.5 w-3.5 text-emerald-400" />
              <span>কোষচক্র ও ক্যান্সার সিমুলেটর</span>
            </button>
          </>
        )}

        {/* Biology Chapter 4 Labs (3 Interactive Simulators) */}
        {activeSubject === 'biology' && activeChapter === 4 && (
          <>
            <button
              onClick={() => setActiveTab('bioenergeticsLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'bioenergeticsLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sun className="h-3.5 w-3.5 text-emerald-400" />
              <span>ATP ও জীবনীশক্তি চক্র</span>
            </button>

            <button
              onClick={() => setActiveTab('photosynthesisLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'photosynthesisLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              <span>সালোকসংশ্লেষণ স্টুডিও</span>
            </button>

            <button
              onClick={() => setActiveTab('respirationLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'respirationLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Flame className="h-3.5 w-3.5 text-emerald-400" />
              <span>শ্বসন ও ATP হিসাব</span>
            </button>
          </>
        )}

        {/* Biology Chapter 5 Labs (3 Interactive Simulators) */}
        {activeSubject === 'biology' && activeChapter === 5 && (
          <>
            <button
              onClick={() => setActiveTab('digestiveSystemLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'digestiveSystemLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              <span>পরিপাকতন্ত্র ও এনজাইম ল্যাব</span>
            </button>

            <button
              onClick={() => setActiveTab('nutritionBmiLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'nutritionBmiLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Scale className="h-3.5 w-3.5 text-emerald-400" />
              <span>পুষ্টি, BMI ও BMR ক্যালকুলেটর</span>
            </button>

            <button
              onClick={() => setActiveTab('plantNutritionLab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'plantNutritionLab'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>উদ্ভিদের খনিজ পুষ্টি ও অভাবজনিত লক্ষণ</span>
            </button>
          </>
        )}

        {/* Quiz Assessment Tab */}
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'quiz'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
              : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
          }`}
        >
          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
          <span>কুইজ টেস্ট</span>
        </button>
      </div>
    </header>
  );
};