"use client";

import { Star, Quote } from "lucide-react";

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
