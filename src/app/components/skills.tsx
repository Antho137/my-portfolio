import React from "react";

const Skills = () => {
  const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Reactjs",
    "Bootstrap",
    "GitHub",
    "Taiwind.css",
    "Next.js",
    "Typescript",
  ];

  const skills = mySkills.map((skill, index) => {
    return (
      <li className="bg-blue-500 text-center text-xl text-white font-medium py-2 px-5 rounded-lg" key={index}>
        {skill}
      </li>
    );
  });

  return (
    <div className="bg-blue-300 text-center py-10 px-5 " id="my-skills">
      <h2 className="text-3xl text-orange-600 mb-5">
        Skills
      </h2>
      <div className="max-w-[960px] flex flex-wrap justify-center content-center gap-3 list-none mx-auto px-5">
        {skills}
      </div>
    </div>
  );
};

export default Skills;
