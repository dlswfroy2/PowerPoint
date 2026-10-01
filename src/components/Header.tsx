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
  Dna,
  Zap,
  Download,
  Upload,
  RotateCcw,
  Presentation
} from 'lucide-react';

export type AppTab = 
  | 'slides' 
  | 'simulator' 
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
  | 'pressureLab'
  | 'cellDivisionLab';

interface HeaderProps {
  activeChapter: 1 | 2 | 3 | 4 | 5;
  setActiveChapter: (c: 1 | 2 | 3 | 4 | 5) => void;
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
}

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
  onResetCustomSlides
}) => {
  // Theme styling based on active subject
  const subjectTheme = 
    activeSubject === 'biology' 
      ? { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', activeTab: 'bg-emerald-500 text-slate-950' }
      : activeSubject === 'physics'
      ? { text: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10', activeTab: 'bg-amber-500 text-slate-950' }
      : { text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', activeTab: 'bg-cyan-500 text-slate-950' };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-md text-slate-900">
  {/* টপ গ্রেডিয়েন্ট বর্ডার লাইন */}
  <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500"></div>

  {/* ========================================================================= */}
  {/* ROW 1: BRAND, SUBJECT & CHAPTER SELECTOR, PRESENTATION TOOLS              */}
  {/* ========================================================================= */}
  <div className="mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 bg-slate-50 border-b border-slate-200">
        
        {/* Left: Logo & Subject / Chapter Switcher */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Logo GIF Section */}
          <img 
            src="/logo.gif" 
            alt="প্রেজেন্টেশন ও ল্যাব" 
            className="h-16 w-auto object-contain cursor-pointer transition-transform hover:scale-105 shrink-0"
          />

          <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${subjectTheme.bg} ${subjectTheme.text} ring-1 ${subjectTheme.border} shrink-0 hidden sm:flex`}>
            {activeSubject === 'biology' ? (
              <Dna className="h-5 w-5 animate-pulse" />
            ) : activeSubject === 'physics' ? (
              activeChapter === 4 ? <Zap className="h-5 w-5" /> : <Droplets className="h-5 w-5" />
            ) : activeChapter === 1 ? (
              <FlaskConical className="h-5 w-5" />
            ) : activeChapter === 2 ? (
              <Compass className="h-5 w-5" />
            ) : activeChapter === 3 ? (
              <Atom className="h-5 w-5" />
            ) : activeChapter === 4 ? (
              <Grid className="h-5 w-5" />
            ) : (
              <Link2 className="h-5 w-5" />
            )}
          </span>

          <div className="flex items-center gap-2">
            <select
              value={`${activeSubject}-${activeChapter}`}
              onChange={(e) => {
                const [subj, chapStr] = e.target.value.split('-');
                const nextChapter = Number(chapStr) as 1 | 2 | 3 | 4 | 5;
                if (setActiveSubject) {
                  setActiveSubject(subj as 'chemistry' | 'physics' | 'biology');
                }
                setActiveChapter(nextChapter);
                setActiveTab('slides');
              }}
              className="bg-slate-900 border border-slate-700 hover:border-cyan-500 text-white font-bold text-xs sm:text-sm rounded-lg px-2.5 py-1.5 outline-none cursor-pointer transition shadow-sm max-w-[280px] sm:max-w-md truncate"
              title="বিষয় ও অধ্যায় পরিবর্তন করুন"
            >
              <optgroup label="রসায়ন (Chemistry)">
                <option value="chemistry-1">রসায়ন অধ্যায় ১: রসায়নের ধারণা</option>
                <option value="chemistry-2">রসায়ন অধ্যায় ২: পদার্থের অবস্থা</option>
                <option value="chemistry-3">রসায়ন অধ্যায় ৩: পদার্থের গঠন</option>
                <option value="chemistry-4">রসায়ন অধ্যায় ৪: পর্যায় সারণি</option>
                <option value="chemistry-5">রসায়ন অধ্যায় ৫: রাসায়নিক বন্ধন</option>
              </optgroup>
              <optgroup label="পদার্থবিজ্ঞান (Physics)">
                <option value="physics-4">পদার্থবিজ্ঞান অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি</option>
                <option value="physics-5">পদার্থবিজ্ঞান অধ্যায় ৫: পদার্থের অবস্থা ও চাপ</option>
              </optgroup>
              <optgroup label="জীববিজ্ঞান (Biology)">
                <option value="biology-3">জীববিজ্ঞান অধ্যায় ৩: কোষ বিভাজন</option>
              </optgroup>
            </select>

            {isCustomSlidesActive && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                <Sparkles className="h-3 w-3" /> কাস্টম PPTX
              </span>
            )}
          </div>
        </div>

        {/* Right: Presentation & PowerPoint Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap ml-auto">
          {/* 1. PowerPoint Show Mode (Hero Button) */}
          {activeTab === 'slides' && openPowerPointShow && (
            <button
              onClick={openPowerPointShow}
              title="পূর্ণপর্দায় পাওয়ারপয়েন্ট স্লাইডশো শুরু করুন"
              className="flex items-center gap-1.5 rounded-lg border border-cyan-500/60 bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition hover:brightness-110"
            >
              <Play className="h-3.5 w-3.5 fill-white" />
              <span>স্লাইডশো (F5)</span>
            </button>
          )}

          {/* 2. PPTX Export */}
          {onExportPptx && (
            <button
              onClick={onExportPptx}
              disabled={isExportingPptx}
              title="মাইক্রোসফট পাওয়ারপয়েন্ট (.pptx) ফাইল ডাউনলোড করুন"
              className="flex items-center gap-1.5 rounded-lg border border-orange-500/40 bg-orange-500/10 px-2.5 py-1.5 text-xs font-semibold text-orange-300 transition hover:border-orange-500/60 hover:bg-orange-500/20 hover:text-white disabled:opacity-50"
            >
              <Presentation className="h-3.5 w-3.5 text-orange-400" />
              <span className="hidden sm:inline">{isExportingPptx ? 'তৈরি হচ্ছে...' : 'PPTX ডাউনলোড'}</span>
            </button>
          )}

          {/* 3. PPTX Upload */}
          {onOpenPptxUpload && (
            <button
              onClick={onOpenPptxUpload}
              title="সম্পাদিত পাওয়ারপয়েন্ট (.pptx) ফাইল আপলোড করুন"
              className="flex items-center gap-1.5 rounded-lg border border-indigo-500/40 bg-indigo-500/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-300 transition hover:border-indigo-500/60 hover:bg-indigo-500/20 hover:text-white"
            >
              <Upload className="h-3.5 w-3.5 text-indigo-400" />
              <span className="hidden sm:inline">PPTX আপলোড</span>
            </button>
          )}

          {/* 4. Reset to Original */}
          {isCustomSlidesActive && onResetCustomSlides && (
            <button
              onClick={onResetCustomSlides}
              title="আসল স্লাইডে ফিরে যান"
              className="flex items-center gap-1 rounded-lg border border-amber-500/40 bg-amber-500/10 px-2 py-1.5 text-xs font-semibold text-amber-300 transition hover:bg-amber-500/20"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden md:inline">আসল স্লাইড</span>
            </button>
          )}

          {/* 5. Presenter View */}
          {activeTab === 'slides' && (
            <button
              onClick={openPresenterModal}
              title="প্রেজেন্টার মোড ও শিক্ষক স্পিকার নোটস"
              className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
            >
              <FileText className="h-3.5 w-3.5 text-cyan-400" />
              <span className="hidden md:inline">প্রেজেন্টার ভিউ</span>
            </button>
          )}

          {/* 6. Handout Print */}
          <button
            onClick={openPrintView}
            title="ক্লাস হ্যান্ডআউট প্রিন্ট বা PDF সংরক্ষণ"
            className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
          >
            <BookOpen className="h-3.5 w-3.5 text-amber-400" />
            <span className="hidden md:inline">হ্যান্ডআউট</span>
          </button>

          {/* 7. Fullscreen */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'ফুলস্ক্রিন বন্ধ করুন' : 'পূর্ণপর্দায় উপস্থাপন'}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4 text-cyan-400" /> : <Maximize2 className="h-4 w-4 text-slate-300" />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ROW 2: SUB-NAVIGATION TABS (DEEP BLUE THEME)                              */}
      {/* ========================================================================= */}
      <div className="mx-auto flex flex-wrap items-center justify-start gap-1.5 px-4 py-2 sm:px-6 bg-blue-950 border-t border-blue-900 shadow-inner">
        
        {/* Core Slide Tab */}
        <button
          onClick={() => setActiveTab('slides')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeTab === 'slides'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
              : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          <span>স্লাইড প্রেজেন্টেশন</span>
        </button>

        {/* Chemistry Chapter 1 Labs */}
        {activeSubject === 'chemistry' && activeChapter === 1 && (
          <button
            onClick={() => setActiveTab('safety')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'simulator'
                  ? 'bg-indigo-500 text-white font-bold shadow-sm'
                  : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
              }`}
            >
              <Atom className="h-3.5 w-3.5 text-indigo-300" />
              <span>বোর সিমুলেটর</span>
            </button>

            <button
              onClick={() => setActiveTab('aufbau')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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

        {/* Physics Chapter 4 Labs */}
        {activeSubject === 'physics' && activeChapter === 4 && (
          <button
            onClick={() => setActiveTab('workEnergyLab')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'workEnergyLab'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
            }`}
          >
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span>কাজ ও শক্তি ল্যাব</span>
          </button>
        )}

        {/* Physics Chapter 5 Labs */}
        {activeSubject === 'physics' && activeChapter === 5 && (
          <button
            onClick={() => setActiveTab('pressureLab')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'pressureLab'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
            }`}
          >
            <Droplets className="h-3.5 w-3.5 text-cyan-400" />
            <span>চাপ ও প্লবতা ল্যাব</span>
          </button>
        )}

        {/* Biology Chapter 3 Labs */}
        {activeSubject === 'biology' && activeChapter === 3 && (
          <button
            onClick={() => setActiveTab('cellDivisionLab')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'cellDivisionLab'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                : 'text-blue-200 hover:text-white hover:bg-blue-900/80 border border-transparent hover:border-blue-700'
            }`}
          >
            <Dna className="h-3.5 w-3.5 text-emerald-400" />
            <span>কোষ বিভাজন ল্যাব</span>
          </button>
        )}

        {/* Quiz Assessment Tab */}
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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