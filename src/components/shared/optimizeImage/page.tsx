"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  fallbackSrc?: string;
  lowQualityPlaceholder?: boolean;
  critical?: boolean; // when true, mark image as critical so PageLoader waits for it
}


export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/placeholder.png',
  lowQualityPlaceholder = true,
  priority = false,
  quality,
  critical = false,
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
      {/* Loading Skeleton / spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-transparent border-t-amber-400 rounded-full animate-spin" />
        </div>
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
        // mark critical images so PageLoader can detect them
        {...(critical ? { 'data-critical': 'true' } as any : {})}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
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