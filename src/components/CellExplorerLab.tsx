import React, { useState, useEffect, useRef } from 'react';
import { Layers, ZoomIn, Info, Shield, RefreshCw, ChevronRight } from 'lucide-react';

// View levels
type ViewMode = 'full_cell' | 'nucleus' | 'chromatin_dna' | 'mitochondria' | 'chloroplast';

interface OrganelleInfo {
  title: string;
  subTitle: string;
  description: string;
  components: string[];
  color: string;
}

const organelleData: Record<ViewMode, OrganelleInfo> = {
  full_cell: {
    title: 'উদ্ভিদকোষ (Plant Cell)',
    subTitle: 'প্রধান অঙ্গাণুসমূহ ও সামগ্রিক গঠন',
    description: 'উদ্ভিদকোষ হলো সাইটোপ্লাজম, কোষপ্রাচীর, কোষঝিল্লি এবং বিভিন্ন নির্দিষ্ট কার্যাবলী সম্পাদনকারী অঙ্গাণু নিয়ে গঠিত প্রধান জৈবিক একক।',
    components: ['কোষপ্রাচীর', 'প্লাজমা মেমব্রেন', 'নিউক্লিয়াস', 'কোষগহবর', 'ক্লোরোপ্লাস্ট', 'মাইটোকন্ড্রিয়া', 'এন্ডোপ্লাজমিক জালিকা'],
    color: '#10b981', // emerald
  },
  nucleus: {
    title: 'নিউক্লিয়াস (Nucleus)',
    subTitle: 'কোষের কেন্দ্র ও নিয়ন্ত্রণ কেন্দ্র',
    description: 'নিউক্লিয়াস কোষের যাবতীয় বিপাকীয় ও বংশগত কার্যক্রম পরিচালনা করে। এটি দ্বৈত মেমব্রেন দ্বারা আবৃত থাকে।',
    components: ['নিউক্লিওলাস', 'ক্রোমাটিন তন্তু', 'নিউক্লিওপ্লাজম', 'নিউক্লিয়ার আবরণী (Membrane)', 'নিউক্লিয়ার রন্ধ্র (Pore)'],
    color: '#8b5cf6', // purple
  },
  chromatin_dna: {
    title: 'ক্রোমাটিন তন্তু ও ডিএনএ (Chromatin & DNA)',
    subTitle: 'বংশগতির মূল উপাদান',
    description: 'ক্রোমাটিন তন্তু হলো ডিএনএ এবং হিস্টোন প্রোটিন দিয়ে তৈরি সুতার মতো গঠন, যা কোষ বিভাজনের সময় ক্রোমোজোমে রূপান্তরিত হয়।',
    components: ['ডিএনএ ডাবল হেলিক্স (DNA Double Helix)', 'হিস্টোন প্রোটিন', 'জিন (Gene)', 'নিউক্লেওসোম'],
    color: '#ec4899', // pink
  },
  mitochondria: {
    title: 'মাইটোকন্ড্রিয়া (Mitochondria)',
    subTitle: 'কোষের পাওয়ার হাউজ (Powerhouse)',
    description: 'শসন প্রক্রিয়ার মাধ্যমে শক্তি (ATP) উৎপাদনের জন্য এটি দায়ী। এর ভেতরে ক্রিস্টি ও ম্যাট্রিক্স বিদ্যমান।',
    components: ['বহিঃমেমব্রেন', 'অন্তঃমেমব্রেন', 'ক্রিস্টি (Cristae)', 'ম্যাট্রিক্স'],
    color: '#f59e0b', // amber
  },
  chloroplast: {
    title: 'ক্লোরোপ্লাস্ট (Chloroplast)',
    subTitle: 'সালোকসংশ্লেষণকারী প্লাস্টিড',
    description: 'উদ্ভিদকোষের খাদ্য তৈরির মূল অঙ্গাণু। এর ভেতরে থাকা ক্লোরোফিল সূর্যের আলো ব্যবহার করে শর্করা তৈরি করে।',
    components: ['স্ট্রোমা', 'গ্রানাম থাইলাকয়েড', 'ক্লোরোফিল রঞ্জক', 'ঝিল্লি'],
    color: '#06b6d4', // cyan
  },
};

export const CellExplorerLab: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('full_cell');
  const [rotation, setRotation] = useState<number>(0);
  const [selectedSubPart, setSelectedSubPart] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto rotate the 3D visual simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.015) % (Math.PI * 2));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // HTML5 Canvas 3D Pseudo-rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    // Render logic based on hierarchy
    if (viewMode === 'full_cell') {
      // 1. Full Cell Render
      // Cell Wall
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation * 0.2);

      ctx.beginPath();
      ctx.ellipse(0, 0, 160, 200, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 12;
      ctx.stroke();

      // Plasma Membrane
      ctx.beginPath();
      ctx.ellipse(0, 0, 145, 185, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Cytoplasm Background
      ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
      ctx.fill();

      // Large Vacuole
      ctx.beginPath();
      ctx.ellipse(-40, 0, 65, 120, 0.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      // Nucleus in Cell
      ctx.beginPath();
      ctx.arc(60, 20, 45, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 3;
      ctx.fill();
      ctx.stroke();

      // Nucleolus inside Nucleus
      ctx.beginPath();
      ctx.arc(60, 20, 16, 0, Math.PI * 2);
      ctx.fillStyle = '#ec4899';
      ctx.fill();

      // Chloroplasts
      [
        { x: -90, y: -100 },
        { x: 90, y: -90 },
        { x: -80, y: 100 },
      ].forEach((pos) => {
        ctx.beginPath();
        ctx.ellipse(pos.x, pos.y, 22, 12, 0.4, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.fill();
        ctx.strokeStyle = '#22d3ee';
        ctx.stroke();
      });

      // Mitochondria
      [
        { x: 80, y: 110 },
        { x: -100, y: 0 },
      ].forEach((pos) => {
        ctx.beginPath();
        ctx.ellipse(pos.x, pos.y, 20, 10, -0.4, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
      });

      ctx.restore();
    } else if (viewMode === 'nucleus') {
      // 2. Nucleus Detailed 3D View
      ctx.save();
      ctx.translate(centerX, centerY);

      // Outer Membrane with Pores
      ctx.beginPath();
      ctx.arc(0, 0, 130, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.15)';
      ctx.fill();
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 6;
      ctx.setLineDash([18, 10]); // Pores
      ctx.stroke();

      // Inner Matrix (Nucleoplasm)
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(0, 0, 115, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(168, 85, 247, 0.1)';
      ctx.fill();

      // Chromatin Threads (Animating)
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = i * (Math.PI / 4) + rotation;
        const x1 = Math.cos(angle) * 30;
        const y1 = Math.sin(angle) * 30;
        const x2 = Math.cos(angle + 1) * 90;
        const y2 = Math.sin(angle + 1) * 90;
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(x1 + 30, y1 - 20, x2 - 20, y2 + 30, x2, y2);
      }
      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Nucleolus (Center)
      ctx.beginPath();
      ctx.arc(0, 0, 38, 0, Math.PI * 2);
      ctx.fillStyle = '#db2777';
      ctx.shadowColor = '#f472b6';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();
    } else if (viewMode === 'chromatin_dna') {
      // 3. DNA Double Helix 3D Structure View
      ctx.save();
      ctx.translate(centerX, centerY);

      const points = 24;
      const spacing = 12;
      const amplitude = 55;

      for (let i = -points / 2; i <= points / 2; i++) {
        const y = i * spacing;
        const phase = i * 0.3 + rotation * 2;
        const x1 = Math.sin(phase) * amplitude;
        const x2 = -Math.sin(phase) * amplitude;
        const z1 = Math.cos(phase);
        const z2 = -Math.cos(phase);

        // Connecting Base Pairs
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = i % 2 === 0 ? '#38bdf8' : '#a855f7';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Strand 1 Node
        ctx.beginPath();
        ctx.arc(x1, y, 5 + z1 * 2, 0, Math.PI * 2);
        ctx.fillStyle = z1 > 0 ? '#ec4899' : '#9d174d';
        ctx.fill();

        // Strand 2 Node
        ctx.beginPath();
        ctx.arc(x2, y, 5 + z2 * 2, 0, Math.PI * 2);
        ctx.fillStyle = z2 > 0 ? '#06b6d4' : '#155e75';
        ctx.fill();
      }

      ctx.restore();
    } else if (viewMode === 'mitochondria') {
      // 4. Mitochondria Internal Structure
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(0.3);

      // Outer
      ctx.beginPath();
      ctx.ellipse(0, 0, 150, 80, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Inner Cristae Folds
      ctx.beginPath();
      ctx.moveTo(-110, 0);
      for (let x = -100; x <= 100; x += 20) {
        const direction = (x / 20) % 2 === 0 ? 45 : -45;
        ctx.lineTo(x, direction);
      }
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.restore();
    } else if (viewMode === 'chloroplast') {
      // 5. Chloroplast Internal Thylakoids
      ctx.save();
      ctx.translate(centerX, centerY);

      // Outer Shell
      ctx.beginPath();
      ctx.ellipse(0, 0, 140, 85, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.fill();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Thylakoid Stacks (Granum)
      [-60, 0, 60].forEach((stackX) => {
        for (let stackY = -35; stackY <= 35; stackY += 16) {
          ctx.beginPath();
          ctx.ellipse(stackX, stackY, 28, 7, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#10b981';
          ctx.fill();
          ctx.strokeStyle = '#34d399';
          ctx.stroke();
        }
      });

      ctx.restore();
    }
  }, [viewMode, rotation]);

  const currentInfo = organelleData[viewMode];

  return (
    <div className="w-full min-h-[calc(100vh-120px)] p-4 sm:p-6 bg-slate-950 text-slate-100 flex flex-col items-center">
      
      {/* Title & Level Indicator */}
      <div className="w-full max-w-6xl mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            <Layers className="h-4 w-4" />
            <span>ইন্টারঅ্যাক্টিভ বায়োলজি ৩ডি ল্যাব</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            {currentInfo.title}
          </h1>
        </div>

        {/* Navigation Breadcrumb Steps */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => { setViewMode('full_cell'); setSelectedSubPart(null); }}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              viewMode === 'full_cell' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            ১. উদ্ভিদকোষ
          </button>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
          <button
            onClick={() => { setViewMode('nucleus'); setSelectedSubPart(null); }}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              viewMode === 'nucleus' ? 'bg-purple-500 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            ২. নিউক্লিয়াস
          </button>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
          <button
            onClick={() => { setViewMode('chromatin_dna'); setSelectedSubPart(null); }}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              viewMode === 'chromatin_dna' ? 'bg-pink-500 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            ৩. ডিএনএ স্ট্রাকচার
          </button>
        </div>
      </div>

      {/* Main Grid Workspace */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* 3D Visualizer Canvas (Left - 7 Columns) */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
            <ZoomIn className="h-3.5 w-3.5 text-cyan-400" />
            <span>লাইভ ৩ডি রেন্ডারিং - {currentInfo.title}</span>
          </div>

          <canvas
            ref={canvasRef}
            width={460}
            height={380}
            className="w-full max-w-[460px] h-[350px] object-contain my-2 cursor-pointer"
          />

          {/* Direct Mode Switcher Controls under Canvas */}
          <div className="w-full flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-slate-800/80">
            <button
              onClick={() => setViewMode('full_cell')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                viewMode === 'full_cell' ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
              }`}
            >
              উদ্ভিদকোষ
            </button>
            <button
              onClick={() => setViewMode('nucleus')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                viewMode === 'nucleus' ? 'border-purple-500 bg-purple-500/20 text-purple-300' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
              }`}
            >
              নিউক্লিয়াস জুম
            </button>
            <button
              onClick={() => setViewMode('chromatin_dna')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                viewMode === 'chromatin_dna' ? 'border-pink-500 bg-pink-500/20 text-pink-300' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
              }`}
            >
              ক্রোমাটিন ও ডিএনএ
            </button>
            <button
              onClick={() => setViewMode('mitochondria')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                viewMode === 'mitochondria' ? 'border-amber-500 bg-amber-500/20 text-amber-300' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
              }`}
            >
              মাইটোকন্ড্রিয়া
            </button>
            <button
              onClick={() => setViewMode('chloroplast')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                viewMode === 'chloroplast' ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
              }`}
            >
              ক্লোরোপ্লাস্ট
            </button>
          </div>
        </div>

        {/* Detailed Information & Interactive Organelle Clicker (Right - 5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Main Info Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center gap-2 mb-2" style={{ color: currentInfo.color }}>
              <Info className="h-5 w-5" />
              <span className="font-semibold text-sm">{currentInfo.subTitle}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {currentInfo.description}
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 border-t border-slate-800 pt-3">
              এই স্তরের অন্তর্গত অঙ্গাণুসমূহ (ক্লিক করুন):
            </h3>

            {/* Clickable Component Chips */}
            <div className="flex flex-wrap gap-2">
              {currentInfo.components.map((comp, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSubPart(comp)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-1.5 ${
                    selectedSubPart === comp
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md scale-105'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <Shield className="h-3 w-3 text-cyan-400" />
                  <span>{comp}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Organelle Deep-Dive Callout */}
          {selectedSubPart && (
            <div className="bg-cyan-950/40 border border-cyan-800/60 rounded-2xl p-4 animate-fade-in">
              <div className="text-xs text-cyan-400 font-bold mb-1">মনোনীত অংশ: {selectedSubPart}</div>
              <p className="text-xs text-cyan-100/90 leading-normal">
                {selectedSubPart === 'নিউক্লিয়াস' && 'নিউক্লিয়াস হলো কোষের প্রাণকেন্দ্র। নিউক্লিয়াস ট্যাবে ক্লিক করে এর ভেতরের গঠন ৩ডি-তে পর্যবেক্ষণ করুন।'}
                {selectedSubPart === 'ক্রোমাটিন তন্তু' && 'ক্রোমাটিন তন্তুতে ডিএনএ সুরক্ষিত থাকে। ডিএনএ ট্যাবে ক্লিক করে ডাবল হেলিক্স প্যাটার্ন দেখুন।'}
                {selectedSubPart === 'নিউক্লিওলাস' && 'নিউক্লিওলাস নিউক্লিয়াসের ভেতরের অপেক্ষাকৃত ঘন ও অন্ধকার গোলাকার অংশ, যা রাইবোজোম তৈরি করে।'}
                {!['নিউক্লিয়াস', 'ক্রোমাটিন তন্তু', 'নিউক্লিওলাস'].includes(selectedSubPart) && `${selectedSubPart} উদ্ভিদকোষের গুরুত্বপূর্ণ একটি শারীরবৃত্তীয় কাজ সম্পাদন করে।`}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
