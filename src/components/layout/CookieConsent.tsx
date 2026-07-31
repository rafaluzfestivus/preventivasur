"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function applyConsent(granted: boolean) {
    if (typeof window === "undefined" || typeof (window as any).gtag !== "function") return;
    (window as any).gtag("consent", "update", {
        ad_storage: granted ? "granted" : "denied",
        ad_user_data: granted ? "granted" : "denied",
        ad_personalization: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
    });
}

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent === "granted") {
            applyConsent(true);
        } else if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "granted");
        applyConsent(true);
        setIsVisible(false);
    };

    const rejectCookies = () => {
        localStorage.setItem("cookieConsent", "denied");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#4d2a36] text-white p-4 z-50 shadow-lg border-t border-[#4d2a36]/50">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300">
                    <p>
                        Utilizamos cookies propias y de terceros con fines analíticos y publicitarios. Puedes aceptarlas, rechazarlas u obtener más información en nuestra{" "}
                        <Link href="/politica-privacidad" className="text-yellow-400 hover:text-yellow-300 underline">
                            Política de Privacidad
                        </Link>.
                    </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                        onClick={rejectCookies}
                        className="px-6 py-2 bg-transparent border border-white/40 hover:border-white text-white text-sm font-bold rounded-full transition-colors whitespace-nowrap"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold rounded-full transition-colors whitespace-nowrap"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
}
