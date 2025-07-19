"use client";

import React from "react";

interface MotivationCard {
    title: string;
    description: string;
    image: string;
    position: "left" | "right";
}

const motivationCards: MotivationCard[] = [
    {
        title: "Haz realidad tu vestido soñado",
        description: "Sentirte tú misma, pero más radiante. Con cada prueba, no solo encuentras un vestido, encuentras una emoción: la certeza de que será inolvidable y perfecto para ti. Todo está pensado para que disfrutes este momento.",
        image: "Foto1.webp",
        position: "left"
    },
    {
        title: "Cada diseño tiene una historia",
        description: "La experiencia incluye acceso a colecciones internacionales, asesoría personalizada y pruebas en privado. No necesitas viajar ni recorrer cientos de tiendas: todo lo que necesitas está reunido aquí.",
        image: "Foto2.webp",
        position: "right"
    }
];

export default function MotivationSection() {
    return (
        <section className="py-8 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {motivationCards.map((card, index) => (
                    <div
                        key={index}
                        className={`
              flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20 last:mb-0
              ${card.position === "right" ? "lg:flex-row-reverse" : ""}
            `}
                    >
                        {/* Imagen */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                {/* Imagen principal */}
                                <div
                                    className="aspect-[4/5] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                />

                                {/* Overlay decor   ativo */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                {/* Elemento decorativo flotante */}
                                <div className={`
                  absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#016a52] to-[#02a26d] rounded-full opacity-20 blur-xl
                  ${card.position === "right" ? "-left-6 -right-auto" : ""}
                `} />

                                {/* Segundo elemento decorativo */}
                                <div className={`
                  absolute -bottom-8 w-32 h-32 bg-gradient-to-br from-[#02a26d] to-[#016a52] rounded-full opacity-10 blur-2xl
                  ${card.position === "right" ? "-right-8" : "-left-8"}
                `} />
                            </div>
                        </div>

                        {/* Contenido de texto */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            {/* Línea decorativa */}
                            <div className={`
                w-16 h-1 bg-gradient-to-r from-[#016a52] to-[#02a26d] rounded-full
                ${card.position === "right" ? "lg:ml-auto" : ""}
              `} />

                            {/* Título */}
                            <h2 className={`
                text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight
                ${card.position === "right" ? "lg:text-right" : ""}
              `}>
                                {card.title}
                            </h2>

                            {/* Descripción */}
                            <p className={`
                text-lg text-gray-600 leading-relaxed max-w-lg
                ${card.position === "right" ? "lg:text-right lg:ml-auto" : ""}
              `}>
                                {card.description}
                            </p>

                            {/* Elemento decorativo de texto */}
                            <div className={`
                flex items-center gap-3 pt-4 sm:invisible
                ${card.position === "right" ? "lg:justify-end" : ""}
              `}>
                                <div className="w-2 h-2 bg-[#016a52] rounded-full" />
                                <div className="w-4 h-1 bg-gradient-to-r from-[#016a52] to-[#02a26d] rounded-full" />
                                <div className="w-2 h-2 bg-[#02a26d] rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Sección de call to action sutil */}
                <div className="text-center mt-20 pt-16 border-t border-gray-100">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">
                            Tu momento perfecto te está esperando
                        </h3>
                        <p className="text-gray-600 text-lg mb-8">
                            Descubre por qué cada novia que nos visita dice que fue la mejor decisión que pudo tomar
                        </p>

                        {/* Botón elegante */}
                        <a
                            href="https://wa.me/523112331751"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#016a52] to-[#02a26d] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <span>✨</span>
                            Agenda tu experiencia
                            <span>💫</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
