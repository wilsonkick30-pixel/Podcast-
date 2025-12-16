
import React from 'react';
import type { Result } from '../types';

interface ResultScreenProps {
  result: Result;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  return (
    <div className="animate-fadeIn w-full">
      
      {/* 頂部視覺裝飾 (背景) */}
      <div className="h-32 bg-gradient-to-br from-[#FFE4C4] via-[#D88F5E] to-[#CD853F] relative overflow-hidden">
         <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
         {/* 抽象紋理 */}
         <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      </div>

      {/* 圖標區域 (透過負邊距重疊於 Header 與內容之間) */}
      <div className="relative flex justify-center -mt-16 z-10 px-4">
         <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/50">
            <span className="text-6xl filter drop-shadow-md">{result.icon}</span>
         </div>
      </div>

      <div className="px-6 pt-6 pb-10 sm:px-12 text-center">
        
        <div className="space-y-3 mb-8">
            <p className="text-xs font-bold text-[#D88F5E] tracking-[0.3em] uppercase opacity-80">Analysis Report</p>
            <h1 className="text-3xl sm:text-4xl font-black text-[#4A3F35]">
            {result.title}
            </h1>
            <div className="w-12 h-1 bg-[#EFD3A7] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="bg-[#F9F6F2] p-6 rounded-2xl border border-[#F0E6D8] shadow-sm mb-10 text-left relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#D88F5E]"></div>
            <p className="text-[#6B5B4E] leading-loose text-justify font-medium relative z-10">
                {result.description}
            </p>
            <span className="absolute -bottom-4 -right-4 text-9xl opacity-5 text-[#D88F5E] select-none font-serif group-hover:scale-110 transition-transform duration-700">“</span>
        </div>
        
        {/* 推薦列表 */}
        <div className="text-left mb-10">
            <h3 className="flex items-center gap-2 text-[#8B7355] font-bold text-sm mb-4 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#D88F5E] rounded-full"></span>
                Curated Playlist
            </h3>
            <div className="space-y-3">
                {result.podcasts.map((podcast, idx) => (
                    <a 
                    key={podcast.name}
                    href={podcast.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white border border-[#EFE8E0] rounded-xl shadow-sm hover:shadow-md hover:border-[#D88F5E]/50 hover:bg-[#FFFDF9] transition-all duration-300 group"
                    >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#B0A090] font-bold text-xs group-hover:bg-[#D88F5E] group-hover:text-white transition-colors">
                             {idx + 1}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-[#4A3F35] text-lg group-hover:text-[#D88F5E] transition-colors">{podcast.name}</span>
                            <span className="text-xs text-[#9C8C7E] flex items-center gap-1">
                                <span className="w-1 h-1 bg-[#D88F5E] rounded-full"></span> Podcast
                            </span>
                        </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#EFD3A7] flex items-center justify-center text-[#D88F5E] opacity-50 group-hover:opacity-100 group-hover:bg-[#D88F5E] group-hover:text-white group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-[-45deg]">
                        ➜
                    </div>
                    </a>
                ))}
            </div>
        </div>

        {/* 抽獎活動按鈕 */}
        <a
            href="https://www.facebook.com/FamilyPodcasts"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mb-4 bg-[#D88F5E] text-white font-bold text-lg py-4 px-6 rounded-full transition-all duration-300 hover:bg-[#B87345] hover:shadow-xl transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group shadow-md"
        >
             <span className="text-xl animate-bounce">🎁</span> 到粉絲專頁精選貼文參加好禮抽獎
        </a>

        <button
            onClick={onRestart}
            className="w-full bg-[#4A3F35] text-white font-bold text-lg py-4 px-6 rounded-full transition-all duration-300 hover:bg-[#2C241E] hover:shadow-xl transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
        >
            <span className="group-hover:rotate-180 transition-transform duration-500">↻</span> 再測一次
        </button>

        <div className="mt-8 text-center">
            <p className="text-sm text-[#8B7355] font-bold tracking-wide opacity-80">好家庭聯播網製作</p>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
