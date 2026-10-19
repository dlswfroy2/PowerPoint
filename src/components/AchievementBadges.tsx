/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Award,
  Trophy,
  Zap,
  Clock,
  Flame,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Target,
  Compass,
  Atom,
  Dna,
  BatteryCharging,
  Star,
  Crown,
  Lock,
  Timer,
  Filter,
  Search,
  ChevronRight,
  TrendingUp,
  X,
  Share2
} from 'lucide-react';
import { LeaderboardEntry, loadLeaderboardRecords, toBengaliNumber, formatTimeDisplay, formatDurationBn, getChapterName, getSubjectLabel } from './QuizLeaderboard';

export interface BadgeDefinition {
  id: string;
  title: string;
  titleEn: string;
  category: 'chemistry' | 'physics' | 'biology' | 'speed' | 'special';
  categoryLabel: string;
  description: string;
  requirementBn: string;
  iconName: string;
  accentColor: string; // Tailwind color theme, e.g., 'cyan', 'amber', 'emerald', 'purple', 'rose'
  targetSubject?: 'chemistry' | 'physics' | 'biology';
  targetChapter?: number;
  timeThreshold?: number; // in seconds
  scoreThreshold?: number; // in percentage
}

export interface UnlockedBadgeRecord {
  badgeId: string;
  unlockedAt: number;
  unlockedDate: string;
  studentName?: string;
  subject?: 'chemistry' | 'physics' | 'biology';
  chapter?: number;
  score?: number;
  totalQuestions?: number;
  percentage?: number;
  timeSpentSeconds?: number;
}

const ACHIEVEMENTS_STORAGE_KEY = 'ssc_quiz_achievements_records_v1';

export const ALL_BADGE_DEFINITIONS: BadgeDefinition[] = [
  // Chemistry Badges
  {
    id: 'chem_ch1_perfect',
    title: 'রসায়ন দিশারী',
    titleEn: 'Chemistry Pioneer',
    category: 'chemistry',
    categoryLabel: 'রসায়ন অধ্যায় ১',
    description: 'রসায়ন ১ম অধ্যায় (রসায়নের ধারণা)-এ ১০০% পারফেক্ট স্কোর অর্জন।',
    requirementBn: 'রসায়ন ১ম অধ্যায়ে সব প্রশ্নের সঠিক উত্তর প্রদান (১০০%)',
    iconName: 'Award',
    accentColor: 'cyan',
    targetSubject: 'chemistry',
    targetChapter: 1,
    scoreThreshold: 100
  },
  {
    id: 'chem_ch4_perfect',
    title: 'পর্যায় সারণি অধিপতি',
    titleEn: 'Periodic Table Master',
    category: 'chemistry',
    categoryLabel: 'রসায়ন অধ্যায় ৪',
    description: 'পর্যায় সারণি (অধ্যায় ৪)-এর কুইজে ১০০% নির্ভুল স্কোর অর্জন।',
    requirementBn: 'রসায়ন ৪র্থ অধ্যায়ে ১০০% নির্ভুল স্কোর',
    iconName: 'Atom',
    accentColor: 'cyan',
    targetSubject: 'chemistry',
    targetChapter: 4,
    scoreThreshold: 100
  },
  {
    id: 'chem_ch5_bonding',
    title: 'বন্ধন কারিগর',
    titleEn: 'Bonding Expert',
    category: 'chemistry',
    categoryLabel: 'রসায়ন অধ্যায় ৫',
    description: 'রাসায়নিক বন্ধন (অধ্যায় ৫)-এ ১০০% পারফেক্ট স্কোর অর্জন।',
    requirementBn: 'রসায়ন ৫ম অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'ShieldCheck',
    accentColor: 'blue',
    targetSubject: 'chemistry',
    targetChapter: 5,
    scoreThreshold: 100
  },
  {
    id: 'chem_ch6_mole',
    title: 'মোল গণনাবিদ',
    titleEn: 'Mole Calculation Prodigy',
    category: 'chemistry',
    categoryLabel: 'রসায়ন অধ্যায় ৬',
    description: 'মোলের ধারণা ও রাসায়নিক গণনা (অধ্যায় ৬)-এ ১০০% পারফেক্ট স্কোর।',
    requirementBn: 'রসায়ন ৬ষ্ঠ অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'TrendingUp',
    accentColor: 'sky',
    targetSubject: 'chemistry',
    targetChapter: 6,
    scoreThreshold: 100
  },
  {
    id: 'chem_ch11_fossil',
    title: 'জীবাশ্ম ও হাইড্রোকার্বন বিশেষজ্ঞ',
    titleEn: 'Hydrocarbon Pioneer',
    category: 'chemistry',
    categoryLabel: 'রসায়ন অধ্যায় ১১',
    description: 'খনিজ সম্পদ: জীবাশ্ম ও জৈব রসায়ন (অধ্যায় ১১)-এ ১০০% স্কোর।',
    requirementBn: 'রসায়ন ১১শ অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Flame',
    accentColor: 'amber',
    targetSubject: 'chemistry',
    targetChapter: 11,
    scoreThreshold: 100
  },

  // Physics Badges
  {
    id: 'physics_ch4_perfect',
    title: 'শক্তি ও ক্ষমতার সাধক',
    titleEn: 'Power & Work Master',
    category: 'physics',
    categoryLabel: 'পদার্থবিজ্ঞান অধ্যায় ৪',
    description: 'পদার্থবিজ্ঞান অধ্যায় ৪ (কাজ, ক্ষমতা ও শক্তি)-এ ১০০% পারফেক্ট স্কোর।',
    requirementBn: 'পদার্থবিজ্ঞান ৪র্থ অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Zap',
    accentColor: 'yellow',
    targetSubject: 'physics',
    targetChapter: 4,
    scoreThreshold: 100
  },
  {
    id: 'physics_ch6_heat',
    title: 'তাপগতিবিদ',
    titleEn: 'Thermodynamics Scholar',
    category: 'physics',
    categoryLabel: 'পদার্থবিজ্ঞান অধ্যায় ৬',
    description: 'পদার্থবিজ্ঞান অধ্যায় ৬ (বস্তুর উপর তাপের প্রভাব)-এ ১০০% স্কোর।',
    requirementBn: 'পদার্থবিজ্ঞান ৬ষ্ঠ অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Flame',
    accentColor: 'orange',
    targetSubject: 'physics',
    targetChapter: 6,
    scoreThreshold: 100
  },
  {
    id: 'physics_ch7_wave',
    title: 'শব্দ ও তরঙ্গ বিশেষজ্ঞ',
    titleEn: 'Acoustics & Waves Master',
    category: 'physics',
    categoryLabel: 'পদার্থবিজ্ঞান অধ্যায় ৭',
    description: 'পদার্থবিজ্ঞান অধ্যায় ৭ (তরঙ্গ ও শব্দ)-এ ১০০% পারফেক্ট স্কোর।',
    requirementBn: 'পদার্থবিজ্ঞান ৭ম অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Target',
    accentColor: 'teal',
    targetSubject: 'physics',
    targetChapter: 7,
    scoreThreshold: 100
  },

  // Biology Badges
  {
    id: 'bio_ch1_life',
    title: 'জীবন পাঠ অন্বেষক',
    titleEn: 'Life Sciences Explorer',
    category: 'biology',
    categoryLabel: 'জীববিজ্ঞান অধ্যায় ১',
    description: 'জীববিজ্ঞান অধ্যায় ১ (জীবন পাঠ)-এ ১০০% নির্ভুল স্কোর অর্জন।',
    requirementBn: 'জীববিজ্ঞান ১ম অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Compass',
    accentColor: 'emerald',
    targetSubject: 'biology',
    targetChapter: 1,
    scoreThreshold: 100
  },
  {
    id: 'bio_ch2_cell',
    title: 'জীবকোষ ও টিস্যু পণ্ডিত',
    titleEn: 'Cytology Scholar',
    category: 'biology',
    categoryLabel: 'জীববিজ্ঞান অধ্যায় ২',
    description: 'জীববিজ্ঞান অধ্যায় ২ (জীবকোষ ও টিস্যু)-এ ১০০% পারফেক্ট স্কোর অর্জন।',
    requirementBn: 'জীববিজ্ঞান ২য় অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Dna',
    accentColor: 'emerald',
    targetSubject: 'biology',
    targetChapter: 2,
    scoreThreshold: 100
  },
  {
    id: 'bio_ch4_energy',
    title: 'জীবনীশক্তি প্রণেতা',
    titleEn: 'Bioenergetics Prodigy',
    category: 'biology',
    categoryLabel: 'জীববিজ্ঞান অধ্যায় ৪',
    description: 'জীববিজ্ঞান অধ্যায় ৪ (জীবনীশক্তি)-এ ১০০% নির্ভুল স্কোর অর্জন।',
    requirementBn: 'জীববিজ্ঞান ৪র্থ অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'BatteryCharging',
    accentColor: 'green',
    targetSubject: 'biology',
    targetChapter: 4,
    scoreThreshold: 100
  },
  {
    id: 'bio_ch6_transport',
    title: 'রক্তসংবহন ও পরিবহন বিশেষজ্ঞ',
    titleEn: 'Circulatory & Transport Master',
    category: 'biology',
    categoryLabel: 'জীববিজ্ঞান অধ্যায় ৬',
    description: 'জীববিজ্ঞান অধ্যায় ৬ (জীবে পরিবহন)-এ ১০০% পারফেক্ট স্কোর অর্জন।',
    requirementBn: 'জীববিজ্ঞান ৬ষ্ঠ অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Heart',
    accentColor: 'emerald',
    targetSubject: 'biology',
    targetChapter: 6,
    scoreThreshold: 100
  },
  {
    id: 'bio_ch8_renal',
    title: 'রেচনতন্ত্র ও বৃক্কবিদ',
    titleEn: 'Renal Physiology Ace',
    category: 'biology',
    categoryLabel: 'জীববিজ্ঞান অধ্যায় ৮',
    description: 'জীববিজ্ঞান অধ্যায় ৮ (রেচন প্রক্রিয়া)-এ ১০০% পারফেক্ট স্কোর অর্জন।',
    requirementBn: 'জীববিজ্ঞান ৮ম অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Activity',
    accentColor: 'emerald',
    targetSubject: 'biology',
    targetChapter: 8,
    scoreThreshold: 100
  },
  {
    id: 'bio_ch12_genetics',
    title: 'বংশগতি ও ডিএনএ জিনিয়াস',
    titleEn: 'Genetics & Evolution Genius',
    category: 'biology',
    categoryLabel: 'জীববিজ্ঞান অধ্যায় ১২',
    description: 'জীববিজ্ঞান অধ্যায় ১২ (জীবের বংশগতি ও বিবর্তন)-এ ১০০% পারফেক্ট স্কোর অর্জন।',
    requirementBn: 'জীববিজ্ঞান ১২শ অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Dna',
    accentColor: 'emerald',
    targetSubject: 'biology',
    targetChapter: 12,
    scoreThreshold: 100
  },
  {
    id: 'bio_ch14_biotech',
    title: 'বায়োটেকনোলজি পায়োনিয়ার',
    titleEn: 'Biotechnology Pioneer',
    category: 'biology',
    categoryLabel: 'জীববিজ্ঞান অধ্যায় ১৪',
    description: 'জীববিজ্ঞান অধ্যায় ১৪ (জীবপ্রযুক্তি)-এ ১০০% পারফেক্ট স্কোর অর্জন।',
    requirementBn: 'জীববিজ্ঞান ১৪শ অধ্যায়ে ১০০% পারফেক্ট স্কোর',
    iconName: 'Sparkles',
    accentColor: 'emerald',
    targetSubject: 'biology',
    targetChapter: 14,
    scoreThreshold: 100
  },

  // Speed & Time Records
  {
    id: 'speed_demon_60',
    title: 'বিদ্যুৎ গতি (Speedster)',
    titleEn: 'Lightning Speedster',
    category: 'speed',
    categoryLabel: 'টাইম রেকর্ড',
    description: 'যেকোনো অধ্যায়ের কুইজ ৬০ সেকেন্ড (১ মিনিট)-এর কম সময়ে সফলভাবে সম্পন্ন।',
    requirementBn: 'যেকোনো অধ্যায়ের কুইজ ৬০ সেকেন্ডের নিচে সম্পন্ন করা',
    iconName: 'Timer',
    accentColor: 'amber',
    timeThreshold: 60
  },
  {
    id: 'speed_record_breaker_45',
    title: 'গতির রেকর্ড ব্রেকার',
    titleEn: 'Fastest Record Breaker',
    category: 'speed',
    categoryLabel: 'টাইম রেকর্ড',
    description: 'মাত্র ৪৫ সেকেন্ডের মধ্যে কুইজ সম্পন্ন করে নতুন গতির রেকর্ড গড়ুন।',
    requirementBn: 'যেকোনো অধ্যায়ে ৪৫ সেকেন্ডের মধ্যে কুইজ সম্পন্ন করা',
    iconName: 'Clock',
    accentColor: 'rose',
    timeThreshold: 45
  },
  {
    id: 'speed_record_perfect',
    title: 'সুপারসনিক জিনিয়াস',
    titleEn: 'Supersonic Genius',
    category: 'speed',
    categoryLabel: 'পারফেক্ট + স্পিড',
    description: '৯০ সেকেন্ডের মধ্যে ১০০% পারফেক্ট স্কোর সহ কুইজ সম্পন্ন করা।',
    requirementBn: '১০০% পারফেক্ট স্কোর সহ ৯০ সেকেন্ডের নিচে কুইজ সম্পন্ন',
    iconName: 'Zap',
    accentColor: 'fuchsia',
    timeThreshold: 90,
    scoreThreshold: 100
  },

  // Special Masteries
  {
    id: 'tri_science_master',
    title: 'বিজ্ঞান ত্রিরত্ন (Tri-Science)',
    titleEn: 'Tri-Science Master',
    category: 'special',
    categoryLabel: 'সার্বিক দক্ষতা',
    description: 'রসায়ন, পদার্থবিজ্ঞান ও জীববিজ্ঞান তিনটি বিষয়েই কুইজ সফলভাবে সম্পন্ন।',
    requirementBn: 'রসায়ন, পদার্থ এবং জীববিজ্ঞান—তিনটি বিষয়েই অন্তত ১টি কুইজ সম্পন্ন',
    iconName: 'Crown',
    accentColor: 'purple'
  },
  {
    id: 'perfectionist_streak',
    title: 'নিখুঁত স্কলার (Triple Flawless)',
    titleEn: 'Triple Flawless Scholar',
    category: 'special',
    categoryLabel: 'সার্বিক দক্ষতা',
    description: 'যেকোনো ৩টি ভিন্ন অধ্যায়ে ১০০% পারফেক্ট স্কোর অর্জন।',
    requirementBn: 'অন্তত ৩টি ভিন্ন অধ্যায়ে ১০০% পারফেক্ট স্কোর অর্জন',
    iconName: 'Star',
    accentColor: 'yellow'
  }
];

// Load unlocked badges from localStorage
export const loadUnlockedBadges = (): Record<string, UnlockedBadgeRecord> => {
  let existingBadges: Record<string, UnlockedBadgeRecord> = {};
  try {
    const raw = localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY);
    if (raw) {
      existingBadges = JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Failed to parse achievements', e);
  }

  // Also auto-sync with existing leaderboard records to ensure all past accomplishments unlock badges
  try {
    const history = loadLeaderboardRecords();
    const updated = { ...existingBadges };
    let hasChanges = false;

    // Evaluate each history record against definitions
    history.forEach((rec) => {
      ALL_BADGE_DEFINITIONS.forEach((badge) => {
        if (updated[badge.id]) return; // already unlocked

        let shouldUnlock = false;

        // Subject + Chapter specific perfect score
        if (badge.targetSubject && badge.targetChapter && badge.scoreThreshold === 100) {
          if (
            rec.subject === badge.targetSubject &&
            rec.chapter === badge.targetChapter &&
            rec.percentage === 100
          ) {
            shouldUnlock = true;
          }
        }

        // Speed only
        if (badge.id === 'speed_demon_60' && rec.timeSpentSeconds <= 60 && rec.percentage >= 50) {
          shouldUnlock = true;
        }

        // Speed breaker 45
        if (badge.id === 'speed_record_breaker_45' && rec.timeSpentSeconds <= 45 && rec.percentage >= 50) {
          shouldUnlock = true;
        }

        // Supersonic Genius (perfect + <= 90s)
        if (badge.id === 'speed_record_perfect' && rec.percentage === 100 && rec.timeSpentSeconds <= 90) {
          shouldUnlock = true;
        }

        if (shouldUnlock) {
          updated[badge.id] = {
            badgeId: badge.id,
            unlockedAt: rec.timestamp,
            unlockedDate: rec.formattedDate,
            studentName: rec.studentName,
            subject: rec.subject,
            chapter: rec.chapter,
            score: rec.score,
            totalQuestions: rec.totalQuestions,
            percentage: rec.percentage,
            timeSpentSeconds: rec.timeSpentSeconds
          };
          hasChanges = true;
        }
      });
    });

    // Check Multi-subject and perfectionist
    const subjectsDone = new Set(history.map((h) => h.subject));
    if (!updated['tri_science_master'] && subjectsDone.has('chemistry') && subjectsDone.has('physics') && subjectsDone.has('biology')) {
      const latest = history[0];
      updated['tri_science_master'] = {
        badgeId: 'tri_science_master',
        unlockedAt: Date.now(),
        unlockedDate: latest ? latest.formattedDate : 'সাম্প্রতিক',
        studentName: latest ? latest.studentName : undefined
      };
      hasChanges = true;
    }

    const perfectChapters = new Set(
      history.filter((h) => h.percentage === 100).map((h) => `${h.subject}-${h.chapter}`)
    );
    if (!updated['perfectionist_streak'] && perfectChapters.size >= 3) {
      const latest = history[0];
      updated['perfectionist_streak'] = {
        badgeId: 'perfectionist_streak',
        unlockedAt: Date.now(),
        unlockedDate: latest ? latest.formattedDate : 'সাম্প্রতিক',
        studentName: latest ? latest.studentName : undefined
      };
      hasChanges = true;
    }

    if (hasChanges) {
      localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }
  } catch (err) {
    console.warn('Error during badge auto-sync with leaderboard', err);
  }

  return existingBadges;
};

// Check and trigger new unlocks when a quiz finishes
export const checkAndUnlockBadges = (attempt: {
  studentName: string;
  subject: 'chemistry' | 'physics' | 'biology';
  chapter: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  formattedDate: string;
}): { newBadges: BadgeDefinition[]; allUnlocked: Record<string, UnlockedBadgeRecord> } => {
  const currentUnlocked = loadUnlockedBadges();
  const newlyUnlocked: BadgeDefinition[] = [];
  const history = loadLeaderboardRecords();
  const updated = { ...currentUnlocked };

  ALL_BADGE_DEFINITIONS.forEach((badge) => {
    if (updated[badge.id]) return;

    let unlocked = false;

    // Check chapter specific
    if (badge.targetSubject && badge.targetChapter && badge.scoreThreshold === 100) {
      if (
        attempt.subject === badge.targetSubject &&
        attempt.chapter === badge.targetChapter &&
        attempt.percentage === 100
      ) {
        unlocked = true;
      }
    }

    // Check speed 60s
    if (badge.id === 'speed_demon_60' && attempt.timeSpentSeconds <= 60 && attempt.percentage >= 50) {
      unlocked = true;
    }

    // Check speed 45s
    if (badge.id === 'speed_record_breaker_45' && attempt.timeSpentSeconds <= 45 && attempt.percentage >= 50) {
      unlocked = true;
    }

    // Supersonic Genius
    if (badge.id === 'speed_record_perfect' && attempt.percentage === 100 && attempt.timeSpentSeconds <= 90) {
      unlocked = true;
    }

    if (unlocked) {
      updated[badge.id] = {
        badgeId: badge.id,
        unlockedAt: Date.now(),
        unlockedDate: attempt.formattedDate,
        studentName: attempt.studentName,
        subject: attempt.subject,
        chapter: attempt.chapter,
        score: attempt.score,
        totalQuestions: attempt.totalQuestions,
        percentage: attempt.percentage,
        timeSpentSeconds: attempt.timeSpentSeconds
      };
      newlyUnlocked.push(badge);
    }
  });

  // Tri-science check
  if (!updated['tri_science_master']) {
    const allSubjects = new Set(history.map((h) => h.subject));
    allSubjects.add(attempt.subject);
    if (allSubjects.has('chemistry') && allSubjects.has('physics') && allSubjects.has('biology')) {
      const badge = ALL_BADGE_DEFINITIONS.find((b) => b.id === 'tri_science_master');
      if (badge) {
        updated['tri_science_master'] = {
          badgeId: 'tri_science_master',
          unlockedAt: Date.now(),
          unlockedDate: attempt.formattedDate,
          studentName: attempt.studentName
        };
        newlyUnlocked.push(badge);
      }
    }
  }

  // Triple Flawless check
  if (!updated['perfectionist_streak']) {
    const perfectChapters = new Set(
      history.filter((h) => h.percentage === 100).map((h) => `${h.subject}-${h.chapter}`)
    );
    if (attempt.percentage === 100) {
      perfectChapters.add(`${attempt.subject}-${attempt.chapter}`);
    }
    if (perfectChapters.size >= 3) {
      const badge = ALL_BADGE_DEFINITIONS.find((b) => b.id === 'perfectionist_streak');
      if (badge) {
        updated['perfectionist_streak'] = {
          badgeId: 'perfectionist_streak',
          unlockedAt: Date.now(),
          unlockedDate: attempt.formattedDate,
          studentName: attempt.studentName
        };
        newlyUnlocked.push(badge);
      }
    }
  }

  if (newlyUnlocked.length > 0) {
    try {
      localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save achievements to localStorage', e);
    }
  }

  return { newBadges: newlyUnlocked, allUnlocked: updated };
};

// Render badge icon by name
const renderBadgeIcon = (iconName: string, className: string = 'h-6 w-6') => {
  switch (iconName) {
    case 'Award': return <Award className={className} />;
    case 'Atom': return <Atom className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Target': return <Target className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Dna': return <Dna className={className} />;
    case 'BatteryCharging': return <BatteryCharging className={className} />;
    case 'Timer': return <Timer className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Crown': return <Crown className={className} />;
    case 'Star': return <Star className={className} />;
    default: return <Sparkles className={className} />;
  }
};

const getBadgeRankTitle = (unlockedCount: number, total: number): { title: string; subtitle: string; color: string } => {
  const ratio = total > 0 ? unlockedCount / total : 0;
  if (ratio >= 0.8) {
    return { title: 'জ্ঞান সম্রাট (Grand Master)', subtitle: 'আপনি সমস্ত বিষয়ে সর্বোচ্চ দক্ষতা অর্জন করেছেন!', color: 'text-amber-400' };
  }
  if (ratio >= 0.5) {
    return { title: 'মেধা তারকা (Elite Scholar)', subtitle: 'অর্ধেকের বেশি অর্জন আনলক করা হয়েছে, দারুণ অগ্রগতি!', color: 'text-cyan-400' };
  }
  if (ratio >= 0.25) {
    return { title: 'উদ্যমী গবেষক (Active Researcher)', subtitle: 'নিয়মিত কুইজ দিয়ে দ্রুত নতুন ব্যাজ অর্জন করুন।', color: 'text-emerald-400' };
  }
  return { title: 'শিক্ষানবিস আবিষ্কারক (Novice Explorer)', subtitle: '১০০% পারফেক্ট স্কোর ও দ্রুত সময় রেকর্ড গড়ে ব্যাজ আনলক করুন!', color: 'text-slate-300' };
};

interface AchievementBadgesProps {
  currentSubject?: 'chemistry' | 'physics' | 'biology';
  currentChapter?: number;
  highlightBadgeId?: string | null;
  onTakeQuizForBadge?: (subject: 'chemistry' | 'physics' | 'biology', chapter: number) => void;
  compact?: boolean;
}

export const AchievementBadges: React.FC<AchievementBadgesProps> = ({
  currentSubject,
  currentChapter,
  highlightBadgeId = null,
  onTakeQuizForBadge,
  compact = false
}) => {
  const [unlockedMap, setUnlockedMap] = useState<Record<string, UnlockedBadgeRecord>>(() => loadUnlockedBadges());
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'unlocked' | 'locked' | 'chemistry' | 'physics' | 'biology' | 'speed'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectBadge, setInspectBadge] = useState<BadgeDefinition | null>(null);

  const unlockedCount = Object.keys(unlockedMap).length;
  const totalBadges = ALL_BADGE_DEFINITIONS.length;
  const percentageUnlocked = Math.round((unlockedCount / totalBadges) * 100);
  const rankInfo = getBadgeRankTitle(unlockedCount, totalBadges);

  // Filtered badges
  const filteredBadges = useMemo(() => {
    return ALL_BADGE_DEFINITIONS.filter((badge) => {
      const isUnlocked = !!unlockedMap[badge.id];

      // Category filter
      if (selectedFilter === 'unlocked' && !isUnlocked) return false;
      if (selectedFilter === 'locked' && isUnlocked) return false;
      if (selectedFilter === 'chemistry' && badge.category !== 'chemistry') return false;
      if (selectedFilter === 'physics' && badge.category !== 'physics') return false;
      if (selectedFilter === 'biology' && badge.category !== 'biology') return false;
      if (selectedFilter === 'speed' && badge.category !== 'speed') return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = badge.title.toLowerCase().includes(q) || badge.titleEn.toLowerCase().includes(q);
        const matchesDesc = badge.description.toLowerCase().includes(q) || badge.requirementBn.toLowerCase().includes(q);
        return matchesName || matchesDesc;
      }

      return true;
    });
  }, [selectedFilter, searchQuery, unlockedMap]);

  // Badges related to the current chapter
  const currentChapterBadges = useMemo(() => {
    if (!currentSubject || !currentChapter) return [];
    return ALL_BADGE_DEFINITIONS.filter(
      (b) => b.targetSubject === currentSubject && b.targetChapter === currentChapter
    );
  }, [currentSubject, currentChapter]);

  return (
    <div className="space-y-6">
      {/* Top Achievement Overview Card */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 md:p-7 shadow-xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -right-16 -top-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow-sm">
                <Trophy className="h-3.5 w-3.5 text-amber-400" />
                <span>অর্জন ও মেডেল সংগ্রহশালা</span>
              </span>
              <span className="text-xs text-slate-400">এসএসসি বিজ্ঞান প্রস্তুতি</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              <span>অ্যাচিভমেন্ট ব্যাজ</span>
              <span className="text-sm font-normal text-slate-400">
                ({toBengaliNumber(unlockedCount)} / {toBengaliNumber(totalBadges)} আনলকড)
              </span>
            </h2>

            <div className="flex items-center gap-2 text-xs">
              <span className={`font-bold ${rankInfo.color}`}>{rankInfo.title}:</span>
              <span className="text-slate-300">{rankInfo.subtitle}</span>
            </div>
          </div>

          {/* Progress Circular/Pill Gauge */}
          <div className="shrink-0 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center min-w-[200px] space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>আনলক অগ্রগতি</span>
              <span className="text-cyan-400 font-mono font-bold text-sm">
                {toBengaliNumber(percentageUnlocked)}%
              </span>
            </div>
            <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${percentageUnlocked}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span>অর্জিত: {toBengaliNumber(unlockedCount)} টি</span>
              <span>বাকি: {toBengaliNumber(totalBadges - unlockedCount)} টি</span>
            </div>
          </div>
        </div>

        {/* Current Chapter Highlights (if viewing within a specific chapter) */}
        {currentChapterBadges.length > 0 && (
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-3">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span>
                বর্তমান অধ্যায়ের টার্গেট ব্যাজ ({getSubjectLabel(currentSubject!)} অধ্যায় {toBengaliNumber(currentChapter!)}):
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentChapterBadges.map((b) => {
                const isUnlocked = !!unlockedMap[b.id];
                return (
                  <div
                    key={b.id}
                    onClick={() => setInspectBadge(b)}
                    className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between gap-3 ${
                      isUnlocked
                        ? 'bg-amber-950/30 border-amber-500/40 text-amber-200 shadow-md shadow-amber-500/10'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isUnlocked
                            ? 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30'
                            : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        {renderBadgeIcon(b.iconName, 'h-5 w-5')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <strong className="text-xs font-bold text-white">{b.title}</strong>
                          {isUnlocked ? (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3" /> অর্জিত
                            </span>
                          ) : (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-medium flex items-center gap-1">
                              <Lock className="h-3 w-3" /> লকড
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{b.requirementBn}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-500 shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-wrap">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-xl font-medium transition ${
              selectedFilter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            সব ব্যাজ ({toBengaliNumber(totalBadges)})
          </button>
          <button
            onClick={() => setSelectedFilter('unlocked')}
            className={`px-3 py-1.5 rounded-xl font-medium transition flex items-center gap-1.5 ${
              selectedFilter === 'unlocked'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>আনলক করা ({toBengaliNumber(unlockedCount)})</span>
          </button>
          <button
            onClick={() => setSelectedFilter('locked')}
            className={`px-3 py-1.5 rounded-xl font-medium transition flex items-center gap-1.5 ${
              selectedFilter === 'locked'
                ? 'bg-slate-700 text-white font-bold'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-400'
            }`}
          >
            <Lock className="h-3.5 w-3.5" />
            <span>লকড ({toBengaliNumber(totalBadges - unlockedCount)})</span>
          </button>
          <button
            onClick={() => setSelectedFilter('speed')}
            className={`px-3 py-1.5 rounded-xl font-medium transition flex items-center gap-1.5 ${
              selectedFilter === 'speed'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-400'
            }`}
          >
            <Timer className="h-3.5 w-3.5" />
            <span>স্পিড ও টাইম</span>
          </button>
          <button
            onClick={() => setSelectedFilter('chemistry')}
            className={`px-3 py-1.5 rounded-xl font-medium transition ${
              selectedFilter === 'chemistry'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-cyan-400'
            }`}
          >
            রসায়ন
          </button>
          <button
            onClick={() => setSelectedFilter('physics')}
            className={`px-3 py-1.5 rounded-xl font-medium transition ${
              selectedFilter === 'physics'
                ? 'bg-yellow-500 text-slate-950 font-bold shadow-md shadow-yellow-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
            }`}
          >
            পদার্থবিজ্ঞান
          </button>
          <button
            onClick={() => setSelectedFilter('biology')}
            className={`px-3 py-1.5 rounded-xl font-medium transition ${
              selectedFilter === 'biology'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
            }`}
          >
            জীববিজ্ঞান
          </button>
        </div>

        {/* Search input */}
        <div className="relative min-w-[180px] shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ব্যাজের নাম বা শর্ত খুঁজুন..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBadges.map((badge) => {
          const isUnlocked = !!unlockedMap[badge.id];
          const unlockData = unlockedMap[badge.id];
          const isHighlighted = highlightBadgeId === badge.id;

          // Distinctive glowing border and gradient for unlocked badges
          let cardStyle = 'border-slate-800 bg-slate-950/70 text-slate-400 opacity-80';
          let iconBg = 'bg-slate-800/80 text-slate-500 border border-slate-700';
          let borderAccent = 'hover:border-slate-700';

          if (isUnlocked) {
            borderAccent = 'border-amber-500/40 hover:border-amber-400';
            cardStyle = 'border-amber-500/30 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 shadow-lg shadow-amber-500/5 opacity-100 ring-1 ring-amber-500/20';
            iconBg = 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30 font-bold';
            
            if (badge.category === 'chemistry') {
              cardStyle = 'border-cyan-500/30 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 shadow-lg shadow-cyan-500/5 opacity-100 ring-1 ring-cyan-500/20';
              iconBg = 'bg-gradient-to-br from-cyan-400 to-cyan-600 text-slate-950 shadow-md shadow-cyan-500/30 font-bold';
            } else if (badge.category === 'biology') {
              cardStyle = 'border-emerald-500/30 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 shadow-lg shadow-emerald-500/5 opacity-100 ring-1 ring-emerald-500/20';
              iconBg = 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 shadow-md shadow-emerald-500/30 font-bold';
            } else if (badge.category === 'speed') {
              cardStyle = 'border-rose-500/30 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 shadow-lg shadow-rose-500/5 opacity-100 ring-1 ring-rose-500/20';
              iconBg = 'bg-gradient-to-br from-rose-400 to-amber-500 text-slate-950 shadow-md shadow-rose-500/30 font-bold';
            } else if (badge.category === 'special') {
              cardStyle = 'border-purple-500/30 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 shadow-lg shadow-purple-500/5 opacity-100 ring-1 ring-purple-500/20';
              iconBg = 'bg-gradient-to-br from-purple-400 to-indigo-500 text-white shadow-md shadow-purple-500/30 font-bold';
            }
          }

          if (isHighlighted) {
            cardStyle += ' ring-2 ring-cyan-400 scale-[1.02] transition-transform';
          }

          return (
            <div
              key={badge.id}
              onClick={() => setInspectBadge(badge)}
              className={`rounded-2xl border p-5 transition cursor-pointer flex flex-col justify-between relative group ${cardStyle} ${borderAccent}`}
            >
              {/* Top tag & Lock/Unlock state badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                  {badge.categoryLabel}
                </span>

                {isUnlocked ? (
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>আনলকড</span>
                  </span>
                ) : (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-900 text-slate-500 border border-slate-800 flex items-center gap-1">
                    <Lock className="h-3 w-3" />
                    <span>লকড</span>
                  </span>
                )}
              </div>

              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-3">
                <div className={`p-3 rounded-2xl shrink-0 ${iconBg}`}>
                  {renderBadgeIcon(badge.iconName, 'h-7 w-7')}
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="font-extrabold text-sm md:text-base text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>

              {/* Requirement or Unlocked Info Footer */}
              <div className="pt-3 border-t border-slate-800/80 text-[11px]">
                {isUnlocked && unlockData ? (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">অর্জিত: {unlockData.unlockedDate || 'সফল'}</span>
                      {unlockData.timeSpentSeconds && (
                        <span className="font-mono text-amber-400 font-bold flex items-center gap-1">
                          <Timer className="h-3 w-3" />
                          {formatTimeDisplay(unlockData.timeSpentSeconds)}
                        </span>
                      )}
                    </div>
                    {unlockData.studentName && (
                      <div className="text-slate-400 text-[10px] truncate">
                        কৃতিত্ব: <strong className="text-cyan-300">{unlockData.studentName}</strong>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="line-clamp-1">শর্ত: {badge.requirementBn}</span>
                    <span className="text-[10px] text-cyan-400 group-hover:underline shrink-0 ml-1">
                      বিস্তারিত
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredBadges.length === 0 && (
        <div className="text-center py-12 rounded-2xl border border-slate-800 bg-slate-950 p-8 space-y-3">
          <Award className="h-10 w-10 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">কোনো ব্যাজ খুঁজে পাওয়া যায়নি</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            আপনার নির্বাচিত ফিল্টার বা সার্চ দিয়ে কোনো ব্যাজ মেলেনি। ফিল্টার পরিবর্তন করে পুনরায় দেখুন।
          </p>
          <button
            onClick={() => {
              setSelectedFilter('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition"
          >
            সব ব্যাজ দেখুন
          </button>
        </div>
      )}

      {/* Detailed Badge Modal / Inspection Dialog */}
      {inspectBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5 animate-scaleUp">
            <button
              onClick={() => setInspectBadge(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Icon Banner */}
            <div className="text-center space-y-3 pt-2">
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/20 ring-4 ring-amber-500/20">
                {renderBadgeIcon(inspectBadge.iconName, 'h-12 w-12')}
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">
                  {inspectBadge.categoryLabel}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-white">
                  {inspectBadge.title}
                </h3>
                <p className="text-xs text-slate-400">{inspectBadge.titleEn}</p>
              </div>
            </div>

            {/* Status box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">বর্তমান স্ট্যাটাস:</span>
                {unlockedMap[inspectBadge.id] ? (
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> অর্জিত ও আনলকড
                  </span>
                ) : (
                  <span className="font-bold text-slate-400 flex items-center gap-1">
                    <Lock className="h-4 w-4 text-slate-500" /> এখনও লকড রয়েছে
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <span className="text-slate-400 font-medium block">আনলক করার সুনির্দিষ্ট শর্ত:</span>
                <p className="text-slate-200 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 leading-relaxed font-medium">
                  {inspectBadge.requirementBn}
                </p>
              </div>

              {unlockedMap[inspectBadge.id] && (
                <div className="pt-2 border-t border-slate-800/80 space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">অর্জনের তারিখ:</span>
                    <span className="font-semibold">{unlockedMap[inspectBadge.id].unlockedDate}</span>
                  </div>
                  {unlockedMap[inspectBadge.id].studentName && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">শিক্ষার্থী:</span>
                      <span className="font-semibold text-cyan-400">{unlockedMap[inspectBadge.id].studentName}</span>
                    </div>
                  )}
                  {unlockedMap[inspectBadge.id].timeSpentSeconds && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">রেকর্ড সময়:</span>
                      <span className="font-mono text-amber-400 font-bold">
                        {formatDurationBn(unlockedMap[inspectBadge.id].timeSpentSeconds!)}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setInspectBadge(null)}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                বন্ধ করুন
              </button>
              {inspectBadge.targetSubject && inspectBadge.targetChapter && onTakeQuizForBadge && (
                <button
                  onClick={() => {
                    onTakeQuizForBadge(inspectBadge.targetSubject!, inspectBadge.targetChapter!);
                    setInspectBadge(null);
                  }}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Trophy className="h-4 w-4" />
                  <span>কুইজ দিন</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Toast celebration banner for newly unlocked badges
export const NewlyUnlockedBadgesBanner: React.FC<{
  badges: BadgeDefinition[];
  onDismiss: () => void;
  onViewBadges: () => void;
}> = ({ badges, onDismiss, onViewBadges }) => {
  if (badges.length === 0) return null;

  return (
    <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-amber-500/25 via-yellow-500/20 to-amber-500/25 border-2 border-amber-400/60 shadow-xl shadow-amber-500/20 animate-bounceOnce relative space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-400 text-slate-950 shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-white text-sm md:text-base flex items-center gap-2">
              <span>🎉 অভিনন্দন! নতুন অর্জন ব্যাজ আনলক হয়েছে!</span>
            </h4>
            <p className="text-xs text-amber-200">
              আপনার অসাধারণ মেধা ও গতির রেকর্ডের জন্য নিচের ব্যাজ({toBengaliNumber(badges.length)}টি) অর্জিত হয়েছে:
            </p>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className="p-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 transition"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        {badges.map((b) => (
          <div
            key={b.id}
            className="px-3.5 py-2 rounded-xl bg-slate-950/90 border border-amber-400/50 flex items-center gap-2.5 text-xs text-white shadow-md"
          >
            <div className="p-1.5 rounded-lg bg-amber-400/20 text-amber-400">
              {renderBadgeIcon(b.iconName, 'h-4 w-4')}
            </div>
            <div>
              <strong className="block text-amber-300 font-bold">{b.title}</strong>
              <span className="text-[10px] text-slate-400">{b.categoryLabel}</span>
            </div>
          </div>
        ))}

        <button
          onClick={onViewBadges}
          className="ml-auto px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
        >
          <Award className="h-4 w-4" />
          <span>সব ব্যাজ দেখুন</span>
        </button>
      </div>
    </div>
  );
};
