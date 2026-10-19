/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import * as THREE from 'three';
import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

export function buildBiologyCh1to5Scene(
  modelId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  const normId = Math.max(1, Math.min(20, modelId));
  const models = BIOLOGY_3D_CATALOG[chapter] || [];
  const meta: Biology3DModelMeta = models[normId - 1] || models[0];

  // Materials
  const emeraldMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.35 });
  const deepGreenMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.4 });
  const cyanMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.3, metalness: 0.2 });
  const skyMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.25 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 });
  const crimsonMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.3 });
  const amberMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.35 });
  const purpleMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.3, roughness: 0.2 });
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.5, roughness: 0.1 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });
  const boneMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });

  // ========================================================
  // CHAPTER 1
  // ========================================================
  if (chapter === 1) {
    // Model 1: ১.১ জীববিজ্ঞানের ধারণা ও প্রোটোপ্লাজম
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 2), emeraldMat); mGroup.add(core);
      const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), purpleMat); core.add(nuc);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.08, 16, 48), skyMat); ring.rotation.x = 1.2; mGroup.add(ring);
      for (let i = 0; i < 8; i++) { const orb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), goldMat); const ang = i * Math.PI / 4; orb.position.set(Math.cos(ang)*1.8, Math.sin(ang)*0.4, Math.sin(ang)*1.8); mGroup.add(orb); }

      // Anchors for Model 1
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 2: ১.১ ডিএনএ ডাবল হেলিক্স ও ক্ষারক বন্ধন
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 2.5, 16), amberMat); trunk.position.y = -0.5; mGroup.add(trunk);
      for (let i = 0; i < 5; i++) { const ang = i * Math.PI * 2 / 5; const b = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 1.6, 12), deepGreenMat); b.position.set(Math.cos(ang)*0.9, 0.6, Math.sin(ang)*0.9); b.rotation.z = Math.sin(ang)*0.6; b.rotation.x = Math.cos(ang)*0.6; mGroup.add(b); const tip = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), [emeraldMat, skyMat, purpleMat, goldMat, redMat][i]); tip.position.set(Math.cos(ang)*1.7, 1.4, Math.sin(ang)*1.7); mGroup.add(tip); }

      // Anchors for Model 2
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 3: ১.২ জীববিজ্ঞানের শাখা — ভৌত ও ফলিত
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const centralC = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), darkMat); mGroup.add(centralC);
      const bonds: [number, number, number, THREE.Material][] = [[1.2, 1.2, 1.2, whiteMat], [-1.2, -1.2, 1.2, redMat], [-1.2, 1.2, -1.2, skyMat], [1.2, -1.2, -1.2, purpleMat]];
      bonds.forEach(([x, y, z, mat]) => { const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.5, 12), cyanMat); arm.position.set(x*0.5, y*0.5, z*0.5); arm.lookAt(x, y, z); arm.rotateX(Math.PI/2); mGroup.add(arm); const atom = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), mat); atom.position.set(x, y, z); mGroup.add(atom); });

      // Anchors for Model 3
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 4: ১.৫ মনেরা রাজ্য — ব্যাকটেরিয়ার নিউক্লিয়য়েড
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 5; i++) { const plat = new THREE.Mesh(new THREE.CylinderGeometry(2.2 - i*0.35, 2.4 - i*0.35, 0.35, 6), [darkMat, cyanMat, amberMat, emeraldMat, redMat][i]); plat.position.y = -1.2 + i * 0.6; mGroup.add(plat); const orb = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), goldMat); orb.position.set(1.4 - i*0.2, -1.0 + i*0.6, 0); mGroup.add(orb); }

      // Anchors for Model 4
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 5: ১.৫ প্রোটিস্টা রাজ্য — অ্যামিবা ও ক্ষণপদ চলন
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bac = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.75, 2.0, 16, 16) : new THREE.CylinderGeometry(0.75, 0.75, 2.0, 16), cyanMat); bac.rotation.z = Math.PI/2.5; mGroup.add(bac);
      const flag = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.08, 12, 32, Math.PI*1.5), goldMat); flag.position.set(-1.8, 0, 0); flag.rotation.y = 0.5; mGroup.add(flag);
      for (let i = 0; i < 12; i++) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 8), whiteMat); const th = i * Math.PI / 6; p.position.set(Math.cos(th)*0.85, (i%3)*0.5 - 0.5, Math.sin(th)*0.85); p.rotation.z = Math.PI/2; mGroup.add(p); }

      // Anchors for Model 5
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 6: ১.৫ ফানজাই রাজ্য — মাশরুম ও মাইসেলিয়াম
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const amoeba = new THREE.Mesh(new THREE.DodecahedronGeometry(1.4, 1), skyMat); mGroup.add(amoeba);
      const vac = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), glassMat); vac.position.set(0.6, 0.5, 0.4); mGroup.add(vac);
      for (let i = 0; i < 4; i++) { const pseudo = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 12), cyanMat); const a = i * Math.PI / 2; pseudo.position.set(Math.cos(a)*1.4, Math.sin(a)*1.1, 0); pseudo.rotation.z = a - Math.PI/2; mGroup.add(pseudo); }

      // Anchors for Model 6
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 7: ১.৫ প্লান্টি রাজ্য — সপুষ্পক উদ্ভিদের কাঠামো
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cap = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 16, 0, Math.PI*2, 0, Math.PI*0.48), amberMat); cap.position.y = 0.6; mGroup.add(cap);
      const stipe = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.55, 2.2, 16), whiteMat); stipe.position.y = -0.5; mGroup.add(stipe);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.12, 12, 24), goldMat); ring.position.y = 0.2; ring.rotation.x = Math.PI/2; mGroup.add(ring);
      const mycelium = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.06, 8, 32), whiteMat); mycelium.position.y = -1.6; mycelium.rotation.x = Math.PI/2; mGroup.add(mycelium);

      // Anchors for Model 7
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 8: ১.৫ অ্যানিম্যালিয়া রাজ্য — বহুকোষী প্রাণী দেহ
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let x = -1; x <= 1; x++) { for (let y = -1; y <= 1; y++) { const cell = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.5), emeraldMat); cell.position.set(x*1.05, y*0.85, 0); mGroup.add(cell); const chp = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), deepGreenMat); chp.position.set(x*1.05 + 0.15, y*0.85 + 0.1, 0.2); mGroup.add(chp); } }

      // Anchors for Model 8
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 9: ১.৩ টি২ ব্যাকটেরিওফাজ ভাইরাস — প্রোটিন ক্যাপসিড
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const torso = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.7, 1.6, 16, 16) : new THREE.CylinderGeometry(0.7, 0.7, 1.6, 16), crimsonMat); torso.position.y = -0.2; mGroup.add(torso);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.65, 20, 20), amberMat); head.position.y = 1.2; mGroup.add(head);
      for (let i = -1; i <= 1; i += 2) { const limb = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 1.6, 12), whiteMat); limb.position.set(i*1.1, -0.4, 0); limb.rotation.z = i*0.4; mGroup.add(limb); }

      // Anchors for Model 9
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 10: ১.৫ নস্টক ফিলামেন্ট ও হেটারোসিস্ট
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 7; i++) { const rank = new THREE.Mesh(new THREE.CylinderGeometry(0.5 + i*0.28, 0.5 + (i+1)*0.28, 0.35, 7), [purpleMat, skyMat, cyanMat, emeraldMat, amberMat, redMat, goldMat][i]); rank.position.y = 1.2 - i*0.42; mGroup.add(rank); }

      // Anchors for Model 10
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 11: ১.৪ ট্যাক্সনমিক হায়ারার্কি — ৭টি ধাপের পিরামিড
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const scroll = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.2, 32), goldMat); scroll.rotation.x = 1.1; mGroup.add(scroll);
      const tag1 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 0.1), skyMat); tag1.position.set(0, 0.4, 0.3); mGroup.add(tag1);
      const tag2 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 0.1), emeraldMat); tag2.position.set(0, -0.4, 0.3); mGroup.add(tag2);

      // Anchors for Model 11
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 12: ১.৬ দ্বিপদ নামকরণের নিয়মাবলী ও লিনিয়ান মডেল
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 24, 24), glassMat); mGroup.add(sphere);
      const aqua = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.18, 12, 32), skyMat); aqua.rotation.x = Math.PI/2; mGroup.add(aqua);
      const terra = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.18, 12, 32), emeraldMat); terra.rotation.y = Math.PI/2; mGroup.add(terra);
      const aero = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.18, 12, 32), whiteMat); mGroup.add(aero);

      // Anchors for Model 12
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 13: ১.৫ মারগুলিসের ২ সুপারকিংডম ও ৫ রাজ্য
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ped = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.5, 1.6), darkMat); ped.position.y = -1.2; mGroup.add(ped);
      const book = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.6, 1.2), amberMat); book.position.y = -0.7; mGroup.add(book);
      const fl = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.5, 8), redMat); fl.position.y = 0.5; fl.rotation.x = Math.PI; mGroup.add(fl);
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.2, 12), emeraldMat); st.position.y = -0.1; mGroup.add(st);

      // Anchors for Model 13
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 14: ১.৩ ড্রসোফিলা ফলমাছি — জেনেটিক্সের মডেল জীব
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cross1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 2.2, 0.4), redMat); mGroup.add(cross1);
      const cross2 = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.6, 0.4), redMat); mGroup.add(cross2);
      const outerRing = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.12, 16, 48), cyanMat); mGroup.add(outerRing);

      // Anchors for Model 14
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 15: ১.৫ ইউগ্লেনা — প্রাণী ও উদ্ভিদের সংযোগকারী
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const land = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.0, 0.4, 32), deepGreenMat); land.position.y = -1.0; mGroup.add(land);
      for (let i = 0; i < 4; i++) { const ang = i * Math.PI / 2; const tree = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.4, 8), emeraldMat); tree.position.set(Math.cos(ang)*1.1, 0.1, Math.sin(ang)*1.1); mGroup.add(tree); }
      const water = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.1, 24), skyMat); water.position.set(0, -0.75, 0); mGroup.add(water);

      // Anchors for Model 15
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 16: ১.৫ লাইকেন — শৈবাল ও ছত্রাকের মিথোজীবিতা
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pro = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), cyanMat); pro.position.x = -1.2; mGroup.add(pro);
      const euk = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), purpleMat); euk.position.x = 1.2; mGroup.add(euk);
      const eukNuc = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), amberMat); eukNuc.position.x = 1.2; mGroup.add(eukNuc);

      // Anchors for Model 16
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 17: ১.৪ ব্যাকটেরিয়াল বৃত্তাকার প্লাজমিড ডিএনএ
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sun = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), goldMat); sun.position.set(-1.4, 1.2, 0); mGroup.add(sun);
      const leaf = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.2, 1.6), emeraldMat); leaf.position.set(-1.0, -0.4, 0); leaf.rotation.z = 0.3; mGroup.add(leaf);
      const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.25, 12, 24, Math.PI), crimsonMat); mouth.position.set(1.4, 0, 0); mouth.rotation.z = -Math.PI/2; mGroup.add(mouth);

      // Anchors for Model 17
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 18: ১.৫ স্পাইরোগাইরা শৈবাল ও সর্পিলাকার প্লাস্টিড
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pool = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.22, 16, 36), skyMat); pool.rotation.x = Math.PI/2.5; mGroup.add(pool);
      for (let i = 0; i < 6; i++) { const sp = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), [redMat, emeraldMat, goldMat, purpleMat, cyanMat, whiteMat][i]); const th = i * Math.PI / 3; sp.position.set(Math.cos(th)*1.4, Math.sin(th)*0.4, Math.sin(th)*1.2); mGroup.add(sp); }

      // Anchors for Model 18
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 19: ১.৬ মানুষ ও ধান — লিনিয়ান দ্বিপদ নমুনা
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const spiral = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 16, 64, Math.PI*3), amberMat); mGroup.add(spiral);
      for (let i = 0; i < 5; i++) { const node = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), [cyanMat, emeraldMat, goldMat, redMat, purpleMat][i]); const t = i * 0.8; node.position.set(Math.cos(t)*1.5, (i-2)*0.6, Math.sin(t)*1.5); mGroup.add(node); }

      // Anchors for Model 19
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 20: ১.১ আধুনিক জীববৈচিত্র্য সংরক্ষণ নেটওয়ার্ক
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const board = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.0, 0.15), darkMat); mGroup.add(board);
      const border = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.2, 0.1), goldMat); border.position.z = -0.05; mGroup.add(border);
      const medal = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 24), emeraldMat); medal.position.set(0, 0, 0.15); medal.rotation.x = Math.PI/2; mGroup.add(medal);

      // Anchors for Model 20
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
  }
  // ========================================================
  // CHAPTER 2
  // ========================================================
  if (chapter === 2) {
    // Model 1: ২.২ উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 3; i++) { const wall = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.2, 0.25), [deepGreenMat, emeraldMat, amberMat][i]); wall.position.z = (i - 1) * 0.45; mGroup.add(wall); }
      const pore = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.6, 16), skyMat); pore.rotation.x = Math.PI/2; mGroup.add(pore);

      // Anchors for Model 1
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 2: ২.২ প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let x = -3; x <= 3; x++) { for (let z = -2; z <= 2; z++) { const h1 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), skyMat); h1.position.set(x*0.45, 0.65, z*0.45); mGroup.add(h1); const h2 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), skyMat); h2.position.set(x*0.45, -0.65, z*0.45); mGroup.add(h2); } }
      const channel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.6, 16), purpleMat); channel.position.set(0, 0, 0); mGroup.add(channel);

      // Anchors for Model 2
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 3: ২.২ প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cyto = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 24), glassMat); mGroup.add(cyto);
      const core = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), purpleMat); mGroup.add(core);
      for (let i = 0; i < 8; i++) { const g1 = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), goldMat); const th = i * Math.PI / 4; g1.position.set(Math.cos(th)*1.1, Math.sin(th)*0.9, (i%3)*0.4 - 0.4); mGroup.add(g1); }

      // Anchors for Model 3
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 4: ২.৩ মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const nucEnv = new THREE.Mesh(new THREE.SphereGeometry(1.5, 24, 24), purpleMat); mGroup.add(nucEnv);
      const nucleolus = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); nucleolus.position.set(0.3, 0.2, 0.2); mGroup.add(nucleolus);
      const chrom = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.08, 12, 32), skyMat); mGroup.add(chrom);

      // Anchors for Model 4
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 5: ২.৩ ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const mito = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.8, 1.8, 16, 16) : new THREE.CylinderGeometry(0.8, 0.8, 1.8, 16), crimsonMat); mito.rotation.z = 1.1; mGroup.add(mito);
      for (let i = -2; i <= 2; i++) { const crista = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.9, 0.7), amberMat); crista.position.set(i*0.4, 0, 0); crista.rotation.z = 0.3; mGroup.add(crista); }

      // Anchors for Model 5
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 6: ২.৩ এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const chlo = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 16), deepGreenMat); chlo.scale.set(1.2, 0.7, 1.0); mGroup.add(chlo);
      for (let col = -1; col <= 1; col++) { for (let d = -1; d <= 1; d++) { const granum = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.1, 16), emeraldMat); granum.position.set(col*0.8, d*0.25, 0); mGroup.add(granum); } }

      // Anchors for Model 6
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 7: ২.৩ গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const plastid = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 20), goldMat); mGroup.add(plastid);
      for (let i = 0; i < 6; i++) { const crys = new THREE.Mesh(new THREE.OctahedronGeometry(0.35), redMat); const th = i * Math.PI / 3; crys.position.set(Math.cos(th)*0.8, Math.sin(th)*0.8, 0.2); mGroup.add(crys); }

      // Anchors for Model 7
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 8: ২.৩ লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = -2; i <= 2; i++) { const sheet = new THREE.Mesh(new THREE.TorusGeometry(1.2 + i*0.25, 0.12, 8, 24, Math.PI*1.4), skyMat); sheet.position.y = i*0.25; sheet.rotation.x = 1.2; mGroup.add(sheet); }
      for (let j = 0; j < 12; j++) { const ribo = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), amberMat); const a = j * Math.PI / 6; ribo.position.set(Math.cos(a)*1.3, 0.2, Math.sin(a)*1.3); mGroup.add(ribo); }

      // Anchors for Model 8
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 9: ২.৩ সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const largeSub = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), purpleMat); largeSub.position.y = 0.5; mGroup.add(largeSub);
      const smallSub = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), cyanMat); smallSub.position.y = -0.5; mGroup.add(smallSub);
      const mrna = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.6, 12), goldMat); mrna.rotation.z = Math.PI/2; mGroup.add(mrna);

      // Anchors for Model 9
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 10: ২.৪ কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = -2; i <= 2; i++) { const cis = new THREE.Mesh(new THREE.CylinderGeometry(1.6 - Math.abs(i)*0.25, 1.6 - Math.abs(i)*0.25, 0.18, 16, 1, false, 0, Math.PI*1.1), amberMat); cis.position.set(0, i*0.4, 0); cis.rotation.x = 0.6; mGroup.add(cis); }
      for (let k = 0; k < 5; k++) { const ves = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), goldMat); ves.position.set(1.4 + (k%2)*0.3, k*0.35 - 0.7, 0.3); mGroup.add(ves); }

      // Anchors for Model 10
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 11: ২.৩ রাইবোসোম — ৬০S ও ৪০S সাবইউনিট
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sac = new THREE.Mesh(new THREE.SphereGeometry(1.4, 24, 24), crimsonMat); mGroup.add(sac);
      for (let i = 0; i < 10; i++) { const enz = new THREE.Mesh(new THREE.DodecahedronGeometry(0.2), goldMat); const th = i * 0.7; enz.position.set(Math.cos(th)*0.8, Math.sin(th)*0.8, (i%3)*0.4 - 0.4); mGroup.add(enz); }

      // Anchors for Model 11
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 12: ২.৫ প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.4, 9), cyanMat); c1.position.set(-0.4, 0, 0); mGroup.add(c1);
      const c2 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.4, 9), cyanMat); c2.position.set(0.4, 0, 0); c2.rotation.z = Math.PI/2; mGroup.add(c2);
      const halo = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), glassMat); mGroup.add(halo);

      // Anchors for Model 12
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 13: ২.৫ কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 9; i++) { const ang = i * Math.PI * 2 / 9; const tub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.8, 12), skyMat); tub.position.set(Math.cos(ang)*0.75, 0, Math.sin(ang)*0.75); mGroup.add(tub); }

      // Anchors for Model 13
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 14: ২.৫ স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const vac = new THREE.Mesh(new THREE.SphereGeometry(1.5, 24, 24), glassMat); mGroup.add(vac);
      const sap = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), skyMat); mGroup.add(sap);

      // Anchors for Model 14
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 15: ২.৫ জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 6; i++) { const th = i * Math.PI / 3; const par = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.2, 6), emeraldMat); par.position.set(Math.cos(th)*1.0, 0, Math.sin(th)*1.0); mGroup.add(par); }
      const cen = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.2, 6), emeraldMat); mGroup.add(cen);

      // Anchors for Model 15
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 16: ২.৫ ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 1.6, 6), deepGreenMat); mGroup.add(col);
      for (let i = 0; i < 6; i++) { const ang = i * Math.PI / 3; const bead = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.7, 8), amberMat); bead.position.set(Math.cos(ang)*0.95, 0, Math.sin(ang)*0.95); mGroup.add(bead); }

      // Anchors for Model 16
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 17: ২.৬ আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const scl = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.4, 6), darkMat); mGroup.add(scl);
      const lumen = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.5, 6), amberMat); mGroup.add(lumen);

      // Anchors for Model 17
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 18: ২.৬ ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const vessel = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.6, 16, 1, true), amberMat); mGroup.add(vessel);
      for (let i = -3; i <= 3; i++) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.08, 12, 24), redMat); ring.position.y = i*0.38; ring.rotation.x = Math.PI/2; mGroup.add(ring); }

      // Anchors for Model 18
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 19: ২.৬ কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sieve = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.6, 16), skyMat); mGroup.add(sieve);
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.1, 16), darkMat); plate.position.y = 0; mGroup.add(plate);
      const comp = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.6, 12), emeraldMat); comp.position.set(0.95, 0, 0); mGroup.add(comp);

      // Anchors for Model 19
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 20: ২.৬ বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let r = 0; r < 3; r++) { for (let c = -1; c <= 1; c++) { const epi = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), crimsonMat); epi.position.set(c*0.9, 0.4 + r*0.4, 0); mGroup.add(epi); } }
      const baseMem = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.2, 1.4), skyMat); baseMem.position.y = 0.1; mGroup.add(baseMem);
      const conn = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.8, 1.4), amberMat); conn.position.y = -0.45; mGroup.add(conn);

      // Anchors for Model 20
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
  }
  // ========================================================
  // CHAPTER 3
  // ========================================================
  if (chapter === 3) {
    // Model 1: ৩.১ কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায়
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const dial = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.3, 16, 32), skyMat); mGroup.add(dial);
      const g1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.4, 12), emeraldMat); g1.position.set(1.4, 0, 0); mGroup.add(g1);
      const sPhase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.4, 12), redMat); sPhase.position.set(0, 1.4, 0); mGroup.add(sPhase);
      const mPhase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.4, 12), goldMat); mPhase.position.set(-1.4, 0, 0); mGroup.add(mPhase);

      // Anchors for Model 1
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 2: ৩.১ ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cell1 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), skyMat); cell1.position.x = -0.7; mGroup.add(cell1);
      const cell2 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), skyMat); cell2.position.x = 0.7; mGroup.add(cell2);
      const pinch = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.15, 12, 24), crimsonMat); pinch.rotation.y = Math.PI/2; mGroup.add(pinch);

      // Anchors for Model 2
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 3: ৩.২ মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cell = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 24), glassMat); mGroup.add(cell);
      const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), purpleMat); mGroup.add(nuc);
      const centrosome = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); centrosome.position.set(1.1, 0.8, 0); mGroup.add(centrosome);

      // Anchors for Model 3
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 4: ৩.২ মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cell = new THREE.Mesh(new THREE.SphereGeometry(1.6, 20, 20), glassMat); mGroup.add(cell);
      for (let i = 0; i < 4; i++) { const chr = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.09, 8, 20), purpleMat); chr.position.set((i%2)*0.8 - 0.4, (i>1?0.4:-0.4), 0); chr.rotation.z = i*0.8; mGroup.add(chr); }

      // Anchors for Model 4
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 5: ৩.২ প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cell = new THREE.Mesh(new THREE.SphereGeometry(1.6, 20, 20), glassMat); mGroup.add(cell);
      for (let i = 0; i < 4; i++) { const chrX = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.8, 0.15), redMat); chrX.position.set((i%2)*0.9 - 0.45, (i>1?0.5:-0.5), 0); chrX.rotation.z = 0.5; mGroup.add(chrX); const chrY = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.8, 0.15), skyMat); chrY.position.set((i%2)*0.9 - 0.45, (i>1?0.5:-0.5), 0); chrY.rotation.z = -0.5; mGroup.add(chrY); }

      // Anchors for Model 5
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 6: ৩.২ মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const p1 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); p1.position.y = 1.6; mGroup.add(p1);
      const p2 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); p2.position.y = -1.6; mGroup.add(p2);
      for (let i = -2; i <= 2; i++) { const fiber = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.2, 8), cyanMat); fiber.position.x = i*0.45; fiber.rotation.z = i*0.1; mGroup.add(fiber); }

      // Anchors for Model 6
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 7: ৩.২ মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const spindle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.4, 8), cyanMat); mGroup.add(spindle);
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.08, 24), glassMat); mGroup.add(plate);
      for (let i = -2; i <= 2; i++) { const chr = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.7, 0.25), purpleMat); chr.position.set(i*0.6, 0, 0); mGroup.add(chr); const cent = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), redMat); cent.position.set(i*0.6, 0, 0); mGroup.add(cent); }

      // Anchors for Model 7
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 8: ৩.২ মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = -1; i <= 1; i++) { const chTop = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), redMat); chTop.position.set(i*0.8, 0.8, 0); chTop.rotation.z = Math.PI; mGroup.add(chTop); const chBot = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), skyMat); chBot.position.set(i*0.8, -0.8, 0); mGroup.add(chBot); }

      // Anchors for Model 8
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 9: ৩.৩ উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = -1; i <= 1; i++) { const chTop = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), redMat); chTop.position.set(i*0.8, 1.4, 0); chTop.rotation.z = Math.PI; mGroup.add(chTop); const chBot = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), skyMat); chBot.position.set(i*0.8, -1.4, 0); mGroup.add(chBot); }

      // Anchors for Model 9
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 10: ৩.৩ প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const nuc1 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), glassMat); nuc1.position.y = 1.0; mGroup.add(nuc1);
      const nuc2 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), glassMat); nuc2.position.y = -1.0; mGroup.add(nuc2);
      const chr1 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), purpleMat); chr1.position.y = 1.0; mGroup.add(chr1);
      const chr2 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), purpleMat); chr2.position.y = -1.0; mGroup.add(chr2);

      // Anchors for Model 10
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 11: ৩.৪ অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pCell = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.0, 1.2), deepGreenMat); mGroup.add(pCell);
      const cPlate = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.05, 1.25), goldMat); mGroup.add(cPlate);

      // Anchors for Model 11
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 12: ৩.৫ মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const aCell1 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), crimsonMat); aCell1.position.x = -0.65; mGroup.add(aCell1);
      const aCell2 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), crimsonMat); aCell2.position.x = 0.65; mGroup.add(aCell2);
      const furrow = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.14, 12, 24), darkMat); furrow.rotation.y = Math.PI/2; mGroup.add(furrow);

      // Anchors for Model 12
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 13: ৩.৫ জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড়
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), emeraldMat); c.position.set((i%2)*0.8 - 0.4, (i>1?0.4:-0.4), 0); mGroup.add(c); }
      const ladder = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.4, 8), goldMat); ladder.position.set(-1.2, 0, 0); mGroup.add(ladder);

      // Anchors for Model 13
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 14: ৩.৫ প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const host = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.2, 1.2), skyMat); host.position.y = -0.6; mGroup.add(host);
      for (let i = 0; i < 7; i++) { const tum = new THREE.Mesh(new THREE.SphereGeometry(0.35 + (i%3)*0.1, 10, 10), redMat); const th = i * Math.PI / 3.5; tum.position.set(Math.cos(th)*0.7, 0.5 + Math.sin(th)*0.4, 0); mGroup.add(tum); }

      // Anchors for Model 14
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 15: ৩.৫ ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bouq = new THREE.Mesh(new THREE.SphereGeometry(1.4, 16, 16), glassMat); mGroup.add(bouq);
      for (let i = 0; i < 4; i++) { const thread = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.06, 8, 24, Math.PI), i%2===0?redMat:skyMat); thread.rotation.z = i*0.8; mGroup.add(thread); }

      // Anchors for Model 15
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 16: ৩.৫ ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ch1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12), redMat); ch1.position.x = -0.3; mGroup.add(ch1);
      const ch2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12), skyMat); ch2.position.x = 0.3; mGroup.add(ch2);
      const chiasma = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.2), goldMat); chiasma.rotation.z = 0.7; mGroup.add(chiasma);

      // Anchors for Model 16
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 17: ৩.৫ মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n)
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ch1 = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.0, 12), redMat); ch1.position.x = -0.6; ch1.rotation.z = -0.2; mGroup.add(ch1);
      const ch2 = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.0, 12), skyMat); ch2.position.x = 0.6; ch2.rotation.z = 0.2; mGroup.add(ch2);
      const tipCross = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), goldMat); tipCross.position.set(0, 0.8, 0); mGroup.add(tipCross);

      // Anchors for Model 17
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 18: ৩.৫ মায়োসিস ২ — সমীকরণিক কোষ বিভাজন
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pCell1 = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), redMat); pCell1.position.x = -1.0; mGroup.add(pCell1);
      const pCell2 = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), skyMat); pCell2.position.x = 1.0; mGroup.add(pCell2);

      // Anchors for Model 18
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 19: ৩.৭ স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 4; i++) { const gamete = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 12), [redMat, skyMat, purpleMat, goldMat][i]); gamete.position.set((i%2)*1.2 - 0.6, (i>1?0.6:-0.6), 0); mGroup.add(gamete); }

      // Anchors for Model 19
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 20: ৩.৭ ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const stand1 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 1.4, 16), cyanMat); stand1.position.x = -1.0; mGroup.add(stand1);
      const stand2 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 1.4, 16), purpleMat); stand2.position.x = 1.0; mGroup.add(stand2);
      const balanceBar = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.15, 0.3), goldMat); balanceBar.position.y = 1.0; mGroup.add(balanceBar);

      // Anchors for Model 20
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
  }
  // ========================================================
  // CHAPTER 4
  // ========================================================
  if (chapter === 4) {
    // Model 1: ৪.১ ATP অণুর ৩ডি রাসায়নিক রূপ — জৈব মুদ্রা
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.3), purpleMat); base.position.x = -1.3; mGroup.add(base);
      const ribose = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.25, 5), skyMat); ribose.position.x = -0.5; mGroup.add(ribose);
      for (let i = 0; i < 3; i++) { const phos = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), goldMat); phos.position.set(0.3 + i*0.65, 0, 0); mGroup.add(phos); const spark = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 6), redMat); spark.position.set(0.3 + i*0.65, 0.45, 0); mGroup.add(spark); }

      // Anchors for Model 1
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 2: ৪.১ ATP-ADP ব্যাটারি রিচার্জ রূপান্তর চক্র
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cycle = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.18, 16, 32), emeraldMat); mGroup.add(cycle);
      const atp = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), goldMat); atp.position.set(0, 1.4, 0); mGroup.add(atp);
      const adp = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), skyMat); adp.position.set(0, -1.4, 0); mGroup.add(adp);

      // Anchors for Model 2
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 3: ৪.২ পাতার মেসোফিল টিস্যু ও সালোকসংশ্লেষণ
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const env = new THREE.Mesh(new THREE.SphereGeometry(1.6, 20, 16), deepGreenMat); env.scale.set(1.2, 0.7, 1.0); mGroup.add(env);
      for (let i = -1; i <= 1; i++) { for (let j = -2; j <= 2; j++) { const thy = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.08, 12), emeraldMat); thy.position.set(i*0.8, j*0.14, 0); mGroup.add(thy); } }

      // Anchors for Model 3
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 4: ৪.৩ ফটোসিস্টেম ২ (PS II) ও আলোক অ্যান্টেনা
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ps2 = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.9, 16), deepGreenMat); ps2.position.x = -1.0; mGroup.add(ps2);
      const ps1 = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.9, 16), emeraldMat); ps1.position.x = 1.0; mGroup.add(ps1);
      const etc = new THREE.Mesh(new THREE.TubeGeometry ? new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8) : new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8), goldMat); etc.rotation.z = Math.PI/2; mGroup.add(etc);

      // Anchors for Model 4
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 5: ৪.৩ পানির ফটোলাইসিস বা আলোক বিভাজন
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const oxy = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), redMat); mGroup.add(oxy);
      const h1 = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), whiteMat); h1.position.set(-0.7, 0.5, 0); mGroup.add(h1);
      const h2 = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), whiteMat); h2.position.set(0.7, 0.5, 0); mGroup.add(h2);
      const photon = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.8, 8), goldMat); photon.position.set(0, 1.4, 0); photon.rotation.z = Math.PI; mGroup.add(photon);

      // Anchors for Model 5
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 6: ৪.৩ অচক্রীয় ইলেকট্রন প্রবাহ বা Z-স্কিম
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 12), cyanMat); mGroup.add(rotor);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), goldMat); head.position.y = 0.9; mGroup.add(head);
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.4, 8), whiteMat); stalk.position.set(-0.6, 0.2, 0); mGroup.add(stalk);

      // Anchors for Model 6
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 7: ৪.৩ ফটোসিস্টেম ১ (PS I) ও NADPH বিজারক
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.16, 16, 32), deepGreenMat); mGroup.add(ring);
      const rubisco = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), goldMat); rubisco.position.set(0, 1.4, 0); mGroup.add(rubisco);
      const pga = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), emeraldMat); pga.position.set(1.2, -0.6, 0); mGroup.add(pga);

      // Anchors for Model 7
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 8: ৪.৩ থাইলাকয়েড ঝিল্লিতে ATP সিন্থেজ মোটর
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const meso = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.0, 0.8), emeraldMat); meso.position.x = -0.9; mGroup.add(meso);
      const sheath = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.0, 0.8), deepGreenMat); sheath.position.x = 0.9; mGroup.add(sheath);
      const plasmo = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.0, 8), goldMat); plasmo.rotation.z = Math.PI/2; mGroup.add(plasmo);

      // Anchors for Model 8
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 9: ৪.৪ ক্যালভিন চক্র (C3) — RuBP কার্বক্সিলেশন
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const glucose = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.3, 6), skyMat); glucose.position.y = 1.0; mGroup.add(glucose);
      const pyr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.25, 3), redMat); pyr1.position.set(-0.8, -0.8, 0); mGroup.add(pyr1);
      const pyr2 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.25, 3), redMat); pyr2.position.set(0.8, -0.8, 0); mGroup.add(pyr2);

      // Anchors for Model 9
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 10: ৪.৪ রুবিসকো এনজাইম — কার্বক্সিলেশন অনুঘটক
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const coa = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.7, 0.5), amberMat); mGroup.add(coa);
      const acetyl = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), redMat); acetyl.position.x = 0.9; mGroup.add(acetyl);

      // Anchors for Model 10
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 11: ৪.৪ হ্যাচ ও স্ল্যাক চক্র (C4) ও ক্রাঞ্জ অ্যানাটমি
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const krebs = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.18, 16, 36), redMat); mGroup.add(krebs);
      for (let i = 0; i < 4; i++) { const knot = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), [goldMat, skyMat, amberMat, emeraldMat][i]); const th = i * Math.PI / 2; knot.position.set(Math.cos(th)*1.4, Math.sin(th)*1.4, 0); mGroup.add(knot); }

      // Anchors for Model 11
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 12: ৪.৫ সালোকসংশ্লেষণের আলোক বর্ণালী প্রভাবক
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = -1; i <= 1; i++) { const cplx = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.1, 12), [purpleMat, cyanMat, redMat][i+1]); cplx.position.set(i*0.9, 0, 0); mGroup.add(cplx); }
      const atpS = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), goldMat); atpS.position.set(1.5, 0.5, 0); mGroup.add(atpS);

      // Anchors for Model 12
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 13: ৪.৬ সবাত শ্বসন — মাইটোকন্ড্রিয়াল পাওয়ার স্টেশন
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const scale = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.2, 12), whiteMat); mGroup.add(scale);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.2), goldMat); bar.position.y = 0.9; mGroup.add(bar);
      for (let i = 0; i < 6; i++) { const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 12), goldMat); coin.position.set(-0.8, i*0.12 - 0.2, 0); mGroup.add(coin); }

      // Anchors for Model 13
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 14: ৪.৭ গ্লাইকোলাইসিস — পাইরুভিক এসিড সৃষ্টি
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const muscle = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.65, 1.8, 16, 16) : new THREE.CylinderGeometry(0.65, 0.65, 1.8, 16), crimsonMat); mGroup.add(muscle);
      const lac = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4), amberMat); lac.position.set(0.9, 0, 0); mGroup.add(lac);

      // Anchors for Model 14
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 15: ৪.৭ এসিটাইল কো-এ সৃষ্টি ও লিংক রিঅ্যাকশন
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const flask = new THREE.Mesh(new THREE.ConeGeometry(1.2, 1.8, 16), glassMat); flask.position.y = -0.2; mGroup.add(flask);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.8, 16), glassMat); neck.position.y = 0.9; mGroup.add(neck);
      const ethanol = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.1, 0.7, 16), amberMat); ethanol.position.y = -0.6; mGroup.add(ethanol);

      // Anchors for Model 15
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 16: ৪.৭ ক্রেবস চক্র (TCA চক্র) — সাইট্রিক এসিড লুপ
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const grid = new THREE.Mesh(new THREE.PlaneGeometry ? new THREE.PlaneGeometry(2.4, 2.0) : new THREE.BoxGeometry(2.4, 2.0, 0.05), darkMat); mGroup.add(grid);
      for (let i = 0; i < 8; i++) { const pt = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), emeraldMat); pt.position.set((i/7)*2.0 - 1.0, Math.sin(i*0.4)*0.8 - 0.4, 0.1); mGroup.add(pt); }

      // Anchors for Model 16
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 17: ৪.৭ ইলেকট্রন ট্রান্সপোর্ট সিস্টেম (ETS) ক্রিস্টি
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const tube1 = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 2.0, 16), glassMat); tube1.position.x = -0.6; mGroup.add(tube1);
      const tube2 = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 2.0, 16), glassMat); tube2.position.x = 0.6; mGroup.add(tube2);
      const manom = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.1, 8, 16, Math.PI), redMat); manom.position.y = -1.0; manom.rotation.z = Math.PI; mGroup.add(manom);

      // Anchors for Model 17
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 18: ৪.৬ অবাত শ্বসন — ইস্টের অ্যালকোহলিক গাঁজন
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const vessel = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 2.2, 24), cyanMat); mGroup.add(vessel);
      const pipe = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.08, 12, 24), goldMat); pipe.position.set(0.9, 0, 0); mGroup.add(pipe);
      const gauge = new THREE.Mesh(new THREE.CircleGeometry ? new THREE.CircleGeometry(0.25, 16) : new THREE.CylinderGeometry(0.25, 0.25, 0.05, 16), whiteMat); gauge.position.set(0, 0.8, 0.92); mGroup.add(gauge);

      // Anchors for Model 18
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 19: ৪.৬ ল্যাকটিক এসিড সন্ধান — পেশি ক্লান্তি
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 4; i++) { const pyr = new THREE.Mesh(new THREE.CylinderGeometry(1.6 - i*0.4, 1.8 - i*0.4, 0.35, 4), [emeraldMat, amberMat, redMat, goldMat][i]); pyr.position.y = -0.8 + i*0.5; mGroup.add(pyr); }

      // Anchors for Model 19
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 20: ৪.৭ গ্লুকোজ প্রতি নিট ৩৮ ATP ব্যালেন্স শিট
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const trophy = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.3, 1.4, 16), goldMat); trophy.position.y = 0.3; mGroup.add(trophy);
      const baseT = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.4, 16), darkMat); baseT.position.y = -0.7; mGroup.add(baseT);

      // Anchors for Model 20
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
  }
  // ========================================================
  // CHAPTER 5
  // ========================================================
  if (chapter === 5) {
    // Model 1: ৫.১ উদ্ভিদের ১০টি ম্যাক্রো উপাদান ও আয়ন শোষণ
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 4; i++) { const tier = new THREE.Mesh(new THREE.CylinderGeometry(2.0 - i*0.5, 2.3 - i*0.5, 0.4, 4), [amberMat, emeraldMat, crimsonMat, goldMat][i]); tier.position.y = -1.0 + i*0.6; mGroup.add(tier); }

      // Anchors for Model 1
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 2: ৫.২ পুষ্টি উপাদানের অভাবে ক্লোরোসিস ও ডাইব্যাক
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 5; i++) { const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.15, 6), skyMat); const th = i * 0.7; ring.position.set(Math.cos(th)*1.2, Math.sin(th)*0.8, 0); mGroup.add(ring); }

      // Anchors for Model 2
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 3: ৫.৩ মানব সুষম খাদ্য পিরামিড ও ক্যালোরি বণ্টন
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 8; i++) { const bead = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), [redMat, purpleMat, amberMat, cyanMat][i%4]); bead.position.set((i-3.5)*0.38, Math.sin(i*0.8)*0.5, 0); mGroup.add(bead); }

      // Anchors for Model 3
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 4: ৫.৩ শর্করা অণু — স্টার্চ ও গ্লুকোজ পলিমার
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const glyc = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.6, 12), goldMat); glyc.position.x = -0.8; mGroup.add(glyc);
      for (let i = -1; i <= 1; i++) { const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8), amberMat); tail.position.set(0.2, i*0.5, 0); tail.rotation.z = Math.PI/2; mGroup.add(tail); }

      // Anchors for Model 4
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 5: ৫.৩ আমিষ — পেপটাইড বন্ধন ও অ্যামাইনো এসিড
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 4; i++) { const pill = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.25, 0.6, 12, 12) : new THREE.CylinderGeometry(0.25, 0.25, 0.6, 12), [goldMat, emeraldMat, redMat, skyMat][i]); pill.position.set((i%2)*1.2 - 0.6, (i>1?0.6:-0.6), 0); pill.rotation.z = 0.5; mGroup.add(pill); }

      // Anchors for Model 5
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 6: ৫.৩ স্নেহ পদার্থ — গ্লিসারল ও ফ্যাটি এসিড এস্টার
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const lattice = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), glassMat); mGroup.add(lattice);
      for (let x = -1; x <= 1; x += 2) { for (let y = -1; y <= 1; y += 2) { const ion = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), goldMat); ion.position.set(x*0.6, y*0.6, 0); mGroup.add(ion); } }

      // Anchors for Model 6
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 7: ৫.৫ মানব পৌষ্টিকতন্ত্রের সামগ্রিক ৩ডি মডেল
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.8, 1.0, 16), whiteMat); crown.position.y = 0.5; mGroup.add(crown);
      const root1 = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.2, 12), boneMat); root1.position.set(-0.3, -0.6, 0); root1.rotation.z = Math.PI; mGroup.add(root1);
      const root2 = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.2, 12), boneMat); root2.position.set(0.3, -0.6, 0); root2.rotation.z = Math.PI; mGroup.add(root2);

      // Anchors for Model 7
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 8: ৫.৫ দাঁতের অভ্যন্তরীণ গঠন — এনামেল ও ডেন্টিন
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 3; i++) { const gland = new THREE.Mesh(new THREE.DodecahedronGeometry(0.45), amberMat); gland.position.set([-0.9, 0.9, 0][i], [0.6, 0.6, -0.6][i], 0); mGroup.add(gland); }
      const duct = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.08, 8, 24), skyMat); mGroup.add(duct);

      // Anchors for Model 8
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 9: ৫.৬ লালাগ্রন্থি — প্যারোটিড ও টায়ালিন এনজাইম
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.6, 16), crimsonMat); mGroup.add(tube);
      const bolus = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), amberMat); bolus.position.y = 0.3; mGroup.add(bolus);

      // Anchors for Model 9
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 10: ৫.৫ পাকস্থলী — কার্ডিয়া, ফান্ডাস ও গ্যাস্ট্রিক পিট
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const stom = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.5, 16, 24, Math.PI*1.2), crimsonMat); stom.rotation.z = 0.8; mGroup.add(stom);
      const rugae = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.1, 8, 16), amberMat); stom.add(rugae);

      // Anchors for Model 10
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 11: ৫.৭ গ্যাস্ট্রিক জুস — HCl ও পেপসিন দ্বারা পরিপাক
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const drop = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.4, 16), skyMat); drop.rotation.x = Math.PI; mGroup.add(drop);
      const halo = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), glassMat); halo.position.y = -0.7; mGroup.add(halo);

      // Anchors for Model 11
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 12: ৫.৬ যকৃৎ — মানবদেহের সবচেয়ে বড় গ্রন্থি ও পিত্তথলি
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const panc = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.45, 1.8, 16, 16) : new THREE.CylinderGeometry(0.45, 0.45, 1.8, 16), amberMat); panc.rotation.z = 1.3; mGroup.add(panc);
      const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 8), whiteMat); duct.rotation.z = 1.3; mGroup.add(duct);

      // Anchors for Model 12
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 13: ৫.৬ অগ্ন্যাশয় — মিশ্র গ্রন্থি ও আইলেটস দ্বীপপুঞ্জ
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const rLobe = new THREE.Mesh(new THREE.ConeGeometry(1.4, 1.8, 16), crimsonMat); rLobe.position.x = -0.5; rLobe.rotation.z = 1.6; mGroup.add(rLobe);
      const gall = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), emeraldMat); gall.position.set(0.4, -0.6, 0.4); mGroup.add(gall);

      // Anchors for Model 13
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 14: ৫.৫ ক্ষুদ্রান্ত্র — ডিওডেনাম, জেজুনাম ও ইলিয়াম লুপ
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const loop = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.35, 16, 32, Math.PI*1.5), amberMat); mGroup.add(loop);

      // Anchors for Model 14
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 15: ৫.৭ আন্ত্রিক ভিলাই — শোষণকারী মাইক্রোভিলাই স্তর
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = -2; i <= 2; i++) { const villus = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 1.8, 16), crimsonMat); villus.position.set(i*0.5, 0, 0); mGroup.add(villus); const lacteal = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 8), emeraldMat); lacteal.position.set(i*0.5, 0, 0.1); mGroup.add(lacteal); }

      // Anchors for Model 15
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 16: ৫.৭ পিত্তলবণ দ্বারা চর্বির ইমালসিফিকেশন ও লাইপেজ
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const villus = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.6, 1.6, 16, 16) : new THREE.CylinderGeometry(0.6, 0.6, 1.6, 16), crimsonMat); mGroup.add(villus);
      for (let i = 0; i < 8; i++) { const part = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), goldMat); const th = i * Math.PI / 4; part.position.set(Math.cos(th)*0.9, Math.sin(th)*0.7, 0); mGroup.add(part); }

      // Anchors for Model 16
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 17: ৫.৫ বৃহদান্ত্র — সিকাম, কোলন ও অ্যাপেনডিক্স
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const colon = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.4, 12, 24, Math.PI*1.3), amberMat); colon.rotation.z = 0.5; mGroup.add(colon);
      const app = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8), redMat); app.position.set(-1.4, -0.8, 0); mGroup.add(app);

      // Anchors for Model 17
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 18: ৫.৪ বিএমআই (BMI) স্কেল ও আদর্শ ওজনের চার্ট
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const gauge = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.2, 16, 32, Math.PI), glassMat); gauge.rotation.z = Math.PI; mGroup.add(gauge);
      const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.08, 1.3, 8), redMat); needle.position.set(0, -0.4, 0); needle.rotation.z = 0.5; mGroup.add(needle);

      // Anchors for Model 18
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 19: ৫.৮ গ্যাস্ট্রিক আলসার ক্ষত ও হেলিকোব্যাক্টার পাইলোরি
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const shield = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.8, 1.6, 6), emeraldMat); mGroup.add(shield);
      const cross = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.0, 0.4), whiteMat); cross.position.z = 0.3; mGroup.add(cross);

      // Anchors for Model 19
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
    // Model 20: ৫.৮ অ্যাপেনডিসাইটিস ও পিত্তথলির কোলেস্টেরল পাথর
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const plat = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.3, 1.8), darkMat); plat.position.y = -1.0; mGroup.add(plat);
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.3, 1.2, 16), goldMat); cup.position.y = 0; mGroup.add(cup);

      // Anchors for Model 20
      if (meta && meta.labels && meta.labels.length > 0) {
        const anchorPos = [
          { x: 0, y: 1.8, z: 0.2 },
          { x: -1.8, y: -0.6, z: 0.6 },
          { x: 1.8, y: -0.6, z: -0.6 }
        ];
        meta.labels.forEach((lbl, lIdx) => {
          const p = anchorPos[lIdx] || { x: 0, y: 0, z: 0 };
          const aObj = new THREE.Object3D();
          aObj.position.set(p.x, p.y, p.z);
          group.add(aObj);
          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);
        });
      }
      return;
    }
  }
}