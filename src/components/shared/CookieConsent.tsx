import { useState, useEffect } from 'react'

interface CookieConsentProps {
    onAccept: () => void
    onDecline: () => void
}

export const CookieConsent = ({ onAccept, onDecline }: CookieConsentProps) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setIsVisible(false)
        onAccept()
    }

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined')
        setIsVisible(false)
        onDecline()
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-stonr-950 text-white p-4 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm">
                    <p>
                        We use cookies to enhance your experience and remember your language preferences.
                        By continuing to use our service, you agree to our use of cookies.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={handleAccept}
                        className="px-4 py-1 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                    >
                        Accept
                    </button>
                    <button
                        onClick={handleDecline}
                        className="px-4 py-1 bg-stone-500 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    )
}