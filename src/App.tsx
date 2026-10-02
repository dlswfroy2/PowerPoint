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
import { physicsChapter4Slides } from './data/physicsChapter4SlidesData';
import { physicsChapter5Slides } from './data/physicsChapter5SlidesData';
import { biologyChapter2Slides } from './data/biologyChapter2SlidesData';
import { biologyChapter3Slides } from './data/biologyChapter3SlidesData';
import { Header, AppTab } from './components/Header';
import { CellExplorerLab } from './components/CellExplorerLab';
import { Slide } from './types/presentation';
import { SlideViewer } from './components/SlideViewer';
import { PresenterModal } from './components/PresenterModal';
import { SlideIndexModal } from './components/SlideIndexModal';
import { LabSafetySimulator } from './components/LabSafetySimulator';
import { KineticTheorySimulator } from './components/KineticTheorySimulator';
import { DiffusionLab } from './components/DiffusionLab';
import { HeatingCurveSimulator } from './components/HeatingCurveSimulator';
import { BohrAtomSimulator } from './components/BohrAtomSimulator';
import { AufbauLab } from './components/AufbauLab';
import { IsotopeCalculator } from './components/IsotopeCalculator';
import { PeriodicTableExplorer } from './components/PeriodicTableExplorer';
import { PositionFinderLab } from './components/PositionFinderLab';
import { PeriodicTrendsVisualizer } from './components/PeriodicTrendsVisualizer';
import { BondingSimulator } from './components/BondingSimulator';
import { FormulaBuilderLab } from './components/FormulaBuilderLab';
import { CompoundPropertiesLab } from './components/CompoundPropertiesLab';
import { WorkEnergyLab } from './components/WorkEnergyLab';
import { PressureFluidsLab } from './components/PressureFluidsLab';
import { CellDivisionLab } from './components/CellDivisionLab';
import { QuizSection } from './components/QuizSection';
import { PrintHandoutModal } from './components/PrintHandoutModal';
import { PowerPointShowModal } from './components/PowerPointShowModal';
import { PptxUploadModal } from './components/PptxUploadModal';
import { exportSlidesToPptx } from './services/pptxExportService';

export default function App() {
  const [activeSubject, setActiveSubject] = useState<'chemistry' | 'physics' | 'biology'>('chemistry');
  const [activeChapter, setActiveChapter] = useState<1 | 2 | 3 | 4 | 5>(1); // Default to Chemistry Chapter 1
  const [activeTab, setActiveTab] = useState<AppTab>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPresenterModalOpen, setIsPresenterModalOpen] = useState<boolean>(false);
  const [isSlideIndexModalOpen, setIsSlideIndexModalOpen] = useState<boolean>(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [isPowerPointShowOpen, setIsPowerPointShowOpen] = useState<boolean>(false);
  const [isPptxUploadOpen, setIsPptxUploadOpen] = useState<boolean>(false);
  const [isExportingPptx, setIsExportingPptx] = useState<boolean>(false);
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
      ? (activeChapter === 2 ? biologyChapter2Slides : biologyChapter3Slides)
      : activeSubject === 'physics'
      ? (activeChapter === 4 ? physicsChapter4Slides : physicsChapter5Slides)
      : (
        activeChapter === 1 ? chapter1Slides : 
        activeChapter === 2 ? chapter2Slides : 
        activeChapter === 3 ? chapter3Slides :
        activeChapter === 4 ? chapter4Slides :
        chapter5Slides
      );

  const baseSlides = customUploadedSlides || defaultChapterSlides;
  const chapterEdits = editedSlidesMap[currentChapterKey];

  // Merge base slides with any edited slides for this chapter
  const currentSlides = useMemo(() => {
    if (!chapterEdits || Object.keys(chapterEdits).length === 0) {
      return baseSlides;
    }
    return baseSlides.map((s, idx) => chapterEdits[idx] || s);
  }, [baseSlides, chapterEdits]);

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
    'physics-4': 'কাজ, ক্ষমতা ও শক্তি',
    'physics-5': 'পদার্থের অবস্থা ও চাপ',
    'biology-2': 'জীবকোষ ও টিস্যু',
    'biology-3': 'কোষ বিভাজন',
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
  const handleChapterChange = (chapter: 1 | 2 | 3 | 4 | 5) => {
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

        {/* Physics Chapter 4 Interactive Labs */}
        {activeTab === 'workEnergyLab' && <WorkEnergyLab />}

        {/* Physics Chapter 5 Interactive Labs */}
        {activeTab === 'pressureLab' && <PressureFluidsLab />}

        {/* Biology Chapter 2 Interactive Labs */}
        {activeTab === 'cellExplorerLab' && <CellExplorerLab />}

        {/* Biology Chapter 3 Interactive Labs */}
        {activeTab === 'cellDivisionLab' && (
          activeChapter === 2 ? <CellExplorerLab /> : <CellDivisionLab />
        )}

        {/* Assessment Quiz (Chemistry, Physics & Biology Chapters Supported) */}
        {activeTab === 'quiz' && (
          <QuizSection 
            activeChapter={activeChapter} 
            activeSubject={activeSubject}
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
    </div>
  );
}
