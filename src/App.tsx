/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { chapter1Slides } from './data/chapter1SlidesData';
import { chapter2Slides } from './data/chapter2SlidesData';
import { slides as chapter3Slides } from './data/slidesData';
import { chapter4Slides } from './data/chapter4SlidesData';
import { chapter5Slides } from './data/chapter5SlidesData';
import { chapter6Slides } from './data/chapter6SlidesData';
import { chapter7Slides } from './data/chapter7SlidesData';
import { chapter8Slides } from './data/chapter8SlidesData';
import { chapter9Slides } from './data/chapter9SlidesData';
import { chapter10Slides } from './data/chapter10SlidesData';
import { chapter11Slides } from './data/chapter11SlidesData';
import { chapter12Slides } from './data/chapter12SlidesData';
import { physicsChapter4Slides } from './data/physicsChapter4SlidesData';
import { physicsChapter5Slides } from './data/physicsChapter5SlidesData';
import { physicsChapter6Slides } from './data/physicsChapter6SlidesData';
import { physicsChapter7Slides } from './data/physicsChapter7SlidesData';
import { biologyChapter1Slides } from './data/biologyChapter1SlidesData';
import { biologyChapter2Slides } from './data/biologyChapter2SlidesData';
import { biologyChapter3Slides } from './data/biologyChapter3SlidesData';
import { biologyChapter4Slides } from './data/biologyChapter4SlidesData';
import { biologyChapter5Slides } from './data/biologyChapter5SlidesData';
import { biologyChapter6Slides } from './data/biologyChapter6SlidesData';
import { biologyChapter7Slides } from './data/biologyChapter7SlidesData';
import { biologyChapter8Slides } from './data/biologyChapter8SlidesData';
import { biologyChapter9Slides } from './data/biologyChapter9SlidesData';
import { biologyChapter10Slides } from './data/biologyChapter10SlidesData';
import { biologyChapter11Slides } from './data/biologyChapter11SlidesData';
import { biologyChapter12Slides } from './data/biologyChapter12SlidesData';
import { biologyChapter13Slides } from './data/biologyChapter13SlidesData';
import { biologyChapter14Slides } from './data/biologyChapter14SlidesData';
import { Header, AppTab } from './components/Header';
import { BiologyChapter1Lab } from './components/BiologyChapter1Lab';
import { BiologyChapter5Lab } from './components/BiologyChapter5Lab';
import { CellExplorerLab } from './components/CellExplorerLab';
import { Slide, ChapterProgressInfo } from './types/presentation';
import { SlideViewer, ensureSlideVisuals } from './components/SlideViewer';
import { PresenterModal } from './components/PresenterModal';
import { SlideIndexModal } from './components/SlideIndexModal';
import { LabSafetySimulator } from './components/LabSafetySimulator';
import { KineticTheorySimulator } from './components/KineticTheorySimulator';
import { DiffusionLab } from './components/DiffusionLab';
import { HeatingCurveSimulator } from './components/HeatingCurveSimulator';
import { BohrAtomSimulator } from './components/BohrAtomSimulator';
import { MolecularViewer3DLab } from './components/MolecularViewer3DLab';
import { AufbauLab } from './components/AufbauLab';
import { IsotopeCalculator } from './components/IsotopeCalculator';
import { PeriodicTableExplorer } from './components/PeriodicTableExplorer';
import { PositionFinderLab } from './components/PositionFinderLab';
import { PeriodicTrendsVisualizer } from './components/PeriodicTrendsVisualizer';
import { BondingSimulator } from './components/BondingSimulator';
import { FormulaBuilderLab } from './components/FormulaBuilderLab';
import { CompoundPropertiesLab } from './components/CompoundPropertiesLab';
import { MoleStoichiometryLab } from './components/MoleStoichiometryLab';
import { ChemicalReactionsLab } from './components/ChemicalReactionsLab';
import { ElectrochemistryEnergyLab } from './components/ElectrochemistryEnergyLab';
import { AcidBaseLab } from './components/AcidBaseLab';
import { VirtualReagentRackLab } from './components/VirtualReagentRackLab';
import { BoardCQModal } from './components/BoardCQModal';
import { TimedMockExamModal } from './components/TimedMockExamModal';
import { RevisionFlashcardsModal } from './components/RevisionFlashcardsModal';
import { StudentNotesModal } from './components/StudentNotesModal';
import { StudentAchievementDashboardModal } from './components/StudentAchievementDashboardModal';
import { WorkEnergyLab } from './components/WorkEnergyLab';
import { PressureFluidsLab } from './components/PressureFluidsLab';
import { ThermalPhysicsLab } from './components/ThermalPhysicsLab';
import { WaveSoundLab } from './components/WaveSoundLab';
import { CellDivisionLab } from './components/CellDivisionLab';
import { BioenergeticsLab } from './components/BioenergeticsLab';
import { QuizSection } from './components/QuizSection';
import { PrintHandoutModal } from './components/PrintHandoutModal';
import { PowerPointShowModal } from './components/PowerPointShowModal';
import { PptxUploadModal } from './components/PptxUploadModal';
import { exportSlidesToPptx } from './services/pptxExportService';
import { Gallery3D } from './components/Gallery3D';

export default function App() {
  const [activeSubject, setActiveSubject] = useState<'chemistry' | 'physics' | 'biology'>('chemistry');
  const [activeChapter, setActiveChapter] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14>(1); // Default to Chemistry Chapter 1
  const [activeTab, setActiveTab] = useState<AppTab>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPresenterModalOpen, setIsPresenterModalOpen] = useState<boolean>(false);
  const [isSlideIndexModalOpen, setIsSlideIndexModalOpen] = useState<boolean>(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [isPowerPointShowOpen, setIsPowerPointShowOpen] = useState<boolean>(false);
  const [isPptxUploadOpen, setIsPptxUploadOpen] = useState<boolean>(false);
  const [isExportingPptx, setIsExportingPptx] = useState<boolean>(false);
  const [isBoardCQOpen, setIsBoardCQOpen] = useState<boolean>(false);
  const [isTimedExamOpen, setIsTimedExamOpen] = useState<boolean>(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState<boolean>(false);
  const [isStudentNotesOpen, setIsStudentNotesOpen] = useState<boolean>(false);
  const [isAchievementDashboardOpen, setIsAchievementDashboardOpen] = useState<boolean>(false);
  const [uploadedSlidesMap, setUploadedSlidesMap] = useState<Record<string, Slide[]>>({});
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // User-edited slides stored per chapter key and persisted in localStorage
  const [editedSlidesMap, setEditedSlidesMap] = useState<Record<string, Record<number, Slide>>>(() => {
    try {
      const saved = localStorage.getItem('science_master_edited_slides');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const currentChapterKey = `${activeSubject}-${activeChapter}`;
  const customUploadedSlides = uploadedSlidesMap[currentChapterKey];

  // Current slides according to active subject and chapter (or custom uploaded PPTX)
  const defaultChapterSlides = 
    activeSubject === 'biology'
      ? (
        activeChapter === 1 ? biologyChapter1Slides :
        activeChapter === 2 ? biologyChapter2Slides :
        activeChapter === 3 ? biologyChapter3Slides :
        activeChapter === 4 ? biologyChapter4Slides :
        activeChapter === 5 ? biologyChapter5Slides :
        activeChapter === 6 ? biologyChapter6Slides :
        activeChapter === 7 ? biologyChapter7Slides :
        activeChapter === 8 ? biologyChapter8Slides :
        activeChapter === 9 ? biologyChapter9Slides :
        activeChapter === 10 ? biologyChapter10Slides :
        activeChapter === 11 ? biologyChapter11Slides :
        activeChapter === 12 ? biologyChapter12Slides :
        activeChapter === 13 ? biologyChapter13Slides :
        biologyChapter14Slides
      )
      : activeSubject === 'physics'
      ? (activeChapter === 4 ? physicsChapter4Slides : activeChapter === 5 ? physicsChapter5Slides : activeChapter === 6 ? physicsChapter6Slides : physicsChapter7Slides)
      : (
        activeChapter === 1 ? chapter1Slides : 
        activeChapter === 2 ? chapter2Slides : 
        activeChapter === 3 ? chapter3Slides :
        activeChapter === 4 ? chapter4Slides :
        activeChapter === 5 ? chapter5Slides :
        activeChapter === 6 ? chapter6Slides :
        activeChapter === 7 ? chapter7Slides :
        activeChapter === 8 ? chapter8Slides :
        activeChapter === 9 ? chapter9Slides :
        activeChapter === 10 ? chapter10Slides :
        activeChapter === 11 ? chapter11Slides :
        chapter12Slides
      );

  const baseSlides = customUploadedSlides || defaultChapterSlides;
  const chapterEdits = editedSlidesMap[currentChapterKey];

  // Merge base slides with any edited slides for this chapter and ensure visuals are fully populated
  const currentSlides = useMemo(() => {
    const raw = (!chapterEdits || Object.keys(chapterEdits).length === 0)
      ? baseSlides
      : baseSlides.map((s, idx) => chapterEdits[idx] || s);

    return raw.map(s => ensureSlideVisuals(s, activeSubject, activeChapter));
  }, [baseSlides, chapterEdits, activeSubject, activeChapter]);

  // Comprehensive map of all slides across all subjects and chapters for Gallery3D
  const allChapterSlidesMap = useMemo<Record<string, Slide[]>>(() => {
    const map: Record<string, Slide[]> = {
      'chemistry-1': chapter1Slides.map(s => ensureSlideVisuals(s, 'chemistry', 1)),
      'chemistry-2': chapter2Slides.map(s => ensureSlideVisuals(s, 'chemistry', 2)),
      'chemistry-3': chapter3Slides.map(s => ensureSlideVisuals(s, 'chemistry', 3)),
      'chemistry-4': chapter4Slides.map(s => ensureSlideVisuals(s, 'chemistry', 4)),
      'chemistry-5': chapter5Slides.map(s => ensureSlideVisuals(s, 'chemistry', 5)),
      'chemistry-6': chapter6Slides.map(s => ensureSlideVisuals(s, 'chemistry', 6)),
      'chemistry-7': chapter7Slides.map(s => ensureSlideVisuals(s, 'chemistry', 7)),
      'chemistry-8': chapter8Slides.map(s => ensureSlideVisuals(s, 'chemistry', 8)),
      'chemistry-9': chapter9Slides.map(s => ensureSlideVisuals(s, 'chemistry', 9)),
      'chemistry-10': chapter10Slides.map(s => ensureSlideVisuals(s, 'chemistry', 10)),
      'chemistry-11': chapter11Slides.map(s => ensureSlideVisuals(s, 'chemistry', 11)),
      'chemistry-12': chapter12Slides.map(s => ensureSlideVisuals(s, 'chemistry', 12)),
      'physics-4': physicsChapter4Slides.map(s => ensureSlideVisuals(s, 'physics', 4)),
      'physics-5': physicsChapter5Slides.map(s => ensureSlideVisuals(s, 'physics', 5)),
      'physics-6': physicsChapter6Slides.map(s => ensureSlideVisuals(s, 'physics', 6)),
      'physics-7': physicsChapter7Slides.map(s => ensureSlideVisuals(s, 'physics', 7)),
      'biology-1': biologyChapter1Slides.map(s => ensureSlideVisuals(s, 'biology', 1)),
      'biology-2': biologyChapter2Slides.map(s => ensureSlideVisuals(s, 'biology', 2)),
      'biology-3': biologyChapter3Slides.map(s => ensureSlideVisuals(s, 'biology', 3)),
      'biology-4': biologyChapter4Slides.map(s => ensureSlideVisuals(s, 'biology', 4)),
      'biology-5': biologyChapter5Slides.map(s => ensureSlideVisuals(s, 'biology', 5)),
      'biology-6': biologyChapter6Slides.map(s => ensureSlideVisuals(s, 'biology', 6)),
      'biology-7': biologyChapter7Slides.map(s => ensureSlideVisuals(s, 'biology', 7)),
      'biology-8': biologyChapter8Slides.map(s => ensureSlideVisuals(s, 'biology', 8)),
      'biology-9': biologyChapter9Slides.map(s => ensureSlideVisuals(s, 'biology', 9)),
      'biology-10': biologyChapter10Slides.map(s => ensureSlideVisuals(s, 'biology', 10)),
      'biology-11': biologyChapter11Slides.map(s => ensureSlideVisuals(s, 'biology', 11)),
      'biology-12': biologyChapter12Slides.map(s => ensureSlideVisuals(s, 'biology', 12)),
      'biology-13': biologyChapter13Slides.map(s => ensureSlideVisuals(s, 'biology', 13)),
      'biology-14': biologyChapter14Slides.map(s => ensureSlideVisuals(s, 'biology', 14)),
    };
    return map;
  }, []);

  // Handler to update a specific slide
  const handleUpdateSlide = (updatedSlide: Slide, slideIndex: number) => {
    setEditedSlidesMap(prev => {
      const chapterObj = { ...(prev[currentChapterKey] || {}), [slideIndex]: updatedSlide };
      const next = { ...prev, [currentChapterKey]: chapterObj };
      try {
        localStorage.setItem('science_master_edited_slides', JSON.stringify(next));
      } catch (e) {
        console.error('Error saving edited slide:', e);
      }
      return next;
    });
  };

  // Handler to reset a specific slide to its original unedited state
  const handleResetSlide = (slideIndex: number) => {
    setEditedSlidesMap(prev => {
      const chapterObj = { ...(prev[currentChapterKey] || {}) };
      delete chapterObj[slideIndex];
      const next = { ...prev, [currentChapterKey]: chapterObj };
      try {
        localStorage.setItem('science_master_edited_slides', JSON.stringify(next));
      } catch (e) {
        console.error('Error resetting slide edit:', e);
      }
      return next;
    });
  };

  // Check if a specific slide has been edited
  const isSlideEdited = (slideIndex: number) => {
    return Boolean(editedSlidesMap[currentChapterKey]?.[slideIndex]);
  };

  // Chapter titles and subject names for PPTX metadata
  const chapterTitlesMap: Record<string, string> = {
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
  const subjectLabelsMap: Record<string, string> = {
    chemistry: 'রসায়ন',
    physics: 'পদার্থবিজ্ঞান',
    biology: 'জীববিজ্ঞান',
  };

  const handleExportPptx = async () => {
    try {
      setIsExportingPptx(true);
      const subjKey = `${activeSubject}-${activeChapter}`;
      const title = chapterTitlesMap[subjKey] || `অধ্যায় ${activeChapter}`;
      const subjName = subjectLabelsMap[activeSubject] || 'বিজ্ঞান';
      await exportSlidesToPptx({
        slides: currentSlides,
        subjectName: subjName,
        chapterTitle: title,
        chapterNumber: activeChapter,
      });
    } catch (err) {
      console.error('PPTX export error:', err);
    } finally {
      setIsExportingPptx(false);
    }
  };

  const handleApplyUploadedSlides = (newSlides: Slide[]) => {
    setUploadedSlidesMap(prev => ({
      ...prev,
      [currentChapterKey]: newSlides
    }));
    // Clear user edits for this chapter so uploaded slides display cleanly
    setEditedSlidesMap(prev => {
      const next = { ...prev };
      delete next[currentChapterKey];
      try {
        localStorage.setItem('science_master_edited_slides', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
    setCurrentSlideIndex(0);
  };

  const handleResetUploadedSlides = () => {
    setUploadedSlidesMap(prev => {
      const copy = { ...prev };
      delete copy[currentChapterKey];
      return copy;
    });
    // Also clear edits when resetting to original
    setEditedSlidesMap(prev => {
      const next = { ...prev };
      delete next[currentChapterKey];
      try {
        localStorage.setItem('science_master_edited_slides', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
    setCurrentSlideIndex(0);
  };

  // Reset slide index when chapter changes
  const handleChapterChange = (chapter: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14) => {
    setActiveChapter(chapter);
    setCurrentSlideIndex(0);
    setActiveTab('slides');
  };

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error('Fullscreen request error:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Dynamically sync document title with current subject and chapter
  useEffect(() => {
    const subjName = subjectLabelsMap[activeSubject] || 'বিজ্ঞান';
    const chapName = chapterTitlesMap[currentChapterKey] || `অধ্যায় ${activeChapter}`;
    document.title = `${subjName} · ${chapName} | এসএসসি বিজ্ঞান প্রেজেন্টেশন ও ল্যাব`;
  }, [activeSubject, activeChapter, currentChapterKey]);

  // Track viewed slides per chapter in localStorage to encourage completion
  const [viewedSlidesMap, setViewedSlidesMap] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem('science_master_viewed_slides_v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const chapterKey = `${activeSubject}_ch${activeChapter}`;

  useEffect(() => {
    if (activeTab === 'slides' && currentSlides && currentSlides.length > 0) {
      const slide = currentSlides[currentSlideIndex];
      const currentSlideId = slide?.id ?? (currentSlideIndex + 1);
      setViewedSlidesMap((prev) => {
        const currentList = prev[chapterKey] || [];
        if (!currentList.includes(currentSlideId)) {
          const updated = {
            ...prev,
            [chapterKey]: [...currentList, currentSlideId]
          };
          try {
            localStorage.setItem('science_master_viewed_slides_v1', JSON.stringify(updated));
          } catch {}
          return updated;
        }
        return prev;
      });
    }
  }, [activeTab, currentSlideIndex, activeSubject, activeChapter, currentSlides, chapterKey]);

  const currentChapterViewed = viewedSlidesMap[chapterKey] || [];
  const chapterProgress: ChapterProgressInfo = useMemo(() => {
    const total = currentSlides?.length || 1;
    const slideIdsInChapter = new Set(currentSlides?.map((s, idx) => s.id ?? (idx + 1)) || []);
    const matchedCount = currentChapterViewed.filter(id => slideIdsInChapter.has(id)).length;
    const finalCount = Math.max(1, Math.min(total, matchedCount));
    return {
      viewedCount: finalCount,
      totalSlides: total,
      percentage: Math.min(100, Math.round((finalCount / total) * 100))
    };
  }, [currentSlides, currentChapterViewed]);

  // Chapter slide counts mapping for achievement dashboard
  const chapterSlideCounts = useMemo<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    Object.entries(allChapterSlidesMap).forEach(([k, list]) => {
      counts[k] = list.length;
    });
    return counts;
  }, [allChapterSlidesMap]);

  // Unlocked badges count for header badge
  const earnedBadgesCount = useMemo(() => {
    try {
      const saved = localStorage.getItem('science_master_unlocked_badges_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Object.keys(parsed).length;
      }
    } catch {}
    return 0;
  }, [viewedSlidesMap, isAchievementDashboardOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Bar with Chapter Switcher and Navigation */}
      <Header
        activeChapter={activeChapter}
        setActiveChapter={handleChapterChange}
        activeSubject={activeSubject}
        setActiveSubject={(subj) => {
          setActiveSubject(subj);
          setCurrentSlideIndex(0);
          setActiveTab('slides');
        }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        openPresenterModal={() => setIsPresenterModalOpen(true)}
        openPrintView={() => setIsPrintModalOpen(true)}
        openPowerPointShow={() => setIsPowerPointShowOpen(true)}
        onExportPptx={handleExportPptx}
        isExportingPptx={isExportingPptx}
        onOpenPptxUpload={() => setIsPptxUploadOpen(true)}
        isCustomSlidesActive={!!customUploadedSlides}
        onResetCustomSlides={handleResetUploadedSlides}
        openBoardCQModal={() => setIsBoardCQOpen(true)}
        openTimedExamModal={() => setIsTimedExamOpen(true)}
        openFlashcardsModal={() => setIsFlashcardsOpen(true)}
        openStudentNotesModal={() => setIsStudentNotesOpen(true)}
        chapterProgress={chapterProgress}
        openAchievementDashboard={() => setIsAchievementDashboardOpen(true)}
        earnedBadgesCount={earnedBadgesCount}
      />

      {/* Main Tab Content */}
      <main className="flex-1 w-full pb-10">
        {activeTab === 'slides' && (
          <SlideViewer
            slides={currentSlides}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
            onOpenSlideIndex={() => setIsSlideIndexModalOpen(true)}
            onNavigateToTab={(tab) => setActiveTab(tab as AppTab)}
            openPowerPointShow={() => setIsPowerPointShowOpen(true)}
            onUpdateSlide={handleUpdateSlide}
            onResetSlide={handleResetSlide}
            isSlideEdited={isSlideEdited}
            activeSubject={activeSubject}
            activeChapter={activeChapter}
            openStudentNotes={() => setIsStudentNotesOpen(true)}
            openBoardCQ={() => setIsBoardCQOpen(true)}
            openFlashcards={() => setIsFlashcardsOpen(true)}
            openTimedExam={() => setIsTimedExamOpen(true)}
            chapterProgress={chapterProgress}
          />
        )}

        {/* Chemistry Chapter 1 Interactive Labs */}
        {activeTab === 'safety' && <LabSafetySimulator />}

        {/* Chemistry Chapter 2 Interactive Labs */}
        {activeTab === 'kinetic' && <KineticTheorySimulator />}
        {activeTab === 'diffusion' && <DiffusionLab />}
        {activeTab === 'heating' && <HeatingCurveSimulator />}

        {/* Chemistry Chapter 3 Interactive Labs */}
        {activeTab === 'simulator' && <BohrAtomSimulator />}
        {activeTab === 'molecularViewer3D' && <MolecularViewer3DLab />}
        {activeTab === 'aufbau' && <AufbauLab />}
        {activeTab === 'isotope' && <IsotopeCalculator />}

        {/* Chemistry Chapter 4 Interactive Labs */}
        {activeTab === 'ptable' && (
          <PeriodicTableExplorer
            onNavigateToTab={(tab) => setActiveTab(tab as AppTab)}
          />
        )}
        {activeTab === 'positionFinder' && <PositionFinderLab />}
        {activeTab === 'trends' && <PeriodicTrendsVisualizer />}

        {/* Chemistry Chapter 5 Interactive Labs */}
        {activeTab === 'bondingLab' && <BondingSimulator />}
        {activeTab === 'formulaBuilder' && <FormulaBuilderLab />}
        {activeTab === 'compoundProps' && <CompoundPropertiesLab />}

        {/* Chemistry Chapter 6 Interactive Labs */}
        {activeTab === 'moleCalculatorLab' && <MoleStoichiometryLab initialTab="converter" />}
        {activeTab === 'molarityLab' && <MoleStoichiometryLab initialTab="molarity" />}
        {activeTab === 'limitingReactantLab' && <MoleStoichiometryLab initialTab="limiting" />}
        {activeTab === 'empiricalFormulaLab' && <MoleStoichiometryLab initialTab="formula" />}

        {/* Chemistry Chapter 7 Interactive Labs */}
        {(activeTab === 'oxidationLab' || activeTab === 'reactionsLab') && <ChemicalReactionsLab initialTab="oxidation" />}
        {activeTab === 'redoxLab' && <ChemicalReactionsLab initialTab="redox" />}
        {activeTab === 'leChatelierLab' && <ChemicalReactionsLab initialTab="leChatelier" />}
        {activeTab === 'reactionClassifyLab' && <ChemicalReactionsLab initialTab="classify" />}

        {/* Chemistry Chapter 8 & Cross-Chapter Advanced Labs */}
        {(activeTab === 'electrochemistryLab' || activeTab === 'daniellCellLab') && <ElectrochemistryEnergyLab initialTab="daniell" />}
        {activeTab === 'electroplatingLab' && <ElectrochemistryEnergyLab initialTab="electroplating" />}
        {activeTab === 'dryCellLab' && <ElectrochemistryEnergyLab initialTab="drycell" />}
        {activeTab === 'bondEnergyLab' && <ElectrochemistryEnergyLab initialTab="bondEnergy" />}
        {activeTab === 'virtualRackLab' && <VirtualReagentRackLab />}

        {/* Chemistry Chapter 9 Interactive Labs */}
        {(activeTab === 'acidBaseLab' || activeTab === 'phScaleLab') && <AcidBaseLab initialTab="phMeter" />}
        {activeTab === 'titrationLab' && <AcidBaseLab initialTab="titration" />}
        {activeTab === 'saltHydrolysisLab' && <AcidBaseLab initialTab="hydrolysis" />}

        {/* Physics Chapter 4 Interactive Labs */}
        {activeTab === 'workEnergyLab' && <WorkEnergyLab defaultTab="workAngle" />}
        {activeTab === 'energyConservationLab' && <WorkEnergyLab defaultTab="conservation" />}
        {activeTab === 'efficiencyLab' && <WorkEnergyLab defaultTab="efficiency" />}

        {/* Physics Chapter 5 Interactive Labs */}
        {(activeTab === 'pressureLab' || activeTab === 'hydraulicLab') && <PressureFluidsLab defaultTab="hydraulic" />}
        {activeTab === 'archimedesLab' && <PressureFluidsLab defaultTab="archimedes" />}
        {activeTab === 'depthPressureLab' && <PressureFluidsLab defaultTab="depthPressure" />}

        {/* Physics Chapter 6 Interactive Labs */}
        {activeTab === 'thermalExpansionLab' && <ThermalPhysicsLab defaultTab="thermalExpansion" />}
        {activeTab === 'calorimetryLab' && <ThermalPhysicsLab defaultTab="calorimetry" />}
        {activeTab === 'anomalousWaterLab' && <ThermalPhysicsLab defaultTab="anomalousWater" />}

        {/* Physics Chapter 7 Interactive Labs */}
        {activeTab === 'waveSimulatorLab' && <WaveSoundLab defaultTab="waveSimulator" />}
        {activeTab === 'echoLab' && <WaveSoundLab defaultTab="echo" />}
        {activeTab === 'audioSpectrumLab' && <WaveSoundLab defaultTab="audioSpectrum" />}

        {/* Biology Chapter 1 Interactive Labs */}
        {activeTab === 'bioCh1DiagramStudioLab' && <BiologyChapter1Lab defaultTab="interactiveDiagrams" />}
        {activeTab === 'fiveKingdomsLab' && <BiologyChapter1Lab defaultTab="fiveKingdoms" />}
        {activeTab === 'binomialLab' && <BiologyChapter1Lab defaultTab="binomial" />}
        {activeTab === 'bioBranchesLab' && <BiologyChapter1Lab defaultTab="branches" />}

        {/* Biology Chapter 2 Interactive Labs */}
        {activeTab === 'cellExplorerLab' && <CellExplorerLab defaultSection="2.1" />}
        {activeTab === 'cellMembraneLab' && <CellExplorerLab defaultSection="2.2.1" />}
        {activeTab === 'plantVsAnimalLab' && <CellExplorerLab defaultSection="2.3" />}
        {activeTab === 'cellTissueLab' && <CellExplorerLab defaultSection="2.4" />}

        {/* Biology Chapter 3 Interactive Labs */}
        {activeTab === 'cellDivisionLab' && <CellDivisionLab defaultTab="mitosis" />}
        {activeTab === 'crossingOverLab' && <CellDivisionLab defaultTab="crossingOver" />}
        {activeTab === 'cellCycleLab' && <CellDivisionLab defaultTab="cellCycle" />}

        {/* Biology Chapter 4 Interactive Labs */}
        {activeTab === 'bioenergeticsLab' && <BioenergeticsLab defaultTab="atpCycle" />}
        {activeTab === 'photosynthesisLab' && <BioenergeticsLab defaultTab="photosynthesis" />}
        {activeTab === 'respirationLab' && <BioenergeticsLab defaultTab="respiration" />}

        {/* Biology Chapter 5 Interactive Labs */}
        {activeTab === 'digestiveSystemLab' && <BiologyChapter5Lab defaultTab="digestiveSystem" />}
        {activeTab === 'nutritionBmiLab' && <BiologyChapter5Lab defaultTab="nutritionBmi" />}
        {activeTab === 'plantNutritionLab' && <BiologyChapter5Lab defaultTab="plantNutrition" />}

        {/* Assessment Quiz (Chemistry, Physics & Biology Chapters Supported) */}
        {activeTab === 'quiz' && (
          <QuizSection 
            activeChapter={activeChapter} 
            activeSubject={activeSubject}
          />
        )}

        {/* Gallery 3D Visual Asset Library across all chapters */}
        {activeTab === 'gallery3D' && (
          <Gallery3D
            slidesByChapter={allChapterSlidesMap}
            activeSubject={activeSubject}
            activeChapter={activeChapter}
            onSelectSlide={(subj, chap, sIdx) => {
              setActiveSubject(subj);
              setActiveChapter(chap as any);
              setCurrentSlideIndex(sIdx);
              setActiveTab('slides');
            }}
          />
        )}
      </main>

      {/* Modals */}
      <PresenterModal
        isOpen={isPresenterModalOpen}
        onClose={() => setIsPresenterModalOpen(false)}
        slides={currentSlides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />

      <SlideIndexModal
        isOpen={isSlideIndexModalOpen}
        onClose={() => setIsSlideIndexModalOpen(false)}
        slides={currentSlides}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={(idx) => {
          setCurrentSlideIndex(idx);
          setActiveTab('slides');
        }}
      />

      <PrintHandoutModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        slides={currentSlides}
        activeSubject={activeSubject}
        activeChapter={activeChapter}
        subjectLabel={subjectLabelsMap[activeSubject] || 'বিজ্ঞান'}
        chapterTitle={chapterTitlesMap[currentChapterKey]}
      />

      <PowerPointShowModal
        isOpen={isPowerPointShowOpen}
        onClose={() => setIsPowerPointShowOpen(false)}
        slides={currentSlides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        subjectName={subjectLabelsMap[activeSubject] || 'বিজ্ঞান'}
        chapterNumber={activeChapter}
        onUpdateSlide={handleUpdateSlide}
        onResetSlide={handleResetSlide}
        isSlideEdited={isSlideEdited}
      />

      <PptxUploadModal
        isOpen={isPptxUploadOpen}
        onClose={() => setIsPptxUploadOpen(false)}
        activeSubject={activeSubject}
        activeChapter={activeChapter}
        subjectLabel={subjectLabelsMap[activeSubject] || 'বিজ্ঞান'}
        chapterTitle={chapterTitlesMap[currentChapterKey] || `অধ্যায় ${activeChapter}`}
        onApplySlides={handleApplyUploadedSlides}
        isCustomActive={!!customUploadedSlides}
        onResetOriginal={handleResetUploadedSlides}
      />

      {/* Board Creative Questions (CQ) Bank Modal */}
      <BoardCQModal
        isOpen={isBoardCQOpen}
        onClose={() => setIsBoardCQOpen(false)}
        initialSubject={activeSubject}
        initialChapter={activeChapter}
      />

      {/* Timed Mock Exam & Evaluation Modal */}
      <TimedMockExamModal
        isOpen={isTimedExamOpen}
        onClose={() => setIsTimedExamOpen(false)}
        activeSubject={activeSubject}
        activeChapter={activeChapter}
      />

      {/* Smart Revision Flashcards Modal */}
      <RevisionFlashcardsModal
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
      />

      {/* Student Personal Notes & Highlights Modal */}
      <StudentNotesModal
        isOpen={isStudentNotesOpen}
        onClose={() => setIsStudentNotesOpen(false)}
        activeSubject={activeSubject}
        activeChapter={activeChapter}
        currentSlideIndex={currentSlideIndex}
        slideTitle={currentSlides[currentSlideIndex]?.title}
      />

      {/* Student Achievement Dashboard Modal */}
      <StudentAchievementDashboardModal
        isOpen={isAchievementDashboardOpen}
        onClose={() => setIsAchievementDashboardOpen(false)}
        viewedSlidesMap={viewedSlidesMap}
        customSlideCounts={chapterSlideCounts}
        onSelectChapter={(subj, chap, targetTab) => {
          setActiveSubject(subj);
          setActiveChapter(chap as any);
          setCurrentSlideIndex(0);
          if (targetTab) {
            setActiveTab(targetTab as AppTab);
          } else {
            setActiveTab('slides');
          }
        }}
      />
    </div>
  );
}
