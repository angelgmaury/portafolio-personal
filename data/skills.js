import { TbBrandNextjs, TbBrandVite, TbBrandTailwind } from "react-icons/tb";
import { BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { SiJest, SiTestinglibrary, SiExpress, SiMysql } from "react-icons/si";

import {
  DiHtml5,
  DiCss3,
  DiGit,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";

export const skills = [
  {
    title: "Html",
    icon: <DiHtml5 size={40} />,
  },
  {
    title: "Css",
    icon: <DiCss3 size={40} />,
  },
  {
    title: "JS",
    icon: <DiJavascript1 size={40} />,
  },
  {
    title: "Sass",
    icon: <DiSass size={40} />,
  },
  {
    title: "NodeJS",
    icon: <DiNodejsSmall size={40} />,
  },
  {
    title: "Express",
    icon: <SiExpress size={40} />,
  },
  {
    title: "MySQL",
    icon: <SiMysql size={40} />,
  },
  {
    title: "ReactJS",
    icon: <DiReact size={40} />,
  },
  {
    title: "TypeScript",
    icon: <BiLogoTypescript size={40} />,
  },
  {
    title: "Jest",
    icon: <SiJest size={40} />,
  },
  {
    title: "Testing Library",
    icon: <SiTestinglibrary size={40} />,
  },
  {
    title: "Redux",
    icon: <BiLogoRedux size={40} />,
  },
  {
    title: "Tailwind",
    icon: <TbBrandTailwind size={40} />,
  },
  {
    title: "Git",
    icon: <DiGit size={40} />,
  },
  {
    title: "Vite",
    icon: <TbBrandVite size={40} />,
  },
  {
    title: "NextJS",
    icon: <TbBrandNextjs size={40} />,
  },
];
