/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Box, 
  Image as ImageIcon, 
  Layers, 
  Maximize2, 
  X, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  BookOpen,
  Atom,
  Zap,
  Dna,
  Eye,
  CheckCircle2,
  SlidersHorizontal,
  RotateCcw,
  LayoutGrid,
  List,
  Tag,
  Compass,
  ArrowUpDown
} from 'lucide-react';
import { Slide } from '../types/presentation';
import { ThreeDViewer } from './ThreeDViewer';
import { CustomDiagramViewer } from './CustomDiagramViewer';

interface Gallery3DProps {
  slidesByChapter: Record<string, Slide[]>;
  onSelectSlide?: (subject: 'chemistry' | 'physics' | 'biology', chapter: number, slideIndex: number) => void;
  activeSubject?: 'chemistry' | 'physics' | 'biology';
  activeChapter?: number;
}

export interface VisualAssetItem {
  id: string;
  type: '3d' | 'photo' | 'diagram';
  mediaType: '3d' | '2d';
  subject: 'chemistry' | 'physics' | 'biology';
  chapter: number;
  chapterTitle: string;
  topic: string;
  slideId: number;
  slideIndex: number;
  slideTitle: string;
  titleBn: string;
  titleEn: string;
  captionBn: string;
  imageUrl?: string;
  customDiagramType?: string;
  tags: string[];
}

const SUBJECT_LABELS: Record<string, string> = {
  chemistry: 'রসায়ন',
  physics: 'পদার্থবিজ্ঞান',
  biology: 'জীববিজ্ঞান'
};

const CHAPTER_TITLES: Record<string, string> = {
  'chemistry-1': 'অধ্যায় ১: রসায়নের ধারণা',
  'chemistry-2': 'অধ্যায় ২: পদার্থের অবস্থা',
  'chemistry-3': 'অধ্যায় ৩: পদার্থের গঠন',
  'chemistry-4': 'অধ্যায় ৪: পর্যায় সারণি',
  'chemistry-5': 'অধ্যায় ৫: রাসায়নিক বন্ধন',
  'chemistry-6': 'অধ্যায় ৬: মোলের ধারণা ও গণনা',
  'chemistry-7': 'অধ্যায় ৭: রাসায়নিক বিক্রিয়া',
  'chemistry-8': 'অধ্যায় ৮: রসায়ন ও শক্তি',
  'chemistry-9': 'অধ্যায় ৯: এসিড-ক্ষার সমতা',
  'chemistry-10': 'অধ্যায় ১০: খনিজ সম্পদ: ধাতু-অধাতু',
  'chemistry-11': 'অধ্যায় ১১: খনিজ সম্পদ: জীবাশ্ম',
  'chemistry-12': 'অধ্যায় ১২: আমাদের জীবনে রসায়ন',
  'physics-4': 'অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি',
  'physics-5': 'অধ্যায় ৫: পদার্থের অবস্থা ও চাপ',
  'physics-6': 'অধ্যায় ৬: বস্তুর উপর তাপের প্রভাব',
  'physics-7': 'অধ্যায় ৭: তরঙ্গ ও শব্দ',
  'biology-1': 'অধ্যায় ১: জীবন পাঠ',
  'biology-2': 'অধ্যায় ২: জীবকোষ ও টিস্যু',
  'biology-3': 'অধ্যায় ৩: কোষ বিভাজন',
  'biology-4': 'অধ্যায় ৪: জীবনীশক্তি',
  'biology-5': 'অধ্যায় ৫: খাদ্য, পুষ্টি ও পরিপাক',
  'biology-6': 'অধ্যায় ৬: জীবে পরিবহন',
  'biology-7': 'অধ্যায় ৭: গ্যাসীয় বিনিময়',
  'biology-8': 'অধ্যায় ৮: রেচন প্রক্রিয়া',
  'biology-9': 'অধ্যায় ৯: দৃঢ়তা প্রদান ও চলন',
  'biology-10': 'অধ্যায় ১০: সমন্বয়',
  'biology-11': 'অধ্যায় ১১: জীবের প্রজনন',
  'biology-12': 'অধ্যায় ১২: জীবের বংশগতি ও বিবর্তন',
  'biology-13': 'অধ্যায় ১৩: জীবের পরিবেশ',
  'biology-14': 'অধ্যায় ১৪: জীবপ্রযুক্তি'
};

export const Gallery3D: React.FC<Gallery3DProps> = ({
  slidesByChapter,
  onSelectSlide,
  activeSubject = 'chemistry',
  activeChapter = 1
}) => {
  // Filters State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'chemistry' | 'physics' | 'biology'>('all');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [selectedMediaType, setSelectedMediaType] = useState<'all' | '3d' | '2d'>('all');
  const [selectedTwoDType, setSelectedTwoDType] = useState<'all' | 'photo' | 'diagram'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string | 'all'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'title' | '3dFirst' | 'photosFirst'>('default');
  const [viewLayout, setViewLayout] = useState<'grid' | 'compact'>('grid');

  // Preview Modal
  const [activeModalAsset, setActiveModalAsset] = useState<VisualAssetItem | null>(null);

  // Extract all assets across all slides
  const allAssets = useMemo<VisualAssetItem[]>(() => {
    const list: VisualAssetItem[] = [];

    Object.entries(slidesByChapter).forEach(([key, slides]) => {
      const [subj, chapStr] = key.split('-');
      const subject = (subj || 'chemistry') as 'chemistry' | 'physics' | 'biology';
      const chapter = parseInt(chapStr || '1', 10);
      const chapterTitle = CHAPTER_TITLES[key] || `অধ্যায় ${chapter}`;

      slides.forEach((slide, sIdx) => {
        const topic = slide.category || slide.title || `টপিক ${slide.id}`;

        // 1. Dedicated 3D Interactive Model
        list.push({
          id: `3d-${key}-${slide.id}`,
          type: '3d',
          mediaType: '3d',
          subject,
          chapter,
          chapterTitle,
          topic,
          slideId: slide.id,
          slideIndex: sIdx,
          slideTitle: slide.title,
          titleBn: `${slide.title} — ইন্টারেক্টিভ ৩ডি সিমুলেশন`,
          titleEn: `${slide.subtitle} (3D Model)`,
          captionBn: `৩ডি স্পেসে সম্পূর্ণ ৩৬০° ঘুরিয়ে পর্যবেক্ষণযোগ্য ত্রিমাত্রিক মডেল ও অ্যানিমেশন।`,
          imageUrl: slide.image,
          tags: ['3D', 'সিমুলেশন', 'মডেল', subject, `অধ্যায় ${chapter}`, topic]
        });

        // 2. High-res Photo asset if present
        if (slide.image) {
          list.push({
            id: `photo-${key}-${slide.id}`,
            type: 'photo',
            mediaType: '2d',
            subject,
            chapter,
            chapterTitle,
            topic,
            slideId: slide.id,
            slideIndex: sIdx,
            slideTitle: slide.title,
            titleBn: `${slide.title} — বাস্তব আলোকচিত্র`,
            titleEn: slide.subtitle,
            captionBn: slide.imageCaption || 'পরীক্ষাগার বা বাস্তব বৈজ্ঞানিক পর্যবেক্ষণ চিত্র।',
            imageUrl: slide.image,
            tags: ['২ডি', 'ফটোগ্রাফি', 'বাস্তব দৃশ্য', subject, `অধ্যায় ${chapter}`, topic]
          });
        }

        // 3. 2D Vector diagrams from gallery if present
        if (slide.gallery && slide.gallery.length > 0) {
          slide.gallery.forEach((gItem, gIdx) => {
            if (gItem.type === 'diagram' || gItem.customDiagramType) {
              list.push({
                id: `diag-${key}-${slide.id}-${gIdx}`,
                type: 'diagram',
                mediaType: '2d',
                subject,
                chapter,
                chapterTitle,
                topic,
                slideId: slide.id,
                slideIndex: sIdx,
                slideTitle: slide.title,
                titleBn: gItem.titleBn || `${slide.title} — ২ডি ভেক্টর ডায়াগ্রাম`,
                titleEn: gItem.titleEn || '2D Vector Diagram',
                captionBn: gItem.captionBn || 'বোর্ড পরীক্ষার জন্য প্রমিত রেখাচিত্র ও সমীকরণ।',
                imageUrl: gItem.url,
                customDiagramType: gItem.customDiagramType,
                tags: ['২ডি', 'ডায়াগ্রাম', 'ভেক্টর', 'সমীকরণ', subject, `অধ্যায় ${chapter}`, topic]
              });
            }
          });
        }
      });
    });

    return list;
  }, [slidesByChapter]);

  // Extract unique topics for topic filtering
  const availableTopics = useMemo(() => {
    const topicMap = new Map<string, number>();

    allAssets.forEach(asset => {
      // Respect subject & chapter filter for topic extraction
      if (selectedSubject !== 'all' && asset.subject !== selectedSubject) return;
      if (selectedChapter !== 'all' && asset.chapter !== selectedChapter) return;
      if (selectedMediaType !== 'all' && asset.mediaType !== selectedMediaType) return;

      const t = asset.topic;
      if (t) {
        topicMap.set(t, (topicMap.get(t) || 0) + 1);
      }
    });

    return Array.from(topicMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [allAssets, selectedSubject, selectedChapter, selectedMediaType]);

  // Filtered Assets
  const filteredAssets = useMemo(() => {
    const res = allAssets.filter(item => {
      // 1. Subject filter
      if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;

      // 2. Chapter filter
      if (selectedChapter !== 'all' && item.chapter !== selectedChapter) return false;

      // 3. Media Type filter (2D vs 3D)
      if (selectedMediaType !== 'all') {
        if (item.mediaType !== selectedMediaType) return false;
        // If 2D is selected, check sub-type (photo vs diagram)
        if (selectedMediaType === '2d' && selectedTwoDType !== 'all') {
          if (item.type !== selectedTwoDType) return false;
        }
      }

      // 4. Topic filter
      if (selectedTopic !== 'all' && item.topic !== selectedTopic) return false;

      // 5. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = item.titleBn.toLowerCase().includes(q) || item.titleEn.toLowerCase().includes(q);
        const matchCaption = item.captionBn.toLowerCase().includes(q);
        const matchSlide = item.slideTitle.toLowerCase().includes(q);
        const matchChapter = item.chapterTitle.toLowerCase().includes(q);
        const matchTopic = item.topic.toLowerCase().includes(q);
        const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchCaption && !matchSlide && !matchChapter && !matchTopic && !matchTags) return false;
      }

      return true;
    });

    // Apply Sorting
    if (sortBy === 'title') {
      res.sort((a, b) => a.titleBn.localeCompare(b.titleBn, 'bn'));
    } else if (sortBy === '3dFirst') {
      res.sort((a, b) => (a.mediaType === '3d' ? -1 : b.mediaType === '3d' ? 1 : 0));
    } else if (sortBy === 'photosFirst') {
      res.sort((a, b) => (a.type === 'photo' ? -1 : b.type === 'photo' ? 1 : 0));
    }

    return res;
  }, [
    allAssets, 
    selectedSubject, 
    selectedChapter, 
    selectedMediaType, 
    selectedTwoDType, 
    selectedTopic, 
    searchQuery, 
    sortBy
  ]);

  // Overall counts
  const counts = useMemo(() => {
    return {
      total: allAssets.length,
      threeD: allAssets.filter(a => a.mediaType === '3d').length,
      twoD: allAssets.filter(a => a.mediaType === '2d').length,
      photos: allAssets.filter(a => a.type === 'photo').length,
      diagrams: allAssets.filter(a => a.type === 'diagram').length
    };
  }, [allAssets]);

  // Reset all filters helper
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSubject('all');
    setSelectedChapter('all');
    setSelectedMediaType('all');
    setSelectedTwoDType('all');
    setSelectedTopic('all');
    setSortBy('default');
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedSubject !== 'all' || 
    selectedChapter !== 'all' || 
    selectedMediaType !== 'all' || 
    selectedTwoDType !== 'all' || 
    selectedTopic !== 'all' ||
    sortBy !== 'default';

  return (
    <div className="flex-1 bg-slate-950 text-slate-100 flex flex-col p-3 sm:p-6 space-y-5 max-w-7xl mx-auto w-full">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950/70 via-slate-900 to-indigo-950/70 p-4 sm:p-6 rounded-2xl border border-blue-800/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Sparkles className="h-4 w-4" />
            <span>ভিজুয়াল অ্যাসেট মাস্টার গ্যালারি (Gallery3D)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white">
            এসএসসি বিজ্ঞান ২ডি চিত্র ও ৩ডি সিমুলেশন লাইব্রেরি
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            রসায়ন (১২টি অধ্যায়), পদার্থবিজ্ঞান ও জীববিজ্ঞানের সকল স্লাইডের বাস্তব আলোকচিত্র, পাঠ্যবইয়ের ভেক্টর রেখাচিত্র এবং ৩৬০° পূর্ণাঙ্গ ৩ডি মডেল।
          </p>
        </div>

        {/* Stat badges */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap">
          <div 
            onClick={() => { setSelectedMediaType('all'); setSelectedTwoDType('all'); }}
            className={`px-3 py-2 rounded-xl border text-center min-w-[70px] cursor-pointer transition ${
              selectedMediaType === 'all' 
                ? 'bg-slate-800 border-slate-600 ring-2 ring-slate-400/30' 
                : 'bg-slate-900/90 border-slate-800 hover:bg-slate-800'
            }`}
            title="সকল অ্যাসেট ফিল্টার করুন"
          >
            <div className="text-lg font-black text-white">{counts.total}</div>
            <div className="text-[10px] text-slate-400">মোট ভিজুয়াল</div>
          </div>

          <div 
            onClick={() => setSelectedMediaType('3d')}
            className={`px-3 py-2 rounded-xl border text-center min-w-[70px] cursor-pointer transition ${
              selectedMediaType === '3d' 
                ? 'bg-cyan-900/80 border-cyan-500 ring-2 ring-cyan-400/50' 
                : 'bg-cyan-950/60 border-cyan-800/60 hover:bg-cyan-900/50'
            }`}
            title="শুধুমাত্র ৩ডি সিমুলেশন ফিল্টার করুন"
          >
            <div className="text-lg font-black text-cyan-400">{counts.threeD}</div>
            <div className="text-[10px] text-cyan-300 font-bold">৩ডি মডেল</div>
          </div>

          <div 
            onClick={() => { setSelectedMediaType('2d'); setSelectedTwoDType('photo'); }}
            className={`px-3 py-2 rounded-xl border text-center min-w-[70px] cursor-pointer transition ${
              selectedMediaType === '2d' && selectedTwoDType === 'photo' 
                ? 'bg-blue-900/80 border-blue-500 ring-2 ring-blue-400/50' 
                : 'bg-blue-950/60 border-blue-800/60 hover:bg-blue-900/50'
            }`}
            title="শুধুমাত্র বাস্তব আলোকচিত্র ফিল্টার করুন"
          >
            <div className="text-lg font-black text-blue-400">{counts.photos}</div>
            <div className="text-[10px] text-blue-300">বাস্তব ছবি</div>
          </div>

          <div 
            onClick={() => { setSelectedMediaType('2d'); setSelectedTwoDType('diagram'); }}
            className={`px-3 py-2 rounded-xl border text-center min-w-[70px] cursor-pointer transition ${
              selectedMediaType === '2d' && selectedTwoDType === 'diagram' 
                ? 'bg-purple-900/80 border-purple-500 ring-2 ring-purple-400/50' 
                : 'bg-purple-950/60 border-purple-800/60 hover:bg-purple-900/50'
            }`}
            title="শুধুমাত্র ২ডি ডায়াগ্রাম ফিল্টার করুন"
          >
            <div className="text-lg font-black text-purple-400">{counts.diagrams}</div>
            <div className="text-[10px] text-purple-300">২ডি ডায়াগ্রাম</div>
          </div>
        </div>
      </div>

      {/* COMPREHENSIVE FILTER SYSTEM */}
      <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3.5 shadow-lg">
        {/* Row 1: Search & Media Type (2D vs 3D) Tabs */}
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="টপিক, অধ্যায়, মৌল বা চিত্র অনুসন্ধান করুন... (যেমন: বাত্যাচুল্লি, pH, মাইসেল, ড্যানিয়েল সেল, রাদারফোর্ড)"
              className="w-full pl-9 pr-8 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                title="মুছুন"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Media Type Filter (3D vs 2D vs All) */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 shrink-0 overflow-x-auto no-scrollbar">
            <button
              onClick={() => { setSelectedMediaType('all'); setSelectedTwoDType('all'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md font-semibold transition whitespace-nowrap ${
                selectedMediaType === 'all'
                  ? 'bg-slate-800 text-white shadow-sm font-bold border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Layers className="h-3.5 w-3.5 text-cyan-400" />
              <span>সকল মিডিয়া ({counts.total})</span>
            </button>

            <button
              onClick={() => setSelectedMediaType('3d')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md font-semibold transition whitespace-nowrap ${
                selectedMediaType === '3d'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold ring-1 ring-cyan-400'
                  : 'text-cyan-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Box className="h-3.5 w-3.5 animate-pulse" />
              <span>৩ডি সিমুলেশন ({counts.threeD})</span>
            </button>

            <button
              onClick={() => { setSelectedMediaType('2d'); setSelectedTwoDType('all'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md font-semibold transition whitespace-nowrap ${
                selectedMediaType === '2d' && selectedTwoDType === 'all'
                  ? 'bg-blue-600 text-white shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <ImageIcon className="h-3.5 w-3.5 text-blue-400" />
              <span>২ডি ভিজ্যুয়াল ({counts.twoD})</span>
            </button>

            {/* Sub-filters for 2D */}
            {selectedMediaType === '2d' && (
              <>
                <button
                  onClick={() => setSelectedTwoDType('photo')}
                  className={`flex items-center gap-1 px-2.5 py-1 text-[11px] rounded transition ${
                    selectedTwoDType === 'photo'
                      ? 'bg-blue-500 text-slate-950 font-bold'
                      : 'text-blue-300 hover:text-white hover:bg-slate-900'
                  }`}
                  title="বাস্তব বৈজ্ঞানিক আলোকচিত্র"
                >
                  <span>ছবি ({counts.photos})</span>
                </button>
                <button
                  onClick={() => setSelectedTwoDType('diagram')}
                  className={`flex items-center gap-1 px-2.5 py-1 text-[11px] rounded transition ${
                    selectedTwoDType === 'diagram'
                      ? 'bg-purple-500 text-slate-950 font-bold'
                      : 'text-purple-300 hover:text-white hover:bg-slate-900'
                  }`}
                  title="পাঠ্যবইয়ের ভেক্টর ডায়াগ্রাম"
                >
                  <span>ডায়াগ্রাম ({counts.diagrams})</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Row 2: Subject & Chapter Filter System */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-slate-800/80 text-xs">
          {/* Subject Switcher */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 font-medium flex items-center gap-1 mr-1">
              <Filter className="h-3.5 w-3.5 text-cyan-400" />
              বিষয়:
            </span>

            {(['all', 'chemistry', 'physics', 'biology'] as const).map(subj => (
              <button
                key={subj}
                onClick={() => {
                  setSelectedSubject(subj);
                  setSelectedChapter('all');
                  setSelectedTopic('all');
                }}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  selectedSubject === subj
                    ? subj === 'chemistry'
                      ? 'bg-cyan-600 text-white font-bold shadow-sm'
                      : subj === 'physics'
                      ? 'bg-amber-600 text-white font-bold shadow-sm'
                      : subj === 'biology'
                      ? 'bg-emerald-600 text-white font-bold shadow-sm'
                      : 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {subj === 'all' ? 'সব বিষয়' : SUBJECT_LABELS[subj]}
              </button>
            ))}
          </div>

          {/* Chapter Selector Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">অধ্যায়:</span>
            <select
              value={selectedChapter}
              onChange={(e) => {
                setSelectedChapter(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10));
                setSelectedTopic('all');
              }}
              className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="all">সকল অধ্যায় ({allAssets.filter(a => selectedSubject === 'all' || a.subject === selectedSubject).length})</option>
              {selectedSubject === 'all' && (
                <>
                  <optgroup label="রসায়ন (অধ্যায় ১-১২)">
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(c => (
                      <option key={`chem-${c}`} value={c}>রসায়ন {c}: {CHAPTER_TITLES[`chemistry-${c}`] || ''}</option>
                    ))}
                  </optgroup>
                  <optgroup label="পদার্থবিজ্ঞান">
                    {[4, 5, 6, 7].map(c => (
                      <option key={`phys-${c}`} value={c}>পদার্থবিজ্ঞান {c}: {CHAPTER_TITLES[`physics-${c}`] || ''}</option>
                    ))}
                  </optgroup>
                  <optgroup label="জীববিজ্ঞান">
                    {[1, 2, 3, 4, 5].map(c => (
                      <option key={`bio-${c}`} value={c}>জীববিজ্ঞান {c}: {CHAPTER_TITLES[`biology-${c}`] || ''}</option>
                    ))}
                  </optgroup>
                </>
              )}
              {selectedSubject === 'chemistry' && (
                Array.from({ length: 12 }, (_, i) => i + 1).map(c => (
                  <option key={c} value={c}>অধ্যায় {c}: {CHAPTER_TITLES[`chemistry-${c}`] || ''}</option>
                ))
              )}
              {selectedSubject === 'physics' && (
                [4, 5, 6, 7].map(c => (
                  <option key={c} value={c}>অধ্যায় {c}: {CHAPTER_TITLES[`physics-${c}`] || ''}</option>
                ))
              )}
              {selectedSubject === 'biology' && (
                [1, 2, 3, 4, 5].map(c => (
                  <option key={c} value={c}>অধ্যায় {c}: {CHAPTER_TITLES[`biology-${c}`] || ''}</option>
                ))
              )}
            </select>
          </div>
        </div>

        {/* Row 3: Topic Selector Dropdown & Quick Topic Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium flex items-center gap-1">
              <Tag className="h-3.5 w-3.5 text-amber-400" />
              টপিক / বিষয়বস্তু:
            </span>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-500 max-w-[200px] truncate"
            >
              <option value="all">সকল টপিক ({availableTopics.length}টি)</option>
              {availableTopics.map(t => (
                <option key={t.name} value={t.name}>
                  {t.name} ({t.count})
                </option>
              ))}
            </select>
          </div>

          {/* Quick topic pills (top 6 available topics) */}
          <div className="flex flex-wrap items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => setSelectedTopic('all')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition ${
                selectedTopic === 'all'
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                  : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
              }`}
            >
              সকল
            </button>
            {availableTopics.slice(0, 7).map(t => (
              <button
                key={t.name}
                onClick={() => setSelectedTopic(selectedTopic === t.name ? 'all' : t.name)}
                className={`px-2 py-0.5 rounded text-[11px] transition whitespace-nowrap ${
                  selectedTopic === t.name
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white bg-slate-950 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {t.name} <span className="opacity-60 text-[10px]">({t.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Row 4: Active Filters Badges, Sorting & View Layout Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-slate-800/80 text-xs">
          {/* Active Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 min-h-[26px]">
            <span className="text-slate-400 text-[11px]">
              ফলাফল: <span className="font-bold text-white">{filteredAssets.length}</span>টি অ্যাসেট
            </span>

            {selectedSubject !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[11px]">
                {SUBJECT_LABELS[selectedSubject]}
                <X className="h-3 w-3 cursor-pointer hover:text-white" onClick={() => setSelectedSubject('all')} />
              </span>
            )}

            {selectedChapter !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px]">
                অধ্যায় {selectedChapter}
                <X className="h-3 w-3 cursor-pointer hover:text-white" onClick={() => setSelectedChapter('all')} />
              </span>
            )}

            {selectedMediaType !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px]">
                {selectedMediaType === '3d' ? '৩ডি সিমুলেশন' : selectedTwoDType === 'photo' ? 'আলোকচিত্র' : selectedTwoDType === 'diagram' ? 'ডায়াগ্রাম' : '২ডি ভিজ্যুয়াল'}
                <X className="h-3 w-3 cursor-pointer hover:text-white" onClick={() => { setSelectedMediaType('all'); setSelectedTwoDType('all'); }} />
              </span>
            )}

            {selectedTopic !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px]">
                টপিক: {selectedTopic}
                <X className="h-3 w-3 cursor-pointer hover:text-white" onClick={() => setSelectedTopic('all')} />
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[11px]">
                অনুসন্ধান: "{searchQuery}"
                <X className="h-3 w-3 cursor-pointer hover:text-white" onClick={() => setSearchQuery('')} />
              </span>
            )}

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/60 transition ml-1"
                title="সকল ফিল্টার মুছুন"
              >
                <RotateCcw className="h-3 w-3" />
                <span>রিসেট</span>
              </button>
            )}
          </div>

          {/* Right Controls: Sort & Layout */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Sort Selector */}
            <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-[11px]">
              <ArrowUpDown className="h-3 w-3 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="default">স্লাইড ক্রমানুসারে</option>
                <option value="title">শিরোনাম (অ-ক)</option>
                <option value="3dFirst">৩ডি সিমুলেশন আগে</option>
                <option value="photosFirst">আলোকচিত্র আগে</option>
              </select>
            </div>

            {/* Grid vs Compact List */}
            <div className="flex items-center gap-0.5 bg-slate-950 p-0.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setViewLayout('grid')}
                className={`p-1 rounded transition ${viewLayout === 'grid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-500 hover:text-slate-300'}`}
                title="গ্রিড ভিউ"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setViewLayout('compact')}
                className={`p-1 rounded transition ${viewLayout === 'compact' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-500 hover:text-slate-300'}`}
                title="কমপ্যাক্ট তালিকা ভিউ"
              >
                <List className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid / List of Visual Assets */}
      {filteredAssets.length === 0 ? (
        <div className="py-16 text-center bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
          <Box className="h-12 w-12 text-slate-600 mx-auto" />
          <div className="text-base font-bold text-slate-300">কোনো ভিজুয়াল অ্যাসেট পাওয়া যায়নি</div>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            আপনার নির্বাচিত ফিল্টার বা অনুসন্ধানের জন্য কোনো চিত্র বা ৩ডি মডেল মেলেনি। ভিন্ন অধ্যায়, টপিক বা কীওয়ার্ড চেষ্টা করুন।
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-xs text-white font-bold rounded-lg transition shadow-md"
          >
            ফিল্টার রিসেট করুন
          </button>
        </div>
      ) : viewLayout === 'compact' ? (
        /* COMPACT LIST VIEW */
        <div className="bg-slate-900/80 rounded-xl border border-slate-800 overflow-hidden divide-y divide-slate-800">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="p-3 flex items-center justify-between gap-3 hover:bg-slate-800/60 transition group cursor-pointer"
              onClick={() => setActiveModalAsset(asset)}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                  asset.type === '3d'
                    ? 'bg-cyan-500 text-slate-950 font-black'
                    : asset.type === 'photo'
                    ? 'bg-blue-600 text-white'
                    : 'bg-purple-600 text-white'
                }`}>
                  {asset.type === '3d' ? '৩ডি' : asset.type === 'photo' ? 'ছবি' : 'ডায়াগ্রাম'}
                </span>

                <div className="min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition truncate">
                    {asset.titleBn}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {SUBJECT_LABELS[asset.subject]} · {asset.chapterTitle} · {asset.topic}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalAsset(asset);
                  }}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 text-xs font-semibold transition"
                >
                  দেখুন
                </button>
                {onSelectSlide && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSlide(asset.subject, asset.chapter, asset.slideIndex);
                    }}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition"
                    title="মূল স্লাইডে যান"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* STANDARD CARD GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="group bg-slate-900 rounded-xl border border-slate-800/80 hover:border-cyan-500/50 shadow-md hover:shadow-cyan-500/10 transition flex flex-col overflow-hidden"
            >
              {/* Asset Preview Thumbnail Area */}
              <div 
                onClick={() => setActiveModalAsset(asset)}
                className="relative aspect-video w-full bg-slate-950 flex items-center justify-center cursor-pointer overflow-hidden group-hover:brightness-105 transition"
              >
                {asset.type === 'photo' && asset.imageUrl ? (
                  <img
                    src={asset.imageUrl}
                    alt={asset.titleBn}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : asset.type === '3d' ? (
                  <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60 border-b border-cyan-500/20">
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center text-cyan-300 shadow-xl group-hover:scale-110 transition duration-300">
                        {asset.subject === 'physics' ? (
                          <Zap className="h-6 w-6 text-amber-400 animate-pulse" />
                        ) : asset.subject === 'biology' ? (
                          <Dna className="h-6 w-6 text-emerald-400 animate-spin" />
                        ) : (
                          <Atom className="h-6 w-6 text-cyan-400 animate-spin" />
                        )}
                      </div>
                      <span className="text-[11px] font-bold text-cyan-200 bg-slate-950/90 px-2.5 py-0.5 rounded-full border border-cyan-700/60 shadow">
                        ৩৬০° ইন্টারেক্টিভ ৩ডি
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full p-2 flex flex-col items-center justify-center bg-slate-950 text-center">
                    <Layers className="h-8 w-8 text-purple-400 mb-1" />
                    <span className="text-xs font-bold text-purple-300 px-2 line-clamp-1">{asset.titleBn}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">পাঠ্যবইয়ের বৈজ্ঞানিক রেখাচিত্র</span>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1 z-10">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold shadow-md ${
                    asset.type === '3d'
                      ? 'bg-cyan-500 text-slate-950 font-black'
                      : asset.type === 'photo'
                      ? 'bg-blue-600 text-white'
                      : 'bg-purple-600 text-white'
                  }`}>
                    {asset.type === '3d' ? '৩ডি সিমুলেশন' : asset.type === 'photo' ? 'আলোকচিত্র' : '২ডি ডায়াগ্রাম'}
                  </span>
                </div>

                {/* Chapter Badge */}
                <div className="absolute top-2 right-2 z-10">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-950/80 border border-slate-700 text-slate-300">
                    অধ্যায় {asset.chapter}
                  </span>
                </div>

                {/* Hover Quick Zoom Action */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center z-20">
                  <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>পূর্ণরূপে দেখুন</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between">
                    <span>{SUBJECT_LABELS[asset.subject]} · স্লাইড #{asset.slideId}</span>
                    <span className="text-amber-400 font-medium truncate max-w-[120px] text-right" title={asset.topic}>
                      {asset.topic}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white line-clamp-1 mt-0.5" title={asset.titleBn}>
                    {asset.titleBn}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                    {asset.captionBn}
                  </p>
                </div>

                {/* Card Action footer */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalAsset(asset)}
                    className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <Eye className="h-3 w-3" />
                    <span>ভিউয়ার খুলুন</span>
                  </button>

                  {onSelectSlide && (
                    <button
                      onClick={() => onSelectSlide(asset.subject, asset.chapter, asset.slideIndex)}
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 hover:underline"
                      title="এই স্লাইডের মূল প্রেজেন্টেশনে যান"
                    >
                      <span>স্লাইডে যান</span>
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Interactive Asset Preview Modal */}
      {activeModalAsset && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-5 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                  activeModalAsset.type === '3d'
                    ? 'bg-cyan-500 text-slate-950 font-black'
                    : activeModalAsset.type === 'photo'
                    ? 'bg-blue-600 text-white'
                    : 'bg-purple-600 text-white'
                }`}>
                  {activeModalAsset.type === '3d' ? '৩ডি ইন্টারঅ্যাকশন' : activeModalAsset.type === 'photo' ? 'আলোকচিত্র' : '২ডি ডায়াগ্রাম'}
                </span>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                    {activeModalAsset.titleBn}
                  </h2>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {SUBJECT_LABELS[activeModalAsset.subject]} · {activeModalAsset.chapterTitle} · টপিক: {activeModalAsset.topic} · স্লাইড #{activeModalAsset.slideId}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {onSelectSlide && (
                  <button
                    onClick={() => {
                      onSelectSlide(activeModalAsset.subject, activeModalAsset.chapter, activeModalAsset.slideIndex);
                      setActiveModalAsset(null);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition shadow-sm"
                  >
                    <span>এই স্লাইডে যান</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setActiveModalAsset(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Center Visual Area */}
            <div className="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center">
              {activeModalAsset.type === '3d' ? (
                <div className="w-full h-full">
                  <ThreeDViewer
                    slideId={activeModalAsset.slideId}
                    slideTitle={activeModalAsset.slideTitle}
                    category={activeModalAsset.topic}
                    chapter={activeModalAsset.chapter}
                    subject={activeModalAsset.subject}
                    slideImage={activeModalAsset.imageUrl}
                    slideImageCaption={activeModalAsset.captionBn}
                    isModal={true}
                  />
                </div>
              ) : activeModalAsset.type === 'diagram' && activeModalAsset.customDiagramType ? (
                <div className="w-full h-full p-4 overflow-y-auto flex items-center justify-center">
                  <div className="w-full max-w-3xl">
                    <CustomDiagramViewer type={activeModalAsset.customDiagramType} />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full p-4 flex items-center justify-center">
                  <img
                    src={activeModalAsset.imageUrl}
                    alt={activeModalAsset.titleBn}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-slate-800"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="px-4 py-3 bg-slate-950/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-slate-300 max-w-2xl">
                <span className="font-semibold text-white">বিবরণ: </span>
                {activeModalAsset.captionBn}
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {activeModalAsset.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
