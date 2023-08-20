import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaSass,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandVite, TbBrandRedux } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

export const skills = [
  {
    title: "Html",
    icon: <FaHtml5 size={40} />,
    nvl: "Avanzado",
  },
  {
    title: "Css",
    icon: <FaCss3Alt size={40} />,
    nvl: "Intermedio - Avanzado",
  },
  {
    title: "Sass",
    icon: <FaSass size={40} />,
    nvl: "Avanzado",
  },
  {
    title: "JS",
    icon: <RiJavascriptFill size={40} />,
    nvl: "Avanzado",
  },
  {
    title: "NodeJS",
    icon: <FaNodeJs size={40} />,
    nvl: "Basico - Intermedio",
  },
  {
    title: "ReactJS",
    icon: <FaReact size={40} />,
    nvl: "Intermedio - Avanzado",
  },
  {
    title: "Redux",
    icon: <TbBrandRedux size={40} />,
    nvl: "Intermedio - Avanzado",
  },
  {
    title: "Git",
    icon: <FaGitAlt size={40} />,
    nvl: "Intermedio - Avanzado",
  },
  {
    title: "Vite",
    icon: <TbBrandVite size={40} />,
    nvl: "Avanzado",
  },
  {
    title: "NextJS",
    icon: <TbBrandNextjs size={40} />,
    nvl: "Avanzado",
  },
];
