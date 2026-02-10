import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instalación de Redes de Protección en Madrid | PreventivaSur",
  description: "Especialistas en instalación de redes de protección para balcones, ventanas y terrazas en Madrid y alrededores. Resistencia de 150kg/m² y 3 años de garantía.",
  keywords: ["redes de protección madrid", "mallas de seguridad madrid", "redes para balcones madrid", "redes para gatos madrid", "seguridad infantil ventanas", "instalación redes madrid", "mallas anticaídas", "protección terrazas", "móstoles", "leganés", "getafe", "alcorcón"],
  authors: [{ name: "PreventivaSur" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivasur.com",
    title: "PreventivaSur | Redes de Protección en Madrid",
    description: "Instalación profesional de redes de protección y mallas de seguridad en Madrid. Protege a tus seres queridos sin sacrificar la estética.",
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
    "description": "Especialistas en instalación de redes de protección y mallas de seguridad para balcones, ventanas y terrazas en Madrid.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    },
    "url": "https://preventivasur.com",
    "telephone": "+34637003793",
    "priceRange": "$$",
    "areaServed": ["Madrid", "Comunidad de Madrid"],
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
