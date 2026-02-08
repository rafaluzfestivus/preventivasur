"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const whatsappLinks = [
        { name: "Madrid", number: "34637003793", display: "637 003 793" },
        { name: "Andalucía", number: "34615744742", display: "615 744 742" },
    ];

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                className="flex flex-col gap-3 mb-2"
                            >
                                {whatsappLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={`https://wa.me/${link.number}?text=Hola,%20quisiera%20más%20información%20sobre%20las%20redes%20de%20protección%20en%20${link.name}.`}
                                        target="_blank"
                                        className="bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-3 border border-green-100"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <MessageCircle className="w-5 h-5 text-green-500 fill-green-500" />
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs font-bold text-green-600 uppercase tracking-wide">{link.name}</span>
                                            <span className="font-semibold text-sm">{link.display}</span>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={toggleMenu}
                        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg hover:shadow-green-500/30 hover:bg-green-600 transition-all hover:scale-110 relative"
                        aria-label="Contactar por WhatsApp"
                    >
                        {isOpen ? (
                            <span className="text-white text-2xl font-bold">×</span>
                        ) : (
                            <>
                                <MessageCircle className="w-8 h-8 text-white fill-white" />
                                <span className="absolute right-0 top-0 flex h-4 w-4 -mt-1 -mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                                </span>
                            </>
                        )}
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
}
