import React, { useState, useRef } from 'react';
import { parsePptxFile, PptxImportResult } from '../services/pptxImportService';
import { Slide } from '../types/presentation';
import { 
  X, 
  Upload, 
  FileUp, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Image as ImageIcon, 
  ArrowRight, 
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface PptxUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSubject: 'chemistry' | 'physics' | 'biology';
  activeChapter: 1 | 2 | 3 | 4 | 5;
  subjectLabel: string;
  chapterTitle: string;
  onApplySlides: (slides: Slide[]) => void;
  isCustomActive?: boolean;
  onResetOriginal?: () => void;
}

export const PptxUploadModal: React.FC<PptxUploadModalProps> = ({
  isOpen,
  onClose,
  activeSubject,
  activeChapter,
  subjectLabel,
  chapterTitle,
  onApplySlides,
  isCustomActive = false,
  onResetOriginal
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [importResult, setImportResult] = useState<PptxImportResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const handleFileChange = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.name.toLowerCase().endsWith('.pptx')) {
      setErrorMsg('অনুগ্রহ করে শুধুমাত্র মাইক্রোসফট পাওয়ারপয়েন্ট (.pptx) ফাইল নির্বাচন করুন।');
      return;
    }

    try {
      setIsProcessing(true);
      setErrorMsg(null);
      const result = await parsePptxFile(file, activeSubject, activeChapter);
      setImportResult(result);
    } catch (err: any) {
      console.error('PPTX parse error:', err);
      setErrorMsg(err.message || 'পাওয়ারপয়েন্ট ফাইলটি বিশ্লেষণ করতে সমস্যা হয়েছে। ফাইলটি সঠিক কিনা যাচাই করুন।');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleApply = () => {
    if (importResult && importResult.slides.length > 0) {
      onApplySlides(importResult.slides);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="flex w-full max-w-2xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <FileUp className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">পাওয়ারপয়েন্ট (.pptx) স্লাইড আপলোড</h2>
              <p className="text-xs text-slate-400">
                লক্ষ্য অধ্যায়: <strong className="text-emerald-400">{subjectLabel} অধ্যায় {activeChapter}: {chapterTitle}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Active status notice */}
          {isCustomActive && (
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-amber-500/30 bg-amber-950/20 text-xs">
              <div className="flex items-center gap-2 text-amber-300">
                <Sparkles className="h-4 w-4 shrink-0 text-amber-400" />
                <span>বর্তমানে এই অধ্যায়ে আপনার পূর্বের আপলোডকৃত কাস্টম স্লাইড চালু রয়েছে।</span>
              </div>
              {onResetOriginal && (
                <button
                  onClick={() => {
                    onResetOriginal();
                    onClose();
                  }}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-rose-900/60 text-slate-200 hover:text-rose-200 transition font-medium text-[11px]"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>আসল স্লাইডে ফিরে যান</span>
                </button>
              )}
            </div>
          )}

          {/* Upload Dropzone */}
          {!importResult && (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleFileChange(e.dataTransfer.files);
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                isDragging
                  ? 'border-emerald-400 bg-emerald-950/30 ring-4 ring-emerald-500/20'
                  : 'border-slate-700 bg-slate-950/60 hover:border-emerald-500/60 hover:bg-slate-950'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files)}
              />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 mb-3 ring-1 ring-emerald-500/30">
                <Upload className="h-7 w-7" />
              </div>

              <h3 className="text-sm font-bold text-white mb-1">
                কম্পিউটার থেকে .pptx ফাইল টেনে এনে ড্রপ করুন অথবা ব্রাউজ করুন
              </h3>
              <p className="text-xs text-slate-400 text-center max-w-md">
                আপনার ডাউনলোডকৃত ও এডিট করা পাওয়ারপয়েন্ট প্রেজেন্টেশন ফাইলটি নির্বাচন করুন। সব টেক্সট, হেডিং, বুলেট পয়েন্ট ও ছবি স্বয়ংক্রিয়ভাবে অ্যাপ্লিকেশনে সাজিয়ে নেওয়া হবে।
              </p>

              {isProcessing && (
                <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-emerald-400 animate-pulse">
                  <div className="h-3 w-3 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                  <span>পাওয়ারপয়েন্ট স্লাইডগুলো বিশ্লেষণ করা হচ্ছে...</span>
                </div>
              )}
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl border border-rose-500/30 bg-rose-950/30 text-rose-200 text-xs">
              <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <strong className="font-bold text-rose-300">ত্রুটি:</strong>
                <p>{errorMsg}</p>
              </div>
            </div>
          )}

          {/* Parsed Result Summary */}
          {importResult && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                  <div>
                    <h4 className="text-sm font-bold text-white">স্লাইড বিশ্লেষণ সফল হয়েছে!</h4>
                    <p className="text-xs text-slate-300">
                      মোট <strong className="text-emerald-400 font-bold">{importResult.slideCount}টি স্লাইড</strong> প্রস্তুত রয়েছে।
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setImportResult(null);
                    setErrorMsg(null);
                  }}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  অন্য ফাইল বেছে নিন
                </button>
              </div>

              {/* Slide Preview List */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  আমদানিকৃত স্লাইডের সংক্ষিপ্ত রূপ:
                </span>
                <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                  {importResult.slides.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-800 bg-slate-950/80 text-xs"
                    >
                      <div className="flex items-center gap-2.5 truncate pr-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-slate-800 text-[10px] font-mono text-cyan-400 font-bold">
                          {idx + 1}
                        </span>
                        <div className="truncate">
                          <span className="font-bold text-white">{s.title}</span>
                          {s.subtitle && <span className="text-slate-400 ml-1.5 truncate">({s.subtitle})</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 text-[11px] text-slate-400">
                        {s.image && (
                          <span className="flex items-center gap-0.5 text-emerald-400">
                            <ImageIcon className="h-3 w-3" />
                            <span>ছবি</span>
                          </span>
                        )}
                        <span>{s.keyPoints.length}টি পয়েন্ট</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4 bg-slate-950">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            বাতিল
          </button>

          {importResult && (
            <button
              onClick={handleApply}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition"
            >
              <span>এই স্লাইডগুলো চালু করুন</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
