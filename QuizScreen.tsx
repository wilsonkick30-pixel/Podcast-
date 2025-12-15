
import React from 'react';
import type { QuizQuestion, AnswerType } from '../types';
import ProgressBar from './ProgressBar';
import ImagePlaceholder from './ImagePlaceholder';

interface QuizScreenProps {
  question: QuizQuestion;
  onSelectOption: (type: AnswerType) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, onSelectOption, currentQuestionIndex, totalQuestions }) => {
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;
  
  // A simple mapping from question theme to image prompt
  const getPromptForQuestion = (q: string): string => {
    if (q.includes("通勤")) return "An artistic, minimalist illustration of a person on a bus or train, listening to headphones, with a soft morning light, in a cozy cream and orange color palette.";
    if (q.includes("放鬆") || q.includes("休息")) return "A serene and abstract image representing relaxation, with soft flowing shapes and a calm, warm color scheme of cream and orange.";
    if (q.includes("壓力")) return "An abstract illustration depicting the feeling of release and calm overcoming stress, using soothing cream and orange tones.";
    if (q.includes("旅行")) return "An illustration of a scenic landscape view from a window, like a train or car, with a dreamy, travel-inspired aesthetic. Use a cozy cream and orange palette.";
    if (q.includes("魅力") || q.includes("推薦")) return "An abstract artwork symbolizing connection and communication through sound waves, rendered in a warm, inviting palette of cream and orange.";
    return `An artistic and abstract representation of listening and thinking, using a warm and cozy cream and orange color palette. The theme is about: ${q}`;
  }

  return (
    <div className="p-6 sm:p-8 animate-fadeIn">
      <ProgressBar progress={progress} />
      <ImagePlaceholder
        key={question.id} // Add key to re-trigger useEffect on question change
        prompt={getPromptForQuestion(question.question)}
        alt={`Question ${question.id}`}
      />
      <h2 className="text-xl sm:text-2xl font-normal mb-6">{question.question}</h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.text}
            onClick={() => onSelectOption(option.type)}
            className="w-full bg-white border-2 border-[#EFD3A7] text-[#4A3F35] text-left p-4 rounded-xl text-base transition-all duration-200 hover:bg-[#FFF9F0] hover:border-[#D88F5E] transform hover:-translate-y-0.5"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

const fadeInAnimation = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = fadeInAnimation;
document.head.appendChild(styleSheet);


export default QuizScreen;
