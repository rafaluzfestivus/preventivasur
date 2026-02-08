"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image Placeholder or Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
                {/* Replace with actual image */}
                <div className="w-full h-full bg-[url('/hero-new.jpg')] bg-cover bg-center" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-base font-semibold mb-6">
                            <ShieldCheck className="w-5 h-5" />
                            Seguridad Certificada
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Redes de Protección <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            para tu Hogar
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
                    >
                        Especialistas en la instalación de <strong>mallas de seguridad para balcones, ventanas y terrazas</strong>.
                        Protección certificada para niños y gatos sin perder las vistas.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="#contacto"
                            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 group"
                        >
                            Pedir Presupuesto GRATIS
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#galeria"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                        >
                            Ver Instalaciones
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer z-20"
            >
                <span className="text-xs uppercase tracking-widest">Descubre más</span>
                <ArrowRight className="w-5 h-5 rotate-90" />
            </motion.div>
        </section>
    );
}
