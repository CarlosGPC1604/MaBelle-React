"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/ocultar botón según el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para ir al top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`
        fixed bottom-6 left-6 z-40
        w-12 h-12 bg-white border border-gray-200
        text-gray-600 rounded-full shadow-lg
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:shadow-xl hover:scale-110 hover:bg-gray-50 hover:text-gray-800
        active:scale-95
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8 pointer-events-none'
        }
      `}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}
