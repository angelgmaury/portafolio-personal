"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import React, { useState } from "react";
import TitleSection from "./TitleSection";
import { FiArrowUpRight } from "react-icons/fi";
import { GoRepoForked } from "react-icons/go";
import Link from "next/link";

function ProjectsSection() {
  const [isHover, setIsHover] = useState(null);
  return (
    <section id="projects">
      <TitleSection title="Proyectos" />
      <div className="flex flex-col gap-16 text-white mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col gap-3 transition-opacity duration-300 ${
              isHover === project.id ? "md:opacity-100" : "md:opacity-70"
            }`}
            onMouseEnter={() => setIsHover(project.id)}
            onMouseLeave={() => setIsHover(null)}
          >
            <Link href={project.deploy} target="_blank">
              <h2
                className={`font-semibold uppercase text-xl flex items-center tracking-wide cursor-pointer ${
                  isHover === project.id ? "text-[#62abeb]" : "text-zinc-200"
                }`}
              >
                {project.title}
                <FiArrowUpRight
                  className={`relative ${
                    isHover === project.id
                      ? "-top-0.5 left-0.5 transition-transform"
                      : ""
                  }`}
                />
              </h2>
            </Link>

            <Link href={project.deploy} target="_blank">
              <Image
                src={project.imagen}
                alt={project.title}
                height={250}
                width={470}
                className={`rounded-md w-full border-2 border-[#302f30a7] ${
                  isHover === project.id ? "border-[#9191913b]" : ""
                }`}
              />
            </Link>

            <p className="text-sm lg:text-lg text-zinc-300">
              {project.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-4">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[#62abeb] font-semibold bg-[#144272] bg-opacity-40 px-3 py-1 rounded-2xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href={project.repo}
                target="_blank"
                className="flex items-center gap-1 text-zinc-400 hover:text-zinc-100"
              >
                <GoRepoForked className="text-[#62abeb] text-xl" />
                <span className="text-sm relative top-[1px]">CÓDIGO</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
