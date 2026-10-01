import React, { useState } from 'react';
import { elementsData } from '../data/elementsData';
import { ElementData } from '../types/presentation';
import { 
  Compass, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Award, 
  RotateCcw, 
  ArrowRight,
  Lightbulb,
  Check,
  Zap,
  BookOpen
} from 'lucide-react';

export const PositionFinderLab: React.FC = () => {
  const [selectedAtomicNum, setSelectedAtomicNum] = useState<number>(17); // Chlorine (17)
  const [mode, setMode] = useState<'learn' | 'practice'>('learn');

  // Practice state
  const [practiceElement, setPracticeElement] = useState<ElementData>(elementsData[14]); // Phosphorus (15)
  const [userPeriodGuess, setUserPeriodGuess] = useState<string>('');
  const [userGroupGuess, setUserGroupGuess] = useState<string>('');
  const [practiceFeedback, setPracticeFeedback] = useState<{
    submitted: boolean;
    periodCorrect: boolean;
    groupCorrect: boolean;
    score: number;
    total: number;
  }>({
    submitted: false,
    periodCorrect: false,
    groupCorrect: false,
    score: 0,
    total: 0
  });

  const currentElement = elementsData.find((e) => e.atomicNumber === selectedAtomicNum) || elementsData[0];

  // Helper to determine which rule applies
  const getRuleDetails = (el: ElementData) => {
    // Check if transition metal (Group 3-12, has d electrons in valence calculation)
    if (el.group >= 3 && el.group <= 12) {
      return {
        ruleNumber: 3,
        ruleTitle: 'নিয়ম ৩: d এবং s অরবিটাল (d-ব্লক মৌল)',
        description: 'সবচেয়ে বাইরের s অরবিটালের ঠিক আগের স্তরে d অরবিটাল থাকলে, d এবং s অরবিটালের মোট ইলেকট্রন সংখ্যাই ঐ মৌলের গ্রুপ নম্বর।',
        formula: 'গ্রুপ = (n-1)d এর ইলেকট্রন + ns এর ইলেকট্রন',
        calculation: `গ্রুপ = ${el.group} (অবস্থান্তর ধাতু / Group 3-12)`,
        badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40'
      };
    }

    // Check if s-block only (Group 1 or 2)
    if (el.group === 1 || (el.group === 2 && el.atomicNumber !== 2)) {
      return {
        ruleNumber: 1,
        ruleTitle: 'নিয়ম ১: সবচেয়ে বাইরের স্তরে কেবল s অরবিটাল',
        description: 'কোনো মৌলের ইলেকট্রন বিন্যাসে সবচেয়ে বাইরের প্রধান শক্তিস্তরে যদি কেবল s উপস্তর থাকে, তবে s উপস্তরের ইলেকট্রন সংখ্যাই তার গ্রুপ নম্বর।',
        formula: 'গ্রুপ = সবচেয়ে বাইরের s অরবিটালের ইলেকট্রন সংখ্যা',
        calculation: `গ্রুপ = ${el.group} (Group 1 ক্ষার ধাতু বা Group 2 মৃৎক্ষার ধাতু)`,
        badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/40'
      };
    }

    // Special case: Helium (Z=2)
    if (el.atomicNumber === 2) {
      return {
        ruleNumber: 0,
        ruleTitle: 'ব্যতিক্রম: হিলিয়াম (He)',
        description: 'হিলিয়ামের ইলেকট্রন বিন্যাস 1s² হলেও এর ১ম শক্তিস্তরের দ্বিত্ব (Duet) পূর্ণ এবং এটি সম্পূর্ণ নিষ্ক্রিয়। তাই একে গ্রুপ ২-এ না রেখে গ্রুপ ১৮-এর শীর্ষে রাখা হয়েছে।',
        formula: 'ব্যতিক্রম: 1s² ⇒ নিষ্ক্রিয় গ্যাস (Group 18)',
        calculation: 'গ্রুপ = ১৮ (নিষ্ক্রিয় গ্যাস)',
        badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/40'
      };
    }

    // Special case: Lanthanide & Actinide
    if ((el.atomicNumber >= 57 && el.atomicNumber <= 71) || (el.atomicNumber >= 89 && el.atomicNumber <= 103)) {
      return {
        ruleNumber: 4,
        ruleTitle: 'f-ব্লক ব্যতিক্রম: ল্যান্থানাইড ও অ্যাক্টিনাইড সারি',
        description: 'এই মৌলগুলো মূল সারণির ৩ নম্বর গ্রুপের অন্তর্ভুক্ত। তবে সারণির সৌন্দর্য ও সুষম গঠন রক্ষার জন্য নিচে পৃথক সারি হিসেবে দেখানো হয়।',
        formula: 'গ্রুপ = ৩ (মূল সারণির নিচে প্রদর্শিত)',
        calculation: `পর্যায় ${el.period}, গ্রুপ ৩`,
        badgeColor: 'bg-pink-500/20 text-pink-400 border-pink-500/40'
      };
    }

    // Default: Rule 2: s + p block (Group 13-18)
    const pElectrons = el.group - 10 - 2;
    return {
      ruleNumber: 2,
      ruleTitle: 'নিয়ম ২: সবচেয়ে বাইরের স্তরে s ও p উভয় অরবিটাল',
      description: 'কোনো মৌলের সবচেয়ে বাইরের শক্তিস্তরে যদি s এবং p উভয় অরবিটাল থাকে, তবে s ও p অরবিটালের মোট ইলেকট্রন সংখ্যার সাথে ১০ যোগ করলে গ্রুপ নম্বর পাওয়া যায়।',
      formula: 'গ্রুপ = s এর ইলেকট্রন + p এর ইলেকট্রন + ১০',
      calculation: `গ্রুপ = ২ (s) + ${Math.max(1, pElectrons)} (p) + ১০ = ${el.group}`,
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
    };
  };

  const rule = getRuleDetails(currentElement);

  // Pick random element for practice
  const pickNewPracticeElement = () => {
    // Pick among first 36 elements (well-known in NCTB curriculum)
    const eligible = elementsData.slice(0, 36);
    const randomEl = eligible[Math.floor(Math.random() * eligible.length)];
    setPracticeElement(randomEl);
    setUserPeriodGuess('');
    setUserGroupGuess('');
    setPracticeFeedback((prev) => ({
      ...prev,
      submitted: false,
      periodCorrect: false,
      groupCorrect: false
    }));
  };

  // Submit practice guess
  const handlePracticeSubmit = () => {
    const periodNum = parseInt(userPeriodGuess.trim(), 10);
    const groupNum = parseInt(userGroupGuess.trim(), 10);

    const isPeriodRight = periodNum === practiceElement.period;
    const isGroupRight = groupNum === practiceElement.group;
    const isAllRight = isPeriodRight && isGroupRight;

    setPracticeFeedback((prev) => ({
      submitted: true,
      periodCorrect: isPeriodRight,
      groupCorrect: isGroupRight,
      score: isAllRight ? prev.score + 1 : prev.score,
      total: prev.total + 1
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              অধ্যায় ৪: পর্যায় সারণি
            </span>
            <span className="text-xs text-slate-400">পরীক্ষার জন্য অতি গুরুত্বপূর্ণ অ্যালগরিদম</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Compass className="h-6 w-6 text-cyan-400" />
            পর্যায় ও গ্রুপ নির্ণয় ল্যাব (Position Finder Lab)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            ইলেকট্রন বিন্যাস বিশ্লেষণ করে জাতীয় শিক্ষাক্রমের ৩টি বৈজ্ঞানিক নিয়মে যে কোনো মৌলের পর্যায় ও গ্রুপ নির্ণয় করুন।
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setMode('learn')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              mode === 'learn' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            লার্নিং ও বিশ্লেষণ মোড
          </button>
          <button
            onClick={() => {
              setMode('practice');
              if (!practiceFeedback.submitted && !userPeriodGuess) {
                pickNewPracticeElement();
              }
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
              mode === 'practice' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>প্র্যাকটিস ও চ্যালেঞ্জ</span>
          </button>
        </div>
      </div>

      {mode === 'learn' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Element Selector & Big Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
              <label className="block text-xs font-bold text-slate-300 mb-2">
                মৌল নির্বাচন করুন (১-১১৮):
              </label>
              <select
                value={selectedAtomicNum}
                onChange={(e) => setSelectedAtomicNum(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 text-white text-sm font-semibold rounded-xl px-3 py-2.5 outline-none focus:border-cyan-500 transition cursor-pointer"
              >
                {elementsData.map((el) => (
                  <option key={el.atomicNumber} value={el.atomicNumber}>
                    {el.atomicNumber}. {el.nameBn} ({el.symbol}) — {el.category}
                  </option>
                ))}
              </select>

              {/* Quick Preset Buttons for Top Exam Elements */}
              <div className="mt-4">
                <span className="text-[11px] text-slate-400 font-medium block mb-1.5">
                  বোর্ড পরীক্ষায় বহুল প্রচলিত মৌলসমূহ:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { z: 11, label: 'Na (১১)' },
                    { z: 12, label: 'Mg (১২)' },
                    { z: 15, label: 'P (১৫)' },
                    { z: 17, label: 'Cl (১৭)' },
                    { z: 19, label: 'K (১৯)' },
                    { z: 20, label: 'Ca (২০)' },
                    { z: 21, label: 'Sc (২১)' },
                    { z: 24, label: 'Cr (২৪)' },
                    { z: 26, label: 'Fe (২৬)' },
                    { z: 29, label: 'Cu (২৯)' },
                  ].map((preset) => (
                    <button
                      key={preset.z}
                      onClick={() => setSelectedAtomicNum(preset.z)}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition cursor-pointer ${
                        selectedAtomicNum === preset.z
                          ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Element Identity Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg text-center">
              <div className="w-24 h-24 mx-auto bg-slate-950 border-2 border-cyan-500/40 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-cyan-500/10 mb-3">
                <span className="text-xs font-mono text-slate-400">{currentElement.atomicNumber}</span>
                <span className="text-4xl font-black text-white">{currentElement.symbol}</span>
                <span className="text-[10px] font-mono text-slate-500">{currentElement.massNumber}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{currentElement.nameBn}</h3>
              <p className="text-xs text-slate-400 font-mono mb-2">{currentElement.nameEn}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {currentElement.category}
              </span>
            </div>
          </div>

          {/* Right Column: Step-by-Step Position Calculation Engine */}
          <div className="lg:col-span-8 space-y-4">
            {/* Step 1: Electron Configuration Display */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  ধাপ ১: পূর্ণাঙ্গ ইলেকট্রন বিন্যাস (Electronic Configuration)
                </span>
                <span className="text-xs font-mono text-slate-400">
                  মোট ইলেকট্রন = {currentElement.electrons}
                </span>
              </div>
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl font-mono text-cyan-300 text-sm font-bold tracking-wide">
                {currentElement.configuration}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                শক্তিস্তর বণ্টন (Shells): {currentElement.shells.join(' , ')}
              </p>
            </div>

            {/* Step 2: Period Calculation */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                  ১
                </span>
                <h3 className="text-base font-bold text-white">পর্যায় (Period) নির্ণয়ের নিয়ম</h3>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <p>
                  <strong>বৈজ্ঞানিক নিয়ম:</strong> কোনো মৌলের ইলেকট্রন বিন্যাসে সবচেয়ে বাইরের প্রধান শক্তিস্তরের নম্বরটিই (সর্বোচ্চ কোয়ান্টাম স্তর n) হলো ঐ মৌলের পর্যায় নম্বর।
                </p>
                <div className="flex items-center gap-3 p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-300 text-xs block">
                      {currentElement.symbol}-এর সর্বোচ্চ প্রধান শক্তিস্তর:
                    </span>
                    <span className="text-lg font-black text-cyan-400">
                      n = {currentElement.period} ⇒ পর্যায় = {currentElement.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Group Calculation with Specific Rule */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                  ২
                </span>
                <h3 className="text-base font-bold text-white">গ্রুপ (Group) নির্ণয়ের নিয়ম</h3>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ml-auto ${rule.badgeColor}`}>
                  {rule.ruleTitle.split(':')[0]}
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3">
                <div>
                  <h4 className="font-bold text-white mb-1">{rule.ruleTitle}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{rule.description}</p>
                </div>

                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg font-mono text-xs text-amber-300">
                  {rule.formula}
                </div>

                <div className="flex items-center gap-3 p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg">
                  <Sparkles className="h-5 w-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-300 text-xs block">
                      প্রয়োগকৃত হিসাব:
                    </span>
                    <span className="text-lg font-black text-amber-400">
                      {rule.calculation}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Position Summary Box */}
            <div className="bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/40 rounded-2xl p-5 shadow-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  চূড়ান্ত অবস্থান নিশ্চিতকরণ (Final Periodic Coordinates)
                </span>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">
                  {currentElement.nameBn} ({currentElement.symbol}) ➜{' '}
                  <span className="text-cyan-400">পর্যায় {currentElement.period}</span>,{' '}
                  <span className="text-amber-400">গ্রুপ {currentElement.group}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Check className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Practice / Challenge Mode */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                টেস্ট ইওরসেলফ / প্র্যাকটিস মোড
              </span>
              <h2 className="text-xl font-bold text-white">পর্যায় ও গ্রুপ অনুমান করুন</h2>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-bold text-slate-200">
                স্কোর: {practiceFeedback.score} / {practiceFeedback.total}
              </span>
            </div>
          </div>

          {/* Random Element Mystery Box */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-center">
            <span className="text-xs text-slate-400">লক্ষ্য মৌল:</span>
            <div className="flex items-center justify-center gap-3 my-2">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-amber-500/40 flex flex-col items-center justify-center">
                <span className="text-xs font-mono text-slate-400">{practiceElement.atomicNumber}</span>
                <span className="text-2xl font-black text-amber-400">{practiceElement.symbol}</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">{practiceElement.nameBn}</h3>
                <p className="text-xs text-slate-400 font-mono">পারমাণবিক সংখ্যা: {practiceElement.atomicNumber}</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-slate-900/90 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300">
              ইলেকট্রন বিন্যাস: {practiceElement.configuration}
            </div>
          </div>

          {/* Input Form */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                পর্যায় নম্বর (১ - ৭):
              </label>
              <input
                type="number"
                min="1"
                max="7"
                value={userPeriodGuess}
                onChange={(e) => setUserPeriodGuess(e.target.value)}
                disabled={practiceFeedback.submitted}
                placeholder="যেমন: ৩"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white text-center font-bold text-lg outline-none focus:border-cyan-500 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                গ্রুপ নম্বর (১ - ১৮):
              </label>
              <input
                type="number"
                min="1"
                max="18"
                value={userGroupGuess}
                onChange={(e) => setUserGroupGuess(e.target.value)}
                disabled={practiceFeedback.submitted}
                placeholder="যেমন: ১৫"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white text-center font-bold text-lg outline-none focus:border-amber-500 disabled:opacity-60"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!practiceFeedback.submitted ? (
              <button
                onClick={handlePracticeSubmit}
                disabled={!userPeriodGuess || !userGroupGuess}
                className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl transition disabled:opacity-50 cursor-pointer shadow-lg"
              >
                উত্তর যাচাই করুন
              </button>
            ) : (
              <button
                onClick={pickNewPracticeElement}
                className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>পরবর্তী মৌল অনুশীলন</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Feedback Output */}
          {practiceFeedback.submitted && (
            <div className={`p-4 rounded-2xl border text-sm space-y-2 ${
              practiceFeedback.periodCorrect && practiceFeedback.groupCorrect
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 font-bold text-base">
                {practiceFeedback.periodCorrect && practiceFeedback.groupCorrect ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span>চমৎকার! আপনার উত্তর সম্পূর্ণ সঠিক হয়েছে।</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-rose-400" />
                    <span>কিছুটা ভুল হয়েছে, সঠিক উত্তর নিচে দেখুন:</span>
                  </>
                )}
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                <strong>সঠিক ফলাফল:</strong> {practiceElement.nameBn} ({practiceElement.symbol})-এর পর্যায় হলো <strong>{practiceElement.period}</strong> এবং গ্রুপ হলো <strong>{practiceElement.group}</strong>।
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
