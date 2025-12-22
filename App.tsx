import { supabase } from './supabaseClient';
import React, { useState, useCallback, useMemo } from 'react';
import { QUESTIONS, RESULTS } from './constants';
import type { Screen, AnswerType, ResultType } from './types';

// ✅ 已修正：移除 ./components/ 路徑，因為您的檔案直接放在根目錄
import StartScreen from './StartScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';
import LoadingScreen from './LoadingScreen';

export default function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerType[]>([]);
  const [resultType, setResultType] = useState<ResultType | null>(null);

  const handleStartQuiz = () => {
    setScreen('quiz');
  };

  const calculateResult = useCallback((answers: AnswerType[]): ResultType => {
    const count: Record<AnswerType, number> = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(a => {
      if (count[a] !== undefined) count[a]++;
    });
    
    return Object.keys(count).reduce((a, b) =>
      count[a as AnswerType] > count[b as AnswerType] ? a : b
    ) as ResultType;
  }, []);

  const handleSelectOption = (type: AnswerType) => {
    const newAnswers = [...userAnswers, type];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }, 250);
    } else {
      setTimeout(() => {
        const finalResultType = calculateResult(newAnswers);
        setResultType(finalResultType);
        setScreen('result');

        // ✨ 儲存結果到 Supabase
        supabase
          .from('test_results')
          .insert([{ personality_type: finalResultType }])
          .then(({ error }) => {
            if (error) console.error('Supabase 儲存失敗:', error);
            else console.log('統計資料已成功送出！');
          });

      }, 250);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setResultType(null);
    setScreen('start');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQuestion = useMemo(() => QUESTIONS[currentQuestionIndex], [currentQuestionIndex]);
  const resultData = useMemo(() => resultType ? RESULTS[resultType] : null, [resultType]);

  const renderScreen = () => {
    switch (screen) {
      case 'quiz':
        return (
          <QuizScreen
            question={currentQuestion}
            onSelectOption={handleSelectOption}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={QUESTIONS.length}
          />
        );
      case 'result':
        if (resultData) {
          return <ResultScreen result={resultData} onRestart={handleRestartQuiz} />;
        }
        return <LoadingScreen message="正在分析你的聲音人格..." />;
      case 'start':
      default:
        return <StartScreen onStart={handleStartQuiz} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FDFBF7] font-sans flex justify-center items-center p-4 sm:p-6 selection:bg-[#D88F5E] selection:text-white">
      
      {/* 動態背景裝飾 (Blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFE4C4] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#E6E6FA] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-[#FFDAB9] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* 主容器 */}
      <div className="relative w-full max-w-2xl z-10 my-auto">
        <div className="backdrop-blur-sm bg-white/80 border border-white/50 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500">
           {renderScreen()}
        </div>
        
        {/* 底部版權/標記 */}
        <div className="text-center mt-6 opacity-40">
           <p className="text-xs font-medium tracking-widest text-[#8B7355]">SOUND PERSONALITY TEST</p>
        </div>
      </div>

      {/* CSS 動畫注入 */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
