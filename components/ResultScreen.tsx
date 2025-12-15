
import React from 'react';
import type { Result } from '../types';

interface ResultScreenProps {
  result: Result;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  return (
    <div className="px-6 py-10 sm:px-10 animate-fadeIn">
      
      {/* 結果標題區 */}
      <div className="text-center mb-8">
        <div className="inline-block p-2 bg-[#FFF5E6] rounded-full mb-4 shadow-sm">
            <span className="text-6xl block transform hover:scale-110 transition-transform duration-300 cursor-default" role="img" aria-label="icon">
                {result.icon}
            </span>
        </div>
        <p className="text-sm font-bold text-[#9C8C7E] tracking-widest mb-2 uppercase">Your Sound Personality</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#D88F5E] mb-4">
          {result.title}
        </h1>
        <p className="text-[#6B5B4E] leading-relaxed text-base max-w-md mx-auto bg-[#F9F4EF] p-4 rounded-lg border-l-4 border-[#D88F5E]">
          {result.description}
        </p>
      </div>
      
      {/* 推薦區 */}
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F0E6D8] overflow-hidden mb-8">
        <div className="bg-[#FFF9F0] px-5 py-3 border-b border-[#EFD3A7] flex items-center justify-center gap-2">
          <span className="text-lg">🎧</span>
          <h3 className="text-[#D88F5E] font-bold text-base">
             推薦節目
          </h3>
        </div>
        
        <ul className="divide-y divide-[#F5EFE6]">
          {result.podcasts.map((podcast) => (
            <li key={podcast.name}>
              <a 
                href={podcast.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 hover:bg-[#FFFDF9] transition-colors group"
              >
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-[#EFD3A7] group-hover:bg-[#D88F5E] transition-colors"></div>
                   <span className="font-bold text-[#5D4D41] group-hover:text-[#D88F5E] transition-colors">
                     {podcast.name}
                   </span>
                </div>
                <span className="text-[#D88F5E] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  收聽 &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-[#4A3F35] text-white font-bold text-lg py-4 px-6 rounded-full transition-all duration-300 hover:bg-[#D88F5E] hover:shadow-lg transform hover:-translate-y-1 active:scale-95"
      >
        再測一次
      </button>
    </div>
  );
};

export default ResultScreen;
