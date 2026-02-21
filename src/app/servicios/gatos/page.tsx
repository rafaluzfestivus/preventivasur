"use client";

import { motion } from "framer-motion";
import { Cat, AlertTriangle, ShieldCheck, Heart, Waves, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function GatosPage() {
    const features = [
        {
            icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
            title: "Adiós ao 'Síndrome del Paracaidista'",
            description: "Evita accidentes fatales. Nuestras redes crean una barrera infranqueable en balcones, ventanas y terrazas sin privar a tu gato de las vistas."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
            title: "Malla Anti-Mordeduras",
            description: "Polietileno de alta densidad con nudos termosellados. Resistente a los dientes y uñas de los gatos más curiosos y enérgicos."
        },
        {
            icon: <Cat className="w-8 h-8 text-yellow-500" />,
            title: "Bienestar Felino",
            description: "Tus gatos podrán observar el exterior, tomar el sol y sentir la brisa con total seguridad, reduciendo su estrés por encierro."
        },
        {
            icon: <Waves className="w-8 h-8 text-yellow-500" />,
            title: "Sin Impacto Visual",
            description: "Tu gato estará seguro sin que tu casa parezca una jaula. La red es casi imperceptible desde la calle, respetando la estética de Madrid."
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
                            Especialistas en Redes Felinas
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Protección Total para <br />
                            <span className="text-yellow-400">tus Gatos (Anti-Caídas)</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Dales la libertad de disfrutar del aire libre sin riesgos. Especialistas en redes de protección de alta resistencia para felinos en toda Madrid.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="https://wa.me/34637003793"
                                target="_blank"
                                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-green-600 transition-all shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Presupuesto por WhatsApp
                            </Link>
                        </div>
                    </motion.div>
                    <div className="lg:w-1/2 relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2686&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-2xl shadow-xl text-[#4d2a36] font-bold">
                            <Heart className="w-8 h-8 mb-2" />
                            Seguridad 100% <br /> para tu mascota
                        </div>
                    </div>
                </div>
            </section>

            {/* Motivation */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Por qué instalar una red Preventiva</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Ajuste milimétrico. No dejamos espacios libres por donde un gatito pueda escapar o quedar atrapado. Nuestras redes no machucan as patinhas: são macias ao toque, mas ultra resistentes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-yellow-100"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 Steps */}
            <section className="py-20 bg-[#4d2a36] text-white">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">Cómo protegemos a tu gato</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-xl mx-auto">1</div>
                            <h3 className="text-xl font-bold">Foto por WhatsApp</h3>
                            <p className="text-slate-400">Envíanos una foto de tu terraza y recibe presupuesto en minutos.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-xl mx-auto">2</div>
                            <h3 className="text-xl font-bold">Instalación Certificada</h3>
                            <p className="text-slate-400">Nuestros técnicos instalan la red con acabados perfectos sin huecos.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-xl mx-auto">3</div>
                            <h3 className="text-xl font-bold">Seguridad 24/7</h3>
                            <p className="text-slate-400">Tu gato disfruta del exterior con total seguridad por años.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Preguntas Frecuentes para Dueños de Gatos</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">¿Pueden romperla mordiendo?</h3>
                            <p className="text-slate-600">Nuestras redes de polietileno premium están diseñadas para resistir mordeduras accidentales. El material es ultra tenaz y los nudos termosellados evitan que se deshilache.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">¿Se puede instalar en áticos sin techo?</h3>
                            <p className="text-slate-600">Sí, somos especialistas en estructuras autoportantes de aluminio. Creamos un cerramiento completo para que tu gato no pierda su libertad en el ático.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">¿Cuánto tiempo tardáis en instalar?</h3>
                            <p className="text-slate-600">La mayoría de las instalaciones en balcones o ventanas se realizan en 1 a 2 horas, con un acabado limpio y profesional.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
