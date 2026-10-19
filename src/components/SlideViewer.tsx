import React, { useState, useEffect, useCallback } from 'react';
import { Slide, ChapterProgressInfo } from '../types/presentation';
import { CustomDiagramViewer } from './CustomDiagramViewer';
import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';
import { BIOLOGY_TYPE_MAP } from '../data/biologyTypeMap';
import { ThreeDViewer } from './ThreeDViewer';
import { BiologyPart3DPreview } from './BiologyPart3DPreview';
import { PptxDirectSlideRenderer } from './PptxDirectSlideRenderer';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Grid, 
  BookOpen, 
  ExternalLink,
  RotateCcw,
  Sparkles,
  Info,
  AlertTriangle,
  Maximize2,
  X,
  Atom,
  Eye,
  Languages,
  Tag,
  LayoutGrid,
  Square,
  Box,
  Compass,
  Edit3,
  FileText,
  Award,
  CheckCircle2
} from 'lucide-react';
import { SlideEditModal } from './SlideEditModal';
import { FormulaBadge } from './FormulaBadge';

interface SlideViewerProps {
  slides: Slide[];
  currentSlideIndex: number;
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  onOpenSlideIndex: () => void;
  onNavigateToTab: (tab: string) => void;
  openPowerPointShow?: () => void;
  onUpdateSlide?: (updatedSlide: Slide, slideIndex: number) => void;
  onResetSlide?: (slideIndex: number) => void;
  isSlideEdited?: (slideIndex: number) => boolean;
  activeSubject?: 'chemistry' | 'physics' | 'biology';
  activeChapter?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
  openStudentNotes?: () => void;
  openBoardCQ?: () => void;
  openFlashcards?: () => void;
  openTimedExam?: () => void;
  chapterProgress?: ChapterProgressInfo;
}

export function ensureSlideVisuals(
  slide: Slide,
  fallbackSubject?: 'chemistry' | 'physics' | 'biology',
  fallbackChapter?: number
): Slide {
  if (!slide) return slide;

  // Infer subject from category or title if missing
  const inferredSubject = slide.subject || fallbackSubject ||
    (slide.category?.includes('পদার্থ') || slide.title?.includes('কাজ') || slide.title?.includes('শক্তি') || slide.title?.includes('চাপ') || slide.title?.includes('তাপ') || slide.title?.includes('তরঙ্গ') || slide.title?.includes('শব্দ') ? 'physics' :
     slide.category?.includes('জীব') || slide.title?.includes('কোষ') || slide.title?.includes('টিস্যু') || slide.title?.includes('শক্তি') || slide.title?.includes('শ্বসন') || slide.title?.includes('সালোকসংশ্লেষণ') || slide.title?.includes('ATP') ? 'biology' : 'chemistry');
  const inferredChapter = slide.chapter || fallbackChapter || (inferredSubject === 'physics' ? 4 : inferredSubject === 'biology' ? 2 : 3);
  
  // Topic-specific default image matching subject and chapter
  const defaultImg = 
    inferredSubject === 'physics'
      ? (inferredChapter === 4 
          ? (slide.id === 3 || slide.id === 5 || slide.id === 7 || slide.id === 8
              ? '/src/assets/images/roller_coaster_energy_1791029167540.jpg'
              : '/src/assets/images/work_energy_physics_1791027317460.jpg')
          : inferredChapter === 6
          ? (slide.id === 4 || slide.id === 5 || slide.id === 6 || slide.id === 7
              ? '/src/assets/images/thermal_expansion_lab_1791101638468.jpg'
              : '/src/assets/images/heat_thermal_physics_1791101382695.jpg')
          : inferredChapter === 7
          ? (slide.id >= 6 && slide.id <= 9
              ? '/src/assets/images/sonar_ultrasound_physics_1791186932375.jpg'
              : slide.id >= 10
              ? '/src/assets/images/wave_sound_physics_1791102920685.jpg'
              : '/src/assets/images/sound_acoustics_physics_1791186341104.jpg')
          : (slide.id === 3 || slide.id === 7 || slide.id === 12
              ? '/src/assets/images/hydraulic_press_physics_1791029154076.jpg'
              : '/src/assets/images/fluid_pressure_physics_1791027332942.jpg'))
      : inferredSubject === 'biology'
      ? (inferredChapter === 1
          ? (slide.id === 1
              ? '/src/assets/images/bio1_life_scope_1791452505300.jpg'
              : slide.id === 2
              ? '/src/assets/images/bio1_branches_scope_1791451076064.jpg'
              : slide.id === 3
              ? '/src/assets/images/bio1_taxonomy_tree_1791452524699.jpg'
              : slide.id === 4
              ? '/src/assets/images/bio1_taxonomic_ranks_1791454302345.jpg'
              : slide.id === 5
              ? '/src/assets/images/five_kingdoms_biology_1791429049252.jpg'
              : slide.id === 6
              ? '/src/assets/images/bio1_monera_bacteria_1791451087235.jpg'
              : slide.id === 7
              ? '/src/assets/images/bio1_plantae_animalia_1791454343858.jpg'
              : slide.id === 8
              ? '/src/assets/images/bio1_binomial_rules_1791454326032.jpg'
              : slide.id === 9
              ? '/src/assets/images/bio1_species_names_1791451122864.jpg'
              : slide.id === 10
              ? '/src/assets/images/bio1_biodiversity_nature_1791451133408.jpg'
              : '/src/assets/images/bio1_life_scope_1791452505300.jpg')
          : inferredChapter === 5
          ? (slide.id === 1
              ? '/src/assets/images/bio5_nutrition_intro_1791452548046.jpg'
              : slide.id === 2
              ? '/src/assets/images/bio5_plant_deficiency_1791451143252.jpg'
              : slide.id === 3
              ? '/src/assets/images/bio5_carbs_proteins_fats_1791451153808.jpg'
              : slide.id === 4
              ? '/src/assets/images/bio5_vitamins_chart_1791452566481.jpg'
              : slide.id === 5
              ? '/src/assets/images/bio5_nutrition_pyramid_1791454360053.jpg'
              : slide.id === 6
              ? '/src/assets/images/bio5_human_teeth_anatomy_1791451212112.jpg'
              : slide.id === 7
              ? '/src/assets/images/bio5_liver_pancreas_glands_1791451224164.jpg'
              : slide.id === 8
              ? '/src/assets/images/bio5_digestive_organs_1791454374130.jpg'
              : slide.id === 9
              ? '/src/assets/images/bio5_intestinal_villi_1791451235648.jpg'
              : slide.id === 10
              ? '/src/assets/images/bio5_bmi_digestive_health_1791451246405.jpg'
              : '/src/assets/images/bio5_nutrition_intro_1791452548046.jpg')
          : inferredChapter === 2 
          ? (slide.id === 2
              ? '/src/assets/images/fluid_mosaic_membrane_1791029123590.jpg'
              : slide.id === 4 || slide.id === 5
              ? '/src/assets/images/mitochondria_cellular_1791029140427.jpg'
              : '/src/assets/images/cell_tissue_biology_1791027347161.jpg')
          : inferredChapter === 4
          ? (slide.id >= 8 && slide.id <= 11
              ? '/src/assets/images/cellular_respiration_atp_1791281254904.jpg'
              : slide.id >= 3 && slide.id <= 7
              ? '/src/assets/images/photosynthesis_chloroplast_1791186353071.jpg'
              : '/src/assets/images/bioenergetics_biology_1791102937315.jpg')
          : '/src/assets/images/mitosis_cell_division_1791027361813.jpg')
      : inferredSubject === 'chemistry'
      ? (inferredChapter === 8
          ? (slide.id >= 12
              ? '/src/assets/images/cellular_respiration_atp_1791281254904.jpg'
              : slide.id >= 8
              ? '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg'
              : slide.id >= 4
              ? '/src/assets/images/redox_chemical_reactions_1791285299488.jpg'
              : '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg')
          : inferredChapter === 7
          ? (slide.id >= 12
              ? '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg'
              : slide.id >= 6
              ? '/src/assets/images/le_chatelier_equilibrium_1791285324639.jpg'
              : '/src/assets/images/redox_chemical_reactions_1791285299488.jpg')
          : inferredChapter === 6
          ? (slide.id >= 10
              ? '/src/assets/images/limiting_reactant_chemistry_1791283750306.jpg'
              : slide.id >= 5
              ? '/src/assets/images/molar_solution_titration_1791283769174.jpg'
              : '/src/assets/images/mole_avogadro_stoichiometry_1791283726167.jpg')
          : inferredChapter === 4
          ? (slide.id === 2
              ? '/src/assets/images/ancient_alchemy_lab_1790755208632.jpg'
              : (slide.id === 4 || slide.id === 5)
              ? '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg'
              : (slide.id === 10 || slide.id === 11)
              ? '/src/assets/images/elements_compounds_1790751385322.jpg'
              : '/src/assets/images/periodic_table_trends_1791100765641.jpg')
          : inferredChapter === 9
          ? (slide.id === 8
              ? '/src/assets/images/acid_rain_environment_1791713616526.jpg'
              : slide.id >= 5
              ? '/src/assets/images/molar_solution_titration_1791283769174.jpg'
              : '/src/assets/images/acid_base_ph_meter_1791713596870.jpg')
          : inferredChapter === 10
          ? (slide.id === 1 || slide.id === 2 || slide.id === 3
              ? '/src/assets/images/minerals_ores_bauxite_1791713634869.jpg'
              : slide.id === 4
              ? '/src/assets/images/metallurgy_blast_furnace_1791619758396.jpg'
              : slide.id === 6
              ? '/src/assets/images/copper_electrolytic_refining_1791713719461.jpg'
              : slide.id === 8
              ? '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg'
              : slide.id === 9
              ? '/src/assets/images/elements_compounds_1790751385322.jpg'
              : '/src/assets/images/minerals_ores_bauxite_1791713634869.jpg')
          : inferredChapter === 11
          ? (slide.id === 2
              ? '/src/assets/images/petroleum_fractional_distill_1791619784228.jpg'
              : (slide.id === 4 || slide.id === 5 || slide.id === 6)
              ? '/src/assets/images/organic_reactions_lab_1791713657463.jpg'
              : (slide.id === 8 || slide.id === 9)
              ? '/src/assets/images/polymers_plastics_chemistry_1791713752376.jpg'
              : '/src/assets/images/petroleum_fractional_distill_1791619784228.jpg')
          : inferredChapter === 12
          ? (slide.id === 1 || slide.id === 2
              ? '/src/assets/images/baking_soda_vinegar_1791713687305.jpg'
              : (slide.id === 4 || slide.id === 5)
              ? '/src/assets/images/household_chemistry_soap_1791619813402.jpg'
              : slide.id === 6
              ? '/src/assets/images/soaps_detergents_cleaning_1791713798734.jpg'
              : '/src/assets/images/baking_soda_vinegar_1791713687305.jpg')
          : inferredChapter === 5
          ? '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg'
          : inferredChapter === 1
          ? '/src/assets/images/chemistry_daily_life_1790755220069.jpg'
          : inferredChapter === 2
          ? '/src/assets/images/states_matter_three_1790754119855.jpg'
          : '/src/assets/images/hero_chemistry_atom_1790749681138.jpg')
      : '/src/assets/images/hero_chemistry_atom_1790749681138.jpg';

  const enriched = { ...slide, subject: inferredSubject, chapter: inferredChapter as any };

  if (!enriched.image || (inferredSubject === 'chemistry' && (inferredChapter === 4 || inferredChapter === 5 || inferredChapter === 6 || inferredChapter === 7 || inferredChapter === 8 || inferredChapter === 9 || inferredChapter === 10 || inferredChapter === 11 || inferredChapter === 12) && (enriched.image.includes('hero_chemistry_atom') || enriched.image.includes('metallurgy_blast_furnace') || enriched.image.includes('petroleum_fractional') || enriched.image.includes('household_chemistry_soap')))) {
    enriched.image = defaultImg;
  }

  // Ensure every single slide gets unique, topic-matched gallery diagrams
  if (!enriched.gallery || enriched.gallery.length === 0) {
    if (inferredSubject === 'physics') {
      if (inferredChapter === 4) {
        // Physics Chapter 4 - 12 individual topic-matched galleries
        const p4Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'workAngleVectors', d2: 'zeroWorkNormal', t1: 'কাজের ধারণা ও বল ভেক্টর', t2: 'কোণের সাথে কাজের পরিবর্তন', img: '/src/assets/images/work_energy_physics_1791027317460.jpg' },
          2: { d1: 'zeroWorkNormal', d2: 'workAngleVectors', t1: 'শূন্য কাজ (θ = ৯০°)', t2: 'উপাংশ বিভাজন F cosθ', img: '/src/assets/images/work_energy_physics_1791027317460.jpg' },
          3: { d1: 'energyConservation', d2: 'workAngleVectors', t1: 'শক্তির রূপান্তর চক্র', t2: 'যান্ত্রিক শক্তির ব্যবহার', img: '/src/assets/images/roller_coaster_energy_1791029167540.jpg' },
          4: { d1: 'kineticEnergyDerivation', d2: 'energyConservation', t1: 'গতিশক্তি Ek = ½mv²', t2: 'ভরবেগ ও গতিশক্তি সমীকরণ', img: '/src/assets/images/work_energy_physics_1791027317460.jpg' },
          5: { d1: 'potentialEnergyHeight', d2: 'kineticEnergyDerivation', t1: 'অভিকর্ষীয় বিভবশক্তি Ep = mgh', t2: 'উচ্চতার সাথে শক্তির রূপান্তর', img: '/src/assets/images/roller_coaster_energy_1791029167540.jpg' },
          6: { d1: 'workAngleVectors', d2: 'kineticEnergyDerivation', t1: 'স্প্রিং-এর বিভবশক্তি Ep = ½kx²', t2: 'হুকের সূত্র ও বল ধ্রুবক', img: '/src/assets/images/work_energy_physics_1791027317460.jpg' },
          7: { d1: 'freeFallConservation', d2: 'energyConservation', t1: 'মুক্ত পতনে মোট শক্তি নিত্যতা', t2: 'Ep + Ek = mgh (ধ্রুবক)', img: '/src/assets/images/roller_coaster_energy_1791029167540.jpg' },
          8: { d1: 'energyConservation', d2: 'freeFallConservation', t1: 'রোলার কোস্টার শক্তি বিনিময়', t2: 'সরল দোলকের গতিশক্তি-বিভবশক্তি', img: '/src/assets/images/roller_coaster_energy_1791029167540.jpg' },
          9: { d1: 'energyConservation', d2: 'workAngleVectors', t1: 'নবায়নযোগ্য শক্তির প্রবাহ', t2: 'সৌর ও বায়ু শক্তির বিদ্যুৎ উৎপাদন', img: '/src/assets/images/roller_coaster_energy_1791029167540.jpg' },
          10: { d1: 'massCalcPie', d2: 'energyConservation', t1: 'আইনস্টাইনের ভর-শক্তি সমীকরণ E = mc²', t2: 'নিউক্লীয় বিভাজন শক্তি', img: '/src/assets/images/work_energy_physics_1791027317460.jpg' },
          11: { d1: 'powerRateOfWork', d2: 'workAngleVectors', t1: 'ক্ষমতা ও কাজের হার (P = W/t)', t2: 'ওয়াট ও অশ্বক্ষমতা (1 hp = 746 W)', img: '/src/assets/images/work_energy_physics_1791027317460.jpg' },
          12: { d1: 'powerEfficiency', d2: 'powerRateOfWork', t1: 'কর্মদক্ষতা η = (Eout/Ein) × ১০০%', t2: 'অপচয়কৃত তাপশক্তি ও সমাধান', img: '/src/assets/images/work_energy_physics_1791027317460.jpg' },
        };
        const cfg = p4Configs[slide.id] || p4Configs[1];
        enriched.gallery = [
          {
            id: `p4-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Physics Educational Diagram',
            captionBn: `${cfg.t1} সংক্রান্ত বিশদ বৈজ্ঞানিক চিত্র।`,
            captionEn: 'Detailed scientific visual representation.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `p4-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Physics Concept Relation',
            captionBn: `${cfg.t2} বিষয়ক গাণিতিক সম্পর্ক ও চিত্র।`,
            captionEn: 'Mathematical relationship and physics concepts.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 5) {
        // Physics Chapter 5 - 12 individual topic-matched galleries
        const p5Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'pressureDensityArea', d2: 'depthPressure', t1: 'চাপ P = F/A ও ক্ষেত্রফল সম্পর্ক', t2: 'ঘনত্ব ρ = m/V ধারণা', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          2: { d1: 'depthPressure', d2: 'pressureDensityArea', t1: 'তরলের অভ্যন্তরে চাপ P = hρg', t2: 'উচ্চতা ও তরল স্তম্ভের চাপ', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          3: { d1: 'hydraulicPressSvg', d2: 'depthPressure', t1: 'প্যাসকেলের সূত্র ও হাইড্রোলিক প্রেস', t2: 'বল বৃদ্ধিকরণ নীতি F₂ = F₁(A₂/A₁)', img: '/src/assets/images/hydraulic_press_physics_1791029154076.jpg' },
          4: { d1: 'archimedesBeaker', d2: 'hydraulicPressSvg', t1: 'আর্কিমিডিসের নীতি ও অপসারিত তরল', t2: 'উর্ধ্বমুখী প্লবতা FB = Vρg', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          5: { d1: 'archimedesBeaker', d2: 'depthPressure', t1: 'ভাসা ও নিমজ্জনের শর্তাবলী', t2: 'ওজন বনাম প্লবতা বলের ভারসাম্য', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          6: { d1: 'archimedesBeaker', d2: 'depthPressure', t1: 'জাহাজের প্লবতা ও প্লাইমসোল লাইন', t2: 'লবণাক্ত পানি বনাম মিঠা পানিতে ভাসা', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          7: { d1: 'torricelliBarometer', d2: 'depthPressure', t1: 'টরিসেলির পারদ ব্যারোমিটার (৭৬০ মিমি)', t2: 'বায়ুমণ্ডলীয় চাপ ও আবহাওয়া পূর্বাভাস', img: '/src/assets/images/hydraulic_press_physics_1791029154076.jpg' },
          8: { d1: 'kineticStates', d2: 'pressureDensityArea', t1: 'পদার্থের তিন অবস্থা ও আণবিক গতিতত্ত্ব', t2: 'আন্তঃআণবিক আকর্ষণ ও ফাঁক', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          9: { d1: 'depthPressure', d2: 'kineticStates', t1: 'পদার্থের ৪র্থ অবস্থা: প্লাজমা', t2: 'আয়নিত গ্যাস ও উচ্চ তাপমাত্রা বৈশিষ্ট্য', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          10: { d1: 'pressureDensityArea', d2: 'hydraulicPressSvg', t1: 'স্থিতিস্থাপকতা, পীড়ন ও বিকৃতি', t2: 'হুকের সূত্র ও স্থিতিস্থাপক সীমা', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          11: { d1: 'pressureDensityArea', d2: 'depthPressure', t1: 'ইয়ং-এর গুণাঙ্ক Y = (FL)/(Al)', t2: 'তারের দৈর্ঘ্য বৃদ্ধি ও দৃঢ়তা', img: '/src/assets/images/fluid_pressure_physics_1791027332942.jpg' },
          12: { d1: 'hydraulicPressSvg', d2: 'archimedesBeaker', t1: 'শক অ্যাবসর্বার ও স্প্রিং সাসপেনশন', t2: 'হাইড্রোলিক ব্রেক ও প্রয়োগ', img: '/src/assets/images/hydraulic_press_physics_1791029154076.jpg' },
        };
        const cfg = p5Configs[slide.id] || p5Configs[1];
        enriched.gallery = [
          {
            id: `p5-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Fluid & Pressure Visual',
            captionBn: `${cfg.t1} বিষয়ক বিশদ চিত্র।`,
            captionEn: 'Fluid pressure and mechanics illustration.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `p5-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Fluid Law Principles',
            captionBn: `${cfg.t2} সংক্রান্ত নীতি ও সূত্র।`,
            captionEn: 'Physical principle of fluids and states.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 6) {
        // Physics Chapter 6 - 12 individual topic-matched galleries
        const p6Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'kineticStates', d2: 'calorimetryHeatExchange', t1: 'তাপ ও তাপমাত্রা: আণবিক গতিতত্ত্ব', t2: 'তাপের প্রবাহ ও মোট তাপ বিনিময়', img: '/src/assets/images/heat_thermal_physics_1791101382695.jpg' },
          2: { d1: 'thermometerScales', d2: 'bimetallicStrip', t1: 'পদার্থের তাপমাত্রিক ধর্ম ও থার্মোমিটার', t2: 'পারদ থার্মোমিটার ও কৈশিক নল প্রসারণ', img: '/src/assets/images/thermal_expansion_lab_1791101638468.jpg' },
          3: { d1: 'thermometerScales', d2: 'calorimetryHeatExchange', t1: 'তাপমাত্রার বিভিন্ন স্কেল (C, F, K)', t2: 'পরম শূন্য তাপমাত্রা ও স্কেল সমীকরণ', img: '/src/assets/images/thermal_expansion_lab_1791101638468.jpg' },
          4: { d1: 'bimetallicStrip', d2: 'thermometerScales', t1: 'কঠিনের দৈর্ঘ্য প্রসারণ সহগ (α)', t2: 'রেললাইনের ফাঁক ও দ্বি-ধাতব পাত', img: '/src/assets/images/thermal_expansion_lab_1791101638468.jpg' },
          5: { d1: 'bimetallicStrip', d2: 'liquidExpansionRealVsApparent', t1: 'ক্ষেত্র ও আয়তন প্রসারণ সহগ (β ও γ)', t2: 'সহগত্রয়ের সম্পর্ক: α = β/2 = γ/3', img: '/src/assets/images/thermal_expansion_lab_1791101638468.jpg' },
          6: { d1: 'liquidExpansionRealVsApparent', d2: 'waterAnomalousCurve', t1: 'তরলের আপাত ও প্রকৃত প্রসারণ', t2: 'কাঁচপাত্রের প্রসারণ প্রভাব (γ_r = γ_a + γ_g)', img: '/src/assets/images/thermal_expansion_lab_1791101638468.jpg' },
          7: { d1: 'waterAnomalousCurve', d2: 'liquidExpansionRealVsApparent', t1: 'পানির ব্যতিক্রমধর্মী প্রসারণ (৪°C)', t2: 'হ্রদের বরফের নিচে জলজ জীবের জীবনরক্ষা', img: '/src/assets/images/thermal_expansion_lab_1791101638468.jpg' },
          8: { d1: 'gasLawsCharlesBoyle', d2: 'kineticStates', t1: 'গ্যাস প্রসারণ ও বয়েল-চার্লসের সূত্র', t2: 'গরম বাতাসের বেলুন ও আদর্শ গ্যাস (PV=nRT)', img: '/src/assets/images/heat_thermal_physics_1791101382695.jpg' },
          9: { d1: 'calorimetryHeatExchange', d2: 'waterAnomalousCurve', t1: 'আপেক্ষিক তাপ (s) ও তাপধারণ ক্ষমতা (C)', t2: 'পানির উচ্চ আপেক্ষিক তাপ (৪২০০ J/kg·K)', img: '/src/assets/images/heat_thermal_physics_1791101382695.jpg' },
          10: { d1: 'calorimetryHeatExchange', d2: 'heatingCurve', t1: 'ক্যালরিমিতির মূলনীতি: গৃহীত তাপ = বর্জিত তাপ', t2: 'মিশ্রণের চূড়ান্ত তাপমাত্রা নির্ণয় সমীকরণ', img: '/src/assets/images/heat_thermal_physics_1791101382695.jpg' },
          11: { d1: 'heatingCurve', d2: 'calorimetryHeatExchange', t1: 'পদার্থের দশান্তর ও সুপ্ততাপ (L_f ও L_v)', t2: 'বরফ গলন ও বাষ্পীভবনের তাপীয় বক্ররেখা', img: '/src/assets/images/heat_thermal_physics_1791101382695.jpg' },
          12: { d1: 'kineticStates', d2: 'calorimetryHeatExchange', t1: 'বাষ্পায়ন, স্ফুটন ও তাপ সঞ্চালন প্রক্রিয়া', t2: 'বাষ্পায়নে শীতলতা ও থার্মোফ্লাস্ক প্রযুক্তি', img: '/src/assets/images/heat_thermal_physics_1791101382695.jpg' },
        };
        const cfg = p6Configs[slide.id] || p6Configs[1];
        enriched.gallery = [
          {
            id: `p6-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Thermal Physics Visual',
            captionBn: `${cfg.t1} বিষয়ক বৈজ্ঞানিক চিত্র।`,
            captionEn: 'Thermal physics illustration and concept.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `p6-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Heat Laws & Relations',
            captionBn: `${cfg.t2} সংক্রান্ত নীতি ও সূত্র।`,
            captionEn: 'Physical principle of thermal physics and expansion.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 7) {
        // Physics Chapter 7 - 12 individual topic-matched galleries with Real Photo + 2 Vector Diagrams
        const p7Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'transverseLongitudinalWave', d2: 'waveCharacteristics', t1: 'তরঙ্গের ধারণা ও প্রকারভেদ (অনুপ্রস্থ ও অনুদৈর্ঘ্য)', t2: 'তরঙ্গের বৈশিষ্ট্য ও কম্পন দিক', img: '/src/assets/images/sound_acoustics_physics_1791186341104.jpg' },
          2: { d1: 'waveCharacteristics', d2: 'waveVelocityDerivation', t1: 'তরঙ্গ সংশ্লিষ্ট রাশি (কম্পাঙ্ক, বিস্তার ও তরঙ্গদৈর্ঘ্য)', t2: 'পর্যায়কাল ও দশা সম্পর্ক', img: '/src/assets/images/sound_acoustics_physics_1791186341104.jpg' },
          3: { d1: 'waveVelocityDerivation', d2: 'waveCharacteristics', t1: 'তরঙ্গবেগ ও কম্পাঙ্কের সম্পর্ক (v = fλ)', t2: 'তরঙ্গ সমীকরণ ও গাণিতিক সম্পর্ক', img: '/src/assets/images/sound_acoustics_physics_1791186341104.jpg' },
          4: { d1: 'soundWavePropagation', d2: 'transverseLongitudinalWave', t1: 'শব্দ তরঙ্গ ও সংকোচন-প্রসারণ', t2: 'শব্দ সঞ্চালনে মাধ্যমের ভূমিকা', img: '/src/assets/images/sound_acoustics_physics_1791186341104.jpg' },
          5: { d1: 'soundSpeedMediums', d2: 'soundWavePropagation', t1: 'বিভিন্ন মাধ্যমে শব্দের বেগ (কঠিন > তরল > বায়বীয়)', t2: 'তাপমাত্রা ও আর্দ্রতার প্রভাব', img: '/src/assets/images/sound_acoustics_physics_1791186341104.jpg' },
          6: { d1: 'echoDistanceCalculation', d2: 'soundWavePropagation', t1: 'শব্দের প্রতিফলন ও প্রতিধ্বনি (Echo)', t2: 'প্রতিধ্বনি শোনার ন্যূনতম দূরত্ব (১৬.৬ মি)', img: '/src/assets/images/sonar_ultrasound_physics_1791186932375.jpg' },
          7: { d1: 'sonarDepthMeasurement', d2: 'echoDistanceCalculation', t1: 'প্রতিধ্বনির ব্যবহার: কূপের গভীরতা ও সোনার (SONAR)', t2: 'সমুদ্রের গভীরতা নির্ণয় ও বাদুড়ের পথচলা', img: '/src/assets/images/sonar_ultrasound_physics_1791186932375.jpg' },
          8: { d1: 'audioSpectrumRanges', d2: 'soundWavePropagation', t1: 'শ্রাব্যতার পাল্লা (২০ Hz - ২০,০০০ Hz)', t2: 'শব্দোত্তর (Ultrasound) ও অবশব্দ (Infrasound)', img: '/src/assets/images/sonar_ultrasound_physics_1791186932375.jpg' },
          9: { d1: 'ultrasoundMedicalIndustry', d2: 'audioSpectrumRanges', t1: 'শব্দোত্তর তরঙ্গের প্রয়োগ (আল্ট্রাসনোগ্রাফি)', t2: 'চিকিৎসা ও শিল্পক্ষেত্রে আল্ট্রাসাউন্ড', img: '/src/assets/images/sonar_ultrasound_physics_1791186932375.jpg' },
          10: { d1: 'soundCharacteristics', d2: 'waveCharacteristics', t1: 'শব্দের বৈশিষ্ট্য: তীব্রতা, তীক্ষ্ণতা ও গুণ/জাতি', t2: 'তীক্ষ্ণতা (Pitch) বনাম কম্পাঙ্ক সম্পর্ক', img: '/src/assets/images/wave_sound_physics_1791102920685.jpg' },
          11: { d1: 'soundIntensityDecibel', d2: 'soundCharacteristics', t1: 'শব্দের তীব্রতা ও ডেসিবেল স্কেল (dB)', t2: 'তীব্রতার মাত্রা I = P/A ও শ্রবণসীমা', img: '/src/assets/images/wave_sound_physics_1791102920685.jpg' },
          12: { d1: 'soundIntensityDecibel', d2: 'audioSpectrumRanges', t1: 'শব্দ দূষণ: কারণ, স্বাস্থ্যঝুঁকি ও প্রতিরোধ', t2: 'সহনশীল শব্দমাত্রা ও আধুনিক নিয়ন্ত্রণ', img: '/src/assets/images/wave_sound_physics_1791102920685.jpg' },
        };
        const cfg = p7Configs[slide.id] || p7Configs[1];
        enriched.gallery = [
          {
            id: `p7-photo-${slide.id}`,
            url: cfg.img,
            titleBn: 'বাস্তব সচিত্র রূপায়ন',
            titleEn: 'Realistic Scientific Illustration',
            captionBn: `${slide.title} — বাস্তব বৈজ্ঞানিক আলোকচিত্র ও প্রাকৃতিক রূপায়ন।`,
            captionEn: `Realistic scientific illustration of ${slide.title}.`,
            type: 'photo'
          },
          {
            id: `p7-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Wave & Sound Visual',
            captionBn: `${cfg.t1} বিষয়ক বৈজ্ঞানিক চিত্র।`,
            captionEn: 'Wave and sound physics illustration.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `p7-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Acoustics Principles',
            captionBn: `${cfg.t2} সংক্রান্ত নীতি ও সূত্র।`,
            captionEn: 'Physical principle of acoustics and sound waves.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      }
    } else if (inferredSubject === 'biology') {
      if (inferredChapter === 1) {
        // Biology Chapter 1 - 10 textbook topic-matched galleries with 2D Diagrams & Real Photos
        const b1Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'bioCh1Scope', d2: 'bioCh1Scope', t1: 'জীববিজ্ঞানের ধারণা ও জীবনের পরিধি', t2: 'Bios ও Logos ব্যুৎপত্তি ও জীববৈচিত্র্য', img: '/src/assets/images/bio1_life_scope_1791452505300.jpg' },
          2: { d1: 'bioCh1Branches', d2: 'bioCh1Branches', t1: 'ভৌত ও ফলিত জীববিজ্ঞানের শাখাসমূহ', t2: 'অঙ্গসংস্থানবিদ্যা, শারীরবিদ্যা ও জেনেটিক্স', img: '/src/assets/images/bio1_branches_scope_1791451076064.jpg' },
          3: { d1: 'bioCh1FiveKingdoms', d2: 'bioCh1TaxonomyHierarchy', t1: 'হুইটেকারের পঞ্চরাজ্য শ্রেণিবিন্যাস', t2: 'সুপার কিংডম ১ ও ২ এর সম্পর্ক', img: '/src/assets/images/five_kingdoms_biology_1791429049252.jpg' },
          4: { d1: 'bioCh1TaxonomyHierarchy', d2: 'bioCh1FiveKingdoms', t1: 'শ্রেণিবিন্যাসের ৭টি আবশ্যক ট্যাক্সন ধাপ', t2: 'মানুষের ট্যাক্সনমিক স্তরক্রম (Homo sapiens)', img: '/src/assets/images/bio1_taxonomic_ranks_1791454302345.jpg' },
          5: { d1: 'bioCh1MoneraBacteria', d2: 'bioCh1MoneraBacteria', t1: 'মনেরা রাজ্য: ব্যাকটেরিয়ার পূর্ণাঙ্গ অঙ্গসংস্থান', t2: 'পেপটিডোগ্লাইকান প্রাচীর, ফ্ল্যাজেলা ও DNA', img: '/src/assets/images/bio1_monera_bacteria_1791451087235.jpg' },
          6: { d1: 'bioCh1ProtistaAmoeba', d2: 'bioCh1ProtistaAmoeba', t1: 'প্রোটিস্টা রাজ্য: অ্যামিবার সূক্ষ্ম গঠন', t2: 'ক্ষণপদ (Pseudopodia), প্লাজমালেমা ও গহ্বর', img: '/src/assets/images/bio1_protista_fungi_1791451097711.jpg' },
          7: { d1: 'bioCh1FungiMushroom', d2: 'bioCh1FungiMushroom', t1: 'ফানজাই, প্লান্টি ও অ্যানিম্যালিয়া', t2: 'কাইটিন প্রাচীর, মাইসেলিয়াম ও কোষীয় গঠন', img: '/src/assets/images/bio1_plantae_animalia_1791454343858.jpg' },
          8: { d1: 'bioCh1BinomialRules', d2: 'bioCh1BinomialRules', t1: 'দ্বিপদ নামকরণের পদ্ধতি ও নিয়মাবলী', t2: 'গণ ও প্রজাতি, ল্যাটিন ভাষা ও ইটালিক হরফ', img: '/src/assets/images/bio1_binomial_rules_1791454326032.jpg' },
          9: { d1: 'bioCh1Binomial', d2: 'bioCh1Binomial', t1: 'গুরুত্বপূর্ণ উদ্ভিদ ও প্রাণীর বৈজ্ঞানিক নাম', t2: 'দোয়েল, বাঘ, শাপলা, ধান ও পাটের নামকরণ', img: '/src/assets/images/bio1_species_names_1791451122864.jpg' },
          10: { d1: 'bioCh1TaxonomyHierarchy', d2: 'bioCh1FiveKingdoms', t1: 'অধ্যায় সারসংক্ষেপ ও এসএসসি বোর্ড টিপস', t2: 'ট্যাক্সন স্তরক্রম ও পঞ্চরাজ্য তুলনা', img: '/src/assets/images/bio1_biodiversity_nature_1791451133408.jpg' },
        };
        const cfg = b1Configs[slide.id] || b1Configs[1];
        enriched.gallery = [
          {
            id: `b1-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Biology Chapter 1 Interactive Diagram',
            captionBn: `${cfg.t1} — পাঠ্যবইয়ের সচিত্র রেখাচিত্র ও ৩ডি অঙ্গাণু ব্যবচ্ছেদ।`,
            captionEn: 'Detailed textbook diagram with 3D organelle inspection.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `b1-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Realistic Biological Illustration',
            captionBn: `${cfg.t2} — বাস্তব আলোকচিত্র ও প্রাকৃতিক রূপায়ন।`,
            captionEn: 'Scientific photo and real-world specimens.',
            type: 'photo'
          }
        ];
      } else if (inferredChapter === 2) {
        // Biology Chapter 2 - 12 individual topic-matched galleries
        const b2Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'plantVsAnimalCellSvg', d2: 'nucleusStructure', t1: 'উদ্ভিদকোষ বনাম প্রাণীকোষ', t2: 'আদিকোষ ও প্রকৃতকোষ তুলনা', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
          2: { d1: 'fluidMosaicMembrane', d2: 'cellWallLayers', t1: '২.২.১ কোষ ঝিল্লি (ফ্লুইড মোজাইক মডেল)', t2: '২.২.২ কোষপ্রাচীরের স্তরবিন্যাস', img: '/src/assets/images/fluid_mosaic_membrane_1791029123590.jpg' },
          3: { d1: 'cellWallLayers', d2: 'fluidMosaicMembrane', t1: 'কোষপ্রাচীরের ত্রিমাত্রিক স্তরবিন্যাস', t2: 'প্লাজমোডেজমাটা ও মধ্যপর্দা', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
          4: { d1: 'mitochondriaStructure', d2: 'chloroplastStructure', t1: 'মাইটোকন্ড্রিয়া — কোষের পাওয়ার হাউজ', t2: 'ক্রিস্টি ও এটিপি সিন্থেস', img: '/src/assets/images/mitochondria_cellular_1791029140427.jpg' },
          5: { d1: 'chloroplastStructure', d2: 'mitochondriaStructure', t1: 'প্লাস্টিড ও ক্লোরোপ্লাস্ট — খাদ্য কারখানা', t2: 'গ্রানাম ও থাইলাকয়েডে আলোক বিক্রিয়া', img: '/src/assets/images/mitochondria_cellular_1791029140427.jpg' },
          6: { d1: 'nucleusStructure', d2: 'plantVsAnimalCellSvg', t1: 'এন্ডোপ্লাজমিক রেটিকুলাম ও রাইবোসোম', t2: 'প্রোটিন ও লিপিড সংশ্লেষণ', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
          7: { d1: 'fluidMosaicMembrane', d2: 'nucleusStructure', t1: 'গলগি বস্তু ও লাইসোজোম', t2: 'কোষীয় পাচন ও নিঃসরণ', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
          8: { d1: 'plantVsAnimalCellSvg', d2: 'nucleusStructure', t1: 'সেন্ট্রোসোম, সেন্ট্রিওল ও কোষগহ্বর', t2: 'কোষের সংগঠন ও টোনোপ্লাস্ট', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
          9: { d1: 'nucleusStructure', d2: 'fluidMosaicMembrane', t1: 'নিউক্লিয়াস — কোষের প্রাণকেন্দ্র', t2: 'নিউক্লিওলাস ও ক্রোমাটিন জালিকা', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
          10: { d1: 'nucleusStructure', d2: 'plantVsAnimalCellSvg', t1: 'ক্রোমোজোম, ডিএনএ ও জিন', t2: 'বংশগতির ব্লুপ্রিন্ট', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
          11: { d1: 'plantTissuesClassification', d2: 'plantVsAnimalCellSvg', t1: 'উদ্ভিদ টিস্যু (প্যারেনকাইমা, জাইলেম)', t2: 'সংবহন টিস্যু ও ফ্লোয়েম', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
          12: { d1: 'plantVsAnimalCellSvg', d2: 'plantTissuesClassification', t1: 'প্রাণি টিস্যু ও অঙ্গতন্ত্র', t2: 'আবরণী, যোজক ও স্নায়ু টিস্যু', img: '/src/assets/images/cell_tissue_biology_1791027347161.jpg' },
        };
        const cfg = b2Configs[slide.id] || b2Configs[1];
        enriched.gallery = [
          {
            id: `b2-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Biology Cellular Diagram',
            captionBn: `${cfg.t1} বিষয়ক সূক্ষ্ম মাইক্রোস্কোপিক চিত্র।`,
            captionEn: 'Detailed biological diagram of cell components.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `b2-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Cell Organelle Relation',
            captionBn: `${cfg.t2} সংক্রান্ত গঠন ও শারীরবৃত্তীয় প্রক্রিয়া।`,
            captionEn: 'Ultrastructural cytology and organelle biology.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 4) {
        // Biology Chapter 4 - 12 individual topic-matched galleries with Real Photo + 2 Vector Diagrams
        const b4Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'atpEnergyCurrency', d2: 'chloroplastPhotosynthesis', t1: 'জীবনীশক্তি ও জৈব মুদ্রা (ATP) ধারণা', t2: 'ATP রিচার্জ চক্র ও ফসফোরাইলেশন', img: '/src/assets/images/bioenergetics_biology_1791102937315.jpg' },
          2: { d1: 'atpEnergyCurrency', d2: 'chloroplastPhotosynthesis', t1: 'ATP এর গঠন ও এনার্জি কারেন্সি ভূমিকা', t2: 'ফসফেট বন্ধনে শক্তি সঞ্চয় ও ৭.৩ kcal শক্তি', img: '/src/assets/images/bioenergetics_biology_1791102937315.jpg' },
          3: { d1: 'chloroplastPhotosynthesis', d2: 'photosynthesisTwoPhases', t1: 'সালোকসংশ্লেষণের সামগ্রিক প্রক্রিয়া ও সমীকরণ', t2: 'সৌরশক্তি রূপান্তর ও শর্করা উৎপাদন', img: '/src/assets/images/photosynthesis_chloroplast_1791186353071.jpg' },
          4: { d1: 'chloroplastPhotosynthesis', d2: 'photosynthesisTwoPhases', t1: 'ক্লোরোপ্লাস্টের গঠন ও সালোকসংশ্লেষণ রঞ্জককণা', t2: 'থাইলাকয়েড, স্ট্রোমা ও ক্লোরোফিল শোষণ', img: '/src/assets/images/photosynthesis_chloroplast_1791186353071.jpg' },
          5: { d1: 'photosynthesisTwoPhases', d2: 'chloroplastPhotosynthesis', t1: 'সালোকসংশ্লেষণের আলোক পর্যায় ও ফটোলাইসিস', t2: 'পানি বিভাজন ও ATP-NADPH₂ উৎপাদন', img: '/src/assets/images/photosynthesis_chloroplast_1791186353071.jpg' },
          6: { d1: 'calvinCycleC3C4', d2: 'photosynthesisTwoPhases', t1: 'অন্ধকার পর্যায় ও কার্বন বিজারণ চক্র', t2: 'ক্যালভিন চক্র (C3) ও হ্যাচ-স্ল্যাক চক্র (C4)', img: '/src/assets/images/photosynthesis_chloroplast_1791186353071.jpg' },
          7: { d1: 'calvinCycleC3C4', d2: 'photosynthesisTwoPhases', t1: 'সালোকসংশ্লেষণের প্রভাবকসমূহ', t2: 'আলো, CO₂, তাপমাত্রা ও পানির অনুপাত', img: '/src/assets/images/photosynthesis_chloroplast_1791186353071.jpg' },
          8: { d1: 'aerobicRespirationStages', d2: 'mitochondriaStructure', t1: 'শ্বসন (Respiration) ধারণা ও প্রকারভেদ', t2: 'সবাত বনাম অবাত শ্বসনের পার্থক্য', img: '/src/assets/images/cellular_respiration_atp_1791281254904.jpg' },
          9: { d1: 'aerobicRespirationStages', d2: 'mitochondriaStructure', t1: 'সবাত শ্বসনের ৪টি ধাপ (গ্লাইকোলাইসিস, ক্রেবস চক্র)', t2: 'অ্যাসিটাইল কো-এ ও ইলেকট্রন প্রবাহতন্ত্র', img: '/src/assets/images/cellular_respiration_atp_1791281254904.jpg' },
          10: { d1: 'respirationAtpBalance', d2: 'aerobicRespirationStages', t1: 'সবাত শ্বসনে মোট ATP উৎপাদন হিসাব', t2: '১ অণু গ্লুকোজ জারণে ৩৮টি ATP লাভ', img: '/src/assets/images/cellular_respiration_atp_1791281254904.jpg' },
          11: { d1: 'fermentationAnaerobic', d2: 'aerobicRespirationStages', t1: 'অবাত শ্বসন ও সন্ধান (Fermentation) প্রক্রিয়া', t2: 'অ্যালকোহল ও ল্যাকটিক অ্যাসিড গাঁজন', img: '/src/assets/images/cellular_respiration_atp_1791281254904.jpg' },
          12: { d1: 'photosynthesisVsRespiration', d2: 'atpEnergyCurrency', t1: 'সালোকসংশ্লেষণ বনাম শ্বসন: শক্তির ভারসাম্য', t2: 'বাস্তুতন্ত্রে অক্সিজেন ও কার্বন ডাই-অক্সাইড চক্র', img: '/src/assets/images/photosynthesis_chloroplast_1791186353071.jpg' },
        };
        const cfg = b4Configs[slide.id] || b4Configs[1];
        enriched.gallery = [
          {
            id: `b4-photo-${slide.id}`,
            url: cfg.img,
            titleBn: 'বাস্তব সচিত্র রূপায়ন',
            titleEn: 'Realistic Scientific Illustration',
            captionBn: `${slide.title} — বাস্তব বৈজ্ঞানিক আলোকচিত্র ও আণবিক রূপায়ন।`,
            captionEn: `Realistic scientific illustration of ${slide.title}.`,
            type: 'photo'
          },
          {
            id: `b4-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Bioenergetics Metabolic Diagram',
            captionBn: `${cfg.t1} সংক্রান্ত শারীরবৃত্তীয় রূপরেখা।`,
            captionEn: 'Detailed metabolic diagram of bioenergetics.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `b4-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Cellular Energy Conversion',
            captionBn: `${cfg.t2} বিষয়ক বিশদ প্রক্রিয়া ও তথ্য।`,
            captionEn: 'Cellular biochemistry and energy synthesis.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 3) {
        enriched.gallery = [
          {
            id: `b3-g1-${slide.id}`,
            url: '/src/assets/images/mitosis_cell_division_1791027361813.jpg',
            titleBn: 'মাইটোসিস কোষ বিভাজনের ধাপসমূহ',
            titleEn: 'Mitosis 5 Stages Sequence',
            captionBn: 'প্রোফেজ থেকে টেলোফেজ পর্যন্ত ক্রোমোজোম ও স্পিন্ডল যন্ত্রের ধারাবাহিক রূপান্তর।',
            captionEn: 'Five continuous stages of somatic mitotic cell division.',
            type: 'diagram',
            customDiagramType: 'mitosisStages'
          },
          {
            id: `b3-g2-${slide.id}`,
            url: '/src/assets/images/mitosis_cell_division_1791027361813.jpg',
            titleBn: 'ফ্লুরোসেন্ট অণুবীক্ষণে ক্রোমোজোম পৃথকীকরণ',
            titleEn: 'Fluorescent Microscopy of Anaphase',
            captionBn: 'মেরুমুখী চলনকালে অপত্য ক্রোমোজোমের সেন্ট্রোমিয়ারের অবস্থান অনুযায়ী V, L, J, I রূপ।',
            captionEn: 'Chromosome segregation with fluorescent microtubule spindle fibers.',
            type: 'photo'
          }
        ];
      } else if (inferredChapter >= 6 && inferredChapter <= 14) {
        // If slide already has gallery items from its slidesData file, retain them
        if (!slide.gallery || slide.gallery.length === 0) {
          enriched.gallery = [
            {
              id: 'bio-ch' + inferredChapter + '-d1-' + slide.id,
              url: slide.image || '/src/assets/images/cell_tissue_biology_1791027347161.jpg',
              titleBn: slide.title || 'বৈজ্ঞানিক রূপরেখা ও চিত্র',
              titleEn: slide.subtitle || 'Biological Diagram',
              captionBn: (slide.title || '') + ' সম্পর্কিত বিশদ ২ডি ও ৩ডি বৈজ্ঞানিক চিত্র।',
              captionEn: 'Detailed scientific visual illustration and model.',
              type: 'diagram',
              customDiagramType: slide.customDiagramType || ('bioCh' + inferredChapter + 'Main')
            }
          ];
        }
      }
    } else if (inferredSubject === 'chemistry') {
      if (inferredChapter === 4) {
        // Chemistry Chapter 4 - 12 topic-matched galleries
        const c4Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'periodicMini', d2: 'periodicTrends', t1: 'আধুনিক পর্যায় সারণির রূপরেখা', t2: '১৮টি গ্রুপ ও ৭টি পর্যায় বিন্যাস', img: '/src/assets/images/periodic_table_trends_1791100765641.jpg' },
          2: { d1: 'mendeleevVsModern', d2: 'periodicTrends', t1: 'মেন্ডেলিফ বনাম আধুনিক পর্যায় সূত্র', t2: 'ডোবেরাইনারের ত্রয়ী ও নিউল্যান্ডের অষ্টক', img: '/src/assets/images/ancient_alchemy_lab_1790755208632.jpg' },
          3: { d1: 'periodGroupFinder', d2: 'periodicTrends', t1: 'পর্যায় ও গ্রুপ নির্ণয়ের নিয়ম', t2: 'ল্যান্থানাইড ও অ্যাক্টিনাইড সারি', img: '/src/assets/images/periodic_table_trends_1791100765641.jpg' },
          4: { d1: 'aufbauLadder', d2: 'periodicTrends', t1: 'আউফবাউ নীতি ও ইলেকট্রন বিন্যাস', t2: 'পর্যায় সারণির মূল ভিত্তি', img: '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg' },
          5: { d1: 'crCuStability', d2: 'aufbauLadder', t1: 'Cr ও Cu এর ব্যতিক্রমী ইলেকট্রন বিন্যাস', t2: 'অর্ধপূর্ণ ও পূর্ণ d-অরবিটাল স্থায়িত্ব', img: '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg' },
          6: { d1: 'periodicTrends', d2: 'periodGroupFinder', t1: 'পর্যায়বৃত্ত ধর্ম: পারমাণবিক ব্যাসার্ধ', t2: 'পর্যায়ে হ্রাস ও গ্রুপে বৃদ্ধির ছন্দ', img: '/src/assets/images/periodic_table_trends_1791100765641.jpg' },
          7: { d1: 'periodicTrends', d2: 'periodGroupFinder', t1: 'আয়নীকরণ শক্তি ও পরিবর্তন ধারা', t2: 'ইলেকট্রন অপনয়নে প্রয়োজনীয় শক্তি', img: '/src/assets/images/periodic_table_trends_1791100765641.jpg' },
          8: { d1: 'periodicTrends', d2: 'periodGroupFinder', t1: 'ইলেকট্রন আসক্তি ও হ্যালোজেন ধর্ম', t2: 'নতুন ইলেকট্রন গ্রহণে মুক্ত শক্তি', img: '/src/assets/images/periodic_table_trends_1791100765641.jpg' },
          9: { d1: 'periodicTrends', d2: 'periodGroupFinder', t1: 'তড়িৎ ঋণাত্মকতা ও পলিং স্কেল', t2: 'বন্ধনজোড় ইলেকট্রন আকর্ষণ ক্ষমতা', img: '/src/assets/images/periodic_table_trends_1791100765641.jpg' },
          10: { d1: 'periodicTrends', d2: 'periodGroupFinder', t1: 'ধাতব ও অধাতব বৈশিষ্ট্যের রূপান্তর', t2: 'পর্যায়ে জারণ-বিজারণ ধর্মের তারতম্য', img: '/src/assets/images/elements_compounds_1790751385322.jpg' },
          11: { d1: 'specialGroupsChart', d2: 'periodicTrends', t1: 'বিশেষ গ্রুপসমূহ: ক্ষার, মৃৎক্ষার ও হ্যালোজেন', t2: 'নিষ্ক্রিয় গ্যাস ও মুদ্রা ধাতু', img: '/src/assets/images/elements_compounds_1790751385322.jpg' },
          12: { d1: 'mendeleevVsModern', d2: 'periodicTrends', t1: 'পর্যায় সারণির সুবিধা ও সীমাবদ্ধতা', t2: 'হাইড্রোজেনের বিতর্কিত অবস্থান', img: '/src/assets/images/periodic_table_trends_1791100765641.jpg' },
        };
        const cfg = c4Configs[slide.id] || c4Configs[1];
        enriched.gallery = [
          {
            id: `c4-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Periodic Table Diagram',
            captionBn: `${cfg.t1} বিষয়ক বিশদ চার্ট ও ডায়াগ্রাম।`,
            captionEn: 'Detailed periodic system diagram.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `c4-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Periodic Trends Principle',
            captionBn: `${cfg.t2} সংক্রান্ত বৈজ্ঞানিক বিশ্লেষণ।`,
            captionEn: 'Periodic principles and characteristics.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 5) {
        // Chemistry Chapter 5 - 12 topic-matched galleries
        const c5Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'octetVsDuet', d2: 'covalentSharing', t1: 'যোজ্যতা ইলেকট্রন ও বন্ধন সূচনা', t2: 'বহিঃস্থ শক্তিস্তরের ইলেকট্রন সংখ্যা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          2: { d1: 'octetVsDuet', d2: 'ionicBondFormation', t1: 'অষ্টক ও দুইয়ের নিয়ম', t2: 'হিলিয়াম ও নিয়নের স্থিতিশীলতা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          3: { d1: 'octetVsDuet', d2: 'specialGroupsChart', t1: 'নিষ্ক্রিয় গ্যাসের স্থিতিশীল ইলেকট্রন বিন্যাস', t2: 'রাসায়নিকভাবে নিষ্ক্রিয় থাকার কারণ', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          4: { d1: 'ionicBondFormation', d2: 'covalentSharing', t1: 'রাসায়নিক বন্ধন সৃষ্টির কারণ ও স্থিতিশক্তি', t2: 'নিম্নতম শক্তিস্তরে পৌঁছানোর প্রবণতা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          5: { d1: 'ionicBondFormation', d2: 'covalentSharing', t1: 'ক্যাটায়ন ও অ্যানায়ন গঠন প্রক্রিয়া', t2: 'ইলেকট্রন ত্যাগ ও গ্রহণের ব্যাখ্যা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          6: { d1: 'ionicBondFormation', d2: 'covalentSharing', t1: 'আয়নিক বন্ধন ও NaCl কেলাস ল্যাটিস', t2: 'স্থির বৈদ্যুতিক আকর্ষণ বলের সৃষ্টি', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          7: { d1: 'covalentSharing', d2: 'ionicBondFormation', t1: 'সমযোজী বন্ধন ও ইলেকট্রন শেয়ারিং', t2: 'H₂, O₂, N₂ ও CH₄ অণুর গঠন', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          8: { d1: 'ionicBondFormation', d2: 'covalentSharing', t1: 'আয়নিক ও সমযোজী যৌগের ধর্ম তুলনা', t2: 'গলনাঙ্ক, স্ফুটনাঙ্ক ও বিদ্যুৎ পরিবাহিতা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          9: { d1: 'metallicElectronSea', d2: 'covalentSharing', t1: 'ধাতব বন্ধন ও মুক্ত ইলেকট্রন সমুদ্র', t2: 'ধাতুর বিদ্যুৎ ও তাপ পরিবাহিতা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          10: { d1: 'waterPolarityHydration', d2: 'covalentSharing', t1: 'পোলার সমযোজী যৌগ ও পানির ডাইপোল', t2: 'আংশিক ধনাত্মক ও ঋণাত্মক প্রান্ত', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          11: { d1: 'waterPolarityHydration', d2: 'covalentSharing', t1: 'আন্তঃআণবিক আকর্ষণ ও হাইড্রোজেন বন্ধন', t2: 'পানির অস্বাভাবিক স্ফুটনাঙ্কের ব্যাখ্যা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          12: { d1: 'covalentSharing', d2: 'ionicBondFormation', t1: 'বন্ধন শক্তি ও তাপীয় পরিবর্তন', t2: 'তাপোৎপাদী ও তাপহারী বিক্রিয়া সম্পর্ক', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          13: { d1: 'waterPolarityHydration', d2: 'ionicBondFormation', t1: 'দ্রাব্যতা ও পোলারিটি মেকানিজম', t2: 'পানির ডাইপোল ও আয়ন হাইড্রেশন', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          14: { d1: 'ionicBondFormation', d2: 'metallicElectronSea', t1: 'বিদ্যুৎ পরিবাহিতা পরীক্ষা ল্যাব', t2: 'মুক্ত আয়ন বনাম মুক্ত ইলেকট্রন পরিবহন', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          15: { d1: 'waterPolarityHydration', d2: 'covalentSharing', t1: 'হাইড্রোজেন বন্ধন ও ভ্যান ডার ওয়ালস বল', t2: 'H₂O তরল বনাম H₂S গ্যাসীয় অবস্থা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          16: { d1: 'ionicBondFormation', d2: 'covalentSharing', t1: 'অধ্যায় ৫-এর সমন্বিত রিভিশন মানচিত্র', t2: 'সৃজনশীল প্রশ্ন ও বোর্ড প্রস্তুতি', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
        };
        const cfg = c5Configs[slide.id] || c5Configs[1];
        enriched.gallery = [
          {
            id: `c5-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Chemical Bond Diagram',
            captionBn: `${cfg.t1} বিষয়ক বৈজ্ঞানিক চিত্র।`,
            captionEn: 'Detailed chemical bonding illustration.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `c5-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Bond Principle Overview',
            captionBn: `${cfg.t2} সংক্রান্ত বিশদ ধারণা।`,
            captionEn: 'Chemical principle of molecular bonding.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 6) {
        // Chemistry Chapter 6 - 14 dedicated galleries with Real Photo + 2 Vector Diagrams
        const c6Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'moleConceptAvogadro', d2: 'moleMasterTriangle', t1: 'মোলের মৌলিক ধারণা ও অ্যাভোগাড্রো সংখ্যা', t2: 'কার্বন-১২ ভিত্তি ও কণা সংখ্যা', img: '/src/assets/images/mole_avogadro_stoichiometry_1791283726167.jpg' },
          2: { d1: 'molecularMassCalc', d2: 'moleConceptAvogadro', t1: 'পারমাণবিক ভর ও আণবিক ভর নির্ণয়', t2: 'যৌগের মোলার ভর হিসাব চার্ট', img: '/src/assets/images/mole_avogadro_stoichiometry_1791283726167.jpg' },
          3: { d1: 'moleMasterTriangle', d2: 'molecularMassCalc', t1: 'মোলের ইউনিভার্সাল মাস্টার সূত্র', t2: 'n = W/M = N/NA = V/22.4 = S×V', img: '/src/assets/images/mole_avogadro_stoichiometry_1791283726167.jpg' },
          4: { d1: 'gasMolarVolumeSTP', d2: 'moleMasterTriangle', t1: 'গ্যাসের মোলার আয়তন ও STP ধ্রুবক', t2: 'STP (২২.৪ L) বনাম SATP (২৪.৭৮৯ L)', img: '/src/assets/images/mole_avogadro_stoichiometry_1791283726167.jpg' },
          5: { d1: 'molarSolutionTypes', d2: 'molarityVolumetricFlask', t1: 'মোলার দ্রবণ ও ঘনমাত্রার প্রকারভেদ', t2: 'সেমিমোলার, ডেসিমোলার ও সেন্টিমোলার দ্রবণ', img: '/src/assets/images/molar_solution_titration_1791283769174.jpg' },
          6: { d1: 'molarityVolumetricFlask', d2: 'molarSolutionTypes', t1: 'মোলারিটি নির্ণয় ও ল্যাব দ্রবণ প্রস্তুতি', t2: 'W = SMV/1000 ও লঘুকরণ সূত্র', img: '/src/assets/images/molar_solution_titration_1791283769174.jpg' },
          7: { d1: 'percentageComposition', d2: 'empiricalFormulaSteps', t1: 'যৌগে মৌলের শতকরা সংযুতি নির্ণয়', t2: 'H₂SO₄ ও CaCO₃-এর শতকরা সংযুতি চার্ট', img: '/src/assets/images/molar_solution_titration_1791283769174.jpg' },
          8: { d1: 'empiricalFormulaSteps', d2: 'percentageComposition', t1: 'শতকরা সংযুতি থেকে স্থূল সংকেত', t2: 'সরলতম পূর্ণসংখ্যা অনুপাতের ৪ ধাপ', img: '/src/assets/images/molar_solution_titration_1791283769174.jpg' },
          9: { d1: 'molecularFormulaDerivation', d2: 'empiricalFormulaSteps', t1: 'স্থূল সংকেত থেকে আণবিক সংকেত', t2: 'আণবিক ভর ও বাষ্প ঘনত্ব (2D) প্রয়োগ', img: '/src/assets/images/molar_solution_titration_1791283769174.jpg' },
          10: { d1: 'stoichiometryReaction', d2: 'limitingReactantExcess', t1: 'রাসায়নিক সমীকরণ ও স্টয়কিওমিতি', t2: 'মোল-ভর-আয়তন রূপান্তর ভারসাম্য', img: '/src/assets/images/limiting_reactant_chemistry_1791283750306.jpg' },
          11: { d1: 'limitingReactantExcess', d2: 'stoichiometryReaction', t1: 'সীমিত বিক্রিয়ক (Limiting Reactant)', t2: 'বিক্রিয়ক নিঃশেষ ও অতিরিক্ত অংশের হিসাব', img: '/src/assets/images/limiting_reactant_chemistry_1791283750306.jpg' },
          12: { d1: 'percentageYieldGraph', d2: 'limitingReactantExcess', t1: 'উৎপাদের শতকরা পরিমাণ ও প্রকৃত ফলন', t2: '% Yield = (প্রকৃত ফলন / তাত্ত্বিক ফলন) × ১০০%', img: '/src/assets/images/limiting_reactant_chemistry_1791283750306.jpg' },
          13: { d1: 'creativeQuestionBreakdown', d2: 'stoichiometryReaction', t1: 'বোর্ড সৃজনশীল প্রশ্ন (CQ) সমাধান কৌশল', t2: 'গ ও ঘ ধাপের পূর্ণাঙ্গ গাণিতিক সমাধান', img: '/src/assets/images/limiting_reactant_chemistry_1791283750306.jpg' },
          14: { d1: 'chapter6ConceptSummary', d2: 'moleMasterTriangle', t1: 'অধ্যায় ৬-এর রিভিশন মাইন্ডম্যাপ', t2: '১০ মিনিটে সম্পূর্ণ অধ্যায় বুলেট সামারি', img: '/src/assets/images/limiting_reactant_chemistry_1791283750306.jpg' },
        };
        const cfg = c6Configs[slide.id] || c6Configs[1];
        enriched.gallery = [
          {
            id: `c6-photo-${slide.id}`,
            url: cfg.img,
            titleBn: `${slide.title} — বৈজ্ঞানিক আলোকচিত্র`,
            titleEn: 'Scientific Photographic View',
            captionBn: 'ল্যাবরেটরি ও বাস্তব রাসায়নিক পর্যবেক্ষণ।',
            captionEn: 'Laboratory and real chemical experimental observation.',
            type: 'photo'
          },
          {
            id: `c6-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Mole Concept Diagram',
            captionBn: `${cfg.t1} বিষয়ক বিশদ ভেক্টর চিত্র।`,
            captionEn: 'Detailed vector diagram for mole principles.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `c6-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Chemical Calculation Diagram',
            captionBn: `${cfg.t2} সংক্রান্ত গাণিতিক রূপরেখা।`,
            captionEn: 'Chemical quantitative calculation diagram.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 7) {
        // Chemistry Chapter 7 - 14 dedicated galleries with Real Photo + 2 Vector Diagrams
        const c7Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'physicalVsChemicalChange', d2: 'combustionVsMelting', t1: 'ভৌত পরিবর্তন বনাম রাসায়নিক পরিবর্তন', t2: 'মোমবাতির দ্বৈত রূপান্তর মেকানিজম', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          2: { d1: 'reversibleIrreversibleEquilibrium', d2: 'dynamicEquilibriumCurve', t1: 'একমুখী ও উভমুখী বিক্রিয়া', t2: 'খোলা বনাম বদ্ধ পাত্রে সাম্যাবস্থা', img: '/src/assets/images/le_chatelier_equilibrium_1791285324639.jpg' },
          3: { d1: 'reactionEnergyProfile', d2: 'bondEnergyCalculation', t1: 'তাপোৎপাদী ও তাপহারী বিক্রিয়া (ΔH)', t2: 'সক্রিয়ন শক্তি (Ea) ও বন্ধন শক্তি', img: '/src/assets/images/le_chatelier_equilibrium_1791285324639.jpg' },
          4: { d1: 'redoxElectronTransfer', d2: 'oxidizingReducingAgentGuide', t1: 'রেডক্স ও ইলেকট্রনীয় মতবাদ', t2: 'জারক ও বিজারক শনাক্তকরণ কৌশল', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          5: { d1: 'fiveRedoxReactionTypes', d2: 'displacementActivitySeries', t1: '৫টি প্রধান রেডক্স বিক্রিয়ার শ্রেণিবিভাগ', t2: 'সক্রিয়তা সিরিজ ও প্রতিস্থাপন বিক্রিয়া', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          6: { d1: 'neutralizationPrecipitation', d2: 'spectatorIonsMechanism', t1: 'নন-রেডক্স: প্রশমন ও অধঃক্ষেপণ', t2: 'দর্শক আয়ন ও অধঃক্ষেপ তৈরির মেকানিজম', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          7: { d1: 'specialReactionsMechanisms', d2: 'hydrolysisVsHydration', t1: 'বিশেষ বিক্রিয়া: আর্দ্রবিশ্লেষণ ও পানিযোজন', t2: 'সমানুকরণ (ইউরিয়া) ও পলিমারকরণ', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          8: { d1: 'oxidationNumberCalcRules', d2: 'oxidationExceptionGuide', t1: 'জারণ সংখ্যা নির্ণয়ের ৭টি মৌলিক নিয়ম', t2: 'KMnO₄, K₂Cr₂O₇ ও ব্যতিক্রমসমূহ', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          9: { d1: 'simultaneousRedoxCoupled', d2: 'halfReactionElectronBalance', t1: 'জারণ-বিজারণ যুগপৎ ঘটে প্রমাণ', t2: 'অর্ধ-বিক্রিয়া ও ইলেকট্রন সমতাকরণ', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          10: { d1: 'leChatelierPrincipleVisualizer', d2: 'equilibriumShiftSummary', t1: 'লা-শাতেলিয়ার নীতি ও সাম্যাবস্থা', t2: 'তাপমাত্রা, চাপ (Δn) ও ঘনমাত্রার প্রভাব', img: '/src/assets/images/le_chatelier_equilibrium_1791285324639.jpg' },
          11: { d1: 'haberBoschContactProcess', d2: 'industrialConditionsChart', t1: 'শিল্পক্ষেত্রে হেবার (NH₃) ও স্পর্শ পদ্ধতি', t2: 'অনুকূল তাপমাত্রা, চাপ ও প্রভাবক (Fe/V₂O₅)', img: '/src/assets/images/le_chatelier_equilibrium_1791285324639.jpg' },
          12: { d1: 'corrosionRustPrevention', d2: 'galvanizingSacrificialAnode', t1: 'লোহায় মরিচা গঠন ও রাসায়নিক বিক্রিয়া', t2: 'মরিচারোধ: গ্যালভানাইজিং ও ইলেকট্রোপ্লেটিং', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
          13: { d1: 'cqSolvingMatrixCh7', d2: 'redoxBoardAnswerFormat', t1: 'বোর্ড সৃজনশীল প্রশ্ন (CQ) সমাধান মাস্টারক্লাস', t2: 'উদ্দীপক বিশ্লেষণ ও পূর্ণাঙ্গ উত্তর ধাপ', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
          14: { d1: 'chapter7Mindmap', d2: 'reactionSummaryFlashcards', t1: 'অধ্যায় ৭-এর সম্পূর্ণ রিভিশন মাইন্ডম্যাপ', t2: '১০ মিনিটে সম্পূর্ণ অধ্যায় বুলেট সামারি', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
        };
        const cfg = c7Configs[slide.id] || c7Configs[1];
        enriched.gallery = [
          {
            id: `c7-photo-${slide.id}`,
            url: cfg.img,
            titleBn: `${slide.title} — আলোকচিত্র`,
            titleEn: 'Scientific Photographic View',
            captionBn: 'ল্যাবরেটরি ও বাস্তব রাসায়নিক পর্যবেক্ষণ।',
            captionEn: 'Laboratory and real chemical experimental observation.',
            type: 'photo'
          },
          {
            id: `c7-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Reaction Principle Diagram',
            captionBn: `${cfg.t1} বিষয়ক বিশদ ভেক্টর চিত্র।`,
            captionEn: 'Detailed vector diagram for reaction principles.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `c7-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Chemical Process Mechanism',
            captionBn: `${cfg.t2} সংক্রান্ত রূপরেখা।`,
            captionEn: 'Chemical process mechanism diagram.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 8) {
        // Chemistry Chapter 8 - 14 dedicated galleries with Real Photo + 2 Vector Diagrams
        const c8Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'bondEnergyCalculation', d2: 'reactionEnergyProfile', t1: 'রাসায়নিক বন্ধন শক্তি ও রূপান্তর', t2: 'শক্তি শোষণ বনাম নির্গমন রূপরেখা', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          2: { d1: 'reactionEnergyProfile', d2: 'bondEnergyCalculation', t1: 'বিক্রিয়া তাপ (ΔH) ও বন্ধন শক্তি', t2: 'পুরাতন বন্ধন ভাঙা ও নতুন বন্ধন গড়া', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          3: { d1: 'bondEnergyCalculation', d2: 'chapter8FormulaMindmap', t1: 'গাণিতিক সমাধান: ΔH = B₁ - B₂', t2: 'দহন ও বন্ধন শক্তি সূত্রের প্রয়োগ', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
          4: { d1: 'daniellCellSchematic', d2: 'saltBridgeMechanism', t1: 'তড়িৎ পরিবাহী বনাম অপরিবাহী পদার্থ', t2: 'গলিত ও জলীয় দ্রবণে আয়নীয় পরিবহন', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          5: { d1: 'daniellCellSchematic', d2: 'saltBridgeMechanism', t1: 'তড়িৎ রাসায়নিক কোষ বনাম তড়িৎ বিশ্লেষ্য কোষ', t2: 'রাসায়নিক শক্তি ⟷ বিদ্যুৎ শক্তি', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          6: { d1: 'daniellCellSchematic', d2: 'standardCellPotential', t1: 'ড্যানিয়েল কোষের চিত্র ও গঠনপ্রণালী', t2: 'কোষ বিভব E°cell = ১.১০ ভোল্ট', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          7: { d1: 'saltBridgeMechanism', d2: 'daniellCellSchematic', t1: 'ড্যানিয়েল কোষের রেডক্স সমীকরণ ও অর্ধকোষ', t2: 'লবণ সেতুর ভূমিকা ও চার্জ নিরপেক্ষতা', img: '/src/assets/images/redox_chemical_reactions_1791285299488.jpg' },
          8: { d1: 'dryCellStructure', d2: 'dryCellRedoxChemistry', t1: 'শুষ্ক কোষ (Dry Cell / ১.৫ V) গঠন', t2: 'জিংক চোঙ ও কার্বন দণ্ডের রেডক্স বিক্রিয়া', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
          9: { d1: 'waterElectrolysisHofmann', d2: 'moltenNaclElectrolysis', t1: 'গলিত ও জলীয় NaCl এর তড়িৎ বিশ্লেষণ', t2: 'ধাতব সোডিয়াম ও ক্লোরিন গ্যাস উৎপাদন', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
          10: { d1: 'waterElectrolysisHofmann', d2: 'volumeRatioElectrolysis', t1: 'পানির তড়িৎ বিশ্লেষণ (H₂ : O₂ = ২:১)', t2: 'হফম্যান ভোল্টামিটারের কার্যপ্রণালী', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
          11: { d1: 'electroplatingMechanism', d2: 'anodeCathodeSelectionRules', t1: 'তড়িৎ লেপন (Electroplating) প্রযুক্তি', t2: 'ক্যাথোড ও অ্যানোড নির্বাচন গোল্ডেন রুল', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
          12: { d1: 'dryCellStructure', d2: 'chapter8FormulaMindmap', t1: 'রিচার্জেবল ব্যাটারি: লেড-এসিড ও Li-ion', t2: 'গৌণ কোষের চার্জিং ও ডিসচার্জিং মেকানিজম', img: '/src/assets/images/cellular_respiration_atp_1791281254904.jpg' },
          13: { d1: 'chapter8FormulaMindmap', d2: 'reactionEnergyProfile', t1: 'জীবাশ্ম জ্বালানি ও পরিবেশগত প্রভাব', t2: 'গ্রিনহাউস গ্যাস ও নবায়নযোগ্য শক্তি', img: '/src/assets/images/cellular_respiration_atp_1791281254904.jpg' },
          14: { d1: 'chapter8FormulaMindmap', d2: 'chapter8ExamTipsSummary', t1: 'অধ্যায় ৮ সম্পূর্ণ রিভিশন মাইন্ডম্যাপ', t2: 'বোর্ড পরীক্ষার সুপার ফর্মুলা শিট', img: '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg' },
        };
        const cfg = c8Configs[slide.id] || c8Configs[1];
        enriched.gallery = [
          {
            id: `c8-photo-${slide.id}`,
            url: cfg.img,
            titleBn: `${slide.title} — আলোকচিত্র`,
            titleEn: 'Scientific Photographic View',
            captionBn: 'ল্যাবরেটরি ও বাস্তব রাসায়নিক পর্যবেক্ষণ।',
            captionEn: 'Laboratory and real chemical experimental observation.',
            type: 'photo'
          },
          {
            id: `c8-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Electrochemistry Diagram',
            captionBn: `${cfg.t1} বিষয়ক বিশদ ভেক্টর চিত্র।`,
            captionEn: 'Detailed vector diagram for energy and electrochemistry.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `c8-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Electrochemical Cell Mechanism',
            captionBn: `${cfg.t2} সংক্রান্ত রূপরেখা।`,
            captionEn: 'Electrochemical cell process mechanism diagram.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 9) {
        // Chemistry Chapter 9 - Acids, Bases, pH & Titration
        const c9Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'acidBaseIonization', d2: 'litmusIndicatorsChart', t1: 'এসিড ও ক্ষারকের জলীয় বিয়োজন (H⁺ ও OH⁻)', t2: 'প্রাকৃতিক ও কৃত্রিম নির্দেশকের বর্ণ পরিবর্তন', img: '/src/assets/images/acid_base_ph_meter_1791713596870.jpg' },
          2: { d1: 'acidBaseIonization', d2: 'litmusIndicatorsChart', t1: 'তীব্র বনাম দুর্বল এসিড ও ক্ষারক', t2: 'বিয়োজন মাত্রা (α) ও হাইড্রোক্সাইড আয়ন ঘনত্ব', img: '/src/assets/images/acid_base_ph_meter_1791713596870.jpg' },
          3: { d1: 'phScaleSpectrum', d2: 'acidBaseIonization', t1: '০-১৪ পর্যন্ত সম্পূর্ণ pH স্কেল ও রঙের বর্ণালী', t2: 'pH = -log[H⁺] গাণিতিক সম্পর্ক', img: '/src/assets/images/acid_base_ph_meter_1791713596870.jpg' },
          4: { d1: 'phScaleSpectrum', d2: 'litmusIndicatorsChart', t1: 'ডিজিটাল pH মিটার ও pH পেপার পরিমাপ', t2: 'ইউনিভার্সাল ইন্ডিকেটর কালার স্কেল', img: '/src/assets/images/acid_base_ph_meter_1791713596870.jpg' },
          5: { d1: 'phScaleSpectrum', d2: 'acidBaseIonization', t1: 'মানবদেহ ও কৃষিতে pH এর অপরিহার্য ভূমিকা', t2: 'রক্তের pH (৭.৪) ও মাটির ক্ষারত্ব নিয়ন্ত্রণ', img: '/src/assets/images/acid_base_ph_meter_1791713596870.jpg' },
          6: { d1: 'titrationBuretteFlask', d2: 'acidBaseIonization', t1: 'প্রশমন বিক্রিয়া ও ব্যুরেট-ফ্লাস্ক টাইট্রেশন', t2: 'গোলাপী ফেনলফথ্যালিন সমাপ্তি বিন্দু', img: '/src/assets/images/molar_solution_titration_1791283769174.jpg' },
          7: { d1: 'titrationBuretteFlask', d2: 'saltHydrolysisLattice', t1: 'অজানা ক্ষার/এসিডের ঘনমাত্রা নির্ণয় V₁S₁=V₂S₂', t2: 'লবণের প্রকৃতি ও জলীয় আর্দ্রবিশ্লেষণ', img: '/src/assets/images/molar_solution_titration_1791283769174.jpg' },
          8: { d1: 'acidRainMechanism', d2: 'acidBaseIonization', t1: 'এসিড বৃষ্টি গঠন (SO₂ ও NO₂ ⟶ এসিড)', t2: 'মার্বেল পাথর ও জলজ বাস্তুতন্ত্রের মারাত্মক ক্ষয়', img: '/src/assets/images/acid_rain_environment_1791713616526.jpg' },
          9: { d1: 'acidBaseIonization', d2: 'titrationBuretteFlask', t1: 'ধাতব কার্বনেট ও এসিডের CO₂ উৎপাদন বিক্রিয়া', t2: 'ল্যাবরেটরিতে এসিড-ক্ষারক রাসায়নিক পরীক্ষা', img: '/src/assets/images/acid_base_ph_meter_1791713596870.jpg' },
          10: { d1: 'litmusIndicatorsChart', d2: 'acidBaseIonization', t1: 'ল্যাবরেটরি ফার্স্ট এইড ও এসিড পোড়ার চিকিৎসা', t2: 'নিরাপদ হ্যান্ডলিং ও ব্যক্তিগত সুরক্ষা সরঞ্জাম', img: '/src/assets/images/acid_base_ph_meter_1791713596870.jpg' },
        };
        const cfg = c9Configs[slide.id] || c9Configs[1];
        enriched.gallery = [
          {
            id: `c9-photo-${slide.id}`,
            url: cfg.img,
            titleBn: `${slide.title} — গবেষণাগারের বাস্তব দৃশ্য`,
            titleEn: 'Acid-Base Laboratory Photography',
            captionBn: 'এসিড-ক্ষারক ও টাইট্রেশনের উচ্চ-রেজোলিউশন আলোকচিত্র।',
            captionEn: 'Real acid-base chemistry observation.',
            type: 'photo'
          },
          {
            id: `c9-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Acid Base Scientific Vector',
            captionBn: `${cfg.t1} বিষয়ক বৈজ্ঞানিক ডায়াগ্রাম।`,
            captionEn: 'Detailed diagram of acid-base properties.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `c9-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Chemical Equilibrium Chart',
            captionBn: `${cfg.t2} সংক্রান্ত রূপরেখা।`,
            captionEn: 'Indicator and pH spectrum chart.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 10) {
        // Chemistry Chapter 10 - Metallurgy & Minerals
        const c10Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'mineralsOresChart', d2: 'metallurgyStepsFlow', t1: 'খনিজ ও আকরিক তুলনামূলক চার্ট', t2: 'হেমাটাইট, বক্সাইট ও ক্রায়োলাইট সংকেত', img: '/src/assets/images/minerals_ores_bauxite_1791713634869.jpg' },
          2: { d1: 'mineralsOresChart', d2: 'metallurgyStepsFlow', t1: 'ধাতু নিষ্কাশনের ৫টি ধাপ', t2: 'ভস্মীকরণ বনাম ভর্জন বিক্রিয়া', img: '/src/assets/images/minerals_ores_bauxite_1791713634869.jpg' },
          3: { d1: 'mineralsOresChart', d2: 'metallurgyStepsFlow', t1: 'ধাতুর সক্রিয়তা সিরিজ ও নিষ্কাশন নির্বাচন', t2: 'তড়িৎ বিশ্লেষণ বনাম কার্বন বিজারণ', img: '/src/assets/images/minerals_ores_bauxite_1791713634869.jpg' },
          4: { d1: 'blastFurnaceIron', d2: 'mineralsOresChart', t1: 'বাত্যাচুল্লি (ব্লাস্ট ফার্নেস) লোহা নিষ্কাশন', t2: 'চুনাপাথরের ধাতুমল (CaSiO₃) গঠন অঞ্চল', img: '/src/assets/images/metallurgy_blast_furnace_1791619758396.jpg' },
          5: { d1: 'hallHeroultAluminium', d2: 'mineralsOresChart', t1: 'হল-হেরল্ট প্রণালীতে অ্যালুমিনিয়াম স্মেল্টার', t2: 'ক্রায়োলাইট ও কার্বন অ্যানোড ক্ষয় বিক্রিয়া', img: '/src/assets/images/copper_electrolytic_refining_1791713719461.jpg' },
          6: { d1: 'copperRefiningCell', d2: 'mineralsOresChart', t1: 'কপার তড়িৎ বিশোধন কোষ ও অ্যানোড মাড', t2: '৯৯.৯৯% খাঁটি ক্যাথোড কপার সঞ্চয়ন', img: '/src/assets/images/copper_electrolytic_refining_1791713719461.jpg' },
          7: { d1: 'mineralsOresChart', d2: 'metallurgyStepsFlow', t1: 'স্পর্শ পদ্ধতিতে সালফিউরিক এসিড প্রস্তুত', t2: 'লা-শাতেলিয়ার নীতি ও ওলিয়াম (H₂S₂O₇) ধাপ', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
          8: { d1: 'rustingElectrochemicalPit', d2: 'mineralsOresChart', t1: 'লোহায় মরিচা (Fe₂O₃·xH₂O) গঠন মেকানিজম', t2: 'গ্যালভানাইজিং ও উৎসর্গকৃত অ্যানোড সুরক্ষা', img: '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg' },
          9: { d1: 'mineralsOresChart', d2: 'metallurgyStepsFlow', t1: 'সংকর ধাতু: ডুরালুমিন, পিতল, ব্রোঞ্জ ও স্টিল', t2: 'উড়োজাহাজ কাঠামো ও স্টেইনলেস স্টিল', img: '/src/assets/images/elements_compounds_1790751385322.jpg' },
          10: { d1: 'mineralsOresChart', d2: 'metallurgyStepsFlow', t1: 'ধাতু রিসাইক্লিং ও ৯৫% বিদ্যুৎ সাশ্রয়', t2: 'সার্কুলার ইকোনমি ও খনিজ সম্পদ সংরক্ষণ', img: '/src/assets/images/minerals_ores_bauxite_1791713634869.jpg' },
        };
        const cfg = c10Configs[slide.id] || c10Configs[1];
        enriched.gallery = [
          {
            id: `c10-photo-${slide.id}`,
            url: cfg.img,
            titleBn: `${slide.title} — বৈজ্ঞানিক দৃশ্য`,
            titleEn: 'Scientific Photographic View',
            captionBn: 'ধাতু নিষ্কাশন ও শিল্প রসায়নের বাস্তব চিত্র।',
            captionEn: 'Industrial metallurgy and extraction diagram.',
            type: 'photo'
          },
          {
            id: `c10-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Metallurgy Process Flow',
            captionBn: `${cfg.t1} বিষয়ক বৈজ্ঞানিক রূপরেখা।`,
            captionEn: 'Process diagram for mineral extraction.',
            type: 'diagram'
          },
          {
            id: `c10-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Chemical Reaction Principles',
            captionBn: `${cfg.t2} সংক্রান্ত বিশদ রাসায়নিক বিশ্লেষণ।`,
            captionEn: 'Chemical principles and reactions.',
            type: 'diagram'
          }
        ];
      } else if (inferredChapter === 11) {
        // Chemistry Chapter 11 - Fossils & Hydrocarbons
        const c11Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'methaneCombustionFlame', d2: 'hydrocarbonClassificationTree', t1: 'জীবাশ্ম জ্বালানির ভূ-রাসায়নিক উৎপত্তি', t2: 'বাংলাদেশের প্রাকৃতিক গ্যাস (৯৯.৯৯% মিথেন)', img: '/src/assets/images/petroleum_fractional_distill_1791619784228.jpg' },
          2: { d1: 'fractionalDistillationTower', d2: 'petroleumFractionsChart', t1: 'পেট্রোলিয়ামের আংশিক পাতন কলাম', t2: 'এলপিজি থেকে বিটুমিনের ৭টি স্তরের তালিকা', img: '/src/assets/images/petroleum_fractional_distill_1791619784228.jpg' },
          3: { d1: 'hydrocarbonClassificationTree', d2: 'aromaticBenzeneRing', t1: 'হাইড্রোকার্বনের পূর্ণাঙ্গ শ্রেণিবিভাগ', t2: 'বেনজিন ও অ্যারোমেটিক হাকেল নীতি', img: '/src/assets/images/petroleum_fractional_distill_1791619784228.jpg' },
          4: { d1: 'alkaneDecarboxylationReaction', d2: 'alkaneChlorinationMechanism', t1: 'অ্যালকেন: ডিকার্বক্সিলেশন প্রস্তুতি', t2: 'সূর্যালোকের ৪ ধাপে ক্লোরিন প্রতিস্থাপন', img: '/src/assets/images/organic_reactions_lab_1791713657463.jpg' },
          5: { d1: 'bromineTestUnsaturation', d2: 'baeyerTestKMnO4', t1: 'অ্যালকিন: ব্রোমিন দ্রবণ লাল বর্ণ পরীক্ষা', t2: 'ক্ষারীয় পারম্যাঙ্গানেট বেয়ার পরীক্ষা', img: '/src/assets/images/organic_reactions_lab_1791713657463.jpg' },
          6: { d1: 'alkynePreparationReaction', d2: 'alkyneHydrationAcetaldehyde', t1: 'অ্যালকাইন: ক্যালসিয়াম কার্বাইড বিক্রিয়া', t2: 'ইথাইন থেকে ইথান্যাল পানি সংযোজন', img: '/src/assets/images/organic_reactions_lab_1791713657463.jpg' },
          7: { d1: 'alcoholAldehydeAcidCascade', d2: 'esterificationReactionMechanism', t1: 'অ্যালকোহল ⟶ অ্যালডিহাইড ⟶ জৈব এসিড', t2: 'ফরমালিন ও ভিনেগারের রূপান্তর শৃঙ্খল', img: '/src/assets/images/organic_reactions_lab_1791713657463.jpg' },
          8: { d1: 'additionPolymerizationPolymer', d2: 'condensationNylonSynthesis', t1: 'সংযোজন পলিমার: পলিথিন, পিভিসি ও টেফলন', t2: 'ঘনীভবন পলিমার: নাইলন ৬:৬ প্রস্তুতি', img: '/src/assets/images/polymers_plastics_chemistry_1791713752376.jpg' },
          9: { d1: 'plasticRecyclingSymbolChart', d2: 'additionPolymerizationPolymer', t1: 'প্লাস্টিক বনাম স্টার্চের বায়োপ্লাস্টিক (PLA)', t2: 'মাইক্রোপ্লাস্টিক ও পরিবেশবান্ধব ৩-আর নীতি', img: '/src/assets/images/polymers_plastics_chemistry_1791713752376.jpg' },
          10: { d1: 'organicConversionMasterMap', d2: 'hydrocarbonClassificationTree', t1: 'জৈব রসায়ন বোর্ড মাস্টার রোডম্যাপ', t2: 'সকল সমগোত্রীয় শ্রেণি ও রূপান্তর ছক', img: '/src/assets/images/organic_reactions_lab_1791713657463.jpg' },
        };
        const cfg = c11Configs[slide.id] || c11Configs[1];
        enriched.gallery = [
          {
            id: `c11-photo-${slide.id}`,
            url: cfg.img,
            titleBn: `${slide.title} — বাস্তব আলোকচিত্র`,
            titleEn: 'Petroleum & Organic Chemistry Observation',
            captionBn: 'হাইড্রোকার্বন ও পেট্রোকেমিক্যাল ল্যাবরেটরি দৃশ্য।',
            captionEn: 'Hydrocarbon chemistry illustration.',
            type: 'photo'
          },
          {
            id: `c11-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Hydrocarbon Reaction Pathway',
            captionBn: `${cfg.t1} বিষয়ক বৈজ্ঞানিক রূপরেখা।`,
            captionEn: 'Reaction mechanism flowchart.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `c11-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Molecular Functional Group Map',
            captionBn: `${cfg.t2} সংক্রান্ত বিশদ বিশ্লেষণ।`,
            captionEn: 'Functional groups and conversions.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      } else if (inferredChapter === 12) {
        // Chemistry Chapter 12 - Household & Life Chemistry
        const c12Configs: Record<number, { d1: string; d2: string; t1: string; t2: string; img: string }> = {
          1: { d1: 'bakingSodaEffervescence', d2: 'bakingPowderTartaricNeutralization', t1: 'বেকিং সোডা ও বেকিং পাউডার ফোলানো', t2: 'টারটারিক এসিড প্রশমন ও CO₂ বুদবুদ', img: '/src/assets/images/baking_soda_vinegar_1791713687305.jpg' },
          2: { d1: 'vinegarPreservationMechanism', d2: 'bakingSodaEffervescence', t1: 'ভিনেগার প্রস্তুতি ও সন্ধান পদ্ধতি', t2: 'pH ৩.০-৩.৫ এ খাদ্য সংরক্ষণ মেকানিজম', img: '/src/assets/images/baking_soda_vinegar_1791713687305.jpg' },
          3: { d1: 'toiletCleanerMechanism', d2: 'glassCleanerAmmonia', t1: 'টয়লেট ক্লিনার ও কস্টিক সোডার ক্রিয়া', t2: 'কাঁচ পরিষ্কারক ও অ্যামোনিয়াম হাইড্রোক্সাইড', img: '/src/assets/images/baking_soda_vinegar_1791713687305.jpg' },
          4: { d1: 'saponificationTriglycerideReaction', d2: 'saltingOutSoapSeparation', t1: 'তেল/চর্বির ক্ষারীয় সাবানায়ন বিক্রিয়া', t2: 'সল্টিং আউট ও মূল্যবান গ্লিসারিন উপজাত', img: '/src/assets/images/household_chemistry_soap_1791619813402.jpg' },
          5: { d1: 'soapMicelleCleaningMechanism', d2: 'hydrophilicHydrophobicStructure', t1: 'সাবানের মাইসেল (Micelle) গঠন চিত্র', t2: 'হাইড্রোফিলিক মাথা ও হাইড্রোফোবিক লেজ', img: '/src/assets/images/household_chemistry_soap_1791619813402.jpg' },
          6: { d1: 'detergentHardWaterAction', d2: 'soapMicelleCleaningMechanism', t1: 'খর পানিতে সাবানের স্কাম বনাম ডিটারজেন্ট', t2: 'সোডিয়াম লরাইল সালফেটের কার্যকারিতা', img: '/src/assets/images/soaps_detergents_cleaning_1791713798734.jpg' },
          7: { d1: 'bleachingPowderChlorineAction', d2: 'nascentOxygenStainRemoval', t1: 'ব্লিচিং পাউডার Ca(OCl)Cl প্রস্তুতি', t2: 'জায়মান অক্সিজেন [O] দ্বারা দাগ তোলা ও জীবাণুনাশ', img: '/src/assets/images/baking_soda_vinegar_1791713687305.jpg' },
          8: { d1: 'fertilizerUreaSynthesis', d2: 'soilAcidityLimeCorrection', t1: 'ইউরিয়া সার প্রস্তুতি (৪৬% নাইট্রোজেন)', t2: 'মাটির অম্লত্ব দূরীকরণে চুন (CaO) প্রয়োগ', img: '/src/assets/images/baking_soda_vinegar_1791713687305.jpg' },
          9: { d1: 'foodPreservativesStandards', d2: 'calciumCarbideHealthRisks', t1: 'অনুমোদিত প্রিজারভেটিভস বনাম ক্ষতিকর ফরমালিন', t2: 'ক্যালসিয়াম কার্বাইডের অপব্যবহার ও স্বাস্থ্যঝুঁকি', img: '/src/assets/images/baking_soda_vinegar_1791713687305.jpg' },
          10: { d1: 'chapter12MindmapBoardSummary', d2: 'soapMicelleCleaningMechanism', t1: 'আমাদের জীবনে রসায়ন সমন্বিত বোর্ড ব্যাংক', t2: 'সকল বিক্রিয়া সমীকরণ ও ১০০% প্রস্তুতি', img: '/src/assets/images/soaps_detergents_cleaning_1791713798734.jpg' },
        };
        const cfg = c12Configs[slide.id] || c12Configs[1];
        enriched.gallery = [
          {
            id: `c12-photo-${slide.id}`,
            url: cfg.img,
            titleBn: `${slide.title} — গৃহস্থালি রসায়নের বাস্তব রূপ`,
            titleEn: 'Household & Life Chemistry Photography',
            captionBn: 'দৈনন্দিন জীবনের রসায়নের উচ্চ-মানের দৃশ্য।',
            captionEn: 'Real household chemistry products.',
            type: 'photo'
          },
          {
            id: `c12-g1-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t1,
            titleEn: 'Chemical Process Flowchart',
            captionBn: `${cfg.t1} বিষয়ক বিশদ ভেক্টর ডায়াগ্রাম।`,
            captionEn: 'Detailed diagram of household chemistry.',
            type: 'diagram',
            customDiagramType: cfg.d1
          },
          {
            id: `c12-g2-${slide.id}`,
            url: cfg.img,
            titleBn: cfg.t2,
            titleEn: 'Action Mechanism Diagram',
            captionBn: `${cfg.t2} সংক্রান্ত রূপরেখা।`,
            captionEn: 'Action mechanism illustration.',
            type: 'diagram',
            customDiagramType: cfg.d2
          }
        ];
      }
    }
  } else {
    // If gallery exists, ensure accurate URLs and diagram types for 2.2.1 and other slides
    enriched.gallery = enriched.gallery.map(item => {
      let customType = item.customDiagramType;
      let url = item.url;
      
      // Specially guarantee Biology Chapter 2 Slide 2 has the 2.2.1 fluid mosaic model diagram
      if (slide.subject === 'biology' && slide.chapter === 2 && slide.id === 2) {
        if (!customType) customType = 'fluidMosaicMembrane';
        if (!url) url = '/src/assets/images/fluid_mosaic_membrane_1791029123590.jpg';
      }

      // For Chemistry Chapter 4: replace any hero_chemistry_atom with topic-specific images and diagrams
      if (inferredSubject === 'chemistry' && inferredChapter === 4) {
        if (!url || url.includes('hero_chemistry_atom')) {
          url = slide.id === 2 ? '/src/assets/images/ancient_alchemy_lab_1790755208632.jpg'
              : (slide.id === 4 || slide.id === 5) ? '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg'
              : (slide.id === 10 || slide.id === 11) ? '/src/assets/images/elements_compounds_1790751385322.jpg'
              : '/src/assets/images/periodic_table_trends_1791100765641.jpg';
        }
      }

      // For Chemistry Chapter 5: replace any hero_chemistry_atom with chemical bonds image
      if (inferredSubject === 'chemistry' && inferredChapter === 5) {
        if (!url || url.includes('hero_chemistry_atom')) {
          url = '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg';
        }
      }

      // For Chemistry Chapter 6: replace any hero_chemistry_atom with dedicated mole images
      if (inferredSubject === 'chemistry' && inferredChapter === 6) {
        if (!url || url.includes('hero_chemistry_atom')) {
          url = slide.id >= 10 ? '/src/assets/images/limiting_reactant_chemistry_1791283750306.jpg'
              : slide.id >= 5 ? '/src/assets/images/molar_solution_titration_1791283769174.jpg'
              : '/src/assets/images/mole_avogadro_stoichiometry_1791283726167.jpg';
        }
      }

      // For Chemistry Chapter 7: replace any hero_chemistry_atom with dedicated reaction images
      if (inferredSubject === 'chemistry' && inferredChapter === 7) {
        if (!url || url.includes('hero_chemistry_atom')) {
          url = slide.id >= 12 ? '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg'
              : slide.id >= 6 ? '/src/assets/images/le_chatelier_equilibrium_1791285324639.jpg'
              : '/src/assets/images/redox_chemical_reactions_1791285299488.jpg';
        }
      }

      // For Chemistry Chapter 8: replace any hero_chemistry_atom with dedicated energy/electrochemistry images
      if (inferredSubject === 'chemistry' && inferredChapter === 8) {
        if (!url || url.includes('hero_chemistry_atom')) {
          url = slide.id >= 12 ? '/src/assets/images/cellular_respiration_atp_1791281254904.jpg'
              : slide.id >= 8 ? '/src/assets/images/rusting_electroplating_corrosion_1791285340311.jpg'
              : slide.id >= 4 ? '/src/assets/images/redox_chemical_reactions_1791285299488.jpg'
              : '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg';
        }
      }

      return {
        ...item,
        url: url || defaultImg,
        customDiagramType: customType
      };
    });
  }

  return enriched;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
  onOpenSlideIndex,
  onNavigateToTab,
  openPowerPointShow,
  onUpdateSlide,
  onResetSlide,
  isSlideEdited,
  activeSubject,
  activeChapter,
  openStudentNotes,
  openBoardCQ,
  openFlashcards,
  openTimedExam,
  chapterProgress
}) => {
  const currentSlide = ensureSlideVisuals(slides[currentSlideIndex], activeSubject, activeChapter);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlayInterval, setAutoPlayInterval] = useState(8); // seconds
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [activeImageTab, setActiveImageTab] = useState<'primary' | 'secondary'>('primary');
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0);
  const [galleryLayout, setGalleryLayout] = useState<'single' | 'grid'>('single');
  const [displayMode, setDisplayMode] = useState<'2d' | '3d'>('2d');
  const [twoDViewType, setTwoDViewType] = useState<'both' | 'photo' | 'diagram'>('both');
  const [zoomedImage, setZoomedImage] = useState<{ url: string; caption?: string } | null>(null);
  const [annotationLang, setAnnotationLang] = useState<'both' | 'bn' | 'en'>('both');
  const [activeAnnotationIdx, setActiveAnnotationIdx] = useState<number | null>(null);
  const [showPinsOnImage, setShowPinsOnImage] = useState<boolean>(false);
  const [pinStyleMode, setPinStyleMode] = useState<'dot' | 'label'>('dot');
  const [customPptxViewMode, setCustomPptxViewMode] = useState<'direct' | 'card'>('direct');

  // 2D Diagram Model Selection State (Synchronized with 3D models)
  const initial2DId = Math.max(1, Math.min(20, ((slides[currentSlideIndex]?.id || 1) - 1) % 20 + 1));
  const [selected2DDiagramId, setSelected2DDiagramId] = useState<number>(initial2DId);

  useEffect(() => {
    const slideCustomType = currentSlide?.customDiagramType;
    if (slideCustomType && BIOLOGY_TYPE_MAP[slideCustomType]) {
      setSelected2DDiagramId(BIOLOGY_TYPE_MAP[slideCustomType].modelId);
    } else {
      setSelected2DDiagramId(Math.max(1, Math.min(20, ((currentSlide?.id || 1) - 1) % 20 + 1)));
    }
  }, [currentSlideIndex, currentSlide?.id, currentSlide?.customDiagramType]);

  const bioChapterNum = currentSlide?.chapter || activeChapter || 1;
  const bioCatalogModels: Biology3DModelMeta[] = BIOLOGY_3D_CATALOG[bioChapterNum] || BIOLOGY_3D_CATALOG[1] || [];
  const active2DDiagramMeta: Biology3DModelMeta = bioCatalogModels.find((m: Biology3DModelMeta) => m.id === selected2DDiagramId) || bioCatalogModels[0];

  // Reset active image tab on slide change
  useEffect(() => {
    setActiveImageTab('primary');
    setActiveGalleryIdx(0);
    setActiveAnnotationIdx(null);
  }, [currentSlideIndex]);

  // Auto-advance slideshow
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
      }, autoPlayInterval * 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, autoPlayInterval, slides.length, setCurrentSlideIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(slides.length - 1);
      }
    },
    [slides.length, setCurrentSlideIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Audio Speech synthesis for lecture
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      setSpeechSupported(false);
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = `${currentSlide.title}। ${currentSlide.subtitle}। ${currentSlide.keyPoints.map(p => `${p.heading}। ${p.description}`).join('। ')}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Attempt Bengali voice or fallback
    const voices = window.speechSynthesis.getVoices();
    const bnVoice = voices.find(v => v.lang.startsWith('bn'));
    if (bnVoice) {
      utterance.voice = bnVoice;
    }
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  // Stop speech when slide changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentSlideIndex]);

  // Bengali numerals helper
  const toBengaliNumber = (num: number) => {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
  };

  return (
    <div className="relative flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] p-4 md:p-6 lg:p-8">
      {/* Slide Canvas Container (16:9 Aspect Ratio on large screens) */}
      <div className="w-full max-w-6xl rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col transition-all duration-300">
        
        {/* Top Progress Bar on Slide Canvas Container */}
        {chapterProgress && (
          <div 
            className="w-full h-1.5 bg-slate-950/90 overflow-hidden cursor-help relative group"
            title={`অধ্যায় সমাপ্তি অগ্রগতি: ${toBengaliNumber(chapterProgress.viewedCount)}/${toBengaliNumber(chapterProgress.totalSlides)}টি স্লাইড পঠিত (${toBengaliNumber(chapterProgress.percentage)}%)`}
          >
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(34,211,238,0.6)]"
              style={{ width: `${Math.min(100, Math.max(0, chapterProgress.percentage))}%` }}
            />
          </div>
        )}

        {/* Slide Top Metadata Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-950/60 gap-2 sm:gap-3">
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400 min-w-0">
            <span className="font-semibold text-cyan-400">{currentSlide.category}</span>
            <span aria-hidden="true">·</span>
            <span>
              {currentSlide.subject === 'biology' ? 'জীববিজ্ঞান' : currentSlide.subject === 'physics' ? 'পদার্থবিজ্ঞান' : 'রসায়ন'}{' '}
              {currentSlide.chapter ? `অধ্যায় ${toBengaliNumber(currentSlide.chapter)}` : ''}
            </span>
            <span aria-hidden="true" className="hidden xs:inline">·</span>
            <span className="hidden xs:inline">এসএসসি ও ৯ম-১০ম শ্রেণি</span>
          </div>

          <div className="flex items-center flex-wrap gap-1.5 sm:gap-3 shrink-0">
            {/* Quick 2D vs 3D View Switcher in Top Bar */}
            <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setDisplayMode('2d')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-bold transition ${
                  displayMode === '2d'
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="২ডি চিত্র ও ডায়াগ্রাম ভিউ"
              >
                <Square className="h-3.5 w-3.5" />
                <span>২ডি চিত্র</span>
              </button>

              <button
                onClick={() => setDisplayMode('3d')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-bold transition ${
                  displayMode === '3d'
                    ? 'bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 shadow-md font-black ring-1 ring-cyan-400/50'
                    : 'text-cyan-400 hover:text-white hover:bg-slate-800/60'
                }`}
                title="ইন্টারেক্টিভ ৩ডি ভিউ ও সিমুলেশন"
              >
                <Box className="h-3.5 w-3.5 animate-pulse" />
                <span>৩ডি ভিউ</span>
                <span className="px-1 text-[8px] bg-red-600 text-white rounded font-black uppercase">
                  3D
                </span>
              </button>
            </div>

            {/* Direct Simulator/Lab Launch Button (Top Right Header) */}
            {currentSlide.recommendedInteractiveTab && (
              <button
                onClick={() => onNavigateToTab(currentSlide.recommendedInteractiveTab!)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs shadow-md hover:brightness-110 transition shrink-0 animate-pulse border border-cyan-400"
                title="এই বিষয়ের সরাসরি ৩ডি সিমুলেটর ও ভার্চুয়াল ল্যাব খুলুন"
              >
                <Sparkles className="h-3.5 w-3.5 fill-slate-950" />
                <span>সিমুলেটরে যান</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            )}

            <button
              onClick={toggleSpeech}
              title={isSpeaking ? 'অডিও লেকচার থামান' : 'স্লাইডের অডিও লেকচার শুনুন'}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${
                isSpeaking 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse' 
                  : 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {isSpeaking ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-cyan-400" />}
              <span>{isSpeaking ? 'অডিও বাজছে...' : 'অডিও লেকচার'}</span>
            </button>

            <div className="flex items-center gap-1.5">
              <span className="font-mono text-xs text-slate-300 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                {toBengaliNumber(currentSlideIndex + 1)} / {toBengaliNumber(slides.length)}
              </span>
              {chapterProgress && (
                <span 
                  className={`hidden sm:inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded font-medium border ${
                    chapterProgress.percentage >= 100
                      ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
                      : 'bg-slate-900/80 border-slate-800 text-cyan-300'
                  }`}
                  title={`এই অধ্যায়ে মোট ${toBengaliNumber(chapterProgress.totalSlides)}টির মধ্যে ${toBengaliNumber(chapterProgress.viewedCount)}টি স্লাইড দেখা হয়েছে`}
                >
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span>{toBengaliNumber(chapterProgress.viewedCount)}/{toBengaliNumber(chapterProgress.totalSlides)}</span>
                  <span className="font-mono text-[10px]">({toBengaliNumber(chapterProgress.percentage)}%)</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Slide Main Body */}
        <div className="p-6 md:p-8 lg:p-10 flex-1 overflow-y-auto space-y-6">
          {/* Top Quick-Access Interactive Simulator Banner */}
          {currentSlide.recommendedInteractiveTab && (
            <div className="flex flex-wrap items-center justify-between p-3.5 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/50 via-slate-900/70 to-blue-950/40 backdrop-blur-md shadow-lg gap-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-cyan-200">
                <span className="p-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>
                  <strong className="text-white font-bold">ইন্টারঅ্যাক্টিভ ল্যাব:</strong> এই পাঠের সাথে সম্পর্কিত সরাসরি ৩ডি সিমুলেশন ও এক্সপেরিমেন্ট
                </span>
              </div>
              <button
                onClick={() => onNavigateToTab(currentSlide.recommendedInteractiveTab!)}
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-lg transition shadow-md shrink-0"
              >
                <span>সিমুলেটর খুলুন</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
          {/* Custom Uploaded PPTX Top Banner & Mode Toggle */}
          {currentSlide.rawPptx && (
            <div className="flex flex-wrap items-center justify-between p-3 rounded-xl border border-indigo-500/30 bg-indigo-950/20 gap-2 mb-2">
              <div className="flex items-center gap-2 text-xs text-indigo-300 font-semibold">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span>পাওয়ারপয়েন্ট (.pptx) থেকে আপলোডকৃত হুবহু স্লাইড ডিজাইন</span>
              </div>
              <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setCustomPptxViewMode('direct')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold transition ${
                    customPptxViewMode === 'direct'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🖥️ পাওয়ারপয়েন্ট হুবহু ডিজাইন</span>
                </button>
                <button
                  onClick={() => setCustomPptxViewMode('card')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold transition ${
                    customPptxViewMode === 'card'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>📋 কার্ড ফরম্যাট</span>
                </button>
              </div>
            </div>
          )}

          {currentSlide.rawPptx && customPptxViewMode === 'direct' ? (
            <div className="space-y-4">
              <PptxDirectSlideRenderer slide={currentSlide} />

              {/* Speaker Notes if present */}
              {currentSlide.speakerNotes && (
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-cyan-400">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>স্পিকার নোটস:</span>
                  </div>
                  <p className="leading-relaxed whitespace-pre-line">{currentSlide.speakerNotes}</p>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Slide Header */}
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {currentSlide.title}
                </h1>
                <p className="text-sm md:text-base text-cyan-400/90 font-medium">
                  {currentSlide.subtitle}
                </p>
              </div>

          {/* Embedded Multi-Image Gallery & Interactive 3D Viewer */}
          {((currentSlide.gallery && currentSlide.gallery.length > 0) || currentSlide.image) && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40">
              {/* Unified Media Navigation & System Control Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 py-2.5 gap-2.5">
                {/* Left: View Mode Segmented Switcher (2D Diagram vs 3D Interactive) */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs shrink-0">
                  <button
                    onClick={() => setDisplayMode('2d')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-bold transition ${
                      displayMode === '2d'
                        ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Square className="h-3.5 w-3.5" />
                    <span>২ডি চিত্র ও ডায়াগ্রাম</span>
                  </button>

                  <button
                    onClick={() => setDisplayMode('3d')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-bold transition ${
                      displayMode === '3d'
                        ? 'bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 shadow-md font-black ring-1 ring-cyan-400/50'
                        : 'text-cyan-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <Box className="h-3.5 w-3.5 animate-pulse" />
                    <span>৩ডি সিমুলেশন</span>
                    <span className="px-1 text-[8px] bg-red-600 text-white rounded font-black uppercase">
                      3D
                    </span>
                  </button>
                </div>

                {/* Right: Biology Systematic Topic / Diagram Dropdown Selector */}
                {currentSlide.subject === 'biology' && bioCatalogModels.length > 0 && (
                  <div className="flex items-center gap-1.5 text-xs bg-slate-900/80 px-2 py-1 rounded-xl border border-emerald-500/30">
                    <span className="hidden sm:inline-flex text-[11px] font-bold text-emerald-300">
                      টপিক:
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        setSelected2DDiagramId(prev => prev > 1 ? prev - 1 : 20);
                        setTwoDViewType('diagram');
                      }}
                      className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition border border-slate-700 shadow-sm"
                      title="পূর্ববর্তী ডায়াগ্রাম/টপিক"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </button>

                    <select
                      value={selected2DDiagramId}
                      onChange={(e) => {
                        setSelected2DDiagramId(Number(e.target.value));
                        setTwoDViewType('diagram');
                      }}
                      className="bg-slate-950 text-emerald-300 border border-emerald-500/40 rounded-lg px-2.5 py-1 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-400 cursor-pointer shadow-inner max-w-[190px] sm:max-w-[260px] truncate"
                      title="অধ্যায়ের বৈজ্ঞানিক বিষয়ের ডায়াগ্রাম সরাসরি বাছুন"
                    >
                      {bioCatalogModels.map((m: Biology3DModelMeta) => (
                        <option key={m.id} value={m.id} className="bg-slate-900 text-slate-200">
                          {toBengaliNumber(m.id)}. {m.topicRef ? `[${m.topicRef}] ` : ''}{m.titleBn.split('—')[0]}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => {
                        setSelected2DDiagramId(prev => prev < 20 ? prev + 1 : 1);
                        setTwoDViewType('diagram');
                      }}
                      className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition border border-slate-700 shadow-sm"
                      title="পরবর্তী ডায়াগ্রাম/টপিক"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>

                    <span className="font-mono text-emerald-400 font-bold px-1 text-xs">
                      {toBengaliNumber(selected2DDiagramId)}/২০
                    </span>
                  </div>
                )}

                {/* If 2D mode and multiple images: show neat gallery select dropdown / tabs */}
                {displayMode === '2d' && currentSlide.gallery && currentSlide.gallery.length > 1 && (
                  <div className="flex items-center gap-1.5 text-xs">
                    <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800">
                      {currentSlide.gallery.map((imgItem, gIdx) => {
                        const isActive = activeGalleryIdx === gIdx && galleryLayout === 'single';
                        return (
                          <button
                            key={imgItem.id || gIdx}
                            onClick={() => {
                              setActiveGalleryIdx(gIdx);
                              setGalleryLayout('single');
                              if (imgItem.type === 'photo') {
                                setTwoDViewType('photo');
                              } else if (imgItem.customDiagramType) {
                                setTwoDViewType('diagram');
                              }
                            }}
                            className={`px-2 py-1 text-xs font-semibold rounded transition ${
                              isActive
                                ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            <span>{imgItem.type === 'photo' ? '📸' : '📐'} {gIdx + 1}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                      <button
                        onClick={() => setGalleryLayout('single')}
                        className={`p-1 rounded transition ${galleryLayout === 'single' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                        title="একটি চিত্র বড় করে দেখুন"
                      >
                        <Square className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setGalleryLayout('grid')}
                        className={`p-1 rounded transition ${galleryLayout === 'grid' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                        title="সকল চিত্র একসাথে"
                      >
                        <LayoutGrid className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* Gallery Content Area: 3D View vs 2D Gallery */}
              {displayMode === '3d' ? (
                <div className="p-2 sm:p-3 bg-slate-950">
                  <ThreeDViewer
                    slideId={currentSlide.id}
                    slideTitle={currentSlide.title}
                    category={currentSlide.category}
                    chapter={currentSlide.chapter || activeChapter || 3}
                    subject={currentSlide.subject || activeSubject || 'chemistry'}
                    slideImage={currentSlide.image}
                    slideImageCaption={currentSlide.imageCaption}
                    activeModelId={selected2DDiagramId}
                    onModelSelect={(id) => setSelected2DDiagramId(id)}
                    onSwitchTo2D={(id) => {
                      setSelected2DDiagramId(id);
                      setDisplayMode('2d');
                    }}
                  />
                </div>
              ) : (() => {
                const galleryItems = currentSlide.gallery || [
                  {
                    id: 'fallback_1',
                    url: currentSlide.image,
                    titleBn: currentSlide.title,
                    titleEn: currentSlide.subtitle,
                    captionBn: currentSlide.imageCaption || '',
                    captionEn: ''
                  }
                ];

                // 1. Grid View: Show all 2-3 images side by side
                if (galleryLayout === 'grid' && galleryItems.length > 1) {
                  return (
                    <div className="p-4 bg-slate-950/60">
                      <div className={`grid grid-cols-1 ${galleryItems.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-4`}>
                        {galleryItems.map((item, idx) => (
                          <div 
                            key={item.id || idx}
                            className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden flex flex-col justify-between"
                          >
                            <div className="px-3 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs">
                              <span className="font-bold text-white">চিত্র {idx + 1}: {item.titleBn}</span>
                              <button
                                onClick={() => setDisplayMode('3d')}
                                className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-[10px] font-bold border border-cyan-500/30 transition"
                                title="এই বিষয়ের ৩ডি মডেল ইন্টারেক্টিভভাবে দেখুন"
                              >
                                <Box className="h-2.5 w-2.5" />
                                <span>৩ডি ভিউ</span>
                              </button>
                            </div>

                            <div 
                              onClick={() => {
                                const targetUrl = item.url || currentSlide.image;
                                if (targetUrl) setZoomedImage({ url: targetUrl, caption: item.captionBn });
                              }}
                              className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden cursor-zoom-in group"
                            >
                              {item.customDiagramType ? (
                                <CustomDiagramViewer type={item.customDiagramType} subject={currentSlide.subject} chapter={currentSlide.chapter} onSwitchTo3D={() => setDisplayMode('3d')} />
                              ) : (
                                <>
                                  <img
                                    src={item.url || currentSlide.image}
                                    alt={item.titleBn}
                                    referrerPolicy="no-referrer"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Maximize2 className="h-5 w-5 text-white drop-shadow" />
                                  </div>
                                </>
                              )}
                            </div>

                            <div className="p-2.5 text-[11px] text-slate-300 bg-slate-950/90 border-t border-slate-800/80">
                              <p className="line-clamp-2">{item.captionBn}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                // 2. Single View: Focused view of selected image in gallery
                const activeItem = galleryItems[activeGalleryIdx] || galleryItems[0];

                return (
                  <div>
                    {((currentSlide.subject === 'biology' && twoDViewType !== 'photo') || (activeItem.customDiagramType && twoDViewType !== 'photo') || twoDViewType === 'diagram') ? (
                      <div className="bg-slate-950 flex flex-col">
                        {currentSlide.subject !== 'biology' && (
                          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950 border-b border-slate-800 text-xs">
                            <span className="font-bold text-cyan-400 flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                              <span>{activeItem.titleBn} (ভেক্টর রেখাচিত্র)</span>
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => setTwoDViewType('photo')}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] font-semibold border border-slate-700 transition shadow-sm"
                                title="বাস্তব বৈজ্ঞানিক আলোকচিত্র ও প্রাকৃতিক রূপায়ন দেখুন"
                              >
                                <Square className="h-3 w-3 text-emerald-400" />
                                <span>📸 বাস্তব চিত্র দেখুন</span>
                              </button>
                              <button
                                onClick={() => setDisplayMode('3d')}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 text-[11px] font-bold border border-cyan-500/30 transition shadow-sm"
                                title="ইন্টারেক্টিভ ৩ডি ভিউ খুলুন"
                              >
                                <Box className="h-3 w-3" />
                                <span>৩ডি ভিউ</span>
                              </button>
                            </div>
                          </div>
                        )}
                        <div className="p-4">
                          <CustomDiagramViewer
                            type={currentSlide.subject === 'biology' ? ('bioCh' + bioChapterNum + '_m' + selected2DDiagramId) : (activeItem.customDiagramType || '')}
                            modelId={selected2DDiagramId}
                            chapter={bioChapterNum}
                            subject={currentSlide.subject}
                            onSwitchTo3D={() => setDisplayMode('3d')}
                          />
                        </div>
                      </div>
                    ) : (
                      <div 
                        onClick={() => {
                          const targetUrl = activeItem.url || currentSlide.image;
                          if (targetUrl) setZoomedImage({ url: targetUrl, caption: activeItem.captionBn });
                        }}
                        className="group relative aspect-video max-h-80 w-full overflow-hidden bg-slate-950 flex items-center justify-center select-none cursor-zoom-in"
                        title="ক্লিক করে বড় স্বচ্ছ আকারে দেখুন"
                      >
                        <img
                          src={activeItem.url || currentSlide.image}
                          alt={activeItem.titleBn}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                          onError={(e) => {
                            const fallback = currentSlide.subject === 'physics'
                              ? (currentSlide.chapter === 4 ? '/src/assets/images/work_energy_physics_1791027317460.jpg' : currentSlide.chapter === 6 ? '/src/assets/images/heat_thermal_physics_1791101382695.jpg' : currentSlide.chapter === 7 ? '/src/assets/images/wave_sound_physics_1791102920685.jpg' : '/src/assets/images/fluid_pressure_physics_1791027332942.jpg')
                              : currentSlide.subject === 'biology'
                              ? (currentSlide.chapter === 2 ? '/src/assets/images/cell_tissue_biology_1791027347161.jpg' : currentSlide.chapter === 4 ? '/src/assets/images/bioenergetics_biology_1791102937315.jpg' : '/src/assets/images/mitosis_cell_division_1791027361813.jpg')
                              : currentSlide.subject === 'chemistry'
                              ? (currentSlide.chapter === 10
                                  ? '/src/assets/images/metallurgy_blast_furnace_1791619758396.jpg'
                                  : currentSlide.chapter === 11
                                  ? '/src/assets/images/petroleum_fractional_distill_1791619784228.jpg'
                                  : currentSlide.chapter === 12
                                  ? '/src/assets/images/household_chemistry_soap_1791619813402.jpg'
                                  : currentSlide.chapter === 4
                                  ? '/src/assets/images/periodic_table_trends_1791100765641.jpg'
                                  : currentSlide.chapter === 5
                                  ? '/src/assets/images/chemical_bonds_lattice_1791100780997.jpg'
                                  : '/src/assets/images/hero_chemistry_atom_1790749681138.jpg')
                              : '/src/assets/images/hero_chemistry_atom_1790749681138.jpg';
                            e.currentTarget.src = currentSlide.image || fallback;
                          }}
                        />

                        {/* Top-Left: Prominent Diagram Clarity & Label Control Switch */}
                        {currentSlide.diagramAnnotations && currentSlide.diagramAnnotations.length > 0 && (
                          <div 
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-2 left-2 z-30 flex items-center shadow-2xl"
                          >
                            <div className="flex items-center p-0.5 rounded-lg bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-[11px] gap-0.5">
                              {/* 1. Clean Unobstructed Diagram (Default: No labels blocking) */}
                              <button
                                onClick={() => {
                                  setShowPinsOnImage(false);
                                  setActiveAnnotationIdx(null);
                                }}
                                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition font-semibold ${
                                  !showPinsOnImage
                                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                                }`}
                                title="লেবেল ছাড়া সম্পূর্ণ স্পষ্ট ও পরিষ্কার চিত্র দেখুন"
                              >
                                <Eye className="h-3 w-3" />
                                <span>স্বচ্ছ চিত্র</span>
                              </button>

                              {/* 2. Compact Dots (Points only - diagram stays clear, hover shows tooltip) */}
                              <button
                                onClick={() => {
                                  setShowPinsOnImage(true);
                                  setPinStyleMode('dot');
                                }}
                                className={`flex items-center gap-1 px-2 py-1 rounded-md transition font-semibold ${
                                  showPinsOnImage && pinStyleMode === 'dot'
                                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                                }`}
                                title="বিন্দু মোড: চিত্র পরিষ্কার থাকবে, বিন্দুতে হোভার করলে নাম দেখা যাবে"
                              >
                                <span className="font-mono text-xs">⭕</span>
                                <span>বিন্দু (ডট)</span>
                              </button>

                              {/* 3. Full Labels */}
                              <button
                                onClick={() => {
                                  setShowPinsOnImage(true);
                                  setPinStyleMode('label');
                                }}
                                className={`flex items-center gap-1 px-2 py-1 rounded-md transition font-semibold ${
                                  showPinsOnImage && pinStyleMode === 'label'
                                    ? 'bg-indigo-600 text-white shadow-sm'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                                }`}
                                title="নাম সহ সম্পূর্ণ লেবেল পিন দেখুন"
                              >
                                <Tag className="h-3 w-3" />
                                <span className="hidden sm:inline">নাম সহ</span>
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {/* Floating Interactive Bilingual Pins on Image (Only if user enables them) */}
                        {showPinsOnImage && currentSlide.diagramAnnotations && (
                          <div className="absolute inset-0 pointer-events-none">
                            {currentSlide.diagramAnnotations.map((anno, aIdx) => {
                              if (!anno.position) return null;
                              const isSelected = activeAnnotationIdx === aIdx;

                              let badgeBg = 'bg-cyan-500/90 border-cyan-300 text-slate-950';
                              if (anno.badgeType === 'proton') badgeBg = 'bg-rose-500/90 border-rose-300 text-white';
                              if (anno.badgeType === 'neutron') badgeBg = 'bg-slate-500/90 border-slate-200 text-white';
                              if (anno.badgeType === 'nucleus') badgeBg = 'bg-amber-500/90 border-amber-200 text-slate-950';
                              if (anno.badgeType === 'radiation') badgeBg = 'bg-purple-500/90 border-purple-300 text-white';
                              if (anno.badgeType === 'gold') badgeBg = 'bg-yellow-400/90 border-yellow-200 text-slate-950';

                              return (
                                <div
                                  key={aIdx}
                                  style={{ left: `${anno.position.x}%`, top: `${anno.position.y}%` }}
                                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300 z-20"
                                >
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveAnnotationIdx(isSelected ? null : aIdx);
                                    }}
                                    className={`group relative flex items-center justify-center border shadow-xl backdrop-blur-md transition-all hover:scale-110 ${badgeBg} ${
                                      pinStyleMode === 'dot'
                                        ? 'h-5 w-5 sm:h-6 sm:w-6 rounded-full text-[10px] sm:text-[11px]'
                                        : 'gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold'
                                    } ${isSelected ? 'scale-125 ring-4 ring-white/80 animate-pulse' : ''}`}
                                    title={`${anno.labelBn} / ${anno.labelEn}`}
                                  >
                                    <span className="font-mono font-black">{anno.symbol ? (anno.symbol.length <= 4 ? anno.symbol : (aIdx + 1)) : (aIdx + 1)}</span>
                                    
                                    {pinStyleMode === 'label' && (
                                      <span className="text-[9.5px] md:text-[10.5px] whitespace-nowrap max-w-[120px] truncate">
                                        {annotationLang === 'bn' 
                                          ? anno.labelBn 
                                          : annotationLang === 'en' 
                                          ? anno.labelEn 
                                          : anno.labelBn}
                                      </span>
                                    )}

                                    {/* Sleek Tooltip on hover in compact dot mode so labels do not obscure diagram */}
                                    {pinStyleMode === 'dot' && (
                                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-40 transition-all">
                                        <div className="px-2.5 py-1.5 rounded-lg bg-slate-950/95 border border-cyan-400 text-white text-[11px] font-bold shadow-2xl whitespace-nowrap backdrop-blur-md text-left">
                                          <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                            <span>{anno.labelBn}</span>
                                          </div>
                                          <span className="text-cyan-300 block text-[9.5px] font-normal pl-3">{anno.labelEn}</span>
                                        </div>
                                        <div className="w-1.5 h-1.5 bg-slate-950 border-r border-b border-cyan-400 rotate-45 -mt-1"></div>
                                      </div>
                                    )}
                                  </button>

                                  {isSelected && (
                                    <div 
                                      onClick={(e) => e.stopPropagation()}
                                      className="absolute top-7 left-1/2 -translate-x-1/2 w-60 sm:w-72 p-3 rounded-xl bg-slate-900/98 border border-cyan-400 shadow-2xl text-left z-40 text-xs backdrop-blur-md animate-fadeIn"
                                    >
                                      <div className="font-bold text-white flex items-center justify-between pb-1.5 border-b border-slate-800">
                                        <div className="pr-2">
                                          <span className="text-white block font-bold text-xs">{anno.labelBn}</span>
                                          <span className="text-cyan-400 font-normal text-[11px]">{anno.labelEn}</span>
                                        </div>
                                        <div className="flex items-center gap-1 shrink-0">
                                          <span className="font-mono text-cyan-300 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-[10.5px]">
                                            {anno.symbol}
                                          </span>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setActiveAnnotationIdx(null);
                                            }}
                                            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition"
                                            title="বন্ধ করুন"
                                          >
                                            <X className="h-3.5 w-3.5" />
                                          </button>
                                        </div>
                                      </div>
                                      <p className="text-[11px] text-slate-200 pt-1.5 leading-snug">
                                        {anno.detailBn}
                                      </p>
                                      <p className="text-[10px] text-slate-400 italic pt-1 leading-snug">
                                        {anno.detailEn}
                                      </p>
                                      <div className="pt-2 mt-1 border-t border-slate-800 flex items-center justify-between">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setDisplayMode('3d');
                                          }}
                                          className="flex items-center gap-1 px-2.5 py-1 rounded bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-[10.5px] hover:brightness-110 shadow"
                                        >
                                          <Box className="h-3 w-3" />
                                          <span>এই অংশের ৩ডি দেখুন</span>
                                        </button>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveAnnotationIdx(null);
                                          }}
                                          className="text-[10px] text-slate-400 hover:text-white underline"
                                        >
                                          চিত্র স্পষ্ট দেখতে বন্ধ করুন
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Top Right Controls: Diagram, 3D View & Zoom */}
                        <div 
                          onClick={(e) => e.stopPropagation()}
                          className="absolute top-2 right-2 flex items-center gap-1.5 z-20 flex-wrap justify-end"
                        >
                          {(activeItem.customDiagramType || currentSlide.subject === 'biology') && (
                            <button
                              onClick={() => setTwoDViewType('diagram')}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 text-cyan-300 text-xs font-bold backdrop-blur-md border border-cyan-500/40 hover:bg-slate-800 transition shadow-md"
                              title="ভেক্টর রেখাচিত্র ডায়াগ্রাম দেখুন"
                            >
                              <Square className="h-3.5 w-3.5 text-cyan-400" />
                              <span className="hidden sm:inline">ডায়াগ্রাম</span>
                            </button>
                          )}

                          <button
                            onClick={() => setDisplayMode('3d')}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold backdrop-blur-md shadow-lg hover:brightness-110 transition"
                            title="এই স্লাইডের সম্পূর্ণ ইন্টারেক্টিভ ৩ডি ভিউ দেখুন"
                          >
                            <Box className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">৩ডি ভিউ</span>
                          </button>

                          <button
                            onClick={() => {
                              const targetUrl = activeItem.url || currentSlide.image || '';
                              if (targetUrl) setZoomedImage({ url: targetUrl, caption: activeItem.captionBn || '' });
                            }}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-xs font-medium backdrop-blur-md border border-slate-700 hover:bg-slate-800 transition shadow-md"
                            title="পূর্ণরূপে বড় করে দেখুন (লেবেলমুক্ত স্বচ্ছ চিত্র)"
                          >
                            <Maximize2 className="h-3 w-3 text-cyan-400" />
                            <span className="hidden sm:inline">বড় করুন</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Image Caption & Quick Action Bar */}
                    <div className="px-4 py-2.5 text-xs text-slate-300 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">চিত্র {activeGalleryIdx + 1}:</span>
                        <span>{activeItem.captionBn}</span>
                        {activeItem.captionEn && (
                          <span className="text-slate-400 italic hidden md:inline">({activeItem.captionEn})</span>
                        )}
                      </div>

                      {/* Quick toggler in caption bar */}
                      {currentSlide.diagramAnnotations && currentSlide.diagramAnnotations.length > 0 && (
                        <div className="flex items-center gap-2 shrink-0">
                          {!showPinsOnImage ? (
                            <button
                              onClick={() => {
                                setShowPinsOnImage(true);
                                setPinStyleMode('dot');
                              }}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 text-[11px] font-semibold border border-cyan-500/30 transition shadow-sm"
                              title="চিত্রে চিহ্নিত অংশ ও লেবেল পিন দেখান"
                            >
                              <Tag className="h-3 w-3" />
                              <span>চিহ্নিত অংশ পিন চালু</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setShowPinsOnImage(false);
                                setActiveAnnotationIdx(null);
                              }}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-[11px] font-semibold border border-emerald-500/30 transition shadow-sm"
                              title="লেবেল বন্ধ করে চিত্র সম্পূর্ণ স্পষ্ট রাখুন"
                            >
                              <Eye className="h-3 w-3" />
                              <span>লেবেল লুকান (স্বচ্ছ চিত্র)</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Dedicated Bilingual Diagram Annotations Panel (বাংলা ও ইংরেজি উভয় ভাষায়) — ২ডি মোডে প্রদর্শিত */}
          {displayMode === '2d' && currentSlide.diagramAnnotations && (
            <div className="rounded-xl p-4 bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    চিত্রের চিহ্নিত অংশসমূহ (Diagram Parts & Labels):
                  </span>
                </div>

                {/* Language Selector */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setAnnotationLang('both')}
                    className={`px-2.5 py-1 rounded font-medium transition ${
                      annotationLang === 'both'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    বাংলা + English (উভয়)
                  </button>
                  <button
                    onClick={() => setAnnotationLang('bn')}
                    className={`px-2.5 py-1 rounded font-medium transition ${
                      annotationLang === 'bn'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    বাংলা
                  </button>
                  <button
                    onClick={() => setAnnotationLang('en')}
                    className={`px-2.5 py-1 rounded font-medium transition ${
                      annotationLang === 'en'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Annotation Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {currentSlide.diagramAnnotations.map((anno, idx) => {
                  const isSelected = activeAnnotationIdx === idx;
                  const dotColor = 
                    anno.badgeType === 'proton' ? 'bg-rose-400' :
                    anno.badgeType === 'neutron' ? 'bg-slate-300' :
                    anno.badgeType === 'nucleus' ? 'bg-amber-400' :
                    anno.badgeType === 'radiation' ? 'bg-purple-400' :
                    anno.badgeType === 'gold' ? 'bg-yellow-400' :
                    'bg-cyan-400';

                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveAnnotationIdx(isSelected ? null : idx)}
                      className={`text-left p-3 rounded-lg border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-950/50 ring-2 ring-cyan-400/80 shadow-lg'
                          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-1 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-white">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${dotColor}`} />
                            <span className="leading-snug">
                              {annotationLang === 'en' 
                                ? anno.labelEn 
                                : annotationLang === 'bn' 
                                ? anno.labelBn 
                                : `${anno.labelBn} / ${anno.labelEn}`}
                            </span>
                          </div>
                          {anno.symbol && (
                            <span className="font-mono text-cyan-400 text-[10.5px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 shrink-0">
                              {anno.symbol}
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-200 font-medium leading-snug">
                          {anno.detailBn}
                        </p>

                        {annotationLang === 'both' && (
                          <p className="text-[10px] text-slate-400 italic leading-snug">
                            {anno.detailEn}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Selected Annotation Instant 3D Viewport & Deep-Dive Panel */}
              {activeAnnotationIdx !== null && currentSlide.diagramAnnotations[activeAnnotationIdx] && (() => {
                const selAnno = currentSlide.diagramAnnotations[activeAnnotationIdx];
                let inferredTopic = 'monera';
                if (currentSlide.chapter === 1) {
                  if (currentSlide.id === 1) inferredTopic = 'scope';
                  else if (currentSlide.id === 2) inferredTopic = 'branches';
                  else if (currentSlide.id === 3) inferredTopic = 'fiveKingdoms';
                  else if (currentSlide.id === 4) inferredTopic = 'taxonomy';
                  else if (currentSlide.id === 5) inferredTopic = 'monera';
                  else if (currentSlide.id === 6) inferredTopic = 'protista';
                  else if (currentSlide.id === 7) inferredTopic = 'fungi';
                  else if (currentSlide.id === 8) inferredTopic = 'plantae';
                  else if (currentSlide.id === 9) inferredTopic = 'animalia';
                  else if (currentSlide.id === 10) inferredTopic = 'binomial';
                }

                return (
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch">
                      {/* Left: 3D interactive model */}
                      <div className="w-full md:w-5/12 min-h-[220px] flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-1.5 text-xs">
                          <span className="font-extrabold text-cyan-400 flex items-center gap-1.5">
                            <Box className="h-4 w-4 animate-spin text-cyan-400" />
                            <span>নির্বাচিত অংশের ৩ডি মডেল (৩৬০° ঘূর্ণন)</span>
                          </span>
                          <button
                            onClick={() => setDisplayMode('3d')}
                            className="px-2 py-0.5 rounded bg-cyan-500 text-slate-950 font-extrabold text-[10.5px] hover:brightness-110 shadow"
                          >
                            পূর্ণাঙ্গ ৩ডি ভিউ
                          </button>
                        </div>
                        <BiologyPart3DPreview
                          topicId={inferredTopic}
                          partId={selAnno.partId || 'flagellum'}
                          partNameBn={selAnno.labelBn}
                          partNameEn={selAnno.labelEn}
                          badgeColor={selAnno.badgeType === 'proton' ? '#f43f5e' : '#38bdf8'}
                          height={220}
                        />
                      </div>

                      {/* Right: Detailed scientific description & functions */}
                      <div className="w-full md:w-7/12 flex flex-col justify-between space-y-2 p-1">
                        <div>
                          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-cyan-400 animate-ping" />
                                <h4 className="text-base font-extrabold text-white">{selAnno.labelBn}</h4>
                              </div>
                              <span className="text-xs text-cyan-400 font-medium">{selAnno.labelEn}</span>
                            </div>
                            {selAnno.symbol && (
                              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-cyan-300 text-xs font-bold">
                                {selAnno.symbol}
                              </span>
                            )}
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                              <span className="text-emerald-400 font-bold block mb-0.5">শারীরবৃত্তীয় কাজ ও গুরুত্ব:</span>
                              <p className="text-slate-200 leading-relaxed">{selAnno.detailBn}</p>
                            </div>

                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                              <span className="text-slate-400 font-bold block mb-0.5">Scientific Terminology & Description:</span>
                              <p className="text-slate-300 italic leading-relaxed">{selAnno.detailEn}</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <span>💡 মাউস টেনে ৩ডি মডেলটি ঘুরিয়ে দেখুন</span>
                          <button
                            onClick={() => setActiveAnnotationIdx(null)}
                            className="text-slate-400 hover:text-white underline"
                          >
                            বন্ধ করুন
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentSlide.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4 transition hover:border-slate-700 hover:bg-slate-950/60"
              >
                <h3 className="text-sm md:text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono">
                    {idx + 1}
                  </span>
                  <span>{point.heading}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {point.description}
                </p>
                {(point.highlight || point.formula) && (
                  <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-slate-800/60">
                    {point.highlight && (
                      <span className="inline-block px-2.5 py-0.5 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-semibold border border-cyan-800/80">
                        {point.highlight}
                      </span>
                    )}
                    {point.formula && (
                      <FormulaBadge formula={point.formula} size="sm" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Table Data (if present) */}
          {currentSlide.tableData && (
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/40">
              {currentSlide.tableData.caption && (
                <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-medium text-slate-300">
                  {currentSlide.tableData.caption}
                </div>
              )}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-800/50 text-slate-300 border-b border-slate-800">
                    <tr>
                      {currentSlide.tableData.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 font-semibold text-cyan-300 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {currentSlide.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/30 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-2.5 text-slate-300 font-mono text-xs md:text-sm whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Callout Box */}
          {currentSlide.callout && (
            <div className={`rounded-xl p-4 border ${
              currentSlide.callout.type === 'warning'
                ? 'bg-amber-950/20 border-amber-800/50 text-amber-200'
                : currentSlide.callout.type === 'formula'
                ? 'bg-cyan-950/30 border-cyan-800/50 text-cyan-200'
                : currentSlide.callout.type === 'tip'
                ? 'bg-emerald-950/20 border-emerald-800/50 text-emerald-200'
                : 'bg-slate-800/40 border-slate-700/60 text-slate-200'
            }`}>
              <div className="flex items-center gap-2 font-semibold text-sm mb-1.5">
                {currentSlide.callout.type === 'warning' ? (
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                ) : (
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                )}
                <span>{currentSlide.callout.title}</span>
              </div>
              <p className="text-xs md:text-sm leading-relaxed whitespace-pre-line opacity-90">
                {currentSlide.callout.content}
              </p>
            </div>
          )}

          {/* Interactive Simulation Direct Bridge */}
          {currentSlide.recommendedInteractiveTab && (
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-cyan-500/30 bg-cyan-950/20">
              <div className="flex items-center gap-2 text-xs md:text-sm text-cyan-200">
                <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>এই ধারণার সরাসরি ইন্টারঅ্যাক্টিভ সিমুলেশন দেখতে চান?</span>
              </div>
              <button
                onClick={() => onNavigateToTab(currentSlide.recommendedInteractiveTab!)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition"
              >
                <span>সিমুলেটর খুলুন</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
            </>
          )}
        </div>

        {/* Slide Bottom Control Bar */}
        <div className="flex flex-wrap items-center justify-between border-t border-slate-800/80 px-4 md:px-6 py-3 bg-slate-950/80 gap-2">
          {/* Left: Slide Overview & Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSlideIndex}
              title="সবগুলো স্লাইডের তালিকা (Grid Overview)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-600 transition"
            >
              <Grid className="h-3.5 w-3.5 text-cyan-400" />
              <span>স্লাইড তালিকা</span>
            </button>

            <button
              onClick={() => setCurrentSlideIndex(0)}
              title="প্রথম স্লাইডে ফিরে যান"
              className="p-1.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-600 transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>

            {openPowerPointShow && (
              <button
                onClick={openPowerPointShow}
                title="পাওয়ারপয়েন্ট স্লাইডশো মোড (F5, লেজার, পেন)"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-xs font-bold text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/60 hover:text-white transition shadow-sm"
              >
                <Play className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                <span>পাওয়ারপয়েন্ট শো</span>
              </button>
            )}

            {onUpdateSlide && (
              <button
                onClick={() => setIsEditModalOpen(true)}
                title="এই স্লাইডটি সম্পাদনা / এডিট করুন"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition shadow-sm ${
                  isSlideEdited?.(currentSlideIndex)
                    ? 'border-amber-500/50 bg-amber-950/40 text-amber-300 hover:bg-amber-900/60'
                    : 'border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Edit3 className="h-3 w-3" />
                <span>এডিট</span>
                {isSlideEdited?.(currentSlideIndex) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                )}
              </button>
            )}

            {openStudentNotes && (
              <button
                onClick={openStudentNotes}
                title="এই স্লাইডে ব্যক্তিগত নোট লিখুন ও সংরক্ষণ করুন"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/40 bg-indigo-950/40 text-xs font-bold text-indigo-300 hover:border-indigo-400 hover:bg-indigo-900/60 hover:text-white transition shadow-sm"
              >
                <FileText className="h-3 w-3" />
                <span>আমার নোট</span>
              </button>
            )}

            {openBoardCQ && (
              <button
                onClick={openBoardCQ}
                title="বোর্ড সৃজনশীল প্রশ্ন (CQ) ব্যাংক ও মডেল উত্তর"
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-500/40 bg-amber-950/40 text-xs font-bold text-amber-300 hover:border-amber-400 hover:bg-amber-900/60 hover:text-white transition shadow-sm"
              >
                <BookOpen className="h-3 w-3" />
                <span>বোর্ড CQ</span>
              </button>
            )}
          </div>

          {/* Center: Slide Step Controller */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentSlideIndex === 0}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-200 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>পূর্ববর্তী</span>
            </button>

            <div className="hidden sm:flex items-center gap-1 px-2 text-xs font-mono text-slate-400">
              <span className="text-white font-bold">{toBengaliNumber(currentSlideIndex + 1)}</span>
              <span>/</span>
              <span>{toBengaliNumber(slides.length)}</span>
            </div>

            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlideIndex === slides.length - 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <span>পরবর্তী</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right: Auto Play Controller */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                isPlaying 
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300' 
                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:text-white'
              }`}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              <span>{isPlaying ? 'অটোপ্লে চালু' : 'অটোপ্লে'}</span>
            </button>

            {isPlaying && (
              <select
                value={autoPlayInterval}
                onChange={(e) => setAutoPlayInterval(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-300 px-2 py-1 outline-none focus:border-cyan-500"
              >
                <option value={5}>৫ সেকেন্ড</option>
                <option value={8}>৮ সেকেন্ড</option>
                <option value={12}>১২ সেকেন্ড</option>
                <option value={15}>১৫ সেকেন্ড</option>
              </select>
            )}
          </div>
        </div>
      </div>

      {/* Slide Navigation Progress Dots */}
      <div className="mt-4 flex items-center justify-center gap-1.5 flex-wrap max-w-xl">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            title={`স্লাইড ${index + 1}: ${slides[index].title}`}
            className={`h-2 transition-all rounded-full ${
              index === currentSlideIndex 
                ? 'w-6 bg-cyan-400' 
                : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Image Zoom Lightbox Modal */}
      {zoomedImage && (
        <div 
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl"
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition border border-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden bg-black">
              <img
                src={zoomedImage.url}
                alt="Enlarged visual"
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {zoomedImage.caption && (
              <div className="w-full p-4 bg-slate-900 text-xs md:text-sm text-slate-200 border-t border-slate-800 flex items-center gap-2">
                <span className="text-cyan-400 font-bold shrink-0">চিত্রানুচ্ছেদ:</span>
                <span>{zoomedImage.caption}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* In-Viewer Slide Edit Modal */}
      {onUpdateSlide && (
        <SlideEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          slide={currentSlide}
          slideIndex={currentSlideIndex}
          totalSlides={slides.length}
          onSave={(updated) => onUpdateSlide(updated, currentSlideIndex)}
          onResetOriginal={onResetSlide ? () => onResetSlide(currentSlideIndex) : undefined}
          isEdited={isSlideEdited ? isSlideEdited(currentSlideIndex) : false}
        />
      )}
    </div>
  );
};
