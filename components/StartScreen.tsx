
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 animate-fadeIn text-center">
      
      {/* 裝飾性圖示區域 */}
      <div className="relative mb-10">
        <div className="w-32 h-32 bg-[#FFF0D4] rounded-full flex items-center justify-center relative z-10 shadow-[0_8px_20px_rgba(216,143,94,0.2)]">
          <span className="text-6xl animate-pulse-slow">🎧</span>
        </div>
        {/* 背景裝飾圓圈 */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#D88F5E] rounded-full opacity-10 animate-ping-slow"></div>
        <div className="absolute -top-3 -right-3 text-2xl animate-bounce-slow">✨</div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#D88F5E] mb-4 tracking-tight">
        Podcast 聲音人格測驗
      </h1>
      
      <div className="max-w-xs mx-auto mb-8">
        <div className="h-1 w-16 bg-[#EFD3A7] mx-auto mb-6 rounded-full"></div>
        <p className="text-[#6B5B4E] text-base leading-relaxed font-medium">
          聲音不只是頻率，更是靈魂的共鳴。<br/>
          花 <span className="text-[#D88F5E] font-bold">1 分鐘</span>，<br/>
          找出此刻最懂你的聲音頻率。
        </p>
      </div>

      <button
        onClick={onStart}
        className="group relative w-full max-w-xs overflow-hidden rounded-full bg-[#D88F5E] py-4 px-8 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#C07A4B] hover:shadow-[#D88F5E]/40 hover:-translate-y-1 active:scale-95"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          開始測驗 <span>➜</span>
        </span>
      </button>

    </div>
  );
};

// CSS 動畫定義
const customAnimations = `
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
@keyframes ping-slow {
  0% { transform: scale(1); opacity: 0.2; }
  100% { transform: scale(1.5); opacity: 0; }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }
.animate-ping-slow { animation: ping-slow 2s infinite cubic-bezier(0, 0, 0.2, 1); }
.animate-bounce-slow { animation: bounce-slow 2.5s infinite ease-in-out; }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = customAnimations;
document.head.appendChild(styleSheet);

export default StartScreen;
