import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Angel Maury",
  description:
    "Desarrollador Frontend Jr creando experiencias cautivadoras. Explora mi portafolio para descubrir proyectos interactivos y diseños responsivos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
