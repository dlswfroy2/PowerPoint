import React, { useState, useEffect, useRef } from 'react';
import { 
  Waves, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Play, 
  Pause, 
  Sliders, 
  Activity, 
  Radio, 
  Compass, 
  ShieldAlert, 
  Sparkles,
  Info
} from 'lucide-react';

interface WaveSoundLabProps {
  defaultTab?: 'waveSimulator' | 'echo' | 'audioSpectrum';
}

export const WaveSoundLab: React.FC<WaveSoundLabProps> = ({ defaultTab = 'waveSimulator' }) => {
  const [activeTab, setActiveTab] = useState<'waveSimulator' | 'echo' | 'audioSpectrum'>(defaultTab);

  // Tab 1: Wave Simulator State
  const [waveType, setWaveType] = useState<'transverse' | 'longitudinal'>('transverse');
  const [amplitude, setAmplitude] = useState<number>(30); // pixels
  const [frequency, setFrequency] = useState<number>(2); // Hz
  const [waveSpeed, setWaveSpeed] = useState<number>(100); // px/sec
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  // Calculated values
  const wavelength = waveSpeed / frequency; // v = f * lambda => lambda = v / f
  const timePeriod = 1 / frequency;

  // Animation loop for wave
  useEffect(() => {
    let phase = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (isPlaying) {
        phase += 2 * Math.PI * frequency * dt;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Draw background grid lines
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += 40) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += 40) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Center reference baseline
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      if (waveType === 'transverse') {
        // Draw Transverse Sine Wave
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 3.5;
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 10;
        ctx.beginPath();

        for (let x = 0; x < width; x++) {
          const k = (2 * Math.PI) / wavelength;
          const y = centerY - amplitude * Math.sin(k * x - phase);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw particle spheres on the wave
        const numParticles = 16;
        for (let i = 0; i <= numParticles; i++) {
          const px = (width / numParticles) * i;
          const k = (2 * Math.PI) / wavelength;
          const py = centerY - amplitude * Math.sin(k * px - phase);

          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, 2 * Math.PI);
          ctx.fill();

          // Particle vibration vertical guideline
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px, centerY - amplitude);
          ctx.lineTo(px, centerY + amplitude);
          ctx.stroke();
        }
      } else {
        // Draw Longitudinal Wave (Spring / Sound compression & rarefaction)
        const numRows = 7;
        const numColumns = 60;
        const k = (2 * Math.PI) / wavelength;

        for (let r = 0; r < numRows; r++) {
          const rowY = centerY - 60 + r * 20;
          for (let c = 0; c < numColumns; c++) {
            const baseX = (width / numColumns) * c;
            // Displacement along X axis
            const displacement = amplitude * 0.7 * Math.sin(k * baseX - phase);
            const actualX = baseX + displacement;

            // Density based color
            const slope = Math.cos(k * baseX - phase);
            const isCompressed = slope < 0;

            ctx.fillStyle = isCompressed ? '#ef4444' : '#38bdf8';
            ctx.beginPath();
            ctx.arc(actualX, rowY, isCompressed ? 3.5 : 2.5, 0, 2 * Math.PI);
            ctx.fill();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [waveType, amplitude, frequency, waveSpeed, isPlaying, wavelength]);

  // Tab 2: Echo & Sonar Calculator State
  const [distance, setDistance] = useState<number>(34.4); // meters
  const [medium, setMedium] = useState<'air' | 'water' | 'steel'>('air');
  const [temperature, setTemperature] = useState<number>(20); // Celsius for air

  // Speed in medium
  const getSpeed = () => {
    if (medium === 'water') return 1498;
    if (medium === 'steel') return 5130;
    // Air speed formula: v = 332 + 0.6 * T
    return Math.round(332 + 0.6 * temperature);
  };

  const soundSpeed = getSpeed();
  const timeTaken = (2 * distance) / soundSpeed; // round trip t = 2d / v
  const canHearEcho = timeTaken >= 0.1;
  const minEchoDistance = (soundSpeed * 0.1) / 2;

  // Tab 3: Sound Spectrum State
  const [testFrequency, setTestFrequency] = useState<number>(1000); // Hz
  const [decibelLevel, setDecibelLevel] = useState<number>(60); // dB

  const getAudioCategory = (f: number) => {
    if (f < 20) return { label: 'শব্দেতর বা ইনফ্রাসাউন্ড (Infrasonic)', color: 'text-purple-400', desc: 'মানুষের শ্রবণের বাইরে। হাতি, তিমি ও ভূমিকম্পে উৎপন্ন হয়।' };
    if (f > 20000) return { label: 'শব্দোত্তর বা আল্ট্রাসাউন্ড (Ultrasonic)', color: 'text-amber-400', desc: 'মানুষের শ্রবণের বাইরে। বাদুড়, ডলফিন ও চিকিৎসায় আল্ট্রাসনোগ্রাফিতে ব্যবহৃত হয়।' };
    return { label: 'শ্রবণযোগ্য শব্দ (Audible Sound)', color: 'text-emerald-400', desc: 'মানব কানের স্বাভাবিক শ্রবণসীমা (২০ Hz থেকে ২০,০০০ Hz)।' };
  };

  const spectrumInfo = getAudioCategory(testFrequency);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 space-y-6 select-none animate-fadeIn">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/30 border border-slate-800 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              পদার্থবিজ্ঞান ৭ম অধ্যায়
            </span>
            <span className="text-xs text-slate-400 font-mono">ভৌত পরীক্ষাগার ও সিমুলেটর</span>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <Waves className="h-6 w-6 text-cyan-400" />
            <span>তরঙ্গ ও শব্দ: ভার্চুয়াল অ্যাকোস্টিক ল্যাব</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            অনুপ্রস্থ ও অনুদৈর্ঘ্য তরঙ্গ প্রবাহ, সমীকরণ v = fλ, প্রতিধ্বনি (Echo) ও সোনার (SONAR) অনুসন্ধান
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('waveSimulator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'waveSimulator'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Waves className="h-4 w-4" />
            <span>তরঙ্গ সঞ্চালন ল্যাব</span>
          </button>
          <button
            onClick={() => setActiveTab('echo')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'echo'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Radio className="h-4 w-4" />
            <span>প্রতিধ্বনি ও সোনার</span>
          </button>
          <button
            onClick={() => setActiveTab('audioSpectrum')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'audioSpectrum'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Volume2 className="h-4 w-4" />
            <span>কম্পাঙ্ক ও তীব্রতা</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: WAVE PROPAGATION SIMULATOR                                         */}
      {/* ========================================================================= */}
      {activeTab === 'waveSimulator' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Canvas Display */}
          <div className="lg:col-span-2 rounded-2xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">লাইভ তরঙ্গ ক্যানভাস</span>
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 font-mono text-[11px] border border-cyan-800/40">
                  {waveType === 'transverse' ? 'অনুপ্রস্থ তরঙ্গ (Transverse)' : 'অনুদৈর্ঘ্য তরঙ্গ (Longitudinal)'}
                </span>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5 text-amber-400" /> : <Play className="h-3.5 w-3.5 text-emerald-400" />}
                <span>{isPlaying ? 'পজ' : 'প্লে'}</span>
              </button>
            </div>

            {/* Canvas */}
            <div className="my-4 rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={650}
                height={260}
                className="w-full h-auto max-h-[300px]"
              />
            </div>

            {/* Live Metrics Display */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">তরঙ্গবেগ (v)</span>
                <span className="font-mono font-bold text-cyan-400 text-sm">{waveSpeed} px/s</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">কম্পাঙ্ক (f)</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{frequency} Hz</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">তরঙ্গদৈর্ঘ্য (λ)</span>
                <span className="font-mono font-bold text-emerald-400 text-sm">{wavelength.toFixed(1)} px</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">পর্যায়কাল (T)</span>
                <span className="font-mono font-bold text-purple-400 text-sm">{timePeriod.toFixed(2)} s</span>
              </div>
            </div>
          </div>

          {/* Right Controls */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-5 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sliders className="h-4 w-4 text-cyan-400" />
              <span>তরঙ্গ প্যারামিটার নিয়ন্ত্রণ</span>
            </h3>

            {/* Wave Type Switch */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">তরঙ্গের ধরন:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setWaveType('transverse')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
                    waveType === 'transverse'
                      ? 'bg-cyan-500 text-slate-950 shadow'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  অনুপ্রস্থ (আড়) তরঙ্গ
                </button>
                <button
                  onClick={() => setWaveType('longitudinal')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
                    waveType === 'longitudinal'
                      ? 'bg-cyan-500 text-slate-950 shadow'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  অনুদৈর্ঘ্য (দীঘল) তরঙ্গ
                </button>
              </div>
            </div>

            {/* Amplitude Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">বিস্তার (Amplitude, A):</span>
                <span className="font-mono font-bold text-cyan-400">{amplitude} px</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                value={amplitude}
                onChange={(e) => setAmplitude(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <span className="text-[10px] text-slate-500">সাম্যাবস্থা থেকে কণার যেকোনো একদিকে সর্বাধিক সরণ।</span>
            </div>

            {/* Frequency Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">কম্পাঙ্ক (Frequency, f):</span>
                <span className="font-mono font-bold text-amber-400">{frequency} Hz</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.5"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <span className="text-[10px] text-slate-500">প্রতি সেকেন্ডে পূর্ণ স্পন্দনের সংখ্যা।</span>
            </div>

            {/* Wave Speed Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">তরঙ্গবেগ (Velocity, v):</span>
                <span className="font-mono font-bold text-emerald-400">{waveSpeed} px/s</span>
              </div>
              <input
                type="range"
                min="50"
                max="250"
                step="10"
                value={waveSpeed}
                onChange={(e) => setWaveSpeed(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <span className="text-[10px] text-slate-500">তরঙ্গ নির্দিষ্ট দিকে একক সময়ে যে দূরত্ব অতিক্রম করে।</span>
            </div>

            {/* Formula Callout */}
            <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-800/40 text-xs text-cyan-200 space-y-1">
              <span className="font-bold block text-cyan-300">মূল তরঙ্গ সমীকরণ:</span>
              <p className="font-mono font-bold text-sm">v = f · λ ⟹ λ = v / f</p>
              <p className="text-[11px] text-slate-300">
                অতএব: {waveSpeed} = {frequency} × {wavelength.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ECHO & SONAR REFLECTION CALCULATOR                                  */}
      {/* ========================================================================= */}
      {activeTab === 'echo' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Visual Simulation */}
          <div className="lg:col-span-2 rounded-2xl bg-slate-900 border border-slate-800 p-5 flex flex-col justify-between shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-bold text-white">প্রতিধ্বনি ও প্রতিফলন অ্যানিমেশন</span>
              <span className={`px-2.5 py-0.5 rounded font-bold text-xs ${
                canHearEcho ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}>
                {canHearEcho ? '✓ প্রতিধ্বনি স্পষ্টভাবে শোনা যাবে' : '✗ প্রতিধ্বনি মূল শব্দের সাথে মিশে যাবে'}
              </span>
            </div>

            {/* Interactive Visual Arena */}
            <div className="relative h-56 bg-slate-950 rounded-xl border border-slate-800 flex items-center px-6 overflow-hidden">
              {/* Sound Source */}
              <div className="flex flex-col items-center z-10">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Volume2 className="h-6 w-6 text-cyan-400 animate-pulse" />
                </div>
                <span className="text-[10px] text-cyan-300 mt-1 font-bold">শব্দোৎস (উৎস)</span>
              </div>

              {/* Sound Waves traversing */}
              <div className="flex-1 mx-4 relative flex items-center">
                <div className="w-full h-0.5 bg-slate-800"></div>
                {/* Outgoing Wave Arc */}
                <div className="absolute left-1/4 h-24 w-12 border-r-2 border-cyan-400 rounded-r-full animate-ping opacity-60"></div>
                {/* Returning Wave Arc */}
                <div className="absolute right-1/4 h-24 w-12 border-l-2 border-amber-400 rounded-l-full animate-pulse"></div>

                <div className="absolute inset-x-0 -top-6 text-center">
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    দূরত্ব d = {distance.toFixed(1)} মিটার
                  </span>
                </div>
              </div>

              {/* Reflecting Barrier / Wall */}
              <div className="flex flex-col items-center z-10">
                <div className="w-6 h-36 rounded-md bg-gradient-to-b from-slate-600 via-slate-500 to-slate-700 border-2 border-slate-400 shadow-md"></div>
                <span className="text-[10px] text-slate-300 mt-1 font-bold">প্রতিফলক প্রাচীর</span>
              </div>
            </div>

            {/* Real-time Math Breakdown */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">শব্দের বেগ (v)</span>
                <span className="font-mono font-bold text-white text-base">{soundSpeed} m/s</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">{medium === 'air' ? `${temperature}°C বাতাস` : medium === 'water' ? 'বিশুদ্ধ পানি' : 'ইস্পাত'}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">যাতায়াতে মোট সময় (t)</span>
                <span className={`font-mono font-bold text-base ${canHearEcho ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {timeTaken.toFixed(3)} s
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">স্থায়িত্বকাল সীমা: 0.100 s</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">ন্যূনতম দূরত্ব (d_min)</span>
                <span className="font-mono font-bold text-amber-400 text-base">{minEchoDistance.toFixed(1)} m</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">d = (v × 0.1) / 2</span>
              </div>
            </div>
          </div>

          {/* Right Parameters Control */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-5 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Compass className="h-4 w-4 text-cyan-400" />
              <span>প্রতিধ্বনি পরিবেশ নিয়ন্ত্রণ</span>
            </h3>

            {/* Distance Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">উৎস ও প্রাচীরের দূরত্ব (d):</span>
                <span className="font-mono font-bold text-cyan-400">{distance.toFixed(1)} m</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="0.5"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <span className="text-[10px] text-slate-400">শব্দ যাওয়া এবং আসায় মোট পথ = 2d = {(2 * distance).toFixed(1)} মিটার।</span>
            </div>

            {/* Medium Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">মাধ্যম নির্বাচন:</label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => setMedium('air')}
                  className={`py-2 px-1 rounded-xl text-xs font-bold transition text-center ${
                    medium === 'air' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  বায়ু
                </button>
                <button
                  onClick={() => setMedium('water')}
                  className={`py-2 px-1 rounded-xl text-xs font-bold transition text-center ${
                    medium === 'water' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  পানি (1498 m/s)
                </button>
                <button
                  onClick={() => setMedium('steel')}
                  className={`py-2 px-1 rounded-xl text-xs font-bold transition text-center ${
                    medium === 'steel' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  ইস্পাত (5130 m/s)
                </button>
              </div>
            </div>

            {/* Air Temperature (if medium is air) */}
            {medium === 'air' && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-semibold">বায়ুর তাপমাত্রা (T):</span>
                  <span className="font-mono font-bold text-amber-400">{temperature}°C</span>
                </div>
                <input
                  type="range"
                  min="-10"
                  max="45"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <span className="text-[10px] text-slate-500">v = ৩৩২ + (০.৬ × {temperature}) = {soundSpeed} m/s</span>
              </div>
            )}

            {/* Explanation box */}
            <div className={`p-3 rounded-xl border text-xs space-y-1 ${
              canHearEcho ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-200' : 'bg-rose-950/30 border-rose-800/40 text-rose-200'
            }`}>
              <span className="font-bold block">প্রতিধ্বনি বৈজ্ঞানিক সিদ্ধান্ত:</span>
              <p className="text-[11px] leading-relaxed">
                {canHearEcho
                  ? `শব্দ ফিরে আসতে ${timeTaken.toFixed(3)} সেকেন্ড সময় নিচ্ছে, যা শব্দানুভূতির স্থায়িত্বকাল ০.১ সেকেন্ডের চেয়ে বেশি। ফলে স্পষ্ট প্রতিধ্বনি শোনা যাবে।`
                  : `শব্দ ফিরে আসতে মাত্র ${timeTaken.toFixed(3)} সেকেন্ড সময় নিচ্ছে, যা ০.১ সেকেন্ডের কম। ফলে প্রতিফলিত শব্দ মূল শব্দের সাথে মিশে গিয়ে একাকার হয়ে যাবে।`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: FREQUENCY SPECTRUM & DECIBEL NOISE ANALYZER                        */}
      {/* ========================================================================= */}
      {activeTab === 'audioSpectrum' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Frequency Spectrum Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-bold text-white text-sm flex items-center gap-2">
                <Radio className="h-4 w-4 text-cyan-400" />
                <span>শব্দের কম্পাঙ্ক ও শ্রাব্যতার পাল্লা</span>
              </span>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                {testFrequency} Hz
              </span>
            </div>

            <div className="space-y-3">
              <input
                type="range"
                min="5"
                max="50000"
                step="50"
                value={testFrequency}
                onChange={(e) => setTestFrequency(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>০ Hz</span>
                <span>২০ Hz (শ্রাব্য শুরু)</span>
                <span>২০ kHz (শ্রাব্য শেষ)</span>
                <span>৫০ kHz+</span>
              </div>
            </div>

            {/* Classification banner */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className={`text-xs font-bold block ${spectrumInfo.color}`}>
                {spectrumInfo.label}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {spectrumInfo.desc}
              </p>
            </div>

            {/* Animal Auditory Ranges */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-300 block">বিভিন্ন প্রাণীর শ্রবণসীমা:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block">মানুষ:</strong>
                  <span className="text-cyan-400 font-mono text-[11px]">20 Hz - 20,000 Hz</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block">বাদুড়:</strong>
                  <span className="text-amber-400 font-mono text-[11px]">1,000 Hz - 1,20,000 Hz</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block">ডলফিন:</strong>
                  <span className="text-emerald-400 font-mono text-[11px]">100 Hz - 1,50,000 Hz</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-white block">হাতি:</strong>
                  <span className="text-purple-400 font-mono text-[11px]">1 Hz - 20,000 Hz (Infrasonic)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decibel Noise Scale */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-bold text-white text-sm flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-amber-400" />
                <span>শব্দের তীব্রতা লেভেল ও ডেসিবেল (dB) মিটার</span>
              </span>
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                decibelLevel >= 85 ? 'bg-rose-950 text-rose-300 border-rose-800/40' : 'bg-emerald-950 text-emerald-300 border-emerald-800/40'
              }`}>
                {decibelLevel} dB
              </span>
            </div>

            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="140"
                step="5"
                value={decibelLevel}
                onChange={(e) => setDecibelLevel(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>০ dB (শ্রবণ সূচনা)</span>
                <span>৪৫ dB (আদর্শ)</span>
                <span>৮৫ dB (ঝুঁকি)</span>
                <span>১৪০ dB (বেদনাদায়ক)</span>
              </div>
            </div>

            {/* Health impact diagnosis */}
            <div className={`p-3.5 rounded-xl border text-xs space-y-1 ${
              decibelLevel >= 110
                ? 'bg-rose-950/40 border-rose-800/50 text-rose-200'
                : decibelLevel >= 85
                ? 'bg-amber-950/40 border-amber-800/50 text-amber-200'
                : 'bg-emerald-950/40 border-emerald-800/50 text-emerald-200'
            }`}>
              <strong className="block text-sm">
                {decibelLevel >= 110
                  ? '⚠️ মারাত্মক ক্ষতিকর মাত্রা (Permanent Damage)'
                  : decibelLevel >= 85
                  ? '⚠️ শ্রবণশক্তি হ্রাসের ঝুঁকি (Prolonged Hazard)'
                  : '✓ নিরাপদ ও সহনশীল মাত্রা (Safe Range)'}
              </strong>
              <p className="text-[11px] leading-relaxed">
                {decibelLevel < 30 && 'পাতার মর্মর বা ফিসফিস শব্দ। অত্যন্ত শান্ত ও শান্তিপূর্ণ পরিবেশ।'}
                {decibelLevel >= 30 && decibelLevel < 65 && 'স্বাভাবিক কথোপকথন ও পড়ার ঘরের শান্ত পরিবেশ। মানবদেহে কোনো ক্ষতিকর প্রভাব নেই।'}
                {decibelLevel >= 65 && decibelLevel < 85 && 'ব্যস্ত সড়ক বা রেস্তোরাঁ। দীর্ঘ সময় থাকলে মানসিক ক্লান্তি ও মনোযোগে ব্যাঘাত ঘটে।'}
                {decibelLevel >= 85 && decibelLevel < 110 && 'কারখানার ভারী যন্ত্র ও মোটরসাইকেল। ৮ ঘণ্টার বেশি অবস্থান করলে কানের সংবেদনশীল কোষ ধ্বংস হয়।'}
                {decibelLevel >= 110 && 'হাইড্রোলিক হর্ন ও জেট ইঞ্জিন। কানের পর্দা ফেটে যাওয়া বা তাৎক্ষণিক স্থায়ী বধিরতার ঝুঁকি থাকে।'}
              </p>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-300">
              <strong className="text-white block mb-1">শব্দের তীব্রতার সমীকরণ:</strong>
              <p className="font-mono text-cyan-300">I = P / A (W/m²) এবং তীব্রতা বিস্তারের বর্গের সমানুপাতিক (I ∝ A²)।</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
