
import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="p-6 sm:p-8 animate-fadeIn">
      <ImagePlaceholder 
        prompt="A warm and inviting abstract illustration representing sound waves and personality, in a cozy cream and orange color palette."
        alt="Podcast personality quiz cover"
      />
      <h1 className="text-2xl sm:text-3xl font-bold text-[#D88F5E] mb-2">Podcast 聲音人格測驗</h1>
      <p className="text-sm sm:text-base leading-relaxed mb-6 opacity-90">
        每個人對於聲音的需求與偏好，都反映了內在的性格與當下的狀態。<br />花 1 分鐘，找出最適合你的聲音陪伴。
      </p>
      <button
        onClick={onStart}
        className="w-full bg-[#D88F5E] text-white font-bold text-lg py-4 px-6 rounded-full transition-all duration-300 hover:bg-[#C07A4B] hover:shadow-[0_4px_12px_rgba(216,143,94,0.4)] transform hover:-translate-y-1"
      >
        開始測驗
      </button>
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


export default StartScreen;
