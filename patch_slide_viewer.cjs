const fs = require('fs');

let content = fs.readFileSync('src/components/SlideViewer.tsx', 'utf8');

// 1. Add catalog import
if (!content.includes('BIOLOGY_3D_CATALOG')) {
  content = content.replace(
    "import { CustomDiagramViewer } from './CustomDiagramViewer';",
    "import { CustomDiagramViewer } from './CustomDiagramViewer';\nimport { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';"
  );
}

// 2. Add selected2DDiagramId state
const stateMarker = "  const [customPptxViewMode, setCustomPptxViewMode] = useState<'direct' | 'card'>('direct');";
const newStateCode = `  const [customPptxViewMode, setCustomPptxViewMode] = useState<'direct' | 'card'>('direct');

  // 2D Diagram Model Selection State (Synchronized with 3D models)
  const initial2DId = Math.max(1, Math.min(20, ((slides[currentSlideIndex]?.id || 1) - 1) % 20 + 1));
  const [selected2DDiagramId, setSelected2DDiagramId] = useState<number>(initial2DId);

  useEffect(() => {
    setSelected2DDiagramId(Math.max(1, Math.min(20, ((currentSlide?.id || 1) - 1) % 20 + 1)));
  }, [currentSlideIndex, currentSlide?.id]);

  const bioChapterNum = currentSlide?.chapter || activeChapter || 1;
  const bioCatalogModels: Biology3DModelMeta[] = BIOLOGY_3D_CATALOG[bioChapterNum] || BIOLOGY_3D_CATALOG[1] || [];
  const active2DDiagramMeta: Biology3DModelMeta = bioCatalogModels.find((m: Biology3DModelMeta) => m.id === selected2DDiagramId) || bioCatalogModels[0];`;

if (!content.includes('selected2DDiagramId')) {
  content = content.replace(stateMarker, newStateCode);
}

// 3. Update ThreeDViewer call to include sync props
const oldThreeDCall = `<ThreeDViewer
                    slideId={currentSlide.id}
                    slideTitle={currentSlide.title}
                    category={currentSlide.category}
                    chapter={currentSlide.chapter || activeChapter || 3}
                    subject={currentSlide.subject || activeSubject || 'chemistry'}
                    slideImage={currentSlide.image}
                    slideImageCaption={currentSlide.imageCaption}
                  />`;

const newThreeDCall = `<ThreeDViewer
                    slideId={currentSlide.id}
                    slideTitle={currentSlide.title}
                    category={currentSlide.category}
                    chapter={currentSlide.chapter || activeChapter || 3}
                    subject={currentSlide.subject || activeSubject || 'chemistry'}
                    slideImage={currentSlide.image}
                    slideImageCaption={currentSlide.imageCaption}
                    activeModelId={selected2DDiagramId}
                    onModelSelect={(id) => setSelected2DDiagramId(id)}
                    onSwitchTo2D={(id) => {
                      setSelected2DDiagramId(id);
                      setDisplayMode('2d');
                    }}
                  />`;

if (content.includes(oldThreeDCall)) {
  content = content.replace(oldThreeDCall, newThreeDCall);
}

// 4. Update CustomDiagramViewer single view call
content = content.replace(
  '<CustomDiagramViewer type={activeItem.customDiagramType} />',
  `<CustomDiagramViewer
                            type={currentSlide.subject === 'biology' ? ('bioCh' + bioChapterNum + '_m' + selected2DDiagramId) : activeItem.customDiagramType}
                            modelId={selected2DDiagramId}
                            chapter={bioChapterNum}
                            onSwitchTo3D={() => setDisplayMode('3d')}
                          />`
);

// 5. Add 2D Diagram Explorer Buttons Ribbon inside gallery top bar when displayMode === '2d'
const targetGalleryBar = `{/* If 2D mode and multiple images: show Image Select Tabs & Grid/Single layout switch */}`;

const diagramButtonsBar = `{/* 2D Diagram Explorer Buttons Ribbon for Biology (20 Diagrams per Chapter) */}
                {displayMode === '2d' && currentSlide.subject === 'biology' && (
                  <div className="w-full mt-2.5 pt-2.5 border-t border-slate-800 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs flex items-center gap-1.5 shadow-sm">
                          <Square className="h-3.5 w-3.5 text-emerald-400" />
                          <span>অধ্যায় {bioChapterNum}: ২০টি ২ডি বৈজ্ঞানিক ডায়াগ্রাম বাটন</span>
                        </span>
                        {active2DDiagramMeta && (
                          <span className="text-[11px] text-emerald-200 bg-emerald-950/70 px-2.5 py-1 rounded-md border border-emerald-700/50 font-medium flex items-center gap-1">
                            <span className="font-bold text-emerald-400">টপিক {active2DDiagramMeta.topicRef}:</span>
                            <span>{active2DDiagramMeta.titleBn}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setSelected2DDiagramId(prev => prev > 1 ? prev - 1 : 20)}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition flex items-center gap-1 border border-slate-700 shadow-sm"
                          title="পূর্ববর্তী ২ডি ডায়াগ্রাম"
                        >
                          ◀ পূর্ববর্তী
                        </button>
                        <span className="text-emerald-400 font-mono font-bold px-1.5 text-xs">
                          {selected2DDiagramId} / 20
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelected2DDiagramId(prev => prev < 20 ? prev + 1 : 1)}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition flex items-center gap-1 border border-slate-700 shadow-sm"
                          title="পরবর্তী ২ডি ডায়াগ্রাম"
                        >
                          পরবর্তী ▶
                        </button>

                        <button
                          type="button"
                          onClick={() => setDisplayMode('3d')}
                          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 text-xs font-bold border border-cyan-500/40 transition shadow-sm ml-1"
                          title="এই বিষয়ের ৩ডি অ্যানিমেটেড মডেল দেখুন"
                        >
                          <Box className="h-3 w-3 animate-pulse" />
                          <span>🧊 ৩ডি ভিউ</span>
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Ribbon of all 20 Diagram Buttons */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-slate-950">
                      {bioCatalogModels.map((m: Biology3DModelMeta) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => {
                            setSelected2DDiagramId(m.id);
                            setTwoDViewType('diagram');
                          }}
                          className={\`flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-medium transition flex items-center gap-1.5 border \${
                            selected2DDiagramId === m.id
                              ? 'bg-emerald-600 text-white border-emerald-400 shadow-md font-bold scale-[1.02]'
                              : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:bg-slate-700/90 hover:text-white'
                          }\`}
                          title={\`\${m.topicRef}: \${m.titleBn}\`}
                        >
                          <span className="w-4 h-4 rounded-full bg-black/40 text-[9px] font-mono flex items-center justify-center font-bold">
                            {m.id}
                          </span>
                          <span className="text-[10px] text-emerald-300 font-mono font-semibold">{m.topicRef}</span>
                          <span className="truncate max-w-[130px]">{m.titleBn.split('—')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* If 2D mode and multiple images: show Image Select Tabs & Grid/Single layout switch */}`;

if (!content.includes('২০টি ২ডি বৈজ্ঞানিক ডায়াগ্রাম বাটন')) {
  content = content.replace(targetGalleryBar, diagramButtonsBar);
}

fs.writeFileSync('src/components/SlideViewer.tsx', content, 'utf8');
console.log('Successfully patched SlideViewer.tsx');
