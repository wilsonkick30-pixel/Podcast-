
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 sm:px-12 animate-fadeIn text-center relative overflow-hidden">
      
      {/* 裝飾線條 */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFDAB9] via-[#D88F5E] to-[#E6E6FA]"></div>

      {/* 主圖示區塊 */}
      <div className="relative mb-12 group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D88F5E] to-[#FFDAB9] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center relative z-10 shadow-xl border border-[#FFF5EB] group-hover:scale-105 transition-transform duration-500 ease-out">
          <span className="text-7xl drop-shadow-sm filter">🎧</span>
          
          {/* 懸浮小元素 */}
          <div className="absolute -right-2 top-0 bg-white p-2 rounded-2xl shadow-lg border border-[#f0f0f0] animate-bounce-slow">
            <span className="text-2xl">✨</span>
          </div>
          <div className="absolute -left-2 bottom-2 bg-white p-2 rounded-2xl shadow-lg border border-[#f0f0f0] animate-pulse-slow">
            <span className="text-2xl">🎵</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#8B4513] to-[#D88F5E] mb-6 tracking-tight leading-tight">
          尋找你的<br/>聲音人格
        </h1>
        
        <div className="space-y-2 mb-10 text-[#6B5B4E]">
          <p className="text-lg font-medium">聲音不只是頻率，更是靈魂的共鳴。</p>
          <p className="text-base opacity-80">透過 1 分鐘的心理測驗，<br className="sm:hidden"/>探索此刻最適合你的聽覺頻率。</p>
        </div>

        <button
          onClick={onStart}
          className="group relative w-full sm:w-auto min-w-[200px] overflow-hidden rounded-full bg-[#4A3F35] py-4 px-10 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#2C241E] hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:shadow-inner"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          <span className="relative z-10 flex items-center justify-center gap-3">
            開始測驗 <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </button>
        
        <div className="mt-10 flex flex-col items-center gap-2">
            <p className="text-xs text-[#9C8C7E] tracking-widest uppercase opacity-40">Start the journey</p>
            <p className="text-sm text-[#8B7355] font-bold tracking-wide opacity-90">好家庭聯播網製作</p>
        </div>
      </div>
    </div>
  );
};

// CSS 動畫定義
const customAnimations = `
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
.animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
.animate-pulse-slow { animation: pulse-slow 2.5s infinite ease-in-out; }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = customAnimations;
document.head.appendChild(styleSheet);

export default StartScreen;
