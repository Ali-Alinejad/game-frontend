"use client";

import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type Props = Omit<ImageProps, 'onLoadingComplete'> & {
    wrapperClassName?: string;
    critical?: boolean; // when true, mark image as critical so PageLoader waits for it
};

export default function OptimizedImage({ wrapperClassName, critical = false, className, ...rest }: Props) {
    const [loaded, setLoaded] = useState(false);

    const handleLoaded = () => setLoaded(true);

    return (
        <div className={cn('relative overflow-hidden', wrapperClassName)}>
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-transparent">
                    <div className="w-6 h-6 border-2 border-transparent border-t-amber-400 rounded-full animate-spin" />
                </div>
            )}

            <Image
                {...(rest as ImageProps)}
                className={cn(className, loaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0')}
                onLoadingComplete={handleLoaded}
                // add data attribute so PageLoader can detect critical images
                data-critical={critical ? 'true' : undefined}
            />
        </div>
    );
}
