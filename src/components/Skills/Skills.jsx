import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-8 text-center">Skills</h2>
    <div className="grid gap-10 sm:grid-cols-2">
      {SkillsInfo.map((category) => (
        <Tilt key={category.title}>
          <div className="bg-[#1e1e1e] bg-opacity-50 p-6 rounded-2xl border border-gray-600 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
