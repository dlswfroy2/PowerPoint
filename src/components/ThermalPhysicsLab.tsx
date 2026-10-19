import React, { useState } from 'react';
import { 
  Flame, 
  Thermometer, 
  Snowflake, 
  RotateCcw, 
  Info, 
  Play, 
  Pause, 
  Layers, 
  ArrowRight, 
  Droplets,
  Scale
} from 'lucide-react';

interface ThermalPhysicsLabProps {
  defaultTab?: 'thermalExpansion' | 'calorimetry' | 'anomalousWater';
}

export const ThermalPhysicsLab: React.FC<ThermalPhysicsLabProps> = ({ 
  defaultTab = 'thermalExpansion' 
}) => {
  const [activeTab, setActiveTab] = useState<'thermalExpansion' | 'calorimetry' | 'anomalousWater'>(defaultTab);

  // Tab 1: Thermal Expansion State
  const [material, setMaterial] = useState<'iron' | 'copper' | 'aluminum' | 'brass' | 'invar'>('iron');
  const [initialLength, setInitialLength] = useState<number>(5.0); // meters
  const [tempChange, setTempChange] = useState<number>(100); // deg C
  const [railwayGap, setRailwayGap] = useState<number>(6.0); // mm

  const alphaValues = {
    iron: 11.5e-6,
    copper: 16.7e-6,
    aluminum: 23.0e-6,
    brass: 19.0e-6,
    invar: 0.9e-6,
  };

  const alpha = alphaValues[material];
  const deltaL_meters = initialLength * alpha * tempChange;
  const deltaL_mm = deltaL_meters * 1000;
  const finalLength = initialLength + deltaL_meters;
  const isGapClosed = deltaL_mm >= railwayGap;

  // Tab 2: Calorimetry State
  const [m1, setM1] = useState<number>(0.5); // kg water
  const [t1, setT1] = useState<number>(25); // deg C
  const [s1] = useState<number>(4200); // J/kg*K (water)
  
  const [m2, setM2] = useState<number>(0.2); // kg metal
  const [t2, setT2] = useState<number>(100); // deg C
  const [metalType, setMetalType] = useState<'iron' | 'copper' | 'lead' | 'aluminum'>('copper');

  const s2Values = {
    iron: 450,
    copper: 400,
    lead: 130,
    aluminum: 900,
  };
  const s2 = s2Values[metalType];

  // Equilibrium temp: T_f = (m1*s1*t1 + m2*s2*t2) / (m1*s1 + m2*s2)
  const finalTemp = (m1 * s1 * t1 + m2 * s2 * t2) / (m1 * s1 + m2 * s2);
  const qExchanged = m2 * s2 * (t2 - finalTemp);

  // Tab 3: Anomalous Water Expansion State
  const [waterTemp, setWaterTemp] = useState<number>(4); // -5 to 15 C

  // Water density formula approximation around 4 deg C
  const getWaterDensity = (t: number) => {
    if (t < 0) return 917; // ice density
    // Empirical quadratic curve peaking at 4C = 1000 kg/m3
    return 1000 - 0.008 * Math.pow(t - 4, 2) * 100;
  };

  const currentDensity = getWaterDensity(waterTemp);
  const isFrozen = waterTemp <= 0;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 space-y-6 select-none animate-fadeIn">
      {/* Lab Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/30 border border-slate-800 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              পদার্থবিজ্ঞান ৬ষ্ঠ অধ্যায়
            </span>
            <span className="text-xs text-slate-400 font-mono">ভৌত পরীক্ষাগার ও সিমুলেটর</span>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <Flame className="h-6 w-6 text-amber-400" />
            <span>বস্তুর উপর তাপের প্রভাব: ভার্চুয়াল তাপবিজ্ঞান ল্যাব</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            কঠিনের তাপীয় প্রসারণ, ক্যালরিমিতির তাপ বিনিময় ও পানির ৪°C ব্যতিক্রমী প্রসারণ সিমুলেশন
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('thermalExpansion')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'thermalExpansion'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="h-3.5 w-3.5" />
            <span>তাপীয় প্রসারণ ও দ্বৈতাতব পাত</span>
          </button>

          <button
            onClick={() => setActiveTab('calorimetry')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'calorimetry'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Thermometer className="h-3.5 w-3.5" />
            <span>ক্যালরিমিতি ও তাপ বিনিময়</span>
          </button>

          <button
            onClick={() => setActiveTab('anomalousWater')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'anomalousWater'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Snowflake className="h-3.5 w-3.5" />
            <span>পানির ব্যতিক্রমী প্রসারণ (৪°C)</span>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* TAB 1: THERMAL EXPANSION & BIMETALLIC STRIP */}
      {/* ==================================================================== */}
      {activeTab === 'thermalExpansion' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
            <h2 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <Scale className="h-4 w-4" />
              <span>প্রসারণ নিয়ন্ত্রক ও উপাদান নির্বাচন</span>
            </h2>

            {/* Material Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                উপাদান (কঠিন পদার্থ):
              </label>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                {[
                  { key: 'iron', label: 'লোহা (Iron)', alpha: '11.5 × 10⁻⁶' },
                  { key: 'copper', label: 'তামা (Copper)', alpha: '16.7 × 10⁻⁶' },
                  { key: 'brass', label: 'পিতল (Brass)', alpha: '19.0 × 10⁻⁶' },
                  { key: 'aluminum', label: 'অ্যালুমিনিয়াম', alpha: '23.0 × 10⁻⁶' },
                  { key: 'invar', label: 'ইনভার (Invar)', alpha: '0.9 × 10⁻⁶' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setMaterial(item.key as any)}
                    className={`p-2 rounded-lg border text-left font-medium transition ${
                      material === item.key
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div>{item.label}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{item.alpha} K⁻¹</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Initial Length Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>আদি দৈর্ঘ্য (L₁):</span>
                <span className="font-mono text-cyan-300">{initialLength.toFixed(1)} মিটার</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={initialLength}
                onChange={(e) => setInitialLength(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Temperature Increase Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>তাপমাত্রা বৃদ্ধি (Δθ):</span>
                <span className="font-mono text-amber-400">{tempChange} °C / K</span>
              </div>
              <input
                type="range"
                min="0"
                max="300"
                step="5"
                value={tempChange}
                onChange={(e) => setTempChange(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Railway Gap Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>রেললাইনের সংযোগস্থলের ফাঁক (Gap):</span>
                <span className="font-mono text-slate-300">{railwayGap.toFixed(1)} মিমি</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.5"
                value={railwayGap}
                onChange={(e) => setRailwayGap(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Live Calculation Output Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
              <div className="text-slate-400 flex justify-between">
                <span>দৈর্ঘ্য বৃদ্ধি ΔL:</span>
                <span className="text-amber-400 font-bold">{deltaL_mm.toFixed(3)} মিমি ({deltaL_meters.toExponential(4)} m)</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>চূড়ান্ত দৈর্ঘ্য L₂:</span>
                <span className="text-cyan-300 font-bold">{finalLength.toFixed(5)} m</span>
              </div>
              <div className="text-slate-400 flex justify-between border-t border-slate-800 pt-2">
                <span>রেললাইনের অবস্থা:</span>
                <span className={`font-bold ${isGapClosed ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`}>
                  {isGapClosed ? '⚠️ ফাঁক অতিক্রম করেছে! লাইন বেঁকে যাবে' : '✅ নিরাপদ ফাঁক অবশিষ্ট আছে'}
                </span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual 1: Heated Rod Expansion Simulation */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg space-y-4">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>১. কঠিন ধাতব দণ্ডের রৈখিক প্রসারণ সিমুলেশন</span>
                <span className="text-[11px] font-mono text-cyan-400">ΔL = L₁ · α · Δθ</span>
              </h3>

              <div className="relative h-28 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-center overflow-hidden">
                {/* Fixed Wall on Left */}
                <div className="absolute left-4 top-4 bottom-4 w-3 bg-slate-700 rounded flex items-center justify-center">
                  <div className="w-1 h-full bg-slate-800" />
                </div>

                {/* Metal Rod */}
                <div className="relative ml-6 mr-10 flex items-center">
                  <div 
                    style={{ 
                      width: `${Math.min(30 + initialLength * 12 + deltaL_mm * 15, 90)}%`,
                      backgroundColor: tempChange > 150 ? '#f97316' : tempChange > 80 ? '#facc15' : '#38bdf8'
                    }}
                    className="h-7 rounded-r shadow-lg transition-all duration-300 flex items-center justify-end px-2"
                  >
                    <span className="text-[10px] font-bold text-slate-950 whitespace-nowrap">
                      {material.toUpperCase()}
                    </span>
                  </div>

                  {/* Expansion vector indicator */}
                  <div className="ml-2 flex items-center text-xs font-bold text-amber-400">
                    <ArrowRight className="h-4 w-4 animate-bounce" />
                    <span>+{deltaL_mm.toFixed(2)} mm</span>
                  </div>
                </div>

                {/* Heat Flame Indicator underneath */}
                {tempChange > 0 && (
                  <div className="absolute bottom-2 left-1/3 flex items-center gap-1 text-[11px] text-amber-400 animate-pulse">
                    <Flame className="h-4 w-4 fill-amber-500" />
                    <span>তাপ প্রয়োগ করা হচ্ছে ({tempChange}°C)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Visual 2: Bimetallic Strip (লোহা + পিতল) */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg space-y-4">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>২. দ্বৈতাতব পাত (Bimetallic Strip: পিতল + লোহা)</span>
                <span className="text-[11px] text-amber-400 font-semibold">α_পিতল &gt; α_লোহা</span>
              </h3>

              <div className="h-32 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Bending arc visualization */}
                <svg className="w-full h-24" viewBox="0 0 400 80">
                  {/* Fixed base left */}
                  <rect x="20" y="20" width="15" height="40" fill="#475569" rx="2" />
                  
                  {/* Curvature calculated from temperature */}
                  {(() => {
                    const bendOffset = (tempChange / 300) * 28;
                    return (
                      <g>
                        {/* Upper Strip: Brass (Expands faster, bends more) */}
                        <path
                          d={`M 35 36 Q 200 ${36 - bendOffset} 360 ${36 - bendOffset * 1.5}`}
                          stroke="#facc15"
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                        />
                        {/* Lower Strip: Iron (Expands slower) */}
                        <path
                          d={`M 35 44 Q 200 ${44 - bendOffset * 0.8} 360 ${44 - bendOffset * 1.3}`}
                          stroke="#64748b"
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                        />
                      </g>
                    );
                  })()}
                </svg>

                <div className="flex items-center justify-between w-full px-4 text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" /> পিতল (Brass, বেশি প্রসারিত)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-slate-500 inline-block" /> লোহা (Iron, কম প্রসারিত)
                  </span>
                  <span className="text-amber-300 font-semibold">
                    {tempChange > 30 ? 'বাঁকা হয়ে সার্কিট ডিসকানেক্ট করে' : 'স্বাভাবিক সরল অবস্থা'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 2: CALORIMETRY & HEAT EXCHANGE */}
      {/* ==================================================================== */}
      {activeTab === 'calorimetry' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
            <h2 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <Thermometer className="h-4 w-4" />
              <span>ক্যালরিমিতি পরীক্ষা প্যারামিটার</span>
            </h2>

            {/* Liquid 1: Water */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400">শীতল তরল (পানি)</span>
                <span className="text-[10px] text-slate-500 font-mono">s₁ = 4200 J/kg·K</span>
              </div>
              
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>পানির ভর (m₁):</span>
                  <span className="font-mono text-cyan-300">{m1.toFixed(2)} kg ({(m1 * 1000).toFixed(0)} g)</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.0"
                  step="0.05"
                  value={m1}
                  onChange={(e) => setM1(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>পানির প্রাথমিক তাপমাত্রা (T₁):</span>
                  <span className="font-mono text-cyan-300">{t1} °C</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={t1}
                  onChange={(e) => setT1(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Solid 2: Heated Metal */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400">উত্তপ্ত কঠিন ধাতু</span>
                <span className="text-[10px] text-slate-500 font-mono">s₂ = {s2} J/kg·K</span>
              </div>

              {/* Metal selector */}
              <div className="grid grid-cols-4 gap-1 text-[11px]">
                {[
                  { key: 'copper', label: 'তামা', s: 400 },
                  { key: 'iron', label: 'লোহা', s: 450 },
                  { key: 'aluminum', label: 'অ্যালু.', s: 900 },
                  { key: 'lead', label: 'সীসা', s: 130 },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setMetalType(item.key as any)}
                    className={`py-1 rounded border font-medium transition ${
                      metalType === item.key
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>ধাতুর ভর (m₂):</span>
                  <span className="font-mono text-amber-300">{m2.toFixed(2)} kg ({(m2 * 1000).toFixed(0)} g)</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="1.0"
                  step="0.05"
                  value={m2}
                  onChange={(e) => setM2(parseFloat(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>ধাতুর প্রাথমিক তাপমাত্রা (T₂):</span>
                  <span className="font-mono text-amber-300">{t2} °C</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  step="5"
                  value={t2}
                  onChange={(e) => setT2(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results & Thermal Exchange Display */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg space-y-5">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>ক্যালরিমিতির সাম্যাবস্থা ফলাফল</span>
                <span className="text-[11px] font-mono text-amber-400">গৃহীত তাপ = বর্জিত তাপ</span>
              </h3>

              {/* Big Equilibrium Card */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-center">
                  <div className="text-xs text-slate-400 mb-1">মিশ্রণের চূড়ান্ত তাপমাত্রা (T_f)</div>
                  <div className="text-3xl md:text-4xl font-black text-cyan-300 font-mono">
                    {finalTemp.toFixed(1)} °C
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {(finalTemp + 273.15).toFixed(1)} K
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 text-center">
                  <div className="text-xs text-slate-400 mb-1">বিনিমিত মোট তাপ (Q)</div>
                  <div className="text-2xl md:text-3xl font-black text-amber-400 font-mono">
                    {(qExchanged / 1000).toFixed(2)} kJ
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {qExchanged.toFixed(0)} জুল (Joule)
                  </div>
                </div>
              </div>

              {/* Step by Step Formula Details */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="text-slate-400">
                  <span className="text-amber-400 font-bold">ধাতু কর্তৃক বর্জিত তাপ Q₂:</span> m₂ · s₂ · (T₂ - T_f) = {m2} × {s2} × ({t2} - {finalTemp.toFixed(1)}) = {qExchanged.toFixed(1)} J
                </div>
                <div className="text-slate-400 border-t border-slate-800/80 pt-2">
                  <span className="text-cyan-400 font-bold">পানি কর্তৃক গৃহীত তাপ Q₁:</span> m₁ · s₁ · (T_f - T₁) = {m1} × 4200 × ({finalTemp.toFixed(1)} - {t1}) = {qExchanged.toFixed(1)} J
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 3: ANOMALOUS WATER EXPANSION */}
      {/* ==================================================================== */}
      {activeTab === 'anomalousWater' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
            <h2 className="text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <Snowflake className="h-4 w-4" />
              <span>পানির তাপমাত্রা ও ঘনত্ব নিয়ন্ত্রক</span>
            </h2>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>পানির তাপমাত্রা (°C):</span>
                <span className={`font-mono font-bold ${waterTemp === 4 ? 'text-amber-400 ring-2 ring-amber-400/40 px-2 py-0.5 rounded' : 'text-cyan-300'}`}>
                  {waterTemp} °C {waterTemp === 4 && '(সর্বোচ্চ ঘনত্ব!)'}
                </span>
              </div>
              <input
                type="range"
                min="-5"
                max="15"
                step="1"
                value={waterTemp}
                onChange={(e) => setWaterTemp(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>-৫°C (বরফ)</span>
                <span className="text-amber-400 font-bold">৪°C (সর্বোচ্চ)</span>
                <span>১৫°C (তরল)</span>
              </div>
            </div>

            {/* Quick Temp Preset Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setWaterTemp(-3)}
                className={`py-1.5 rounded-lg border text-xs font-medium transition ${
                  waterTemp < 0 ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                হিমাঙ্ক বরফ (-৩°C)
              </button>
              <button
                onClick={() => setWaterTemp(4)}
                className={`py-1.5 rounded-lg border text-xs font-bold transition ${
                  waterTemp === 4 ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                সর্বোচ্চ ঘনত্ব (৪°C)
              </button>
              <button
                onClick={() => setWaterTemp(10)}
                className={`py-1.5 rounded-lg border text-xs font-medium transition ${
                  waterTemp >= 10 ? 'bg-blue-500/20 border-blue-500 text-blue-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                স্বাভাবিক পানি (১০°C)
              </button>
            </div>

            {/* Density & Volume Readout Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">পানির ঘনত্ব (Density ρ):</span>
                <span className="text-cyan-300 font-bold text-sm">
                  {currentDensity.toFixed(1)} kg/m³
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">ভৌত অবস্থা:</span>
                <span className={`font-bold ${isFrozen ? 'text-blue-300' : 'text-cyan-300'}`}>
                  {isFrozen ? '❄️ বরফ (ভাসমান কেলাস)' : '💧 তরল পানি'}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-800 pt-2 text-[11px] text-slate-500">
                <span>৪°C এ আপেক্ষিক আয়তন:</span>
                <span className="text-amber-400">সর্বনিম্ন (১.০০০০ cm³/g)</span>
              </div>
            </div>
          </div>

          {/* Frozen Lake Visualization */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg space-y-4">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>শীতপ্রধান দেশে জমে যাওয়া হ্রদ ও জলজ প্রাণীর টিকে থাকা</span>
                <span className="text-[11px] text-cyan-400">প্রাকৃতিক থার্মাল লেয়ারিং</span>
              </h3>

              {/* Lake Cross-section Graphic */}
              <div className="relative h-64 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between p-4">
                {/* Air above lake */}
                <div className="flex justify-between items-center text-xs text-slate-400 z-10">
                  <span>বায়ুমণ্ডলীয় তাপমাত্রা: <strong className="text-cyan-300">{waterTemp < 0 ? waterTemp : -5}°C</strong></span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">শীতকালীন হ্রদ</span>
                </div>

                {/* Surface Ice Layer (0 C) */}
                <div className="relative my-2 p-3 rounded-lg bg-gradient-to-r from-cyan-900/60 via-blue-900/40 to-cyan-900/60 border border-cyan-400/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-cyan-200 font-bold">
                    <Snowflake className="h-4 w-4" />
                    <span>উপরের বরফ স্তর (০°C) — পানিতে ভাসমান ও তাপরোধী</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300">ঘনত্ব: ৯১৭ kg/m³</span>
                </div>

                {/* Middle Layers (1C to 3C) */}
                <div className="flex-1 my-1 rounded-lg bg-gradient-to-b from-blue-950/40 to-blue-900/50 p-2 flex flex-col justify-around text-[11px] text-blue-200">
                  <div className="flex justify-between px-2">
                    <span>মধ্যবর্তী পানির স্তর (১°C - ২°C)</span>
                    <span className="font-mono text-slate-400">ρ ≈ ৯৯৯.৮ kg/m³</span>
                  </div>
                  <div className="flex justify-between px-2">
                    <span>গভীর স্তর (৩°C)</span>
                    <span className="font-mono text-slate-400">ρ ≈ ৯৯৯.৯ kg/m³</span>
                  </div>
                </div>

                {/* Bottom Dense Layer (4 C) where fish survive */}
                <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-950/60 to-blue-950/80 border border-emerald-500/40 flex items-center justify-between text-xs z-10">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold">
                    <span>🐟</span>
                    <span>তলদেশের পানি (৪°C) — সর্বোচ্চ ঘনত্বের কারণে নিচে থাকে, মাছ বেঁচে থাকে</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">ρ = ১০০০ kg/m³</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <strong className="text-amber-400">গুরুত্বপূর্ণ ব্যাখ্যা:</strong> যদি পানির ব্যতিক্রমধর্মী প্রসারণ না থাকত, তবে হ্রদ নিচ থেকে জমা শুরু করত এবং সম্পূর্ণ হ্রদ বরফে পরিণত হয়ে সমস্ত মাছ ও জলজ উদ্ভিদ মারা যেত!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
