import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {
  fallbackAlt?: string;
}

export const Image: React.FC<ImageProps> = ({ alt, src, ...props }) => {
  let finalSrc = src;
  if (typeof src === 'string' && src.startsWith('/')) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    if (basePath && !src.startsWith(basePath)) {
      finalSrc = `${basePath}${src}`;
    }
  }

  return (
    <NextImage 
      alt={alt || "Heritage Site Image"} 
      src={finalSrc}
      {...props} 
    />
  );
};
