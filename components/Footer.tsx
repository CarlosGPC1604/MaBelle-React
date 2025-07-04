export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Información de contacto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center md:text-left">
                    {/* Dirección */}
                    <div className="space-y-1">
                        <h3 className="font-semibold text-gray-800 mb-2">Dirección</h3>
                        <a href="https://g.co/kgs/akxBa3u" className="text-sm hover:text-[#016a52] text-gray-600">
                            Av. del ejército #300.<br />
                            Col. Residencial La Loma.
                        </a>
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-1">
                        <h3 className="font-semibold text-gray-800 mb-2">Teléfono</h3>
                        <a 
                            href="tel:+523111332615" 
                            className="text-sm text-gray-600 hover:text-[#016a52] transition-colors duration-200"
                        >
                            311-133-26-15
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1">
                        <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
                        <a 
                            href="https://wa.me/523112331751" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-[#25d366] transition-colors duration-200"
                        >
                            311-233-17-51
                        </a>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-gray-300 pt-4">
                    <p className="text-sm text-gray-600 text-center">
                        <strong>© 2025 MaBelle</strong>. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}