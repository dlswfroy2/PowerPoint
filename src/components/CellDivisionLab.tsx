import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Info, 
  ShieldAlert, 
  Activity, 
  Dna, 
  Layers, 
  Zap, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';

export const CellDivisionLab: React.FC<{ defaultTab?: 'mitosis' | 'crossingOver' | 'cellCycle' }> = ({ defaultTab = 'mitosis' }) => {
  const [activeTab, setActiveTab] = useState<'mitosis' | 'crossingOver' | 'cellCycle'>(defaultTab);

  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // --- MITOSIS STUDIO STATE ---
  const mitosisStages = [
    {
      id: 'interphase',
      nameBn: 'ইন্টারফেজ (Interphase)',
      subBn: 'বিভাজনের পূর্বপ্রস্তুতি পর্ব',
      desc: 'কোষের আকার বৃদ্ধি পায়, ডিএনএ অনুলিপন (Replication) সম্পন্ন হয় এবং সেন্ট্রিওল প্রতিলিপিত হয়। ক্রোমাটিন তন্তুগুলো শিথিল ও অস্পষ্ট থাকে।',
      features: ['ডিএনএ রেপ্লিকেশন সম্পন্ন', 'নিউক্লিয়ার মেমব্রেন ও নিউক্লিওলাস স্পষ্ট', 'ক্রোমোজোমগুলো সূক্ষ্ম সুতার মতো জালিকাকারে থাকে']
    },
    {
      id: 'prophase',
      nameBn: '১. প্রোফেজ (Prophase)',
      subBn: 'জল বিয়োজন ও ক্রোমোজোম ঘনীভবন',
      desc: 'নিউক্লিয়াস থেকে জল বিয়োজন শুরু হয়। ক্রোমাটিন তন্তুগুলো পেঁচিয়ে খাটো ও মোটা হতে থাকে। প্রতিটি ক্রোমোজোম সেন্ট্রোমিয়ার ছাড়া অনুদৈর্ঘ্যে দুটি ক্রোমাটিডে বিভক্ত হয়।',
      features: ['ক্রোমোজোম খাটো ও মোটা হওয়া', 'রঞ্জন ধারণ ক্ষমতা বৃদ্ধি', 'নিউক্লিওলাস ও মেমব্রেন বিলুপ্ত হতে শুরু করে']
    },
    {
      id: 'prometaphase',
      nameBn: '২. প্রো-মেটাফেজ (Prometaphase)',
      subBn: 'স্পিন্ডল যন্ত্র সৃষ্টি ও ক্রোমোজোমের চলন',
      desc: 'দুই মেরুবিশিষ্ট মাকু আকৃতির স্পিন্ডল যন্ত্রের আবির্ভাব ঘটে। ক্রোমোজোমের সেন্ট্রোমিয়ার আকর্ষণ তন্তুর সাথে যুক্ত হয়ে বিষুবীয় অঞ্চলের দিকে ধাবিত হতে থাকে।',
      features: ['স্পিন্ডল তন্তু ও অ্যাস্টার রশ্মি গঠিত হয়', 'আকর্ষণ বা ক্রোমোজোমাল তন্তুর সংযুক্তি', 'নিউক্লিয়ার মেমব্রেন ও নিউক্লিওলাস সম্পূর্ণ বিলুপ্ত']
    },
    {
      id: 'metaphase',
      nameBn: '৩. মেটাফেজ (Metaphase)',
      subBn: 'মেটাকাইনেসিস ও সর্বাধিক খাটো-মোটা অবস্থা',
      desc: 'সকল ক্রোমোজোম স্পিন্ডল যন্ত্রের ঠিক মাঝখানে বিষুবীয় অঞ্চলে সাজানো থাকে (মেটাকাইনেসিস)। ক্রোমোজোমগুলো সর্বাধিক খাটো ও মোটা দেখায়। সেন্ট্রোমিয়ার বিভাজনের সূচনা ঘটে।',
      features: ['বিষুবীয় অঞ্চলে ক্রোমোজোমের সারিবদ্ধতা', 'ক্রোমোজোম সর্বাধিক খাটো, মোটা ও স্পষ্ট', 'ক্যারিওটাইপ ও ক্রোমোজোম গণনার শ্রেষ্ঠ পর্যায়']
    },
    {
      id: 'anaphase',
      nameBn: '৪. অ্যানাফেজ (Anaphase)',
      subBn: 'সেন্ট্রোমিয়ার বিভাজন ও মেরুমুখী চলন',
      desc: 'প্রতিটি সেন্ট্রোমিয়ার পূর্ণ বিভক্ত হয়ে দুটি অপত্য ক্রোমোজোম গঠন করে। এরা বিপরীত দুই মেরুর দিকে ধাবিত হয়। সেন্ট্রোমিয়ারের অবস্থানের ভিত্তিতে V, L, J, I আকৃতি ধারণ করে।',
      features: ['সেন্ট্রোমিয়ারের পূর্ণ দ্বি-বিভাজন', 'সেন্ট্রোমিয়ার অগ্রগামী ও বাহু অনুগামী হয়ে মেরুমুখী চলন', 'V (মেটা), L (সাব-মেটা), J (অ্যাক্রো), I (টেলো) রূপ']
    },
    {
      id: 'telophase',
      nameBn: '৫. টেলোফেজ (Telophase)',
      subBn: 'নিউক্লিয়াসের পুনর্গঠন ও জলযোজন',
      desc: 'অপত্য ক্রোমোজোমগুলো দুই বিপরীত মেরুতে স্থির হয়। ক্রোমোজোমে জলযোজন ঘটে তারা আবার সূক্ষ্ম ক্রোমাটিনে রূপ নেয়। নিউক্লিয়ার মেমব্রেন ও নিউক্লিওলাসের পুনর্গঠন সম্পন্ন হয়।',
      features: ['প্রোফেজের ঠিক বিপরীত প্রক্রিয়া', 'জলযোজনের ফলে ক্রোমোজোম সরু ও লম্বা হওয়া', 'দুটি অপত্য নিউক্লিয়াস পুনর্গঠিত']
    },
    {
      id: 'cytokinesis',
      nameBn: 'সাইটোকাইনেসিস (Cytokinesis)',
      subBn: 'সাইটোপ্লাজম বিভাজন ও দুটি অপত্য কোষ',
      desc: 'উদ্ভিদকোষে কোষপ্লেট (Cell plate) গঠনের মাধ্যমে এবং প্রাণীকোষে ক্লিভেজ ফারোয়িং (Furrowing) এর মাধ্যমে সাইটোপ্লাজম বিভক্ত হয়ে দুটি পূর্ণাঙ্গ অপত্য কোষ তৈরি হয়।',
      features: ['উদ্ভিদে ফ্র্যাগমোপ্লাস্ট জমে কোষপ্লেট গঠন', 'প্রাণীতে প্লাজমা মেমব্রেনের খাঁজ সৃষ্টি', '২টি সমগুণসম্পন্ন ডিপ্লয়েড (2n) কোষ সৃষ্টি']
    }
  ];

  const [mitosisIdx, setMitosisIdx] = useState<number>(3); // Default at Metaphase
  const currentStage = mitosisStages[mitosisIdx];

  // Selected chromosome morphology for inspect
  const [selectedShape, setSelectedShape] = useState<'V' | 'L' | 'J' | 'I'>('V');

  // --- CROSSING OVER STATE ---
  const [crossOverStep, setCrossOverStep] = useState<number>(3); // 1: Pair, 2: Replication, 3: Synapsis, 4: Chiasma, 5: Recombination, 6: 4 Gametes
  const [crossFrequency, setCrossFrequency] = useState<number>(35); // in %

  // --- CELL CYCLE & CANCER STATE ---
  const [isCancerMode, setIsCancerMode] = useState<boolean>(false);
  const [cancerCycleCount, setCancerCycleCount] = useState<number>(4);

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Title & Introduction */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            <Dna className="h-4 w-4" />
            <span>জীববিজ্ঞান ৩য় অধ্যায় · ভার্চুয়াল ল্যাবরেটরি</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            কোষ বিভাজন ও বংশগতি সিমুলেটর (Cell Division Studio)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            মাইটোসিসের ৫টি পর্যায়, সেন্ট্রোমিয়ার রূপভেদ (V, L, J, I), মিয়োসিসের ক্রসিং ওভার ও ক্যান্সার নিয়ন্ত্রণ এক্সপ্লোর করুন।
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('mitosis')}
            className={`px-3 py-2 rounded-lg transition-all ${
              activeTab === 'mitosis'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            মাইটোসিস স্টুডিও
          </button>
          <button
            onClick={() => setActiveTab('crossingOver')}
            className={`px-3 py-2 rounded-lg transition-all ${
              activeTab === 'crossingOver'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            মিয়োসিস ও ক্রসিং ওভার
          </button>
          <button
            onClick={() => setActiveTab('cellCycle')}
            className={`px-3 py-2 rounded-lg transition-all ${
              activeTab === 'cellCycle'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            কোষচক্র ও ক্যান্সার কন্ট্রোল
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: MITOSIS STAGE-BY-STAGE STUDIO                                      */}
      {/* ========================================================================= */}
      {activeTab === 'mitosis' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left / Center: Interactive Cell Canvas */}
          <div className="lg:col-span-8 space-y-4">
            {/* Visual Stage Progress Steps Bar */}
            <div className="flex items-center justify-between gap-1 overflow-x-auto p-2 rounded-xl bg-slate-900 border border-slate-800">
              {mitosisStages.map((st, idx) => (
                <button
                  key={st.id}
                  onClick={() => setMitosisIdx(idx)}
                  className={`flex-1 min-w-[100px] py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                    idx === mitosisIdx
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="block text-[10px] opacity-80">ধাপ {idx + 1}</span>
                  <span className="truncate">{st.nameBn.split(' ')[1] || st.nameBn}</span>
                </button>
              ))}
            </div>

            {/* SVG Cell Visualizer Box */}
            <div className="relative aspect-video rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center justify-center shadow-2xl p-4">
              <svg viewBox="0 0 600 400" className="w-full h-full max-h-[380px]">
                <defs>
                  <linearGradient id="cellBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#064e3b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#022c22" stopOpacity="0.8" />
                  </linearGradient>
                  <radialGradient id="nucGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Spindle Apparatus Fibers (Prometaphase, Metaphase, Anaphase) */}
                {(mitosisIdx >= 2 && mitosisIdx <= 4) && (
                  <g opacity="0.7">
                    {/* Poles */}
                    <circle cx="80" cy="200" r="10" fill="#f59e0b" filter="url(#glow)" />
                    <circle cx="520" cy="200" r="10" fill="#f59e0b" filter="url(#glow)" />
                    <text x="50" y="205" fill="#f59e0b" fontSize="11" fontWeight="bold">মেরু ১</text>
                    <text x="535" y="205" fill="#f59e0b" fontSize="11" fontWeight="bold">মেরু ২</text>

                    {/* Spindle Arch Lines */}
                    {[-120, -80, -40, 0, 40, 80, 120].map((offset, i) => (
                      <path
                        key={i}
                        d={`M 80 200 Q 300 ${200 + offset} 520 200`}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="1.2"
                        strokeDasharray={i % 2 === 0 ? "none" : "3,3"}
                        opacity="0.6"
                      />
                    ))}
                  </g>
                )}

                {/* Cell Plasma Membrane (Dividing in Cytokinesis) */}
                {mitosisIdx === 6 ? (
                  // Cytokinesis: Pinched double cell
                  <g>
                    <ellipse cx="210" cy="200" rx="140" ry="140" fill="url(#cellBg)" stroke="#10b981" strokeWidth="3" />
                    <ellipse cx="390" cy="200" rx="140" ry="140" fill="url(#cellBg)" stroke="#10b981" strokeWidth="3" />
                    {/* Cell plate line */}
                    <line x1="300" y1="70" x2="300" y2="330" stroke="#facc15" strokeWidth="4" strokeDasharray="6,4" />
                    <text x="245" y="55" fill="#facc15" fontSize="12" fontWeight="bold">কোষপ্লেট (Cell Plate)</text>
                  </g>
                ) : (
                  // Normal single ellipse cell
                  <ellipse cx="300" cy="200" rx="250" ry="155" fill="url(#cellBg)" stroke="#10b981" strokeWidth="3" />
                )}

                {/* Nuclear Membrane (Present in Interphase, Prophase, Telophase, Cytokinesis) */}
                {(mitosisIdx === 0 || mitosisIdx === 1) && (
                  <ellipse cx="300" cy="200" rx="130" ry="90" fill="url(#nucGlow)" stroke="#34d399" strokeWidth="2" strokeDasharray={mitosisIdx === 1 ? "6,4" : "none"} opacity="0.8" />
                )}
                {(mitosisIdx === 5 || mitosisIdx === 6) && (
                  // Two new daughter nuclei
                  <g>
                    <circle cx="210" cy="200" r="60" fill="url(#nucGlow)" stroke="#34d399" strokeWidth="2" />
                    <circle cx="390" cy="200" r="60" fill="url(#nucGlow)" stroke="#34d399" strokeWidth="2" />
                  </g>
                )}

                {/* Nucleolus (Fading in Prophase, reappearing in Telophase) */}
                {mitosisIdx === 0 && <circle cx="330" cy="180" r="16" fill="#047857" stroke="#6ee7b7" strokeWidth="1.5" />}
                {mitosisIdx === 1 && <circle cx="330" cy="180" r="10" fill="#047857" opacity="0.4" />}
                {(mitosisIdx === 5 || mitosisIdx === 6) && (
                  <g>
                    <circle cx="210" cy="190" r="10" fill="#047857" stroke="#6ee7b7" />
                    <circle cx="390" cy="190" r="10" fill="#047857" stroke="#6ee7b7" />
                  </g>
                )}

                {/* CHROMOSOMES ACCORDING TO STAGE */}
                {/* 1. Interphase: Loose thread-like chromatin net */}
                {mitosisIdx === 0 && (
                  <g stroke="#38bdf8" strokeWidth="1.8" fill="none" opacity="0.75">
                    <path d="M 230 180 Q 280 150 320 210 T 360 170" />
                    <path d="M 240 220 Q 300 240 340 190 T 370 230" />
                    <path d="M 260 160 Q 310 220 350 220" />
                    <text x="235" y="270" fill="#94a3b8" fontSize="12" fontWeight="bold">ক্রোমাটিন জালিকা (Chromatin Network)</text>
                  </g>
                )}

                {/* 2. Prophase: Condensed X-chromosomes floating in nucleus */}
                {mitosisIdx === 1 && (
                  <g filter="url(#glow)">
                    <g transform="translate(260, 180) rotate(15)">
                      <line x1="-15" y1="-25" x2="15" y2="25" stroke="#ec4899" strokeWidth="5" strokeLinecap="round" />
                      <line x1="15" y1="-25" x2="-15" y2="25" stroke="#ec4899" strokeWidth="5" strokeLinecap="round" />
                      <circle cx="0" cy="0" r="4.5" fill="#facc15" />
                    </g>
                    <g transform="translate(330, 210) rotate(-25)">
                      <line x1="-18" y1="-28" x2="18" y2="28" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                      <line x1="18" y1="-28" x2="-18" y2="28" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                      <circle cx="0" cy="0" r="4.5" fill="#facc15" />
                    </g>
                    <text x="210" y="260" fill="#38bdf8" fontSize="12" fontWeight="bold">ঘনীভূত দৃশ্যমান ক্রোমোজোম (2 Chromatids)</text>
                  </g>
                )}

                {/* 3. Prometaphase: Moving towards equator */}
                {mitosisIdx === 2 && (
                  <g filter="url(#glow)">
                    <g transform="translate(240, 170) rotate(45)">
                      <line x1="-15" y1="-25" x2="15" y2="25" stroke="#ec4899" strokeWidth="5" strokeLinecap="round" />
                      <line x1="15" y1="-25" x2="-15" y2="25" stroke="#ec4899" strokeWidth="5" strokeLinecap="round" />
                      <circle cx="0" cy="0" r="4" fill="#facc15" />
                    </g>
                    <g transform="translate(340, 220) rotate(-35)">
                      <line x1="-18" y1="-28" x2="18" y2="28" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                      <line x1="18" y1="-28" x2="-18" y2="28" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                      <circle cx="0" cy="0" r="4" fill="#facc15" />
                    </g>
                    <text x="210" y="320" fill="#f59e0b" fontSize="12" fontWeight="bold">ক্রোমোজোমের বিষুবীয় অভিমুখী চলন (নৃত্য)</text>
                  </g>
                )}

                {/* 4. Metaphase: Aligned strictly on equatorial plate */}
                {mitosisIdx === 3 && (
                  <g filter="url(#glow)">
                    {/* Equatorial dotted line */}
                    <line x1="300" y1="80" x2="300" y2="320" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.7" />
                    <text x="310" y="100" fill="#facc15" fontSize="11" fontWeight="bold">বিষুবীয় রেখা (Metaphase Plate)</text>

                    {/* 4 Aligned Chromosomes along vertical X=300 */}
                    {[130, 180, 230, 280].map((yPos, i) => (
                      <g key={i} transform={`translate(300, ${yPos})`}>
                        {/* Arms pointing outwards horizontally */}
                        <line x1="-32" y1="-8" x2="0" y2="0" stroke={i % 2 === 0 ? "#ec4899" : "#38bdf8"} strokeWidth="5.5" strokeLinecap="round" />
                        <line x1="-32" y1="8" x2="0" y2="0" stroke={i % 2 === 0 ? "#ec4899" : "#38bdf8"} strokeWidth="5.5" strokeLinecap="round" />
                        <line x1="32" y1="-8" x2="0" y2="0" stroke={i % 2 === 0 ? "#ec4899" : "#38bdf8"} strokeWidth="5.5" strokeLinecap="round" />
                        <line x1="32" y1="8" x2="0" y2="0" stroke={i % 2 === 0 ? "#ec4899" : "#38bdf8"} strokeWidth="5.5" strokeLinecap="round" />
                        {/* Central Centromere on Equator */}
                        <circle cx="0" cy="0" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                      </g>
                    ))}
                  </g>
                )}

                {/* 5. Anaphase: Separated daughter chromosomes migrating to poles (V, L, J, I) */}
                {mitosisIdx === 4 && (
                  <g filter="url(#glow)">
                    {/* Left moving group (towards Pole 1 at x=80) - Centromere leading Left */}
                    <g transform="translate(190, 150)">
                      {/* V Shape */}
                      <path d="M 30 -18 L 0 0 L 30 18" stroke="#ec4899" strokeWidth="5" fill="none" strokeLinecap="round" />
                      <circle cx="0" cy="0" r="4.5" fill="#facc15" />
                    </g>
                    <g transform="translate(180, 240)">
                      {/* L Shape */}
                      <path d="M 35 -10 L 0 0 L 20 20" stroke="#38bdf8" strokeWidth="5" fill="none" strokeLinecap="round" />
                      <circle cx="0" cy="0" r="4.5" fill="#facc15" />
                    </g>

                    {/* Right moving group (towards Pole 2 at x=520) - Centromere leading Right */}
                    <g transform="translate(410, 150)">
                      {/* V Shape pointing right */}
                      <path d="M -30 -18 L 0 0 L -30 18" stroke="#ec4899" strokeWidth="5" fill="none" strokeLinecap="round" />
                      <circle cx="0" cy="0" r="4.5" fill="#facc15" />
                    </g>
                    <g transform="translate(420, 240)">
                      {/* L Shape pointing right */}
                      <path d="M -35 -10 L 0 0 L -20 20" stroke="#38bdf8" strokeWidth="5" fill="none" strokeLinecap="round" />
                      <circle cx="0" cy="0" r="4.5" fill="#facc15" />
                    </g>

                    {/* Motion direction arrows */}
                    <line x1="240" y1="200" x2="160" y2="200" stroke="#facc15" strokeWidth="2" markerEnd="url(#arrow)" />
                    <line x1="360" y1="200" x2="440" y2="200" stroke="#facc15" strokeWidth="2" />
                    <text x="210" y="320" fill="#facc15" fontSize="12" fontWeight="bold">মেরুমুখী অপত্য ক্রোমোজোম চলন (V, L, J, I)</text>
                  </g>
                )}

                {/* 6. Telophase & 7. Cytokinesis: Chromatin uncoiling in two poles */}
                {(mitosisIdx === 5 || mitosisIdx === 6) && (
                  <g strokeWidth="2" fill="none" opacity="0.8">
                    {/* Left nucleus chromatin */}
                    <g stroke="#ec4899">
                      <path d="M 180 180 Q 210 160 230 200 T 240 180" />
                      <path d="M 190 220 Q 215 240 235 210" />
                    </g>
                    {/* Right nucleus chromatin */}
                    <g stroke="#38bdf8">
                      <path d="M 360 180 Q 390 160 410 200 T 420 180" />
                      <path d="M 370 220 Q 395 240 415 210" />
                    </g>
                    <text x="220" y="340" fill="#10b981" fontSize="12" fontWeight="bold">জলযোজন ও অপত্য নিউক্লিয়াস পুনর্গঠন</text>
                  </g>
                )}
              </svg>

              {/* Bottom Playback Step Controller */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 px-4 py-2 rounded-xl backdrop-blur-md shadow-xl text-xs">
                <button
                  onClick={() => setMitosisIdx((prev) => Math.max(0, prev - 1))}
                  disabled={mitosisIdx === 0}
                  className="p-1 rounded text-slate-300 hover:text-white disabled:opacity-30"
                  title="পূর্ববর্তী পর্যায়"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="font-mono text-emerald-300 font-bold px-2">
                  ধাপ {mitosisIdx + 1} / {mitosisStages.length}
                </span>
                <button
                  onClick={() => setMitosisIdx((prev) => Math.min(mitosisStages.length - 1, prev + 1))}
                  disabled={mitosisIdx === mitosisIdx + 1}
                  className="p-1 rounded text-slate-300 hover:text-white disabled:opacity-30"
                  title="পরবর্তী পর্যায়"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setMitosisIdx(0)}
                  className="p-1 rounded text-slate-400 hover:text-white ml-2"
                  title="পুনরায় শুরু"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Current Stage Detailed Explanation Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{currentStage.nameBn}</span>
                  </h3>
                  <span className="text-xs text-emerald-400/90">{currentStage.subBn}</span>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  2n → 2n
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentStage.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {currentStage.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Centromere Morphology Interactive Lab (V, L, J, I) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white">
                  ক্রোমোজোমের রূপভেদ ল্যাব (V, L, J, I)
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                অ্যানাফেজ পর্যায়ে সেন্ট্রোমিয়ারের অবস্থানের কারণে ক্রোমোজোম মেরুর দিকে চলার সময় ইংরেজি ৪টি বর্ণের মতো দেখায়।
              </p>

              {/* Morphology Shape Selector */}
              <div className="grid grid-cols-4 gap-1.5">
                {(['V', 'L', 'J', 'I'] as const).map((shape) => (
                  <button
                    key={shape}
                    onClick={() => setSelectedShape(shape)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                      selectedShape === shape
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-105'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {shape}-আকৃতি
                  </button>
                ))}
              </div>

              {/* Dynamic SVG Morphology Display */}
              <div className="aspect-square w-full rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-36 h-36">
                  {selectedShape === 'V' && (
                    <g filter="url(#glow)">
                      <path d="M 40 60 L 100 130 L 160 60" fill="none" stroke="#f59e0b" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="100" cy="130" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                    </g>
                  )}
                  {selectedShape === 'L' && (
                    <g filter="url(#glow)">
                      <path d="M 40 60 L 100 130 L 170 100" fill="none" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="100" cy="130" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                    </g>
                  )}
                  {selectedShape === 'J' && (
                    <g filter="url(#glow)">
                      <path d="M 50 50 L 100 140 L 130 115" fill="none" stroke="#ec4899" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="100" cy="140" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                    </g>
                  )}
                  {selectedShape === 'I' && (
                    <g filter="url(#glow)">
                      <line x1="100" y1="40" x2="100" y2="150" stroke="#10b981" strokeWidth="12" strokeLinecap="round" />
                      <circle cx="100" cy="150" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                    </g>
                  )}
                </svg>

                {/* Details badge below SVG */}
                <div className="text-center mt-2 space-y-1">
                  <span className="text-xs font-extrabold text-amber-400 block">
                    {selectedShape === 'V' ? 'মেটাসেন্ট্রিক (Metacentric)' :
                     selectedShape === 'L' ? 'সাব-মেটাসেন্ট্রিক (Sub-metacentric)' :
                     selectedShape === 'J' ? 'অ্যাক্রোসেন্ট্রিক (Acrocentric)' :
                     'টেলোসেন্ট্রিক (Telocentric)'}
                  </span>
                  <span className="text-[11px] text-slate-300 block">
                    {selectedShape === 'V' ? 'সেন্ট্রোমিয়ার ঠিক কেন্দ্রে · দুই বাহু সমান' :
                     selectedShape === 'L' ? 'সেন্ট্রোমিয়ার কেন্দ্রের পাশে · একটি বাহু বড়' :
                     selectedShape === 'J' ? 'সেন্ট্রোমিয়ার প্রান্তের কাছে · একটি বাহু অতি ক্ষুদ্র' :
                     'সেন্ট্রোমিয়ার একেবারে প্রান্তে · একক দৃশ্যমান বাহু'}
                  </span>
                </div>
              </div>

              {/* Board Examination Alert */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                <span className="font-bold flex items-center gap-1 text-amber-400">
                  <Info className="h-3.5 w-3.5" />
                  এসএসসি পরীক্ষায় নিশ্চিত প্রশ্ন:
                </span>
                <p className="text-[11px] leading-relaxed">
                  "অ্যানাফেজ পর্যায়ে সেন্ট্রোমিয়ার মধ্যভাগে থাকলে কোন আকৃতি হয়?" ⟶ <strong>V-আকার বা মেটাসেন্ট্রিক</strong>।
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: MEIOSIS & CROSSING OVER VISUALIZER                                 */}
      {/* ========================================================================= */}
      {activeTab === 'crossingOver' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Visualizer Area */}
          <div className="lg:col-span-8 space-y-4">
            {/* Step Controls */}
            <div className="flex items-center justify-between gap-1 overflow-x-auto p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold">
              {[
                { step: 1, title: '১. হোমোলোগাস জোড়' },
                { step: 2, title: '২. ক্রোমাটিড গঠন' },
                { step: 3, title: '৩. সিন্যাপসিস ও বাইভ্যালেন্ট' },
                { step: 4, title: '৪. কায়াজমা ও ক্রসিং' },
                { step: 5, title: '৫. জিন রিকম্বিনেশন' },
                { step: 6, title: '৬. ৪টি হ্যাপ্লয়েড গ্যামেট' }
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setCrossOverStep(s.step)}
                  className={`px-3 py-2 rounded-lg transition-all text-center whitespace-nowrap ${
                    crossOverStep === s.step
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Interactive SVG Crossing Over Canvas */}
            <div className="aspect-video w-full rounded-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
              <svg viewBox="0 0 600 320" className="w-full h-full max-h-[300px]">
                {/* Step 1 to 5: Two Chromosomes Interacting */}
                {crossOverStep <= 5 && (
                  <g>
                    {/* Maternal Chromosome (Rose/Red) */}
                    <g transform="translate(240, 160)">
                      {/* Left Sister Chromatid (Always Pure Red) */}
                      <path d="M -20 -110 Q -25 -50 -10 0 Q -25 50 -20 110" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
                      
                      {/* Right Sister Chromatid (Undergoes Cross at Step 4 & 5) */}
                      {crossOverStep >= 5 ? (
                        // Recombinant: Top is red, bottom is swapped with blue!
                        <g>
                          <path d="M 0 -110 Q -5 -50 0 0 Q 5 25 15 50" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
                          <path d="M 15 50 Q 25 80 20 110" fill="none" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" />
                        </g>
                      ) : crossOverStep === 4 ? (
                        // Chiasma X crossover shape
                        <path d="M 0 -110 Q -5 -50 0 0 Q 30 50 60 110" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
                      ) : (
                        // Normal straight
                        <path d="M 0 -110 Q -5 -50 0 0 Q -5 50 0 110" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
                      )}
                      
                      {/* Centromere */}
                      <circle cx="-5" cy="0" r="7" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                      <text x="-45" y="-120" fill="#ef4444" fontSize="12" fontWeight="bold">মাতৃ ক্রোমোজোম (Maternal)</text>
                    </g>

                    {/* Paternal Chromosome (Cyan/Blue) */}
                    <g transform="translate(360, 160)">
                      {/* Left Sister Chromatid (Undergoes Cross at Step 4 & 5) */}
                      {crossOverStep >= 5 ? (
                        // Recombinant: Top is blue, bottom is swapped with red!
                        <g>
                          <path d="M 0 -110 Q 5 -50 0 0 Q -5 25 -15 50" fill="none" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" />
                          <path d="M -15 50 Q -25 80 -20 110" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
                        </g>
                      ) : crossOverStep === 4 ? (
                        // Chiasma X crossover shape crossing over to left
                        <path d="M 0 -110 Q 5 -50 0 0 Q -30 50 -60 110" fill="none" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" />
                      ) : (
                        // Normal straight
                        <path d="M 0 -110 Q 5 -50 0 0 Q 5 50 0 110" fill="none" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" />
                      )}

                      {/* Right Sister Chromatid (Always Pure Blue) */}
                      <path d="M 20 -110 Q 25 -50 10 0 Q 25 50 20 110" fill="none" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" />

                      {/* Centromere */}
                      <circle cx="5" cy="0" r="7" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                      <text x="-5" y="-120" fill="#38bdf8" fontSize="12" fontWeight="bold">পিতৃ ক্রোমোজোম (Paternal)</text>
                    </g>

                    {/* Chiasma X Marker at Step 4 */}
                    {crossOverStep === 4 && (
                      <g>
                        <circle cx="300" cy="210" r="16" fill="none" stroke="#facc15" strokeWidth="2.5" strokeDasharray="3,3" />
                        <text x="325" y="215" fill="#facc15" fontSize="13" fontWeight="bold">কায়াজমা (Chiasma - X স্থান)</text>
                      </g>
                    )}
                  </g>
                )}

                {/* Step 6: 4 Unique Recombinant Haploid Daughter Cells */}
                {crossOverStep === 6 && (
                  <g>
                    <text x="170" y="30" fill="#10b981" fontSize="14" fontWeight="bold">মিয়োসিস শেষে ৪টি বৈচিত্র্যময় হ্যাপ্লয়েড গ্যামেট (n)</text>
                    {[
                      { x: 90, colorTop: '#ef4444', colorBot: '#ef4444', label: '১. বিশুদ্ধ মাতৃ' },
                      { x: 230, colorTop: '#ef4444', colorBot: '#38bdf8', label: '২. রিকম্বিন্যান্ট (M+P)' },
                      { x: 370, colorTop: '#38bdf8', colorBot: '#ef4444', label: '৩. রিকম্বিন্যান্ট (P+M)' },
                      { x: 510, colorTop: '#38bdf8', colorBot: '#38bdf8', label: '৪. বিশুদ্ধ পিতৃ' }
                    ].map((c, i) => (
                      <g key={i} transform={`translate(${c.x}, 150)`}>
                        {/* Gamete cell boundary */}
                        <circle cx="0" cy="0" r="55" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                        {/* Chromosome strand */}
                        <path d="M 0 -35 L 0 5" stroke={c.colorTop} strokeWidth="8" strokeLinecap="round" />
                        <path d="M 0 5 L 0 35" stroke={c.colorBot} strokeWidth="8" strokeLinecap="round" />
                        <circle cx="0" cy="5" r="4.5" fill="#facc15" />
                        <text x="-40" y="75" fill="#94a3b8" fontSize="10.5" fontWeight="bold">{c.label}</text>
                      </g>
                    ))}
                  </g>
                )}
              </svg>
            </div>

            {/* Step Explanation Text */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-emerald-400 block text-sm mb-1">
                {crossOverStep === 1 && '১. হোমোলোগাস ক্রোমোজোম জোড়: পিতা ও মাতা থেকে আগত অনুরূপ ক্রোমোজোম।'}
                {crossOverStep === 2 && '২. ক্রোমাটিড গঠন: প্রতিটি ক্রোমোজোম অনুলিপন হয়ে দুটি ভগিনী ক্রোমাটিড লাভ করে।'}
                {crossOverStep === 3 && '৩. সিন্যাপসিস ও বাইভ্যালেন্ট: জাইগোটিন ধাপে পাশাপাশি জোড় বাঁধা (Synapsis)।'}
                {crossOverStep === 4 && '৪. কায়াজমা গঠন: প্যাকাইটিনে নন-সিস্টার ক্রোমাটিডদ্বয় X চিহ্নে পরস্পরকে অতিক্রম করে।'}
                {crossOverStep === 5 && '৫. খণ্ডাংশ বিনিময় ও রিকম্বিনেশন: এন্ডোনিউক্লিয়েজ দ্বারা কেটে লাইগেজ দিয়ে জোড়া লেগে অংশের বদল।'}
                {crossOverStep === 6 && '৬. ৪টি স্বতন্ত্র গ্যামেট: ক্রসিং ওভারের ফলে প্রতিটি অপত্য কোষে নতুন বৈশিষ্ট্য সঞ্চারিত হয়।'}
              </span>
              <p className="text-slate-400 text-xs mt-1">
                ক্রসিং ওভারের কারণেই পিতা-মাতা থেকে সন্তান সন্ততিতে জিনগত বৈচিত্র্য বা প্রকরণ (Genetic variation) সৃষ্টি হয়, যার ওপর ভিত্তি করে জৈব বিবর্তন ঘটে।
              </p>
            </div>
          </div>

          {/* Right Column: Recombination Frequency Controls */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Dna className="h-4 w-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">জিনগত দূরত্ব ও রিকম্বিনেশন</h3>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">ক্রোমোজোমে দুটি জিনের দূরত্ব:</span>
                  <span className="font-mono text-emerald-400 font-bold">{crossFrequency} cM (মর্গান একক)</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={crossFrequency}
                  onChange={(e) => setCrossFrequency(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Dynamic Law calculation */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">ক্রসিং ওভার সম্ভাবনা:</span>
                  <span className="font-bold text-cyan-300">{crossFrequency}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">লিংকেজ বা অবিভাজ্য থাকা:</span>
                  <span className="font-bold text-amber-300">{100 - crossFrequency}%</span>
                </div>
                <div className="text-[11px] text-slate-300 pt-1 border-t border-slate-800/80 leading-relaxed">
                  মর্গানের সূত্রানুসারে: ক্রোমোজোমে দুটি জিনের মধ্যবর্তী দূরত্ব যত বেশি, তাদের মাঝে ক্রসিং ওভার ঘটার সম্ভাবনাও তত বেশি।
                </div>
              </div>

              {/* Significance Box */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 space-y-1.5">
                <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  জীবজগতে ক্রসিং ওভারের মহাগুরুত্ব:
                </span>
                <ul className="list-disc list-inside text-[11px] space-y-1 text-slate-300">
                  <li>নতুন প্রকরণ (Variation) তৈরি করে।</li>
                  <li>ফসলের নতুন রোগপ্রতিরোধী ও উচ্চফলনশীল জাত উদ্ভাবন।</li>
                  <li>ক্রোমোজোম ম্যাপিং (Gene mapping) তৈরিতে অপরিহার্য।</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CELL CYCLE & CANCER CONTROL STUDIO                                 */}
      {/* ========================================================================= */}
      {activeTab === 'cellCycle' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Visualizer Area */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="h-4 w-4 text-emerald-400" />
                  <span>কোষচক্র চেকপয়েন্ট নিয়ন্ত্রণ সিমুলেশন</span>
                </h3>
                <span className="text-xs text-slate-400">G1, S, G2 ইন্টারফেজ ও মাইটোটিক M-পর্যায়ের ভারসাম্য</span>
              </div>

              {/* Mode Toggle Button */}
              <button
                onClick={() => setIsCancerMode(!isCancerMode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  isCancerMode
                    ? 'bg-rose-500 text-white shadow-lg animate-pulse'
                    : 'bg-emerald-500 text-slate-950 shadow-md'
                }`}
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>{isCancerMode ? 'ক্যান্সার মোড সক্রিয় (অনিয়ন্ত্রিত)' : 'স্বাভাবিক নিয়ন্ত্রিত মোড'}</span>
              </button>
            </div>

            {/* SVG Cell Cycle Donut Chart & Checkpoints */}
            <div className="aspect-video w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 flex items-center justify-center relative overflow-hidden shadow-2xl">
              <svg viewBox="0 0 500 360" className="w-full h-full max-h-[340px]">
                {/* Center Core Display */}
                <circle cx="250" cy="180" r="80" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                <text x="220" y="165" fill="#ffffff" fontSize="13" fontWeight="bold">কোষচক্র</text>
                <text x="210" y="185" fill={isCancerMode ? "#f43f5e" : "#10b981"} fontSize="12" fontWeight="bold">
                  {isCancerMode ? 'অনিয়ন্ত্রিত বৃদ্ধি' : 'স্বাভাবিক নিয়ন্ত্রণ'}
                </text>
                <text x="200" y="205" fill="#94a3b8" fontSize="10 font-mono">
                  {isCancerMode ? 'p53 মিউট্যান্ট' : 'p53 সক্রিয়'}
                </text>

                {/* Donut Segments */}
                {/* G1 Phase: 30-40% */}
                <path d="M 250 50 A 130 130 0 0 1 380 180" fill="none" stroke="#38bdf8" strokeWidth="35" opacity="0.8" />
                <text x="320" y="110" fill="#38bdf8" fontSize="12" fontWeight="bold">G1 (বৃদ্ধি ১)</text>

                {/* S Phase: 30-45% (DNA Replication) */}
                <path d="M 380 180 A 130 130 0 0 1 250 310" fill="none" stroke="#a855f7" strokeWidth="35" opacity="0.8" />
                <text x="320" y="270" fill="#a855f7" fontSize="12" fontWeight="bold">S (ডিএনএ কপি)</text>

                {/* G2 Phase: 10-20% */}
                <path d="M 250 310 A 130 130 0 0 1 120 180" fill="none" stroke="#f59e0b" strokeWidth="35" opacity="0.8" />
                <text x="130" y="270" fill="#f59e0b" fontSize="12" fontWeight="bold">G2 (প্রস্তুতি)</text>

                {/* M Phase: 5-10% (Mitosis) */}
                <path d="M 120 180 A 130 130 0 0 1 250 50" fill="none" stroke={isCancerMode ? "#ef4444" : "#10b981"} strokeWidth="35" opacity="0.9" />
                <text x="130" y="110" fill={isCancerMode ? "#ef4444" : "#10b981"} fontSize="12" fontWeight="bold">M (বিভাজন)</text>

                {/* Checkpoint Indicators */}
                {/* Checkpoint 1: G1/S */}
                <circle cx="380" cy="180" r="10" fill={isCancerMode ? "#ef4444" : "#10b981"} />
                <text x="400" y="185" fill={isCancerMode ? "#ef4444" : "#10b981"} fontSize="10.5" fontWeight="bold">
                  {isCancerMode ? 'চেকপয়েন্ট ১ বিকল' : 'চেকপয়েন্ট ১ (G1/S)'}
                </text>

                {/* Checkpoint 2: G2/M */}
                <circle cx="120" cy="180" r="10" fill={isCancerMode ? "#ef4444" : "#10b981"} />
                <text x="10" y="185" fill={isCancerMode ? "#ef4444" : "#10b981"} fontSize="10.5" fontWeight="bold">
                  {isCancerMode ? 'চেকপয়েন্ট ২ বিকল' : 'চেকপয়েন্ট ২ (G2/M)'}
                </text>
              </svg>
            </div>
          </div>

          {/* Right Column: Cancer Proliferation Metrics */}
          <div className="lg:col-span-4 space-y-4">
            <div className={`rounded-2xl border p-5 space-y-4 shadow-xl transition-all ${
              isCancerMode
                ? 'bg-rose-950/20 border-rose-800/60'
                : 'bg-slate-900 border-slate-800'
            }`}>
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Zap className={`h-4 w-4 ${isCancerMode ? 'text-rose-400' : 'text-emerald-400'}`} />
                <h3 className="text-sm font-bold text-white">
                  {isCancerMode ? 'টিউমার কোষ বিস্তার সিমুলেশন' : 'স্বাভাবিক কোষের সংখ্যা বৃদ্ধি'}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">বিভাজন চক্র সংখ্যা (Cycles):</span>
                  <span className="font-mono text-cyan-300 font-bold">{cancerCycleCount} চক্র</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={cancerCycleCount}
                  onChange={(e) => setCancerCycleCount(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />

                {/* Calculated exponential cell output: 2^n */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">সৃষ্ট অপত্য কোষ সংখ্যা:</span>
                    <span className={`text-base font-extrabold font-mono ${isCancerMode ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {Math.pow(2, cancerCycleCount)} টি কোষ
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${isCancerMode ? 'bg-rose-500' : 'bg-emerald-500'}`}
                      style={{ width: `${(Math.pow(2, cancerCycleCount) / 256) * 100}%` }}
                    />
                  </div>
                </div>

                {isCancerMode ? (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-200 space-y-1">
                    <span className="font-bold flex items-center gap-1 text-rose-400">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      ম্যালিগন্যান্ট রূপান্তর:
                    </span>
                    <p className="text-[11px] leading-relaxed">
                      অনকোজিনের অবিরাম সংকেতে কোষ অ্যাপোপটোসিস এড়িয়ে ক্রমাগত দ্রুত বিভাজিত হয়ে সংলগ্ন রক্তনালীতে আক্রমণ করে (মেটাস্ট্যাসিস)।
                    </p>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 space-y-1">
                    <span className="font-bold flex items-center gap-1 text-emerald-300">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      সুনিয়ন্ত্রিত বৃদ্ধি:
                    </span>
                    <p className="text-[11px] leading-relaxed">
                      ডিএনএ ক্ষতিগ্রস্ত হলে p53 প্রোটিন কোষচক্র স্থগিত করে মেরামত সম্পন্ন করে অথবা ত্রুটিপূর্ণ কোষকে ধ্বংস করে দেহকে রক্ষা করে।
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
