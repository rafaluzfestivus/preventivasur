"use client";

import { useEffect, useState } from "react";

/**
 * Progressive enhancement for the hero background: the video (≈7 MB) only
 * mounts after the page has fully loaded, so it never competes with the
 * LCP image or blocks the first render. Skipped when the user prefers
 * reduced motion or has Data Saver enabled.
 */
export function HeroVideo() {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const connection = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
        if (connection?.saveData) return;

        const mount = () => setShowVideo(true);
        if (document.readyState === "complete") {
            mount();
            return;
        }
        window.addEventListener("load", mount, { once: true });
        return () => window.removeEventListener("load", mount);
    }, []);

    if (!showVideo) return null;

    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
        >
            <source src="/Create_a_subtle_202602091927_j7f3p.mp4" type="video/mp4" />
        </video>
    );
}
