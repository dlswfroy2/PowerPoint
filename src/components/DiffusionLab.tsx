import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Calculator, 
  CheckCircle2, 
  Clock, 
  Info,
  Beaker
} from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'nh3' | 'hcl';
}

export const DiffusionLab: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'graham' | 'effusion'>('graham');

  // Graham Tube Experiment State
  const [isPlayingGraham, setIsPlayingGraham] = useState<boolean>(false);
  const [grahamProgress, setGrahamProgress] = useState<number>(0); // 0 to 100%
  const [ringFormed, setRingFormed] = useState<boolean>(false);

  // Effusion Lab State
  const [selectedGas1, setSelectedGas1] = useState<string>('He');
  const [selectedGas2, setSelectedGas2] = useState<string>('CO2');
  const [effusionRunning, setEffusionRunning] = useState<boolean>(false);
  const [effusionCount1, setEffusionCount1] = useState<number>(0);
  const [effusionCount2, setEffusionCount2] = useState<number>(0);
  const [effusionTime, setEffusionTime] = useState<number>(0);

  const tubeCanvasRef = useRef<HTMLCanvasElement>(null);
  const grahamParticlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);

  // Gas Database
  const gases: { [key: string]: { nameBn: string; formula: string; mass: number; color: string } } = {
    'H2': { nameBn: 'হাইড্রোজেন', formula: 'H₂', mass: 2, color: '#38bdf8' },
    'He': { nameBn: 'হিলিয়াম', formula: 'He', mass: 4, color: '#818cf8' },
    'CH4': { nameBn: 'মিথেন', formula: 'CH₄', mass: 16, color: '#34d399' },
    'NH3': { nameBn: 'অ্যামোনিয়া', formula: 'NH₃', mass: 17, color: '#06b6d4' },
    'N2': { nameBn: 'নাইট্রোজেন', formula: 'N₂', mass: 28, color: '#a78bfa' },
    'O2': { nameBn: 'অক্সিজেন', formula: 'O₂', mass: 32, color: '#f43f5e' },
    'HCl': { nameBn: 'হাইড্রোক্লোরিক এসিড', formula: 'HCl', mass: 36.5, color: '#fb923c' },
    'CO2': { nameBn: 'কার্বন ডাই-অক্সাইড', formula: 'CO₂', mass: 44, color: '#facc15' },
    'SO2': { nameBn: 'সালফার ডাই-অক্সাইড', formula: 'SO₂', mass: 64, color: '#ec4899' }
  };

  const gas1 = gases[selectedGas1] || gases['He'];
  const gas2 = gases[selectedGas2] || gases['CO2'];

  // Graham's Law theoretical velocity ratio: r1 / r2 = sqrt(M2 / M1)
  const theoreticalRatio = Math.sqrt(gas2.mass / gas1.mass);

  // Start Graham Tube Experiment
  const handleStartGraham = () => {
    setIsPlayingGraham(true);
    setGrahamProgress(0);
    setRingFormed(false);
    grahamParticlesRef.current = [];
  };

  // Reset Graham
  const handleResetGraham = () => {
    setIsPlayingGraham(false);
    setGrahamProgress(0);
    setRingFormed(false);
    grahamParticlesRef.current = [];
  };

  // Animate Graham Tube on Canvas
  useEffect(() => {
    const canvas = tubeCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Glass tube bounds
      const tubeY = 45;
      const tubeH = 90;
      const tubeLeft = 60;
      const tubeRight = width - 60;
      const tubeLen = tubeRight - tubeLeft;

      // Draw Glass Tube Background & Highlights
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.fillRect(tubeLeft, tubeY, tubeLen, tubeH);

      // Glass Tube Border
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(tubeLeft, tubeY, tubeLen, tubeH);

      // Cotton Plugs
      // Left: NH3 cotton
      ctx.fillStyle = '#06b6d4';
      ctx.fillRect(tubeLeft, tubeY + 4, 25, tubeH - 8);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('NH₃ তুলা', tubeLeft + 12, tubeY + tubeH / 2 + 3);

      // Right: HCl cotton
      ctx.fillStyle = '#f97316';
      ctx.fillRect(tubeRight - 25, tubeY + 4, 25, tubeH - 8);
      ctx.fillStyle = '#ffffff';
      ctx.fillText('HCl তুলা', tubeRight - 12, tubeY + tubeH / 2 + 3);

      // Ruler markings beneath tube
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px monospace';
      for (let i = 0; i <= 10; i++) {
        const markX = tubeLeft + (i / 10) * tubeLen;
        ctx.beginPath();
        ctx.moveTo(markX, tubeY + tubeH);
        ctx.lineTo(markX, tubeY + tubeH + 8);
        ctx.stroke();
        ctx.fillText(`${i * 10}cm`, markX, tubeY + tubeH + 20);
      }

      // Theoretical meeting point: NH3 is faster (~59.4% from left)
      const meetingRatio = 0.594;
      const meetingX = tubeLeft + meetingRatio * tubeLen;

      if (isPlayingGraham) {
        setGrahamProgress((prev) => {
          const next = prev + dt * 18;
          if (next >= 100) {
            setRingFormed(true);
            setIsPlayingGraham(false);
            return 100;
          }
          return next;
        });

        // Spawn particles
        if (Math.random() < 0.6) {
          // NH3 particle (light cyan)
          grahamParticlesRef.current.push({
            x: tubeLeft + 28,
            y: tubeY + 15 + Math.random() * (tubeH - 30),
            vx: 1.465 * (45 + Math.random() * 20),
            vy: (Math.random() - 0.5) * 20,
            type: 'nh3'
          });
        }
        if (Math.random() < 0.6) {
          // HCl particle (orange)
          grahamParticlesRef.current.push({
            x: tubeRight - 28,
            y: tubeY + 15 + Math.random() * (tubeH - 30),
            vx: -1.0 * (45 + Math.random() * 20),
            vy: (Math.random() - 0.5) * 20,
            type: 'hcl'
          });
        }
      }

      // Update & render particles
      const particles = grahamParticlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Bounce inside tube vertical walls
        if (p.y < tubeY + 8) p.y = tubeY + 8;
        if (p.y > tubeY + tubeH - 8) p.y = tubeY + tubeH - 8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.type === 'nh3' ? 3.5 : 4.5, 0, Math.PI * 2);
        ctx.fillStyle = p.type === 'nh3' ? '#38bdf8' : '#fb923c';
        ctx.shadowColor = p.type === 'nh3' ? '#0ea5e9' : '#f97316';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // White Ring of NH4Cl
      if (grahamProgress > 85 || ringFormed) {
        const ringAlpha = ringFormed ? 0.95 : (grahamProgress - 85) / 15;
        ctx.fillStyle = `rgba(255, 255, 255, ${ringAlpha})`;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 15;
        ctx.fillRect(meetingX - 8, tubeY + 2, 16, tubeH - 4);
        ctx.shadowBlur = 0;

        // Ring Label
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('NH₄Cl সাদা ধোঁয়ার বলয়', meetingX, tubeY - 14);

        // Distance indicators
        ctx.strokeStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(tubeLeft + 25, tubeY - 5);
        ctx.lineTo(meetingX - 8, tubeY - 5);
        ctx.stroke();

        ctx.strokeStyle = '#fb923c';
        ctx.beginPath();
        ctx.moveTo(meetingX + 8, tubeY - 5);
        ctx.lineTo(tubeRight - 25, tubeY - 5);
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.fillText('NH₃ পথ: ৫৯.৪ সেমি', (tubeLeft + meetingX) / 2, tubeY - 8);

        ctx.fillStyle = '#fb923c';
        ctx.fillText('HCl পথ: ৪০.৬ সেমি', (meetingX + tubeRight) / 2, tubeY - 8);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlayingGraham, grahamProgress, ringFormed]);

  // Effusion Simulation Interval
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (effusionRunning) {
      timer = setInterval(() => {
        setEffusionTime((t) => t + 0.1);

        // Spawn escaping particles based on Graham's law velocity
        const speed1 = 1 / Math.sqrt(gas1.mass);
        const speed2 = 1 / Math.sqrt(gas2.mass);

        if (Math.random() < speed1 * 1.5) {
          setEffusionCount1((c) => c + 1);
        }
        if (Math.random() < speed2 * 1.5) {
          setEffusionCount2((c) => c + 1);
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [effusionRunning, gas1.mass, gas2.mass]);

  const handleResetEffusion = () => {
    setEffusionRunning(false);
    setEffusionCount1(0);
    setEffusionCount2(0);
    setEffusionTime(0);
  };

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-6">
      {/* Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">অধ্যায় ২ ইন্টারঅ্যাক্টিভ ল্যাব</span>
          <span aria-hidden="true">·</span>
          <span>গ্রাহামের ব্যাপন সূত্র</span>
          <span aria-hidden="true">·</span>
          <span>নিঃসরণ পরীক্ষা</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              ব্যাপন ও নিঃসরণ ভার্চুয়াল ল্যাবরেটরি
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-1">
              কাচনলে অ্যামোনিয়া (NH₃) ও হাইড্রোক্লোরিক এসিডের (HCl) ব্যাপন এবং পিনহোল চেম্বারে গ্যাস নিঃসরণের আণবিক গতিবেগ বিশ্লেষণ করুন।
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
            <button
              onClick={() => setActiveMode('graham')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeMode === 'graham'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              গ্রাহামের কাচনল পরীক্ষা (NH₃ + HCl)
            </button>
            <button
              onClick={() => setActiveMode('effusion')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeMode === 'effusion'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              গ্যাস নিঃসরণ চেম্বার (Effusion)
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: Graham's Glass Tube Diffusion Experiment */}
      {activeMode === 'graham' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 space-y-4 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-cyan-400" />
                  <span>কাচনলে NH₃ ও HCl এর ব্যাপন পর্যবেক্ষণ (১০০ সেমি কাচনল)</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  হালকা NH₃ দ্রুত ব্যাপিত হয়ে প্রায় ৬০ সেমি এবং ভারী HCl ধীরগতিতে প্রায় ৪০ সেমি অতিক্রম করে
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleStartGraham}
                  disabled={isPlayingGraham}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-40 transition"
                >
                  <Play className="h-4 w-4" />
                  <span>ব্যাপন পরীক্ষা শুরু করুন</span>
                </button>

                <button
                  onClick={handleResetGraham}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>রিসেট</span>
                </button>
              </div>
            </div>

            {/* Canvas for Graham Tube */}
            <div className="relative w-full overflow-hidden bg-slate-950 rounded-xl border border-slate-800 p-2">
              <canvas
                ref={tubeCanvasRef}
                width={800}
                height={200}
                className="w-full h-auto block"
              />
            </div>

            {/* Status Feedback */}
            <div className="flex flex-wrap items-center justify-between text-xs gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${
                  ringFormed ? 'bg-emerald-400 animate-ping' : isPlayingGraham ? 'bg-amber-400 animate-pulse' : 'bg-slate-500'
                }`} />
                <span className="font-semibold text-slate-200">
                  {ringFormed
                    ? 'পরীক্ষা সমাপ্ত: HCl প্রান্তের নিকটে নিশাদলের (NH₄Cl) ঘন সাদা বলয় সৃষ্টি হয়েছে!'
                    : isPlayingGraham
                    ? `ব্যাপন চলছে: ${Math.round(grahamProgress)}% গ্যাস অতিক্রম করেছে...`
                    : 'প্রস্তুত: "ব্যাপন পরীক্ষা শুরু করুন" বাটনে ক্লিক করুন।'}
                </span>
              </div>

              <div className="font-mono text-slate-400 text-[11px]">
                বিক্রিয়া: <code className="text-cyan-300 font-bold">NH₃(g) + HCl(g) → NH₄Cl(s) [সাদা ধোঁয়া]</code>
              </div>
            </div>
          </div>

          {/* Mathematical Proof Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/90 space-y-2">
              <span className="text-xs font-bold text-cyan-400 block uppercase tracking-wider">
                ১. অ্যামোনিয়া (NH₃) এর গতিবেগ
              </span>
              <p className="text-xs text-slate-300">
                আণবিক ভর M₁ = ১৪ + (৩ × ১) = <strong>১৭</strong>। হালকা গ্যাস হওয়ায় দ্রুত ছোটে এবং কাচনলের প্রায় <strong>৫৯.৪ সেমি</strong> অতিক্রম করে।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/90 space-y-2">
              <span className="text-xs font-bold text-orange-400 block uppercase tracking-wider">
                ২. হাইড্রোক্লোরিক এসিড (HCl) এর গতিবেগ
              </span>
              <p className="text-xs text-slate-300">
                আণবিক ভর M₂ = ১ + ৩৫.৫ = <strong>৩৬.৫</strong>। ভারী গ্যাস হওয়ায় ধীরগতিতে চলে এবং মাত্র <strong>৪০.৬ সেমি</strong> অতিক্রম করে।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/90 space-y-2">
              <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">
                ৩. গ্রাহামের সূত্রের প্রমাণ
              </span>
              <code className="text-xs font-mono text-emerald-300 block">
                r₁ / r₂ = √(36.5 / 17) ≈ 1.465
              </code>
              <p className="text-[11px] text-slate-400">
                সুতরাং একই সময়ে NH₃ গ্যাস HCl এর তুলনায় ১.৪৭ গুণ বেশি দূরত্ব অতিক্রম করে।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Gas Effusion Chamber */}
      {activeMode === 'effusion' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Effusion Simulation Visual (7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950 p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Compass className="h-4 w-4 text-cyan-400" />
                  <span>পিনহোল নিঃসরণ চেম্বার (Effusion Pin-hole Simulation)</span>
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  সময়: {effusionTime.toFixed(1)}s
                </span>
              </div>

              {/* Side-by-Side Dual Chambers */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Gas 1 Chamber */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="text-sm text-white block">{gas1.formula} ({gas1.nameBn})</strong>
                      <span className="text-[11px] text-slate-400">ভর: M = {gas1.mass}</span>
                    </div>
                    <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                      নিঃসৃত: {effusionCount1}
                    </span>
                  </div>

                  {/* Gas Box */}
                  <div className="h-36 rounded-lg bg-slate-950 border border-slate-800 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-amber-400 rounded-l animate-pulse" title="পিনহোল ছিদ্রপথ" />
                    <div className="text-center space-y-1">
                      <span className="text-2xl font-bold font-mono" style={{ color: gas1.color }}>{gas1.formula}</span>
                      <span className="text-[10px] text-slate-400 block">কণার বেগ: {(1 / Math.sqrt(gas1.mass) * 100).toFixed(0)} আপেক্ষিক মান</span>
                    </div>
                  </div>
                </div>

                {/* Gas 2 Chamber */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="text-sm text-white block">{gas2.formula} ({gas2.nameBn})</strong>
                      <span className="text-[11px] text-slate-400">ভর: M = {gas2.mass}</span>
                    </div>
                    <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                      নিঃসৃত: {effusionCount2}
                    </span>
                  </div>

                  {/* Gas Box */}
                  <div className="h-36 rounded-lg bg-slate-950 border border-slate-800 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-amber-400 rounded-l animate-pulse" title="পিনহোল ছিদ্রপথ" />
                    <div className="text-center space-y-1">
                      <span className="text-2xl font-bold font-mono" style={{ color: gas2.color }}>{gas2.formula}</span>
                      <span className="text-[10px] text-slate-400 block">কণার বেগ: {(1 / Math.sqrt(gas2.mass) * 100).toFixed(0)} আপেক্ষিক মান</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEffusionRunning(!effusionRunning)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition ${
                      effusionRunning
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                    }`}
                  >
                    {effusionRunning ? 'নিঃসরণ থামান' : 'নিঃসরণ চালু করুন'}
                  </button>

                  <button
                    onClick={handleResetEffusion}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 transition"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>রিসেট</span>
                  </button>
                </div>

                <div className="text-right text-xs text-slate-400 font-mono">
                  তাত্ত্বিক বেগের অনুপাত: <strong className="text-cyan-400">{theoreticalRatio.toFixed(2)} গুণ</strong>
                </div>
              </div>
            </div>

            {/* Gas Selection & Calculations (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Select Gas 1 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 space-y-2">
                <label className="text-xs font-bold text-white block">
                  ১ম গ্যাস নির্বাচন করুন:
                </label>
                <select
                  value={selectedGas1}
                  onChange={(e) => {
                    setSelectedGas1(e.target.value);
                    handleResetEffusion();
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200"
                >
                  {Object.entries(gases).map(([key, item]) => (
                    <option key={key} value={key}>
                      {item.formula} — {item.nameBn} (M = {item.mass})
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Gas 2 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 space-y-2">
                <label className="text-xs font-bold text-white block">
                  ২য় গ্যাস নির্বাচন করুন (তুলনার জন্য):
                </label>
                <select
                  value={selectedGas2}
                  onChange={(e) => {
                    setSelectedGas2(e.target.value);
                    handleResetEffusion();
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200"
                >
                  {Object.entries(gases).map(([key, item]) => (
                    <option key={key} value={key}>
                      {item.formula} — {item.nameBn} (M = {item.mass})
                    </option>
                  ))}
                </select>
              </div>

              {/* Theoretical Analysis Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 space-y-3">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wider">
                  <Calculator className="h-4 w-4 text-cyan-400" />
                  <span>গ্রাহামের নিঃসরণ সূত্র বিশ্লেষণ</span>
                </h4>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <p>
                    {gas1.formula} এর আণবিক ভর: <strong>M₁ = {gas1.mass}</strong>
                  </p>
                  <p>
                    {gas2.formula} এর আণবিক ভর: <strong>M₂ = {gas2.mass}</strong>
                  </p>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-cyan-300 space-y-1">
                    <div>r₁ / r₂ = √(M₂ / M₁)</div>
                    <div>r₁ / r₂ = √({gas2.mass} / {gas1.mass}) = <strong>{theoreticalRatio.toFixed(3)}</strong></div>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {theoreticalRatio > 1
                      ? `যেহেতু ${gas1.formula} এর আণবিক ভর কম, তাই এটি ${gas2.formula} এর চেয়ে ${theoreticalRatio.toFixed(2)} গুণ দ্রুত নিঃসরণ হবে।`
                      : theoreticalRatio < 1
                      ? `যেহেতু ${gas2.formula} এর আণবিক ভর কম, তাই এটি ${gas1.formula} এর চেয়ে ${(1 / theoreticalRatio).toFixed(2)} গুণ দ্রুত নিঃসরণ হবে।`
                      : 'উভয় গ্যাসের আণবিক ভর সমান হওয়ায় নিঃসরণ হার সমান হবে।'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
