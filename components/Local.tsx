"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LocalProps {
    title?: string;
    titleFont?: string;
}

export default function Local({ 
    title = "Conoce Nuestro Local", 
    titleFont = "font-serif" 
}: LocalProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const localImages = [
        {
            src: "/Mabelle2.jpeg",
            alt: "Vista interior del local MaBelle - Área principal",
            caption: "Área Principal"
        },
        {
            src: "/Local/3.webp", 
            alt: "Vista interior del local MaBelle - Zona de productos",
            caption: "Zona de Productos"
        },
        {
            src: "/Mabelle1.jpeg",
            alt: "Vista interior del local MaBelle - Espacio de atención",
            caption: "Espacio de Atención"
        },
        {
            src: "/Local/1.webp",
            alt: "Vista interior del local MaBelle - Ambiente completo",
            caption: "Ambiente Completo"
        }
    ];

    return (
        <section className="py-12 px-4 md:py-16 md:px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Título principal */}
                <h2 className={`text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-gray-800 ${titleFont}`}>
                    {title}
                </h2>

                {/* Descripción opcional */}
                <p className="text-center text-gray-600 mb-8 md:mb-8 max-w-2xl mx-auto text-lg">
                    Te invitamos a conocer nuestro acogedor espacio donde encontrarás los mejores productos de belleza y cuidado personal. <b>Visítanos en Av. del Ejército #300, Col. Residencial La Loma.</b>
                </p>

                {/* Layout optimizado para imágenes horizontales 16:9 */}
                <div className="space-y-6 md:space-y-8">
                    {/* Imagen principal - Grande horizontal */}
                    <div
                        className={`
                            relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group
                            w-full aspect-video
                            transition-all duration-500 ease-out
                            ${hoveredIndex === 0 ? 'transform scale-[1.01] shadow-2xl z-10' : 'hover:shadow-2xl'}
                        `}
                        onMouseEnter={() => setHoveredIndex(0)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={localImages[0].src}
                            alt={localImages[0].alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="100vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>

                    {/* Grid de 3 imágenes horizontales */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {localImages.slice(1).map((image, index) => {
                            const imageIndex = index + 1;
                            return (
                                <div
                                    key={imageIndex}
                                    className={`
                                        relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group
                                        w-full aspect-video
                                        transition-all duration-500 ease-out
                                        ${hoveredIndex === imageIndex ? 'transform scale-[1.02] shadow-2xl z-10' : 'hover:shadow-2xl'}
                                    `}
                                    onMouseEnter={() => setHoveredIndex(imageIndex)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}