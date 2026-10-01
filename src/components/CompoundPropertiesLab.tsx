/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Flame, 
  Zap, 
  Droplets, 
  Info, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  Play, 
  Pause,
  Filter,
  Search,
  Scale,
  Gauge,
  Sparkles
} from 'lucide-react';

export function CompoundPropertiesLab() {
  const [activeTab, setActiveTab] = useState<'thermal' | 'conductivity' | 'solubility'>('thermal');

  // ==========================================
  // 1. THERMAL LAB STATE & COMPREHENSIVE DATA
  // ==========================================
  const thermalCompounds = [
    // Ionic Compounds
    { id: 'nacl', name: 'সোডিয়াম ক্লোরাইড (NaCl)', category: 'আয়নিক যৌগ', mp: 801, bp: 1465, type: 'আয়নিক কেলাস', reason: 'Na⁺ ও Cl⁻ আয়নের মধ্যে শক্তিশালী স্থির-বৈদ্যুতিক আকর্ষণ বল দ্বারা গঠিত ত্রিমাত্রিক কেলাস জালি ভাঙতে প্রচুর তাপশক্তি প্রয়োজন।' },
    { id: 'mgo', name: 'ম্যাগনেসিয়াম অক্সাইড (MgO)', category: 'আয়নিক যৌগ', mp: 2852, bp: 3600, type: 'উচ্চ ল্যাটিস আয়নিক', reason: 'Mg²⁺ ও O²⁻ উভয়ই দ্বিযোজী আয়ন হওয়ায় চার্জের গুণফল বেশি। ফলে ল্যাটিস শক্তি অত্যন্ত উচ্চ (রিফ্র্যাক্টরি পদার্থ)।' },
    { id: 'cacl2', name: 'ক্যালসিয়াম ক্লোরাইড (CaCl₂)', category: 'আয়নিক যৌগ', mp: 772, bp: 1935, type: 'আয়নিক যৌগ', reason: 'Ca²⁺ ক্যাটায়ন এবং দুটি Cl⁻ অ্যানায়নের তীব্র আয়নিক আকর্ষণের কারণে গলনাঙ্ক বেশ উচ্চ।' },
    { id: 'kno3', name: 'পটাশিয়াম নাইট্রেট (KNO₃)', category: 'আয়নিক যৌগ', mp: 334, bp: 'বিয়োজিত হয়', type: 'আয়নিক লবণ', reason: 'K⁺ ও নাইট্রেট (NO₃⁻) যৌগমূলকের মধ্যকার আয়নিক বন্ধন ভেঙে ৩৩৪°C এ গলে তরলে পরিণত হয়।' },

    // Polar Covalent Compounds
    { id: 'sugar', name: 'খাবার চিনি / সুক্রোজ (C₁₂H₂₂O₁₁)', category: 'পোলার সমযোজী', mp: 186, bp: 'ক্যারামেলে রূপান্তর', type: 'পোলার সমযোজী', reason: 'সুক্রোজ অণুগুলোর মধ্যে আন্তঃআণবিক হাইড্রোজেন বন্ধন ও দুর্বল ভ্যান ডার ওয়ালস বল কাজ করে। মাঝারি তাপেই গলে যায়।' },
    { id: 'glucose', name: 'গ্লুকোজ (C₆H₁₂O₆)', category: 'পোলার সমযোজী', mp: 146, bp: 'বিয়োজিত হয়', type: 'পোলার সমযোজী', reason: 'অণুতে থাকা একাধিক -OH গ্রুপের মধ্যে দুর্বল আন্তঃআণবিক আকর্ষণ বিদ্যমান। অল্প তাপেই গলন ঘটে।' },
    { id: 'ice', name: 'বরফ / পানি (H₂O)', category: 'পোলার সমযোজী', mp: 0, bp: 100, type: 'হাইড্রোজেন বন্ধনযুক্ত', reason: 'পানির অণুগুলোর মধ্যে হাইড্রোজেন বন্ধন রয়েছে যা ০° সে. তাপমাত্রায় ভেঙে তরল পানিতে এবং ১০০° সে. এ বাষ্পে পরিণত হয়।' },
    { id: 'urea', name: 'ইউরিয়া (NH₂CONH₂)', category: 'পোলার সমযোজী', mp: 133, bp: 'বিয়োজিত হয়', type: 'সমযোজী জৈব যৌগ', reason: 'অণুগুলোর মধ্যে মধ্যম মাত্রার হাইড্রোজেন বন্ধন থাকে, ফলে ১৩৩°C তেই গলে তরল হয়।' },

    // Non-polar Covalent Compounds
    { id: 'wax', name: 'মোম / প্যারাফিন মোম (C₂₅H₅₂)', category: 'অপোলার সমযোজী', mp: 54, bp: 370, type: 'অপোলার হাইড্রোকার্বন', reason: 'অপোলার দীর্ঘ শৃঙ্খল কার্বনে কেবল অত্যন্ত দুর্বল লন্ডন বিচ্ছুরণ বল (ভ্যান ডার ওয়ালস) থাকে। সামান্য উত্তাপেই গলে যায়।' },
    { id: 'naphthalene', name: 'ন্যাপথালিন (C₁₀H₈)', category: 'অপোলার সমযোজী', mp: 80, bp: 218, type: 'উর্ধ্বপাতিত সমযোজী', reason: 'দুর্বল ভ্যান ডার ওয়ালস বলের কারণে কঠিন অবস্থা থেকে অল্প তাপেই সরাসরি গ্যাসে বাষ্পীভূত হয় (ঊর্ধ্বপাতন)।' },

    // Giant Molecular Crystals (Exceptions)
    { id: 'graphite', name: 'গ্রাফাইট কার্বন (Graphite)', category: 'বিশালাকার সমযোজী কেলাস (ব্যতিক্রম)', mp: 3600, bp: 4830, type: 'বিশালাকার সমযোজী', reason: 'কার্বন পরমাণুগুলো ষড়ভুজাকার স্তরযুক্ত দৃঢ় সমযোজী বন্ধনে আবদ্ধ। স্তরগুলো ভাঙতে অসম্ভব উচ্চ তাপশক্তির প্রয়োজন।' },
    { id: 'diamond', name: 'হীরা (Diamond)', category: 'বিশালাকার সমযোজী কেলাস (ব্যতিক্রম)', mp: 3550, bp: 4830, type: 'ত্রিমাত্রিক বিশালাকার সমযোজী', reason: 'প্রতিটি কার্বন পরমাণু ৪টি অপর কার্বনের সাথে শক্তিশালী সমযোজী চতুস্তলকীয় জালিকা গঠন করে থাকে।' }
  ];

  const [selectedThermalId, setSelectedThermalId] = useState<string>('nacl');
  const [thermalFilter, setThermalFilter] = useState<string>('all');
  const [temperature, setTemperature] = useState<number>(25); // Celsius
  const [isHeating, setIsHeating] = useState<boolean>(false);
  const [furnaceMode, setFurnaceMode] = useState<'bunsen' | 'furnace'>('bunsen'); // Bunsen: up to 1000°C, Furnace: up to 3800°C

  const currentThermal = thermalCompounds.find(c => c.id === selectedThermalId) || thermalCompounds[0];
  const maxTemp = furnaceMode === 'bunsen' ? 1000 : 3800;

  const filteredThermal = thermalFilter === 'all'
    ? thermalCompounds
    : thermalCompounds.filter(c => c.category === thermalFilter);

  // Heating timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHeating) {
      interval = setInterval(() => {
        setTemperature((prev) => {
          if (prev >= maxTemp) {
            setIsHeating(false);
            return maxTemp;
          }
          const step = furnaceMode === 'bunsen' ? 15 : 60;
          return Math.min(maxTemp, prev + step);
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isHeating, maxTemp, furnaceMode]);

  // ==========================================
  // 2. CONDUCTIVITY LAB STATE & COMPREHENSIVE SAMPLES
  // ==========================================
  const conductivitySamples = [
    // Solid Ionic
    { id: 'solid_nacl', name: 'কঠিন খাবার লবণ (Solid NaCl)', category: 'আয়নিক যৌগ', conducts: false, currentMa: 0, bulbState: 'off', desc: 'কেলাস জালিতে Na⁺ ও Cl⁻ আয়নগুলি অত্যন্ত দৃঢ়ভাবে আবদ্ধ থাকে; কোনো মুক্ত সঞ্চরণশীল আয়ন বা ইলেকট্রন নেই। ফলে কঠিন অবস্থায় বিদ্যুৎ অপরিবাহী।' },
    // Molten Ionic
    { id: 'molten_nacl', name: 'গলিত খাবার লবণ (Molten NaCl 801°C)', category: 'আয়নিক যৌগ', conducts: true, currentMa: 180, bulbState: 'bright', desc: '৮০১°C এর উপরে গলিত অবস্থায় কেলাস জালি ভেঙে Na⁺ ও Cl⁻ আয়নগুলি সম্পূর্ণ মুক্ত হয়ে চলাচল করতে পারে। মুক্ত আয়নের মাধ্যমে বিদ্যুৎ সুপরিবাহী।' },
    // Aqueous Ionic
    { id: 'aqueous_nacl', name: 'লবণ মিশ্রিত পানি (Aqueous NaCl)', category: 'আয়নিক যৌগ', conducts: true, currentMa: 220, bulbState: 'very_bright', desc: 'পানিতে দ্রবীভূত অবস্থায় Na⁺(aq) ও Cl⁻(aq) আয়নগুলি অবাধে সঞ্চালিত হয়। তীব্র তড়িৎ বিশ্লেষ্য হওয়ায় বাল্ব অত্যন্ত উজ্জ্বলভাবে জ্বলে!' },
    { id: 'aqueous_cuso4', name: 'কপার সালফেট দ্রবণ (CuSO₄ Solution)', category: 'আয়নিক যৌগ', conducts: true, currentMa: 200, bulbState: 'bright', desc: 'Cu²⁺ ও SO₄²⁻ আয়ন দ্রবণজুড়ে বিদ্যুৎ পরিবহন করে। ক্যাথোড তড়িৎদ্বারে লালচে তামা জমা হতে দেখা যায়।' },

    // Covalent & Solutions
    { id: 'solid_sugar', name: 'কঠিন চিনি (Solid Sugar)', category: 'সমযোজী যৌগ', conducts: false, currentMa: 0, bulbState: 'off', desc: 'সমযোজী অণু সম্পূর্ণ নিরপেক্ষ; এতে কোনো চার্জযুক্ত কণা বা মুক্ত আয়ন নেই। বিদ্যুৎ অপরিবাহী।' },
    { id: 'aqueous_sugar', name: 'চিনির জলীয় দ্রবণ (Sugar Solution)', category: 'সমযোজী যৌগ', conducts: false, currentMa: 0, bulbState: 'off', desc: 'চিনি পানিতে দ্রবীভূত হলেও কোনো আয়নে বিশ্লেষিত হয় না, কেবল নিরপেক্ষ অণু হিসেবে থাকে। অ-তড়িৎ বিশ্লেষ্য হওয়ায় বাল্ব জ্বলে না।' },
    { id: 'pure_water', name: 'বিশুদ্ধ পাতিত পানি (Distilled Water)', category: 'সমযোজী যৌগ', conducts: false, currentMa: 0, bulbState: 'off', desc: 'বিশুদ্ধ পানি অত্যন্ত সামান্য বিয়োজিত হয় (১০⁻⁷ mol/L), যা বর্তনী সম্পূর্ণ করার জন্য একেবারেই অপ্রতুল।' },
    { id: 'tap_water', name: 'ট্যাপের সাধারণ পানি (Tap Water)', category: 'মিশ্রণ দ্রবণ', conducts: true, currentMa: 25, bulbState: 'dim', desc: 'প্রাকৃতিক ট্যাপের পানিতে সামান্য পরিমাণ খনিজ লবণ দ্রবীভূত থাকে, যার জন্য বাল্ব সামান্য টিমটিম করে জ্বলে।' },
    { id: 'dilute_hcl', name: 'লঘু হাইড্রোক্লোরিক অ্যাসিড (Dilute HCl)', category: 'পোলার অ্যাসিড দ্রবণ', conducts: true, currentMa: 240, bulbState: 'very_bright', desc: 'সমযোজী গ্যাস হলেও পানিতে সম্পূর্ণরূপে আয়নিত হয়ে H⁺ ও Cl⁻ তৈরি করে। তীব্র তড়িৎ বিশ্লেষ্য হিসেবে কাজ করে।' },
    { id: 'dilute_acetic', name: 'ভিনেগার / অ্যাসিটিক অ্যাসিড (CH₃COOH)', category: 'মৃদু অ্যাসিড দ্রবণ', conducts: true, currentMa: 40, bulbState: 'dim', desc: 'জৈব অ্যাসিড পানিতে আংশিক আয়নিত হয় (মৃদু তড়িৎ বিশ্লেষ্য)। ফলে বাল্ব মৃদু আলোয় জ্বলে।' },

    // Metals & Carbon Allotropes
    { id: 'copper_wire', name: 'তামার তার (Copper Wire)', category: 'ধাতব পরিবাহী', conducts: true, currentMa: 250, bulbState: 'very_bright', desc: 'ধাতব কেলাসে পারমাণবিক শাঁসের চারদিকে মুক্ত সঞ্চরণশীল ইলেকট্রনের সাগর থাকে। মুক্ত ইলেকট্রনের প্রবাহে বাল্ব তীব্র আলো দেয়।' },
    { id: 'aluminum_strip', name: 'অ্যালুমিনিয়াম পাত (Aluminum Strip)', category: 'ধাতব পরিবাহী', conducts: true, currentMa: 240, bulbState: 'very_bright', desc: 'অ্যালুমিনিয়ামের ৩টি যোজ্যতা ইলেকট্রন মুক্তভাবে সঞ্চালিত হয়ে চমৎকার বিদ্যুৎ পরিবহন করে।' },
    { id: 'graphite_rod', name: 'গ্রাফাইট রড / পেনসিল শিষ (Graphite Rod)', category: 'অধাতব ব্যতিক্রমী পরিবাহী', conducts: true, currentMa: 160, bulbState: 'bright', desc: 'গ্রাফাইট একটি অধাতু হওয়া সত্ত্বেও এর প্রতিটি কার্বনে ১টি করে সঞ্চরণশীল পাই (π) ইলেকট্রন থাকে। ফলে গ্রাফাইট চমৎকার বিদ্যুৎ পরিবাহী!' },
    { id: 'kerosene', name: 'কেরোসিন / পেট্রোল (Kerosene)', category: 'অপোলার জৈব তরল', conducts: false, currentMa: 0, bulbState: 'off', desc: 'অপোলার হাইড্রোকার্বনে কোনো আয়ন বা মুক্ত ইলেকট্রন নেই; এটি সম্পূর্ণ বিদ্যুৎ অপরিবাহী।' }
  ];

  const [selectedConductivityId, setSelectedConductivityId] = useState<string>('solid_nacl');
  const [circuitClosed, setCircuitClosed] = useState<boolean>(true);
  const currentConductivity = conductivitySamples.find(s => s.id === selectedConductivityId) || conductivitySamples[0];

  // ==========================================
  // 3. SOLUBILITY & POLARITY LAB STATE & RULES
  // ==========================================
  const solvents = [
    { id: 'water', name: 'পানি (H₂O)', type: 'তীব্র পোলার দ্রাবক (Polar Solvent)', enDiff: '১.৪ (পোলার ডাইপোল)', formula: 'H₂O' },
    { id: 'kerosene', name: 'কেরোসিন / পেট্রোল', type: 'অপোলার হাইড্রোকার্বন দ্রাবক', enDiff: '০.৪ এর নিচে (অপোলার)', formula: 'C₁₂H₂₆' },
    { id: 'ethanol', name: 'ইথানল / অ্যালকোহল (C₂H₅OH)', type: 'মাঝারি পোলার জৈব দ্রাবক', enDiff: 'পোলার -OH মূলকযুক্ত', formula: 'C₂H₅OH' },
    { id: 'benzene', name: 'বেনজিন (C₆H₆)', type: 'অপোলার অ্যারোমেটিক দ্রাবক', enDiff: 'অপোলার রিং', formula: 'C₆H₆' }
  ];

  const solutes = [
    { id: 'nacl', name: 'খাবার লবণ (NaCl)', type: 'আয়নিক যৌগ', waterSoluble: true, nonpolarSoluble: false, desc: 'পানির ডাইপোল Na⁺ ও Cl⁻ এর মধ্যকার ল্যাটিস ভেঙে দ্রবীভূত করে।' },
    { id: 'cuso4', name: 'কপার সালফেট (CuSO₄)', type: 'আয়নিক যৌগ', waterSoluble: true, nonpolarSoluble: false, desc: 'পানিতে দ্রবীভূত হয়ে চমৎকার গাঢ় নীল রঙের দ্রবণ গঠন করে।' },
    { id: 'sugar', name: 'খাবার চিনি (C₁₂H₂₂O₁₁)', type: 'পোলার সমযোজী', waterSoluble: true, nonpolarSoluble: false, desc: 'চিনির বহুসংখ্যক -OH মূলক পানির সাথে শক্তিশালী হাইড্রোজেন বন্ধন তৈরি করে দ্রবীভূত হয়।' },
    { id: 'glucose', name: 'গ্লুকোজ (C₆H₁₂O₆)', type: 'পোলার সমযোজী', waterSoluble: true, nonpolarSoluble: false, desc: 'পোলার মূলকের উপস্থিতির কারণে পানিতে দ্রুত দ্রবীভূত হয়।' },
    { id: 'wax', name: 'মোম (C₂₅H₅₂)', type: 'অপোলার সমযোজী', waterSoluble: false, nonpolarSoluble: true, desc: 'অপোলার হাইড্রোকার্বন। পানিতে অদ্রবণীয় হলেও কেরোসিন ও বেনজিনে সম্পূর্ণ দ্রবীভূত হয়।' },
    { id: 'oil', name: 'রান্নার তেল (Oil)', type: 'অপোলার সমযোজী', waterSoluble: false, nonpolarSoluble: true, desc: 'পানির চেয়ে হালকা এবং অপোলার হওয়ায় পানির উপর ভাসে, কিন্তু কেরোসিনে সহজে দ্রবীভূত হয়।' },
    { id: 'caco3', name: 'চকের গুঁড়া / চুনাপাথর (CaCO₃)', type: 'আয়নিক ব্যতিক্রমী যৌগ', waterSoluble: false, nonpolarSoluble: false, desc: 'আয়নিক যৌগ হওয়া সত্ত্বেও CaCO₃ এর ল্যাটিস শক্তি পানির হাইড্রেশন শক্তির চেয়ে অনেক বেশি। তাই পানিতে অদ্রবণীয়!' },
    { id: 'naphthalene', name: 'ন্যাপথালিন (C₁₀H₈)', type: 'অপোলার সমযোজী', waterSoluble: false, nonpolarSoluble: true, desc: 'অপোলার বেনজিন চক্র। পানিতে অদ্রবণীয়, কিন্তু জৈব দ্রাবকে দ্রবণীয়।' },
    { id: 'iodine', name: 'আয়োডিন কেলাস (I₂)', type: 'অপোলার সমযোজী', waterSoluble: false, nonpolarSoluble: true, desc: 'পানিতে অতি সামান্য দ্রবণীয়, কিন্তু ইথানল ও বেনজিনে দ্রবীভূত হয়ে তীব্র বাদামি-বেগুনী দ্রবণ দেয়।' }
  ];

  const [selectedSolventId, setSelectedSolventId] = useState<string>('water');
  const [selectedSoluteId, setSelectedSoluteId] = useState<string>('nacl');
  const [isStirring, setIsStirring] = useState<boolean>(false);
  const [dissolutionProgress, setDissolutionProgress] = useState<number>(0);

  const selectedSolvent = solvents.find(s => s.id === selectedSolventId) || solvents[0];
  const selectedSolute = solutes.find(s => s.id === selectedSoluteId) || solutes[0];

  // Determine solubility verdict
  const isSoluble = useMemo(() => {
    if (selectedSolvent.id === 'water') {
      return selectedSolute.waterSoluble;
    } else if (selectedSolvent.id === 'kerosene' || selectedSolvent.id === 'benzene') {
      return selectedSolute.nonpolarSoluble;
    } else if (selectedSolvent.id === 'ethanol') {
      return selectedSolute.waterSoluble || selectedSolute.id === 'iodine';
    }
    return false;
  }, [selectedSolvent, selectedSolute]);

  // Stirring effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStirring) {
      interval = setInterval(() => {
        setDissolutionProgress((prev) => {
          if (prev >= 100) {
            setIsStirring(false);
            return 100;
          }
          return prev + 12;
        });
      }, 120);
    }
    return () => clearInterval(interval);
  }, [isStirring]);

  const isMelted = typeof currentThermal.mp === 'number' && temperature >= currentThermal.mp;

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              অধ্যায় ৫: রাসায়নিক বন্ধন
            </span>
            <span className="text-xs text-slate-400">ধর্মের তুলনামূলক ল্যাবরেটরি পরীক্ষা</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Droplets className="h-6 w-6 text-cyan-400" />
            আয়নিক ও সমযোজী যৌগের ধর্ম তুলনা ল্যাব (Compound Properties Lab)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            গলনাঙ্ক ও স্ফুটনাঙ্ক পরীক্ষা, তড়িৎ পরিবাহিতা বর্তনী এবং পানিতে দ্রাব্যতা ও পোলারিটির পূর্ণাঙ্গ পরীক্ষণ।
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto shrink-0">
          <button
            onClick={() => setActiveTab('thermal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'thermal' ? 'bg-rose-500 text-white shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="h-3.5 w-3.5" />
            <span>গলনাঙ্ক পরীক্ষা</span>
          </button>
          <button
            onClick={() => setActiveTab('conductivity')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'conductivity' ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="h-3.5 w-3.5" />
            <span>বিদ্যুৎ পরিবাহিতা</span>
          </button>
          <button
            onClick={() => setActiveTab('solubility')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'solubility' ? 'bg-cyan-500 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Droplets className="h-3.5 w-3.5" />
            <span>পানিতে দ্রাব্যতা ও পোলারিটি</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          TAB 1: THERMAL / MELTING & BOILING TEST
          ======================================================== */}
      {activeTab === 'thermal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Presets */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Flame className="h-4 w-4 text-rose-400" />
                নমুনা যৌগ নির্বাচন ({thermalCompounds.length}টি)
              </h3>

              {/* Furnace Mode Toggle */}
              <button
                onClick={() => {
                  setFurnaceMode(furnaceMode === 'bunsen' ? 'furnace' : 'bunsen');
                  setTemperature(25);
                  setIsHeating(false);
                }}
                className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 hover:border-amber-400"
              >
                {furnaceMode === 'bunsen' ? 'বুনসেন মোড (১০০০°C)' : 'ফার্নেস মোড (৩৮০০°C)'}
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'all', label: 'সকল যৌগ' },
                { id: 'আয়নিক যৌগ', label: 'আয়নিক' },
                { id: 'পোলার সমযোজী', label: 'পোলার সমযোজী' },
                { id: 'অপোলার সমযোজী', label: 'অপোলার' },
                { id: 'বিশালাকার সমযোজী কেলাস (ব্যতিক্রম)', label: 'ব্যতিক্রম' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setThermalFilter(f.id)}
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold transition ${
                    thermalFilter === f.id
                      ? 'bg-rose-500 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Scrollable Compound List */}
            <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
              {filteredThermal.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedThermalId(item.id);
                    setTemperature(25);
                    setIsHeating(false);
                  }}
                  className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                    currentThermal.id === item.id
                      ? 'bg-rose-500/20 border-rose-500 text-white shadow-md shadow-rose-500/10'
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">{item.name.split(' (')[0]}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{item.type}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-rose-400">{item.mp}°C</span>
                    <span className="text-[9px] text-slate-500 block">গলনাঙ্ক</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Temperature & Burner Control Box */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase">থার্মোমিটার রিডিং:</span>
                <span className="text-xl font-mono font-black text-rose-400">{temperature}°C</span>
              </div>

              <input
                type="range"
                min="0"
                max={maxTemp}
                step={furnaceMode === 'bunsen' ? 5 : 20}
                value={temperature}
                onChange={(e) => {
                  setTemperature(Number(e.target.value));
                  setIsHeating(false);
                }}
                className="w-full accent-rose-500 cursor-pointer"
              />

              <div className="flex gap-2">
                <button
                  onClick={() => setIsHeating(!isHeating)}
                  className={`flex-1 py-2 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
                    isHeating
                      ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg'
                      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30'
                  }`}
                >
                  {isHeating ? (
                    <>
                      <Pause className="h-4 w-4" /> বার্নার অফ করুন
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" /> বার্নার অন করুন
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setTemperature(25);
                    setIsHeating(false);
                  }}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer"
                  title="কক্ষ তাপমাত্রায় রিসেট"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Visualization Display */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">{currentThermal.name}</h3>
                <p className="text-xs text-slate-400">
                  শ্রেণি: <span className="text-cyan-400 font-semibold">{currentThermal.category}</span> • প্রমাণ গলনাঙ্ক: <span className="font-mono text-rose-400 font-bold">{currentThermal.mp}°C</span> • স্ফুটনাঙ্ক: <span className="font-mono text-amber-400 font-bold">{currentThermal.bp}°C</span>
                </p>
              </div>
              <div className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
                isMelted
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                {isMelted ? '🔥 গলিত তরল অবস্থা (Melted Liquid)' : '🧊 কঠিন কেলাস অবস্থা (Solid Crystal)'}
              </div>
            </div>

            {/* Crucible & Flame SVG Graphic */}
            <div className="relative h-64 flex items-center justify-center my-4">
              {/* Stand */}
              <div className="absolute w-56 h-3 bg-slate-700 rounded top-28 z-10 shadow-lg"></div>
              <div className="absolute w-2 h-44 bg-slate-600 left-1/2 -translate-x-28 top-28 z-0"></div>
              <div className="absolute w-2 h-44 bg-slate-600 left-1/2 translate-x-26 top-28 z-0"></div>

              {/* Crucible Cup */}
              <div className="relative z-20 top-4 w-36 h-28 bg-gradient-to-b from-slate-200 to-slate-400 rounded-b-full border-4 border-slate-500 flex items-center justify-center shadow-2xl overflow-hidden">
                {/* Content Inside */}
                <div
                  className={`w-28 transition-all duration-700 ${
                    isMelted
                      ? 'h-10 rounded-b-2xl bg-amber-400/90 shadow-inner translate-y-6'
                      : 'h-20 rounded-t-lg bg-slate-100 flex flex-wrap gap-1.5 p-2 justify-center items-center'
                  }`}
                >
                  {!isMelted ? (
                    Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3.5 h-3.5 rounded-sm shadow-sm ${
                          currentThermal.category.includes('আয়নিক')
                            ? i % 2 === 0 ? 'bg-cyan-600' : 'bg-emerald-500'
                            : currentThermal.category.includes('ব্যতিক্রম')
                            ? 'bg-slate-900 border border-slate-700'
                            : 'bg-amber-200 border border-amber-400'
                        }`}
                      />
                    ))
                  ) : (
                    <div className="text-[10px] font-bold text-slate-950 tracking-wide text-center">
                      তরল গলিত রূপ
                    </div>
                  )}
                </div>
              </div>

              {/* Flame */}
              <div className="absolute bottom-2 z-10 flex flex-col items-center">
                {isHeating && (
                  <div className="relative w-14 h-24 -mb-3">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-amber-400 to-transparent rounded-full animate-ping opacity-75 blur-sm"></div>
                    <div className="absolute inset-x-2 bottom-0 top-2 bg-gradient-to-t from-cyan-400 via-amber-300 to-rose-500 rounded-full animate-bounce"></div>
                  </div>
                )}
                <div className="w-8 h-16 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-700 rounded-t border border-slate-500"></div>
                <div className="w-20 h-4 bg-slate-800 rounded-full border border-slate-600 shadow-md"></div>
              </div>

              {/* Thermometer Tube */}
              <div className="absolute right-6 top-2 flex flex-col items-center bg-slate-950/90 p-3 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 mb-1">থার্মোমিটার</span>
                <div className="w-3.5 h-40 bg-slate-800 rounded-full relative overflow-hidden p-0.5">
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 via-amber-400 to-rose-500 rounded-full transition-all duration-300"
                    style={{ height: `${Math.min(100, (temperature / maxTemp) * 100)}%` }}
                  ></div>
                </div>
                <div className="w-5 h-5 rounded-full bg-rose-500 -mt-1 shadow-lg shadow-rose-500/50"></div>
                <span className="text-xs font-mono font-black text-rose-400 mt-2">{temperature}°C</span>
              </div>
            </div>

            {/* Scientific Explanation Box */}
            <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-xl space-y-1.5 text-xs">
              <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                <Info className="h-4 w-4" />
                তত্ত্বীয় কারণ ও ব্যাখ্যা:
              </div>
              <p className="text-slate-300 leading-relaxed">{currentThermal.reason}</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: CONDUCTIVITY TEST WITH CIRCUIT & AMMETER
          ======================================================== */}
      {activeTab === 'conductivity' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sample Select List */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                নমুনা নির্বাচন ({conductivitySamples.length}টি)
              </h3>
              <button
                onClick={() => setCircuitClosed(!circuitClosed)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                  circuitClosed
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                সুইচ: {circuitClosed ? 'অন (ON)' : 'অফ (OFF)'}
              </button>
            </div>

            {/* Sample Button List */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
              {conductivitySamples.map(sample => (
                <button
                  key={sample.id}
                  onClick={() => setSelectedConductivityId(sample.id)}
                  className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                    currentConductivity.id === sample.id
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-md shadow-amber-500/10'
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">{sample.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{sample.category}</div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    sample.conducts
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {sample.conducts ? 'পরিবাহী' : 'অপরিবাহী'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Visual Circuit Simulation */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">{currentConductivity.name}</h3>
                <p className="text-xs text-slate-400">{currentConductivity.category}</p>
              </div>
              <div className="flex items-center gap-3">
                {/* Ammeter Readout */}
                <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-right">
                  <span className="text-[9px] text-slate-400 uppercase font-mono block">অ্যামিটার কারেন্ট</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">
                    {circuitClosed ? currentConductivity.currentMa : 0} mA
                  </span>
                </div>
                <div className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
                  circuitClosed && currentConductivity.conducts
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {circuitClosed && currentConductivity.conducts ? '💡 বাল্ব প্রজ্জ্বলিত' : 'বাল্ব নিভে আছে'}
                </div>
              </div>
            </div>

            {/* Interactive Circuit Canvas SVG */}
            <div className="relative h-72 my-4 flex items-center justify-center">
              <svg className="w-full h-full max-w-lg" viewBox="0 0 500 300">
                {/* Wires */}
                <path
                  d="M 120 60 L 240 60"
                  stroke={circuitClosed && currentConductivity.conducts ? '#f59e0b' : '#475569'}
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  d="M 300 60 L 400 60 L 400 170"
                  stroke={circuitClosed && currentConductivity.conducts ? '#f59e0b' : '#475569'}
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  d="M 100 100 L 100 170"
                  stroke={circuitClosed && currentConductivity.conducts ? '#f59e0b' : '#475569'}
                  strokeWidth="4"
                  fill="none"
                />

                {/* Battery */}
                <g transform="translate(100, 60)">
                  <rect x="-15" y="-12" width="30" height="24" rx="4" fill="#334155" stroke="#64748b" strokeWidth="2" />
                  <line x1="-8" y1="-8" x2="-8" y2="8" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="8" y1="-14" x2="8" y2="14" stroke="#f43f5e" strokeWidth="4" />
                  <text x="-12" y="-16" fill="#38bdf8" fontSize="10" fontWeight="bold">-</text>
                  <text x="6" y="-18" fill="#f43f5e" fontSize="10" fontWeight="bold">+</text>
                  <text x="-16" y="24" fill="#94a3b8" fontSize="9">ব্যাটারি (6V)</text>
                </g>

                {/* Switch */}
                <g transform="translate(240, 60)" className="cursor-pointer" onClick={() => setCircuitClosed(!circuitClosed)}>
                  <circle cx="0" cy="0" r="4" fill="#94a3b8" />
                  <circle cx="30" cy="0" r="4" fill="#94a3b8" />
                  <line
                    x1="0"
                    y1="0"
                    x2={circuitClosed ? "30" : "22"}
                    y2={circuitClosed ? "0" : "-18"}
                    stroke={circuitClosed ? '#22c55e' : '#f43f5e'}
                    strokeWidth="3"
                  />
                  <text x="-5" y="-22" fill="#94a3b8" fontSize="9">সুইচ ({circuitClosed ? 'অন' : 'অফ'})</text>
                </g>

                {/* Light Bulb */}
                <g transform="translate(370, 60)">
                  {circuitClosed && currentConductivity.conducts && (
                    <circle cx="0" cy="0" r="30" fill="#fbbf24" opacity={currentConductivity.currentMa > 100 ? 0.35 : 0.15} className="animate-ping" />
                  )}
                  <circle
                    cx="0"
                    cy="0"
                    r="16"
                    fill={circuitClosed && currentConductivity.conducts ? '#fbbf24' : '#1e293b'}
                    stroke={circuitClosed && currentConductivity.conducts ? '#f59e0b' : '#64748b'}
                    strokeWidth="2"
                  />
                  <path
                    d="M -5 6 Q 0 -6 5 6"
                    stroke={circuitClosed && currentConductivity.conducts ? '#ffffff' : '#475569'}
                    strokeWidth="2"
                    fill="none"
                  />
                  <text x="-24" y="28" fill="#cbd5e1" fontSize="9" fontWeight="bold">
                    {circuitClosed && currentConductivity.conducts ? '💡 প্রজ্জ্বলিত' : 'নিভে আছে'}
                  </text>
                </g>

                {/* Beaker with Sample */}
                <g transform="translate(180, 150)">
                  <rect x="0" y="0" width="140" height="130" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="3" opacity="0.95" />
                  {/* Liquid / substance fill */}
                  <rect x="4" y="25" width="132" height="100" rx="4" fill="#0284c7" opacity="0.25" />

                  {/* Electrodes */}
                  <rect x="25" y="10" width="12" height="90" rx="2" fill="#64748b" stroke="#94a3b8" strokeWidth="1" />
                  <text x="18" y="5" fill="#38bdf8" fontSize="10" fontWeight="bold">(-) ক্যাথোড</text>

                  <rect x="103" y="10" width="12" height="90" rx="2" fill="#64748b" stroke="#94a3b8" strokeWidth="1" />
                  <text x="96" y="5" fill="#f43f5e" fontSize="10" fontWeight="bold">(+) অ্যানোড</text>

                  {/* Ion movement animations if conducts */}
                  {circuitClosed && currentConductivity.conducts && (
                    <g>
                      <circle cx="45" cy="50" r="7" fill="#06b6d4" className="animate-pulse" />
                      <text x="40" y="53" fill="#ffffff" fontSize="7" fontWeight="bold">+</text>
                      <circle cx="85" cy="70" r="7" fill="#10b981" className="animate-pulse" />
                      <text x="82" y="73" fill="#ffffff" fontSize="7" fontWeight="bold">-</text>
                    </g>
                  )}
                </g>

                {/* Electrode Wires */}
                <path d="M 100 170 L 211 170" stroke={circuitClosed && currentConductivity.conducts ? '#f59e0b' : '#475569'} strokeWidth="3" fill="none" />
                <path d="M 400 170 L 289 170" stroke={circuitClosed && currentConductivity.conducts ? '#f59e0b' : '#475569'} strokeWidth="3" fill="none" />
              </svg>
            </div>

            {/* Explanation Footer */}
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1 text-xs">
              <span className="font-bold text-amber-400">পর্যবেক্ষণ ও ব্যাখ্যা: </span>
              <p className="text-slate-300 leading-relaxed">{currentConductivity.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 3: SOLUBILITY & POLARITY LAB
          ======================================================== */}
      {activeTab === 'solubility' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Solute & Solvent Selection Panel */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Like Dissolves Like নীতি
              </span>
              <h3 className="font-bold text-white text-sm">দ্রাব ও দ্রাবক নির্বাচন</h3>
            </div>

            {/* Solvents */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-400 font-semibold uppercase">দ্রাবক (Solvent)</label>
              <div className="grid grid-cols-2 gap-2">
                {solvents.map(solv => (
                  <button
                    key={solv.id}
                    onClick={() => {
                      setSelectedSolventId(solv.id);
                      setDissolutionProgress(0);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                      selectedSolvent.id === solv.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{solv.name.split(' (')[0]}</div>
                    <div className="text-[10px] text-cyan-400 font-mono mt-0.5">{solv.formula}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Solutes */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-400 font-semibold uppercase">দ্রাব (Solute - {solutes.length}টি)</label>
              <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                {solutes.map(sol => (
                  <button
                    key={sol.id}
                    onClick={() => {
                      setSelectedSoluteId(sol.id);
                      setDissolutionProgress(0);
                    }}
                    className={`w-full p-2 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                      selectedSolute.id === sol.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-semibold">{sol.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{sol.type.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stir Action Button */}
            <button
              onClick={() => setIsStirring(true)}
              disabled={isStirring}
              className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/30 transition cursor-pointer"
            >
              <RefreshCw className={`h-4 w-4 ${isStirring ? 'animate-spin' : ''}`} />
              {isStirring ? 'নাড়ানি চলছে (Stirring)...' : 'মিশ্রণটি নাড়ুন (Stir Solution)'}
            </button>
          </div>

          {/* Visual Beaker & Hydration Mechanism */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">
                  {selectedSolvent.name} + {selectedSolute.name}
                </h3>
                <p className="text-xs text-slate-400">দ্রাব্যতা ও ডাইপোল প্রতিক্রিয়া পর্যবেক্ষণ</p>
              </div>

              <div className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                isSoluble
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              }`}>
                {isSoluble ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    সম্পূর্ণ দ্রবণীয় (Soluble)
                  </>
                ) : (
                  <>
                    <XCircle className="h-3.5 w-3.5" />
                    অদ্রবণীয় / অমিশ্রণীয় (Insoluble)
                  </>
                )}
              </div>
            </div>

            {/* Beaker Canvas */}
            <div className="relative h-72 my-4 bg-slate-950/60 rounded-2xl border border-slate-800 flex items-center justify-center p-4">
              {isSoluble ? (
                <div className="flex flex-col items-center text-center space-y-3 max-w-md">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="h-10 w-10 text-emerald-400 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">দ্রবণ তৈরি সম্পন্ন হয়েছে!</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selectedSolute.desc}</p>
                  </div>
                  <div className="text-[11px] text-cyan-400 font-mono">
                    দ্রাবকের প্রকৃতি: {selectedSolvent.type}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center space-y-3 max-w-md">
                  <div className="w-20 h-20 rounded-full bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
                    <XCircle className="h-10 w-10 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">অদ্রবণীয় / দুই স্তর তৈরি হয়েছে</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      "Like Dissolves Like" নীতি অনুযায়ী পোলার ও অপোলার অণু একে অপরকে আকর্ষণ করতে পারে না। {selectedSolute.desc}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Principle Summary */}
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1 text-xs">
              <span className="font-bold text-cyan-400">💡 রসায়নের মূলনীতি (Like Dissolves Like): </span>
              <p className="text-slate-300 leading-relaxed">
                পোলার দ্রাবকসমূহ (যেমন পানি) পোলার ও আয়নিক যৌগকে দ্রবীভূত করতে সক্ষম। অপরদিকে অপোলার দ্রাবকসমূহ (যেমন কেরোসিন, বেনজিন) অপোলার জৈব যৌগ ও হাইড্রোকার্বনকে দ্রবীভূত করে।
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
