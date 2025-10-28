"use client";

import { useEffect } from "react";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { useLanguageStore } from "@/app/zustand/uselangStore";

export default function CookieConsentWrapper() {
    const { setCookiesEnabled } = useLanguageStore();

    const handleAccept = () => {
        setCookiesEnabled(true);
    };

    const handleDecline = () => {
        setCookiesEnabled(false);
    };

    return (
        <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
    );
}