import { Metadata } from "next";
import ProteccionContent from "./ProteccionContent";

export const metadata: Metadata = {
    title: "Redes de Protección en Madrid | Niños, Gatos y Aves",
    description: "Protección integral para tu hogar en Madrid. Mallas certificadas para seguridad infantil, protección de gatos y control de aves. Instalación profesional en 24h.",
    keywords: ["redes para gatos madrid", "seguridad infantil madrid", "control de aves madrid", "mallas de seguridad balcones", "protección ventanas niños", "Preventiva Centro"],
};

export default function ProteccionPage() {
    return <ProteccionContent />;
}
