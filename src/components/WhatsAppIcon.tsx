import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number | string;
  animated?: boolean;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-6 h-6',
  size = 26,
  animated = true,
}) => {
  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 ${
        animated ? 'animate-whatsapp-attract' : ''
      }`}
    >
      {/* Animated Glowing Ring Effect behind WhatsApp icon */}
      {animated && (
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
      )}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size }}
        className={`${className} drop-shadow-md`}
        aria-label="WhatsApp"
        role="img"
      >
        {/* Authentic Green Badge */}
        <circle cx="24" cy="24" r="23" fill="#25D366" />
        
        {/* Phone / Speech Bubble */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 8.5C15.44 8.5 8.5 15.44 8.5 24C8.5 26.96 9.35 29.73 10.81 32.08L9 39L16.14 37.21C18.43 38.51 21.12 39.27 24 39.27C32.56 39.27 39.5 32.33 39.5 23.77C39.5 15.21 32.56 8.5 24 8.5ZM24 36.72C21.46 36.72 19.1 36.01 17.08 34.78L16.61 34.5L12.05 35.67L13.27 31.23L12.96 30.73C11.6 28.55 10.89 26.01 10.89 23.36C10.89 16.12 16.76 10.25 24 10.25C31.24 10.25 37.11 16.12 37.11 23.36C37.11 30.6 31.24 36.72 24 36.72ZM31.18 27.85C30.79 27.66 28.88 26.71 28.52 26.58C28.16 26.45 27.9 26.39 27.64 26.78C27.38 27.17 26.63 28.04 26.41 28.3C26.18 28.56 25.95 28.59 25.56 28.4C25.17 28.21 23.92 27.79 22.43 26.47C21.28 25.44 20.5 24.16 20.27 23.77C20.04 23.38 20.25 23.17 20.44 22.98C20.61 22.81 20.83 22.53 21.02 22.3C21.22 22.07 21.28 21.91 21.41 21.65C21.54 21.39 21.48 21.16 21.38 20.97C21.28 20.78 20.5 18.86 20.18 18.08C19.86 17.32 19.54 17.43 19.3 17.42C19.07 17.41 18.81 17.41 18.55 17.41C18.29 17.41 17.87 17.51 17.51 17.9C17.15 18.29 16.15 19.23 16.15 21.14C16.15 23.05 17.54 24.9 17.73 25.16C17.93 25.42 20.47 29.34 24.38 31.03C25.31 31.43 26.03 31.67 26.6 31.85C27.53 32.15 28.38 32.11 29.05 32.01C29.8 31.9 31.35 31.07 31.67 30.16C32 29.25 32 28.47 31.9 28.31C31.81 28.15 31.57 28.04 31.18 27.85Z"
          fill="#FFFFFF"
        />
      </svg>
    </span>
  );
};
