
import React from 'react';
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
  
  return (
    <div className="p-6 sm:p-10 animate-fadeIn min-h-[500px] flex flex-col">
      {/* 進度條區域 */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-[#D88F5E] tracking-widest uppercase">Question</span>
          <span className="text-sm font-bold text-[#9C8C7E]">
            <span className="text-[#D88F5E] text-xl">{currentQuestionIndex + 1}</span> / {totalQuestions}
          </span>
        </div>
        <ProgressBar progress={progress} />
      </div>

      {/* 題目區域 */}
      <div className="flex-grow flex items-center justify-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4A3F35] leading-tight text-center">
          {question.question}
        </h2>
      </div>

      {/* 選項區域 */}
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, idx) => (
          <button
            key={option.text}
            onClick={() => onSelectOption(option.type)}
            className="group relative w-full bg-white border-2 border-[#F0E6D8] p-5 rounded-xl text-left transition-all duration-200 hover:border-[#D88F5E] hover:bg-[#FFFAF5] hover:shadow-md active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5EFE6] text-[#9C8C7E] font-bold flex items-center justify-center text-sm group-hover:bg-[#D88F5E] group-hover:text-white transition-colors">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="text-lg text-[#5D4D41] font-medium group-hover:text-[#D88F5E] transition-colors">
                {option.text}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;
