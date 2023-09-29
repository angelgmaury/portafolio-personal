import netflixImg from "../public/images/netflix.png";
import ecomerceImg from "@/public/images/Ecommers.png";
import countriesInfoImg from "@/public/images/countriesPage.png";
import todoAppImg from "@/public/images/todo-app.png";
import multiFormImg from "@/public/images/multiForm.png";
import calculatorImg from "@/public/images/calculatorPage.png";
import WeatherAppImg from "@/public/images/WeatherApp.png";
export const projects = [
  {
    id: 1,
    imagen: ecomerceImg,
    title: "Tienda De Zapatillas",
    description:
      "Esta es una tienda de zapatillas. Los usuarios pueden explorar una variedad de zapatillas y realizar 'compras', cuenta con un carrito de compras y filtros para zapatos de mujer y hombre.",
    skills: ["React", "Tailwind", "Vite"],
    deploy: "https://angelgmaury.github.io/ecommerspage-react/",
    repo: "https://github.com/angelgmaury/ecommerspage-react",
  },
  {
    id: 2,
    imagen: WeatherAppImg,
    title: "Aplicación Del Clima",
    description:
      "La página del clima muestra información actualizada sobre el clima de diferentes ubicaciones en todo el mundo, incluyendo temperatura, humedad, velocidad del viento y condiciones actuales.",
    skills: ["React", "TS", "Zustand"],
    deploy: "https://angelgmaury.github.io/weatherApp/",
    repo: "https://github.com/angelgmaury/weatherApp",
  },
  {
    id: 3,
    imagen: netflixImg,
    title: "Clon De Netflix",
    description:
      "Este proyecto es un clon de la famosa plataforma de streaming, Netflix. Permite a los usuarios iniciar sesión y reproducir películas de manera parecida a la plataforma original.",
    skills: ["React", "Tailwind", "NextJs"],
    deploy: "https://netflix-clone-kyz222l0x-angelitomaury.vercel.app",
    repo: "https://github.com/angelitoMaury/NETFLIX-CLONE-NEXTJS",
  },
  {
    id: 4,
    imagen: countriesInfoImg,
    title: "Información De Países",
    description:
      "Esta aplicación proporciona información detallada sobre diferentes países. Los usuarios pueden buscar y obtener datos importantes sobre cualquier país, como su población, idioma, bandera y más.",
    skills: ["React", "Tailwind", "Vite"],
    deploy: "https://angelgmaury.github.io/REST-COUNTRIES-API-REACT/",
    repo: "https://github.com/angelgmaury/REST-COUNTRIES-API-REACT",
  },
  {
    id: 5,
    imagen: todoAppImg,
    title: "App De Tareas",
    description:
      "Esta aplicación de gestión de tareas permite a los usuarios crear y eliminar tareas de manera muy sencilla, manteniendo un seguimiento de sus actividades diarias de manera efectiva.",
    skills: ["React", "Tailwind", "Vite"],
    deploy: "https://angelgmaury.github.io/todo-app-react/",
    repo: "https://github.com/angelgmaury/todo-app-react",
  },
  {
    id: 6,
    imagen: multiFormImg,
    title: "Formulario Multiple",
    description:
      "Este proyecto proporciona un formulario interactivo y versátil que puede adaptarse a diversas necesidades de entrada de datos. Esta aplicación ofrece una experiencia de usuario intuitiva y atractiva.",
    skills: ["JavaScript", "Css", "Sass"],
    deploy: "http://multiformjs.surge.sh/",
    repo: "https://github.com/angelitoMaury/multi-form",
  },
  {
    id: 7,
    imagen: calculatorImg,
    title: "Calculadora",
    description:
      "Esta es una calculadora en línea. Ofrece funciones de cálculo básicas para ayudar a los usuarios a realizar operaciones matemáticas de manera eficiente.",
    skills: ["JavaScript", "Css", "Sass"],
    deploy: "http://calculatorprojectjs.surge.sh/",
    repo: "https://github.com/angelitoMaury/calculator-app",
  },
];
