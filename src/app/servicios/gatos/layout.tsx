import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Redes para Gatos en Madrid | Preventiva Centro",
    description: "Redes de protección anti-caídas para gatos en Madrid. Mallas casi invisibles que evitan el síndrome del paracaidista. Presupuesto gratis por WhatsApp.",
    alternates: {
        canonical: "https://preventivacentro.es/servicios/gatos",
    },
    openGraph: {
        url: "https://preventivacentro.es/servicios/gatos",
        title: "Redes para Gatos en Madrid | Preventiva Centro",
        description: "Redes de protección anti-caídas para gatos en Madrid. Mallas casi invisibles y de alta resistencia.",
        images: [{ url: "https://preventivacentro.es/og-image.jpg", width: 1200, height: 630, alt: "Redes de protección para gatos en Madrid" }],
    },
};

export default function GatosLayout({ children }: { children: React.ReactNode }) {
    return children;
}
