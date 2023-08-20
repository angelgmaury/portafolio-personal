import netflixImg from "../public/images/netflix.png";
import ecomerceImg from "@/public/images/Ecommers.png";
import countriesInfoImg from "@/public/images/countriesPage.png";
import todoAppImg from "@/public/images/todo-app.png";
import multiFormImg from "@/public/images/multiForm.png";
import calculatorImg from "@/public/images/calculatorPage.png";

export const projects = [
  {
    id: 1,
    imagen: netflixImg,
    title: "Clon De Netflix",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Deserunt recusandae harum",
    skills: ["React", "Tailwind", "NextJs"],
    deploy: "https://netflix-clone-kyz222l0x-angelitomaury.vercel.app",
    repo: "https://github.com/angelitoMaury/NETFLIX-CLONE-NEXTJS",
  },
  {
    id: 2,
    imagen: ecomerceImg,
    title: "Tienda De Zapatillas",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Deserunt recusandae harum",
    skills: ["React", "Tailwind", "Vite"],
    deploy: "https://angelitomaury.github.io/ecommerspage-react/",
    repo: "https://github.com/angelitoMaury/ecommerspage-react",
  },
  {
    id: 3,
    imagen: countriesInfoImg,
    title: "Información De Países",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Deserunt recusandae harum",
    skills: ["React", "Tailwind", "Vite"],
    deploy: "https://angelitomaury.github.io/REST-COUNTRIES-API-REACT/",
    repo: "https://github.com/angelitoMaury/REST-COUNTRIES-API-REACT",
  },
  {
    id: 4,
    imagen: todoAppImg,
    title: "App De Tareas",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Deserunt recusandae harum",
    skills: ["React", "Tailwind", "Vite"],
    deploy: "https://angelitomaury.github.io/todo-app-react/",
    repo: "https://github.com/angelitoMaury/todo-app-react",
  },
  {
    id: 5,
    imagen: multiFormImg,
    title: "Formulario Multiple",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Deserunt recusandae harum",
    skills: ["JavaScript", "Css", "Sass"],
    deploy: "http://multiformjs.surge.sh/",
    repo: "https://github.com/angelitoMaury/multi-form",
  },
  {
    id: 6,
    imagen: calculatorImg,
    title: "Calculadora",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Deserunt recusandae harum",
    skills: ["JavaScript", "Css", "Sass"],
    deploy: "http://calculatorprojectjs.surge.sh/",
    repo: "https://github.com/angelitoMaury/calculator-app",
  },
];
