import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instalación de Redes de Protección y Mallas de Seguridad | Madrid y Andalucía",
  description: "Especialistas en instalación de redes de protección para balcones, ventanas y terrazas en Madrid y Andalucía. Seguridad certificada para niños y gatos. ¡Presupuesto gratis!",
  keywords: ["redes de protección", "mallas de seguridad", "redes para balcones", "redes para gatos", "seguridad infantil ventanas", "instalación redes madrid", "instalación redes andalucía", "mallas anticaídas", "protección terrazas", "mallas seguridad gatos"],
  authors: [{ name: "PreventivaSur" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivasur.com",
    title: "PreventivaSur | Redes de Protección en Madrid y Andalucía",
    description: "Instalación profesional de redes de protección y mallas de seguridad. Protege a tus seres queridos sin sacrificar la estética.",
    siteName: "PreventivaSur",
    images: [
      {
        url: "/Logo Preventiva.png",
        width: 800,
        height: 600,
        alt: "Logo PreventivaSur",
      },
    ],
  },
  alternates: {
    canonical: "https://preventivasur.com",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "PreventivaSur",
    "image": "https://preventivasur.com/Logo%20Preventiva.png",
    "description": "Especialistas en instalación de redes de protección y mallas de seguridad para balcones, ventanas y terrazas en Madrid y Andalucía.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "url": "https://preventivasur.com",
    "telephone": "+34615744742",
    "priceRange": "$$",
    "areaServed": ["Madrid", "Andalucía"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className}  antialiased bg-gray-50 flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppButton />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
