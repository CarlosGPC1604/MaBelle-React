'use client';
import Head from "next/head";
import Carousel from "../components/Carousel";
import Collage from "../components/Collage";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
  const slides = [
    {
      image: "paginamabelle.webp",
      title: "Vestidos para momentos únicos",
      subtitle: "Aquí comienza ese momento mágico en el que simplemente sabes que es el indicado.",
    },
    {
      image: "paginamabelle2.webp",
      title: "Una experiencia para toda la vida.",
      subtitle: "Encuentra ese vestido que te hace vibrar por dentro. Contamos con estilos exclusivos para novias, graduadas y quinceañeras.",
    },
  ];

  const collageItems = [
    {
      image: "paginamabelle.webp",
      title: "Vestidos para toda ocasión",
      description: "En MaBelle creemos que cada momento especial merece el vestido perfecto. Descubre nuestra amplia colección diseñada para hacer realidad tus sueños.",
    },
    {
      image: "paginamabelle2.webp",
      title: "BODAS",
      description: "Vestidos de novia únicos que capturan la esencia de tu amor. Desde diseños clásicos hasta estilos contemporáneos, encuentra el vestido que te hará sentir radiante en tu día más importante.",
    },
    {
      image: "paginamabelle.webp",
      title: "FIESTAS",
      description: "Elegancia y sofisticación para cada celebración. Vestidos de gala que te harán brillar en graduaciones, eventos especiales y todas esas ocasiones memorables.",
    },
    {
      image: "paginamabelle2.webp",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Oranienbaum&family=Heist&display=swap"
          rel="stylesheet"
        />
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

      <FAQ />

      <Footer />
    </>
  );
}
