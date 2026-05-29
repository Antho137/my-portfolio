const Skills = () => {
  const mySkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Reactjs",
    "Bootstrap",
    "Taiwind.css",
  ];

  const skills = mySkills.map((skill, index) => {
    return (
      <li 
        className="bg-blue-500 text-center text-xl text-white font-medium pt-1 pb-2 px-5 rounded-lg" key={index}
      >
        {skill}
      </li>
    );
  });

  return (
    <div className="bg-blue-300 text-center pt-5 pb-10 px-5 md:py-10 md:pb-15">
      <h2 className="text-3xl text-orange-600 mb-5">
        Skills
      </h2>
      <div className="max-w-[960px] flex flex-wrap justify-center items-center gap-3 list-none mx-auto md:px-5">
        {skills}
      </div>
    </div>
  );
};

export default Skills;
