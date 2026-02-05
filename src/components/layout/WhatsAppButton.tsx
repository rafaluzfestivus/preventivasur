"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <Link
                        href="https://wa.me/34600000000?text=Hola,%20quisiera%20más%20información%20sobre%20las%20redes%20de%20protección."
                        target="_blank"
                        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg hover:shadow-green-500/30 hover:bg-green-600 transition-all hover:scale-110"
                        aria-label="Contactar por WhatsApp"
                    >
                        <MessageCircle className="w-8 h-8 text-white fill-white" />
                        <span className="absolute right-0 top-0 flex h-4 w-4 -mt-1 -mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                        </span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
