import React from 'react';

interface CustomDiagramViewerProps {
  type: string;
}

export const CustomDiagramViewer: React.FC<CustomDiagramViewerProps> = ({ type }) => {
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

  return null;
};
