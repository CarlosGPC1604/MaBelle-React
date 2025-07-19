"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import React, { useState, useEffect } from "react";


export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < 10) {
                // Siempre mostrar la navbar en la parte superior
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolleando hacia abajo - ocultar navbar
                setIsVisible(false);
            } else {
                // Scrolleando hacia arriba - mostrar navbar
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-4 left-4 right-4 z-50 flex justify-between items-center bg-white/75 backdrop-blur-md shadow-lg border border-gray-200/50 rounded-xl px-4 py-3 md:px-6 md:py-4 transition-all duration-300 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
            <a href="/" className="flex items-center space-x-2 md:space-x-3">
                <img src="/logo-mabelle.svg" alt="MaBelle Logo" className="h-6 md:h-8 transform transition duration-150 hover:scale-105" />
            </a>
            <div className="flex items-center space-x-1 md:space-x-2">
                <a href="https://www.facebook.com/profile.php?id=100072275331516" title="Facebook Link" target="_blank" rel="external noopener" className="text-neutral-700 px-2 py-2 md:px-3 md:py-2 hover:text-[#0866ff] transition">
                    <FaFacebook className="text-xl md:text-2xl" />
                </a>
                <a href="https://www.instagram.com/mabelle.novias/" title="Instagram Link" target="_blank" rel="external noopener" className="text-neutral-700 px-2 py-2 md:px-3 md:py-2 hover:text-[#ff0e5d] transition">
                    <FaInstagram className="text-xl md:text-2xl" />
                </a>
                <button className="hidden sm:block rounded px-3 py-1 md:px-2 md:py-2 bg-[#016a52] hover:bg-[#335a51] hover:text-white transition text-sm md:text-base ml-2 md:ml-4">
                    Agendar cita
                </button>
            </div>
        </nav>
    );
};
