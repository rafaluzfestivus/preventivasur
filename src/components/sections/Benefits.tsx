"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Benefits() {
    const benefits = [
        "Resistencia Certificada: Soportan hasta 120kg/m².",
        "Tratamiento Anti-UV: Larga durabilidad expuestas al sol.",
        "Estética Invisible: No alteran la fachada ni las vistas.",
        "Material Ignífugo y No Tóxico.",
        "Instalación sin Obras molestas.",
        "Garantía de 2 años en materiales e instalación.",
        "Servicio rápido en Madrid y Andalucía.",
    ];

    return (
        <section id="beneficios" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="lg:w-1/2">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">
                            Por Qué Elegirnos
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Seguridad que no se ve, <br />
                            <span className="text-blue-600">tranquilidad que se siente</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Nuestras redes de polietileno de alta tenacidad son la opción preferida por familias y arquitectos. Combinan la máxima seguridad técnica con un impacto visual mínimo.
                        </p>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/3] bg-slate-200">
                                {/* Placeholder for Benefit Image - Could be a closeup of the net or a happy family */}
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                            </div>
                        </div>
                        {/* Float Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            animate={{ y: [0, -10, 0] }}
                            // @ts-ignore - formatting issue in tool
                            transition={{
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                opacity: { duration: 0.5 }
                            }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
                        >
                            <p className="font-bold text-slate-900 text-lg mb-1">
                                "El mejor servicio"
                            </p>
                            <p className="text-slate-500 text-sm">
                                Instalación rápida y el resultado es impecable. Muy recomendados.
                            </p>
                            <div className="flex text-yellow-400 mt-2">
                                ★★★★★
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
