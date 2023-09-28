import { skills } from "@/data/skills";
import { Icon } from "./Icon";
function SkillComponent() {
  return (
    <>
      <section className="mb-8 scroll-mt-16 md:mb-12 lg:mb-18 lg:scroll-mt-24 mt-10">
        <div className="grid grid-cols-4 gap-8 md:gap-10 mb-20 flex-wrap">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center gap-1">
              <Icon iconName={skill.icon} />
              <h3 className="text-zinc-400 uppercase text-sm text-center">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SkillComponent;
