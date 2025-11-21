"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  fallbackSrc?: string;
  lowQualityPlaceholder?: boolean;
}


export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/placeholder.png',
  lowQualityPlaceholder = true,
  priority = false,
  quality,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // LQIP - Low Quality Image Placeholder (base64)
  const blurDataURL = lowQualityPlaceholder
    ? "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAFRABAQAAAAAAAAAAAAAAAAAAAAH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKcSs0WsACT/2Q=="
    : undefined;

  // کیفیت بر اساس دستگاه
  const imageQuality = quality || (isMobile ? 60 : 75);

  return (
    <div className="relative w-full h-full">
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
      )}

      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        quality={imageQuality}
        priority={priority}
        placeholder={lowQualityPlaceholder ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.warn(`Failed to load image: ${src}`);
          setImgSrc(fallbackSrc);
        }}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${props.className || ''}`}
      />
    </div>
  );
}

// استفاده در کامپوننت‌ها:
// <OptimizedImage 
//   src={game.image} 
//   alt={game.title} 
//   fill 
//   priority={index < 4}
// />