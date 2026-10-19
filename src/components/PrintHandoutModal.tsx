import React from 'react';
import { Slide } from '../types/presentation';
import { X, Printer, Download, BookOpen } from 'lucide-react';

interface PrintHandoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
  activeSubject?: 'chemistry' | 'physics' | 'biology';
  activeChapter?: number;
  subjectLabel?: string;
  chapterTitle?: string;
}

export const PrintHandoutModal: React.FC<PrintHandoutModalProps> = ({
  isOpen,
  onClose,
  slides,
  activeSubject = 'chemistry',
  activeChapter = 1,
  subjectLabel,
  chapterTitle
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    document.title = `${subjectName} · ${fullChapterTitle} - লেকচার হ্যান্ডআউট`;
    window.print();
  };

  const chapterNum = activeChapter || slides[0]?.chapter || 1;
  const inferredSubject: 'chemistry' | 'physics' | 'biology' = 
    activeSubject || slides[0]?.subject || (
      (activeChapter === 4 && (chapterTitle?.includes('শক্তি') || slides[0]?.title?.includes('ATP') || slides[0]?.title?.includes('জীবনী'))) ? 'biology' :
      (activeChapter === 6 && (chapterTitle?.includes('মোল') || slides[0]?.title?.includes('মোল') || slides[0]?.title?.includes('রাসায়নিক'))) ? 'chemistry' :
      (activeChapter === 7 || activeChapter === 6 || activeChapter === 5 || activeChapter === 4) ? 'physics' :
      'chemistry'
    );

  const getSubjectLabel = (subj?: string) => {
    const s = subj || inferredSubject || activeSubject;
    if (s === 'physics') return 'পদার্থবিজ্ঞান';
    if (s === 'biology') return 'জীববিজ্ঞান';
    if (s === 'chemistry') return 'রসায়ন';
    return subjectLabel || (inferredSubject === 'physics' ? 'পদার্থবিজ্ঞান' : inferredSubject === 'biology' ? 'জীববিজ্ঞান' : 'রসায়ন');
  };

  const subjectName = getSubjectLabel(inferredSubject);

  const defaultTitles: Record<string, string> = {
    'chemistry-1': 'অধ্যায় ১: রসায়নের ধারণা (Concepts of Chemistry)',
    'chemistry-2': 'অধ্যায় ২: পদার্থের অবস্থা (States of Matter)',
    'chemistry-3': 'অধ্যায় ৩: পদার্থের গঠন (Structure of Matter)',
    'chemistry-4': 'অধ্যায় ৪: পর্যায় সারণি (Periodic Table)',
    'chemistry-5': 'অধ্যায় ৫: রাসায়নিক বন্ধন (Chemical Bonds)',
    'chemistry-6': 'অধ্যায় ৬: মোলের ধারণা ও রাসায়নিক গণনা (Concept of Mole & Chemical Calculations)',
    'chemistry-7': 'অধ্যায় ৭: রাসায়নিক বিক্রিয়া (Chemical Reactions)',
    'chemistry-8': 'অধ্যায় ৮: রসায়ন ও শক্তি (Chemistry & Energy)',
    'chemistry-9': 'অধ্যায় ৯: এসিড-ক্ষার সমতা (Acids, Bases & Salts)',
    'physics-4': 'অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি (Work, Power & Energy)',
    'physics-5': 'অধ্যায় ৫: পদার্থের অবস্থা ও চাপ (State of Matter & Pressure)',
    'physics-6': 'অধ্যায় ৬: বস্তুর উপর তাপের প্রভাব (Effect of Heat on Matter)',
    'physics-7': 'অধ্যায় ৭: তরঙ্গ ও শব্দ (Waves & Sound)',
    'biology-1': 'অধ্যায় ১: জীবন পাঠ (Lessons on Life)',
    'biology-2': 'অধ্যায় ২: জীবকোষ ও টিস্যু (Cell & Tissue)',
    'biology-3': 'অধ্যায় ৩: কোষ বিভাজন (Cell Division)',
    'biology-4': 'অধ্যায় ৪: জীবনীশক্তি (Bioenergetics)',
    'biology-5': 'অধ্যায় ৫: খাদ্য, পুষ্টি এবং পরিপাক (Food, Nutrition & Digestion)',
  };

  const key = `${inferredSubject}-${chapterNum}`;
  const fullChapterTitle = chapterTitle 
    ? (chapterTitle.includes('অধ্যায়') ? chapterTitle : `অধ্যায় ${chapterNum}: ${chapterTitle}`)
    : (defaultTitles[key] || `অধ্যায় ${chapterNum}`);

  // Dynamic document title update so browser print header never hardcodes "রসায়ন"
  React.useEffect(() => {
    if (isOpen) {
      const prevTitle = document.title;
      document.title = `${subjectName} · ${fullChapterTitle} - লেকচার হ্যান্ডআউট`;
      return () => {
        document.title = prevTitle;
      };
    }
  }, [isOpen, subjectName, fullChapterTitle]);

  const getFallbackImage = (slide: Slide) => {
    const s = slide.subject || inferredSubject;
    const c = slide.chapter || chapterNum;
    if (s === 'physics') {
      if (c === 7) return (slide.id >= 6 && slide.id <= 9 ? '/src/assets/images/sonar_ultrasound_physics_1791186932375.jpg' : '/src/assets/images/sound_acoustics_physics_1791186341104.jpg');
      if (c === 6) return '/src/assets/images/heat_thermal_physics_1791101382695.jpg';
      if (c === 5) return '/src/assets/images/fluid_pressure_physics_1791027332942.jpg';
      return '/src/assets/images/work_energy_physics_1791027317460.jpg';
    }
    if (s === 'biology') {
      if (c === 4) return (slide.id >= 8 && slide.id <= 11 ? '/src/assets/images/cellular_respiration_atp_1791281254904.jpg' : '/src/assets/images/photosynthesis_chloroplast_1791186353071.jpg');
      if (c === 3) return '/src/assets/images/mitosis_cell_division_1791027361813.jpg';
      return '/src/assets/images/cell_tissue_biology_1791027347161.jpg';
    }
    if (s === 'chemistry') {
      if (c === 8) return (slide.id >= 12 ? '/src/assets/images/cellular_respiration_atp_1791281254904.jpg' : slide.id >= 8 ? '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' : slide.id >= 4 ? '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' : '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg');
      if (c === 7) return (slide.id >= 12 ? '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' : slide.id >= 6 ? '/src/assets/images/le_chatelier_equilibrium_1791285324639.jpg' : '/src/assets/images/redox_chemical_reactions_1791285299488.jpg');
      if (c === 6) return (slide.id >= 10 ? '/src/assets/images/limiting_reactant_chemistry_1791283750306.jpg' : slide.id >= 5 ? '/src/assets/images/molar_solution_titration_1791283769174.jpg' : '/src/assets/images/mole_avogadro_stoichiometry_1791283726167.jpg');
      if (c === 5) return '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg';
      if (c === 4) return '/src/assets/images/periodic_table_trends_1791100765641.jpg';
    }
    return '/src/assets/images/hero_chemistry_atom_1790749681138.jpg';
  };

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
              <h2 className="text-base font-bold text-white">{subjectName} · {fullChapterTitle} — লেকচার হ্যান্ডআউট</h2>
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
              {subjectName} · {fullChapterTitle}
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
                {/* Top Running Header on each printed slide */}
                <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded font-black text-white bg-slate-900 text-[11px] uppercase tracking-wider">
                      {getSubjectLabel(slide.subject)}
                    </span>
                    <span className="font-bold text-slate-900">
                      {fullChapterTitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono font-bold text-slate-700">
                    <span className="font-sans text-cyan-800 font-bold uppercase">{slide.category}</span>
                    <span>·</span>
                    <span>স্লাইড {idx + 1} / {slides.length}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">{slide.title}</h3>
                  <p className="text-xs font-medium text-slate-700">{slide.subtitle}</p>
                </div>

                {/* Print Gallery Images (2 to 3 images per slide) */}
                {slide.gallery && slide.gallery.length > 0 ? (
                  <div className={`my-3 grid grid-cols-1 ${slide.gallery.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-3`}>
                    {slide.gallery.map((gItem, gIdx) => {
                      const displayImg = gItem.url || slide.image || getFallbackImage(slide);
                      return (
                        <div key={gIdx} className="border border-slate-300 rounded-lg overflow-hidden bg-white flex flex-col justify-between">
                          <div className="h-36 w-full flex items-center justify-center bg-slate-100 overflow-hidden">
                            <img
                              src={displayImg}
                              alt={gItem.titleBn}
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = getFallbackImage(slide);
                              }}
                            />
                          </div>
                          <div className="p-2 bg-slate-50 border-t border-slate-200">
                            <strong className="block text-[11px] text-slate-900 font-bold">
                              চিত্র {gIdx + 1}: {gItem.titleBn}
                            </strong>
                            <p className="text-[10px] text-slate-600 line-clamp-2 mt-0.5">
                              {gItem.captionBn}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="my-2 border border-slate-300 rounded-lg overflow-hidden max-h-56 bg-white flex flex-col items-center">
                    <img
                      src={slide.image || getFallbackImage(slide)}
                      alt={slide.title}
                      referrerPolicy="no-referrer"
                      className="max-h-48 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = getFallbackImage(slide);
                      }}
                    />
                    <p className="w-full text-[11px] text-slate-600 bg-slate-100 p-1.5 text-center border-t border-slate-200">
                      চিত্র: {slide.imageCaption || `${slide.title} - বৈজ্ঞানিক সচিত্র ব্যাখ্যা ও পর্যবেক্ষণ`}
                    </p>
                  </div>
                )}

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

          <div className="border-t border-slate-300 pt-4 text-center text-xs text-slate-500 font-medium">
            {subjectName} · {fullChapterTitle} · সফল প্রস্তুতি ও শুভকামনা!
          </div>
        </div>
      </div>
    </div>
  );
};
