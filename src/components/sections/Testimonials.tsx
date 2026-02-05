"use client";

import { Star, Quote } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "María Garcia",
            location: "Madrid",
            text: "Excelente trabajo. La red es prácticamente invisible y me da mucha tranquilidad con mi hijo de 2 años. Muy profesionales y limpios en la instalación.",
        },
        {
            name: "Carlos Rodriguez",
            location: "Barcelona",
            text: "Necesitábamos proteger la terraza para nuestros gatos. La solución que nos dieron fue perfecta. Rápidos y eficientes. 100% recomendables.",
        },
        {
            name: "Ana Martínez",
            location: "Valencia",
            text: "Pedí varios presupuestos y PreventivaSur fue el más claro y profesional. El resultado final superó mis expectativas. No tapa nada las vistas.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
                    Lo que dicen nuestros clientes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 fill-blue-100" />
                            <div className="flex text-yellow-400 mb-4 gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <span className="text-sm text-slate-500">{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
