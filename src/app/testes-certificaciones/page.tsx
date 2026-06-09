import { Metadata } from "next";
import CertificacionesContent from "./CertificacionesContent";

export const metadata: Metadata = {
    title: "Certificaciones y Resistencia de Redes | Preventiva Centro",
    description: "Conoce la calidad técnica de nuestras redes de protección en Madrid. Resistencia de 150kg/m², tratamiento Anti-UV e instalación certificada.",
    keywords: ["certificación redes seguridad", "resistencia mallas protección", "polietileno alta tenacidad", "redes ignífugas madrid", "Preventiva Centro"],
    alternates: {
        canonical: "https://preventivacentro.es/testes-certificaciones",
    },
    openGraph: {
        url: "https://preventivacentro.es/testes-certificaciones",
        title: "Certificaciones y Resistencia de Redes | Preventiva Centro",
        description: "Calidad técnica certificada en Madrid. Resistencia de 150kg/m², tratamiento Anti-UV e instalación profesional.",
        images: [{ url: "https://preventivacentro.es/logo-preventiva-centro.png", alt: "Preventiva Centro" }],
    },
};

export default function CertificacionesPage() {
    return <CertificacionesContent />;
}
