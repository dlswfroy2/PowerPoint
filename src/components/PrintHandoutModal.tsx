import React from 'react';
import { Slide } from '../types/presentation';
import { X, Printer, Download, BookOpen } from 'lucide-react';

interface PrintHandoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
}

export const PrintHandoutModal: React.FC<PrintHandoutModalProps> = ({
  isOpen,
  onClose,
  slides
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const chapterNum = slides[0]?.chapter || 1;
  const chapterName = 
    chapterNum === 1 ? 'অধ্যায় ১: রসায়নের ধারণা (Concepts of Chemistry)' :
    chapterNum === 2 ? 'অধ্যায় ২: পদার্থের অবস্থা (States of Matter)' :
    'অধ্যায় ৩: পদার্থের গঠন (Structure of Matter)';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="flex h-[92vh] w-full max-w-5xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Header (Hidden in Print) */}
        <div className="no-print flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <BookOpen className="h-4 w-4" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">{chapterName} — লেকচার হ্যান্ডআউট</h2>
              <p className="text-xs text-slate-400">পরীক্ষার রিভিশন শিট বা প্রিন্ট করার উপযুক্ত ফরম্যাট</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition"
            >
              <Printer className="h-4 w-4" />
              <span>প্রিন্ট / PDF সেভ করুন</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-white text-slate-900">
          <div className="border-b-2 border-slate-900 pb-4 text-center space-y-1">
            <span className="text-xs uppercase tracking-widest text-slate-600 font-bold">
              জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) · নবম-দশম শ্রেণি ও এসএসসি
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950">
              রসায়ন · {chapterName}
            </h1>
            <p className="text-xs text-slate-600">
              পূর্ণাঙ্গ স্লাইড বিবরণী, মূল তত্ত্ব, পরীক্ষা ও সমাধান হ্যান্ডআউট
            </p>
          </div>

          {/* Render each slide as clean structured print block */}
          <div className="space-y-6">
            {slides.map((slide, idx) => (
              <div 
                key={slide.id} 
                className="print-slide border border-slate-300 rounded-xl p-6 bg-slate-50 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-300 pb-2">
                  <span className="text-xs font-bold text-cyan-800 uppercase">
                    স্লাইড {idx + 1}: {slide.category}
                  </span>
                  <span className="text-xs text-slate-500">অধ্যায় {slide.chapter || chapterNum}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">{slide.title}</h3>
                  <p className="text-xs font-medium text-slate-700">{slide.subtitle}</p>
                </div>

                {/* Print Gallery Images (2 to 3 images per slide) */}
                {slide.gallery && slide.gallery.length > 0 ? (
                  <div className={`my-3 grid grid-cols-1 ${slide.gallery.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-3`}>
                    {slide.gallery.map((gItem, gIdx) => (
                      <div key={gIdx} className="border border-slate-300 rounded-lg overflow-hidden bg-white flex flex-col justify-between">
                        {gItem.url ? (
                          <div className="h-36 w-full flex items-center justify-center bg-slate-100 overflow-hidden">
                            <img
                              src={gItem.url}
                              alt={gItem.titleBn}
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-28 w-full flex items-center justify-center bg-slate-100 text-slate-700 font-bold text-xs p-2 text-center border-b border-slate-200">
                            {gItem.titleBn}
                          </div>
                        )}
                        <div className="p-2 bg-slate-50 border-t border-slate-200">
                          <strong className="block text-[11px] text-slate-900 font-bold">
                            চিত্র {gIdx + 1}: {gItem.titleBn}
                          </strong>
                          <p className="text-[10px] text-slate-600 line-clamp-2 mt-0.5">
                            {gItem.captionBn}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : slide.image ? (
                  <div className="my-2 border border-slate-300 rounded-lg overflow-hidden max-h-56 bg-white flex flex-col items-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      referrerPolicy="no-referrer"
                      className="max-h-48 w-auto object-contain"
                    />
                    {slide.imageCaption && (
                      <p className="w-full text-[11px] text-slate-600 bg-slate-100 p-1.5 text-center border-t border-slate-200">
                        চিত্র: {slide.imageCaption}
                      </p>
                    )}
                  </div>
                ) : null}

                {/* Diagram Annotations (চিহ্নিত অংশসমূহ) */}
                {slide.diagramAnnotations && slide.diagramAnnotations.length > 0 && (
                  <div className="bg-white border border-slate-300 rounded-lg p-3 my-2">
                    <span className="text-[11px] font-bold text-slate-900 uppercase block mb-1.5 border-b border-slate-200 pb-1">
                      🏷️ চিত্রের চিহ্নিত অংশসমূহ (Diagram Parts & Labels):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {slide.diagramAnnotations.map((anno, aIdx) => (
                        <div key={aIdx} className="text-[10.5px] p-2 bg-slate-50 border border-slate-200 rounded">
                          <strong className="text-slate-900 block font-bold">
                            {anno.labelBn} / {anno.labelEn} {anno.symbol && `[${anno.symbol}]`}
                          </strong>
                          <span className="text-slate-600 block mt-0.5">{anno.detailBn}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Points */}
                <div className="space-y-2">
                  {slide.keyPoints.map((kp, kIdx) => (
                    <div key={kIdx} className="text-xs leading-relaxed text-slate-800">
                      <strong className="text-slate-950 block">{kIdx + 1}. {kp.heading}:</strong>
                      <span className="whitespace-pre-line">{kp.description}</span>
                    </div>
                  ))}
                </div>

                {/* Table if present */}
                {slide.tableData && (
                  <div className="border border-slate-300 rounded overflow-hidden mt-2">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-200 text-slate-900 border-b border-slate-300">
                        <tr>
                          {slide.tableData.headers.map((h, i) => (
                            <th key={i} className="p-2 font-bold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {slide.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-2 font-mono">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Callout */}
                {slide.callout && (
                  <div className="border-l-4 border-cyan-600 bg-cyan-50 p-3 text-xs text-slate-800">
                    <strong className="block text-cyan-950 font-bold mb-0.5">
                      📌 {slide.callout.title}
                    </strong>
                    <span className="whitespace-pre-line">{slide.callout.content}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-300 pt-4 text-center text-xs text-slate-500">
            রসায়ন ৩য় অধ্যায়: পদার্থের গঠন · সফল প্রস্তুতি ও শুভকামনা!
          </div>
        </div>
      </div>
    </div>
  );
};
