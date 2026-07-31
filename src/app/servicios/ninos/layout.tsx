import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Redes de Seguridad Infantil en Madrid | Preventiva",
    description: "Redes de seguridad para niños en ventanas, balcones y escaleras en Madrid. Alternativa estética a las rejas con resistencia certificada de 150 kg/m².",
    alternates: {
        canonical: "https://preventivacentro.es/servicios/ninos",
    },
    openGraph: {
        url: "https://preventivacentro.es/servicios/ninos",
        title: "Redes de Seguridad Infantil en Madrid | Preventiva Centro",
        description: "Redes de seguridad para niños en ventanas, balcones y escaleras en Madrid. Resistencia certificada de 150 kg/m².",
        images: [{ url: "https://preventivacentro.es/og-image.jpg", width: 1200, height: 630, alt: "Redes de seguridad infantil en Madrid" }],
    },
};

export default function NinosLayout({ children }: { children: React.ReactNode }) {
    return children;
}
