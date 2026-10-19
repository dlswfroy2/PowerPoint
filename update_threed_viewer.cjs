const fs = require('fs');
let tv = fs.readFileSync('src/components/ThreeDViewer.tsx', 'utf8');

// 1. Add props to ThreeDViewerProps
if (!tv.includes('activeModelId?: number')) {
  tv = tv.replace(
    '  isModal?: boolean;\n  onClose?: () => void;\n}',
    '  isModal?: boolean;\n  onClose?: () => void;\n  activeModelId?: number;\n  onModelSelect?: (modelIndex: number) => void;\n  onSwitchTo2D?: (modelIndex: number) => void;\n}'
  );
}

// 2. Destructure new props
if (!tv.includes('activeModelId,')) {
  tv = tv.replace(
    '  isModal = false,\n  onClose\n}) => {',
    '  isModal = false,\n  onClose,\n  activeModelId,\n  onModelSelect,\n  onSwitchTo2D\n}) => {'
  );
}

// 3. Update activeModelIndex initialization & effect
const oldStateBlock = `  const initialModelIndex = Math.max(1, Math.min(20, ((slideId - 1) % 20) + 1));
  const [activeModelIndex, setActiveModelIndex] = useState<number>(initialModelIndex);

  useEffect(() => {
    setActiveModelIndex(Math.max(1, Math.min(20, ((slideId - 1) % 20) + 1)));
  }, [slideId]);`;

const newStateBlock = `  const initialModelIndex = activeModelId || Math.max(1, Math.min(20, ((slideId - 1) % 20) + 1));
  const [activeModelIndex, setActiveModelIndex] = useState<number>(initialModelIndex);

  useEffect(() => {
    if (activeModelId) {
      setActiveModelIndex(activeModelId);
    } else {
      setActiveModelIndex(Math.max(1, Math.min(20, ((slideId - 1) % 20) + 1)));
    }
  }, [slideId, activeModelId]);

  const handleSelectModel = (id: number) => {
    setActiveModelIndex(id);
    onModelSelect?.(id);
  };`;

if (tv.includes(oldStateBlock)) {
  tv = tv.replace(oldStateBlock, newStateBlock);
}

// 4. In buttons, use handleSelectModel
tv = tv.replace(
  'onClick={() => setActiveModelIndex(prev => prev > 1 ? prev - 1 : 20)}',
  'onClick={() => handleSelectModel(activeModelIndex > 1 ? activeModelIndex - 1 : 20)}'
);

tv = tv.replace(
  'onClick={() => setActiveModelIndex(prev => prev < 20 ? prev + 1 : 1)}',
  'onClick={() => handleSelectModel(activeModelIndex < 20 ? activeModelIndex + 1 : 1)}'
);

tv = tv.replace(
  'onClick={() => setActiveModelIndex(m.id)}',
  'onClick={() => handleSelectModel(m.id)}'
);

// 5. Add Square import if missing
if (!tv.includes('Square,')) {
  tv = tv.replace('Sun\n} from \'lucide-react\';', 'Sun,\n  Square\n} from \'lucide-react\';');
}

// 6. Add button to switch to 2D in the ribbon
const searchBtn = '<button\n                  type="button"\n                  onClick={() => handleSelectModel(activeModelIndex < 20 ? activeModelIndex + 1 : 1)}';
const replacementBtn = `{onSwitchTo2D && (
                <button
                  type="button"
                  onClick={() => onSwitchTo2D(activeModelIndex)}
                  className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded font-bold transition flex items-center gap-1 border border-cyan-500/30 text-xs shadow-sm ml-1"
                  title="এই বিষয়ের ২ডি বৈজ্ঞানিক ডায়াগ্রাম দেখুন"
                >
                  <Square className="h-3 w-3" />
                  <span>📐 ২ডি চিত্রে দেখুন</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => handleSelectModel(activeModelIndex < 20 ? activeModelIndex + 1 : 1)}`;

if (!tv.includes('onSwitchTo2D(activeModelIndex)')) {
  tv = tv.replace(searchBtn, replacementBtn);
}

fs.writeFileSync('src/components/ThreeDViewer.tsx', tv, 'utf8');
console.log('Successfully updated ThreeDViewer.tsx');
