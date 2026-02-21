"use client";

import { motion } from "framer-motion";
import { Shield, Home, Clock, CheckCircle, Info, Phone } from "lucide-react";
import Link from "next/link";

export default function NinosPage() {
    const features = [
        {
            icon: <Shield className="w-8 h-8 text-yellow-500" />,
            title: "Resistencia Certificada",
            description: "Nuestras redes soportan el peso y el impacto accidental de un niño, garantizando una barrera firme en todo momento."
        },
        {
            icon: <Home className="w-8 h-8 text-yellow-500" />,
            title: "Sustitución de Rejas",
            description: "Olvídate de las pesadas y costosas rejas de hierro. Nuestras redes ofrecen la misma seguridad con una estética limpia e 'invisible'."
        },
        {
            icon: <Info className="w-8 h-8 text-yellow-500" />,
            title: "Sin Aristas ni Peligros",
            description: "A diferencia de otros sistemas, nuestras redes são suaves al tacto e imposibles de escalar, evitando cortes ou atrapamientos."
        },
        {
            icon: <Clock className="w-8 h-8 text-yellow-500" />,
            title: "Protección 24/7",
            description: "Una vez instaladas, no requieren mantenimiento. Tu hogar se vuelve un espacio de juego seguro de forma inmediata."
        }
    ];

    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#4d2a36] py-20 text-white relative">
                <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase mb-3 block">
                            Seguridad Certificada para Familias
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Seguridad Infantil: <br />
                            <span className="text-yellow-400">Tranquilidad para los Padres</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Protege a los que más quieres con la solución más discreta y resistente del mercado. Seguridad certificada para ventanas, balcones y escaleras.
                        </p>
                        <Link
                            href="https://wa.me/34637003793"
                            target="_blank"
                            className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold inline-block hover:bg-yellow-600 transition-all shadow-lg transform hover:scale-105"
                        >
                            Solicita una visita técnica gratuita en Madrid
                        </Link>
                    </motion.div>
                    <div className="lg:w-1/2 relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542129596030-cf8d268d2a34?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-2xl shadow-xl text-[#4d2a36] font-bold">
                            <CheckCircle className="w-8 h-8 mb-2" />
                            Protección Discreta <br /> e Invisible
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Adaptabilidad Total en tu Hogar</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Cerramos huecos en barandillas de escaleras, balcones de cristal o ventanas oscilobatientes. No hay espacio pequeño que no podamos asegurar para que tus hijos crezcan en un entorno protegido.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Shield className="text-green-500 w-6 h-6" />
                                    <span className="text-slate-700 font-medium">Instalación en menos de 24h</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Shield className="text-green-500 w-6 h-6" />
                                    <span className="text-slate-700 font-medium">Material no tóxico e ignífugo</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Shield className="text-green-500 w-6 h-6" />
                                    <span className="text-slate-700 font-medium">Hilos de polietileno ultra-resistentes</span>
                                </li>
                            </ul>
                            <div className="mt-10 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                <p className="text-red-700 italic font-bold">
                                    "No esperes a que tu hijo empiece a gatear o escalar. Asegura tu hogar hoy."
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-1 lg:order-2">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
                                >
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                                    <p className="text-slate-600 text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial snippet */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Lo que dicen los padres en Madrid</h2>
                    <div className="bg-white p-8 rounded-3xl shadow-lg italic text-slate-700 text-lg">
                        "Viviendo en un piso 12 con dos niños pequeños, la ansiedad era constante. Preventiva Centro instaló las redes en una mañana y el cambio en nuestra calidad de vida ha sido total. Son casi invisibles y muy seguras."
                        <div className="mt-4 font-bold text-[#4d2a36] not-italic">— Familia Garzón, Barrio de Salamanca</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" id="contacto">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">¿Hablamos sobre la seguridad de tu hogar?</h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Nuestro equipo técnico te asesorará sobre la mejor configuración de redes para tus ventanas y balcones.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Link
                            href="https://wa.me/34637003793"
                            target="_blank"
                            className="bg-[#4d2a36] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
                        >
                            <Phone className="w-6 h-6" />
                            Protege tu hogar hoy
                        </Link>
                        <Link
                            href="https://wa.me/34637003793"
                            target="_blank"
                            className="bg-yellow-500 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-xl hover:bg-yellow-600"
                        >
                            Solicita una visita técnica gratuita
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
