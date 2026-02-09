"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contacto" className="py-20 bg-[#4d2a36] text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <div className="lg:w-1/2">
                        <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                            Contacta con Nosotros
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            ¿Listo para proteger tu hogar?
                        </h2>
                        <p className="text-slate-300 mb-12 text-lg leading-relaxed">
                            Solicita tu presupuesto gratuito y sin compromiso hoy mismo. Nuestro equipo te asesorará sobre la mejor solución para tu espacio.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500/20 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Llámanos</h3>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider">Madrid</span>
                                            <div className="flex flex-col gap-1">
                                                <a href="tel:+34637003793" className="text-slate-300 hover:text-white transition-colors text-lg">
                                                    Móvil: 637 003 793
                                                </a>
                                                <a href="tel:+34912096117" className="text-slate-300 hover:text-white transition-colors text-lg">
                                                    Fijo: 91 209 61 17
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-2">
                                            <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider">Andalucía</span>
                                            <a href="tel:+34615744742" className="text-slate-300 hover:text-white transition-colors text-lg">
                                                615 744 742
                                            </a>
                                        </div>
                                        <div className="flex flex-col mt-2">
                                            <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider">Galicia</span>
                                            <a href="tel:+351918179427" className="text-slate-300 hover:text-white transition-colors text-lg">
                                                +351 918 179 427
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500/20 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Escríbenos</h3>
                                    <a href="mailto:contacto@preventivasur.com" className="text-slate-300 hover:text-white transition-colors text-lg">
                                        contacto@preventivasur.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500/20 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Área de Servicio</h3>
                                    <p className="text-slate-300 text-lg">
                                        Península Ibérica<br />
                                        <span className="text-sm text-slate-500">Consultar para islas.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-1/2">
                        <form className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
                            <h3 className="text-2xl font-bold mb-6">Pedir Presupuesto</h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="Tu nombre" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="600 000 000" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="tu@email.com" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Código Postal</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="28000" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Servicio</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-white">
                                            <option>Protección para Balcón</option>
                                            <option>Protección para Ventanas</option>
                                            <option>Protección para Gatos</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none" placeholder="Cuéntanos más sobre lo que necesitas..."></textarea>
                                </div>

                                <button type="button" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-2">
                                    <Send className="w-5 h-5" />
                                    Enviar Solicitud
                                </button>

                                <p className="text-center text-xs text-slate-500 mt-4">
                                    Al enviar aceptas nuestra política de privacidad.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
