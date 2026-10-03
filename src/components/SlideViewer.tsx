import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from '../types/presentation';
import { CustomDiagramViewer } from './CustomDiagramViewer';
import { ThreeDViewer } from './ThreeDViewer';
import { PptxDirectSlideRenderer } from './PptxDirectSlideRenderer';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Grid, 
  BookOpen, 
  ExternalLink,
  RotateCcw,
  Sparkles,
  Info,
  AlertTriangle,
  Maximize2,
  X,
  Atom,
  Eye,
  Languages,
  Tag,
  LayoutGrid,
  Square,
  Box,
  Compass,
  Edit3
} from 'lucide-react';
import { SlideEditModal } from './SlideEditModal';
import { FormulaBadge } from './FormulaBadge';

interface SlideViewerProps {
  slides: Slide[];
  currentSlideIndex: number;
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  onOpenSlideIndex: () => void;
  onNavigateToTab: (tab: 'simulator' | 'aufbau' | 'isotope' | 'kinetic' | 'diffusion' | 'heating' | 'safety' | 'ptable' | 'positionFinder' | 'trends' | 'bondingLab' | 'formulaBuilder' | 'compoundProps' | 'workEnergyLab' | 'pressureLab' | 'cellDivisionLab' | 'cellExplorerLab') => void;
  openPowerPointShow?: () => void;
  onUpdateSlide?: (updatedSlide: Slide, slideIndex: number) => void;
  onResetSlide?: (slideIndex: number) => void;
  isSlideEdited?: (slideIndex: number) => boolean;
}

function ensureSlideVisuals(slide: Slide): Slide {
  if (!slide) return slide;
  
  const defaultImg = 
    slide.subject === 'physics'
      ? (slide.chapter === 4 
          ? '/src/assets/images/work_energy_physics_1791027317460.jpg' 
          : '/src/assets/images/fluid_pressure_physics_1791027332942.jpg')
      : slide.subject === 'biology'
      ? (slide.chapter === 2 
          ? '/src/assets/images/cell_tissue_biology_1791027347161.jpg' 
          : '/src/assets/images/mitosis_cell_division_1791027361813.jpg')
      : '/src/assets/images/hero_chemistry_atom_1790749681138.jpg';

  const enriched = { ...slide };

  if (!enriched.image) {
    enriched.image = defaultImg;
  }

  if (!enriched.gallery || enriched.gallery.length === 0) {
    if (slide.subject === 'physics') {
      if (slide.chapter === 4) {
        enriched.gallery = [
          {
            id: `p4-g1-${slide.id}`,
            url: '/src/assets/images/work_energy_physics_1791027317460.jpg',
            titleBn: 'কাজ ও বল ভেক্টর চিত্র',
            titleEn: 'Work & Force Vector Illustration',
            captionBn: 'বল প্রয়োগে সরণ ঘটলে কৃতকাজ W = Fs cosθ। কোণের পরিবর্তনে কাজের মান পরিবর্তিত হয়।',
            captionEn: 'Mechanical work done by force vector F causing displacement s.',
            type: 'diagram',
            customDiagramType: 'workAngleVectors'
          },
          {
            id: `p4-g2-${slide.id}`,
            url: '/src/assets/images/work_energy_physics_1791027317460.jpg',
            titleBn: 'শক্তির রূপান্তর ও সংরক্ষণশীলতা',
            titleEn: 'Energy Transformation & Conservation',
            captionBn: 'যান্ত্রিক শক্তির নিত্যতা: মুক্ত পতনে বা রোলার কোস্টারে মোট যান্ত্রিক শক্তি ধ্রুব থাকে।',
            captionEn: 'Conservation of mechanical energy: Ep + Ek = Constant.',
            type: 'diagram',
            customDiagramType: 'energyConservation'
          }
        ];
      } else {
        enriched.gallery = [
          {
            id: `p5-g1-${slide.id}`,
            url: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg',
            titleBn: 'প্যাসকেলের সূত্র ও হাইড্রোলিক প্রেস',
            titleEn: 'Pascal Principle & Hydraulic Press',
            captionBn: 'আবদ্ধ পাত্রে তরলে বল প্রয়োগ করলে চাপ সবদিকে সমানভাবে সঞ্চালিত হয়: F2 = F1 × (A2/A1)।',
            captionEn: 'Equal pressure transmission P1 = P2 leading to force amplification.',
            type: 'diagram',
            customDiagramType: 'hydraulicPressSvg'
          },
          {
            id: `p5-g2-${slide.id}`,
            url: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg',
            titleBn: 'আর্কিমিডিসের নীতি ও প্লবতা',
            titleEn: 'Archimedes Principle & Buoyancy',
            captionBn: 'তরলে নিমজ্জিত বস্তু তার আয়তনের সমান তরল অপসারিত করে; উর্ধ্বমুখী প্লবতা FB = Vρg।',
            captionEn: 'Upward buoyant force equals weight of displaced fluid.',
            type: 'diagram',
            customDiagramType: 'archimedesBeaker'
          }
        ];
      }
    } else if (slide.subject === 'biology') {
      if (slide.chapter === 2) {
        enriched.gallery = [
          {
            id: `b2-g1-${slide.id}`,
            url: '/src/assets/images/cell_tissue_biology_1791027347161.jpg',
            titleBn: 'উদ্ভিদকোষ বনাম প্রাণীকোষ',
            titleEn: 'Plant vs Animal Cell Architecture',
            captionBn: 'উদ্ভিদকোষের জড় সেলুলোজ প্রাচীর ও প্লাস্টিড এবং প্রাণীকোষের সেন্ট্রোসোম গঠন।',
            captionEn: 'Comparative structural features of plant and animal cells.',
            type: 'diagram',
            customDiagramType: 'plantVsAnimalCellSvg'
          },
          {
            id: `b2-g2-${slide.id}`,
            url: '/src/assets/images/cell_tissue_biology_1791027347161.jpg',
            titleBn: 'কোষীয় সূক্ষ্ম অঙ্গাণুর ত্রিমাত্রিক রূপ',
            titleEn: '3D Organelle Microscopic Visualization',
            captionBn: 'মাইটোকন্ড্রিয়া, ক্লোরোপ্লাস্ট, নিউক্লিয়াস ও কোষঝিল্লির সমন্বিত কার্যক্রম।',
            captionEn: 'Mitochondria, chloroplast and nucleus cellular machinery.',
            type: 'photo'
          }
        ];
      } else {
        enriched.gallery = [
          {
            id: `b3-g1-${slide.id}`,
            url: '/src/assets/images/mitosis_cell_division_1791027361813.jpg',
            titleBn: 'মাইটোসিস কোষ বিভাজনের ধাপসমূহ',
            titleEn: 'Mitosis 5 Stages Sequence',
            captionBn: 'প্রোফেজ থেকে টেলোফেজ পর্যন্ত ক্রোমোজোম ও স্পিন্ডল যন্ত্রের ধারাবাহিক রূপান্তর।',
            captionEn: 'Five continuous stages of somatic mitotic cell division.',
            type: 'diagram',
            customDiagramType: 'mitosisStages'
          },
          {
            id: `b3-g2-${slide.id}`,
            url: '/src/assets/images/mitosis_cell_division_1791027361813.jpg',
            titleBn: 'ফ্লুরোসেন্ট অণুবীক্ষণে ক্রোমোজোম পৃথকীকরণ',
            titleEn: 'Fluorescent Microscopy of Anaphase',
            captionBn: 'মেরুমুখী চলনকালে অপত্য ক্রোমোজোমের সেন্ট্রোমিয়ারের অবস্থান অনুযায়ী V, L, J, I রূপ।',
            captionEn: 'Chromosome segregation with fluorescent microtubule spindle fibers.',
            type: 'photo'
          }
        ];
      }
    }
  } else {
    // If gallery exists but any item has no url, fallback to defaultImg
    enriched.gallery = enriched.gallery.map(item => ({
      ...item,
      url: item.url || defaultImg
    }));
  }

  return enriched;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
  onOpenSlideIndex,
  onNavigateToTab,
  openPowerPointShow,
  onUpdateSlide,
  onResetSlide,
  isSlideEdited
}) => {
  const currentSlide = ensureSlideVisuals(slides[currentSlideIndex]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlayInterval, setAutoPlayInterval] = useState(8); // seconds
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [activeImageTab, setActiveImageTab] = useState<'primary' | 'secondary'>('primary');
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0);
  const [galleryLayout, setGalleryLayout] = useState<'single' | 'grid'>('single');
  const [displayMode, setDisplayMode] = useState<'2d' | '3d'>('2d');
  const [zoomedImage, setZoomedImage] = useState<{ url: string; caption?: string } | null>(null);
  const [annotationLang, setAnnotationLang] = useState<'both' | 'bn' | 'en'>('both');
  const [activeAnnotationIdx, setActiveAnnotationIdx] = useState<number | null>(null);
  const [showPinsOnImage, setShowPinsOnImage] = useState<boolean>(true);
  const [customPptxViewMode, setCustomPptxViewMode] = useState<'direct' | 'card'>('direct');

  // Reset active image tab on slide change
  useEffect(() => {
    setActiveImageTab('primary');
    setActiveGalleryIdx(0);
    setActiveAnnotationIdx(null);
  }, [currentSlideIndex]);

  // Auto-advance slideshow
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
      }, autoPlayInterval * 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, autoPlayInterval, slides.length, setCurrentSlideIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(slides.length - 1);
      }
    },
    [slides.length, setCurrentSlideIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Audio Speech synthesis for lecture
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      setSpeechSupported(false);
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = `${currentSlide.title}। ${currentSlide.subtitle}। ${currentSlide.keyPoints.map(p => `${p.heading}। ${p.description}`).join('। ')}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Attempt Bengali voice or fallback
    const voices = window.speechSynthesis.getVoices();
    const bnVoice = voices.find(v => v.lang.startsWith('bn'));
    if (bnVoice) {
      utterance.voice = bnVoice;
    }
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  // Stop speech when slide changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentSlideIndex]);

  // Bengali numerals helper
  const toBengaliNumber = (num: number) => {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
  };

  return (
    <div className="relative flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] p-4 md:p-6 lg:p-8">
      {/* Slide Canvas Container (16:9 Aspect Ratio on large screens) */}
      <div className="w-full max-w-6xl rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col transition-all duration-300">
        
        {/* Slide Top Metadata Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-3 bg-slate-950/60">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-cyan-400">{currentSlide.category}</span>
            <span aria-hidden="true">·</span>
            <span>
              {currentSlide.subject === 'biology' ? 'জীববিজ্ঞান' : currentSlide.subject === 'physics' ? 'পদার্থবিজ্ঞান' : 'রসায়ন'}{' '}
              {currentSlide.chapter ? `অধ্যায় ${toBengaliNumber(currentSlide.chapter)}` : ''}
            </span>
            <span aria-hidden="true">·</span>
            <span>এসএসসি ও ৯ম-১০ম শ্রেণি</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleSpeech}
              title={isSpeaking ? 'অডিও লেকচার থামান' : 'স্লাইডের অডিও লেকচার শুনুন'}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${
                isSpeaking 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse' 
                  : 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {isSpeaking ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-cyan-400" />}
              <span>{isSpeaking ? 'অডিও বাজছে...' : 'অডিও লেকচার'}</span>
            </button>

            <span className="font-mono text-xs text-slate-400 font-medium">
              {toBengaliNumber(currentSlideIndex + 1)} / {toBengaliNumber(slides.length)}
            </span>
          </div>
        </div>

        {/* Slide Main Body */}
        <div className="p-6 md:p-8 lg:p-10 flex-1 overflow-y-auto space-y-6">
          {/* Custom Uploaded PPTX Top Banner & Mode Toggle */}
          {currentSlide.rawPptx && (
            <div className="flex flex-wrap items-center justify-between p-3 rounded-xl border border-indigo-500/30 bg-indigo-950/20 gap-2 mb-2">
              <div className="flex items-center gap-2 text-xs text-indigo-300 font-semibold">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span>পাওয়ারপয়েন্ট (.pptx) থেকে আপলোডকৃত হুবহু স্লাইড ডিজাইন</span>
              </div>
              <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setCustomPptxViewMode('direct')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold transition ${
                    customPptxViewMode === 'direct'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🖥️ পাওয়ারপয়েন্ট হুবহু ডিজাইন</span>
                </button>
                <button
                  onClick={() => setCustomPptxViewMode('card')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold transition ${
                    customPptxViewMode === 'card'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>📋 কার্ড ফরম্যাট</span>
                </button>
              </div>
            </div>
          )}

          {currentSlide.rawPptx && customPptxViewMode === 'direct' ? (
            <div className="space-y-4">
              <PptxDirectSlideRenderer slide={currentSlide} />

              {/* Speaker Notes if present */}
              {currentSlide.speakerNotes && (
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-cyan-400">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>স্পিকার নোটস:</span>
                  </div>
                  <p className="leading-relaxed whitespace-pre-line">{currentSlide.speakerNotes}</p>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Slide Header */}
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {currentSlide.title}
                </h1>
                <p className="text-sm md:text-base text-cyan-400/90 font-medium">
                  {currentSlide.subtitle}
                </p>
              </div>

          {/* Embedded Multi-Image Gallery & Interactive 3D Viewer */}
          {((currentSlide.gallery && currentSlide.gallery.length > 0) || currentSlide.image) && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40">
              {/* Gallery Top Navigation Bar: 2D vs 3D Mode + Image Select Tabs */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 py-2.5 gap-2">
                {/* 2D vs 3D Mode Switcher */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setDisplayMode('2d')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold transition ${
                      displayMode === '2d'
                        ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Square className="h-3.5 w-3.5 text-cyan-400" />
                    <span>২ডি চিত্র ও ডায়াগ্রাম</span>
                  </button>

                  <button
                    onClick={() => setDisplayMode('3d')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold transition ${
                      displayMode === '3d'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md font-extrabold'
                        : 'text-cyan-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <Box className="h-3.5 w-3.5 animate-pulse" />
                    <span>ইন্টারেক্টিভ ৩ডি ভিউ</span>
                    <span className="px-1.5 py-0.2 text-[9px] bg-amber-400 text-slate-950 rounded font-black uppercase">
                      3D Live
                    </span>
                  </button>
                </div>

                {/* If 2D mode and multiple images: show Image Select Tabs & Grid/Single layout switch */}
                {displayMode === '2d' && currentSlide.gallery && currentSlide.gallery.length > 1 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
                      {currentSlide.gallery.map((imgItem, gIdx) => {
                        const isActive = activeGalleryIdx === gIdx && galleryLayout === 'single';
                        return (
                          <button
                            key={imgItem.id || gIdx}
                            onClick={() => {
                              setActiveGalleryIdx(gIdx);
                              setGalleryLayout('single');
                            }}
                            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                              isActive
                                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            <span>চিত্র {gIdx + 1}: {imgItem.titleBn}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                      <button
                        onClick={() => setGalleryLayout('single')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition ${
                          galleryLayout === 'single'
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                        title="একটি চিত্র বড় করে দেখুন"
                      >
                        <Square className="h-3 w-3" />
                        <span>একক</span>
                      </button>
                      <button
                        onClick={() => setGalleryLayout('grid')}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition ${
                          galleryLayout === 'grid'
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                        title="একসাথে সব কয়টি চিত্র দেখুন"
                      >
                        <LayoutGrid className="h-3 w-3" />
                        <span>সকল চিত্র ({currentSlide.gallery.length}টি)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Gallery Content Area: 3D View vs 2D Gallery */}
              {displayMode === '3d' ? (
                <div className="p-2 sm:p-3 bg-slate-950">
                  <ThreeDViewer
                    slideId={currentSlide.id}
                    slideTitle={currentSlide.title}
                    category={currentSlide.category}
                    chapter={currentSlide.chapter || 3}
                    subject={currentSlide.subject || 'chemistry'}
                  />
                </div>
              ) : (() => {
                const galleryItems = currentSlide.gallery || [
                  {
                    id: 'fallback_1',
                    url: currentSlide.image,
                    titleBn: currentSlide.title,
                    titleEn: currentSlide.subtitle,
                    captionBn: currentSlide.imageCaption || '',
                    captionEn: ''
                  }
                ];

                // 1. Grid View: Show all 2-3 images side by side
                if (galleryLayout === 'grid' && galleryItems.length > 1) {
                  return (
                    <div className="p-4 bg-slate-950/60">
                      <div className={`grid grid-cols-1 ${galleryItems.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-4`}>
                        {galleryItems.map((item, idx) => (
                          <div 
                            key={item.id || idx}
                            className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden flex flex-col justify-between"
                          >
                            <div className="px-3 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs">
                              <span className="font-bold text-white">চিত্র {idx + 1}: {item.titleBn}</span>
                              <button
                                onClick={() => setDisplayMode('3d')}
                                className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-[10px] font-bold border border-cyan-500/30 transition"
                                title="এই বিষয়ের ৩ডি মডেল ইন্টারেক্টিভভাবে দেখুন"
                              >
                                <Box className="h-2.5 w-2.5" />
                                <span>৩ডি ভিউ</span>
                              </button>
                            </div>

                            <div 
                              onClick={() => {
                                const targetUrl = item.url || currentSlide.image;
                                if (targetUrl) setZoomedImage({ url: targetUrl, caption: item.captionBn });
                              }}
                              className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden cursor-zoom-in group"
                            >
                              {item.customDiagramType ? (
                                <CustomDiagramViewer type={item.customDiagramType} />
                              ) : (
                                <>
                                  <img
                                    src={item.url || currentSlide.image}
                                    alt={item.titleBn}
                                    referrerPolicy="no-referrer"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Maximize2 className="h-5 w-5 text-white drop-shadow" />
                                  </div>
                                </>
                              )}
                            </div>

                            <div className="p-2.5 text-[11px] text-slate-300 bg-slate-950/90 border-t border-slate-800/80">
                              <p className="line-clamp-2">{item.captionBn}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                // 2. Single View: Focused view of selected image in gallery
                const activeItem = galleryItems[activeGalleryIdx] || galleryItems[0];

                return (
                  <div>
                    {activeItem.customDiagramType ? (
                      <div className="p-4 bg-slate-950">
                        <CustomDiagramViewer type={activeItem.customDiagramType} />
                      </div>
                    ) : (
                      <div 
                        className="group relative aspect-video max-h-80 w-full overflow-hidden bg-slate-950 flex items-center justify-center select-none"
                      >
                        <img
                          src={activeItem.url || currentSlide.image}
                          alt={activeItem.titleBn}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover object-center transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = currentSlide.image || '/src/assets/images/hero_chemistry_atom_1790749681138.jpg';
                          }}
                        />
                        
                        {/* Floating Interactive Bilingual Pins on Image (if annotations exist) */}
                        {showPinsOnImage && currentSlide.diagramAnnotations && (
                          <div className="absolute inset-0 pointer-events-none">
                            {currentSlide.diagramAnnotations.map((anno, aIdx) => {
                              if (!anno.position) return null;
                              const isSelected = activeAnnotationIdx === aIdx;

                              let badgeBg = 'bg-cyan-500 border-cyan-300 text-slate-950';
                              if (anno.badgeType === 'proton') badgeBg = 'bg-rose-500 border-rose-300 text-white';
                              if (anno.badgeType === 'neutron') badgeBg = 'bg-slate-400 border-slate-200 text-slate-950';
                              if (anno.badgeType === 'nucleus') badgeBg = 'bg-amber-400 border-amber-200 text-slate-950';
                              if (anno.badgeType === 'radiation') badgeBg = 'bg-purple-500 border-purple-300 text-white';
                              if (anno.badgeType === 'gold') badgeBg = 'bg-yellow-400 border-yellow-200 text-slate-950';

                              return (
                                <div
                                  key={aIdx}
                                  style={{ left: `${anno.position.x}%`, top: `${anno.position.y}%` }}
                                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300 z-20"
                                >
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveAnnotationIdx(isSelected ? null : aIdx);
                                    }}
                                    className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border shadow-xl backdrop-blur-md transition-all hover:scale-110 ${badgeBg} ${
                                      isSelected ? 'scale-125 ring-4 ring-white/60 animate-pulse' : ''
                                    }`}
                                    title={`${anno.labelBn} / ${anno.labelEn}`}
                                  >
                                    <span className="font-mono text-[11px]">{anno.symbol || '•'}</span>
                                    <span className="text-[10px] md:text-[11px] whitespace-nowrap">
                                      {annotationLang === 'bn' 
                                        ? anno.labelBn 
                                        : annotationLang === 'en' 
                                        ? anno.labelEn 
                                        : `${anno.labelBn} / ${anno.labelEn}`}
                                    </span>
                                  </button>

                                  {isSelected && (
                                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-60 sm:w-72 p-3 rounded-xl bg-slate-900/95 border border-cyan-400 shadow-2xl text-left z-30 text-xs backdrop-blur-md">
                                      <div className="font-bold text-white flex items-center justify-between pb-1.5 border-b border-slate-800">
                                        <div>
                                          <span className="text-white block font-bold text-xs">{anno.labelBn}</span>
                                          <span className="text-cyan-400 font-normal text-[11px]">{anno.labelEn}</span>
                                        </div>
                                        <span className="font-mono text-cyan-300 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-[10.5px]">
                                          {anno.symbol}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-slate-200 pt-1.5 leading-snug">
                                        {anno.detailBn}
                                      </p>
                                      <p className="text-[10px] text-slate-400 italic pt-1 leading-snug">
                                        {anno.detailEn}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Top Controls: 3D View, Pins Toggle & Zoom */}
                        <div className="absolute top-2 right-2 flex items-center gap-1.5 z-20">
                          <button
                            onClick={() => setDisplayMode('3d')}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold backdrop-blur-md shadow-lg hover:brightness-110 transition"
                            title="এই স্লাইডের সম্পূর্ণ ইন্টারেক্টিভ ৩ডি ভিউ দেখুন"
                          >
                            <Box className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">৩ডি ভিউ</span>
                          </button>

                          {currentSlide.diagramAnnotations && (
                            <button
                              onClick={() => setShowPinsOnImage(!showPinsOnImage)}
                              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-md border transition ${
                                showPinsOnImage
                                  ? 'bg-cyan-500/90 text-slate-950 border-cyan-400'
                                  : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white'
                              }`}
                              title="চিত্রে বাংলা-ইংরেজি পিন দেখুন বা লুকান"
                            >
                              <Tag className="h-3 w-3" />
                              <span className="hidden sm:inline">{showPinsOnImage ? 'পিন সক্রিয়' : 'পিন প্রদর্শন'}</span>
                            </button>
                          )}

                          <button
                            onClick={() => setZoomedImage({ url: activeItem.url!, caption: activeItem.captionBn })}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/80 text-white text-xs font-medium backdrop-blur-md border border-slate-700 hover:bg-slate-800 transition"
                            title="পূর্ণরূপে বড় করে দেখুন"
                          >
                            <Maximize2 className="h-3 w-3 text-cyan-400" />
                            <span className="hidden sm:inline">বড় করুন</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Image Caption */}
                    <div className="px-4 py-2.5 text-xs text-slate-300 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">চিত্র {activeGalleryIdx + 1}:</span>
                        <span>{activeItem.captionBn}</span>
                        {activeItem.captionEn && (
                          <span className="text-slate-400 italic hidden md:inline">({activeItem.captionEn})</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Dedicated Bilingual Diagram Annotations Panel (বাংলা ও ইংরেজি উভয় ভাষায়) */}
          {currentSlide.diagramAnnotations && (
            <div className="rounded-xl p-4 bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    চিত্রের চিহ্নিত অংশসমূহ (Diagram Parts & Labels):
                  </span>
                </div>

                {/* Language Selector */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setAnnotationLang('both')}
                    className={`px-2.5 py-1 rounded font-medium transition ${
                      annotationLang === 'both'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    বাংলা + English (উভয়)
                  </button>
                  <button
                    onClick={() => setAnnotationLang('bn')}
                    className={`px-2.5 py-1 rounded font-medium transition ${
                      annotationLang === 'bn'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    বাংলা
                  </button>
                  <button
                    onClick={() => setAnnotationLang('en')}
                    className={`px-2.5 py-1 rounded font-medium transition ${
                      annotationLang === 'en'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Annotation Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {currentSlide.diagramAnnotations.map((anno, idx) => {
                  const isSelected = activeAnnotationIdx === idx;
                  const dotColor = 
                    anno.badgeType === 'proton' ? 'bg-rose-400' :
                    anno.badgeType === 'neutron' ? 'bg-slate-300' :
                    anno.badgeType === 'nucleus' ? 'bg-amber-400' :
                    anno.badgeType === 'radiation' ? 'bg-purple-400' :
                    anno.badgeType === 'gold' ? 'bg-yellow-400' :
                    'bg-cyan-400';

                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveAnnotationIdx(isSelected ? null : idx)}
                      className={`text-left p-3 rounded-lg border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-950/50 ring-2 ring-cyan-400/80 shadow-lg'
                          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-1 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-white">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${dotColor}`} />
                            <span className="leading-snug">
                              {annotationLang === 'en' 
                                ? anno.labelEn 
                                : annotationLang === 'bn' 
                                ? anno.labelBn 
                                : `${anno.labelBn} / ${anno.labelEn}`}
                            </span>
                          </div>
                          {anno.symbol && (
                            <span className="font-mono text-cyan-400 text-[10.5px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 shrink-0">
                              {anno.symbol}
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-200 font-medium leading-snug">
                          {anno.detailBn}
                        </p>

                        {annotationLang === 'both' && (
                          <p className="text-[10px] text-slate-400 italic leading-snug">
                            {anno.detailEn}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentSlide.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4 transition hover:border-slate-700 hover:bg-slate-950/60"
              >
                <h3 className="text-sm md:text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono">
                    {idx + 1}
                  </span>
                  <span>{point.heading}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {point.description}
                </p>
                {(point.highlight || point.formula) && (
                  <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-slate-800/60">
                    {point.highlight && (
                      <span className="inline-block px-2.5 py-0.5 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-semibold border border-cyan-800/80">
                        {point.highlight}
                      </span>
                    )}
                    {point.formula && (
                      <FormulaBadge formula={point.formula} size="sm" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Table Data (if present) */}
          {currentSlide.tableData && (
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/40">
              {currentSlide.tableData.caption && (
                <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-medium text-slate-300">
                  {currentSlide.tableData.caption}
                </div>
              )}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-800/50 text-slate-300 border-b border-slate-800">
                    <tr>
                      {currentSlide.tableData.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 font-semibold text-cyan-300 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {currentSlide.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/30 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-2.5 text-slate-300 font-mono text-xs md:text-sm whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Callout Box */}
          {currentSlide.callout && (
            <div className={`rounded-xl p-4 border ${
              currentSlide.callout.type === 'warning'
                ? 'bg-amber-950/20 border-amber-800/50 text-amber-200'
                : currentSlide.callout.type === 'formula'
                ? 'bg-cyan-950/30 border-cyan-800/50 text-cyan-200'
                : currentSlide.callout.type === 'tip'
                ? 'bg-emerald-950/20 border-emerald-800/50 text-emerald-200'
                : 'bg-slate-800/40 border-slate-700/60 text-slate-200'
            }`}>
              <div className="flex items-center gap-2 font-semibold text-sm mb-1.5">
                {currentSlide.callout.type === 'warning' ? (
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                ) : (
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                )}
                <span>{currentSlide.callout.title}</span>
              </div>
              <p className="text-xs md:text-sm leading-relaxed whitespace-pre-line opacity-90">
                {currentSlide.callout.content}
              </p>
            </div>
          )}

          {/* Interactive Simulation Direct Bridge */}
          {currentSlide.recommendedInteractiveTab && (
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-cyan-500/30 bg-cyan-950/20">
              <div className="flex items-center gap-2 text-xs md:text-sm text-cyan-200">
                <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>এই ধারণার সরাসরি ইন্টারঅ্যাক্টিভ সিমুলেশন দেখতে চান?</span>
              </div>
              <button
                onClick={() => onNavigateToTab(currentSlide.recommendedInteractiveTab!)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition"
              >
                <span>সিমুলেটর খুলুন</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
            </>
          )}
        </div>

        {/* Slide Bottom Control Bar */}
        <div className="flex flex-wrap items-center justify-between border-t border-slate-800/80 px-4 md:px-6 py-3 bg-slate-950/80 gap-2">
          {/* Left: Slide Overview & Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSlideIndex}
              title="সবগুলো স্লাইডের তালিকা (Grid Overview)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-600 transition"
            >
              <Grid className="h-3.5 w-3.5 text-cyan-400" />
              <span>স্লাইড তালিকা</span>
            </button>

            <button
              onClick={() => setCurrentSlideIndex(0)}
              title="প্রথম স্লাইডে ফিরে যান"
              className="p-1.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-600 transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>

            {openPowerPointShow && (
              <button
                onClick={openPowerPointShow}
                title="পাওয়ারপয়েন্ট স্লাইডশো মোড (F5, লেজার, পেন)"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-xs font-bold text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/60 hover:text-white transition shadow-sm"
              >
                <Play className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                <span>পাওয়ারপয়েন্ট শো</span>
              </button>
            )}

            {onUpdateSlide && (
              <button
                onClick={() => setIsEditModalOpen(true)}
                title="এই স্লাইডটি সম্পাদনা / এডিট করুন"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition shadow-sm ${
                  isSlideEdited?.(currentSlideIndex)
                    ? 'border-amber-500/50 bg-amber-950/40 text-amber-300 hover:bg-amber-900/60'
                    : 'border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Edit3 className="h-3 w-3" />
                <span>এডিট</span>
                {isSlideEdited?.(currentSlideIndex) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                )}
              </button>
            )}
          </div>

          {/* Center: Slide Step Controller */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentSlideIndex === 0}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-200 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>পূর্ববর্তী</span>
            </button>

            <div className="hidden sm:flex items-center gap-1 px-2 text-xs font-mono text-slate-400">
              <span className="text-white font-bold">{toBengaliNumber(currentSlideIndex + 1)}</span>
              <span>/</span>
              <span>{toBengaliNumber(slides.length)}</span>
            </div>

            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlideIndex === slides.length - 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <span>পরবর্তী</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right: Auto Play Controller */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                isPlaying 
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300' 
                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:text-white'
              }`}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              <span>{isPlaying ? 'অটোপ্লে চালু' : 'অটোপ্লে'}</span>
            </button>

            {isPlaying && (
              <select
                value={autoPlayInterval}
                onChange={(e) => setAutoPlayInterval(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-300 px-2 py-1 outline-none focus:border-cyan-500"
              >
                <option value={5}>৫ সেকেন্ড</option>
                <option value={8}>৮ সেকেন্ড</option>
                <option value={12}>১২ সেকেন্ড</option>
                <option value={15}>১৫ সেকেন্ড</option>
              </select>
            )}
          </div>
        </div>
      </div>

      {/* Slide Navigation Progress Dots */}
      <div className="mt-4 flex items-center justify-center gap-1.5 flex-wrap max-w-xl">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            title={`স্লাইড ${index + 1}: ${slides[index].title}`}
            className={`h-2 transition-all rounded-full ${
              index === currentSlideIndex 
                ? 'w-6 bg-cyan-400' 
                : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Image Zoom Lightbox Modal */}
      {zoomedImage && (
        <div 
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl"
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition border border-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden bg-black">
              <img
                src={zoomedImage.url}
                alt="Enlarged visual"
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {zoomedImage.caption && (
              <div className="w-full p-4 bg-slate-900 text-xs md:text-sm text-slate-200 border-t border-slate-800 flex items-center gap-2">
                <span className="text-cyan-400 font-bold shrink-0">চিত্রানুচ্ছেদ:</span>
                <span>{zoomedImage.caption}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* In-Viewer Slide Edit Modal */}
      {onUpdateSlide && (
        <SlideEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          slide={currentSlide}
          slideIndex={currentSlideIndex}
          totalSlides={slides.length}
          onSave={(updated) => onUpdateSlide(updated, currentSlideIndex)}
          onResetOriginal={onResetSlide ? () => onResetSlide(currentSlideIndex) : undefined}
          isEdited={isSlideEdited ? isSlideEdited(currentSlideIndex) : false}
        />
      )}
    </div>
  );
};
