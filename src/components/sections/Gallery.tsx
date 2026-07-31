"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
    const projects = [
        { id: 1, src: "/gallery-1.jpg", cat: "Balcón", alt: "Red de protección instalada en balcón en Madrid" },
        { id: 2, src: "/gallery-2.jpg", cat: "Terraza", alt: "Malla de seguridad para terraza en Madrid" },
        { id: 3, src: "/gallery-3.jpg", cat: "Ventana", alt: "Red de seguridad instalada en ventana en Madrid" },
        { id: 4, src: "/gallery-4.jpg", cat: "Estructura", alt: "Estructura con red de protección de alta resistencia" },
        { id: 5, src: "/gallery-5.jpg", cat: "Mascotas", alt: "Red de protección para gatos en balcón en Madrid" },
        { id: 6, src: "/gallery-6.jpg", cat: "Seguridad", alt: "Instalación de red de seguridad certificada en Madrid" },
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
                            <Image
                                src={project.src}
                                alt={project.alt}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">{project.cat}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://www.instagram.com/preventivacentro/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-semibold hover:underline">
                        Ver más en Instagram &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
