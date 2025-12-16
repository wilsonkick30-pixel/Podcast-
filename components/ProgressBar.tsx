
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-[#F5EFE6] h-3 rounded-full overflow-hidden shadow-inner border border-white/50">
      <div
        className="h-full bg-gradient-to-r from-[#D88F5E] to-[#FFB07C] rounded-full transition-all duration-700 ease-out relative"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute top-0 right-0 bottom-0 w-full bg-white/20" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem' }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
