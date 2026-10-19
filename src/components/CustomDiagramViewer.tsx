import React from 'react';
import { BiologyChapter1DiagramStudio } from './BiologyChapter1DiagramStudio';
import { BiologyExtendedDiagrams } from './BiologyExtendedDiagramStudio';
import { BIOLOGY_TYPE_MAP } from '../data/biologyTypeMap';
import { ChemistryCh9to12Diagrams } from './ChemistryCh9to12DiagramStudio';

interface CustomDiagramViewerProps {
  type: string;
  modelId?: number;
  chapter?: number;
  subject?: string;
  onSwitchTo3D?: (modelId: number) => void;
}

export const CustomDiagramViewer: React.FC<CustomDiagramViewerProps> = ({ type, modelId, chapter, subject, onSwitchTo3D }) => {
  // Chemistry Chapters 9, 10, 11, and 12 Interactive 2D Diagrams
  const ch9to12Types = [
    'acidBaseIonization', 'litmusIndicatorsChart', 'phScaleSpectrum', 'titrationBuretteFlask',
    'saltHydrolysisLattice', 'acidRainMechanism', 'mineralsOresChart', 'metallurgyStepsFlow',
    'blastFurnaceIron', 'hallHeroultAluminium', 'copperRefiningCell', 'rustingElectrochemicalPit',
    'fractionalDistillationTower', 'petroleumFractionsChart', 'hydrocarbonClassificationTree',
    'aromaticBenzeneRing', 'alkaneDecarboxylationReaction', 'alkaneChlorinationMechanism',
    'bromineTestUnsaturation', 'baeyerTestKMnO4', 'alkynePreparationReaction',
    'alkyneHydrationAcetaldehyde', 'alcoholAldehydeAcidCascade', 'esterificationReactionMechanism',
    'additionPolymerizationPolymer', 'condensationNylonSynthesis', 'plasticRecyclingSymbolChart',
    'organicConversionMasterMap', 'bakingSodaEffervescence', 'bakingPowderTartaricNeutralization',
    'vinegarPreservationMechanism', 'toiletCleanerMechanism', 'glassCleanerAmmonia',
    'saponificationTriglycerideReaction', 'saltingOutSoapSeparation', 'soapMicelleCleaningMechanism',
    'hydrophilicHydrophobicStructure', 'detergentHardWaterAction', 'bleachingPowderChlorineAction',
    'nascentOxygenStainRemoval', 'fertilizerUreaSynthesis', 'soilAcidityLimeCorrection',
    'foodPreservativesStandards', 'calciumCarbideHealthRisks', 'chapter12MindmapBoardSummary'
  ];

  if (ch9to12Types.includes(type)) {
    return <ChemistryCh9to12Diagrams type={type} />;
  }

  // Biology Chapters 1 to 14 Diagrams (Synchronized with 20 models per chapter)
  if (type.startsWith('bioCh') || (type && BIOLOGY_TYPE_MAP[type]) || (subject === 'biology' && chapter && chapter >= 1 && chapter <= 14)) {
    return <BiologyExtendedDiagrams type={type} modelId={modelId} chapter={chapter} onSwitchTo3D={onSwitchTo3D} />;
  }

  // Biology Chapter 1 Standalone Studio (Only if explicitly requested without modelId)
  if (type === 'biologyChapter1Studio') {
    return <BiologyChapter1DiagramStudio initialTopicId="monera" />;
  }

  // A. Kinetic States (Solid, Liquid, Gas)
  if (type === 'kineticStates') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            কণার গতিতত্ত্ব: পদার্থের তিন অবস্থা / Kinetic Particle States
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            Eₖ ∝ T (Kelvin)
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 w-full max-w-2xl">
          {/* Solid Box */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-blue-500/40 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-blue-300 mb-1">১. কঠিন (Solid)</span>
            <div className="w-24 h-24 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center p-2 mb-2">
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="w-3.5 h-3.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50 block" />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-slate-300 font-semibold">ঠাসাঠাসি সুবিন্যস্ত ল্যাটিস</span>
            <span className="text-[9px] text-slate-500">তীব্র আকর্ষণ · নির্দিষ্ট আকার ও আয়তন</span>
          </div>

          {/* Liquid Box */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-cyan-500/40 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-cyan-300 mb-1">২. তরল (Liquid)</span>
            <div className="w-24 h-24 bg-slate-950 rounded-lg border border-slate-800 flex items-end justify-center p-2 mb-2">
              <div className="flex flex-wrap gap-1.5 justify-center">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50 block" />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-slate-300 font-semibold">সান্দ্র প্রবাহ ও গড়াগড়ি</span>
            <span className="text-[9px] text-slate-500">মাঝারি আকর্ষণ · পাত্রের আকার</span>
          </div>

          {/* Gas Box */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-amber-500/40 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-amber-300 mb-1">৩. গ্যাস (Gas)</span>
            <div className="w-24 h-24 bg-slate-950 rounded-lg border border-slate-800 relative p-2 mb-2 overflow-hidden">
              <span className="w-3 h-3 rounded-full bg-amber-400 absolute top-2 left-3 shadow-sm shadow-amber-400/50" />
              <span className="w-3 h-3 rounded-full bg-amber-400 absolute bottom-3 left-4 shadow-sm shadow-amber-400/50" />
              <span className="w-3 h-3 rounded-full bg-amber-400 absolute top-6 right-3 shadow-sm shadow-amber-400/50" />
              <span className="w-3 h-3 rounded-full bg-amber-400 absolute bottom-2 right-4 shadow-sm shadow-amber-400/50" />
            </div>
            <span className="text-[10px] text-slate-300 font-semibold">বিশৃঙ্খল তীব্র বেগ</span>
            <span className="text-[9px] text-slate-500">নগণ্য আকর্ষণ · পাত্রের সম্পূর্ণ আয়তন</span>
          </div>
        </div>
      </div>
    );
  }

  // B. Graham's Diffusion Tube (NH3 and HCl)
  if (type === 'diffusionTube') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            গ্রাহামের ব্যাপন পরীক্ষা / Graham's Diffusion Experiment
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            r(NH₃) / r(HCl) = √(36.5 / 17) ≈ 1.465
          </span>
        </div>

        <svg viewBox="0 0 600 160" className="w-full max-w-2xl h-auto overflow-visible font-sans text-xs">
          {/* Glass Tube Container */}
          <rect x="40" y="40" width="520" height="60" rx="4" fill="#090d16" stroke="#475569" strokeWidth="2" />

          {/* NH3 Cotton Plug (Left) */}
          <rect x="42" y="44" width="28" height="52" rx="3" fill="#06b6d4" />
          <text x="56" y="74" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">NH₃</text>

          {/* HCl Cotton Plug (Right) */}
          <rect x="530" y="44" width="28" height="52" rx="3" fill="#f97316" />
          <text x="544" y="74" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">HCl</text>

          {/* White Deposit Ring at 59.4% (X = 40 + 0.594 * 520 = 348.88 ≈ 350) */}
          <rect x="344" y="42" width="14" height="56" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)" />
          <text x="351" y="28" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
            NH₄Cl সাদা ধোঁয়ার বলয়
          </text>

          {/* Path markers */}
          <line x1="70" y1="115" x2="344" y2="115" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="207" y="130" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
            NH₃ অতিক্রান্ত পথ: ৫৯.৪ সেমি
          </text>

          <line x1="358" y1="115" x2="530" y2="115" stroke="#fb923c" strokeWidth="1.5" />
          <text x="444" y="130" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="bold">
            HCl পথ: ৪০.৬ সেমি
          </text>
        </svg>

        <span className="text-[10px] text-slate-400 mt-2 font-mono">
          হালকা গ্যাস (NH₃, ভর ১৭) ভারী গ্যাস (HCl, ভর ৩৬.৫) অপেক্ষা ১.৪৭ গুণ বেশি দূরত্ব অতিক্রম করে
        </span>
      </div>
    );
  }

  // C. Heating Curve (Water)
  if (type === 'heatingCurve') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            পানির তাপীয় বক্ররেখা / Heating Curve of Water
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            সুপ্ততাপ: L_f (0°C) ও L_v (100°C)
          </span>
        </div>

        <svg viewBox="0 0 550 200" className="w-full max-w-2xl h-auto overflow-visible font-sans text-xs">
          {/* Axes */}
          <line x1="50" y1="170" x2="520" y2="170" stroke="#334155" strokeWidth="1.5" />
          <line x1="50" y1="170" x2="50" y2="20" stroke="#334155" strokeWidth="1.5" />

          {/* Temperature Guide Lines */}
          <line x1="50" y1="130" x2="520" y2="130" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 3" />
          <text x="42" y="134" textAnchor="end" fill="#38bdf8" fontSize="10" fontWeight="bold">0°C</text>

          <line x1="50" y1="60" x2="520" y2="60" stroke="#e11d48" strokeWidth="1" strokeDasharray="3 3" />
          <text x="42" y="64" textAnchor="end" fill="#f43f5e" fontSize="10" fontWeight="bold">100°C</text>

          {/* Heating Path */}
          <polyline
            points="50,160 100,130 190,130 300,60 450,60 500,35"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="3"
          />

          {/* Plateaus labels */}
          <rect x="100" y="122" width="90" height="16" fill="rgba(56, 189, 248, 0.2)" rx="3" />
          <text x="145" y="118" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">
            বরফ গলনের সুপ্ততাপ
          </text>

          <rect x="300" y="52" width="150" height="16" fill="rgba(244, 63, 94, 0.2)" rx="3" />
          <text x="375" y="48" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">
            বাষ্পীভবনের সুপ্ততাপ (L_v)
          </text>

          <text x="75" y="152" fill="#94a3b8" fontSize="8.5">বরফ</text>
          <text x="245" y="105" fill="#94a3b8" fontSize="8.5">তরল পানি</text>
          <text x="480" y="30" fill="#94a3b8" fontSize="8.5">জলীয় বাষ্প</text>
        </svg>

        <span className="text-[10px] text-slate-400 mt-2 font-mono">
          সুপ্ততাপের সময় সরবরাহকৃত তাপ কণার তাপমাত্রা বৃদ্ধি না করে কেবল বন্ধন ভাঙতে ব্যয়িত হয়
        </span>
      </div>
    );
  }

  // D. Sublimation Setup
  if (type === 'sublimationSetup') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-purple-400 uppercase tracking-wider">
            আয়োডিনের ঊর্ধ্বপাতন পরীক্ষা / Iodine Sublimation Setup
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            কঠিন I₂(s) ⇌ গ্যাস I₂(g)
          </span>
        </div>

        <svg viewBox="0 0 500 200" className="w-full max-w-2xl h-auto overflow-visible font-sans text-xs">
          {/* Glass Beaker */}
          <rect x="180" y="60" width="140" height="110" rx="4" fill="#090d16" stroke="#64748b" strokeWidth="2" />

          {/* Solid Iodine at bottom */}
          <ellipse cx="250" cy="162" rx="55" ry="6" fill="#475569" />
          <text x="250" y="166" textAnchor="middle" fill="#e2e8f0" fontSize="8.5" fontWeight="bold">কঠিন আয়োডিন (I₂)</text>

          {/* Violet Vapor inside */}
          <rect x="184" y="65" width="132" height="90" fill="rgba(168, 85, 247, 0.25)" />
          <text x="250" y="120" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">বেগুনি বাষ্প (I₂ গ্যাস)</text>

          {/* Inverted Funnel on top */}
          <polygon points="175,60 325,60 255,20 245,20" fill="rgba(255, 255, 255, 0.08)" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Cotton Plug on tip of funnel */}
          <circle cx="250" cy="18" r="6" fill="#f8fafc" />
          <text x="250" y="10" textAnchor="middle" fill="#ffffff" fontSize="8.5">তুলার ছিপি</text>

          {/* Deposited crystals on cold glass */}
          <text x="250" y="48" textAnchor="middle" fill="#d8b4fe" fontSize="8.5" fontWeight="bold">শীতল ক্রিস্টাল ডিপোজিশন</text>
        </svg>

        <span className="text-[10px] text-slate-400 mt-2 font-mono">
          উর্ধ্বপাতিত পদার্থ: নিশাদল (NH₄Cl), কর্পূর, আয়োডিন (I₂), ন্যাপথালিন, ড্রাই আইস (কঠিন CO₂)
        </span>
      </div>
    );
  }

  // E. Hazard Symbols Pictograms (Chapter 1)
  if (type === 'hazardSymbols') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-amber-400 uppercase tracking-wider">
            জিএইচএস হ্যাজার্ড প্রতীক সংকেত / GHS Chemical Hazard Symbols
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            জাতিসংঘ অনুমোদিত মানদণ্ড
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full max-w-2xl">
          {[
            { nameBn: 'বিস্ফোরক', nameEn: 'Explosive', icon: '💣', color: 'border-amber-500/40 text-amber-400' },
            { nameBn: 'দাহ্য', nameEn: 'Flammable', icon: '🔥', color: 'border-orange-500/40 text-orange-400' },
            { nameBn: 'জারক', nameEn: 'Oxidizing', icon: '⭕🔥', color: 'border-yellow-500/40 text-yellow-400' },
            { nameBn: 'বিষাক্ত', nameEn: 'Toxic', icon: '☠️', color: 'border-rose-500/40 text-rose-400' },
            { nameBn: 'ক্ষয়কারী', nameEn: 'Corrosive', icon: '🧪', color: 'border-cyan-500/40 text-cyan-400' },
            { nameBn: 'তেজস্ক্রিয়', nameEn: 'Radioactive', icon: '☢️', color: 'border-lime-500/40 text-lime-400' }
          ].map((item, idx) => (
            <div key={idx} className={`p-2.5 rounded-xl border bg-slate-900/90 text-center flex flex-col items-center justify-center ${item.color}`}>
              <span className="text-xl mb-1">{item.icon}</span>
              <strong className="text-xs text-white block">{item.nameBn}</strong>
              <span className="text-[9px] text-slate-400 font-mono">{item.nameEn}</span>
            </div>
          ))}
        </div>

        <span className="text-[10px] text-slate-400 mt-2 font-mono">
          ব্যবহারের পূর্বে বোতলের গায়ে সাঁটানো প্রতীক দেখে ঝুঁকি ও সতর্কতা নিশ্চিত করুন
        </span>
      </div>
    );
  }

  // F. Scientific Method Flowchart (Chapter 1)
  if (type === 'scientificMethod') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            বৈজ্ঞানিক অনুসন্ধানের ধারাবাহিক ধাপ / Scientific Method
          </span>
          <span className="text-[10px] text-slate-400 font-mono">৬টি পর্যায়</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 w-full max-w-2xl text-xs">
          {[
            { step: '১', title: 'বিষয় নির্ধারণ', desc: 'Problem' },
            { step: '২', title: 'তথ্য সংগ্রহ', desc: 'Literature' },
            { step: '৩', title: 'পরিকল্পনা', desc: 'Planning' },
            { step: '৪', title: 'পরীক্ষণ ও উপাত্ত', desc: 'Experiment' },
            { step: '৫', title: 'তথ্য বিশ্লেষণ', desc: 'Analysis' },
            { step: '৬', title: 'সিদ্ধান্ত গ্রহণ', desc: 'Conclusion' }
          ].map((s, idx) => (
            <React.Fragment key={idx}>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center min-w-[75px]">
                <span className="w-5 h-5 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold font-mono mb-1">
                  {s.step}
                </span>
                <strong className="text-[11px] text-white block">{s.title}</strong>
                <span className="text-[9px] text-slate-400 font-mono">{s.desc}</span>
              </div>
              {idx < 5 && <span className="text-slate-600 font-bold">➔</span>}
            </React.Fragment>
          ))}
        </div>

        <span className="text-[10px] text-slate-400 mt-2 font-mono">
          যেকোনো রাসায়নিক সত্য প্রমাণের জন্য নিয়ন্ত্রিত পরীক্ষা ও উপাত্ত যাচাই অপরিহার্য
        </span>
      </div>
    );
  }

  // G. Four Quantum Numbers Table (Chapter 3)
  if (type === 'quantumNumbersTable') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            চারটি কোয়ান্টাম সংখ্যার পরিচিতি / Four Quantum Numbers
          </span>
          <span className="text-[10px] text-slate-400 font-mono">n, l, m, s</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-2xl text-xs">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/40 space-y-1">
            <span className="text-cyan-400 font-bold font-mono text-sm">১. n (প্রধান)</span>
            <strong className="text-white block text-[11px]">শক্তিস্তরের আকার</strong>
            <span className="text-slate-400 text-[10px] block font-mono">n = 1, 2, 3, 4 (K, L, M, N)</span>
            <span className="text-[9px] text-slate-500 block">ধারণক্ষমতা: 2n²</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-blue-500/40 space-y-1">
            <span className="text-blue-400 font-bold font-mono text-sm">২. l (সহকারী)</span>
            <strong className="text-white block text-[11px]">অরবিটালের আকৃতি</strong>
            <span className="text-slate-400 text-[10px] block font-mono">l = 0(s), 1(p), 2(d), 3(f)</span>
            <span className="text-[9px] text-slate-500 block">মান: 0 থেকে (n-1)</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-amber-500/40 space-y-1">
            <span className="text-amber-400 font-bold font-mono text-sm">৩. m (চৌম্বকীয়)</span>
            <strong className="text-white block text-[11px]">ত্রিমাত্রিক দিকবিন্যাস</strong>
            <span className="text-slate-400 text-[10px] block font-mono">m = -l হতে +l পর্যন্ত</span>
            <span className="text-[9px] text-slate-500 block">অরবিটাল সংখ্যা: (2l+1)</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-1">
            <span className="text-emerald-400 font-bold font-mono text-sm">৪. s (ঘূর্ণন/স্পিন)</span>
            <strong className="text-white block text-[11px]">নিজ অক্ষের ঘূর্ণন</strong>
            <span className="text-slate-400 text-[10px] block font-mono">s = +½ (↑) বা -½ (↓)</span>
            <span className="text-[9px] text-slate-500 block">বিপরীত স্পিন যুগল</span>
          </div>
        </div>
      </div>
    );
  }

  // H. Hund's Rule & Pauli Exclusion Principle (Chapter 3)
  if (type === 'hundRule') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            হুন্ডের নীতি ও পলির বর্জন নীতি / Hund's Rule & Pauli's Principle
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            নাইট্রোজেন (N, Z=7) এর উদাহরণ
          </span>
        </div>

        <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 w-full max-w-2xl space-y-3">
          <div className="flex items-center justify-center gap-3">
            {/* 1s box */}
            <div className="text-center">
              <div className="w-10 h-10 border border-slate-700 bg-slate-950 flex items-center justify-center font-bold text-cyan-400 text-sm">
                ↑↓
              </div>
              <span className="text-[10px] text-slate-400 font-mono">1s²</span>
            </div>

            {/* 2s box */}
            <div className="text-center">
              <div className="w-10 h-10 border border-slate-700 bg-slate-950 flex items-center justify-center font-bold text-cyan-400 text-sm">
                ↑↓
              </div>
              <span className="text-[10px] text-slate-400 font-mono">2s²</span>
            </div>

            {/* 2p boxes (Hund's rule: single spin up first) */}
            <div className="text-center">
              <div className="flex border border-slate-700 bg-slate-950">
                <div className="w-9 h-10 border-r border-slate-700 flex items-center justify-center font-bold text-emerald-400 text-sm">
                  ↑
                </div>
                <div className="w-9 h-10 border-r border-slate-700 flex items-center justify-center font-bold text-emerald-400 text-sm">
                  ↑
                </div>
                <div className="w-9 h-10 flex items-center justify-center font-bold text-emerald-400 text-sm">
                  ↑
                </div>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">2pₓ¹ 2pᵧ¹ 2p_z¹ (সর্বাধিক অযুগ্ম)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 border-t border-slate-800 pt-2">
            <div>
              <strong className="text-cyan-400 block">হুন্ডের নীতি (Hund's Rule):</strong>
              সমশক্তির অরবিটালে ইলেকট্রনগুলো সর্বাধিক সংখ্যায় বিজোড় (Unpaired) থাকে এবং তাদের স্পিন একমুখী হয়।
            </div>
            <div>
              <strong className="text-amber-400 block">পলির বর্জন নীতি (Pauli's Principle):</strong>
              একই পরমাণুর দুটি ইলেকট্রনের ৪টি কোয়ান্টাম সংখ্যা কখনো এক হয় না; একটি অরবিটালে বিপরীত স্পিনের (↑↓) ২টি ইলেকট্রন থাকে।
            </div>
          </div>
        </div>
      </div>
    );
  }
  // 1. Rutherford Gold Foil & Alpha Scattering Vectors Diagram
  if (type === 'rutherfordVectors') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            রাদারফোর্ডের স্বর্ণপাত আলফা পরীক্ষা / Rutherford Gold Foil Experiment
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            সোনার পরমাণু: Gold Atom (Au) | Z = 79
          </span>
        </div>

        <svg viewBox="0 0 650 250" className="w-full max-w-2xl h-auto overflow-visible font-sans">
          <defs>
            {/* Glow filters */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="alphaGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <marker id="arrowAlpha" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#f43f5e" />
            </marker>
            <marker id="arrowStraight" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#38bdf8" />
            </marker>
          </defs>

          {/* Left: Alpha Particle Source */}
          <g transform="translate(20, 95)">
            <rect x="0" y="0" width="70" height="60" rx="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
            <circle cx="35" cy="24" r="10" fill="#f43f5e" filter="url(#alphaGlow)" />
            <text x="35" y="27" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">α</text>
            <text x="35" y="47" textAnchor="middle" fill="#c7d2fe" fontSize="8" fontWeight="bold">আলফা উৎস</text>
            <text x="35" y="56" textAnchor="middle" fill="#818cf8" fontSize="7" fontStyle="italic">Alpha Source</text>
          </g>

          {/* Lead Collimator Slits */}
          <rect x="110" y="75" width="8" height="40" rx="2" fill="#475569" />
          <rect x="110" y="135" width="8" height="40" rx="2" fill="#475569" />
          <text x="114" y="68" textAnchor="middle" fill="#94a3b8" fontSize="7.5">লেড স্লিট / Slit</text>

          {/* Center: GOLD ATOM (Au) / সোনার পরমাণু target */}
          <g transform="translate(300, 125)">
            {/* Outer gold atom boundary */}
            <circle cx="0" cy="0" r="75" fill="#f59e0b" fillOpacity="0.06" stroke="#eab308" strokeWidth="1.5" strokeDasharray="4 3" />
            {/* Inner electron orbits */}
            <circle cx="0" cy="0" r="48" fill="none" stroke="#ca8a04" strokeWidth="0.8" strokeOpacity="0.4" />
            <circle cx="0" cy="0" r="24" fill="none" stroke="#ca8a04" strokeWidth="0.8" strokeOpacity="0.4" />

            {/* Dense Heavy Nucleus */}
            <circle cx="0" cy="0" r="12" fill="#f59e0b" stroke="#fef08a" strokeWidth="2" filter="url(#goldGlow)" />
            <text x="0" y="3" textAnchor="middle" fill="#78350f" fontSize="7.5" fontWeight="black">+79</text>

            {/* Orbiting electrons */}
            <circle cx="-34" cy="-34" r="3" fill="#38bdf8" />
            <circle cx="48" cy="0" r="3" fill="#38bdf8" />
            <circle cx="0" cy="48" r="3" fill="#38bdf8" />

            {/* Callout Tag: Gold Atom (Au) / সোনার পরমাণু */}
            <rect x="-85" y="-105" width="170" height="24" rx="6" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
            <text x="0" y="-93" textAnchor="middle" fill="#fef08a" fontSize="8.5" fontWeight="bold">
              Gold Atom (Au) / গোল্ড এটম (সোনার পরমাণু)
            </text>
            <text x="0" y="-84" textAnchor="middle" fill="#cbd5e1" fontSize="7">
              পাতলা সোনার পাত (0.0004 cm) | Ultra-thin Gold Foil
            </text>
            <line x1="0" y1="-81" x2="0" y2="-75" stroke="#eab308" strokeWidth="1" />

            {/* Nucleus Callout */}
            <path d="M 12 0 L 55 -25" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="2 2" />
            <rect x="58" y="-37" width="125" height="22" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
            <text x="63" y="-26" fill="#fef08a" fontSize="7.5" fontWeight="bold">
              ভারী নিউক্লিয়াস / Nucleus (+79e)
            </text>
            <text x="63" y="-18" fill="#94a3b8" fontSize="6.5">
              ধনাত্মক আধান ও প্রায় সমগ্র ভর
            </text>
          </g>

          {/* Right: ZnS Fluorescent Screen (Circular arc) */}
          <path d="M 520 25 A 130 130 0 0 1 520 225" fill="none" stroke="#10b981" strokeWidth="8" strokeOpacity="0.7" strokeLinecap="round" />
          <text x="560" y="115" textAnchor="start" fill="#34d399" fontSize="8.5" fontWeight="bold">
            জিঙ্ক সালফাইড পর্দা
          </text>
          <text x="560" y="127" textAnchor="start" fill="#a7f3d0" fontSize="7.5">
            ZnS Fluorescent Screen
          </text>
          <text x="560" y="137" textAnchor="start" fill="#64748b" fontSize="7">
            প্রতিপ্রভা পর্দায় আলোক ঝলক
          </text>

          {/* Trajectory 1: Straight through (99%) */}
          <line x1="90" y1="105" x2="520" y2="105" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrowStraight)" />
          <circle cx="520" cy="105" r="4" fill="#38bdf8" filter="url(#alphaGlow)" />
          <text x="430" y="98" fill="#38bdf8" fontSize="8" fontWeight="bold">
            সোজা গমন (৯৯%) / Undeviated (99%)
          </text>

          {/* Trajectory 2: Straight through below */}
          <line x1="90" y1="145" x2="520" y2="145" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrowStraight)" />
          <circle cx="520" cy="145" r="4" fill="#38bdf8" filter="url(#alphaGlow)" />

          {/* Trajectory 3: Deflected by Nucleus */}
          <path d="M 90 120 L 285 120 Q 305 116 350 70 L 490 35" fill="none" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrowAlpha)" />
          <circle cx="490" cy="35" r="4" fill="#f43f5e" filter="url(#alphaGlow)" />
          <text x="360" y="55" fill="#f43f5e" fontSize="8" fontWeight="bold">
            বিক্ষিপ্ত আলফা কণা / Deflected (Repulsion)
          </text>

          {/* Trajectory 4: Rebounded 180 degrees (1 in 20,000) */}
          <path d="M 90 126 L 280 126 Q 288 126 280 134 L 140 180" fill="none" stroke="#e11d48" strokeWidth="2.2" strokeDasharray="4 2" markerEnd="url(#arrowAlpha)" />
          <circle cx="140" cy="180" r="4" fill="#fb7185" filter="url(#alphaGlow)" />
          <text x="145" y="196" fill="#fb7185" fontSize="8" fontWeight="bold">
            ১৮০° কোণে প্রত্যাবর্তন (১/২০,০০০) / Rebounded
          </text>
        </svg>

        <div className="w-full flex flex-wrap items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-slate-800/80 px-2 mt-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>গোল্ড এটম / Gold Atom (Au)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>আলফা কণা / Alpha Particle (⁴₂He²⁺)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>জিঙ্ক সালফাইড পর্দা / ZnS Screen</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Bohr Orbits & Energy Level Transitions Diagram
  if (type === 'bohrOrbits') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            বোর পরমাণু শক্তিস্তর ও কোয়ান্টাম জাম্প / Bohr Quantum Orbits & Transitions
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            mvr = nh / 2π | ΔE = hν = hc/λ
          </span>
        </div>

        <svg viewBox="0 0 600 230" className="w-full max-w-2xl h-auto font-sans overflow-visible">
          {/* Concentric Bohr Orbits */}
          <g transform="translate(240, 115)">
            {/* Nucleus */}
            <circle cx="0" cy="0" r="14" fill="#f43f5e" stroke="#fb7185" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">+Ze</text>

            {/* Orbit 1: K Shell (n=1) */}
            <circle cx="0" cy="0" r="38" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="27" cy="-27" r="4" fill="#38bdf8" />
            <circle cx="-27" cy="27" r="4" fill="#38bdf8" />

            {/* Orbit 2: L Shell (n=2) */}
            <circle cx="0" cy="0" r="68" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx="0" cy="-68" r="4" fill="#818cf8" />
            <circle cx="48" cy="48" r="4" fill="#818cf8" />

            {/* Orbit 3: M Shell (n=3) */}
            <circle cx="0" cy="0" r="98" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="5 3" />
            <circle cx="-69" cy="-69" r="4" fill="#c084fc" />

            {/* Quantum Jump / Transition Arrow from n=3 to n=2 */}
            <path d="M 0 -98 L 0 -68" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="2 2" markerEnd="url(#arrowStraight)" />

            {/* Emitted Photon wave */}
            <path d="M 5 -83 Q 20 -95 35 -83 T 65 -83 T 95 -83" fill="none" stroke="#fbbf24" strokeWidth="2" />
            <polygon points="95,-83 87,-87 87,-79" fill="#fbbf24" />
            <text x="105" y="-80" fill="#fef08a" fontSize="8.5" fontWeight="bold">
              ফোটন নিঃসরণ / Emitted Photon (hν)
            </text>
          </g>

          {/* Right Labels Panel */}
          <g transform="translate(420, 25)">
            <rect x="0" y="0" width="170" height="175" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <text x="12" y="20" fill="#38bdf8" fontSize="9.5" fontWeight="bold">
              চিহ্নিত শক্তিস্তরসমূহ (Shells):
            </text>

            <g transform="translate(12, 35)">
              <circle cx="6" cy="6" r="5" fill="#f43f5e" />
              <text x="18" y="9" fill="#ffffff" fontSize="8" fontWeight="bold">নিউক্লিয়াস / Nucleus (+Ze)</text>
              <text x="18" y="19" fill="#94a3b8" fontSize="7">প্রোটন ও নিউট্রন কেন্দ্রীন</text>
            </g>

            <g transform="translate(12, 65)">
              <circle cx="6" cy="6" r="5" fill="#38bdf8" />
              <text x="18" y="9" fill="#38bdf8" fontSize="8" fontWeight="bold">K শক্তিস্তর / K Shell (n=1)</text>
              <text x="18" y="19" fill="#94a3b8" fontSize="7">সর্বোচ্চ ২n² = ২টি ইলেকট্রন</text>
            </g>

            <g transform="translate(12, 95)">
              <circle cx="6" cy="6" r="5" fill="#818cf8" />
              <text x="18" y="9" fill="#818cf8" fontSize="8" fontWeight="bold">L শক্তিস্তর / L Shell (n=2)</text>
              <text x="18" y="19" fill="#94a3b8" fontSize="7">সর্বোচ্চ ২n² = ৮টি ইলেকট্রন</text>
            </g>

            <g transform="translate(12, 125)">
              <circle cx="6" cy="6" r="5" fill="#c084fc" />
              <text x="18" y="9" fill="#c084fc" fontSize="8" fontWeight="bold">M শক্তিস্তর / M Shell (n=3)</text>
              <text x="18" y="19" fill="#94a3b8" fontSize="7">সর্বোচ্চ ২n² = ১৮টি ইলেকট্রন</text>
            </g>

            <g transform="translate(12, 153)">
              <circle cx="6" cy="6" r="5" fill="#fbbf24" />
              <text x="18" y="9" fill="#fbbf24" fontSize="8" fontWeight="bold">ইলেকট্রন / Electron (e⁻)</text>
            </g>
          </g>
        </svg>

        <div className="w-full flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-slate-800/80 px-2 mt-1">
          <span>স্থির শক্তিস্তর: K, L, M, N (n = ১, ২, ৩, ৪)</span>
          <span className="text-cyan-400 font-mono">শক্তি শোষণে কোয়ান্টাম উত্তরণ | শক্তি বিকিরণে বর্ণালী সৃষ্টি</span>
        </div>
      </div>
    );
  }

  // 3. Chromium & Copper Stability Diagram
  if (type === 'crCuStability') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
          ক্রোমিয়াম ও কপারের ব্যতিক্রমী স্থিতিশীলতা / Exceptional Stability of Cr & Cu
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl text-xs">
          {/* Chromium Card */}
          <div className="p-3 bg-slate-900 rounded-xl border border-amber-500/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
              <strong className="text-white text-sm">ক্রোমিয়াম / Chromium (²⁴Cr)</strong>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold font-mono text-[11px]">
                [Ar] 3d⁵ 4s¹
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              d⁵ অর্ধপূর্ণ অরবিটাল (Half-filled): সর্বোচ্চ প্রতিসাম্য ও উচ্চ বিনিময় শক্তি।
            </p>
            {/* Box diagram for 3d and 4s */}
            <div className="flex items-center gap-3 pt-1">
              <div>
                <span className="text-[10px] text-amber-400 font-mono block mb-1">3d⁵ (অর্ধপূর্ণ)</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-6 h-7 border border-amber-400 bg-slate-950 flex items-center justify-center font-bold text-amber-300 text-xs">
                      ↑
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] text-cyan-400 font-mono block mb-1">4s¹</span>
                <div className="w-6 h-7 border border-cyan-400 bg-slate-950 flex items-center justify-center font-bold text-cyan-300 text-xs">
                  ↑
                </div>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400 font-medium block">
              ✓ সাধারণ 3d⁴ 4s² অপেক্ষা 3d⁵ 4s¹ অনেক বেশি স্থিতিশীল
            </span>
          </div>

          {/* Copper Card */}
          <div className="p-3 bg-slate-900 rounded-xl border border-cyan-500/40 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
              <strong className="text-white text-sm">কপার / Copper (²⁹Cu)</strong>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold font-mono text-[11px]">
                [Ar] 3d¹⁰ 4s¹
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              d¹⁰ সম্পূর্ণরূপে পূর্ণ অরবিটাল (Fully-filled): নিখুঁত ইলেকট্রনিক ভারসাম্য।
            </p>
            {/* Box diagram for 3d and 4s */}
            <div className="flex items-center gap-3 pt-1">
              <div>
                <span className="text-[10px] text-cyan-400 font-mono block mb-1">3d¹⁰ (পূর্ণ)</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-6 h-7 border border-cyan-400 bg-slate-950 flex items-center justify-center font-bold text-cyan-300 text-xs">
                      ↑↓
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] text-emerald-400 font-mono block mb-1">4s¹</span>
                <div className="w-6 h-7 border border-emerald-400 bg-slate-950 flex items-center justify-center font-bold text-emerald-300 text-xs">
                  ↑
                </div>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400 font-medium block">
              ✓ সাধারণ 3d⁹ 4s² অপেক্ষা 3d¹⁰ 4s¹ সর্বাধিক স্থিতিশীল
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 4. Standard Isotopic Notation Diagram
  if (type === 'notation') {
    return (
      <div className="w-full h-full min-h-[240px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
          প্রমিত প্রতীকীয় কাঠামো / Standard Isotopic Notation
        </span>
        <svg viewBox="0 0 540 230" className="w-full max-w-lg h-auto overflow-visible font-sans">
          {/* Main Symbol X */}
          <text x="270" y="135" textAnchor="middle" fill="#ffffff" fontSize="64" fontWeight="bold" fontFamily="monospace">
            X
          </text>
          
          {/* Mass Number A (Top Left) */}
          <text x="210" y="85" textAnchor="end" fill="#38bdf8" fontSize="36" fontWeight="bold" fontFamily="monospace">
            A
          </text>
          <path d="M 195 70 L 125 45" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          <text x="120" y="38" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">
            ভর সংখ্যা / Mass Number (A = p + n)
          </text>
          <text x="120" y="52" textAnchor="end" fill="#94a3b8" fontSize="9.5">
            মাস নাম্বার (প্রোটন + নিউট্রন)
          </text>

          {/* Atomic Number Z (Bottom Left) */}
          <text x="210" y="150" textAnchor="end" fill="#f43f5e" fontSize="36" fontWeight="bold" fontFamily="monospace">
            Z
          </text>
          <path d="M 195 150 L 125 175" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
          <text x="120" y="175" textAnchor="end" fill="#f43f5e" fontSize="11" fontWeight="bold">
            পারমাণবিক সংখ্যা / Atomic Number (Z)
          </text>
          <text x="120" y="189" textAnchor="end" fill="#94a3b8" fontSize="9.5">
            অ্যাটমিক নাম্বার (প্রোটন সংখ্যা p)
          </text>

          {/* Charge (Top Right) */}
          <text x="325" y="85" textAnchor="start" fill="#eab308" fontSize="32" fontWeight="bold" fontFamily="monospace">
            m⁺/⁻
          </text>
          <path d="M 345 70 L 405 45" stroke="#eab308" strokeWidth="2" strokeDasharray="3 3" />
          <text x="410" y="38" textAnchor="start" fill="#eab308" fontSize="11" fontWeight="bold">
            আয়ন আধান / Ionic Charge
          </text>
          <text x="410" y="52" textAnchor="start" fill="#94a3b8" fontSize="9.5">
            আয়নিক চার্জ (ইলেকট্রন হ্রাস / বৃদ্ধি)
          </text>

          {/* Element Name (Bottom Center) */}
          <path d="M 270 150 L 270 195" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
          <text x="270" y="210" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">
            মৌলের রাসায়নিক প্রতীক / Chemical Symbol (প্রতীক)
          </text>
        </svg>
      </div>
    );
  }

  // 5. Aufbau Ladder Diagram
  if (type === 'aufbauLadder') {
    return (
      <div className="w-full h-full min-h-[240px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
          আউফবাউ শক্তি মই / Aufbau Energy Ladder (n + l ক্রমধারা)
        </span>
        <svg viewBox="0 0 530 200" className="w-full max-w-lg h-auto font-sans">
          {/* Horizontal Level Steps */}
          {[
            { name: '1s (১)', sub: '১s অরবিটাল', x: 35, y: 155, color: '#38bdf8' },
            { name: '2s (২)', sub: '২s অরবিটাল', x: 100, y: 135, color: '#38bdf8' },
            { name: '2p (৩)', sub: '২p অরবিটাল', x: 165, y: 115, color: '#a855f7' },
            { name: '3s (৩)', sub: '৩s অরবিটাল', x: 230, y: 95, color: '#38bdf8' },
            { name: '3p (৪)', sub: '৩p অরবিটাল', x: 295, y: 75, color: '#a855f7' },
            { name: '4s (৪)', sub: '৪s অরবিটাল', x: 360, y: 60, color: '#10b981' },
            { name: '3d (৫)', sub: '৩d অরবিটাল', x: 425, y: 45, color: '#f59e0b' },
            { name: '4p (৫)', sub: '৪p অরবিটাল', x: 485, y: 30, color: '#a855f7' },
          ].map((step, idx) => (
            <g key={idx}>
              <rect x={step.x - 26} y={step.y - 12} width="52" height="24" rx="6" fill="#0f172a" stroke={step.color} strokeWidth="1.8" />
              <text x={step.x} y={step.y + 4} textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
                {step.name}
              </text>
              {idx < 7 && (
                <line x1={step.x + 28} y1={step.y} x2={step.x + 36} y2={step.y - 6} stroke="#64748b" strokeWidth="2" />
              )}
            </g>
          ))}
          <text x="265" y="190" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">
            শক্তির ঊর্ধ্বক্রম / Energy Sequence: 1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p
          </text>
        </svg>
      </div>
    );
  }

  // 6. Mass Calculation Pie Diagram
  if (type === 'massCalcPie') {
    return (
      <div className="w-full h-full min-h-[240px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
          ক্লোরিনের আইসোটোপ প্রাচুর্য ও গড় ভর / Chlorine Isotopic Abundance
        </span>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <svg viewBox="0 0 160 160" className="w-36 h-36">
            <circle cx="80" cy="80" r="60" fill="none" stroke="#0ea5e9" strokeWidth="32" strokeDasharray="282.7 94.2" strokeDashoffset="0" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="#a855f7" strokeWidth="32" strokeDasharray="94.2 282.7" strokeDashoffset="-282.7" />
            <text x="80" y="73" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="bold">
              35.5
            </text>
            <text x="80" y="88" textAnchor="middle" fill="#38bdf8" fontSize="8.5" fontWeight="bold">
              amu / এএমইউ
            </text>
            <text x="80" y="99" textAnchor="middle" fill="#94a3b8" fontSize="7.5">
              গড় পারমাণবিক ভর
            </text>
          </svg>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-sky-500 shrink-0" />
              <div>
                <strong className="text-white block">ক্লোরিন-৩৫ / Chlorine-35 (³⁵Cl)</strong>
                <span className="text-slate-400 text-[11px]">শতকরা প্রাচুর্য / Abundance: ৭৫.৭৭% (≈ ৭৫%)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-purple-500 shrink-0" />
              <div>
                <strong className="text-white block">ক্লোরিন-৩৭ / Chlorine-37 (³⁷Cl)</strong>
                <span className="text-slate-400 text-[11px]">শতকরা প্রাচুর্য / Abundance: ২৪.২৩% (≈ ২৫%)</span>
              </div>
            </div>
            <p className="text-[11px] text-cyan-300 font-mono pt-1.5 border-t border-slate-800">
              গড় ভর / Avg Mass = (35×75 + 37×25)/100 = 35.5 amu
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 7. Subatomic Particles Chart
  if (type === 'subatomicChart') {
    return (
      <div className="w-full h-full min-h-[240px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
          স্থায়ী মূল কণিকাসমূহের ধর্ম / Subatomic Particles Properties
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl text-center text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-cyan-500/40">
            <span className="w-8 h-8 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm mb-1">
              e⁻
            </span>
            <strong className="text-white block">ইলেকট্রন / Electron</strong>
            <span className="text-slate-400 text-[10px] block">ঋণাত্মক আধান / Negative</span>
            <span className="text-cyan-400 text-[11px] block mt-1 font-mono">চার্জ: -1.60×10⁻¹⁹ C</span>
            <span className="text-slate-400 text-[10px] block font-mono">ভর: 9.11×10⁻³¹ kg</span>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-rose-500/40">
            <span className="w-8 h-8 mx-auto rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm mb-1">
              p⁺
            </span>
            <strong className="text-white block">প্রোটন / Proton</strong>
            <span className="text-slate-400 text-[10px] block">ধনাত্মক আধান / Positive</span>
            <span className="text-rose-400 text-[11px] block mt-1 font-mono">চার্জ: +1.60×10⁻¹⁹ C</span>
            <span className="text-slate-400 text-[10px] block font-mono">ভর: 1.673×10⁻²⁷ kg</span>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-600">
            <span className="w-8 h-8 mx-auto rounded-full bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-sm mb-1">
              n⁰
            </span>
            <strong className="text-white block">নিউট্রন / Neutron</strong>
            <span className="text-slate-400 text-[10px] block">চার্জহীন / Neutral</span>
            <span className="text-slate-300 text-[11px] block mt-1 font-mono">চার্জ: ০ (চার্জহীন)</span>
            <span className="text-slate-400 text-[10px] block font-mono">ভর: 1.675×10⁻²⁷ kg</span>
          </div>
        </div>
      </div>
    );
  }

  // 9. Relative Molecular Mass Calculation (Chapter 3)
  if (type === 'molecularMassCalc') {
    const examples = [
      {
        compound: 'সালফিউরিক এসিড (H₂SO₄)',
        formula: '(1 × 2) + (32 × 1) + (16 × 4)',
        breakdown: '2 + 32 + 64',
        result: '98',
        tag: 'সাধারণ এসিড'
      },
      {
        compound: 'তুঁতে / ব্লু ভিট্রিওল (CuSO₄·5H₂O)',
        formula: '63.5 + 32 + (16 × 4) + 5 × (1×2 + 16)',
        breakdown: '63.5 + 32 + 64 + (5 × 18) = 159.5 + 90',
        result: '249.5',
        tag: 'স্ফটিক পানিসহ যৌগ'
      },
      {
        compound: 'গ্লুকোজ (C₆H₁₂O₆)',
        formula: '(12 × 6) + (1 × 12) + (16 × 6)',
        breakdown: '72 + 12 + 96',
        result: '180',
        tag: 'জৈব শর্করা'
      },
      {
        compound: 'কাপড় কাঁচা সোডা (Na₂CO₃·10H₂O)',
        formula: '(23 × 2) + 12 + (16 × 3) + 10 × 18',
        breakdown: '46 + 12 + 48 + 180 = 106 + 180',
        result: '286',
        tag: 'ডেকাহাইড্রেট লবণ'
      }
    ];

    return (
      <div className="w-full h-full min-h-[300px] max-h-[460px] overflow-y-auto bg-slate-950 p-4 rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            আপেক্ষিক আণবিক ভর নির্ণয় পদ্ধতি / Relative Molecular Mass Calculation
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            M = Σ (পারমাণবিক ভর × পরমাণু সংখ্যা)
          </span>
        </div>

        <div className="space-y-2 mb-3">
          {examples.map((ex, i) => (
            <div key={i} className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">{ex.compound}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">
                  {ex.tag}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-300 font-mono">
                <div>হিসাব: <span className="text-slate-400">{ex.formula}</span></div>
                <div className="text-right sm:text-right font-bold text-cyan-400">
                  = {ex.breakdown} = <span className="text-emerald-400 text-sm">{ex.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-2 bg-slate-900/60 rounded border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
          <span>💡 <strong>মনে রাখুন:</strong> আপেক্ষিক আণবিক ভর দুটি ভরের অনুপাত হওয়ায় এর কোনো একক নেই।</span>
          <span className="text-cyan-400 font-mono">C-12 অনুপাত</span>
        </div>
      </div>
    );
  }

  // 11. Periodic Trends (পার্যায়বৃত্ত ধর্মের সমন্বিত চার্ট)
  if (type === 'periodicTrends') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            পর্যায়বৃত্ত ধর্মের দিকনির্দেশক চার্ট / Periodic Trends Directional Map
          </span>
          <span className="text-[10px] text-slate-400 font-mono">L → R & Top ↓</span>
        </div>

        <svg viewBox="0 0 600 240" className="w-full max-w-2xl h-auto overflow-visible font-sans text-xs">
          {/* Periodic Box Outline */}
          <rect x="50" y="40" width="500" height="150" rx="8" fill="#090d16" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

          {/* Group 1 & Group 18 Markers */}
          <text x="65" y="60" fill="#94a3b8" fontSize="10" fontWeight="bold">Group 1</text>
          <text x="535" y="60" textAnchor="end" fill="#94a3b8" fontSize="10" fontWeight="bold">Group 18</text>
          <text x="65" y="175" fill="#64748b" fontSize="9">Period 7</text>

          {/* Top Arrow: Left to Right */}
          <line x1="120" y1="25" x2="480" y2="25" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrowCyan)" />
          <text x="300" y="18" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
            বাম ➜ ডান (পর্যায়ে): আয়নীকরণ শক্তি ↑, ইলেকট্রন আসক্তি ↑, তড়িৎ ঋণাত্মকতা ↑
          </text>
          <text x="300" y="38" textAnchor="middle" fill="#f87171" fontSize="10">
            [পারমাণবিক আকার বা ব্যাসার্ধ হ্রাস পায় ↓ | ধাতব ধর্ম হ্রাস পায় ↓]
          </text>

          {/* Right Arrow: Bottom to Top */}
          <line x1="565" y1="180" x2="565" y2="50" stroke="#34d399" strokeWidth="3" markerEnd="url(#arrowGreen)" />
          <text x="580" y="115" fill="#34d399" fontSize="10" fontWeight="bold" transform="rotate(90 580 115)">
            তড়িৎ ঋণাত্মকতা ও IE বৃদ্ধি ➜
          </text>

          {/* Left Arrow: Top to Bottom */}
          <line x1="30" y1="50" x2="30" y2="180" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowAmber)" />
          <text x="18" y="115" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold" transform="rotate(-90 18 115)">
            পরমাণুর আকার বৃদ্ধি ও ধাতব ধর্ম বৃদ্ধি ➜
          </text>

          {/* Inner Central Summary Card */}
          <rect x="150" y="75" width="300" height="90" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="300" y="100" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">
            মূল নীতি: পরমাণুর আকার
          </text>
          <text x="300" y="122" textAnchor="middle" fill="#e2e8f0" fontSize="10">
            আকার যত ছোট হয় ➜ নিউক্লিয়াসের আকর্ষণ তত তীব্র হয়
          </text>
          <text x="300" y="142" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
            আকার ছোট ∝ আয়নীকরণ শক্তি ↑ ও তড়িৎ ঋণাত্মকতা ↑
          </text>

          {/* Defs for arrow heads */}
          <defs>
            <marker id="arrowCyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8" />
            </marker>
            <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#34d399" />
            </marker>
            <marker id="arrowAmber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
            </marker>
          </defs>
        </svg>
      </div>
    );
  }

  // 12. Period & Group Finder (পর্যায় ও গ্রুপ নির্ণয়ের নিয়ম ৩টি)
  if (type === 'periodGroupFinder') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            ইলেকট্রন বিন্যাস থেকে পর্যায় ও গ্রুপ নির্ণয় / Period & Group Rules
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NCTB Rules 1, 2, 3</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-2xl">
          {/* Rule 1 */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-rose-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-rose-300">নিয়ম ১ (s-ব্লক)</span>
                <span className="text-[10px] font-mono text-slate-400">G 1, 2</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                সর্ববহিঃস্থ স্তরে শুধু <strong>s</strong> উপস্তর থাকলে:
              </p>
              <div className="my-2 p-1.5 bg-slate-950 rounded border border-rose-500/20 font-mono text-xs text-rose-400 text-center font-bold">
                গ্রুপ = s এর e⁻ সংখ্যা
              </div>
            </div>
            <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
              যেমন: ₁₁Na (3s¹) ➜ গ্রুপ ১
            </div>
          </div>

          {/* Rule 2 */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-emerald-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-emerald-300">নিয়ম ২ (s+p ব্লক)</span>
                <span className="text-[10px] font-mono text-slate-400">G 13-18</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                সর্ববহিঃস্থ স্তরে <strong>s এবং p</strong> উভয় থাকলে:
              </p>
              <div className="my-2 p-1.5 bg-slate-950 rounded border border-emerald-500/20 font-mono text-xs text-emerald-400 text-center font-bold">
                গ্রুপ = s + p + ১০
              </div>
            </div>
            <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
              যেমন: ₁₇Cl (3s² 3p⁵) ➜ ২+৫+১০ = ১৭
            </div>
          </div>

          {/* Rule 3 */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-blue-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-blue-300">নিয়ম ৩ (d-ব্লক)</span>
                <span className="text-[10px] font-mono text-slate-400">G 3-12</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                বাইরের <strong>s</strong> এবং আগের <strong>d</strong> স্তর থাকলে:
              </p>
              <div className="my-2 p-1.5 bg-slate-950 rounded border border-blue-500/20 font-mono text-xs text-blue-400 text-center font-bold">
                গ্রুপ = (n-1)d + ns
              </div>
            </div>
            <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
              যেমন: ₂₆Fe (3d⁶ 4s²) ➜ ৬+২ = ৮
            </div>
          </div>
        </div>

        <div className="mt-3 p-2 bg-slate-900/60 rounded-lg border border-slate-800 text-[11px] text-slate-300 w-full max-w-2xl text-center">
          💡 <strong>পর্যায় নির্ণয়:</strong> পরমাণুর ইলেকট্রন বিন্যাসের সর্বোচ্চ প্রধান কোয়ান্টাম স্তর <code className="text-cyan-400 font-bold">n</code>-ই ঐ মৌলের পর্যায় নম্বর!
        </div>
      </div>
    );
  }

  // 13. Mendeleev vs Modern Periodic Law
  if (type === 'mendeleevVsModern') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            পর্যায় সূত্রের ঐতিহাসিক রূপান্তর / Evolution of Periodic Law
          </span>
          <span className="text-[10px] text-slate-400 font-mono">১৮৬৯ বনাম ১৯১৩</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {/* Mendeleev Card */}
          <div className="bg-slate-900/90 rounded-xl p-3.5 border border-amber-500/40">
            <span className="text-xs font-bold text-amber-400 block mb-1">
              ১. মেন্ডেলিফের আদি পর্যায় সূত্র (১৮৬৯)
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
              “মৌলসমূহের ভৌত ও রাসায়নিক ধর্মাবলি তাদের <strong>পারমাণবিক ভর</strong> বৃদ্ধির সাথে পর্যায়ক্রমে আবর্তিত হয়।”
            </p>
            <div className="bg-slate-950 p-2 rounded text-[10px] text-slate-400 space-y-1 border border-slate-800">
              <div className="text-rose-400 font-semibold">ত্রুটিসমূহ:</div>
              <div>• বেশি ভরের Ar (৩৯.৯) আগে, কম ভরের K (৩৯.১) পরে।</div>
              <div>• আইসোটোপদের ভিন্ন ভর সত্ত্বেও একই স্থানে রাখার অসঙ্গতি।</div>
            </div>
          </div>

          {/* Modern Moseley Card */}
          <div className="bg-slate-900/90 rounded-xl p-3.5 border border-cyan-500/40">
            <span className="text-xs font-bold text-cyan-400 block mb-1">
              ২. হেনরি মোসলের আধুনিক পর্যায় সূত্র (১৯১৩)
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
              “মৌলসমূহের ভৌত ও রাসায়নিক ধর্মাবলি তাদের <strong>পারমাণবিক সংখ্যা (Z)</strong> বৃদ্ধির সাথে পর্যায়ক্রমে আবর্তিত হয়।”
            </p>
            <div className="bg-slate-950 p-2 rounded text-[10px] text-slate-400 space-y-1 border border-slate-800">
              <div className="text-emerald-400 font-semibold">সমাধান:</div>
              <div>• Ar (Z=১৮) স্বাভাবিকভাবেই K (Z=১৯) এর আগে অবস্থান পায়।</div>
              <div>• আইসোটোপদের প্রোটন সংখ্যা সমান হওয়ায় একই স্থান সম্পূর্ণ যুক্তিসঙ্গত।</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 14. Special Groups Chart
  if (type === 'specialGroupsChart') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            পর্যায় সারণির বিশেষ গ্রুপ ও পরিবার / Special Chemical Families
          </span>
          <span className="text-[10px] text-slate-400 font-mono">Groups 1, 2, 11, 17, 18</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 w-full max-w-2xl text-center">
          <div className="bg-slate-900 p-2.5 rounded-xl border border-rose-500/40">
            <span className="text-xs font-bold text-rose-300 block">ক্ষার ধাতু</span>
            <span className="text-[10px] font-mono text-slate-400 block">Group 1</span>
            <span className="text-[11px] font-bold text-white block mt-1">Li, Na, K...</span>
            <span className="text-[9px] text-slate-400 block mt-1">পানিতে তীব্র ক্ষার ও H₂ দেয়</span>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-xl border border-orange-500/40">
            <span className="text-xs font-bold text-orange-300 block">মৃৎক্ষার ধাতু</span>
            <span className="text-[10px] font-mono text-slate-400 block">Group 2</span>
            <span className="text-[11px] font-bold text-white block mt-1">Be, Mg, Ca...</span>
            <span className="text-[9px] text-slate-400 block mt-1">মাটিতে অক্সাইড যৌগ পাওয়া যায়</span>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-xl border border-amber-500/40">
            <span className="text-xs font-bold text-amber-300 block">মুদ্রা ধাতু</span>
            <span className="text-[10px] font-mono text-slate-400 block">Group 11</span>
            <span className="text-[11px] font-bold text-white block mt-1">Cu, Ag, Au</span>
            <span className="text-[9px] text-slate-400 block mt-1">ঐতিহাসিক মুদ্রা তৈরিতে ব্যবহৃত</span>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-xl border border-teal-500/40">
            <span className="text-xs font-bold text-teal-300 block">হ্যালোজেন</span>
            <span className="text-[10px] font-mono text-slate-400 block">Group 17</span>
            <span className="text-[11px] font-bold text-white block mt-1">F, Cl, Br, I</span>
            <span className="text-[9px] text-slate-400 block mt-1">লবণ উৎপাদক তীব্র অধাতু</span>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-xl border border-purple-500/40 col-span-2 sm:col-span-1">
            <span className="text-xs font-bold text-purple-300 block">নিষ্ক্রিয় গ্যাস</span>
            <span className="text-[10px] font-mono text-slate-400 block">Group 18</span>
            <span className="text-[11px] font-bold text-white block mt-1">He, Ne, Ar...</span>
            <span className="text-[9px] text-slate-400 block mt-1">পূর্ণ দ্বিত্ব/অক্টেট, রাসায়নিক নির্লিপ্ত</span>
          </div>
        </div>
      </div>
    );
  }

  // 11. Ionic Bond Formation (Na + Cl -> Na+ + Cl-)
  if (type === 'ionicBondFormation') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-xl mb-3 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            আয়নিক বন্ধন গঠন: সোডিয়াম ক্লোরাইড (NaCl)
          </span>
          <span className="text-[10px] text-slate-400 font-mono">ইলেকট্রন স্থানান্তর & স্থির-বৈদ্যুতিক আকর্ষণ</span>
        </div>
        <div className="flex items-center justify-center gap-4 w-full max-w-xl bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          {/* Na atom -> Na+ */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-cyan-400/50 flex flex-col items-center justify-center relative bg-cyan-950/20">
              <span className="text-base font-bold text-cyan-300">Na</span>
              <span className="text-[10px] font-mono text-cyan-400">2, 8, 1</span>
              <div className="absolute -top-1.5 right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 text-[8px] font-bold text-slate-950 flex items-center justify-center animate-bounce">e⁻</div>
            </div>
            <span className="text-xs font-bold text-slate-200 mt-1">Na পরমাণু</span>
            <span className="text-[10px] text-rose-400">-১ ইলেকট্রন ত্যাগ</span>
            <span className="text-[11px] font-bold text-cyan-300 font-mono">Na⁺ [2, 8]</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-amber-400">➔</span>
            <span className="text-[9px] text-slate-400 uppercase tracking-tighter">e⁻ ট্রান্সফার</span>
          </div>

          {/* Cl atom -> Cl- */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-emerald-400/50 flex flex-col items-center justify-center relative bg-emerald-950/20">
              <span className="text-base font-bold text-emerald-300">Cl</span>
              <span className="text-[10px] font-mono text-emerald-400">2, 8, 7</span>
              <div className="absolute -top-1.5 left-1 w-3.5 h-3.5 rounded-full border border-dashed border-emerald-400"></div>
            </div>
            <span className="text-xs font-bold text-slate-200 mt-1">Cl পরমাণু</span>
            <span className="text-[10px] text-emerald-400">+১ ইলেকট্রন গ্রহণ</span>
            <span className="text-[11px] font-bold text-emerald-300 font-mono">Cl⁻ [2, 8, 8]</span>
          </div>

          <div className="text-xl font-bold text-slate-600">=</div>

          {/* NaCl Ionic Crystal */}
          <div className="bg-slate-950 p-2.5 rounded-xl border border-cyan-500/40 text-center space-y-1">
            <span className="text-xs font-bold text-white block">NaCl কেলাস</span>
            <div className="inline-flex items-center gap-1 font-mono font-bold text-sm bg-slate-900 px-2 py-1 rounded border border-slate-700">
              <span className="text-cyan-400">Na⁺</span>
              <span className="text-slate-500">···</span>
              <span className="text-emerald-400">Cl⁻</span>
            </div>
            <span className="text-[9px] text-slate-400 block">স্থির-বৈদ্যুতিক আকর্ষণ</span>
          </div>
        </div>
      </div>
    );
  }

  // 12. Covalent Bond Sharing (H2O & CH4)
  if (type === 'covalentSharing') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-xl mb-3 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            সমযোজী বন্ধন: পানির অণু (H₂O) ও ইলেকট্রন জোড়
          </span>
          <span className="text-[10px] text-slate-400 font-mono">বন্ধনজোড় (BP) ও মুক্তজোড় (LP)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
          {/* H2O Molecule Diagram */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-cyan-500/30 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-cyan-300 mb-2">পানি (H₂O) এর লুইস গঠন</span>
            <div className="relative w-36 h-28 flex items-center justify-center">
              {/* Central Oxygen */}
              <div className="w-14 h-14 rounded-full bg-rose-500/20 border-2 border-rose-500 flex flex-col items-center justify-center z-10">
                <span className="text-xs font-bold text-rose-300">O</span>
                <span className="text-[8px] font-mono text-slate-400">অষ্টক পূর্ণ</span>
              </div>
              {/* Lone pairs on top and right */}
              <span className="absolute top-1 text-[10px] font-bold text-amber-300">•• (LP-1)</span>
              <span className="absolute bottom-1 right-2 text-[10px] font-bold text-amber-300">•• (LP-2)</span>
              {/* Hydrogen 1 */}
              <div className="absolute top-4 left-0 w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                <span className="text-[10px] font-bold text-cyan-300">H</span>
              </div>
              {/* Hydrogen 2 */}
              <div className="absolute bottom-1 left-3 w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                <span className="text-[10px] font-bold text-cyan-300">H</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-300 font-mono mt-1">
              বন্ধনজোড় (BP) = <span className="text-cyan-400 font-bold">২</span> | মুক্তজোড় (LP) = <span className="text-amber-400 font-bold">২</span>
            </div>
          </div>

          {/* CH4 / O2 / N2 summary */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex flex-col justify-center space-y-2 text-xs">
            <span className="font-bold text-white border-b border-slate-800 pb-1">সমযোজী বন্ধনের প্রকারভেদ</span>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300">একক বন্ধন (Single):</span>
              <span className="font-mono text-cyan-400 font-bold">H–H, Cl–Cl, C–H</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300">দ্বিবন্ধন (Double):</span>
              <span className="font-mono text-emerald-400 font-bold">O = O (৪টি ইলেকট্রন)</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300">ত্রিবন্ধন (Triple):</span>
              <span className="font-mono text-amber-400 font-bold">N ≡ N (৬টি ইলেকট্রন)</span>
            </div>
            <span className="text-[9px] text-slate-500 leading-tight">ইলেকট্রন শেয়ারিংয়ের মাধ্যমে নিষ্ক্রিয় গ্যাসের অনুরূপ দ্বিত্ব বা অষ্টক অর্জন করে।</span>
          </div>
        </div>
      </div>
    );
  }

  // 13. Metallic Electron Sea Model
  if (type === 'metallicElectronSea') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-xl mb-3 px-1 text-xs">
          <span className="font-bold text-amber-400 uppercase tracking-wider">
            ধাতব বন্ধন: ইলেকট্রন সাগর মডেল (Electron Sea Model)
          </span>
          <span className="text-[10px] text-slate-400 font-mono">পারমাণবিক শাঁস + সঞ্চরণশীল ইলেকট্রন</span>
        </div>
        <div className="w-full max-w-xl bg-slate-900/90 p-4 rounded-xl border border-amber-500/30 flex flex-col items-center">
          {/* Sea of electrons with positive kernels */}
          <div className="relative w-full h-32 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-around px-4">
            {/* Delocalized electron background glow */}
            <div className="absolute inset-0 bg-blue-500/10"></div>

            {/* Delocalized electrons scattered */}
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/80 text-[6px] font-bold text-slate-950 flex items-center justify-center animate-pulse"
                style={{
                  top: `${15 + (i * 19) % 70}%`,
                  left: `${5 + (i * 17) % 90}%`
                }}
              >
                -
              </span>
            ))}

            {/* Atomic Kernels (Positive metal ions) */}
            <div className="grid grid-cols-4 gap-6 relative z-10 w-full justify-items-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-white font-bold text-xs flex flex-col items-center justify-center shadow-lg shadow-amber-500/30 border border-amber-300">
                  <span>M⁺</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full mt-3 text-center text-[10px]">
            <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-amber-300 block">পারমাণবিক শাঁস</span>
              <span className="text-slate-400">ধাতব ক্যাটায়ন জালি</span>
            </div>
            <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-cyan-300 block">ইলেকট্রন সাগর</span>
              <span className="text-slate-400">মুক্ত সঞ্চরণশীল e⁻</span>
            </div>
            <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-emerald-300 block">বৈশিষ্ট্য</span>
              <span className="text-slate-400">উচ্চ পরিবাহিতা ও নমনীয়তা</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 14. Water Polarity & Hydration
  if (type === 'waterPolarityHydration') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-xl mb-3 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            পানির পোলারিটি ও আয়নিক যৌগের দ্রাব্যতা (Hydration)
          </span>
          <span className="text-[10px] text-slate-400 font-mono">তড়িৎ-ঋণাত্মকতার পার্থক্য = ১.৪</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
          {/* Water dipole */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-cyan-500/30 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-cyan-300 mb-1">পানির ডাইপোল গঠন</span>
            <div className="w-32 h-24 relative flex items-center justify-center my-1">
              <div className="w-12 h-12 rounded-full bg-rose-500/30 border border-rose-500 flex flex-col items-center justify-center z-10">
                <span className="text-xs font-bold text-rose-300">O (3.5)</span>
                <span className="text-[9px] font-bold text-rose-400 font-mono">2δ⁻</span>
              </div>
              <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-cyan-500/30 border border-cyan-400 flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold text-cyan-300">H</span>
                <span className="text-[7px] font-bold text-cyan-400 font-mono">δ⁺</span>
              </div>
              <div className="absolute bottom-2 left-2 w-7 h-7 rounded-full bg-cyan-500/30 border border-cyan-400 flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold text-cyan-300">H</span>
                <span className="text-[7px] font-bold text-cyan-400 font-mono">δ⁺</span>
              </div>
            </div>
            <span className="text-[9px] text-slate-400">ΔEN = 3.5 - 2.1 = 1.4 &gt; 0.5 (পোলার সমযোজী)</span>
          </div>

          {/* Hydration breakdown */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex flex-col justify-center space-y-2 text-xs">
            <span className="font-bold text-white border-b border-slate-800 pb-1">লবণের দ্রবীভূত হওয়ার কৌশল</span>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              • পানির ঋণাত্মক প্রান্ত (<span className="text-rose-400 font-bold">O^δ-</span>) লবণের <span className="text-cyan-400 font-bold">Na⁺</span> কে আকর্ষণ করে।
            </p>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              • পানির ধনাত্মক প্রান্ত (<span className="text-cyan-400 font-bold">H^δ+</span>) লবণের <span className="text-emerald-400 font-bold">Cl⁻</span> কে আকর্ষণ করে।
            </p>
            <span className="text-[9px] text-emerald-400 font-semibold bg-emerald-950/30 p-1.5 rounded border border-emerald-500/20">
              ফলস্বরূপ আয়নিক কেলাসের ল্যাটিস বন্ধন ভেঙে পানিতে মুক্ত আয়নে দ্রবীভূত হয়।
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 15. Octet vs Duet Rule
  if (type === 'octetVsDuet') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-xl mb-3 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            অষ্টক ও দুইয়ের নিয়ম (Octet vs Duet Rule)
          </span>
          <span className="text-[10px] text-slate-400 font-mono">ব্যতিক্রম: সংকোচন ও সম্প্রসারণ</span>
        </div>
        <div className="grid grid-cols-3 gap-2.5 w-full max-w-xl text-center">
          {/* Octet Rule */}
          <div className="bg-slate-900/90 rounded-xl p-2.5 border border-cyan-500/30 flex flex-col justify-between">
            <span className="text-xs font-bold text-cyan-300">অষ্টক নিয়ম (Octet)</span>
            <div className="my-2 p-2 bg-slate-950 rounded-lg">
              <span className="text-base font-bold text-cyan-400 font-mono">৮ e⁻</span>
              <span className="text-[9px] text-slate-400 block mt-0.5">সর্বশেষ শক্তিস্তরে</span>
            </div>
            <span className="text-[10px] text-slate-300">উদা: CH₄, H₂O, NaCl</span>
          </div>

          {/* Duet Rule */}
          <div className="bg-slate-900/90 rounded-xl p-2.5 border border-emerald-500/30 flex flex-col justify-between">
            <span className="text-xs font-bold text-emerald-300">দুইয়ের নিয়ম (Duet)</span>
            <div className="my-2 p-2 bg-slate-950 rounded-lg">
              <span className="text-base font-bold text-emerald-400 font-mono">২ e⁻ (জোড়)</span>
              <span className="text-[9px] text-slate-400 block mt-0.5">He এর কাঠামো</span>
            </div>
            <span className="text-[10px] text-slate-300">উদা: H₂, Li⁺, Be²⁺, CH₄</span>
          </div>

          {/* Exceptions */}
          <div className="bg-slate-900/90 rounded-xl p-2.5 border border-amber-500/30 flex flex-col justify-between">
            <span className="text-xs font-bold text-amber-300">অষ্টক ব্যতিক্রম</span>
            <div className="my-1 text-left space-y-1 text-[10px]">
              <div>
                <span className="text-rose-400 font-bold">সংকোচন (৬ e⁻): </span>
                <span className="text-slate-300">BF₃, BeCl₂</span>
              </div>
              <div>
                <span className="text-purple-400 font-bold">সম্প্রসারণ (&gt;৮ e⁻): </span>
                <span className="text-slate-300">PCl₅ (১০), SF₆ (১২)</span>
              </div>
            </div>
            <span className="text-[9px] text-amber-400 font-semibold mt-1">দুইয়ের নিয়ম অধিকতর আধুনিক</span>
          </div>
        </div>
      </div>
    );
  }

  // 10. Periodic / Atomic Models Timeline
  if (type === 'atomicTimeline' || type === 'atomicModelTimeline' || type === 'timeline') {
    return (
      <div className="w-full h-full min-h-[240px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 text-center select-none">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
          পরমাণুর মডেলের ঐতিহাসিক বিবর্তন / Atomic Model Timeline
        </span>
        <div className="flex flex-wrap items-center justify-center w-full max-w-xl text-xs text-slate-300 pt-2 gap-2">
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 space-y-0.5 min-w-[100px]">
            <strong className="text-cyan-400 block">ডেমোক্রিটাস</strong>
            <span className="text-[10px] text-slate-400 block">Democritus (Atomos)</span>
            <span className="text-[9px] text-slate-500 font-mono">খ্রিষ্টপূর্ব ৪০০ অব্দ</span>
          </div>
          <span className="text-slate-600 font-bold">→</span>
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 space-y-0.5 min-w-[100px]">
            <strong className="text-cyan-400 block">ডাল্টন পরমাণুবাদ</strong>
            <span className="text-[10px] text-slate-400 block">Dalton Atomic Model</span>
            <span className="text-[9px] text-slate-500 font-mono">১৮০৩ সাল</span>
          </div>
          <span className="text-slate-600 font-bold">→</span>
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 space-y-0.5 min-w-[100px]">
            <strong className="text-cyan-400 block">রাদারফোর্ড মডেল</strong>
            <span className="text-[10px] text-slate-400 block">Rutherford Model</span>
            <span className="text-[9px] text-slate-500 font-mono">১৯১১ সাল</span>
          </div>
          <span className="text-slate-600 font-bold">→</span>
          <div className="p-2 bg-slate-900 rounded-lg border border-emerald-500/50 space-y-0.5 min-w-[100px]">
            <strong className="text-emerald-400 block">বোর মডেল</strong>
            <span className="text-[10px] text-emerald-300 block">Bohr Model</span>
            <span className="text-[9px] text-slate-500 font-mono">১৯১৩ সাল</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // PHYSICS CHAPTER 4: WORK, POWER, ENERGY DIAGRAMS
  // =========================================================================
  if (type === 'workAngleVectors') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-amber-400 uppercase tracking-wider">
            কাজের সমীকরণ ও ভেক্টর কোণ: W = F · s · cosθ
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            বল (F) ও সরণ (s) এর মধ্যবর্তী কোণ θ
          </span>
        </div>
        <svg viewBox="0 0 600 200" className="w-full max-w-2xl h-auto overflow-visible font-sans text-xs">
          <rect x="20" y="20" width="560" height="160" rx="8" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
          
          {/* Surface line */}
          <line x1="50" y1="140" x2="550" y2="140" stroke="#475569" strokeWidth="3" />
          <line x1="50" y1="145" x2="550" y2="145" stroke="#334155" strokeWidth="1" strokeDasharray="6 4" />
          
          {/* Object Block */}
          <rect x="180" y="90" width="80" height="50" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="220" y="120" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">ভর (m)</text>
          
          {/* Displacement Vector s */}
          <defs>
            <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
            </marker>
            <marker id="arrowCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>
            <marker id="arrowRose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#fb7185" />
            </marker>
          </defs>
          
          <line x1="260" y1="115" x2="420" y2="115" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowAmber)" />
          <text x="340" y="105" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">সরণ ভেক্টর (s)</text>
          
          {/* Force Vector F at angle theta */}
          <line x1="260" y1="115" x2="380" y2="45" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrowCyan)" />
          <text x="340" y="45" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">বল ভেক্টর (F)</text>
          
          {/* Angle arc */}
          <path d="M 300 115 A 40 40 0 0 0 292 90" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="3 3" />
          <text x="315" y="100" fill="#e2e8f0" fontSize="12" fontWeight="bold">θ</text>
          
          {/* 3 Work cases pill badges */}
          <g transform="translate(420, 35)">
            <rect x="0" y="0" width="145" height="34" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
            <text x="72" y="15" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">θ &lt; ৯০° (ধনাত্মক কাজ)</text>
            <text x="72" y="28" textAnchor="middle" fill="#94a3b8" fontSize="8">W = + Fs cosθ</text>
          </g>
          <g transform="translate(420, 75)">
            <rect x="0" y="0" width="145" height="34" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
            <text x="72" y="15" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">θ = ৯০° (শূন্য কাজ)</text>
            <text x="72" y="28" textAnchor="middle" fill="#94a3b8" fontSize="8">cos ৯০° = ০ → W = ০</text>
          </g>
          <g transform="translate(420, 115)">
            <rect x="0" y="0" width="145" height="34" rx="6" fill="#0f172a" stroke="#fb7185" strokeWidth="1.2" />
            <text x="72" y="15" textAnchor="middle" fill="#fb7185" fontSize="9" fontWeight="bold">θ &gt; ৯০° (ঋণাত্মক কাজ)</text>
            <text x="72" y="28" textAnchor="middle" fill="#94a3b8" fontSize="8">বলের বিপরীতে বাধা বলের কাজ</text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'energyConservation') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-amber-400 uppercase tracking-wider">
            যান্ত্রিক শক্তির নিত্যতা: E = Ep + Ek = ধ্রুবক
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            সর্বোচ্চ উচ্চতা → মধ্যবর্তী বিন্দু → ভূমি স্পর্শ
          </span>
        </div>
        <svg viewBox="0 0 600 200" className="w-full max-w-2xl h-auto overflow-visible font-sans text-xs">
          <rect x="20" y="20" width="560" height="160" rx="8" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
          
          {/* Free Fall Tower */}
          <line x1="120" y1="40" x2="120" y2="160" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="80" y1="160" x2="520" y2="160" stroke="#475569" strokeWidth="3" />
          <text x="100" y="172" fill="#94a3b8" fontSize="9">ভূমি (h = ০)</text>
          
          {/* Point A (Top) */}
          <circle cx="120" cy="50" r="14" fill="#f59e0b" filter="drop-shadow(0 0 8px #f59e0b)" />
          <text x="120" y="54" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">A</text>
          <g transform="translate(150, 36)">
            <text x="0" y="10" fill="#f59e0b" fontSize="10" fontWeight="bold">বিন্দু A (সর্বোচ্চ উচ্চতা h):</text>
            <text x="0" y="22" fill="#94a3b8" fontSize="9">Ep = mgh, Ek = 0 → মোট শক্তি E = mgh</text>
          </g>

          {/* Point B (Middle) */}
          <circle cx="120" cy="105" r="14" fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)" />
          <text x="120" y="109" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">B</text>
          <g transform="translate(150, 92)">
            <text x="0" y="10" fill="#38bdf8" fontSize="10" fontWeight="bold">বিন্দু B (মাঝামাঝি উচ্চতা):</text>
            <text x="0" y="22" fill="#94a3b8" fontSize="9">Ep = mg(h-x), Ek = mgx → মোট শক্তি E = mgh</text>
          </g>

          {/* Point C (Ground) */}
          <circle cx="120" cy="155" r="14" fill="#10b981" filter="drop-shadow(0 0 8px #10b981)" />
          <text x="120" y="159" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">C</text>
          <g transform="translate(150, 142)">
            <text x="0" y="10" fill="#10b981" fontSize="10" fontWeight="bold">বিন্দু C (ভূমি স্পর্শ করার মুহূর্তে):</text>
            <text x="0" y="22" fill="#94a3b8" fontSize="9">Ep = 0, Ek = ½ mv² = mgh → মোট শক্তি E = mgh</text>
          </g>

          {/* Rollercoaster curve illustration */}
          <path d="M 400 50 Q 450 160 500 110 T 550 155" fill="none" stroke="#eab308" strokeWidth="4" />
          <circle cx="400" cy="50" r="7" fill="#f59e0b" />
          <circle cx="460" cy="150" r="7" fill="#10b981" />
          <circle cx="500" cy="110" r="7" fill="#38bdf8" />
          <text x="475" y="45" textAnchor="middle" fill="#eab308" fontSize="9" fontWeight="bold">রোলার কোস্টার ট্র‍্যাক</text>
        </svg>
      </div>
    );
  }

  // =========================================================================
  // PHYSICS CHAPTER 5: PRESSURE, HYDRAULICS & BUOYANCY DIAGRAMS
  // =========================================================================
  if (type === 'hydraulicPressSvg') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            প্যাসকেলের সূত্র ও বল বৃদ্ধিকরণ নীতি: F₂ = F₁ · (A₂ / A₁)
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            চাপ সঞ্চালন P₁ = P₂
          </span>
        </div>
        <svg viewBox="0 0 600 200" className="w-full max-w-2xl h-auto overflow-visible font-sans text-xs">
          <rect x="20" y="20" width="560" height="160" rx="8" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
          
          {/* Hydraulic U-Tube liquid channel */}
          <path d="M 120 70 L 120 150 L 480 150 L 480 80 L 410 80 L 410 130 L 190 130 L 190 70 Z" fill="#0284c7" fillOpacity="0.4" stroke="#0ea5e9" strokeWidth="2" />
          
          {/* Small Piston (Left) */}
          <rect x="122" y="60" width="66" height="18" rx="2" fill="#64748b" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="155" y1="28" x2="155" y2="58" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowAmber)" />
          <text x="155" y="25" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">F₁ (প্রযুক্ত ক্ষুদ্র বল)</text>
          <text x="155" y="95" textAnchor="middle" fill="#bae6fd" fontSize="9">ক্ষেত্রফল A₁</text>

          {/* Large Piston (Right) */}
          <rect x="412" y="70" width="66" height="24" rx="2" fill="#64748b" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="445" y1="68" x2="445" y2="34" stroke="#10b981" strokeWidth="4" markerEnd="url(#arrowGreen)" />
          <text x="445" y="25" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">F₂ (বহুগুণ বর্ধিত বল)</text>
          <text x="445" y="110" textAnchor="middle" fill="#bae6fd" fontSize="9">ক্ষেত্রফল A₂</text>

          {/* Center equation display */}
          <g transform="translate(230, 75)">
            <rect x="0" y="0" width="140" height="45" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <text x="70" y="18" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">P₁ = P₂ (সমান চাপ)</text>
            <text x="70" y="34" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">F₂ = F₁ × (A₂ / A₁)</text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'archimedesBeaker') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-cyan-400 uppercase tracking-wider">
            আর্কিমিডিসের নীতি ও প্লবতা: FB = V · ρ · g
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            অপসারিত তরলের ওজন = প্লবতা (উর্ধ্বমুখী বল)
          </span>
        </div>
        <svg viewBox="0 0 600 200" className="w-full max-w-2xl h-auto overflow-visible font-sans text-xs">
          <rect x="20" y="20" width="560" height="160" rx="8" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
          
          {/* Overflow Beaker */}
          <rect x="120" y="60" width="140" height="100" rx="4" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
          {/* Spout */}
          <path d="M 260 70 L 300 95 L 300 100 L 260 80 Z" fill="#0284c7" fillOpacity="0.6" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Measuring Cylinder (Catching displaced liquid) */}
          <rect x="300" y="90" width="50" height="70" rx="3" fill="#0284c7" fillOpacity="0.3" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="325" y="172" textAnchor="middle" fill="#7dd3fc" fontSize="9">অপসারিত তরল</text>

          {/* Submerged Cylinder inside Beaker */}
          <rect x="160" y="85" width="60" height="55" rx="4" fill="#64748b" stroke="#f59e0b" strokeWidth="2" />
          <text x="190" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">বস্তু (V)</text>

          {/* Downward Gravity Weight W */}
          <line x1="190" y1="140" x2="190" y2="160" stroke="#fb7185" strokeWidth="2.5" markerEnd="url(#arrowRose)" />
          <text x="215" y="155" fill="#fb7185" fontSize="9">ওজন W = mg</text>

          {/* Upward Buoyancy Force FB */}
          <line x1="190" y1="85" x2="190" y2="60" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowGreen)" />
          <text x="190" y="52" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">প্লবতা FB = Vρg</text>

          {/* Rules Card */}
          <g transform="translate(380, 45)">
            <rect x="0" y="0" width="180" height="110" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
            <text x="12" y="22" fill="#38bdf8" fontSize="10" fontWeight="bold">নিমজ্জন ও ভাসনের শর্ত:</text>
            <text x="12" y="44" fill="#34d399" fontSize="9">১. W &lt; FB → ভাসবে (Float)</text>
            <text x="12" y="66" fill="#fbbf24" fontSize="9">২. W = FB → সম্পূর্ণ নিমজ্জিত ভেসে থাকবে</text>
            <text x="12" y="88" fill="#fb7185" fontSize="9">৩. W &gt; FB → ডুবে যাবে (Sink)</text>
          </g>
        </svg>
      </div>
    );
  }

  // =========================================================================
  // BIOLOGY CHAPTER 2 & 3: LIVING CELL, TISSUE & MITOSIS DIAGRAMS
  // =========================================================================
  if (type === 'plantVsAnimalCellSvg') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-emerald-400 uppercase tracking-wider">
            উদ্ভিদকোষ বনাম প্রাণীকোষের তুলনামূলক গঠন
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            কোষপ্রাচীর ও প্লাস্টিড বনাম সেন্ট্রোজোম
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          {/* Plant Cell (Hexagonal/Rectangular with thick wall) */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-emerald-500/50 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-emerald-300 mb-1">উদ্ভিদকোষ (Plant Cell)</span>
            <div className="w-full h-32 bg-slate-950 rounded-lg border-2 border-emerald-500 relative flex items-center justify-center p-2 mb-2 overflow-hidden">
              {/* Outer Cell Wall */}
              <div className="absolute inset-1 border-2 border-emerald-700/60 rounded" />
              {/* Large Central Vacuole */}
              <div className="w-20 h-16 rounded-2xl bg-cyan-500/30 border border-cyan-400 flex items-center justify-center">
                <span className="text-[8px] text-cyan-200 font-bold">বৃহৎ কোষগহ্বর</span>
              </div>
              {/* Chloroplasts */}
              <div className="absolute top-2 left-3 w-5 h-3 rounded-full bg-emerald-500 border border-emerald-300" title="ক্লোরোপ্লাস্ট" />
              <div className="absolute bottom-2 left-4 w-5 h-3 rounded-full bg-emerald-500 border border-emerald-300" />
              {/* Nucleus pushed to side */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-purple-600/70 border border-purple-400 flex items-center justify-center">
                <span className="text-[7px] text-purple-200">নিউক্লিয়াস</span>
              </div>
            </div>
            <span className="text-[10px] text-emerald-300 font-semibold">সেলুলোজ নির্মিত জড় কোষপ্রাচীর</span>
            <span className="text-[9px] text-slate-400">ক্লোরোপ্লাস্ট ও প্লাস্টিড বিদ্যমান · সেন্ট্রোজোম নেই</span>
          </div>

          {/* Animal Cell (Spherical, No wall, small vacuoles) */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-pink-500/50 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-pink-300 mb-1">প্রাণীকোষ (Animal Cell)</span>
            <div className="w-full h-32 bg-slate-950 rounded-full border-2 border-pink-400/80 relative flex items-center justify-center p-2 mb-2 overflow-hidden">
              {/* Centered Nucleus */}
              <div className="w-10 h-10 rounded-full bg-purple-600/70 border-2 border-purple-300 flex items-center justify-center">
                <span className="text-[8px] text-purple-100 font-bold">নিউক্লিয়াস</span>
              </div>
              {/* Centrosome */}
              <div className="absolute top-4 right-8 w-4 h-4 rounded-full bg-amber-500/80 border border-amber-300 flex items-center justify-center">
                <span className="text-[6px] text-amber-950 font-black">C</span>
              </div>
              {/* Mitochondria */}
              <div className="absolute bottom-4 left-6 w-6 h-3 rounded-full bg-orange-500/70 border border-orange-300" />
              <div className="absolute top-6 left-8 w-5 h-3 rounded-full bg-orange-500/70 border border-orange-300" />
            </div>
            <span className="text-[10px] text-pink-300 font-semibold">কোষপ্রাচীর অনুপস্থিত (প্লাজমালেমা)</span>
            <span className="text-[9px] text-slate-400">সেন্ট্রোজোম উপস্থিত · প্লাস্টিড অনুপস্থিত</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'mitosisStages') {
    return (
      <div className="w-full h-full min-h-[260px] max-h-96 bg-slate-950 p-4 flex flex-col items-center justify-center rounded-xl border border-slate-800 select-none">
        <div className="flex items-center justify-between w-full max-w-2xl mb-2 px-1 text-xs">
          <span className="font-bold text-emerald-400 uppercase tracking-wider">
            মাইটোসিস কোষ বিভাজনের ৫টি পর্যায়ক্রম
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            মাতৃকোষ (2n) → ২টি সমগুণসম্পন্ন অপত্য কোষ (2n)
          </span>
        </div>
        <div className="grid grid-cols-5 gap-2 w-full max-w-2xl text-center">
          {[
            { step: '১. প্রোফেজ', sub: 'ক্রোমোজোম ঘনীভবন', color: 'border-blue-500', badge: 'bg-blue-500/20 text-blue-300' },
            { step: '২. প্রো-মেটাফেজ', sub: 'স্পিন্ডল যন্ত্র সৃষ্টি', color: 'border-cyan-500', badge: 'bg-cyan-500/20 text-cyan-300' },
            { step: '৩. মেটাফেজ', sub: 'বিষুবীয় অঞ্চলে বিন্যাস', color: 'border-emerald-500', badge: 'bg-emerald-500/20 text-emerald-300' },
            { step: '৪. অ্যানাফেজ', sub: 'মেরুমুখী চলন (V,L,J,I)', color: 'border-amber-500', badge: 'bg-amber-500/20 text-amber-300' },
            { step: '৫. টেলোফেজ', sub: 'নিউক্লিয়াস পুনর্গঠন', color: 'border-purple-500', badge: 'bg-purple-500/20 text-purple-300' },
          ].map((s, idx) => (
            <div key={idx} className={`p-2 rounded-xl bg-slate-900 border ${s.color} flex flex-col items-center justify-between h-36`}>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${s.badge}`}>{s.step}</span>
              <div className="w-12 h-12 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center">
                <span className="text-xs font-mono font-bold text-white">{idx + 1}</span>
              </div>
              <span className="text-[9px] text-slate-300 leading-tight">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY 2.2.1: FLUID MOSAIC MODEL & CELL MEMBRANE (কোষ ঝিল্লি)
  // -------------------------------------------------------------
  if (type === 'fluidMosaicMembrane') {
    return (
      <div className="w-full h-full min-h-[300px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-sky-500/40 select-none overflow-hidden">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold border border-sky-500/30 text-[11px]">
              ২.২.১ কোষ ঝিল্লি
            </span>
            <span className="font-bold text-white">প্লাজমা মেমব্রেনের ফ্লুইড মোজাইক মডেল (Singer & Nicolson, 1972)</span>
          </div>
          <span className="text-[10px] text-sky-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-mono">
            ফসফোলিপিড বাইলেয়ার + প্রোটিন মোজাইক
          </span>
        </div>

        {/* SVG Diagram Canvas */}
        <div className="relative w-full h-52 my-1 bg-slate-900/60 rounded-lg border border-slate-800/80 p-2 flex items-center justify-center">
          <svg viewBox="0 0 700 240" className="w-full h-full max-h-52">
            <defs>
              <linearGradient id="headGradTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="headGradBot" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="channelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>

            {/* Extracellular / Intracellular Zones */}
            <rect x="0" y="0" width="700" height="45" fill="#082f49" fillOpacity="0.25" />
            <text x="20" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">বহিঃকোষীয় তরল (Extracellular Fluid)</text>
            <rect x="0" y="195" width="700" height="45" fill="#1e1b4b" fillOpacity="0.25" />
            <text x="20" y="222" fill="#c084fc" fontSize="11" fontWeight="bold">কোষীয় সাইটোপ্লাজম (Intracellular Cytosol)</text>

            {/* Bilayer Phospholipid Heads and Tails */}
            {/* Top Leaflet (y=65) */}
            {[25, 60, 95, 130, 165, 200, 360, 395, 430, 465, 500, 535, 570, 605, 640, 675].map((x, i) => (
              <g key={`top-${i}`}>
                {/* Polar Head */}
                <circle cx={x} cy="65" r="11" fill="url(#headGradTop)" stroke="#7dd3fc" strokeWidth="1.5" />
                {/* Wavy Hydrophobic Tails */}
                <path d={`M ${x - 4} 76 Q ${x - 8} 95 ${x - 4} 115`} fill="none" stroke="#facc15" strokeWidth="2.5" />
                <path d={`M ${x + 4} 76 Q ${x + 8} 95 ${x + 4} 115`} fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              </g>
            ))}

            {/* Bottom Leaflet (y=175) */}
            {[25, 60, 95, 130, 165, 200, 360, 395, 430, 465, 500, 535, 570, 605, 640, 675].map((x, i) => (
              <g key={`bot-${i}`}>
                {/* Wavy Tails pointing up */}
                <path d={`M ${x - 4} 164 Q ${x - 8} 145 ${x - 4} 125`} fill="none" stroke="#facc15" strokeWidth="2.5" />
                <path d={`M ${x + 4} 164 Q ${x + 8} 145 ${x + 4} 125`} fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                {/* Polar Head */}
                <circle cx={x} cy="175" r="11" fill="url(#headGradBot)" stroke="#7dd3fc" strokeWidth="1.5" />
              </g>
            ))}

            {/* Cholesterol molecules embedded in tails */}
            {[112, 412, 588].map((cx, idx) => (
              <rect key={`chol-${idx}`} x={cx - 5} y="105" width="10" height="28" rx="3" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
            ))}

            {/* Large Transmembrane Integral Channel Protein */}
            <g>
              <rect x="235" y="48" width="105" height="144" rx="20" fill="url(#channelGrad)" stroke="#fda4af" strokeWidth="2" filter="drop-shadow(0 2px 8px rgba(244,63,94,0.4))" />
              {/* Central transport pore tunnel */}
              <ellipse cx="287" cy="55" rx="18" ry="7" fill="#881337" />
              <path d="M 270 55 C 270 120, 274 120, 274 185" stroke="#ffe4e6" strokeWidth="2" strokeDasharray="3 3" fill="none" />
              <path d="M 304 55 C 304 120, 300 120, 300 185" stroke="#ffe4e6" strokeWidth="2" strokeDasharray="3 3" fill="none" />
              <ellipse cx="287" cy="185" rx="18" ry="7" fill="#881337" />

              {/* Ion passing through channel */}
              <circle cx="287" cy="115" r="6" fill="#34d399" stroke="#059669" strokeWidth="1.5" />
              <text x="287" y="119" fill="#064e3b" fontSize="8" fontWeight="bold" textAnchor="middle">Na⁺</text>
            </g>

            {/* Peripheral Protein on inside surface */}
            <rect x="470" y="185" width="60" height="26" rx="8" fill="#8b5cf6" stroke="#c4b5fd" strokeWidth="1.5" />
            <text x="500" y="202" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">পেরিফেরাল প্রোটিন</text>

            {/* Carbohydrate Antenna / Glycocalyx Chains on Extracellular Side */}
            <g stroke="#22c55e" strokeWidth="2" fill="#4ade80">
              {/* Attached to Integral Protein (Glycoprotein) */}
              <line x1="260" y1="48" x2="250" y2="25" />
              <circle cx="250" cy="25" r="4" />
              <line x1="250" y1="25" x2="238" y2="12" />
              <circle cx="238" cy="12" r="3.5" />
              <line x1="250" y1="25" x2="265" y2="14" />
              <circle cx="265" cy="14" r="3.5" />

              {/* Attached to Lipid (Glycolipid) */}
              <line x1="130" y1="54" x2="125" y2="30" />
              <circle cx="125" cy="30" r="4" fill="#a3e635" />
              <line x1="125" y1="30" x2="115" y2="15" />
              <circle cx="115" cy="15" r="3.5" fill="#a3e635" />
            </g>

            {/* Labels and Callouts */}
            <text x="250" y="8" fill="#86efac" fontSize="9" fontWeight="bold">গ্লাইকোপ্রোটিন (শর্করা শৃঙ্খল)</text>
            <text x="90" y="10" fill="#bef264" fontSize="9" fontWeight="bold">গ্লাইকোলিপিড</text>
            <text x="287" y="145" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">ইনটিগ্রাল প্রোটিন টানেল</text>
            <text x="640" y="65" fill="#e0f2fe" fontSize="9" fontWeight="bold">হাইড্রোফিলিক পোলার মাথা</text>
            <text x="640" y="120" fill="#fef08a" fontSize="9" fontWeight="bold">হাইড্রোফোবিক লেজ (ফ্যাটি এসিড)</text>
          </svg>
        </div>

        {/* Informative Legend Cards */}
        <div className="grid grid-cols-4 gap-2 text-[10px] pt-1 border-t border-slate-800">
          <div className="bg-sky-950/40 p-1.5 rounded-lg border border-sky-800/40">
            <strong className="text-sky-300 block">১. ফসফোলিপিড বাইলেয়ার</strong>
            <span className="text-slate-300">পানিগ্রাহী পোলার মাথা বাইরে ও পানিবিদ্বেষী ফ্যাটি এসিড লেজ ভেতরে।</span>
          </div>
          <div className="bg-rose-950/40 p-1.5 rounded-lg border border-rose-800/40">
            <strong className="text-rose-300 block">২. ইনটিগ্রাল প্রোটিন</strong>
            <span className="text-slate-300">ঝিল্লির উভয় প্রান্তে বিস্তৃত থেকে আয়ন ও অণু পরিবহনে চ্যানেল তৈরি করে।</span>
          </div>
          <div className="bg-amber-950/40 p-1.5 rounded-lg border border-amber-800/40">
            <strong className="text-amber-300 block">৩. কোলেস্টেরল ও ফ্লুইডিটি</strong>
            <span className="text-slate-300">লিপিডের ফাঁকে অবস্থান করে ঝিল্লির তরলতা ও স্থিতিস্থাপকতা রক্ষা করে।</span>
          </div>
          <div className="bg-emerald-950/40 p-1.5 rounded-lg border border-emerald-800/40">
            <strong className="text-emerald-300 block">৪. গ্লাইকোক্যালিক্স</strong>
            <span className="text-slate-300">শর্করা শৃঙ্খল কোষকে সুরক্ষা ও অন্যান্য কোষকে শনাক্তকরণে সাহায্য করে।</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY 2.2.2: CELL WALL ARCHITECTURE (উদ্ভিদ কোষপ্রাচীর স্তরবিন্যাস)
  // -------------------------------------------------------------
  if (type === 'cellWallLayers') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">উদ্ভিদ কোষপ্রাচীরের স্তরবিন্যাস (Cell Wall Architecture)</span>
          <span className="text-[10px] text-slate-400 font-mono">মধ্যপর্দা → প্রাথমিক প্রাচীর → গৌণ প্রাচীর → প্লাজমোডেজমাটা</span>
        </div>
        <div className="grid grid-cols-4 gap-2.5 my-2">
          <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/50 flex flex-col justify-between">
            <div className="w-full h-12 bg-amber-500/30 rounded-lg flex items-center justify-center font-bold text-amber-300 text-xs">
              মধ্যপর্দা (Pectin)
            </div>
            <p className="text-[10px] text-slate-300 mt-2">দুটি পাশাপাশি কোষের মিলনস্থল; পেকটিন জাতীয় আঠালো পদার্থ দিয়ে তৈরি।</p>
          </div>
          <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/50 flex flex-col justify-between">
            <div className="w-full h-12 bg-emerald-500/30 rounded-lg flex items-center justify-center font-bold text-emerald-300 text-xs">
              প্রাথমিক প্রাচীর (Cellulose)
            </div>
            <p className="text-[10px] text-slate-300 mt-2">মধ্যপর্দার উপরে গঠিত পাতলা নমনীয় স্তর; সেলুলোজ ও হেমিসেলুলোজে গঠিত।</p>
          </div>
          <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/50 flex flex-col justify-between">
            <div className="w-full h-12 bg-cyan-500/30 rounded-lg flex items-center justify-center font-bold text-cyan-300 text-xs">
              গৌণ প্রাচীর (Lignin)
            </div>
            <p className="text-[10px] text-slate-300 mt-2">স্থায়ী ও পরিণত কোষে গঠিত শক্ত ও পুরু স্তর; লিগনিন ও সুবেরিন জমা হয়।</p>
          </div>
          <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/50 flex flex-col justify-between">
            <div className="w-full h-12 bg-purple-500/30 rounded-lg flex items-center justify-center font-bold text-purple-300 text-xs">
              প্লাজমোডেজমাটা
            </div>
            <p className="text-[10px] text-slate-300 mt-2">দুটি সন্নিহিত কোষের মধ্যে সাইটোপ্লাজমীয় সংযোগ নালী বা সূক্ষ্ম ছিদ্রপথ।</p>
          </div>
        </div>
        <div className="p-2 bg-slate-900/80 rounded-lg text-[10px] text-slate-300 border border-slate-800">
          💡 প্রাণীকোষে কোষপ্রাচীর সম্পূর্ণ অনুপস্থিত থাকে; কেবল প্লাজমালেমা দ্বারা পরিবেষ্টিত।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY: MITOCHONDRIA (মাইটোকন্ড্রিয়া — পাওয়ার হাউজ)
  // -------------------------------------------------------------
  if (type === 'mitochondriaStructure') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">মাইটোকন্ড্রিয়ার সূক্ষ্ম গঠন ও এটিপি উৎপাদন (ATP Synthesis)</span>
          <span className="text-[10px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40 font-mono">
            শ্বসনের পাওয়ার হাউজ (৩৮ ATP)
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <strong className="text-amber-300 text-xs block mb-1">১. দ্বৈত ঝিল্লি আবরণী</strong>
            <p className="text-[10px] text-slate-300 leading-snug">
              মসৃণ বহিঃঝিল্লি এবং ভেতরের দিকে আঙুলের মতো অসংখ্য খাঁজ বিশিষ্ট অন্তঃঝিল্লি।
            </p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <strong className="text-amber-300 text-xs block mb-1">২. ক্রিস্টি ও অক্সিসোম</strong>
            <p className="text-[10px] text-slate-300 leading-snug">
              অন্তঃঝিল্লির ভাঁজকে ক্রিস্টি বলে; এতে দানাযুক্ত F1-ATP সিন্থেজ ও ইলেকট্রন ট্রান্সপোর্ট চেইন থাকে।
            </p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <strong className="text-amber-300 text-xs block mb-1">৩. ম্যাট্রিক্স ও নিজস্ব ডিএনএ</strong>
            <p className="text-[10px] text-slate-300 leading-snug">
              জেলির মতো এনজাইমপূর্ণ ম্যাট্রিক্স, ক্রেবস চক্র ও স্বয়ংক্রিয় বিভাজনে সক্ষম নিজস্ব 70S রাইবোসোম।
            </p>
          </div>
        </div>
        <div className="p-2.5 bg-amber-950/30 rounded-lg text-[10px] text-amber-200 border border-amber-800/40 flex items-center justify-between">
          <span>শ্বসন সমীকরণ: C₆H₁₂O₆ + 6O₂ + 6H₂O → 6CO₂ + 12H₂O + শক্তি (৩৮ ATP)</span>
          <span className="font-bold text-amber-400">Krebs Cycle + ETC</span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY: CHLOROPLAST (প্লাস্টিড ও ক্লোরোপ্লাস্ট — খাদ্য কারখানা)
  // -------------------------------------------------------------
  if (type === 'chloroplastStructure') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">ক্লোরোপ্লাস্ট ও সালোকসংশ্লেষণ (Chloroplast Ultrastructure)</span>
          <span className="text-[10px] text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 font-mono">
            উদ্ভিদকোষের রান্নাঘর
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 my-2 text-[10px]">
          <div className="p-2.5 bg-slate-900 rounded-xl border border-emerald-500/40">
            <strong className="text-emerald-300 block mb-1">দ্বিস্তর আবরণী</strong>
            <span className="text-slate-300">লিপিড ও প্রোটিন নির্মিত বৈষম্যভেদ্য দ্বৈত ঝিল্লি।</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-xl border border-emerald-500/40">
            <strong className="text-emerald-300 block mb-1">স্ট্রোমা (Stroma)</strong>
            <span className="text-slate-300">হাইড্রোফিলিক ম্যাট্রিক্স যেখানে ক্যালভিন চক্রে কার্বন ডাই-অক্সাইড বিজারণ ঘটে।</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-xl border border-emerald-500/40">
            <strong className="text-emerald-300 block mb-1">গ্রানাম ও থাইলাকয়েড</strong>
            <span className="text-slate-300">চাকতির মতো থাইলাকয়েডের স্তূপ; ক্লোরোফিল রঞ্জকে আলোক বিক্রিয়া ঘটে।</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-xl border border-emerald-500/40">
            <strong className="text-emerald-300 block mb-1">স্ট্রোমা ল্যামেলি</strong>
            <span className="text-slate-300">একটি গ্রানামের সাথে অন্য গ্রানামের সংযোগকারী নালীকা।</span>
          </div>
        </div>
        <div className="p-2 bg-emerald-950/30 rounded-lg text-[10px] text-emerald-200 border border-emerald-800/40 text-center font-mono">
          6CO₂ + 6H₂O + আলোক শক্তি → C₆H₁₂O₆ (গ্লুকোজ) + 6O₂ ↑
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY: NUCLEUS & CHROMOSOME (নিউক্লিয়াস ও ডিএনএ)
  // -------------------------------------------------------------
  if (type === 'nucleusStructure') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-purple-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-purple-400">নিউক্লিয়াস — কোষের প্রাণকেন্দ্র (Nucleus Architecture)</span>
          <span className="text-[10px] text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40 font-mono">
            ডিএনএ, আরএনএ ও প্রোটিন নিয়ন্ত্রণ
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 my-2 text-[10px]">
          <div className="p-2.5 bg-slate-900 rounded-xl border border-purple-500/40">
            <strong className="text-purple-300 block mb-1">১. নিউক্লিয়ার আবরণী</strong>
            <span className="text-slate-300">দ্বিস্তরী পর্দা যাতে অসংখ্য নিউক্লিয়ার রন্ধ্র থাকে।</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-xl border border-purple-500/40">
            <strong className="text-purple-300 block mb-1">২. নিউক্লিওপ্লাজম</strong>
            <span className="text-slate-300">স্বচ্ছ জেলির মতো তরল যা ক্রোমাটিন তন্তুকে ধারণ করে।</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-xl border border-purple-500/40">
            <strong className="text-purple-300 block mb-1">৩. নিউক্লিওলাস</strong>
            <span className="text-slate-300">গাঢ় গোলাকার বস্তু; রাইবোসোমাল আরএনএ (rRNA) তৈরির কেন্দ্র।</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-xl border border-purple-500/40">
            <strong className="text-purple-300 block mb-1">৪. ক্রোমাটিন জালিকা</strong>
            <span className="text-slate-300">ডিএনএ ও হিস্টোন প্রোটিনে গঠিত বংশগতির মূল নির্দেশিকা।</span>
          </div>
        </div>
        <div className="p-2 bg-purple-950/30 rounded-lg text-[10px] text-purple-200 border border-purple-800/40">
          মানবদেহের প্রতি কোষে ২৩ জোড়া (৪৬টি) ক্রোমোজোম থাকে — ২২ জোড়া অটোসোম ও ১ জোড়া সেক্স ক্রোমোজোম।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY: PLANT TISSUES (উদ্ভিদ টিস্যু — প্যারেনকাইমা, কোলেনকাইমা, জাইলেম)
  // -------------------------------------------------------------
  if (type === 'plantTissuesClassification') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-teal-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-teal-400">উদ্ভিদ টিস্যুর শ্রেণিবিভাগ (Plant Tissues: Simple & Complex)</span>
          <span className="text-[10px] text-teal-300 font-mono">সরল টিস্যু + সংবহন টিস্যু (Xylem & Phloem)</span>
        </div>
        <div className="grid grid-cols-5 gap-2 my-2 text-[10px]">
          <div className="p-2 bg-slate-900 rounded-xl border border-teal-500/40">
            <strong className="text-teal-300 block mb-1">প্যারেনকাইমা</strong>
            <span className="text-slate-300">পাতলা সেলুলোজ প্রাচীর, আন্তঃকোষীয় ফাঁকযুক্ত, খাদ্য তৈরি ও সঞ্চয় করে।</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-xl border border-teal-500/40">
            <strong className="text-teal-300 block mb-1">কোলেনকাইমা</strong>
            <span className="text-slate-300">কোষপ্রাচীরের কোণায় পেকটিন জমা হয়ে পুরু; উদ্ভিদকে দৃঢ়তা ও নমনীয়তা দেয়।</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-xl border border-teal-500/40">
            <strong className="text-teal-300 block mb-1">স্ক্লেরেনকাইমা</strong>
            <span className="text-slate-300">পুরু লিগনিনযুক্ত মৃত কোষ; ফাইবার ও স্ক্লেরাইড (পাথুরে কোষ)।</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-xl border border-blue-500/40">
            <strong className="text-blue-300 block mb-1">জাইলেম (উর্ধ্বমুখী)</strong>
            <span className="text-slate-300">মূল থেকে পানি ও খনিজ লবণ পাতায় পরিবহন করে (ট্র্যাকিড ও ভেসেল)।</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-xl border border-emerald-500/40">
            <strong className="text-emerald-300 block mb-1">ফ্লোয়েম (দ্বিমুখী)</strong>
            <span className="text-slate-300">পাতায় তৈরি খাদ্য সারা দেহে পরিবহন করে (সিভনল ও সঙ্গীকোষ)।</span>
          </div>
        </div>
        <div className="p-2 bg-slate-900/80 rounded-lg text-[10px] text-slate-300 border border-slate-800">
          জাইলেম ও ফ্লোয়েম একত্রে ভাস্কুলার বান্ডেল বা সংবহন পুল তৈরি করে যা উদ্ভিদের জীবন বাঁচায়।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS: ZERO WORK & NORMAL FORCES (শূন্য কাজ)
  // -------------------------------------------------------------
  if (type === 'zeroWorkNormal') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">বল ও সরণের কোণ ৯০° হলে কৃতকাজ শূন্য (Zero Work when θ = 90°)</span>
          <span className="text-[10px] text-amber-300 font-mono">W = F·s·cos(90°) = 0</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-emerald-400 block mb-1">১. ধনাত্মক কাজ (θ &lt; ৯০°)</span>
            <p className="text-[11px] text-slate-300">বলের দিকে সরণ ঘটলে cosθ &gt; 0, বল দ্বারা কাজ ধনাত্মক। যেমন মুক্তভাবে বস্তু নিচে পড়া।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-amber-500/50 bg-amber-950/20">
            <span className="font-bold text-amber-300 block mb-1">২. শূন্য কাজ (θ = ৯০°)</span>
            <p className="text-[11px] text-slate-300">বল ও সরণ পরস্পর লম্ব হলে cos90° = 0, সুতরাং কোনো কাজ হয় না। যেমন মাথায় বোঝা নিয়ে অনুভূমিক হাঁটা।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-rose-400 block mb-1">৩. ঋণাত্মক কাজ (θ &gt; ৯০°)</span>
            <p className="text-[11px] text-slate-300">বলের বিপরীত দিকে সরণ হলে cosθ &lt; 0, বলের বিরুদ্ধে কাজ। যেমন ঘর্ষণ বল বা ওপর দিকে ঢিল ছোঁড়া।</p>
          </div>
        </div>
        <div className="p-2 bg-amber-950/30 rounded-lg text-[10px] text-amber-200 border border-amber-800/40 text-center font-mono">
          বৃত্তাকার কক্ষপথে ঘূর্ণনরত উপগ্রহের ওপর পৃথিবীর অভিকর্ষ বল সরণের লম্ব হওয়ায় কৃতকাজ W = 0 J।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS: KINETIC & POTENTIAL ENERGY (গতিশক্তি ও বিভবশক্তি)
  // -------------------------------------------------------------
  if (type === 'kineticEnergyDerivation') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-sky-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-sky-400">গতিশক্তি ও এর গাণিতিক প্রতিপাদন (Kinetic Energy: Ek = ½mv²)</span>
          <span className="text-[10px] text-sky-300 font-mono">Ek = W = F·s = (ma)·s</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">ধাপ ১: বল ও ত্বরণ</strong>
            <p className="text-[11px] text-slate-300 font-mono">F = m·a</p>
            <p className="text-[10px] text-slate-400 mt-1">নিউটনিয়ান গতিসূত্র অনুসারে স্থির বস্তুর ওপর প্রযুক্ত বল।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">ধাপ ২: গতির তৃতীয় সূত্র</strong>
            <p className="text-[11px] text-slate-300 font-mono">v² = u² + 2as</p>
            <p className="text-[10px] text-slate-400 mt-1">আদিবেগ u = 0 হলে, a·s = v² / 2</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-sky-500/50 bg-sky-950/20">
            <strong className="text-sky-300 block mb-1">ধাপ ৩: কৃতকাজ ও সমীকরণ</strong>
            <p className="text-[11px] text-sky-200 font-mono font-bold">W = m·(as) = ½ m v²</p>
            <p className="text-[10px] text-slate-300 mt-1">অতএব অর্জিত গতিশক্তি Ek = ½mv²।</p>
          </div>
        </div>
        <div className="p-2 bg-sky-950/30 rounded-lg text-[10px] text-sky-200 border border-sky-800/40 flex items-center justify-between">
          <span>ভরবেগ p = mv হলে গতিশক্তির বিকল্প রূপ:</span>
          <span className="font-mono font-bold text-sky-300 text-xs">Ek = p² / (2m)</span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS: DEPTH PRESSURE (তরলের অভ্যন্তরে চাপ P = hρg)
  // -------------------------------------------------------------
  if (type === 'depthPressure') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">তরলের অভ্যন্তরে চাপ ও এর সমীকরণ (Fluid Pressure: P = hρg)</span>
          <span className="text-[10px] text-cyan-300 font-mono">P = F / A = (Ahρg) / A = hρg</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-1">h = তরলের গভীরতা (m)</span>
            <p className="text-[10px] text-slate-300">গভীরতা যত বাড়ে তরল স্তম্ভের ওজন বৃদ্ধির কারণে চাপও সমহারে বৃদ্ধি পায় (P ∝ h)।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-1">ρ = তরলের ঘনত্ব (kg/m³)</span>
            <p className="text-[10px] text-slate-300">পানির ঘনত্ব ১০০০ kg/m³ হলেও পারদের ঘনত্ব ১৩,৬০০ kg/m³ হওয়ায় পারদের চাপ ১৩.৬ গুণ বেশি।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-1">g = অভিকর্ষজ ত্বরণ</span>
            <p className="text-[10px] text-slate-300">ভূ-পৃষ্ঠে g = ৯.৮ m/s²; অভিকর্ষহীন স্থানে তরলের কোনো অতিরিক্ত হাইড্রোস্ট্যাটিক চাপ থাকে না।</p>
          </div>
        </div>
        <div className="p-2 bg-cyan-950/30 rounded-lg text-[10px] text-cyan-200 border border-cyan-800/40 text-center font-mono">
          মোট পরম চাপ = বায়ুমণ্ডলীয় চাপ (P₀) + তরলের চাপ (hρg)
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS: TORRICELLI BAROMETER (টরিসেলির পারদ ব্যারোমিটার)
  // -------------------------------------------------------------
  if (type === 'torricelliBarometer') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-indigo-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-indigo-400">বায়ুমণ্ডলীয় চাপ ও টরিসেলির ব্যারোমিটার (760 mm Hg Barometer)</span>
          <span className="text-[10px] text-indigo-300 font-mono">১ atm = 760 mmHg = 101,325 Pa</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-indigo-300 block mb-1">টরিসেলির শূন্যস্থান</span>
            <p className="text-[10px] text-slate-300">উল্টানো টেস্টটিউবের পারদ স্তম্ভের উপরের অংশে কোনো বাতাস থাকে না; সেখানে কেবল সামান্য পারদ বাষ্প থাকে।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-indigo-300 block mb-1">৭৬ সেন্টিমিটার পারদ স্তম্ভ</span>
            <p className="text-[10px] text-slate-300">বায়ুর চাপ খোলা পাত্রের পারদের ওপর চাপ দেয়, যা কাঁচনলে ঠিক ৭৬ সেমি পারদকে ধরে রাখে।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-indigo-300 block mb-1">আবহাওয়ার পূর্বাভাস</span>
            <p className="text-[10px] text-slate-300">ব্যারোমিটারের পারদ হঠাৎ নেমে গেলে নিম্নচাপ ও ঝড়ের সংকেত দেয়; ধীরে ধীরে উঠলে রৌদ্রোজ্জ্বল আবহাওয়া নির্দেশ করে।</p>
          </div>
        </div>
        <div className="p-2 bg-indigo-950/30 rounded-lg text-[10px] text-indigo-200 border border-indigo-800/40 text-center font-mono">
          চাপ P = hρg = 0.76 m × 13,600 kg/m³ × 9.8 m/s² = 101,293 N/m² (≈ 10⁵ Pa)
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 6: BIMETALLIC STRIP (দ্বৈতাতব পাত ও প্রসারণ)
  // -------------------------------------------------------------
  if (type === 'bimetallicStrip') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">কঠিনের তাপীয় প্রসারণ ও দ্বৈতাতব পাত (Bimetallic Strip)</span>
          <span className="text-[10px] text-amber-300 font-mono">ΔL = L₁ · α · Δθ</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-yellow-300 block mb-1">১. পিতল (Brass)</span>
            <p className="text-[10px] text-slate-300">α = ১৯ × ১০⁻⁶ K⁻¹। তাপে লোহার চেয়ে দ্রুত প্রসারিত হয়, ফলে উত্তপ্ত অবস্থায় বাইরের উত্তল পৃষ্ঠ গঠন করে।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-slate-300 block mb-1">২. লোহা (Iron)</span>
            <p className="text-[10px] text-slate-300">α = ১১.৫ × ১০⁻⁶ K⁻¹। তুলনামূলক কম প্রসারিত হওয়ায় ভেতরের অবতল পৃষ্ঠে থাকে।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-1">৩. থার্মোস্ট্যাট সুইচ</span>
            <p className="text-[10px] text-slate-300">অতিরিক্ত তাপে পাত বেঁকে গিয়ে বৈদ্যুতিক সংযোগ বিচ্ছিন্ন করে (আয়রন, রেফ্রিজারেটর, ফায়ার অ্যালার্ম)।</p>
          </div>
        </div>
        <div className="p-2 bg-amber-950/30 rounded-lg text-[10px] text-amber-200 border border-amber-800/40 text-center font-mono">
          দৈর্ঘ্য, ক্ষেত্র ও আয়তন প্রসারণ সহগের সম্পর্ক: α = β/2 = γ/3  (বা β = 2α, γ = 3α)
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 6: THERMOMETER SCALES (তাপমাত্রিক স্কেল সম্পর্ক)
  // -------------------------------------------------------------
  if (type === 'thermometerScales') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">তাপমাত্রার বিভিন্ন স্কেল ও পরম শূন্য (Temperature Scales & Absolute Zero)</span>
          <span className="text-[10px] text-cyan-300 font-mono">C/5 = (F - 32)/9 = (K - 273)/5</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="font-bold text-cyan-300 block mb-1">সেলসিয়াস (°C)</span>
            <div className="text-[11px] font-mono text-slate-300 space-y-1">
              <div>বাষ্প বিন্দু: ১০০°C</div>
              <div>বরফ বিন্দু: ০°C</div>
              <div className="text-amber-400 font-bold">মৌলিক ভাগ: ১০০</div>
            </div>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="font-bold text-amber-300 block mb-1">ফারেনহাইট (°F)</span>
            <div className="text-[11px] font-mono text-slate-300 space-y-1">
              <div>বাষ্প বিন্দু: ২১২°F</div>
              <div>বরফ বিন্দু: ৩২°F</div>
              <div className="text-amber-400 font-bold">মৌলিক ভাগ: ১৮০</div>
            </div>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="font-bold text-purple-300 block mb-1">কেলভিন (K - এসআই)</span>
            <div className="text-[11px] font-mono text-slate-300 space-y-1">
              <div>বাষ্প বিন্দু: ৩৭৩.১৫ K</div>
              <div>বরফ বিন্দু: ২৭৩.১৫ K</div>
              <div className="text-amber-400 font-bold">পরম শূন্য: ০ K (-২৭৩°C)</div>
            </div>
          </div>
        </div>
        <div className="p-2 bg-cyan-950/30 rounded-lg text-[10px] text-cyan-200 border border-cyan-800/40 text-center font-mono">
          বিশেষ দ্রষ্টব্য: -৪০° তাপমাত্রায় সেলসিয়াস ও ফারেনহাইট স্কেল উভয়ের পাঠ সমান (-40°C = -40°F)
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 6: WATER ANOMALOUS EXPANSION (পানির ৪°C ব্যতিক্রমী প্রসারণ)
  // -------------------------------------------------------------
  if (type === 'waterAnomalousCurve') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-blue-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-blue-400">পানির ব্যতিক্রমধর্মী প্রসারণ ও ৪°C এ সর্বোচ্চ ঘনত্ব (Anomalous Expansion)</span>
          <span className="text-[10px] text-cyan-300 font-mono">ρ_max = 1000 kg/m³ @ 4°C</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-1">০°C থেকে ৪°C এ সংকোচন</span>
            <p className="text-[10px] text-slate-300">পানি গরম করলে ০°C থেকে ৪°C পর্যন্ত এর আয়তন প্রসারিত না হয়ে সংকুচিত হয় এবং ঘনত্ব ক্রমাগত বাড়ে।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-amber-300 block mb-1">ঠিক ৪°C এর বিন্দু</span>
            <p className="text-[10px] text-slate-300">৪°C তাপমাত্রায় পানির আয়তন সর্বনিম্ন (১.০০০০ cm³/g) এবং ঘনত্ব সর্বোচ্চ (১০০০ kg/m³) হয়।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-emerald-300 block mb-1">জলজ জীবের জীবনরক্ষা</span>
            <p className="text-[10px] text-slate-300">জমে যাওয়া হ্রদের ওপরের বরফ ০°C হলেও তলদেশে ৪°C এর ভারী পানি থাকে, যার ফলে মাছ ও জলজ উদ্ভিদ বেঁচে থাকে।</p>
          </div>
        </div>
        <div className="p-2 bg-blue-950/30 rounded-lg text-[10px] text-blue-200 border border-blue-800/40 text-center font-mono">
          প্রাকৃতিক ভারসাম্য: বরফ তৈরি হলে ক্যাজ কেলাসের কারণে আয়তন বাড়ে এবং ঘনত্ব কমে ৯১৭ kg/m³ হওয়ায় পানিতে ভাসে
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 6: CALORIMETRY (ক্যালরিমিতি ও আপেক্ষিক তাপ)
  // -------------------------------------------------------------
  if (type === 'calorimetryHeatExchange') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">ক্যালরিমিতির মূলনীতি: গৃহীত তাপ = বর্জিত তাপ (Principle of Calorimetry)</span>
          <span className="text-[10px] text-rose-300 font-mono">Q = m · s · Δθ</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-rose-300 block mb-1">উষ্ণ বস্তুর তাপ বর্জন</span>
            <p className="text-[10px] text-slate-300">Q_বর্জিত = m₁ · s₁ · (T₁ - T_f)। উষ্ণ বস্তু থেকে তাপ শীতল মাধ্যমে প্রবাহিত হয়।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-1">শীতল তরলের তাপ গ্রহণ</span>
            <p className="text-[10px] text-slate-300">Q_গৃহীত = m₂ · s₂ · (T_f - T₂)। তরল ও ক্যালরিমিটার পাত্র তাপ গ্রহণ করে সাম্যাবস্থায় পৌঁছায়।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-amber-300 block mb-1">পানির উচ্চ আপেক্ষিক তাপ</span>
            <p className="text-[10px] text-slate-300">s_পানি = ৪২০০ J/kg·K। পৃথিবীর সর্বাধিক আপেক্ষিক তাপ হওয়ায় উপকূলের তাপমাত্রা সমভাবাপন্ন থাকে।</p>
          </div>
        </div>
        <div className="p-2 bg-rose-950/30 rounded-lg text-[10px] text-rose-200 border border-rose-800/40 text-center font-mono">
          সাম্যাবস্থা সমীকরণ: m₁ s₁ (T₁ - T_f) = m₂ s₂ (T_f - T₂) ⟹ T_f = (m₁ s₁ T₁ + m₂ s₂ T₂) / (m₁ s₁ + m₂ s₂)
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 6: LIQUID EXPANSION (তরলের আপাত ও প্রকৃত প্রসারণ)
  // -------------------------------------------------------------
  if (type === 'liquidExpansionRealVsApparent') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-sky-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-sky-400">তরলের প্রসারণ: আপাত বনাম প্রকৃত প্রসারণ (Real vs Apparent Expansion)</span>
          <span className="text-[10px] text-sky-300 font-mono">γ_r = γ_a + γ_g</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-sky-300 block mb-1">১. আপাত প্রসারণ (γ_a)</span>
            <p className="text-[10px] text-slate-300">পাত্রের প্রসারণ উপেক্ষা করে বাইরে থেকে তরলের যে প্রসারণ দেখা যায়। এটি তরলের নিজস্ব ধর্ম নয়।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-emerald-300 block mb-1">২. পাত্রের প্রসারণ (γ_g)</span>
            <p className="text-[10px] text-slate-300">উত্তপ্ত করলে কাঁচপাত্র প্রসারিত হওয়ায় তরলতল প্রথমে সামান্য নিচে নামে, তারপর দ্রুত উপরে ওঠে।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-amber-300 block mb-1">৩. প্রকৃত প্রসারণ (γ_r)</span>
            <p className="text-[10px] text-slate-300">প্রকৃত প্রসারণ = আপাত প্রসারণ + পাত্রের প্রসারণ। এটি তরলের মৌলিক ও নিজস্ব বৈশিষ্ট্য।</p>
          </div>
        </div>
        <div className="p-2 bg-sky-950/30 rounded-lg text-[10px] text-sky-200 border border-sky-800/40 text-center font-mono">
          মূল সমীকরণ: প্রকৃত প্রসারণ সহগ (γ_r) = আপাত প্রসারণ সহগ (γ_a) + পাত্রের আয়তন প্রসারণ সহগ (γ_g)
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 6: GAS LAWS (গ্যাস সূত্রাবলী: বয়েল ও চার্লস)
  // -------------------------------------------------------------
  if (type === 'gasLawsCharlesBoyle') {
    return (
      <div className="w-full h-full min-h-[280px] max-h-96 bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-violet-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-violet-400">বায়বীয় পদার্থের তাপীয় প্রসারণ ও গ্যাস সূত্রাবলী (Gas Laws)</span>
          <span className="text-[10px] text-violet-300 font-mono">PV / T = Constant (ধ্রুবক)</span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-2 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-1">বয়েলের সূত্র (T স্থির)</span>
            <p className="text-[10px] text-slate-300 font-mono">P₁V₁ = P₂V₂ বা V ∝ 1/P</p>
            <p className="text-[9px] text-slate-400 mt-1">স্থির তাপমাত্রায় চাপ দ্বিগুণ করলে গ্যাসের আয়তন অর্ধেকে নেমে আসে।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-amber-300 block mb-1">চার্লসের সূত্র (P স্থির)</span>
            <p className="text-[10px] text-slate-300 font-mono">V₁/T₁ = V₂/T₂ বা V ∝ T</p>
            <p className="text-[9px] text-slate-400 mt-1">স্থির চাপে তাপমাত্রা বাড়ালে গ্যাস দ্রুত প্রসারিত হয় (গরম বাতাসের বেলুন)।</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span className="font-bold text-purple-300 block mb-1">আদর্শ গ্যাস সমীকরণ</span>
            <p className="text-[10px] text-purple-200 font-mono font-bold">PV = nRT</p>
            <p className="text-[9px] text-slate-400 mt-1">R হলো সার্বজনীন গ্যাস ধ্রুবক (8.314 J·mol⁻¹·K⁻¹)।</p>
          </div>
        </div>
        <div className="p-2 bg-violet-950/30 rounded-lg text-[10px] text-violet-200 border border-violet-800/40 text-center font-mono">
          চাপ বৃদ্ধি সমীকরণ (গে-লুসাক): P₁/T₁ = P₂/T₂ (স্থির আয়তনে তাপমাত্রা বাড়লে গ্যাসের চাপ বাড়ে)
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 7: TRANSVERSE & LONGITUDINAL WAVES
  // -------------------------------------------------------------
  if (type === 'transverseLongitudinalWave') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">তরঙ্গের রূপভেদ: অনুপ্রস্থ বনাম অনুদৈর্ঘ্য তরঙ্গ (Wave Classification)</span>
          <span className="text-[10px] text-cyan-300 font-mono">v = f · λ</span>
        </div>

        {/* Real SVG Wave Visuals */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 160" className="w-full h-36">
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* 1. Transverse Wave Section */}
            <text x="10" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold">১. অনুপ্রস্থ (আড়) তরঙ্গ — কণার স্পন্দন সমকোণে (৯০°)</text>
            <line x1="20" y1="50" x2="480" y2="50" stroke="#334155" strokeDasharray="3 3" strokeWidth="1" />
            <path
              d="M 20 50 Q 60 15, 100 50 T 180 50 T 260 50 T 340 50 T 420 50 T 480 50"
              fill="none"
              stroke="url(#waveGrad)"
              strokeWidth="3.5"
            />
            {/* Crest & Trough Markers */}
            <circle cx="60" cy="15" r="4.5" fill="#f59e0b" />
            <text x="50" y="10" fill="#f59e0b" fontSize="9" fontWeight="bold">তরঙ্গশীর্ষ (Crest)</text>
            <circle cx="140" cy="85" r="4.5" fill="#ef4444" />
            <text x="130" y="98" fill="#ef4444" fontSize="9" fontWeight="bold">তরঙ্গপাদ (Trough)</text>
            {/* Wavelength Arrow */}
            <line x1="60" y1="18" x2="220" y2="18" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="125" y="14" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">λ (তরঙ্গদৈর্ঘ্য)</text>

            {/* 2. Longitudinal Wave Section */}
            <text x="10" y="120" fill="#f59e0b" fontSize="11" fontWeight="bold">২. অনুদৈর্ঘ্য শব্দ তরঙ্গ — সংনমন (Compression) ও প্রসারণ (Rarefaction)</text>
            {/* Bar Compression lines */}
            {[20, 24, 28, 32, 45, 65, 85, 100, 104, 108, 112, 130, 155, 180, 195, 199, 203, 207, 228, 255, 280, 295, 299, 303, 307, 330, 360, 390, 405, 409, 413, 417, 440, 470].map((x, i) => {
              const isDense = (x >= 20 && x <= 35) || (x >= 98 && x <= 115) || (x >= 193 && x <= 210) || (x >= 293 && x <= 310) || (x >= 403 && x <= 420);
              return (
                <line
                  key={i}
                  x1={x}
                  y1="130"
                  x2={x}
                  y2="152"
                  stroke={isDense ? '#ef4444' : '#38bdf8'}
                  strokeWidth={isDense ? '2.5' : '1.2'}
                  opacity={isDense ? '1' : '0.6'}
                />
              );
            })}
            <text x="35" y="159" fill="#ef4444" fontSize="8.5" fontWeight="bold">সংনমন (ঘন)</text>
            <text x="135" y="159" fill="#38bdf8" fontSize="8.5" fontWeight="bold">প্রসারণ (হালকা)</text>
            <text x="215" y="159" fill="#ef4444" fontSize="8.5" fontWeight="bold">সংনমন</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-cyan-500/30">
            <span className="font-bold text-cyan-300 block mb-0.5">অনুপ্রস্থ তরঙ্গ (Transverse)</span>
            <p className="text-[10px] text-slate-300">মাধ্যমের কণার স্পন্দন অভিমুখ তরঙ্গ প্রবাহের সাথে ৯০° কোণে হয়। উদাহরণ: পানির ঢেউ, আলোক তরঙ্গ।</p>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-amber-500/30">
            <span className="font-bold text-amber-300 block mb-0.5">অনুদৈর্ঘ্য তরঙ্গ (Longitudinal)</span>
            <p className="text-[10px] text-slate-300">কণার স্পন্দন অভিমুখ তরঙ্গের সমান্তরালে (০°) চলে। উদাহরণ: বায়ুতে শব্দ তরঙ্গ, স্প্রিং-এর সংকোচন-প্রসারণ।</p>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 7: WAVE EQUATION & CHARACTERISTICS (v = fλ)
  // -------------------------------------------------------------
  if (type === 'waveCharacteristics' || type === 'waveEquationRelation' || type === 'waveVelocityDerivation') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-sky-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-sky-400">তরঙ্গ সংশ্লিষ্ট রাশিসমূহ ও সমীকরণ: v = f · λ</span>
          <span className="text-[10px] text-sky-300 font-mono">f = 1 / T ⟹ v = λ / T</span>
        </div>

        {/* SVG Diagram showing Amplitude, Wavelength, Frequency */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 140" className="w-full h-32">
            {/* Baseline */}
            <line x1="30" y1="70" x2="470" y2="70" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="440" y="65" fill="#94a3b8" fontSize="9">সাম্যাবস্থা</text>

            {/* Sine wave */}
            <path
              d="M 30 70 Q 75 15, 120 70 T 210 70 T 300 70 T 390 70 T 470 70"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
            />

            {/* Amplitude Indicator A */}
            <line x1="75" y1="70" x2="75" y2="15" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="75" cy="15" r="4" fill="#f59e0b" />
            <text x="82" y="45" fill="#f59e0b" fontSize="11" fontWeight="bold">বিস্তার A (Amplitude)</text>

            {/* Wavelength Indicator λ */}
            <line x1="75" y1="12" x2="255" y2="12" stroke="#10b981" strokeWidth="2" />
            <line x1="75" y1="8" x2="75" y2="16" stroke="#10b981" strokeWidth="2" />
            <line x1="255" y1="8" x2="255" y2="16" stroke="#10b981" strokeWidth="2" />
            <text x="145" y="9" fill="#10b981" fontSize="11" fontWeight="bold">তরঙ্গদৈর্ঘ্য λ (Wavelength)</text>

            {/* Period / Velocity Vector */}
            <line x1="300" y1="70" x2="420" y2="70" stroke="#ec4899" strokeWidth="2.5" />
            <polygon points="420,66 430,70 420,74" fill="#ec4899" />
            <text x="325" y="88" fill="#ec4899" fontSize="10" fontWeight="bold">তরঙ্গবেগ v = f·λ</text>
          </svg>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-white block text-sm">v</span>
            <span className="text-[10px] text-sky-300">তরঙ্গবেগ (m/s)</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">v = d / t</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-amber-400 block text-sm">f</span>
            <span className="text-[10px] text-amber-300">কম্পাঙ্ক (Hz)</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">f = 1 / T</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-emerald-400 block text-sm">λ</span>
            <span className="text-[10px] text-emerald-300">তরঙ্গদৈর্ঘ্য (m)</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">১ পূর্ণ স্পন্দন দূরত্ব</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-purple-400 block text-sm">T</span>
            <span className="text-[10px] text-purple-300">পর্যায়কাল (s)</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">T = 1 / f</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 7: SOUND PROPAGATION & TUNING FORK
  // -------------------------------------------------------------
  if (type === 'soundWavePropagation') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-indigo-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-indigo-400">শব্দ তরঙ্গ সঞ্চালন: কম্পমান সুরশলাকা ও বায়বীয় মাধ্যমের সংকোচন-প্রসারণ</span>
          <span className="text-[10px] text-indigo-300 font-mono">Mechanical Sound Waves</span>
        </div>

        {/* SVG Diagram: Tuning Fork emitting circular sound waves */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 140" className="w-full h-32">
            {/* Tuning Fork U-shape */}
            <path d="M 60 40 L 60 85 Q 60 95 70 95 L 75 95 Q 85 95 85 85 L 85 40" fill="none" stroke="#cbd5e1" strokeWidth="5" />
            <line x1="72" y1="95" x2="72" y2="130" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
            {/* Vibration Lines */}
            <path d="M 52 45 Q 50 60 52 75" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
            <path d="M 93 45 Q 95 60 93 75" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
            <text x="35" y="25" fill="#cbd5e1" fontSize="10" fontWeight="bold">কম্পমান সুরশলাকা</text>

            {/* Concentric Sound Waves Expanding to Right */}
            {[1, 2, 3, 4, 5, 6].map((ring) => (
              <path
                key={ring}
                d={`M ${110 + ring * 55} 15 A ${ring * 55} ${ring * 55} 0 0 1 ${110 + ring * 55} 125`}
                fill="none"
                stroke={ring % 2 === 1 ? '#ef4444' : '#38bdf8'}
                strokeWidth={ring % 2 === 1 ? '3.5' : '1.8'}
                opacity={1 - ring * 0.12}
              />
            ))}

            {/* Labels */}
            <rect x="230" y="10" width="110" height="24" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
            <text x="240" y="26" fill="#ef4444" fontSize="9.5" fontWeight="bold">সংনমন (উচ্চ ঘনত্ব)</text>

            <rect x="360" y="10" width="115" height="24" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <text x="370" y="26" fill="#38bdf8" fontSize="9.5" fontWeight="bold">প্রসারণ (নিম্ন ঘনত্ব)</text>
          </svg>
        </div>

        <div className="p-2.5 bg-indigo-950/40 rounded-lg text-xs text-slate-300 border border-indigo-900/60 leading-relaxed">
          <strong className="text-cyan-300">মূল তত্ত্ব:</strong> সুরশলাকার বাহু যখন বাইরের দিকে সরে আসে তখন সম্মুখস্থ বায়ুকে সংকুচিত করে (সংনমন); আর যখন ভেতরের দিকে যায় তখন বায়ুর ঘনত্ব কমে যায় (প্রসারণ)। এভাবেই অনুদৈর্ঘ্য শব্দ তরঙ্গ সামনে এগিয়ে চলে।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 7: SPEED OF SOUND IN DIFFERENT MEDIUMS
  // -------------------------------------------------------------
  if (type === 'soundSpeedMediums') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">বিভিন্ন মাধ্যমে শব্দের বেগ: কঠিন &gt; তরল &gt; বায়বীয়</span>
          <span className="text-[10px] text-emerald-300 font-mono">v_কঠিন &gt; v_তরল &gt; v_বায়বীয়</span>
        </div>

        {/* SVG Speed Comparison Bars */}
        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-3">
          {/* Solid */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-200 mb-1">
              <span>১. কঠিন মাধ্যম (লোহা / ইস্পাত — Steel):</span>
              <span className="text-red-400 font-mono font-black">৫১৩০ m/s (সবচেয়ে দ্রুত)</span>
            </div>
            <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full w-[95%]"></div>
            </div>
          </div>

          {/* Liquid */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-200 mb-1">
              <span>২. তরল মাধ্যম (পানি — Water ২০°C):</span>
              <span className="text-cyan-400 font-mono font-black">১৪৯৩ m/s (মাঝারি বেগ)</span>
            </div>
            <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full w-[45%]"></div>
            </div>
          </div>

          {/* Gas */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-200 mb-1">
              <span>৩. বায়বীয় মাধ্যম (বায়ু — Air ০°C / ২০°C):</span>
              <span className="text-amber-400 font-mono font-black">৩৩২ m/s / ৩৪৩ m/s</span>
            </div>
            <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full w-[16%]"></div>
            </div>
          </div>
        </div>

        <div className="p-2.5 bg-emerald-950/40 rounded-lg text-[11px] text-emerald-200 border border-emerald-900/60 leading-relaxed font-mono">
          বিজ্ঞান কারণ: কঠিন পদার্থের অণুগুলোর আন্তঃআণবিক আকর্ষণ বল ও স্থিতিস্থাপকতা (Elasticity) সর্বাধিক হওয়ায় কণাগুলো খুব দ্রুত স্পন্দন পার্শ্ববর্তী কণায় স্থানান্তর করে।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 7: ECHO & MINIMUM DISTANCE (2d = vt)
  // -------------------------------------------------------------
  if (type === 'echoDistanceCalculation' || type === 'soundEchoSonar') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">শব্দের প্রতিফলন ও প্রতিধ্বনি (Echo Calculation & Minimum Distance)</span>
          <span className="text-[10px] text-amber-300 font-mono">2d = v · t ⟹ d = (v · t) / 2</span>
        </div>

        {/* SVG Diagram: Person / Speaker emitting sound towards high cliff */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 140" className="w-full h-32">
            {/* Person / Sound Source */}
            <circle cx="50" cy="80" r="14" fill="#06b6d4" />
            <line x1="50" y1="94" x2="50" y2="125" stroke="#06b6d4" strokeWidth="4" />
            <text x="30" y="60" fill="#06b6d4" fontSize="10" fontWeight="bold">শব্দ উৎস (শ্রোতা)</text>

            {/* High Reflecting Cliff on Right */}
            <path d="M 430 20 L 460 20 L 470 135 L 420 135 Z" fill="#475569" stroke="#64748b" strokeWidth="2" />
            <text x="405" y="15" fill="#e2e8f0" fontSize="10" fontWeight="bold">প্রতিফলক পাহাড় (Cliff)</text>

            {/* Incident Sound Waves (Green, going right) */}
            <path d="M 90 75 Q 110 50 110 95" fill="none" stroke="#22c55e" strokeWidth="3" />
            <path d="M 140 65 Q 165 40 165 105" fill="none" stroke="#22c55e" strokeWidth="3" />
            <path d="M 190 55 Q 220 30 220 115" fill="none" stroke="#22c55e" strokeWidth="3" />
            <text x="130" y="50" fill="#22c55e" fontSize="9.5" fontWeight="bold">আপতিত শব্দ (v = ৩৪৪ m/s)</text>

            {/* Reflected Sound Waves (Orange/Red, returning left) */}
            <path d="M 370 75 Q 350 50 350 95" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 2" />
            <path d="M 320 65 Q 295 40 295 105" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 2" />
            <text x="280" y="115" fill="#ef4444" fontSize="9.5" fontWeight="bold">প্রতিফলিত প্রতিধ্বনি (t ≥ ০.১ s)</text>

            {/* Distance Rail Arrow */}
            <line x1="50" y1="130" x2="430" y2="130" stroke="#f59e0b" strokeWidth="2" />
            <text x="200" y="127" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">ন্যূনতম দূরত্ব d = ১৬.৬ মি / ১৭.২ মি</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-amber-300 block mb-0.5">শব্দানুভূতির স্থায়িত্বকাল (Persistence)</span>
            <p className="text-[10px] text-slate-300">কানে যেকোনো শব্দের অনুভূতি ০.১ সেকেন্ড থাকে। স্পষ্ট প্রতিধ্বনি শুনতে প্রতিফলিত শব্দকে অবশ্যই ০.১ সেকেন্ড পরে ফিরতে হবে।</p>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-0.5">গাণিতিক হিসাব</span>
            <p className="text-[10px] text-slate-300 font-mono">০°C এ (v=৩৩২ m/s): d = (৩৩২×০.১)/২ = ১৬.৬ মিটার।<br />২০°C এ (v=৩৪৪ m/s): d = (৩৪৪×০.১)/২ = ১৭.২ মিটার।</p>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 7: SONAR & BAT ECHOLOCATION
  // -------------------------------------------------------------
  if (type === 'sonarDepthMeasurement') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">সোনার (SONAR - Sound Navigation And Ranging) ও বাদুড়</span>
          <span className="text-[10px] text-cyan-300 font-mono">2d = v · t ⟹ গভীরতা d = (v · t) / 2</span>
        </div>

        {/* SVG Diagram: Research Ship emitting ultrasound to seabed */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 140" className="w-full h-32">
            {/* Water Surface Line */}
            <line x1="20" y1="40" x2="480" y2="40" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 3" />
            <text x="30" y="35" fill="#38bdf8" fontSize="9">সমুদ্রের জলপৃষ্ঠ</text>

            {/* Research Ship */}
            <path d="M 180 40 L 290 40 L 270 18 L 195 18 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="220" y="5" width="25" height="13" fill="#cbd5e1" />
            <text x="195" y="14" fill="#0ea5e9" fontSize="9" fontWeight="bold">জাহাজ (SONAR)</text>

            {/* Ultrasound Beam Cone (Downwards) */}
            <polygon points="235,40 160,120 310,120" fill="#06b6d4" opacity="0.3" />
            <line x1="235" y1="40" x2="200" y2="120" stroke="#22c55e" strokeWidth="2" />
            <line x1="235" y1="40" x2="270" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />

            {/* Seabed Floor */}
            <rect x="20" y="120" width="460" height="18" fill="#78350f" />
            <text x="210" y="133" fill="#fbbf24" fontSize="9.5" fontWeight="bold">সমুদ্র তলদেশ (Seabed Floor)</text>

            {/* Depth label */}
            <line x1="340" y1="40" x2="340" y2="120" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="350" y="85" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">গভীরতা d</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-0.5">জাহাজে গভীরতা নির্ণয়</span>
            <p className="text-[10px] text-slate-300">ট্রান্সমিটার থেকে আল্ট্রাসাউন্ড তরঙ্গের সংকেত পাঠানো হয়। তলদেশে প্রতিফলিত হয়ে রিসিভারে পৌঁছাতে t সময় লাগলে গভীরতা d = (v_পানি × t)/২।</p>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-amber-300 block mb-0.5">বাদুড়ের চলন ও শিকার</span>
            <p className="text-[10px] text-slate-300">বাদুড় চোখে স্পষ্ট না দেখলেও প্রায় ১,০০,০০০ Hz এর আল্ট্রাসাউন্ড শব্দ তৈরি করে এবং তার প্রতিধ্বনি শুনে পথ ও শিকারের নির্ভুল দূরত্ব নির্ণয় করে।</p>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHYSICS CHAPTER 7: AUDIBLE SPECTRUM & DECIBEL GAUGE
  // -------------------------------------------------------------
  if (type === 'audioSpectrumRanges' || type === 'soundAudibleSpectrum' || type === 'ultrasoundMedicalIndustry' || type === 'soundCharacteristics' || type === 'soundIntensityDecibel') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-indigo-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-indigo-400">শব্দ বর্ণালী ও ডেসিবেল মাত্রা: ইনফ্রাসাউন্ড · শ্রবণসীমা · আল্ট্রাসাউন্ড</span>
          <span className="text-[10px] text-indigo-300 font-mono">20 Hz - 20,000 Hz</span>
        </div>

        {/* SVG Spectrum Bar with Color-coded Bands */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 120" className="w-full h-28">
            {/* Gradient Spectrum Bar */}
            <rect x="20" y="40" width="130" height="30" rx="4" fill="#7c3aed" opacity="0.85" />
            <text x="35" y="60" fill="#ffffff" fontSize="10" fontWeight="bold">ইনফ্রাসাউন্ড (&lt; ২০ Hz)</text>

            <rect x="155" y="36" width="190" height="38" rx="6" fill="#10b981" />
            <text x="180" y="59" fill="#022c22" fontSize="11" fontWeight="black">মানব শ্রবণযোগ্য (২০-২০,০০০ Hz)</text>

            <rect x="350" y="40" width="130" height="30" rx="4" fill="#f59e0b" opacity="0.85" />
            <text x="365" y="60" fill="#ffffff" fontSize="10" fontWeight="bold">আল্ট্রাসাউন্ড (&gt; ২০,০০০ Hz)</text>

            {/* Indicators */}
            <text x="25" y="90" fill="#a78bfa" fontSize="8.5">হাতি, তিমি, ভূমিকম্পের তরঙ্গ</text>
            <text x="185" y="94" fill="#34d399" fontSize="9" fontWeight="bold">স্বাভাবিক কথোপকথন (৬০ dB)</text>
            <text x="355" y="90" fill="#fbbf24" fontSize="8.5">বাদুড়, আল্ট্রাসনোগ্রাফি, লিথোট্রিপসি</text>
          </svg>
        </div>

        {/* Decibel Guidelines */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold block text-xs">নিরাপদ সীমা</span>
            <span className="font-mono font-bold text-white text-sm">০ - ৬০ dB</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">ফুসফুস ফিসফিস / স্বাভাবিক কথা</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-amber-400 font-bold block text-xs">সহনশীল সীমা</span>
            <span className="font-mono font-bold text-white text-sm">৭০ - ৮৫ dB</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">ব্যস্ত শহরের ট্রাফিক</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-lg border border-rose-900/60 bg-rose-950/20">
            <span className="text-rose-400 font-bold block text-xs">মারাত্মক দূষণ ঝুঁকি</span>
            <span className="font-mono font-bold text-rose-300 text-sm">&gt; ৮৫ - ১২০ dB</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">স্থায়ী বধিরতার সম্ভাবনা</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY CHAPTER 4: ATP ENERGY COIN (এটিপি জৈব মুদ্রা)
  // -------------------------------------------------------------
  if (type === 'atpEnergyCoin' || type === 'atpEnergyCurrency') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">জীবদেহের জৈব মুদ্রা: এটিপি (ATP - Adenosine Triphosphate)</span>
          <span className="text-[10px] text-amber-300 font-mono">ΔE = 7.3 kcal/mol (30.55 kJ)</span>
        </div>

        {/* SVG Diagram: Adenine + Ribose + 3 Phosphate Groups with Energy Waves */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 130" className="w-full h-28">
            {/* Adenine Purine Double Ring (Purple) */}
            <polygon points="50,40 85,25 120,40 120,80 85,95 50,80" fill="#8b5cf6" opacity="0.8" />
            <polygon points="120,40 150,55 150,85 120,80" fill="#a855f7" opacity="0.85" />
            <text x="75" y="65" fill="#ffffff" fontSize="11" fontWeight="bold">অ্যাডেনিন</text>
            <text x="65" y="115" fill="#c084fc" fontSize="9" fontWeight="bold">নাইট্রোজেন ক্ষারক</text>

            {/* Connecting Bond */}
            <line x1="150" y1="70" x2="190" y2="70" stroke="#06b6d4" strokeWidth="3" />

            {/* Ribose 5-Carbon Pentose Sugar (Cyan) */}
            <polygon points="215,40 245,55 240,90 190,90 185,55" fill="#06b6d4" opacity="0.85" />
            <text x="195" y="73" fill="#ffffff" fontSize="10" fontWeight="bold">রাইবোজ</text>
            <text x="190" y="115" fill="#38bdf8" fontSize="9" fontWeight="bold">৫-কার্বন সুগার</text>

            {/* Adenosine Bracket */}
            <path d="M 50 122 L 245 122" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="100" y="129" fill="#38bdf8" fontSize="8.5" fontWeight="bold">অ্যাডেনোসিন (Adenosine)</text>

            {/* Connecting Bond to Phosphates */}
            <line x1="245" y1="70" x2="280" y2="70" stroke="#f59e0b" strokeWidth="3" />

            {/* 3 Phosphate Groups (Amber & Red for terminal) */}
            <circle cx="305" cy="70" r="18" fill="#f59e0b" />
            <text x="300" y="75" fill="#ffffff" fontSize="12" fontWeight="bold">P</text>
            <text x="295" y="98" fill="#f59e0b" fontSize="8" fontWeight="bold">AMP</text>

            {/* Squiggly High Energy Bond 1 */}
            <path d="M 323 70 Q 330 63 337 70 Q 344 77 351 70" fill="none" stroke="#ef4444" strokeWidth="2.5" />

            <circle cx="370" cy="70" r="18" fill="#f59e0b" />
            <text x="365" y="75" fill="#ffffff" fontSize="12" fontWeight="bold">P</text>
            <text x="360" y="98" fill="#f59e0b" fontSize="8" fontWeight="bold">ADP</text>

            {/* Squiggly High Energy Bond 2 (Terminal ~P) */}
            <path d="M 388 70 Q 395 63 402 70 Q 409 77 416 70" fill="none" stroke="#ef4444" strokeWidth="3" />

            <circle cx="435" cy="70" r="19" fill="#ef4444" />
            <text x="430" y="75" fill="#ffffff" fontSize="12" fontWeight="bold">P</text>
            <text x="420" y="98" fill="#ef4444" fontSize="8.5" fontWeight="bold">ATP (~P)</text>

            {/* Energy Release Indicator */}
            <rect x="390" y="15" width="100" height="22" rx="4" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1" />
            <text x="395" y="30" fill="#fecaca" fontSize="9" fontWeight="bold">⚡ ৭.৩ kcal শক্তি মুক্তি</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-amber-300 block mb-0.5">ফসফোরাইলেশন (Phosphorylation)</span>
            <p className="text-[10px] text-slate-300 font-mono">ADP + Pi + শক্তি (৭.৩ kcal) ⟶ ATP<br />খাদ্যের জারণ থেকে নির্গত শক্তি ফসফেট বন্ধনে সঞ্চিত হয়।</p>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-emerald-300 block mb-0.5">ডিফসফোরাইলেশন (Dephosphorylation)</span>
            <p className="text-[10px] text-slate-300 font-mono">ATP ⟶ ADP + Pi + মুক্ত শক্তি<br />কোষীয় বৃদ্ধি, পেশি সংকোচন ও জৈবনিক কাজে এ শক্তি ব্যবহৃত হয়।</p>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY CHAPTER 4: PHOTOSYNTHESIS (সালোকসংশ্লেষণ ও ক্লোরোপ্লাস্ট)
  // -------------------------------------------------------------
  if (type === 'photosynthesisLightDark' || type === 'chloroplastPhotosynthesis' || type === 'photosynthesisTwoPhases' || type === 'calvinCycleC3C4' || type === 'photosynthesisVsRespiration') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">সালোকসংশ্লেষণ: আলোক বিক্রিয়া (থাইলাকয়েড) বনাম অন্ধকার ক্যালভিন চক্র (স্ট্রোমা)</span>
          <span className="text-[10px] text-emerald-300 font-mono">6CO₂ + 12H₂O ⟶ C₆H₁₂O₆ + 6H₂O + 6O₂</span>
        </div>

        {/* SVG Diagram: Chloroplast Cross-Section with 2 Phases */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 130" className="w-full h-28">
            {/* Chloroplast Outer Boundary Oval */}
            <ellipse cx="250" cy="65" rx="230" ry="58" fill="#14532d" opacity="0.35" stroke="#16a34a" strokeWidth="2.5" />
            <text x="35" y="30" fill="#22c55e" fontSize="10" fontWeight="bold">ক্লোরোপ্লাস্টের ভেতরের দ্বি-পর্যায়ে খাদ্য তৈরি</text>

            {/* Left: Light Phase inside Thylakoid Grana */}
            <rect x="60" y="40" width="140" height="60" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
            <text x="75" y="58" fill="#6ee7b7" fontSize="10" fontWeight="bold">১. আলোক পর্যায় (গ্রানাম)</text>
            <text x="70" y="73" fill="#ffffff" fontSize="8.5">পানির ফটোলাইসিস: 2H₂O ⟶ O₂↑</text>
            <text x="70" y="88" fill="#fbbf24" fontSize="8.5" fontWeight="bold">উৎপন্ন: ATP + NADPH₂</text>

            {/* Sunlight Arrow */}
            <line x1="130" y1="10" x2="130" y2="38" stroke="#fde047" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="140" y="24" fill="#fde047" fontSize="9" fontWeight="bold">সৌরশক্তি (ফোটন)</text>

            {/* Assimilatory Power Flow (ATP & NADPH) */}
            <path d="M 200 60 Q 250 50 295 60" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2" />
            <text x="215" y="50" fill="#fbbf24" fontSize="9" fontWeight="bold">ATP / NADPH₂</text>

            {/* Right: Dark Phase / Calvin Cycle inside Stroma */}
            <rect x="300" y="40" width="140" height="60" rx="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="312" y="58" fill="#c7d2fe" fontSize="10" fontWeight="bold">২. অন্ধকার পর্যায় (স্ট্রোমা)</text>
            <text x="312" y="73" fill="#ffffff" fontSize="8.5">CO₂ বিজারণ ⟶ ক্যালভিন C₃ চক্র</text>
            <text x="312" y="88" fill="#38bdf8" fontSize="8.5" fontWeight="bold">উৎপাদন: গ্লুকোজ (C₆H₁₂O₆)</text>

            {/* Return ADP + NADP+ */}
            <path d="M 295 80 Q 250 90 200 80" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="225" y="95" fill="#94a3b8" fontSize="8">ADP + Pi + NADP⁺</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-emerald-300 block mb-0.5">অক্সিজেনের মূল উৎস</span>
            <p className="text-[10px] text-slate-300">হিল বিক্রিয়া ও পানির ফটোলাইসিসের মাধ্যমে প্রমাণিত হয় যে সালোকসংশ্লেষণে নির্গত অক্সিজেন (O₂) পানি (H₂O) থেকে আসে, CO₂ থেকে নয়।</p>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-0.5">C₃ বনাম C₄ উদ্ভিদ</span>
            <p className="text-[10px] text-slate-300">C₃ উদ্ভিদে (ধান, গম) ১ম স্থায়ী যৌগ ৩-PGA। C₄ উদ্ভিদে (ভুট্টা, আখ) ১ম যৌগ অক্সালোঅ্যাসিটিক এসিড (OAA), যা উচ্চ তাপমাত্রায় বেশি খাদ্য তৈরি করে।</p>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY CHAPTER 4: CELLULAR RESPIRATION (শ্বসনের ৪টি ধাপ ও ৩৮ ATP)
  // -------------------------------------------------------------
  if (type === 'respirationAerobicSteps' || type === 'aerobicRespirationStages' || type === 'respirationAtpBalance') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-blue-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-blue-400">সবাত শ্বসন (Aerobic Respiration) এর ৪টি ধাপ ও ৩৮টি ATP উৎপাদন</span>
          <span className="text-[10px] text-blue-300 font-mono">C₆H₁₂O₆ + 6O₂ ⟶ 6CO₂ + 6H₂O + ৩৮ ATP (686 kcal)</span>
        </div>

        {/* SVG Flowchart: 4 Continuous Stages */}
        <div className="my-2 p-2 bg-slate-900/90 rounded-xl border border-slate-800">
          <svg viewBox="0 0 500 110" className="w-full h-24">
            {/* Stage 1: Glycolysis */}
            <rect x="10" y="20" width="105" height="70" rx="6" fill="#082f49" stroke="#0ea5e9" strokeWidth="1.5" />
            <text x="20" y="38" fill="#38bdf8" fontSize="9.5" fontWeight="bold">১. গ্লাইকোলাইসিস</text>
            <text x="20" y="52" fill="#94a3b8" fontSize="8">স্থান: সাইটোপ্লাজম</text>
            <text x="20" y="66" fill="#e2e8f0" fontSize="8">গ্লুকোজ ⟶ ২ পাইরুভেট</text>
            <text x="20" y="80" fill="#22c55e" fontSize="9" fontWeight="bold">নিট: ৮টি ATP</text>

            {/* Arrow 1 */}
            <line x1="116" y1="55" x2="132" y2="55" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Stage 2: Acetyl CoA */}
            <rect x="134" y="20" width="105" height="70" rx="6" fill="#2e1065" stroke="#a855f7" strokeWidth="1.5" />
            <text x="144" y="38" fill="#c084fc" fontSize="9.5" fontWeight="bold">২. অ্যাসিটাইল কো-এ</text>
            <text x="144" y="52" fill="#94a3b8" fontSize="8">স্থান: মাইটোকন্ড্রিয়া</text>
            <text x="144" y="66" fill="#e2e8f0" fontSize="8">২ অ্যাসিটাইল Co-A + CO₂</text>
            <text x="144" y="80" fill="#22c55e" fontSize="9" fontWeight="bold">নিট: ৬টি ATP</text>

            {/* Arrow 2 */}
            <line x1="240" y1="55" x2="256" y2="55" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Stage 3: Krebs Cycle */}
            <rect x="258" y="20" width="105" height="70" rx="6" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="268" y="38" fill="#fcd34d" fontSize="9.5" fontWeight="bold">৩. ক্রেবস চক্র</text>
            <text x="268" y="52" fill="#94a3b8" fontSize="8">মাইটোকন্ড্রিয়া ম্যাট্রিক্স</text>
            <text x="268" y="66" fill="#e2e8f0" fontSize="8">সাইট্রিক এসিড চক্র</text>
            <text x="268" y="80" fill="#22c55e" fontSize="9" fontWeight="bold">নিট: ২৪টি ATP</text>

            {/* Arrow 3 */}
            <line x1="364" y1="55" x2="380" y2="55" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Stage 4: Total Energy Output */}
            <rect x="382" y="15" width="108" height="80" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
            <text x="392" y="36" fill="#6ee7b7" fontSize="10" fontWeight="bold">৪. সর্বমোট শক্তি</text>
            <text x="392" y="52" fill="#ffffff" fontSize="8.5">১ অণু গ্লুকোজ জারণে:</text>
            <text x="392" y="70" fill="#fde047" fontSize="13" fontWeight="black" fontFamily="monospace">৩৮টি ATP</text>
            <text x="392" y="86" fill="#a7f3d0" fontSize="8.5">৬৮৬ kcal শক্তি</text>
          </svg>
        </div>

        <div className="p-2.5 bg-blue-950/40 rounded-lg text-[11px] text-blue-200 border border-blue-900/60 leading-relaxed font-mono">
          এটিপি হিসাব রূপান্তর: ১টি NADH₂ = ৩ ATP | ১টি FADH₂ = ২ ATP | ১টি GTP = ১ ATP। মোট: ৮ + ৬ + ২৪ = ৩৮টি ATP।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // BIOLOGY CHAPTER 4: ANAEROBIC FERMENTATION (অবাত শ্বসন ও সন্ধান)
  // -------------------------------------------------------------
  if (type === 'fermentationAnaerobic') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">অবাত শ্বসন ও সন্ধান (Anaerobic Respiration & Fermentation)</span>
          <span className="text-[10px] text-rose-300 font-mono">অক্সিজেনহীন অসম্পূর্ণ জারণ (মাত্র ২টি ATP)</span>
        </div>

        {/* SVG Diagram: Yeast & Muscle Fermentation comparison */}
        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-2 gap-4">
            {/* Alcohol Fermentation */}
            <div className="p-2.5 bg-amber-950/30 rounded-lg border border-amber-800/60">
              <span className="font-bold text-amber-400 text-xs block mb-1">১. অ্যালকোহল সন্ধান (ইথানল — ঈস্ট)</span>
              <p className="text-[10px] text-slate-300 font-mono">C₆H₁₂O₆ ⟶ 2C₂H₅OH + 2CO₂ + ২ ATP (৫০ kcal)</p>
              <p className="text-[9.5px] text-slate-400 mt-1">পাউরুটি তৈরি (বেকারি শিল্প), মদ ও অ্যালকোহল উৎপাদনে ব্যবহৃত হয়। বুদবুদ আকারে CO₂ গ্যাস নির্গত হয়।</p>
            </div>

            {/* Lactic Acid Fermentation */}
            <div className="p-2.5 bg-rose-950/30 rounded-lg border border-rose-800/60">
              <span className="font-bold text-rose-400 text-xs block mb-1">২. ল্যাকটিক এসিড সন্ধান (দই ও পেশি)</span>
              <p className="text-[10px] text-slate-300 font-mono">C₆H₁₂O₆ ⟶ 2C₃H₆O₃ (ল্যাকটিক এসিড) + ২ ATP</p>
              <p className="text-[9.5px] text-slate-400 mt-1">দুধ থেকে মিষ্টি দই তৈরি (ল্যাকটোব্যাসিলাস ব্যাক্টেরিয়া) এবং দ্রুত ব্যায়ামে বা দৌড়ালে পেশিতে অক্সিজেনের অভাবে ক্লান্তি তৈরি করে।</p>
            </div>
          </div>
        </div>

        <div className="p-2.5 bg-rose-950/40 rounded-lg text-xs text-rose-200 border border-rose-900/60 leading-relaxed font-mono">
          তুলনামূলক সত্য: সবাত শ্বসনে গ্লুকোজ সম্পূর্ণ জারিত হয়ে ৩৮টি ATP দিলেও, অবাত শ্বসনে অক্সিজেনের অনুপস্থিতিতে মাত্র ২টি ATP মুক্ত হয়।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 1. MOLE & AVOGADRO CONSTANT (মোলের ধারণা)
  // -------------------------------------------------------------
  if (type === 'moleConceptAvogadro') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">মোলের মৌলিক ধারণা ও অ্যাভোগাড্রো সংখ্যা (Avogadro Constant)</span>
          <span className="text-[10px] text-cyan-300 font-mono">Nₐ = ৬.০২ × ১০²³ কণা/মোল</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-2.5 bg-amber-950/30 rounded-lg border border-amber-800/60 text-center">
              <span className="text-amber-400 font-bold text-xs block mb-1">কার্বন-১২ ভিত্তিমান</span>
              <div className="text-xl font-black text-amber-300 my-1 font-mono">১২ গ্রাম ¹²C</div>
              <p className="text-[10px] text-slate-300">ঠিক ১২ গ্রাম কার্বন-১২ আইসোটোপে যতটি পরমাণু থাকে = ১ মোল কার্বন</p>
            </div>

            <div className="p-2.5 bg-cyan-950/30 rounded-lg border border-cyan-800/60 text-center">
              <span className="text-cyan-400 font-bold text-xs block mb-1">কণার সার্বজনীন সংখ্যা</span>
              <div className="text-xl font-black text-cyan-300 my-1 font-mono">৬.০২ × ১০²³</div>
              <p className="text-[10px] text-slate-300">যেকোনো পদার্থের ১ মোলে সর্বদা এই নির্দিষ্ট সংখ্যক পরমাণু, অণু বা আয়ন থাকে</p>
            </div>

            <div className="p-2.5 bg-emerald-950/30 rounded-lg border border-emerald-800/60 text-center">
              <span className="text-emerald-400 font-bold text-xs block mb-1">আণবিক ভর বনাম গ্রাম</span>
              <div className="text-xl font-black text-emerald-300 my-1 font-mono">১ মোল H₂O = ১৮g</div>
              <p className="text-[10px] text-slate-300">আণবিক ভরকে গ্রামে প্রকাশ করলেই তা ১ মোল বা ৬.০২×১০²³ টি অণু নির্দেশ করে</p>
            </div>
          </div>

          <div className="mt-3 p-2 bg-slate-950 rounded-lg border border-slate-800 text-center">
            <span className="text-[11px] text-slate-300">
              💡 গোল্ডেন রুল: <strong className="text-cyan-300">১ মোল পরমাণু</strong> = ৬.০২×১০²³ টি পরমাণু | <strong className="text-emerald-300">১ মোল অণু</strong> = ৬.০২×১০²³ টি অণু
            </span>
          </div>
        </div>

        <div className="p-2 bg-cyan-950/40 rounded-lg text-xs text-cyan-200 border border-cyan-900/60 text-center font-mono">
          ১ মোল চালের দানা সারা পৃথিবীতে বিছিয়ে দিলে কয়েক কিলোমিটার উঁচু স্তূপ হবে, অথচ ১ মোল পানির আয়তন মাত্র এক চুমুক (১৮ mL)!
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 2. MOLECULAR & MOLAR MASS CALCULATION
  // -------------------------------------------------------------
  if (type === 'molecularMassCalc') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-indigo-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-indigo-400">পারমাণবিক ভর থেকে আণবিক ভর ও মোলার ভর নির্ণয়</span>
          <span className="text-[10px] text-indigo-300 font-mono">M = Σ (Ar × পরমাণু সংখ্যা)</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2.5">
          {/* H2SO4 example */}
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <span className="font-bold text-amber-400 text-xs">সালফিউরিক এসিড (H₂SO₄):</span>
              <p className="text-[10px] text-slate-300 font-mono mt-0.5">
                (১ × ২) + (৩২ × ১) + (১৬ × ৪) = ২ + ৩২ + ৬৪ = <span className="text-amber-300 font-bold">৯৮</span>
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">M = ৯৮ g/mol</span>
            </div>
          </div>

          {/* CuSO4.5H2O Blue Vitriol example */}
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <span className="font-bold text-cyan-400 text-xs">তুঁতে / ব্লু ভিট্রিয়ল (CuSO₄·5H₂O):</span>
              <p className="text-[10px] text-slate-300 font-mono mt-0.5">
                [৬৩.৫ + ৩২ + (১৬×৪)] + ৫ × [(১×২) + ১৬] = ১৫৯.৫ + ৯০ = <span className="text-cyan-300 font-bold">২৪৯.৫</span>
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono font-bold">M = ২৪৯.৫ g/mol</span>
            </div>
          </div>

          {/* Glucose example */}
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <span className="font-bold text-emerald-400 text-xs">গ্লুকোজ (C₆H₁₂O₆):</span>
              <p className="text-[10px] text-slate-300 font-mono mt-0.5">
                (১২ × ৬) + (১ × ১২) + (১৬ × ৬) = ৭২ + ১২ + ৯৬ = <span className="text-emerald-300 font-bold">১৮০</span>
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">M = ১৮০ g/mol</span>
            </div>
          </div>
        </div>

        <div className="p-2 bg-indigo-950/40 rounded-lg text-xs text-indigo-200 border border-indigo-900/60 text-center font-mono">
          মনে রাখবেন: আণবিক ভর একটি আপেক্ষিক রাশি হওয়ায় এর কোনো একক নেই, কিন্তু মোলার ভরের একক সর্বদা g/mol!
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 3. MASTER MOLE FORMULA (মোলের মাস্টার সমীকরণ)
  // -------------------------------------------------------------
  if (type === 'moleMasterTriangle') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">মোলের মাস্টার সমীকরণ ও রূপান্তর সূত্র (Universal Mole Bridge)</span>
          <span className="text-[10px] text-amber-300 font-mono">n = W/M = N/Nₐ = V/২২.৪ = S×V</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
          <div className="inline-block p-2.5 px-4 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-emerald-500/20 rounded-xl border border-amber-500/40 mb-3">
            <span className="text-sm sm:text-base font-black text-white font-mono tracking-wider">
              n = <span className="text-amber-400">W / M</span> = <span className="text-cyan-400">N / Nₐ</span> = <span className="text-emerald-400">V / ২২.৪</span> = <span className="text-rose-400">S × V(L)</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
            <div className="p-2 bg-slate-950 rounded-lg border border-amber-500/30">
              <span className="text-[10px] font-bold text-amber-400 block">১. ভর থেকে মোল</span>
              <p className="text-[9px] text-slate-300 font-mono">n = W / M</p>
              <p className="text-[8.5px] text-slate-400 mt-1">W = গ্রামে ভর, M = মোলার ভর (g/mol)</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-cyan-500/30">
              <span className="text-[10px] font-bold text-cyan-400 block">২. কণা থেকে মোল</span>
              <p className="text-[9px] text-slate-300 font-mono">n = N / Nₐ</p>
              <p className="text-[8.5px] text-slate-400 mt-1">N = কণা সংখ্যা, Nₐ = ৬.০২×১০²³</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-emerald-500/30">
              <span className="text-[10px] font-bold text-emerald-400 block">৩. STP আয়তন থেকে মোল</span>
              <p className="text-[9px] text-slate-300 font-mono">n = V / ২২.৪ L</p>
              <p className="text-[8.5px] text-slate-400 mt-1">V = লিটার এককে গ্যাসের আয়তন</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-rose-500/30">
              <span className="text-[10px] font-bold text-rose-400 block">৪. দ্রবণ থেকে মোল</span>
              <p className="text-[9px] text-slate-300 font-mono">n = S × V(L)</p>
              <p className="text-[8.5px] text-slate-400 mt-1">S = মোলারিটি (M), V = আয়তন (লিটার)</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-amber-950/40 rounded-lg text-xs text-amber-200 border border-amber-900/60 text-center font-mono">
          যেকোনো দুটি পদের মান সমান ধরে যেকোনো অজানা রাশি মুহূর্তেই বের করা সম্ভব (যেমন: W/M = N/NA)!
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 4. MOLAR VOLUME & STP (গ্যাসের মোলার আয়তন)
  // -------------------------------------------------------------
  if (type === 'gasMolarVolumeSTP') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-sky-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-sky-400">গ্যাসের মোলার আয়তন: STP বনাম SATP</span>
          <span className="text-[10px] text-sky-300 font-mono">১ মোল গ্যাস = ২২.৪ L (STP)</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-sky-950/40 rounded-xl border border-sky-600/50">
              <span className="font-bold text-sky-300 text-xs block mb-1">প্রমাণ অবস্থা (STP - Standard Temp & Pressure)</span>
              <div className="space-y-1 text-[10px] text-slate-300 font-mono">
                <p>• তাপমাত্রা: <strong className="text-white">০°C বা ২৭৩.১৫ K</strong></p>
                <p>• চাপ: <strong className="text-white">১ atm (৭৬০ mmHg বা ১০১.৩২৫ kPa)</strong></p>
                <p>• মোলার আয়তন: <strong className="text-sky-300 text-sm font-bold">২২.৪ লিটার (dm³)</strong></p>
              </div>
              <p className="text-[9.5px] text-slate-400 mt-2">বোর্ড পরীক্ষার সকল পাঠ্যবইয়ের গাণিতিক হিসাব মূলত STP ভিত্তিক।</p>
            </div>

            <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-600/50">
              <span className="font-bold text-indigo-300 text-xs block mb-1">কক্ষ তাপমাত্রা (SATP - Ambient Standard)</span>
              <div className="space-y-1 text-[10px] text-slate-300 font-mono">
                <p>• তাপমাত্রা: <strong className="text-white">২৫°C বা ২৯৮.১৫ K</strong></p>
                <p>• চাপ: <strong className="text-white">১০০ kPa (বা ১ bar)</strong></p>
                <p>• মোলার আয়তন: <strong className="text-indigo-300 text-sm font-bold">২৪.৭৮৯ লিটার</strong></p>
              </div>
              <p className="text-[9.5px] text-slate-400 mt-2">উচ্চতর রসায়ন ও আধুনিক গবেষণাগারে SATP শর্ত সর্বাধিক ব্যবহৃত হয়।</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-sky-950/40 rounded-lg text-xs text-sky-200 border border-sky-900/60 text-center font-mono">
          অ্যাভোগাড্রোর গ্যাস সূত্র: একই তাপমাত্রা ও চাপে সম-আয়তনের সকল গ্যাসে সমান সংখ্যক অণু থাকে।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 5. MOLAR SOLUTION CONCENTRATION TYPES
  // -------------------------------------------------------------
  if (type === 'molarSolutionTypes') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">মোলার দ্রবণ ও ঘনমাত্রার শ্রেণিবিভাগ (Molar Solutions)</span>
          <span className="text-[10px] text-emerald-300 font-mono">১ লিটার দ্রবণে দ্রবীভূত মোল সংখ্যা</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-2.5 bg-emerald-950/40 rounded-lg border border-emerald-700/60 text-center">
              <span className="text-xs font-bold text-emerald-300 block mb-1">মোলার দ্রবণ</span>
              <span className="text-lg font-black text-white font-mono block">1.0 M</span>
              <p className="text-[9.5px] text-slate-300 mt-1">১ লিটারে ১ মোল দ্রাব</p>
              <p className="text-[8.5px] text-slate-400">ঘনমাত্রা = ১ মোল/লিটার</p>
            </div>

            <div className="p-2.5 bg-cyan-950/40 rounded-lg border border-cyan-700/60 text-center">
              <span className="text-xs font-bold text-cyan-300 block mb-1">সেমিমোলার দ্রবণ</span>
              <span className="text-lg font-black text-white font-mono block">0.5 M</span>
              <p className="text-[9.5px] text-slate-300 mt-1">১ লিটারে ০.৫ মোল দ্রাব</p>
              <p className="text-[8.5px] text-slate-400">M / 2 দ্রবণ</p>
            </div>

            <div className="p-2.5 bg-amber-950/40 rounded-lg border border-amber-700/60 text-center">
              <span className="text-xs font-bold text-amber-300 block mb-1">ডেসিমোলার দ্রবণ</span>
              <span className="text-lg font-black text-white font-mono block">0.1 M</span>
              <p className="text-[9.5px] text-slate-300 mt-1">১ লিটারে ০.১ মোল দ্রাব</p>
              <p className="text-[8.5px] text-slate-400">M / 10 দ্রবণ</p>
            </div>

            <div className="p-2.5 bg-purple-950/40 rounded-lg border border-purple-700/60 text-center">
              <span className="text-xs font-bold text-purple-300 block mb-1">সেন্টিমোলার দ্রবণ</span>
              <span className="text-lg font-black text-white font-mono block">0.01 M</span>
              <p className="text-[9.5px] text-slate-300 mt-1">১ লিটারে ০.০১ মোল দ্রাব</p>
              <p className="text-[8.5px] text-slate-400">M / 100 দ্রবণ</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-emerald-950/40 rounded-lg text-xs text-emerald-200 border border-emerald-900/60 text-center font-mono">
          গুরুত্বপূর্ণ তথ্য: তাপমাত্রা বৃদ্ধি পেলে দ্রবণের আয়তন বৃদ্ধি পায়, ফলে মোলারিটি (M) হ্রাস পায়!
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 6. MOLARITY FORMULA & VOLUMETRIC FLASK
  // -------------------------------------------------------------
  if (type === 'molarityVolumetricFlask') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-teal-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-teal-400">মোলারিটি নির্ণয় ও প্রমাণ দ্রবণ প্রস্তুতি (W = SMV / ১০০০)</span>
          <span className="text-[10px] text-teal-300 font-mono">ল্যাবরেটরি মেজারিং ফ্লাস্ক পদ্ধতি</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="bg-slate-950 p-2.5 rounded-lg border border-teal-500/30 text-center mb-3">
            <span className="font-mono text-base font-bold text-teal-300">
              W = (S × M × V) / ১০০০
            </span>
            <p className="text-[10px] text-slate-400 mt-0.5">
              W = প্রয়োজনীয় ভর (g) | S = মোলারিটি (M) | M = মোলার ভর (g/mol) | V = আয়তন (mL)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-teal-400 font-bold block mb-1">১. ওজন গ্রহণ (Weighing)</span>
              <p className="text-[10px] text-slate-300">ডিজিটাল ব্যালেন্সে ওয়াচ গ্লাসে সঠিক পরিমাণ শুষ্ক কঠিন দ্রাব (যেমন Na₂CO₃) ওজন করা হয়।</p>
            </div>
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-teal-400 font-bold block mb-1">২. দ্রবীভূতকরণ (Dissolving)</span>
              <p className="text-[10px] text-slate-300">বিকারের অল্প পাতিত পানিতে দ্রাবকে সম্পূর্ণ গুলে ফানেল দিয়ে মেজারিং ফ্লাস্কে ঢালা হয়।</p>
            </div>
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-teal-400 font-bold block mb-1">৩. দাগ পর্যন্ত পূর্ণ (Meniscus)</span>
              <p className="text-[10px] text-slate-300">ফ্লাস্কের দাগ বরাবর ড্রপার দিয়ে পানি যোগ করে নিম্ন তলের সাথে স্পর্শ করানো হয়।</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-teal-950/40 rounded-lg text-xs text-teal-200 border border-teal-900/60 text-center font-mono">
          লঘুকরণ সূত্র: S₁V₁ = S₂V₂ (ঘন দ্রবণ থেকে লঘু দ্রবণ তৈরির নির্ভুল সমীকরণ)
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 7. PERCENTAGE COMPOSITION (শতকরা সংযুতি)
  // -------------------------------------------------------------
  if (type === 'percentageComposition') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-pink-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-pink-400">যৌগে মৌলের শতকরা সংযুতি নির্ণয় (Percentage Composition)</span>
          <span className="text-[10px] text-pink-300 font-mono">% = [(Ar × পরমাণু সংখ্যা) / M] × ১০০%</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-amber-400">সালফিউরিক এসিড (H₂SO₄ — আণবিক ভর ৯৮)</span>
              <span className="text-[10px] text-slate-400 font-mono">যোগফল = ১০০%</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-blue-950/40 p-1.5 rounded border border-blue-800/60 font-mono">
                <span className="text-blue-300 block text-[11px]">%H = ২.০৪%</span>
                <span className="text-[9px] text-slate-400">(২ / ৯৮) × ১০০%</span>
              </div>
              <div className="bg-amber-950/40 p-1.5 rounded border border-amber-800/60 font-mono">
                <span className="text-amber-300 block text-[11px]">%S = ৩২.৬৫%</span>
                <span className="text-[9px] text-slate-400">(৩২ / ৯৮) × ১০০%</span>
              </div>
              <div className="bg-rose-950/40 p-1.5 rounded border border-rose-800/60 font-mono">
                <span className="text-rose-300 block text-[11px]">%O = ৬৫.৩১%</span>
                <span className="text-[9px] text-slate-400">(৬৪ / ৯৮) × ১০০%</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-cyan-400">পানি (H₂O — আণবিক ভর ১৮)</span>
              <span className="text-[10px] text-slate-400 font-mono">যোগফল = ১০০%</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="bg-cyan-950/40 p-1.5 rounded border border-cyan-800/60 font-mono">
                <span className="text-cyan-300 block text-[11px]">%H = ১১.১১%</span>
                <span className="text-[9px] text-slate-400">(২ / ১৮) × ১০০%</span>
              </div>
              <div className="bg-rose-950/40 p-1.5 rounded border border-rose-800/60 font-mono">
                <span className="text-rose-300 block text-[11px]">%O = ৮৮.৮৯%</span>
                <span className="text-[9px] text-slate-400">(১৬ / ১৮) × ১০০%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 bg-pink-950/40 rounded-lg text-xs text-pink-200 border border-pink-900/60 text-center font-mono">
          যাচাইয়ের ম্যাজিক ট্রিক: মৌলগুলোর শতকরা সংযুতির যোগফল সর্বদা ৯৯.৯% থেকে ১০০.১% এর মধ্যে হবে!
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 8. EMPIRICAL FORMULA 4 STEPS (স্থূল সংকেত)
  // -------------------------------------------------------------
  if (type === 'empiricalFormulaSteps') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-violet-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-violet-400">শতকরা সংযুতি থেকে স্থূল সংকেত নির্ণয়ের ৪টি ধাপ</span>
          <span className="text-[10px] text-violet-300 font-mono">Empirical Formula Algorithm</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2 bg-slate-950 rounded-lg border border-violet-500/30">
              <span className="text-violet-400 font-bold block mb-1">ধাপ ১: পারমাণবিক ভর দিয়ে ভাগ</span>
              <p className="text-[10px] text-slate-300 font-mono">ভাগফল = শতকরা সংযুতি / Ar</p>
              <p className="text-[9px] text-slate-400 mt-1">প্রতিটি মৌলের শতকরা পরিমাণকে তার পারমাণবিক ভর দ্বারা ভাগ করতে হবে।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-violet-500/30">
              <span className="text-violet-400 font-bold block mb-1">ধাপ ২: ক্ষুদ্রতম ভাগফল দিয়ে ভাগ</span>
              <p className="text-[10px] text-slate-300 font-mono">অনুপাত = ভাগফল / min(ভাগফল)</p>
              <p className="text-[9px] text-slate-400 mt-1">ধাপ ১-এর প্রাপ্ত ভাগফলগুলোর মধ্যে যেটি সবচেয়ে ছোট, তা দিয়ে সবাইকে ভাগ করতে হবে।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-violet-500/30">
              <span className="text-violet-400 font-bold block mb-1">ধাপ ৩: পূর্ণসংখ্যা রূপান্তর</span>
              <p className="text-[10px] text-slate-300 font-mono">ভগ্নাংশ আসলে গুণ (×2 বা ×3)</p>
              <p className="text-[9px] text-slate-400 mt-1">যদি অনুপাত ১.৫ আসে তবে সবাইকে ২ দিয়ে গুণ করে ৩ করতে হবে যাতে পূর্ণসংখ্যা হয়।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-violet-500/30">
              <span className="text-violet-400 font-bold block mb-1">ধাপ ৪: সংকেত উপস্থাপন</span>
              <p className="text-[10px] text-slate-300 font-mono">প্রতীকের ডানে সাবস্ক্রিপ্ট</p>
              <p className="text-[9px] text-slate-400 mt-1">মৌলগুলোর প্রতীকের নিচে ডানপাশে পূর্ণসংখ্যা অনুপাত বসিয়ে স্থূল সংকেত পাওয়া যায় (যেমন CH₂O)।</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-violet-950/40 rounded-lg text-xs text-violet-200 border border-violet-900/60 text-center font-mono">
          উদাহরণ: গ্লুকোজে C:H:O = ১ : ২ : ১ হওয়ায় এর স্থূল সংকেত হলো CH₂O।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 9. MOLECULAR FORMULA DERIVATION
  // -------------------------------------------------------------
  if (type === 'molecularFormulaDerivation') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-blue-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-blue-400">স্থূল সংকেত থেকে আণবিক সংকেত নির্ণয়</span>
          <span className="text-[10px] text-blue-300 font-mono">আণবিক সংকেত = (স্থূল সংকেত)ₙ</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2.5">
          <div className="bg-slate-950 p-2.5 rounded-lg border border-blue-500/30 text-center">
            <span className="font-mono text-sm font-bold text-blue-300">
              n = আণবিক ভর / স্থূল সংকেতের ভর
            </span>
            <p className="text-[10px] text-slate-400 mt-0.5">
              যদি প্রশ্নে বাষ্প ঘনত্ব (D) দেওয়া থাকে, তবে: <strong className="text-white">আণবিক ভর = ২ × বাষ্প ঘনত্ব (২ × D)</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="font-bold text-emerald-400 block mb-1">গ্লুকোজের আণবিক সংকেত:</span>
              <p className="text-[10px] text-slate-300 font-mono">
                • স্থূল সংকেত: CH₂O (ভর = ১২ + ২ + ১৬ = ৩০)<br />
                • আণবিক ভর: ১৮০<br />
                • n = ১৮০ / ৩০ = <strong className="text-white">৬</strong><br />
                • আণবিক সংকেত = (CH₂O)₆ = <strong className="text-emerald-300">C₆H₁₂O₆</strong>
              </p>
            </div>

            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="font-bold text-cyan-400 block mb-1">বেনজিনের আণবিক সংকেত:</span>
              <p className="text-[10px] text-slate-300 font-mono">
                • স্থূল সংকেত: CH (ভর = ১২ + ১ = ১৩)<br />
                • আণবিক ভর: ৭৮<br />
                • n = ৭৮ / ১৩ = <strong className="text-white">৬</strong><br />
                • আণবিক সংকেত = (CH)₆ = <strong className="text-cyan-300">C₆H₆</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-blue-950/40 rounded-lg text-xs text-blue-200 border border-blue-900/60 text-center font-mono">
          কখন স্থূল সংকেত ও আণবিক সংকেত একই হয়? যখন n = ১ হয় (যেমন: H₂O, HCl, NH₃, H₂SO₄, CO₂)।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 10. STOICHIOMETRY & BALANCED EQUATIONS
  // -------------------------------------------------------------
  if (type === 'stoichiometryReaction') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-orange-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-orange-400">রাসায়নিক সমীকরণ ও স্টয়কিওমিতির মূলনীতি</span>
          <span className="text-[10px] text-orange-300 font-mono">Stoichiometry: Mole-Mass-Volume Balance</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="text-center mb-3">
            <span className="text-sm font-bold text-white bg-slate-950 px-3 py-1.5 rounded-lg border border-orange-500/40 font-mono">
              2H₂ (g) + O₂ (g) ⟶ 2H₂O (l)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-center">
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-orange-400 font-bold block mb-1">মোল অনুপাত</span>
              <p className="text-[11px] text-slate-300 font-mono">২ মোল H₂ + ১ মোল O₂ ⟶ ২ মোল H₂O</p>
              <p className="text-[9px] text-slate-400 mt-1">সহগ সংখ্যাই হলো মোল সংখ্যা</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-orange-400 font-bold block mb-1">ভর সম্পর্ক (সংরক্ষণশীল)</span>
              <p className="text-[11px] text-slate-300 font-mono">৪ গ্রাম H₂ + ৩২ গ্রাম O₂ ⟶ ৩৬ গ্রাম H₂O</p>
              <p className="text-[9px] text-slate-400 mt-1">বিক্রিয়কের মোট ভর = উৎপাদের মোট ভর</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-orange-400 font-bold block mb-1">গ্যাসের আয়তন (STP)</span>
              <p className="text-[11px] text-slate-300 font-mono">৪৪.৮ L H₂ + ২২.৪ L O₂ ⟶ ৩৬ mL পানি</p>
              <p className="text-[9px] text-slate-400 mt-1">উৎপাদ পানি তরল হওয়ায় আয়তন ৩৬ mL</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-orange-950/40 rounded-lg text-xs text-orange-200 border border-orange-900/60 text-center font-mono">
          স্টয়কিওমিতির প্রধান নিয়ম: গণনার পূর্বে সমীকরণটির উভয় পাশে পরমাণু সংখ্যার সমতাকরণ (Balance) বাধ্যতামূলক!
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 11. LIMITING REACTANT ANALYSIS
  // -------------------------------------------------------------
  if (type === 'limitingReactantExcess') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">সীমিত বিক্রিয়ক (Limiting Reactant) ও অতিরিক্ত অংশের হিসাব</span>
          <span className="text-[10px] text-rose-300 font-mono">যে বিক্রিয়ক আগে শেষ হয়ে উৎপাদ সীমিত করে</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="p-2.5 bg-slate-950 rounded-lg border border-rose-500/30 text-center mb-3">
            <span className="text-xs text-slate-300 font-mono block">
              উদ্দীপক: ৪ গ্রাম H₂ এবং ২০ গ্রাম O₂ নিয়ে বিক্রিয়া ঘটানো হলো। কোনটি সীমিত বিক্রিয়ক?
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 bg-rose-950/40 rounded-lg border border-rose-800/60">
              <span className="font-bold text-rose-300 block mb-1">১. প্রয়োজনীয় অক্সিজেন হিসাব:</span>
              <p className="text-[10px] text-slate-300 font-mono">
                • ৪ গ্রাম H₂ এর জন্য প্রয়োজন = (৩২ × ৪) / ৪ = <strong className="text-white">৩২ গ্রাম O₂</strong><br />
                • কিন্তু পাত্রে অক্সিজেন সরবরাহ করা হয়েছে মাত্র <strong className="text-rose-400">২০ গ্রাম</strong>!<br />
                • অতএব অক্সিজেন আগে নিঃশেষ হয়ে যাবে।
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold text-[10px] border border-rose-500/40">
                🚨 অক্সিজেন (O₂) হলো সীমিত বিক্রিয়ক
              </span>
            </div>

            <div className="p-2.5 bg-emerald-950/40 rounded-lg border border-emerald-800/60">
              <span className="font-bold text-emerald-300 block mb-1">২. ব্যবহৃত হাইড্রোজেন ও অতিরিক্ত অংশ:</span>
              <p className="text-[10px] text-slate-300 font-mono">
                • ২০ গ্রাম O₂ বিক্রিয়া করবে = (৪ × ২০) / ৩২ = <strong className="text-white">২.৫ গ্রাম H₂</strong><br />
                • পাত্রে হাইড্রোজেন ছিল = ৪.০ গ্রাম<br />
                • অতিরিক্ত (অবশিষ্ট) H₂ = ৪.০ – ২.৫ = <strong className="text-emerald-300">১.৫ গ্রাম</strong>
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/40">
                ✅ হাইড্রোজেন (H₂) পাত্রে অবশিষ্ট থাকবে
              </span>
            </div>
          </div>
        </div>

        <div className="p-2 bg-rose-950/40 rounded-lg text-xs text-rose-200 border border-rose-900/60 text-center font-mono">
          উৎপাদের পরিমাণ সর্বদা সীমিত বিক্রিয়কের পরিমাণের উপর নির্ভর করে গণনা করতে হবে!
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 12. PERCENTAGE YIELD (উৎপাদের শতকরা পরিমাণ)
  // -------------------------------------------------------------
  if (type === 'percentageYieldGraph') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-teal-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-teal-400">উৎপাদের শতকরা পরিমাণ ও প্রকৃত ফলন (Percentage Yield)</span>
          <span className="text-[10px] text-teal-300 font-mono">% Yield = (প্রকৃত ফলন / তাত্ত্বিক ফলন) × ১০০%</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="bg-slate-950 p-2.5 rounded-lg border border-teal-500/30 text-center mb-3">
            <span className="text-sm font-bold text-teal-300 font-mono">
              শতকরা ফলন = (প্রকৃত ফলন / তাত্ত্বিক ফলন) × ১০০%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-teal-400 font-bold block mb-1">১. তাত্ত্বিক ফলন (Theoretical)</span>
              <p className="text-[10px] text-slate-300">সমীকরণ ও স্টয়কিওমিতি হিসাব করে ১০০% পূর্ণ বিক্রিয়া ধরে কাগজে-কলমে যে পরিমাণ উৎপাদ পাওয়া উচিত।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-teal-400 font-bold block mb-1">২. প্রকৃত ফলন (Actual)</span>
              <p className="text-[10px] text-slate-300">ল্যাবরেটরি বা শিল্প কারখানায় বাস্তবে বিক্রিয়া সম্পন্ন করার পর পরিমাপ করে যে ভর উৎপাদ পাওয়া যায়।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-teal-400 font-bold block mb-1">৩. ১০০% না পাওয়ার কারণ</span>
              <p className="text-[10px] text-slate-300">বিক্রিয়কের অবিশুদ্ধতা, পার্শ্ব বিক্রিয়া, উপজাত গঠন, পাত্রের দেয়ালে লেগে থাকা এবং অবিক্রিয়াশীল রিভার্সিবল বিক্রিয়া।</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-teal-950/40 rounded-lg text-xs text-teal-200 border border-teal-900/60 text-center font-mono">
          গ্রিন কেমিস্ট্রির লক্ষ্য: অপচয় কমিয়ে শতকরা ফলনকে ১০০%-এর যত কাছাকাছি সম্ভব নিয়ে যাওয়া।
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 13. CREATIVE QUESTION CQ STRATEGY
  // -------------------------------------------------------------
  if (type === 'creativeQuestionBreakdown') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-yellow-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-yellow-400">বোর্ড পরীক্ষার সৃজনশীল প্রশ্ন (CQ) সমাধান কৌশল</span>
          <span className="text-[10px] text-yellow-300 font-mono">ক, খ, গ, ঘ ধাপভিত্তিক পূর্ণাঙ্গ নম্বর প্রাপ্তি</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2 bg-slate-950 rounded-lg border border-yellow-500/30">
              <span className="text-yellow-400 font-bold block mb-1">ক (১ নম্বর) — জ্ঞানমূলক</span>
              <p className="text-[9.5px] text-slate-300">মোল, মোলারিটি, মোলার আয়তন বা অ্যাভোগাড্রো সংখ্যার বইয়ের হুবহু সঠিক সংজ্ঞা লিখুন।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-yellow-500/30">
              <span className="text-yellow-400 font-bold block mb-1">খ (২ নম্বর) — অনুধাবনমূলক</span>
              <p className="text-[9.5px] text-slate-300">"তাপমাত্রা বৃদ্ধিতে মোলারিটি হ্রাস পায় কেন?" বা "১ গ্রাম গ্যাসে অণু সংখ্যা কত?" যুক্তি সহ ব্যাখ্যা।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-yellow-500/30">
              <span className="text-yellow-400 font-bold block mb-1">গ (৩ নম্বর) — প্রয়োগমূলক</span>
              <p className="text-[9.5px] text-slate-300">W = SMV/1000 দিয়ে দ্রবণ প্রস্তুতি অথবা শতকরা সংযুতি থেকে স্থূল/আণবিক সংকেত বের করা।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-yellow-500/30">
              <span className="text-yellow-400 font-bold block mb-1">ঘ (৪ নম্বর) — উচ্চতর দক্ষতা</span>
              <p className="text-[9.5px] text-slate-300">বিক্রিয়কদ্বয়কে মেশালে কোনটি সীমিত বিক্রিয়ক হবে এবং প্রত্যাশিত উৎপাদ পাওয়া যাবে কিনা গাণিতিক যুক্তি।</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-yellow-950/40 rounded-lg text-xs text-yellow-200 border border-yellow-900/60 text-center font-mono">
          গোল্ডেন রুল: গাণিতিক সমস্যার ক্ষেত্রে একক (g, mol, L, mL, M) সঠিকভাবে লেখার ওপর পূর্ণ নম্বর নির্ভর করে!
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHEMISTRY CHAPTER 6: 14. CHAPTER 6 CONCEPT SUMMARY & MINDMAP
  // -------------------------------------------------------------
  if (type === 'chapter6ConceptSummary') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">অধ্যায় ৬-এর সমন্বিত রিভিশন মাইন্ডম্যাপ (Complete Chapter 6 Review)</span>
          <span className="text-[10px] text-cyan-300 font-mono">১০ মিনিটে সম্পূর্ণ অধ্যায় প্রস্তুতি</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2 bg-cyan-950/40 rounded-lg border border-cyan-800/60">
              <span className="text-cyan-300 font-bold block">১. মোল ও কণা</span>
              <p className="text-[9.5px] text-slate-300 font-mono mt-1">১ মোল = Nₐ কণা<br />= মোলার ভর (g)</p>
            </div>

            <div className="p-2 bg-amber-950/40 rounded-lg border border-amber-800/60">
              <span className="text-amber-300 font-bold block">২. STP ও দ্রবণ</span>
              <p className="text-[9.5px] text-slate-300 font-mono mt-1">২২.৪ L মোলার আয়তন<br />W = SMV / ১০০০</p>
            </div>

            <div className="p-2 bg-emerald-950/40 rounded-lg border border-emerald-800/60">
              <span className="text-emerald-300 font-bold block">৩. সংকেত নির্ণয়</span>
              <p className="text-[9.5px] text-slate-300 font-mono mt-1">% সংযুতি ⟶ স্থূল<br />আণবিক = (স্থূল)ₙ</p>
            </div>

            <div className="p-2 bg-rose-950/40 rounded-lg border border-rose-800/60">
              <span className="text-rose-300 font-bold block">৪. স্টয়কিওমিতি</span>
              <p className="text-[9.5px] text-slate-300 font-mono mt-1">সীমিত বিক্রিয়ক<br />% Yield ফলন</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-cyan-950/40 rounded-lg text-xs text-cyan-200 border border-cyan-900/60 text-center font-mono">
          অভিনন্দন! অধ্যায় ৬-এর সকল তাত্ত্বিক ও গাণিতিক নিয়ম আয়ত্ত হয়েছে। এবার ইন্টারেক্টিভ ল্যাব ও কুইজে অংশ নিন।
        </div>
      </div>
    );
  }


  // =============================================================
  // CHEMISTRY CHAPTER 7: CHEMICAL REACTIONS (রাসায়নিক বিক্রিয়া)
  // =============================================================

  // 1. PHYSICAL VS CHEMICAL CHANGE (ভৌত বনাম রাসায়নিক পরিবর্তন)
  if (type === 'physicalVsChemicalChange') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">ভৌত পরিবর্তন বনাম রাসায়নিক পরিবর্তন (Physical vs Chemical Change)</span>
          <span className="text-[10px] text-slate-400 font-mono">আণবিক গঠন ও বন্ধনের রূপান্তর</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
          {/* Physical change */}
          <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-800/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-300">ভৌত পরিবর্তন (Physical)</span>
                <span className="text-[10px] bg-cyan-900/60 text-cyan-200 px-1.5 py-0.5 rounded font-mono">H₂O(s) ⇌ H₂O(l)</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                পদার্থের বাহ্যিক অবস্থা বা আকৃতি বদলায়, কিন্তু নিজস্ব রাসায়নিক গঠন ও মূল অণু অপরিবর্তিত থাকে।
              </p>
              <div className="mt-2 p-2 bg-slate-900/80 rounded-lg text-center border border-slate-800">
                <div className="flex items-center justify-center gap-2 text-xs font-mono">
                  <span className="text-blue-300 bg-blue-950/80 px-2 py-1 rounded border border-blue-700/50">বরফ (কঠিন)</span>
                  <span className="text-cyan-400">⇌ তাপ ⇌</span>
                  <span className="text-cyan-300 bg-cyan-950/80 px-2 py-1 rounded border border-cyan-700/50">পানি (তরল)</span>
                </div>
                <span className="text-[9.5px] text-emerald-400 block mt-1">উভয় অবস্থাতেই H₂O অণু অক্ষত থাকে</span>
              </div>
            </div>
            <div className="mt-2 text-[10px] text-slate-400 bg-slate-950/60 p-1.5 rounded">
              বৈশিষ্ট্য: অস্থায়ী, সহজেই পূর্বাবস্থায় প্রত্যাবর্তন সম্ভব, সামান্য তাপ পরিবর্তন।
            </div>
          </div>

          {/* Chemical change */}
          <div className="p-3 bg-rose-950/30 rounded-xl border border-rose-800/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-300">রাসায়নিক পরিবর্তন (Chemical)</span>
                <span className="text-[10px] bg-rose-900/60 text-rose-200 px-1.5 py-0.5 rounded font-mono">CH₄ + 2O₂ ⟶ CO₂ + 2H₂O</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                পুরাতন বন্ধন ভেঙে পরমাণুগুলোর পুনর্বিন্যাস ঘটে এবং সম্পূর্ণ ভিন্ন ধর্মবিশিষ্ট নতুন অণু সৃষ্টি হয়।
              </p>
              <div className="mt-2 p-2 bg-slate-900/80 rounded-lg text-center border border-slate-800">
                <div className="flex items-center justify-center gap-1.5 text-xs font-mono">
                  <span className="text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-700/50">CH₄ + 2O₂</span>
                  <span className="text-rose-400">⟶ দহন ⟶</span>
                  <span className="text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-700/50">CO₂ + 2H₂O</span>
                </div>
                <span className="text-[9.5px] text-rose-400 block mt-1">+ প্রচুর তাপ (ΔH = -890 kJ/mol) নির্গত হয়</span>
              </div>
            </div>
            <div className="mt-2 text-[10px] text-slate-400 bg-slate-950/60 p-1.5 rounded">
              বৈশিষ্ট্য: স্থায়ী, সহজে অপ্রত্যাবর্তী, বিপুল পরিমাণ শক্তি বিনিময় ঘটে।
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-rose-200 border border-slate-800 text-center font-mono">
          মৌলিক নীতি: ভৌত পরিবর্তনে আন্তঃআণবিক আকর্ষণ বল বদলায়, রাসায়নিক পরিবর্তনে রাসায়নিক বন্ধন ভাঙে ও গড়ে।
        </div>
      </div>
    );
  }

  // 1b. COMBUSTION VS MELTING OF CANDLE (মোমবাতির গলন ও দহন)
  if (type === 'combustionVsMelting') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">বোর্ড স্পেশাল: মোমের জ্বলনে উভয় পরিবর্তনের মেকানিজম</span>
          <span className="text-[10px] text-amber-300 font-mono">বোর্ড পরীক্ষায় বারবার আসা প্রশ্ন</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2.5">
          <div className="flex items-center gap-2 p-2 bg-blue-950/40 rounded-lg border border-blue-800/50">
            <span className="text-base">🕯️</span>
            <div>
              <span className="text-xs font-bold text-blue-300 block">১. মোমের গলন ⟶ ভৌত পরিবর্তন</span>
              <p className="text-[10.5px] text-slate-300">
                মোমবাতির শিখার তাপে কঠিন হাইড্রোকার্বন মোম গলে তরলে পরিণত হয় এবং নিচে জমা হয়ে পুনরায় কঠিন মোমে রূপ নেয়। এটি শুধুই ভৌত অবস্থার রূপান্তর।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 bg-rose-950/40 rounded-lg border border-rose-800/50">
            <span className="text-base">🔥</span>
            <div>
              <span className="text-xs font-bold text-rose-300 block">২. মোমের জ্বলন ⟶ রাসায়নিক পরিবর্তন</span>
              <p className="text-[10.5px] text-slate-300">
                সলতের সাহায্যে মোমের বাষ্প উপরে উঠে বায়ুর অক্সিজেনের সাথে বিক্রিয়া করে: <span className="text-amber-300 font-mono">হাইড্রোকার্বন + O₂ ⟶ CO₂ + H₂O(বাষ্প) + তাপ ও আলো</span>। এটি স্থায়ী রাসায়নিক পরিবর্তন।
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-amber-950/40 rounded-lg text-xs text-amber-200 border border-amber-800/50 text-center font-mono">
          পরীক্ষার উত্তর টিপ: দুটি পরিবর্তনকে আলাদা প্যারায় সমীকরণসহ লিখলে পূর্ণ নম্বর নিশ্চিত হবে।
        </div>
      </div>
    );
  }

  // 2. REVERSIBLE VS IRREVERSIBLE REACTION (একমুখী ও উভমুখী বিক্রিয়া)
  if (type === 'reversibleIrreversibleEquilibrium') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-blue-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-blue-400">একমুখী বনাম উভমুখী বিক্রিয়া (Reaction Direction)</span>
          <span className="text-[10px] text-slate-400 font-mono">পাত্রের প্রভাব ও সাম্যাবস্থা</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300">খোলা পাত্রে: একমুখী (⟶)</span>
              <span className="text-[10px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded">Irreversible</span>
            </div>
            <div className="my-2 p-2 bg-slate-950 rounded text-center font-mono text-xs text-amber-200 border border-slate-800">
              CaCO₃(s) ⟶ CaO(s) + CO₂(g)↑
            </div>
            <p className="text-[11px] text-slate-300">
              খোলা পাত্রে উৎপন্ন CO₂ গ্যাস বাতাসে উড়ে চলে যায়। ফলে বিপরীতমুখী বিক্রিয়া সংঘটিত হতে পারে না।
            </p>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-cyan-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-300">বদ্ধ পাত্রে: উভমুখী (⇌)</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded">Reversible</span>
            </div>
            <div className="my-2 p-2 bg-slate-950 rounded text-center font-mono text-xs text-cyan-200 border border-slate-800">
              CaCO₃(s) ⇌ CaO(s) + CO₂(g)
            </div>
            <p className="text-[11px] text-slate-300">
              বদ্ধ পাত্রে CO₂ গ্যাস আটকা থাকে এবং CaO এর সাথে পুনরায় যুক্ত হয়ে CaCO₃ তৈরি করে। একসময় উভয় দিকের বেগ সমান হয়।
            </p>
          </div>
        </div>

        <div className="p-2 bg-blue-950/40 rounded-lg text-xs text-blue-200 border border-blue-900/60 text-center font-mono">
          সারকথা: উপযুক্ত শর্তে প্রায় সকল রাসায়নিক বিক্রিয়াই উভমুখী রূপ ধারণ করতে পারে।
        </div>
      </div>
    );
  }

  // 2b. DYNAMIC EQUILIBRIUM CURVE (গতিশীল সাম্যাবস্থা গ্রাফ)
  if (type === 'dynamicEquilibriumCurve') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">গতিশীল সাম্যাবস্থা গ্রাফ (Dynamic Equilibrium Curve)</span>
          <span className="text-[10px] text-cyan-300 font-mono">সম্মুখমুখী বেগ = পশ্চাৎমুখী বেগ</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
          <svg viewBox="0 0 360 140" className="w-full max-w-sm mx-auto">
            {/* Axes */}
            <line x1="40" y1="10" x2="40" y2="120" stroke="#64748b" strokeWidth="2" />
            <line x1="40" y1="120" x2="340" y2="120" stroke="#64748b" strokeWidth="2" />
            <text x="10" y="20" fill="#94a3b8" fontSize="9" fontStyle="italic">বেগ (r)</text>
            <text x="300" y="135" fill="#94a3b8" fontSize="9" fontStyle="italic">সময় (t)</text>

            {/* Forward rate (decreases) */}
            <path d="M 40 25 Q 140 30 200 70 L 330 70" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="45" y="22" fill="#38bdf8" fontSize="9" fontWeight="bold">সম্মুখমুখী বেগ (r₁)</text>

            {/* Reverse rate (increases) */}
            <path d="M 40 115 Q 140 110 200 70 L 330 70" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="45" y="110" fill="#f59e0b" fontSize="9" fontWeight="bold">পশ্চাৎমুখী বেগ (r₂)</text>

            {/* Equilibrium region */}
            <line x1="200" y1="10" x2="200" y2="120" stroke="#10b981" strokeDasharray="3,3" strokeWidth="1.5" />
            <text x="210" y="58" fill="#10b981" fontSize="9" fontWeight="bold">সাম্যাবস্থা (r₁ = r₂)</text>
          </svg>
          <span className="text-[10px] text-slate-400 block mt-1 font-mono">
            সাম্যাবস্থায় বিক্রিয়া থেমে যায় না, বরং অণু পর্যায়ে উভয়মুখী বিক্রিয়া সমান গতিতে চলতে থাকে।
          </span>
        </div>

        <div className="p-2 bg-cyan-950/40 rounded-lg text-xs text-cyan-200 border border-cyan-800/60 text-center font-mono">
          গুরুত্বপূর্ণ সত্য: সাম্যাবস্থা কখনোই স্থির নয়, এটি একটি সার্বক্ষণিক গতিশীল (Dynamic) অবস্থা।
        </div>
      </div>
    );
  }

  // 3. REACTION ENERGY PROFILE (তাপোৎপাদী বনাম তাপহারী বিক্রিয়া)
  if (type === 'reactionEnergyProfile') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">তাপের পরিবর্তন অনুসারে শ্রেণিবিভাগ (Exothermic vs Endothermic)</span>
          <span className="text-[10px] text-slate-400 font-mono">এনথালপি পরিবর্তন (ΔH)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
          {/* Exothermic */}
          <div className="p-3 bg-slate-900 rounded-xl border border-rose-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-300">তাপোৎপাদী বিক্রিয়া (ΔH &lt; 0)</span>
              <span className="text-[10px] bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded font-mono">Exothermic</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1">
              বিক্রিয়ায় তাপ নির্গত হয়, পরিবেশ উত্তপ্ত হয়। বিক্রিয়কের অভ্যন্তরীণ শক্তি &gt; উৎপাদের অভ্যন্তরীণ শক্তি।
            </p>
            <div className="my-2 p-1.5 bg-slate-950 rounded text-center font-mono text-[11px] text-rose-300 border border-slate-800">
              N₂ + 3H₂ ⇌ 2NH₃ ; ΔH = -92 kJ/mol
            </div>
            <span className="text-[9.5px] text-slate-400 block">উৎপাদের সাথে +92 kJ যোগ আকারেও লেখা যায়</span>
          </div>

          {/* Endothermic */}
          <div className="p-3 bg-slate-900 rounded-xl border border-cyan-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-300">তাপহারী বিক্রিয়া (ΔH &gt; 0)</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded font-mono">Endothermic</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1">
              বিক্রিয়ায় পরিবেশ থেকে তাপ শোষিত হয়, পরিবেশ শীতল হয়। বিক্রিয়কের শক্তি &lt; উৎপাদের শক্তি।
            </p>
            <div className="my-2 p-1.5 bg-slate-950 rounded text-center font-mono text-[11px] text-cyan-300 border border-slate-800">
              N₂ + O₂ ⇌ 2NO ; ΔH = +180 kJ/mol
            </div>
            <span className="text-[9.5px] text-slate-400 block">বিক্রিয়কের সাথে +180 kJ অথবা উৎপাদে -180 kJ লেখা হয়</span>
          </div>
        </div>

        <div className="p-2 bg-emerald-950/40 rounded-lg text-xs text-emerald-200 border border-emerald-900/60 text-center font-mono">
          বন্ধন নীতি: বন্ধন ভাঙতে শক্তি লাগে (শোষণ) এবং নতুন বন্ধন গঠনে শক্তি নির্গত হয় (নির্গমন)।
        </div>
      </div>
    );
  }

  // 3b. BOND ENERGY CALCULATION (বন্ধন শক্তি দিয়ে ΔH নির্ণয়)
  if (type === 'bondEnergyCalculation') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">বন্ধন শক্তি দিয়ে বিক্রিয়া তাপ (ΔH) হিসাবের সূত্র</span>
          <span className="text-[10px] text-emerald-300 font-mono">বোর্ড গাণিতিক সমস্যা</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="p-2 bg-slate-950 rounded-lg text-center font-mono text-sm text-emerald-300 border border-slate-800">
            ΔH = Σ(বিক্রিয়কসমূহের বন্ধন ভাঙার মোট শক্তি, B₁) - Σ(উৎপাদসমূহের বন্ধন গড়ার মোট শক্তি, B₂)
          </div>

          <div className="p-2.5 bg-emerald-950/30 rounded-lg border border-emerald-800/50 text-xs space-y-1.5">
            <span className="font-bold text-emerald-300 block">উদাহরণ: CH₄ + Cl₂ ⟶ CH₃Cl + HCl</span>
            <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono text-slate-300">
              <div className="p-1.5 bg-slate-950/80 rounded">
                ভাঙ্গা বন্ধন (B₁):<br />
                ১টি C–H (414) + ১টি Cl–Cl (244)<br />
                = <span className="text-cyan-300 font-bold">658 kJ</span>
              </div>
              <div className="p-1.5 bg-slate-950/80 rounded">
                গড়া বন্ধন (B₂):<br />
                ১টি C–Cl (326) + ১টি H–Cl (431)<br />
                = <span className="text-amber-300 font-bold">757 kJ</span>
              </div>
            </div>
            <div className="text-center font-mono text-[11px] text-rose-300 font-bold pt-1 border-t border-slate-800">
              ΔH = 658 - 757 = -99 kJ/mol (বিক্রিয়াটি তাপোৎপাদী)
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          মনে রাখবেন: B₁ &gt; B₂ হলে ΔH ধনাত্মক (তাপহারী), এবং B₁ &lt; B₂ হলে ΔH ঋণাত্মক (তাপোৎপাদী)।
        </div>
      </div>
    );
  }

  // 4. REDOX ELECTRON TRANSFER (রেডক্স ও আধুনিক ইলেকট্রনীয় মতবাদ)
  if (type === 'redoxElectronTransfer') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-indigo-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-indigo-400">রেডক্স ও আধুনিক ইলেকট্রনীয় মতবাদ (Redox Electron Transfer)</span>
          <span className="text-[10px] text-indigo-300 font-mono">জারণ = ছারণ, বিজারণ = গ্রহণ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
          {/* Oxidation */}
          <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300">জারণ (Oxidation)</span>
              <span className="text-[10px] bg-amber-900/60 text-amber-200 px-1.5 py-0.5 rounded">ইলেকট্রন বর্জন</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1">
              যে প্রক্রিয়ায় কোনো পরমাণু, আয়ন বা মূলক ইলেকট্রন ত্যাগ করে এবং তার ধনাত্মক চার্জ বৃদ্ধি পায় (অথবা ঋণাত্মক চার্জ হ্রাস পায়)।
            </p>
            <div className="my-2 p-2 bg-slate-950 rounded text-center font-mono text-xs text-amber-300 border border-slate-800">
              Na ⟶ Na⁺ + e⁻<br />
              Fe²⁺ ⟶ Fe³⁺ + e⁻
            </div>
            <span className="text-[10px] text-amber-400 font-bold block text-center">যে নিজে জারিত হয়, সে বিজারক (Reducing Agent)</span>
          </div>

          {/* Reduction */}
          <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-300">বিজারণ (Reduction)</span>
              <span className="text-[10px] bg-cyan-900/60 text-cyan-200 px-1.5 py-0.5 rounded">ইলেকট্রন গ্রহণ</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1">
              যে প্রক্রিয়ায় কোনো পরমাণু, আয়ন বা মূলক ইলেকট্রন গ্রহণ করে এবং তার ধনাত্মক চার্জ হ্রাস পায় (অথবা ঋণাত্মক চার্জ বৃদ্ধি পায়)।
            </p>
            <div className="my-2 p-2 bg-slate-950 rounded text-center font-mono text-xs text-cyan-300 border border-slate-800">
              Cl + e⁻ ⟶ Cl⁻<br />
              Cu²⁺ + 2e⁻ ⟶ Cu
            </div>
            <span className="text-[10px] text-cyan-400 font-bold block text-center">যে নিজে বিজারিত হয়, সে জারক (Oxidizing Agent)</span>
          </div>
        </div>

        <div className="p-2 bg-indigo-950/40 rounded-lg text-xs text-indigo-200 border border-indigo-900/60 text-center font-mono">
          ম্যাজিক নেমোনিক: OIL RIG — Oxidation Is Loss of electrons, Reduction Is Gain of electrons!
        </div>
      </div>
    );
  }

  // 4b. OXIDIZING & REDUCING AGENT GUIDE (জারক ও বিজারক শনাক্তকরণ কৌশল)
  if (type === 'oxidizingReducingAgentGuide') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-indigo-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-indigo-400">জারক ও বিজারক শনাক্তকরণের গোল্ডেন চার্ট</span>
          <span className="text-[10px] text-indigo-300 font-mono">বোর্ড MCQ ও সৃজনশীল কৌশল</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 text-[11px]">
                <th className="pb-1.5">বৈশিষ্ট্য</th>
                <th className="pb-1.5 text-amber-300">বিজারক (Reducing Agent)</th>
                <th className="pb-1.5 text-cyan-300">জারক (Oxidizing Agent)</th>
              </tr>
            </thead>
            <tbody className="text-[11px] divide-y divide-slate-800 text-slate-300 font-mono">
              <tr>
                <td className="py-1.5 text-slate-400">ইলেকট্রন আচরণ</td>
                <td className="py-1.5 text-amber-400 font-bold">ইলেকট্রন দান করে (e⁻ দাতা)</td>
                <td className="py-1.5 text-cyan-400 font-bold">ইলেকট্রন গ্রহণ করে (e⁻ গ্রহীতা)</td>
              </tr>
              <tr>
                <td className="py-1.5 text-slate-400">নিজের অবস্থা</td>
                <td className="py-1.5">নিজে জারিত হয়</td>
                <td className="py-1.5">নিজে বিজারিত হয়</td>
              </tr>
              <tr>
                <td className="py-1.5 text-slate-400">জারণ মান</td>
                <td className="py-1.5 text-emerald-400">জারণ সংখ্যা বৃদ্ধি পায় (⬆)</td>
                <td className="py-1.5 text-rose-400">জারণ সংখ্যা হ্রাস পায় (⬇)</td>
              </tr>
              <tr>
                <td className="py-1.5 text-slate-400">পরিচিত উদাহরণ</td>
                <td className="py-1.5">Na, Zn, C, CO, H₂, H₂S, Fe²⁺</td>
                <td className="py-1.5">O₂, Cl₂, KMnO₄, K₂Cr₂O₇, H₂SO₄, Cu²⁺</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-2 bg-indigo-950/40 rounded-lg text-xs text-indigo-200 border border-indigo-900/60 text-center font-mono">
          শর্টকাট নিয়ম: বিক্রিয়ার পর যার জারণ সংখ্যা বাড়বে সে বিজারক, যার জারণ সংখ্যা কমবে সে জারক।
        </div>
      </div>
    );
  }

  // 5. FIVE TYPES OF REDOX REACTIONS (৫টি প্রধান রেডক্স বিক্রিয়ার শ্রেণিবিভাগ)
  if (type === 'fiveRedoxReactionTypes') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">রেডক্স বিক্রিয়ার ৫টি প্রধান প্রকারভেদ (Types of Redox Reactions)</span>
          <span className="text-[10px] text-slate-400 font-mono">সবগুলোতেই ইলেকট্রন স্থানান্তর ঘটে</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-2 text-xs">
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-cyan-300 font-bold block">১. সংযোজন (Addition)</span>
            <p className="text-[10px] text-slate-400 mt-0.5">দুই বা ততোধিক পদার্থ যুক্ত হয়ে একটি উৎপাদ।</p>
            <span className="text-[10.5px] font-mono text-cyan-200 block mt-1 bg-slate-950 p-1 rounded">2Mg + O₂ ⟶ 2MgO</span>
          </div>

          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-emerald-300 font-bold block">২. সংশ্লেষণ (Synthesis)</span>
            <p className="text-[10px] text-slate-400 mt-0.5">শুধুমাত্র মৌলিক পদার্থ যুক্ত হয়ে নতুন যৌগ।</p>
            <span className="text-[10.5px] font-mono text-emerald-200 block mt-1 bg-slate-950 p-1 rounded">2H₂ + O₂ ⟶ 2H₂O</span>
          </div>

          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-amber-300 font-bold block">৩. বিয়োজন (Decomposition)</span>
            <p className="text-[10px] text-slate-400 mt-0.5">একটি যৌগ ভেঙে একাধিক পদার্থে পরিণত।</p>
            <span className="text-[10.5px] font-mono text-amber-200 block mt-1 bg-slate-950 p-1 rounded">2PCl₅ ⇌ 2PCl₃ + Cl₂</span>
          </div>

          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-indigo-300 font-bold block">৪. প্রতিস্থাপন (Displacement)</span>
            <p className="text-[10px] text-slate-400 mt-0.5">অধিক সক্রিয় মৌল কম সক্রিয় মৌলকে সরায়।</p>
            <span className="text-[10.5px] font-mono text-indigo-200 block mt-1 bg-slate-950 p-1 rounded">Zn + CuSO₄ ⟶ ZnSO₄ + Cu</span>
          </div>

          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 sm:col-span-2 md:col-span-1">
            <span className="text-rose-300 font-bold block">৫. দহন (Combustion)</span>
            <p className="text-[10px] text-slate-400 mt-0.5">বাতাসের অক্সিজেনের উপস্থিতিতে পুড়ে তাপ উৎপন্ন।</p>
            <span className="text-[10.5px] font-mono text-rose-200 block mt-1 bg-slate-950 p-1 rounded">CH₄ + 2O₂ ⟶ CO₂ + 2H₂O</span>
          </div>
        </div>

        <div className="p-2 bg-rose-950/40 rounded-lg text-xs text-rose-200 border border-rose-900/60 text-center font-mono">
          বোর্ড বিশেষত্ব: সকল সংশ্লেষণ বিক্রিয়াই সংযোজন বিক্রিয়া, কিন্তু সকল সংযোজন বিক্রিয়া সংশ্লেষণ নয়!
        </div>
      </div>
    );
  }

  // 5b. DISPLACEMENT & ACTIVITY SERIES (সক্রিয়তা সিরিজ ও প্রতিস্থাপন)
  if (type === 'displacementActivitySeries') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-indigo-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-indigo-400">ধাতুর সক্রিয়তা সিরিজ ও প্রতিস্থাপন বিক্রিয়ার মূলনীতি</span>
          <span className="text-[10px] text-indigo-300 font-mono">Activity Series of Metals</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="p-2 bg-slate-950 rounded-lg text-center font-mono text-xs text-cyan-300 border border-slate-800 overflow-x-auto whitespace-nowrap">
            K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Pb &gt; <span className="text-rose-400 font-bold">[H]</span> &gt; Cu &gt; Ag &gt; Pt &gt; Au
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-emerald-950/40 rounded-lg border border-emerald-800/50">
              <span className="text-emerald-300 font-bold block">কেন Zn কপারকে সরাতে পারে?</span>
              <p className="text-[10.5px] text-slate-300 mt-1">
                Zn কপার (Cu) এর উপরে অবস্থিত হওয়ায় Zn অধিক শক্তিশালী বিজারক। সে Cu²⁺ কে সহজে ২টি ইলেকট্রন দিয়ে মুক্ত Cu এ পরিণত করে।
              </p>
            </div>
            <div className="p-2 bg-rose-950/40 rounded-lg border border-rose-800/50">
              <span className="text-rose-300 font-bold block">কেন Cu জিংককে সরাতে পারে না?</span>
              <p className="text-[10.5px] text-slate-300 mt-1">
                <span className="font-mono">Cu + ZnSO₄ ⟶ বিক্রিয়া ঘটে না!</span> কারণ Cu এর সক্রিয়তা Zn এর চেয়ে কম, সে Zn²⁺ কে বিজারিত করতে পারে না।
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-indigo-950/40 rounded-lg text-xs text-indigo-200 border border-indigo-900/60 text-center font-mono">
          পরীক্ষার ট্রিক: সক্রিয়তা সিরিজে যে উপরে থাকবে, সে নিচের মৌলকে তার লবণ দ্রবণ থেকে তাড়িয়ে দেবে।
        </div>
      </div>
    );
  }

  // 6. NON-REDOX REACTIONS (নন-রেডক্স: প্রশমন ও অধঃক্ষেপণ)
  if (type === 'neutralizationPrecipitation') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-purple-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-purple-400">নন-রেডক্স বিক্রিয়া: প্রশমন ও অধঃক্ষেপণ (Non-Redox Reactions)</span>
          <span className="text-[10px] text-slate-400 font-mono">কোনো জারণ সংখ্যার পরিবর্তন হয় না</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
          {/* Neutralization */}
          <div className="p-3 bg-slate-900 rounded-xl border border-purple-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-300">১. প্রশমন বিক্রিয়া (Neutralization)</span>
              <span className="text-[10px] bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded">এসিড + ক্ষার</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1">
              এসিড ও ক্ষার বিক্রিয়া করে নিরপেক্ষ লবণ ও পানি তৈরি করে। সর্বদা তাপ উৎপন্ন হয়।
            </p>
            <div className="my-2 p-1.5 bg-slate-950 rounded text-center font-mono text-[11px] text-purple-300 border border-slate-800">
              HCl(aq) + NaOH(aq) ⟶ NaCl(aq) + H₂O(l)<br />
              <span className="text-emerald-400 font-bold">H⁺ + OH⁻ ⟶ H₂O ; ΔH = -57.34 kJ</span>
            </div>
            <span className="text-[9.5px] text-slate-400 block">তীব্র এসিড ও তীব্র ক্ষারের প্রশমন তাপ সর্বদা ধ্রুবক (-57.34 kJ)</span>
          </div>

          {/* Precipitation */}
          <div className="p-3 bg-slate-900 rounded-xl border border-cyan-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-300">২. অধঃক্ষেপণ বিক্রিয়া (Precipitation)</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded">অদ্রবণীয় তলানি ↓</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1">
              দুটি দ্রবণ মিশ্রিত করলে তাদের বিক্রিয়ায় কোনো উৎপাদ অদ্রবণীয় কঠিন হিসেবে পাত্রের তলায় জমা হয়।
            </p>
            <div className="my-2 p-1.5 bg-slate-950 rounded text-center font-mono text-[11px] text-cyan-300 border border-slate-800">
              AgNO₃(aq) + NaCl(aq) ⟶ AgCl(s)↓ + NaNO₃(aq)<br />
              <span className="text-amber-300 font-bold">Ag⁺(aq) + Cl⁻(aq) ⟶ AgCl(s)↓ (সাদা অধঃক্ষেপ)</span>
            </div>
            <span className="text-[9.5px] text-slate-400 block">কোনো পরমাণুরই জারণ সংখ্যা পরিবর্তিত হয় না</span>
          </div>
        </div>

        <div className="p-2 bg-purple-950/40 rounded-lg text-xs text-purple-200 border border-purple-900/60 text-center font-mono">
          কেন এরা নন-রেডক্স? কারণ বিক্রিয়ক ও উৎপাদের প্রতিটি মৌলের জারণ মান বিক্রিয়ার পূর্বে ও পরে হুবহু এক থাকে।
        </div>
      </div>
    );
  }

  // 6b. SPECTATOR IONS MECHANISM (দর্শক আয়ন মেকানিজম)
  if (type === 'spectatorIonsMechanism') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-purple-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-purple-400">দর্শক আয়ন (Spectator Ions) ও প্রকৃত আয়নীয় সমীকরণ</span>
          <span className="text-[10px] text-purple-300 font-mono">বোর্ড খ-নম্বর প্রশ্ন সমাধান</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="p-2 bg-slate-950 rounded-lg text-center font-mono text-xs text-slate-300 border border-slate-800">
            পূর্ণ সমীকরণ: HCl(aq) + NaOH(aq) ⟶ NaCl(aq) + H₂O(l)
          </div>

          <div className="p-2.5 bg-purple-950/30 rounded-lg border border-purple-800/50 text-xs space-y-1.5">
            <span className="font-bold text-purple-300 block">আয়নীয় বিশ্লেষণ:</span>
            <p className="font-mono text-[11px] text-slate-300">
              H⁺ + <span className="text-amber-400 font-bold">Cl⁻</span> + <span className="text-amber-400 font-bold">Na⁺</span> + OH⁻ ⟶ <span className="text-amber-400 font-bold">Na⁺</span> + <span className="text-amber-400 font-bold">Cl⁻</span> + H₂O(l)
            </p>
            <p className="text-[11px] text-slate-300">
              এখানে <span className="text-amber-400 font-bold">Na⁺</span> ও <span className="text-amber-400 font-bold">Cl⁻</span> আয়ন বিক্রিয়ার শুরুতে ও শেষে সম্পূর্ণ অপরিবর্তিত থাকে। এরা শুধুই দর্শক (Spectator)।
            </p>
            <div className="text-center font-mono text-xs text-emerald-300 font-bold pt-1 border-t border-slate-800">
              প্রকৃত বিক্রিয়া: H⁺(aq) + OH⁻(aq) ⟶ H₂O(l)
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          সংজ্ঞা: যে সকল আয়ন রাসায়নিক বিক্রিয়ায় সরাসরি অংশগ্রহণ না করে দ্রবণে অপরিবর্তিত অবস্থায় থাকে, তাদের দর্শক আয়ন বলে।
        </div>
      </div>
    );
  }

  // 7. SPECIAL REACTIONS (বিশেষ রাসায়নিক বিক্রিয়া: আর্দ্রবিশ্লেষণ, পানিযোজন, সমানুকরণ, পলিমারকরণ)
  if (type === 'specialReactionsMechanisms') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-teal-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-teal-400">৪টি বিশেষ রাসায়নিক বিক্রিয়া (Special Reaction Mechanisms)</span>
          <span className="text-[10px] text-slate-400 font-mono">জৈব ও অজৈব রসায়নের রূপান্তর</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 text-xs">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-cyan-300 font-bold block">১. আর্দ্রবিশ্লেষণ (Hydrolysis)</span>
            <p className="text-[10px] text-slate-300 mt-0.5">পানির H⁺ ও OH⁻ ভেঙে যৌগের উপাদানের সাথে যুক্ত হয়।</p>
            <span className="text-[10px] font-mono text-cyan-200 block mt-1 bg-slate-950 p-1 rounded">SiCl₄ + 4H₂O ⟶ Si(OH)₄ + 4HCl</span>
          </div>

          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-blue-300 font-bold block">২. পানিযোজন (Hydration)</span>
            <p className="text-[10px] text-slate-300 mt-0.5">পানির অণু না ভেঙে সম্পূর্ণ কেলাস পানি হিসেবে যুক্ত হয়।</p>
            <span className="text-[10px] font-mono text-blue-200 block mt-1 bg-slate-950 p-1 rounded">CuSO₄ + 5H₂O ⟶ CuSO₄·5H₂O (ব্লু ভিট্রিওল)</span>
          </div>

          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-amber-300 font-bold block">৩. সমানুকরণ (Isomerization)</span>
            <p className="text-[10px] text-slate-300 mt-0.5">আণবিক সংকেত একই রেখে পরমাণুর পুনর্বিন্যাসে নতুন যৌগ।</p>
            <span className="text-[10px] font-mono text-amber-200 block mt-1 bg-slate-950 p-1 rounded">NH₄CNO (অজৈব) ⟶ H₂N-CO-NH₂ (ইউরিয়া জৈব)</span>
          </div>

          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-emerald-300 font-bold block">৪. পলিমারকরণ (Polymerization)</span>
            <p className="text-[10px] text-slate-300 mt-0.5">অসংখ্য ক্ষুদ্র মনোমার যুক্ত হয়ে বৃহৎ পলিমার অণু গঠন।</p>
            <span className="text-[10px] font-mono text-emerald-200 block mt-1 bg-slate-950 p-1 rounded">n(CH₂=CH₂) ⟶ [-CH₂-CH₂-]ₙ (পলিথিন)</span>
          </div>
        </div>

        <div className="p-2 bg-teal-950/40 rounded-lg text-xs text-teal-200 border border-teal-900/60 text-center font-mono">
          ঐতিহাসিক গুরুত্ব: ভোহলার ১৮২৮ সালে অ্যামোনিয়াম সায়ানেট উত্তপ্ত করে সর্বপ্রথম পরীক্ষাগারে জৈব যৌগ ইউরিয়া তৈরি করেন।
        </div>
      </div>
    );
  }

  // 7b. HYDROLYSIS VS HYDRATION (আর্দ্রবিশ্লেষণ বনাম পানিযোজন)
  if (type === 'hydrolysisVsHydration') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-teal-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-teal-400">আর্দ্রবিশ্লেষণ বনাম পানিযোজন: ৩টি পার্থক্য</span>
          <span className="text-[10px] text-teal-300 font-mono">বোর্ড খ-নম্বর প্রশ্নের উত্তর</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-2 bg-cyan-950/40 rounded-lg border border-cyan-800/50">
              <span className="text-cyan-300 font-bold block">আর্দ্রবিশ্লেষণ (Hydrolysis)</span>
              <ul className="list-disc list-inside text-[10.5px] text-slate-300 mt-1 space-y-1">
                <li>পানির অণু ভেঙে H⁺ ও OH⁻ দুটি অংশে বিভক্ত হয়।</li>
                <li>নতুন রাসায়নিক ধর্মবিশিষ্ট সম্পূর্ণ নতুন উৎপাদ সৃষ্টি হয়।</li>
                <li>উদাহরণ: SiCl₄ + 4H₂O ⟶ Si(OH)₄ + 4HCl</li>
              </ul>
            </div>

            <div className="p-2 bg-blue-950/40 rounded-lg border border-blue-800/50">
              <span className="text-blue-300 font-bold block">পানিযোজন (Hydration)</span>
              <ul className="list-disc list-inside text-[10.5px] text-slate-300 mt-1 space-y-1">
                <li>পানির অণু অক্ষত থাকে, কেলাস পানি হিসেবে যুক্ত হয়।</li>
                <li>যৌগের মূল আয়নিক বৈশিষ্ট্য অক্ষুণ্ণ থাকে।</li>
                <li>উদাহরণ: ZnSO₄ + 7H₂O ⟶ ZnSO₄·7H₂O (সাদা ভিট্রিওল)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-2 bg-teal-950/40 rounded-lg text-xs text-teal-200 border border-teal-900/60 text-center font-mono">
          সহজ পার্থক্য: আর্দ্রবিশ্লেষণে পানি বিক্রিয়ক হিসেবে ভেঙে যায়, পানিযোজনে পানি কেলাসের সাথে অতিথি হিসেবে জুড়ে থাকে।
        </div>
      </div>
    );
  }

  // 8. OXIDATION NUMBER CALCULATION RULES (জারণ সংখ্যা নির্ণয়ের ৭টি নিয়ম)
  if (type === 'oxidationNumberCalcRules') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">জারণ সংখ্যা (Oxidation Number) নির্ণয়ের ৭টি গোল্ডেন নিয়ম</span>
          <span className="text-[10px] text-slate-400 font-mono">গাণিতিক সমাধান মেথড</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
              <span className="text-cyan-300 font-bold block">১. মুক্ত মৌল = ০</span>
              <span className="text-[10px] text-slate-400">H₂, O₂, Na, Fe = 0</span>
            </div>
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
              <span className="text-amber-300 font-bold block">২. ক্ষার ধাতু = +১</span>
              <span className="text-[10px] text-slate-400">Li, Na, K, Rb = +1</span>
            </div>
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
              <span className="text-emerald-300 font-bold block">৩. মৃৎক্ষার ধাতু = +২</span>
              <span className="text-[10px] text-slate-400">Mg, Ca, Ba = +2</span>
            </div>
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
              <span className="text-rose-300 font-bold block">৪. হাইড্রোজেন = +১</span>
              <span className="text-[10px] text-slate-400">ধাতব হাইড্রাইডে -১ (NaH)</span>
            </div>
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
              <span className="text-indigo-300 font-bold block">৫. অক্সিজেন = -২</span>
              <span className="text-[10px] text-slate-400">পারঅক্সাইডে -১ (H₂O₂)</span>
            </div>
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
              <span className="text-purple-300 font-bold block">৬. হ্যালোজেন = -১</span>
              <span className="text-[10px] text-slate-400">F সর্বদা -১, Cl, Br, I = -১</span>
            </div>
          </div>
          <div className="mt-2 p-2 bg-slate-950 rounded-lg text-center text-[11px] font-mono text-emerald-400 border border-slate-800">
            ৭. নিরপেক্ষ যৌগের সকল পরমাণুর জারণ সংখ্যার সমষ্টি = ০ এবং জটিল আয়নে আধানের সমান!
          </div>
        </div>

        <div className="p-2 bg-amber-950/40 rounded-lg text-xs text-amber-200 border border-amber-900/60 text-center font-mono">
          KMnO₄ এ Mn এর জারণ সংখ্যা: (+1) + x + 4(-2) = 0 ⟹ x = +7 (বোর্ড প্রিয় প্রশ্ন!)
        </div>
      </div>
    );
  }

  // 8b. OXIDATION EXCEPTIONS GUIDE (ব্যতিক্রম জারণ সংখ্যা)
  if (type === 'oxidationExceptionGuide') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">বোর্ড ট্র্যাপ: জারণ সংখ্যার ব্যতিক্রমসমূহ ও ভগ্নাংশ মান</span>
          <span className="text-[10px] text-amber-300 font-mono">গুরুত্বপূর্ণ MCQ ট্রিকস</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-cyan-300 font-bold block">১. পারঅক্সাইড (Peroxide)</span>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">H₂O₂, Na₂O₂</p>
              <span className="text-emerald-400 font-bold block mt-1 font-mono">অক্সিজেন = -১</span>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-amber-300 font-bold block">২. সুপারঅক্সাইড (Superoxide)</span>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">KO₂, RbO₂</p>
              <span className="text-amber-400 font-bold block mt-1 font-mono">অক্সিজেন = -½</span>
            </div>

            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-rose-300 font-bold block">৩. অক্সিজেন ডাইফ্লুরাইড</span>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">OF₂</p>
              <span className="text-rose-400 font-bold block mt-1 font-mono">অক্সিজেন = +২</span>
            </div>
          </div>

          <div className="p-2 bg-amber-950/30 rounded-lg border border-amber-800/50 text-[11px] text-slate-300 font-mono">
            <span className="text-amber-300 font-bold">ভগ্নাংশ জারণ সংখ্যা:</span> Fe₃O₄ এ লোহার গড় জারণ মান = +৮/৩ (কারণ এটি FeO·Fe₂O₃ মিশ্র অক্সাইড) এবং Na₂S₂O₃ এ সালফার = +২।
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          পরীক্ষার সতর্কতা: সাধারণ অক্সাইডে O = -2, কিন্তু পারঅক্সাইডে -1 এবং সুপারঅক্সাইডে -1/2 মনে রাখতে হবে।
        </div>
      </div>
    );
  }

  // 9. SIMULTANEOUS REDOX COUPLED (জারণ-বিজারণ যুগপৎ ঘটে প্রমাণ)
  if (type === 'simultaneousRedoxCoupled') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">জারণ-বিজারণ যুগপৎ সংঘটিত হয় (Redox is Simultaneous)</span>
          <span className="text-[10px] text-rose-300 font-mono">বোর্ড গ/ঘ নম্বরের ক্লাসিক প্রশ্ন</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="p-2 bg-slate-950 rounded-lg text-center font-mono text-xs text-amber-300 border border-slate-800">
            পূর্ণ বিক্রিয়া: 2FeCl₂ + Cl₂ ⟶ 2FeCl₃
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-amber-950/40 rounded-lg border border-amber-800/50 font-mono">
              <span className="text-amber-300 font-bold block">জারণ অর্ধ-বিক্রিয়া (Oxidation Half):</span>
              <p className="text-[11px] text-slate-300 mt-1">
                2Fe²⁺ ⟶ 2Fe³⁺ + <span className="text-emerald-400 font-bold">2e⁻</span>
              </p>
              <span className="text-[10px] text-slate-400 block mt-1">Fe²⁺ আয়ন ২টি ইলেকট্রন ত্যাগ করে জারিত হয়েছে।</span>
            </div>

            <div className="p-2.5 bg-cyan-950/40 rounded-lg border border-cyan-800/50 font-mono">
              <span className="text-cyan-300 font-bold block">বিজারণ অর্ধ-বিক্রিয়া (Reduction Half):</span>
              <p className="text-[11px] text-slate-300 mt-1">
                Cl₂ + <span className="text-emerald-400 font-bold">2e⁻</span> ⟶ 2Cl⁻
              </p>
              <span className="text-[10px] text-slate-400 block mt-1">Cl₂ অণু ঐ ২টি ইলেকট্রন গ্রহণ করে বিজারিত হয়েছে।</span>
            </div>
          </div>

          <div className="p-2 bg-emerald-950/40 rounded text-center text-[11px] text-emerald-300 font-mono border border-emerald-800/60">
            মোট বিক্রিয়া: 2Fe²⁺ + Cl₂ ⟶ 2Fe³⁺ + 2Cl⁻ (ইলেকট্রন আদান-প্রদান ব্যালেন্সড)
          </div>
        </div>

        <div className="p-2 bg-rose-950/40 rounded-lg text-xs text-rose-200 border border-rose-900/60 text-center font-mono">
          উপসংহার: একজন ইলেকট্রন ত্যাগ না করলে অপরজন গ্রহণ করতে পারে না—সুতরাং জারণ ও বিজারণ যুগপৎ ঘটে।
        </div>
      </div>
    );
  }

  // 9b. HALF REACTION ELECTRON BALANCE (অর্ধ-বিক্রিয়া ও সমতাকরণ)
  if (type === 'halfReactionElectronBalance') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">ইলেকট্রন স্থানান্তর ও অর্ধ-বিক্রিয়া সমতাকরণ কৌশল</span>
          <span className="text-[10px] text-slate-400 font-mono">Zn + CuSO₄ সিস্টেম</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-center gap-3 text-xs font-mono">
            <div className="p-2 bg-slate-950 rounded border border-amber-700/60 text-center">
              <span className="text-amber-300 font-bold block">বিজারক: Zn</span>
              <span className="text-[10px] text-slate-400">Zn ⟶ Zn²⁺ + 2e⁻</span>
            </div>
            <div className="text-center text-emerald-400 font-bold text-xs">
              ⟶ 2e⁻ স্থানান্তর ⟶
            </div>
            <div className="p-2 bg-slate-950 rounded border border-cyan-700/60 text-center">
              <span className="text-cyan-300 font-bold block">জারক: Cu²⁺</span>
              <span className="text-[10px] text-slate-400">Cu²⁺ + 2e⁻ ⟶ Cu</span>
            </div>
          </div>

          <div className="p-2 bg-slate-950 rounded-lg text-xs text-slate-300 space-y-1 font-mono">
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span>Zn এর জারণ মান:</span>
              <span className="text-emerald-400">0 থেকে +2 (2 বৃদ্ধি ⟹ জারণ)</span>
            </div>
            <div className="flex justify-between pt-0.5">
              <span>Cu এর জারণ মান:</span>
              <span className="text-rose-400">+2 থেকে 0 (2 হ্রাস ⟹ বিজারণ)</span>
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          গোল্ডেন রুল: জারিত পরমাণু কর্তৃক বর্জিত মোট ইলেকট্রন = বিজারিত পরমাণু কর্তৃক গৃহীত মোট ইলেকট্রন।
        </div>
      </div>
    );
  }

  // 10. LE CHATELIER PRINCIPLE (লা-শাতেলিয়ার নীতি ও সাম্যাবস্থা)
  if (type === 'leChatelierPrincipleVisualizer') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-blue-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-blue-400">লা-শাতেলিয়ার নীতি (Le Chatelier's Principle)</span>
          <span className="text-[10px] text-cyan-300 font-mono">সাম্যাবস্থা স্থানান্তরের সার্বজনীন নিয়ম</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="p-2 bg-slate-950 rounded text-center text-xs text-cyan-300 font-mono border border-slate-800">
            N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + ৯২ kJ (ΔH = -92 kJ/mol)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-rose-950/30 rounded-lg border border-rose-800/50">
              <span className="text-rose-300 font-bold block">১. তাপমাত্রা প্রভাব</span>
              <p className="text-[10px] text-slate-300 mt-1">
                যেহেতু তাপোৎপাদী, তাই তাপমাত্রা বাড়ালে সাম্যাবস্থা <span className="text-rose-400 font-bold">বামে</span> সরবে (উৎপাদ কমবে)। তাপমাত্রা কমালে ডানে সরবে।
              </p>
            </div>

            <div className="p-2 bg-cyan-950/30 rounded-lg border border-cyan-800/50">
              <span className="text-cyan-300 font-bold block">২. চাপের প্রভাব (Δn)</span>
              <p className="text-[10px] text-slate-300 mt-1">
                বিক্রিয়ক ৪ মোল, উৎপাদ ২ মোল (মোল হ্রাস)। তাই চাপ বাড়ালে সাম্যাবস্থা <span className="text-emerald-400 font-bold">ডানে</span> সরবে (NH₃ বেশি হবে)।
              </p>
            </div>

            <div className="p-2 bg-emerald-950/30 rounded-lg border border-emerald-800/50">
              <span className="text-emerald-300 font-bold block">৩. ঘনমাত্রার প্রভাব</span>
              <p className="text-[10px] text-slate-300 mt-1">
                N₂ বা H₂ এর ঘনমাত্রা বাড়ালে সাম্যাবস্থা <span className="text-emerald-400 font-bold">ডানে</span> সরবে, আর NH₃ সরিয়ে নিলে আরও NH₃ উৎপন্ন হবে।
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-blue-950/40 rounded-lg text-xs text-blue-200 border border-blue-900/60 text-center font-mono">
          নীতি: সাম্যাবস্থার কোনো নিয়ামক (তাপ, চাপ, ঘনমাত্রা) পরিবর্তন করলে সাম্যাবস্থা এমনভাবে সরে যাতে পরিবর্তনের ফলাফল প্রশমিত হয়।
        </div>
      </div>
    );
  }

  // 10b. EQUILIBRIUM SHIFT SUMMARY (সাম্যাবস্থা শিফট সামারি)
  if (type === 'equilibriumShiftSummary') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-blue-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-blue-400">বোর্ড ট্র্যাপ: কোন কোন বিক্রিয়ায় চাপের কোনো প্রভাব নেই?</span>
          <span className="text-[10px] text-blue-300 font-mono">Δn = ০ কন্ডিশন</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="p-2.5 bg-cyan-950/40 rounded-lg border border-cyan-800/50 text-xs">
            <span className="text-cyan-300 font-bold block">H₂(g) + I₂(g) ⇌ 2HI(g)</span>
            <p className="text-[11px] text-slate-300 mt-1">
              বিক্রিয়কের গ্যাসীয় মোল সংখ্যা = ১ + ১ = ২<br />
              উৎপাদের গ্যাসীয় মোল সংখ্যা = ২<br />
              Δn = ২ - ২ = ০। <span className="text-emerald-400 font-bold">সুতরাং এই বিক্রিয়ায় চাপের কোনোই প্রভাব নেই!</span>
            </p>
          </div>

          <div className="p-2.5 bg-amber-950/40 rounded-lg border border-amber-800/50 text-xs">
            <span className="text-amber-300 font-bold block">PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)</span>
            <p className="text-[11px] text-slate-300 mt-1">
              বিক্রিয়ক ১ মোল ⟶ উৎপাদ ২ মোল (মোল বৃদ্ধি)। চাপ বৃদ্ধি করলে সাম্যাবস্থা পশ্চাৎমুখী হবে (বামে সরবে, বিয়োজন কমবে)।
            </p>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          স্মরণীয়: চাপের প্রভাব থাকতে হলে অন্তত একটি উপাদান গ্যাসীয় হতে হবে এবং Δn ≠ 0 হতে হবে।
        </div>
      </div>
    );
  }

  // 11. INDUSTRIAL HABER BOSCH & CONTACT PROCESS (হেবার ও স্পর্শ পদ্ধতি)
  if (type === 'haberBoschContactProcess') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">শিল্পক্ষেত্রে লা-শাতেলিয়ার নীতি: হেবার ও স্পর্শ পদ্ধতি</span>
          <span className="text-[10px] text-slate-400 font-mono">অনুকূল শর্তাবলী ও প্রভাবক</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
          {/* Haber process */}
          <div className="p-3 bg-slate-900 rounded-xl border border-emerald-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-300">১. হেবার প্রণালীতে অ্যামোনিয়া (NH₃)</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded font-mono">Haber Process</span>
            </div>
            <div className="my-1.5 p-1 bg-slate-950 rounded text-center font-mono text-[11px] text-emerald-300 border border-slate-800">
              N₂ + 3H₂ ⇌ 2NH₃ + 92 kJ
            </div>
            <ul className="text-[10.5px] text-slate-300 space-y-1 font-mono">
              <li>• তাপমাত্রা: <span className="text-amber-300 font-bold">450°C - 550°C</span> (অনুকূল)</li>
              <li>• চাপ: <span className="text-cyan-300 font-bold">200 atm</span> (উচ্চ চাপ)</li>
              <li>• প্রভাবক: <span className="text-emerald-400 font-bold">Fe চূর্ণ</span> ও Al₂O₃/K₂O প্রমোটর</li>
            </ul>
          </div>

          {/* Contact process */}
          <div className="p-3 bg-slate-900 rounded-xl border border-amber-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300">২. স্পর্শ পদ্ধতিতে H₂SO₄ উৎপাদন</span>
              <span className="text-[10px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded font-mono">Contact Process</span>
            </div>
            <div className="my-1.5 p-1 bg-slate-950 rounded text-center font-mono text-[11px] text-amber-300 border border-slate-800">
              2SO₂ + O₂ ⇌ 2SO₃ + 198 kJ
            </div>
            <ul className="text-[10.5px] text-slate-300 space-y-1 font-mono">
              <li>• তাপমাত্রা: <span className="text-amber-300 font-bold">450°C</span> (অনুকূল)</li>
              <li>• চাপ: <span className="text-cyan-300 font-bold">1 - 2 atm</span> (বায়ুমণ্ডলীয় চাপেই যথেষ্ট)</li>
              <li>• প্রভাবক: <span className="text-emerald-400 font-bold">V₂O₅ (ভ্যানাডিয়াম পেন্টক্সাইড)</span></li>
            </ul>
          </div>
        </div>

        <div className="p-2 bg-emerald-950/40 rounded-lg text-xs text-emerald-200 border border-emerald-900/60 text-center font-mono">
          আপোস তাপমাত্রা: অতি নিম্ন তাপে ফলন বেশি হলেও বেগ অতি ধীর—তাই দ্রুত ও পর্যাপ্ত উৎপাদনের জন্য অনুকূল তাপমাত্রা নেওয়া হয়।
        </div>
      </div>
    );
  }

  // 11b. INDUSTRIAL CONDITIONS CHART (অনুকূল শর্তাবলী চার্ট)
  if (type === 'industrialConditionsChart') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">শিল্পোৎপাদনে অপটিমাম শর্ত বনাম আপোস (Compromise Conditions)</span>
          <span className="text-[10px] text-emerald-300 font-mono">অর্থনৈতিক সাফল্য ও নিরাপত্তা</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-rose-950/30 rounded-lg border border-rose-800/50">
              <span className="text-rose-300 font-bold block">কেন ২০০ atm এর বেশি চাপ নয়?</span>
              <p className="text-[10.5px] text-slate-300 mt-1">
                চাপ আরও বাড়ালে ফলন বাড়ত, কিন্তু প্ল্যান্ট নির্মাণ খরচ ও বিস্ফোরণের ঝুঁকি অনেক বেড়ে যায়। তাই ২০০ atm হলো অর্থনৈতিকভাবে সর্বোত্তম।
              </p>
            </div>
            <div className="p-2 bg-amber-950/30 rounded-lg border border-amber-800/50">
              <span className="text-amber-300 font-bold block">প্রভাবক কেন সাম্যাবস্থার অবস্থান বদলায় না?</span>
              <p className="text-[10.5px] text-slate-300 mt-1">
                প্রভাবক সম্মুখ ও পশ্চাৎ উভয় বিক্রিয়ার গতি সমান অনুপাতে বাড়িয়ে দেয়, তাই সাম্যাবস্থা দ্রুত অর্জিত হয় কিন্তু মোট ফলন বদলায় না।
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          বোর্ড পরীক্ষায় প্রভাবকের ভূমিকা চাইলে লিখবেন: প্রভাবক শুধু সক্রিয়ণ শক্তি হ্রাস করে বিক্রিয়ার বেগ বাড়ায়।
        </div>
      </div>
    );
  }

  // 12. CORROSION & RUST PREVENTION (মরিচা ও প্রতিকার)
  if (type === 'corrosionRustPrevention') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">লোহায় মরিচা গঠন ও ক্ষতিকর বিক্রিয়া রোধ (Corrosion & Rusting)</span>
          <span className="text-[10px] text-slate-400 font-mono">ইলেকট্রোকেমিক্যাল ক্ষয় প্রক্রিয়া</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2.5">
          <div className="p-2 bg-slate-950 rounded text-center text-xs font-mono text-amber-300 border border-slate-800">
            মরিচার সংকেত: 2Fe₂O₃·nH₂O (হাইড্রেটেড ফেরিক অক্সাইড)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <span className="text-cyan-300 font-bold block">১. গ্যালভানাইজিং (Galvanizing)</span>
              <p className="text-[10px] text-slate-400 mt-1">লোহার উপর অধিক সক্রিয় জিংকের (Zn) প্রলেপ দেওয়া।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <span className="text-amber-300 font-bold block">২. টিন প্লেটিং (Tin Plating)</span>
              <p className="text-[10px] text-slate-400 mt-1">খাদ্য পাত্রে লোহার উপর টিনের (Sn) প্রলেপ দেওয়া।</p>
            </div>

            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <span className="text-emerald-300 font-bold block">৩. ইলেকট্রোপ্লেটিং</span>
              <p className="text-[10px] text-slate-400 mt-1">তড়িৎ বিশ্লেষণের মাধ্যমে নিকেল (Ni) বা ক্রোমিয়ামের (Cr) প্রলেপ।</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-amber-950/40 rounded-lg text-xs text-amber-200 border border-amber-900/60 text-center font-mono">
          মরিচা ধরার আবশ্যকীয় শর্ত: অক্সিজেন (O₂) এবং পানি/জলীয় বাষ্প (H₂O) উভয়ের যুগপৎ উপস্থিতি আবশ্যক।
        </div>
      </div>
    );
  }

  // 12b. GALVANIZING & SACRIFICIAL ANODE (বলিদানকারী অ্যানোড)
  if (type === 'galvanizingSacrificialAnode') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">বোর্ড উচ্চতর দক্ষতা: জিংকের প্রলেপ কেন টিনের চেয়ে বেশি নিরাপদ?</span>
          <span className="text-[10px] text-amber-300 font-mono">বলিদানকারী অ্যানোড (Sacrificial Anode)</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-emerald-950/30 rounded-lg border border-emerald-800/50">
              <span className="text-emerald-300 font-bold block">জিংক প্রলেপ (Zn ফাটলেও নিরাপদ):</span>
              <p className="text-[10.5px] text-slate-300 mt-1">
                জিংকের প্রলেপে কোনো কারণে ফাটল ধরলেও জিংক লোহার চেয়ে বেশি সক্রিয় হওয়ায় জিংক নিজে জারিত হয়ে ক্ষয়প্রাপ্ত হয় (বলিদান দেয়) এবং লোহাকে রক্ষা করে।
              </p>
            </div>
            <div className="p-2 bg-rose-950/30 rounded-lg border border-rose-800/50">
              <span className="text-rose-300 font-bold block">টিন প্রলেপ (Sn ফাটলে সর্বনাশ!):</span>
              <p className="text-[10.5px] text-slate-300 mt-1">
                টিনের প্রলেপে দাগ বা ফাটল ধরলে টিনের চেয়ে লোহা বেশি সক্রিয় হওয়ায় লোহা নিজেই অ্যানোড হয়ে অত্যন্ত দ্রুত ক্ষয়প্রাপ্ত হয়ে ফুটো হয়ে যায়।
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          জাহাজের তলায় ম্যাগনেসিয়াম বা জিংক ব্লক লাগানো হয় লোহাকে রক্ষা করতে—একে স্যাক্রিফিসিয়াল অ্যানোড বলে।
        </div>
      </div>
    );
  }

  // 13. CREATIVE QUESTION SOLVING MATRIX (বোর্ড CQ সমাধান মাস্টারক্লাস)
  if (type === 'cqSolvingMatrixCh7') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">বোর্ড পরীক্ষার সৃজনশীল প্রশ্ন (CQ) সমাধান মাস্টারক্লাস</span>
          <span className="text-[10px] text-cyan-300 font-mono">৪ ধাপের নিশ্চিত পূর্ণ নম্বর কৌশল</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <span className="text-cyan-300 font-bold block">ক-জ্ঞানমূলক (১ নম্বর)</span>
              <p className="text-[10px] text-slate-400 mt-0.5">এক বাক্যে নিখুঁত সংজ্ঞা দিন (যেমন: জারণ সংখ্যা কী? সাম্যাবস্থা কী?)</p>
            </div>
            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <span className="text-amber-300 font-bold block">খ-অনুধাবনমূলক (২ নম্বর)</span>
              <p className="text-[10px] text-slate-400 mt-0.5">কারণ ব্যাখ্যা + উদাহরণ সমীকরণ (যেমন: মোমের জ্বলন উভয় পরিবর্তন কেন?)</p>
            </div>
            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <span className="text-emerald-300 font-bold block">গ-প্রয়োগমূলক (৩ নম্বর)</span>
              <p className="text-[10px] text-slate-400 mt-0.5">গাণিতিক জারণ সংখ্যা নির্ণয় অথবা সমীকরণ সমতাকরণ ও রেডক্স প্রমাণ।</p>
            </div>
            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <span className="text-rose-300 font-bold block">ঘ-উচ্চতর দক্ষতা (৪ নম্বর)</span>
              <p className="text-[10px] text-slate-400 mt-0.5">লা-শাতেলিয়ার নীতির প্রভাব বিশ্লেষণ অথবা মরিচারোধী ব্যবস্থার তুলনামূলক মূল্যায়ন।</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-cyan-950/40 rounded-lg text-xs text-cyan-200 border border-cyan-900/60 text-center font-mono">
          টপ টিপ: ঘ-নম্বরে যুক্তিযুক্ত সমীকরণ ও শর্তসমূহ (তাপমাত্রা, চাপ) উল্লেখ করলে ফুল ৪/৪ নম্বর পাওয়া যায়।
        </div>
      </div>
    );
  }

  // 13b. REDOX BOARD ANSWER FORMAT (বোর্ড স্ট্যান্ডার্ড ফরম্যাট)
  if (type === 'redoxBoardAnswerFormat') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">বোর্ড স্ট্যান্ডার্ড উত্তর খসড়া: জারণ-বিজারণ যুগপৎ ঘটে</span>
          <span className="text-[10px] text-cyan-300 font-mono">Step-by-Step Writing Format</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs space-y-1.5 text-slate-300 font-mono">
          <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
            <span className="text-cyan-300 font-bold">ধাপ ১:</span> মূল রাসায়নিক সমীকরণ ও জারণ সংখ্যা চিহ্নিতকরণ।
          </div>
          <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
            <span className="text-amber-300 font-bold">ধাপ ২:</span> জারণ অর্ধ-বিক্রিয়া লিখে ইলেকট্রন বর্জন দেখানো।
          </div>
          <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
            <span className="text-emerald-300 font-bold">ধাপ ৩:</span> বিজারণ অর্ধ-বিক্রিয়া লিখে ইলেকট্রন গ্রহণ দেখানো।
          </div>
          <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
            <span className="text-rose-300 font-bold">ধাপ ৪:</span> দুই অর্ধ-বিক্রিয়া যোগ করে ইলেকট্রন সমতা ও যুগপৎ ঘটার সিদ্ধান্ত।
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          এই ৪টি স্পষ্ট ধাপ অনুসরণ করলে পরীক্ষক কোনো নম্বর কাটার সুযোগ পাবেন না।
        </div>
      </div>
    );
  }

  // 14. CHAPTER 7 MINDMAP (অধ্যায় ৭-এর সম্পূর্ণ রিভিশন মাইন্ডম্যাপ)
  if (type === 'chapter7Mindmap') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">অধ্যায় ৭-এর সম্পূর্ণ রিভিশন মাইন্ডম্যাপ (Chemical Reactions Review)</span>
          <span className="text-[10px] text-rose-300 font-mono">১০ মিনিটে সম্পূর্ণ অধ্যায় প্রস্তুতি</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2 bg-cyan-950/40 rounded-lg border border-cyan-800/60">
              <span className="text-cyan-300 font-bold block">১. পরিবর্তন ও দিক</span>
              <p className="text-[9.5px] text-slate-300 font-mono mt-1">ভৌত vs রাসায়নিক<br />একমুখী vs উভমুখী</p>
            </div>

            <div className="p-2 bg-emerald-950/40 rounded-lg border border-emerald-800/60">
              <span className="text-emerald-300 font-bold block">২. তাপ ও শক্তি</span>
              <p className="text-[9.5px] text-slate-300 font-mono mt-1">তাপোৎপাদী (-ΔH)<br />তাপহারী (+ΔH)</p>
            </div>

            <div className="p-2 bg-amber-950/40 rounded-lg border border-amber-800/60">
              <span className="text-amber-300 font-bold block">৩. রেডক্স ও জারণ মান</span>
              <p className="text-[9.5px] text-slate-300 font-mono mt-1">ইলেকট্রন স্থানান্তর<br />যুগপৎ প্রক্রিয়া</p>
            </div>

            <div className="p-2 bg-rose-950/40 rounded-lg border border-rose-800/60">
              <span className="text-rose-300 font-bold block">৪. সাম্যাবস্থা ও মরিচা</span>
              <p className="text-[9.5px] text-slate-300 font-mono mt-1">লা-শাতেলিয়ার নীতি<br />মরিচারোধ ও গ্যালভানাইজিং</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-rose-950/40 rounded-lg text-xs text-rose-200 border border-rose-900/60 text-center font-mono">
          অভিনন্দন! অধ্যায় ৭-এর সকল তাত্ত্বিক ও গাণিতিক নিয়ম নিখুঁতভাবে শেখা সম্পন্ন হয়েছে।
        </div>
      </div>
    );
  }

  // 14b. REACTION SUMMARY FLASHCARDS (গুরুত্বপূর্ণ সমীকরণ ফ্ল্যাশকার্ড)
  if (type === 'reactionSummaryFlashcards') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-rose-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-rose-400">বোর্ড পরীক্ষার টপ ১০টি অবশ্যপাঠ্য সমীকরণ তালিকা</span>
          <span className="text-[10px] text-rose-300 font-mono">Quick Revision Equations</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5">
          <div className="flex justify-between p-1 bg-slate-950 rounded border border-slate-800">
            <span className="text-cyan-300">দহন: CH₄ + 2O₂ ⟶ CO₂ + 2H₂O + তাপ</span>
            <span className="text-slate-400 text-[10px]">ΔH = -890 kJ</span>
          </div>
          <div className="flex justify-between p-1 bg-slate-950 rounded border border-slate-800">
            <span className="text-emerald-300">হেবার: N₂ + 3H₂ ⇌ 2NH₃ (450-550°C, 200 atm, Fe)</span>
            <span className="text-slate-400 text-[10px]">ΔH = -92 kJ</span>
          </div>
          <div className="flex justify-between p-1 bg-slate-950 rounded border border-slate-800">
            <span className="text-amber-300">প্রশমন: H⁺ + OH⁻ ⟶ H₂O (তীব্র এসিড-ক্ষার)</span>
            <span className="text-slate-400 text-[10px]">ΔH = -57.34 kJ</span>
          </div>
          <div className="flex justify-between p-1 bg-slate-950 rounded border border-slate-800">
            <span className="text-indigo-300">প্রতিস্থাপন: Zn + CuSO₄ ⟶ ZnSO₄ + Cu</span>
            <span className="text-slate-400 text-[10px]">রেডক্স যুগপৎ</span>
          </div>
          <div className="flex justify-between p-1 bg-slate-950 rounded border border-slate-800">
            <span className="text-rose-300">মরিচা: 4Fe + 3O₂ + 2nH₂O ⟶ 2Fe₂O₃·nH₂O</span>
            <span className="text-slate-400 text-[10px]">ক্ষয় বিক্রিয়া</span>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          এই সমীকরণগুলো লিখে লিখে প্র্যাকটিস করলে বোর্ড পরীক্ষায় ১০০% সঠিকতা বজায় থাকবে।
        </div>
      </div>
    );
  }

  // =========================================================================
  // CHEMISTRY CHAPTER 8: রসায়ন ও শক্তি (CHEMISTRY & ENERGY)
  // =========================================================================

  // 1. DANIELL CELL SCHEMATIC (ড্যানিয়েল কোষের চিত্র ও কার্যপ্রণালী)
  if (type === 'daniellCellSchematic' || type === 'standardCellPotential') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-amber-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-amber-400">ড্যানিয়েল কোষের অ্যানাটমি ও ভোল্টেজ উৎপাদন (১.১০ V)</span>
          <span className="text-[10px] text-amber-300 font-mono">E°cell = E°ox + E°red</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col items-center">
          <svg viewBox="0 0 440 200" className="w-full max-h-[190px]">
            {/* External Wire & Voltmeter */}
            <path d="M 80 70 L 80 25 L 220 25 L 220 40" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            <path d="M 220 40 L 220 25 L 360 25 L 360 70" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            
            {/* Voltmeter Circle */}
            <circle cx="220" cy="25" r="16" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text x="220" y="29" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">1.10V</text>
            <text x="220" y="10" fill="#94a3b8" fontSize="8" textAnchor="middle">e⁻ প্রবাহ ⟶</text>

            {/* Salt Bridge (U-tube) */}
            <path d="M 140 100 L 140 50 Q 140 45 150 45 L 290 45 Q 300 45 300 50 L 300 100" 
                  stroke="#38bdf8" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.8" />
            <text x="220" y="60" fill="#bae6fd" fontSize="9" fontWeight="bold" textAnchor="middle">লবণ সেতু (KCl)</text>
            <text x="165" y="75" fill="#f43f5e" fontSize="7.5" textAnchor="middle">Cl⁻ ⟵</text>
            <text x="275" y="75" fill="#38bdf8" fontSize="7.5" textAnchor="middle">⟶ K⁺</text>

            {/* Left Beaker: Zinc Anode */}
            <rect x="50" y="70" width="100" height="110" rx="4" fill="#0284c7" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="75" y="55" width="16" height="95" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
            <text x="83" y="165" fill="#cbd5e1" fontSize="9" fontWeight="bold" textAnchor="middle">অ্যানোড Zn(-)</text>
            <text x="100" y="115" fill="#38bdf8" fontSize="8">ZnSO₄ (1 M)</text>
            <text x="83" y="135" fill="#f87171" fontSize="7.5" textAnchor="middle">Zn ⟶ Zn²⁺ + 2e⁻</text>

            {/* Right Beaker: Copper Cathode */}
            <rect x="290" y="70" width="100" height="110" rx="4" fill="#0369a1" fillOpacity="0.25" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="345" y="55" width="16" height="95" fill="#ea580c" stroke="#f97316" strokeWidth="1" />
            <text x="353" y="165" fill="#f97316" fontSize="9" fontWeight="bold" textAnchor="middle">ক্যাথোড Cu(+)</text>
            <text x="315" y="115" fill="#38bdf8" fontSize="8">CuSO₄ (1 M)</text>
            <text x="353" y="135" fill="#4ade80" fontSize="7.5" textAnchor="middle">Cu²⁺ + 2e⁻ ⟶ Cu</text>
          </svg>

          <div className="w-full grid grid-cols-2 gap-2 mt-2 text-[11px] font-mono">
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800 text-slate-300">
              <span className="text-amber-400 font-bold block">অ্যানোড জারণ (Oxidation):</span>
              Zn(s) ⟶ Zn²⁺(aq) + 2e⁻ [E° = +0.76 V]
            </div>
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800 text-slate-300">
              <span className="text-cyan-400 font-bold block">ক্যাথোড বিজারণ (Reduction):</span>
              Cu²⁺(aq) + 2e⁻ ⟶ Cu(s) [E° = +0.34 V]
            </div>
          </div>
        </div>

        <div className="p-2 bg-amber-950/40 rounded-lg text-xs text-amber-200 border border-amber-900/60 text-center font-mono">
          মোট কোষ সমীকরণ: Zn(s) + Cu²⁺(aq) ⟶ Zn²⁺(aq) + Cu(s) | মোট কোষ বিভব = ০.৭৬ + ০.৩৪ = ১.১০ V
        </div>
      </div>
    );
  }

  // 2. SALT BRIDGE MECHANISM (লবণ সেতুর কার্যপদ্ধতি ও ভূমিকা)
  if (type === 'saltBridgeMechanism' || type === 'halfCellReactionCoupling') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-cyan-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-cyan-400">লবণ সেতুর গঠন ও অভ্যন্তরীণ চার্জ নিরপেক্ষতা রক্ষা</span>
          <span className="text-[10px] text-cyan-300 font-mono">Salt Bridge Function</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2 text-xs">
          <div className="p-2.5 bg-cyan-950/30 rounded-lg border border-cyan-800/50 space-y-1">
            <span className="font-bold text-cyan-300 block">লবণ সেতুর ৩টি অপরিহার্য কাজ:</span>
            <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[11px]">
              <li><strong className="text-white">বর্তনী পূর্ণ করা:</strong> বহিঃবর্তনীতে তার দিয়ে ইলেকট্রন চলে, অভ্যন্তরীণ দ্রবণদ্বয়কে যুক্ত করে পূর্ণ বর্তনী বানায়।</li>
              <li><strong className="text-white">তড়িৎ নিরপেক্ষতা বজায় রাখা:</strong> অ্যানোড পাত্রে জমে থাকা Zn²⁺ কে প্রশমিত করতে Cl⁻ আসে, ক্যাথোড পাত্রে থাকা SO₄²⁻ কে প্রশমিত করতে K⁺ আসে।</li>
              <li><strong className="text-white">কোষ বিভব সচল রাখা:</strong> লবণ সেতু অপসারণ করলে মুহূর্তের মধ্যে কোষের ভোল্টেজ ০.০০ V হয়ে বিদ্যুৎ প্রবাহ বন্ধ হয়।</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono text-center">
            <div className="p-2 bg-slate-950 rounded border border-rose-900/50 text-rose-300">
              <span className="font-bold block text-slate-200">লবণ সেতু না থাকলে:</span>
              অ্যানোডে (+) চার্জ ও ক্যাথোডে (-) চার্জ জমে বিপরীত প্রতিরোধ বল সৃষ্টি করত।
            </div>
            <div className="p-2 bg-slate-950 rounded border border-emerald-900/50 text-emerald-300">
              <span className="font-bold block text-slate-200">উপযুক্ত লবণ:</span>
              KCl, KNO₃ বা NH₄NO₃ এবং আগার-আগার জেলির ঘন পেস্ট।
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded-lg text-xs text-slate-300 border border-slate-800 text-center font-mono">
          বোর্ড সতর্কতা: লবণ সেতুতে দ্রবণদ্বয়ের আয়নের সাথে বিক্রিয়া করে অধঃক্ষেপ ফেলে এমন লবণ ব্যবহার করা যাবে না।
        </div>
      </div>
    );
  }

  // 3. DRY CELL STRUCTURE (শুষ্ক কোষ / লেকল্যান্স কোষের গঠন ও বিক্রিয়া)
  if (type === 'dryCellStructure' || type === 'dryCellRedoxChemistry') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-emerald-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-emerald-400">শুষ্ক কোষের (Dry Cell / 1.5 V) গঠন ও রসায়ন</span>
          <span className="text-[10px] text-emerald-300 font-mono">Leclanché Cell Anatomy</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center gap-4">
          <svg viewBox="0 0 160 180" className="w-36 h-40 shrink-0">
            {/* Outer zinc cylinder */}
            <rect x="25" y="25" width="110" height="145" rx="10" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
            <text x="80" y="180" fill="#94a3b8" fontSize="8.5" textAnchor="middle">জিংক চোঙ (অ্যানোড -)</text>

            {/* Electrolyte paste layer */}
            <rect x="35" y="35" width="90" height="130" rx="6" fill="#334155" />
            <text x="80" y="125" fill="#38bdf8" fontSize="7" textAnchor="middle">NH₄Cl + ZnCl₂ + শ্বেতসার</text>

            {/* MnO2 + Carbon powder packet */}
            <rect x="50" y="38" width="60" height="122" rx="4" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2 2" />
            <text x="80" y="100" fill="#a78bfa" fontSize="7" textAnchor="middle">MnO₂ + C গুঁড়া</text>

            {/* Central Carbon (Graphite) Rod */}
            <rect x="73" y="15" width="14" height="130" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
            {/* Brass Cap (Positive) */}
            <rect x="70" y="10" width="20" height="8" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
            <text x="80" y="6" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">(+) পিতলের টুপি</text>
          </svg>

          <div className="flex-1 space-y-1.5 text-xs font-mono">
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
              <span className="text-amber-300 font-bold block text-[11px]">অ্যানোড (Zn চোঙ):</span>
              <span className="text-slate-300 text-[10px]">Zn(s) ⟶ Zn²⁺ + 2e⁻ (জারণ)</span>
            </div>
            <div className="p-1.5 bg-slate-950 rounded border border-slate-800">
              <span className="text-cyan-300 font-bold block text-[11px]">ক্যাথোড (কার্বন দণ্ড):</span>
              <span className="text-slate-300 text-[10px]">2NH₄⁺ + 2MnO₂ + 2e⁻ ⟶ Mn₂O₃ + 2NH₃ + H₂O</span>
            </div>
            <div className="p-1.5 bg-emerald-950/40 rounded border border-emerald-900/50 text-[10px] text-emerald-200">
              উৎপন্ন NH₃ গ্যাস Zn²⁺ এর সাথে জটিল যৌগ [Zn(NH₃)₄]²⁺ গঠন করে কোষকে স্ফীত হওয়া থেকে বাঁচায়।
            </div>
          </div>
        </div>

        <div className="p-2 bg-emerald-950/40 rounded-lg text-xs text-emerald-200 border border-emerald-900/60 text-center font-mono">
          ড্রাই সেলের বিভব ১.৫ V। এটি একটি প্রাইমারি সেল (একবার ব্যবহারযোগ্য, রিচার্জ করা যায় না)।
        </div>
      </div>
    );
  }

  // 4. WATER ELECTROLYSIS & VOLUME RATIO (পানির তড়িৎ বিশ্লেষণ ও ২:১ অনুপাত)
  if (type === 'waterElectrolysisHofmann' || type === 'volumeRatioElectrolysis') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-blue-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-blue-400">পানির তড়িৎ বিশ্লেষণ (Hofmann Voltameter) — H₂ : O₂ = ২ : ১</span>
          <span className="text-[10px] text-blue-300 font-mono">2H₂O ⟶ 2H₂ + O₂</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-around">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-cyan-400 block">ক্যাথোড (-) গ্যাস সংগ্রহ</span>
            <div className="w-20 h-28 bg-slate-950 rounded border-2 border-cyan-500/60 relative overflow-hidden flex flex-col justify-end">
              <div className="w-full h-[66%] bg-cyan-500/25 border-b border-cyan-400 flex items-center justify-center">
                <span className="text-xs font-bold text-cyan-200 font-mono">2 Vol H₂</span>
              </div>
              <div className="w-full h-[34%] bg-blue-900/40 flex items-center justify-center text-[9px] text-slate-400">
                পানি (H₂O)
              </div>
            </div>
            <span className="text-[10px] font-mono text-cyan-300">2H⁺ + 2e⁻ ⟶ H₂(g)</span>
          </div>

          <div className="px-3 py-2 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1.5 max-w-[160px]">
            <span className="text-xs font-bold text-amber-400 block font-mono">DC ব্যাটারি সংযোগ</span>
            <div className="text-[10.5px] text-slate-300 font-mono">
              অল্প H₂SO₄ মিশিয়ে পানিকে সুপরিবাহী করা হয়।
            </div>
            <div className="p-1 bg-blue-950/50 rounded text-[10px] text-blue-300 font-bold border border-blue-800">
              আয়তন অনুপাত ২ : ১
            </div>
          </div>

          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-rose-400 block">অ্যানোড (+) গ্যাস সংগ্রহ</span>
            <div className="w-20 h-28 bg-slate-950 rounded border-2 border-rose-500/60 relative overflow-hidden flex flex-col justify-end">
              <div className="w-full h-[33%] bg-rose-500/25 border-b border-rose-400 flex items-center justify-center">
                <span className="text-xs font-bold text-rose-200 font-mono">1 Vol O₂</span>
              </div>
              <div className="w-full h-[67%] bg-blue-900/40 flex items-center justify-center text-[9px] text-slate-400">
                পানি (H₂O)
              </div>
            </div>
            <span className="text-[10px] font-mono text-rose-300">4OH⁻ - 4e⁻ ⟶ O₂ + 2H₂O</span>
          </div>
        </div>

        <div className="p-2 bg-blue-950/40 rounded-lg text-xs text-blue-200 border border-blue-900/60 text-center font-mono">
          প্রমাণ: প্রতিটি অক্সিজেন পরমাণুর সাথে ২টি হাইড্রোজেন পরমাণু থাকে (H₂O), তাই হাইড্রোজেনের আয়তন অক্সিজেনের দ্বিগুণ।
        </div>
      </div>
    );
  }

  // 5. ELECTROPLATING MECHANISM (তড়িৎ লেপন ও সোনার/রুপার প্রলেপ)
  if (type === 'electroplatingMechanism' || type === 'anodeCathodeSelectionRules') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-yellow-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-yellow-400">তড়িৎ লেপন (Electroplating) — লোহার চামচে রুপার (Ag) প্রলেপ</span>
          <span className="text-[10px] text-yellow-300 font-mono">ক্ষয়রোধ ও চাকচিক্য বৃদ্ধি</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="text-amber-400 font-bold block text-[11px]">অ্যানোড (+ প্রান্ত):</span>
              <span className="text-slate-300 text-[10px]">যে মূল্যবান ধাতুর প্রলেপ দিতে হবে (যেমন খাঁটি রুপার পাত, Ag)।</span>
              <span className="text-amber-300 block text-[10px] pt-1">Ag(s) ⟶ Ag⁺(aq) + e⁻ (ক্ষয় হয়)</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block text-[11px]">ক্যাথোড (- প্রান্ত):</span>
              <span className="text-slate-300 text-[10px]">যে বস্তুর ওপর প্রলেপ দিতে হবে (যেমন লোহার চামচ বা রিং)।</span>
              <span className="text-cyan-300 block text-[10px] pt-1">Ag⁺(aq) + e⁻ ⟶ Ag(s) (জমা হয়)</span>
            </div>
          </div>

          <div className="p-2 bg-yellow-950/30 rounded border border-yellow-800/50 text-[11px] text-yellow-200 font-mono">
            তড়িৎ বিশ্লেষ্য দ্রবণ: প্রলেপ প্রদানকারী ধাতুর দ্রবণীয় লবণ (যেমন AgNO₃ দ্রবণ)।
          </div>
        </div>

        <div className="p-2 bg-yellow-950/40 rounded-lg text-xs text-yellow-200 border border-yellow-900/60 text-center font-mono">
          গোল্ডেন রুল: যে জিনিসটিকে সুন্দর বানাতে হবে তাকে ক্যাথোডে (-) সংযোগ দিন!
        </div>
      </div>
    );
  }

  // 6. CHAPTER 8 FORMULA & MINDMAP (অধ্যায় ৮-এর সূত্র ও মাইন্ডম্যাপ)
  if (type === 'chapter8FormulaMindmap' || type === 'chapter8ExamTipsSummary') {
    return (
      <div className="w-full h-full min-h-[340px] bg-slate-950 p-4 flex flex-col justify-between rounded-xl border border-indigo-500/40 select-none">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
          <span className="font-bold text-indigo-400">অধ্যায় ৮: রসায়ন ও শক্তি — সুপার ফর্মুলা শিট ও মাইন্ডম্যাপ</span>
          <span className="text-[10px] text-indigo-300 font-mono">Board Exam Quick Revision</span>
        </div>

        <div className="my-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs font-mono space-y-2">
          <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between items-center">
            <span className="text-amber-300">১. বন্ধন শক্তি ও বিক্রিয়া তাপ:</span>
            <span className="text-white font-bold">ΔH = B₁ (ভাঙ্গা বন্ধন) - B₂ (গড়া বন্ধন)</span>
          </div>
          <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between items-center">
            <span className="text-cyan-300">২. ড্যানিয়েল কোষের বিভব:</span>
            <span className="text-white font-bold">E°cell = E°ox(Zn) + E°red(Cu) = 0.76 + 0.34 = 1.10 V</span>
          </div>
          <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between items-center">
            <span className="text-emerald-300">৩. ড্রাই সেল বা শুষ্ক কোষ:</span>
            <span className="text-white font-bold">ভোল্টেজ = ১.৫ V (প্রাইমারি কোষ)</span>
          </div>
          <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between items-center">
            <span className="text-rose-300">৪. পানির তড়িৎ বিশ্লেষণ অনুপাত:</span>
            <span className="text-white font-bold">H₂ (ক্যাথোড) : O₂ (অ্যানোড) = ২ : ১</span>
          </div>
          <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between items-center">
            <span className="text-yellow-300">৫. তড়িৎ লেপন নিয়ম:</span>
            <span className="text-white font-bold">প্রলেপ্য বস্তু = ক্যাথোড (-), প্রলেপক ধাতু = অ্যানোড (+)</span>
          </div>
        </div>

        <div className="p-2 bg-indigo-950/40 rounded-lg text-xs text-indigo-200 border border-indigo-900/60 text-center font-mono">
          এই ৫টি ফর্মুলা ও সমীকরণ মনে রাখলে অধ্যায় ৮ থেকে বোর্ড পরীক্ষায় পূর্ণ ১০/১০ নম্বর নিশ্চিত।
        </div>
      </div>
    );
  }

  return null;
};

