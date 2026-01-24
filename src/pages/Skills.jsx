import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import PageWrapper from "../components/PageWrapper";

const Skills = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pt-10 h-auto gap-19 px-4 md:pb-15">
        
        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-['Caveat']">
          My Skills
        </h1>

        {/* Icons */}
        <div className="flex flex-wrap justify-center gap-14 md:gap-20 max-w-6xl">

          <div className="icon-float text-orange-600">
            <FaHtml5 />
          </div>

          <div className="icon-float text-blue-600">
            <FaCss3Alt />
          </div>

          <div className="icon-float text-yellow-400">
            <SiJavascript />
          </div>

          <div className="icon-float text-blue-400">
            <FaReact />
          </div>

          <div className="icon-float text-teal-400">
            <SiTailwindcss />
          </div>       
          <div className="icon-float text-white">
            <FaGithub />
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
