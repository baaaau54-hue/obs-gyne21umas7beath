import React, { useState } from 'react';
import { quizData } from '../data/quizData';
import { QuizQuestion } from '../types';
import { 
  Award, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  BookOpen
} from 'lucide-react';

export default function PracticeQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const activeQuestion = quizData[currentQuestionIndex];

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOptionIndex(idx);
  };

  const handleAnswerSubmit = () => {
    if (selectedOptionIndex === null || isAnswered) return;
    
    setIsAnswered(true);
    if (selectedOptionIndex === activeQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const clinicalRank = (scoreValue: number) => {
    const total = quizData.length;
    const ratio = scoreValue / total;
    if (ratio >= 0.9) return { rank: "طبيب ممتاز مع مرتبة الشرف (Consultant Grade)", desc: "لقد أظهرت إدراكاً عميقاً جداً ودقة سريرية تامة لكافة سيناريوهات المنهج العملي المتقدم!", color: "text-emerald-700 bg-emerald-50 border-emerald-100" };
    if (ratio >= 0.70) return { rank: "طبيب مقيم متميز (Resident Grade)", desc: "أداء متميز ومطابق لبروتوكولات الطوارئ السريرية والتدبير الفوري.", color: "text-indigo-700 bg-indigo-50 border-indigo-100" };
    return { rank: "طبيب ممارس يحتاج مراجعة (Prac Grade)", desc: "يتطلب أداؤك مراجعة بعض الجرعات الدواعية وقراءات الحاسبات السريرية لضمان التفوق.", color: "text-amber-700 bg-amber-50 border-amber-100" };
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-205 p-5 md:p-6" id="quiz-tab">
      
      {/* HEADER PROGRESS */}
      {!quizFinished && (
        <div className="border-b pb-4 mb-5 flex justify-between items-center text-xs">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-sm font-bold block w-fit">
              OSCE PRACTICE SIMULATOR
            </span>
            <h3 className="font-bold text-slate-800 text-sm">محاكي اختبارات التوليد السريرية</h3>
          </div>
          <span className="font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
            سؤال {currentQuestionIndex + 1} من {quizData.length}
          </span>
        </div>
      )}

      {/* QUIZ PORTAL */}
      {!quizFinished ? (
        <div className="space-y-6">
          
          {/* Question Scenario */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex gap-2 items-start">
              <HelpCircle className="w-5 h-5 text-indigo-655 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase font-mono block">
                  القسم: {activeQuestion.category}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed font-sans">
                  {activeQuestion.scenario}
                </p>
              </div>
            </div>
          </div>

          {/* Options grid */}
          <div className="space-y-2.5">
            {activeQuestion.options.map((opt, idx) => {
              let btnClass = "border-slate-200 hover:bg-slate-50 text-slate-750";
              let icon = null;

              if (selectedOptionIndex === idx) {
                btnClass = "border-indigo-600 bg-indigo-50/50 text-indigo-950 font-semibold ring-1 ring-indigo-500";
              }

              if (isAnswered) {
                if (idx === activeQuestion.correctAnswerIndex) {
                  btnClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500";
                  icon = <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />;
                } else if (selectedOptionIndex === idx) {
                  btnClass = "border-red-500 bg-red-50 text-red-950 font-semibold ring-1 ring-red-500";
                  icon = <XCircle className="w-4 h-4 text-red-650 shrink-0" />;
                } else {
                  btnClass = "opacity-50 border-slate-200 text-slate-400 cursor-not-allowed";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className={`w-full text-right p-3.5 rounded-xl border text-xs leading-relaxed transition-all flex items-center justify-between gap-3 select-none cursor-pointer ${btnClass}`}
                >
                  <span className="font-sans font-medium">{opt}</span>
                  {icon}
                </button>
              );
            })}
          </div>

          {/* Actions panel */}
          <div className="flex gap-3 justify-end pt-3">
            {!isAnswered ? (
              <button
                onClick={handleAnswerSubmit}
                disabled={selectedOptionIndex === null}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold font-sans transition-colors cursor-pointer ${
                  selectedOptionIndex === null
                    ? 'bg-slate-100 text-slate-400'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                تأكيد وبحث الإجابة
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer font-sans"
              >
                <span>{currentQuestionIndex < quizData.length - 1 ? 'السؤال التالي' : 'عرض النتيجة النهائية'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Detailed explanation and rationale rationale */}
          {isAnswered && (
            <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-2">
              <span className="font-bold text-xs text-indigo-900 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-indigo-650 shrink-0" />
                تحليل علمي تبريري للإجابة (Clinical Rationale):
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                {activeQuestion.explanation}
              </p>
            </div>
          )}

        </div>
      ) : (
        /* FINISHED PORTAL */
        <div className="space-y-6 text-center py-6 text-slate-800">
          <div className="inline-flex p-4 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
            <Award className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900">لقد أكملت محاكي اختبارات OSCE بنجاح!</h3>
            <p className="text-xs text-slate-500 font-mono">درجتك الإجمالية: {score} من {quizData.length} أسئلة صحيحة</p>
          </div>

          {/* Score percentage progress */}
          <div className="max-w-xs mx-auto">
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border">
              <div 
                className="h-full bg-indigo-600 transition-all duration-1000" 
                style={{ width: `${(score / quizData.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Clinical certification result */}
          <div className={`p-4 rounded-xl border max-w-md mx-auto text-right space-y-1.5 ${clinicalRank(score).color}`}>
            <span className="text-xs font-bold font-mono tracking-widest text-indigo-600 bg-indigo-100/50 px-2 py-0.5 rounded-sm block w-fit">
              RESULT CATEGORY
            </span>
            <strong className="text-sm font-extrabold font-sans block mb-1">
              {clinicalRank(score).rank}
            </strong>
            <p className="text-xs leading-relaxed font-medium">
              {clinicalRank(score).desc}
            </p>
          </div>

          <div className="pt-3 flex gap-3 justify-center">
            <button
              onClick={handleRestartQuiz}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer font-sans"
            >
              <RotateCcw className="w-4 h-4" />
              إعادة تهيئة المحاكي والأسئلة
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
