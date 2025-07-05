"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "¿Y si no encuentro el vestido que me gusta?",
        answer: "Te ayudamos a probar diferentes estilos y cortes hasta encontrar ese que te emociona. Nuestro catálogo es muy amplio, con piezas únicas que no verás en otras tiendas."
    },
    {
        question: "¿Y si me enamoro de un vestido pero no me queda?",
        answer: "Todos los vestidos se ajustan a tu medida o se ordena en tu talla con nuestros proveedores. Nuestro equipo especializado hace las pruebas necesarias para que el vestido se sienta como si hubiera sido hecho para ti."
    },
    {
        question: "¿Cuánto tiempo antes debo agendar mi cita?",
        answer: "Para vestidos de novia, lo ideal es agendar tu cita al menos 6 meses antes del evento. Así tendrás tiempo para vivir la experiencia completa sin prisas."
    },
    {
        question: "¿Puedo llevar acompañantes a mi cita?",
        answer: "Claro que sí. Sabemos lo importante que es compartir este momento con las personas que amas. Puedes traer a tu mamá, amigas o quien desees. Recomendamos a máximo 5 personas."
    },
    {
        question: "¿Sus vestidos están disponibles en renta o solo venta?",
        answer: "Tenemos línea de renta en vestidos de noche, tus invitadas los amarán"
    },
    {
        question: "¿Cuentan con accesorios para el look completo?",
        answer: "Contamos con todo tipo de accesorios desde calzado, velos y mantillas, tocados, aretes, arras, lazos y todo lo que necesitas en un solo lugar."
    },
    {
        question: "¿Puedo apartar mi vestido y pagarlo en partes?",
        answer: "Sí. Puedes apartarlo con una parte del total y cubrirlo a plazos durante 4 meses. También aceptamos pagos con tarjeta de crédito."
    },
    {
        question: "¿Y si al final no quiero el vestido?",
        answer: "Si cancelas con más de 10 días de anticipación, te devolvemos el 80% en monedero electrónico para futuras compras o servicios."
    },
    {
        question: "¿La cita tiene algún costo?",
        answer: "Las citas no tienen ningún costo ni compromiso, ven con la tranquilidad de disfrutar la experiencia."
    },
    {
        question: "¿Puedo ver los modelos antes de agendar cita?",
        answer: "Puedes conocer parte de nuestras colecciones en redes sociales, pero la experiencia completa y personalizada solo sucede al agendar tu cita. Ahí es donde la magia comienza."
    }
];

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // Todas las preguntas expandidas por defecto

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
            </div>
        </section>
    );
}