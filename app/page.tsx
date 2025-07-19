'use client';
import Carousel from "../components/Carousel";
import Local from "@/components/Local";
import Collage from "../components/Collage";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import BuySection from "@/components/BuySection";
import MotivationSection from "@/components/MotivationSection";
import ShoesAccesories from "@/components/ShoesAccesories";

export default function Home() {
  const slides = [
    {
      image: "paginamabelle.webp",
      title: "VESTIDOS PARA MOMENTOS ÚNICOS",
      subtitle: "Aquí comienza ese momento mágico en el que simplemente sabes que es el indicado.",
    },
    {
      image: "paginamabelle2.webp",
      title: "UNA EXPERIENCIA PARA TODA LA VIDA",
      subtitle: "Encuentra ese vestido que te hace vibrar por dentro. Contamos con estilos exclusivos para novias, graduadas y quinceañeras.",
    },
  ];

  const collageItems = [
    {
      image: "Damas.webp",
      title: "BODAS",
      description: "Vestidos de novia únicos que capturan la esencia de tu amor. Desde diseños clásicos hasta estilos contemporáneos, encuentra el vestido que te hará sentir radiante en tu día más importante.",
    },
    {
      image: "Quinceañeras.webp",
      title: "QUINCEAÑERAS",
      description: "El vestido de tus quince años, ese momento mágico donde te conviertes en princesa. Diseños espectaculares que marcarán el inicio de una nueva etapa llena de sueños.",
    },
    {
      image: "Fiesta.webp",
      title: "FIESTAS",
      description: "Elegancia y sofisticación para cada celebración. Vestidos de gala que te harán brillar en graduaciones, eventos especiales y todas esas ocasiones memorables.",
    },
  ];

  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+523112331751"
        accountName="MaBelle"
        chatMessage="¡Hola! ¿Cómo podemos ayudarte hoy?"
        avatar="./logo-circular.jpg"
        statusMessage="Te atendemos en breve"
        placeholder="Escribe tu mensaje aquí..."
        allowClickAway={false}
        notification={true}
        notificationSound={true}
        style={{ bottom: "20px", right: "20px" }}
      />

      <main className="min-h-screen bg-white text-gray-600 transition-colors duration-300">
        <Carousel slides={slides} interval={5000} />
        <Collage
          items={collageItems}
          title="Cada momento merece un vestido especial"
          titleFont="font-serif"
        />
      </main>

      <ShoesAccesories />

      <Local />

      <BuySection />

      <MotivationSection />

      <FAQ />

      <Footer />
    </>
  );
}
