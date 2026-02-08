import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PreventivaSur | Redes de Protección y Mallas de Seguridad",
  description: "Especialistas en instalación de redes de protección para balcones, ventanas e terrazas. Seguridad certificada para niños y mascotas en toda España.",
  keywords: ["redes de protección", "mallas de seguridad", "redes para balcones", "seguridad niños", "redes gatos", "instalación redes madrid", "malla anticaída"],
  authors: [{ name: "PreventivaSur" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivasur.es",
    title: "PreventivaSur | Seguridad par tu Hogar",
    description: "Instalación profesional de redes de protección y mallas de seguridad. Protege a tus seres queridos sin sacrificar la estética.",
    siteName: "PreventivaSur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className}  antialiased bg-gray-50 flex flex-col min-h-screen`}>
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
