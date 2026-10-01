export interface ElementTrend {
  z: number;
  symbol: string;
  nameBn: string;
  nameEn: string;
  period: number;
  group: number;
  radius: number; // pm (atomic/empirical radius)
  ie: number; // kJ/mol (1st ionization energy)
  en: number; // Pauling scale (0.0 if not applicable)
  metallic: number; // 0 (non-metal) to 10 (most metallic)
  category: string;
  configuration: string;
  anomaly?: string;
}

export const all118Trends: ElementTrend[] = [
  // Period 1
  { z: 1, symbol: 'H', nameBn: 'হাইড্রোজেন', nameEn: 'Hydrogen', period: 1, group: 1, radius: 53, ie: 1312, en: 2.20, metallic: 1.0, category: 'অধাতু', configuration: '1s¹' },
  { z: 2, symbol: 'He', nameBn: 'হিলিয়াম', nameEn: 'Helium', period: 1, group: 18, radius: 31, ie: 2372, en: 0.0, metallic: 0.0, category: 'নিষ্ক্রিয় গ্যাস', configuration: '1s²', anomaly: 'সর্বোচ্চ আয়নীকরণ শক্তি ও ডুয়েট পূর্ণ' },

  // Period 2
  { z: 3, symbol: 'Li', nameBn: 'লিথিয়াম', nameEn: 'Lithium', period: 2, group: 1, radius: 152, ie: 520, en: 0.98, metallic: 8.5, category: 'ক্ষার ধাতু', configuration: '1s² 2s¹' },
  { z: 4, symbol: 'Be', nameBn: 'বেরিলিয়াম', nameEn: 'Beryllium', period: 2, group: 2, radius: 112, ie: 899, en: 1.57, metallic: 6.5, category: 'মৃৎক্ষার ধাতু', configuration: '1s² 2s²', anomaly: '2s² পূর্ণ উপস্তর হওয়ায় B এর চেয়ে IE বেশি' },
  { z: 5, symbol: 'B', nameBn: 'বোরন', nameEn: 'Boron', period: 2, group: 13, radius: 85, ie: 801, en: 2.04, metallic: 4.0, category: 'উপধাতু', configuration: '1s² 2s² 2p¹' },
  { z: 6, symbol: 'C', nameBn: 'কার্বন', nameEn: 'Carbon', period: 2, group: 14, radius: 77, ie: 1086, en: 2.55, metallic: 2.5, category: 'অধাতু', configuration: '1s² 2s² 2p²' },
  { z: 7, symbol: 'N', nameBn: 'নাইট্রোজেন', nameEn: 'Nitrogen', period: 2, group: 15, radius: 75, ie: 1402, en: 3.04, metallic: 1.5, category: 'অধাতু', configuration: '1s² 2s² 2p³', anomaly: '2p³ অর্ধপূর্ণ উপস্তর হওয়ায় O এর চেয়ে IE বেশি' },
  { z: 8, symbol: 'O', nameBn: 'অক্সিজেন', nameEn: 'Oxygen', period: 2, group: 16, radius: 73, ie: 1314, en: 3.44, metallic: 1.0, category: 'অধাতু', configuration: '1s² 2s² 2p⁴' },
  { z: 9, symbol: 'F', nameBn: 'ফ্লোরিন', nameEn: 'Fluorine', period: 2, group: 17, radius: 72, ie: 1681, en: 4.00, metallic: 0.5, category: 'হ্যালোজেন', configuration: '1s² 2s² 2p⁵', anomaly: 'সর্বাধিক তড়িৎ ঋণাত্মক মৌল (৪.০)' },
  { z: 10, symbol: 'Ne', nameBn: 'নিয়ন', nameEn: 'Neon', period: 2, group: 18, radius: 71, ie: 2081, en: 0.0, metallic: 0.0, category: 'নিষ্ক্রিয় গ্যাস', configuration: '1s² 2s² 2p⁶' },

  // Period 3
  { z: 11, symbol: 'Na', nameBn: 'সোডিয়াম', nameEn: 'Sodium', period: 3, group: 1, radius: 186, ie: 496, en: 0.93, metallic: 9.0, category: 'ক্ষার ধাতু', configuration: '[Ne] 3s¹' },
  { z: 12, symbol: 'Mg', nameBn: 'ম্যাগনেসিয়াম', nameEn: 'Magnesium', period: 3, group: 2, radius: 160, ie: 738, en: 1.31, metallic: 7.5, category: 'মৃৎক্ষার ধাতু', configuration: '[Ne] 3s²', anomaly: '3s² পূর্ণ হওয়ায় Al এর চেয়ে IE বেশি' },
  { z: 13, symbol: 'Al', nameBn: 'অ্যালুমিনিয়াম', nameEn: 'Aluminium', period: 3, group: 13, radius: 143, ie: 578, en: 1.61, metallic: 6.8, category: 'উত্তীর্ণ ধাতু', configuration: '[Ne] 3s² 3p¹' },
  { z: 14, symbol: 'Si', nameBn: 'সিলিকন', nameEn: 'Silicon', period: 3, group: 14, radius: 118, ie: 786, en: 1.90, metallic: 4.2, category: 'উপধাতু', configuration: '[Ne] 3s² 3p²' },
  { z: 15, symbol: 'P', nameBn: 'ফসফরাস', nameEn: 'Phosphorus', period: 3, group: 15, radius: 110, ie: 1012, en: 2.19, metallic: 2.0, category: 'অধাতু', configuration: '[Ne] 3s² 3p³', anomaly: '3p³ অর্ধপূর্ণ হওয়ায় S এর চেয়ে IE বেশি' },
  { z: 16, symbol: 'S', nameBn: 'সালফার', nameEn: 'Sulfur', period: 3, group: 16, radius: 102, ie: 1000, en: 2.58, metallic: 1.5, category: 'অধাতু', configuration: '[Ne] 3s² 3p⁴' },
  { z: 17, symbol: 'Cl', nameBn: 'ক্লোরিন', nameEn: 'Chlorine', period: 3, group: 17, radius: 99, ie: 1251, en: 3.16, metallic: 0.8, category: 'হ্যালোজেন', configuration: '[Ne] 3s² 3p⁵', anomaly: 'ফ্লোরিনের চেয়ে ইলেকট্রন আসক্তি বেশি (Cl > F)' },
  { z: 18, symbol: 'Ar', nameBn: 'আর্গন', nameEn: 'Argon', period: 3, group: 18, radius: 98, ie: 1521, en: 0.0, metallic: 0.0, category: 'নিষ্ক্রিয় গ্যাস', configuration: '[Ne] 3s² 3p⁶' },

  // Period 4
  { z: 19, symbol: 'K', nameBn: 'পটাশিয়াম', nameEn: 'Potassium', period: 4, group: 1, radius: 227, ie: 419, en: 0.82, metallic: 9.5, category: 'ক্ষার ধাতু', configuration: '[Ar] 4s¹' },
  { z: 20, symbol: 'Ca', nameBn: 'ক্যালসিয়াম', nameEn: 'Calcium', period: 4, group: 2, radius: 197, ie: 590, en: 1.00, metallic: 8.0, category: 'মৃৎক্ষার ধাতু', configuration: '[Ar] 4s²' },
  { z: 21, symbol: 'Sc', nameBn: 'স্ক্যান্ডিয়াম', nameEn: 'Scandium', period: 4, group: 3, radius: 162, ie: 633, en: 1.36, metallic: 7.2, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d¹ 4s²' },
  { z: 22, symbol: 'Ti', nameBn: 'টাইটানিয়াম', nameEn: 'Titanium', period: 4, group: 4, radius: 147, ie: 659, en: 1.54, metallic: 7.0, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d² 4s²' },
  { z: 23, symbol: 'V', nameBn: 'ভ্যানাডিয়াম', nameEn: 'Vanadium', period: 4, group: 5, radius: 134, ie: 651, en: 1.63, metallic: 7.0, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d³ 4s²' },
  { z: 24, symbol: 'Cr', nameBn: 'ক্রোমিয়াম', nameEn: 'Chromium', period: 4, group: 6, radius: 128, ie: 653, en: 1.66, metallic: 7.2, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d⁵ 4s¹', anomaly: 'ব্যতিক্রম ইলেকট্রন বিন্যাস: 3d⁵ 4s¹' },
  { z: 25, symbol: 'Mn', nameBn: 'ম্যাঙ্গানিজ', nameEn: 'Manganese', period: 4, group: 7, radius: 127, ie: 717, en: 1.55, metallic: 6.8, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d⁵ 4s²' },
  { z: 26, symbol: 'Fe', nameBn: 'লোহা (আয়রন)', nameEn: 'Iron', period: 4, group: 8, radius: 126, ie: 762, en: 1.83, metallic: 7.5, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d⁶ 4s²' },
  { z: 27, symbol: 'Co', nameBn: 'কোবাল্ট', nameEn: 'Cobalt', period: 4, group: 9, radius: 125, ie: 760, en: 1.88, metallic: 7.3, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d⁷ 4s²' },
  { z: 28, symbol: 'Ni', nameBn: 'নিকেল', nameEn: 'Nickel', period: 4, group: 10, radius: 124, ie: 737, en: 1.91, metallic: 7.4, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d⁸ 4s²' },
  { z: 29, symbol: 'Cu', nameBn: 'কপার (তামা)', nameEn: 'Copper', period: 4, group: 11, radius: 128, ie: 745, en: 1.90, metallic: 7.8, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d¹⁰ 4s¹', anomaly: 'ব্যতিক্রম ইলেকট্রন বিন্যাস: 3d¹⁰ 4s¹' },
  { z: 30, symbol: 'Zn', nameBn: 'জিংক (দস্তা)', nameEn: 'Zinc', period: 4, group: 12, radius: 134, ie: 906, en: 1.65, metallic: 7.0, category: 'অবস্থান্তর ধাতু', configuration: '[Ar] 3d¹⁰ 4s²' },
  { z: 31, symbol: 'Ga', nameBn: 'গ্যালিয়াম', nameEn: 'Gallium', period: 4, group: 13, radius: 135, ie: 579, en: 1.81, metallic: 6.0, category: 'উত্তীর্ণ ধাতু', configuration: '[Ar] 3d¹⁰ 4s² 4p¹' },
  { z: 32, symbol: 'Ge', nameBn: 'জার্মেনিয়াম', nameEn: 'Germanium', period: 4, group: 14, radius: 122, ie: 762, en: 2.01, metallic: 4.5, category: 'উপধাতু', configuration: '[Ar] 3d¹⁰ 4s² 4p²' },
  { z: 33, symbol: 'As', nameBn: 'আর্সেনিক', nameEn: 'Arsenic', period: 4, group: 15, radius: 119, ie: 947, en: 2.18, metallic: 3.5, category: 'উপধাতু', configuration: '[Ar] 3d¹⁰ 4s² 4p³' },
  { z: 34, symbol: 'Se', nameBn: 'সেলেনিয়াম', nameEn: 'Selenium', period: 4, group: 16, radius: 116, ie: 941, en: 2.55, metallic: 2.0, category: 'অধাতু', configuration: '[Ar] 3d¹⁰ 4s² 4p⁴' },
  { z: 35, symbol: 'Br', nameBn: 'ব্রোমিন', nameEn: 'Bromine', period: 4, group: 17, radius: 114, ie: 1140, en: 2.96, metallic: 1.0, category: 'হ্যালোজেন', configuration: '[Ar] 3d¹⁰ 4s² 4p⁵', anomaly: 'একমাত্র তরল অধাতু' },
  { z: 36, symbol: 'Kr', nameBn: 'ক্রিপ্টন', nameEn: 'Krypton', period: 4, group: 18, radius: 110, ie: 1351, en: 3.00, metallic: 0.0, category: 'নিষ্ক্রিয় গ্যাস', configuration: '[Ar] 3d¹⁰ 4s² 4p⁶' },

  // Period 5
  { z: 37, symbol: 'Rb', nameBn: 'রুবিডিয়াম', nameEn: 'Rubidium', period: 5, group: 1, radius: 248, ie: 403, en: 0.82, metallic: 9.8, category: 'ক্ষার ধাতু', configuration: '[Kr] 5s¹' },
  { z: 38, symbol: 'Sr', nameBn: 'স্ট্রনশিয়াম', nameEn: 'Strontium', period: 5, group: 2, radius: 215, ie: 549, en: 0.95, metallic: 8.2, category: 'মৃৎক্ষার ধাতু', configuration: '[Kr] 5s²' },
  { z: 39, symbol: 'Y', nameBn: 'ইট্রিয়াম', nameEn: 'Yttrium', period: 5, group: 3, radius: 180, ie: 600, en: 1.22, metallic: 7.5, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d¹ 5s²' },
  { z: 40, symbol: 'Zr', nameBn: 'জিরকোনিয়াম', nameEn: 'Zirconium', period: 5, group: 4, radius: 160, ie: 640, en: 1.33, metallic: 7.4, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d² 5s²' },
  { z: 41, symbol: 'Nb', nameBn: 'নায়োবিয়াম', nameEn: 'Niobium', period: 5, group: 5, radius: 146, ie: 652, en: 1.60, metallic: 7.2, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d⁴ 5s¹' },
  { z: 42, symbol: 'Mo', nameBn: 'মলিবডেনাম', nameEn: 'Molybdenum', period: 5, group: 6, radius: 139, ie: 684, en: 2.16, metallic: 7.3, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d⁵ 5s¹' },
  { z: 43, symbol: 'Tc', nameBn: 'টেকনেশিয়াম', nameEn: 'Technetium', period: 5, group: 7, radius: 136, ie: 702, en: 1.90, metallic: 7.0, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d⁵ 5s²', anomaly: 'সর্বপ্রথম কৃত্রিমভাবে প্রস্তুত তেজস্ক্রিয় মৌল' },
  { z: 44, symbol: 'Ru', nameBn: 'রুথেনিয়াম', nameEn: 'Ruthenium', period: 5, group: 8, radius: 134, ie: 710, en: 2.20, metallic: 7.3, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d⁷ 5s¹' },
  { z: 45, symbol: 'Rh', nameBn: 'রোডিয়াম', nameEn: 'Rhodium', period: 5, group: 9, radius: 134, ie: 720, en: 2.28, metallic: 7.4, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d⁸ 5s¹' },
  { z: 46, symbol: 'Pd', nameBn: 'প্যালাডিয়াম', nameEn: 'Palladium', period: 5, group: 10, radius: 137, ie: 804, en: 2.20, metallic: 7.5, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d¹⁰', anomaly: '5s অরবিটালে কোনো ইলেকট্রন নেই (4d¹⁰)' },
  { z: 47, symbol: 'Ag', nameBn: 'রুপা (সিলভার)', nameEn: 'Silver', period: 5, group: 11, radius: 144, ie: 731, en: 1.93, metallic: 8.2, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d¹⁰ 5s¹', anomaly: 'সর্বোচ্চ বিদ্যুৎ ও তাপ পরিবাহী ধাতু' },
  { z: 48, symbol: 'Cd', nameBn: 'ক্যাডমিয়াম', nameEn: 'Cadmium', period: 5, group: 12, radius: 151, ie: 868, en: 1.69, metallic: 7.2, category: 'অবস্থান্তর ধাতু', configuration: '[Kr] 4d¹⁰ 5s²' },
  { z: 49, symbol: 'In', nameBn: 'ইন্ডিয়াম', nameEn: 'Indium', period: 5, group: 13, radius: 167, ie: 558, en: 1.78, metallic: 6.2, category: 'উত্তীর্ণ ধাতু', configuration: '[Kr] 4d¹⁰ 5s² 5p¹' },
  { z: 50, symbol: 'Sn', nameBn: 'টিন', nameEn: 'Tin', period: 5, group: 14, radius: 140, ie: 709, en: 1.96, metallic: 5.8, category: 'উত্তীর্ণ ধাতু', configuration: '[Kr] 4d¹⁰ 5s² 5p²' },
  { z: 51, symbol: 'Sb', nameBn: 'অ্যান্টিমণি', nameEn: 'Antimony', period: 5, group: 15, radius: 140, ie: 834, en: 2.05, metallic: 4.6, category: 'উপধাতু', configuration: '[Kr] 4d¹⁰ 5s² 5p³' },
  { z: 52, symbol: 'Te', nameBn: 'টেলুরিয়াম', nameEn: 'Tellurium', period: 5, group: 16, radius: 142, ie: 869, en: 2.10, metallic: 3.8, category: 'উপধাতু', configuration: '[Kr] 4d¹⁰ 5s² 5p⁴' },
  { z: 53, symbol: 'I', nameBn: 'আয়োডিন', nameEn: 'Iodine', period: 5, group: 17, radius: 133, ie: 1008, en: 2.66, metallic: 1.8, category: 'হ্যালোজেন', configuration: '[Kr] 4d¹⁰ 5s² 5p⁵' },
  { z: 54, symbol: 'Xe', nameBn: 'জেনন', nameEn: 'Xenon', period: 5, group: 18, radius: 130, ie: 1170, en: 2.60, metallic: 0.0, category: 'নিষ্ক্রিয় গ্যাস', configuration: '[Kr] 4d¹⁰ 5s² 5p⁶' },

  // Period 6
  { z: 55, symbol: 'Cs', nameBn: 'সিজিয়াম', nameEn: 'Caesium', period: 6, group: 1, radius: 265, ie: 376, en: 0.79, metallic: 10.0, category: 'ক্ষার ধাতু', configuration: '[Xe] 6s¹', anomaly: 'সর্বাধিক ধাতব ও সর্বনিম্ন আয়নীকরণ শক্তি সম্পন্ন মৌল' },
  { z: 56, symbol: 'Ba', nameBn: 'বেরিয়াম', nameEn: 'Barium', period: 6, group: 2, radius: 222, ie: 503, en: 0.89, metallic: 8.5, category: 'মৃৎক্ষার ধাতু', configuration: '[Xe] 6s²' },
  
  // Lanthanides (57-71)
  { z: 57, symbol: 'La', nameBn: 'ল্যান্থানাম', nameEn: 'Lanthanum', period: 6, group: 3, radius: 187, ie: 538, en: 1.10, metallic: 8.0, category: 'ল্যান্থানাইড', configuration: '[Xe] 5d¹ 6s²' },
  { z: 58, symbol: 'Ce', nameBn: 'সিরিয়াম', nameEn: 'Cerium', period: 6, group: 3, radius: 181, ie: 534, en: 1.12, metallic: 7.9, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f¹ 5d¹ 6s²' },
  { z: 59, symbol: 'Pr', nameBn: 'প্র্যাসিওডিমিয়াম', nameEn: 'Praseodymium', period: 6, group: 3, radius: 182, ie: 527, en: 1.13, metallic: 7.8, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f³ 6s²' },
  { z: 60, symbol: 'Nd', nameBn: 'নিওডিমিয়াম', nameEn: 'Neodymium', period: 6, group: 3, radius: 182, ie: 533, en: 1.14, metallic: 7.8, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f⁴ 6s²', anomaly: 'শক্তিশালী স্থায়ী চুম্বক তৈরিতে অপরিহার্য' },
  { z: 61, symbol: 'Pm', nameBn: 'প্রমিথিয়াম', nameEn: 'Promethium', period: 6, group: 3, radius: 181, ie: 540, en: 1.13, metallic: 7.7, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f⁵ 6s²' },
  { z: 62, symbol: 'Sm', nameBn: 'সামারিয়াম', nameEn: 'Samarium', period: 6, group: 3, radius: 180, ie: 545, en: 1.17, metallic: 7.7, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f⁶ 6s²' },
  { z: 63, symbol: 'Eu', nameBn: 'ইউরোপিয়াম', nameEn: 'Europium', period: 6, group: 3, radius: 199, ie: 547, en: 1.20, metallic: 7.6, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f⁷ 6s²' },
  { z: 64, symbol: 'Gd', nameBn: 'গ্যাডোলিনিয়াম', nameEn: 'Gadolinium', period: 6, group: 3, radius: 179, ie: 593, en: 1.20, metallic: 7.6, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f⁷ 5d¹ 6s²' },
  { z: 65, symbol: 'Tb', nameBn: 'টার্বিয়াম', nameEn: 'Terbium', period: 6, group: 3, radius: 176, ie: 566, en: 1.20, metallic: 7.5, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f⁹ 6s²' },
  { z: 66, symbol: 'Dy', nameBn: 'ডিসপ্রোসিয়াম', nameEn: 'Dysprosium', period: 6, group: 3, radius: 175, ie: 573, en: 1.22, metallic: 7.5, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f¹⁰ 6s²' },
  { z: 67, symbol: 'Ho', nameBn: 'হলমিয়াম', nameEn: 'Holmium', period: 6, group: 3, radius: 174, ie: 581, en: 1.23, metallic: 7.4, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f¹¹ 6s²' },
  { z: 68, symbol: 'Er', nameBn: 'আরবিয়াম', nameEn: 'Erbium', period: 6, group: 3, radius: 173, ie: 589, en: 1.24, metallic: 7.4, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f¹² 6s²' },
  { z: 69, symbol: 'Tm', nameBn: 'থুলিয়াম', nameEn: 'Thulium', period: 6, group: 3, radius: 172, ie: 597, en: 1.25, metallic: 7.3, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f¹³ 6s²' },
  { z: 70, symbol: 'Yb', nameBn: 'ইটারবিয়াম', nameEn: 'Ytterbium', period: 6, group: 3, radius: 194, ie: 603, en: 1.10, metallic: 7.3, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f¹⁴ 6s²' },
  { z: 71, symbol: 'Lu', nameBn: 'লুটিশিয়াম', nameEn: 'Lutetium', period: 6, group: 3, radius: 171, ie: 524, en: 1.27, metallic: 7.5, category: 'ল্যান্থানাইড', configuration: '[Xe] 4f¹⁴ 5d¹ 6s²' },

  // Rest of Period 6 Transition Metals
  { z: 72, symbol: 'Hf', nameBn: 'হ্যাফনিয়াম', nameEn: 'Hafnium', period: 6, group: 4, radius: 159, ie: 658, en: 1.30, metallic: 7.5, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d² 6s²' },
  { z: 73, symbol: 'Ta', nameBn: 'ট্যানটালাম', nameEn: 'Tantalum', period: 6, group: 5, radius: 146, ie: 761, en: 1.50, metallic: 7.4, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d³ 6s²' },
  { z: 74, symbol: 'W', nameBn: 'টাংস্টেন', nameEn: 'Tungsten', period: 6, group: 6, radius: 139, ie: 770, en: 2.36, metallic: 7.5, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d⁴ 6s²', anomaly: 'ধাতুগুলোর মধ্যে সর্বোচ্চ গলনাঙ্ক (৩৪২২°C)' },
  { z: 75, symbol: 'Re', nameBn: 'রেনিয়াম', nameEn: 'Rhenium', period: 6, group: 7, radius: 137, ie: 760, en: 1.90, metallic: 7.4, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d⁵ 6s²' },
  { z: 76, symbol: 'Os', nameBn: 'অসমিয়াম', nameEn: 'Osmium', period: 6, group: 8, radius: 135, ie: 840, en: 2.20, metallic: 7.4, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d⁶ 6s²', anomaly: 'সর্বোচ্চ ঘনত্ব বিশিষ্ট প্রাকৃতিক মৌল (২২.৫৯ g/cm³)' },
  { z: 77, symbol: 'Ir', nameBn: 'ইরিডিয়াম', nameEn: 'Iridium', period: 6, group: 9, radius: 136, ie: 880, en: 2.20, metallic: 7.5, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d⁷ 6s²' },
  { z: 78, symbol: 'Pt', nameBn: 'প্লাটিনাম', nameEn: 'Platinum', period: 6, group: 10, radius: 138, ie: 870, en: 2.28, metallic: 7.8, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d⁹ 6s¹' },
  { z: 79, symbol: 'Au', nameBn: 'সোনা (গোল্ড)', nameEn: 'Gold', period: 6, group: 11, radius: 144, ie: 890, en: 2.54, metallic: 8.0, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', anomaly: 'সর্বোচ্চ নমনীয় ও নিষ্ক্রিয় ধাতু' },
  { z: 80, symbol: 'Hg', nameBn: 'পারদ (মার্কারি)', nameEn: 'Mercury', period: 6, group: 12, radius: 151, ie: 1007, en: 2.00, metallic: 6.8, category: 'অবস্থান্তর ধাতু', configuration: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', anomaly: 'কক্ষ তাপমাত্রায় একমাত্র তরল ধাতু' },
  { z: 81, symbol: 'Tl', nameBn: 'থ্যালিয়াম', nameEn: 'Thallium', period: 6, group: 13, radius: 170, ie: 589, en: 1.62, metallic: 6.4, category: 'উত্তীর্ণ ধাতু', configuration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹' },
  { z: 82, symbol: 'Pb', nameBn: 'সীসা (লেড)', nameEn: 'Lead', period: 6, group: 14, radius: 146, ie: 716, en: 2.33, metallic: 5.8, category: 'উত্তীর্ণ ধাতু', configuration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²' },
  { z: 83, symbol: 'Bi', nameBn: 'বিসমাথ', nameEn: 'Bismuth', period: 6, group: 15, radius: 150, ie: 703, en: 2.02, metallic: 5.2, category: 'উত্তীর্ণ ধাতু', configuration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³' },
  { z: 84, symbol: 'Po', nameBn: 'পোলোনিয়াম', nameEn: 'Polonium', period: 6, group: 16, radius: 168, ie: 812, en: 2.00, metallic: 4.2, category: 'উপধাতু', configuration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴' },
  { z: 85, symbol: 'At', nameBn: 'অ্যাস্টাটিন', nameEn: 'Astatine', period: 6, group: 17, radius: 140, ie: 890, en: 2.20, metallic: 2.5, category: 'হ্যালোজেন', configuration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵' },
  { z: 86, symbol: 'Rn', nameBn: 'রেডন', nameEn: 'Radon', period: 6, group: 18, radius: 140, ie: 1037, en: 2.20, metallic: 0.0, category: 'নিষ্ক্রিয় গ্যাস', configuration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', anomaly: 'তেজস্ক্রিয় ভারী নিষ্ক্রিয় গ্যাস' },

  // Period 7
  { z: 87, symbol: 'Fr', nameBn: 'ফ্রান্সিয়াম', nameEn: 'Francium', period: 7, group: 1, radius: 270, ie: 380, en: 0.70, metallic: 10.0, category: 'ক্ষার ধাতু', configuration: '[Rn] 7s¹', anomaly: 'তীব্র তেজস্ক্রিয় ও সর্বাধিক তড়িৎ ধনাত্মক' },
  { z: 88, symbol: 'Ra', nameBn: 'রেডিয়াম', nameEn: 'Radium', period: 7, group: 2, radius: 223, ie: 509, en: 0.90, metallic: 8.6, category: 'মৃৎক্ষার ধাতু', configuration: '[Rn] 7s²' },

  // Actinides (89-103)
  { z: 89, symbol: 'Ac', nameBn: 'অ্যাক্টিনিয়াম', nameEn: 'Actinium', period: 7, group: 3, radius: 188, ie: 499, en: 1.10, metallic: 8.2, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 6d¹ 7s²' },
  { z: 90, symbol: 'Th', nameBn: 'থোরিয়াম', nameEn: 'Thorium', period: 7, group: 3, radius: 180, ie: 587, en: 1.30, metallic: 8.0, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 6d² 7s²' },
  { z: 91, symbol: 'Pa', nameBn: 'প্রোট্যাক্টিনিয়াম', nameEn: 'Protactinium', period: 7, group: 3, radius: 161, ie: 568, en: 1.50, metallic: 7.9, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f² 6d¹ 7s²' },
  { z: 92, symbol: 'U', nameBn: 'ইউরেনিয়াম', nameEn: 'Uranium', period: 7, group: 3, radius: 156, ie: 598, en: 1.38, metallic: 7.8, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f³ 6d¹ 7s²', anomaly: 'পারমাণবিক শক্তির মূল জ্বালানি' },
  { z: 93, symbol: 'Np', nameBn: 'নেপচুনিয়াম', nameEn: 'Neptunium', period: 7, group: 3, radius: 155, ie: 605, en: 1.36, metallic: 7.7, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f⁴ 6d¹ 7s²' },
  { z: 94, symbol: 'Pu', nameBn: 'প্লুটোনিয়াম', nameEn: 'Plutonium', period: 7, group: 3, radius: 159, ie: 585, en: 1.28, metallic: 7.7, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f⁶ 7s²' },
  { z: 95, symbol: 'Am', nameBn: 'আমেরিসিয়াম', nameEn: 'Americium', period: 7, group: 3, radius: 173, ie: 578, en: 1.30, metallic: 7.6, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f⁷ 7s²' },
  { z: 96, symbol: 'Cm', nameBn: 'কুরিয়াম', nameEn: 'Curium', period: 7, group: 3, radius: 174, ie: 581, en: 1.30, metallic: 7.6, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f⁷ 6d¹ 7s²' },
  { z: 97, symbol: 'Bk', nameBn: 'বার্কেলিয়াম', nameEn: 'Berkelium', period: 7, group: 3, radius: 170, ie: 601, en: 1.30, metallic: 7.5, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f⁹ 7s²' },
  { z: 98, symbol: 'Cf', nameBn: 'ক্যালিফোর্নিয়াম', nameEn: 'Californium', period: 7, group: 3, radius: 186, ie: 608, en: 1.30, metallic: 7.5, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f¹⁰ 7s²' },
  { z: 99, symbol: 'Es', nameBn: 'আইনস্টাইনিয়াম', nameEn: 'Einsteinium', period: 7, group: 3, radius: 186, ie: 619, en: 1.30, metallic: 7.4, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f¹¹ 7s²' },
  { z: 100, symbol: 'Fm', nameBn: 'ফার্মিয়াম', nameEn: 'Fermium', period: 7, group: 3, radius: 180, ie: 627, en: 1.30, metallic: 7.4, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f¹² 7s²' },
  { z: 101, symbol: 'Md', nameBn: 'মেন্ডেলিভিয়াম', nameEn: 'Mendelevium', period: 7, group: 3, radius: 180, ie: 635, en: 1.30, metallic: 7.3, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f¹³ 7s²' },
  { z: 102, symbol: 'No', nameBn: 'নোবেলিয়াম', nameEn: 'Nobelium', period: 7, group: 3, radius: 180, ie: 642, en: 1.30, metallic: 7.3, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f¹⁴ 7s²' },
  { z: 103, symbol: 'Lr', nameBn: 'লরেনসিয়াম', nameEn: 'Lawrencium', period: 7, group: 3, radius: 180, ie: 470, en: 1.30, metallic: 7.5, category: 'অ্যাক্টিনাইড', configuration: '[Rn] 5f¹⁴ 7s² 7p¹' },

  // Period 7 Superheavy Elements (104-118)
  { z: 104, symbol: 'Rf', nameBn: 'রাদারফোর্ডিয়াম', nameEn: 'Rutherfordium', period: 7, group: 4, radius: 160, ie: 580, en: 1.30, metallic: 7.4, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d² 7s²' },
  { z: 105, symbol: 'Db', nameBn: 'ডুবনিয়াম', nameEn: 'Dubnium', period: 7, group: 5, radius: 149, ie: 665, en: 1.40, metallic: 7.3, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d³ 7s²' },
  { z: 106, symbol: 'Sg', nameBn: 'সিবোরগিয়াম', nameEn: 'Seaborgium', period: 7, group: 6, radius: 143, ie: 757, en: 1.50, metallic: 7.3, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d⁴ 7s²' },
  { z: 107, symbol: 'Bh', nameBn: 'বোহরিয়াম', nameEn: 'Bohrium', period: 7, group: 7, radius: 141, ie: 742, en: 1.60, metallic: 7.2, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d⁵ 7s²' },
  { z: 108, symbol: 'Hs', nameBn: 'হ্যাসিয়াম', nameEn: 'Hassium', period: 7, group: 8, radius: 134, ie: 733, en: 1.70, metallic: 7.2, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d⁶ 7s²' },
  { z: 109, symbol: 'Mt', nameBn: 'মিটনারিয়াম', nameEn: 'Meitnerium', period: 7, group: 9, radius: 129, ie: 800, en: 1.80, metallic: 7.2, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d⁷ 7s²' },
  { z: 110, symbol: 'Ds', nameBn: 'ডার্মস্টাটিয়াম', nameEn: 'Darmstadtium', period: 7, group: 10, radius: 128, ie: 955, en: 1.90, metallic: 7.3, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d⁸ 7s²' },
  { z: 111, symbol: 'Rg', nameBn: 'রন্টজেনিয়াম', nameEn: 'Roentgenium', period: 7, group: 11, radius: 121, ie: 950, en: 2.00, metallic: 7.5, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d⁹ 7s²' },
  { z: 112, symbol: 'Cn', nameBn: 'কোপার্নিসিয়াম', nameEn: 'Copernicium', period: 7, group: 12, radius: 122, ie: 1155, en: 1.90, metallic: 7.0, category: 'অবস্থান্তর ধাতু', configuration: '[Rn] 5f¹⁴ 6d¹⁰ 7s²' },
  { z: 113, symbol: 'Nh', nameBn: 'নিহোনিয়াম', nameEn: 'Nihonium', period: 7, group: 13, radius: 136, ie: 705, en: 1.70, metallic: 6.0, category: 'উত্তীর্ণ ধাতু', configuration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹' },
  { z: 114, symbol: 'Fl', nameBn: 'ফ্লেরোভিয়াম', nameEn: 'Flerovium', period: 7, group: 14, radius: 143, ie: 824, en: 1.80, metallic: 5.5, category: 'উত্তীর্ণ ধাতু', configuration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²' },
  { z: 115, symbol: 'Mc', nameBn: 'মস্কোভিয়াম', nameEn: 'Moscovium', period: 7, group: 15, radius: 156, ie: 538, en: 1.90, metallic: 5.0, category: 'উত্তীর্ণ ধাতু', configuration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³' },
  { z: 116, symbol: 'Lv', nameBn: 'লিভারমোরিয়াম', nameEn: 'Livermorium', period: 7, group: 16, radius: 160, ie: 724, en: 2.00, metallic: 4.5, category: 'উত্তীর্ণ ধাতু', configuration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴' },
  { z: 117, symbol: 'Ts', nameBn: 'টেনেসিন', nameEn: 'Tennessine', period: 7, group: 17, radius: 150, ie: 743, en: 2.10, metallic: 3.0, category: 'হ্যালোজেন', configuration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵' },
  { z: 118, symbol: 'Og', nameBn: 'ওগানেসন', nameEn: 'Oganesson', period: 7, group: 18, radius: 152, ie: 860, en: 2.20, metallic: 0.0, category: 'নিষ্ক্রিয় গ্যাস', configuration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', anomaly: 'পর্যায় সারণির ১১৮তম সর্বশেষ অতিভারী মৌল' }
];
