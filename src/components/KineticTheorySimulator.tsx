import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Flame, 
  Snowflake, 
  Gauge, 
  Layers, 
  Zap, 
  Compass,
  ArrowRight,
  Info
} from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  isElectron?: boolean;
}

export const KineticTheorySimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<'solid' | 'liquid' | 'gas' | 'plasma'>('solid');
  const [temperature, setTemperature] = useState<number>(-20); // in °C
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [particleCount, setParticleCount] = useState<number>(64);

  // References for animation
  const particlesRef = useRef<Particle[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  // Initialize particles based on selected state
  const initParticles = (targetState: 'solid' | 'liquid' | 'gas' | 'plasma', currentTemp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.width;
    const height = canvas.height;

    const newParticles: Particle[] = [];

    if (targetState === 'solid') {
      const rows = 8;
      const cols = 8;
      const spacingX = 32;
      const spacingY = 32;
      const startX = (width - (cols - 1) * spacingX) / 2;
      const startY = height - 50 - (rows - 1) * spacingY;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = startX + c * spacingX;
          const by = startY + r * spacingY;
          newParticles.push({
            x: bx,
            y: by,
            baseX: bx,
            baseY: by,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: 8.5,
            color: '#38bdf8' // cyan
          });
        }
      }
    } else if (targetState === 'liquid') {
      const count = 70;
      for (let i = 0; i < count; i++) {
        const x = 50 + Math.random() * (width - 100);
        const y = height - 160 + Math.random() * 120;
        newParticles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 1.8,
          vy: (Math.random() - 0.5) * 1.8,
          radius: 8,
          color: '#0284c7' // dark cyan/blue
        });
      }
    } else if (targetState === 'gas') {
      const count = 50;
      for (let i = 0; i < count; i++) {
        const x = 30 + Math.random() * (width - 60);
        const y = 30 + Math.random() * (height - 60);
        const speed = 3.5;
        newParticles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * speed * 2,
          vy: (Math.random() - 0.5) * speed * 2,
          radius: 7,
          color: '#fbbf24' // amber
        });
      }
    } else if (targetState === 'plasma') {
      // Positive ions + fast buzzing free electrons
      const ionCount = 35;
      for (let i = 0; i < ionCount; i++) {
        const x = 30 + Math.random() * (width - 60);
        const y = 30 + Math.random() * (height - 60);
        newParticles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          radius: 9,
          color: '#f43f5e' // glowing red/pink ion
        });
      }
      const electronCount = 45;
      for (let i = 0; i < electronCount; i++) {
        const x = 30 + Math.random() * (width - 60);
        const y = 30 + Math.random() * (height - 60);
        newParticles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 9,
          vy: (Math.random() - 0.5) * 9,
          radius: 3.5,
          color: '#e0e7ff', // white-blue electron
          isElectron: true
        });
      }
    }

    particlesRef.current = newParticles;
    setParticleCount(newParticles.length);
  };

  // Change state and set default appropriate temperature
  const handleStateChange = (newState: 'solid' | 'liquid' | 'gas' | 'plasma') => {
    setState(newState);
    if (newState === 'solid') setTemperature(-15);
    else if (newState === 'liquid') setTemperature(40);
    else if (newState === 'gas') setTemperature(130);
    else if (newState === 'plasma') setTemperature(240);
  };

  // Synchronize state when temperature slider changes
  const handleTemperatureChange = (newTemp: number) => {
    setTemperature(newTemp);
    if (newTemp <= 0 && state !== 'solid') {
      setState('solid');
    } else if (newTemp > 0 && newTemp < 100 && state !== 'liquid') {
      setState('liquid');
    } else if (newTemp >= 100 && newTemp < 200 && state !== 'gas') {
      setState('gas');
    } else if (newTemp >= 200 && state !== 'plasma') {
      setState('plasma');
    }
  };

  // Re-initialize when state changes
  useEffect(() => {
    initParticles(state, temperature);
  }, [state]);

  // Main animation physics loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const width = canvas.width;
      const height = canvas.height;

      // Dark background
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      // Draw container boundary
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 3;
      ctx.strokeRect(10, 10, width - 20, height - 20);

      // Draw subtle grid
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 1;
      for (let x = 30; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 10);
        ctx.lineTo(x, height - 10);
        ctx.stroke();
      }
      for (let y = 30; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(10, y);
        ctx.lineTo(width - 10, y);
        ctx.stroke();
      }

      // Physics factor based on Kelvin
      const kelvin = temperature + 273.15;
      const speedFactor = Math.sqrt(Math.max(10, kelvin) / 273.15);

      const particles = particlesRef.current;

      if (isRunning) {
        // Update physics
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          if (state === 'solid') {
            // Lattice vibration: spring force pulling back to base position
            const dx = p.x - p.baseX;
            const dy = p.y - p.baseY;
            const k = 14; // spring stiffness
            const ax = -k * dx;
            const ay = -k * dy;

            p.vx += ax * dt;
            p.vy += ay * dt;

            // Random thermal kick
            const thermalNoise = 0.8 * speedFactor;
            p.vx += (Math.random() - 0.5) * thermalNoise;
            p.vy += (Math.random() - 0.5) * thermalNoise;

            // Damping
            p.vx *= 0.94;
            p.vy *= 0.94;

            p.x += p.vx;
            p.y += p.vy;
          } else if (state === 'liquid') {
            // Gravity pulls slightly down
            p.vy += 2.5 * dt;

            // Thermal velocity
            p.x += p.vx * speedFactor;
            p.y += p.vy * speedFactor;

            // Container bounce
            const floor = height - 25;
            const left = 20;
            const right = width - 20;
            const liquidCeiling = height - 180;

            if (p.x - p.radius < left) {
              p.x = left + p.radius;
              p.vx = -p.vx * 0.7;
            } else if (p.x + p.radius > right) {
              p.x = right - p.radius;
              p.vx = -p.vx * 0.7;
            }

            if (p.y + p.radius > floor) {
              p.y = floor - p.radius;
              p.vy = -p.vy * 0.5;
            } else if (p.y - p.radius < liquidCeiling) {
              p.y = liquidCeiling + p.radius;
              p.vy = -p.vy * 0.7;
            }

            // Neighbor cohesive force simulation
            p.vx += (Math.random() - 0.5) * 0.4;
            p.vy += (Math.random() - 0.5) * 0.4;
            p.vx *= 0.98;
            p.vy *= 0.98;
          } else if (state === 'gas' || state === 'plasma') {
            // Free rapid flight and bounce
            p.x += p.vx * speedFactor;
            p.y += p.vy * speedFactor;

            const minX = 20 + p.radius;
            const maxX = width - 20 - p.radius;
            const minY = 20 + p.radius;
            const maxY = height - 20 - p.radius;

            if (p.x < minX) {
              p.x = minX;
              p.vx = Math.abs(p.vx);
            } else if (p.x > maxX) {
              p.x = maxX;
              p.vx = -Math.abs(p.vx);
            }

            if (p.y < minY) {
              p.y = minY;
              p.vy = Math.abs(p.vy);
            } else if (p.y > maxY) {
              p.y = maxY;
              p.vy = -Math.abs(p.vy);
            }
          }
        }
      }

      // Draw intermolecular bonds in solid
      if (state === 'solid') {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1.2;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 38) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw plasma electric discharges
      if (state === 'plasma' && Math.random() < 0.15) {
        ctx.strokeStyle = 'rgba(244, 63, 94, 0.4)';
        ctx.lineWidth = 1.5;
        const idx1 = Math.floor(Math.random() * particles.length);
        const idx2 = Math.floor(Math.random() * particles.length);
        if (particles[idx1] && particles[idx2]) {
          ctx.beginPath();
          ctx.moveTo(particles[idx1].x, particles[idx1].y);
          const midX = (particles[idx1].x + particles[idx2].x) / 2 + (Math.random() - 0.5) * 20;
          const midY = (particles[idx1].y + particles[idx2].y) / 2 + (Math.random() - 0.5) * 20;
          ctx.lineTo(midX, midY);
          ctx.lineTo(particles[idx2].x, particles[idx2].y);
          ctx.stroke();
        }
      }

      // Draw particles with glowing radial gradients
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.isElectron) {
          ctx.fillStyle = '#67e8f9';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 6;
        } else if (state === 'plasma') {
          ctx.fillStyle = '#f43f5e';
          ctx.shadowColor = '#e11d48';
          ctx.shadowBlur = 10;
        } else if (state === 'gas') {
          ctx.fillStyle = '#f59e0b';
          ctx.shadowColor = '#d97706';
          ctx.shadowBlur = 5;
        } else {
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 4;
        }

        ctx.fill();

        // Inner highlight for 3D sphere look
        if (p.radius > 5) {
          ctx.beginPath();
          ctx.arc(p.x - p.radius * 0.3, p.y - p.radius * 0.3, p.radius * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.fill();
        }

        ctx.restore();
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [state, temperature, isRunning]);

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-6">
      {/* Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">অধ্যায় ২ ইন্টারঅ্যাক্টিভ ল্যাব</span>
          <span aria-hidden="true">·</span>
          <span>কণার গতিতত্ত্ব</span>
          <span aria-hidden="true">·</span>
          <span>পদার্থের ৪টি অবস্থা</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              কণার গতিতত্ত্ব ও পদার্থের অবস্থা সিমুলেটর
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-1">
              তাপমাত্রা ও শক্তি পরিবর্তনের সাথে কঠিনের ক্রিস্টাল ল্যাটিস, তরলের সান্দ্র প্রবাহ, গ্যাসের বিশৃঙ্খল সংঘর্ষ এবং প্লাজমার আয়নিত রূপ পর্যবেক্ষণ করুন।
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2 rounded-xl text-xs">
            <span className="text-slate-400 font-mono">তাপমাত্রা:</span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold font-mono text-sm">
              {temperature}°C ({temperature + 273.15} K)
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Canvas & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Physics Particle Canvas (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950 p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl min-h-[480px]">
          
          {/* Top Canvas Bar */}
          <div className="w-full mb-3 flex items-center justify-between text-xs z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition ${
                  isRunning 
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {isRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                <span>{isRunning ? 'সচল (Running)' : 'স্থগিত (Paused)'}</span>
              </button>

              <button
                onClick={() => initParticles(state, temperature)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition text-xs"
                title="পুনরায় সাজান"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>রিসেট</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                state === 'solid'
                  ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                  : state === 'liquid'
                  ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                  : state === 'gas'
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/30 animate-pulse'
              }`}>
                ● অবস্থা: {
                  state === 'solid' ? 'কঠিন (Solid)' :
                  state === 'liquid' ? 'তরল (Liquid)' :
                  state === 'gas' ? 'গ্যাসীয় (Gas)' : 'প্লাজমা (Plasma)'
                }
              </span>
            </div>
          </div>

          {/* HTML5 Canvas */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl overflow-hidden border border-slate-800/80 shadow-inner bg-slate-950">
            <canvas
              ref={canvasRef}
              width={500}
              height={375}
              className="w-full h-full block"
            />
          </div>

          {/* Canvas Bottom Legend Bar */}
          <div className="w-full mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">আন্তঃআণবিক আকর্ষণ:</span>
              <strong className="text-cyan-400">
                {state === 'solid' ? 'সর্বোচ্চ (তীব্র)' : state === 'liquid' ? 'মাঝারি' : state === 'gas' ? 'প্রায় শূন্য' : 'নগণ্য (আয়নিত)'}
              </strong>
            </div>
            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">আন্তঃআণবিক দূরত্ব:</span>
              <strong className="text-amber-400">
                {state === 'solid' ? 'ন্যূনতম (ঠাসাঠাসি)' : state === 'liquid' ? 'স্বল্প ব্যবধান' : state === 'gas' ? 'অত্যধিক দূরত্ব' : 'অতি দূরবর্তী'}
              </strong>
            </div>
            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">কণার গতি প্রকৃতি:</span>
              <strong className="text-emerald-400">
                {state === 'solid' ? 'স্বস্থানে কম্পন' : state === 'liquid' ? 'গড়াগড়ি ও প্রবাহ' : state === 'gas' ? 'বিশৃঙ্খল দ্রুত গতি' : 'তীব্র আয়নিক গতি'}
              </strong>
            </div>
            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">মোট কণা:</span>
              <strong className="text-purple-400 font-mono">{particleCount}টি কণা</strong>
            </div>
          </div>
        </div>

        {/* Right: Controls & Concept Explanations (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* State Selector Buttons */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="h-4 w-4 text-cyan-400" />
              <span>অবস্থা নির্বাচন করুন (Select State of Matter)</span>
            </h3>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleStateChange('solid')}
                className={`p-3 rounded-xl border text-left transition flex flex-col gap-1 ${
                  state === 'solid'
                    ? 'bg-blue-500/20 text-white border-blue-400 shadow-md shadow-blue-500/20'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">১. কঠিন (Solid)</span>
                  <Snowflake className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-[11px] text-slate-400">নির্দিষ্ট আকার ও আয়তন আছে</span>
              </button>

              <button
                onClick={() => handleStateChange('liquid')}
                className={`p-3 rounded-xl border text-left transition flex flex-col gap-1 ${
                  state === 'liquid'
                    ? 'bg-cyan-500/20 text-white border-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">২. তরল (Liquid)</span>
                  <Compass className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-[11px] text-slate-400">নির্দিষ্ট আয়তন আছে, আকার নেই</span>
              </button>

              <button
                onClick={() => handleStateChange('gas')}
                className={`p-3 rounded-xl border text-left transition flex flex-col gap-1 ${
                  state === 'gas'
                    ? 'bg-amber-500/20 text-white border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">৩. গ্যাস (Gas)</span>
                  <Flame className="h-4 w-4 text-amber-400" />
                </div>
                <span className="text-[11px] text-slate-400">আকার বা আয়তন কোনোটিই নির্দিষ্ট নয়</span>
              </button>

              <button
                onClick={() => handleStateChange('plasma')}
                className={`p-3 rounded-xl border text-left transition flex flex-col gap-1 ${
                  state === 'plasma'
                    ? 'bg-rose-500/20 text-white border-rose-400 shadow-md shadow-rose-500/20'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">৪. প্লাজমা (Plasma)</span>
                  <Zap className="h-4 w-4 text-rose-400" />
                </div>
                <span className="text-[11px] text-slate-400">উচ্চ তাপমাত্রায় আয়নিত গ্যাস</span>
              </button>
            </div>
          </div>

          {/* Thermal Energy & Temperature Slider */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Gauge className="h-4 w-4 text-amber-400" />
                <span>তাপমাত্রা নিয়ন্ত্রণ (Temperature Slider)</span>
              </h3>
              <span className="font-mono text-cyan-400 font-bold text-xs">
                {temperature}°C
              </span>
            </div>

            <div className="space-y-2">
              <input
                type="range"
                min={-50}
                max={250}
                step={5}
                value={temperature}
                onChange={(e) => handleTemperatureChange(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>-৫০°C (হিমায়িত)</span>
                <span>০°C (গলনাঙ্ক)</span>
                <span>১০০°C (স্ফুটনাঙ্ক)</span>
                <span>২৫০°C (প্লাজমা)</span>
              </div>
            </div>

            {/* Quick Thermal Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleTemperatureChange(-20)}
                className="flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-700 bg-slate-950 text-xs text-blue-300 hover:bg-slate-800 transition"
              >
                <Snowflake className="h-3.5 w-3.5" />
                <span>শীতলীকরণ (-20°C)</span>
              </button>
              <button
                onClick={() => handleTemperatureChange(25)}
                className="flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-700 bg-slate-950 text-xs text-cyan-300 hover:bg-slate-800 transition"
              >
                <span>কক্ষ তাপমাত্রা (25°C)</span>
              </button>
              <button
                onClick={() => handleTemperatureChange(140)}
                className="flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-700 bg-slate-950 text-xs text-amber-300 hover:bg-slate-800 transition"
              >
                <Flame className="h-3.5 w-3.5" />
                <span>উত্তপ্ত (140°C)</span>
              </button>
            </div>
          </div>

          {/* Kinetic Theory Concepts Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Info className="h-4 w-4 text-cyan-400" />
              <span>কণার গতিতত্ত্বের বৈজ্ঞানিক ব্যাখ্যা</span>
            </h3>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              {state === 'solid' && (
                <><strong>কঠিন অবস্থা:</strong> কণাগুলোর আকর্ষণ বল অত্যধিক তীব্র। কণাগুলো নির্দিষ্ট অবস্থানে কেবল কাঁপতে থাকে। তাপমাত্রা বাড়ালে কণাগুলোর কম্পন বিস্তার বাড়ে এবং একপর্যায়ে ল্যাটিস কাঠামো ভেঙে তরলে পরিণত হয় (গলন)।</>
              )}
              {state === 'liquid' && (
                <><strong>তরল অবস্থা:</strong> আন্তঃআণবিক আকর্ষণ বল কিছুটা শিথিল। কণাগুলো পরস্পরের সাথে লেগে থাকলেও স্থান পরিবর্তন করতে পারে, যার ফলে তরল প্রবাহিত হয় ও পাত্রের আকার ধারণ করে।</>
              )}
              {state === 'gas' && (
                <><strong>গ্যাসীয় অবস্থা:</strong> কণাগুলোর গতিশক্তি আকর্ষণ বলের চেয়ে অনেক বেশি। কণাগুলো প্রচণ্ড বেগে চারদিকে ছুটে চলে এবং পাত্রের সম্পূর্ণ আয়তন দখল করে দেয়ালে ধাক্কা দিয়ে চাপ সৃষ্টি করে।</>
              )}
              {state === 'plasma' && (
                <><strong>প্লাজমা অবস্থা:</strong> অতি উচ্চ তাপমাত্রায় পরমাণুগুলোর ইলেকট্রন বন্ধন ভেঙে গিয়ে ধনাত্মক আয়ন ও মুক্ত ইলেকট্রন তৈরি হয়। এই আয়নিত গ্যাস বিদ্যুৎ ও চৌম্বক ক্ষেত্রের প্রতি সংবেদনশীল।</>
              )}
            </p>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>গতিশক্তি সূত্র:</span>
                <span className="font-mono text-cyan-300 font-bold">Eₖ = ½mv² ∝ T (Kelvin)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>বর্তমান শক্তি সূচক:</span>
                <span className="font-mono text-emerald-400 font-bold">
                  {((temperature + 273.15) / 2.73).toFixed(0)}% তাপীয় তীব্রতা
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
