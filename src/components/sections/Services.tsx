"use client";

import { motion } from "framer-motion";
import { Home, Maximize, Shield, Dumbbell, Waves, Bird } from "lucide-react";

export function Services() {
    const services = [
        {
            icon: <Dumbbell className="w-10 h-10 text-blue-500" />,
            title: "Redes Deportivas y Canchas",
            description: "Redes de protección para canchas, pistas, campos de futbol, arenas, gimnasio y demás.",
        },
        {
            icon: <Home className="w-10 h-10 text-blue-500" />,
            title: "Mallas de Seguridad para Terrazas",
            description: "Seguridad y protección para sus terrazas y balcones sin cambios estéticos ni visuales. Mallas reforzadas especiales para mascotas. Evita el 'síndrome del paracaidista' y dales libertad segura.",
        },
        {
            icon: <Maximize className="w-10 h-10 text-blue-500" />,
            title: "Redes de Protección para Ventanas",
            description: "Además de ofrecer seguridad tienen la ventaja de sustituir la necesidad del uso de rejas.",
        },
        {
            icon: <Shield className="w-10 h-10 text-blue-500" />,
            title: "Seguridad Infantil en Escaleras",
            description: "Existen situaciones en las cuales la presencia de redes de protección para escaleras es necesaria para protección de niños y mayores.",
        },
        {
            icon: <Waves className="w-10 h-10 text-blue-500" />,
            title: "Cercos y Redes para Piscinas",
            description: "Protección y seguridad de piscinas para poder disfrutar de su piscina con tranquilidad.",
        },
        {
            icon: <Bird className="w-10 h-10 text-blue-500" />,
            title: "Redes Anti-Palomas y Aves",
            description: "Proteje el interior de su inmueble contra palomas y otras aves indeseables.",
        },
    ];

    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Soluciones de Seguridad Integral
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Adaptamos nuestras redes de protección a cualquier espacio y necesidad, garantizando la máxima resistencia y durabilidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
