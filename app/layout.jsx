import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Angel Maury",
  description:
    "Desarrollador Frontend Junior creando experiencias cautivadoras. Explora mi portafolio para descubrir proyectos interactivos y diseños responsivos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
