import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://preventivacentro.es"),
  title: "Instalación de Redes de Protección en Madrid | Preventiva Centro",
  description: "Especialistas en instalación de redes de protección para balcones, ventanas y terrazas en Madrid y alrededores. Resistencia de 150kg/m² y 3 años de garantía.",
  keywords: ["redes de protección madrid", "mallas de seguridad madrid", "redes para balcones madrid", "redes para gatos madrid", "seguridad infantil ventanas", "instalación redes madrid", "mallas anticaídas", "protección terrazas", "Preventiva Centro", "precio redes protección", "presupuesto mallas seguridad", "instaladores redes madrid"],
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
        url: "https://preventivacentro.es/logo-preventiva-centro.png",
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
    images: ["https://preventivacentro.es/logo-preventiva-centro.png"],
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
    google: "kguG7VzEGNBq-W-Wm2AyNaWulEgyx0gERcx2IsZk0gA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessJsonLd = {
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
    "areaServed": [
      "Madrid",
      "Móstoles",
      "Leganés",
      "Getafe",
      "Alcorcón",
      "Alcalá de Henares",
      "Fuenlabrada",
      "Torrejón de Ardoz",
      "Parla",
      "Alcobendas",
      "Pozuelo de Alarcón",
      "Las Rozas",
      "Majadahonda",
      "Comunidad de Madrid"
    ],
    "sameAs": [
      "https://www.instagram.com/preventivacentro/"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tarda la instalación de redes de protección en Madrid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La instalación suele completarse en pocas horas, dependiendo del tamaño y número de espacios. Trabajamos de forma limpia y sin obras."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué garantía tienen las redes de protección?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestras redes incluyen 3 años de garantía. Utilizamos materiales de alta resistencia certificados con una carga de 150 kg/m²."
        }
      },
      {
        "@type": "Question",
        "name": "¿Podéis instalar redes en cualquier tipo de balcón o terraza en Madrid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Nos adaptamos a cualquier tipo de balcón, ventana o terraza, sea cual sea su forma o tamaño. Realizamos una medición personalizada antes de la instalación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Las redes de protección son visibles desde el exterior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las redes son prácticamente transparentes e imperceptibles desde la calle, preservando la estética de tu fachada sin renunciar a la seguridad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta instalar redes de protección en Madrid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El precio depende de las dimensiones del espacio y el tipo de instalación. Ofrecemos presupuesto gratuito y sin compromiso. Contáctanos para recibir tu valoración personalizada."
        }
      }
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Consent Mode v2 — deny non-essential storage until CookieConsent grants it */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />

        {/* Google Ads tag — must initialize dataLayer before GTM */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17944651982"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());
              gtag('config', 'AW-17944651982');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WH6L3VQJ');`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 flex flex-col min-h-screen`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH6L3VQJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
