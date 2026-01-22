import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import image from "../assets/Gemini_Generated_Image_6t83js6t83js6t83-removebg-preview.png";

const Home = () => {
  return (
    <div className="py-1 flex items-center justify-between w-full pb-2">
      <div className="text-white w-1/2 flex flex-col gap-6">
        <h3 className="text-4xl text-red-500 font-[Poppins] tracking-tight">
          Hello My name is
        </h3>

        <h1 className="text-7xl leading-tight">
          Nikhil Singhal. <br />
          <span>Frontend </span>
          <span className="font-light">Developer</span>
        </h1>

        <p className="text-xl font-light opacity-90 font-[Poppins]">
          I’m a frontend developer focused on building responsive, accessible,
          and performance-driven web interfaces. I enjoy turning ideas into
          interactive experiences using modern web technologies, with a strong
          emphasis on clean design and user experience.
        </p>

        {/* Social Icons */}
        <div className="flex gap-8 text-4xl">
          <a
            href="https://www.linkedin.com/in/nikhilsinghal6305"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/NIkhilSinghal6305"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:nikhilagarwal6305@gmail.com"
            className="hover:text-red-500 hover:scale-110 transition-all"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img
          src={image}
          alt="Nikhil illustration"
          className="w-[83vh] h-auto object-contain drop-shadow-2xl drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]"
        />
      </div>
      
      
    </div>
  );
};

export default Home;
