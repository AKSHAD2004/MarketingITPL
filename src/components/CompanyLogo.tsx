import React, { useState, useEffect } from 'react';

interface CompanyLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

// Memory cache for the transparent logo Data URI
let cachedTransparentLogo: string | null = null;

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = 'h-11 sm:h-13 md:h-14 lg:h-[62px] w-auto',
}) => {
  const [logoSrc, setLogoSrc] = useState<string>(cachedTransparentLogo || '/assets/dashboard-logo.jpg');

  useEffect(() => {
    if (cachedTransparentLogo) {
      setLogoSrc(cachedTransparentLogo);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/assets/dashboard-logo.jpg';

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const width = canvas.width;
        const height = canvas.height;

        // Sample background color directly from the top-left corner
        const bgR = data[0];
        const bgG = data[1];
        const bgB = data[2];

        for (let i = 0; i < width * height; i++) {
          const idx = i * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          const brightness = (r + g + b) / 3;

          // Check color difference from the sampled background blue
          const diffR = Math.abs(r - bgR);
          const diffG = Math.abs(g - bgG);
          const diffB = Math.abs(b - bgB);
          const totalDiff = diffR + diffG + diffB;

          // Pure white text, divider, or emblem cushion
          if (r > 195 && g > 195 && b > 195) {
            data[idx] = 255;
            data[idx + 1] = 255;
            data[idx + 2] = 255;
            data[idx + 3] = 255;
            continue;
          }

          // Red arc text inside emblem
          if (r > 140 && g < 70 && b < 70) {
            continue; // Keep red text
          }

          // If color is close to background blue -> make 100% transparent!
          if (totalDiff < 75 || (b > 90 && r < 65 && g < 75 && brightness < 90)) {
            data[idx + 3] = 0;
            continue;
          }

          // Anti-aliased white text edges
          const px = i % width;
          if (px > width * 0.22) {
            if (brightness >= 180) {
              data[idx] = 255;
              data[idx + 1] = 255;
              data[idx + 2] = 255;
              data[idx + 3] = 255;
            } else if (brightness >= 110) {
              const alpha = Math.min(255, Math.max(0, Math.round(((brightness - 110) / 70) * 255)));
              data[idx] = 255;
              data[idx + 1] = 255;
              data[idx + 2] = 255;
              data[idx + 3] = alpha;
            } else {
              data[idx + 3] = 0;
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const transparentDataUrl = canvas.toDataURL('image/png');
        cachedTransparentLogo = transparentDataUrl;
        setLogoSrc(transparentDataUrl);
      } catch {
        setLogoSrc('/assets/dashboard-logo.jpg');
      }
    };
  }, []);

  return (
    <div className="flex items-center select-none shrink-0">
      <img
        src={logoSrc}
        alt="INFOYASHONAND TECHNOLOGY PVT. LTD."
        className={`${className} object-contain transition-transform duration-200 group-hover:scale-[1.01]`}
        draggable={false}
        loading="eager"
      />
    </div>
  );
};










