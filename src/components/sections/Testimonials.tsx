"use client";

import { Star, Quote } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Teresa Roue",
            location: "Málaga",
            text: "La atención por WhatsApp muy rápida y efectiva, unos días después ya estaban instalandome la red. Los chicos que vinieron a instalar super amables, la red queda muy bien y mis gatos ya pueden hacer equilibrismo por la terraza tranquilamente :) Económicos y profesionales! Dejo fotitos *-*",
        },
        {
            name: "Evelina Zikrach",
            location: "Sevilla",
            text: "La instalación fue de lujo, todo hecho con el máximo cuidado y diligencia. Queríamos una instalación de red sin techo en el patio delantero para que no se pudieran salir nuestros gatos y a la hora de la instalación se aseguraron de que no hubiera huecos ni posibles salidas. Los instaladores fueron muy puntuales y amables. En general muy contentos con el trato de la empresa, eficiencia y calidad. Además se desplazaron a Sevilla a pesar de estar en malaga, 10/10.",
        },
        {
            name: "Elena Jodar",
            location: "Cliente Verificado",
            text: "Difícil contacto telefónico pero magnífico contacto por whatsapp. Formales, profesionales y buen precio",
        },
        {
            name: "Sergio Sánchez López",
            location: "Cliente Verificado",
            text: "Contentos con el trabajo , los trabajadores muy profesionales y muy apañados",
        },
        {
            name: "Quiroyanna",
            location: "Cliente Verificado",
            text: "Encantada con el servicio. Vinieron a instalar una red de seguridad para mi bebé y fueron increíblemente atentos en todo momento. Se tomaron el tiempo necesario para asegurarse de que la red quedara perfectamente firme y bien colocada, revisando cada detalle y explicándome cómo quedaba todo. Me transmitieron mucha confianza y profesionalidad. Ahora puedo estar tranquila sabiendo que mi bebé está mucho más seguro. Los recomiendo 100 x 100 y sin duda volveré a llamarles para futuros trabajos. ¡Muchas gracias por el trabajo tan cuidado!",
        },
    ];

    const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
                    Lo que dicen nuestros clientes
                </h2>

                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative flex flex-col snap-center h-full"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#4d2a36]/10 fill-[#4d2a36]/10" />
                            <div className="flex text-yellow-400 mb-4 gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 fill-yellow-400" />
                                ))}
                            </div>

                            <div className="flex-grow mb-6">
                                <p className="text-slate-600 italic line-clamp-4">"{t.text}"</p>
                                {t.text.length > 150 && (
                                    <button
                                        onClick={() => setSelectedTestimonial(t)}
                                        className="text-yellow-600 text-sm font-semibold mt-2 hover:underline focus:outline-none"
                                    >
                                        Ver más
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shrink-0">
                                    {t.name[0]}
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="font-bold text-slate-900 truncate">{t.name}</h4>
                                    <span className="text-sm text-slate-500 truncate block">{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for full text */}
            {selectedTestimonial && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-500"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <div className="flex text-yellow-400 mb-6 gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 fill-yellow-400" />
                            ))}
                        </div>

                        <p className="text-slate-700 text-lg leading-relaxed mb-8 whitespace-pre-wrap">
                            "{selectedTestimonial.text}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                                {selectedTestimonial.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">{selectedTestimonial.name}</h4>
                                <span className="text-slate-500">{selectedTestimonial.location}</span>
                            </div>
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedTestimonial(null)} />
                </div>
            )}
        </section>
    );
}
