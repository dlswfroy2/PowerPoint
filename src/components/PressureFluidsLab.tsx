/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Droplets, 
  Layers, 
  RotateCcw, 
  CheckCircle2, 
  ArrowUp, 
  ArrowDown, 
  Info,
  Scale,
  Gauge,
  Sliders
} from 'lucide-react';

export function PressureFluidsLab({ defaultTab = 'hydraulic' }: { defaultTab?: 'hydraulic' | 'archimedes' | 'depthPressure' } = {}) {
  const [activeTab, setActiveTab] = useState<'hydraulic' | 'archimedes' | 'depthPressure'>(defaultTab);

  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // --- Tab 1: Hydraulic Press State ---
  const [piston1Radius, setPiston1Radius] = useState<number>(2); // cm
  const [piston2Radius, setPiston2Radius] = useState<number>(10); // cm
  const [appliedForce1, setAppliedForce1] = useState<number>(50); // N
  const [pumpStroke, setPumpStroke] = useState<number>(0); // 0 to 100%

  const a1 = Math.PI * Math.pow(piston1Radius / 100, 2); // m^2
  const a2 = Math.PI * Math.pow(piston2Radius / 100, 2); // m^2
  const forceMultiplier = a2 / a1;
  const outputForce2 = appliedForce1 * forceMultiplier;
  const pressurePa = appliedForce1 / a1;
  const liftedMassKg = outputForce2 / 9.8;

  // --- Tab 2: Archimedes Buoyancy State ---
  const liquids = [
    { id: 'water', name: 'বিশুদ্ধ পানি (Water)', density: 1000, color: 'bg-cyan-500/30' },
    { id: 'sea_water', name: 'সমুদ্রের লোনা পানি (Sea Water)', density: 1025, color: 'bg-blue-600/30' },
    { id: 'dead_sea', name: 'মৃত সাগরের পানি (Dead Sea)', density: 1240, color: 'bg-emerald-600/30' },
    { id: 'kerosene', name: 'কেরোসিন (Kerosene)', density: 800, color: 'bg-amber-500/30' },
    { id: 'mercury', name: 'তরল পারদ (Mercury)', density: 13600, color: 'bg-slate-400/50' }
  ];

  const [selectedLiquidId, setSelectedLiquidId] = useState<string>('water');
  const [objectMass, setObjectMass] = useState<number>(5); // kg
  const [objectVolume, setObjectVolume] = useState<number>(0.006); // m^3 (6 Liters)

  const selectedLiquid = liquids.find(l => l.id === selectedLiquidId) || liquids[0];
  const objectDensity = objectMass / objectVolume; // kg/m^3
  const g = 9.8;
  const weight = objectMass * g; // N
  const maxBuoyancy = objectVolume * selectedLiquid.density * g; // N

  // Floating condition
  const willFloat = objectDensity < selectedLiquid.density;
  const willSuspend = Math.abs(objectDensity - selectedLiquid.density) < 10;
  const submergedRatio = Math.min(1, objectDensity / selectedLiquid.density);
  const actualBuoyancy = Math.min(weight, maxBuoyancy);
  const apparentWeight = Math.max(0, weight - maxBuoyancy);

  // --- Tab 3: Depth Pressure State ---
  const [tankHeight, setTankHeight] = useState<number>(10); // meters
  const [liquidDensityChoice, setLiquidDensityChoice] = useState<number>(1000); // kg/m^3
  const [holeDepth, setHoleDepth] = useState<number>(5); // m from top
  const hydrostaticPressure = holeDepth * liquidDensityChoice * g; // Pa
  const exitVelocity = Math.sqrt(2 * g * holeDepth); // Torricelli velocity v = sqrt(2gh)

  return (
    <div className="flex-1 bg-slate-950 p-4 lg:p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Droplets className="w-3.5 h-3.5" />
              পদার্থবিজ্ঞান অধ্যায় ৫ ল্যাব • চাপ ও প্লবতা
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
              পদার্থের অবস্থা, চাপ ও প্লবতা ল্যাব (Pressure & Fluids Lab)
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              হাইড্রোলিক প্রেসে বল বৃদ্ধিকরণ, আর্কিমিডিসের প্লবতা ও ভাসন এবং স্থির তরলের চাপের ইন্টারঅ্যাক্টিভ পরীক্ষা।
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('hydraulic')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'hydraulic'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              হাইড্রোলিক প্রেস
            </button>
            <button
              onClick={() => setActiveTab('archimedes')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'archimedes'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Scale className="w-4 h-4" />
              প্লবতা ও আর্কিমিডিস
            </button>
            <button
              onClick={() => setActiveTab('depthPressure')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'depthPressure'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gauge className="w-4 h-4" />
              তরলের গভীরতা ও চাপ
            </button>
          </div>
        </div>

        {/* ================= TAB 1: HYDRAULIC PRESS ================= */}
        {activeTab === 'hydraulic' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Control Panel */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                পিস্টনের মাপ ও প্রযুক্ত বল
              </h3>

              {/* Force 1 */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">ছোট পিস্টনে প্রযুক্ত বল (F₁):</span>
                  <span className="font-mono font-bold text-amber-400">{appliedForce1} N</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={appliedForce1}
                  onChange={(e) => setAppliedForce1(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Radius 1 */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">ছোট পিস্টনের ব্যাসার্ধ (r₁):</span>
                  <span className="font-mono font-bold text-cyan-400">{piston1Radius} cm</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.5"
                  value={piston1Radius}
                  onChange={(e) => setPiston1Radius(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Radius 2 */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">বড় পিস্টনের ব্যাসার্ধ (r₂):</span>
                  <span className="font-mono font-bold text-emerald-400">{piston2Radius} cm</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="30"
                  step="1"
                  value={piston2Radius}
                  onChange={(e) => setPiston2Radius(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              {/* Pump Slider */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">পাম্প স্ট্রোক (Piston Stroke):</span>
                  <span className="font-mono font-bold text-purple-400">{pumpStroke}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={pumpStroke}
                  onChange={(e) => setPumpStroke(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Visual Hydraulic Press SVG */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">প্যাসকেলের নীতি ও বল বৃদ্ধিকরণ</h3>
                  <p className="text-xs text-slate-400">
                    F₂ = F₁ × (A₂ / A₁) = F₁ × (r₂ / r₁)²
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-right">
                  <span className="text-[10px] text-slate-400 font-mono block">উত্তোলিত বল (F₂)</span>
                  <span className="text-2xl font-mono font-black text-amber-400">{outputForce2.toFixed(0)} N</span>
                </div>
              </div>

              {/* SVG Graphic */}
              <div className="relative h-64 my-4 flex items-center justify-center">
                <svg className="w-full h-full max-w-lg" viewBox="0 0 500 240">
                  {/* Fluid Base connecting tubes */}
                  <path
                    d="M 80 140 L 80 190 L 420 190 L 420 120"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="36"
                    strokeLinejoin="round"
                    opacity="0.75"
                  />

                  {/* Left Cylinder (Small) */}
                  <rect x="62" y="80" width="36" height="100" fill="#0f172a" stroke="#64748b" strokeWidth="3" />
                  {/* Small Piston */}
                  <rect
                    x="64"
                    y={90 + (pumpStroke * 0.4)}
                    width="32"
                    height="14"
                    rx="2"
                    fill="#f59e0b"
                  />
                  <line
                    x1="80"
                    y1={90 + (pumpStroke * 0.4)}
                    x2="80"
                    y2={40 + (pumpStroke * 0.4)}
                    stroke="#f59e0b"
                    strokeWidth="6"
                  />
                  <text x="80" y="30" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
                    F₁ = {appliedForce1}N ↓
                  </text>

                  {/* Right Cylinder (Large) */}
                  <rect x="340" y="50" width="130" height="130" fill="#0f172a" stroke="#64748b" strokeWidth="3" />
                  {/* Large Piston */}
                  <rect
                    x="343"
                    y={110 - (pumpStroke * 0.4 * (a1 / a2))}
                    width="124"
                    height="20"
                    rx="4"
                    fill="#38bdf8"
                  />
                  <line
                    x1="405"
                    y1={110 - (pumpStroke * 0.4 * (a1 / a2))}
                    x2="405"
                    y2={60 - (pumpStroke * 0.4 * (a1 / a2))}
                    stroke="#38bdf8"
                    strokeWidth="10"
                  />

                  {/* Car / Load on top of Large Piston */}
                  <g transform={`translate(355, ${20 - (pumpStroke * 0.4 * (a1 / a2))})`}>
                    <rect x="0" y="10" width="100" height="24" rx="6" fill="#ef4444" />
                    <rect x="20" y="0" width="60" height="16" rx="4" fill="#ef4444" />
                    <circle cx="25" cy="34" r="8" fill="#334155" />
                    <circle cx="75" cy="34" r="8" fill="#334155" />
                    <text x="50" y="24" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">ভারী গাড়ি</text>
                  </g>
                  <text x="405" y="10" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">
                    F₂ = {outputForce2.toFixed(0)}N ↑
                  </text>
                </svg>
              </div>

              {/* Multiplier stats */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">বল বৃদ্ধির গুণক:</span>
                  <span className="font-mono font-bold text-amber-400 text-sm">{forceMultiplier.toFixed(1)} গুণ</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">সঞ্চালিত তরলের চাপ:</span>
                  <span className="font-mono font-bold text-cyan-400 text-sm">{(pressurePa / 1000).toFixed(1)} kPa</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">উত্তোলনযোগ্য ভর:</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">{liftedMassKg.toFixed(0)} kg</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: ARCHIMEDES BUOYANCY ================= */}
        {activeTab === 'archimedes' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Control Panel */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Scale className="w-4 h-4 text-cyan-400" />
                তরল ও বস্তুর বৈশিষ্ট্য
              </h3>

              {/* Liquid Select */}
              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-semibold uppercase">তরল নির্বাচন (Liquid)</label>
                <div className="space-y-1">
                  {liquids.map((liq) => (
                    <button
                      key={liq.id}
                      onClick={() => setSelectedLiquidId(liq.id)}
                      className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                        selectedLiquid.id === liq.id
                          ? 'bg-cyan-500/20 border-cyan-400 text-white'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold">{liq.name.split(' (')[0]}</span>
                      <span className="text-[10px] font-mono text-cyan-400">{liq.density} kg/m³</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mass Slider */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">বস্তুর ভর (m):</span>
                  <span className="font-mono font-bold text-amber-400">{objectMass} kg</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={objectMass}
                  onChange={(e) => setObjectMass(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Volume Slider */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">বস্তুর আয়তন (V):</span>
                  <span className="font-mono font-bold text-emerald-400">{(objectVolume * 1000).toFixed(1)} L</span>
                </div>
                <input
                  type="range"
                  min="0.001"
                  max="0.015"
                  step="0.0005"
                  value={objectVolume}
                  onChange={(e) => setObjectVolume(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Buoyancy Tank Canvas */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">আর্কিমিডিসের নীতি ও ভাসন পরীক্ষা</h3>
                  <p className="text-xs text-slate-400">
                    বস্তুর ঘনত্ব: <span className="font-mono text-cyan-400 font-bold">{objectDensity.toFixed(0)} kg/m³</span> • তরলের ঘনত্ব: <span className="font-mono text-amber-400 font-bold">{selectedLiquid.density} kg/m³</span>
                  </p>
                </div>
                <div className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
                  willFloat
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : willSuspend
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                }`}>
                  {willFloat && '✓ ভাসমান অবস্থা (Floating)'}
                  {willSuspend && '≈ নিমজ্জিত হয়ে ভাসমান (Suspended)'}
                  {!willFloat && !willSuspend && '✕ সম্পূর্ণ নিমজ্জিত / নিমজ্জিত (Sunken)'}
                </div>
              </div>

              {/* Tank Visualization SVG */}
              <div className="relative h-64 my-4 flex items-center justify-center">
                <svg className="w-full h-full max-w-sm" viewBox="0 0 300 240">
                  {/* Beaker Container */}
                  <rect x="40" y="30" width="220" height="190" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="4" />

                  {/* Liquid fill */}
                  <rect x="44" y="60" width="212" height="156" fill="#0284c7" opacity="0.4" />

                  {/* Immersed / Floating Block */}
                  {(() => {
                    const blockHeight = 60;
                    const blockWidth = 70;
                    // Y position based on floating or sinking
                    let blockY = 60 + (submergedRatio * 80);
                    if (!willFloat && !willSuspend) {
                      blockY = 150; // on the bottom
                    } else if (willFloat) {
                      blockY = 60 - ((1 - submergedRatio) * 30);
                    }

                    return (
                      <g transform={`translate(115, ${blockY})`}>
                        <rect x="0" y="0" width={blockWidth} height={blockHeight} rx="4" fill="#eab308" stroke="#ffffff" strokeWidth="2" />
                        <text x="35" y="35" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="bold">বস্তু</text>

                        {/* Force Arrows */}
                        {/* Gravity Arrow Down */}
                        <line x1="35" y1="35" x2="35" y2="75" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-red)" />
                        <text x="42" y="70" fill="#ef4444" fontSize="9" fontWeight="bold">W={weight.toFixed(1)}N</text>

                        {/* Buoyancy Arrow Up */}
                        <line x1="35" y1="35" x2="35" y2="-10" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-green)" />
                        <text x="42" y="0" fill="#10b981" fontSize="9" fontWeight="bold">F_B={actualBuoyancy.toFixed(1)}N</text>
                      </g>
                    );
                  })()}
                </svg>
              </div>

              {/* Force Readout Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">বাতাসে প্রকৃত ওজন (W):</span>
                  <span className="font-mono font-bold text-rose-400 text-sm">{weight.toFixed(1)} N</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">প্লবতা বল (F_B = Vρg):</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">{actualBuoyancy.toFixed(1)} N</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">পানিতে আপাত ওজন:</span>
                  <span className="font-mono font-bold text-cyan-400 text-sm">{apparentWeight.toFixed(1)} N</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: DEPTH PRESSURE ================= */}
        {activeTab === 'depthPressure' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Control Panel */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Gauge className="w-4 h-4 text-emerald-400" />
                তরলের স্তম্ভ ও গভীরতা
              </h3>

              {/* Depth Slider */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">মুক্ততল থেকে গভীরতা (h):</span>
                  <span className="font-mono font-bold text-emerald-400">{holeDepth} m</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={holeDepth}
                  onChange={(e) => setHoleDepth(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              {/* Fluid Density */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">তরলের ঘনত্ব (ρ):</span>
                  <span className="font-mono font-bold text-cyan-400">{liquidDensityChoice} kg/m³</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <button
                    onClick={() => setLiquidDensityChoice(1000)}
                    className={`py-1 rounded text-[10px] font-bold ${liquidDensityChoice === 1000 ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}
                  >
                    পানি (১০০০)
                  </button>
                  <button
                    onClick={() => setLiquidDensityChoice(800)}
                    className={`py-1 rounded text-[10px] font-bold ${liquidDensityChoice === 800 ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}
                  >
                    কেরোসিন (৮০০)
                  </button>
                  <button
                    onClick={() => setLiquidDensityChoice(13600)}
                    className={`py-1 rounded text-[10px] font-bold ${liquidDensityChoice === 13600 ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}
                  >
                    পারদ (১৩৬০০)
                  </button>
                </div>
              </div>
            </div>

            {/* Tank Depth Pressure Visualization */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">তরলের অভ্যন্তরে চাপ P = h · ρ · g</h3>
                  <p className="text-xs text-slate-400">
                    গভীরতা বাড়ার সাথে সাথে তরলের চাপ রৈখিকভাবে বৃদ্ধি পায়।
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-right">
                  <span className="text-[10px] text-slate-400 font-mono block">হাইড্রোস্ট্যাটিক চাপ</span>
                  <span className="text-2xl font-mono font-black text-cyan-400">{(hydrostaticPressure / 1000).toFixed(1)} kPa</span>
                </div>
              </div>

              {/* Water Spout Tank SVG */}
              <div className="relative h-64 my-4 flex items-center justify-center">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 240">
                  {/* Ground */}
                  <line x1="20" y1="210" x2="380" y2="210" stroke="#475569" strokeWidth="3" />

                  {/* Water Tank Tower */}
                  <rect x="60" y="30" width="80" height="180" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="4" />
                  <rect x="64" y="40" width="72" height="166" fill="#0284c7" opacity="0.5" />

                  {/* Hole Marker */}
                  {(() => {
                    const holeY = 40 + (holeDepth * 16.6);
                    const streamReach = exitVelocity * 14;
                    return (
                      <g>
                        <circle cx="140" cy={holeY} r="4" fill="#ef4444" />
                        <line x1="140" y1={holeY} x2="155" y2={holeY} stroke="#38bdf8" strokeWidth="3" />
                        {/* Parabolic stream curve */}
                        <path
                          d={`M 140 ${holeY} Q ${140 + streamReach * 0.6} ${holeY} ${140 + streamReach} 210`}
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="3"
                          strokeDasharray="4,2"
                        />
                      </g>
                    );
                  })()}
                </svg>
              </div>

              {/* Readout stats */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">চিদ্র দিয়ে তরল নির্গমনের বেগ (v = √2gh):</span>
                  <span className="font-mono font-bold text-amber-400 text-sm">{exitVelocity.toFixed(1)} m/s</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">গভীরতায় তরলের চাপ (P = hρg):</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">{hydrostaticPressure.toFixed(0)} Pa</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
