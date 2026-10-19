/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import * as THREE from 'three';
import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

export function buildBiologyCh11to14Scene(
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
  // CHAPTER 11
  // ========================================================
  if (chapter === 11) {
    // Model 1: ১১.১ অযৌন ও যৌন জননের মৌলিক জীবতাত্ত্বিক তুলনা
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const tuber = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 16), amberMat); tuber.scale.set(1.3, 0.8, 0.9); mGroup.add(tuber);
      for (let i = 0; i < 4; i++) { const eye = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), emeraldMat); const th = i * Math.PI / 2; eye.position.set(Math.cos(th)*1.1, 0.4, Math.sin(th)*0.8); eye.rotation.z = th; mGroup.add(eye); }

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
    // Model 2: ১১.২ একটি সম্পূর্ণ আদর্শ ফুলের ৫টি স্তবকের গঠন
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const stock = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.4, 16), amberMat); stock.position.y = -0.7; mGroup.add(stock);
      const scion = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.4, 16), emeraldMat); scion.position.y = 0.7; mGroup.add(scion);
      const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.1, 12, 24), whiteMat); mGroup.add(wrap);

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
    // Model 3: ১১.২ পুংস্তবক — পরাগধানীর ৪টি প্রকোষ্ঠ ও পুংদণ্ড
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const recep = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.3, 0.6, 16), deepGreenMat); recep.position.y = -0.6; mGroup.add(recep);
      const sepals = new THREE.Mesh(new THREE.ConeGeometry(0.9, 0.5, 5), emeraldMat); sepals.position.y = -0.3; mGroup.add(sepals);
      for (let i = 0; i < 5; i++) { const pet = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), redMat); const th = i * Math.PI * 2 / 5; pet.position.set(Math.cos(th)*1.0, 0.2, Math.sin(th)*1.0); pet.scale.set(0.6, 1.2, 0.4); pet.rotation.z = Math.cos(th)*0.5; mGroup.add(pet); }
      const carpel = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.35, 1.4, 16), goldMat); carpel.position.y = 0.5; mGroup.add(carpel);

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
    // Model 4: ১১.২ স্ত্রীস্তবক — গর্ভমুণ্ড, গর্ভদণ্ড ও গর্ভাশয়
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const calyx = new THREE.Mesh(new THREE.ConeGeometry(1.4, 0.6, 5), emeraldMat); calyx.position.y = -0.4; mGroup.add(calyx);
      const corolla = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1.2, 5), crimsonMat); corolla.position.y = 0.4; corolla.rotation.x = Math.PI; mGroup.add(corolla);

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
    // Model 5: ১১.২ পরাগরেণুর সূক্ষ্ম গঠন — এক্সাইন ও ইনটাইন প্রাচীর
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const fil = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2, 12), whiteMat); fil.position.y = -0.3; mGroup.add(fil);
      const antherL = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), goldMat); antherL.position.set(-0.25, 0.9, 0); mGroup.add(antherL);
      const antherR = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), goldMat); antherR.position.set(0.25, 0.9, 0); mGroup.add(antherR);

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
    // Model 6: ১১.৪ ডিম্বকের অভ্যন্তরীণ গঠন — ৮ নিউক্লিয়াস ভ্রূণথলি
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pollen = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), goldMat); mGroup.add(pollen);
      for (let i = 0; i < 12; i++) { const spike = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 8), amberMat); const th = i * Math.PI / 6; spike.position.set(Math.cos(th)*1.25, Math.sin(th)*1.25, 0); spike.rotation.z = th - Math.PI/2; mGroup.add(spike); }

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
    // Model 7: ১১.৩ সপুষ্পক উদ্ভিদের পরাগায়ন — পতঙ্গ ও বায়ু বাহক
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ovary = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), emeraldMat); ovary.position.y = -0.6; mGroup.add(ovary);
      const style = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.4, 12), deepGreenMat); style.position.y = 0.3; mGroup.add(style);
      const stigma = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), goldMat); stigma.position.y = 1.1; mGroup.add(stigma);

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
    // Model 8: ১১.৪ পরাগনালির অঙ্কুরোদগম ও কেমোট্রপিক বৃদ্ধি
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const integ = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20, 0, Math.PI*2, 0, Math.PI*0.8), emeraldMat); mGroup.add(integ);
      const embSac = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), goldMat); mGroup.add(embSac);
      const egg = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), redMat); egg.position.set(0, -0.4, 0); mGroup.add(egg);

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
    // Model 9: ১১.৪ উদ্ভিদের দ্বি-নিষেক ও ট্রিপ্লয়েড শস্য (3n) ত্রিমিলন
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const fl1 = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.0, 5), crimsonMat); fl1.position.x = -1.1; mGroup.add(fl1);
      const fl2 = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.0, 5), skyMat); fl2.position.x = 1.1; mGroup.add(fl2);
      const bee = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 10), goldMat); bee.position.y = 0.8; mGroup.add(bee);

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
    // Model 10: ১১.৫ ফল ও বীজের বিকাশ — পেরিকার্প ও ভ্রূণমূল-ভ্রূণকাণ্ড
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const stig = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), emeraldMat); stig.position.y = 1.0; mGroup.add(stig);
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 2.2, 12), goldMat); tube.position.y = -0.3; mGroup.add(tube);
      const sperm = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), redMat); sperm.position.set(0, -1.2, 0); mGroup.add(sperm);

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
    // Model 11: ১১.৬ মানব পুরুষ প্রজননতন্ত্র — শুক্রাশয় ও ভাস ডিফারেন্স
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ovule = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), glassMat); mGroup.add(ovule);
      const zygote2n = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), redMat); zygote2n.position.set(0, -0.5, 0); mGroup.add(zygote2n);
      const endo3n = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), goldMat); endo3n.position.set(0, 0.3, 0); mGroup.add(endo3n);

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
    // Model 12: ১১.৬ শুক্রাণুর অণুবীক্ষণিক গঠন — অ্যাক্রোসোম ও লেজ
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pericarp = new THREE.Mesh(new THREE.SphereGeometry(1.4, 24, 24), redMat); pericarp.scale.set(1.1, 1.3, 1.0); mGroup.add(pericarp);
      const seedCore = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), amberMat); mGroup.add(seedCore);

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
    // Model 13: ১১.৬ মানব স্ত্রী প্রজননতন্ত্র — ডিম্বাশয়, জরায়ু ও এন্ডোমেট্রিয়াম
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const testis = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), skyMat); testis.scale.set(0.7, 1.1, 0.7); testis.position.set(0, -0.6, 0); mGroup.add(testis);
      const vasDef = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.08, 12, 24, Math.PI*1.4), whiteMat); vasDef.position.y = 0.2; mGroup.add(vasDef);

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
    // Model 14: ১১.৬ ফ্যালোপিয়ান নালি ও ডিম্বাণু ক্ষরণ (ওভুলেশন)
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const uterus = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.6, 16), crimsonMat); uterus.position.y = 0.2; mGroup.add(uterus);
      for (let i = -1; i <= 1; i += 2) { const tube = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.08, 8, 20, Math.PI*0.6), crimsonMat); tube.position.set(i*0.9, 0.9, 0); tube.rotation.z = i*0.5; mGroup.add(tube); const ovary = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), goldMat); ovary.position.set(i*1.5, 0.8, 0); mGroup.add(ovary); }

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
    // Model 15: ১১.৬ মানব নিষেকের স্থান ও এককোষী জাইগোট সৃষ্টি
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const clock = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.22, 16, 32), crimsonMat); mGroup.add(clock);
      for (let i = 0; i < 4; i++) { const marker = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), [redMat, goldMat, skyMat, purpleMat][i]); const th = i * Math.PI / 2; marker.position.set(Math.cos(th)*1.4, Math.sin(th)*1.4, 0); mGroup.add(marker); }

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
    // Model 16: ১১.৭ ব্লাস্টোসিস্ট রূপান্তর ও জরায়ু প্রাচীরে রোপণ
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ovum = new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 24), amberMat); mGroup.add(ovum);
      for (let i = 0; i < 5; i++) { const sp = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.6, 8), skyMat); const th = i * Math.PI * 2 / 5; sp.position.set(Math.cos(th)*1.4, Math.sin(th)*1.4, 0); sp.rotation.z = th + Math.PI/2; mGroup.add(sp); }

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
    // Model 17: ১১.৭ মানব ভ্রূণের বিকাশ ও অ্যামনিওটিক তরল থলি
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const wall = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.4, 1.4), crimsonMat); wall.position.y = -0.7; mGroup.add(wall);
      const blasto = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), glassMat); blasto.position.y = 0.2; mGroup.add(blasto);
      const icm = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), goldMat); icm.position.set(0, -0.1, 0); blasto.add(icm);

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
    // Model 18: ১১.৭ অমরা (Placenta) ও নাড়ির (Umbilical Cord) রক্ত জালক
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const plac = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.3, 24), crimsonMat); plac.position.y = 0.9; mGroup.add(plac);
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.6, 12), skyMat); cord.position.y = 0; mGroup.add(cord);
      const fetus = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), amberMat); fetus.position.y = -0.9; mGroup.add(fetus);

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
    // Model 19: ১১.৮ এইচআইভি (HIV) রেট্রোভাইরাস ও এইডস রোগ মেকানিজম
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const shield = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.8, 1.4, 6), skyMat); mGroup.add(shield);
      const heartIcon = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), redMat); heartIcon.position.z = 0.3; mGroup.add(heartIcon);

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
    // Model 20: ১১.৮ যৌন সংক্রামক ব্যাধি — সিফিলিস ও গনোরিয়া ব্যাক্টেরিয়া
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const medal = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.25, 24), goldMat); medal.rotation.x = Math.PI/2; mGroup.add(medal);

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
  // CHAPTER 12
  // ========================================================
  if (chapter === 12) {
    // Model 1: ১২.১ গ্রেগর জোহান মেন্ডেল ও মোটরশুঁটির বিপরীত বৈশিষ্ট্য
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const peaT = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.2, 12), emeraldMat); peaT.position.x = -0.8; mGroup.add(peaT);
      const peaD = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.9, 12), deepGreenMat); peaD.position.set(0.8, -0.65, 0); mGroup.add(peaD);
      const crossSymbol = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.1), goldMat); crossSymbol.rotation.z = 0.78; mGroup.add(crossSymbol);

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
    // Model 2: ১২.১ মনোহাইব্রিড ক্রস ও ৩:১ ফিনোটাইপিক অনুপাত
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let r = 0; r < 4; r++) { for (let c = 0; c < 4; c++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), (r+c)%2===0?goldMat:emeraldMat); p.position.set(c*0.6 - 0.9, r*0.6 - 0.9, 0); mGroup.add(p); } }

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
    // Model 3: ১২.১ ডাইহাইব্রিড ক্রস ও ৯:৩:৩:১ স্বাধীন সঞ্চারণ
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = -1; i <= 1; i += 2) { const armP = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.0, 12), purpleMat); armP.position.set(i*0.25, 0.7, 0); armP.rotation.z = -i*0.2; mGroup.add(armP); const armQ = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.4, 12), purpleMat); armQ.position.set(i*0.25, -0.8, 0); armQ.rotation.z = i*0.2; mGroup.add(armQ); }
      const cent = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); mGroup.add(cent);

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
    // Model 4: ১২.২ মানুষের ৪৬টি ক্রোমোজোম ও ক্যারিওটাইপ বিশ্লেষণ
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 6; i++) { const pairL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.1), skyMat); pairL.position.set(i*0.5 - 1.25, 0.4, 0); mGroup.add(pairL); const pairR = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.1), redMat); pairR.position.set(i*0.5 - 1.1, 0.4, 0); mGroup.add(pairR); }

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
    // Model 5: ১২.২ লিঙ্গ নির্ধারণ মেকানিজম — পিতার XY ক্রোমোজোম
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const chrX = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.6, 0.2), redMat); chrX.rotation.z = 0.5; chrX.position.x = -0.7; mGroup.add(chrX); const chrX2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.6, 0.2), redMat); chrX2.rotation.z = -0.5; chrX2.position.x = -0.7; mGroup.add(chrX2);
      const chrY = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.2, 12), skyMat); chrY.position.x = 0.7; mGroup.add(chrY);

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
    // Model 6: ১২.৩ ডিএনএ ডাবল হেলিক্সের ফসফেট-সুগার মেরুদণ্ড
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const helix = new THREE.Group(); mGroup.add(helix);
      for (let i = 0; i < 16; i++) { const t = (i / 16) * Math.PI * 4; const y = (i / 16) * 4.0 - 2.0; const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), skyMat); s1.position.set(Math.cos(t)*1.2, y, Math.sin(t)*1.2); helix.add(s1); const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), redMat); s2.position.set(Math.cos(t+Math.PI)*1.2, y, Math.sin(t+Math.PI)*1.2); helix.add(s2); const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.4, 8), goldMat); rung.position.set(0, y, 0); rung.rotation.z = Math.PI/2; rung.rotation.y = -t; helix.add(rung); }

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
    // Model 7: ১২.৩ নাইট্রোজেনাস ক্ষারক জোড় — A=T ও G≡C বন্ধন
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const purine = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.15, 6), skyMat); purine.position.x = -0.7; mGroup.add(purine);
      const pyrim = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.15, 5), redMat); pyrim.position.x = 0.7; mGroup.add(pyrim);
      for (let i = -1; i <= 1; i++) { const hBond = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.6, 8), whiteMat); hBond.position.set(0, i*0.2, 0); hBond.rotation.z = Math.PI/2; mGroup.add(hBond); }

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
    // Model 8: ১২.৩ ডিএনএ নিউক্লিওসোম ও হিস্টোন অক্টামার পুঁতি
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const spool = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.9, 16), purpleMat); mGroup.add(spool);
      const dnaWrap = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.14, 12, 32, Math.PI*3.2), goldMat); mGroup.add(dnaWrap);
      const h1 = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.2, 12), redMat); h1.position.set(1.2, 0, 0); mGroup.add(h1);

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
    // Model 9: ১২.৪ আরএনএ (RNA) অণু — একক সূত্রক রাইবোজ চেইন
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 10; i++) { const t = i * 0.5 - 2.2; const rSphere = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), emeraldMat); rSphere.position.set(Math.sin(i*0.6)*0.8, t, Math.cos(i*0.6)*0.4); mGroup.add(rSphere); const base = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.1, 0.15), [goldMat, redMat, skyMat, amberMat][i%4]); base.position.set(Math.sin(i*0.6)*0.8 + 0.35, t, Math.cos(i*0.6)*0.4); mGroup.add(base); }

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
    // Model 10: ১২.৪ মেসেঞ্জার আরএনএ (mRNA) ও ট্রান্সক্রিপশন বাবল
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const dnaTrack = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.0, 8), skyMat); dnaTrack.position.x = -0.4; mGroup.add(dnaTrack);
      const rnaPoly = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), amberMat); rnaPoly.position.set(0, 0, 0); mGroup.add(rnaPoly);
      const mrnaTranscript = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.0, 8), emeraldMat); mrnaTranscript.position.set(0.6, -0.5, 0); mrnaTranscript.rotation.z = -0.5; mGroup.add(mrnaTranscript);

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
    // Model 11: ১২.৫ ট্রান্সলেশন — রাইবোসোম, tRNA ও প্রোটিন সংশ্লেষণ
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const rLarge = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), purpleMat); rLarge.position.y = 0.5; mGroup.add(rLarge);
      const rSmall = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), cyanMat); rSmall.position.y = -0.5; mGroup.add(rSmall);
      for (let i = 0; i < 4; i++) { const poly = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), goldMat); poly.position.set(0.3 + i*0.35, 1.1 + i*0.2, 0); mGroup.add(poly); }

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
    // Model 12: ১২.৫ ডিএনএ অর্ধ-সংরক্ষণশীল অনুলিপন ফর্ক (Replication)
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const helicase = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.9, 12), goldMat); helicase.rotation.z = -Math.PI/2; mGroup.add(helicase);
      const leadStrand = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8), skyMat); leadStrand.position.set(0.8, 0.7, 0); leadStrand.rotation.z = 0.5; mGroup.add(leadStrand);
      const lagStrand = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8), redMat); lagStrand.position.set(0.8, -0.7, 0); lagStrand.rotation.z = -0.5; mGroup.add(lagStrand);

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
    // Model 13: ১২.৩ জিন মিউটেশন — পয়েন্ট মিউটেশন ও ক্ষারক পরিবর্তন
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const geneStrip = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.4, 0.2), skyMat); mGroup.add(geneStrip);
      const mutSpot = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), redMat); mutSpot.position.x = 0.2; mGroup.add(mutSpot);

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
    // Model 14: ১২.৬ লাল-সবুজ বর্ণান্ধতা ও সেক্স-লিংকড ইনহেরিট্যান্স
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const eyePlate = new THREE.Mesh(new THREE.CircleGeometry ? new THREE.CircleGeometry(1.3, 32) : new THREE.CylinderGeometry(1.3, 1.3, 0.1, 24), darkMat); mGroup.add(eyePlate);
      for (let i = 0; i < 18; i++) { const dot = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), i%3===0?redMat:emeraldMat); const th = i * 0.7; dot.position.set(Math.cos(th)*0.8, Math.sin(th)*0.8, 0.1); mGroup.add(dot); }

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
    // Model 15: ১২.৬ থ্যালাসেমিয়া — ত্রুটিপূর্ণ হিমোগ্লোবিন গ্লোবিন জিন
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const globinNormal = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), crimsonMat); globinNormal.position.x = -0.75; mGroup.add(globinNormal);
      const globinDefect = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.2, 12, 24), amberMat); globinDefect.position.x = 0.75; mGroup.add(globinDefect);

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
    // Model 16: ১২.৬ ডিএনএ ফিঙ্গারপ্রিন্টিং জেল ব্যান্ড ও অপরাধী শনাক্ত
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const gel = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.6, 0.1), glassMat); mGroup.add(gel);
      for (let c = -1; c <= 1; c++) { for (let r = -2; r <= 2; r++) { const band = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.08, 0.12), skyMat); band.position.set(c*0.7, r*0.5 + (c*0.1), 0.05); mGroup.add(band); } }

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
    // Model 17: ১২.৭ ডারউইনের গ্যালাপাগোস ফিঞ্চ পাখির ঠোঁট বিবর্তন
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 3; i++) { const beak = new THREE.Mesh(new THREE.ConeGeometry(0.25 + i*0.15, 1.2, 12), amberMat); beak.position.set((i-1)*1.0, 0, 0); beak.rotation.z = Math.PI/2; mGroup.add(beak); }

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
    // Model 18: ১২.৭ প্রাকৃতিক নির্বাচন তত্ত্ব — যোগ্যতমের জয় ও উদ্বর্তন
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const treeBark = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.4, 16), darkMat); mGroup.add(treeBark);
      const darkMoth = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.1), darkMat); darkMoth.position.set(0, 0.4, 1.15); mGroup.add(darkMoth);
      const lightMoth = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.1), whiteMat); lightMoth.position.set(0, -0.4, 1.15); mGroup.add(lightMoth);

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
    // Model 19: ১২.৭ সমসংস্থ ও সমবৃত্তীয় অঙ্গের বিবর্তনীয় প্রমাণ
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const humanArm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 1.6, 8), boneMat); humanArm.position.x = -1.0; mGroup.add(humanArm);
      const batWing = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 1.8, 8), boneMat); batWing.position.x = 0; batWing.rotation.z = 0.5; mGroup.add(batWing);
      const whaleFin = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.6, 0.15), boneMat); whaleFin.position.x = 1.0; mGroup.add(whaleFin);

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
    // Model 20: ১২.৭ জীবাশ্ম প্রমাণ — আর্কিওপটেরিক্স সংযোগকারী সেতু
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const slab = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.0, 0.2), amberMat); mGroup.add(slab);
      const skel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 8), boneMat); skel.rotation.z = 0.7; mGroup.add(skel);
      const wing = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.2, 6), darkMat); wing.position.set(0.4, 0.3, 0.15); wing.rotation.z = -0.6; mGroup.add(wing);

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
  // CHAPTER 13
  // ========================================================
  if (chapter === 13) {
    // Model 1: ১৩.১ একটি পুকুরের আদর্শ বাস্তুতন্ত্রের ৩ডি উপাদান
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const waterBowl = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.2, 1.0, 24), skyMat); mGroup.add(waterBowl);
      const plant = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.8, 8), emeraldMat); plant.position.set(-0.6, 0.2, 0); mGroup.add(plant);
      const fish = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), goldMat); fish.scale.set(1.5, 0.6, 0.6); fish.position.set(0.6, 0.2, 0); mGroup.add(fish);

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
    // Model 2: ১৩.১ উৎপাদক — ফাইটোপ্লাংকটন ও জলজ উদ্ভিদ স্তর
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 7; i++) { const phyto = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35), emeraldMat); const th = i * Math.PI / 3.5; phyto.position.set(Math.cos(th)*1.1, Math.sin(th)*0.8, (i%2)*0.4); mGroup.add(phyto); }

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
    // Model 3: ১৩.১ প্রথম, দ্বিতীয় ও তৃতীয় স্তরের খাদক শৃঙ্খল
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const smallC = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), skyMat); smallC.position.x = -1.0; mGroup.add(smallC);
      const midC = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), amberMat); midC.position.x = 0; mGroup.add(midC);
      const topC = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), crimsonMat); topC.position.x = 1.0; mGroup.add(topC);

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
    // Model 4: ১৩.১ বিয়োজক — ব্যাকটেরিয়া ও ছত্রাকের হিউমাস রূপান্তর
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const soil = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.4, 24), darkMat); soil.position.y = -0.8; mGroup.add(soil);
      for (let i = 0; i < 8; i++) { const bac = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.15, 0.4, 8, 8) : new THREE.CylinderGeometry(0.15, 0.15, 0.4, 8), amberMat); const th = i * Math.PI / 4; bac.position.set(Math.cos(th)*1.0, -0.4, Math.sin(th)*1.0); mGroup.add(bac); }

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
    // Model 5: ১৩.১ পুকুরের গভীরতাভিত্তিক জোন — লিটোরাল ও প্রোফান্ডাল
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 3; i++) { const zone = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.6, 1.4), [skyMat, cyanMat, darkMat][i]); zone.position.y = 0.6 - i*0.65; mGroup.add(zone); }

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
    // Model 6: ১৩.২ তৃণভূমির চারণ খাদ্যশৃঙ্খল (Grazing Food Chain)
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const grass = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.2, 6), emeraldMat); grass.position.x = -1.2; mGroup.add(grass);
      const hopper = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 10), deepGreenMat); hopper.position.x = -0.4; mGroup.add(hopper);
      const frog = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), amberMat); frog.position.x = 0.4; mGroup.add(frog);
      const snake = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.15, 8, 20), crimsonMat); snake.position.x = 1.2; mGroup.add(snake);

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
    // Model 7: ১৩.২ মৃতজীবী খাদ্যশৃঙ্খল (Detritus Food Chain)
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const leafDead = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 1.2), amberMat); leafDead.position.x = -0.9; mGroup.add(leafDead);
      const worm = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.12, 8, 16), crimsonMat); worm.position.x = 0.1; mGroup.add(worm);
      const bird = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.9, 8), goldMat); bird.position.x = 1.1; mGroup.add(bird);

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
    // Model 8: ১৩.২ বাস্তুতান্ত্রিক জটিল খাদ্যজাল (Food Web)
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 6; i++) { const node = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), [emeraldMat, skyMat, amberMat, crimsonMat, purpleMat, goldMat][i]); const th = i * Math.PI / 3; node.position.set(Math.cos(th)*1.3, Math.sin(th)*1.3, 0); mGroup.add(node); }
      const webRing = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.05, 8, 32), whiteMat); mGroup.add(webRing);

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
    // Model 9: ১৩.৩ বাস্তুসংস্থানিক সংখ্যার পিরামিড (Pyramid of Numbers)
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 4; i++) { const tier = new THREE.Mesh(new THREE.CylinderGeometry(1.8 - i*0.45, 2.1 - i*0.45, 0.4, 4), [deepGreenMat, emeraldMat, amberMat, crimsonMat][i]); tier.position.y = -0.9 + i*0.55; mGroup.add(tier); }

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
    // Model 10: ১৩.৩ জৈবভরের পিরামিড ও লিন্ডেম্যানের ১০% শক্তির নীতি
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 4; i++) { const eTier = new THREE.Mesh(new THREE.BoxGeometry(2.4 - i*0.6, 0.35, 1.4 - i*0.35), goldMat); eTier.position.y = -0.8 + i*0.55; mGroup.add(eTier); }

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
    // Model 11: ১৩.৪ নাইট্রোজেন চক্র — সংবন্ধন, নাইট্রিফিকেশন ও ডিনাইট্রিফিকেশন
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const nRing = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.16, 16, 36), skyMat); mGroup.add(nRing);
      for (let i = 0; i < 3; i++) { const hub = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), [emeraldMat, amberMat, purpleMat][i]); const th = i * Math.PI * 2 / 3; hub.position.set(Math.cos(th)*1.4, Math.sin(th)*1.4, 0); mGroup.add(hub); }

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
    // Model 12: ১৩.৪ বায়ুমণ্ডলীয় কার্বন চক্র ও সালোকসংশ্লেষণ ভারসাম্য
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cGlobe = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), glassMat); mGroup.add(cGlobe);
      const co2Cloud = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), darkMat); co2Cloud.position.set(0, 1.3, 0); mGroup.add(co2Cloud);
      const forest = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.2, 8), emeraldMat); forest.position.set(0, -0.8, 0.8); mGroup.add(forest);

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
    // Model 13: ১৩.৪ পানি চক্র — বাষ্পীভবন, ঘনীভবন ও বৃষ্টিপাত
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ocean = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.3, 24), skyMat); ocean.position.y = -1.0; mGroup.add(ocean);
      const cloud = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), whiteMat); cloud.scale.set(1.4, 0.7, 0.8); cloud.position.y = 1.0; mGroup.add(cloud);
      for (let i = -1; i <= 1; i++) { const rain = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5, 6), skyMat); rain.position.set(i*0.4, 0.2, 0); mGroup.add(rain); }

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
    // Model 14: ১৩.৫ মিউচুয়ালিজম — মৌমাছি ও ফুলের পরাগায়ন বন্ধন
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const fl = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.2, 5), crimsonMat); fl.position.x = -0.7; mGroup.add(fl);
      const bee = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), goldMat); bee.scale.set(1.4, 0.8, 0.8); bee.position.set(0.7, 0.4, 0); mGroup.add(bee);

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
    // Model 15: ১৩.৫ কমেনসালিজম — অর্কিড এপিফাইট পরাশ্রয়ী উদ্ভিদ
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bough = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.6, 16), amberMat); bough.rotation.z = 1.2; mGroup.add(bough);
      const orchid = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.0, 5), purpleMat); orchid.position.set(0, 0.6, 0.3); mGroup.add(orchid);

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
    // Model 16: ১৩.৫ পরজীবিতা — স্বর্ণলতার চোষক অঙ্গ হস্টোরিয়া
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const hostStem = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 2.6, 16), deepGreenMat); mGroup.add(hostStem);
      const cuscuta = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.1, 12, 32, Math.PI*4), goldMat); mGroup.add(cuscuta);

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
    // Model 17: ১৩.৫ আন্তঃপ্রজাতি ও অন্তঃপ্রজাতি খাদ্য-বাসস্থান প্রতিযোগিতা
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const res = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.3, 16), goldMat); mGroup.add(res);
      const sp1 = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 12), crimsonMat); sp1.position.x = -1.1; mGroup.add(sp1);
      const sp2 = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 12), skyMat); sp2.position.x = 1.1; mGroup.add(sp2);

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
    // Model 18: ১৩.৬ সুন্দরবনের ম্যানগ্রোভ ইকোসিস্টেম ও শ্বাসমূল (নিউমাটোফোর)
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const waterPlate = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.25, 24), darkMat); waterPlate.position.y = -1.0; mGroup.add(waterPlate);
      for (let i = 0; i < 7; i++) { const pneu = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.5 + (i%3)*0.3, 8), amberMat); const th = i * Math.PI / 3.5; pneu.position.set(Math.cos(th)*1.0, 0, Math.sin(th)*1.0); mGroup.add(pneu); }

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
    // Model 19: ১৩.৬ জীববৈচিত্র্য বিলুপ্তি সংকট ও খাদ্যশৃঙ্খল বিপর্যয়
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const globeCrack = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), darkMat); mGroup.add(globeCrack);
      const redX = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.25, 0.3), redMat); redX.rotation.z = 0.78; mGroup.add(redX);
      const redX2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.25, 0.3), redMat); redX2.rotation.z = -0.78; mGroup.add(redX2);

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
    // Model 20: ১৩.৬ ইন-সিটু ও এক্স-সিটু জীববৈচিত্র্য সংরক্ষণ অভয়ারণ্য
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const dome = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 20, 0, Math.PI*2, 0, Math.PI*0.5), glassMat); mGroup.add(dome);
      const rarePlant = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 8), emeraldMat); rarePlant.position.y = 0.4; mGroup.add(rarePlant);

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
  // CHAPTER 14
  // ========================================================
  if (chapter === 14) {
    // Model 1: ১৪.১ জীবপ্রযুক্তির ধারণা, ইতিহাস ও আধুনিক পরিধি
    if (normId === 1) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bioHub = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 2), cyanMat); mGroup.add(bioHub);
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 12, 32), goldMat); mGroup.add(ring1);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 12, 32), redMat); ring2.rotation.x = Math.PI/2; mGroup.add(ring2);

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
    // Model 2: ১৪.২ উদ্ভিদের টোটিপোটেন্সি — একক কোষ থেকে পূর্ণ উদ্ভিদ
    if (normId === 2) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const singleCell = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), emeraldMat); singleCell.position.x = -1.1; mGroup.add(singleCell);
      const fullPlant = new THREE.Mesh(new THREE.ConeGeometry(0.65, 1.6, 8), deepGreenMat); fullPlant.position.x = 1.0; mGroup.add(fullPlant);
      const transArrow = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), goldMat); transArrow.rotation.z = -Math.PI/2; mGroup.add(transArrow);

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
    // Model 3: ১৪.২ টিস্যু কালচার ল্যাবরেটরি ও ল্যামিনার এয়ারফ্লো
    if (normId === 3) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const cabinet = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.8, 1.4), darkMat); mGroup.add(cabinet);
      const sash = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.4, 0.05), glassMat); sash.position.z = 0.7; mGroup.add(sash);
      const uvLight = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.0, 8), purpleMat); uvLight.position.set(0, 0.7, 0); uvLight.rotation.z = Math.PI/2; mGroup.add(uvLight);

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
    // Model 4: ১৪.২ এক্সপ্লান্ট নির্বাচন ও পুষ্টি মাধ্যম (MS Medium)
    if (normId === 4) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const flask = new THREE.Mesh(new THREE.ConeGeometry(1.1, 1.8, 16), glassMat); mGroup.add(flask);
      const medium = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.05, 0.5, 16), amberMat); medium.position.y = -0.65; mGroup.add(medium);
      const explant = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25), emeraldMat); explant.position.set(0, -0.35, 0); mGroup.add(explant);

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
    // Model 5: ১৪.২ অবয়বহীন ক্যালাস সৃষ্টি ও হরমোন দ্বারা বিভাজন
    if (normId === 5) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 14; i++) { const nodule = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 10), emeraldMat); const th = i * 0.8; nodule.position.set(Math.cos(th)*0.8, Math.sin(th)*0.7, (i%3)*0.4 - 0.4); mGroup.add(nodule); }

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
    // Model 6: ১৪.২ টেস্টটিউবে মূল ও কাণ্ড সৃষ্টি — প্লান্টলেট চারা
    if (normId === 6) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const testtube = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.6, 16), glassMat); mGroup.add(testtube);
      const agar = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.8, 16), amberMat); agar.position.y = -0.85; mGroup.add(agar);
      const shoot = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8), emeraldMat); shoot.position.y = 0.2; mGroup.add(shoot);
      const leafTip = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.5, 6), emeraldMat); leafTip.position.y = 0.9; mGroup.add(leafTip);

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
    // Model 7: ১৪.২ কাচের জার থেকে মাঠ পর্যায়ে হার্ডেনিং অভিযোজন
    if (normId === 7) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 0.9, 16), amberMat); pot.position.y = -0.7; mGroup.add(pot);
      const plant = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.4, 8), emeraldMat); plant.position.y = 0.4; mGroup.add(plant);
      const jarCover = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.0, 16), glassMat); jarCover.position.y = 0.2; mGroup.add(jarCover);

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
    // Model 8: ১৪.৩ রিকম্বিন্যান্ট ডিএনএ প্রযুক্তি — জেনেটিক ইঞ্জিনিয়ারিং
    if (normId === 8) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const donorDNA = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.6, 8), redMat); donorDNA.position.x = -1.0; mGroup.add(donorDNA);
      const plasmidV = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.16, 12, 24), skyMat); plasmidV.position.x = 0.7; mGroup.add(plasmidV);
      const ligaseLink = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 10), goldMat); ligaseLink.position.set(0.7, 0.8, 0); mGroup.add(ligaseLink);

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
    // Model 9: ১৪.৪ ব্যাকটেরিয়াল প্লাজমিড pBR322 জিন প্রকৌশল ভেক্টর
    if (normId === 9) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const plasmidRing = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.18, 16, 48), skyMat); mGroup.add(plasmidRing);
      const oriSite = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.24, 16, 16, Math.PI*0.3), goldMat); mGroup.add(oriSite);
      const ampR = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.24, 16, 16, Math.PI*0.4), redMat); ampR.rotation.z = Math.PI*0.8; mGroup.add(ampR);
      const mcsSite = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), emeraldMat); mcsSite.position.set(1.4, 0, 0); mGroup.add(mcsSite);

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
    // Model 10: ১৪.৪ রেস্ট্রিকশন এনজাইম — আণবিক কাঁচি (EcoRI কাটিং)
    if (normId === 10) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const dnaStrand = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.8, 12), skyMat); dnaStrand.rotation.z = Math.PI/2; mGroup.add(dnaStrand);
      const scissorL = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.0, 8), goldMat); scissorL.position.set(0, 0.6, 0); scissorL.rotation.z = 0.4; mGroup.add(scissorL);
      const scissorR = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.0, 8), goldMat); scissorR.position.set(0, -0.6, 0); scissorR.rotation.z = -0.4; mGroup.add(scissorR);

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
    // Model 11: ১৪.৪ স্টিকি এন্ড তৈরি ও পরিপূরক ক্ষারক জোড় বন্ধন
    if (normId === 11) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const strandL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 0.2), skyMat); strandL.position.set(-0.7, 0.2, 0); mGroup.add(strandL);
      const overhang = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.2), redMat); overhang.position.set(0, 0.2, 0); mGroup.add(overhang);
      const strandR = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 0.2), skyMat); strandR.position.set(0.7, -0.2, 0); mGroup.add(strandR);

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
    // Model 12: ১৪.৪ ডিএনএ লাইগেজ এনজাইম — আণবিক আঠা সংযোগ
    if (normId === 12) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const dna1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 8), skyMat); dna1.position.x = -0.8; dna1.rotation.z = Math.PI/2; mGroup.add(dna1);
      const dna2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 8), redMat); dna2.position.x = 0.8; dna2.rotation.z = Math.PI/2; mGroup.add(dna2);
      const ligaseClamp = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.22, 12, 24), goldMat); mGroup.add(ligaseClamp);

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
    // Model 13: ১৪.৪ রিকম্বিন্যান্ট প্লাজমিড গ্রাহক ব্যাকটেরিয়ায় রূপান্তর
    if (normId === 13) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bact = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.7, 1.6, 16, 16) : new THREE.CylinderGeometry(0.7, 0.7, 1.6, 16), cyanMat); mGroup.add(bact);
      const plasmidIn = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.08, 8, 16), redMat); plasmidIn.position.set(0.8, 0.5, 0); mGroup.add(plasmidIn);
      const caIons = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), goldMat); caIons.position.set(0.6, 0.2, 0); mGroup.add(caIons);

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
    // Model 14: ১৪.৪ ট্রান্সজেনিক ব্যাকটেরিয়ার ফার্মেন্টার ক্লোনিং
    if (normId === 14) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const vat = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 2.4, 24), skyMat); mGroup.add(vat);
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.6, 12), darkMat); mGroup.add(shaft);
      for (let i = -1; i <= 1; i++) { const impeller = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 0.3), goldMat); impeller.position.y = i*0.6; mGroup.add(impeller); }

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
    // Model 15: ১৪.৫ রিকম্বিন্যান্ট মানব ইনসুলিন (Humulin) উৎপাদন
    if (normId === 15) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const aChain = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.8, 8), skyMat); aChain.position.y = 0.4; aChain.rotation.z = Math.PI/2; mGroup.add(aChain);
      const bChain = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 8), redMat); bChain.position.y = -0.4; bChain.rotation.z = Math.PI/2; mGroup.add(bChain);
      for (let i = -1; i <= 1; i += 2) { const disulf = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.8, 6), goldMat); disulf.position.x = i*0.5; mGroup.add(disulf); }

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
    // Model 16: ১৪.৫ জেনেটিক্যালি মডিফাইড (GM) বিটি (Bt) বেগুন
    if (normId === 16) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const brinjal = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 20), purpleMat); brinjal.scale.set(0.8, 1.4, 0.8); mGroup.add(brinjal);
      const btCryst = new THREE.Mesh(new THREE.OctahedronGeometry(0.4), goldMat); btCryst.position.set(0, 0, 0.75); mGroup.add(btCryst);

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
    // Model 17: ১৪.৫ গোল্ডেন রাইস — বিটা-ক্যারোটিন (ভিটামিন এ) সমৃদ্ধ ধান
    if (normId === 17) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      for (let i = 0; i < 4; i++) { const grain = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.25, 0.9, 12, 12) : new THREE.CylinderGeometry(0.25, 0.25, 0.9, 12), goldMat); grain.position.set((i%2)*0.6 - 0.3, (i>1?0.5:-0.5), 0); grain.rotation.z = 0.3; mGroup.add(grain); }

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
    // Model 18: ১৪.৫ খরা ও লবণাক্ততা সহনশীল ট্রান্সজেনিক ধান ফসল
    if (normId === 18) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const ricePlant = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.0, 8), emeraldMat); mGroup.add(ricePlant);
      const saltCrystal = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), whiteMat); saltCrystal.position.set(0.7, -0.6, 0); mGroup.add(saltCrystal);

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
    // Model 19: ১৪.৬ ইন্টারফেরন ও রিকম্বিন্যান্ট ভ্যাকসিন উৎপাদন
    if (normId === 19) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const virVesicle = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 1), skyMat); mGroup.add(virVesicle);
      for (let i = 0; i < 6; i++) { const spike = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), redMat); const th = i * Math.PI / 3; spike.position.set(Math.cos(th)*1.2, Math.sin(th)*1.2, 0); mGroup.add(spike); }

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
    // Model 20: ১৪.৭ জীবপ্রযুক্তির বায়ো-সেফটি ও আন্তর্জাতিক নৈতিকতা
    if (normId === 20) {
      const mGroup = new THREE.Group();
      group.add(mGroup);
      refs.bioMainMesh = mGroup;

      const bioShield = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 0.9, 1.6, 6), emeraldMat); mGroup.add(bioShield);
      const dnaGlow = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.14, 12, 24), goldMat); dnaGlow.position.z = 0.35; mGroup.add(dnaGlow);

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