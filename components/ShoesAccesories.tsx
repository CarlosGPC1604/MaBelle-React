import React from 'react';

const ShoesAccesories: React.FC = () => {
    const titleFont = "font-serif";
    
    const images = [
        {
            src: '/Zapato1.webp',
            alt: 'Zapatos elegantes'
        },
        {
            src: '/Zapato2.webp',
            alt: 'Calzado casual'
        },
        {
            src: '/Zapato3.webp',
            alt: 'Accesorios de moda'
        }
    ];

    return (
        <section className="shoes-accessories pt-10 pb-4  px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-gray-800 ${titleFont}`}>
                    También Contamos con Accesorios y Zapatos
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Completa tu look con nuestra selección de calzado y accesorios de alta calidad
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShoesAccesories;