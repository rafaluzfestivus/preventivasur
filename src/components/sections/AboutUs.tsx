"use client";

import { motion } from "framer-motion";

export function AboutUs() {
    return (
        <section id="sobre-nosotros" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-3 block">
                            Nuestra Historia
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                            Sobre <span className="text-yellow-500">Nosotros</span>
                        </h2>
                    </motion.div>

                    <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                        <p className="text-xl font-medium text-slate-800">
                            Después de Preventiva Norte (Norte de Portugal y galicia) y Preventiva Sur (Andalucia) ha llegado Preventiva Centro para cubrir las necesidades de la comunidad de Madrid y alrededores.
                        </p>
                        <p>
                            Preventiva Norte Redes de Proteccion, que actualmente es la principal empresa en el Norte de Portugal de instalación y venta de kits de redes de protección. Fue creada para cubrir las necesidades de personas que conviven con riesgos de accidentes en el hogar u otros ámbitos que exigen acciones para garantizar la protección de la vida y la integridad física, sobretodo de niños y mascotas, por el peligro de caídas a través de las ventanas, balcones, terrazas, escaleras, aperturas, elevaciones…
                        </p>
                        <p>
                            Además de impedir la entrada de aves indeseables que imposibilitan el uso principalmente de terrazas y balcones.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-[#4d2a36] mb-2">Madrid</h3>
                            <p className="text-slate-500 font-medium">Preventiva Centro</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-[#4d2a36] mb-2">Galicia</h3>
                            <p className="text-slate-500 font-medium">Preventiva Norte</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-[#4d2a36] mb-2">Andalucía</h3>
                            <p className="text-slate-500 font-medium">Preventiva Sur</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
