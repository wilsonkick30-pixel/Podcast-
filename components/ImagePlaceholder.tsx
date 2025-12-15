
import React, { useState, useEffect } from 'react';

interface ImagePlaceholderProps {
  prompt: string;
  alt: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ prompt, alt, className = '' }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // 透過 prompt 產生一個固定的 hash 值作為 seed
    // 這樣可以確保同一個題目/場景下，每次顯示的圖片都是同一張，但不同題目圖片不同
    let hash = 0;
    for (let i = 0; i < prompt.length; i++) {
      hash = ((hash << 5) - hash) + prompt.charCodeAt(i);
      hash |= 0;
    }
    const seed = Math.abs(hash);
    
    // 使用 Picsum Photos 服務取得無版權圖片
    const url = `https://picsum.photos/seed/${seed}/800/600`;

    const img = new Image();
    img.src = url;
    img.onload = () => {
      setImageUrl(url);
      setIsLoading(false);
    };
    img.onerror = () => {
        // 若載入失敗，保持 loading 狀態或顯示空
        setIsLoading(false);
    }
  }, [prompt]);

  const baseClasses = "w-full h-56 rounded-xl mb-6 flex items-center justify-center overflow-hidden bg-[#F0E6D8]";
  const finalClassName = `${baseClasses} ${className}`;

  return (
    <div className={finalClassName}>
       {isLoading ? (
          <div className="w-full h-full bg-[#E5DCCF] animate-pulse flex items-center justify-center">
             <span className="text-[#9C8C7E] text-sm">載入圖片中...</span>
          </div>
       ) : (
          <img src={imageUrl} alt={alt} className="w-full h-full object-cover animate-fadeIn" />
       )}
    </div>
  );
};

export default ImagePlaceholder;
