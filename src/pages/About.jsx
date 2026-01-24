import image2 from "../assets/Gemini_Generated_Image_f6ur4sf6ur4sf6ur-removebg-preview.png";
import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <div className="relative w-full py-10 px-5 md:px-10 flex flex-col justify-between gap-10 overflow-hidden">
        
        {/* 🔥 Blurred Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-600/50 to-black blur-[50px] scale-105" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="inline-block bg-red-600 w-1 h-7 rounded-full"></span>
              <p className="text-white uppercase tracking-wider text-sm font-semibold font-['PT_Serif']">
                About Me
              </p>
            </div>

            <div className="text-white text-base md:text-lg font-light leading-relaxed opacity-90 space-y-5 font-['PT_Serif']">
              <p>
                I'm a <b className="text-red-500">frontend developer</b> focused on
                building responsive, accessible, and visually clean web interfaces.
                I enjoy turning ideas into smooth, interactive user experiences
                using modern web technologies.
              </p>

              <p>
                I work on creating user-friendly designs with a strong emphasis on
                performance, usability, and clean code. I enjoy refining small
                details that make interfaces{" "}
                <b className="text-red-500">intuitive and engaging</b>.
              </p>

              <p>
                Always eager to learn, I'm continuously improving my skills and
                exploring new tools to build better, more efficient digital
                experiences.
              </p>
            </div>

            <p className="text-white text-base md:text-lg tracking-wide opacity-80 rounded-2xl bg-zinc-600/80 backdrop-blur-md w-fit px-3 py-1 flex items-center gap-2 font-['PT_Serif']">
              <span className="inline-block bg-green-400 w-2 h-2 rounded-full"></span>
              Frontend Developer | B.Tech CSE Student
            </p>

            <div className="text-white text-base md:text-lg space-y-2 font-['PT_Serif']">
              <p>
                <span className="text-red-500 font-medium font-['Caveat'] text-xl md:text-2xl">
                  Specialities:
                </span>{" "}
                HTML, CSS, JavaScript, React, Tailwind CSS
              </p>
              <p>
                <span className="text-red-500 font-medium font-['Caveat'] text-xl md:text-2xl">
                  Passions:
                </span>{" "}
                Frontend Development, UI/UX, Open Source
              </p>
              <p>
                <span className="text-red-500 font-medium font-['Caveat'] text-xl md:text-2xl">
                  Currently:
                </span>{" "}
                Building projects & exploring modern frontend tools
              </p>
            </div>
          </div>

          {/* Image Section (Desktop Only) */}
          <div className="hidden lg:block w-1/2 h-[88vh]">
            <img
              src={image2}
              alt="About illustration"
              className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
            />
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
