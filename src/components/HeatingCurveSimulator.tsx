import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Flame, 
  Snowflake, 
  Layers, 
  Info, 
  Gauge, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

export const HeatingCurveSimulator: React.FC = () => {
  const [currentProgress, setCurrentProgress] = useState<number>(0); // 0 to 100%
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [mode, setMode] = useState<'heating' | 'cooling'>('heating');

  // Curve stages definitions
  // 0% - 15%: Ice heating from -20°C to 0°C
  // 15% - 40%: Melting at 0°C (Latent heat of fusion plateau)
  // 40% - 70%: Liquid water heating from 0°C to 100°C
  // 70% - 95%: Boiling at 100°C (Latent heat of vaporization plateau)
  // 95% - 100%: Steam heating > 100°C

  // Compute temperature based on progress
  const getTemperature = (p: number) => {
    if (p < 15) {
      return -20 + (p / 15) * 20; // -20 to 0
    } else if (p < 40) {
      return 0; // Melting plateau
    } else if (p < 70) {
      return ((p - 40) / 30) * 100; // 0 to 100
    } else if (p < 95) {
      return 100; // Boiling plateau
    } else {
      return 100 + ((p - 95) / 5) * 20; // 100 to 120
    }
  };

  const currentTemp = Math.round(getTemperature(currentProgress));

  // Determine current phase description
  const getPhaseInfo = (p: number) => {
    if (p < 15) {
      return {
        phaseBn: 'কঠিন বরফের উত্তপ্তকরণ (-২০°C হতে ০°C)',
        phaseEn: 'Warming of solid ice',
        state: 'কঠিন (Solid)',
        energyUse: 'কণার গতিশক্তি বৃদ্ধি পাচ্ছে, তাপমাত্রা বাড়ছে'
      };
    } else if (p < 40) {
      return {
        phaseBn: 'বরফ গলন ও গলনের সুপ্ততাপ (০°C স্থির রেখা)',
        phaseEn: 'Melting Plateau (Latent Heat of Fusion)',
        state: 'কঠিন + তরল মিশ্রণ (Ice + Water)',
        energyUse: 'তাপ কণার তাপমাত্রা না বাড়িয়ে বরফের ল্যাটিস ভাঙতে সুপ্ততাপ হিসেবে ব্যয় হচ্ছে'
      };
    } else if (p < 70) {
      return {
        phaseBn: 'তরল পানির উত্তপ্তকরণ (০°C হতে ১০০°C)',
        phaseEn: 'Heating of liquid water',
        state: 'তরল (Liquid)',
        energyUse: 'তরলের কণাগুলোর গতিশক্তি দ্রুত বাড়ছে, তাপমাত্রা ১০০°C এর দিকে উঠছে'
      };
    } else if (p < 95) {
      return {
        phaseBn: 'পানির স্ফুটন ও বাষ্পীভবনের সুপ্ততাপ (১০০°C স্থির রেখা)',
        phaseEn: 'Boiling Plateau (Latent Heat of Vaporization)',
        state: 'তরল + গ্যাসীয় বাষ্প মিশ্রণ (Water + Steam)',
        energyUse: 'অণুগুলোর মধ্যকার হাইড্রোজেন বন্ধন সম্পূর্ণ ছিন্ন করে মুক্ত বাষ্পে পরিণত হতে সুপ্ততাপ ব্যয়িত হচ্ছে'
      };
    } else {
      return {
        phaseBn: 'জলীয় বাষ্পের উত্তপ্তকরণ (> ১০০°C)',
        phaseEn: 'Superheating of water steam',
        state: 'গ্যাসীয় বাষ্প (Steam)',
        energyUse: 'বাষ্পের কণাগুলোর বিশৃঙ্খল গতিশক্তি ও চাপ দ্রুত বৃদ্ধি পাচ্ছে'
      };
    }
  };

  const phaseInfo = getPhaseInfo(currentProgress);

  // Play animation interval
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.5;
        });
      }, 80);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-6">
      {/* Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">অধ্যায় ২ ইন্টারঅ্যাক্টিভ ল্যাব</span>
          <span aria-hidden="true">·</span>
          <span>তাপীয় বক্ররেখা</span>
          <span aria-hidden="true">·</span>
          <span>গলন ও স্ফুটনের সুপ্ততাপ</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              পানির তাপীয় ও শীতলীকরণ বক্ররেখা সিমুলেটর
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-1">
              -২০°C বরফ হতে ১২০°C বাষ্পে রূপান্তরের প্রতিটি ধাপে তাপমাত্রা বনাম সময় লেখচিত্র এবং ০°C ও ১০০°C তাপমাত্রার সুপ্ততাপ রেখা পর্যবেক্ষণ করুন।
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2 rounded-xl text-xs">
            <span className="text-slate-400 font-mono">তাপমাত্রা:</span>
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold font-mono text-sm">
              {currentTemp}°C ({currentTemp + 273.15} K)
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Graph & Beaker Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Interactive SVG Graph Canvas (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950 p-6 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span>তাপমাত্রা বনাম সময় লেখচিত্র (Heating Curve of H₂O)</span>
            </h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isPlaying 
                    ? 'bg-amber-500 text-slate-950' 
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                }`}
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                <span>{isPlaying ? 'স্থগিত' : 'সিমুলেশন চালু'}</span>
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentProgress(0);
                }}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>রিসেট</span>
              </button>
            </div>
          </div>

          {/* SVG Graph */}
          <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-xl border border-slate-800 p-2 overflow-visible">
            <svg viewBox="0 0 540 320" className="w-full h-full overflow-visible font-sans text-xs">
              
              {/* Grid Lines */}
              <line x1="50" y1="280" x2="510" y2="280" stroke="#334155" strokeWidth="1.5" />
              <line x1="50" y1="280" x2="50" y2="20" stroke="#334155" strokeWidth="1.5" />

              {/* Y-axis Ticks & Labels */}
              {/* -20°C (Y=260), 0°C (Y=220), 50°C (Y=160), 100°C (Y=100), 120°C (Y=70) */}
              <text x="40" y="264" textAnchor="end" fill="#64748b" fontSize="10">-20°C</text>
              <line x1="45" y1="260" x2="510" y2="260" stroke="#1e293b" strokeDasharray="3 3" />

              <text x="40" y="224" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">0°C</text>
              <line x1="45" y1="220" x2="510" y2="220" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 4" />

              <text x="40" y="104" textAnchor="end" fill="#f43f5e" fontSize="11" fontWeight="bold">100°C</text>
              <line x1="45" y1="100" x2="510" y2="100" stroke="#e11d48" strokeWidth="1" strokeDasharray="4 4" />

              <text x="40" y="74" textAnchor="end" fill="#fb923c" fontSize="10">120°C</text>
              <line x1="45" y1="70" x2="510" y2="70" stroke="#1e293b" strokeDasharray="3 3" />

              {/* Axes Titles */}
              <text x="280" y="308" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                সময় / Time (t) ➔
              </text>
              <text x="18" y="150" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold" transform="rotate(-90 18 150)">
                তাপমাত্রা / Temp (°C) ➔
              </text>

              {/* Full Idealized Path Coordinates */}
              {/* Point A: (50, 260) -> Point B: (110, 220) */}
              {/* Point B: (110, 220) -> Point C: (210, 220) [Melting Plateau] */}
              {/* Point C: (210, 220) -> Point D: (330, 100) [Water Heating] */}
              {/* Point D: (330, 100) -> Point E: (470, 100) [Boiling Plateau] */}
              {/* Point E: (470, 100) -> Point F: (500, 70) [Steam Heating] */}

              <path
                d="M 50,260 L 110,220 L 210,220 L 330,100 L 470,100 L 500,70"
                fill="none"
                stroke="#1e293b"
                strokeWidth="4"
              />

              {/* Plateau Highlights */}
              <rect x="110" y="212" width="100" height="16" fill="rgba(56, 189, 248, 0.15)" rx="4" />
              <text x="160" y="206" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontWeight="bold">
                গলনের সুপ্ততাপ (BC)
              </text>

              <rect x="330" y="92" width="140" height="16" fill="rgba(244, 63, 94, 0.15)" rx="4" />
              <text x="400" y="86" textAnchor="middle" fill="#f43f5e" fontSize="9.5" fontWeight="bold">
                বাষ্পীভবনের সুপ্ততাপ (DE)
              </text>

              {/* Animated Progress Path */}
              {(() => {
                // Compute current SVG point (X, Y) based on currentProgress (0 to 100)
                let ptX = 50;
                let ptY = 260;

                if (currentProgress <= 15) {
                  const t = currentProgress / 15;
                  ptX = 50 + t * (110 - 50);
                  ptY = 260 - t * (260 - 220);
                } else if (currentProgress <= 40) {
                  const t = (currentProgress - 15) / 25;
                  ptX = 110 + t * (210 - 110);
                  ptY = 220;
                } else if (currentProgress <= 70) {
                  const t = (currentProgress - 40) / 30;
                  ptX = 210 + t * (330 - 210);
                  ptY = 220 - t * (220 - 100);
                } else if (currentProgress <= 95) {
                  const t = (currentProgress - 70) / 25;
                  ptX = 330 + t * (470 - 330);
                  ptY = 100;
                } else {
                  const t = (currentProgress - 95) / 5;
                  ptX = 470 + t * (500 - 470);
                  ptY = 100 - t * (100 - 70);
                }

                return (
                  <g>
                    {/* Glowing Tracker Dot */}
                    <circle cx={ptX} cy={ptY} r="7" fill="#facc15" className="animate-ping" opacity="0.75" />
                    <circle cx={ptX} cy={ptY} r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />

                    {/* Current readout tooltip */}
                    <rect x={ptX - 35} y={ptY - 32} width="70" height="20" rx="4" fill="#090d16" stroke="#f59e0b" strokeWidth="1" />
                    <text x={ptX} y={ptY - 18} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                      {currentTemp}°C
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Interactive Progress Scrubber */}
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span>লেখচিত্র নিয়ন্ত্রণ স্লাইডার:</span>
              <span className="font-mono text-cyan-400 font-semibold">{Math.round(currentProgress)}% অগ্রগতি</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={0.5}
              value={currentProgress}
              onChange={(e) => setCurrentProgress(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Real-time Phase Details & Explanation (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Active Phase Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Gauge className="h-4 w-4 text-cyan-400" />
                <span>বর্তমান ভৌত দশা ও অবস্থা</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {phaseInfo.state}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">পর্যায়ের শিরোনাম:</span>
                <strong className="text-white text-sm">{phaseInfo.phaseBn}</strong>
                <span className="text-slate-500 block text-[11px] font-mono">{phaseInfo.phaseEn}</span>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-slate-400 block text-[11px]">তাপশক্তির রূপান্তর ব্যাখ্যা:</span>
                <p className="text-slate-200 leading-relaxed">
                  {phaseInfo.energyUse}
                </p>
              </div>
            </div>
          </div>

          {/* Latent Heat Key Formulas Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Info className="h-4 w-4 text-amber-400" />
              <span>সুপ্ততাপের পরিমাণ ও প্রয়োজনীয় তথ্য</span>
            </h4>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                <div>
                  <strong className="text-cyan-400 block">গলনের আপেক্ষিক সুপ্ততাপ (L_f)</strong>
                  <span className="text-slate-400 text-[10px]">বরফ ➔ পানি (০°C)</span>
                </div>
                <span className="font-mono font-bold text-slate-200 text-xs">
                  3.36 × 10⁵ J/kg
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                <div>
                  <strong className="text-rose-400 block">বাষ্পীভবনের আপেক্ষিক সুপ্ততাপ (L_v)</strong>
                  <span className="text-slate-400 text-[10px]">পানি ➔ বাষ্প (১০০°C)</span>
                </div>
                <span className="font-mono font-bold text-slate-200 text-xs">
                  2.26 × 10⁶ J/kg
                </span>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-800 pt-2">
                লক্ষ্য করুন: বাষ্পীভবনের সুপ্ততাপ গলনের সুপ্ততাপের চেয়ে প্রায় <strong>৬.৭ গুণ</strong> বেশি। এজন্য গ্রাফে ১০০°C এর সমান্তরাল রেখাটি ০°C এর রেখার চেয়ে অনেক বেশি দীর্ঘ হয়।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
