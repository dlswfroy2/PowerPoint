const fs = require('fs');

let content = fs.readFileSync('src/components/ThreeDViewer.tsx', 'utf8');

// 1. Add catalog import
const importMarker = "import {  buildBiology3DScene,  updateBiology3DPhysics} from './ThreeDBiologyScenes';";
const newImport = `import {  buildBiology3DScene,  updateBiology3DPhysics} from './ThreeDBiologyScenes';\nimport { BIOLOGY_3D_CATALOG } from '../data/biology3DModelsCatalog';`;
content = content.replace(importMarker, newImport);

// 2. Add activeModelIndex state
const stateMarker = "  // Biology 4 Bioenergetics Interactive State";
const newState = `  // Biology 20-Model State
  const initialModelIndex = Math.max(1, Math.min(20, ((slideId - 1) % 20) + 1));
  const [activeModelIndex, setActiveModelIndex] = useState<number>(initialModelIndex);

  useEffect(() => {
    setActiveModelIndex(Math.max(1, Math.min(20, ((slideId - 1) % 20) + 1)));
  }, [slideId]);

  const effectiveModelId = subject === 'biology' ? activeModelIndex : slideId;
  const biologyModelsForChapter = BIOLOGY_3D_CATALOG[chapter] || [];
  const currentModelMeta = biologyModelsForChapter.find(m => m.id === activeModelIndex) || biologyModelsForChapter[0];

  // Biology 4 Bioenergetics Interactive State`;
content = content.replace(stateMarker, newState);

// 3. Update updateSlide3DPhysics call
content = content.replace(
  "updateSlide3DPhysics(slideId, time, sceneObjectsRef.current, quantumState, chapter, subject);",
  "updateSlide3DPhysics(effectiveModelId, time, sceneObjectsRef.current, quantumState, chapter, subject);"
);

// 4. Update dependencies array
content = content.replace(
  "[slideId, chapter, subject, slideImage, activeOrbitalTab, activeIsotopeTab, quantumState, speedMultiplier, waveFreq, waveAmp, waveMedium, bioLightIntensity, bioAtpCycleState, bioPhotosynthPhase]",
  "[slideId, chapter, subject, slideImage, activeOrbitalTab, activeIsotopeTab, quantumState, speedMultiplier, waveFreq, waveAmp, waveMedium, bioLightIntensity, bioAtpCycleState, bioPhotosynthPhase, activeModelIndex]"
);

// 5. Update buildBiology3DScene call
content = content.replace(
  "buildBiology3DScene(slideId, chapter, group, refs, addAnchor);",
  "buildBiology3DScene(effectiveModelId, chapter, group, refs, addAnchor);"
);

// 6. Update Biology UI badge section (lines 725-750)
const oldBioBadges = `{/* Biology Chapter 1 Interactive Info Badges */}
        {subject === 'biology' && chapter === 1 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              জীববিজ্ঞান ১ম অধ্যায় · ৩ডি ডিএনএ, পঞ্চরাজ্য ও শ্রেণিবিন্যাস সিমুলেশন
            </span>
          </div>
        )}

        {/* Biology Chapter 2 Interactive Info Badges */}
        {subject === 'biology' && chapter === 2 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              জীববিজ্ঞান ২য় অধ্যায় · ৩ডি ফ্লুইড মোজাইক ঝিল্লি ও সাইটোলজি
            </span>
          </div>
        )}

        {/* Biology Chapter 3 Interactive Info Badges */}
        {subject === 'biology' && chapter === 3 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              জীববিজ্ঞান ৩য় অধ্যায় · ৩ডি কোষ বিভাজন ও ক্রোমোজোম সিমুলেশন
            </span>
          </div>
        )}`;

const newBioRibbon = `{/* Biology 20-Model Interactive Explorer Ribbon */}
        {subject === 'biology' && (
          <div className="flex flex-col gap-1.5 w-full bg-slate-900/95 p-2 rounded-xl border border-emerald-500/40 shadow-xl text-xs">
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1.5">
                  <Sun className="h-3.5 w-3.5 text-emerald-400 animate-spin" />
                  <span>অধ্যায় {chapter}: ২০টি ৩ডি মডেল নির্বাচন</span>
                </span>
                {currentModelMeta && (
                  <span className="text-[11px] text-emerald-200 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-700/50 font-medium">
                    টপিক {currentModelMeta.topicRef}: {currentModelMeta.titleBn}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveModelIndex(prev => prev > 1 ? prev - 1 : 20)}
                  className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-bold transition flex items-center gap-1 border border-slate-700"
                  title="পূর্ববর্তী ৩ডি মডেল"
                >
                  ◀ পূর্ববর্তী
                </button>
                <span className="text-emerald-400 font-mono font-bold px-1 text-xs">
                  {activeModelIndex} / 20
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModelIndex(prev => prev < 20 ? prev + 1 : 1)}
                  className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-bold transition flex items-center gap-1 border border-slate-700"
                  title="পরবর্তী ৩ডি মডেল"
                >
                  পরবর্তী ▶
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Ribbon for all 20 models */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-slate-950">
              {biologyModelsForChapter.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveModelIndex(m.id)}
                  className={\`flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-medium transition flex items-center gap-1 border \${
                    activeModelIndex === m.id
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow-md font-bold'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:bg-slate-700/90 hover:text-white'
                  }\`}
                >
                  <span className="w-4 h-4 rounded-full bg-black/40 text-[9px] font-mono flex items-center justify-center font-bold">
                    {m.id}
                  </span>
                  <span className="truncate max-w-[130px]">{m.titleBn.split('—')[0]}</span>
                </button>
              ))}
            </div>
            {currentModelMeta?.descriptionBn && (
              <p className="text-[11px] text-emerald-300/90 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-900/40 italic">
                {currentModelMeta.descriptionBn}
              </p>
            )}
          </div>
        )}`;

content = content.replace(oldBioBadges, newBioRibbon);

fs.writeFileSync('src/components/ThreeDViewer.tsx', content, 'utf8');
console.log('Successfully patched ThreeDViewer.tsx');
