/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  RotateCcw, 
  Play, 
  Pause, 
  Layers, 
  TrendingUp, 
  Gauge, 
  Compass, 
  CheckCircle2, 
  Info,
  Scale
} from 'lucide-react';

export function WorkEnergyLab() {
  const [activeTab, setActiveTab] = useState<'conservation' | 'workAngle' | 'efficiency'>('conservation');

  // --- Tab 1: Conservation of Energy State ---
  const [mass, setMass] = useState<number>(2); // kg
  const [totalHeight, setTotalHeight] = useState<number>(50); // meters
  const [currentHeight, setCurrentHeight] = useState<number>(50); // meters
  const [isFalling, setIsFalling] = useState<boolean>(false);
  const g = 9.8; // m/s^2

  // Computed energies
  const ep = mass * g * currentHeight;
  const fallenDistance = totalHeight - currentHeight;
  const velocity = Math.sqrt(2 * g * Math.max(0, fallenDistance));
  const ek = 0.5 * mass * velocity * velocity;
  const totalEnergy = mass * g * totalHeight;

  // Free-fall animation timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isFalling) {
      interval = setInterval(() => {
        setCurrentHeight((prev) => {
          if (prev <= 1) {
            setIsFalling(false);
            return 0;
          }
          return Math.max(0, prev - 1.5);
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isFalling]);

  // --- Tab 2: Work Done at Angle State ---
  const [force, setForce] = useState<number>(50); // N
  const [displacement, setDisplacement] = useState<number>(10); // m
  const [angle, setAngle] = useState<number>(0); // degrees
  const angleRad = (angle * Math.PI) / 180;
  const cosTheta = Math.cos(angleRad);
  const workDone = force * displacement * cosTheta;
  const fParallel = force * cosTheta;
  const fPerpendicular = force * Math.sin(angleRad);

  // --- Tab 3: Motor Efficiency State ---
  const [pumpMass, setPumpMass] = useState<number>(1000); // kg of water
  const [pumpHeight, setPumpHeight] = useState<number>(15); // meters
  const [pumpTime, setPumpTime] = useState<number>(60); // seconds
  const [motorHp, setMotorHp] = useState<number>(1.5); // HP
  const inputPowerWatts = motorHp * 746;
  const outputWorkJoules = pumpMass * g * pumpHeight;
  const outputPowerWatts = outputWorkJoules / pumpTime;
  const efficiency = Math.min(100, Math.max(0, (outputPowerWatts / inputPowerWatts) * 100));
  const lostPower = Math.max(0, inputPowerWatts - outputPowerWatts);

  return (
    <div className="flex-1 bg-slate-950 p-4 lg:p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              পদার্থবিজ্ঞান অধ্যায় ৪ ল্যাব • কাজ ও শক্তি
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
              কাজ, ক্ষমতা ও শক্তি সিমুলেটর ল্যাব (Work, Power & Energy)
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              মুক্তভাবে পড়ন্ত বস্তুর শক্তির সংরক্ষণশীলতা, কোণে প্রযুক্ত বলের কাজ এবং মোটরের কর্মদক্ষতার ইন্টারঅ্যাক্টিভ পরীক্ষা।
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('conservation')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'conservation'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              শক্তির সংরক্ষণশীলতা
            </button>
            <button
              onClick={() => setActiveTab('workAngle')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'workAngle'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              কোণ ও কাজের হিসাব
            </button>
            <button
              onClick={() => setActiveTab('efficiency')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'efficiency'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gauge className="w-4 h-4" />
              ক্ষমতা ও কর্মদক্ষতা
            </button>
          </div>
        </div>

        {/* ================= TAB 1: CONSERVATION OF ENERGY ================= */}
        {activeTab === 'conservation' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Control Panel */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                পড়ন্ত বস্তুর পরামিতি (Parameters)
              </h3>

              {/* Mass Slider */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">বস্তুর ভর (m):</span>
                  <span className="font-mono font-bold text-cyan-400">{mass} kg</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={mass}
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Total Height Slider */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">শীর্ষ উচ্চতা (h):</span>
                  <span className="font-mono font-bold text-cyan-400">{totalHeight} m</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={totalHeight}
                  onChange={(e) => {
                    setTotalHeight(Number(e.target.value));
                    setCurrentHeight(Number(e.target.value));
                    setIsFalling(false);
                  }}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Instant Height Slider */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">বর্তমান উচ্চতা:</span>
                  <span className="font-mono font-bold text-amber-400">{currentHeight.toFixed(1)} m</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={totalHeight}
                  step="0.5"
                  value={currentHeight}
                  onChange={(e) => {
                    setCurrentHeight(Number(e.target.value));
                    setIsFalling(false);
                  }}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFalling(!isFalling)}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-lg ${
                    isFalling
                      ? 'bg-amber-600 hover:bg-amber-500 text-white'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
                  }`}
                >
                  {isFalling ? (
                    <>
                      <Pause className="w-4 h-4" /> পতন থামান
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> বস্তুটি ছেড়ে দিন (Free Fall)
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setCurrentHeight(totalHeight);
                    setIsFalling(false);
                  }}
                  className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer"
                  title="শীর্ষে রিসেট"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Physics Rule Card */}
              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs space-y-1">
                <span className="font-bold text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  শক্তির নিত্যতা সমীকরণ:
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  যেকোনো উচ্চতায়: <strong className="text-white">মোট শক্তি E = E_p + E_k = mgh = {totalEnergy.toFixed(1)} J</strong> (সর্বদা অপরিবর্তিত)।
                </p>
              </div>
            </div>

            {/* Visual Fall Simulation & Energy Bars */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">মুক্তভাবে পড়ন্ত বস্তুর শক্তির রূপান্তর</h3>
                  <p className="text-xs text-slate-400">
                    ভূমি থেকে উচ্চতা: <span className="font-mono text-cyan-400 font-bold">{currentHeight.toFixed(1)} m</span> • বেগ: <span className="font-mono text-amber-400 font-bold">{velocity.toFixed(1)} m/s</span>
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-right">
                  <span className="text-[10px] text-slate-400 font-mono block">মোট যান্ত্রিক শক্তি</span>
                  <span className="text-sm font-mono font-black text-emerald-400">{totalEnergy.toFixed(1)} J</span>
                </div>
              </div>

              {/* Fall Canvas & Energy Bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                {/* Vertical Fall Stage */}
                <div className="h-64 bg-slate-950 rounded-xl border border-slate-800 relative flex items-center justify-center p-4">
                  {/* Tower line */}
                  <div className="absolute left-10 top-6 bottom-6 w-1 bg-slate-800"></div>
                  {/* Ground */}
                  <div className="absolute bottom-4 left-4 right-4 h-2 bg-emerald-600 rounded"></div>
                  <span className="absolute bottom-0 text-[10px] font-mono text-slate-500">ভূমি (h = 0)</span>

                  {/* Falling Object */}
                  <div
                    style={{
                      bottom: `${(currentHeight / totalHeight) * 75 + 5}%`,
                      left: '32px'
                    }}
                    className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 border-2 border-white shadow-xl shadow-amber-500/50 flex items-center justify-center text-[10px] font-bold text-slate-950 transition-all duration-75"
                  >
                    m
                  </div>

                  {/* Height markers */}
                  <div className="absolute right-4 top-4 bottom-8 flex flex-col justify-between text-[11px] font-mono text-slate-400">
                    <span>শীর্ষ: {totalHeight}m (E_p max)</span>
                    <span>মাঝামাঝি: {(totalHeight / 2).toFixed(0)}m</span>
                    <span>ভূমি: 0m (E_k max)</span>
                  </div>
                </div>

                {/* Live Energy Comparison Bars */}
                <div className="h-64 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-around">
                  {/* Potential Energy Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-cyan-400 font-bold">বিভবশক্তি E_p (mgh):</span>
                      <span className="font-mono font-bold text-white">{ep.toFixed(1)} J ({((ep / totalEnergy) * 100).toFixed(0)}%)</span>
                    </div>
                    <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-75"
                        style={{ width: `${Math.min(100, (ep / totalEnergy) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Kinetic Energy Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-amber-400 font-bold">গতিশক্তি E_k (½ mv²):</span>
                      <span className="font-mono font-bold text-white">{ek.toFixed(1)} J ({((ek / totalEnergy) * 100).toFixed(0)}%)</span>
                    </div>
                    <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all duration-75"
                        style={{ width: `${Math.min(100, (ek / totalEnergy) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Total Energy Bar */}
                  <div className="space-y-1 pt-2 border-t border-slate-800">
                    <div className="flex justify-between text-xs">
                      <span className="text-emerald-400 font-bold">মোট যান্ত্রিক শক্তি (E_p + E_k):</span>
                      <span className="font-mono font-black text-emerald-400">{totalEnergy.toFixed(1)} J (১০০%)</span>
                    </div>
                    <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-emerald-500/30">
                      <div className="h-full bg-emerald-500 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Explanation */}
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-300">
                {currentHeight === totalHeight && 'শীর্ষবিন্দুতে বস্তু স্থির থাকায় বেগ v = 0, ফলে গতিশক্তি E_k = 0 এবং সমস্ত শক্তিই অভিকর্ষীয় বিভবশক্তি (E_p = mgh)।'}
                {currentHeight > 0 && currentHeight < totalHeight && 'পতনের সময় উচ্চতা হ্রাস পেয়ে বিভবশক্তি কমছে কিন্তু বেগ বৃদ্ধি পেয়ে ঠিক সমপরিমাণ গতিশক্তি উৎপন্ন হচ্ছে।'}
                {currentHeight === 0 && 'ভূমি স্পর্শ করার মুহূর্তে উচ্চতা h = 0 হওয়ায় বিভবশক্তি E_p = 0 এবং সম্পূর্ণ শক্তিই গতিশক্তিতে (E_k = ½ mv²) রূপান্তরিত হয়েছে।'}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: WORK AT ANGLE ================= */}
        {activeTab === 'workAngle' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Control Panel */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                বল ও সরণের মান নির্ধারণ
              </h3>

              {/* Force Slider */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">প্রযুক্ত বল (F):</span>
                  <span className="font-mono font-bold text-cyan-400">{force} N</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={force}
                  onChange={(e) => setForce(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Displacement Slider */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">সরণ (s):</span>
                  <span className="font-mono font-bold text-emerald-400">{displacement} m</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={displacement}
                  onChange={(e) => setDisplacement(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              {/* Angle Slider */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">বল ও সরণের কোণ (θ):</span>
                  <span className="font-mono font-bold text-amber-400">{angle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="180"
                  step="5"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>০° (বলের দিকে)</span>
                  <span>৯০° (লম্ব)</span>
                  <span>১৮০° (বিপরীত)</span>
                </div>
              </div>

              {/* Classification Badge */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                <span className="text-xs text-slate-400 font-mono block">কাজের শ্রেণিবিভাগ:</span>
                <span className={`text-base font-black ${
                  angle < 90
                    ? 'text-emerald-400'
                    : angle === 90
                    ? 'text-cyan-400'
                    : 'text-rose-400'
                }`}>
                  {angle < 90 && '✓ ধনাত্মক কাজ (বলের দ্বারা কাজ)'}
                  {angle === 90 && '⚠ শূন্য কাজ (Zero Work - লম্ব কোণ)'}
                  {angle > 90 && '✕ ঋণাত্মক কাজ (বলের বিরুদ্ধে কাজ)'}
                </span>
              </div>
            </div>

            {/* Visual Vector Canvas & Calculation */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">ভেক্টর উপাংশ ও কাজের বিশ্লেষণ</h3>
                  <p className="text-xs text-slate-400">
                    W = F · s · cosθ = {force} × {displacement} × cos({angle}°)
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-right">
                  <span className="text-[10px] text-slate-400 font-mono block">সম্পন্ন কাজ (W)</span>
                  <span className="text-xl font-mono font-black text-amber-400">{workDone.toFixed(1)} J</span>
                </div>
              </div>

              {/* Vector Diagram SVG */}
              <div className="relative h-64 my-4 flex items-center justify-center">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 240">
                  {/* Ground Surface */}
                  <line x1="40" y1="180" x2="360" y2="180" stroke="#475569" strokeWidth="3" />

                  {/* 3D Box / Object */}
                  <rect x="80" y="130" width="70" height="50" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <text x="115" y="160" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">বস্তু</text>

                  {/* Displacement Vector s (along ground) */}
                  <line x1="150" y1="170" x2="320" y2="170" stroke="#10b981" strokeWidth="4" markerEnd="url(#arrow-green)" />
                  <text x="240" y="160" fill="#10b981" fontSize="12" fontWeight="bold">সরণ (s = {displacement}m) ➔</text>

                  {/* Force Vector F at angle θ */}
                  {(() => {
                    const startX = 150;
                    const startY = 150;
                    const length = 110;
                    const endX = startX + length * Math.cos(-angleRad);
                    const endY = startY + length * Math.sin(-angleRad);
                    return (
                      <g>
                        <line x1={startX} y1={startY} x2={endX} y2={endY} stroke="#f59e0b" strokeWidth="4" />
                        <circle cx={endX} cy={endY} r="5" fill="#f59e0b" />
                        <text x={endX + 8} y={endY} fill="#f59e0b" fontSize="12" fontWeight="bold">বল F ({force}N)</text>
                      </g>
                    );
                  })()}

                  {/* Angle Arc */}
                  {angle > 0 && angle <= 90 && (
                    <path
                      d="M 190 150 A 40 40 0 0 0 185 125"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="3,3"
                    />
                  )}
                  <text x="195" y="140" fill="#f59e0b" fontSize="11" fontWeight="bold">θ={angle}°</text>
                </svg>
              </div>

              {/* Component breakdown */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">বলের কার্যকর উপাংশ (F cosθ):</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">{fParallel.toFixed(1)} N</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">উল্লম্ব অকার্যকর উপাংশ (F sinθ):</span>
                  <span className="font-mono font-bold text-slate-400 text-sm">{fPerpendicular.toFixed(1)} N</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: POWER & EFFICIENCY ================= */}
        {activeTab === 'efficiency' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Control Panel */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Gauge className="w-4 h-4 text-emerald-400" />
                পানি তোলার মোটর সিমুলেশন
              </h3>

              {/* Motor HP */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">মোটরের ক্ষমতা (P_in):</span>
                  <span className="font-mono font-bold text-amber-400">{motorHp} HP ({inputPowerWatts.toFixed(0)} W)</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={motorHp}
                  onChange={(e) => setMotorHp(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Water Mass */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-semibold">পানির ভর (m):</span>
                  <span className="font-mono font-bold text-cyan-400">{pumpMass} kg ({pumpMass} L)</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={pumpMass}
                  onChange={(e) => setPumpMass(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Height & Time */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">উচ্চতা (h):</span>
                  <span className="text-sm font-mono font-bold text-white">{pumpHeight} m</span>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={pumpHeight}
                    onChange={(e) => setPumpHeight(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer mt-1"
                  />
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">সময় (t):</span>
                  <span className="text-sm font-mono font-bold text-white">{pumpTime} s</span>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="10"
                    value={pumpTime}
                    onChange={(e) => setPumpTime(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">মোটরের কর্মদক্ষতা (Efficiency) বিশ্লেষণ</h3>
                  <p className="text-xs text-slate-400">
                    η = (P_out / P_in) × 100%
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-right">
                  <span className="text-[10px] text-slate-400 font-mono block">কর্মদক্ষতা (η)</span>
                  <span className="text-2xl font-mono font-black text-emerald-400">{efficiency.toFixed(1)}%</span>
                </div>
              </div>

              {/* Power comparison cards */}
              <div className="grid grid-cols-3 gap-3 my-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 text-center">
                  <span className="text-xs text-slate-400 block mb-1">মোট প্রদত্ত ক্ষমতা (P_in)</span>
                  <span className="text-lg font-mono font-bold text-amber-300">{inputPowerWatts.toFixed(0)} W</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">{motorHp} HP</span>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 text-center">
                  <span className="text-xs text-slate-400 block mb-1">কার্যকর ক্ষমতা (P_out)</span>
                  <span className="text-lg font-mono font-bold text-emerald-400">{outputPowerWatts.toFixed(0)} W</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">mgh / t</span>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-rose-500/30 text-center">
                  <span className="text-xs text-slate-400 block mb-1">অপচয়িত ক্ষমতা (Loss)</span>
                  <span className="text-lg font-mono font-bold text-rose-400">{lostPower.toFixed(0)} W</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">তাপ ও ঘর্ষণ</span>
                </div>
              </div>

              {/* Progress gauge */}
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-semibold">কার্যকর শক্তির অনুপাত:</span>
                  <span className="font-mono font-bold text-emerald-400">{efficiency.toFixed(1)}%</span>
                </div>
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-300"
                    style={{ width: `${efficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
