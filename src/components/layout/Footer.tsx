import Link from "next/link";
import Image from "next/image";
import { Shield, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block relative">
                            <Image
                                src="/Logo Preventiva.png"
                                alt="PreventivaSur Logo"
                                width={180}
                                height={50}
                                className="h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Especialistas en la instalación de redes de protección de alta resistencia.
                            Seguridad certificada para balcones, ventanas, terrazas, niños y mascotas.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-blue-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/preventiva_sur/" className="hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#servicios" className="hover:text-blue-500 transition-colors">Nuestros Servicios</Link></li>
                            <li><Link href="#beneficios" className="hover:text-blue-500 transition-colors">Por Qué Elegirnos</Link></li>
                            <li><Link href="#galeria" className="hover:text-blue-500 transition-colors">Galería de Proyectos</Link></li>
                            <li><Link href="#faq" className="hover:text-blue-500 transition-colors">Preguntas Frecuentes</Link></li>
                            <li><Link href="#contacto" className="hover:text-blue-500 transition-colors">Solicitar Presupuesto</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Protección Para</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Balcones e Terrazas</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Ventanas</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Escaleras y Áticos</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Seguridad para Niños</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Redes para Gatos</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>615 744 742</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>contacto@preventivasur.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>Servicio en toda la<br />Península Ibérica.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} PreventivaSur. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/politica-privacidad" className="hover:text-white transition-colors">Aviso Legal</Link>
                        <Link href="/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="/politica-privacidad" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
