import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instalación de Redes de Protección en Madrid | Preventiva Centro",
  description: "Especialistas en instalación de redes de protección para balcones, ventanas y terrazas en Madrid y alrededores. Resistencia de 150kg/m² y 3 años de garantía.",
  keywords: ["redes de protección madrid", "mallas de seguridad madrid", "redes para balcones madrid", "redes para gatos madrid", "seguridad infantil ventanas", "instalación redes madrid", "mallas anticaídas", "protección terrazas", "leganés", "getafe", "alcorcón", "Preventiva Centro", "precio redes protección", "presupuesto mallas seguridad", "instaladores redes madrid"],
  authors: [{ name: "Preventiva Centro", url: "https://preventivacentro.es" }],
  creator: "Preventiva Centro",
  publisher: "Preventiva Centro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivacentro.es",
    title: "Preventiva Centro | Redes de Protección en Madrid",
    description: "Instalación profesional de redes de protección y mallas de seguridad en Madrid. Protege a tus seres queridos sin sacrificar la estética.",
    siteName: "Preventiva Centro",
    images: [
      {
        url: "/logo-preventiva-centro.png",
        width: 800,
        height: 600,
        alt: "Logo Preventiva Centro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preventiva Centro | Redes de Protección en Madrid",
    description: "Instalación profesional de redes de protección y mallas de seguridad en Madrid.",
    images: ["/logo-preventiva-centro.png"],
  },
  alternates: {
    canonical: "https://preventivacentro.es",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo-preventiva-centro.png",
    shortcut: "/logo-preventiva-centro.png",
    apple: "/logo-preventiva-centro.png",
  },
  verification: {
    google: "verification_token", // Placeholder for actual token if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Preventiva Centro",
    "image": "https://preventivacentro.es/logo-preventiva-centro.png",
    "description": "Especialistas en instalación de redes de protección y mallas de seguridad para balcones, ventanas y terrazas en Madrid.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    },
    "url": "https://preventivacentro.es",
    "telephone": "+34637003793",
    "email": "contacto@preventivacentro.es",
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17944651982"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17944651982');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WH6L3VQJ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className}  antialiased bg-gray-50 flex flex-col min-h-screen`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH6L3VQJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
