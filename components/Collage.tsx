"use client";

import React, { useState } from "react";

interface CollageItem {
    image: string;
    title: string;
    description: string;
    alt?: string;
}

interface CollageProps {
    items: CollageItem[];
    title: string;
    titleFont?: string;
}

export default function Collage({ items, title, titleFont = "font-serif" }: CollageProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-12 px-4 md:py-16 md:px-6">
            <div className="max-w-10xl mx-auto">
                {/* Título principal */}
                <h2 className={`text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12 text-gray-800 ${titleFont}`}>
                    {title}
                </h2>

                {/* Collage responsive */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-1 h-auto md:h-[500px] lg:h-[600px]">
                    {items.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

                        return (
                            <div
                                key={index}
                                className={`
                  relative overflow-hidden cursor-pointer group
                  h-80 md:h-full
                  transition-all duration-500 ease-out
                  ${isHovered
                                        ? 'md:flex-[1.4]'
                                        : isOtherHovered
                                            ? 'md:flex-[0.8]'
                                            : 'md:flex-1'
                                    }
                `}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Imagen de fondo */}
                                <div
                                    className={`
                    absolute inset-0 bg-cover bg-center transition-all duration-500
                    ${isHovered ? 'brightness-[0.6]' : 'brightness-100'}
                  `}
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />

                                {/* Overlay gradiente (siempre visible en móvil) */}
                                <div
                                    className={`
                    absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
                    transition-opacity duration-300 ease-out
                    ${isHovered
                                            ? 'md:opacity-100 md:delay-400'
                                            : 'md:opacity-0 md:delay-0'
                                        }
                  `}
                                />

                                {/* Contenido de texto */}
                                <div
                                    className={`
                    absolute bottom-0 left-0 right-0 p-6 text-white
                    transform transition-all duration-300 ease-out
                    ${isHovered
                                            ? 'md:translate-y-0 md:opacity-100 md:delay-400'
                                            : 'md:translate-y-full md:opacity-0 md:delay-0'
                                        }
                  `}
                                >
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base opacity-90 leading-relaxed text-pretty">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Efecto de hover adicional */}
                                <div
                                    className={`
                    absolute inset-0 bg-black/20
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    hidden md:block
                  `}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
