"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "¿Cuánto tiempo de anticipación necesito para reservar mi vestido?",
        answer: "Recomendamos hacer la reserva con 3-6 meses de anticipación para bodas y quinceañeras, y 2-3 semanas para eventos especiales. Esto nos permite realizar ajustes perfectos y garantizar la disponibilidad del vestido que más te guste."
    },
    {
        question: "¿Realizan ajustes y modificaciones a los vestidos?",
        answer: "¡Por supuesto! Contamos con un equipo de costureras expertas que realizan ajustes personalizados para que tu vestido te quede perfecto. Los ajustes básicos están incluidos en el precio, y las modificaciones especiales tienen un costo adicional."
    },
    {
        question: "¿Qué tallas manejan en sus vestidos?",
        answer: "Trabajamos con tallas desde XS hasta 4XL. Además, muchos de nuestros vestidos pueden ser ajustados para adaptarse perfectamente a tu figura. En tu cita, nuestras asesoras te ayudarán a encontrar la talla ideal."
    },
    {
        question: "¿Puedo agendar una cita para probarse vestidos?",
        answer: "Sí, recomendamos agendar una cita para brindarte una atención personalizada. Puedes llamarnos al 311-133-26-15, enviarnos un WhatsApp al 311-233-17-51 o usar el botón 'Agendar cita' en nuestra página web."
    },
    {
        question: "¿Cuáles son sus métodos de pago?",
        answer: "Aceptamos efectivo, tarjetas de débito y crédito, transferencias bancarias y planes de pago flexibles. Para vestidos de alta gama, ofrecemos planes de financiamiento sin intereses para que puedas tener el vestido de tus sueños."
    },
    {
        question: "¿Tienen vestidos para alquiler o solo venta?",
        answer: "Ofrecemos ambas opciones. Contamos con vestidos para venta y una exclusiva colección para alquiler, perfecta para eventos especiales, graduaciones y fiestas. Los precios varían según el tipo de vestido y la duración del alquiler."
    },
    {
        question: "¿Qué incluye el servicio de asesoría de imagen?",
        answer: "Nuestro servicio incluye consultoría personalizada de estilo, recomendaciones de accesorios, consejos de maquillaje y peinado que complementen tu vestido. Te ayudamos a crear un look completo para que te sientas radiante en tu evento especial."
    },
    {
        question: "¿Tienen política de cambios o devoluciones?",
        answer: "Para vestidos de alquiler, realizamos cambios hasta 48 horas antes del evento (sujeto a disponibilidad). Para vestidos de venta, aceptamos cambios dentro de los primeros 7 días si el vestido no ha sido alterado y conserva todas sus etiquetas."
    }
];

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]); // Todas las preguntas expandidas por defecto

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(item => item !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-10xl mx-auto">
                {/* Título principal */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-600 mt-6 text-lg">
                        Resolvemos todas tus dudas para que encuentres el vestido perfecto
                    </p>
                </div>

                {/* Lista de preguntas */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-6xl mx-auto">
                    {/* Columna izquierda */}
                    <div className="flex-1 space-y-4">
                        {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => {
                            const isOpen = openItems.includes(index);

                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                                >
                                    {/* Pregunta */}
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                    >
                                        <span className="text-lg font-medium text-gray-800 pr-4 leading-relaxed">
                                            {item.question}
                                        </span>
                                        <div className={`
                                            flex-shrink-0 w-8 h-8 rounded-full bg-[#016a52]
                                            flex items-center justify-center text-white transition-transform duration-300
                                            ${isOpen ? 'rotate-180' : 'rotate-0'}
                                        `}>
                                            {isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                                        </div>
                                    </button>

                                    {/* Respuesta */}
                                    <div className={`
                                        overflow-hidden transition-all duration-300 ease-out
                                        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                    `}>
                                        <div className="px-6 pb-5 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed pt-4">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Columna derecha - solo en desktop */}
                    <div className="flex-1 space-y-4 hidden lg:block">
                        {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => {
                            const actualIndex = index + Math.ceil(faqData.length / 2);
                            const isOpen = openItems.includes(actualIndex);

                            return (
                                <div
                                    key={actualIndex}
                                    className="group bg-white rounded shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                                >
                                    {/* Pregunta */}
                                    <button
                                        onClick={() => toggleItem(actualIndex)}
                                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                    >
                                        <span className="text-lg font-medium text-gray-800 pr-4 leading-relaxed">
                                            {item.question}
                                        </span>
                                        <div className={`
                                            flex-shrink-0 w-8 h-8 rounded-full bg-[#016a52]
                                            flex items-center justify-center text-white transition-transform duration-300
                                            ${isOpen ? 'rotate-180' : 'rotate-0'}
                                        `}>
                                            {isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                                        </div>
                                    </button>

                                    {/* Respuesta */}
                                    <div className={`
                                        overflow-hidden transition-all duration-300 ease-out
                                        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                    `}>
                                        <div className="px-6 pb-5 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed pt-4">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center mt-12 p-8 bg-[#016a52] rounded-2xl text-white">
                    <h3 className="text-2xl font-semibold mb-3">
                        ¿Tienes más preguntas?
                    </h3>
                    <p className="mb-6 text-lg opacity-90">
                        Estamos aquí para ayudarte a encontrar el vestido perfecto
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+523111332615"
                            className="bg-white text-[#016a52] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                        >
                            Llamar ahora
                        </a>
                        <a
                            href="https://wa.me/523112331751"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#016a52] transition-colors duration-200"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}