import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import PageWrapper from "../components/PageWrapper";

const Skills = () => {
  return (
    <PageWrapper>
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 pb-8.5">
      <h1 className="text-white text-6xl font-bold font-['Caveat'] py-10">My Skills</h1>

      <div className="flex flex-wrap justify-evenly w-[80%] gap-20">
        <FaHtml5 className="text-8xl text-orange-600 m-4 hover:shadow-[0_0_80px_2px_rgba(120,50,10,0.5)] hover:scale-105" title="HTML5" />
        <FaCss3Alt className="text-8xl text-blue-600 m-4 hover:shadow-[0_0_80px_2px_rgba(200,200,255,0.5)] hover:scale-105" title="CSS3" />
        <SiJavascript className="text-8xl text-yellow-400 m-4 hover:shadow-[0_0_80px_-12px_rgba(255,215,0,0.5)] hover:scale-105" title="JavaScript" />
        <FaReact className="text-8xl text-blue-400 m-4 hover:shadow-[0_0_80px_2px_rgba(64,164,223,0.5)] hover:scale-105" title="React" />
        <SiTailwindcss className="text-8xl text-teal-400 m-4 hover:shadow-[0_0_80px_2px_rgba(99,179,237,0.5)] hover:scale-105" title="Tailwind CSS" />
        <FaNodeJs className="text-8xl text-green-600 m-4 hover:shadow-[0_0_80px_2px_rgba(76,175,80,1)] hover:scale-105" title="Node.js" />
        <SiExpress className="text-8xl text-gray-600 m-4 hover:shadow-[0_0_80px_2px_rgba(128,128,128,0.5)] hover:scale-105" title="Express.js" />
        <SiMongodb className="text-8xl text-green-800 m-4 hover:shadow-[0_0_80px_2px_rgba(76,175,80,1)] hover:scale-105" title="MongoDB" />
        <SiPostman className="text-8xl text-orange-500 m-4 hover:shadow-[0_0_80px_2px_rgba(255,165,0,0.5)] hover:scale-105" title="Postman" />
        <FaGithub className="text-8xl text-white m-4 hover:shadow-[0_0_80px_2px_rgba(255,255,255,1)] hover:scale-105" title="GitHub" />
      </div>
      </div>
      </PageWrapper>
  )
}

export default Skills