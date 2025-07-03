'use client';
import Head from "next/head";
import Carousel from "../components/Carousel";
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

      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <nav className="flex justify-between items-center px-6 py-4">
          <img src="/logo-mabelle.svg" alt="MaBelle Logo" className="h-8" />
          <button className="border border-black dark:border-white px-4 py-2 rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            Agendar cita
          </button>
        </nav>
        <Carousel slides={slides} interval={5000} />
      </main>
    </>
  );
}
