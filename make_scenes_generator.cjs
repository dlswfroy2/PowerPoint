const fs = require('fs');

// Function to generate builder file for a range of chapters
function generateScenesFile(startCh, endCh, filename) {
  let code = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';
import { BIOLOGY_3D_CATALOG } from '../data/biology3DModelsCatalog';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

export function buildBiologyCh${startCh}to${endCh}Scene(
  modelId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  const normId = Math.max(1, Math.min(20, modelId));
  const models = BIOLOGY_3D_CATALOG[chapter] || [];
  const meta = models[normId - 1] || models[0];

  // Colors palette based on chapter & model index
  const emeraldMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.35, metalness: 0.1 });
  const deepGreenMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.4 });
  const cyanMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.3, metalness: 0.2 });
  const skyMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.25, transparent: true, opacity: 0.85 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 });
  const crimsonMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.3 });
  const amberMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.35 });
  const purpleMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.3, roughness: 0.2 });
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.45, roughness: 0.1 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });

  // Chapter specific custom constructions
`;

  for (let ch = startCh; ch <= endCh; ch++) {
    code += `  if (chapter === ${ch}) {\n`;
    for (let m = 1; m <= 20; m++) {
      code += `    if (normId === ${m}) {\n`;
      code += `      // Ch ${ch} Model ${m}\n`;
      
      // Determine geometry variety based on ch and m
      const seed = (ch * 23 + m * 17) % 7;
      if (seed === 0) {
        // Torus + Core Spheres (Ring structure / Circular / Membrane / Valve / Enzyme)
        code += `      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.4, 24, 64), emeraldMat);\n`;
        code += `      group.add(ring);\n`;
        code += `      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 2), purpleMat);\n`;
        code += `      group.add(core);\n`;
        code += `      for (let i = 0; i < 6; i++) {\n`;
        code += `        const ang = (i / 6) * Math.PI * 2;\n`;
        code += `        const bead = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), goldMat);\n`;
        code += `        bead.position.set(Math.cos(ang) * 2.2, Math.sin(ang) * 2.2, 0);\n`;
        code += `        group.add(bead);\n`;
        code += `      }\n`;
        code += `      refs.bioMainMesh = ring;\n`;
        code += `      refs.bioCoreMesh = core;\n`;
      } else if (seed === 1) {
        // Double Cylinder / Vessel / Pipeline / Branch
        code += `      const cyl1 = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 4.2, 32), skyMat);\n`;
        code += `      cyl1.position.x = -1.0;\n`;
        code += `      group.add(cyl1);\n`;
        code += `      const cyl2 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 4.2, 32), redMat);\n`;
        code += `      cyl2.position.x = 1.0;\n`;
        code += `      group.add(cyl2);\n`;
        code += `      const connector = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.2, 16, 32, Math.PI), amberMat);\n`;
        code += `      connector.position.y = 1.8;\n`;
        code += `      group.add(connector);\n`;
        code += `      refs.bioMainMesh = cyl1;\n`;
        code += `      refs.bioCoreMesh = cyl2;\n`;
      } else if (seed === 2) {
        // Helix / Spiral / Nucleotide / Chain
        code += `      const helixGroup = new THREE.Group();\n`;
        code += `      for (let i = 0; i < 20; i++) {\n`;
        code += `        const t = (i / 20) * Math.PI * 4;\n`;
        code += `        const y = (i - 10) * 0.22;\n`;
        code += `        const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), cyanMat);\n`;
        code += `        s1.position.set(Math.cos(t) * 1.5, y, Math.sin(t) * 1.5);\n`;
        code += `        helixGroup.add(s1);\n`;
        code += `        const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), redMat);\n`;
        code += `        s2.position.set(Math.cos(t + Math.PI) * 1.5, y, Math.sin(t + Math.PI) * 1.5);\n`;
        code += `        helixGroup.add(s2);\n`;
        code += `        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.0), goldMat);\n`;
        code += `        bar.position.set(0, y, 0);\n`;
        code += `        bar.rotation.z = Math.PI / 2;\n`;
        code += `        bar.rotation.y = -t;\n`;
        code += `        helixGroup.add(bar);\n`;
        code += `      }\n`;
        code += `      group.add(helixGroup);\n`;
        code += `      refs.bioMainMesh = helixGroup;\n`;
      } else if (seed === 3) {
        // Multi-chambered Organ / Complex Cell / Lobes
        code += `      const mainLobe = new THREE.Mesh(new THREE.DodecahedronGeometry(1.6, 1), crimsonMat);\n`;
        code += `      group.add(mainLobe);\n`;
        code += `      const subLobe = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 1), amberMat);\n`;
        code += `      subLobe.position.set(1.4, -0.6, 0.4);\n`;
        code += `      group.add(subLobe);\n`;
        code += `      const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.2, 2.5, 16), skyMat);\n`;
        code += `      duct.position.set(-1.2, 1.2, 0);\n`;
        code += `      duct.rotation.z = -Math.PI / 4;\n`;
        code += `      group.add(duct);\n`;
        code += `      refs.bioMainMesh = mainLobe;\n`;
        code += `      refs.bioCoreMesh = subLobe;\n`;
      } else if (seed === 4) {
        // Multi-layered Capsule / Membrane / Wall
        code += `      const outerMesh = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.6, 2.0), glassMat);\n`;
        code += `      group.add(outerMesh);\n`;
        code += `      const innerMesh = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.2, 1.6), emeraldMat);\n`;
        code += `      group.add(innerMesh);\n`;
        code += `      const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.8, 24, 24), purpleMat);\n`;
        code += `      nuc.position.set(0.6, 0.2, 0);\n`;
        code += `      group.add(nuc);\n`;
        code += `      refs.bioMainMesh = outerMesh;\n`;
        code += `      refs.bioCoreMesh = nuc;\n`;
      } else if (seed === 5) {
        // Star / Neuron / Spindle / Centrosome / Ray architecture
        code += `      const center = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 2), purpleMat);\n`;
        code += `      group.add(center);\n`;
        code += `      for (let i = 0; i < 8; i++) {\n`;
        code += `        const phi = (i / 8) * Math.PI * 2;\n`;
        code += `        const ray = new THREE.Mesh(new THREE.ConeGeometry(0.2, 2.4, 16), skyMat);\n`;
        code += `        ray.position.set(Math.cos(phi) * 1.6, Math.sin(phi) * 1.6, 0);\n`;
        code += `        ray.rotation.z = phi - Math.PI / 2;\n`;
        code += `        group.add(ray);\n`;
        code += `      }\n`;
        code += `      refs.bioMainMesh = center;\n`;
      } else {
        // Cluster / Colony / Alveoli / Granules / Follicles
        code += `      const cluster = new THREE.Group();\n`;
        code += `      for (let i = 0; i < 9; i++) {\n`;
        code += `        const sp = new THREE.Mesh(new THREE.SphereGeometry(0.65, 20, 20), (i % 2 === 0 ? crimsonMat : skyMat));\n`;
        code += `        sp.position.set(\n`;
        code += `          (Math.random() - 0.5) * 2.5,\n`;
        code += `          (Math.random() - 0.5) * 2.5,\n`;
        code += `          (Math.random() - 0.5) * 1.5\n`;
        code += `        );\n`;
        code += `        cluster.add(sp);\n`;
        code += `      }\n`;
        code += `      group.add(cluster);\n`;
        code += `      refs.bioMainMesh = cluster;\n`;
      }

      // Add Billboard Pin Labels
      code += `      if (meta && meta.labels && meta.labels.length > 0) {\n`;
      code += `        const posList = [{x: 0, y: 1.6, z: 0}, {x: -1.6, y: -0.8, z: 0.5}, {x: 1.6, y: -0.8, z: -0.5}];\n`;
      code += `        meta.labels.forEach((lbl, lIdx) => {\n`;
      code += `          const p = posList[lIdx] || { x: 0, y: 0, z: 0 };\n`;
      code += `          const anchorObj = new THREE.Object3D();\n`;
      code += `          anchorObj.position.set(p.x, p.y, p.z);\n`;
      code += `          group.add(anchorObj);\n`;
      code += `          addAnchor(anchorObj, lbl.bn, lbl.en, lbl.sym, lbl.color);\n`;
      code += `        });\n`;
      code += `      }\n`;
      code += `      return;\n`;
      code += `    }\n`;
    }
    code += `  }\n`;
  }

  code += `}\n\n`;

  // Real-time animation physics update
  code += `export function updateBiologyCh${startCh}to${endCh}Physics(\n`;
  code += `  modelId: number,\n`;
  code += `  time: number,\n`;
  code += `  refs: any,\n`;
  code += `  chapter: number\n`;
  code += `) {\n`;
  code += `  if (refs.bioMainMesh) {\n`;
  code += `    refs.bioMainMesh.rotation.y = time * 0.4;\n`;
  code += `  }\n`;
  code += `  if (refs.bioCoreMesh) {\n`;
  code += `    const scale = 1.0 + Math.sin(time * 2.0) * 0.05;\n`;
  code += `    refs.bioCoreMesh.scale.set(scale, scale, scale);\n`;
  code += `  }\n`;
  code += `}\n`;

  fs.writeFileSync(filename, code, 'utf8');
  console.log('Successfully written:', filename);
}

generateScenesFile(1, 5, '/app/applet/src/components/ThreeDBiologyCh1to5Scenes.ts');
generateScenesFile(6, 10, '/app/applet/src/components/ThreeDBiologyCh6to10Scenes.ts');
generateScenesFile(11, 14, '/app/applet/src/components/ThreeDBiologyCh11to14Scenes.ts');
