
import React from 'react';

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message = "載入中..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 min-h-[300px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D88F5E]"></div>
      <p className="mt-4 text-lg text-[#4A3F35]">{message}</p>
    </div>
  );
};

export default LoadingScreen;
