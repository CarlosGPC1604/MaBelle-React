import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from '../components/NavBar';
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaBelle - Vestidos de Novia, Quinceañeras y Fiestas | Momentos Únicos",
  description: "Descubre vestidos únicos para novias, quinceañeras y eventos especiales en MaBelle. Diseños exclusivos que harán de tu momento especial una experiencia unforgettable. Bodas, graduaciones y celebraciones.",
  keywords: "vestidos de novia, vestidos de quinceañera, vestidos de fiesta, bodas, graduaciones, eventos especiales, MaBelle, vestidos elegantes, diseños exclusivos",
  authors: [{ name: "MaBelle" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://mabelle.com/",
    title: "MaBelle - Vestidos de Novia, Quinceañeras y Fiestas",
    description: "Vestidos únicos para momentos especiales. Encuentra el vestido perfecto para bodas, quinceañeras y eventos especiales en MaBelle.",
    images: [
      {
        url: "/paginamabelle.webp",
        width: 1200,
        height: 630,
        alt: "MaBelle - Vestidos elegantes",
      },
    ],
    siteName: "MaBelle",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaBelle - Vestidos de Novia, Quinceañeras y Fiestas",
    description: "Vestidos únicos para momentos especiales. Encuentra el vestido perfecto para bodas, quinceañeras y eventos especiales en MaBelle.",
    images: ["/paginamabelle.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "MX",
    "geo.placename": "México",
    "apple-mobile-web-app-title": "MaBelle",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "MaBelle",
              "description": "Tienda especializada en vestidos de novia, quinceañeras y eventos especiales",
              "url": "https://mabelle.com",
              "telephone": "+523112331751",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MX"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://wa.me/523112331751"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
