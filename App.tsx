
import React, { useState, useCallback, useMemo } from 'react';
import { QUESTIONS, RESULTS } from './constants';
import type { Screen, AnswerType, ResultType } from './types';
import StartScreen from "./StartScreen";
import QuizScreen from './QuizScreen'; // <--- 已修正
import ResultScreen from './ResultScreen'; // <--- 已修正
import LoadingScreen from './LoadingScreen'; // <--- 已修正

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
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      const finalResultType = calculateResult(newAnswers);
      setResultType(finalResultType);
      setScreen('result');
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
        return <LoadingScreen message="計算結果中..." />;
      case 'start':
      default:
        return <StartScreen onStart={handleStartQuiz} />;
    }
  };

  return (
    <div className="bg-[#FFF9F0] text-[#4A3F35] font-sans flex justify-center items-center min-h-screen p-5">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-[0_8px_24px_rgba(74,63,53,0.1)] overflow-hidden text-center transition-all duration-300 ease-in-out">
        {renderScreen()}
      </div>
    </div>
  );
}
