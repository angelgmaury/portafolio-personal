import React from "react";
import TitleSection from "./titleSection";

function AboutSection() {
  return (
    <section
      className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24"
      id="about"
    >
      <TitleSection title="Acerca De Mí" />
      <div className="text-zinc-400">
        <p className="mt-2 leading-[1.6rem]">
          Soy un desarrollador web frontend Jr con una fuerte pasión por la
          programación y un <b>compromiso firme con la mejora continua</b>. Mi
          motivación radica en abordar proyectos desafiantes y en{" "}
          <b>adquirir constantemente nuevos conocimientos</b>. Mi experiencia se
          ha forjado en la creación de proyectos personales, y mi ambición es
          buscar oportunidades que enriquezcan tanto mi crecimiento profesional
          como mi desarrollo personal.
        </p>

        <p className="mt-6 leading-[1.6rem]">
          Mi{" "}
          <b>
            objetivo es avanzar como desarrollador web frontend y aspirar a ser
            un desarrollador FullStack
          </b>
          . Mi enfoque actual es <b>React</b>, pero estoy abierto a aprender
          nuevas tecnologías para mejorar la experiencia del usuario.
        </p>
        <p className="mt-6 leading-[1.6rem]">
          Constantemente busco oportunidades para mejorar mis habilidades y
          contribuir de manera efectiva a los desafíos. Mi dedicación al
          aprendizaje continuo y la excelencia me impulsan a mantener un alto
          nivel de rendimiento y mantenerme al tanto de las últimas tendencias
          en desarrollo web .
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
