import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-8 text-center">
      Skills
    </h2>

    <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl p-8 shadow-lg">
      <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg sm:text-xl">
        {SkillsInfo.map((category) => (
          <li key={category.title}>
            <span className="font-semibold text-white">{category.title}:</span>{" "}
            {category.skills.map((skill, index) => (
              <span key={skill.name}>
                {skill.name}
                {index < category.skills.length - 1 ? ", " : ""}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
