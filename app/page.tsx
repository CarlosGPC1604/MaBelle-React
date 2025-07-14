'use client';
import Head from "next/head";
import Carousel from "../components/Carousel";
import Local from "@/components/Local";
import Collage from "../components/Collage";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import BuySection from "@/components/BuySection";
import MotivationSection from "@/components/MotivationSection";

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
      image: "Foto3.webp",
      title: "VESTIDOS Y ACCESSORIOS",
      description: "En MaBelle creemos que cada momento especial merece el vestido perfecto. Descubre nuestra amplia colección diseñada para hacer realidad tus sueños.",
    },
    {
      image: "Foto6.webp",
      title: "BODAS",
      description: "Vestidos de novia únicos que capturan la esencia de tu amor. Desde diseños clásicos hasta estilos contemporáneos, encuentra el vestido que te hará sentir radiante en tu día más importante.",
    },
    {
      image: "Foto7.webp",
      title: "FIESTAS",
      description: "Elegancia y sofisticación para cada celebración. Vestidos de gala que te harán brillar en graduaciones, eventos especiales y todas esas ocasiones memorables.",
    },
    {
      image: "Foto8.webp",
      title: "QUINCEAÑERAS",
      description: "El vestido de tus quince años, ese momento mágico donde te conviertes en princesa. Diseños espectaculares que marcarán el inicio de una nueva etapa llena de sueños.",
    },
  ];

  return (
    <>
      <Head>
        <title>MaBelle</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" type="image/png" href="/favicon-96x96.webp" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
        <meta name="apple-mobile-web-app-title" content="MaBelle" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

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

      <Local />

      <BuySection />

      <MotivationSection />

      <FAQ />

      <Footer />
    </>
  );
}
