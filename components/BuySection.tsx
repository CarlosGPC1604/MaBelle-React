"use client";

import React from "react";
import { FaCalendarCheck, FaHeart, FaMagic } from "react-icons/fa";

interface ProcessStep {
    step: number;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const processSteps: ProcessStep[] = [
    {
        step: 1,
        icon: <FaCalendarCheck className="text-2xl" />,
        title: "Coordina tu visita personalizada",
        description: "Agendamos contigo un espacio exclusivo para que vivas esta experiencia sin prisas ni distracciones."
    },
    {
        step: 2,
        icon: <FaHeart className="text-2xl" />,
        title: "Descubre el vestido que te elige",
        description: (
            <>
                Te ayudamos a probar diferentes cortes y estilos hasta que tu corazón diga: <strong>es este.</strong>
            </>
        )
    },
    {
        step: 3,
        icon: <FaMagic className="text-2xl" />,
        title: "Le damos el toque final para que brilles",
        description: "Nos aseguramos de que el vestido te quede perfectamente a tu medida, que el vestido se sienta como parte de ti."
    }
];

export default function BuySection() {
    return (
        <section className="py-4 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* Título principal */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4">
                        Proceso de Compra
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Vive la experiencia de elegir tu vestido en tres pasos sencillos
                    </p>
                </div>

                {/* Pasos del proceso */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Línea conectora (solo visible en desktop) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#016a52] to-[#02a26d] transform translate-x-8 z-0">
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#02a26d] border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                                </div>
                            )}

                            {/* Tarjeta del paso */}
                            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#016a52]/20">
                                {/* Número del paso */}
                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#016a52] to-[#02a26d] rounded-full text-white font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    {step.step}
                                </div>

                                {/* Icono */}
                                <div className="flex items-center justify-center text-[#016a52] mb-4 group-hover:text-[#02a26d] transition-colors duration-300">
                                    {step.icon}
                                </div>

                                {/* Contenido */}
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Efecto hover decorativo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#016a52]/5 to-[#02a26d]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-[#016a52] to-[#02a26d] rounded-2xl p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                            ¿Lista para comenzar tu historia?
                        </h3>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Agenda tu cita personalizada y descubre el vestido que te está esperando
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+523111332615"
                                className="bg-white text-[#016a52] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg"
                            >
                                📞 Llamar ahora
                            </a>
                            <a
                                href="https://wa.me/523112331751"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#016a52] transition-colors duration-200 text-lg"
                            >
                                💬 WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
