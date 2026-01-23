import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <div className="w-full py-10 flex flex-col items-center gap-12 px-4 md:px-10">
        
        {/* Heading */}
        <h1 className="text-white font-bold text-4xl sm:text-5xl font-['Caveat']">
          Get In Touch
        </h1>

        <p className="text-white text-xl sm:text-2xl opacity-90 font-['Caveat']">
          Let's Connect
        </p>

        {/* Contact Info */}
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 max-w-5xl font-['PT_Serif']">
          
          <div className="flex flex-col items-center gap-2 text-center">
            <MdEmail className="text-5xl md:text-6xl text-red-600 hover:text-red-500 transition" />
            <p className="text-white text-lg opacity-80">Email</p>
            <p className="text-white text-sm md:text-lg opacity-80 break-all">
              nikhilagarwal6305@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <MdPhone className="text-5xl md:text-6xl text-red-600 hover:text-red-500 transition" />
            <p className="text-white text-lg opacity-80">Phone</p>
            <p className="text-white text-sm md:text-lg opacity-80">
              +91 9352941697
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <MdLocationOn className="text-5xl md:text-6xl text-red-600 hover:text-red-500 transition" />
            <p className="text-white text-lg opacity-80">Location</p>
            <p className="text-white text-sm md:text-lg opacity-80">
              Jaipur, Rajasthan
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full border-t border-amber-100 pt-8 pb-5 flex flex-col gap-4 max-w-6xl">
          
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-white font-bold font-['Caveat'] text-2xl sm:text-3xl">
              Nikhil Singhal
            </h1>

            <div className="flex gap-6 text-2xl sm:text-3xl text-white">
              <a target="blank" href="https://www.linkedin.com/in/nikhilsinghal6305/"><FaLinkedin className="hover:text-red-500 hover:scale-110 transition-all cursor-pointer" /></a>
              <a target="blank" href="https://github.com/NIkhilSinghal6305"><FaGithub className="hover:text-red-500 hover:scale-110 transition-all cursor-pointer" /></a>
              <a href="mailto:nikhilagarwal6305@gmail.com"><FaEnvelope className="hover:text-red-500 hover:scale-110 transition-all cursor-pointer" /></a>
            </div>
          </div>

          <p className="text-white opacity-60 text-xs sm:text-sm text-center font-['PT_Serif']">
            © 2026 Nikhil Singhal. All rights reserved.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
