
import React from 'react';
import type { Result } from '../types';
import ImagePlaceholder from './ImagePlaceholder';

interface ResultScreenProps {
  result: Result;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  return (
    <div className="p-6 sm:p-8 animate-fadeIn">
      <ImagePlaceholder 
        prompt={`A warm, cozy, abstract illustration representing the podcast personality type: ${result.title}. Cream and orange color palette.`}
        alt={`${result.title} 示意圖`}
      />

      <p className="font-bold mb-1">你的測驗結果是</p>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-[#D88F5E] my-5">{result.title}</h1>
      
      <div className="bg-[#FFF9F0] p-5 rounded-xl mb-6 text-left">
        <h3 className="text-center text-[#D88F5E] font-bold text-base mb-3 pb-3 border-b border-dashed border-[#EFD3A7]">
          🎧 推薦給你的 Podcast 節目
        </h3>
        <ul className="space-y-3">
          {result.podcasts.map((podcast) => (
            <li key={podcast.name}>
              <a 
                href={podcast.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-3 rounded-lg border border-[#EFD3A7] text-center overflow-hidden shadow-sm hover:shadow-md hover:bg-[#FCEBD0] hover:border-[#D88F5E] transition-all duration-200 group"
              >
                <span className="font-bold text-base block group-hover:text-[#D88F5E] transition-colors">{podcast.name}</span>
                <span className="text-xs text-[#9C8C7E] mt-1 block group-hover:text-[#C07A4B]">點擊收聽 &rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-[#D88F5E] text-white font-bold text-lg py-4 px-6 rounded-full transition-all duration-300 hover:bg-[#C07A4B] hover:shadow-[0_4px_12px_rgba(216,143,94,0.4)] transform hover:-translate-y-1"
      >
        再測一次
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

export default ResultScreen;
