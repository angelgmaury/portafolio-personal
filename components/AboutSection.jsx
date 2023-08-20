import React from "react";
import TitleSection from "./titleSection";

function AboutSection() {
  return (
    <section
      className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24"
      id="about"
    >
      <TitleSection title="Acerca De Mí" />
      <div className="text-zinc-300">
        <p className="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          recusandae harum aspernatur assumenda, molestias quae nihil amet dicta
          quisquam aperiam vero atque illo consequatur exercitationem, dolor rem
          dolores quasi ut?
        </p>
        <p className="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          recusandae harum
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
