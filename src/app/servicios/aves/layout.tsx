import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Redes Anti-Palomas en Madrid | Preventiva Centro",
    description: "Control de aves y redes anti-palomas en Madrid. Barrera física definitiva, casi invisible y resistente a la corrosión. Presupuesto gratis sin compromiso.",
    alternates: {
        canonical: "https://preventivacentro.es/servicios/aves",
    },
    openGraph: {
        url: "https://preventivacentro.es/servicios/aves",
        title: "Redes Anti-Palomas en Madrid | Preventiva Centro",
        description: "Control de aves y redes anti-palomas en Madrid. Barrera física definitiva y casi invisible.",
        images: [{ url: "https://preventivacentro.es/og-image.jpg", width: 1200, height: 630, alt: "Redes anti-palomas en Madrid" }],
    },
};

export default function AvesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
