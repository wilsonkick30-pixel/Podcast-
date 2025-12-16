
import React, { useEffect, useState } from 'react';
import type { QuizQuestion, AnswerType } from '../types';
import ProgressBar from './ProgressBar';

interface QuizScreenProps {
  question: QuizQuestion;
  onSelectOption: (type: AnswerType) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, onSelectOption, currentQuestionIndex, totalQuestions }) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const [animating, setAnimating] = useState(false);

  // 當題目改變時，觸發動畫效果
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [question]);
  
  return (
    <div className="p-6 sm:p-12 animate-fadeIn min-h-[550px] flex flex-col justify-between">
      
      {/* 頂部進度區 */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-3 px-1">
          <span className="text-xs font-bold text-[#D88F5E] tracking-[0.2em] uppercase opacity-80">Question {currentQuestionIndex + 1 < 10 ? `0${currentQuestionIndex + 1}` : currentQuestionIndex + 1}</span>
          <span className="text-xs font-medium text-[#9C8C7E] bg-[#F5EFE6] px-2 py-1 rounded-md">
            剩餘 {totalQuestions - currentQuestionIndex - 1} 題
          </span>
        </div>
        <ProgressBar progress={progress} />
      </div>

      {/* 題目區 */}
      <div className={`flex-grow flex items-center justify-center mb-10 transition-all duration-300 transform ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4A3F35] leading-snug text-center tracking-tight">
          {question.question}
        </h2>
      </div>

      {/* 選項區 */}
      <div className={`grid grid-cols-1 gap-3 transition-all duration-500 delay-100 transform ${animating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        {question.options.map((option, idx) => (
          <button
            key={option.text}
            onClick={() => onSelectOption(option.type)}
            className="group relative w-full bg-white border border-[#EFE8E0] p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 hover:border-[#D88F5E] hover:bg-gradient-to-r hover:from-[#FFF9F5] hover:to-white hover:shadow-lg hover:shadow-[#D88F5E]/10 active:scale-[0.98]"
          >
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F8F4F0] text-[#9C8C7E] font-bold flex items-center justify-center text-sm shadow-inner group-hover:bg-[#D88F5E] group-hover:text-white transition-all duration-300">
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="text-lg text-[#5D4D41] font-medium group-hover:text-[#2C241E] transition-colors">
                {option.text}
              </span>
              
              {/* Hover Arrow */}
              <span className="ml-auto opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#D88F5E]">
                ➔
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;
