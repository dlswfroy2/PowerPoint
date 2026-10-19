import React, { useState, useEffect } from 'react';
import { 
  Dna, 
  Sun, 
  Flame, 
  Droplets, 
  RotateCcw, 
  Play, 
  Pause, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Zap,
  BatteryCharging
} from 'lucide-react';

interface BioenergeticsLabProps {
  defaultTab?: 'atpCycle' | 'photosynthesis' | 'respiration';
}

export const BioenergeticsLab: React.FC<BioenergeticsLabProps> = ({ defaultTab = 'atpCycle' }) => {
  const [activeTab, setActiveTab] = useState<'atpCycle' | 'photosynthesis' | 'respiration'>(defaultTab);

  // -------------------------------------------------------------
  // TAB 1: ATP Energy Coin & Cycle State
  // -------------------------------------------------------------
  const [phosphateCount, setPhosphateCount] = useState<number>(3); // 1 = AMP, 2 = ADP, 3 = ATP
  const [energyReleasedKcal, setEnergyReleasedKcal] = useState<number>(0);
  const [atpCyclesRun, setAtpCyclesRun] = useState<number>(0);

  const handleDephosphorylate = () => {
    if (phosphateCount > 1) {
      setPhosphateCount(prev => prev - 1);
      setEnergyReleasedKcal(prev => prev + 7.3);
      setAtpCyclesRun(prev => prev + 1);
    }
  };

  const handlePhosphorylate = () => {
    if (phosphateCount < 3) {
      setPhosphateCount(prev => prev + 1);
    }
  };

  const getCompoundName = () => {
    if (phosphateCount === 3) return { name: 'অ্যাডেনোসিন ট্রাইফসফেট (ATP)', badge: 'উচ্চ শক্তিসম্পন্ন জৈব মুদ্রা', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' };
    if (phosphateCount === 2) return { name: 'অ্যাডেনোসিন ডাইফসফেট (ADP)', badge: 'মধ্যম শক্তি দশা (রিচার্জযোগ্য)', color: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/30' };
    return { name: 'অ্যাডেনোসিন মনোফসফেট (AMP)', badge: 'নিম্ন শক্তি ভিত্তি', color: 'text-slate-400', bg: 'bg-slate-500/20', border: 'border-slate-500/30' };
  };

  const currentCoin = getCompoundName();

  // -------------------------------------------------------------
  // TAB 2: Photosynthesis Simulator State
  // -------------------------------------------------------------
  const [lightIntensity, setLightIntensity] = useState<number>(75); // %
  const [co2Level, setCo2Level] = useState<number>(0.04); // % (0.01 - 0.15)
  const [temperature, setTemperature] = useState<number>(28); // Celsius
  const [lightColor, setLightColor] = useState<'white' | 'red' | 'blue' | 'green'>('red');
  const [plantType, setPlantType] = useState<'c3' | 'c4'>('c3');

  // Photosynthesis Rate Calculation:
  // Optimum Temp: 22-35C
  const tempEfficiency = temperature < 5 || temperature > 48 
    ? 0 
    : Math.max(0, 1 - Math.pow((temperature - 28) / 18, 2));

  // Light color factor
  const colorFactor = lightColor === 'red' ? 1.0 : lightColor === 'blue' ? 0.95 : lightColor === 'white' ? 0.85 : 0.15; // green very low

  // C4 efficiency boost in high temp
  const c4Boost = plantType === 'c4' && temperature >= 30 ? 1.35 : 1.0;

  // Rate in bubbles per minute
  const photosynthesisRate = Math.round(
    (lightIntensity / 100) * 
    (Math.min(co2Level, 0.12) / 0.04) * 
    tempEfficiency * 
    colorFactor * 
    c4Boost * 
    60
  );

  // -------------------------------------------------------------
  // TAB 3: Respiration 4-Stage Calculator State
  // -------------------------------------------------------------
  const [respirationMode, setRespirationMode] = useState<'aerobic' | 'anaerobic'>('aerobic');
  const [anaerobicType, setAnaerobicType] = useState<'yeast' | 'muscle'>('yeast');
  const [glucoseMolecules, setGlucoseMolecules] = useState<number>(1);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 space-y-6 select-none animate-fadeIn">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/30 border border-slate-800 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              জীববিজ্ঞান ৪র্থ অধ্যায়
            </span>
            <span className="text-xs text-slate-400 font-mono">বায়োএনার্জেটিক্স ও মেটাবলিজম স্টুডিও</span>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <Dna className="h-6 w-6 text-emerald-400" />
            <span>জীবনীশক্তি: এটিপি মুদ্রা, সালোকসংশ্লেষণ ও শ্বসন ল্যাব</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            কোষের শক্তি মুদ্রা (ATP), আলোক ও অন্ধকার বিক্রিয়া (C₃ বনাম C₄) এবং সবাত শ্বসনের ৩৮টি ATP হিসাব
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('atpCycle')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'atpCycle'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="h-4 w-4" />
            <span>এটিপি (ATP) শক্তি মুদ্রা</span>
          </button>
          <button
            onClick={() => setActiveTab('photosynthesis')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'photosynthesis'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sun className="h-4 w-4" />
            <span>সালোকসংশ্লেষণ ল্যাব</span>
          </button>
          <button
            onClick={() => setActiveTab('respiration')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'respiration'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="h-4 w-4" />
            <span>কোষীয় শ্বসন (৩৮ ATP)</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: ATP ENERGY COIN & CYCLE                                            */}
      {/* ========================================================================= */}
      {activeTab === 'atpCycle' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Molecular Coin Model */}
          <div className="lg:col-span-2 rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between shadow-lg space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="space-y-0.5">
                <span className="text-xs text-slate-400 block font-mono">আণবিক গঠন ও শক্তি রূপান্তর</span>
                <h3 className={`text-base font-black ${currentCoin.color}`}>{currentCoin.name}</h3>
              </div>
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${currentCoin.bg} ${currentCoin.color} ${currentCoin.border}`}>
                {currentCoin.badge}
              </span>
            </div>

            {/* Molecule Diagram Area */}
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {/* Adenine Base */}
                <div className="px-3.5 py-4 rounded-xl bg-purple-950/80 border-2 border-purple-500/60 text-center shadow-lg">
                  <span className="text-[10px] text-purple-300 block font-mono">ক্ষারক</span>
                  <span className="font-bold text-white text-xs sm:text-sm">অ্যাডেনিন</span>
                  <span className="text-[9px] text-purple-400 block mt-0.5">Adenine</span>
                </div>

                <span className="text-slate-600 font-bold text-lg">+</span>

                {/* Ribose Sugar */}
                <div className="px-3.5 py-4 rounded-xl bg-blue-950/80 border-2 border-blue-500/60 text-center shadow-lg">
                  <span className="text-[10px] text-blue-300 block font-mono">৫-কার্বন সুগার</span>
                  <span className="font-bold text-white text-xs sm:text-sm">রাইবোজ</span>
                  <span className="text-[9px] text-blue-400 block mt-0.5">Ribose</span>
                </div>

                <span className="text-slate-600 font-bold text-lg">=</span>

                {/* Adenosine unit badge */}
                <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/40">
                  অ্যাডেনোসিন
                </span>

                <span className="text-slate-600 font-bold text-lg">+</span>

                {/* Phosphate Chain (1, 2, or 3) */}
                <div className="flex items-center gap-1.5 p-2 bg-slate-900 rounded-xl border border-slate-800">
                  {/* P1 */}
                  <div className="w-9 h-9 rounded-full bg-amber-500/30 border-2 border-amber-400 flex items-center justify-center font-bold text-xs text-amber-300 shadow">
                    Pi
                  </div>

                  {/* Bond 1 */}
                  {phosphateCount >= 2 && (
                    <>
                      <span className="text-amber-400 font-bold font-mono text-sm">~</span>
                      <div className="w-9 h-9 rounded-full bg-amber-500/50 border-2 border-amber-300 flex items-center justify-center font-bold text-xs text-amber-200 shadow">
                        Pi
                      </div>
                    </>
                  )}

                  {/* Bond 2 (High energy terminal bond) */}
                  {phosphateCount === 3 && (
                    <>
                      <span className="text-rose-400 font-bold font-mono text-base animate-pulse">~</span>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 border-2 border-rose-300 flex items-center justify-center font-bold text-xs text-slate-950 shadow-lg animate-pulse">
                        Pi
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Energy Discharge / Recharging Callout */}
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <BatteryCharging className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">শক্তি স্তর:</span>
                  <div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        phosphateCount === 3 ? 'w-full bg-gradient-to-r from-amber-400 to-emerald-400' : phosphateCount === 2 ? 'w-2/3 bg-cyan-400' : 'w-1/3 bg-slate-500'
                      }`}
                    />
                  </div>
                </div>
                <span className="text-amber-300 font-mono font-bold">
                  {phosphateCount === 3 ? '১০০% (ATP)' : phosphateCount === 2 ? '৬৭% (ADP)' : '৩৩% (AMP)'}
                </span>
              </div>
            </div>

            {/* Action Buttons: Hydrolysis vs Phosphorylation */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleDephosphorylate}
                disabled={phosphateCount <= 1}
                className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg shadow-rose-500/20 hover:brightness-110 active:scale-98 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Zap className="h-4 w-4" />
                <span>ডিফসফোরাইলেশন (শক্তি ব্যয়: -৭.৩ kcal)</span>
              </button>

              <button
                onClick={handlePhosphorylate}
                disabled={phosphateCount >= 3}
                className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg shadow-emerald-500/20 hover:brightness-110 active:scale-98 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <BatteryCharging className="h-4 w-4" />
                <span>ফসফোরাইলেশন (শক্তি সঞ্চয়: +৭.৩ kcal)</span>
              </button>
            </div>
          </div>

          {/* Right Metrics & Details */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>এটিপি চক্র হিসাব খাতা</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-300">মোট মুক্ত শক্তি:</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{energyReleasedKcal.toFixed(1)} kcal</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-300">কিলোজুলে শক্তি:</span>
                <span className="font-mono font-bold text-cyan-400 text-sm">{(energyReleasedKcal * 4.184).toFixed(1)} kJ</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-300">সম্পন্ন চক্র সংখ্যা:</span>
                <span className="font-mono font-bold text-purple-400 text-sm">{atpCyclesRun} বার</span>
              </div>
            </div>

            {/* Scientific Theory Card */}
            <div className="p-3.5 bg-emerald-950/30 rounded-xl border border-emerald-800/40 text-xs text-emerald-200 space-y-1.5">
              <span className="font-bold block text-emerald-300">রিচার্জেবল মুদ্রা নীতি:</span>
              <p className="text-[11px] leading-relaxed text-slate-300">
                কোষের শ্বসনকালে খাদ্য জারিত হয়ে যে শক্তি বের হয় তা ব্যবহার করে ADP ও Pi যুক্ত হয়ে ATP গঠিত হয়। পরবর্তীতে জৈবনিক কাজে এটিপি ভেঙে ADP + Pi + 7.3 kcal নির্গত হয়।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PHOTOSYNTHESIS SIMULATOR                                          */}
      {/* ========================================================================= */}
      {activeTab === 'photosynthesis' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Plant & Bubble Chamber */}
          <div className="lg:col-span-2 rounded-2xl bg-slate-900 border border-slate-800 p-5 flex flex-col justify-between shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-bold text-white flex items-center gap-2">
                <Sun className="h-4 w-4 text-amber-400" />
                <span>সালোকসংশ্লেষণ চেম্বার ও অক্সিজেন বুদবুদ নির্গমন</span>
              </span>
              <span className="px-2.5 py-0.5 rounded font-bold font-mono text-emerald-300 bg-emerald-950 border border-emerald-800/40">
                {photosynthesisRate} O₂ বুদবুদ/মিনিট
              </span>
            </div>

            {/* Live Chamber Visual */}
            <div className="relative h-64 bg-slate-950 rounded-xl border border-slate-800 p-4 flex items-end justify-center overflow-hidden">
              {/* Light Beam */}
              <div 
                className="absolute inset-x-0 top-0 h-40 opacity-30 transition-all duration-500 pointer-events-none"
                style={{
                  background: lightColor === 'red' ? 'radial-gradient(ellipse at top, #ef4444 0%, transparent 70%)'
                            : lightColor === 'blue' ? 'radial-gradient(ellipse at top, #3b82f6 0%, transparent 70%)'
                            : lightColor === 'green' ? 'radial-gradient(ellipse at top, #10b981 0%, transparent 70%)'
                            : 'radial-gradient(ellipse at top, #f8fafc 0%, transparent 70%)',
                  opacity: (lightIntensity / 100) * 0.5
                }}
              />

              {/* Plant Pot */}
              <div className="flex flex-col items-center z-10">
                {/* Rising O2 bubbles */}
                <div className="flex gap-4 mb-2">
                  {Array.from({ length: Math.min(10, Math.ceil(photosynthesisRate / 6)) }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 rounded-full bg-cyan-400/80 border border-cyan-200 animate-bounce shadow-sm shadow-cyan-400"
                      style={{ animationDuration: `${1.2 - (i % 3) * 0.2}s` }}
                    />
                  ))}
                </div>

                {/* Leaf Cluster */}
                <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <span className="text-3xl">🌿</span>
                </div>
                <span className="text-xs font-bold text-emerald-300 mt-2">
                  {plantType === 'c3' ? 'C₃ উদ্ভিদ (ধান/গম)' : 'C₄ উদ্ভিদ (ভুট্টা/আখ)'}
                </span>
              </div>
            </div>

            {/* Reaction Formula Display */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center font-mono text-xs text-slate-300">
              <span className="text-cyan-400">6CO₂</span> + <span className="text-blue-400">12H₂O</span> 
              <span className="mx-2 text-amber-400">⟶ [সূর্যালোক + ক্লোরোফিল] ⟶</span> 
              <span className="text-emerald-400 font-bold">C₆H₁₂O₆ (গ্লুকোজ)</span> + <span className="text-blue-400">6H₂O</span> + <span className="text-cyan-300 font-bold">6O₂ ↑</span>
            </div>
          </div>

          {/* Right Parameters Control */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <Sun className="h-4 w-4 text-amber-400" />
              <span>পরিবেশীয় প্রভাবক নিয়ন্ত্রণ</span>
            </h3>

            {/* Light Intensity Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">আলোর তীব্রতা:</span>
                <span className="font-mono font-bold text-amber-400">{lightIntensity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={lightIntensity}
                onChange={(e) => setLightIntensity(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            {/* Light Spectrum Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">আলোর বর্ণ (Wavelength):</label>
              <div className="grid grid-cols-4 gap-1">
                {(['red', 'blue', 'white', 'green'] as const).map(color => (
                  <button
                    key={color}
                    onClick={() => setLightColor(color)}
                    className={`py-1.5 rounded-lg text-xs font-bold transition capitalize ${
                      lightColor === color ? 'bg-cyan-500 text-slate-950 shadow' : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {color === 'red' ? 'লাল (সর্বোচ্চ)' : color === 'blue' ? 'নীল' : color === 'white' ? 'সাদা' : 'সবুজ (নগণ্য)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Temperature Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">তাপমাত্রা:</span>
                <span className="font-mono font-bold text-cyan-400">{temperature}°C (অনুকূল ২২-৩৫°C)</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* CO2 Concentration Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">CO₂ এর ঘনত্ব:</span>
                <span className="font-mono font-bold text-emerald-400">{co2Level.toFixed(2)}% (বায়ু: ০.০৪%)</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.15"
                step="0.01"
                value={co2Level}
                onChange={(e) => setCo2Level(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            {/* Plant Type: C3 vs C4 */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-semibold text-slate-300">উদ্ভিদের ধরন (Pathway):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPlantType('c3')}
                  className={`py-2 rounded-xl text-xs font-bold transition ${
                    plantType === 'c3' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  C₃ উদ্ভিদ (ক্যালভিন চক্র)
                </button>
                <button
                  onClick={() => setPlantType('c4')}
                  className={`py-2 rounded-xl text-xs font-bold transition ${
                    plantType === 'c4' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  C₄ উদ্ভিদ (হ্যাচ ও স্ল্যাক)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CELLULAR RESPIRATION (38 ATP BALANCE SHEET)                        */}
      {/* ========================================================================= */}
      {activeTab === 'respiration' && (
        <div className="space-y-6">
          {/* Top Switcher */}
          <div className="flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-300">শ্বসনের মোড:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setRespirationMode('aerobic')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    respirationMode === 'aerobic' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  সবাত শ্বসন (Aerobic — ৩৮টি ATP)
                </button>
                <button
                  onClick={() => setRespirationMode('anaerobic')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    respirationMode === 'anaerobic' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  অবাত শ্বসন (Anaerobic — মাত্র ২টি ATP)
                </button>
              </div>
            </div>

            {respirationMode === 'anaerobic' && (
              <div className="flex gap-2 text-xs">
                <button
                  onClick={() => setAnaerobicType('yeast')}
                  className={`px-2.5 py-1 rounded-lg ${anaerobicType === 'yeast' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'}`}
                >
                  অ্যালকোহল সন্ধান (ঈস্ট)
                </button>
                <button
                  onClick={() => setAnaerobicType('muscle')}
                  className={`px-2.5 py-1 rounded-lg ${anaerobicType === 'muscle' ? 'bg-rose-500 text-white font-bold' : 'bg-slate-950 text-slate-400'}`}
                >
                  ল্যাকটিক এসিড (পেশিকোষ)
                </button>
              </div>
            )}
          </div>

          {/* Aerobic 4-Stage Breakdown */}
          {respirationMode === 'aerobic' ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Step 1: Glycolysis */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">ধাপ ১: গ্লাইকোলাইসিস</span>
                  <span className="text-[10px] text-slate-400">সাইটোপ্লাজম</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl space-y-1 text-xs">
                  <span className="text-slate-300 block">১ অণু গ্লুকোজ (6C) ⟶ ২ পাইরুভিক এসিড (3C)</span>
                  <div className="pt-1 text-[11px] font-mono text-cyan-300">
                    <div>সরাসরি ATP: ২ টি</div>
                    <div>২ NADH₂ (২×৩): ৬ টি</div>
                  </div>
                </div>
                <div className="text-center font-bold text-xs text-cyan-300 bg-cyan-950/40 p-1.5 rounded-lg border border-cyan-800/40">
                  নিট লাভ: ৮টি ATP
                </div>
              </div>

              {/* Step 2: Acetyl CoA */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400">ধাপ ২: অ্যাসিটাইল কো-এ</span>
                  <span className="text-[10px] text-slate-400">মাইটোকন্ড্রিয়া ধাত্র</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl space-y-1 text-xs">
                  <span className="text-slate-300 block">২ পাইরুভেট ⟶ ২ অ্যাসিটাইল কো-এ (2C) + ২ CO₂</span>
                  <div className="pt-1 text-[11px] font-mono text-purple-300">
                    <div>২ NADH₂ (২×৩): ৬ টি ATP</div>
                    <div>কোনো সরাসরি ATP নেই</div>
                  </div>
                </div>
                <div className="text-center font-bold text-xs text-purple-300 bg-purple-950/40 p-1.5 rounded-lg border border-purple-800/40">
                  নিট লাভ: ৬টি ATP
                </div>
              </div>

              {/* Step 3: Krebs Cycle */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">ধাপ ৩: ক্রেবস চক্র</span>
                  <span className="text-[10px] text-slate-400">মাইটোকন্ড্রিয়া ধাত্র</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl space-y-1 text-xs">
                  <span className="text-slate-300 block">সাইট্রিক এসিড চক্র (স্যার হ্যান্স ক্রেবস)</span>
                  <div className="pt-1 text-[11px] font-mono text-amber-300">
                    <div>৬ NADH₂ (৬×৩): ১৮ টি</div>
                    <div>২ FADH₂ (২×২): ৪ টি</div>
                    <div>২ GTP (২×১): ২ টি</div>
                  </div>
                </div>
                <div className="text-center font-bold text-xs text-amber-300 bg-amber-950/40 p-1.5 rounded-lg border border-amber-800/40">
                  নিট লাভ: ২৪টি ATP
                </div>
              </div>

              {/* Step 4: Total Tally */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-emerald-950/40 border border-emerald-500/40 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">সর্বমোট নিট শক্তি</span>
                  <span className="text-[10px] text-emerald-300 font-mono">100% জারণ</span>
                </div>
                <div className="text-center my-auto space-y-1">
                  <span className="text-3xl font-black text-emerald-400 font-mono">৩৮টি ATP</span>
                  <span className="text-[11px] text-slate-400 block font-mono">≈ ৬৮৬ কিলোক্যালরি (kcal)</span>
                </div>
                <div className="text-[10px] text-slate-300 p-2 bg-slate-950 rounded-lg border border-slate-800 text-center">
                  ৮ + ৬ + ২৪ = ৩৮টি ATP
                </div>
              </div>
            </div>
          ) : (
            /* Anaerobic Fermentation Display */
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white">
                  {anaerobicType === 'yeast' ? 'অ্যালকোহল সন্ধান (ইথানল ফারমেন্টেশন — ঈস্ট)' : 'ল্যাকটিক এসিড সন্ধান (দই উৎপাদন ও পেশি ক্লান্তি)'}
                </h4>
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  উৎপন্ন নিট শক্তি: মাত্র ২টি ATP (৫০ kcal)
                </span>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-center space-y-2">
                {anaerobicType === 'yeast' ? (
                  <p className="text-amber-300">
                    C₆H₁₂O₆ (গ্লুকোজ) ⟶ 2C₂H₅OH (ইথাইল অ্যালকোহল) + 2CO₂ ↑ + ২ ATP (৫০ kcal)
                  </p>
                ) : (
                  <p className="text-rose-300">
                    C₆H₁₂O₆ (গ্লুকোজ) ⟶ 2C₃H₆O₃ (ল্যাকটিক এসিড) + ২ ATP (৫০ kcal)
                  </p>
                )}
                <span className="text-[11px] text-slate-400 block">
                  {anaerobicType === 'yeast'
                    ? 'বেকারি শিল্পে পাউরুটি ফোলাতে এবং অ্যালকোহল ও মদ শিল্পে ব্যবহৃত হয়।'
                    : 'দুধে ল্যাকটিক এসিড ব্যাকটেরিয়া দই তৈরি করে এবং ভারী ব্যায়ামে পেশিতে ব্যথা তৈরি করে।'}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
