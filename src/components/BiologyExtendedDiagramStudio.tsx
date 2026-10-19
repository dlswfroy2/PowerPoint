/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';
import { BIOLOGY_TYPE_MAP } from '../data/biologyTypeMap';
import { getBiologyModelType } from './ThreeDBiologyScenes';
import { renderBiologyCh1to5Diagram } from './Biology2DDiagramsCh1to5';
import { renderBiologyCh6to10Diagram } from './Biology2DDiagramsCh6to10';
import { renderBiologyCh11to14Diagram } from './Biology2DDiagramsCh11to14';
import { Box, Sparkles, Layers, BookOpen, Info, CheckCircle2 } from 'lucide-react';

interface BiologyDiagramProps {
  type: string;
  modelId?: number;
  chapter?: number;
  onSwitchTo3D?: (modelId: number) => void;
}

export const BiologyExtendedDiagrams: React.FC<BiologyDiagramProps> = ({
  type,
  modelId,
  chapter,
  onSwitchTo3D
}) => {
  let chNum = chapter;
  let parsedModelId = modelId;

  // 1. Direct semantic mapping from slide customDiagramType (e.g. bioCh8Dialysis, bioCh6HeartAnatomy)
  if (type && BIOLOGY_TYPE_MAP[type]) {
    if (!chNum) chNum = BIOLOGY_TYPE_MAP[type].chapter;
    if (!parsedModelId) parsedModelId = BIOLOGY_TYPE_MAP[type].modelId;
  }

  // 2. Fallback to regex matching bioCh8_m18 or bioCh8
  if (!chNum && type) {
    const chMatch = type.match(/bioCh(\d+)/);
    if (chMatch) chNum = parseInt(chMatch[1], 10);
  }
  if (!parsedModelId && type) {
    const mMatch = type.match(/_m(\d+)/);
    if (mMatch) parsedModelId = parseInt(mMatch[1], 10);
  }

  chNum = chNum || 1;

  const chapterModels: Biology3DModelMeta[] = BIOLOGY_3D_CATALOG[chNum] || BIOLOGY_3D_CATALOG[1] || [];
  const currentModelId = parsedModelId || 1;
  const currentModel: Biology3DModelMeta = chapterModels.find(m => m.id === currentModelId) || chapterModels[0];

  const [highlightedLabel, setHighlightedLabel] = useState<number | null>(null);

  const CHAPTER_TITLES: Record<number, string> = {
    1: 'জীবন পাঠ (Lessons on Life)',
    2: 'জীবকোষ ও টিস্যু (Cells and Tissues)',
    3: 'কোষ বিভাজন (Cell Division)',
    4: 'জীবনীশক্তি (Bioenergetics)',
    5: 'খাদ্য, পুষ্টি এবং পরিপাক (Nutrition & Digestion)',
    6: 'জীবে পরিবহন (Transport in Organisms)',
    7: 'গ্যাসীয় বিনিময় (Gaseous Exchange)',
    8: 'রেচন প্রক্রিয়া (Excretory System)',
    9: 'দৃঢ়তা প্রদান ও চলন (Support and Movement)',
    10: 'সমন্বয় ও নিঃসরণ (Coordination & Secretion)',
    11: 'জীবের প্রজনন (Reproduction in Organisms)',
    12: 'জীবের বংশগতি ও বিবর্তন (Heredity and Evolution)',
    13: 'জীবের পরিবেশ (Environment of Life)',
    14: 'জীবপ্রযুক্তি (Biotechnology)'
  };

  const chTitle = CHAPTER_TITLES[chNum] || `অধ্যায় ${chNum}`;
  const modelType = getBiologyModelType(chNum, currentModel.id);

  // Dedicated Authentic 2D Vector Diagram for each Biological Model Type
  const renderDiagram = () => {
    if (chNum >= 1 && chNum <= 5) {
      return renderBiologyCh1to5Diagram(chNum, currentModel, highlightedLabel);
    }
    if (chNum >= 6 && chNum <= 10) {
      return renderBiologyCh6to10Diagram(chNum, currentModel, highlightedLabel);
    }
    if (chNum >= 11 && chNum <= 14) {
      return renderBiologyCh11to14Diagram(chNum, currentModel, highlightedLabel);
    }
    return null;
  };

  return (
    <div className="w-full bg-slate-950 p-3 sm:p-5 rounded-xl border border-emerald-500/30 flex flex-col justify-between select-none shadow-xl">
      {/* 1. Header with Topic Ref, Title, and 3D Jump Button */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center gap-1.5 shadow-sm">
            <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
            <span>টপিক {currentModel.topicRef}</span>
          </span>
          <span className="font-bold text-slate-100 text-sm sm:text-base">
            {currentModel.titleBn}
          </span>
          <span className="text-xs text-slate-400 font-normal hidden md:inline">
            ({currentModel.titleEn})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-700 text-emerald-400 font-bold">
            {currentModel.id} / 20
          </span>
          {onSwitchTo3D && (
            <button
              onClick={() => onSwitchTo3D(currentModel.id)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 text-xs font-bold border border-cyan-500/40 transition shadow-sm"
              title="এই বিষয়ের ৩ডি অ্যানিমেটেড মডেল দেখুন"
            >
              <Box className="h-3.5 w-3.5 animate-pulse" />
              <span>🧊 ৩ডি মডেলে দেখুন</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Interactive SVG Canvas */}
      <div className="my-3 p-3 bg-slate-900/90 rounded-xl border border-slate-800 shadow-inner overflow-hidden">
        {renderDiagram()}
      </div>

      {/* 3. Interactive Anatomical Labels Bar */}
      <div className="my-1.5 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1 mr-1">
          <Layers className="h-3 w-3 text-emerald-400" />
          <span>চিহ্নিত অংশ:</span>
        </span>
        {currentModel.labels.map((lbl, idx) => (
          <button
            key={idx}
            type="button"
            onMouseEnter={() => setHighlightedLabel(idx)}
            onMouseLeave={() => setHighlightedLabel(null)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition flex items-center gap-1.5 border ${
              highlightedLabel === idx
                ? 'bg-emerald-500 text-slate-950 border-emerald-300 font-bold shadow-md scale-105'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: lbl.color || '#10b981' }}
            />
            <span className="font-mono text-[10px] text-emerald-400 font-bold">[{lbl.sym}]</span>
            <span>{lbl.bn}</span>
          </button>
        ))}
      </div>

      {/* 4. Comprehensive Textbook Theory Card */}
      <div className="mt-2 p-3 bg-emerald-950/20 rounded-xl border border-emerald-800/40 flex flex-col gap-1 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-emerald-300 flex items-center gap-1">
            <Info className="h-3.5 w-3.5 text-emerald-400" />
            <span>পাঠ্যবইয়ের বৈজ্ঞানিক ব্যাখ্যা (NCTB কারিকুলাম):</span>
          </span>
          <span className="text-[10px] text-emerald-400/80 font-mono">
            {chTitle} · টপিক {currentModel.topicRef}
          </span>
        </div>
        <p className="text-slate-300 leading-relaxed text-[11.5px] mt-0.5">
          {currentModel.descriptionBn}
        </p>
      </div>
    </div>
  );
};
