import React from 'react';

interface ContentImageProps {
  src: string;
  alt: string;
  width?: 'small' | 'medium' | 'large' | string;
  position?: 'left' | 'right';
  float?: boolean;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  className?: string;
}

const widthMap = {
  small: 'w-1/4',
  medium: 'w-1/3',
  large: 'w-1/2'
};

export function ContentImage({
  src,
  alt,
  width = 'medium',
  position = 'right',
  float = true,
  marginTop = 0,
  marginBottom = 6,
  marginLeft = position === 'left' ? 0 : 8,
  marginRight = position === 'right' ? 0 : 8,
  className = ''
}: ContentImageProps) {
  const widthClass = widthMap[width as keyof typeof widthMap] || width;
  const floatClass = float ? `float-${position}` : '';
  const margins = `mt-${marginTop} mb-${marginBottom} ml-${marginLeft} mr-${marginRight}`;

  return (
    <img 
      src={src}
      alt={alt}
      className={`
        ${widthClass}
        ${floatClass}
        ${margins}
        bg-gray-100 
        rounded-lg
        ${className}
      `.trim()}
    />
  );
}