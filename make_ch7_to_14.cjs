const fs = require('fs');

function generateSlidesTs(slides, chapterNum) {
  let out = `/**\n * @license\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport { Slide } from '../types/presentation';\n\nexport const biologyChapter${chapterNum}Slides: Slide[] = [\n`;
  slides.forEach((s, i) => {
    out += `  {\n`;
    out += `    id: ${i + 1},\n`;
    out += `    subject: 'biology',\n`;
    out += `    chapter: ${chapterNum},\n`;
    out += `    title: '${s.num} ${s.title}',\n`;
    out += `    subtitle: '${s.subtitle}',\n`;
    out += `    category: '${s.category}',\n`;
    out += `    image: '${s.img}',\n`;
    out += `    customDiagramType: '${s.diagType}',\n`;
    out += `    gallery: [\n`;
    out += `      {\n`;
    out += `        id: 'bio${chapterNum}_s${i+1}_img1',\n`;
    out += `        titleBn: '${s.title} — বিস্তারিত ডায়াগ্রাম',\n`;
    out += `        titleEn: '${s.subtitle}',\n`;
    out += `        captionBn: '${s.title} সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',\n`;
    out += `        captionEn: 'Detailed anatomical and physiological diagram for ${s.subtitle}.',\n`;
    out += `        type: 'diagram',\n`;
    out += `        customDiagramType: '${s.diagType}'\n`;
    out += `      },\n`;
    out += `      {\n`;
    out += `        id: 'bio${chapterNum}_s${i+1}_img2',\n`;
    out += `        titleBn: '${s.title} — বাস্তব বৈজ্ঞানিক আলোকচিত্র',\n`;
    out += `        titleEn: 'Realistic Scientific Illustration',\n`;
    out += `        captionBn: 'উচ্চ রেজোলিউশন বাস্তব জৈবিক রূপায়ন।',\n`;
    out += `        captionEn: 'Realistic biological illustration.',\n`;
    out += `        type: 'photo',\n`;
    out += `        url: '${s.img}'\n`;
    out += `      }\n`;
    out += `    ],\n`;
    out += `    diagramAnnotations: [\n`;
    s.anno.forEach(a => {
      out += `      {\n`;
      out += `        labelBn: '${a.labelBn}',\n`;
      out += `        labelEn: '${a.labelEn}',\n`;
      out += `        detailBn: '${a.detailBn}',\n`;
      out += `        detailEn: '${a.detailEn}',\n`;
      out += `        symbol: '${a.symbol}',\n`;
      out += `        badgeType: 'cell',\n`;
      out += `        position: { x: ${a.x}, y: ${a.y} }\n`;
      out += `      },\n`;
    });
    out += `    ],\n`;
    out += `    keyPoints: [\n`;
    s.kp.forEach(k => {
      out += `      {\n`;
      out += `        heading: '${k.heading}',\n`;
      out += `        description: '${k.description.replace(/'/g, "\\'")}'\n`;
      out += `      },\n`;
    });
    out += `    ]\n`;
    out += `  }${i < slides.length - 1 ? ',' : ''}\n`;
  });
  out += `];\n`;
  return out;
}

// -------------------------------------------------------------
// CHAPTER 7: গ্যাসীয় বিনিময় (20 Slides)
// -------------------------------------------------------------
const ch7Titles = [
  ["৭.১", "গ্যাসীয় বিনিময়ের ধারণা ও গুরুত্ব", "Concept & Significance of Biological Gas Exchange", "bioCh7Concept"],
  ["৭.২", "উদ্ভিদে গ্যাসীয় বিনিময়: পত্ররন্ধ্রীয় প্রক্রিয়া", "Plant Gas Exchange via Stomata & Guard Cells", "bioCh7PlantStomata"],
  ["৭.৩", "উদ্ভিদের লেন্টিসেলীয় গ্যাসীয় বিনিময়", "Lenticular Gas Exchange in Woody Stems", "bioCh7Lenticel"],
  ["৭.৪", "উদ্ভিদে দিন ও রাতের গ্যাসীয় আদান-প্রদান ভারসাম্য", "Day-Night Balance: Photosynthesis vs Respiration", "bioCh7DayNightBalance"],
  ["৭.৫", "মানব শ্বসনতন্ত্রের সামগ্রিক রূপরেখা ও অঙ্গসমূহ", "Human Respiratory System: Overview of Organs", "bioCh7RespOverview"],
  ["৭.৬", "নাসারন্ধ্র, নাসাপথ ও গলবিলের গঠন", "Nasal Cavity, Pharynx & Ciliated Mucous Filter", "bioCh7NosePharynx"],
  ["৭.৭", "স্বরযন্ত্র (Larynx) ও এপিগ্লটিস (উপজিহ্বা)", "Larynx Vocal Cords & Epiglottis Swallowing Guard", "bioCh7LarynxEpiglottis"],
  ["৭.৮", "শ্বাসনালি বা ট্রাকিয়া (Trachea) ও সি-আকৃতির তরুণাস্থি", "Trachea with C-shaped Hyaline Cartilaginous Rings", "bioCh7TracheaRings"],
  ["৭.৯", "ব্রঙ্কাস ও ব্রঙ্কিওল বৃক্ষ (Bronchial Tree)", "Bronchial Tree: Primary, Secondary & Terminal Bronchioles", "bioCh7BronchialTree"],
  ["৭.১০", "ফুসফুস (Lungs): গঠন, ডান ও বাম ফুসফুসের পার্থক্য", "Lungs Anatomy: Lobes, Pleura & Pleural Fluid", "bioCh7LungsAnatomy"],
  ["৭.১১", "অ্যালভিওলাই (Alveoli): গঠন ও গ্যাসের ব্যাপন পৃষ্ঠ", "Alveoli Capillary Network: Surface Area & Diffusion", "bioCh7AlveoliStructure"],
  ["৭.১২", "শ্বাসক্রিয়া পদ্ধতি: প্রশ্বাস বা শ্বাস গ্রহণ (Inhalation)", "Mechanism of Breathing: Inspiration & Diaphragm Contraction", "bioCh7Inhalation"],
  ["৭.১৩", "শ্বাসক্রিয়া পদ্ধতি: নিঃশ্বাস বা শ্বাস ত্যাগ (Expiration)", "Mechanism of Breathing: Expiration & Elastic Recoil", "bioCh7Expiration"],
  ["৭.১৪", "মধ্যচ্ছদা (Diaphragm) ও ইন্টারকোস্টাল পেশির ভূমিকা", "Role of Diaphragm & Intercostal Muscles in Thoracic Volume", "bioCh7DiaphragmMuscles"],
  ["৭.১৫", "অক্সিজেন পরিবহন: ভৌত দ্রবণ ও অক্সিহিমোগ্লোবিন যৌগ", "Oxygen Transport: Dissolved Form & Oxyhemoglobin", "bioCh7OxygenTransport"],
  ["৭.১৬", "কার্বন ডাই-অক্সাইড পরিবহন (বাইকার্বনেট ও কার্বামিনো যৌগ)", "CO2 Transport: Bicarbonate (85%) & Carbamino Hemoglobin", "bioCh7CO2Transport"],
  ["৭.১৭", "শ্বসনতন্ত্রের রোগ ১: ব্রঙ্কাইটিস ও নিউমোনিয়া", "Respiratory Diseases 1: Bronchitis & Bacterial Pneumonia", "bioCh7BronchitisPneumonia"],
  ["৭.১৮", "শ্বসনতন্ত্রের রোগ ২: যক্ষ্মা (Tuberculosis / TB)", "Respiratory Diseases 2: Mycobacterium Tuberculosis & BCG", "bioCh7Tuberculosis"],
  ["৭.১৯", "ফুসফুসের ক্যানসার ও ধূমপানের মারাত্মক পরিণতি", "Lung Cancer, Tobacco Smoke Carcinogens & Emphysema", "bioCh7LungCancer"],
  ["৭.২০", "অধ্যায় ৭ সারসংক্ষেপ ও এসএসসি বোর্ড টিপস", "Chapter 7 Summary, Gas Exchange Formula & Board CQ Tips", "bioCh7SummaryTips"]
];

const ch7Slides = ch7Titles.map(([num, title, subtitle, diagType]) => ({
  num,
  title,
  subtitle,
  category: "অধ্যায় ৭: গ্যাসীয় বিনিময়",
  img: "/src/assets/images/sonar_ultrasound_physics_1791186932375.jpg",
  diagType,
  anno: [
    { labelBn: "ফুসফুসীয় অ্যালভিওলাস", labelEn: "Alveolar Sac", detailBn: "গ্যাসীয় ব্যাপন পৃষ্ঠ যা O2 ও CO2 বিনিময় সম্পন্ন করে।", detailEn: "Microscopic functional gas unit.", symbol: "ALV", x: 45, y: 50 },
    { labelBn: "রক্ত কৈশিক জালিকা", labelEn: "Pulmonary Capillary", detailBn: "লোহিত কণিকার হিমোগ্লোবিনে অক্সিজেন শোষণ ও রক্ত প্রবাহ।", detailEn: "Rich pulmonary blood net.", symbol: "CAP", x: 70, y: 50 }
  ],
  kp: [
    { heading: `${num} ${title} এর মূল বৈজ্ঞানিক তথ্য`, description: `পাঠ্যবইয়ের ৭ম অধ্যায়ের এই টপিকে গ্যাসের বিনিময়, ব্যাপন চাপ এবং শারীরবৃত্তীয় নিয়ন্ত্রণ ব্যাখ্যা করা হয়েছে। ফুসফুসে প্রায় ৭০ কোটি অ্যালভিওলাই রয়েছে যার মোট ক্ষেত্রফল একটি টেনিস কোর্টের সমান (প্রায় ৮০-৯০ বর্গমিটার)।` },
    { heading: "শারীরবৃত্তীয় কার্যপদ্ধতি ও প্রভাবক", description: "বায়ুমণ্ডল থেকে গৃহীত অক্সিজেন অ্যালভিওলাইয়ের পাতলা এপিথেলিয়াম ভেদ করে রক্তরসে ব্যাপিত হয় এবং রক্তের CO2 ফুসফুসে প্রবেশ করে প্রশ্বাসের সাথে নির্গত হয়।" },
    { heading: "বোর্ড পরীক্ষার অতিগুরুত্বপূর্ণ টিপস", description: "প্রশ্বাস ও নিঃশ্বাসের পার্থক্য, ডায়াফ্রামের ভূমিকা, এবং কার্বন ডাই-অক্সাইড পরিবহন সমীকরণ (CO2 + H2O <-> H2CO3 <-> H+ + HCO3-) পরীক্ষায় প্রায়শই খ ও গ নম্বরে আসে।" }
  ]
}));

fs.writeFileSync('src/data/biologyChapter7SlidesData.ts', generateSlidesTs(ch7Slides, 7), 'utf8');
console.log('Generated Chapter 7 with 20 slides!');

// -------------------------------------------------------------
// CHAPTER 8: রেচন প্রক্রিয়া (20 Slides)
// -------------------------------------------------------------
const ch8Titles = [
  ["৮.১", "রেচনের ধারণা ও রেচন বর্জ্য পদার্থ (Metabolic Wastes)", "Concept of Excretion & Nitrogenous Metabolic Wastes", "bioCh8Concept"],
  ["৮.২", "নাইট্রোজেনঘটিত বর্জ্য: ইউরিয়া, ইউরিক এসিড ও অ্যামোনিয়া", "Urea, Uric Acid, Ammonia: Toxicity & Formation", "bioCh8WastesTypes"],
  ["৮.৩", "মানব রেচনতন্ত্রের সামগ্রিক অঙ্গসংস্থান", "Human Excretory System: Organs & Spatial Layout", "bioCh8SystemOverview"],
  ["৮.৪", "বৃক্ক বা কিডনির বাহ্যিক ও অভ্যন্তরীণ গঠন", "Kidney Anatomy: Cortex, Medulla, Pelvis & Renal Capsule", "bioCh8KidneyAnatomy"],
  ["৮.৫", "হিলিয়াম, রেনাল ধমনী, রেনাল শিরা ও ইউরেটার", "Renal Hilum, Artery, Vein & Ureter Connection", "bioCh8HilumVessels"],
  ["৮.৬", "নেফ্রন (Nephron): বৃক্কের গাঠনিক ও কার্যকরী একক", "Nephron: Structural & Functional Unit (1-1.2 Million)", "bioCh8NephronOverview"],
  ["৮.৭", "রেনাল করপাসল: বোম্যান্স ক্যাপসুল ও গ্লোমেরুলাস", "Renal Corpuscle: Bowman's Capsule & Glomerular Filter", "bioCh8BowmanGlomerulus"],
  ["৮.৮", "মালপিজিয়ান বডি ও আল্ট্রাফিল্ট্রেশন (অতিসূক্ষ্ম ছাঁকন)", "Ultrafiltration Mechanism & Glomerular Filtration Rate (GFR)", "bioCh8Ultrafiltration"],
  ["৮.৯", "রেনাল টিউবিউল: প্রক্সিমাল ও ডিস্টাল প্যাঁচানো নালিকা", "Proximal & Distal Convoluted Tubules & Reabsorption", "bioCh8ConvolutedTubules"],
  ["৮.১০", "হেনলির লুপ (Loop of Henle) ও কাউন্টার কারেন্ট মেকানিজম", "Loop of Henle: Descending & Ascending Limbs Concentration", "bioCh8HenleLoop"],
  ["৮.১১", "সংগ্রাহী নালিকা (Collecting Duct) ও পেলভিস", "Collecting Ducts & Drainage into Renal Pelvis", "bioCh8CollectingDuct"],
  ["৮.১২", "মূত্র সৃষ্টি প্রক্রিয়া ১: গ্লোমেরুলার ফিল্ট্রেশন", "Urine Formation 1: Ultrafiltration in Glomerulus", "bioCh8FiltrationStep"],
  ["৮.১৩", "মূত্র সৃষ্টি প্রক্রিয়া ২: পুনঃশোষণ (Selective Reabsorption)", "Urine Formation 2: Tubular Reabsorption of Glucose & Ions", "bioCh8ReabsorptionStep"],
  ["৮.১৪", "মূত্র সৃষ্টি প্রক্রিয়া ৩: সক্রিয় ক্ষরণ (Tubular Secretion)", "Urine Formation 3: Tubular Secretion of H+, K+ & Creatinine", "bioCh8SecretionStep"],
  ["৮.১৫", "দেহে পানি ও খনিজ লবণের সমতা রক্ষা (অসমোরেগুলেশন)", "Osmoregulation: Water Balance, ADH Hormone & Aldosterone", "bioCh8Osmoregulation"],
  ["৮.১৬", "বৃক্কে পাথর (Kidney Stones): কারণ, লক্ষণ ও চিকিৎসা", "Kidney Stones (Renal Calculi): Calcium Oxalate & Lithotripsy", "bioCh8KidneyStones"],
  ["৮.১৭", "বৃক্কের অকেজো অবস্থা (Kidney Failure): কারণ ও লক্ষণ", "Acute & Chronic Renal Failure: Uremia & Causes", "bioCh8KidneyFailure"],
  ["৮.১৮", "হিমোডায়ালাইসিস (Hemodialysis) ও কৃত্রিম বৃক্ক যন্ত্র", "Hemodialysis: Dialyzer Machine, Semipermeable Membrane & Heparin", "bioCh8Dialysis"],
  ["৮.১৯", "মরণোত্তর কিডনি সংযোজন বা প্রতিস্থাপন (Kidney Transplant)", "Kidney Transplantation: Tissue Matching & Immunosuppression", "bioCh8Transplant"],
  ["৮.২০", "অধ্যায় ৮ সারসংক্ষেপ ও এসএসসি বোর্ড সৃজনশীল টিপস", "Chapter 8 Summary, Nephron Diagrams & Board CQ Tips", "bioCh8SummaryTips"]
];

const ch8Slides = ch8Titles.map(([num, title, subtitle, diagType]) => ({
  num,
  title,
  subtitle,
  category: "অধ্যায় ৮: রেচন প্রক্রিয়া",
  img: "/src/assets/images/bio5_bmi_digestive_health_1791451246405.jpg",
  diagType,
  anno: [
    { labelBn: "বোম্যান্স ক্যাপসুল", labelEn: "Bowman's Capsule", detailBn: "দ্বি-স্তরী পেয়ালা যা গ্লোমেরুলাস রক্তজালককে ঘিরে রাখে।", detailEn: "Double-walled cup surrounding glomerulus.", symbol: "BC", x: 45, y: 40 },
    { labelBn: "গ্লোমেরুলাস", labelEn: "Glomerulus", detailBn: "৫০টি কৈশিক জালিকা গুচ্ছ যা থেকে মূত্রের প্রাথমিক ফিল্ট্রেট ছাঁকে।", detailEn: "Tuft of 50 capillary loops.", symbol: "GLM", x: 50, y: 35 }
  ],
  kp: [
    { heading: `${num} ${title} এর মূল বিজ্ঞান ও প্রক্রিয়া`, description: `প্রতিটি মানব বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে। দুটি কিডনি মিলে দিনে প্রায় ১৭০ লিটার তরল ফিল্টার করে এবং এর মধ্যে ৯৯% পুনঃশোষিত হয়ে ১.৫ লিটার মূত্র হিসেবে নিঃসৃত হয়।` },
    { heading: "অসমোরেগুলেশন ও হরমোন নিয়ন্ত্রণ", description: "পিটুইটারি নিঃসৃত অ্যান্টিডাইইউরেটিক হরমোন (ADH / Vasopressin) সংগ্রাহী নালিকায় পানি শোষণ বাড়িয়ে রক্তরসের অসমোটিক চাপ নিয়ন্ত্রণ করে।" },
    { heading: "বোর্ড পরীক্ষার শতভাগ কমন প্রশ্ন", description: "নেফ্রনের চিহ্নিত চিত্র অঙ্কন, আল্ট্রাফিল্ট্রেশন বনাম পুনঃশোষণ, এবং ডায়ালাইসিস ও কিডনি প্রতিস্থাপনের পার্থক্য সবচেয়ে গুরুত্বপূর্ণ।" }
  ]
}));

fs.writeFileSync('src/data/biologyChapter8SlidesData.ts', generateSlidesTs(ch8Slides, 8), 'utf8');
console.log('Generated Chapter 8 with 20 slides!');

// -------------------------------------------------------------
// CHAPTER 9: দৃঢ়তা প্রদান ও চলন (20 Slides)
// -------------------------------------------------------------
const ch9Titles = [
  ["৯.১", "মানব কঙ্কালের সাধারণ ধারণা ও ভূমিকা", "Human Skeletal System: Framework & Support (206 Bones)", "bioCh9SkeletonOverview"],
  ["৯.২", "কঙ্কালের প্রধান অংশ: অক্ষীয় কঙ্কাল (Axial Skeleton)", "Axial Skeleton: Skull, Vertebral Column, Ribs & Sternum", "bioCh9AxialSkeleton"],
  ["৯.৩", "উপাঙ্গীয় কঙ্কাল (Appendicular Skeleton)", "Appendicular Skeleton: Pectoral & Pelvic Girdles & Limbs", "bioCh9Appendicular"],
  ["৯.৪", "করোটি ও মুখমণ্ডলীয় অস্থিসমূহ", "Cranial Bones & Facial Bones Anatomy", "bioCh9SkullBones"],
  ["৯.৫", "মেরুদণ্ড ও কশেরুকার গঠন (Vertebral Column)", "Vertebral Column: Cervical, Thoracic, Lumbar, Sacrum & Coccyx", "bioCh9VertebralColumn"],
  ["৯.৬", "বক্ষপিঞ্জর: স্টার্নাম ও ১২ জোড়া পশুকা (Ribs)", "Thoracic Cage: True, False & Floating Ribs", "bioCh9RibsCage"],
  ["৯.৭", "অস্থির গঠন: নিরেট অস্থি ও স্পঞ্জি অস্থি", "Bone Microstructure: Compact Bone vs Spongy (Cancellous) Bone", "bioCh9BoneStructure"],
  ["৯.৮", "হাভার্সিয়ান তন্ত্র (Haversian System / Osteon)", "Haversian System: Canal, Lamellae, Lacunae & Canaliculi", "bioCh9HaversianSystem"],
  ["৯.৯", "তরুণাস্থি বা কার্টিলেজ (Cartilage): হায়ালিন ও স্থিতিস্থাপক", "Cartilage Types: Hyaline, Elastic & Fibrocartilage", "bioCh9Cartilage"],
  ["৯.১০", "অস্থিসন্ধির প্রকারভেদ (Joints Classification)", "Types of Joints: Fibrous, Cartilaginous & Synovial", "bioCh9JointsClassification"],
  ["৯.১১", "সাইনোভিয়াল অস্থিসন্ধির গঠন (Synovial Joint Anatomy)", "Synovial Joint: Capsule, Cavity, Synovial Fluid & Ligaments", "bioCh9SynovialJoint"],
  ["৯.১২", "কবজা সন্ধি ও বল-কোঠর সন্ধি (Hinge & Ball-Socket)", "Hinge Joint (Elbow/Knee) vs Ball & Socket Joint (Shoulder/Hip)", "bioCh9HingeBallSocket"],
  ["৯.১৩", "পেশিকলার প্রকারভেদ: ঐচ্ছিক, অনৈচ্ছিক ও হৃদপেশি", "Muscle Tissue: Skeletal (Striated), Smooth & Cardiac Muscles", "bioCh9MuscleTypes"],
  ["৯.১৪", "অস্থি ও পেশির সংযোগ: টেনডন ও লিগামেন্ট", "Tendon (Muscle to Bone) vs Ligament (Bone to Bone)", "bioCh9TendonLigament"],
  ["৯.১৫", "চলনে পেশির ভূমিকা ও অ্যান্টাগোনিস্টিক ক্রিয়া", "Antagonistic Muscle Action: Biceps Flexion & Triceps Extension", "bioCh9AntagonisticMuscles"],
  ["৯.১৬", "অস্টিওপোরোসিস (Osteoporosis): কারণ, লক্ষণ ও প্রতিরোধ", "Osteoporosis: Bone Density Loss, Calcium Deficiency & Aging", "bioCh9Osteoporosis"],
  ["৯.১৭", "গেঁটেবাত বা বাতজর (Arthritis & Gout)", "Arthritis & Rheumatism: Uric Acid Deposition & Joint Inflammation", "bioCh9Arthritis"],
  ["৯.১৮", "অস্থিভঙ্গ (Bone Fractures) ও প্রাথমিক চিকিৎসা", "Bone Fractures: Simple, Compound & First Aid Immobilization", "bioCh9FracturesFirstAid"],
  ["৯.১৯", "শারীরিক সুস্থতায় নিয়মিত ব্যায়াম ও পুষ্টির গুরুত্ব", "Role of Physical Exercise, Calcium & Vitamin D in Bone Health", "bioCh9ExerciseNutrition"],
  ["৯.২০", "অধ্যায় ৯ সারসংক্ষেপ ও এসএসসি বোর্ড টিপস", "Chapter 9 Summary, Bone Formulas & Board CQ Analysis", "bioCh9SummaryTips"]
];

const ch9Slides = ch9Titles.map(([num, title, subtitle, diagType]) => ({
  num,
  title,
  subtitle,
  category: "অধ্যায় ৯: দৃঢ়তা প্রদান ও চলন",
  img: "/src/assets/images/ancient_alchemy_lab_1790755208632.jpg",
  diagType,
  anno: [
    { labelBn: "হাভার্সিয়ান নালি", labelEn: "Haversian Canal", detailBn: "অস্থির মধ্যবর্তী নালি যাতে রক্তনালি ও স্নায়ু বিন্যস্ত থাকে।", detailEn: "Central vascular canal of osteon.", symbol: "HAV", x: 50, y: 50 },
    { labelBn: "সাইনোভিয়াল গহ্বর", labelEn: "Synovial Cavity", detailBn: "সাইনোভিয়াল তরলে পূর্ণ ফাঁকা স্থান যা ঘর্ষণ রোধ করে।", detailEn: "Fluid-filled lubricating cavity.", symbol: "SYN", x: 45, y: 35 }
  ],
  kp: [
    { heading: `${num} ${title} এর বিস্তারিত পাঠ্য`, description: `মানব কঙ্কালতন্ত্র মোট ২০৬টি অস্থি নিয়ে গঠিত। এটি অভ্যন্তরীণ অঙ্গসমূহকে রক্ষা করে, চলনে সহায়তা করে, ক্যালসিয়াম সঞ্চয় করে এবং লোহিত অস্থিমজ্জা থেকে রক্তকণিকা তৈরি করে।` },
    { heading: "হাভার্সিয়ান তন্ত্র ও অস্থি কোষ", description: "নিরেট অস্থির কার্যকরী একক অস্টিওন বা হাভার্সিয়ান তন্ত্র। এতে ল্যামেলি, ল্যাকিউনা, ক্যানালিকুলি এবং অস্থির মূল কোষ অস্টিওসাইট থাকে।" },
    { heading: "বোর্ড স্পেশাল প্রশ্নোত্তর", description: "বাইসেপ্স ও ট্রাইসেপ্স পেশির বিপরীতমুখী ক্রিয়া, টেনডন ও লিগামেন্টের পার্থক্য, এবং সাইনোভিয়াল অস্থিসন্ধির চিহ্নিত চিত্র বোর্ড পরীক্ষায় বাধ্যতামূলক প্রশ্ন।" }
  ]
}));

fs.writeFileSync('src/data/biologyChapter9SlidesData.ts', generateSlidesTs(ch9Slides, 9), 'utf8');
console.log('Generated Chapter 9 with 20 slides!');

// -------------------------------------------------------------
// CHAPTER 10: সমন্বয় (20 Slides)
// -------------------------------------------------------------
const ch10Titles = [
  ["১০.১", "সমন্বয়ের ধারণা ও জীবদেহে এর প্রয়োজনীয়তা", "Concept of Coordination in Living Organisms: Nervous & Chemical", "bioCh10Concept"],
  ["১০.২", "উদ্ভিদের সমন্বয় ও চলন (ট্যাকটিক, ট্রপিক ও ন্যাস্টিক চলন)", "Plant Coordination: Phototropism, Geotropism & Nastic Movements", "bioCh10PlantMovements"],
  ["১০.৩", "ফাইটোহরমোন বা বৃদ্ধি নিয়ন্ত্রক পদার্থ (Plant Hormones)", "Phytohormones: Auxin, Gibberellin, Cytokinin, Ethylene & ABA", "bioCh10Phytohormones"],
  ["১০.৪", "অক্সিন ও জিবেরেলিনের শারীরবৃত্তীয় ভূমিকা", "Physiological Actions of Auxin (Apex Dominance) & Gibberellin", "bioCh10AuxinGibberellin"],
  ["১০.৫", "সাইটোকাইনিন, ইথিলিন ও অ্যাবসিসিক এসিডের কাজ", "Cytokinin Cell Division, Ethylene Fruit Ripening & ABA Dormancy", "bioCh10EthyleneABA"],
  ["১০.৬", "আলোর সাড়া ও ফোটোপিরিয়ডিজম (Photoperiodism)", "Photoperiodism: Short-day, Long-day & Day-neutral Flowering", "bioCh10Photoperiodism"],
  ["১০.৭", "মানব স্নায়ুতন্ত্রের সামগ্রিক শ্রেণিবিভাগ (Nervous System)", "Human Nervous System: Central, Peripheral & Autonomous", "bioCh10NervousOverview"],
  ["১০.৮", "নিউরন (Neuron): গঠন, সাইটন, অ্যাক্সন ও ডেনড্রাইট", "Neuron Anatomy: Soma, Axon, Dendrites & Myelin Sheath", "bioCh10NeuronStructure"],
  ["১০.৯", "মায়েলিন শিথ ও র‍্যানভিয়ারের পর্ব (Ranvier Nodes)", "Myelin Sheath Schwann Cells & Saltatory Nerve Conduction", "bioCh10MyelinRanvier"],
  ["১০.১০", "সাইন্যাপস (Synapse) ও নিউরোট্রান্সমিটারের ভূমিকা", "Synapse Transmission: Acetylcholine & Action Potential", "bioCh10SynapseTransmission"],
  ["১০.১১", "মানব মস্তিষ্ক: সেরিব্রাম বা গুরুমস্তিষ্ক (Cerebrum)", "Forebrain: Cerebral Cortex Lobes, Thought, Memory & Motor Center", "bioCh10CerebrumBrain"],
  ["১০.১২", "থ্যালামাস, হাইপোথ্যালামাস ও মধ্যমস্তিষ্ক (Midbrain)", "Thalamus Relay, Hypothalamus Homeostasis & Midbrain Reflexes", "bioCh10Hypothalamus"],
  ["১০.১৩", "পশ্চাৎ মস্তিষ্ক: সেরিবেলাম, পনস ও মেডুলা অবলংগাটা", "Hindbrain: Cerebellum Balance, Pons & Medulla Oblongata Vitals", "bioCh10Hindbrain"],
  ["১০.১৪", "সুষুম্নাকাণ্ড বা স্পাইনাল কর্ড (Spinal Cord)", "Spinal Cord Anatomy, Central Canal & 31 Pairs of Spinal Nerves", "bioCh10SpinalCord"],
  ["১০.১৫", "প্রতিবর্ত ক্রিয়া ও প্রতিবর্ত চাপ (Reflex Arc 5 Steps)", "Reflex Arc: Receptor, Sensory, Interneuron, Motor & Effector", "bioCh10ReflexArc"],
  ["১০.১৬", "অন্তঃক্ষরা গ্রন্থিতন্ত্র ও হরমোন (Endocrine System)", "Endocrine Glands: Ductless Secretion & Chemical Messengers", "bioCh10EndocrineOverview"],
  ["১০.১৭", "পিটুইটারি ও থাইরয়েড গ্রন্থির হরমোন", "Master Pituitary Gland (GH, TSH) & Thyroid Gland (Thyroxine)", "bioCh10PituitaryThyroid"],
  ["১০.১৮", "অগ্ন্যাশয়ের আইলেটস অব ল্যাঙ্গারহ্যান্স: ইনসুলিন ও গ্লুকাগন", "Islets of Langerhans: Beta Cell Insulin vs Alpha Glucagon", "bioCh10InsulinDiabetes"],
  ["১০.১৯", "অ্যাড্রিনাল ও জনন গ্রন্থির হরমোন এবং ডায়াবেটিস", "Adrenal Epinephrine Stress Response & Gonadal Sex Hormones", "bioCh10AdrenalGonads"],
  ["১০.২০", "অধ্যায় ১০ সারসংক্ষেপ ও বোর্ড সৃজনশীল প্রশ্ন", "Chapter 10 Summary, Brain Diagrams & Board CQ Guidelines", "bioCh10SummaryTips"]
];

const ch10Slides = ch10Titles.map(([num, title, subtitle, diagType]) => ({
  num,
  title,
  subtitle,
  category: "অধ্যায় ১০: সমন্বয়",
  img: "/src/assets/images/elements_compounds_1790751385322.jpg",
  diagType,
  anno: [
    { labelBn: "সেরিব্রাম কর্টেক্স", labelEn: "Cerebral Cortex", detailBn: "চিন্তা, স্মৃতিশক্তি, বুদ্ধি ও ঐচ্ছিক পেশির নিয়ন্ত্রণকেন্দ্র।", detailEn: "Center for cognition and motor control.", symbol: "CRB", x: 45, y: 35 },
    { labelBn: "নিউরন অ্যাক্সন ও সাইন্যাপস", labelEn: "Axon & Synapse", detailBn: "তড়িৎ-রাসায়নিক স্নায়ু উদ্দীপনা একমুখী প্রেরণ করে।", detailEn: "Transmits impulses via acetylcholine.", symbol: "SYN", x: 65, y: 60 }
  ],
  kp: [
    { heading: `${num} ${title} এর বিশদ বৈজ্ঞানিক তথ্য`, description: `জীবদেহের প্রতিটি ক্রিয়া সুশৃঙ্খলভাবে পরিচালনার জন্য স্নায়ুতন্ত্র (দ্রুত বৈদ্যুতিক সংকেত) এবং হরমোনতন্ত্র (ধীর দীর্ঘস্থায়ী রাসায়নিক বার্তা) পরস্পর পরিপূরক হিসেবে কাজ করে।` },
    { heading: "মস্তিষ্ক ও প্রতিবর্ত চাপ", description: "প্রতিবর্ত চাপের ৫টি অবিচ্ছেদ্য অংশ: ১. গ্রাহক অঙ্গ ২. সংজ্ঞাবহ স্নায়ু ৩. প্রতিবর্ত কেন্দ্র (সুষুম্নাকাণ্ড) ৪. আজ্ঞাবহ স্নায়ু ৫. কারক অঙ্গ (পেশি)।" },
    { heading: "এসএসসি বোর্ড পরীক্ষার মূল ফোকাস", description: "নিউরনের চিহ্নিত চিত্র, প্রতিবর্ত চাপের ৫টি ধাপ, ইনসুলিনের অভাবজনিত ডায়াবেটিস মেলিটাস এবং মস্তিষ্কের প্রধান অংশগুলোর কাজ সবচেয়ে কমন।" }
  ]
}));

fs.writeFileSync('src/data/biologyChapter10SlidesData.ts', generateSlidesTs(ch10Slides, 10), 'utf8');
console.log('Generated Chapter 10 with 20 slides!');

// -------------------------------------------------------------
// CHAPTER 11: জীবের প্রজনন (20 Slides)
// -------------------------------------------------------------
const ch11Titles = [
  ["১১.১", "প্রজননের ধারণা ও জীব প্রজাতির স্থায়িত্ব", "Concept & Types of Reproduction: Asexual vs Sexual", "bioCh11Concept"],
  ["১১.২", "উদ্ভিদের অযৌন প্রজনন: স্পোর ও অঙ্গজ প্রজনন", "Plant Asexual Reproduction: Spores & Vegetative Propagation", "bioCh11AsexualVegetative"],
  ["১১.৩", "কৃত্রিম অঙ্গজ প্রজনন: কলম, দাবাকলম ও জোড়কলম", "Artificial Propagation: Cutting, Layering & Grafting", "bioCh11ArtificialGrafting"],
  ["১১.৪", "একটি আদর্শ ফুলের বিভিন্ন অংশ ও ৫টি স্তবক", "Anatomy of an Ideal Flower: Calyx, Corolla, Androecium, Gynoecium, Thalamus", "bioCh11IdealFlower"],
  ["১১.৫", "বৃতি ও দলমণ্ডলের গঠন ও পতঙ্গ আকর্ষণ", "Calyx (Sepals) Protection & Corolla (Petals) Attraction", "bioCh11CalyxCorolla"],
  ["১১.৬", "পুংস্তবক (Androecium): পরাগধানী ও পরাগরেণু সৃষ্টি", "Androecium: Filament, Anther Microsporangium & Pollen Grains", "bioCh11StamenPollen"],
  ["১১.৭", "স্ত্রীস্তবক (Gynoecium): গর্ভাশয়, গর্ভদণ্ড ও গর্ভমুণ্ড", "Gynoecium: Ovary, Style, Stigma & Megasporogenesis", "bioCh11CarpelOvary"],
  ["১১.৮", "পরাগায়ন (Pollination): স্বপরাগায়ন ও পরপরাগায়ন", "Pollination Mechanisms: Self-Pollination vs Cross-Pollination", "bioCh11PollinationTypes"],
  ["১১.৯", "পরাগায়নের মাধ্যমসমূহ ও অভিযোজন বৈশিষ্ট্য", "Pollination Agents & Floral Adaptations: Wind, Insect, Water, Bird", "bioCh11AgentsAdaptation"],
  ["১১.১০", "পুংগ্যামেটোফাইটের উৎপত্তি ও পরাগরেণু অঙ্কুরোদগম", "Development of Male Gametophyte & Pollen Tube Growth", "bioCh11MaleGametophyte"],
  ["১১.১১", "স্ত্রীগ্যামেটোফাইট ও ভ্রূণথলির (Embryo Sac) গঠন", "Development of Female Gametophyte: 8-Nucleate Embryo Sac", "bioCh11FemaleGametophyte"],
  ["১১.১২", "উদ্ভিদের দ্বি-নিষেক (Double Fertilization) ও ত্রিমিলন", "Double Fertilization: Zygote (2n) & Triploid Endosperm (3n)", "bioCh11DoubleFertilization"],
  ["১১.১৩", "ফল ও বীজের উৎপত্তি এবং বিকাশ", "Post-fertilization Changes: Ovary to Fruit & Ovule to Seed", "bioCh11FruitSeed"],
  ["১১.১৪", "মানব প্রজননতন্ত্র: পুংপ্রজনন অঙ্গসমূহের গঠন", "Male Reproductive System: Testes, Seminiferous Tubules & Sperm", "bioCh11MaleSystem"],
  ["১১.১৫", "মানব প্রজননতন্ত্র: স্ত্রীপ্রজনন অঙ্গসমূহের গঠন", "Female Reproductive System: Ovaries, Fallopian Tube & Uterus", "bioCh11FemaleSystem"],
  ["১১.১৬", "স্ত্রী জনন চক্র ও ঋতুচক্র (Menstrual Cycle)", "Menstrual Cycle Phases: Follicular, Ovulation & Luteal Hormones", "bioCh11MenstrualCycle"],
  ["১১.১৭", "মানব দেহে নিষেক (Fertilization) ও জাইগোট সৃষ্টি", "Human Fertilization in Ampulla & Cleavage into Blastocyst", "bioCh11HumanFertilization"],
  ["১১.১৮", "গর্ভধারণ, অমরা বা গর্ভফুল (Placenta) ও ভ্রূণের বিকাশ", "Implantation, Placenta Function & Fetal Development Stages", "bioCh11PlacentaFetus"],
  ["১১.১৯", "প্রজনন স্বাস্থ্য, পরিবার পরিকল্পনা ও এইডস (AIDS)", "Reproductive Health, STDs & HIV/AIDS Prevention Awareness", "bioCh11HealthAIDS"],
  ["১১.২০", "অধ্যায় ১১ সারসংক্ষেপ ও এসএসসি বোর্ড সৃজনশীল টিপস", "Chapter 11 Summary, Embryo Sac Diagram & Board CQ Tips", "bioCh11SummaryTips"]
];

const ch11Slides = ch11Titles.map(([num, title, subtitle, diagType]) => ({
  num,
  title,
  subtitle,
  category: "অধ্যায় ১১: জীবের প্রজনন",
  img: "/src/assets/images/bio1_species_names_1791451122864.jpg",
  diagType,
  anno: [
    { labelBn: "গর্ভাশয় ও ডিম্বক", labelEn: "Ovary & Ovule", detailBn: "নিষেকের পর গর্ভাশয় ফলে এবং ডিম্বক বীজে রূপান্তরিত হয়।", detailEn: "Ovary becomes fruit; ovule becomes seed.", symbol: "OVR", x: 50, y: 55 },
    { labelBn: "পরাগধানী", labelEn: "Anther", detailBn: "৪টি পরাগরেণু প্রকোষ্ঠযুক্ত অঙ্গ যাতে পরাগরেণু উৎপন্ন হয়।", detailEn: "Microsporangium producing pollen.", symbol: "ANT", x: 30, y: 35 }
  ],
  kp: [
    { heading: `${num} ${title} এর মূল বৈজ্ঞানিক তথ্য`, description: `একটি সম্পূর্ণ ফুলের ৫টি অংশ: পুষ্পাক্ষ, বৃতি, দলমণ্ডল, পুংস্তবক ও স্ত্রীস্তবক। পুংস্তবক ও স্ত্রীস্তবক সরাসরি প্রজননে অংশ নেয় বিধায় এদের অত্যাবশ্যকীয় স্তবক বলা হয়।` },
    { heading: "উদ্ভিদের দ্বি-নিষেক প্রক্রিয়া", description: "১টি পুংগ্যামেট (n) ডিম্বাণুর (n) সাথে মিলিত হয়ে জাইগোট (2n) বানায়; অন্য পুংগ্যামেট (n) সেকেন্ডারি নিউক্লিয়াসের (2n) সাথে মিলে ট্রিপ্লয়েড শস্যকলা (3n) গঠন করে।" },
    { heading: "বোর্ড পরীক্ষায় কমন প্রশ্নাবলী", description: "দ্বি-নিষেক প্রক্রিয়ার সচিত্র ব্যাখ্যা, স্বপরাগায়ন বনাম পরপরাগায়ন, ভ্রূণথলির ৮ নিউক্লিয়াস বিন্যাস, এবং প্লাসেন্টার কাজ পরীক্ষায় বারবার আসে।" }
  ]
}));

fs.writeFileSync('src/data/biologyChapter11SlidesData.ts', generateSlidesTs(ch11Slides, 11), 'utf8');
console.log('Generated Chapter 11 with 20 slides!');

// -------------------------------------------------------------
// CHAPTER 12: জীবের বংশগতি ও বিবর্তন (20 Slides)
// -------------------------------------------------------------
const ch12Titles = [
  ["১২.১", "বংশগতির ধারণা ও বংশগতিবিদ্যা (Genetics)", "Concept of Heredity & Mendel's Classical Genetics", "bioCh12Concept"],
  ["১২.২", "ক্রোমোজোম: বংশগতির ভৌত ভিত্তি ও আকার-আকৃতি", "Chromosomes as Physical Basis of Heredity (P & Q Arms)", "bioCh12ChromosomeStructure"],
  ["১২.৩", "অটোসোম ও সেক্স ক্রোমোজোম (Autosomes vs Allosomes)", "Human Karyotype: 22 Pairs Autosomes & 1 Pair Sex Chromosomes", "bioCh12AutosomesSex"],
  ["১২.৪", "ডিএনএ (DNA) এর রাসায়নিক গঠন ও উপাদান", "Chemical Components of DNA: Deoxyribose, Phosphate & 4 Nitrogen Bases", "bioCh12DNAChemistry"],
  ["১২.৫", "ওয়াটসন ও ক্রিকের ডিএনএ ডাবল হেলিক্স মডেল", "Watson-Crick Double Helix Model (1953) Dimensions (2nm, 3.4nm)", "bioCh12WatsonCrickModel"],
  ["১২.৬", "ক্ষারক জোড় নিয়ম (Base Pairing Rule: A=T & G≡C)", "Complementary Base Pairing: Purines (A,G) & Pyrimidines (T,C)", "bioCh12BasePairing"],
  ["১২.৭", "আরএনএ (RNA): গঠন, প্রকারভেদ ও ডিএনএ-এর সাথে পার্থক্য", "RNA Structure & 3 Major Types (mRNA, tRNA, rRNA) vs DNA", "bioCh12RNAStructure"],
  ["১২.৮", "জিন (Gene): বংশগতির কার্যকরী একক ও লোকাস", "Gene as Functional Genetic Unit, Cistron & Chromosomal Locus", "bioCh12GeneLocus"],
  ["১২.৯", "ডিএনএ অনুলিপন বা প্রতিলিপন (DNA Replication)", "Semi-conservative DNA Replication: DNA Polymerase & Helicase", "bioCh12Replication"],
  ["১২.১০", "জিনগত সংকেত ও প্রোটিন সংশ্লেষণ (Central Dogma)", "Central Dogma of Molecular Biology: DNA -> mRNA -> Protein", "bioCh12CentralDogma"],
  ["১২.১১", "মানব সন্তানে লিঙ্গ নির্ধারণ কৌশল (Sex Determination)", "Human Sex Determination: XX Female vs XY Male Mechanisms", "bioCh12SexDetermination"],
  ["১২.১২", "লিঙ্গ নির্ধারণে পিতার ভূমিকা বনাম সামাজিক কুসংস্কার", "Father's Genetic Role in Child Gender & Social Awareness", "bioCh12FatherRole"],
  ["১২.১৩", "বংশগত রোগ ১: বর্ণান্ধতা বা কালার ব্লাইন্ডনেস", "Sex-linked Genetic Disorder 1: Red-Green Color Blindness", "bioCh12ColorBlindness"],
  ["১২.১৪", "বংশগত রোগ ২: থ্যালাসেমিয়া (Thalassemia)", "Autosomal Disorder 2: Thalassemia (Alpha & Beta) & Blood Transfusion", "bioCh12Thalassemia"],
  ["১২.১৫", "ডিএনএ ফিঙ্গারপ্রিন্টিং ও ফরেনসিক প্রয়োগ", "DNA Fingerprinting Technology, VNTRs & Crime Forensics", "bioCh12DNAFingerprinting"],
  ["১২.১৬", "জৈব বিবর্তন বা অভিব্যক্তি (Organic Evolution)", "Concept of Organic Evolution: Life Origin in Water", "bioCh12EvolutionConcept"],
  ["১২.১৭", "ডারউইনের প্রাকৃতিক নির্বাচন মতবাদ (Natural Selection)", "Charles Darwin's Theory: Overproduction, Struggle & Survival of Fittest", "bioCh12NaturalSelection"],
  ["১২.১৮", "ল্যামার্কের অর্জিত বৈশিষ্ট্যের উত্তরাধিকার মতবাদ", "Jean-Baptiste Lamarck's Theory of Use and Disuse", "bioCh12Lamarckism"],
  ["১২.১৯", "বিবর্তনের পক্ষে বিভিন্ন বৈজ্ঞানিক প্রমাণ", "Evidences of Evolution: Morphological, Anatomical & Fossil Evidence", "bioCh12EvolutionEvidences"],
  ["১২.২০", "অধ্যায় ১২ সারসংক্ষেপ ও এসএসসি বোর্ড টিপস", "Chapter 12 Summary, Genetic Crosses & Board CQ Guidelines", "bioCh12SummaryTips"]
];

const ch12Slides = ch12Titles.map(([num, title, subtitle, diagType]) => ({
  num,
  title,
  subtitle,
  category: "অধ্যায় ১২: জীবের বংশগতি ও বিবর্তন",
  img: "/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg",
  diagType,
  anno: [
    { labelBn: "ডিএনএ ডাবল হেলিক্স", labelEn: "DNA Double Helix", detailBn: "পরস্পর বিপরীতমুখী দুটি পলিনিউক্লিওটাইড সূত্র যা হাইড্রোজেন বন্ধনে যুক্ত।", detailEn: "Antiparallel helical polynucleotide strands.", symbol: "DNA", x: 45, y: 50 },
    { labelBn: "ক্ষারক জোড় (A=T, G≡C)", labelEn: "Base Pairs", detailBn: "অ্যাডেনিন-থায়ামিন (২টি H-বন্ড) এবং গুয়ানিন-সাইটোসিন (৩টি H-বন্ড)।", detailEn: "Complementary base hydrogen bonding.", symbol: "A-T", x: 65, y: 50 }
  ],
  kp: [
    { heading: `${num} ${title} এর বিস্তারিত তত্ত্ব`, description: `১৯৫৩ সালে জেমস ওয়াটসন ও ফ্রান্সিস ক্রিক ডিএনএর দ্বিতন্ত্রী প্যাঁচানো সিঁড়ির মতো হেলিক্স মডেল আবিষ্কার করেন যার ব্যাস ২ ন্যানোমিটার এবং এক পূর্ণ ঘূর্ণনের দৈর্ঘ্য ৩.৪ ন্যানোমিটার।` },
    { heading: "লিঙ্গ নির্ধারণ ও মেন্ডেলের নীতি", description: "মাতার ডিম্বাণু সর্বদা X ক্রোমোজোম বহন করে। পিতার শুক্রাণু X বহন করলে কন্যা সন্তান (XX) এবং Y বহন করলে পুত্র সন্তান (XY) জন্ম নেয়। অতএব লিঙ্গ নির্ধারণে পিতার ভূমিকাই একমাত্র সত্য।" },
    { heading: "বোর্ড পরীক্ষার অতিগুরুত্বপূর্ণ প্রশ্ন", description: "ওয়াটসন ও ক্রিকের ডিএনএ মডেলের বৈশিষ্ট্য, থ্যালাসেমিয়া প্রতিরোধে বিয়ের আগে রক্ত পরীক্ষা, এবং ডারউইনের প্রাকৃতিক নির্বাচনের ধাপসমূহ।" }
  ]
}));

fs.writeFileSync('src/data/biologyChapter12SlidesData.ts', generateSlidesTs(ch12Slides, 12), 'utf8');
console.log('Generated Chapter 12 with 20 slides!');

// -------------------------------------------------------------
// CHAPTER 13: জীবের পরিবেশ (20 Slides)
// -------------------------------------------------------------
const ch13Titles = [
  ["১৩.১", "বাস্তুতন্ত্র বা ইকোসিস্টেমের ধারণা ও সংজ্ঞা", "Concept & Definition of Ecosystem (A.G. Tansley 1935)", "bioCh13Concept"],
  ["১৩.২", "বাস্তুতন্ত্রের অজীব উপাদানসমূহ (Abiotic Components)", "Abiotic Components: Inorganic Salts, Organic Humus & Physical Climate", "bioCh13Abiotic"],
  ["১৩.৩", "বাস্তুতন্ত্রের সজীব উপাদান: উৎপাদক (Producers)", "Biotic Components 1: Autotrophic Producers (Green Plants)", "bioCh13Producers"],
  ["১৩.৪", "খাদক (Consumers): প্রাথমিক, গৌণ ও তৃতীয় স্তরের খাদক", "Consumers: Primary Herbivores, Secondary & Tertiary Carnivores", "bioCh13Consumers"],
  ["১৩.৫", "বিয়োজক বা পচনকারী উপাদান (Decomposers)", "Decomposers: Microorganisms (Bacteria, Fungi) & Nutrient Recycling", "bioCh13Decomposers"],
  ["১৩.৬", "একটি আদর্শ জলজ বাস্তুতন্ত্র: পুকুরের বাস্তুতন্ত্র", "Pond Ecosystem: Phytoplankton, Zooplankton, Benthos & Strata", "bioCh13PondEcosystem"],
  ["১৩.৭", "একটি আদর্শ স্থলজ বাস্তুতন্ত্র: সুন্দরবনের বাস্তুতন্ত্র", "Terrestrial Ecosystem: Sundarbans Mangrove Biome & Royal Bengal Tiger", "bioCh13Sundarbans"],
  ["১৩.৮", "খাদ্য শিকল বা খাদ্য শৃঙ্খল (Food Chain)", "Food Chain: Predator, Parasitic & Saprophytic Chains", "bioCh13FoodChain"],
  ["১৩.৯", "খাদ্য জাল (Food Web) ও বাস্তুতান্ত্রিক ভারসাম্য", "Food Web Complexity & Dynamic Equilibrium of Ecosystems", "bioCh13FoodWeb"],
  ["১৩.১০", "পুষ্টিস্তর বা ট্রফিক লেভেল (Trophic Levels)", "Trophic Levels: T1 Producers to T4 Apex Predators", "bioCh13TrophicLevels"],
  ["১৩.১১", "বাস্তুতান্ত্রিক পিরামিড ১: সংখ্যার পিরামিড", "Ecological Pyramids 1: Pyramid of Numbers", "bioCh13PyramidNumbers"],
  ["১৩.১২", "বাস্তুতান্ত্রিক পিরামিড ২: জীবভরের পিরামিড", "Ecological Pyramids 2: Pyramid of Biomass (Upright & Inverted)", "bioCh13PyramidBiomass"],
  ["১৩.১৩", "বাস্তুতান্ত্রিক পিরামিড ৩: শক্তির পিরামিড ও ১০% নিয়ম", "Pyramid of Energy: Lindeman's 10% Energy Transfer Law", "bioCh13PyramidEnergy"],
  ["১৩.১৪", "বাস্তুতন্ত্রে পুষ্টিপ্রবাহ ও শক্তিপ্রবাহের পার্থক্য", "Energy Flow (Unidirectional) vs Nutrient Cycle (Cyclic)", "bioCh13EnergyNutrientFlow"],
  ["১৩.১৫", "ভূ-রাসায়নিক চক্র: পানি চক্র ও কার্বন চক্র", "Biogeochemical Cycles: Hydrological Cycle & Carbon Cycle", "bioCh13WaterCarbonCycle"],
  ["১৩.১৬", "নাইট্রোজেন চক্র (Nitrogen Cycle) ও জীবাণু ভূমিকা", "Nitrogen Cycle: Fixation, Nitrification, Assimilation & Denitrification", "bioCh13NitrogenCycle"],
  ["১৩.১৭", "জীবের আন্তঃসম্পর্ক ১: ধনাত্মক মিথস্ক্রিয়া (Mutualism)", "Symbiotic Interactions 1: Mutualism & Commensalism", "bioCh13Mutualism"],
  ["১৩.১৮", "জীবের আন্তঃসম্পর্ক ২: ঋণাত্মক মিথস্ক্রিয়া (Parasitism)", "Negative Interactions 2: Parasitism, Predation & Competition", "bioCh13Parasitism"],
  ["১৩.১৯", "পরিবেশ দূষণ, গ্লোবাল ওয়ার্মিং ও জীববৈচিত্র্য সংরক্ষণ", "Anthropogenic Impact, Climate Change & Biodiversity Conservation", "bioCh13BiodiversityConservation"],
  ["১৩.২০", "অধ্যায় ১৩ সারসংক্ষেপ ও এসএসসি বোর্ড টিপস", "Chapter 13 Summary, Food Web Flowcharts & Board CQ Analysis", "bioCh13SummaryTips"]
];

const ch13Slides = ch13Titles.map(([num, title, subtitle, diagType]) => ({
  num,
  title,
  subtitle,
  category: "অধ্যায় ১৩: জীবের পরিবেশ",
  img: "/src/assets/images/bio1_biodiversity_nature_1791451133408.jpg",
  diagType,
  anno: [
    { labelBn: "সবুজ উৎপাদক (T1)", labelEn: "Primary Producer", detailBn: "সৌরশক্তিকে রাসায়নিক জৈব খাদ্যে রূপান্তরকারী প্রধান উদ্ভিদ।", detailEn: "Photosynthetic autotrophic plants.", symbol: "T1", x: 45, y: 70 },
    { labelBn: "শীর্ষ খাদক (T4)", labelEn: "Apex Predator", detailBn: "খাদ্য শৃঙ্খলের শীর্ষ মাংসাশী খাদক যা অন্য কারো শিকার হয় না।", detailEn: "Top tier consumer.", symbol: "T4", x: 50, y: 25 }
  ],
  kp: [
    { heading: `${num} ${title} এর সামগ্রিক বৈজ্ঞানিক বিবরণ`, description: `বাস্তুতন্ত্রের শক্তিপ্রবাহ সর্বদা একমুখী (Unidirectional) এবং প্রতি ট্রফিক স্তরে মাত্র ১০% শক্তি পরবর্তী স্তরে স্থানান্তরিত হয় (লিন্ডেম্যানের ১০% নিয়ম), বাকি ৯০% অপচয় হয়।` },
    { heading: "মিউচুয়ালিজম ও মিথোজীবিতা", description: "যখন দুটি ভিন্ন প্রজাতির জীব একে অপরের সান্নিধ্যে উপকৃত হয়, তাকে মিউচুয়ালিজম বলে (যেমন: শিম জাতীয় মূলের রাইজোবিয়াম ব্যাকটেরিয়া ও নাইট্রোজেন সংবন্ধন)।" },
    { heading: "বোর্ড পরীক্ষার হট টপিকস", description: "পুকুরের বাস্তুতন্ত্রের চিহ্নিত চিত্র, শক্তির পিরামিড কেন সর্বদা খাড়া থাকে, এবং খাদ্য শিকল ও খাদ্য জালের পার্থক্য সবচেয়ে বেশি আসে।" }
  ]
}));

fs.writeFileSync('src/data/biologyChapter13SlidesData.ts', generateSlidesTs(ch13Slides, 13), 'utf8');
console.log('Generated Chapter 13 with 20 slides!');

// -------------------------------------------------------------
// CHAPTER 14: জীবপ্রযুক্তি (20 Slides)
// -------------------------------------------------------------
const ch14Titles = [
  ["১৪.১", "জীবপ্রযুক্তির ধারণা ও পরিধি (Biotechnology Concept)", "Concept, History & Scope of Biotechnology (Karl Ereky 1919)", "bioCh14Concept"],
  ["১৪.২", "টিস্যু কালচার (Tissue Culture) প্রযুক্তির মূল ভিত্তি", "Plant Tissue Culture Fundamentals & Cellular Totipotency", "bioCh14Totipotency"],
  ["১৪.৩", "টিস্যু কালচারের ধাপ ১: এক্সপ্লান্ট বা মাতৃউদ্ভিদ নির্বাচন", "Step 1: Selection of Healthy Mother Plant & Explant Tissue", "bioCh14ExplantSelection"],
  ["১৪.৪", "টিস্যু কালচারের ধাপ ২: পুষ্টি মাধ্যম (MS Medium) তৈরি", "Step 2: Preparation of Culture Nutrient Medium (MS Media)", "bioCh14CultureMedium"],
  ["১৪.৫", "টিস্যু কালচারের ধাপ ৩: নির্বীজকরণ বা অটোক্লেভ প্রক্রিয়া", "Step 3: Sterilization by Autoclave (121°C, 15 lb, 20 min)", "bioCh14AutoclaveSterilization"],
  ["১৪.৬", "টিস্যু কালচারের ধাপ ৪: এক্সপ্লান্ট স্থাপন ও ক্যালাস সৃষ্টি", "Step 4: Explant Inoculation & Undifferentiated Callus Induction", "bioCh14CallusFormation"],
  ["১৪.৭", "টিস্যু কালচারের ধাপ ৫: মূল ও কাণ্ড উৎপাদন (অঙ্গ সৃষ্টি)", "Step 5: Shoot & Root Regeneration (Auxin-Cytokinin Ratio)", "bioCh14Organogenesis"],
  ["১৪.৮", "টিস্যু কালচারের ধাপ ৬: প্রাকৃতিক পরিবেশে অভিযোজন", "Step 6: Hardening & Acclimatization of Plantlets in Soil Pots", "bioCh14Acclimatization"],
  ["১৪.৯", "টিস্যু কালচারের গুরুত্ব ও কৃষিতে প্রয়োগ", "Significance of Tissue Culture: Rapid Clonal Propagation & Disease-Free Seed", "bioCh14TissueCultureImportance"],
  ["১৪.১০", "রিকম্বিনেন্ট ডিএনএ প্রযুক্তি বা জেনেটিক ইঞ্জিনিয়ারিং", "Recombinant DNA Technology (Genetic Engineering Overview)", "bioCh14RecombinantDNA"],
  ["১৪.১১", "প্লাজমিড (Plasmid) ভেক্টর: বৈশিষ্ট্য ও প্রকারভেদ", "Plasmid Vectors: Autonomous Circular DNA, Ori Site & Markers", "bioCh14PlasmidVectors"],
  ["১৪.১২", "রেস্ট্রিকশন এনজাইম বা আণবিক কাঁচি (Molecular Scissors)", "Restriction Endonucleases: Specific Palindromic Cleavage (EcoRI)", "bioCh14RestrictionEnzyme"],
  ["১৪.১৩", "ডিএনএ লাইগেজ বা আণবিক আঠা (Molecular Glue)", "DNA Ligase Enzyme: Phosphodiester Bond Formation & Sealing", "bioCh14LigaseEnzyme"],
  ["১৪.১৪", "রিকম্বিনেন্ট ডিএনএ তৈরির ৫টি প্রধান ধাপ", "Step-by-step Genetic Engineering Protocol: Cleavage to Ligation", "bioCh14RecombinantSteps"],
  ["১৪.১৫", "পোষক কোষে প্লাজমিড প্রবেশ ও রূপান্তর (Transformation)", "Transformation of Recombinant Plasmid into E. coli Host", "bioCh14Transformation"],
  ["১৪.১৬", "ক্লোনিং ও কাঙ্ক্ষিত জিনের প্রকাশ (Gene Expression)", "Gene Cloning, Fermenter Scale-up & Recombinant Protein Harvesting", "bioCh14GeneCloning"],
  ["১৪.১৭", "চিকিৎসাবিজ্ঞানে জীবপ্রযুক্তি: মানব ইনসুলিন তৈরি", "Medical Biotechnology: Humulin Synthesis in Recombinant Bacteria", "bioCh14HumanInsulin"],
  ["১৪.১৮", "কৃষি উন্নয়নে জিএমও (GMO / Transgenic Crops)", "Agricultural GMOs: Bt Cotton, Golden Rice (Vitamin A) & Late Blight Resistance", "bioCh14TransgenicCrops"],
  ["১৪.১৯", "জেনেটিক ইঞ্জিনিয়ারিং ও জীবপ্রযুক্তির ক্ষতিকর দিক ও সতর্কতা", "Biosafety Ethics, Environmental Risks & Monopolies of GMOs", "bioCh14BiosafetyEthics"],
  ["১৪.২০", "অধ্যায় ১৪ সারসংক্ষেপ ও এসএসসি বোর্ড সৃজনশীল গাইড", "Chapter 14 Summary, Gene Flowchart & Board Exam CQ Analysis", "bioCh14SummaryTips"]
];

const ch14Slides = ch14Titles.map(([num, title, subtitle, diagType]) => ({
  num,
  title,
  subtitle,
  category: "অধ্যায় ১৪: জীবপ্রযুক্তি",
  img: "/src/assets/images/polymers_plastics_chemistry_1791713752376.jpg",
  diagType,
  anno: [
    { labelBn: "প্লাজমিড ভেক্টর", labelEn: "Plasmid Vector Ring", detailBn: "ব্যাকটেরিয়ার মূল ক্রোমোজোমের বাইরে বৃত্তাকার স্বপ্রজননক্ষম DNA।", detailEn: "Extrachromosomal self-replicating DNA ring.", symbol: "PLS", x: 40, y: 45 },
    { labelBn: "কাঙ্ক্ষিত মানব জিন", labelEn: "Target Human Gene", detailBn: "ইনসুলিন বা অন্য প্রোটিন তৈরির জন্য যুক্ত বহিরাগত জিন।", detailEn: "Inserted recombinant DNA fragment.", symbol: "GEN", x: 65, y: 45 }
  ],
  kp: [
    { heading: `${num} ${title} এর বিস্তারিত বৈজ্ঞানিক ধাপ`, description: `১৯১৯ সালে হাঙ্গেরীয় প্রকৌশলী কার্ল এরাকি সর্বপ্রথম 'Biotechnology' শব্দটি প্রবর্তন করেন। এতে জীব, জীবকোষ বা এর উপাদানকে মানুষের কল্যাণে ব্যবহার করা হয়।` },
    { heading: "রিকম্বিনেন্ট DNA এবং রেস্ট্রিকশন এনজাইম", description: "রেস্ট্রিকশন এনজাইম (আণবিক কাঁচি) DNA এর নির্দিষ্ট সিকোয়েন্সে কেটে আঠালো প্রান্ত (Sticky ends) সৃষ্টি করে এবং লাইগেজ এনজাইম (আণবিক আঠা) কাঙ্ক্ষিত জিনকে প্লাজমিডে জুড়ে দেয়।" },
    { heading: "বোর্ড পরীক্ষায় নিশ্চিত আসার মতো প্রশ্ন", description: "টিস্যু কালচারের পর্যায়ক্রমিক ধাপসমূহ, রিকম্বিনেন্ট DNA প্রস্তুত প্রণালীর ফ্লোচার্ট, এবং ব্যাকটেরিয়ার মাধ্যমে মানব ইনসুলিন উৎপাদনের গুরুত্ব।" }
  ]
}));

fs.writeFileSync('src/data/biologyChapter14SlidesData.ts', generateSlidesTs(ch14Slides, 14), 'utf8');
console.log('Generated Chapter 14 with 20 slides!');

console.log('All Chapters 7, 8, 9, 10, 11, 12, 13, 14 populated with 20 slides each successfully!');
