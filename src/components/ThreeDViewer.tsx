import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';
import { 
  RotateCcw, 
  Maximize2, 
  Play, 
  Pause, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Zap, 
  Layers, 
  Compass, 
  Atom, 
  ShieldAlert,
  HelpCircle,
  X,
  Waves,
  Sun,
  Square,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  buildPhysics3DScene,
  buildChemistryExtra3DScene,
  updatePhysics3DPhysics
} from './ThreeDPhysicsScenes';
import {
  buildBiology3DScene,
  updateBiology3DPhysics
} from './ThreeDBiologyScenes';
import {
  buildChemistryCh6Scene,
  updateChemistryCh6Physics
} from './ThreeDChemistryCh6Scenes';
import {
  buildChemistryCh7Scene,
  updateChemistryCh7Physics
} from './ThreeDChemistryCh7Scenes';
import {
  buildChemistryCh8Scene,
  updateChemistryCh8Physics
} from './ThreeDChemistryCh8Scenes';
import {
  buildChemistryCh9to12Scene,
  updateChemistryCh9to12Physics
} from './ThreeDChemistryCh9to12Scenes';

interface ThreeDViewerProps {
  slideId: number;
  slideTitle: string;
  category: string;
  chapter?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | number;
  subject?: 'chemistry' | 'physics' | 'biology';
  slideImage?: string;
  slideImageCaption?: string;
  isModal?: boolean;
  onClose?: () => void;
  activeModelId?: number;
  onModelSelect?: (modelIndex: number) => void;
  onSwitchTo2D?: (modelIndex: number) => void;
}

interface ScreenLabel {
  textBn: string;
  textEn: string;
  symbol?: string;
  color: string;
  position: THREE.Vector3;
  screenX: number;
  screenY: number;
  visible: boolean;
}

const toBengali = (num: number): string => {
  return num.toString().replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);
};

export const ThreeDViewer: React.FC<ThreeDViewerProps> = ({
  slideId,
  slideTitle,
  category,
  chapter = 3,
  subject = 'chemistry',
  slideImage,
  slideImageCaption,
  isModal = false,
  onClose,
  activeModelId,
  onModelSelect,
  onSwitchTo2D
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interaction & UI State
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [showLabels, setShowLabels] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [activeOrbitalTab, setActiveOrbitalTab] = useState<'s' | 'p' | 'd'>('p');
  const [activeIsotopeTab, setActiveIsotopeTab] = useState<'H1' | 'H2' | 'H3'>('H1');
  const [quantumState, setQuantumState] = useState<'ground' | 'excited' | 'jump'>('ground');
  const [screenLabels, setScreenLabels] = useState<ScreenLabel[]>([]);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Physics 7 Wave Interactive State
  const [waveFreq, setWaveFreq] = useState<number>(2.5); // Hz
  const [waveAmp, setWaveAmp] = useState<number>(1.0);  // m
  const [waveMedium, setWaveMedium] = useState<'air' | 'water' | 'iron'>('air');

  // Biology 20-Model State
  const initialModelIndex = activeModelId || Math.max(1, Math.min(20, ((slideId - 1) % 20) + 1));
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
  };

  const effectiveModelId = subject === 'biology' ? activeModelIndex : slideId;
  const biologyModelsForChapter = BIOLOGY_3D_CATALOG[chapter] || [];
  const currentModelMeta = biologyModelsForChapter.find((m: Biology3DModelMeta) => m.id === activeModelIndex) || biologyModelsForChapter[0];

  // Biology 4 Bioenergetics Interactive State
  const [bioLightIntensity, setBioLightIntensity] = useState<number>(85); // %
  const [bioAtpCycleState, setBioAtpCycleState] = useState<'charged' | 'discharged'>('charged');
  const [bioPhotosynthPhase, setBioPhotosynthPhase] = useState<'light' | 'dark'>('light');

  // References to keep animation loop clean
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const sceneObjectsRef = useRef<{ [key: string]: any }>({});

  // Pointer drag state
  const isDraggingRef = useRef<boolean>(false);
  const prevPointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationVelocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Initialize and Build 3D Scene
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030712); // Deep slate-950
    scene.fog = new THREE.FogExp2(0x030712, 0.035);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // 4. Ambient, Hemisphere & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 1.2);
    scene.add(hemiLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.8); // Cyan key light
    dirLight1.position.set(6, 12, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf43f5e, 2.0); // Rose rim light
    dirLight2.position.set(-6, -6, -6);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 3.5, 25);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // 5. Holographic Pedestal / Radar circular floor grid
    const polarGrid = new THREE.PolarGridHelper(8, 16, 8, 48, 0x06b6d4, 0x1e293b);
    polarGrid.position.y = -3.8;
    if (polarGrid.material instanceof THREE.Material) {
      polarGrid.material.transparent = true;
      polarGrid.material.opacity = 0.22;
    }
    scene.add(polarGrid);

    // 6. Star Dust / Quantum particle background
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 180;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 30;
      dustPositions[i + 1] = (Math.random() - 0.5) * 30;
      dustPositions[i + 2] = (Math.random() - 0.5) * 30;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4
    });
    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustPoints);

    // Root Group for the slide-specific 3D model
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    sceneObjectsRef.current.modelGroup = modelGroup;
    sceneObjectsRef.current.waveFreq = waveFreq;
    sceneObjectsRef.current.waveAmp = waveAmp;
    sceneObjectsRef.current.waveMedium = waveMedium;
    sceneObjectsRef.current.bioLightIntensity = bioLightIntensity;
    sceneObjectsRef.current.bioAtpCycleState = bioAtpCycleState;
    sceneObjectsRef.current.bioPhotosynthPhase = bioPhotosynthPhase;

    // Build specific 3D setup depending on slideId, chapter, and subject
    buildSlide3DScene(effectiveModelId, chapter, modelGroup, sceneObjectsRef.current, subject);

    // Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();
    let frameCount = 0;

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime() * speedMultiplier;
      frameCount++;

      // Inertial rotation damping
      if (!isDraggingRef.current) {
        if (autoRotate) {
          modelGroup.rotation.y += 0.008 * speedMultiplier;
        } else {
          modelGroup.rotation.y += rotationVelocityRef.current.x;
          modelGroup.rotation.x += rotationVelocityRef.current.y;
          rotationVelocityRef.current.x *= 0.94;
          rotationVelocityRef.current.y *= 0.94;
        }
      }

      // Slide-specific real-time 3D physics / orbit animations
      updateSlide3DPhysics(effectiveModelId, time, sceneObjectsRef.current, quantumState, chapter, subject);

      // Render
      renderer.render(scene, camera);

      // Project 3D Billboard Pin Labels to 2D Screen (throttled every 3 frames for 60fps silky smooth rendering)
      if (frameCount % 3 === 0) {
        if (showLabels && sceneObjectsRef.current.labelAnchors) {
          const labels: ScreenLabel[] = [];
          const anchors = sceneObjectsRef.current.labelAnchors;

          for (const anchor of anchors) {
            const worldPos = new THREE.Vector3();
            anchor.mesh.getWorldPosition(worldPos);

            // Check if in front of camera
            const tempV = worldPos.clone().project(camera);
            const isBehind = tempV.z > 1;

            if (!isBehind) {
              const screenX = (tempV.x * 0.5 + 0.5) * width;
              const screenY = (-(tempV.y * 0.5) + 0.5) * height;

              labels.push({
                textBn: anchor.textBn,
                textEn: anchor.textEn,
                symbol: anchor.symbol,
                color: anchor.color || '#38bdf8',
                position: worldPos,
                screenX,
                screenY,
                visible: screenX > 20 && screenX < width - 20 && screenY > 20 && screenY < height - 20
              });
            }
          }
          setScreenLabels(labels);
        } else {
          setScreenLabels([]);
        }
      }
    };

    animate();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      resizeObserver.disconnect();
      renderer.dispose();
      // Dispose geometries & materials
      modelGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material?.dispose();
          }
        }
      });
    };
  }, [slideId, chapter, subject, slideImage, activeOrbitalTab, activeIsotopeTab, quantumState, speedMultiplier, waveFreq, waveAmp, waveMedium, bioLightIntensity, bioAtpCycleState, bioPhotosynthPhase, activeModelIndex]);

  // Pointer event handlers for interactive 360-degree rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !sceneObjectsRef.current.modelGroup) return;

    const deltaX = e.clientX - prevPointerRef.current.x;
    const deltaY = e.clientY - prevPointerRef.current.y;

    const group = sceneObjectsRef.current.modelGroup;
    group.rotation.y += deltaX * 0.008;
    group.rotation.x += deltaY * 0.008;

    rotationVelocityRef.current = {
      x: deltaX * 0.005,
      y: deltaY * 0.005
    };

    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!cameraRef.current) return;
    const camera = cameraRef.current;
    camera.position.z = THREE.MathUtils.clamp(camera.position.z + e.deltaY * 0.01, 4, 22);
  };

  const resetCamera = () => {
    if (!cameraRef.current || !sceneObjectsRef.current.modelGroup) return;
    cameraRef.current.position.set(0, 0, 12);
    sceneObjectsRef.current.modelGroup.rotation.set(0, 0, 0);
    rotationVelocityRef.current = { x: 0, y: 0 };
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full min-h-[360px] md:min-h-[460px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl select-none flex flex-col justify-between ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
      }`}
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Real-time 3D Billboard Pin Labels (Track 3D objects in perspective) */}
      {showLabels && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {screenLabels.map((lbl, idx) => {
            if (!lbl.visible) return null;
            return (
              <div
                key={idx}
                style={{
                  left: `${lbl.screenX}px`,
                  top: `${lbl.screenY}px`,
                  transform: 'translate(-50%, -100%)'
                }}
                className="absolute transition-all duration-75 pointer-events-auto"
              >
                <div 
                  style={{ borderColor: lbl.color }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-white border shadow-xl backdrop-blur-md hover:scale-110 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full animate-ping shrink-0" style={{ backgroundColor: lbl.color }} />
                  <span className="whitespace-nowrap">
                    {lbl.textBn} <span className="text-[10px] opacity-75 font-normal">/ {lbl.textEn}</span>
                  </span>
                  {lbl.symbol && (
                    <span className="font-mono text-[10px] text-cyan-300 bg-slate-800 px-1 rounded ml-0.5">
                      {lbl.symbol}
                    </span>
                  )}
                </div>
                {/* Pin pointer line */}
                <div 
                  style={{ backgroundColor: lbl.color }}
                  className="w-0.5 h-3 mx-auto" 
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Top 3D Control Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between p-3 bg-gradient-to-b from-slate-950/90 to-transparent gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
            {subject === 'physics' ? (
              <Waves className="h-4 w-4 text-cyan-400 animate-pulse" />
            ) : subject === 'biology' ? (
              <Sun className="h-4 w-4 text-emerald-400 animate-spin" />
            ) : (
              <Atom className="h-4 w-4 text-cyan-400 animate-spin" />
            )}
            <span>
              {subject === 'physics'
                ? `পদার্থবিজ্ঞান অধ্যায় ${chapter} · ৩ডি সিমুলেশন`
                : subject === 'biology'
                ? `জীববিজ্ঞান অধ্যায় ${chapter} · ৩ডি সিমুলেশন`
                : `রসায়ন অধ্যায় ${chapter} · ৩ডি সিমুলেশন`}
            </span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline font-medium">
            মাউস টেনে ৩৬০° ঘুরান · স্ক্রোল করে জুম করুন
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs backdrop-blur-md">
          {/* Auto Rotate Toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition ${
              autoRotate 
                ? 'bg-cyan-500 text-slate-950 font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
            title={autoRotate ? 'ঘূর্ণন থামান' : 'স্বয়ংক্রিয় ঘূর্ণন চালু করুন'}
          >
            {autoRotate ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            <span className="hidden md:inline">{autoRotate ? 'অটো' : 'স্থির'}</span>
          </button>

          {/* Show / Hide Labels */}
          <button
            onClick={() => setShowLabels(!showLabels)}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg transition ${
              showLabels 
                ? 'bg-slate-800 text-cyan-300 font-bold border border-cyan-500/30' 
                : 'text-slate-400 hover:text-white'
            }`}
            title="চিত্রে বাংলা ও ইংরেজি ৩ডি লেবেল দেখান বা লুকান"
          >
            {showLabels ? <Eye className="h-3 w-3 text-cyan-400" /> : <EyeOff className="h-3 w-3" />}
            <span className="hidden md:inline">৩ডি লেবেল</span>
          </button>

          {/* Zoom In & Out */}
          <button
            onClick={() => {
              if (!cameraRef.current) return;
              cameraRef.current.position.z = THREE.MathUtils.clamp(cameraRef.current.position.z - 1.8, 4, 22);
            }}
            className="px-2 py-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition text-xs font-bold font-mono"
            title="জুম ইন (+)"
          >
            +
          </button>
          <button
            onClick={() => {
              if (!cameraRef.current) return;
              cameraRef.current.position.z = THREE.MathUtils.clamp(cameraRef.current.position.z + 1.8, 4, 22);
            }}
            className="px-2 py-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition text-xs font-bold font-mono"
            title="জুম আউট (-)"
          >
            -
          </button>

          {/* Reset View */}
          <button
            onClick={resetCamera}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title="দৃষ্টিভঙ্গি রিসেট করুন"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>



          {/* Close modal if active */}
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-rose-400 hover:text-white hover:bg-rose-900/50 transition ml-1"
              title="বন্ধ করুন"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Slide Specific 3D Interactive Feature Toolbar */}
      <div className="relative z-10 p-3 flex flex-wrap items-center justify-between gap-2 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent">
        {/* Chemistry Chapter 3 Slide 5: Rutherford Alpha Cannon Trigger */}
        {subject === 'chemistry' && slideId === 5 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (sceneObjectsRef.current.fireAlphaParticle) {
                  sceneObjectsRef.current.fireAlphaParticle();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition"
            >
              <Zap className="h-3.5 w-3.5" />
              <span>আলফা কণা ফায়ার করুন (Fire Alpha Particle)</span>
            </button>
            <span className="text-[11px] text-amber-300 font-medium">
              সোনার পরমাণুর ভারী নিউক্লিয়াসে বিচ্ছুরণ দেখুন
            </span>
          </div>
        )}

        {/* Chemistry Chapter 3 Slide 6: Bohr Quantum Jump Trigger */}
        {subject === 'chemistry' && slideId === 6 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setQuantumState(quantumState === 'ground' ? 'jump' : 'ground');
                if (sceneObjectsRef.current.triggerQuantumJump) {
                  sceneObjectsRef.current.triggerQuantumJump();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>কোয়ান্টাম লাফ ও ফোটন নিঃসরণ (Trigger Quantum Jump)</span>
            </button>
            <span className="text-[11px] text-cyan-300 font-medium">
              n=3 থেকে n=2 শক্তিস্তরে কোয়ান্টাম বিকিরণ
            </span>
          </div>
        )}

        {/* Chemistry Chapter 3 Slide 7: Orbitals Shape Switcher */}
        {subject === 'chemistry' && chapter === 3 && slideId === 7 && (
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 text-[11px] px-2 font-medium">৩ডি অরবিটাল:</span>
            <button
              onClick={() => setActiveOrbitalTab('s')}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${
                activeOrbitalTab === 's' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              s-অরবিটাল (গোলকাকার)
            </button>
            <button
              onClick={() => setActiveOrbitalTab('p')}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${
                activeOrbitalTab === 'p' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              p-অরবিটাল (ডাম্বেল)
            </button>
            <button
              onClick={() => setActiveOrbitalTab('d')}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${
                activeOrbitalTab === 'd' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              d-অরবিটাল (ডাবল ডাম্বেল)
            </button>
          </div>
        )}

        {/* Chemistry Chapter 3 Slide 10: Hydrogen Isotopes Switcher */}
        {subject === 'chemistry' && chapter === 3 && slideId === 10 && (
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 text-[11px] px-2 font-medium">হাইড্রোজেন আইসোটোপ:</span>
            <button
              onClick={() => setActiveIsotopeTab('H1')}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${
                activeIsotopeTab === 'H1' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              ¹H প্রোটিয়াম (০ নিউট্রন)
            </button>
            <button
              onClick={() => setActiveIsotopeTab('H2')}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${
                activeIsotopeTab === 'H2' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              ²H ডিউটেরিয়াম (১ নিউট্রন)
            </button>
            <button
              onClick={() => setActiveIsotopeTab('H3')}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${
                activeIsotopeTab === 'H3' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              ³H ট্রিটিয়াম (২ নিউট্রন)
            </button>
          </div>
        )}

        {/* Chemistry Chapter 4 Interactive Info Badges */}
        {subject === 'chemistry' && chapter === 4 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
              রসায়ন ৪র্থ অধ্যায় · ৩ডি পর্যায় সারণি ও পর্যায়বৃত্ত ধর্ম সিমুলেশন
            </span>
          </div>
        )}

        {/* Chemistry Chapter 5 Interactive Info Badges */}
        {subject === 'chemistry' && chapter === 5 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              রসায়ন ৫ম অধ্যায় · ৩ডি আয়নিক, সমযোজী ও ধাতব বন্ধন মডেল
            </span>
          </div>
        )}

        {/* Physics Chapter 4 Interactive Info Badges */}
        {subject === 'physics' && chapter === 4 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
              পদার্থবিজ্ঞান ৪র্থ অধ্যায় · ৩ডি সিমুলেশন মোড
            </span>
          </div>
        )}

        {/* Physics Chapter 5 Interactive Info Badges */}
        {subject === 'physics' && chapter === 5 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
              পদার্থবিজ্ঞান ৫ম অধ্যায় · ৩ডি তরল ও চাপ সিমুলেশন
            </span>
          </div>
        )}

        {/* Physics Chapter 6 Interactive Info Badges */}
        {subject === 'physics' && chapter === 6 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
              পদার্থবিজ্ঞান ৬ষ্ঠ অধ্যায় · ৩ডি তাপ, প্রসারণ ও ক্যালরিমিতি সিমুলেশন
            </span>
          </div>
        )}

        {/* Physics Chapter 7 Interactive Wave Controls */}
        {subject === 'physics' && chapter === 7 && (
          <div className="flex flex-wrap items-center gap-2 text-xs bg-slate-900/90 p-1.5 rounded-xl border border-cyan-500/40">
            <span className="flex items-center gap-1 text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-500/20">
              <Waves className="h-3.5 w-3.5 text-cyan-400" />
              <span>তরঙ্গ নিয়ন্ত্রণ</span>
            </span>

            {/* Frequency Slider */}
            <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium">কম্পাঙ্ক (f):</span>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={waveFreq}
                onChange={(e) => setWaveFreq(parseFloat(e.target.value))}
                className="w-16 accent-cyan-400 h-1.5 cursor-pointer"
                title="তরঙ্গের কম্পাঙ্ক পরিবর্তন করুন"
              />
              <span className="font-mono text-cyan-300 font-bold text-[11px]">{waveFreq} Hz</span>
            </div>

            {/* Amplitude Slider */}
            <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium">বিস্তার (A):</span>
              <input
                type="range"
                min="0.4"
                max="1.8"
                step="0.2"
                value={waveAmp}
                onChange={(e) => setWaveAmp(parseFloat(e.target.value))}
                className="w-16 accent-cyan-400 h-1.5 cursor-pointer"
                title="তরঙ্গের বিস্তার পরিবর্তন করুন"
              />
              <span className="font-mono text-amber-300 font-bold text-[11px]">{waveAmp}m</span>
            </div>

            {/* Medium Selector */}
            <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px]">
              <button
                onClick={() => setWaveMedium('air')}
                className={`px-2 py-0.5 rounded font-bold transition ${waveMedium === 'air' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                title="বায়ু মাধ্যমে শব্দের বেগ ৩৪৩ m/s"
              >
                বায়ু (৩৪৩ m/s)
              </button>
              <button
                onClick={() => setWaveMedium('water')}
                className={`px-2 py-0.5 rounded font-bold transition ${waveMedium === 'water' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                title="পানি মাধ্যমে শব্দের বেগ ১৪৯৮ m/s"
              >
                পানি (১৪৯৮ m/s)
              </button>
              <button
                onClick={() => setWaveMedium('iron')}
                className={`px-2 py-0.5 rounded font-bold transition ${waveMedium === 'iron' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                title="লোহা মাধ্যমে শব্দের বেগ ৫১৩০ m/s"
              >
                লোহা (৫১৩০ m/s)
              </button>
            </div>
          </div>
        )}

        {/* Biology 3D Interactive Model Navigation System */}
        {subject === 'biology' && biologyModelsForChapter.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-2 w-full bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-xl border border-emerald-500/30 shadow-lg text-xs">
            {/* Model Badge & Topic Details */}
            <div className="flex items-center gap-2 min-w-0">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                <Sun className="h-4 w-4" />
              </span>
              <div className="truncate">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold text-white text-xs shrink-0">
                    ৩ডি মডেল {toBengali(activeModelIndex)}/২০:
                  </span>
                  {currentModelMeta && (
                    <span className="text-[11px] text-emerald-300 font-semibold truncate">
                      {currentModelMeta.titleBn}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Systematic Topic Selector: Prev Arrow + Dropdown + Next Arrow + Switch to 2D */}
            <div className="flex items-center gap-1.5 shrink-0 ml-auto">
              <button
                type="button"
                onClick={() => handleSelectModel(activeModelIndex > 1 ? activeModelIndex - 1 : 20)}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition border border-slate-700 shadow-sm"
                title="পূর্ববর্তী ৩ডি মডেল"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>

              <select
                value={activeModelIndex}
                onChange={(e) => handleSelectModel(Number(e.target.value))}
                className="bg-slate-950 text-emerald-300 border border-emerald-500/40 rounded-lg px-2.5 py-1 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-400 cursor-pointer shadow-inner max-w-[200px] sm:max-w-[260px] truncate"
                title="অধ্যায়ের যে-কোনো ৩ডি মডেল সরাসরি নির্বাচন করুন"
              >
                {biologyModelsForChapter.map((m: Biology3DModelMeta) => (
                  <option key={m.id} value={m.id} className="bg-slate-900 text-slate-200">
                    {toBengali(m.id)}. {m.titleBn.split('—')[0]}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => handleSelectModel(activeModelIndex < 20 ? activeModelIndex + 1 : 1)}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition border border-slate-700 shadow-sm"
                title="পরবর্তী ৩ডি মডেল"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>

              {onSwitchTo2D && (
                <button
                  type="button"
                  onClick={() => onSwitchTo2D(activeModelIndex)}
                  className="flex items-center gap-1 px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 rounded-lg font-bold transition border border-emerald-500/40 text-xs shadow-sm ml-1"
                  title="এই বিষয়ের ২ডি বৈজ্ঞানিক ডায়াগ্রাম দেখুন"
                >
                  <Square className="h-3 w-3" />
                  <span className="hidden sm:inline">২ডি চিত্র</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Biology Chapter 4 Interactive Bioenergetics Controls */}
        {subject === 'biology' && chapter === 4 && (
          <div className="flex flex-wrap items-center gap-2 text-xs bg-slate-900/90 p-1.5 rounded-xl border border-emerald-500/40">
            <span className="flex items-center gap-1 text-emerald-300 font-bold px-2 py-0.5 rounded bg-emerald-500/20">
              <Sun className="h-3.5 w-3.5 text-emerald-400" />
              <span>বায়োএনার্জি কন্ট্রোল</span>
            </span>

            {/* ATP Cycle Button */}
            <button
              onClick={() => setBioAtpCycleState(prev => prev === 'charged' ? 'discharged' : 'charged')}
              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition flex items-center gap-1 shadow-md ${
                bioAtpCycleState === 'charged'
                  ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                  : 'bg-rose-500 text-white hover:bg-rose-400'
              }`}
              title="ATP শক্তি নির্গমন বা রিচার্জ প্রক্রিয়া"
            >
              <Zap className="h-3 w-3" />
              <span>{bioAtpCycleState === 'charged' ? 'ATP শক্তি নির্গমন (-৭.৩ kcal)' : 'ADP রিচার্জ (+৭.৩ kcal)'}</span>
            </button>

            {/* Sunlight Intensity Slider */}
            <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium">সূর্যালোক:</span>
              <input
                type="range"
                min="10"
                max="100"
                step="10"
                value={bioLightIntensity}
                onChange={(e) => setBioLightIntensity(parseInt(e.target.value, 10))}
                className="w-16 accent-emerald-400 h-1.5 cursor-pointer"
                title="সালোকসংশ্লেষণের আলোক তীব্রতা"
              />
              <span className="font-mono text-emerald-300 font-bold text-[11px]">{bioLightIntensity}%</span>
            </div>

            {/* Phase Selector */}
            <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px]">
              <button
                onClick={() => setBioPhotosynthPhase('light')}
                className={`px-2 py-0.5 rounded font-bold transition ${bioPhotosynthPhase === 'light' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                আলোক পর্যায়
              </button>
              <button
                onClick={() => setBioPhotosynthPhase('dark')}
                className={`px-2 py-0.5 rounded font-bold transition ${bioPhotosynthPhase === 'dark' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                ক্যালভিন চক্র (C3)
              </button>
            </div>
          </div>
        )}

        {/* Biology Chapter 5 Interactive Info Badges */}
        {subject === 'biology' && chapter === 5 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              জীববিজ্ঞান ৫ম অধ্যায় · ৩ডি পৌষ্টিকতন্ত্র, এনজাইম, দাঁত ও পুষ্টি সিমুলেশন
            </span>
          </div>
        )}

        {/* Chemistry Chapter 6 Interactive Mole Badges & Formula Banner */}
        {subject === 'chemistry' && chapter === 6 && (
          <div className="flex flex-wrap items-center gap-2 text-xs bg-slate-900/90 p-1.5 rounded-xl border border-cyan-500/40">
            <span className="flex items-center gap-1 text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-500/20">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>মোলের ৩ডি রূপান্তর ল্যাব</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-950 text-amber-300 font-mono text-[11px] border border-slate-800">
              n = W/M = N/Nₐ = V/২২.৪ = S×V
            </span>
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-slate-950 text-emerald-400 font-mono text-[11px] border border-slate-800">
              Nₐ = ৬.০২×১০²³ কণা/মোল
            </span>
          </div>
        )}

        {/* Chemistry Chapter 7 Interactive Reactions Banner */}
        {subject === 'chemistry' && chapter === 7 && (
          <div className="flex flex-wrap items-center gap-2 text-xs bg-slate-900/90 p-1.5 rounded-xl border border-rose-500/40">
            <span className="flex items-center gap-1 text-rose-300 font-bold px-2 py-0.5 rounded bg-rose-500/20">
              <Sparkles className="h-3.5 w-3.5 text-rose-400" />
              <span>রাসায়নিক বিক্রিয়া ৩ডি সিমুলেশন</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-950 text-amber-300 font-mono text-[11px] border border-slate-800">
              রেডক্স (ইলেকট্রন স্থানান্তর) ⇌ লা শাতেলিয়ার সাম্যাবস্থা
            </span>
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-slate-950 text-emerald-400 font-mono text-[11px] border border-slate-800">
              জারণ = ছারণ (+বৃদ্ধি), বিজারণ = গ্রহণ (-হ্রাস)
            </span>
          </div>
        )}

        {/* Chemistry Chapter 8 Interactive Electrochemistry Banner */}
        {subject === 'chemistry' && chapter === 8 && (
          <div className="flex flex-wrap items-center gap-2 text-xs bg-slate-900/90 p-1.5 rounded-xl border border-rose-500/40">
            <span className="flex items-center gap-1 text-rose-300 font-bold px-2 py-0.5 rounded bg-rose-500/20">
              <Sparkles className="h-3.5 w-3.5 text-rose-400" />
              <span>রসায়ন ও শক্তি ৩ডি ল্যাব</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-950 text-amber-300 font-mono text-[11px] border border-slate-800">
              ড্যানিয়েল সেল E° = ১.১০ V
            </span>
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-slate-950 text-emerald-400 font-mono text-[11px] border border-slate-800">
              তড়িৎ লেপন & পানির বিশ্লেষণ ২:১
            </span>
          </div>
        )}

        {/* Generic Speed Slider for other slides */}
        <div className="flex items-center gap-2 ml-auto text-xs text-slate-400">
          <span className="hidden sm:inline">গতি:</span>
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.2"
            value={speedMultiplier}
            onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
            className="w-20 md:w-28 accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <span className="font-mono text-[11px] text-cyan-300 w-8">{speedMultiplier}x</span>
        </div>
      </div>


    </div>
  );
};

function buildSlide3DScene(
  slideId: number, 
  chapter: number, 
  group: THREE.Group, 
  refs: any, 
  subject: string = 'chemistry'
) {
  refs.labelAnchors = [];

  // Helper to add 3D Billboarding Anchor for labels
  const addAnchor = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => {
    refs.labelAnchors.push({ mesh, textBn, textEn, symbol, color });
  };

  // ----------------------------------------------------
  // BIOLOGY 3D SCENES (Chapter 3)
  // ----------------------------------------------------
  if (subject === 'biology') {
    const effectiveModelId = Math.max(1, Math.min(20, slideId || 1));
    buildBiology3DScene(effectiveModelId, chapter, group, refs, addAnchor);
    return;
  }

  // ----------------------------------------------------
  // PHYSICS 3D SCENES (Chapters 4 & 5)
  // ----------------------------------------------------
  if (subject === 'physics') {
    buildPhysics3DScene(slideId, chapter, group, refs, addAnchor);
    return;
  }

  // ----------------------------------------------------
  // EXTRA CHEMISTRY SCENES (Chapters 4 & 5)
  // ----------------------------------------------------
  if (chapter === 4 || chapter === 5) {
    buildChemistryExtra3DScene(slideId, chapter, group, refs, addAnchor);
    return;
  }

  // ----------------------------------------------------
  // CHEMISTRY CHAPTER 6: MOLE & CHEMICAL CALCULATIONS
  // ----------------------------------------------------
  if (chapter === 6) {
    buildChemistryCh6Scene(slideId, chapter, group, refs, addAnchor);
    return;
  }

  // ----------------------------------------------------
  // CHEMISTRY CHAPTER 7: CHEMICAL REACTIONS
  // ----------------------------------------------------
  if (chapter === 7) {
    buildChemistryCh7Scene(slideId, chapter, group, refs, addAnchor);
    return;
  }

  // ----------------------------------------------------
  // CHEMISTRY CHAPTER 8: CHEMISTRY & ENERGY
  // ----------------------------------------------------
  if (chapter === 8) {
    buildChemistryCh8Scene(slideId, chapter, group, refs, addAnchor);
    return;
  }

  // ----------------------------------------------------
  // CHEMISTRY CHAPTERS 9, 10, 11 & 12: DEDICATED 3D SCENES
  // ----------------------------------------------------
  if (chapter === 9 || chapter === 10 || chapter === 11 || chapter === 12) {
    buildChemistryCh9to12Scene(slideId, chapter, group, refs, addAnchor);
    return;
  }

  // ----------------------------------------------------
  // CHAPTER 1: CONCEPTS OF CHEMISTRY 3D SCENES
  // ----------------------------------------------------
  if (chapter === 1) {
    if (slideId === 1) {
      // 3D Chemistry Research Lab Flask & Molecular Structure
      const flaskGeo = new THREE.CylinderGeometry(0.5, 1.8, 2.8, 32, 1, true);
      const flaskMat = new THREE.MeshPhysicalMaterial({ color: 0x64748b, transparent: true, opacity: 0.35, roughness: 0.1 });
      const flaskMesh = new THREE.Mesh(flaskGeo, flaskMat);
      flaskMesh.position.set(0, -0.2, 0);
      group.add(flaskMesh);

      // Fluid volume inside
      const fluidGeo = new THREE.CylinderGeometry(0.48, 1.7, 1.6, 32);
      fluidGeo.translate(0, -0.6, 0);
      const fluidMat = new THREE.MeshStandardMaterial({ color: 0x10b981, transparent: true, opacity: 0.7, roughness: 0.2, emissive: 0x059669, emissiveIntensity: 0.4 });
      const fluidMesh = new THREE.Mesh(fluidGeo, fluidMat);
      group.add(fluidMesh);
      addAnchor(fluidMesh, 'রাসায়নিক বিক্রিয়া দ্রবণ', 'Chemical Reaction Fluid', 'Soln', '#10b981');

      // Floating H2O Molecule Model
      const molGroup = new THREE.Group();
      molGroup.position.set(0, 1.8, 0);
      group.add(molGroup);

      const oGeo = new THREE.SphereGeometry(0.4, 24, 24);
      const oMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.4 });
      const oMesh = new THREE.Mesh(oGeo, oMat);
      molGroup.add(oMesh);
      addAnchor(oMesh, 'অক্সিজেন পরমাণু', 'Oxygen Atom (O)', 'O', '#ef4444');

      const hGeo = new THREE.SphereGeometry(0.22, 16, 16);
      const hMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4 });
      const h1Mesh = new THREE.Mesh(hGeo, hMat);
      h1Mesh.position.set(-0.6, -0.4, 0);
      molGroup.add(h1Mesh);
      addAnchor(h1Mesh, 'হাইড্রোজেন ১', 'Hydrogen 1 (H)', 'H', '#38bdf8');

      const h2Mesh = new THREE.Mesh(hGeo, hMat);
      h2Mesh.position.set(0.6, -0.4, 0);
      molGroup.add(h2Mesh);
      addAnchor(h2Mesh, 'হাইড্রোজেন ২', 'Hydrogen 2 (H)', 'H', '#38bdf8');
      return;
    }

    if (slideId === 2) {
      // Ancient Alchemy Distillation Retort & Alembic
      const retortGeo = new THREE.SphereGeometry(1.2, 24, 24);
      const retortMat = new THREE.MeshPhysicalMaterial({ color: 0xd97706, transparent: true, opacity: 0.6, roughness: 0.2 });
      const retort = new THREE.Mesh(retortGeo, retortMat);
      retort.position.set(-0.6, -0.2, 0);
      group.add(retort);
      addAnchor(retort, 'প্রাচীন আলকেমি রিটর্ট (Alembic)', 'Alchemy Distillation Vessel', 'Alchemy', '#f59e0b');

      // Condenser Neck curving outward
      const neckGeo = new THREE.CylinderGeometry(0.2, 0.1, 2.2, 16);
      neckGeo.rotateZ(Math.PI / 3);
      const neck = new THREE.Mesh(neckGeo, retortMat);
      neck.position.set(0.6, 0.6, 0);
      group.add(neck);

      // Philosopher Stone Gold Orb
      const goldOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.8, roughness: 0.2, emissive: 0xeab308, emissiveIntensity: 0.6 })
      );
      goldOrb.position.set(1.6, -0.8, 0);
      group.add(goldOrb);
      addAnchor(goldOrb, 'পরশপাথর ও স্বর্ণ রূপান্তর (Gold Synthesis)', 'Philosopher Stone Transmutation', 'Au', '#facc15');
      return;
    }

    if (slideId === 3) {
      // Central Science Interconnected Node Sphere
      const centerCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
      );
      group.add(centerCore);
      addAnchor(centerCore, 'কেন্দ্রীয় বিজ্ঞান: রসায়ন', 'Central Science: Chemistry', 'Chem', '#38bdf8');

      // Interconnected branch satellites
      const branches = [
        { nameBn: 'পদার্থবিজ্ঞান', nameEn: 'Physics', color: 0xf59e0b, pos: [-1.8, 1.2, 0], sym: 'Phy' },
        { nameBn: 'জীববিজ্ঞান', nameEn: 'Biology', color: 0x10b981, pos: [1.8, 1.2, 0], sym: 'Bio' },
        { nameBn: 'চিকিৎসাবিজ্ঞান', nameEn: 'Medicine', color: 0xec4899, pos: [-1.8, -1.2, 0], sym: 'Med' },
        { nameBn: 'পরিবেশবিজ্ঞান', nameEn: 'Ecology', color: 0x8b5cf6, pos: [1.8, -1.2, 0], sym: 'Env' },
      ];
      branches.forEach(b => {
        const bMesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.38, 16, 16),
          new THREE.MeshStandardMaterial({ color: b.color, emissive: b.color, emissiveIntensity: 0.6 })
        );
        bMesh.position.set(b.pos[0], b.pos[1], b.pos[2]);
        group.add(bMesh);

        // Connecting laser line
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(b.pos[0], b.pos[1], b.pos[2])
        ]);
        const lineMat = new THREE.LineBasicMaterial({ color: b.color, transparent: true, opacity: 0.6 });
        group.add(new THREE.Line(lineGeo, lineMat));
        addAnchor(bMesh, b.nameBn, b.nameEn, b.sym, `#${b.color.toString(16)}`);
      });
      return;
    }

    if (slideId === 4) {
      // Scientific Research Process: 6-Step Helical Pathway
      const helixGroup = new THREE.Group();
      group.add(helixGroup);
      refs.helixGroup = helixGroup;

      const steps = [
        '১. বিষয়বস্তু নির্ধারণ', '২. পটভূমি তথ্য সংগ্রহ', '৩. পরীক্ষণের পরিকল্পনা',
        '৪. তথ্য সংগ্রহ ও উপাত্ত', '৫. ফলাফল বিশ্লেষণ', '৬. সিদ্ধান্ত ও প্রকাশ'
      ];
      steps.forEach((st, idx) => {
        const angle = (idx / 6) * Math.PI * 2;
        const y = idx * 0.5 - 1.2;
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(0.24, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.7 })
        );
        node.position.set(Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5);
        helixGroup.add(node);
        addAnchor(node, st, `Research Step ${idx + 1}`, `${idx + 1}`, '#06b6d4');
      });
      return;
    }

    if (slideId === 5) {
      // Laboratory Bunsen Burner with glowing blue flame
      const baseMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(1.0, 1.2, 0.25, 24),
        new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7, roughness: 0.3 })
      );
      baseMesh.position.set(0, -1.4, 0);
      group.add(baseMesh);

      // Burner Barrel
      const barrelMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.22, 1.4, 16),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 })
      );
      barrelMesh.position.set(0, -0.6, 0);
      group.add(barrelMesh);

      // Blue Flame Cone
      const flameGeo = new THREE.ConeGeometry(0.35, 1.2, 16);
      const flameMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 1.2, transparent: true, opacity: 0.85
      });
      const flameMesh = new THREE.Mesh(flameGeo, flameMat);
      flameMesh.position.set(0, 0.7, 0);
      group.add(flameMesh);
      refs.flameMesh = flameMesh;
      addAnchor(flameMesh, 'বুনসেন শিখা (দহন তাপমাত্রা)', 'Bunsen Burner Flame', 'Flame', '#38bdf8');
      return;
    }

    if (slideId === 6) {
      // Chemistry in Daily Life: NaCl Cubic Crystal Lattice
      const latticeGroup = new THREE.Group();
      group.add(latticeGroup);
      refs.latticeGroup = latticeGroup;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            const isNa = (x + y + z) % 2 === 0;
            const ion = new THREE.Mesh(
              new THREE.SphereGeometry(isNa ? 0.18 : 0.26, 12, 12),
              new THREE.MeshStandardMaterial({
                color: isNa ? 0x9333ea : 0x22c55e,
                emissive: isNa ? 0x7e22ce : 0x16a34a,
                emissiveIntensity: 0.6
              })
            );
            ion.position.set(x * 0.9, y * 0.9, z * 0.9);
            latticeGroup.add(ion);
          }
        }
      }
      addAnchor(latticeGroup, 'খাবার লবণ (NaCl) কেলাস কাঠামো', 'Sodium Chloride Lattice', 'NaCl', '#22c55e');
      return;
    }

    if (slideId === 7) {
      // 3D Hazard Diamond (NFPA 704 / GHS Matrix)
      const diamondMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 1.6, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.5, roughness: 0.3 })
      );
      diamondMesh.rotation.z = Math.PI / 4;
      group.add(diamondMesh);
      addAnchor(diamondMesh, 'জিএইচএস হ্যাজার্ড প্রতীক ডায়মন্ড', 'GHS Hazard Diamond', 'GHS', '#f59e0b');
      return;
    }

    if (slideId === 8) {
      // Toxic Hazard Warning Cylinder
      const toxicMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 0.9, 2.0, 24),
        new THREE.MeshStandardMaterial({ color: 0x991b1b, emissive: 0x7f1d1d, emissiveIntensity: 0.6 })
      );
      group.add(toxicMesh);
      addAnchor(toxicMesh, 'বিষাক্ত ও তীব্র ক্ষতিকর পদার্থ (Toxic)', 'Toxic Poison Warning', 'Toxic ☠️', '#ef4444');
      return;
    }

    if (slideId === 9) {
      // Radioactive Radiation Trefoil
      const nucCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 1 })
      );
      group.add(nucCore);

      const radRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.6, 0.15, 16, 32),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.8 })
      );
      group.add(radRing);
      addAnchor(nucCore, 'তেজস্ক্রিয় বিকিরণ হ্যাজার্ড (Radioactive)', 'Radioactive Hazard', 'Radioactive ☢️', '#facc15');
      return;
    }

    if (slideId === 10) {
      // Flammable & Eco Hazard
      const fireMesh = new THREE.Mesh(
        new THREE.ConeGeometry(0.8, 2.0, 16),
        new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xea580c, emissiveIntensity: 1.0 })
      );
      group.add(fireMesh);
      addAnchor(fireMesh, 'দাহ্য পদার্থ (Flammable Hazard)', 'Flammable Fire Hazard', 'Fire 🔥', '#f97316');
      return;
    }

    if (slideId === 11) {
      // Safety Goggles & Chemical Shield PPE
      const shieldMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1.3, 0.3, 6),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.4, roughness: 0.2, emissive: 0x0369a1, emissiveIntensity: 0.5 })
      );
      shieldMesh.rotateX(Math.PI / 2);
      group.add(shieldMesh);
      addAnchor(shieldMesh, 'ব্যক্তিগত সুরক্ষা সামগ্রী (PPE & Goggles)', 'Personal Protective Equipment', 'PPE 🥽', '#38bdf8');
      return;
    }

    if (slideId === 12) {
      // Chemical Waste Disposal Barrels
      const barrel1 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 1.6, 20),
        new THREE.MeshStandardMaterial({ color: 0x059669, emissive: 0x047857, emissiveIntensity: 0.5 })
      );
      barrel1.position.set(-0.9, -0.3, 0);
      group.add(barrel1);

      const barrel2 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 1.6, 20),
        new THREE.MeshStandardMaterial({ color: 0xd97706, emissive: 0xb45309, emissiveIntensity: 0.5 })
      );
      barrel2.position.set(0.9, -0.3, 0);
      group.add(barrel2);
      addAnchor(barrel1, 'জৈব বর্জ্য সংরক্ষণ ড্রাম', 'Organic Waste Disposal', 'Waste', '#10b981');
      addAnchor(barrel2, 'ভারী ধাতু ও অ্যাসিড প্রসমক', 'Acid & Heavy Metal Neutralization', 'Neutralize', '#f59e0b');
      return;
    }
  }

  // ----------------------------------------------------
  // CHAPTER 2: STATES OF MATTER 3D SCENES (All 20 Textbook Topics)
  // ----------------------------------------------------
  if (chapter === 2) {
    // 1-5: 3D Kinetic Theory Molecular Box & Crystal Lattice
    if (slideId >= 1 && slideId <= 5) {
      const boxGeo = new THREE.BoxGeometry(4.2, 4.2, 4.2);
      const boxMat = new THREE.MeshBasicMaterial({ color: 0x334155, wireframe: true, transparent: true, opacity: 0.35 });
      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      group.add(boxMesh);

      // Crystalline particle grid
      const sphereGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: slideId <= 2 ? 0x38bdf8 : slideId === 3 ? 0x22d3ee : 0x06b6d4,
        roughness: 0.2,
        metalness: 0.5,
        emissive: 0x0284c7,
        emissiveIntensity: 0.4
      });

      const grid = new THREE.Group();
      group.add(grid);
      refs.crystalGrid = grid;

      for (let x = -1.2; x <= 1.2; x += 0.8) {
        for (let y = -1.2; y <= 1.2; y += 0.8) {
          for (let z = -1.2; z <= 1.2; z += 0.8) {
            const mesh = new THREE.Mesh(sphereGeo, sphereMat);
            mesh.position.set(x, y, z);
            grid.add(mesh);
          }
        }
      }

      addAnchor(grid, 'কঠিন কেলাস জালি ও কণার গতিতত্ত্ব', 'Solid Crystal Lattice & Kinetic Theory', 'E_k ∝ T', '#38bdf8');
      return;
    }

    // 6-9: Diffusion & Effusion Pressurized Model
    if (slideId >= 6 && slideId <= 9) {
      const cylGeo = new THREE.CylinderGeometry(1.2, 1.2, 4.0, 32, 1, true);
      const cylMat = new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.3, roughness: 0.1, transmission: 0.8 });
      const cyl = new THREE.Mesh(cylGeo, cylMat);
      group.add(cyl);

      // Piston / Orifice Chamber
      const pistonGeo = new THREE.CylinderGeometry(1.15, 1.15, 0.2, 32);
      const pistonMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.2 });
      const piston = new THREE.Mesh(pistonGeo, pistonMat);
      piston.position.y = 1.0;
      group.add(piston);

      // Effusion spray particles
      const sprayGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const sprayMat = new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0891b2, emissiveIntensity: 0.8 });
      for (let i = 0; i < 24; i++) {
        const p = new THREE.Mesh(sprayGeo, sprayMat);
        p.position.set((Math.random() - 0.5) * 1.6, -1.5 + Math.random() * 2.2, (Math.random() - 0.5) * 1.6);
        group.add(p);
      }

      addAnchor(cyl, slideId >= 8 ? 'নিঃসরণ সূক্ষ্ম ছিদ্রপথ ও চাপ' : 'ব্যাপন ঘনত্ব বিস্তার', slideId >= 8 ? 'Effusion Orifice' : 'Diffusion Gradient', slideId >= 8 ? 'P_high → P_low' : 'Net Flux', '#22d3ee');
      return;
    }

    // 10-11: Graham Diffusion Cylinder (NH3 vs HCl with white ring of NH4Cl)
    if (slideId === 10 || slideId === 11) {
      const cylGeo = new THREE.CylinderGeometry(0.8, 0.8, 6.5, 32, 1, true);
      cylGeo.rotateZ(Math.PI / 2);
      const cylMat = new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.25, roughness: 0.1, transmission: 0.8 });
      const cylMesh = new THREE.Mesh(cylGeo, cylMat);
      group.add(cylMesh);

      // NH3 Source on Left (M=17)
      const nh3Geo = new THREE.SphereGeometry(0.5, 24, 24);
      const nh3Mat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.6 });
      const nh3Mesh = new THREE.Mesh(nh3Geo, nh3Mat);
      nh3Mesh.position.set(-2.8, 0, 0);
      group.add(nh3Mesh);
      addAnchor(nh3Mesh, 'অ্যামোনিয়া উৎস (M=17)', 'NH₃ Source (M=17)', 'NH₃', '#06b6d4');

      // HCl Source on Right (M=36.5)
      const hclGeo = new THREE.SphereGeometry(0.5, 24, 24);
      const hclMat = new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xc2410c, emissiveIntensity: 0.6 });
      const hclMesh = new THREE.Mesh(hclGeo, hclMat);
      hclMesh.position.set(2.8, 0, 0);
      group.add(hclMesh);
      addAnchor(hclMesh, 'হাইড্রোক্লোরিক উৎস (M=36.5)', 'HCl Source (M=36.5)', 'HCl', '#f97316');

      // White Ring of NH4Cl at 59.4% distance
      const ringGeo = new THREE.TorusGeometry(0.78, 0.14, 16, 48);
      ringGeo.rotateY(Math.PI / 2);
      const ringMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.9 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(0.61, 0, 0);
      group.add(ringMesh);
      addAnchor(ringMesh, 'নিশাদলের সাদা বলয়', 'NH₄Cl Deposit Ring', 'NH₄Cl(s)', '#ffffff');
      return;
    }

    // 12: 3D Candle Combustion Model (Solid, Liquid & Gas)
    if (slideId === 12) {
      // Solid Candle Body
      const candleGeo = new THREE.CylinderGeometry(0.9, 0.9, 3.2, 32);
      const candleMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.3, emissive: 0xfef08a, emissiveIntensity: 0.1 });
      const candle = new THREE.Mesh(candleGeo, candleMat);
      candle.position.y = -0.6;
      group.add(candle);
      addAnchor(candle, 'কঠিন মোম ভিত্তি', 'Solid Candle Wax', 'Wax(s)', '#fde047');

      // Wick
      const wickGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 16);
      const wickMat = new THREE.MeshBasicMaterial({ color: 0x1f2937 });
      const wick = new THREE.Mesh(wickGeo, wickMat);
      wick.position.y = 1.2;
      group.add(wick);

      // Flame (Tear drop geometry)
      const flameGeo = new THREE.ConeGeometry(0.35, 1.2, 24);
      const flameMat = new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xfbbf24, emissiveIntensity: 0.9, transparent: true, opacity: 0.85 });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.y = 1.9;
      group.add(flame);
      addAnchor(flame, 'গ্যাসীয় দহন শিখা', 'Combustion Flame', 'CO₂ + H₂O', '#f97316');
      return;
    }

    // 13-16: 3D Boiling Beaker, Thermometer & Heating/Cooling Transitions
    if (slideId >= 13 && slideId <= 16) {
      const beakerGeo = new THREE.CylinderGeometry(1.6, 1.6, 3.2, 32, 1, true);
      const beakerMat = new THREE.MeshPhysicalMaterial({ color: 0x64748b, transparent: true, opacity: 0.35, roughness: 0.1 });
      const beaker = new THREE.Mesh(beakerGeo, beakerMat);
      group.add(beaker);

      // Fluid volume inside
      const fluidGeo = new THREE.CylinderGeometry(1.55, 1.55, 2.0, 32);
      fluidGeo.translate(0, -0.5, 0);
      const fluidMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.6, roughness: 0.1, emissive: 0x0369a1, emissiveIntensity: 0.3 });
      const fluid = new THREE.Mesh(fluidGeo, fluidMat);
      group.add(fluid);
      addAnchor(fluid, slideId === 15 || slideId === 16 ? 'পানির তাপীয় রূপান্তর' : 'ফুটন্ত তরল (১০০°C)', 'Phase Transition Fluid', '100°C H₂O', '#38bdf8');

      // Thermometer
      const thermGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.6, 16);
      thermGeo.translate(0.6, 0.4, 0);
      const thermMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, emissive: 0xbe123c, emissiveIntensity: 0.8 });
      const therm = new THREE.Mesh(thermGeo, thermMat);
      group.add(therm);
      addAnchor(therm, 'থার্মোমিটার ও সুপ্ততাপ', 'Thermometer & Latent Heat', 'T = Const', '#f43f5e');
      return;
    }

    // 17: 3D Distillation Setup (Flask + Condenser + Distillate)
    if (slideId === 17) {
      // Boiling Flask (Sphere with neck)
      const flaskBody = new THREE.Mesh(new THREE.SphereGeometry(1.2, 24, 24), new THREE.MeshPhysicalMaterial({ color: 0x64748b, transparent: true, opacity: 0.4 }));
      flaskBody.position.set(-1.8, -0.5, 0);
      group.add(flaskBody);

      // Condenser Tube (Angled cylinder)
      const condGeo = new THREE.CylinderGeometry(0.4, 0.4, 3.8, 24);
      condGeo.rotateZ(Math.PI / 4);
      const condMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4, transmission: 0.8 });
      const condenser = new THREE.Mesh(condGeo, condMat);
      condenser.position.set(0.2, 0.3, 0);
      group.add(condenser);
      addAnchor(condenser, 'লিবিক শীতক (ঘনীভবন)', 'Liebig Condenser', 'Condensation', '#38bdf8');

      // Receiver Beaker
      const recGeo = new THREE.CylinderGeometry(0.7, 0.7, 1.4, 24);
      const recMat = new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35 });
      const rec = new THREE.Mesh(recGeo, recMat);
      rec.position.set(2.0, -1.2, 0);
      group.add(rec);
      addAnchor(rec, 'বিশুদ্ধ পাতিত তরল', 'Distillate Receiver', 'Pure Distillate', '#22d3ee');
      return;
    }

    // 18: Sublimation Apparatus (Funnel + Cotton Plug + Violet Iodine Vapor)
    if (slideId === 18) {
      const beakerGeo = new THREE.CylinderGeometry(1.5, 1.5, 2.6, 32, 1, true);
      const beakerMat = new THREE.MeshPhysicalMaterial({ color: 0x64748b, transparent: true, opacity: 0.35 });
      const beaker = new THREE.Mesh(beakerGeo, beakerMat);
      group.add(beaker);

      // Violet Iodine Vapor Cloud
      const vaporGeo = new THREE.SphereGeometry(1.2, 24, 24);
      const vaporMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, transparent: true, opacity: 0.5, emissive: 0x9333ea, emissiveIntensity: 0.7 });
      const vapor = new THREE.Mesh(vaporGeo, vaporMat);
      vapor.position.set(0, 0.2, 0);
      group.add(vapor);
      addAnchor(vapor, 'উর্ধ্বপাতিত বেগুনি বাষ্প', 'Sublimated Iodine Vapor', 'I₂(g) Sublimation', '#c084fc');

      // Inverted Funnel
      const funnelGeo = new THREE.ConeGeometry(1.6, 1.8, 32, 1, true);
      funnelGeo.rotateX(Math.PI);
      funnelGeo.translate(0, 2.0, 0);
      const funnelMat = new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.4 });
      const funnel = new THREE.Mesh(funnelGeo, funnelMat);
      group.add(funnel);
      addAnchor(funnel, 'কাচ ফানেল ও তুলার ছিপি', 'Inverted Funnel & Plug', 'Funnel', '#94a3b8');
      return;
    }

    // 19: Plasma State (Ionized High-Energy Filament Globe)
    if (slideId === 19) {
      // Outer Glass Sphere
      const globeGeo = new THREE.SphereGeometry(2.0, 32, 32);
      const globeMat = new THREE.MeshPhysicalMaterial({ color: 0x1e1b4b, transparent: true, opacity: 0.3, transmission: 0.9, roughness: 0.1 });
      const globe = new THREE.Mesh(globeGeo, globeMat);
      group.add(globe);

      // Inner Core Electrode
      const coreGeo = new THREE.SphereGeometry(0.5, 24, 24);
      const coreMat = new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xdb2777, emissiveIntensity: 1.0 });
      const core = new THREE.Mesh(coreGeo, coreMat);
      group.add(core);

      // Electric Plasma Arcs
      const arcMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 2 });
      for (let i = 0; i < 8; i++) {
        const points = [];
        points.push(new THREE.Vector3(0, 0, 0));
        const theta = (i / 8) * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 1.9;
        points.push(new THREE.Vector3((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8));
        points.push(new THREE.Vector3(r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)));
        const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(arcGeo, arcMat);
        group.add(line);
      }

      addAnchor(core, 'আয়নিত প্লাজমা গোলক', 'High-Energy Plasma Globe', 'Plasma State', '#f472b6');
      return;
    }

    // 20: Chapter 2 Master Summary Model (Three States Cycle)
    if (slideId >= 20) {
      const ringGeo = new THREE.TorusGeometry(1.8, 0.15, 16, 48);
      const ringMat = new THREE.MeshStandardMaterial({ color: 0x22d3ee, metalness: 0.5, roughness: 0.2, emissive: 0x0891b2, emissiveIntensity: 0.4 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      group.add(ring);

      // 3 Node Spheres for Solid, Liquid, Gas
      const nodeGeo = new THREE.SphereGeometry(0.45, 24, 24);
      
      const sNode = new THREE.Mesh(nodeGeo, new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 }));
      sNode.position.set(-1.6, -0.9, 0);
      group.add(sNode);
      addAnchor(sNode, 'কঠিন অবস্থা', 'Solid Phase', 'Solid (s)', '#38bdf8');

      const lNode = new THREE.Mesh(nodeGeo, new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x059669, emissiveIntensity: 0.6 }));
      lNode.position.set(1.6, -0.9, 0);
      group.add(lNode);
      addAnchor(lNode, 'তরল অবস্থা', 'Liquid Phase', 'Liquid (l)', '#34d399');

      const gNode = new THREE.Mesh(nodeGeo, new THREE.MeshStandardMaterial({ color: 0xf43f5e, emissive: 0xe11d48, emissiveIntensity: 0.6 }));
      gNode.position.set(0, 1.7, 0);
      group.add(gNode);
      addAnchor(gNode, 'গ্যাসীয় অবস্থা', 'Gas Phase', 'Gas (g)', '#f43f5e');
      return;
    }
  }
  // ----------------------------------------------------
  // CHAPTER 3: STRUCTURE OF MATTER (Original Scenes)
  // ----------------------------------------------------
  if (slideId === 1 || slideId === 3 || slideId === 13) {
    // 1. Central Nucleus Cluster (Protons & Neutrons)
    const nucleusGroup = new THREE.Group();
    group.add(nucleusGroup);
    refs.nucleusGroup = nucleusGroup;

    const protonMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e, // Rose red
      roughness: 0.2,
      metalness: 0.3,
      emissive: 0x9f1239,
      emissiveIntensity: 0.6
    });

    const neutronMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Slate grey
      roughness: 0.4,
      metalness: 0.1
    });

    const protonCount = 6;
    const neutronCount = 6;
    const sphereGeo = new THREE.SphereGeometry(0.32, 24, 24);

    for (let i = 0; i < protonCount + neutronCount; i++) {
      const isProton = i < protonCount;
      const sphere = new THREE.Mesh(sphereGeo, isProton ? protonMat : neutronMat);
      // Random cluster within sphere
      const phi = Math.acos(-1 + (2 * i) / (protonCount + neutronCount));
      const theta = Math.sqrt((protonCount + neutronCount) * Math.PI) * phi;
      const r = 0.55 * Math.cbrt(Math.random());
      sphere.position.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
      nucleusGroup.add(sphere);
    }

    addAnchor(nucleusGroup, 'ভারী কেন্দ্রীন', 'Atomic Nucleus', 'Nucleus', '#f43f5e');

    // 2. Concentric Electron Shells & Orbiting Electrons
    const shellRadii = [2.2, 3.8, 5.4];
    const electronMeshes: { mesh: THREE.Mesh; radius: number; speed: number; angle: number; axis: THREE.Vector3 }[] = [];

    const electronMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8, // Electric cyan
      emissive: 0x0284c7,
      emissiveIntensity: 1.5,
      roughness: 0.1
    });

    shellRadii.forEach((radius, sIdx) => {
      // Ring Orbit Line
      const orbitGeo = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 64);
      const orbitMat = new THREE.MeshBasicMaterial({
        color: sIdx === 0 ? 0x38bdf8 : sIdx === 1 ? 0x818cf8 : 0xc084fc,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4
      });
      const orbitRing = new THREE.Mesh(orbitGeo, orbitMat);
      orbitRing.rotation.x = Math.PI / 2 + (sIdx - 1) * 0.3;
      orbitRing.rotation.y = sIdx * 0.4;
      group.add(orbitRing);

      // Add 2 to 4 electrons per shell
      const count = sIdx === 0 ? 2 : 4;
      for (let e = 0; e < count; e++) {
        const eGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const eMesh = new THREE.Mesh(eGeo, electronMat);
        group.add(eMesh);

        electronMeshes.push({
          mesh: eMesh,
          radius,
          speed: (2.2 - sIdx * 0.4) * (e % 2 === 0 ? 1 : -1),
          angle: (e * Math.PI * 2) / count,
          axis: new THREE.Vector3(Math.sin(sIdx), Math.cos(sIdx), 0.2).normalize()
        });

        if (sIdx === 0 && e === 0) {
          addAnchor(eMesh, 'ইলেকট্রন', 'Orbiting Electron', 'e⁻', '#38bdf8');
        }
      }
    });

    refs.electronMeshes = electronMeshes;
  }

  // ----------------------------------------------------
  // Slide 2: 3D Crystal Lattice (Gold Au) & Water Molecule (H2O)
  // ----------------------------------------------------
  else if (slideId === 2) {
    // Left: Gold Atom FCC Lattice (Au)
    const goldLatticeGroup = new THREE.Group();
    goldLatticeGroup.position.set(-3.2, 0, 0);
    group.add(goldLatticeGroup);

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x78350f,
      emissiveIntensity: 0.3
    });

    const latticeSize = 2;
    const spacing = 1.2;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (Math.abs(x) + Math.abs(y) + Math.abs(z) <= 2) {
            const atom = new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 20), goldMat);
            atom.position.set(x * spacing, y * spacing, z * spacing);
            goldLatticeGroup.add(atom);
          }
        }
      }
    }
    addAnchor(goldLatticeGroup, 'গোল্ড ক্রিস্টাল জালিকা', 'Gold Lattice (Au)', 'Au', '#f59e0b');

    // Right: Water Molecule (H2O)
    const waterGroup = new THREE.Group();
    waterGroup.position.set(3.2, 0, 0);
    group.add(waterGroup);

    // Oxygen
    const oxygenMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.2 });
    const oxygen = new THREE.Mesh(new THREE.SphereGeometry(0.65, 24, 24), oxygenMat);
    waterGroup.add(oxygen);

    // Hydrogens (104.5 degree angle)
    const hMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const bondAngle = (104.5 * Math.PI) / 180;
    const bondLength = 1.3;

    const h1 = new THREE.Mesh(new THREE.SphereGeometry(0.38, 20, 20), hMat);
    h1.position.set(bondLength * Math.sin(bondAngle / 2), -bondLength * Math.cos(bondAngle / 2), 0);
    waterGroup.add(h1);

    const h2 = new THREE.Mesh(new THREE.SphereGeometry(0.38, 20, 20), hMat);
    h2.position.set(-bondLength * Math.sin(bondAngle / 2), -bondLength * Math.cos(bondAngle / 2), 0);
    waterGroup.add(h2);

    // Covalent bonds (cylinders)
    const bondMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3 });
    const bGeo = new THREE.CylinderGeometry(0.08, 0.08, bondLength, 12);

    const bond1 = new THREE.Mesh(bGeo, bondMat);
    bond1.position.copy(h1.position).multiplyScalar(0.5);
    bond1.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), h1.position.clone().normalize());
    waterGroup.add(bond1);

    const bond2 = new THREE.Mesh(bGeo, bondMat);
    bond2.position.copy(h2.position).multiplyScalar(0.5);
    bond2.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), h2.position.clone().normalize());
    waterGroup.add(bond2);

    addAnchor(waterGroup, 'পানির অণু (যৌগিক)', 'Water Molecule (H₂O)', 'H₂O', '#38bdf8');
  }

  // ----------------------------------------------------
  // Slide 4: Isotopic Nucleus with Nucleon Counts (A & Z)
  // ----------------------------------------------------
  else if (slideId === 4) {
    const nucleonGroup = new THREE.Group();
    group.add(nucleonGroup);
    refs.nucleonGroup = nucleonGroup;

    // Sodium-23 representation (11 Protons + 12 Neutrons)
    const pMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, emissive: 0x881337, emissiveIntensity: 0.5 });
    const nMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4 });
    const sGeo = new THREE.SphereGeometry(0.35, 20, 20);

    for (let i = 0; i < 23; i++) {
      const isProton = i < 11;
      const sphere = new THREE.Mesh(sGeo, isProton ? pMat : nMat);
      const phi = Math.acos(-1 + (2 * i) / 23);
      const theta = Math.sqrt(23 * Math.PI) * phi;
      const r = 1.1 * Math.cbrt(Math.random() * 0.7 + 0.3);
      sphere.position.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
      nucleonGroup.add(sphere);
    }

    addAnchor(nucleonGroup, 'সোডিয়াম নিউক্লিয়াস', 'Nucleus (²³Na: 11p, 12n)', 'A=23, Z=11', '#f43f5e');
  }

  // ----------------------------------------------------
  // Slide 5: Rutherford Alpha Scattering 3D Experiment
  // ----------------------------------------------------
  else if (slideId === 5) {
    // 1. Central Gold Atom (Au, Z = 79)
    const goldAtom = new THREE.Group();
    group.add(goldAtom);

    // Heavy Gold Nucleus
    const goldNucleusMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 1.2,
      roughness: 0.1
    });
    const goldNucleus = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), goldNucleusMat);
    goldAtom.add(goldNucleus);
    addAnchor(goldNucleus, 'গোল্ড এটম নিউক্লিয়াস', 'Gold Nucleus (Au +79e)', 'Au Nucleus', '#f59e0b');

    // Thin circular electron cloud boundary around gold atom
    const cloudMat = new THREE.MeshBasicMaterial({
      color: 0xeab308,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const cloudMesh = new THREE.Mesh(new THREE.SphereGeometry(3.5, 24, 24), cloudMat);
    goldAtom.add(cloudMesh);

    // 2. Alpha Emitter (Source Box on Left)
    const gunMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 });
    const gun = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), gunMat);
    gun.position.set(-6, 0, 0);
    group.add(gun);
    addAnchor(gun, 'আলফা কণা উৎস', 'Alpha (α) Source', '⁴₂He²⁺', '#ef4444');

    // 3. ZnS Detector Screen (Cylindrical curved wall)
    const screenGeo = new THREE.CylinderGeometry(5.5, 5.5, 3.5, 32, 1, true, -Math.PI / 2.2, Math.PI * 0.9);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.rotation.y = Math.PI;
    group.add(screen);
    addAnchor(screen, 'জিঙ্ক সালফাইড পর্দা', 'ZnS Detector Screen', 'ZnS', '#10b981');

    // Particle Beam Array
    const alphaParticles: { mesh: THREE.Mesh; startPos: THREE.Vector3; vel: THREE.Vector3; deflected: boolean }[] = [];
    const alphaMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e });

    for (let p = 0; p < 35; p++) {
      const pMesh = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), alphaMat);
      const startY = (Math.random() - 0.5) * 1.8;
      const startZ = (Math.random() - 0.5) * 1.8;
      const startPos = new THREE.Vector3(-6, startY, startZ);
      pMesh.position.copy(startPos);
      group.add(pMesh);

      alphaParticles.push({
        mesh: pMesh,
        startPos,
        vel: new THREE.Vector3(4.5 + Math.random() * 0.8, 0, 0),
        deflected: false
      });
    }

    refs.alphaParticles = alphaParticles;

    refs.fireAlphaParticle = () => {
      alphaParticles.forEach((p) => {
        p.mesh.position.copy(p.startPos);
        p.vel.set(5.5 + Math.random() * 1.5, 0, 0);
        p.deflected = false;
      });
    };
  }

  // ----------------------------------------------------
  // Slide 6: Niels Bohr Quantum Energy Shells & Transitions
  // ----------------------------------------------------
  else if (slideId === 6) {
    const bohrGroup = new THREE.Group();
    group.add(bohrGroup);

    // Central Nucleus
    const nMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, emissive: 0x9f1239, emissiveIntensity: 1 });
    const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 24), nMat);
    bohrGroup.add(nucleus);
    addAnchor(nucleus, 'বোর কেন্দ্রীন', 'Positive Nucleus', '+Ze', '#f43f5e');

    // Distinct Energy Shells K, L, M
    const shells = [
      { n: 1, nameBn: 'K শেল (n=1)', nameEn: 'K Shell', r: 1.8, color: 0x38bdf8 },
      { n: 2, nameBn: 'L শেল (n=2)', nameEn: 'L Shell', r: 3.2, color: 0x818cf8 },
      { n: 3, nameBn: 'M শেল (n=3)', nameEn: 'M Shell', r: 4.6, color: 0xc084fc }
    ];

    shells.forEach((shell) => {
      const ringGeo = new THREE.RingGeometry(shell.r - 0.03, shell.r + 0.03, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: shell.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      bohrGroup.add(ring);
    });

    // Quantum Jumper Electron
    const eMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 1.5 });
    const jumpElectron = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), eMat);
    bohrGroup.add(jumpElectron);
    refs.jumpElectron = jumpElectron;

    // Emitted Photon Packet
    const photonGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const photonMesh = new THREE.Mesh(photonGeo, photonMat);
    photonMesh.visible = false;
    bohrGroup.add(photonMesh);
    refs.photonMesh = photonMesh;

    addAnchor(jumpElectron, 'কোয়ান্টাম ইলেকট্রন', 'Bohr Electron', 'e⁻', '#facc15');

    refs.triggerQuantumJump = () => {
      refs.jumpProgress = 0;
      refs.isJumping = true;
      photonMesh.visible = true;
      photonMesh.position.copy(jumpElectron.position);
    };
  }

  // ----------------------------------------------------
  // Slide 7: 3D Quantum Atomic Orbitals (s, p, d Shapes)
  // ----------------------------------------------------
  else if (slideId === 7) {
    const orbitalGroup = new THREE.Group();
    group.add(orbitalGroup);

    // Nucleus in center
    const centerPoint = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    orbitalGroup.add(centerPoint);
    addAnchor(centerPoint, 'নিউক্লিয়াস', 'Atomic Center', 'Center', '#ffffff');

    // S-Orbital (Sphere)
    const sMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
      roughness: 0.2
    });
    const sMesh = new THREE.Mesh(new THREE.SphereGeometry(2.5, 32, 32), sMat);

    // P-Orbital (Two Dumbbell Lobes along Z axis)
    const pGroup = new THREE.Group();
    const pMatPlus = new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 });
    const pMatMinus = new THREE.MeshStandardMaterial({ color: 0xf43f5e, transparent: true, opacity: 0.7 });

    const lobeGeo = new THREE.SphereGeometry(1.4, 32, 32);
    lobeGeo.scale(1, 1, 1.8);

    const lobe1 = new THREE.Mesh(lobeGeo, pMatPlus);
    lobe1.position.set(0, 0, 1.4);
    pGroup.add(lobe1);

    const lobe2 = new THREE.Mesh(lobeGeo, pMatMinus);
    lobe2.position.set(0, 0, -1.4);
    pGroup.add(lobe2);

    // D-Orbital (Four Cloverleaf Lobes in XY plane)
    const dGroup = new THREE.Group();
    const dMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.7 });
    const dLobeGeo = new THREE.SphereGeometry(1.1, 24, 24);
    dLobeGeo.scale(1.4, 0.9, 0.9);

    for (let i = 0; i < 4; i++) {
      const dLobe = new THREE.Mesh(dLobeGeo, dMat);
      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      dLobe.position.set(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0);
      dLobe.rotation.z = angle;
      dGroup.add(dLobe);
    }

    if (group.userData.activeTab === 's') {
      orbitalGroup.add(sMesh);
      addAnchor(sMesh, 'গোলকাকার s-অরবিটাল', 'Spherical s-Orbital', 'l = 0', '#38bdf8');
    } else if (group.userData.activeTab === 'd') {
      orbitalGroup.add(dGroup);
      addAnchor(dGroup, 'ডাবল ডাম্বেল d-অরবিটাল', 'Cloverleaf d-Orbital', 'l = 2', '#f59e0b');
    } else {
      orbitalGroup.add(pGroup);
      addAnchor(pGroup, 'ডাম্বেল p-অরবিটাল', 'Dumbbell p-Orbital', 'l = 1', '#818cf8');
    }
  }

  // ----------------------------------------------------
  // Slide 8: Aufbau (n + l) Energy Step Spiral
  // ----------------------------------------------------
  else if (slideId === 8) {
    const aufbauGroup = new THREE.Group();
    group.add(aufbauGroup);

    const subshells = [
      { nameBn: '1s অরবিটাল', nameEn: '1s (n+l=1)', r: 1.0, y: -2.8, color: 0x38bdf8 },
      { nameBn: '2s অরবিটাল', nameEn: '2s (n+l=2)', r: 1.5, y: -2.0, color: 0x38bdf8 },
      { nameBn: '2p অরবিটাল', nameEn: '2p (n+l=3)', r: 2.0, y: -1.2, color: 0xa855f7 },
      { nameBn: '3s অরবিটাল', nameEn: '3s (n+l=3)', r: 2.5, y: -0.4, color: 0x38bdf8 },
      { nameBn: '3p অরবিটাল', nameEn: '3p (n+l=4)', r: 3.0, y: 0.4, color: 0xa855f7 },
      { nameBn: '4s অরবিটাল', nameEn: '4s (n+l=4)', r: 3.5, y: 1.2, color: 0x10b981 },
      { nameBn: '3d অরবিটাল', nameEn: '3d (n+l=5)', r: 4.0, y: 2.0, color: 0xf59e0b },
      { nameBn: '4p অরবিটাল', nameEn: '4p (n+l=5)', r: 4.5, y: 2.8, color: 0xa855f7 }
    ];

    subshells.forEach((sub, sIdx) => {
      const stepMesh = new THREE.Mesh(
        new THREE.TorusGeometry(sub.r, 0.08, 12, 48),
        new THREE.MeshStandardMaterial({ color: sub.color, emissive: sub.color, emissiveIntensity: 0.4 })
      );
      stepMesh.position.y = sub.y;
      stepMesh.rotation.x = Math.PI / 2;
      aufbauGroup.add(stepMesh);

      if (sIdx === 5 || sIdx === 6) {
        addAnchor(stepMesh, sub.nameBn, sub.nameEn, `Energy Level`, '#10b981');
      }
    });
  }

  // ----------------------------------------------------
  // Slide 9: Cr & Cu Stability 3D d-Subshell Symmetry
  // ----------------------------------------------------
  else if (slideId === 9) {
    const crGroup = new THREE.Group();
    crGroup.position.set(-2.8, 0, 0);
    group.add(crGroup);

    // 5 half-filled lobes for Cr (d5)
    for (let i = 0; i < 5; i++) {
      const lobe = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.7 })
      );
      lobe.scale.set(1.6, 0.7, 0.7);
      const angle = (i * Math.PI * 2) / 5;
      lobe.position.set(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0);
      lobe.rotation.z = angle;
      crGroup.add(lobe);
    }
    addAnchor(crGroup, 'ক্রোমিয়াম 3d⁵ (অর্ধপূর্ণ)', 'Chromium 3d⁵ Half-Filled', 'Cr d⁵', '#f59e0b');

    // 10 fully-filled paired lobes for Cu (d10)
    const cuGroup = new THREE.Group();
    cuGroup.position.set(2.8, 0, 0);
    group.add(cuGroup);

    for (let i = 0; i < 5; i++) {
      const lobe1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.75 })
      );
      lobe1.scale.set(1.7, 0.8, 0.8);
      const angle = (i * Math.PI * 2) / 5;
      lobe1.position.set(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0);
      lobe1.rotation.z = angle;
      cuGroup.add(lobe1);
    }
    addAnchor(cuGroup, 'কপার 3d¹⁰ (পূর্ণ স্থিতিশীল)', 'Copper 3d¹⁰ Fully-Filled', 'Cu d¹⁰', '#38bdf8');
  }

  // ----------------------------------------------------
  // Slide 10: Hydrogen Isotopes 3D Comparison (¹H, ²H, ³H)
  // ----------------------------------------------------
  else if (slideId === 10) {
    const isoGroup = new THREE.Group();
    group.add(isoGroup);

    const isotopes = [
      { nameBn: 'প্রোটিয়াম (¹H)', nameEn: 'Protium (0n)', p: 1, n: 0, x: -3.6, color: '#38bdf8' },
      { nameBn: 'ডিউটেরিয়াম (²H)', nameEn: 'Deuterium (1n)', p: 1, n: 1, x: 0, color: '#818cf8' },
      { nameBn: 'ট্রিটিয়াম (³H)', nameEn: 'Tritium (2n)', p: 1, n: 2, x: 3.6, color: '#f43f5e' }
    ];

    isotopes.forEach((iso) => {
      const subG = new THREE.Group();
      subG.position.x = iso.x;
      isoGroup.add(subG);

      // Proton (Red)
      const p = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xf43f5e, emissive: 0x881337, emissiveIntensity: 0.6 })
      );
      p.position.y = 0.2;
      subG.add(p);

      // Neutrons (Grey)
      for (let ni = 0; ni < iso.n; ni++) {
        const n = new THREE.Mesh(
          new THREE.SphereGeometry(0.45, 20, 20),
          new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3 })
        );
        n.position.set((ni === 0 ? -0.5 : 0.5), -0.3, 0);
        subG.add(n);
      }

      // Orbiting electron
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.6, 1.64, 48),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, opacity: 0.3, transparent: true })
      );
      ring.rotation.x = Math.PI / 2;
      subG.add(ring);

      const eMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      eMesh.position.set(1.6, 0, 0);
      subG.add(eMesh);

      addAnchor(subG, iso.nameBn, iso.nameEn, `${iso.p}p + ${iso.n}n`, iso.color);
    });
  }

  // ----------------------------------------------------
  // Slide 11: Chlorine Isotopes 3D Abundance Balance
  // ----------------------------------------------------
  else if (slideId === 11) {
    const clGroup = new THREE.Group();
    group.add(clGroup);

    // Chlorine-35 (75%)
    const cl35 = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.2, emissive: 0x0369a1, emissiveIntensity: 0.5 })
    );
    cl35.position.set(-2.8, 0, 0);
    clGroup.add(cl35);
    addAnchor(cl35, 'ক্লোরিন-৩৫ (৭৫%)', 'Chlorine-35 (³⁵Cl)', '75.77%', '#0ea5e9');

    // Chlorine-37 (25%)
    const cl37 = new THREE.Mesh(
      new THREE.SphereGeometry(1.8, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.2, emissive: 0x7e22ce, emissiveIntensity: 0.5 })
    );
    cl37.position.set(2.8, 0, 0);
    clGroup.add(cl37);
    addAnchor(cl37, 'ক্লোরিন-৩৭ (২৫%)', 'Chlorine-37 (³⁷Cl)', '24.23%', '#a855f7');

    // Balance bar
    const bar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 5.6, 16),
      new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 })
    );
    bar.rotation.z = Math.PI / 2;
    clGroup.add(bar);
  }

  // ----------------------------------------------------
  // Slide 12: Medical Radio-Isotopes & Targeted Radiotherapy Beam
  // ----------------------------------------------------
  else if (slideId === 12) {
    const medGroup = new THREE.Group();
    group.add(medGroup);

    // Targeted Tumor Core
    const tumorMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.8 });
    const tumor = new THREE.Mesh(new THREE.SphereGeometry(1.0, 24, 24), tumorMat);
    medGroup.add(tumor);
    addAnchor(tumor, 'ক্যান্সার টিউমার', 'Malignant Tumor Target', 'Target', '#ef4444');

    // Cobalt-60 Radiotherapy Emitter
    const headMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 });
    const emitterHead = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 1.5, 24), headMat);
    emitterHead.position.set(0, 4.2, 0);
    medGroup.add(emitterHead);
    addAnchor(emitterHead, 'কোবাল্ট-৬০ রেডিয়েশন হেড', 'Cobalt-60 Radiation Head', '⁶⁰Co γ-beam', '#a855f7');

    // Gamma Radiation Beam (Conical cylinder)
    const beamGeo = new THREE.CylinderGeometry(0.2, 1.1, 3.5, 24, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.set(0, 2.0, 0);
    medGroup.add(beam);
  }
}

// Real-time animation physics updates
function updateSlide3DPhysics(
  slideId: number, 
  time: number, 
  refs: any, 
  quantumState: string,
  chapter: number = 3,
  subject: string = 'chemistry'
) {
  if (subject === 'biology') {
    const effectiveModelId = Math.max(1, Math.min(20, slideId || 1));
    updateBiology3DPhysics(effectiveModelId, time, refs, chapter);
    return;
  }

  if (subject === 'physics') {
    updatePhysics3DPhysics(slideId, time, refs, chapter);
    return;
  }

  if (subject === 'chemistry' && chapter === 6) {
    updateChemistryCh6Physics(slideId, time, refs);
    return;
  }

  if (subject === 'chemistry' && chapter === 7) {
    updateChemistryCh7Physics(slideId, time, refs);
    return;
  }

  if (subject === 'chemistry' && chapter === 8) {
    updateChemistryCh8Physics(slideId, time, refs);
    return;
  }

  if (subject === 'chemistry' && (chapter === 9 || chapter === 10 || chapter === 11 || chapter === 12)) {
    updateChemistryCh9to12Physics(slideId, time, refs, chapter);
    return;
  }

  // Rotate nucleus
  if (refs.nucleusGroup) {
    refs.nucleusGroup.rotation.x = Math.sin(time * 0.5) * 0.2;
    refs.nucleusGroup.rotation.y = time * 0.4;
  }

  // Animate electrons along orbital paths
  if (refs.electronMeshes) {
    refs.electronMeshes.forEach((item: any) => {
      const angle = item.angle + time * item.speed;
      item.mesh.position.set(
        Math.cos(angle) * item.radius,
        Math.sin(angle) * item.radius * Math.cos(item.axis.x),
        Math.sin(angle) * item.radius * Math.sin(item.axis.y)
      );
    });
  }

  // Slide 5: Rutherford Alpha Particles flow
  if (slideId === 5 && refs.alphaParticles) {
    refs.alphaParticles.forEach((p: any) => {
      p.mesh.position.addScaledVector(p.vel, 0.016);

      // Deflection logic when approaching central Gold Nucleus
      const distToCenter = p.mesh.position.length();

      if (distToCenter < 1.4 && !p.deflected) {
        p.deflected = true;
        // Strong electrostatic repulsion
        const repulseDir = p.mesh.position.clone().normalize();
        if (Math.abs(p.startPos.y) < 0.25 && Math.abs(p.startPos.z) < 0.25) {
          // Direct hit -> rebound 180 degrees
          p.vel.set(-4.5, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5);
        } else {
          // Angle deflection
          p.vel.addScaledVector(repulseDir, 5.0).normalize().multiplyScalar(5.0);
        }
      }

      // Loop particles back to gun
      if (p.mesh.position.x > 7 || p.mesh.position.x < -8 || distToCenter > 9) {
        p.mesh.position.copy(p.startPos);
        p.vel.set(4.5 + Math.random() * 0.8, 0, 0);
        p.deflected = false;
      }
    });
  }

  // Slide 6: Bohr Quantum Jump & Photon emission
  if (slideId === 6 && refs.jumpElectron) {
    const angle = time * 1.8;
    const rGround = 3.2; // L shell (n=2)
    const rExcited = 4.6; // M shell (n=3)

    const targetR = quantumState === 'excited' || quantumState === 'jump' ? rExcited : rGround;
    refs.jumpElectron.position.set(Math.cos(angle) * targetR, 0, Math.sin(angle) * targetR);

    if (refs.isJumping && refs.photonMesh) {
      refs.jumpProgress = (refs.jumpProgress || 0) + 0.03;
      refs.photonMesh.position.x += 0.08;
      refs.photonMesh.position.y += Math.sin(time * 15) * 0.05;

      if (refs.jumpProgress > 1) {
        refs.isJumping = false;
        refs.photonMesh.visible = false;
      }
    }
  }
}
