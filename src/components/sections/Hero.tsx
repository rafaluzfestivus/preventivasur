import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-start justify-center overflow-hidden bg-[#4d2a36]">
            {/* Background: LCP-optimized image, video enhances progressively after load */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-new.jpg"
                    alt="Red de protección instalada en un balcón en Madrid"
                    fill
                    priority
                    fetchPriority="high"
                    quality={60}
                    sizes="100vw"
                    className="object-cover"
                />
                <HeroVideo />
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 pt-24 md:pt-40">
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-16">
                    <div className="max-w-3xl text-center md:text-left order-2 md:order-1">
                        <div className="animate-fade-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-base font-semibold mb-6">
                                <ShieldCheck className="w-5 h-5" />
                                Seguridad Certificada
                            </span>
                        </div>

                        <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Redes de Protección <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                                en Madrid
                            </span>
                        </h1>

                        <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
                            Instalación de <strong>redes de seguridad para balcones, ventanas y terrazas en toda la Comunidad de Madrid</strong>.
                            Protección certificada para niños y gatos sin perder las vistas.
                        </p>

                        <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="#contacto"
                                className="px-8 py-4 bg-yellow-500 text-white rounded-full font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center gap-2 group"
                            >
                                Pedir Presupuesto GRATIS
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#galeria"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                            >
                                Ver Instalaciones
                            </Link>
                        </div>
                    </div>

                    <div className="animate-fade-up mb-6 md:mb-0 order-1 md:order-2">
                        <Image
                            src="/logo-preventiva-centro.png"
                            alt="Preventiva Centro - Instalación de Redes en Madrid"
                            width={500}
                            height={365}
                            className="h-24 md:h-64 w-auto object-contain brightness-0 invert drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hidden md:flex flex-col items-center gap-2 cursor-pointer z-20 animate-bounce">
                <span className="text-xs uppercase tracking-widest">Descubre más</span>
                <ArrowRight className="w-5 h-5 rotate-90" />
            </div>
        </section>
    );
}
