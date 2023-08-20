import { links } from "@/data/links";
import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

function Header() {
  return (
    <>
      <h1 className="font-extrabold text-4xl lg:text-5xl tracking-[-1px] lg:tracking-[0px] text-zinc-200">
        <a href="#home">Angel Maury</a>
      </h1>
      <h2 className="font-semibold mt-2 text-lg lg:text-xl lg:mt-4 text-zinc-300">
        Desarrollador Frontend Junior
      </h2>

      <p className="mt-4 max-w-sm lg:max-w-xs text-zinc-300 lg:mt-6 lg:text-lg">
        Conviertiendo Visiones en Realidad a Través de Desarrollo Web.
        Experiencias Profesionales que Dejan Huella.
      </p>

      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:mt-16 lg:gap-4">
        {links.map((link) => (
          <a
            href={link.url}
            key={link.id}
            className="flex items-center space-x-2"
          >
            <span className="border-t border-b border-zinc-100 h-0 w-8"></span>

            <span className="text-zinc-100 uppercase tracking-[1px] text-sm">
              {link.text}
            </span>
          </a>
        ))}
      </div>

      <div className="flex items-center mt-6 lg:mt-36 gap-6">
        <Link href="https://github.com/angelitoMaury" target="_blank">
          <AiOutlineGithub
            size={30}
            className="text-zinc-300 hover:text-zinc-50"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/angelg-maury/" target="_blank">
          <AiFillLinkedin
            size={30}
            className="text-zinc-300 hover:text-zinc-50"
          />
        </Link>
      </div>
    </>
  );
}

export default Header;
