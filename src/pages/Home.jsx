import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import image from "../assets/Gemini_Generated_Image_6t83js6t83js6t83-removebg-preview.png";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <div
        className="min-h-full py-34 w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay Filter */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Content Over Background */}
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-red-500 font-['Caveat'] tracking-tight">
                Hello My name is
              </h3>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight font-['PT_Serif'] text-white">
                Nikhil Singhal. <br className="hidden sm:block" />
                <span>Frontend </span>
                <span className="font-light opacity-80">Developer</span>
              </h1>

              <p className="text-base sm:text-lg font-extralight opacity-90 font-['PT_Serif'] text-white">
                I'm a frontend developer focused on building responsive, accessible,
                and performance-driven web interfaces. I enjoy turning ideas into
                interactive experiences using modern web technologies, with a strong
                emphasis on clean design and user experience.
              </p>

              {/* Social Icons */}
              <div className="flex gap-8 text-4xl sm:text-5xl justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/nikhilsinghal6305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-500 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/NIkhilSinghal6305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-500 hover:scale-110 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:nikhilagarwal6305@gmail.com"
                  className="text-white hover:text-red-500 hover:scale-110 transition-all"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
