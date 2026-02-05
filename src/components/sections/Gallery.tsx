"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export function Gallery() {
    const projects = [
        { id: 1, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", cat: "Balcón" },
        { id: 2, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", cat: "Terraza" },
        { id: 3, src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop", cat: "Ventana" },
        { id: 4, src: "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1000&auto=format&fit=crop", cat: "Seguridad Infantil" },
        { id: 5, src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop", cat: "Gatos" },
        { id: 6, src: "https://images.unsplash.com/photo-1481253127861-534498168948?q=80&w=1000&auto=format&fit=crop", cat: "Escalera" },
    ];

    return (
        <section id="galeria" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Nuestros Trabajos
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explora algunas de nuestras instalaciones recientes. Seguridad impecable con el mínimo impacto visual.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square group overflow-hidden rounded-xl bg-slate-200"
                        >
                            {/* Replace simple div with Image when real images are available, utilizing the src */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.src})` }}
                                aria-label={`Proyecto de red de protección en ${project.cat}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">{project.cat}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://instagram.com" target="_blank" className="text-blue-600 font-semibold hover:underline">
                        Ver más en Instagram &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
