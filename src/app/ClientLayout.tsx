'use client';

import { CookieConsent } from "@/components/shared/CookieConsent";
import { useLanguageStore } from "@/app/zustand/uselangStore";

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
            {children}
            <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
        </>
    );
}