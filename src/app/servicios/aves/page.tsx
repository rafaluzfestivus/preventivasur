"use client";

import { motion } from "framer-motion";
import { Bird, ShieldAlert, Sparkles, Building2, Heart, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function AvesPage() {
    const points = [
        {
            icon: <Building2 className="w-8 h-8 text-yellow-500" />,
            title: "Barrera 100% Eficaz",
            description: "A diferencia de los pinchos o repelentes visuales, nuestras redes crean un bloqueo físico que impide que las palomas aniden o se posen en balcones y patios de luces."
        },
        {
            icon: <ShieldAlert className="w-8 h-8 text-yellow-500" />,
            title: "Higiene y Salud",
            description: "Evita la acumulación de excrementos ácidos que dañan la estructura del edificio y la proliferación de ácaros, bacterias y olores desagradables."
        },
        {
            icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
            title: "Estética y Normativa",
            description: "Prácticamente imperceptibles (color arena o negras de bajo grosor), cumpliendo con las normativas estéticas de las comunidades de vecinos de Madrid."
        },
        {
            icon: <Heart className="w-8 h-8 text-yellow-500" />,
            title: "Solución Ética (Bird-Friendly)",
            description: "Nuestras redes no dañan al animal, simplemente impiden su acceso. Es la solución preferida por su respeto a la fauna urbana."
        }
    ];

    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#4d2a36] py-20 text-white relative">
                <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase mb-3 block">
                            Especialistas en Control de Aves en Madrid
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Control de Aves: <br />
                            <span className="text-yellow-400">Solución Definitiva</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Protege tu salud y la limpieza de tu edificio. Instalamos sistemas de red casi invisibles que impiden el acceso de aves de forma definitiva.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/#contacto"
                                className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg"
                            >
                                Presupuesto sin compromiso
                            </Link>
                            <Link
                                href="tel:+34637003793"
                                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                637 003 793
                            </Link>
                        </div>
                    </motion.div>
                    <div className="lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-200">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549608276-5786d7ff1f1d?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">El fin de las palomas en tu balcón</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                En Madrid, o problema das pombas é quase uma praga urbana, especialmente em zonas como o Centro, Chamberí e Salamanca.
                                O cliente aqui está desesperado porque já tentou de tudo (espetos, corujas de plástico, CD pendurado) e nada funcionou.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-semibold italic">
                                "Nuestras redes crean una barrera física real que soluciona el problema de raíz."
                            </p>
                            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                                <h4 className="font-bold text-[#4d2a36] mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" /> Beneficio Adicional
                                </h4>
                                <p className="text-sm text-slate-700">
                                    Al instalar nuestras redes, mantendrás tus equipos de aire acondicionado y ventanas limpias por mucho más tiempo, reduciendo costes de mantenimiento.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {points.map((point, index) => (
                                <div key={index} className="p-8 rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="mb-4">{point.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h3>
                                    <p className="text-slate-600 text-sm">{point.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Historical Buildings Specialization */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-bold">Instalación en Patios de Luces y Fachadas Históricas</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        Somos especialistas en cerramientos de patios interiores y zonas de difícil acceso, el lugar preferido de anidación en Madrid.
                        Trabajamos respetando la arquitectura de edificios históricos sin dañar la fachada.
                    </p>
                    <div className="inline-block bg-[#4d2a36] text-white p-4 rounded-xl font-bold">
                        Acaba hoy con el problema de las palomas.
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <div className="bg-gradient-to-br from-[#4d2a36] to-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">¿Harto de las palomas?</h2>
                            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                                Solicita un presupuesto gratuito para tu comunidad o vivienda particular. Instalamos en toda la Comunidad de Madrid de forma rápida y limpia.
                            </p>
                            <Link
                                href="/#contacto"
                                className="bg-yellow-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-600 transition-all shadow-xl inline-block"
                            >
                                Presupuesto Sin Compromiso Geral
                            </Link>
                        </div>
                        <Bird className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
                    </div>
                </div>
            </section>
        </main>
    );
}
