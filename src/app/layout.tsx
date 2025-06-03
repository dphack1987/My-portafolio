import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Parra - Cybersecurity Specialist & Full-Stack Developer",
  description: "Portfolio de David Parra - Especialista en Ciberseguridad y Desarrollador Full-Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <div className="min-h-screen bg-white">
            {children}
          </div>
          <footer className="bg-gray-50 py-8">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} David Parra. Todos los derechos reservados.</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
