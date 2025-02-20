import React from 'react';

interface ContentVideoProps {
  src: string;
  width?: 'small' | 'medium' | 'large' | string;
  position?: 'left' | 'right';
  float?: boolean;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const widthMap = {
  small: 'w-1/4',
  medium: 'w-1/3',
  large: 'w-1/2'
};

export function ContentVideo({
  src,
  width = 'medium',
  position = 'right',
  float = true,
  marginTop = 0,
  marginBottom = 6,
  marginLeft = position === 'left' ? 0 : 8,
  marginRight = position === 'right' ? 0 : 8,
  className = '',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = true
}: ContentVideoProps) {
  const widthClass = widthMap[width as keyof typeof widthMap] || width;
  const floatClass = float ? `float-${position}` : '';
  const margins = `mt-${marginTop} mb-${marginBottom} ml-${marginLeft} mr-${marginRight}`;

  return (
    <video 
      src={src}
      className={`
        ${widthClass}
        ${floatClass}
        ${margins}
        bg-gray-100 
        rounded-lg
        ${className}
      `.trim()}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
    />
  );
}