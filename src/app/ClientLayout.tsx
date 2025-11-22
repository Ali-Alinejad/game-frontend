'use client';

import { CookieConsent } from "@/components/shared/CookieConsent";
import { useLanguageStore } from "@/app/zustand/uselangStore";
import PageLoader from '@/components/shared/PageLoader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { setCookiesEnabled } = useLanguageStore();

    const handleAccept = () => {
        setCookiesEnabled(true);
    };

    const handleDecline = () => {
        setCookiesEnabled(false);
    };

    return (
        <>
            <PageLoader timeoutMs={10000}>
                {children}
            </PageLoader>
            <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
        </>
    );
}