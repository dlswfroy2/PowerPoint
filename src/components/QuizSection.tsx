import React, { useState, useEffect } from 'react';
import { chapter1QuizQuestions } from '../data/chapter1QuizData';
import { chapter2QuizQuestions } from '../data/chapter2QuizData';
import { quizQuestions as chapter3Questions } from '../data/quizData';
import { chapter4QuizQuestions } from '../data/chapter4QuizData';
import { chapter5QuizQuestions } from '../data/chapter5QuizData';
import { physicsChapter4QuizQuestions } from '../data/physicsChapter4QuizData';
import { physicsChapter5QuizQuestions } from '../data/physicsChapter5QuizData';
import { biologyChapter3QuizQuestions } from '../data/biologyChapter3QuizData';
import { biologyChapter2QuizQuestions } from '../data/biologyChapter2QuizData';
import { CheckCircle2, XCircle, RotateCcw, Award, ChevronRight, HelpCircle, BookOpen } from 'lucide-react';

interface QuizSectionProps {
  activeChapter?: 1 | 2 | 3 | 4 | 5;
  activeSubject?: 'chemistry' | 'physics' | 'biology';
}

export const QuizSection: React.FC<QuizSectionProps> = ({ 
  activeChapter = 1,
  activeSubject = 'chemistry'
}) => {
  const questions = 
    activeSubject === 'biology'
      ? (activeChapter === 2 ? biologyChapter2QuizQuestions : biologyChapter3QuizQuestions)
      : activeSubject === 'physics'
      ? (activeChapter === 4 ? physicsChapter4QuizQuestions : physicsChapter5QuizQuestions)
      : (
        activeChapter === 1 ? chapter1QuizQuestions : 
        activeChapter === 2 ? chapter2QuizQuestions : 
        activeChapter === 3 ? chapter3Questions :
        activeChapter === 4 ? chapter4QuizQuestions :
        chapter5QuizQuestions
      );

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  // Reset when chapter or subject changes
  useEffect(() => {
    setSelectedAnswers(new Array(questions.length).fill(null));
    setCurrentQuestionIdx(0);
    setShowExplanation(false);
    setIsQuizCompleted(false);
  }, [activeChapter, activeSubject]);

  const currentQ = questions[currentQuestionIdx];
  const selectedAnswer = selectedAnswers[currentQuestionIdx];

  const handleSelectOption = (optIndex: number) => {
    if (selectedAnswer !== null) return; // Answer already submitted for this question
    const updated = [...selectedAnswers];
    updated[currentQuestionIdx] = optIndex;
    setSelectedAnswers(updated);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      if (selectedAnswers[currentQuestionIdx + 1] !== null) {
        setShowExplanation(true);
      }
    } else {
      setIsQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers(new Array(questions.length).fill(null));
    setCurrentQuestionIdx(0);
    setShowExplanation(false);
    setIsQuizCompleted(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const finalScore = calculateScore();

  const chapterNames: Record<number, string> = 
    activeSubject === 'biology'
      ? {
          2: 'জীবকোষ ও টিস্যু',
          3: 'কোষ বিভাজন'
        }
      : activeSubject === 'physics'
      ? {
          4: 'কাজ, ক্ষমতা ও শক্তি',
          5: 'পদার্থের অবস্থা ও চাপ'
        }
      : {
          1: 'রসায়নের ধারণা',
          2: 'পদার্থের অবস্থা',
          3: 'পদার্থের গঠন',
          4: 'পর্যায় সারণি',
          5: 'রাসায়নিক বন্ধন'
        };

  const subjectLabel = activeSubject === 'biology' ? 'জীববিজ্ঞান' : activeSubject === 'physics' ? 'পদার্থবিজ্ঞান' : 'রসায়ন';
  const currentChapterTitle = chapterNames[activeChapter] || `অধ্যায় ${activeChapter}`;

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-6 lg:p-8 space-y-6">
      {/* Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">মূল্যায়ন পরীক্ষা</span>
          <span aria-hidden="true">·</span>
          <span>
            {subjectLabel} অধ্যায় {activeChapter}: {currentChapterTitle}
          </span>
          <span aria-hidden="true">·</span>
          <span>এসএসসি বোর্ড স্ট্যান্ডার্ড বহুনির্বাচনী (MCQ)</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
          অধ্যায়ভিত্তিক কুইজ ও দক্ষতা যাচাই ({currentChapterTitle})
        </h1>
        <p className="text-sm text-slate-300">
          গুরুত্বপূর্ণ বোর্ড স্ট্যান্ডার্ড প্রশ্নের মাধ্যমে {currentChapterTitle}-এর সার্বিক প্রস্তুতি মূল্যায়ন করুন।
        </p>
      </div>

      {!isQuizCompleted ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl space-y-6">
          {/* Quiz Top Progress Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs">
            <span className="font-mono text-cyan-400 font-bold">
              প্রশ্ন {currentQuestionIdx + 1} / {questions.length}
            </span>
            <span className="text-slate-400">
              {(currentQ as any).topic ? (
                <>বিষয়: <strong className="text-slate-200">{(currentQ as any).topic}</strong></>
              ) : (
                <strong className="text-slate-200">নৈর্ব্যক্তিক মূল্যায়ন</strong>
              )}
            </span>
          </div>

          {/* Progress Indicator line */}
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option: string, idx: number) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const hasAnswered = selectedAnswer !== null;

              let optionStyle = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900';

              if (hasAnswered) {
                if (isCorrect) {
                  optionStyle = 'border-emerald-500/80 bg-emerald-500/10 text-emerald-300 font-semibold';
                } else if (isSelected) {
                  optionStyle = 'border-rose-500/80 bg-rose-500/10 text-rose-300 font-semibold';
                } else {
                  optionStyle = 'border-slate-800 bg-slate-950/50 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-xs font-mono shrink-0">
                      {['ক', 'খ', 'গ', 'ঘ'][idx]}
                    </span>
                    <span>{option}</span>
                  </div>

                  {hasAnswered && (
                    <div>
                      {isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                      {isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-400" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Explanation Panel */}
          {showExplanation && (
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="h-4 w-4" />
                <span>সঠিক উত্তরের ব্যাখ্যা (Explanation):</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <span className="text-xs text-slate-400">
              বর্তমান স্কোর: <strong className="text-cyan-400 font-mono">{calculateScore()}</strong>
            </span>

            {selectedAnswer !== null && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition"
              >
                <span>{currentQuestionIdx < questions.length - 1 ? 'পরবর্তী প্রশ্ন' : 'ফলাফল দেখুন'}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completed Results Card */
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-8 text-center space-y-6 shadow-2xl">
          <div className="inline-flex p-4 rounded-full bg-cyan-500/10 text-cyan-400 ring-2 ring-cyan-500/30">
            <Award className="h-12 w-12" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">
              কুইজ সম্পন্ন হয়েছে!
            </h2>
            <p className="text-slate-400 text-sm">
              আপনার ফলাফল ও পারফরম্যান্স বিশ্লেষণ:
            </p>
          </div>

          {/* Score display */}
          <div className="flex justify-center items-center gap-3">
            <span className="text-5xl font-extrabold text-cyan-400 font-mono">
              {finalScore}
            </span>
            <span className="text-2xl text-slate-500 font-mono">/ {questions.length}</span>
          </div>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
            {finalScore >= 8 ? (
              <span className="text-emerald-400 font-semibold block">
                🎉 অসাধারণ ফলাফল! এই অধ্যায়ের সমস্ত মৌলিক ধারণা আপনার সম্পূর্ণ আয়ত্তে রয়েছে।
              </span>
            ) : finalScore >= 5 ? (
              <span className="text-amber-400 font-semibold block">
                👍 ভালো হয়েছে! তবে স্লাইডগুলো ও ভার্চুয়াল ল্যাবগুলো পুনরায় দেখে রিভিশন দিলে আরো ভালো হবে।
              </span>
            ) : (
              <span className="text-rose-400 font-semibold block">
                📖 প্রস্তুতি আরো জোরদার করুন। স্লাইড এবং কণার গতিতত্ত্ব ল্যাবটি মনোযোগ দিয়ে পর্যবেক্ষণ করুন।
              </span>
            )}
          </div>

          <button
            onClick={restartQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition"
          >
            <RotateCcw className="h-4 w-4" />
            <span>কুইজ পুনরায় শুরু করুন</span>
          </button>
        </div>
      )}
    </div>
  );
};
