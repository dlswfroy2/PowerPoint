/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import * as THREE from 'three';
import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

export function buildBiologyCh6to10Scene(
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
  // CHAPTER 6
  // ========================================================
  if (chapter === 6) {
    // Model 1: ৬.১ মূলরোম ও মাটির কৈশিক পানি শোষণ প্রক্রিয়া
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const seed = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 16), amberMat); mGroup.add(seed);
      for (let i = 0; i < 6; i++) { const drop = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), skyMat); const th = i * Math.PI / 3; drop.position.set(Math.cos(th)*1.5, Math.sin(th)*1.5, 0); mGroup.add(drop); }

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
    // Model 2: ৬.১ ইমবাইবিশন, ব্যাপন ও অভিস্রবণের ৩ডি মডেল
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const utube = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.35, 16, 32, Math.PI), glassMat); utube.rotation.z = Math.PI; mGroup.add(utube);
      const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.4, 16), glassMat); armL.position.set(-1.2, 0.7, 0); mGroup.add(armL);
      const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.4, 16), glassMat); armR.position.set(1.2, 0.7, 0); mGroup.add(armR);
      const memb = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.7, 0.7), redMat); memb.position.y = -1.2; mGroup.add(memb);

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
    // Model 3: ৬.২ অ্যাপোপ্লাস্ট ও সিমপ্লাস্ট শোষণ পথ
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const root = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 2.4, 16), amberMat); mGroup.add(root);
      for (let i = -2; i <= 2; i++) { const hair = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 1.2, 8), whiteMat); hair.position.set(0.65, i*0.4, 0); hair.rotation.z = Math.PI/2.3; mGroup.add(hair); }

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
    // Model 4: ৬.২ ক্যাসপেরিয়ান স্ট্রিপ ও সুবেরিন বলয় বাধা
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const memb = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.25, 1.2), emeraldMat); mGroup.add(memb);
      const pump = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.6, 12), purpleMat); mGroup.add(pump);
      for (let i = 0; i < 4; i++) { const ion = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), goldMat); ion.position.set((i-1.5)*0.7, 0.6, 0); mGroup.add(ion); }

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
    // Model 5: ৬.৩ জাইলেম ভেসেল ও অবিচ্ছিন্ন পানি স্তম্ভ
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const blade = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, 1.6), emeraldMat); mGroup.add(blade);
      for (let i = 0; i < 5; i++) { const v = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 8), skyMat); v.position.set((i-2)*0.4, 0.4, (i%2)*0.4); mGroup.add(v); }

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
    // Model 6: ৬.৪ প্রস্বেদন টান (Transpiration Pull) ও বাষ্পমোচন
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const g1 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.28, 16, 24, Math.PI), emeraldMat); g1.position.x = -0.25; g1.rotation.z = Math.PI/2; mGroup.add(g1);
      const g2 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.28, 16, 24, Math.PI), emeraldMat); g2.position.x = 0.25; g2.rotation.z = -Math.PI/2; mGroup.add(g2);
      const pore = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), darkMat); mGroup.add(pore);

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
    // Model 7: ৬.৪ পত্ররন্ধ্রের রক্ষীকোষের স্ফীতি ও রন্ধ্র উন্মুক্ত
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sun = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), goldMat); sun.position.set(-1.2, 1.1, 0); mGroup.add(sun);
      const wind = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.08, 8, 20), skyMat); wind.position.set(1.2, 0.8, 0); mGroup.add(wind);
      const leaf = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.15, 1.2), emeraldMat); leaf.position.y = -0.6; mGroup.add(leaf);

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
    // Model 8: ৬.৪ কিউটিকুলার ও লেন্টিকুলার প্রস্বেদন ছিদ্র
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const scale = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.0, 12), whiteMat); mGroup.add(scale);
      const pan1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.1, 16), emeraldMat); pan1.position.set(-0.9, -0.2, 0); mGroup.add(pan1);
      const pan2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.1, 16), redMat); pan2.position.set(0.9, -0.2, 0); mGroup.add(pan2);

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
    // Model 9: ৬.৫ ফ্লোয়েমে খাদ্য পরিবহন ও প্রেসার-ফ্লো হাইপোথিসিস
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.8, 16, 1, true), deepGreenMat); mGroup.add(stem);
      for (let i = -3; i <= 3; i++) { const drop = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), skyMat); drop.position.set(0, i*0.4, 0); mGroup.add(drop); }

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
    // Model 10: ৬.৬ মানব রক্তের উপাদান — প্লাজমা ও রক্তকণিকা অনুপাত
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sieve = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 2.6, 16), emeraldMat); mGroup.add(sieve);
      for (let i = 0; i < 6; i++) { const sugar = new THREE.Mesh(new THREE.DodecahedronGeometry(0.2), goldMat); sugar.position.set((i%2)*0.4 - 0.2, i*0.4 - 1.0, 0); mGroup.add(sugar); }

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
    // Model 11: ৬.৬ দ্বি-অবতল লোহিত কণিকা (RBC) ও হিমোগ্লোবিন
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 2.2, 16), glassMat); mGroup.add(tube);
      const plasma = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 1.2, 16), amberMat); plasma.position.y = 0.4; mGroup.add(plasma);
      const rbcLayer = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.9, 16), crimsonMat); rbcLayer.position.y = -0.55; mGroup.add(rbcLayer);

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
    // Model 12: ৬.৬ শ্বেত রক্তকণিকা (WBC) — ফ্যাগোসাইটোসিস সৈনিক
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const rbc = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.45, 16, 32), crimsonMat); rbc.scale.set(1.0, 1.0, 0.4); mGroup.add(rbc);

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
    // Model 13: ৬.৬ অনুচক্রিকা (Platelet) ও রক্ত তঞ্চন ফাইব্রিন জাল
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const wbc = new THREE.Mesh(new THREE.DodecahedronGeometry(1.3, 1), whiteMat); mGroup.add(wbc);
      for (let i = -1; i <= 1; i += 2) { const nucLobe = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), purpleMat); nucLobe.position.set(i*0.4, 0, 0); mGroup.add(nucLobe); }

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
    // Model 14: ৬.৭ এবিও (ABO) রক্তের গ্রুপ ও অ্যান্টিজেন-অ্যান্টিবডি
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 5; i++) { const fib = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 8), amberMat); fib.rotation.z = i*0.6; fib.rotation.x = i*0.4; mGroup.add(fib); }
      const rbcTrap = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), crimsonMat); mGroup.add(rbcTrap);

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
    // Model 15: ৬.৭ আরএইচ (Rh) ফ্যাক্টর ও গর্ভকালীন রক্ত সংকট
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const rbcCell = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), crimsonMat); mGroup.add(rbcCell);
      for (let i = 0; i < 6; i++) { const ag = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.5, 8), goldMat); const th = i * Math.PI / 3; ag.position.set(Math.cos(th)*1.2, Math.sin(th)*1.2, 0); ag.rotation.z = th - Math.PI/2; mGroup.add(ag); }

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
    // Model 16: ৬.৮ মানব হৃদপিণ্ডের ৪টি প্রকোষ্ঠ ও প্রাচীর
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const rbcCell = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), crimsonMat); mGroup.add(rbcCell);
      for (let i = 0; i < 4; i++) { const rh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), skyMat); const th = i * Math.PI / 2; rh.position.set(Math.cos(th)*1.2, Math.sin(th)*1.2, 0); mGroup.add(rh); }

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
    // Model 17: ৬.৮ হৃদপিণ্ডের কপাটিকা — ট্রাইকাস্পিড ও বাইকাস্পিড
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const hBody = new THREE.Mesh(new THREE.SphereGeometry(1.3, 24, 24), crimsonMat); hBody.scale.set(1.0, 1.25, 0.9); mGroup.add(hBody);
      const aorta = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.22, 12, 24, Math.PI), redMat); aorta.position.set(0, 1.3, 0); mGroup.add(aorta);

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
    // Model 18: ৬.৮ কার্ডিয়াক চক্র — সিস্টোল ও ডায়াস্টোল স্পন্দন
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let x = -1; x <= 1; x += 2) { for (let y = -1; y <= 1; y += 2) { const ch = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), [crimsonMat, redMat, skyMat, cyanMat][(x>0?1:0) + (y>0?2:0)]); ch.position.set(x*0.7, y*0.65, 0); mGroup.add(ch); } }

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
    // Model 19: ৬.৯ ধমনী, শিরা ও রক্ত কৈশিক জালিকার প্রস্থচ্ছেদ
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const art = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 2.6, 16, 1, true), redMat); mGroup.add(art);
      const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 1.2, 16), darkMat); cuff.position.y = 0.2; mGroup.add(cuff);

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
    // Model 20: ৬.১০ করোনারি ধমনী ব্লক, এনজিওপ্লাস্টি ও স্টেন্ট
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const art = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.6, 16, 1, true), crimsonMat); mGroup.add(art);
      const plaque = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.0, 16), amberMat); mGroup.add(plaque);
      const stentMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.4, 16, 1, true), goldMat); mGroup.add(stentMesh);

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
  // CHAPTER 7
  // ========================================================
  if (chapter === 7) {
    // Model 1: ৭.১ পত্ররন্ধ্র দিয়ে উদ্ভিদের দিনে ও রাতে গ্যাস বিনিময়
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.8, 16), whiteMat); tr.position.y = 0.8; mGroup.add(tr);
      const lungL = new THREE.Mesh(new THREE.ConeGeometry(0.85, 1.6, 16), crimsonMat); lungL.position.set(-0.85, -0.6, 0); mGroup.add(lungL);
      const lungR = new THREE.Mesh(new THREE.ConeGeometry(0.85, 1.6, 16), crimsonMat); lungR.position.set(0.85, -0.6, 0); mGroup.add(lungR);

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
    // Model 2: ৭.১ কাণ্ডের লেন্টিসেল দিয়ে গ্যাসীয় বিনিময় পথ
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const nose = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.6, 12), amberMat); nose.rotation.z = Math.PI; mGroup.add(nose);
      for (let i = -1; i <= 1; i += 2) { const naris = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.6, 12), darkMat); naris.position.set(i*0.35, -0.7, 0); mGroup.add(naris); }

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
    // Model 3: ৭.২ মানব শ্বসনতন্ত্রের সামগ্রিক ৩ডি রূপরেখা
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.2, 16), crimsonMat); mGroup.add(tube);
      const flap = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.15, 0.5), amberMat); flap.position.set(0, 0.4, 0.3); flap.rotation.x = 0.6; mGroup.add(flap);

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
    // Model 4: ৭.২ নাসাগহ্বর ও সিলিয়াযুক্ত মিউকোসা পর্দা
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const thyroid = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.85, 1.5, 6), skyMat); mGroup.add(thyroid);
      for (let i = -1; i <= 1; i += 2) { const cord = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.7, 0.1), whiteMat); cord.position.set(i*0.25, 0, 0); mGroup.add(cord); }

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
    // Model 5: ৭.২ স্বরযন্ত্র (Larynx), ভোকাল কর্ড ও এপিগ্লোটিস
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const trachea = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.6, 16), crimsonMat); mGroup.add(trachea);
      for (let i = -4; i <= 4; i++) { const cRing = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.08, 12, 24, Math.PI*1.5), whiteMat); cRing.position.y = i*0.28; cRing.rotation.x = Math.PI/2; mGroup.add(cRing); }

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
    // Model 6: ৭.২ ট্রাকিয়ার সি-আকৃতির তরুণাস্থি রিং ও নালী
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const mainB = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.2, 12), whiteMat); mainB.position.y = 0.8; mGroup.add(mainB);
      const bL = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 12), skyMat); bL.position.set(-0.6, -0.1, 0); bL.rotation.z = 0.6; mGroup.add(bL);
      const bR = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 12), skyMat); bR.position.set(0.6, -0.1, 0); bR.rotation.z = -0.6; mGroup.add(bR);
      for (let i = 0; i < 4; i++) { const tipB = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 8), crimsonMat); tipB.position.set((i%2===0?-1:1)*1.0, -0.8, (i>1?0.3:-0.3)); mGroup.add(tipB); }

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
    // Model 7: ৭.২ ব্রঙ্কিয়াল ট্রি — প্রাইমারি ব্রঙ্কাস ও ব্রঙ্কিওল
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.4, 12), whiteMat); stem.position.y = 0.9; mGroup.add(stem);
      for (let i = 0; i < 12; i++) { const alv = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 12), crimsonMat); const th = i * Math.PI / 6; alv.position.set(Math.cos(th)*0.85, Math.sin(th)*0.6 - 0.2, (i%3)*0.4 - 0.4); mGroup.add(alv); }

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
    // Model 8: ৭.৩ মানব ফুসফুস ও দ্বিস্তরী প্লুরা ঝিল্লি গহ্বর
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const alvWall = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 0.15), skyMat); alvWall.position.x = -0.4; mGroup.add(alvWall);
      const capWall = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 0.15), crimsonMat); capWall.position.x = 0.4; mGroup.add(capWall);
      const rbc = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16), redMat); rbc.position.set(0.4, 0, 0.2); rbc.rotation.x = Math.PI/2; mGroup.add(rbc);

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
    // Model 9: ৭.৩ ডায়াফ্রাম পেশি ও বক্ষপিঞ্জরের উঠানামা চলন
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cage = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.6, 2.2, 16, 1, true), skyMat); mGroup.add(cage);
      const diaFlat = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.55, 0.15, 16), crimsonMat); diaFlat.position.y = -1.1; mGroup.add(diaFlat);

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
    // Model 10: ৭.৩ প্রশ্বাস-নিঃশ্বাস প্রক্রিয়ার বায়ুর চাপ মেকানিক্স
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cage = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.4, 2.0, 16, 1, true), darkMat); mGroup.add(cage);
      const diaDome = new THREE.Mesh(new THREE.SphereGeometry(1.3, 16, 16, 0, Math.PI*2, 0, Math.PI*0.5), crimsonMat); diaDome.position.y = -0.8; mGroup.add(diaDome);

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
    // Model 11: ৭.৪ অ্যালভিওলাই গুচ্ছ ও সারফ্যাক্ট্যান্ট ঝিল্লি
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const hemo = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 20), crimsonMat); mGroup.add(hemo);
      for (let i = 0; i < 4; i++) { const fe = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), redMat); const th = i * Math.PI / 2; fe.position.set(Math.cos(th)*0.9, Math.sin(th)*0.9, 0); mGroup.add(fe); const o2 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), skyMat); o2.position.set(Math.cos(th)*1.35, Math.sin(th)*1.35, 0); mGroup.add(o2); }

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
    // Model 12: ৭.৪ অ্যালভিওলার রক্ত কৈশিক জালিকা ও রক্তপ্রবাহ
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bloodFlow = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.4, 16), glassMat); mGroup.add(bloodFlow);
      for (let i = 0; i < 5; i++) { const hco3 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28), skyMat); hco3.position.set((i%2)*0.4 - 0.2, i*0.4 - 0.8, 0); mGroup.add(hco3); }

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
    // Model 13: ৭.৪ O2 ও CO2 গ্যাসীয় ব্যাপন ঝিল্লি ইন্টারফেস
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const g1 = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.3, 16, 24, Math.PI), emeraldMat); g1.position.x = -0.3; g1.rotation.z = Math.PI/2; mGroup.add(g1);
      const g2 = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.3, 16, 24, Math.PI), emeraldMat); g2.position.x = 0.3; g2.rotation.z = -Math.PI/2; mGroup.add(g2);

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
    // Model 14: ৭.৫ অক্সিহিমোগ্লোবিন যৌগ গঠন ও O2 পরিবহন
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bark = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.4, 16, 1, true), darkMat); mGroup.add(bark);
      const lentPore = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.4), amberMat); lentPore.position.set(0, 0, 1.2); mGroup.add(lentPore);

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
    // Model 15: ৭.৫ রক্তে CO2 পরিবহন — বাইকার্বনেট ও কার্বামিনো
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sunLeaf = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.6, 0.1), emeraldMat); sunLeaf.position.x = -0.9; mGroup.add(sunLeaf);
      const moonLeaf = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.6, 0.1), deepGreenMat); moonLeaf.position.x = 0.9; mGroup.add(moonLeaf);
      const sunIcon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), goldMat); sunIcon.position.set(-0.9, 1.2, 0); mGroup.add(sunIcon);
      const moonIcon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), whiteMat); moonIcon.position.set(0.9, 1.2, 0); mGroup.add(moonIcon);

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
    // Model 16: ৭.৫ ক্লোরাইড শিফট বা হ্যামবার্গার মেকানিজম
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bron = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 2.4, 16), crimsonMat); mGroup.add(bron);
      const mucus = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.45, 16), amberMat); mGroup.add(mucus);

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
    // Model 17: ৭.৬ ব্রঙ্কাইটিস — ব্রঙ্কাসের শ্লেষ্মা প্রদাহ ও কফ
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const alv1 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), crimsonMat); alv1.position.x = -0.6; mGroup.add(alv1);
      const alv2 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), crimsonMat); alv2.position.x = 0.6; mGroup.add(alv2);
      const pus = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), amberMat); pus.position.set(0, -0.3, 0); mGroup.add(pus);

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
    // Model 18: ৭.৬ নিউমোনিয়া — অ্যালভিওলাইতে কফ ও পুঁজ জমা
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const lungTissue = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), crimsonMat); mGroup.add(lungTissue);
      const tubercle = new THREE.Mesh(new THREE.DodecahedronGeometry(0.6), amberMat); tubercle.position.set(0.4, 0.3, 0.6); mGroup.add(tubercle);

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
    // Model 19: ৭.৬ ফুসফুসের যক্ষ্মা ও টিউবারকল গহ্বর ক্ষত
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const badLung = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), darkMat); mGroup.add(badLung);
      const tumor = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), redMat); tumor.position.set(0.4, 0.3, 0.7); mGroup.add(tumor);

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
    // Model 20: ৭.৬ ফুসফুসের ক্যান্সার ও টার জমা অ্যালভিওলাই
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const podium = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 0.6, 16), goldMat); podium.position.y = -0.8; mGroup.add(podium);
      const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.8), redMat); star.position.y = 0.4; mGroup.add(star);

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
  // CHAPTER 8
  // ========================================================
  if (chapter === 8) {
    // Model 1: ৮.১ রেচনের ধারণা ও নাইট্রোজেনঘটিত বর্জ্য (ইউরিয়া)
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const orb = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), skyMat); mGroup.add(orb);
      for (let i = 0; i < 6; i++) { const waste = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25), amberMat); const th = i * Math.PI / 3; waste.position.set(Math.cos(th)*1.6, Math.sin(th)*1.6, 0); mGroup.add(waste); }

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
    // Model 2: ৮.২ মানব রেচনতন্ত্রের সামগ্রিক ৩ডি রূপরেখা
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ureaCore = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), skyMat); mGroup.add(ureaCore);
      for (let i = -1; i <= 1; i += 2) { const nh2 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), purpleMat); nh2.position.set(i*1.1, 0, 0); mGroup.add(nh2); }
      const co = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), redMat); co.position.set(0, 0.9, 0); mGroup.add(co);

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
    // Model 3: ৮.৩ বৃক্কের অনুদৈর্ঘ্য ছেদ — কর্টেক্স, মেডুলা ও পেলভিস
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const kL = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); kL.scale.set(0.8, 1.3, 0.6); kL.position.set(-0.9, 0.5, 0); mGroup.add(kL);
      const kR = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); kR.scale.set(0.8, 1.3, 0.6); kR.position.set(0.9, 0.5, 0); mGroup.add(kR);
      const uL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8), amberMat); uL.position.set(-0.6, -0.4, 0); uL.rotation.z = -0.3; mGroup.add(uL);
      const uR = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8), amberMat); uR.position.set(0.6, -0.4, 0); uR.rotation.z = 0.3; mGroup.add(uR);
      const blad = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), goldMat); blad.position.y = -1.3; mGroup.add(blad);

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
    // Model 4: ৮.৩ রেনাল রক্ত সঞ্চালন — রেনাল আর্টারি ও ভেইন
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bean = new THREE.Mesh(new THREE.SphereGeometry(1.4, 24, 24), crimsonMat); bean.scale.set(0.85, 1.4, 0.6); mGroup.add(bean);
      const cortex = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), redMat); cortex.scale.set(0.75, 1.3, 0.5); bean.add(cortex);
      const pelvis = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.0, 16), amberMat); pelvis.position.set(-0.3, 0, 0); pelvis.rotation.z = Math.PI/2; mGroup.add(pelvis);

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
    // Model 5: ৮.৪ সম্পূর্ণ নেফ্রনের ৩ডি গঠন — কার্যকারী একক
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const kidney = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), crimsonMat); kidney.scale.set(0.8, 1.3, 0.6); kidney.position.x = 0.5; mGroup.add(kidney);
      const rArt = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.4, 12), redMat); rArt.position.set(-0.6, 0.3, 0); rArt.rotation.z = Math.PI/2; mGroup.add(rArt);
      const rVein = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.4, 12), skyMat); rVein.position.set(-0.6, -0.3, 0); rVein.rotation.z = Math.PI/2; mGroup.add(rVein);

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
    // Model 6: ৮.৪ বোম্যান্স ক্যাপসুল ও দ্বিস্তরী পডোসাইট কোষ
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bowman = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), amberMat); bowman.position.set(-1.2, 1.1, 0); mGroup.add(bowman);
      const pct = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.12, 8, 20), crimsonMat); pct.position.set(-0.4, 0.8, 0); mGroup.add(pct);
      const henle = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.08, 8, 20, Math.PI), skyMat); henle.position.set(0, -0.6, 0); henle.rotation.z = Math.PI; mGroup.add(henle);
      const dct = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.12, 8, 20), redMat); dct.position.set(0.6, 0.8, 0); mGroup.add(dct);
      const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.6, 12), goldMat); duct.position.set(1.4, 0, 0); mGroup.add(duct);

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
    // Model 7: ৮.৪ গ্লোমেরুলাস কৈশিক জালক ও রেনাল আর্টারিওল
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cup = new THREE.Mesh(new THREE.SphereGeometry(1.2, 24, 24, 0, Math.PI*2, 0, Math.PI*0.65), amberMat); cup.rotation.x = Math.PI; mGroup.add(cup);
      const podo = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4), goldMat); podo.position.y = 0.2; mGroup.add(podo);

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
    // Model 8: ৮.৫ আল্ট্রাফিল্ট্রেশন ও গ্লোমেরুলার ফিল্ট্রেট সৃষ্টি
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const knot = new THREE.Mesh(new THREE.TorusKnotGeometry ? new THREE.TorusKnotGeometry(0.8, 0.25, 64, 16) : new THREE.SphereGeometry(0.9, 16, 16), redMat); mGroup.add(knot);
      const aff = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.2, 12), redMat); aff.position.set(-1.2, 0.8, 0); aff.rotation.z = 0.6; mGroup.add(aff);
      const eff = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 12), crimsonMat); eff.position.set(1.2, 0.8, 0); eff.rotation.z = -0.6; mGroup.add(eff);

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
    // Model 9: ৮.৫ প্রক্সিমাল পেঁচানো নালিকা ও খাদ্য পুনর্শোষণ
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sieve = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.2, 1.4), skyMat); mGroup.add(sieve);
      for (let i = 0; i < 8; i++) { const drop = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), amberMat); drop.position.set((i%4)*0.6 - 0.9, -0.6, (i>3?0.3:-0.3)); mGroup.add(drop); }

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
    // Model 10: ৮.৫ হেনলির লুপ — ইউ-আকৃতির কাউন্টার-কারেন্ট
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const loop = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.14, 12, 32, Math.PI), skyMat); loop.rotation.z = Math.PI; loop.position.y = -0.5; mGroup.add(loop);
      const des = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.8, 12), skyMat); des.position.set(-0.8, 0.4, 0); mGroup.add(des);
      const asc = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.8, 12), redMat); asc.position.set(0.8, 0.4, 0); mGroup.add(asc);

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
    // Model 11: ৮.৫ ডিস্টাল পেঁচানো নালিকা ও নালিকা ক্ষরণ
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pctCoil = new THREE.Mesh(new THREE.TorusKnotGeometry ? new THREE.TorusKnotGeometry(0.7, 0.16, 48, 12) : new THREE.TorusGeometry(0.8, 0.2, 12, 24), crimsonMat); pctCoil.position.x = -0.8; mGroup.add(pctCoil);
      const dctCoil = new THREE.Mesh(new THREE.TorusKnotGeometry ? new THREE.TorusKnotGeometry(0.7, 0.16, 48, 12) : new THREE.TorusGeometry(0.8, 0.2, 12, 24), redMat); dctCoil.position.x = 0.8; mGroup.add(dctCoil);

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
    // Model 12: ৮.৫ সংগ্রাহী নালিকা ও মূত্র সঞ্চালন পথ
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const mainDuct = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 2.8, 16), goldMat); mGroup.add(mainDuct);
      for (let i = -2; i <= 2; i++) { const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 8), amberMat); branch.position.set(0.4, i*0.5, 0); branch.rotation.z = 0.6; mGroup.add(branch); }

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
    // Model 13: ৮.৫ সুস্থ মূত্রের উপাদান — ইউরিয়া, লবণ ও ইউরোক্রোম
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const flask = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.85, 2.0, 16), glassMat); mGroup.add(flask);
      const urine = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 1.2, 16), amberMat); urine.position.y = -0.35; mGroup.add(urine);

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
    // Model 14: ৮.২ ইউরেটার নালী ও পেরিস্টালসিস তরঙ্গীয় গতি
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ureter = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.6, 16), crimsonMat); mGroup.add(ureter);
      const wave = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.12, 12, 24), goldMat); wave.position.y = 0.2; wave.rotation.x = Math.PI/2; mGroup.add(wave);

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
    // Model 15: ৮.২ মূত্রথলি — ডেটরুসর পেশিবহুল স্থিতিস্থাপক থলি
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const balance = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), skyMat); mGroup.add(balance);
      const adh = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 12, 32), goldMat); mGroup.add(adh);

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
    // Model 16: ৮.২ ইউরেথ্রা বা মূত্রনালী ও স্ফিঙ্কটার কপাটিকা
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bean = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), crimsonMat); bean.scale.set(0.8, 1.3, 0.6); mGroup.add(bean);
      const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4), whiteMat); stone.position.set(-0.2, -0.3, 0.4); mGroup.add(stone);

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
    // Model 17: ৮.৬ বৃক্কে পাথর সৃষ্টি — ক্যালসিয়াম অক্সালেট কেলাস
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const badKidney = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), darkMat); badKidney.scale.set(0.8, 1.2, 0.6); mGroup.add(badKidney);
      for (let i = 0; i < 5; i++) { const scar = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.1), redMat); scar.position.set(0.3, i*0.3 - 0.6, 0.4); mGroup.add(scar); }

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
    // Model 18: ৮.৭ বৃক্ক বিকল ও রক্তে ইউরেমিয়া বিষক্রিয়া
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const canister = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.6, 24), glassMat); mGroup.add(canister);
      for (let i = -2; i <= 2; i++) { const fiber = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.4, 8), skyMat); fiber.position.set(i*0.2, 0, 0); mGroup.add(fiber); }
      const artLine = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 8), redMat); artLine.position.set(0.8, 0.8, 0); artLine.rotation.z = Math.PI/2; mGroup.add(artLine);
      const venLine = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 8), skyMat); venLine.position.set(0.8, -0.8, 0); venLine.rotation.z = Math.PI/2; mGroup.add(venLine);

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
    // Model 19: ৮.৭ হিমোডায়ালাইসিস — কৃত্রিম বৃক্ক ডায়ালাইজার
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const donorKidney = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 20), crimsonMat); donorKidney.scale.set(0.8, 1.3, 0.6); donorKidney.position.set(0, 0.2, 0); mGroup.add(donorKidney);
      const graftArtery = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 8), redMat); graftArtery.position.set(-0.7, 0.1, 0); graftArtery.rotation.z = 0.8; mGroup.add(graftArtery);
      const graftVein = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.2, 8), skyMat); graftVein.position.set(0.7, -0.2, 0); graftVein.rotation.z = -0.8; mGroup.add(graftVein);

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
    // Model 20: ৮.৭ কিডনি প্রতিস্থাপন বা রেনাল ট্রান্সপ্লান্টেশন
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const starMedal = new THREE.Mesh(new THREE.OctahedronGeometry(0.8), goldMat); mGroup.add(starMedal);
      const ribbon = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.14, 12, 24, Math.PI), crimsonMat); ribbon.position.y = -0.4; mGroup.add(ribbon);

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
  // CHAPTER 9
  // ========================================================
  if (chapter === 9) {
    // Model 1: ৯.১ মানব কঙ্কালতন্ত্র — অক্ষীয় ও উপাঙ্গীয় বিভাজন
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const skull = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), boneMat); skull.position.y = 1.3; mGroup.add(skull);
      const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.5, 12), boneMat); spine.position.y = 0.2; mGroup.add(spine);
      const pelvis = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.15, 8, 16), boneMat); pelvis.position.y = -0.55; pelvis.rotation.x = Math.PI/2; mGroup.add(pelvis);
      for (let i = -1; i <= 1; i += 2) { const femur = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 1.2, 8), boneMat); femur.position.set(i*0.4, -1.3, 0); mGroup.add(femur); }

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
    // Model 2: ৯.১ করোটি ও মুখমণ্ডলের সুসংবদ্ধ অস্থিসমূহ
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cranium = new THREE.Mesh(new THREE.SphereGeometry(1.2, 24, 24), boneMat); cranium.scale.set(0.9, 1.0, 1.1); mGroup.add(cranium);
      const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.8), boneMat); jaw.position.set(0, -0.9, 0.4); mGroup.add(jaw);
      for (let i = -1; i <= 1; i += 2) { const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.06, 8, 16), darkMat); orbit.position.set(i*0.35, -0.1, 0.95); mGroup.add(orbit); }

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
    // Model 3: ৯.১ মেরুদণ্ড — ৩৩টি কশেরুকা ও কার্টিলেজ ডিস্ক
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = -4; i <= 4; i++) { const v = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.2, 16), boneMat); v.position.y = i*0.32; mGroup.add(v); const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.1, 16), skyMat); disc.position.y = i*0.32 + 0.15; mGroup.add(disc); const spinous = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.5, 8), boneMat); spinous.position.set(0, i*0.32, -0.6); spinous.rotation.x = -Math.PI/2; mGroup.add(spinous); }

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
    // Model 4: ৯.১ বক্ষপিঞ্জর — স্টার্নাম ও ১২ জোড়া পশুকা খাঁচা
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const sternum = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.8, 0.15), boneMat); sternum.position.z = 0.9; mGroup.add(sternum);
      const spineDorsal = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.2, 12), boneMat); spineDorsal.position.z = -0.9; mGroup.add(spineDorsal);
      for (let i = -3; i <= 3; i++) { const rib = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.06, 8, 24, Math.PI*1.2), boneMat); rib.position.y = i*0.28; rib.rotation.x = Math.PI/2; mGroup.add(rib); }

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
    // Model 5: ৯.২ দীর্ঘ অস্থির প্রস্থচ্ছেদ — কম্প্যাক্ট ও স্পঞ্জি বোন
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.0, 16), boneMat); mGroup.add(shaft);
      const epTop = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), amberMat); epTop.position.y = 1.1; mGroup.add(epTop);
      const epBot = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), amberMat); epBot.position.y = -1.1; mGroup.add(epBot);
      const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.76, 0.76, 0.15, 16), skyMat); capTop.position.y = 1.5; mGroup.add(capTop);

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
    // Model 6: ৯.২ হ্যাভারসিয়ান তন্ত্র ও অস্টিওসাইট অস্থিকোষ
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let r = 1; r <= 4; r++) { const lam = new THREE.Mesh(new THREE.CylinderGeometry(r*0.35, r*0.35, 2.4, 16, 1, true), r%2===0?boneMat:whiteMat); mGroup.add(lam); }
      const centralCanal = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 2.5, 12), redMat); mGroup.add(centralCanal);

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
    // Model 7: ৯.২ তরুণাস্থি ম্যাট্রিক্স ও কনড্রোসাইট কোষ
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const matrix = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.8, 1.0), skyMat); mGroup.add(matrix);
      for (let i = 0; i < 6; i++) { const lacuna = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), glassMat); const chondro = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), purpleMat); lacuna.add(chondro); lacuna.position.set((i%3)*0.8 - 0.8, (i>2?0.4:-0.4), 0.2); mGroup.add(lacuna); }

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
    // Model 8: ৯.৩ নিশ্চল সাইনুথ্রাল সন্ধি — করোটীয় সিউচার খাঁজ
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const plateL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.0, 0.3), boneMat); plateL.position.x = -0.65; mGroup.add(plateL);
      const plateR = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.0, 0.3), boneMat); plateR.position.x = 0.65; mGroup.add(plateR);
      for (let i = -3; i <= 3; i++) { const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.32), darkMat); tooth.position.set(0, i*0.28, 0); mGroup.add(tooth); }

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
    // Model 9: ৯.৩ সচল সাইনোভিয়াল অস্থিসন্ধির ক্যাপসুল গঠন
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bTop = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 1.2, 16), boneMat); bTop.position.y = 1.0; mGroup.add(bTop);
      const bBot = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.5, 1.2, 16), boneMat); bBot.position.y = -1.0; mGroup.add(bBot);
      const cartTop = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.15, 16), skyMat); cartTop.position.y = 0.35; mGroup.add(cartTop);
      const cartBot = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.15, 16), skyMat); cartBot.position.y = -0.35; mGroup.add(cartBot);
      const capsule = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.25, 12, 24), glassMat); mGroup.add(capsule);

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
    // Model 10: ৯.৩ বল ও কোটর সন্ধি — কাঁধ ও নিতম্ব সন্ধি
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cup = new THREE.Mesh(new THREE.SphereGeometry(1.0, 20, 20, 0, Math.PI*2, 0, Math.PI*0.55), boneMat); cup.rotation.x = Math.PI; cup.position.y = 0.5; mGroup.add(cup);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.75, 20, 20), skyMat); ball.position.y = 0.2; mGroup.add(ball);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.4, 12), boneMat); neck.position.y = -0.6; mGroup.add(neck);

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
    // Model 11: ৯.৩ কব্জা সন্ধি — কনুই ও হাঁটুর একমুখী চলন
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const spool = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 1.4, 16), boneMat); spool.rotation.z = Math.PI/2; spool.position.y = 0.4; mGroup.add(spool);
      const trough = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.35, 12, 24, Math.PI), boneMat); trough.position.y = -0.3; trough.rotation.x = Math.PI/2; mGroup.add(trough);

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
    // Model 12: ৯.৩ পিভট সন্ধি — অ্যাটলাস ও অ্যাক্সিস কশেরুকা
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ringAtlas = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.25, 16, 24), boneMat); ringAtlas.position.y = 0.3; ringAtlas.rotation.x = Math.PI/2; mGroup.add(ringAtlas);
      const pegAxis = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.8, 16), boneMat); pegAxis.position.y = -0.2; mGroup.add(pegAxis);

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
    // Model 13: ৯.৪ কঙ্কাল পেশির সারকোমিয়ার ও মায়োফাইব্রিল
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const z1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.0, 1.2), redMat); z1.position.x = -1.2; mGroup.add(z1);
      const z2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.0, 1.2), redMat); z2.position.x = 1.2; mGroup.add(z2);
      for (let i = -1; i <= 1; i++) { const myosin = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.6, 8), purpleMat); myosin.position.set(0, i*0.5, 0); myosin.rotation.z = Math.PI/2; mGroup.add(myosin); }

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
    // Model 14: ৯.৪ অ্যাক্টিন ও মায়োসিন প্রোটিনের স্লাইডিং ফিলামেন্ট
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const myoThick = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.4, 12), purpleMat); myoThick.rotation.z = Math.PI/2; mGroup.add(myoThick);
      for (let i = -3; i <= 3; i++) { const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), goldMat); head.position.set(i*0.35, 0.3, 0); mGroup.add(head); }
      const actinThin = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.4, 8), redMat); actinThin.position.y = 0.6; actinThin.rotation.z = Math.PI/2; mGroup.add(actinThin);

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
    // Model 15: ৯.৪ বাইসেপস ও ট্রাইসেপসের বিপরীতমুখী পেশি টান
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const humerus = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 2.4, 12), boneMat); humerus.position.x = 0; mGroup.add(humerus);
      const biceps = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); biceps.scale.set(0.6, 1.3, 0.6); biceps.position.set(-0.6, 0.3, 0); mGroup.add(biceps);
      const triceps = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.6, 12), redMat); triceps.position.set(0.6, -0.1, 0); mGroup.add(triceps);

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
    // Model 16: ৯.৫ টেন্ডন — পেশিকে অস্থির সাথে বাঁধনকারী শ্বেত তন্তু
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const musc = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.4, 1.4, 16), crimsonMat); musc.position.y = 0.6; mGroup.add(musc);
      const tendon = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.2, 12), whiteMat); tendon.position.y = -0.5; mGroup.add(tendon);
      const bone = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 0.8), boneMat); bone.position.y = -1.2; mGroup.add(bone);

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
    // Model 17: ৯.৫ লিগামেন্ট — অস্থিকে অস্থির সাথে যুক্তকারী পীত তন্তু
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const boneA = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 16), boneMat); boneA.position.y = 0.9; mGroup.add(boneA);
      const boneB = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 16), boneMat); boneB.position.y = -0.9; mGroup.add(boneB);
      for (let i = -1; i <= 1; i += 2) { const lig = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.2, 0.3), goldMat); lig.position.set(i*0.55, 0, 0); mGroup.add(lig); }

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
    // Model 18: ৯.৬ অস্টিওপোরোসিস — অস্থির ক্যালসিয়াম ক্ষয় ও ছিদ্র
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const normB = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.0, 16), boneMat); normB.position.x = -0.8; mGroup.add(normB);
      const ostB = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.0, 16), amberMat); ostB.position.x = 0.8; mGroup.add(ostB);
      for (let i = 0; i < 6; i++) { const hole = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), darkMat); hole.position.set(0.8 + (i%2)*0.2, i*0.3 - 0.7, 0.4); mGroup.add(hole); }

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
    // Model 19: ৯.৬ রিউমাটয়েড আর্থ্রাইটিস সন্ধি প্রদাহ ও ফোলা
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 16), boneMat); b1.position.y = 0.8; mGroup.add(b1);
      const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 16), boneMat); b2.position.y = -0.8; mGroup.add(b2);
      const pannus = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.35, 12, 24), redMat); mGroup.add(pannus);
      const spur = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), boneMat); spur.position.set(0.65, 0.2, 0); spur.rotation.z = -Math.PI/2; mGroup.add(spur);

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
    // Model 20: ৯.৬ অস্থিভঙ্গ ও ক্যালাস নিরাময় প্রক্রিয়া
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const boneFrac1 = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 16), boneMat); boneFrac1.position.y = 0.8; mGroup.add(boneFrac1);
      const boneFrac2 = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 16), boneMat); boneFrac2.position.y = -0.8; mGroup.add(boneFrac2);
      const callus = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), amberMat); callus.scale.set(1.2, 0.6, 1.2); mGroup.add(callus);

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
  // CHAPTER 10
  // ========================================================
  if (chapter === 10) {
    // Model 1: ১০.১ উদ্ভিদ হরমোন — অক্সিন ও শীর্ষ প্রকটতা বৃদ্ধি
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const brain = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), purpleMat); brain.position.y = 1.3; mGroup.add(brain);
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12), goldMat); cord.position.y = -0.1; mGroup.add(cord);
      for (let i = -3; i <= 3; i++) { const nerve = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.6, 8), skyMat); nerve.position.y = i*0.28; nerve.rotation.z = Math.PI/2; mGroup.add(nerve); }

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
    // Model 2: ১০.১ ফটোট্রপিজম — উদ্ভিদের আলোকমুখী কাণ্ডের বাঁক
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.45, 0.8, 16), amberMat); pot.position.y = -0.9; mGroup.add(pot);
      const stemBended = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.12, 12, 24, Math.PI*0.45), emeraldMat); stemBended.position.set(-1.0, -0.5, 0); mGroup.add(stemBended);
      const sunLight = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), goldMat); sunLight.position.set(1.2, 1.2, 0); mGroup.add(sunLight);

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
    // Model 3: ১০.১ জিবেরেলিন ও সাইটোকাইনিনের পর্বমধ্য বৃদ্ধি
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const plant = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.4, 12), emeraldMat); mGroup.add(plant);
      const apex = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.6, 12), goldMat); apex.position.y = 1.3; mGroup.add(apex);
      for (let i = -1; i <= 1; i += 2) { const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.4), deepGreenMat); leaf.position.set(i*0.5, 0.4, 0); leaf.rotation.z = i*0.4; mGroup.add(leaf); }

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
    // Model 4: ১০.২ লজ্জাবতী পাতার সিসমোন্যাস্টিক চলন ও পালভিনাস
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const stemA = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.2, 12), emeraldMat); stemA.position.x = -0.7; stemA.position.y = -0.3; mGroup.add(stemA);
      const stemB = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.4, 12), emeraldMat); stemB.position.x = 0.7; stemB.position.y = 0.3; mGroup.add(stemB);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); cap.position.set(0.7, 1.5, 0); mGroup.add(cap);

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
    // Model 5: ১০.৩ মানব স্নায়ুতন্ত্রের কেন্দ্রীয় ও প্রান্তীয় রূপরেখা
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const fruit = new THREE.Mesh(new THREE.SphereGeometry(1.0, 20, 20), goldMat); fruit.position.x = -0.6; mGroup.add(fruit);
      const dropLeaf = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 1.2), amberMat); dropLeaf.position.set(0.8, -0.6, 0); dropLeaf.rotation.z = -0.6; mGroup.add(dropLeaf);

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
    // Model 6: ১০.৩ মানব মস্তিষ্ক — সেরিব্রাম, সেরিবেলাম ও ব্রেনস্টেম
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const clock = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.15, 16, 32), skyMat); mGroup.add(clock);
      const day = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.1, 24, 1, false, 0, Math.PI), goldMat); mGroup.add(day);
      const night = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.1, 24, 1, false, Math.PI, Math.PI), darkMat); mGroup.add(night);

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
    // Model 7: ১০.৩ গুরুমস্তিষ্কের কর্টেক্স — ফ্রন্টাল ও প্যারাইটাল লোব
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cns = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 2.4, 16), purpleMat); cns.position.x = -0.7; mGroup.add(cns);
      const pns = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.1, 8, 24), skyMat); pns.position.x = 0.7; mGroup.add(pns);

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
    // Model 8: ১০.৩ লঘুমস্তিষ্ক (Cerebellum) ও শারীরিক ভারসাম্য রক্ষা
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const soma = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8), goldMat); soma.position.y = 0.9; mGroup.add(soma);
      const axon = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.2, 12), amberMat); axon.position.y = -0.6; mGroup.add(axon);
      for (let i = 0; i < 5; i++) { const dend = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.8, 8), goldMat); const th = i * Math.PI * 2 / 5; dend.position.set(Math.cos(th)*0.9, 0.9 + Math.sin(th)*0.9, 0); dend.rotation.z = th - Math.PI/2; mGroup.add(dend); }

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
    // Model 9: ১০.৩ সুষুম্নাকাণ্ডের প্রস্থচ্ছেদ ও এইচ-আকৃতির ধূসর বস্তু
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const axonCore = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.8, 12), amberMat); mGroup.add(axonCore);
      for (let i = -2; i <= 2; i++) { const sheath = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.45, 16), skyMat); sheath.position.y = i*0.55; mGroup.add(sheath); }

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
    // Model 10: ১০.৫ বহুমুখী মোটর নিউরনের সম্পূর্ণ ৩ডি গঠন
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pre = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16, 0, Math.PI*2, 0, Math.PI*0.6), goldMat); pre.position.y = 0.6; pre.rotation.x = Math.PI; mGroup.add(pre);
      const post = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.3, 1.2), purpleMat); post.position.y = -0.6; mGroup.add(post);
      for (let i = 0; i < 6; i++) { const ves = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), redMat); ves.position.set((i%3)*0.4 - 0.4, 0, (i>2?0.2:-0.2)); mGroup.add(ves); }

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
    // Model 11: ১০.৫ মায়েলিন সিথ ও র্যানভিয়ারের পর্ব সংকেত লাফানো
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const leftH = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), purpleMat); leftH.scale.set(0.7, 0.9, 1.2); leftH.position.x = -0.45; mGroup.add(leftH);
      const rightH = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), purpleMat); rightH.scale.set(0.7, 0.9, 1.2); rightH.position.x = 0.45; mGroup.add(rightH);
      const cerebel = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); cerebel.position.set(0, -0.8, -0.6); mGroup.add(cerebel);

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
    // Model 12: ১০.৫ স্নায়ু সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const brainShell = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 20), glassMat); mGroup.add(brainShell);
      const thal = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), goldMat); thal.position.set(0, 0.2, 0); mGroup.add(thal);
      const hypo = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.6, 12), redMat); hypo.position.set(0, -0.35, 0.2); hypo.rotation.x = 0.5; mGroup.add(hypo);

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
    // Model 13: ১০.৫ অ্যাকশন পটেনশিয়াল ও সোডিয়াম-পটাশিয়াম পাম্প
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pons = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), amberMat); pons.position.y = 0.4; mGroup.add(pons);
      const medulla = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 1.4, 16), skyMat); medulla.position.y = -0.6; mGroup.add(medulla);

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
    // Model 14: ১০.৬ প্রতিবর্ত চাপ (Reflex Arc) — ৫টি উপাদান সার্কিট
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const whiteM = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 1.0, 24), whiteMat); mGroup.add(whiteM);
      const grayH = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.05, 0.8), darkMat); mGroup.add(grayH);
      const grayHCross = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.05, 0.3), darkMat); mGroup.add(grayHCross);

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
    // Model 15: ১০.৭ পিটুইটারি গ্রন্থি — মাস্টার গ্ল্যান্ড ও ট্রপিক হরমোন
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const skin = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 0.6), amberMat); skin.position.set(-1.4, -0.6, 0); mGroup.add(skin);
      const spinal = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), purpleMat); spinal.position.set(0, 0.8, 0); mGroup.add(spinal);
      const muscle = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.35, 0.8, 12, 12) : new THREE.CylinderGeometry(0.35, 0.35, 0.8, 12), crimsonMat); muscle.position.set(1.4, -0.6, 0); mGroup.add(muscle);
      const arc = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.08, 12, 32, Math.PI), goldMat); arc.position.y = -0.2; arc.rotation.z = Math.PI; mGroup.add(arc);

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
    // Model 16: ১০.৭ থাইরয়েড গ্রন্থি ও বিপাকীয় হরমোন থাইরক্সিন
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bodyFig = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.7, 2.0, 16, 16) : new THREE.CylinderGeometry(0.7, 0.7, 2.0, 16), glassMat); mGroup.add(bodyFig);
      const pit = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), redMat); pit.position.set(0, 1.1, 0.4); mGroup.add(pit);
      const thy = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), goldMat); thy.position.set(0, 0.6, 0.5); mGroup.add(thy);
      const adr = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.3, 8), amberMat); adr.position.set(0, -0.2, 0.5); mGroup.add(adr);

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
    // Model 17: ১০.৭ আইলেটস অব ল্যাঙ্গারহ্যান্স — ইনসুলিন ও গ্লুকাগন
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 12), whiteMat); stalk.position.set(0, 0.8, 0); mGroup.add(stalk);
      const antPit = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), crimsonMat); antPit.position.set(-0.35, 0.4, 0); mGroup.add(antPit);
      const postPit = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), skyMat); postPit.position.set(0.35, 0.4, 0); mGroup.add(postPit);
      const thyroid = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.25, 12, 24, Math.PI*1.2), amberMat); thyroid.position.set(0, -0.6, 0); mGroup.add(thyroid);

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
    // Model 18: ১০.৭ অ্যাড্রেনাল গ্রন্থি ও জরুরি হরমোন অ্যাড্রেনালিন
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const panc = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.8, 0.6), amberMat); mGroup.add(panc);
      const islet = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), goldMat); islet.position.set(0.3, 0, 0.2); mGroup.add(islet);
      for (let i = 0; i < 5; i++) { const ins = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), skyMat); const th = i * Math.PI / 2.5; ins.position.set(Math.cos(th)*0.7 + 0.3, Math.sin(th)*0.7, 0.3); mGroup.add(ins); }

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
    // Model 19: ১০.৮ ডায়াবেটিস মেলিটাস — রক্তে উচ্চ গ্লুকোজ বিপাক
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const kidney = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), crimsonMat); kidney.scale.set(0.8, 1.3, 0.6); kidney.position.y = -0.3; mGroup.add(kidney);
      const capAdr = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.7, 16), goldMat); capAdr.position.set(0, 0.9, 0); mGroup.add(capAdr);

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
    // Model 20: ১০.৮ গলগণ্ড (Goiter) — আয়োডিন ঘাটতিতে থাইরয়েড স্ফীতি
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const starMedal = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 1), goldMat); mGroup.add(starMedal);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.12, 16, 36), purpleMat); mGroup.add(ring);

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