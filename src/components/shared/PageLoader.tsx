"use client";

import React, { useEffect, useRef, useState } from 'react';
import Loading from '@/components/ui/loading';

type PageLoaderProps = {
    children: React.ReactNode;
    dataReady?: boolean; // whether page data (API) is ready
    waitFor?: Promise<any> | null; // optional extra promise to wait for
    timeoutMs?: number | null; // fallback timeout; when null (default) no timeout is used
};

export default function PageLoader({ children, dataReady = true, waitFor = null, timeoutMs = null }: PageLoaderProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [imagesReady, setImagesReady] = useState(false);
    const [extraReady, setExtraReady] = useState(false);
    const [timedOut, setTimedOut] = useState(false);

    useEffect(() => {
        let mounted = true;
        const el = containerRef.current;

        const checkImages = () => {
            if (!el) return;

            // If there are any critical images (marked with data-critical), wait only for them.
            const criticalImgs = Array.from(el.querySelectorAll('img[data-critical]')) as HTMLImageElement[];
            const imgs = criticalImgs.length > 0
                ? criticalImgs
                : Array.from(el.querySelectorAll('img')) as HTMLImageElement[];

            if (imgs.length === 0) {
                if (mounted) setImagesReady(true);
                return;
            }

            let remaining = imgs.length;
            const handled = new WeakSet<HTMLImageElement>();
            const onOne = (img: HTMLImageElement) => () => {
                if (handled.has(img)) return;
                handled.add(img);
                remaining -= 1;
                if (remaining <= 0 && mounted) setImagesReady(true);
            };

            imgs.forEach((img) => {
                if (img.complete && img.naturalWidth !== 0) {
                    remaining -= 1;
                } else {
                    const fn = onOne(img);
                    img.addEventListener('load', fn, { once: true });
                    img.addEventListener('error', fn, { once: true });
                }
            });

            if (remaining <= 0 && mounted) setImagesReady(true);
        };

        // Initial check and observe for new images added later
        checkImages();

        const observer = new MutationObserver(() => {
            if (!imagesReady) checkImages();
        });

        if (el) observer.observe(el, { childList: true, subtree: true });

        return () => {
            mounted = false;
            observer.disconnect();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!waitFor) {
            setExtraReady(true);
            return;
        }
        let mounted = true;
        waitFor.then(() => mounted && setExtraReady(true)).catch((err) => {
            // Do not auto-resolve on failure: keep loader visible so user can see there's an issue.
            // Log for debugging.
            // eslint-disable-next-line no-console
            console.error('PageLoader waitFor rejected:', err);
        });
        return () => {
            mounted = false;
        };
    }, [waitFor]);

    useEffect(() => {
        if (timeoutMs == null) return;
        const id = setTimeout(() => setTimedOut(true), timeoutMs);
        return () => clearTimeout(id);
    }, [timeoutMs]);

    const ready = dataReady && imagesReady && extraReady;

    return (
        <div ref={containerRef}>
            {children}
            {!ready && !timedOut && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
                    <Loading />
                </div>
            )}
            {!ready && timedOut && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
                    <Loading />
                </div>
            )}
        </div>
    );
}
