import React, { useState, useEffect } from 'react';
import { Slide } from '../types/presentation';
import { 
  X, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  ChevronUp, 
  ChevronDown, 
  Edit3, 
  Sparkles, 
  Info, 
  AlertTriangle, 
  HelpCircle, 
  Check,
  FileText
} from 'lucide-react';

interface SlideEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: Slide;
  slideIndex: number;
  totalSlides: number;
  onSave: (updatedSlide: Slide) => void;
  onResetOriginal?: () => void;
  isEdited?: boolean;
}

export const SlideEditModal: React.FC<SlideEditModalProps> = ({
  isOpen,
  onClose,
  slide,
  slideIndex,
  totalSlides,
  onSave,
  onResetOriginal,
  isEdited = false,
}) => {
  // Local state for editing fields
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [speakerNotes, setSpeakerNotes] = useState<string>('');
  const [keyPoints, setKeyPoints] = useState<Slide['keyPoints']>([]);
  
  // Callout state
  const [hasCallout, setHasCallout] = useState<boolean>(false);
  const [calloutType, setCalloutType] = useState<'info' | 'warning' | 'formula' | 'tip'>('info');
  const [calloutTitle, setCalloutTitle] = useState<string>('');
  const [calloutContent, setCalloutContent] = useState<string>('');

  const [activeTab, setActiveTab] = useState<'points' | 'callout' | 'notes'>('points');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // Sync state with slide prop whenever modal opens or slide changes
  useEffect(() => {
    if (!slide) return;
    setTitle(slide.title || '');
    setSubtitle(slide.subtitle || '');
    setCategory(slide.category || '');
    setSpeakerNotes(slide.speakerNotes || '');
    setKeyPoints(slide.keyPoints ? JSON.parse(JSON.stringify(slide.keyPoints)) : []);

    if (slide.callout) {
      setHasCallout(true);
      setCalloutType(slide.callout.type || 'info');
      setCalloutTitle(slide.callout.title || '');
      setCalloutContent(slide.callout.content || '');
    } else {
      setHasCallout(false);
      setCalloutType('info');
      setCalloutTitle('');
      setCalloutContent('');
    }
    setSaveSuccess(false);
  }, [slide, isOpen]);

  // Key point handlers
  const handleKeyPointChange = (index: number, field: string, val: string) => {
    setKeyPoints(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: val };
      return copy;
    });
  };

  const handleAddKeyPoint = () => {
    setKeyPoints(prev => [
      ...prev,
      {
        heading: `নতুন পয়েন্ট ${prev.length + 1}`,
        description: 'এখানে বিস্তারিত বিবরণ ও ব্যাখ্যা লিখুন।',
        highlight: '',
        formula: '',
      }
    ]);
  };

  const handleRemoveKeyPoint = (index: number) => {
    setKeyPoints(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleMoveKeyPoint = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === keyPoints.length - 1) return;
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    
    setKeyPoints(prev => {
      const copy = [...prev];
      const temp = copy[index];
      copy[index] = copy[targetIdx];
      copy[targetIdx] = temp;
      return copy;
    });
  };

  // Save handler
  const handleSave = () => {
    const updatedSlide: Slide = {
      ...slide,
      title: title.trim(),
      subtitle: subtitle.trim(),
      category: category.trim(),
      speakerNotes: speakerNotes.trim(),
      keyPoints,
      callout: hasCallout
        ? {
            type: calloutType,
            title: calloutTitle.trim(),
            content: calloutContent.trim(),
          }
        : undefined,
    };

    onSave(updatedSlide);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 400);
  };

  // Keyboard shortcut: Ctrl+S or Cmd+S to save
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, title, subtitle, category, speakerNotes, keyPoints, hasCallout, calloutType, calloutTitle, calloutContent]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Edit3 className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-wide">স্লাইড সম্পাদনা (Quick Slide Editor)</h2>
                <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                  স্লাইড {slideIndex + 1} / {totalSlides}
                </span>
                {isEdited && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-950 text-amber-300 border border-amber-800">
                    সম্পাদিত
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">
                স্লাইডের শিরোনাম, বুলেট পয়েন্ট বা গুরুত্বপূর্ণ নোট সরাসরি পরিবর্তন করুন (Ctrl+S দিয়ে সংরক্ষণ করুন)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isEdited && onResetOriginal && (
              <button
                onClick={() => {
                  if (window.confirm('আপনি কি এই স্লাইডটির মূল (Original) কনটেন্টে ফিরে যেতে চান?')) {
                    onResetOriginal();
                    onClose();
                  }
                }}
                title="মূল স্লাইড পুনরুদ্ধার করুন"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-400 hover:text-amber-300 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-800/80 transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>আসল স্লাইড</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/80 bg-slate-900/50">
          <button
            onClick={() => setActiveTab('points')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 text-xs md:text-sm font-semibold transition ${
              activeTab === 'points'
                ? 'border-cyan-400 text-cyan-400 bg-cyan-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>শিরোনাম ও বুলেট পয়েন্ট ({keyPoints.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('callout')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 text-xs md:text-sm font-semibold transition ${
              activeTab === 'callout'
                ? 'border-cyan-400 text-cyan-400 bg-cyan-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Info className="h-4 w-4" />
            <span>কল-আউট বক্স {hasCallout ? '✓' : ''}</span>
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 text-xs md:text-sm font-semibold transition ${
              activeTab === 'notes'
                ? 'border-cyan-400 text-cyan-400 bg-cyan-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>স্পিকার নোটস</span>
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: Points & Title */}
          {activeTab === 'points' && (
            <div className="space-y-6">
              {/* Title & Subtitle Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    স্লাইড শিরোনাম (Title) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="স্লাইডের শিরোনাম লিখুন..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    উপশিরোনাম (Subtitle / Tagline)
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="সংক্ষিপ্ত উপশিরোনাম..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Category / Badge */}
              <div className="w-full md:w-1/2 space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  বিভাগ / ক্যাটাগরি ব্যাজ (Category)
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="যেমন: পরমাণুর গঠন, সূত্র ও প্রমাণ..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Key Points Header & Add Button */}
              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">বুলেট পয়েন্টসমূহ (Key Points)</h3>
                    <p className="text-xs text-slate-400">
                      স্লাইড শো-তে প্রতিটি পয়েন্ট ধাপে ধাপে দৃশ্যমান হবে
                    </p>
                  </div>
                  <button
                    onClick={handleAddKeyPoint}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>নতুন পয়েন্ট যোগ করুন</span>
                  </button>
                </div>

                {/* Points List */}
                <div className="space-y-3">
                  {keyPoints.length === 0 ? (
                    <div className="p-8 rounded-xl border border-dashed border-slate-700 text-center text-slate-400 text-xs">
                      বর্তমানে কোনো পয়েন্ট নেই। ওপরের বাটনে ক্লিক করে নতুন পয়েন্ট যোগ করুন।
                    </div>
                  ) : (
                    keyPoints.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 relative group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-black">
                              {idx + 1}
                            </span>
                            <span className="text-xs font-bold text-slate-300">
                              পয়েন্ট {idx + 1}
                            </span>
                          </div>

                          {/* Re-order & Delete Controls */}
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleMoveKeyPoint(idx, 'up')}
                              disabled={idx === 0}
                              title="উপরে নিন"
                              className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400"
                            >
                              <ChevronUp className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleMoveKeyPoint(idx, 'down')}
                              disabled={idx === keyPoints.length - 1}
                              title="নিচে নামান"
                              className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400"
                            >
                              <ChevronDown className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleRemoveKeyPoint(idx)}
                              title="পয়েন্টটি মুছে ফেলুন"
                              className="p-1 rounded text-slate-400 hover:text-rose-400 transition ml-1"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Heading */}
                        <div>
                          <label className="text-[11px] text-slate-400 block mb-1">শিরোনাম (Heading)</label>
                          <input
                            type="text"
                            value={pt.heading}
                            onChange={(e) => handleKeyPointChange(idx, 'heading', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-cyan-400"
                          />
                        </div>

                        {/* Description */}
                        <div>
                          <label className="text-[11px] text-slate-400 block mb-1">বিস্তারিত ব্যাখ্যা (Description)</label>
                          <textarea
                            rows={2}
                            value={pt.description}
                            onChange={(e) => handleKeyPointChange(idx, 'description', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-cyan-400 resize-y"
                          />
                        </div>

                        {/* Highlight & Formula Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                          <div>
                            <label className="text-[11px] text-cyan-400 block mb-1">হাইলাইট ট্যাগ (ঐচ্ছিক)</label>
                            <input
                              type="text"
                              value={pt.highlight || ''}
                              onChange={(e) => handleKeyPointChange(idx, 'highlight', e.target.value)}
                              placeholder="যেমন: মূল বৈশিষ্ট্য"
                              className="w-full px-2.5 py-1 rounded-lg bg-slate-900 border border-cyan-900/60 text-cyan-300 text-xs focus:outline-none focus:border-cyan-400"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] text-amber-400 block mb-1">সূত্র / সমীকরণ (ঐচ্ছিক)</label>
                            <input
                              type="text"
                              value={pt.formula || ''}
                              onChange={(e) => handleKeyPointChange(idx, 'formula', e.target.value)}
                              placeholder="যেমন: E = mc² বা 2n²"
                              className="w-full px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-900/60 text-amber-300 font-mono text-xs focus:outline-none focus:border-amber-400"
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Callout Box */}
          {activeTab === 'callout' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div>
                  <h4 className="text-sm font-bold text-white">কল-আউট বা বিশেষ নোট বক্স প্রদর্শন</h4>
                  <p className="text-xs text-slate-400">
                    স্লাইডের নিচে বিশেষ সূত্র, সতর্কতা বা গুরুত্বপূর্ণ তথ্য বক্স আকারে তুলে ধরতে চালু করুন
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={hasCallout}
                  onChange={(e) => setHasCallout(e.target.checked)}
                  className="h-5 w-5 accent-cyan-500 rounded cursor-pointer"
                />
              </div>

              {hasCallout && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 animate-in fade-in">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      বক্সের ধরণ (Callout Type)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        { id: 'info', label: 'তথ্য (Info)', color: 'text-cyan-400 border-cyan-800' },
                        { id: 'formula', label: 'সূত্র (Formula)', color: 'text-amber-400 border-amber-800' },
                        { id: 'warning', label: 'সতর্কতা (Warning)', color: 'text-rose-400 border-rose-800' },
                        { id: 'tip', label: 'পরামর্শ (Tip)', color: 'text-emerald-400 border-emerald-800' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setCalloutType(t.id as any)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border transition ${
                            calloutType === t.id
                              ? `bg-slate-800 ${t.color} ring-1 ring-white/20`
                              : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      বক্স শিরোনাম (Title)
                    </label>
                    <input
                      type="text"
                      value={calloutTitle}
                      onChange={(e) => setCalloutTitle(e.target.value)}
                      placeholder="যেমন: মনে রাখবে / গুরুত্বপূর্ণ সূত্র..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      বক্স কনটেন্ট / বিবরণ (Content)
                    </label>
                    <textarea
                      rows={3}
                      value={calloutContent}
                      onChange={(e) => setCalloutContent(e.target.value)}
                      placeholder="বক্সের ভেতরে প্রদর্শনযোগ্য বিস্তারিত বিবরণ বা সূত্র লিখুন..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Speaker Notes */}
          {activeTab === 'notes' && (
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">স্পিকার নোটস (Speaker Notes)</h4>
                <p className="text-xs text-slate-400">
                  ক্লাস নেওয়ার সময় বা প্রেজেন্টেশন চলাকালীন উপস্থাপকের নিজস্ব রেফারেন্স ও পয়েন্ট মনে রাখার জন্য নোট
                </p>
              </div>

              <textarea
                rows={6}
                value={speakerNotes}
                onChange={(e) => setSpeakerNotes(e.target.value)}
                placeholder="উপস্থাপনার সময় স্মরণ রাখার মতো বিশেষ কথা, প্রশ্ন বা রেফারেন্স এখানে লিখে রাখুন..."
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/70">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <span className="font-mono text-cyan-400">Ctrl + S</span>
            <span>চেপে দ্রুত সংরক্ষণ করতে পারবেন</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition"
            >
              বাতিল
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition active:scale-95"
            >
              {saveSuccess ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>সংরক্ষিত হয়েছে!</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>সংরক্ষণ করুন</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
