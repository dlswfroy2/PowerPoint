/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Play, Pause, Box, Sparkles } from 'lucide-react';
import {
  buildBiologyCh1Part3D,
  updateBiologyCh1Part3DPhysics
} from './BiologyChapter1Part3DBuilder';

interface BiologyPart3DPreviewProps {
  topicId: string;
  partId?: string;
  partNameBn: string;
  partNameEn: string;
  badgeColor?: string;
  height?: number;
}

export const BiologyPart3DPreview: React.FC<BiologyPart3DPreviewProps> = ({
  topicId,
  partId,
  partNameBn,
  partNameEn,
  badgeColor = '#38bdf8',
  height = 240
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const sceneRefsRef = useRef<any>({});
  const animFrameIdRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const prevPointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isIsolated, setIsIsolated] = useState<boolean>(true);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const width = canvas.clientWidth || 300;
    const h = height;

    if (!sceneRef.current) {
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(45, width / h, 0.1, 100);
      camera.position.set(0, 0, 7.0);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(width, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.8);
      dirLight1.position.set(5, 8, 5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xec4899, 1.2);
      dirLight2.position.set(-5, -6, -3);
      scene.add(dirLight2);

      const group = new THREE.Group();
      scene.add(group);
      modelGroupRef.current = group;
    }

    if (modelGroupRef.current) {
      sceneRefsRef.current = {};
      buildBiologyCh1Part3D(
        topicId,
        partId,
        isIsolated,
        modelGroupRef.current,
        sceneRefsRef.current
      );
    }

    let clock = new THREE.Clock();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (autoRotate && modelGroupRef.current && !isDraggingRef.current) {
        modelGroupRef.current.rotation.y += 0.01;
      }

      updateBiologyCh1Part3DPhysics({
        time: elapsedTime,
        animate: true,
        wireframe: false,
        topicId,
        partId,
        refs: sceneRefsRef.current
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    animate();

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [topicId, partId, isIsolated, autoRotate, height]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !modelGroupRef.current) return;
    const deltaX = e.clientX - prevPointerRef.current.x;
    const deltaY = e.clientY - prevPointerRef.current.y;
    modelGroupRef.current.rotation.y += deltaX * 0.01;
    modelGroupRef.current.rotation.x += deltaY * 0.01;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!cameraRef.current) return;
    cameraRef.current.position.z = THREE.MathUtils.clamp(
      cameraRef.current.position.z + e.deltaY * 0.008,
      3.5,
      14
    );
  };

  const resetCamera = () => {
    if (!cameraRef.current || !modelGroupRef.current) return;
    cameraRef.current.position.set(0, 0, 7.0);
    modelGroupRef.current.rotation.set(0, 0, 0);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-cyan-500/30 select-none shadow-xl">
      {/* Top micro controls */}
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10 pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-bold text-white backdrop-blur-md">
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: badgeColor }} />
          <span>{partNameBn} ৩ডি</span>
        </div>

        <div className="flex items-center gap-1 pointer-events-auto">
          <button
            onClick={() => setIsIsolated(!isIsolated)}
            className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/90 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500 hover:text-slate-950 transition"
            title="অঙ্গাণু একক ৩ডি বনাম সমগ্র জীব ৩ডি"
          >
            {isIsolated ? 'একক অঙ্গাণু' : 'সমগ্র জীব'}
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="p-1 rounded bg-slate-900/90 text-slate-300 border border-slate-700 hover:text-white transition"
            title={autoRotate ? 'ঘূর্ণন থামান' : 'ঘূর্ণন চালু'}
          >
            {autoRotate ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          </button>
          <button
            onClick={resetCamera}
            className="p-1 rounded bg-slate-900/90 text-slate-300 border border-slate-700 hover:text-white transition"
            title="ক্যামেরা রিসেট"
          >
            <RotateCcw className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        style={{ height: `${height}px` }}
        className="w-full block cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
      />

      {/* Subtle bottom note */}
      <div className="absolute bottom-1 right-2 text-[9px] text-slate-400 bg-slate-900/80 px-1.5 py-0.5 rounded pointer-events-none">
        মাউস ড্র্যাগ করে ৩৬০° ঘুরান
      </div>
    </div>
  );
};
