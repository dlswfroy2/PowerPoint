import React, { useState, useMemo, useRef } from 'react';
import { elementsData } from '../data/elementsData';
import { ElementData } from '../types/presentation';
import { 
  Atom, 
  Sparkles, 
  RotateCcw, 
  ArrowUpRight, 
  ArrowDownRight, 
  Zap, 
  Info,
  Layers,
  Search,
  Sliders,
  Filter,
  Play,
  Pause,
  Gauge,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const BohrAtomSimulator: React.FC = () => {
  const [selectedAtomicNumber, setSelectedAtomicNumber] = useState<number>(11); // Default Sodium (Na)
  const [quantumState, setQuantumState] = useState<'ground' | 'excited' | 'emitting'>('ground');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPeriod, setSelectedPeriod] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const currentElement = useMemo(() => {
    return elementsData.find((el) => el.atomicNumber === selectedAtomicNumber) || elementsData[0];
  }, [selectedAtomicNumber]);

  // Total shells for current element (1 to 7)
  const totalShells = currentElement.shells.length;

  // Bilingual shell labels
  const shellInfoList = [
    { labelBn: 'K স্তর (n=1)', labelEn: 'K-Shell', capacity: 2 },
    { labelBn: 'L স্তর (n=2)', labelEn: 'L-Shell', capacity: 8 },
    { labelBn: 'M স্তর (n=3)', labelEn: 'M-Shell', capacity: 18 },
    { labelBn: 'N স্তর (n=4)', labelEn: 'N-Shell', capacity: 32 },
    { labelBn: 'O স্তর (n=5)', labelEn: 'O-Shell', capacity: 32 },
    { labelBn: 'P স্তর (n=6)', labelEn: 'P-Shell', capacity: 18 },
    { labelBn: 'Q স্তর (n=7)', labelEn: 'Q-Shell', capacity: 8 }
  ];

  // Dynamic radius calculation to ensure all 7 shells fit gracefully in viewBox -225 -225 450 450
  const getShellRadius = (shellIndex: number, isExcited: boolean) => {
    let baseRadius = 0;
    if (totalShells === 1) {
      baseRadius = 90;
    } else {
      const minR = totalShells > 5 ? 46 : totalShells > 3 ? 56 : 68;
      const maxR = totalShells > 5 ? 198 : 185;
      baseRadius = minR + (shellIndex * (maxR - minR)) / (totalShells - 1);
    }

    if (isExcited) {
      const step = totalShells > 1 ? (198 - 46) / (totalShells - 1) : 40;
      return baseRadius + Math.max(18, step * 0.65);
    }
    return baseRadius;
  };

  // Handle quantum absorption jump
  const triggerAbsorption = () => {
    setQuantumState('excited');
  };

  // Handle quantum emission jump
  const triggerEmission = () => {
    setQuantumState('emitting');
    setTimeout(() => {
      setQuantumState('ground');
    }, 1800);
  };

  const resetGround = () => {
    setQuantumState('ground');
  };

  // Valence electrons (outermost shell)
  const valenceElectrons = currentElement.shells[currentElement.shells.length - 1];

  // Benchmark quick presets across all 118 elements
  const benchmarkElements = [
    { z: 1, label: 'H (হাইড্রোজেন)' },
    { z: 2, label: 'He (হিলিয়াম)' },
    { z: 6, label: 'C (কার্বন)' },
    { z: 8, label: 'O (অক্সিজেন)' },
    { z: 11, label: 'Na (সোডিয়াম)' },
    { z: 13, label: 'Al (অ্যালুমিনিয়াম)' },
    { z: 17, label: 'Cl (ক্লোরিন)' },
    { z: 18, label: 'Ar (আর্গন)' },
    { z: 20, label: 'Ca (ক্যালসিয়াম)' },
    { z: 24, label: 'Cr (ক্রোমিয়াম)' },
    { z: 26, label: 'Fe (আয়রন)' },
    { z: 29, label: 'Cu (কপার)' },
    { z: 35, label: 'Br (ব্রোমিন)' },
    { z: 47, label: 'Ag (সিলভার)' },
    { z: 53, label: 'I (আয়োডিন)' },
    { z: 79, label: 'Au (গোল্ড/সোনা)' },
    { z: 80, label: 'Hg (পারদ)' },
    { z: 82, label: 'Pb (লেড/সীসা)' },
    { z: 92, label: 'U (ইউরেনিয়াম)' },
    { z: 118, label: 'Og (ওগানেসন)' }
  ];

  // Distinct category list
  const categories = useMemo(() => {
    const set = new Set<string>();
    elementsData.forEach(el => set.add(el.category));
    return Array.from(set);
  }, []);

  // Filtered elements for search & period filtering
  const filteredElements = useMemo(() => {
    return elementsData.filter(el => {
      // Period filter
      if (selectedPeriod !== 'all' && el.period !== selectedPeriod) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && el.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchZ = String(el.atomicNumber).includes(q);
        const matchSymbol = el.symbol.toLowerCase().includes(q);
        const matchBn = el.nameBn.toLowerCase().includes(q);
        const matchEn = el.nameEn.toLowerCase().includes(q);
        return matchZ || matchSymbol || matchBn || matchEn;
      }
      return true;
    });
  }, [selectedPeriod, selectedCategory, searchQuery]);

  // Group elements by period for dropdown
  const elementsByPeriod = useMemo(() => {
    const grouped: { [period: number]: ElementData[] } = {};
    for (let p = 1; p <= 7; p++) {
      grouped[p] = elementsData.filter(el => el.period === p);
    }
    return grouped;
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-6">
      {/* Dynamic Keyframes for smooth GPU orbital rotation */}
      <style>{`
        @keyframes orbitClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounterClockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>

      {/* Title & Introduction */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">ইন্টারঅ্যাক্টিভ সিমুলেশন</span>
          <span aria-hidden="true">·</span>
          <span>বোর পরমাণু মডেল</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-400 font-medium">১ হতে ১১৮টি সম্পূর্ণ মৌল (All 118 Elements)</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              বোর পরমাণু মডেল ও ইলেকট্রন কক্ষপথ সিমুলেটর
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-1">
              পর্যায় সারণির ১নং হাইড্রোজেন (H) হতে ১১৮নং ওগানেসন (Og) পর্যন্ত যেকোনো মৌল নির্বাচন করে নিউক্লিয়াস, K-Q শক্তিস্তর (n=১ থেকে ৭), ইলেকট্রন বিন্যাস ও কোয়ান্টাম লম্ফ পর্যবেক্ষণ করুন।
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 bg-slate-900 border border-slate-800 p-1.5 rounded-xl text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold font-mono">
              মোট মৌল: ১১৮টি (1-118)
            </span>
          </div>
        </div>
      </div>

      {/* Two-Zone Layout: Canvas (Left) + Multi-Element Control Deck (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Zone: Interactive SVG Bohr Atom Canvas (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950 p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl min-h-[520px]">
          
          {/* Subtle background radial glow */}
          <div className="absolute inset-0 bg-radial from-cyan-950/20 via-slate-950 to-slate-950 pointer-events-none" />

          {/* Canvas Top Bar: Quick Speed & Orbit Controls */}
          <div className="w-full mb-2 flex items-center justify-between z-10 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold transition ${
                  isRotating 
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
                title={isRotating ? 'ঘূর্ণন স্থগিত করুন (Pause Orbit)' : 'ঘূর্ণন চালু করুন (Play Orbit)'}
              >
                {isRotating ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                <span>{isRotating ? 'ঘূর্ণন সচল' : 'ঘূর্ণন স্থগিত'}</span>
              </button>

              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded-lg text-slate-300">
                <Gauge className="h-3 w-3 text-cyan-400" />
                <span className="text-[11px] font-mono">গতি:</span>
                {[0.5, 1, 2].map(speed => (
                  <button
                    key={speed}
                    onClick={() => setRotationSpeed(speed)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition ${
                      rotationSpeed === speed 
                        ? 'bg-cyan-500 text-slate-950 font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>

            <div className="text-right">
              <span className="text-slate-400 font-mono text-xs">
                শক্তিস্তর: <strong className="text-cyan-300">{totalShells}টি</strong> (K - {shellInfoList[totalShells - 1]?.labelEn.charAt(0)})
              </span>
            </div>
          </div>

          {/* SVG Canvas for Bohr Atom */}
          <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
            <svg 
              viewBox="-225 -225 450 450" 
              className="w-full h-full overflow-visible"
            >
              <defs>
                {/* Nucleus Glow Filter */}
                <filter id="nucleusGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Electron Glow */}
                <filter id="electronGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Excited Electron Glow */}
                <filter id="excitedGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Concentric Orbits (K, L, M, N, O, P, Q) */}
              {currentElement.shells.map((count, shellIdx) => {
                const radius = getShellRadius(shellIdx, false);
                const info = shellInfoList[shellIdx];
                const animDuration = Math.max(12, (24 + shellIdx * 8) / rotationSpeed);
                const isEven = shellIdx % 2 === 0;

                return (
                  <g key={shellIdx}>
                    {/* Orbit Path Ring */}
                    <circle
                      cx="0"
                      cy="0"
                      r={radius}
                      fill="none"
                      stroke="#334155"
                      strokeWidth="1.2"
                      strokeDasharray={totalShells > 5 ? '3 3' : '4 3'}
                      className="transition-all duration-300"
                    />

                    {/* Orbit Label */}
                    <text
                      x={radius - (totalShells > 5 ? 10 : 14)}
                      y={-5}
                      fill="#64748b"
                      fontSize={totalShells > 5 ? '8' : '9.5'}
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {info ? `${info.labelEn.charAt(0)} (n=${shellIdx + 1})` : `n=${shellIdx + 1}`}
                    </text>

                    {/* Electron count badge on orbit */}
                    <text
                      x={radius - (totalShells > 5 ? 10 : 14)}
                      y={8}
                      fill="#0284c7"
                      fontSize={totalShells > 5 ? '7' : '8'}
                      fontFamily="monospace"
                    >
                      {count}e⁻
                    </text>

                    {/* Orbiting Electrons in this shell with live rotation */}
                    <g
                      style={{
                        transformOrigin: '0px 0px',
                        animation: isRotating 
                          ? `${isEven ? 'orbitClockwise' : 'orbitCounterClockwise'} ${animDuration}s linear infinite` 
                          : 'none'
                      }}
                    >
                      {Array.from({ length: count }).map((_, eIdx) => {
                        const angle = (2 * Math.PI * eIdx) / count;
                        const isExcitedElectron = 
                          quantumState === 'excited' && 
                          shellIdx === totalShells - 1 && 
                          eIdx === 0;

                        const currentRadius = getShellRadius(shellIdx, isExcitedElectron);
                        const cx = Math.cos(angle) * currentRadius;
                        const cy = Math.sin(angle) * currentRadius;

                        // Adaptive electron dot size based on electron density
                        const electronRadius = isExcitedElectron 
                          ? 6.5 
                          : count > 24 
                          ? 2.8 
                          : count > 14 
                          ? 3.4 
                          : 4.5;

                        return (
                          <g key={eIdx}>
                            <circle
                              cx={cx}
                              cy={cy}
                              r={electronRadius}
                              fill={isExcitedElectron ? '#f59e0b' : '#38bdf8'}
                              filter={isExcitedElectron ? 'url(#excitedGlow)' : count > 20 ? undefined : 'url(#electronGlow)'}
                              className="transition-all duration-700 ease-out"
                            />
                          </g>
                        );
                      })}
                    </g>
                  </g>
                );
              })}

              {/* Central Nucleus with Adaptive Sizing */}
              {(() => {
                const nucleusR = totalShells > 5 ? 30 : 34;
                return (
                  <g>
                    <circle
                      cx="0"
                      cy="0"
                      r={nucleusR}
                      fill="#090d16"
                      stroke="#06b6d4"
                      strokeWidth="2.5"
                      filter="url(#nucleusGlow)"
                    />
                    
                    {/* Nucleus Text Information */}
                    <text
                      x="0"
                      y={totalShells > 5 ? '-11' : '-13'}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize={totalShells > 5 ? '13' : '14'}
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      {currentElement.symbol}
                    </text>
                    <text
                      x="0"
                      y={totalShells > 5 ? '1' : '1'}
                      textAnchor="middle"
                      fill="#f43f5e"
                      fontSize={totalShells > 5 ? '6.5' : '7.5'}
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      p⁺: {currentElement.protons}
                    </text>
                    <text
                      x="0"
                      y={totalShells > 5 ? '11' : '12'}
                      textAnchor="middle"
                      fill="#38bdf8"
                      fontSize={totalShells > 5 ? '6.5' : '7.5'}
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      n⁰: {currentElement.neutrons}
                    </text>
                    <text
                      x="0"
                      y={totalShells > 5 ? '20' : '22'}
                      textAnchor="middle"
                      fill="#94a3b8"
                      fontSize="5.5"
                      fontFamily="sans-serif"
                    >
                      Z={currentElement.atomicNumber}
                    </text>
                  </g>
                );
              })()}

              {/* Photon Wave Animation (Absorption / Emission) */}
              {quantumState === 'excited' && (
                <g className="animate-pulse">
                  <path
                    d="M -190,-140 Q -150,-120 -110,-140 T -30,-120"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="3.2"
                    strokeDasharray="5 3"
                  />
                  <text x="-185" y="-150" fill="#facc15" fontSize="10" fontWeight="bold">
                    শক্তি শোষণ / Photon Absorption (hν)
                  </text>
                </g>
              )}

              {quantumState === 'emitting' && (
                <g className="animate-pulse">
                  <path
                    d="M 50,-80 Q 90,-120 130,-100 T 195,-130"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.5"
                  />
                  <text x="70" y="-125" fill="#34d399" fontSize="10" fontWeight="bold">
                    ফোটন বিকিরণ / Photon Emission (ΔE = hc/λ)
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Canvas Bottom State Status Bar */}
          <div className="w-full mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs gap-2">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold ${
                quantumState === 'ground' 
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                  : quantumState === 'excited'
                  ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30 animate-pulse'
                  : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
              }`}>
                ● অবস্থা / State: {
                  quantumState === 'ground' 
                    ? 'ভিত্তি অবস্থা (Ground State)' 
                    : quantumState === 'excited' 
                    ? 'উত্তেজিত অবস্থা (Excited State)' 
                    : 'শক্তি বিকিরণ করছে (Photon Emission)'
                }
              </span>
            </div>

            <div className="text-slate-400 font-mono text-[11px] flex items-center gap-2">
              <span>মোট ইলেকট্রন: <strong className="text-cyan-400">{currentElement.electrons}e⁻</strong></span>
              <span>·</span>
              <span>পর্যায়: <strong className="text-emerald-400">{currentElement.period}</strong></span>
              <span>·</span>
              <span>গ্রুপ: <strong className="text-amber-400">{currentElement.group}</strong></span>
            </div>
          </div>

          {/* Bilingual Diagram Legend (বাংলা ও ইংরেজি নির্দেশিকা) */}
          <div className="w-full mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-2 text-xs">
            <span className="font-bold text-white text-[11px] block uppercase tracking-wider text-slate-300">
              চিত্রের মূল কণিকাসমূহের দ্বিভাষিক নির্দেশিকা (Bilingual Diagram Legend):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-lg border border-slate-800">
                <span className="h-3 w-3 rounded-full bg-cyan-400 shrink-0 shadow-sm shadow-cyan-400/50" />
                <div>
                  <strong className="text-white block">ইলেকট্রন / Electron</strong>
                  <span className="text-slate-400 font-mono">e⁻ (ঋণাত্মক আধান)</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-lg border border-slate-800">
                <span className="h-3 w-3 rounded-full bg-rose-500 shrink-0 shadow-sm shadow-rose-500/50" />
                <div>
                  <strong className="text-white block">প্রোটন / Proton</strong>
                  <span className="text-slate-400 font-mono">p⁺ (ধনাত্মক আধান)</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-lg border border-slate-800">
                <span className="h-3 w-3 rounded-full bg-slate-400 shrink-0 shadow-sm shadow-slate-400/50" />
                <div>
                  <strong className="text-white block">নিউট্রন / Neutron</strong>
                  <span className="text-slate-400 font-mono">n⁰ (আধানহীন)</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-lg border border-slate-800">
                <span className="h-3 w-3 rounded-full border-2 border-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block">শক্তিস্তর / Orbits</strong>
                  <span className="text-slate-400 font-mono">K-Q (n=1 to 7)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Zone: Element Selector Deck (All 118 Elements), Quantum Controls & Properties (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Main 118 Elements Selector Deck */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Atom className="h-4 w-4 text-cyan-400" />
                  <span>মৌল নির্বাচন করুন (১ হতে ১১৮টি মৌল / All 118 Elements)</span>
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  পর্যায় সারণির যেকোনো মৌল বেছে নিন বা খুঁজুন
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                Z = {currentElement.atomicNumber}
              </span>
            </div>

            {/* Quick Benchmark Elements Presets */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                বহুল ব্যবহৃত মৌলসমূহ (Quick Benchmark Elements):
              </label>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                {benchmarkElements.map(({ z, label }) => {
                  const el = elementsData.find((e) => e.atomicNumber === z);
                  if (!el) return null;
                  const isSelected = selectedAtomicNumber === z;
                  return (
                    <button
                      key={z}
                      onClick={() => {
                        setSelectedAtomicNumber(z);
                        resetGround();
                      }}
                      className={`px-2 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1 ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                          : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60'
                      }`}
                      title={`${el.nameBn} (${el.symbol}) - Z = ${el.atomicNumber}`}
                    >
                      <span className="font-mono text-[10px] opacity-75">{el.atomicNumber}</span>
                      <span>{el.symbol}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Input Filter */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="মৌলের নাম, প্রতীক বা পারমাণবিক সংখ্যা লিখুন... (যেমন: Au, গোল্ড, 79, Fe, U, Og)"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-white px-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Period Filters (পর্যায় ১ থেকে ৭ ও সকল মৌল) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                <span>পর্যায় অনুযায়ী ফিল্টার (By Period):</span>
                <span>{filteredElements.length}টি মৌল</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 text-[11px]">
                <button
                  onClick={() => setSelectedPeriod('all')}
                  className={`px-1.5 py-1 rounded text-center font-medium transition ${
                    selectedPeriod === 'all'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  সব (118)
                </button>
                {[1, 2, 3, 4, 5, 6, 7].map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPeriod(p)}
                    className={`px-1.5 py-1 rounded text-center font-mono font-medium transition ${
                      selectedPeriod === p
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    P{p}
                  </button>
                ))}
              </div>
            </div>

            {/* Comprehensive Dropdown Selector with all 118 Elements grouped by Period */}
            <div className="space-y-1">
              <label className="block text-xs text-slate-400 font-medium">
                সম্পূর্ণ তালিকা থেকে নির্বাচন (১ হতে ১১৮টি মৌল):
              </label>
              <select
                value={selectedAtomicNumber}
                onChange={(e) => {
                  setSelectedAtomicNumber(Number(e.target.value));
                  resetGround();
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-200 outline-none focus:border-cyan-500 transition"
              >
                {[1, 2, 3, 4, 5, 6, 7].map((p) => {
                  const elementsInPeriod = elementsByPeriod[p] || [];
                  const rangeStr = elementsInPeriod.length > 0 
                    ? `Z = ${elementsInPeriod[0].atomicNumber} - ${elementsInPeriod[elementsInPeriod.length - 1].atomicNumber}` 
                    : '';
                  return (
                    <optgroup key={p} label={`── পর্যায় ${p} (Period ${p}: ${rangeStr}) ──`}>
                      {elementsInPeriod.map((el) => (
                        <option key={el.atomicNumber} value={el.atomicNumber}>
                          {el.atomicNumber}. {el.symbol} — {el.nameBn} / {el.nameEn} ({el.category})
                        </option>
                      ))}
                    </optgroup>
                  );
                })}
              </select>
            </div>

            {/* Scrollable Visual Elements Grid Palette */}
            <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold uppercase tracking-wider">মৌলের ভিজ্যুয়াল গ্রিড ({filteredElements.length}টি):</span>
                <span className="text-[10px] text-slate-500">ক্লিক করে নির্বাচন করুন</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 max-h-48 overflow-y-auto p-1.5 bg-slate-950/70 rounded-xl border border-slate-800">
                {filteredElements.map((el) => {
                  const isSelected = selectedAtomicNumber === el.atomicNumber;
                  return (
                    <button
                      key={el.atomicNumber}
                      onClick={() => {
                        setSelectedAtomicNumber(el.atomicNumber);
                        resetGround();
                      }}
                      className={`p-1.5 rounded-lg border text-left transition flex flex-col items-center justify-center relative min-h-[48px] ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/30 ring-1 ring-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800/80 hover:border-slate-700'
                      }`}
                      title={`${el.atomicNumber}. ${el.nameBn} (${el.symbol}) - ${el.category}`}
                    >
                      <span className={`text-[9px] font-mono leading-none ${isSelected ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
                        {el.atomicNumber}
                      </span>
                      <span className="text-xs font-extrabold tracking-tight my-0.5">
                        {el.symbol}
                      </span>
                      <span className={`text-[9px] truncate max-w-[50px] leading-none ${isSelected ? 'text-slate-950' : 'text-slate-400'}`}>
                        {el.nameBn}
                      </span>
                    </button>
                  );
                })}
                {filteredElements.length === 0 && (
                  <div className="col-span-full py-4 text-center text-xs text-slate-400">
                    কোনো মৌল খুঁজে পাওয়া যায়নি। অনুসন্ধানের শব্দ পরিবর্তন করুন।
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quantum Jump Controller Deck */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>কোয়ান্টাম লাফ (Quantum Leap) নিয়ন্ত্রণ</span>
            </h3>
            <p className="text-xs text-slate-300">
              বোর স্বীকার্য অনুসারে ইলেকট্রন নির্দিষ্ট পরিমাণ শক্তি শোষণ করে উচ্চ স্তরে ওঠে এবং ফিরে আসার সময় সমপরিমাণ শক্তি ফোটন আকারে বিকিরণ করে।
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={triggerAbsorption}
                disabled={quantumState === 'excited'}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 disabled:opacity-40 transition"
              >
                <ArrowUpRight className="h-4 w-4" />
                <span>শক্তি শোষণ (Jump Up)</span>
              </button>

              <button
                onClick={triggerEmission}
                disabled={quantumState !== 'excited'}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20 disabled:opacity-40 transition"
              >
                <ArrowDownRight className="h-4 w-4" />
                <span>শক্তি বিকিরণ (Emit Photon)</span>
              </button>
            </div>

            {quantumState !== 'ground' && (
              <button
                onClick={resetGround}
                className="w-full flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 transition"
              >
                <RotateCcw className="h-3 w-3" />
                <span>ভিত্তি অবস্থায় ফিরিয়ে আনুন (Reset to Ground State)</span>
              </button>
            )}
          </div>

          {/* Current Selected Element Properties & Shell Breakdown Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="h-4 w-4 text-cyan-400" />
                  <span>{currentElement.nameBn} ({currentElement.symbol}) এর বিবরণ</span>
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  {currentElement.nameEn} · {currentElement.category}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                গ্রুপ {currentElement.group}, পর্যায় {currentElement.period}
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">পারমাণবিক সংখ্যা (Z):</span>
                <span className="font-mono text-cyan-400 font-bold text-sm">{currentElement.atomicNumber}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">ভর সংখ্যা (A):</span>
                <span className="font-mono text-cyan-400 font-bold text-sm">{currentElement.massNumber}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">নিউট্রন সংখ্যা (N):</span>
                <span className="font-mono text-slate-200 font-bold text-sm">{currentElement.neutrons}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">যোজ্যতা ইলেকট্রন:</span>
                <span className="font-mono text-emerald-400 font-bold text-sm">{valenceElectrons}টি</span>
              </div>
            </div>

            {/* Shell-by-Shell Electron Breakdown */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium">কক্ষপথ ভিত্তিক ইলেকট্রন বিন্যাস (K, L, M, N, O, P, Q):</span>
                <span className="font-mono text-cyan-300 font-bold">মোট: {currentElement.electrons}e⁻</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentElement.shells.map((count, idx) => {
                  const shellLetter = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'][idx];
                  const isValence = idx === currentElement.shells.length - 1;
                  return (
                    <div 
                      key={idx}
                      className={`px-2 py-1 rounded text-xs border font-mono flex items-center gap-1 ${
                        isValence 
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-300'
                      }`}
                    >
                      <span className="text-cyan-400">{shellLetter}:</span>
                      <span>{count}e⁻</span>
                      {isValence && <span className="text-[10px] text-emerald-400 font-sans ml-0.5">(যোজ্যতা)</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subshell Configuration */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 block">উপশক্তিস্তর ভিত্তিক ইলেকট্রন বিন্যাস:</span>
              <code className="text-xs text-cyan-300 font-mono block font-semibold overflow-x-auto whitespace-nowrap py-0.5">
                {currentElement.configuration}
              </code>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-2">
              {currentElement.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
