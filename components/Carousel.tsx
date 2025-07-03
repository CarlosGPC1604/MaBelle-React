'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface Slide {
    image: string;
    title: string;
    subtitle: string;
}

interface CarouselProps {
    slides: Slide[];
    interval?: number;
}

export default function Carousel({ slides, interval = 5000 }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
            interval
        );
        return () => resetTimeout();
    }, [current, interval]);

    return (
        <div className="relative w-full h-[90vh] overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="w-full flex-shrink-0 relative h-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            style={{ objectFit: "cover" }}
                            priority={i === 0}
                            className="brightness-75"
                            unoptimized={true}
                            onError={(e) => {
                                console.error('Error loading image:', slide.image);
                                // Fallback to a different placeholder service
                                e.currentTarget.src = `https://picsum.photos/1000/600?random=${i}`;
                            }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                            <h2
                                className="text-white text-4xl md:text-5xl font-bold mb-4"
                                style={{ fontFamily: "Oranienbaum, serif" }}
                            >
                                {slide.title}
                            </h2>
                            <p
                                className="text-white text-lg md:text-xl"
                                style={{ fontFamily: "Heist, sans-serif" }}
                            >
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 w-full max-w-[300px] px-4">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className="relative flex-1 h-1 bg-white/40 cursor-pointer overflow-hidden"
                        onClick={() => setCurrent(i)}
                    >
                        <div
                            className={`absolute top-0 left-0 h-full bg-white transition-all duration-[${interval}ms] ${current === i ? "w-full" : "w-0"
                                }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
