import json, os, re

with open('biology_catalog.json', 'r', encoding='utf-8') as f:
    catalog = json.load(f)

# Helper to generate TS code for a single chapter's 20 models
def generate_chapter_code(ch_num):
    models = catalog.get(str(ch_num), [])
    lines = []
    lines.append(f"  // ========================================================")
    lines.append(f"  // CHAPTER {ch_num}")
    lines.append(f"  // ========================================================")
    lines.append(f"  if (chapter === {ch_num}) {{")

    for m in models:
        mid = m["id"]
        title_bn = m.get("titleBn", "").replace('"', '\\"')
        title_en = m.get("titleEn", "").replace('"', '\\"')
        topic_ref = m.get("topicRef", "")
        labels = m.get("labels", [])
        
        lines.append(f"    // Model {mid}: {topic_ref} {title_bn}")
        lines.append(f"    if (normId === {mid}) {{")
        lines.append(f"      const mGroup = new THREE.Group();")
        lines.append(f"      group.add(mGroup);")
        lines.append(f"      refs.bioMainMesh = mGroup;")
        lines.append(f"")
        
        # Build topic-specific 3D geometries based on chapter and model ID
        geoms = generate_geometry_code(ch_num, mid, title_en)
        for g in geoms:
            lines.append(f"      {g}")
            
        lines.append(f"")
        lines.append(f"      // Anchors for Model {mid}")
        lines.append(f"      if (meta && meta.labels && meta.labels.length > 0) {{")
        lines.append(f"        const anchorPos = [")
        lines.append(f"          {{ x: 0, y: 1.8, z: 0.2 }},")
        lines.append(f"          {{ x: -1.8, y: -0.6, z: 0.6 }},")
        lines.append(f"          {{ x: 1.8, y: -0.6, z: -0.6 }}")
        lines.append(f"        ];")
        lines.append(f"        meta.labels.forEach((lbl, lIdx) => {{")
        lines.append(f"          const p = anchorPos[lIdx] || {{ x: 0, y: 0, z: 0 }};")
        lines.append(f"          const aObj = new THREE.Object3D();")
        lines.append(f"          aObj.position.set(p.x, p.y, p.z);")
        lines.append(f"          group.add(aObj);")
        lines.append(f"          addAnchor(aObj, lbl.bn, lbl.en, lbl.sym, lbl.color);")
        lines.append(f"        }});")
        lines.append(f"      }}")
        lines.append(f"      return;")
        lines.append(f"    }}")

    lines.append(f"  }}")
    return "\n".join(lines)

def generate_geometry_code(ch, mid, title_en):
    g = []
    # Palette of materials available in the function scope:
    # skyMat, emeraldMat, deepGreenMat, cyanMat, redMat, crimsonMat, amberMat, purpleMat, goldMat, whiteMat, darkMat, boneMat, glassMat
    
    # We will generate specific, highly distinguishable 3D meshes for every single model:
    title_lower = title_en.lower()
    
    # ------------------ CHAPTER 1 ------------------
    if ch == 1:
        if mid == 1: # Scope & Protoplasm
            g.append("const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 2), emeraldMat); mGroup.add(core);")
            g.append("const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), purpleMat); core.add(nuc);")
            g.append("const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.08, 16, 48), skyMat); ring.rotation.x = 1.2; mGroup.add(ring);")
            g.append("for (let i = 0; i < 8; i++) { const orb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), goldMat); const ang = i * Math.PI / 4; orb.position.set(Math.cos(ang)*1.8, Math.sin(ang)*0.4, Math.sin(ang)*1.8); mGroup.add(orb); }")
        elif mid == 2: # Branches of Biology
            g.append("const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 2.5, 16), amberMat); trunk.position.y = -0.5; mGroup.add(trunk);")
            g.append("for (let i = 0; i < 5; i++) { const ang = i * Math.PI * 2 / 5; const b = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 1.6, 12), deepGreenMat); b.position.set(Math.cos(ang)*0.9, 0.6, Math.sin(ang)*0.9); b.rotation.z = Math.sin(ang)*0.6; b.rotation.x = Math.cos(ang)*0.6; mGroup.add(b); const tip = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), [emeraldMat, skyMat, purpleMat, goldMat, redMat][i]); tip.position.set(Math.cos(ang)*1.7, 1.4, Math.sin(ang)*1.7); mGroup.add(tip); }")
        elif mid == 3: # Biochemical Elements
            g.append("const centralC = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), darkMat); mGroup.add(centralC);")
            g.append("const bonds: [number, number, number, THREE.Material][] = [[1.2, 1.2, 1.2, whiteMat], [-1.2, -1.2, 1.2, redMat], [-1.2, 1.2, -1.2, skyMat], [1.2, -1.2, -1.2, purpleMat]];")
            g.append("bonds.forEach(([x, y, z, mat]) => { const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.5, 12), cyanMat); arm.position.set(x*0.5, y*0.5, z*0.5); arm.lookAt(x, y, z); arm.rotateX(Math.PI/2); mGroup.add(arm); const atom = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), mat); atom.position.set(x, y, z); mGroup.add(atom); });")
        elif mid == 4: # Five Kingdoms
            g.append("for (let i = 0; i < 5; i++) { const plat = new THREE.Mesh(new THREE.CylinderGeometry(2.2 - i*0.35, 2.4 - i*0.35, 0.35, 6), [darkMat, cyanMat, amberMat, emeraldMat, redMat][i]); plat.position.y = -1.2 + i * 0.6; mGroup.add(plat); const orb = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), goldMat); orb.position.set(1.4 - i*0.2, -1.0 + i*0.6, 0); mGroup.add(orb); }")
        elif mid == 5: # Monera Bacteria
            g.append("const bac = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.75, 2.0, 16, 16) : new THREE.CylinderGeometry(0.75, 0.75, 2.0, 16), cyanMat); bac.rotation.z = Math.PI/2.5; mGroup.add(bac);")
            g.append("const flag = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.08, 12, 32, Math.PI*1.5), goldMat); flag.position.set(-1.8, 0, 0); flag.rotation.y = 0.5; mGroup.add(flag);")
            g.append("for (let i = 0; i < 12; i++) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 8), whiteMat); const th = i * Math.PI / 6; p.position.set(Math.cos(th)*0.85, (i%3)*0.5 - 0.5, Math.sin(th)*0.85); p.rotation.z = Math.PI/2; mGroup.add(p); }")
        elif mid == 6: # Protista Amoeba
            g.append("const amoeba = new THREE.Mesh(new THREE.DodecahedronGeometry(1.4, 1), skyMat); mGroup.add(amoeba);")
            g.append("const vac = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), glassMat); vac.position.set(0.6, 0.5, 0.4); mGroup.add(vac);")
            g.append("for (let i = 0; i < 4; i++) { const pseudo = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 12), cyanMat); const a = i * Math.PI / 2; pseudo.position.set(Math.cos(a)*1.4, Math.sin(a)*1.1, 0); pseudo.rotation.z = a - Math.PI/2; mGroup.add(pseudo); }")
        elif mid == 7: # Fungi Mushroom
            g.append("const cap = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 16, 0, Math.PI*2, 0, Math.PI*0.48), amberMat); cap.position.y = 0.6; mGroup.add(cap);")
            g.append("const stipe = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.55, 2.2, 16), whiteMat); stipe.position.y = -0.5; mGroup.add(stipe);")
            g.append("const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.12, 12, 24), goldMat); ring.position.y = 0.2; ring.rotation.x = Math.PI/2; mGroup.add(ring);")
            g.append("const mycelium = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.06, 8, 32), whiteMat); mycelium.position.y = -1.6; mycelium.rotation.x = Math.PI/2; mGroup.add(mycelium);")
        elif mid == 8: # Plantae Chloroplasts
            g.append("for (let x = -1; x <= 1; x++) { for (let y = -1; y <= 1; y++) { const cell = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.5), emeraldMat); cell.position.set(x*1.05, y*0.85, 0); mGroup.add(cell); const chp = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), deepGreenMat); chp.position.set(x*1.05 + 0.15, y*0.85 + 0.1, 0.2); mGroup.add(chp); } }")
        elif mid == 9: # Animalia
            g.append("const torso = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.7, 1.6, 16, 16) : new THREE.CylinderGeometry(0.7, 0.7, 1.6, 16), crimsonMat); torso.position.y = -0.2; mGroup.add(torso);")
            g.append("const head = new THREE.Mesh(new THREE.SphereGeometry(0.65, 20, 20), amberMat); head.position.y = 1.2; mGroup.add(head);")
            g.append("for (let i = -1; i <= 1; i += 2) { const limb = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 1.6, 12), whiteMat); limb.position.set(i*1.1, -0.4, 0); limb.rotation.z = i*0.4; mGroup.add(limb); }")
        elif mid == 10: # Taxonomic Hierarchy
            g.append("for (let i = 0; i < 7; i++) { const rank = new THREE.Mesh(new THREE.CylinderGeometry(0.5 + i*0.28, 0.5 + (i+1)*0.28, 0.35, 7), [purpleMat, skyMat, cyanMat, emeraldMat, amberMat, redMat, goldMat][i]); rank.position.y = 1.2 - i*0.42; mGroup.add(rank); }")
        elif mid == 11: # Binomial Nomenclature
            g.append("const scroll = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.2, 32), goldMat); scroll.rotation.x = 1.1; mGroup.add(scroll);")
            g.append("const tag1 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 0.1), skyMat); tag1.position.set(0, 0.4, 0.3); mGroup.add(tag1);")
            g.append("const tag2 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 0.1), emeraldMat); tag2.position.set(0, -0.4, 0.3); mGroup.add(tag2);")
        elif mid == 12: # Aristotle Classification
            g.append("const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 24, 24), glassMat); mGroup.add(sphere);")
            g.append("const aqua = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.18, 12, 32), skyMat); aqua.rotation.x = Math.PI/2; mGroup.add(aqua);")
            g.append("const terra = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.18, 12, 32), emeraldMat); terra.rotation.y = Math.PI/2; mGroup.add(terra);")
            g.append("const aero = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.18, 12, 32), whiteMat); mGroup.add(aero);")
        elif mid == 13: # Carolus Linnaeus System
            g.append("const ped = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.5, 1.6), darkMat); ped.position.y = -1.2; mGroup.add(ped);")
            g.append("const book = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.6, 1.2), amberMat); book.position.y = -0.7; mGroup.add(book);")
            g.append("const fl = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.5, 8), redMat); fl.position.y = 0.5; fl.rotation.x = Math.PI; mGroup.add(fl);")
            g.append("const st = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.2, 12), emeraldMat); st.position.y = -0.1; mGroup.add(st);")
        elif mid == 14: # Applied Branches
            g.append("const cross1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 2.2, 0.4), redMat); mGroup.add(cross1);")
            g.append("const cross2 = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.6, 0.4), redMat); mGroup.add(cross2);")
            g.append("const outerRing = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.12, 16, 48), cyanMat); mGroup.add(outerRing);")
        elif mid == 15: # Biodiversity Bangladesh
            g.append("const land = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.0, 0.4, 32), deepGreenMat); land.position.y = -1.0; mGroup.add(land);")
            g.append("for (let i = 0; i < 4; i++) { const ang = i * Math.PI / 2; const tree = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.4, 8), emeraldMat); tree.position.set(Math.cos(ang)*1.1, 0.1, Math.sin(ang)*1.1); mGroup.add(tree); }")
            g.append("const water = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.1, 24), skyMat); water.position.set(0, -0.75, 0); mGroup.add(water);")
        elif mid == 16: # Cellular Organization
            g.append("const pro = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), cyanMat); pro.position.x = -1.2; mGroup.add(pro);")
            g.append("const euk = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), purpleMat); euk.position.x = 1.2; mGroup.add(euk);")
            g.append("const eukNuc = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), amberMat); eukNuc.position.x = 1.2; mGroup.add(eukNuc);")
        elif mid == 17: # Autotroph vs Heterotroph
            g.append("const sun = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), goldMat); sun.position.set(-1.4, 1.2, 0); mGroup.add(sun);")
            g.append("const leaf = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.2, 1.6), emeraldMat); leaf.position.set(-1.0, -0.4, 0); leaf.rotation.z = 0.3; mGroup.add(leaf);")
            g.append("const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.25, 12, 24, Math.PI), crimsonMat); mouth.position.set(1.4, 0, 0); mouth.rotation.z = -Math.PI/2; mGroup.add(mouth);")
        elif mid == 18: # Species Concept
            g.append("const pool = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.22, 16, 36), skyMat); pool.rotation.x = Math.PI/2.5; mGroup.add(pool);")
            g.append("for (let i = 0; i < 6; i++) { const sp = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), [redMat, emeraldMat, goldMat, purpleMat, cyanMat, whiteMat][i]); const th = i * Math.PI / 3; sp.position.set(Math.cos(th)*1.4, Math.sin(th)*0.4, Math.sin(th)*1.2); mGroup.add(sp); }")
        elif mid == 19: # Historical Milestones
            g.append("const spiral = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 16, 64, Math.PI*3), amberMat); mGroup.add(spiral);")
            g.append("for (let i = 0; i < 5; i++) { const node = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), [cyanMat, emeraldMat, goldMat, redMat, purpleMat][i]); const t = i * 0.8; node.position.set(Math.cos(t)*1.5, (i-2)*0.6, Math.sin(t)*1.5); mGroup.add(node); }")
        else: # Model 20: Board CQ Review
            g.append("const board = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.0, 0.15), darkMat); mGroup.add(board);")
            g.append("const border = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.2, 0.1), goldMat); border.position.z = -0.05; mGroup.add(border);")
            g.append("const medal = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 24), emeraldMat); medal.position.set(0, 0, 0.15); medal.rotation.x = Math.PI/2; mGroup.add(medal);")

    # ------------------ CHAPTER 2 ------------------
    elif ch == 2:
        if mid == 1: # Cell Wall
            g.append("for (let i = 0; i < 3; i++) { const wall = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.2, 0.25), [deepGreenMat, emeraldMat, amberMat][i]); wall.position.z = (i - 1) * 0.45; mGroup.add(wall); }")
            g.append("const pore = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.6, 16), skyMat); pore.rotation.x = Math.PI/2; mGroup.add(pore);")
        elif mid == 2: # Fluid Mosaic
            g.append("for (let x = -3; x <= 3; x++) { for (let z = -2; z <= 2; z++) { const h1 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), skyMat); h1.position.set(x*0.45, 0.65, z*0.45); mGroup.add(h1); const h2 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), skyMat); h2.position.set(x*0.45, -0.65, z*0.45); mGroup.add(h2); } }")
            g.append("const channel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.6, 16), purpleMat); channel.position.set(0, 0, 0); mGroup.add(channel);")
        elif mid == 3: # Protoplasm
            g.append("const cyto = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 24), glassMat); mGroup.add(cyto);")
            g.append("const core = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), purpleMat); mGroup.add(core);")
            g.append("for (let i = 0; i < 8; i++) { const g1 = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), goldMat); const th = i * Math.PI / 4; g1.position.set(Math.cos(th)*1.1, Math.sin(th)*0.9, (i%3)*0.4 - 0.4); mGroup.add(g1); }")
        elif mid == 4: # Nucleus
            g.append("const nucEnv = new THREE.Mesh(new THREE.SphereGeometry(1.5, 24, 24), purpleMat); mGroup.add(nucEnv);")
            g.append("const nucleolus = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); nucleolus.position.set(0.3, 0.2, 0.2); mGroup.add(nucleolus);")
            g.append("const chrom = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.08, 12, 32), skyMat); mGroup.add(chrom);")
        elif mid == 5: # Mitochondria
            g.append("const mito = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.8, 1.8, 16, 16) : new THREE.CylinderGeometry(0.8, 0.8, 1.8, 16), crimsonMat); mito.rotation.z = 1.1; mGroup.add(mito);")
            g.append("for (let i = -2; i <= 2; i++) { const crista = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.9, 0.7), amberMat); crista.position.set(i*0.4, 0, 0); crista.rotation.z = 0.3; mGroup.add(crista); }")
        elif mid == 6: # Chloroplast
            g.append("const chlo = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 16), deepGreenMat); chlo.scale.set(1.2, 0.7, 1.0); mGroup.add(chlo);")
            g.append("for (let col = -1; col <= 1; col++) { for (let d = -1; d <= 1; d++) { const granum = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.1, 16), emeraldMat); granum.position.set(col*0.8, d*0.25, 0); mGroup.add(granum); } }")
        elif mid == 7: # Chromoplast / Leucoplast
            g.append("const plastid = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 20), goldMat); mGroup.add(plastid);")
            g.append("for (let i = 0; i < 6; i++) { const crys = new THREE.Mesh(new THREE.OctahedronGeometry(0.35), redMat); const th = i * Math.PI / 3; crys.position.set(Math.cos(th)*0.8, Math.sin(th)*0.8, 0.2); mGroup.add(crys); }")
        elif mid == 8: # Endoplasmic Reticulum
            g.append("for (let i = -2; i <= 2; i++) { const sheet = new THREE.Mesh(new THREE.TorusGeometry(1.2 + i*0.25, 0.12, 8, 24, Math.PI*1.4), skyMat); sheet.position.y = i*0.25; sheet.rotation.x = 1.2; mGroup.add(sheet); }")
            g.append("for (let j = 0; j < 12; j++) { const ribo = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), amberMat); const a = j * Math.PI / 6; ribo.position.set(Math.cos(a)*1.3, 0.2, Math.sin(a)*1.3); mGroup.add(ribo); }")
        elif mid == 9: # Ribosomes
            g.append("const largeSub = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), purpleMat); largeSub.position.y = 0.5; mGroup.add(largeSub);")
            g.append("const smallSub = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), cyanMat); smallSub.position.y = -0.5; mGroup.add(smallSub);")
            g.append("const mrna = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.6, 12), goldMat); mrna.rotation.z = Math.PI/2; mGroup.add(mrna);")
        elif mid == 10: # Golgi Apparatus
            g.append("for (let i = -2; i <= 2; i++) { const cis = new THREE.Mesh(new THREE.CylinderGeometry(1.6 - Math.abs(i)*0.25, 1.6 - Math.abs(i)*0.25, 0.18, 16, 1, false, 0, Math.PI*1.1), amberMat); cis.position.set(0, i*0.4, 0); cis.rotation.x = 0.6; mGroup.add(cis); }")
            g.append("for (let k = 0; k < 5; k++) { const ves = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), goldMat); ves.position.set(1.4 + (k%2)*0.3, k*0.35 - 0.7, 0.3); mGroup.add(ves); }")
        elif mid == 11: # Lysosome
            g.append("const sac = new THREE.Mesh(new THREE.SphereGeometry(1.4, 24, 24), crimsonMat); mGroup.add(sac);")
            g.append("for (let i = 0; i < 10; i++) { const enz = new THREE.Mesh(new THREE.DodecahedronGeometry(0.2), goldMat); const th = i * 0.7; enz.position.set(Math.cos(th)*0.8, Math.sin(th)*0.8, (i%3)*0.4 - 0.4); mGroup.add(enz); }")
        elif mid == 12: # Centrosome & Centrioles
            g.append("const c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.4, 9), cyanMat); c1.position.set(-0.4, 0, 0); mGroup.add(c1);")
            g.append("const c2 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.4, 9), cyanMat); c2.position.set(0.4, 0, 0); c2.rotation.z = Math.PI/2; mGroup.add(c2);")
            g.append("const halo = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), glassMat); mGroup.add(halo);")
        elif mid == 13: # Cytoskeleton Microtubules
            g.append("for (let i = 0; i < 9; i++) { const ang = i * Math.PI * 2 / 9; const tub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.8, 12), skyMat); tub.position.set(Math.cos(ang)*0.75, 0, Math.sin(ang)*0.75); mGroup.add(tub); }")
        elif mid == 14: # Vacuole
            g.append("const vac = new THREE.Mesh(new THREE.SphereGeometry(1.5, 24, 24), glassMat); mGroup.add(vac);")
            g.append("const sap = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), skyMat); mGroup.add(sap);")
        elif mid == 15: # Parenchyma
            g.append("for (let i = 0; i < 6; i++) { const th = i * Math.PI / 3; const par = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.2, 6), emeraldMat); par.position.set(Math.cos(th)*1.0, 0, Math.sin(th)*1.0); mGroup.add(par); }")
            g.append("const cen = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.2, 6), emeraldMat); mGroup.add(cen);")
        elif mid == 16: # Collenchyma
            g.append("const col = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 1.6, 6), deepGreenMat); mGroup.add(col);")
            g.append("for (let i = 0; i < 6; i++) { const ang = i * Math.PI / 3; const bead = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.7, 8), amberMat); bead.position.set(Math.cos(ang)*0.95, 0, Math.sin(ang)*0.95); mGroup.add(bead); }")
        elif mid == 17: # Sclerenchyma
            g.append("const scl = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.4, 6), darkMat); mGroup.add(scl);")
            g.append("const lumen = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.5, 6), amberMat); mGroup.add(lumen);")
        elif mid == 18: # Xylem
            g.append("const vessel = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.6, 16, 1, true), amberMat); mGroup.add(vessel);")
            g.append("for (let i = -3; i <= 3; i++) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.08, 12, 24), redMat); ring.position.y = i*0.38; ring.rotation.x = Math.PI/2; mGroup.add(ring); }")
        elif mid == 19: # Phloem
            g.append("const sieve = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.6, 16), skyMat); mGroup.add(sieve);")
            g.append("const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.1, 16), darkMat); plate.position.y = 0; mGroup.add(plate);")
            g.append("const comp = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.6, 12), emeraldMat); comp.position.set(0.95, 0, 0); mGroup.add(comp);")
        else: # Model 20: Epithelial & Connective Tissues
            g.append("for (let r = 0; r < 3; r++) { for (let c = -1; c <= 1; c++) { const epi = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), crimsonMat); epi.position.set(c*0.9, 0.4 + r*0.4, 0); mGroup.add(epi); } }")
            g.append("const baseMem = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.2, 1.4), skyMat); baseMem.position.y = 0.1; mGroup.add(baseMem);")
            g.append("const conn = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.8, 1.4), amberMat); conn.position.y = -0.45; mGroup.add(conn);")

    # ------------------ CHAPTER 3 (Cell Division) ------------------
    elif ch == 3:
        if mid == 1: # Cell Cycle
            g.append("const dial = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.3, 16, 32), skyMat); mGroup.add(dial);")
            g.append("const g1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.4, 12), emeraldMat); g1.position.set(1.4, 0, 0); mGroup.add(g1);")
            g.append("const sPhase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.4, 12), redMat); sPhase.position.set(0, 1.4, 0); mGroup.add(sPhase);")
            g.append("const mPhase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.4, 12), goldMat); mPhase.position.set(-1.4, 0, 0); mGroup.add(mPhase);")
        elif mid == 2: # Amitosis
            g.append("const cell1 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), skyMat); cell1.position.x = -0.7; mGroup.add(cell1);")
            g.append("const cell2 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), skyMat); cell2.position.x = 0.7; mGroup.add(cell2);")
            g.append("const pinch = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.15, 12, 24), crimsonMat); pinch.rotation.y = Math.PI/2; mGroup.add(pinch);")
        elif mid == 3: # Interphase
            g.append("const cell = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 24), glassMat); mGroup.add(cell);")
            g.append("const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), purpleMat); mGroup.add(nuc);")
            g.append("const centrosome = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); centrosome.position.set(1.1, 0.8, 0); mGroup.add(centrosome);")
        elif mid == 4: # Early Prophase
            g.append("const cell = new THREE.Mesh(new THREE.SphereGeometry(1.6, 20, 20), glassMat); mGroup.add(cell);")
            g.append("for (let i = 0; i < 4; i++) { const chr = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.09, 8, 20), purpleMat); chr.position.set((i%2)*0.8 - 0.4, (i>1?0.4:-0.4), 0); chr.rotation.z = i*0.8; mGroup.add(chr); }")
        elif mid == 5: # Late Prophase
            g.append("const cell = new THREE.Mesh(new THREE.SphereGeometry(1.6, 20, 20), glassMat); mGroup.add(cell);")
            g.append("for (let i = 0; i < 4; i++) { const chrX = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.8, 0.15), redMat); chrX.position.set((i%2)*0.9 - 0.45, (i>1?0.5:-0.5), 0); chrX.rotation.z = 0.5; mGroup.add(chrX); const chrY = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.8, 0.15), skyMat); chrY.position.set((i%2)*0.9 - 0.45, (i>1?0.5:-0.5), 0); chrY.rotation.z = -0.5; mGroup.add(chrY); }")
        elif mid == 6: # Prometaphase
            g.append("const p1 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); p1.position.y = 1.6; mGroup.add(p1);")
            g.append("const p2 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); p2.position.y = -1.6; mGroup.add(p2);")
            g.append("for (let i = -2; i <= 2; i++) { const fiber = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.2, 8), cyanMat); fiber.position.x = i*0.45; fiber.rotation.z = i*0.1; mGroup.add(fiber); }")
        elif mid == 7: # Metaphase Equatorial Plate
            g.append("const spindle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.4, 8), cyanMat); mGroup.add(spindle);")
            g.append("const plate = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.08, 24), glassMat); mGroup.add(plate);")
            g.append("for (let i = -2; i <= 2; i++) { const chr = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.7, 0.25), purpleMat); chr.position.set(i*0.6, 0, 0); mGroup.add(chr); const cent = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), redMat); cent.position.set(i*0.6, 0, 0); mGroup.add(cent); }")
        elif mid == 8: # Early Anaphase
            g.append("for (let i = -1; i <= 1; i++) { const chTop = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), redMat); chTop.position.set(i*0.8, 0.8, 0); chTop.rotation.z = Math.PI; mGroup.add(chTop); const chBot = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), skyMat); chBot.position.set(i*0.8, -0.8, 0); mGroup.add(chBot); }")
        elif mid == 9: # Late Anaphase
            g.append("for (let i = -1; i <= 1; i++) { const chTop = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), redMat); chTop.position.set(i*0.8, 1.4, 0); chTop.rotation.z = Math.PI; mGroup.add(chTop); const chBot = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.7, 8), skyMat); chBot.position.set(i*0.8, -1.4, 0); mGroup.add(chBot); }")
        elif mid == 10: # Telophase
            g.append("const nuc1 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), glassMat); nuc1.position.y = 1.0; mGroup.add(nuc1);")
            g.append("const nuc2 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), glassMat); nuc2.position.y = -1.0; mGroup.add(nuc2);")
            g.append("const chr1 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), purpleMat); chr1.position.y = 1.0; mGroup.add(chr1);")
            g.append("const chr2 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), purpleMat); chr2.position.y = -1.0; mGroup.add(chr2);")
        elif mid == 11: # Cytokinesis Cell Plate (Plant)
            g.append("const pCell = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.0, 1.2), deepGreenMat); mGroup.add(pCell);")
            g.append("const cPlate = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.05, 1.25), goldMat); mGroup.add(cPlate);")
        elif mid == 12: # Cytokinesis Cleavage Furrow (Animal)
            g.append("const aCell1 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), crimsonMat); aCell1.position.x = -0.65; mGroup.add(aCell1);")
            g.append("const aCell2 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), crimsonMat); aCell2.position.x = 0.65; mGroup.add(aCell2);")
            g.append("const furrow = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.14, 12, 24), darkMat); furrow.rotation.y = Math.PI/2; mGroup.add(furrow);")
        elif mid == 13: # Significance of Mitosis
            g.append("for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), emeraldMat); c.position.set((i%2)*0.8 - 0.4, (i>1?0.4:-0.4), 0); mGroup.add(c); }")
            g.append("const ladder = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.4, 8), goldMat); ladder.position.set(-1.2, 0, 0); mGroup.add(ladder);")
        elif mid == 14: # Cancer Tumor
            g.append("const host = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.2, 1.2), skyMat); host.position.y = -0.6; mGroup.add(host);")
            g.append("for (let i = 0; i < 7; i++) { const tum = new THREE.Mesh(new THREE.SphereGeometry(0.35 + (i%3)*0.1, 10, 10), redMat); const th = i * Math.PI / 3.5; tum.position.set(Math.cos(th)*0.7, 0.5 + Math.sin(th)*0.4, 0); mGroup.add(tum); }")
        elif mid == 15: # Meiosis Leptotene / Zygotene
            g.append("const bouq = new THREE.Mesh(new THREE.SphereGeometry(1.4, 16, 16), glassMat); mGroup.add(bouq);")
            g.append("for (let i = 0; i < 4; i++) { const thread = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.06, 8, 24, Math.PI), i%2===0?redMat:skyMat); thread.rotation.z = i*0.8; mGroup.add(thread); }")
        elif mid == 16: # Meiosis Pachytene Crossing Over
            g.append("const ch1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12), redMat); ch1.position.x = -0.3; mGroup.add(ch1);")
            g.append("const ch2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12), skyMat); ch2.position.x = 0.3; mGroup.add(ch2);")
            g.append("const chiasma = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.2), goldMat); chiasma.rotation.z = 0.7; mGroup.add(chiasma);")
        elif mid == 17: # Meiosis Diplotene
            g.append("const ch1 = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.0, 12), redMat); ch1.position.x = -0.6; ch1.rotation.z = -0.2; mGroup.add(ch1);")
            g.append("const ch2 = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.0, 12), skyMat); ch2.position.x = 0.6; ch2.rotation.z = 0.2; mGroup.add(ch2);")
            g.append("const tipCross = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), goldMat); tipCross.position.set(0, 0.8, 0); mGroup.add(tipCross);")
        elif mid == 18: # Meiosis I Reduction
            g.append("const pCell1 = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), redMat); pCell1.position.x = -1.0; mGroup.add(pCell1);")
            g.append("const pCell2 = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), skyMat); pCell2.position.x = 1.0; mGroup.add(pCell2);")
        elif mid == 19: # Meiosis II Equational
            g.append("for (let i = 0; i < 4; i++) { const gamete = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 12), [redMat, skyMat, purpleMat, goldMat][i]); gamete.position.set((i%2)*1.2 - 0.6, (i>1?0.6:-0.6), 0); mGroup.add(gamete); }")
        else: # Model 20: CQ Review Mitosis vs Meiosis
            g.append("const stand1 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 1.4, 16), cyanMat); stand1.position.x = -1.0; mGroup.add(stand1);")
            g.append("const stand2 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 1.4, 16), purpleMat); stand2.position.x = 1.0; mGroup.add(stand2);")
            g.append("const balanceBar = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.15, 0.3), goldMat); balanceBar.position.y = 1.0; mGroup.add(balanceBar);")

    # ------------------ CHAPTER 4 (Bioenergetics) ------------------
    elif ch == 4:
        if mid == 1: # ATP Energy Currency
            g.append("const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.3), purpleMat); base.position.x = -1.3; mGroup.add(base);")
            g.append("const ribose = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.25, 5), skyMat); ribose.position.x = -0.5; mGroup.add(ribose);")
            g.append("for (let i = 0; i < 3; i++) { const phos = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), goldMat); phos.position.set(0.3 + i*0.65, 0, 0); mGroup.add(phos); const spark = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 6), redMat); spark.position.set(0.3 + i*0.65, 0.45, 0); mGroup.add(spark); }")
        elif mid == 2: # ADP-ATP Cycle
            g.append("const cycle = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.18, 16, 32), emeraldMat); mGroup.add(cycle);")
            g.append("const atp = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), goldMat); atp.position.set(0, 1.4, 0); mGroup.add(atp);")
            g.append("const adp = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), skyMat); adp.position.set(0, -1.4, 0); mGroup.add(adp);")
        elif mid == 3: # Chloroplast Thylakoids
            g.append("const env = new THREE.Mesh(new THREE.SphereGeometry(1.6, 20, 16), deepGreenMat); env.scale.set(1.2, 0.7, 1.0); mGroup.add(env);")
            g.append("for (let i = -1; i <= 1; i++) { for (let j = -2; j <= 2; j++) { const thy = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.08, 12), emeraldMat); thy.position.set(i*0.8, j*0.14, 0); mGroup.add(thy); } }")
        elif mid == 4: # Photosystem II & I
            g.append("const ps2 = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.9, 16), deepGreenMat); ps2.position.x = -1.0; mGroup.add(ps2);")
            g.append("const ps1 = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.9, 16), emeraldMat); ps1.position.x = 1.0; mGroup.add(ps1);")
            g.append("const etc = new THREE.Mesh(new THREE.TubeGeometry ? new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8) : new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8), goldMat); etc.rotation.z = Math.PI/2; mGroup.add(etc);")
        elif mid == 5: # Photolysis of Water
            g.append("const oxy = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), redMat); mGroup.add(oxy);")
            g.append("const h1 = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), whiteMat); h1.position.set(-0.7, 0.5, 0); mGroup.add(h1);")
            g.append("const h2 = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), whiteMat); h2.position.set(0.7, 0.5, 0); mGroup.add(h2);")
            g.append("const photon = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.8, 8), goldMat); photon.position.set(0, 1.4, 0); photon.rotation.z = Math.PI; mGroup.add(photon);")
        elif mid == 6: # Photophosphorylation ATP Synthase
            g.append("const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 12), cyanMat); mGroup.add(rotor);")
            g.append("const head = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), goldMat); head.position.y = 0.9; mGroup.add(head);")
            g.append("const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.4, 8), whiteMat); stalk.position.set(-0.6, 0.2, 0); mGroup.add(stalk);")
        elif mid == 7: # Calvin Cycle C3
            g.append("const ring = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.16, 16, 32), deepGreenMat); mGroup.add(ring);")
            g.append("const rubisco = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), goldMat); rubisco.position.set(0, 1.4, 0); mGroup.add(rubisco);")
            g.append("const pga = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), emeraldMat); pga.position.set(1.2, -0.6, 0); mGroup.add(pga);")
        elif mid == 8: # Hatch-Slack C4
            g.append("const meso = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.0, 0.8), emeraldMat); meso.position.x = -0.9; mGroup.add(meso);")
            g.append("const sheath = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.0, 0.8), deepGreenMat); sheath.position.x = 0.9; mGroup.add(sheath);")
            g.append("const plasmo = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.0, 8), goldMat); plasmo.rotation.z = Math.PI/2; mGroup.add(plasmo);")
        elif mid == 9: # Glycolysis
            g.append("const glucose = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.3, 6), skyMat); glucose.position.y = 1.0; mGroup.add(glucose);")
            g.append("const pyr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.25, 3), redMat); pyr1.position.set(-0.8, -0.8, 0); mGroup.add(pyr1);")
            g.append("const pyr2 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.25, 3), redMat); pyr2.position.set(0.8, -0.8, 0); mGroup.add(pyr2);")
        elif mid == 10: # Acetyl CoA
            g.append("const coa = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.7, 0.5), amberMat); mGroup.add(coa);")
            g.append("const acetyl = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), redMat); acetyl.position.x = 0.9; mGroup.add(acetyl);")
        elif mid == 11: # Citric Acid Krebs Cycle
            g.append("const krebs = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.18, 16, 36), redMat); mGroup.add(krebs);")
            g.append("for (let i = 0; i < 4; i++) { const knot = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), [goldMat, skyMat, amberMat, emeraldMat][i]); const th = i * Math.PI / 2; knot.position.set(Math.cos(th)*1.4, Math.sin(th)*1.4, 0); mGroup.add(knot); }")
        elif mid == 12: # Mitochondrial ETC
            g.append("for (let i = -1; i <= 1; i++) { const cplx = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.1, 12), [purpleMat, cyanMat, redMat][i+1]); cplx.position.set(i*0.9, 0, 0); mGroup.add(cplx); }")
            g.append("const atpS = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), goldMat); atpS.position.set(1.5, 0.5, 0); mGroup.add(atpS);")
        elif mid == 13: # ATP Balance Tally
            g.append("const scale = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.2, 12), whiteMat); mGroup.add(scale);")
            g.append("const bar = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.2), goldMat); bar.position.y = 0.9; mGroup.add(bar);")
            g.append("for (let i = 0; i < 6; i++) { const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 12), goldMat); coin.position.set(-0.8, i*0.12 - 0.2, 0); mGroup.add(coin); }")
        elif mid == 14: # Lactic Acid Fermentation
            g.append("const muscle = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.65, 1.8, 16, 16) : new THREE.CylinderGeometry(0.65, 0.65, 1.8, 16), crimsonMat); mGroup.add(muscle);")
            g.append("const lac = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4), amberMat); lac.position.set(0.9, 0, 0); mGroup.add(lac);")
        elif mid == 15: # Alcoholic Fermentation
            g.append("const flask = new THREE.Mesh(new THREE.ConeGeometry(1.2, 1.8, 16), glassMat); flask.position.y = -0.2; mGroup.add(flask);")
            g.append("const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.8, 16), glassMat); neck.position.y = 0.9; mGroup.add(neck);")
            g.append("const ethanol = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.1, 0.7, 16), amberMat); ethanol.position.y = -0.6; mGroup.add(ethanol);")
        elif mid == 16: # Limiting Factors
            g.append("const grid = new THREE.Mesh(new THREE.PlaneGeometry ? new THREE.PlaneGeometry(2.4, 2.0) : new THREE.BoxGeometry(2.4, 2.0, 0.05), darkMat); mGroup.add(grid);")
            g.append("for (let i = 0; i < 8; i++) { const pt = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), emeraldMat); pt.position.set((i/7)*2.0 - 1.0, Math.sin(i*0.4)*0.8 - 0.4, 0.1); mGroup.add(pt); }")
        elif mid == 17: # Respiratory Quotient (RQ)
            g.append("const tube1 = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 2.0, 16), glassMat); tube1.position.x = -0.6; mGroup.add(tube1);")
            g.append("const tube2 = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 2.0, 16), glassMat); tube2.position.x = 0.6; mGroup.add(tube2);")
            g.append("const manom = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.1, 8, 16, Math.PI), redMat); manom.position.y = -1.0; manom.rotation.z = Math.PI; mGroup.add(manom);")
        elif mid == 18: # Industrial Fermentation
            g.append("const vessel = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 2.2, 24), cyanMat); mGroup.add(vessel);")
            g.append("const pipe = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.08, 12, 24), goldMat); pipe.position.set(0.9, 0, 0); mGroup.add(pipe);")
            g.append("const gauge = new THREE.Mesh(new THREE.CircleGeometry ? new THREE.CircleGeometry(0.25, 16) : new THREE.CylinderGeometry(0.25, 0.25, 0.05, 16), whiteMat); gauge.position.set(0, 0.8, 0.92); mGroup.add(gauge);")
        elif mid == 19: # Energy Flow Biosphere
            g.append("for (let i = 0; i < 4; i++) { const pyr = new THREE.Mesh(new THREE.CylinderGeometry(1.6 - i*0.4, 1.8 - i*0.4, 0.35, 4), [emeraldMat, amberMat, redMat, goldMat][i]); pyr.position.y = -0.8 + i*0.5; mGroup.add(pyr); }")
        else: # Model 20: Board CQ Review
            g.append("const trophy = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.3, 1.4, 16), goldMat); trophy.position.y = 0.3; mGroup.add(trophy);")
            g.append("const baseT = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.4, 16), darkMat); baseT.position.y = -0.7; mGroup.add(baseT);")

    # ------------------ CHAPTER 5 (Nutrition & Digestion) ------------------
    elif ch == 5:
        if mid == 1: # Food Pyramid
            g.append("for (let i = 0; i < 4; i++) { const tier = new THREE.Mesh(new THREE.CylinderGeometry(2.0 - i*0.5, 2.3 - i*0.5, 0.4, 4), [amberMat, emeraldMat, crimsonMat, goldMat][i]); tier.position.y = -1.0 + i*0.6; mGroup.add(tier); }")
        elif mid == 2: # Carbs Starch
            g.append("for (let i = 0; i < 5; i++) { const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.15, 6), skyMat); const th = i * 0.7; ring.position.set(Math.cos(th)*1.2, Math.sin(th)*0.8, 0); mGroup.add(ring); }")
        elif mid == 3: # Proteins
            g.append("for (let i = 0; i < 8; i++) { const bead = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), [redMat, purpleMat, amberMat, cyanMat][i%4]); bead.position.set((i-3.5)*0.38, Math.sin(i*0.8)*0.5, 0); mGroup.add(bead); }")
        elif mid == 4: # Lipids Triglyceride
            g.append("const glyc = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.6, 12), goldMat); glyc.position.x = -0.8; mGroup.add(glyc);")
            g.append("for (let i = -1; i <= 1; i++) { const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8), amberMat); tail.position.set(0.2, i*0.5, 0); tail.rotation.z = Math.PI/2; mGroup.add(tail); }")
        elif mid == 5: # Vitamins
            g.append("for (let i = 0; i < 4; i++) { const pill = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.25, 0.6, 12, 12) : new THREE.CylinderGeometry(0.25, 0.25, 0.6, 12), [goldMat, emeraldMat, redMat, skyMat][i]); pill.position.set((i%2)*1.2 - 0.6, (i>1?0.6:-0.6), 0); pill.rotation.z = 0.5; mGroup.add(pill); }")
        elif mid == 6: # Minerals
            g.append("const lattice = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), glassMat); mGroup.add(lattice);")
            g.append("for (let x = -1; x <= 1; x += 2) { for (let y = -1; y <= 1; y += 2) { const ion = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), goldMat); ion.position.set(x*0.6, y*0.6, 0); mGroup.add(ion); } }")
        elif mid == 7: # Teeth Anatomy
            g.append("const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.8, 1.0, 16), whiteMat); crown.position.y = 0.5; mGroup.add(crown);")
            g.append("const root1 = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.2, 12), boneMat); root1.position.set(-0.3, -0.6, 0); root1.rotation.z = Math.PI; mGroup.add(root1);")
            g.append("const root2 = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.2, 12), boneMat); root2.position.set(0.3, -0.6, 0); root2.rotation.z = Math.PI; mGroup.add(root2);")
        elif mid == 8: # Salivary Glands
            g.append("for (let i = 0; i < 3; i++) { const gland = new THREE.Mesh(new THREE.DodecahedronGeometry(0.45), amberMat); gland.position.set([-0.9, 0.9, 0][i], [0.6, 0.6, -0.6][i], 0); mGroup.add(gland); }")
            g.append("const duct = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.08, 8, 24), skyMat); mGroup.add(duct);")
        elif mid == 9: # Esophagus Peristalsis
            g.append("const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.6, 16), crimsonMat); mGroup.add(tube);")
            g.append("const bolus = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), amberMat); bolus.position.y = 0.3; mGroup.add(bolus);")
        elif mid == 10: # Stomach J-Shape
            g.append("const stom = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.5, 16, 24, Math.PI*1.2), crimsonMat); stom.rotation.z = 0.8; mGroup.add(stom);")
            g.append("const rugae = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.1, 8, 16), amberMat); stom.add(rugae);")
        elif mid == 11: # Gastric Juice
            g.append("const drop = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.4, 16), skyMat); drop.rotation.x = Math.PI; mGroup.add(drop);")
            g.append("const halo = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), glassMat); halo.position.y = -0.7; mGroup.add(halo);")
        elif mid == 12: # Pancreas
            g.append("const panc = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.45, 1.8, 16, 16) : new THREE.CylinderGeometry(0.45, 0.45, 1.8, 16), amberMat); panc.rotation.z = 1.3; mGroup.add(panc);")
            g.append("const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 8), whiteMat); duct.rotation.z = 1.3; mGroup.add(duct);")
        elif mid == 13: # Liver & Gallbladder
            g.append("const rLobe = new THREE.Mesh(new THREE.ConeGeometry(1.4, 1.8, 16), crimsonMat); rLobe.position.x = -0.5; rLobe.rotation.z = 1.6; mGroup.add(rLobe);")
            g.append("const gall = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), emeraldMat); gall.position.set(0.4, -0.6, 0.4); mGroup.add(gall);")
        elif mid == 14: # Small Intestine Duodenum
            g.append("const loop = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.35, 16, 32, Math.PI*1.5), amberMat); mGroup.add(loop);")
        elif mid == 15: # Intestinal Villi
            g.append("for (let i = -2; i <= 2; i++) { const villus = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 1.8, 16), crimsonMat); villus.position.set(i*0.5, 0, 0); mGroup.add(villus); const lacteal = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 8), emeraldMat); lacteal.position.set(i*0.5, 0, 0.1); mGroup.add(lacteal); }")
        elif mid == 16: # Villi Absorption
            g.append("const villus = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.6, 1.6, 16, 16) : new THREE.CylinderGeometry(0.6, 0.6, 1.6, 16), crimsonMat); mGroup.add(villus);")
            g.append("for (let i = 0; i < 8; i++) { const part = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), goldMat); const th = i * Math.PI / 4; part.position.set(Math.cos(th)*0.9, Math.sin(th)*0.7, 0); mGroup.add(part); }")
        elif mid == 17: # Large Intestine Colon
            g.append("const colon = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.4, 12, 24, Math.PI*1.3), amberMat); colon.rotation.z = 0.5; mGroup.add(colon);")
            g.append("const app = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8), redMat); app.position.set(-1.4, -0.8, 0); mGroup.add(app);")
        elif mid == 18: # BMI Gauge
            g.append("const gauge = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.2, 16, 32, Math.PI), glassMat); gauge.rotation.z = Math.PI; mGroup.add(gauge);")
            g.append("const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.08, 1.3, 8), redMat); needle.position.set(0, -0.4, 0); needle.rotation.z = 0.5; mGroup.add(needle);")
        elif mid == 19: # Digestive Health
            g.append("const shield = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.8, 1.6, 6), emeraldMat); mGroup.add(shield);")
            g.append("const cross = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.0, 0.4), whiteMat); cross.position.z = 0.3; mGroup.add(cross);")
        else: # Model 20: CQ Review
            g.append("const plat = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.3, 1.8), darkMat); plat.position.y = -1.0; mGroup.add(plat);")
            g.append("const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.3, 1.2, 16), goldMat); cup.position.y = 0; mGroup.add(cup);")

    # ------------------ CHAPTER 6 (Transport in Organisms) ------------------
    elif ch == 6:
        if mid == 1: # Imbibition
            g.append("const seed = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 16), amberMat); mGroup.add(seed);")
            g.append("for (let i = 0; i < 6; i++) { const drop = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), skyMat); const th = i * Math.PI / 3; drop.position.set(Math.cos(th)*1.5, Math.sin(th)*1.5, 0); mGroup.add(drop); }")
        elif mid == 2: # Osmosis
            g.append("const utube = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.35, 16, 32, Math.PI), glassMat); utube.rotation.z = Math.PI; mGroup.add(utube);")
            g.append("const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.4, 16), glassMat); armL.position.set(-1.2, 0.7, 0); mGroup.add(armL);")
            g.append("const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.4, 16), glassMat); armR.position.set(1.2, 0.7, 0); mGroup.add(armR);")
            g.append("const memb = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.7, 0.7), redMat); memb.position.y = -1.2; mGroup.add(memb);")
        elif mid == 3: # Root Water Absorption
            g.append("const root = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 2.4, 16), amberMat); mGroup.add(root);")
            g.append("for (let i = -2; i <= 2; i++) { const hair = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 1.2, 8), whiteMat); hair.position.set(0.65, i*0.4, 0); hair.rotation.z = Math.PI/2.3; mGroup.add(hair); }")
        elif mid == 4: # Ion Absorption
            g.append("const memb = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.25, 1.2), emeraldMat); mGroup.add(memb);")
            g.append("const pump = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.6, 12), purpleMat); mGroup.add(pump);")
            g.append("for (let i = 0; i < 4; i++) { const ion = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), goldMat); ion.position.set((i-1.5)*0.7, 0.6, 0); mGroup.add(ion); }")
        elif mid == 5: # Transpiration Leaf
            g.append("const blade = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, 1.6), emeraldMat); mGroup.add(blade);")
            g.append("for (let i = 0; i < 5; i++) { const v = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 8), skyMat); v.position.set((i-2)*0.4, 0.4, (i%2)*0.4); mGroup.add(v); }")
        elif mid == 6: # Stomata Guard Cells
            g.append("const g1 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.28, 16, 24, Math.PI), emeraldMat); g1.position.x = -0.25; g1.rotation.z = Math.PI/2; mGroup.add(g1);")
            g.append("const g2 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.28, 16, 24, Math.PI), emeraldMat); g2.position.x = 0.25; g2.rotation.z = -Math.PI/2; mGroup.add(g2);")
            g.append("const pore = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), darkMat); mGroup.add(pore);")
        elif mid == 7: # Factors Transpiration
            g.append("const sun = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), goldMat); sun.position.set(-1.2, 1.1, 0); mGroup.add(sun);")
            g.append("const wind = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.08, 8, 20), skyMat); wind.position.set(1.2, 0.8, 0); mGroup.add(wind);")
            g.append("const leaf = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.15, 1.2), emeraldMat); leaf.position.y = -0.6; mGroup.add(leaf);")
        elif mid == 8: # Necessary Evil
            g.append("const scale = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.0, 12), whiteMat); mGroup.add(scale);")
            g.append("const pan1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.1, 16), emeraldMat); pan1.position.set(-0.9, -0.2, 0); mGroup.add(pan1);")
            g.append("const pan2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.1, 16), redMat); pan2.position.set(0.9, -0.2, 0); mGroup.add(pan2);")
        elif mid == 9: # Ascent of Sap
            g.append("const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.8, 16, 1, true), deepGreenMat); mGroup.add(stem);")
            g.append("for (let i = -3; i <= 3; i++) { const drop = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), skyMat); drop.position.set(0, i*0.4, 0); mGroup.add(drop); }")
        elif mid == 10: # Phloem Translocation
            g.append("const sieve = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 2.6, 16), emeraldMat); mGroup.add(sieve);")
            g.append("for (let i = 0; i < 6; i++) { const sugar = new THREE.Mesh(new THREE.DodecahedronGeometry(0.2), goldMat); sugar.position.set((i%2)*0.4 - 0.2, i*0.4 - 1.0, 0); mGroup.add(sugar); }")
        elif mid == 11: # Blood Plasma
            g.append("const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 2.2, 16), glassMat); mGroup.add(tube);")
            g.append("const plasma = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 1.2, 16), amberMat); plasma.position.y = 0.4; mGroup.add(plasma);")
            g.append("const rbcLayer = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.9, 16), crimsonMat); rbcLayer.position.y = -0.55; mGroup.add(rbcLayer);")
        elif mid == 12: # RBC Disc
            g.append("const rbc = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.45, 16, 32), crimsonMat); rbc.scale.set(1.0, 1.0, 0.4); mGroup.add(rbc);")
        elif mid == 13: # WBC Immunity
            g.append("const wbc = new THREE.Mesh(new THREE.DodecahedronGeometry(1.3, 1), whiteMat); mGroup.add(wbc);")
            g.append("for (let i = -1; i <= 1; i += 2) { const nucLobe = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), purpleMat); nucLobe.position.set(i*0.4, 0, 0); mGroup.add(nucLobe); }")
        elif mid == 14: # Blood Clotting Platelets
            g.append("for (let i = 0; i < 5; i++) { const fib = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 8), amberMat); fib.rotation.z = i*0.6; fib.rotation.x = i*0.4; mGroup.add(fib); }")
            g.append("const rbcTrap = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), crimsonMat); mGroup.add(rbcTrap);")
        elif mid == 15: # ABO Grouping
            g.append("const rbcCell = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), crimsonMat); mGroup.add(rbcCell);")
            g.append("for (let i = 0; i < 6; i++) { const ag = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.5, 8), goldMat); const th = i * Math.PI / 3; ag.position.set(Math.cos(th)*1.2, Math.sin(th)*1.2, 0); ag.rotation.z = th - Math.PI/2; mGroup.add(ag); }")
        elif mid == 16: # Rh Factor
            g.append("const rbcCell = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), crimsonMat); mGroup.add(rbcCell);")
            g.append("for (let i = 0; i < 4; i++) { const rh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), skyMat); const th = i * Math.PI / 2; rh.position.set(Math.cos(th)*1.2, Math.sin(th)*1.2, 0); mGroup.add(rh); }")
        elif mid == 17: # Heart External Anatomy
            g.append("const hBody = new THREE.Mesh(new THREE.SphereGeometry(1.3, 24, 24), crimsonMat); hBody.scale.set(1.0, 1.25, 0.9); mGroup.add(hBody);")
            g.append("const aorta = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.22, 12, 24, Math.PI), redMat); aorta.position.set(0, 1.3, 0); mGroup.add(aorta);")
        elif mid == 18: # Cardiac Cycle Chambers
            g.append("for (let x = -1; x <= 1; x += 2) { for (let y = -1; y <= 1; y += 2) { const ch = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), [crimsonMat, redMat, skyMat, cyanMat][(x>0?1:0) + (y>0?2:0)]); ch.position.set(x*0.7, y*0.65, 0); mGroup.add(ch); } }")
        elif mid == 19: # Blood Pressure Arteries
            g.append("const art = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 2.6, 16, 1, true), redMat); mGroup.add(art);")
            g.append("const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 1.2, 16), darkMat); cuff.position.y = 0.2; mGroup.add(cuff);")
        else: # Model 20: Heart Disease Stent
            g.append("const art = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.6, 16, 1, true), crimsonMat); mGroup.add(art);")
            g.append("const plaque = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.0, 16), amberMat); mGroup.add(plaque);")
            g.append("const stentMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.4, 16, 1, true), goldMat); mGroup.add(stentMesh);")

    # ------------------ CHAPTER 7 (Gaseous Exchange) ------------------
    elif ch == 7:
        if mid == 1: # Resp Tract Overview
            g.append("const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.8, 16), whiteMat); tr.position.y = 0.8; mGroup.add(tr);")
            g.append("const lungL = new THREE.Mesh(new THREE.ConeGeometry(0.85, 1.6, 16), crimsonMat); lungL.position.set(-0.85, -0.6, 0); mGroup.add(lungL);")
            g.append("const lungR = new THREE.Mesh(new THREE.ConeGeometry(0.85, 1.6, 16), crimsonMat); lungR.position.set(0.85, -0.6, 0); mGroup.add(lungR);")
        elif mid == 2: # Nasal Cavity
            g.append("const nose = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.6, 12), amberMat); nose.rotation.z = Math.PI; mGroup.add(nose);")
            g.append("for (let i = -1; i <= 1; i += 2) { const naris = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.6, 12), darkMat); naris.position.set(i*0.35, -0.7, 0); mGroup.add(naris); }")
        elif mid == 3: # Pharynx & Epiglottis
            g.append("const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.2, 16), crimsonMat); mGroup.add(tube);")
            g.append("const flap = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.15, 0.5), amberMat); flap.position.set(0, 0.4, 0.3); flap.rotation.x = 0.6; mGroup.add(flap);")
        elif mid == 4: # Larynx Vocal Cords
            g.append("const thyroid = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.85, 1.5, 6), skyMat); mGroup.add(thyroid);")
            g.append("for (let i = -1; i <= 1; i += 2) { const cord = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.7, 0.1), whiteMat); cord.position.set(i*0.25, 0, 0); mGroup.add(cord); }")
        elif mid == 5: # Trachea C-Rings
            g.append("const trachea = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.6, 16), crimsonMat); mGroup.add(trachea);")
            g.append("for (let i = -4; i <= 4; i++) { const cRing = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.08, 12, 24, Math.PI*1.5), whiteMat); cRing.position.y = i*0.28; cRing.rotation.x = Math.PI/2; mGroup.add(cRing); }")
        elif mid == 6: # Bronchial Tree
            g.append("const mainB = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.2, 12), whiteMat); mainB.position.y = 0.8; mGroup.add(mainB);")
            g.append("const bL = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 12), skyMat); bL.position.set(-0.6, -0.1, 0); bL.rotation.z = 0.6; mGroup.add(bL);")
            g.append("const bR = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.4, 12), skyMat); bR.position.set(0.6, -0.1, 0); bR.rotation.z = -0.6; mGroup.add(bR);")
            g.append("for (let i = 0; i < 4; i++) { const tipB = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 8), crimsonMat); tipB.position.set((i%2===0?-1:1)*1.0, -0.8, (i>1?0.3:-0.3)); mGroup.add(tipB); }")
        elif mid == 7: # Alveoli Cluster
            g.append("const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.4, 12), whiteMat); stem.position.y = 0.9; mGroup.add(stem);")
            g.append("for (let i = 0; i < 12; i++) { const alv = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 12), crimsonMat); const th = i * Math.PI / 6; alv.position.set(Math.cos(th)*0.85, Math.sin(th)*0.6 - 0.2, (i%3)*0.4 - 0.4); mGroup.add(alv); }")
        elif mid == 8: # Respiratory Membrane
            g.append("const alvWall = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 0.15), skyMat); alvWall.position.x = -0.4; mGroup.add(alvWall);")
            g.append("const capWall = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 0.15), crimsonMat); capWall.position.x = 0.4; mGroup.add(capWall);")
            g.append("const rbc = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16), redMat); rbc.position.set(0.4, 0, 0.2); rbc.rotation.x = Math.PI/2; mGroup.add(rbc);")
        elif mid == 9: # Inhalation Mechanism
            g.append("const cage = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.6, 2.2, 16, 1, true), skyMat); mGroup.add(cage);")
            g.append("const diaFlat = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.55, 0.15, 16), crimsonMat); diaFlat.position.y = -1.1; mGroup.add(diaFlat);")
        elif mid == 10: # Expiration Mechanism
            g.append("const cage = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.4, 2.0, 16, 1, true), darkMat); mGroup.add(cage);")
            g.append("const diaDome = new THREE.Mesh(new THREE.SphereGeometry(1.3, 16, 16, 0, Math.PI*2, 0, Math.PI*0.5), crimsonMat); diaDome.position.y = -0.8; mGroup.add(diaDome);")
        elif mid == 11: # Oxygen Transport Oxyhemoglobin
            g.append("const hemo = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 20), crimsonMat); mGroup.add(hemo);")
            g.append("for (let i = 0; i < 4; i++) { const fe = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), redMat); const th = i * Math.PI / 2; fe.position.set(Math.cos(th)*0.9, Math.sin(th)*0.9, 0); mGroup.add(fe); const o2 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), skyMat); o2.position.set(Math.cos(th)*1.35, Math.sin(th)*1.35, 0); mGroup.add(o2); }")
        elif mid == 12: # CO2 Transport Bicarbonate
            g.append("const bloodFlow = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.4, 16), glassMat); mGroup.add(bloodFlow);")
            g.append("for (let i = 0; i < 5; i++) { const hco3 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28), skyMat); hco3.position.set((i%2)*0.4 - 0.2, i*0.4 - 0.8, 0); mGroup.add(hco3); }")
        elif mid == 13: # Plant Stomata Gas
            g.append("const g1 = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.3, 16, 24, Math.PI), emeraldMat); g1.position.x = -0.3; g1.rotation.z = Math.PI/2; mGroup.add(g1);")
            g.append("const g2 = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.3, 16, 24, Math.PI), emeraldMat); g2.position.x = 0.3; g2.rotation.z = -Math.PI/2; mGroup.add(g2);")
        elif mid == 14: # Lenticel Woody Stem
            g.append("const bark = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.4, 16, 1, true), darkMat); mGroup.add(bark);")
            g.append("const lentPore = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.4), amberMat); lentPore.position.set(0, 0, 1.2); mGroup.add(lentPore);")
        elif mid == 15: # Day Night Gas Balance
            g.append("const sunLeaf = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.6, 0.1), emeraldMat); sunLeaf.position.x = -0.9; mGroup.add(sunLeaf);")
            g.append("const moonLeaf = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.6, 0.1), deepGreenMat); moonLeaf.position.x = 0.9; mGroup.add(moonLeaf);")
            g.append("const sunIcon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), goldMat); sunIcon.position.set(-0.9, 1.2, 0); mGroup.add(sunIcon);")
            g.append("const moonIcon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), whiteMat); moonIcon.position.set(0.9, 1.2, 0); mGroup.add(moonIcon);")
        elif mid == 16: # Bronchitis
            g.append("const bron = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 2.4, 16), crimsonMat); mGroup.add(bron);")
            g.append("const mucus = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.45, 16), amberMat); mGroup.add(mucus);")
        elif mid == 17: # Pneumonia Fluid Sacs
            g.append("const alv1 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), crimsonMat); alv1.position.x = -0.6; mGroup.add(alv1);")
            g.append("const alv2 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), crimsonMat); alv2.position.x = 0.6; mGroup.add(alv2);")
            g.append("const pus = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), amberMat); pus.position.set(0, -0.3, 0); mGroup.add(pus);")
        elif mid == 18: # Tuberculosis
            g.append("const lungTissue = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), crimsonMat); mGroup.add(lungTissue);")
            g.append("const tubercle = new THREE.Mesh(new THREE.DodecahedronGeometry(0.6), amberMat); tubercle.position.set(0.4, 0.3, 0.6); mGroup.add(tubercle);")
        elif mid == 19: # Lung Cancer Smoking
            g.append("const badLung = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), darkMat); mGroup.add(badLung);")
            g.append("const tumor = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), redMat); tumor.position.set(0.4, 0.3, 0.7); mGroup.add(tumor);")
        else: # Model 20: CQ Review
            g.append("const podium = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 0.6, 16), goldMat); podium.position.y = -0.8; mGroup.add(podium);")
            g.append("const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.8), redMat); star.position.y = 0.4; mGroup.add(star);")

    # ------------------ CHAPTER 8 (Excretion) ------------------
    elif ch == 8:
        if mid == 1: # Excretion Overview
            g.append("const orb = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), skyMat); mGroup.add(orb);")
            g.append("for (let i = 0; i < 6; i++) { const waste = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25), amberMat); const th = i * Math.PI / 3; waste.position.set(Math.cos(th)*1.6, Math.sin(th)*1.6, 0); mGroup.add(waste); }")
        elif mid == 2: # Urea Uric Acid
            g.append("const ureaCore = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), skyMat); mGroup.add(ureaCore);")
            g.append("for (let i = -1; i <= 1; i += 2) { const nh2 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), purpleMat); nh2.position.set(i*1.1, 0, 0); mGroup.add(nh2); }")
            g.append("const co = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), redMat); co.position.set(0, 0.9, 0); mGroup.add(co);")
        elif mid == 3: # Urinary System
            g.append("const kL = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); kL.scale.set(0.8, 1.3, 0.6); kL.position.set(-0.9, 0.5, 0); mGroup.add(kL);")
            g.append("const kR = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); kR.scale.set(0.8, 1.3, 0.6); kR.position.set(0.9, 0.5, 0); mGroup.add(kR);")
            g.append("const uL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8), amberMat); uL.position.set(-0.6, -0.4, 0); uL.rotation.z = -0.3; mGroup.add(uL);")
            g.append("const uR = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8), amberMat); uR.position.set(0.6, -0.4, 0); uR.rotation.z = 0.3; mGroup.add(uR);")
            g.append("const blad = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), goldMat); blad.position.y = -1.3; mGroup.add(blad);")
        elif mid == 4: # Kidney Longitudinal Section
            g.append("const bean = new THREE.Mesh(new THREE.SphereGeometry(1.4, 24, 24), crimsonMat); bean.scale.set(0.85, 1.4, 0.6); mGroup.add(bean);")
            g.append("const cortex = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), redMat); cortex.scale.set(0.75, 1.3, 0.5); bean.add(cortex);")
            g.append("const pelvis = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.0, 16), amberMat); pelvis.position.set(-0.3, 0, 0); pelvis.rotation.z = Math.PI/2; mGroup.add(pelvis);")
        elif mid == 5: # Hilum & Renal Vessels
            g.append("const kidney = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), crimsonMat); kidney.scale.set(0.8, 1.3, 0.6); kidney.position.x = 0.5; mGroup.add(kidney);")
            g.append("const rArt = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.4, 12), redMat); rArt.position.set(-0.6, 0.3, 0); rArt.rotation.z = Math.PI/2; mGroup.add(rArt);")
            g.append("const rVein = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.4, 12), skyMat); rVein.position.set(-0.6, -0.3, 0); rVein.rotation.z = Math.PI/2; mGroup.add(rVein);")
        elif mid == 6: # Complete Nephron Architecture
            g.append("const bowman = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), amberMat); bowman.position.set(-1.2, 1.1, 0); mGroup.add(bowman);")
            g.append("const pct = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.12, 8, 20), crimsonMat); pct.position.set(-0.4, 0.8, 0); mGroup.add(pct);")
            g.append("const henle = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.08, 8, 20, Math.PI), skyMat); henle.position.set(0, -0.6, 0); henle.rotation.z = Math.PI; mGroup.add(henle);")
            g.append("const dct = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.12, 8, 20), redMat); dct.position.set(0.6, 0.8, 0); mGroup.add(dct);")
            g.append("const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.6, 12), goldMat); duct.position.set(1.4, 0, 0); mGroup.add(duct);")
        elif mid == 7: # Bowman's Capsule & Podocytes
            g.append("const cup = new THREE.Mesh(new THREE.SphereGeometry(1.2, 24, 24, 0, Math.PI*2, 0, Math.PI*0.65), amberMat); cup.rotation.x = Math.PI; mGroup.add(cup);")
            g.append("const podo = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4), goldMat); podo.position.y = 0.2; mGroup.add(podo);")
        elif mid == 8: # Glomerulus Capillary Tuft
            g.append("const knot = new THREE.Mesh(new THREE.TorusKnotGeometry ? new THREE.TorusKnotGeometry(0.8, 0.25, 64, 16) : new THREE.SphereGeometry(0.9, 16, 16), redMat); mGroup.add(knot);")
            g.append("const aff = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.2, 12), redMat); aff.position.set(-1.2, 0.8, 0); aff.rotation.z = 0.6; mGroup.add(aff);")
            g.append("const eff = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 12), crimsonMat); eff.position.set(1.2, 0.8, 0); eff.rotation.z = -0.6; mGroup.add(eff);")
        elif mid == 9: # Ultrafiltration
            g.append("const sieve = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.2, 1.4), skyMat); mGroup.add(sieve);")
            g.append("for (let i = 0; i < 8; i++) { const drop = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), amberMat); drop.position.set((i%4)*0.6 - 0.9, -0.6, (i>3?0.3:-0.3)); mGroup.add(drop); }")
        elif mid == 10: # Loop of Henle Hairpin
            g.append("const loop = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.14, 12, 32, Math.PI), skyMat); loop.rotation.z = Math.PI; loop.position.y = -0.5; mGroup.add(loop);")
            g.append("const des = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.8, 12), skyMat); des.position.set(-0.8, 0.4, 0); mGroup.add(des);")
            g.append("const asc = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.8, 12), redMat); asc.position.set(0.8, 0.4, 0); mGroup.add(asc);")
        elif mid == 11: # Proximal / Distal Tubules
            g.append("const pctCoil = new THREE.Mesh(new THREE.TorusKnotGeometry ? new THREE.TorusKnotGeometry(0.7, 0.16, 48, 12) : new THREE.TorusGeometry(0.8, 0.2, 12, 24), crimsonMat); pctCoil.position.x = -0.8; mGroup.add(pctCoil);")
            g.append("const dctCoil = new THREE.Mesh(new THREE.TorusKnotGeometry ? new THREE.TorusKnotGeometry(0.7, 0.16, 48, 12) : new THREE.TorusGeometry(0.8, 0.2, 12, 24), redMat); dctCoil.position.x = 0.8; mGroup.add(dctCoil);")
        elif mid == 12: # Collecting Duct
            g.append("const mainDuct = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 2.8, 16), goldMat); mGroup.add(mainDuct);")
            g.append("for (let i = -2; i <= 2; i++) { const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 8), amberMat); branch.position.set(0.4, i*0.5, 0); branch.rotation.z = 0.6; mGroup.add(branch); }")
        elif mid == 13: # Urine Composition
            g.append("const flask = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.85, 2.0, 16), glassMat); mGroup.add(flask);")
            g.append("const urine = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 1.2, 16), amberMat); urine.position.y = -0.35; mGroup.add(urine);")
        elif mid == 14: # Ureter Peristalsis
            g.append("const ureter = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.6, 16), crimsonMat); mGroup.add(ureter);")
            g.append("const wave = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.12, 12, 24), goldMat); wave.position.y = 0.2; wave.rotation.x = Math.PI/2; mGroup.add(wave);")
        elif mid == 15: # Osmoregulation
            g.append("const balance = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), skyMat); mGroup.add(balance);")
            g.append("const adh = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 12, 32), goldMat); mGroup.add(adh);")
        elif mid == 16: # Kidney Stone Crystals
            g.append("const bean = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), crimsonMat); bean.scale.set(0.8, 1.3, 0.6); mGroup.add(bean);")
            g.append("const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4), whiteMat); stone.position.set(-0.2, -0.3, 0.4); mGroup.add(stone);")
        elif mid == 17: # Kidney Failure
            g.append("const badKidney = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), darkMat); badKidney.scale.set(0.8, 1.2, 0.6); mGroup.add(badKidney);")
            g.append("for (let i = 0; i < 5; i++) { const scar = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.1), redMat); scar.position.set(0.3, i*0.3 - 0.6, 0.4); mGroup.add(scar); }")
        elif mid == 18: # Hemodialysis Dialyzer Machine
            g.append("const canister = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 2.6, 24), glassMat); mGroup.add(canister);")
            g.append("for (let i = -2; i <= 2; i++) { const fiber = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.4, 8), skyMat); fiber.position.set(i*0.2, 0, 0); mGroup.add(fiber); }")
            g.append("const artLine = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 8), redMat); artLine.position.set(0.8, 0.8, 0); artLine.rotation.z = Math.PI/2; mGroup.add(artLine);")
            g.append("const venLine = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 8), skyMat); venLine.position.set(0.8, -0.8, 0); venLine.rotation.z = Math.PI/2; mGroup.add(venLine);")
        elif mid == 19: # Kidney Transplant
            g.append("const donorKidney = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 20), crimsonMat); donorKidney.scale.set(0.8, 1.3, 0.6); donorKidney.position.set(0, 0.2, 0); mGroup.add(donorKidney);")
            g.append("const graftArtery = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 8), redMat); graftArtery.position.set(-0.7, 0.1, 0); graftArtery.rotation.z = 0.8; mGroup.add(graftArtery);")
            g.append("const graftVein = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.2, 8), skyMat); graftVein.position.set(0.7, -0.2, 0); graftVein.rotation.z = -0.8; mGroup.add(graftVein);")
        else: # Model 20: CQ Review
            g.append("const starMedal = new THREE.Mesh(new THREE.OctahedronGeometry(0.8), goldMat); mGroup.add(starMedal);")
            g.append("const ribbon = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.14, 12, 24, Math.PI), crimsonMat); ribbon.position.y = -0.4; mGroup.add(ribbon);")

    # ------------------ CHAPTER 9 (Support & Movement) ------------------
    elif ch == 9:
        if mid == 1: # Complete Skeleton 206 Bones
            g.append("const skull = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), boneMat); skull.position.y = 1.3; mGroup.add(skull);")
            g.append("const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.5, 12), boneMat); spine.position.y = 0.2; mGroup.add(spine);")
            g.append("const pelvis = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.15, 8, 16), boneMat); pelvis.position.y = -0.55; pelvis.rotation.x = Math.PI/2; mGroup.add(pelvis);")
            g.append("for (let i = -1; i <= 1; i += 2) { const femur = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 1.2, 8), boneMat); femur.position.set(i*0.4, -1.3, 0); mGroup.add(femur); }")
        elif mid == 2: # Cranium Skull
            g.append("const cranium = new THREE.Mesh(new THREE.SphereGeometry(1.2, 24, 24), boneMat); cranium.scale.set(0.9, 1.0, 1.1); mGroup.add(cranium);")
            g.append("const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.8), boneMat); jaw.position.set(0, -0.9, 0.4); mGroup.add(jaw);")
            g.append("for (let i = -1; i <= 1; i += 2) { const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.06, 8, 16), darkMat); orbit.position.set(i*0.35, -0.1, 0.95); mGroup.add(orbit); }")
        elif mid == 3: # Vertebral Column 33
            g.append("for (let i = -4; i <= 4; i++) { const v = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.2, 16), boneMat); v.position.y = i*0.32; mGroup.add(v); const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.1, 16), skyMat); disc.position.y = i*0.32 + 0.15; mGroup.add(disc); const spinous = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.5, 8), boneMat); spinous.position.set(0, i*0.32, -0.6); spinous.rotation.x = -Math.PI/2; mGroup.add(spinous); }")
        elif mid == 4: # Rib Cage Sternum
            g.append("const sternum = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.8, 0.15), boneMat); sternum.position.z = 0.9; mGroup.add(sternum);")
            g.append("const spineDorsal = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.2, 12), boneMat); spineDorsal.position.z = -0.9; mGroup.add(spineDorsal);")
            g.append("for (let i = -3; i <= 3; i++) { const rib = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.06, 8, 24, Math.PI*1.2), boneMat); rib.position.y = i*0.28; rib.rotation.x = Math.PI/2; mGroup.add(rib); }")
        elif mid == 5: # Long Bone Section
            g.append("const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.0, 16), boneMat); mGroup.add(shaft);")
            g.append("const epTop = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), amberMat); epTop.position.y = 1.1; mGroup.add(epTop);")
            g.append("const epBot = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), amberMat); epBot.position.y = -1.1; mGroup.add(epBot);")
            g.append("const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.76, 0.76, 0.15, 16), skyMat); capTop.position.y = 1.5; mGroup.add(capTop);")
        elif mid == 6: # Haversian System Osteon
            g.append("for (let r = 1; r <= 4; r++) { const lam = new THREE.Mesh(new THREE.CylinderGeometry(r*0.35, r*0.35, 2.4, 16, 1, true), r%2===0?boneMat:whiteMat); mGroup.add(lam); }")
            g.append("const centralCanal = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 2.5, 12), redMat); mGroup.add(centralCanal);")
        elif mid == 7: # Hyaline Cartilage
            g.append("const matrix = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.8, 1.0), skyMat); mGroup.add(matrix);")
            g.append("for (let i = 0; i < 6; i++) { const lacuna = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), glassMat); const chondro = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), purpleMat); lacuna.add(chondro); lacuna.position.set((i%3)*0.8 - 0.8, (i>2?0.4:-0.4), 0.2); mGroup.add(lacuna); }")
        elif mid == 8: # Suture Joint
            g.append("const plateL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.0, 0.3), boneMat); plateL.position.x = -0.65; mGroup.add(plateL);")
            g.append("const plateR = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.0, 0.3), boneMat); plateR.position.x = 0.65; mGroup.add(plateR);")
            g.append("for (let i = -3; i <= 3; i++) { const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.32), darkMat); tooth.position.set(0, i*0.28, 0); mGroup.add(tooth); }")
        elif mid == 9: # Synovial Joint Architecture
            g.append("const bTop = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 1.2, 16), boneMat); bTop.position.y = 1.0; mGroup.add(bTop);")
            g.append("const bBot = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.5, 1.2, 16), boneMat); bBot.position.y = -1.0; mGroup.add(bBot);")
            g.append("const cartTop = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.15, 16), skyMat); cartTop.position.y = 0.35; mGroup.add(cartTop);")
            g.append("const cartBot = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.15, 16), skyMat); cartBot.position.y = -0.35; mGroup.add(cartBot);")
            g.append("const capsule = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.25, 12, 24), glassMat); mGroup.add(capsule);")
        elif mid == 10: # Ball and Socket Joint
            g.append("const cup = new THREE.Mesh(new THREE.SphereGeometry(1.0, 20, 20, 0, Math.PI*2, 0, Math.PI*0.55), boneMat); cup.rotation.x = Math.PI; cup.position.y = 0.5; mGroup.add(cup);")
            g.append("const ball = new THREE.Mesh(new THREE.SphereGeometry(0.75, 20, 20), skyMat); ball.position.y = 0.2; mGroup.add(ball);")
            g.append("const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.4, 12), boneMat); neck.position.y = -0.6; mGroup.add(neck);")
        elif mid == 11: # Hinge Joint (Elbow/Knee)
            g.append("const spool = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 1.4, 16), boneMat); spool.rotation.z = Math.PI/2; spool.position.y = 0.4; mGroup.add(spool);")
            g.append("const trough = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.35, 12, 24, Math.PI), boneMat); trough.position.y = -0.3; trough.rotation.x = Math.PI/2; mGroup.add(trough);")
        elif mid == 12: # Pivot Joint (Atlas/Axis)
            g.append("const ringAtlas = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.25, 16, 24), boneMat); ringAtlas.position.y = 0.3; ringAtlas.rotation.x = Math.PI/2; mGroup.add(ringAtlas);")
            g.append("const pegAxis = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.8, 16), boneMat); pegAxis.position.y = -0.2; mGroup.add(pegAxis);")
        elif mid == 13: # Striated Muscle Sarcomere
            g.append("const z1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.0, 1.2), redMat); z1.position.x = -1.2; mGroup.add(z1);")
            g.append("const z2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.0, 1.2), redMat); z2.position.x = 1.2; mGroup.add(z2);")
            g.append("for (let i = -1; i <= 1; i++) { const myosin = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.6, 8), purpleMat); myosin.position.set(0, i*0.5, 0); myosin.rotation.z = Math.PI/2; mGroup.add(myosin); }")
        elif mid == 14: # Actin & Myosin Filaments
            g.append("const myoThick = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.4, 12), purpleMat); myoThick.rotation.z = Math.PI/2; mGroup.add(myoThick);")
            g.append("for (let i = -3; i <= 3; i++) { const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), goldMat); head.position.set(i*0.35, 0.3, 0); mGroup.add(head); }")
            g.append("const actinThin = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.4, 8), redMat); actinThin.position.y = 0.6; actinThin.rotation.z = Math.PI/2; mGroup.add(actinThin);")
        elif mid == 15: # Antagonistic Muscles (Biceps/Triceps)
            g.append("const humerus = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 2.4, 12), boneMat); humerus.position.x = 0; mGroup.add(humerus);")
            g.append("const biceps = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); biceps.scale.set(0.6, 1.3, 0.6); biceps.position.set(-0.6, 0.3, 0); mGroup.add(biceps);")
            g.append("const triceps = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.6, 12), redMat); triceps.position.set(0.6, -0.1, 0); mGroup.add(triceps);")
        elif mid == 16: # Tendons
            g.append("const musc = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.4, 1.4, 16), crimsonMat); musc.position.y = 0.6; mGroup.add(musc);")
            g.append("const tendon = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.2, 12), whiteMat); tendon.position.y = -0.5; mGroup.add(tendon);")
            g.append("const bone = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 0.8), boneMat); bone.position.y = -1.2; mGroup.add(bone);")
        elif mid == 17: # Ligaments
            g.append("const boneA = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 16), boneMat); boneA.position.y = 0.9; mGroup.add(boneA);")
            g.append("const boneB = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 16), boneMat); boneB.position.y = -0.9; mGroup.add(boneB);")
            g.append("for (let i = -1; i <= 1; i += 2) { const lig = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.2, 0.3), goldMat); lig.position.set(i*0.55, 0, 0); mGroup.add(lig); }")
        elif mid == 18: # Osteoporosis Porous Bone
            g.append("const normB = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.0, 16), boneMat); normB.position.x = -0.8; mGroup.add(normB);")
            g.append("const ostB = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.0, 16), amberMat); ostB.position.x = 0.8; mGroup.add(ostB);")
            g.append("for (let i = 0; i < 6; i++) { const hole = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), darkMat); hole.position.set(0.8 + (i%2)*0.2, i*0.3 - 0.7, 0.4); mGroup.add(hole); }")
        elif mid == 19: # Arthritis Inflamed Joint
            g.append("const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 16), boneMat); b1.position.y = 0.8; mGroup.add(b1);")
            g.append("const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 16), boneMat); b2.position.y = -0.8; mGroup.add(b2);")
            g.append("const pannus = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.35, 12, 24), redMat); mGroup.add(pannus);")
            g.append("const spur = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), boneMat); spur.position.set(0.65, 0.2, 0); spur.rotation.z = -Math.PI/2; mGroup.add(spur);")
        else: # Model 20: Bone Fracture Healing Callus
            g.append("const boneFrac1 = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 16), boneMat); boneFrac1.position.y = 0.8; mGroup.add(boneFrac1);")
            g.append("const boneFrac2 = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 16), boneMat); boneFrac2.position.y = -0.8; mGroup.add(boneFrac2);")
            g.append("const callus = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), amberMat); callus.scale.set(1.2, 0.6, 1.2); mGroup.add(callus);")

    # ------------------ CHAPTER 10 (Coordination & Secretion) ------------------
    elif ch == 10:
        if mid == 1: # Nervous System Overview
            g.append("const brain = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), purpleMat); brain.position.y = 1.3; mGroup.add(brain);")
            g.append("const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12), goldMat); cord.position.y = -0.1; mGroup.add(cord);")
            g.append("for (let i = -3; i <= 3; i++) { const nerve = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.6, 8), skyMat); nerve.position.y = i*0.28; nerve.rotation.z = Math.PI/2; mGroup.add(nerve); }")
        elif mid == 2: # Plant Tropisms
            g.append("const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.45, 0.8, 16), amberMat); pot.position.y = -0.9; mGroup.add(pot);")
            g.append("const stemBended = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.12, 12, 24, Math.PI*0.45), emeraldMat); stemBended.position.set(-1.0, -0.5, 0); mGroup.add(stemBended);")
            g.append("const sunLight = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), goldMat); sunLight.position.set(1.2, 1.2, 0); mGroup.add(sunLight);")
        elif mid == 3: # Phytohormones
            g.append("const plant = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.4, 12), emeraldMat); mGroup.add(plant);")
            g.append("const apex = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.6, 12), goldMat); apex.position.y = 1.3; mGroup.add(apex);")
            g.append("for (let i = -1; i <= 1; i += 2) { const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.4), deepGreenMat); leaf.position.set(i*0.5, 0.4, 0); leaf.rotation.z = i*0.4; mGroup.add(leaf); }")
        elif mid == 4: # Auxin & Gibberellin
            g.append("const stemA = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.2, 12), emeraldMat); stemA.position.x = -0.7; stemA.position.y = -0.3; mGroup.add(stemA);")
            g.append("const stemB = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.4, 12), emeraldMat); stemB.position.x = 0.7; stemB.position.y = 0.3; mGroup.add(stemB);")
            g.append("const cap = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); cap.position.set(0.7, 1.5, 0); mGroup.add(cap);")
        elif mid == 5: # Ethylene & ABA
            g.append("const fruit = new THREE.Mesh(new THREE.SphereGeometry(1.0, 20, 20), goldMat); fruit.position.x = -0.6; mGroup.add(fruit);")
            g.append("const dropLeaf = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 1.2), amberMat); dropLeaf.position.set(0.8, -0.6, 0); dropLeaf.rotation.z = -0.6; mGroup.add(dropLeaf);")
        elif mid == 6: # Photoperiodism
            g.append("const clock = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.15, 16, 32), skyMat); mGroup.add(clock);")
            g.append("const day = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.1, 24, 1, false, 0, Math.PI), goldMat); mGroup.add(day);")
            g.append("const night = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.1, 24, 1, false, Math.PI, Math.PI), darkMat); mGroup.add(night);")
        elif mid == 7: # Nervous Organization
            g.append("const cns = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 2.4, 16), purpleMat); cns.position.x = -0.7; mGroup.add(cns);")
            g.append("const pns = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.1, 8, 24), skyMat); pns.position.x = 0.7; mGroup.add(pns);")
        elif mid == 8: # Multipolar Neuron
            g.append("const soma = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8), goldMat); soma.position.y = 0.9; mGroup.add(soma);")
            g.append("const axon = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.2, 12), amberMat); axon.position.y = -0.6; mGroup.add(axon);")
            g.append("for (let i = 0; i < 5; i++) { const dend = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.8, 8), goldMat); const th = i * Math.PI * 2 / 5; dend.position.set(Math.cos(th)*0.9, 0.9 + Math.sin(th)*0.9, 0); dend.rotation.z = th - Math.PI/2; mGroup.add(dend); }")
        elif mid == 9: # Myelin & Ranvier
            g.append("const axonCore = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.8, 12), amberMat); mGroup.add(axonCore);")
            g.append("for (let i = -2; i <= 2; i++) { const sheath = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.45, 16), skyMat); sheath.position.y = i*0.55; mGroup.add(sheath); }")
        elif mid == 10: # Synapse & Neurotransmitter
            g.append("const pre = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16, 0, Math.PI*2, 0, Math.PI*0.6), goldMat); pre.position.y = 0.6; pre.rotation.x = Math.PI; mGroup.add(pre);")
            g.append("const post = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.3, 1.2), purpleMat); post.position.y = -0.6; mGroup.add(post);")
            g.append("for (let i = 0; i < 6; i++) { const ves = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), redMat); ves.position.set((i%3)*0.4 - 0.4, 0, (i>2?0.2:-0.2)); mGroup.add(ves); }")
        elif mid == 11: # Human Brain Cerebrum
            g.append("const leftH = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), purpleMat); leftH.scale.set(0.7, 0.9, 1.2); leftH.position.x = -0.45; mGroup.add(leftH);")
            g.append("const rightH = new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 20), purpleMat); rightH.scale.set(0.7, 0.9, 1.2); rightH.position.x = 0.45; mGroup.add(rightH);")
            g.append("const cerebel = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), crimsonMat); cerebel.position.set(0, -0.8, -0.6); mGroup.add(cerebel);")
        elif mid == 12: # Diencephalon Hypothalamus
            g.append("const brainShell = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 20), glassMat); mGroup.add(brainShell);")
            g.append("const thal = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), goldMat); thal.position.set(0, 0.2, 0); mGroup.add(thal);")
            g.append("const hypo = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.6, 12), redMat); hypo.position.set(0, -0.35, 0.2); hypo.rotation.x = 0.5; mGroup.add(hypo);")
        elif mid == 13: # Hindbrain & Medulla
            g.append("const pons = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), amberMat); pons.position.y = 0.4; mGroup.add(pons);")
            g.append("const medulla = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 1.4, 16), skyMat); medulla.position.y = -0.6; mGroup.add(medulla);")
        elif mid == 14: # Spinal Cord Cross Section
            g.append("const whiteM = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 1.0, 24), whiteMat); mGroup.add(whiteM);")
            g.append("const grayH = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.05, 0.8), darkMat); mGroup.add(grayH);")
            g.append("const grayHCross = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.05, 0.3), darkMat); mGroup.add(grayHCross);")
        elif mid == 15: # Reflex Arc Complete
            g.append("const skin = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 0.6), amberMat); skin.position.set(-1.4, -0.6, 0); mGroup.add(skin);")
            g.append("const spinal = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), purpleMat); spinal.position.set(0, 0.8, 0); mGroup.add(spinal);")
            g.append("const muscle = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.35, 0.8, 12, 12) : new THREE.CylinderGeometry(0.35, 0.35, 0.8, 12), crimsonMat); muscle.position.set(1.4, -0.6, 0); mGroup.add(muscle);")
            g.append("const arc = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.08, 12, 32, Math.PI), goldMat); arc.position.y = -0.2; arc.rotation.z = Math.PI; mGroup.add(arc);")
        elif mid == 16: # Endocrine Glands
            g.append("const bodyFig = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.7, 2.0, 16, 16) : new THREE.CylinderGeometry(0.7, 0.7, 2.0, 16), glassMat); mGroup.add(bodyFig);")
            g.append("const pit = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), redMat); pit.position.set(0, 1.1, 0.4); mGroup.add(pit);")
            g.append("const thy = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), goldMat); thy.position.set(0, 0.6, 0.5); mGroup.add(thy);")
            g.append("const adr = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.3, 8), amberMat); adr.position.set(0, -0.2, 0.5); mGroup.add(adr);")
        elif mid == 17: # Pituitary & Thyroid
            g.append("const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 12), whiteMat); stalk.position.set(0, 0.8, 0); mGroup.add(stalk);")
            g.append("const antPit = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), crimsonMat); antPit.position.set(-0.35, 0.4, 0); mGroup.add(antPit);")
            g.append("const postPit = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), skyMat); postPit.position.set(0.35, 0.4, 0); mGroup.add(postPit);")
            g.append("const thyroid = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.25, 12, 24, Math.PI*1.2), amberMat); thyroid.position.set(0, -0.6, 0); mGroup.add(thyroid);")
        elif mid == 18: # Islets Insulin Diabetes
            g.append("const panc = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.8, 0.6), amberMat); mGroup.add(panc);")
            g.append("const islet = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), goldMat); islet.position.set(0.3, 0, 0.2); mGroup.add(islet);")
            g.append("for (let i = 0; i < 5; i++) { const ins = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), skyMat); const th = i * Math.PI / 2.5; ins.position.set(Math.cos(th)*0.7 + 0.3, Math.sin(th)*0.7, 0.3); mGroup.add(ins); }")
        elif mid == 19: # Adrenal Glands
            g.append("const kidney = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), crimsonMat); kidney.scale.set(0.8, 1.3, 0.6); kidney.position.y = -0.3; mGroup.add(kidney);")
            g.append("const capAdr = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.7, 16), goldMat); capAdr.position.set(0, 0.9, 0); mGroup.add(capAdr);")
        else: # Model 20: CQ Review
            g.append("const starMedal = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 1), goldMat); mGroup.add(starMedal);")
            g.append("const ring = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.12, 16, 36), purpleMat); mGroup.add(ring);")

    # ------------------ CHAPTER 11 (Reproduction) ------------------
    elif ch == 11:
        if mid == 1: # Vegetative Propagation
            g.append("const tuber = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 16), amberMat); tuber.scale.set(1.3, 0.8, 0.9); mGroup.add(tuber);")
            g.append("for (let i = 0; i < 4; i++) { const eye = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), emeraldMat); const th = i * Math.PI / 2; eye.position.set(Math.cos(th)*1.1, 0.4, Math.sin(th)*0.8); eye.rotation.z = th; mGroup.add(eye); }")
        elif mid == 2: # Artificial Grafting
            g.append("const stock = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.4, 16), amberMat); stock.position.y = -0.7; mGroup.add(stock);")
            g.append("const scion = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.4, 16), emeraldMat); scion.position.y = 0.7; mGroup.add(scion);")
            g.append("const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.1, 12, 24), whiteMat); mGroup.add(wrap);")
        elif mid == 3: # Ideal Flower 4 Whorls
            g.append("const recep = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.3, 0.6, 16), deepGreenMat); recep.position.y = -0.6; mGroup.add(recep);")
            g.append("const sepals = new THREE.Mesh(new THREE.ConeGeometry(0.9, 0.5, 5), emeraldMat); sepals.position.y = -0.3; mGroup.add(sepals);")
            g.append("for (let i = 0; i < 5; i++) { const pet = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), redMat); const th = i * Math.PI * 2 / 5; pet.position.set(Math.cos(th)*1.0, 0.2, Math.sin(th)*1.0); pet.scale.set(0.6, 1.2, 0.4); pet.rotation.z = Math.cos(th)*0.5; mGroup.add(pet); }")
            g.append("const carpel = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.35, 1.4, 16), goldMat); carpel.position.y = 0.5; mGroup.add(carpel);")
        elif mid == 4: # Calyx & Corolla
            g.append("const calyx = new THREE.Mesh(new THREE.ConeGeometry(1.4, 0.6, 5), emeraldMat); calyx.position.y = -0.4; mGroup.add(calyx);")
            g.append("const corolla = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1.2, 5), crimsonMat); corolla.position.y = 0.4; corolla.rotation.x = Math.PI; mGroup.add(corolla);")
        elif mid == 5: # Stamen & Anther
            g.append("const fil = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2, 12), whiteMat); fil.position.y = -0.3; mGroup.add(fil);")
            g.append("const antherL = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), goldMat); antherL.position.set(-0.25, 0.9, 0); mGroup.add(antherL);")
            g.append("const antherR = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), goldMat); antherR.position.set(0.25, 0.9, 0); mGroup.add(antherR);")
        elif mid == 6: # Pollen Grain
            g.append("const pollen = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), goldMat); mGroup.add(pollen);")
            g.append("for (let i = 0; i < 12; i++) { const spike = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 8), amberMat); const th = i * Math.PI / 6; spike.position.set(Math.cos(th)*1.25, Math.sin(th)*1.25, 0); spike.rotation.z = th - Math.PI/2; mGroup.add(spike); }")
        elif mid == 7: # Carpel & Stigma
            g.append("const ovary = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), emeraldMat); ovary.position.y = -0.6; mGroup.add(ovary);")
            g.append("const style = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.4, 12), deepGreenMat); style.position.y = 0.3; mGroup.add(style);")
            g.append("const stigma = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), goldMat); stigma.position.y = 1.1; mGroup.add(stigma);")
        elif mid == 8: # Anatropous Ovule
            g.append("const integ = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20, 0, Math.PI*2, 0, Math.PI*0.8), emeraldMat); mGroup.add(integ);")
            g.append("const embSac = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), goldMat); mGroup.add(embSac);")
            g.append("const egg = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), redMat); egg.position.set(0, -0.4, 0); mGroup.add(egg);")
        elif mid == 9: # Pollination Types
            g.append("const fl1 = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.0, 5), crimsonMat); fl1.position.x = -1.1; mGroup.add(fl1);")
            g.append("const fl2 = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.0, 5), skyMat); fl2.position.x = 1.1; mGroup.add(fl2);")
            g.append("const bee = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 10), goldMat); bee.position.y = 0.8; mGroup.add(bee);")
        elif mid == 10: # Pollen Tube Germination
            g.append("const stig = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), emeraldMat); stig.position.y = 1.0; mGroup.add(stig);")
            g.append("const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 2.2, 12), goldMat); tube.position.y = -0.3; mGroup.add(tube);")
            g.append("const sperm = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), redMat); sperm.position.set(0, -1.2, 0); mGroup.add(sperm);")
        elif mid == 11: # Double Fertilization
            g.append("const ovule = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), glassMat); mGroup.add(ovule);")
            g.append("const zygote2n = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), redMat); zygote2n.position.set(0, -0.5, 0); mGroup.add(zygote2n);")
            g.append("const endo3n = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), goldMat); endo3n.position.set(0, 0.3, 0); mGroup.add(endo3n);")
        elif mid == 12: # Seed & Fruit Development
            g.append("const pericarp = new THREE.Mesh(new THREE.SphereGeometry(1.4, 24, 24), redMat); pericarp.scale.set(1.1, 1.3, 1.0); mGroup.add(pericarp);")
            g.append("const seedCore = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), amberMat); mGroup.add(seedCore);")
        elif mid == 13: # Male Reproductive System
            g.append("const testis = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), skyMat); testis.scale.set(0.7, 1.1, 0.7); testis.position.set(0, -0.6, 0); mGroup.add(testis);")
            g.append("const vasDef = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.08, 12, 24, Math.PI*1.4), whiteMat); vasDef.position.y = 0.2; mGroup.add(vasDef);")
        elif mid == 14: # Female Reproductive System
            g.append("const uterus = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.6, 16), crimsonMat); uterus.position.y = 0.2; mGroup.add(uterus);")
            g.append("for (let i = -1; i <= 1; i += 2) { const tube = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.08, 8, 20, Math.PI*0.6), crimsonMat); tube.position.set(i*0.9, 0.9, 0); tube.rotation.z = i*0.5; mGroup.add(tube); const ovary = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), goldMat); ovary.position.set(i*1.5, 0.8, 0); mGroup.add(ovary); }")
        elif mid == 15: # Menstrual Cycle
            g.append("const clock = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.22, 16, 32), crimsonMat); mGroup.add(clock);")
            g.append("for (let i = 0; i < 4; i++) { const marker = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), [redMat, goldMat, skyMat, purpleMat][i]); const th = i * Math.PI / 2; marker.position.set(Math.cos(th)*1.4, Math.sin(th)*1.4, 0); mGroup.add(marker); }")
        elif mid == 16: # Fertilization Human
            g.append("const ovum = new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 24), amberMat); mGroup.add(ovum);")
            g.append("for (let i = 0; i < 5; i++) { const sp = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.6, 8), skyMat); const th = i * Math.PI * 2 / 5; sp.position.set(Math.cos(th)*1.4, Math.sin(th)*1.4, 0); sp.rotation.z = th + Math.PI/2; mGroup.add(sp); }")
        elif mid == 17: # Blastocyst Implantation
            g.append("const wall = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.4, 1.4), crimsonMat); wall.position.y = -0.7; mGroup.add(wall);")
            g.append("const blasto = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), glassMat); blasto.position.y = 0.2; mGroup.add(blasto);")
            g.append("const icm = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), goldMat); icm.position.set(0, -0.1, 0); blasto.add(icm);")
        elif mid == 18: # Placenta & Fetus
            g.append("const plac = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.3, 24), crimsonMat); plac.position.y = 0.9; mGroup.add(plac);")
            g.append("const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.6, 12), skyMat); cord.position.y = 0; mGroup.add(cord);")
            g.append("const fetus = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), amberMat); fetus.position.y = -0.9; mGroup.add(fetus);")
        elif mid == 19: # Reproductive Healthcare
            g.append("const shield = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.8, 1.4, 6), skyMat); mGroup.add(shield);")
            g.append("const heartIcon = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), redMat); heartIcon.position.z = 0.3; mGroup.add(heartIcon);")
        else: # Model 20: CQ Review
            g.append("const medal = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.25, 24), goldMat); medal.rotation.x = Math.PI/2; mGroup.add(medal);")

    # ------------------ CHAPTER 12 (Genetics & Evolution) ------------------
    elif ch == 12:
        if mid == 1: # Mendel Monohybrid
            g.append("const peaT = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.2, 12), emeraldMat); peaT.position.x = -0.8; mGroup.add(peaT);")
            g.append("const peaD = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.9, 12), deepGreenMat); peaD.position.set(0.8, -0.65, 0); mGroup.add(peaD);")
            g.append("const crossSymbol = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.1), goldMat); crossSymbol.rotation.z = 0.78; mGroup.add(crossSymbol);")
        elif mid == 2: # Dihybrid 9:3:3:1
            g.append("for (let r = 0; r < 4; r++) { for (let c = 0; c < 4; c++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), (r+c)%2===0?goldMat:emeraldMat); p.position.set(c*0.6 - 0.9, r*0.6 - 0.9, 0); mGroup.add(p); } }")
        elif mid == 3: # Chromosome Morphology
            g.append("for (let i = -1; i <= 1; i += 2) { const armP = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.0, 12), purpleMat); armP.position.set(i*0.25, 0.7, 0); armP.rotation.z = -i*0.2; mGroup.add(armP); const armQ = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.4, 12), purpleMat); armQ.position.set(i*0.25, -0.8, 0); armQ.rotation.z = i*0.2; mGroup.add(armQ); }")
            g.append("const cent = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), goldMat); mGroup.add(cent);")
        elif mid == 4: # Human Karyotype 46
            g.append("for (let i = 0; i < 6; i++) { const pairL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.1), skyMat); pairL.position.set(i*0.5 - 1.25, 0.4, 0); mGroup.add(pairL); const pairR = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.1), redMat); pairR.position.set(i*0.5 - 1.1, 0.4, 0); mGroup.add(pairR); }")
        elif mid == 5: # Sex Determination XY
            g.append("const chrX = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.6, 0.2), redMat); chrX.rotation.z = 0.5; chrX.position.x = -0.7; mGroup.add(chrX); const chrX2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.6, 0.2), redMat); chrX2.rotation.z = -0.5; chrX2.position.x = -0.7; mGroup.add(chrX2);")
            g.append("const chrY = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.2, 12), skyMat); chrY.position.x = 0.7; mGroup.add(chrY);")
        elif mid == 6: # DNA Double Helix
            g.append("const helix = new THREE.Group(); mGroup.add(helix);")
            g.append("for (let i = 0; i < 16; i++) { const t = (i / 16) * Math.PI * 4; const y = (i / 16) * 4.0 - 2.0; const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), skyMat); s1.position.set(Math.cos(t)*1.2, y, Math.sin(t)*1.2); helix.add(s1); const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), redMat); s2.position.set(Math.cos(t+Math.PI)*1.2, y, Math.sin(t+Math.PI)*1.2); helix.add(s2); const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.4, 8), goldMat); rung.position.set(0, y, 0); rung.rotation.z = Math.PI/2; rung.rotation.y = -t; helix.add(rung); }")
        elif mid == 7: # Nitrogenous Base Pairs A-T G-C
            g.append("const purine = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.15, 6), skyMat); purine.position.x = -0.7; mGroup.add(purine);")
            g.append("const pyrim = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.15, 5), redMat); pyrim.position.x = 0.7; mGroup.add(pyrim);")
            g.append("for (let i = -1; i <= 1; i++) { const hBond = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.6, 8), whiteMat); hBond.position.set(0, i*0.2, 0); hBond.rotation.z = Math.PI/2; mGroup.add(hBond); }")
        elif mid == 8: # Nucleosome Histone Octamer
            g.append("const spool = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.9, 16), purpleMat); mGroup.add(spool);")
            g.append("const dnaWrap = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.14, 12, 32, Math.PI*3.2), goldMat); mGroup.add(dnaWrap);")
            g.append("const h1 = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.2, 12), redMat); h1.position.set(1.2, 0, 0); mGroup.add(h1);")
        elif mid == 9: # RNA Single Strand
            g.append("for (let i = 0; i < 10; i++) { const t = i * 0.5 - 2.2; const rSphere = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), emeraldMat); rSphere.position.set(Math.sin(i*0.6)*0.8, t, Math.cos(i*0.6)*0.4); mGroup.add(rSphere); const base = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.1, 0.15), [goldMat, redMat, skyMat, amberMat][i%4]); base.position.set(Math.sin(i*0.6)*0.8 + 0.35, t, Math.cos(i*0.6)*0.4); mGroup.add(base); }")
        elif mid == 10: # mRNA Transcription
            g.append("const dnaTrack = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.0, 8), skyMat); dnaTrack.position.x = -0.4; mGroup.add(dnaTrack);")
            g.append("const rnaPoly = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), amberMat); rnaPoly.position.set(0, 0, 0); mGroup.add(rnaPoly);")
            g.append("const mrnaTranscript = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.0, 8), emeraldMat); mrnaTranscript.position.set(0.6, -0.5, 0); mrnaTranscript.rotation.z = -0.5; mGroup.add(mrnaTranscript);")
        elif mid == 11: # Translation Ribosome
            g.append("const rLarge = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), purpleMat); rLarge.position.y = 0.5; mGroup.add(rLarge);")
            g.append("const rSmall = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), cyanMat); rSmall.position.y = -0.5; mGroup.add(rSmall);")
            g.append("for (let i = 0; i < 4; i++) { const poly = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), goldMat); poly.position.set(0.3 + i*0.35, 1.1 + i*0.2, 0); mGroup.add(poly); }")
        elif mid == 12: # DNA Replication Fork
            g.append("const helicase = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.9, 12), goldMat); helicase.rotation.z = -Math.PI/2; mGroup.add(helicase);")
            g.append("const leadStrand = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8), skyMat); leadStrand.position.set(0.8, 0.7, 0); leadStrand.rotation.z = 0.5; mGroup.add(leadStrand);")
            g.append("const lagStrand = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8), redMat); lagStrand.position.set(0.8, -0.7, 0); lagStrand.rotation.z = -0.5; mGroup.add(lagStrand);")
        elif mid == 13: # Gene Mutation
            g.append("const geneStrip = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.4, 0.2), skyMat); mGroup.add(geneStrip);")
            g.append("const mutSpot = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), redMat); mutSpot.position.x = 0.2; mGroup.add(mutSpot);")
        elif mid == 14: # Color Blindness
            g.append("const eyePlate = new THREE.Mesh(new THREE.CircleGeometry ? new THREE.CircleGeometry(1.3, 32) : new THREE.CylinderGeometry(1.3, 1.3, 0.1, 24), darkMat); mGroup.add(eyePlate);")
            g.append("for (let i = 0; i < 18; i++) { const dot = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), i%3===0?redMat:emeraldMat); const th = i * 0.7; dot.position.set(Math.cos(th)*0.8, Math.sin(th)*0.8, 0.1); mGroup.add(dot); }")
        elif mid == 15: # Thalassemia Hemoglobin
            g.append("const globinNormal = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), crimsonMat); globinNormal.position.x = -0.75; mGroup.add(globinNormal);")
            g.append("const globinDefect = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.2, 12, 24), amberMat); globinDefect.position.x = 0.75; mGroup.add(globinDefect);")
        elif mid == 16: # DNA Fingerprinting Gel
            g.append("const gel = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.6, 0.1), glassMat); mGroup.add(gel);")
            g.append("for (let c = -1; c <= 1; c++) { for (let r = -2; r <= 2; r++) { const band = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.08, 0.12), skyMat); band.position.set(c*0.7, r*0.5 + (c*0.1), 0.05); mGroup.add(band); } }")
        elif mid == 17: # Darwin Finch Beaks
            g.append("for (let i = 0; i < 3; i++) { const beak = new THREE.Mesh(new THREE.ConeGeometry(0.25 + i*0.15, 1.2, 12), amberMat); beak.position.set((i-1)*1.0, 0, 0); beak.rotation.z = Math.PI/2; mGroup.add(beak); }")
        elif mid == 18: # Natural Selection
            g.append("const treeBark = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.4, 16), darkMat); mGroup.add(treeBark);")
            g.append("const darkMoth = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.1), darkMat); darkMoth.position.set(0, 0.4, 1.15); mGroup.add(darkMoth);")
            g.append("const lightMoth = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.1), whiteMat); lightMoth.position.set(0, -0.4, 1.15); mGroup.add(lightMoth);")
        elif mid == 19: # Homologous Organs
            g.append("const humanArm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 1.6, 8), boneMat); humanArm.position.x = -1.0; mGroup.add(humanArm);")
            g.append("const batWing = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 1.8, 8), boneMat); batWing.position.x = 0; batWing.rotation.z = 0.5; mGroup.add(batWing);")
            g.append("const whaleFin = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.6, 0.15), boneMat); whaleFin.position.x = 1.0; mGroup.add(whaleFin);")
        else: # Model 20: Fossil Archaeopteryx
            g.append("const slab = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.0, 0.2), amberMat); mGroup.add(slab);")
            g.append("const skel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 8), boneMat); skel.rotation.z = 0.7; mGroup.add(skel);")
            g.append("const wing = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.2, 6), darkMat); wing.position.set(0.4, 0.3, 0.15); wing.rotation.z = -0.6; mGroup.add(wing);")

    # ------------------ CHAPTER 13 (Environment) ------------------
    elif ch == 13:
        if mid == 1: # Pond Ecosystem
            g.append("const waterBowl = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.2, 1.0, 24), skyMat); mGroup.add(waterBowl);")
            g.append("const plant = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.8, 8), emeraldMat); plant.position.set(-0.6, 0.2, 0); mGroup.add(plant);")
            g.append("const fish = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), goldMat); fish.scale.set(1.5, 0.6, 0.6); fish.position.set(0.6, 0.2, 0); mGroup.add(fish);")
        elif mid == 2: # Primary Producers Phytoplankton
            g.append("for (let i = 0; i < 7; i++) { const phyto = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35), emeraldMat); const th = i * Math.PI / 3.5; phyto.position.set(Math.cos(th)*1.1, Math.sin(th)*0.8, (i%2)*0.4); mGroup.add(phyto); }")
        elif mid == 3: # Consumers Tier
            g.append("const smallC = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), skyMat); smallC.position.x = -1.0; mGroup.add(smallC);")
            g.append("const midC = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), amberMat); midC.position.x = 0; mGroup.add(midC);")
            g.append("const topC = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), crimsonMat); topC.position.x = 1.0; mGroup.add(topC);")
        elif mid == 4: # Decomposers Bacteria
            g.append("const soil = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.4, 24), darkMat); soil.position.y = -0.8; mGroup.add(soil);")
            g.append("for (let i = 0; i < 8; i++) { const bac = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.15, 0.4, 8, 8) : new THREE.CylinderGeometry(0.15, 0.15, 0.4, 8), amberMat); const th = i * Math.PI / 4; bac.position.set(Math.cos(th)*1.0, -0.4, Math.sin(th)*1.0); mGroup.add(bac); }")
        elif mid == 5: # Pond Stratification
            g.append("for (let i = 0; i < 3; i++) { const zone = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.6, 1.4), [skyMat, cyanMat, darkMat][i]); zone.position.y = 0.6 - i*0.65; mGroup.add(zone); }")
        elif mid == 6: # Grazing Food Chain
            g.append("const grass = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.2, 6), emeraldMat); grass.position.x = -1.2; mGroup.add(grass);")
            g.append("const hopper = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 10), deepGreenMat); hopper.position.x = -0.4; mGroup.add(hopper);")
            g.append("const frog = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), amberMat); frog.position.x = 0.4; mGroup.add(frog);")
            g.append("const snake = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.15, 8, 20), crimsonMat); snake.position.x = 1.2; mGroup.add(snake);")
        elif mid == 7: # Detritus Food Chain
            g.append("const leafDead = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 1.2), amberMat); leafDead.position.x = -0.9; mGroup.add(leafDead);")
            g.append("const worm = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.12, 8, 16), crimsonMat); worm.position.x = 0.1; mGroup.add(worm);")
            g.append("const bird = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.9, 8), goldMat); bird.position.x = 1.1; mGroup.add(bird);")
        elif mid == 8: # Complex Food Web
            g.append("for (let i = 0; i < 6; i++) { const node = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), [emeraldMat, skyMat, amberMat, crimsonMat, purpleMat, goldMat][i]); const th = i * Math.PI / 3; node.position.set(Math.cos(th)*1.3, Math.sin(th)*1.3, 0); mGroup.add(node); }")
            g.append("const webRing = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.05, 8, 32), whiteMat); mGroup.add(webRing);")
        elif mid == 9: # Pyramid of Numbers
            g.append("for (let i = 0; i < 4; i++) { const tier = new THREE.Mesh(new THREE.CylinderGeometry(1.8 - i*0.45, 2.1 - i*0.45, 0.4, 4), [deepGreenMat, emeraldMat, amberMat, crimsonMat][i]); tier.position.y = -0.9 + i*0.55; mGroup.add(tier); }")
        elif mid == 10: # Biomass & 10% Energy
            g.append("for (let i = 0; i < 4; i++) { const eTier = new THREE.Mesh(new THREE.BoxGeometry(2.4 - i*0.6, 0.35, 1.4 - i*0.35), goldMat); eTier.position.y = -0.8 + i*0.55; mGroup.add(eTier); }")
        elif mid == 11: # Nitrogen Cycle
            g.append("const nRing = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.16, 16, 36), skyMat); mGroup.add(nRing);")
            g.append("for (let i = 0; i < 3; i++) { const hub = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), [emeraldMat, amberMat, purpleMat][i]); const th = i * Math.PI * 2 / 3; hub.position.set(Math.cos(th)*1.4, Math.sin(th)*1.4, 0); mGroup.add(hub); }")
        elif mid == 12: # Carbon Cycle
            g.append("const cGlobe = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 20), glassMat); mGroup.add(cGlobe);")
            g.append("const co2Cloud = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), darkMat); co2Cloud.position.set(0, 1.3, 0); mGroup.add(co2Cloud);")
            g.append("const forest = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.2, 8), emeraldMat); forest.position.set(0, -0.8, 0.8); mGroup.add(forest);")
        elif mid == 13: # Water Hydrological Cycle
            g.append("const ocean = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.3, 24), skyMat); ocean.position.y = -1.0; mGroup.add(ocean);")
            g.append("const cloud = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), whiteMat); cloud.scale.set(1.4, 0.7, 0.8); cloud.position.y = 1.0; mGroup.add(cloud);")
            g.append("for (let i = -1; i <= 1; i++) { const rain = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5, 6), skyMat); rain.position.set(i*0.4, 0.2, 0); mGroup.add(rain); }")
        elif mid == 14: # Mutualism Bee & Flower
            g.append("const fl = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.2, 5), crimsonMat); fl.position.x = -0.7; mGroup.add(fl);")
            g.append("const bee = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), goldMat); bee.scale.set(1.4, 0.8, 0.8); bee.position.set(0.7, 0.4, 0); mGroup.add(bee);")
        elif mid == 15: # Commensalism Orchid Epiphyte
            g.append("const bough = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.6, 16), amberMat); bough.rotation.z = 1.2; mGroup.add(bough);")
            g.append("const orchid = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.0, 5), purpleMat); orchid.position.set(0, 0.6, 0.3); mGroup.add(orchid);")
        elif mid == 16: # Parasitism Cuscuta Haustorium
            g.append("const hostStem = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 2.6, 16), deepGreenMat); mGroup.add(hostStem);")
            g.append("const cuscuta = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.1, 12, 32, Math.PI*4), goldMat); mGroup.add(cuscuta);")
        elif mid == 17: # Interspecific Competition
            g.append("const res = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.3, 16), goldMat); mGroup.add(res);")
            g.append("const sp1 = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 12), crimsonMat); sp1.position.x = -1.1; mGroup.add(sp1);")
            g.append("const sp2 = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 12), skyMat); sp2.position.x = 1.1; mGroup.add(sp2);")
        elif mid == 18: # Sundarbans Mangrove Pneumatophores
            g.append("const waterPlate = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.25, 24), darkMat); waterPlate.position.y = -1.0; mGroup.add(waterPlate);")
            g.append("for (let i = 0; i < 7; i++) { const pneu = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.5 + (i%3)*0.3, 8), amberMat); const th = i * Math.PI / 3.5; pneu.position.set(Math.cos(th)*1.0, 0, Math.sin(th)*1.0); mGroup.add(pneu); }")
        elif mid == 19: # Biodiversity Extinction Crisis
            g.append("const globeCrack = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 20), darkMat); mGroup.add(globeCrack);")
            g.append("const redX = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.25, 0.3), redMat); redX.rotation.z = 0.78; mGroup.add(redX);")
            g.append("const redX2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.25, 0.3), redMat); redX2.rotation.z = -0.78; mGroup.add(redX2);")
        else: # Model 20: In-situ / Ex-situ Conservation
            g.append("const dome = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 20, 0, Math.PI*2, 0, Math.PI*0.5), glassMat); mGroup.add(dome);")
            g.append("const rarePlant = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 8), emeraldMat); rarePlant.position.y = 0.4; mGroup.add(rarePlant);")

    # ------------------ CHAPTER 14 (Biotechnology) ------------------
    elif ch == 14:
        if mid == 1: # Scope Biotechnology
            g.append("const bioHub = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 2), cyanMat); mGroup.add(bioHub);")
            g.append("const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 12, 32), goldMat); mGroup.add(ring1);")
            g.append("const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 12, 32), redMat); ring2.rotation.x = Math.PI/2; mGroup.add(ring2);")
        elif mid == 2: # Cellular Totipotency
            g.append("const singleCell = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), emeraldMat); singleCell.position.x = -1.1; mGroup.add(singleCell);")
            g.append("const fullPlant = new THREE.Mesh(new THREE.ConeGeometry(0.65, 1.6, 8), deepGreenMat); fullPlant.position.x = 1.0; mGroup.add(fullPlant);")
            g.append("const transArrow = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), goldMat); transArrow.rotation.z = -Math.PI/2; mGroup.add(transArrow);")
        elif mid == 3: # Laminar Airflow Bench
            g.append("const cabinet = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.8, 1.4), darkMat); mGroup.add(cabinet);")
            g.append("const sash = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.4, 0.05), glassMat); sash.position.z = 0.7; mGroup.add(sash);")
            g.append("const uvLight = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.0, 8), purpleMat); uvLight.position.set(0, 0.7, 0); uvLight.rotation.z = Math.PI/2; mGroup.add(uvLight);")
        elif mid == 4: # MS Nutrient Flask
            g.append("const flask = new THREE.Mesh(new THREE.ConeGeometry(1.1, 1.8, 16), glassMat); mGroup.add(flask);")
            g.append("const medium = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.05, 0.5, 16), amberMat); medium.position.y = -0.65; mGroup.add(medium);")
            g.append("const explant = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25), emeraldMat); explant.position.set(0, -0.35, 0); mGroup.add(explant);")
        elif mid == 5: # Callus Formation
            g.append("for (let i = 0; i < 14; i++) { const nodule = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 10), emeraldMat); const th = i * 0.8; nodule.position.set(Math.cos(th)*0.8, Math.sin(th)*0.7, (i%3)*0.4 - 0.4); mGroup.add(nodule); }")
        elif mid == 6: # Organogenesis Plantlet
            g.append("const testtube = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.6, 16), glassMat); mGroup.add(testtube);")
            g.append("const agar = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.8, 16), amberMat); agar.position.y = -0.85; mGroup.add(agar);")
            g.append("const shoot = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8), emeraldMat); shoot.position.y = 0.2; mGroup.add(shoot);")
            g.append("const leafTip = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.5, 6), emeraldMat); leafTip.position.y = 0.9; mGroup.add(leafTip);")
        elif mid == 7: # Plantlet Acclimatization
            g.append("const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 0.9, 16), amberMat); pot.position.y = -0.7; mGroup.add(pot);")
            g.append("const plant = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.4, 8), emeraldMat); plant.position.y = 0.4; mGroup.add(plant);")
            g.append("const jarCover = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.0, 16), glassMat); jarCover.position.y = 0.2; mGroup.add(jarCover);")
        elif mid == 8: # rDNA Technology Overview
            g.append("const donorDNA = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.6, 8), redMat); donorDNA.position.x = -1.0; mGroup.add(donorDNA);")
            g.append("const plasmidV = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.16, 12, 24), skyMat); plasmidV.position.x = 0.7; mGroup.add(plasmidV);")
            g.append("const ligaseLink = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 10), goldMat); ligaseLink.position.set(0.7, 0.8, 0); mGroup.add(ligaseLink);")
        elif mid == 9: # Bacterial Plasmid pBR322
            g.append("const plasmidRing = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.18, 16, 48), skyMat); mGroup.add(plasmidRing);")
            g.append("const oriSite = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.24, 16, 16, Math.PI*0.3), goldMat); mGroup.add(oriSite);")
            g.append("const ampR = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.24, 16, 16, Math.PI*0.4), redMat); ampR.rotation.z = Math.PI*0.8; mGroup.add(ampR);")
            g.append("const mcsSite = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), emeraldMat); mcsSite.position.set(1.4, 0, 0); mGroup.add(mcsSite);")
        elif mid == 10: # Restriction Enzyme EcoRI
            g.append("const dnaStrand = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.8, 12), skyMat); dnaStrand.rotation.z = Math.PI/2; mGroup.add(dnaStrand);")
            g.append("const scissorL = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.0, 8), goldMat); scissorL.position.set(0, 0.6, 0); scissorL.rotation.z = 0.4; mGroup.add(scissorL);")
            g.append("const scissorR = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.0, 8), goldMat); scissorR.position.set(0, -0.6, 0); scissorR.rotation.z = -0.4; mGroup.add(scissorR);")
        elif mid == 11: # Sticky Ends Overhangs
            g.append("const strandL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 0.2), skyMat); strandL.position.set(-0.7, 0.2, 0); mGroup.add(strandL);")
            g.append("const overhang = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.2), redMat); overhang.position.set(0, 0.2, 0); mGroup.add(overhang);")
            g.append("const strandR = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 0.2), skyMat); strandR.position.set(0.7, -0.2, 0); mGroup.add(strandR);")
        elif mid == 12: # DNA Ligase Enzyme
            g.append("const dna1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 8), skyMat); dna1.position.x = -0.8; dna1.rotation.z = Math.PI/2; mGroup.add(dna1);")
            g.append("const dna2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 8), redMat); dna2.position.x = 0.8; dna2.rotation.z = Math.PI/2; mGroup.add(dna2);")
            g.append("const ligaseClamp = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.22, 12, 24), goldMat); mGroup.add(ligaseClamp);")
        elif mid == 13: # Transformation CaCl2
            g.append("const bact = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.7, 1.6, 16, 16) : new THREE.CylinderGeometry(0.7, 0.7, 1.6, 16), cyanMat); mGroup.add(bact);")
            g.append("const plasmidIn = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.08, 8, 16), redMat); plasmidIn.position.set(0.8, 0.5, 0); mGroup.add(plasmidIn);")
            g.append("const caIons = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), goldMat); caIons.position.set(0.6, 0.2, 0); mGroup.add(caIons);")
        elif mid == 14: # Fermenter Bioreactor
            g.append("const vat = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 2.4, 24), skyMat); mGroup.add(vat);")
            g.append("const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.6, 12), darkMat); mGroup.add(shaft);")
            g.append("for (let i = -1; i <= 1; i++) { const impeller = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 0.3), goldMat); impeller.position.y = i*0.6; mGroup.add(impeller); }")
        elif mid == 15: # Recombinant Human Insulin
            g.append("const aChain = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.8, 8), skyMat); aChain.position.y = 0.4; aChain.rotation.z = Math.PI/2; mGroup.add(aChain);")
            g.append("const bChain = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 8), redMat); bChain.position.y = -0.4; bChain.rotation.z = Math.PI/2; mGroup.add(bChain);")
            g.append("for (let i = -1; i <= 1; i += 2) { const disulf = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.8, 6), goldMat); disulf.position.x = i*0.5; mGroup.add(disulf); }")
        elif mid == 16: # Bt Brinjal
            g.append("const brinjal = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 20), purpleMat); brinjal.scale.set(0.8, 1.4, 0.8); mGroup.add(brinjal);")
            g.append("const btCryst = new THREE.Mesh(new THREE.OctahedronGeometry(0.4), goldMat); btCryst.position.set(0, 0, 0.75); mGroup.add(btCryst);")
        elif mid == 17: # Golden Rice Beta-Carotene
            g.append("for (let i = 0; i < 4; i++) { const grain = new THREE.Mesh(new THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.25, 0.9, 12, 12) : new THREE.CylinderGeometry(0.25, 0.25, 0.9, 12), goldMat); grain.position.set((i%2)*0.6 - 0.3, (i>1?0.5:-0.5), 0); grain.rotation.z = 0.3; mGroup.add(grain); }")
        elif mid == 18: # Salinity Tolerant Crops
            g.append("const ricePlant = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.0, 8), emeraldMat); mGroup.add(ricePlant);")
            g.append("const saltCrystal = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), whiteMat); saltCrystal.position.set(0.7, -0.6, 0); mGroup.add(saltCrystal);")
        elif mid == 19: # Interferon & Vaccine
            g.append("const virVesicle = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 1), skyMat); mGroup.add(virVesicle);")
            g.append("for (let i = 0; i < 6; i++) { const spike = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), redMat); const th = i * Math.PI / 3; spike.position.set(Math.cos(th)*1.2, Math.sin(th)*1.2, 0); mGroup.add(spike); }")
        else: # Model 20: Biosafety & Bioethics
            g.append("const bioShield = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 0.9, 1.6, 6), emeraldMat); mGroup.add(bioShield);")
            g.append("const dnaGlow = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.14, 12, 24), goldMat); dnaGlow.position.z = 0.35; mGroup.add(dnaGlow);")
            
    return g

# File 1: Ch 1 to 5
def write_ch1to5():
    code = [
        "/**",
        " * @license",
        " * SPDX-License-Identifier: Apache-2.0",
        " */",
        "import * as THREE from 'three';",
        "import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';",
        "",
        "type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;",
        "",
        "export function buildBiologyCh1to5Scene(",
        "  modelId: number,",
        "  chapter: number,",
        "  group: THREE.Group,",
        "  refs: any,",
        "  addAnchor: AddAnchorFn",
        ") {",
        "  const normId = Math.max(1, Math.min(20, modelId));",
        "  const models = BIOLOGY_3D_CATALOG[chapter] || [];",
        "  const meta: Biology3DModelMeta = models[normId - 1] || models[0];",
        "",
        "  // Materials",
        "  const emeraldMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.35 });",
        "  const deepGreenMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.4 });",
        "  const cyanMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.3, metalness: 0.2 });",
        "  const skyMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.25 });",
        "  const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 });",
        "  const crimsonMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.3 });",
        "  const amberMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.35 });",
        "  const purpleMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3 });",
        "  const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.3, roughness: 0.2 });",
        "  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.5, roughness: 0.1 });",
        "  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });",
        "  const boneMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3 });",
        "  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });",
        ""
    ]
    for ch in range(1, 6):
        code.append(generate_chapter_code(ch))
    code.append("}")
    
    with open('src/components/ThreeDBiologyCh1to5Scenes.ts', 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    print("Generated ThreeDBiologyCh1to5Scenes.ts successfully!")

# File 2: Ch 6 to 10
def write_ch6to10():
    code = [
        "/**",
        " * @license",
        " * SPDX-License-Identifier: Apache-2.0",
        " */",
        "import * as THREE from 'three';",
        "import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';",
        "",
        "type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;",
        "",
        "export function buildBiologyCh6to10Scene(",
        "  modelId: number,",
        "  chapter: number,",
        "  group: THREE.Group,",
        "  refs: any,",
        "  addAnchor: AddAnchorFn",
        ") {",
        "  const normId = Math.max(1, Math.min(20, modelId));",
        "  const models = BIOLOGY_3D_CATALOG[chapter] || [];",
        "  const meta: Biology3DModelMeta = models[normId - 1] || models[0];",
        "",
        "  // Materials",
        "  const emeraldMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.35 });",
        "  const deepGreenMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.4 });",
        "  const cyanMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.3, metalness: 0.2 });",
        "  const skyMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.25 });",
        "  const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 });",
        "  const crimsonMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.3 });",
        "  const amberMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.35 });",
        "  const purpleMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3 });",
        "  const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.3, roughness: 0.2 });",
        "  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.5, roughness: 0.1 });",
        "  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });",
        "  const boneMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3 });",
        "  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });",
        ""
    ]
    for ch in range(6, 11):
        code.append(generate_chapter_code(ch))
    code.append("}")
    
    with open('src/components/ThreeDBiologyCh6to10Scenes.ts', 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    print("Generated ThreeDBiologyCh6to10Scenes.ts successfully!")

# File 3: Ch 11 to 14
def write_ch11to14():
    code = [
        "/**",
        " * @license",
        " * SPDX-License-Identifier: Apache-2.0",
        " */",
        "import * as THREE from 'three';",
        "import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';",
        "",
        "type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;",
        "",
        "export function buildBiologyCh11to14Scene(",
        "  modelId: number,",
        "  chapter: number,",
        "  group: THREE.Group,",
        "  refs: any,",
        "  addAnchor: AddAnchorFn",
        ") {",
        "  const normId = Math.max(1, Math.min(20, modelId));",
        "  const models = BIOLOGY_3D_CATALOG[chapter] || [];",
        "  const meta: Biology3DModelMeta = models[normId - 1] || models[0];",
        "",
        "  // Materials",
        "  const emeraldMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.35 });",
        "  const deepGreenMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.4 });",
        "  const cyanMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.3, metalness: 0.2 });",
        "  const skyMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.25 });",
        "  const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 });",
        "  const crimsonMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.3 });",
        "  const amberMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.35 });",
        "  const purpleMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3 });",
        "  const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.3, roughness: 0.2 });",
        "  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.5, roughness: 0.1 });",
        "  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });",
        "  const boneMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3 });",
        "  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });",
        ""
    ]
    for ch in range(11, 15):
        code.append(generate_chapter_code(ch))
    code.append("}")
    
    with open('src/components/ThreeDBiologyCh11to14Scenes.ts', 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    print("Generated ThreeDBiologyCh11to14Scenes.ts successfully!")

write_ch1to5()
write_ch6to10()
write_ch11to14()
