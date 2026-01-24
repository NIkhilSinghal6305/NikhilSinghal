import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import image from "../assets/Gemini_Generated_Image_6t83js6t83js6t83-removebg-preview.png";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      {/* ================= MOBILE VIEW (Background Image) ================= */}
      <div className="relative md:hidden w-full h-auto py-32 flex items-center px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 text-white flex flex-col gap-6">
          <h3 className="text-3xl text-red-500 font-['Caveat']">
            Hello, my name is
          </h3>

          <h1 className="text-5xl leading-tight font-['PT_Serif']">
            Nikhil Singhal. <br />
            <span>Frontend </span>
            <span className="text-red-400 md:text-red-950">Developer</span>
          </h1>

          <p className="text-base leading-relaxed font-extralight opacity-90 font-['PT_Serif']">
            I'm a frontend developer focused on building responsive, accessible,
            and performance-driven web interfaces. I enjoy turning ideas into
            interactive experiences using modern web technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-4xl mt-4">
            <a
              href="https://www.linkedin.com/in/nikhilsinghal6305"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/NIkhilSinghal6305"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:nikhilagarwal6305@gmail.com"
              className="hover:text-red-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP / LAPTOP VIEW (ORIGINAL LAYOUT) ================= */}
      <div className="hidden md:flex pt-5 items-center justify-between w-full pb-1 px-10">
        {/* Left Content */}
        <div className="text-white w-1/2 flex flex-col gap-6">
          <h3 className="text-4xl text-red-500 font-['Caveat'] tracking-tight">
            Hello My name is
          </h3>

          <h1 className="text-7xl leading-tight font-['PT_Serif']">
            Nikhil Singhal. <br />
            <span>Frontend </span>
            <span className="text-red-500 md:text-red-850 opacity-60">
              Developer
            </span>
          </h1>

          <p className="text-lg font-extralight opacity-90 font-['PT_Serif']">
            I'm a frontend developer focused on building responsive, accessible,
            and performance-driven web interfaces. I enjoy turning ideas into
            interactive experiences using modern web technologies, with a strong
            emphasis on clean design and user experience.
          </p>

          {/* Social Icons */}
          <div className="flex gap-8 text-5xl">
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

        {/* Right Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt="Nikhil illustration"
            className="
    w-[83 vh]
    object-contain
    drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]
    hover:drop-shadow-[0_0_30px_rgba(255,0,0,0.45)]
    transition-all
    duration-300
  "
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
