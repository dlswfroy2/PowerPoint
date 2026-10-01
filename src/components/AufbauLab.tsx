import React, { useState } from 'react';
import { Cpu, ArrowRight, CheckCircle2, AlertTriangle, Sparkles, HelpCircle, Layers } from 'lucide-react';

interface SubshellDef {
  name: string;
  n: number;
  l: number;
  sum: number;
  capacity: number;
}

export const AufbauLab: React.FC = () => {
  const [selectedSubshellA, setSelectedSubshellA] = useState<string>('4s');
  const [selectedSubshellB, setSelectedSubshellB] = useState<string>('3d');
  const [exceptionView, setExceptionView] = useState<'Cr' | 'Cu'>('Cr');
  const [showExceptionActual, setShowExceptionActual] = useState<boolean>(true);

  const subshells: SubshellDef[] = [
    { name: '1s', n: 1, l: 0, sum: 1, capacity: 2 },
    { name: '2s', n: 2, l: 0, sum: 2, capacity: 2 },
    { name: '2p', n: 2, l: 1, sum: 3, capacity: 6 },
    { name: '3s', n: 3, l: 0, sum: 3, capacity: 2 },
    { name: '3p', n: 3, l: 1, sum: 4, capacity: 6 },
    { name: '4s', n: 4, l: 0, sum: 4, capacity: 2 },
    { name: '3d', n: 3, l: 2, sum: 5, capacity: 10 },
    { name: '4p', n: 4, l: 1, sum: 5, capacity: 6 },
    { name: '5s', n: 5, l: 0, sum: 5, capacity: 2 },
    { name: '4d', n: 4, l: 2, sum: 6, capacity: 10 },
    { name: '5p', n: 5, l: 1, sum: 6, capacity: 6 },
    { name: '6s', n: 6, l: 0, sum: 6, capacity: 2 },
    { name: '4f', n: 4, l: 3, sum: 7, capacity: 14 },
    { name: '5d', n: 5, l: 2, sum: 7, capacity: 10 }
  ];

  const subA = subshells.find((s) => s.name === selectedSubshellA) || subshells[5];
  const subB = subshells.find((s) => s.name === selectedSubshellB) || subshells[6];

  // Determine which has lower energy according to (n + l)
  let lowerSubshell = subA;
  let higherSubshell = subB;
  let reason = '';

  if (subA.sum < subB.sum) {
    lowerSubshell = subA;
    higherSubshell = subB;
    reason = `যেহেতু ${subA.name} এর (n + l) এর মান ${subA.sum}, যা ${subB.name} এর মান (${subB.sum}) অপেক্ষা কম, তাই ${subA.name} এর শক্তি কম।`;
  } else if (subB.sum < subA.sum) {
    lowerSubshell = subB;
    higherSubshell = subA;
    reason = `যেহেতু ${subB.name} এর (n + l) এর মান ${subB.sum}, যা ${subA.name} এর মান (${subA.sum}) অপেক্ষা কম, তাই ${subB.name} এর শক্তি কম।`;
  } else {
    // Sums are equal, compare n
    if (subA.n < subB.n) {
      lowerSubshell = subA;
      higherSubshell = subB;
      reason = `উভয়েরই (n + l) এর মান সমান (${subA.sum}), কিন্তু ${subA.name} এর প্রধান কোয়ান্টাম সংখ্যা n = ${subA.n}, যা ${subB.name} (n = ${subB.n}) অপেক্ষা ছোট। সুতরাং ${subA.name} এর শক্তি কম।`;
    } else {
      lowerSubshell = subB;
      higherSubshell = subA;
      reason = `উভয়েরই (n + l) এর মান সমান (${subB.sum}), কিন্তু ${subB.name} এর প্রধান কোয়ান্টাম সংখ্যা n = ${subB.n}, যা ${subA.name} (n = ${subA.n}) অপেক্ষা ছোট। সুতরাং ${subB.name} এর শক্তি কম।`;
    }
  }

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">ইন্টারঅ্যাক্টিভ ল্যাব</span>
          <span aria-hidden="true">·</span>
          <span>আউফবাউ নীতি ও (n + l) নিয়ম</span>
          <span aria-hidden="true">·</span>
          <span>ইলেকট্রন বিন্যাসের ব্যতিক্রম</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
          আউফবাউ নীতি ও অরবিটাল শক্তি পরীক্ষাগার
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl">
          উপশক্তিস্তরের শক্তি তুলনা করে দেখুন কেন পটাশিয়ামের ১৯তম ইলেকট্রন 3d-তে না গিয়ে 4s-এ যায় এবং ক্রোমিয়াম ও কপার কীভাবে বিশেষ স্থায়িত্ব অর্জন করে।
        </p>
      </div>

      {/* Section 1: (n + l) Live Comparator */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <Cpu className="h-5 w-5 text-cyan-400" />
              <span>(n + l) শক্তি তুলনাকারী (Orbital Energy Comparator)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              যেকোনো দুটি উপশক্তিস্তর নির্বাচন করে শক্তি ও ইলেকট্রন প্রবেশের অগ্রাধিকার যাচাই করুন
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-lg text-xs font-mono">
            E ∝ (n + l)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subshell A Selection Box */}
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">উপশক্তিস্তর ১</span>
              <span className="text-xs text-slate-400">সর্বোচ্চ ধারণক্ষমতা: {subA.capacity}টি</span>
            </div>
            
            <select
              value={selectedSubshellA}
              onChange={(e) => setSelectedSubshellA(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-base text-white font-mono font-bold outline-none focus:border-cyan-500"
            >
              {subshells.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name} (n={s.n}, l={s.l})
                </option>
              ))}
            </select>

            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">প্রধান (n)</span>
                <span className="font-mono text-cyan-400 font-bold text-base">{subA.n}</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">সহকারী (l)</span>
                <span className="font-mono text-cyan-400 font-bold text-base">{subA.l}</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">(n + l) মান</span>
                <span className="font-mono text-emerald-400 font-bold text-base">{subA.sum}</span>
              </div>
            </div>
          </div>

          {/* Subshell B Selection Box */}
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">উপশক্তিস্তর ২</span>
              <span className="text-xs text-slate-400">সর্বোচ্চ ধারণক্ষমতা: {subB.capacity}টি</span>
            </div>

            <select
              value={selectedSubshellB}
              onChange={(e) => setSelectedSubshellB(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-base text-white font-mono font-bold outline-none focus:border-purple-500"
            >
              {subshells.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name} (n={s.n}, l={s.l})
                </option>
              ))}
            </select>

            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">প্রধান (n)</span>
                <span className="font-mono text-purple-400 font-bold text-base">{subB.n}</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">সহকারী (l)</span>
                <span className="font-mono text-purple-400 font-bold text-base">{subB.l}</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">(n + l) মান</span>
                <span className="font-mono text-emerald-400 font-bold text-base">{subB.sum}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Result Callout */}
        <div className="rounded-xl border border-cyan-500/40 bg-cyan-950/20 p-5 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
            <CheckCircle2 className="h-5 w-5 text-cyan-400" />
            <span>সিদ্ধান্ত: {lowerSubshell.name}-এ আগে ইলেকট্রন প্রবেশ করবে!</span>
          </div>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
            {reason} অতএব শক্তির ক্রম: <code className="font-mono text-cyan-400 font-bold">{lowerSubshell.name} &lt; {higherSubshell.name}</code>।
          </p>
        </div>
      </div>

      {/* Section 2: Aufbau Energy Ladder (Interactive Sequence) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl space-y-5">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-400" />
            <span>আউফবাউ নীতি অনুযায়ী ইলেকট্রন প্রবেশের সম্পূর্ণ ক্রমধারা</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            বাম থেকে ডানে ক্রমান্বয়ে কম শক্তি থেকে বেশি শক্তিতে ইলেকট্রন প্রবেশ করে
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin">
          {subshells.map((s, idx) => (
            <div key={s.name} className="flex items-center gap-2 shrink-0">
              <div className="flex flex-col items-center justify-center w-16 h-20 rounded-xl border border-slate-700 bg-slate-950 p-2 text-center transition hover:border-cyan-500">
                <span className="text-xs text-slate-500 font-mono">#{idx + 1}</span>
                <span className="text-sm font-bold text-white font-mono">{s.name}</span>
                <span className="text-[10px] text-cyan-400 font-mono">n+l = {s.sum}</span>
              </div>
              {idx < subshells.length - 1 && (
                <ArrowRight className="h-4 w-4 text-slate-600 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Chromium & Copper Special Exceptions Lab */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-400" />
              <span>ইলেকট্রন বিন্যাসের ব্যতিক্রম পরীক্ষাগার (Cr & Cu)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              অর্ধপূর্ণ (d⁵) ও সম্পূর্ণরূপে পূর্ণ (d¹⁰) অরবিটালের প্রতিসাম্যতা ও বিনিময় শক্তির কারণে বিশেষ স্থায়িত্ব লাভ
            </p>
          </div>

          <div className="flex items-center gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              onClick={() => setExceptionView('Cr')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                exceptionView === 'Cr'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ক্রোমিয়াম (₂₄Cr)
            </button>
            <button
              onClick={() => setExceptionView('Cu')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                exceptionView === 'Cu'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              কপার (₂₉Cu)
            </button>
          </div>
        </div>

        {/* View Toggle: Expected vs Actual */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setShowExceptionActual(false)}
            className={`px-4 py-2 rounded-xl text-xs font-medium border transition ${
              !showExceptionActual
                ? 'border-red-500 bg-red-500/10 text-red-300 font-bold'
                : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
            }`}
          >
            সাধারণ নিয়মে যা হতো (ভুল বিন্যাস)
          </button>
          <button
            onClick={() => setShowExceptionActual(true)}
            className={`px-4 py-2 rounded-xl text-xs font-medium border transition ${
              showExceptionActual
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 font-bold'
                : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
            }`}
          >
            প্রকৃত সঠিক বিন্যাস (অধিক স্থিতিশীল)
          </button>
        </div>

        {/* Orbital Boxes Visualizer */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
            <span>
              মৌল: <strong className="text-white">{exceptionView === 'Cr' ? 'ক্রোমিয়াম (Chromium, Z=24)' : 'কপার (Copper, Z=29)'}</strong>
            </span>
            <span className={showExceptionActual ? 'text-emerald-400 font-semibold' : 'text-red-400 font-semibold'}>
              {showExceptionActual ? '✓ প্রকৃত স্থিতিশীল অবস্থা' : '✗ সাধারণ নিয়মের অনুমেয় অবস্থা'}
            </span>
          </div>

          <div className="space-y-4">
            {/* Inner Core */}
            <div className="text-xs text-slate-300 font-mono">
              [Ar] আর্গন কোর: 1s² 2s² 2p⁶ 3s² 3p⁶ (১৮টি ইলেকট্রন)
            </div>

            {/* Valence Orbitals: 3d & 4s */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              {/* 3d Subshell (5 orbital boxes) */}
              <div className="space-y-2">
                <span className="text-xs text-cyan-400 font-mono font-bold block">
                  3d উপশক্তিস্তর / 3d Subshell (৫টি অরবিটাল / 5 Orbitals)
                </span>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, boxIdx) => {
                    let spinCount = 0;
                    if (exceptionView === 'Cr') {
                      // Cr: expected 4 electrons (1 each in first 4), actual 5 electrons (1 in all 5)
                      spinCount = showExceptionActual ? 1 : boxIdx < 4 ? 1 : 0;
                    } else {
                      // Cu: expected 9 electrons (4 paired, 1 single), actual 10 electrons (all 5 paired)
                      spinCount = showExceptionActual ? 2 : boxIdx < 4 ? 2 : 1;
                    }

                    return (
                      <div
                        key={boxIdx}
                        className={`w-12 h-14 rounded-lg border flex flex-col items-center justify-center transition-all ${
                          spinCount === 2
                            ? 'border-emerald-500/60 bg-emerald-950/20'
                            : spinCount === 1
                            ? 'border-cyan-500/60 bg-cyan-950/20'
                            : 'border-slate-800 bg-slate-900/60'
                        }`}
                      >
                        <div className="flex items-center gap-1 font-mono text-sm font-bold">
                          {spinCount >= 1 && <span className="text-cyan-400" title="স্পিন আপ / Spin-Up (+1/2)">↑</span>}
                          {spinCount === 2 && <span className="text-amber-400" title="স্পিন ডাউন / Spin-Down (-1/2)">↓</span>}
                          {spinCount === 0 && <span className="text-slate-600 text-xs">খালি</span>}
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono mt-1">d{boxIdx + 1}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4s Subshell (1 orbital box) */}
              <div className="space-y-2">
                <span className="text-xs text-purple-400 font-mono font-bold block">
                  4s উপশক্তিস্তর / 4s Subshell (১টি অরবিটাল / 1 Orbital)
                </span>
                <div className="flex items-center gap-1.5">
                  {(() => {
                    const sCount = showExceptionActual ? 1 : 2;
                    return (
                      <div className={`w-12 h-14 rounded-lg border flex flex-col items-center justify-center transition-all ${
                        sCount === 2
                          ? 'border-emerald-500/60 bg-emerald-950/20'
                          : 'border-cyan-500/60 bg-cyan-950/20'
                      }`}>
                        <div className="flex items-center gap-1 font-mono text-sm font-bold">
                          <span className="text-cyan-400" title="স্পিন আপ / Spin-Up (+1/2)">↑</span>
                          {sCount === 2 && <span className="text-amber-400" title="স্পিন ডাউন / Spin-Down (-1/2)">↓</span>}
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono mt-1">4s</span>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Electron Spin Legend */}
            <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
              <span className="text-slate-300 font-semibold">ইলেকট্রন স্পিন নির্দেশিকা / Spin Key:</span>
              <span className="text-cyan-400 font-mono">↑ স্পিন আপ / Spin-Up (mₛ = +½)</span>
              <span>·</span>
              <span className="text-amber-400 font-mono">↓ স্পিন ডাউন / Spin-Down (mₛ = -½)</span>
            </div>

            {/* Electron Configuration Representation */}
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs md:text-sm">
              <span className="text-slate-400">বিন্যাস: </span>
              {exceptionView === 'Cr' ? (
                showExceptionActual ? (
                  <strong className="text-emerald-400">1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹</strong>
                ) : (
                  <strong className="text-red-400 line-through">1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s²</strong>
                )
              ) : (
                showExceptionActual ? (
                  <strong className="text-emerald-400">1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹</strong>
                ) : (
                  <strong className="text-red-400 line-through">1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ 4s²</strong>
                )
              )}
            </div>

            {/* Scientific Explanation */}
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {exceptionView === 'Cr' ? (
                showExceptionActual ? (
                  <>
                    <strong className="text-white">ব্যাখ্যা:</strong> ৩d উপশক্তিস্তরে ৫টি অরবিটাল থাকে। যখন ৫টি অরবিটালেই একটি করে বিজোড় ইলেকট্রন থাকে (d⁵ অর্ধপূর্ণ অবস্থা), তখন ইলেকট্রনগুলোর স্পিন প্রতিসাম্য (Symmetry) সর্বোচ্চ হয় এবং তাদের মধ্যবর্তী এক্সচেঞ্জ এনার্জি (Exchange Energy) পরমাণুর মোট শক্তি হ্রাস করে সবচেয়ে স্থিতিশীল কাঠামো উপহার দেয়।
                  </>
                ) : (
                  <>
                    <strong className="text-red-400">কেন এটি বাতিল হয়:</strong> d⁴ অবস্থায় ৩d-এর ৪টি অরবিটালে ইলেকট্রন থাকলেও একটি অরবিটাল খালি থাকত, যা কাঠামোগত অপ্রতিসাম্য সৃষ্টি করত। তাই 4s থেকে একটি ইলেকট্রন সহজেই 3d-তে উন্নীত হয়ে d⁵ অর্ধপূর্ণ অধিক স্থিতিশীল অবস্থা গঠন করে।
                  </>
                )
              ) : (
                showExceptionActual ? (
                  <>
                    <strong className="text-white">ব্যাখ্যা:</strong> ৩d উপশক্তিস্তর যখন ১০টি ইলেকট্রন দ্বারা সম্পূর্ণরূপে পূর্ণ (d¹⁰) থাকে, তখন প্রতিটি অরবিটাল যুগলবদ্ধ হয়ে সম্পূর্ণ প্রতিসাম্য ও পরম স্থায়িত্ব লাভ করে।
                  </>
                ) : (
                  <>
                    <strong className="text-red-400">কেন এটি বাতিল হয়:</strong> d⁹ অবস্থায় একটি অরবিটালে বিজোড় ইলেকট্রন থাকত, যা পূর্ণ অরবিটালের চরম স্থায়িত্বের তুলনায় কম স্থিতিশীল। তাই 4s-এর একটি ইলেকট্রন 3d-তে গিয়ে পূর্ণ d¹⁰ স্তর তৈরি করে।
                  </>
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
