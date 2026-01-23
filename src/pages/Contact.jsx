import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>

    <div className="w-full py-10 flex flex-col items-center gap-12">
      
      <h1 className="text-white font-bold text-5xl font-['Caveat']">
        Get In Touch
      </h1>

      <p className="text-white text-2xl opacity-90 font-['Caveat']">
        Let's Connect
      </p>

      <div className="w-full flex justify-around items-center px-60 font-['PT_Serif']">
        
        <div className="flex flex-col items-center gap-1">
          <MdEmail className="text-white text-6xl fill-red-600 hover:fill-red-500" />
          <p className="text-white text-lg opacity-80">Email</p>
          <p className="text-white text-lg opacity-80">
            nikhilagarwal6305@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <MdPhone className="text-white text-6xl fill-red-600 hover:fill-red-500" />
          <p className="text-white text-lg opacity-80">Phone</p>
          <p className="text-white text-lg opacity-80">
            +91 9352941697
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <MdLocationOn className="text-white text-6xl fill-red-600 hover:fill-red-500" />
          <p className="text-white text-lg opacity-80">Location</p>
          <p className="text-white text-lg opacity-80">
            Jaipur, Rajasthan
          </p>
        </div>
      </div>

      <div className="w-full border-t border-amber-100 pt-8 pb-5 flex flex-col gap-4">
        
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white font-bold font-['Caveat'] text-3xl">
            Nikhil Singhal
          </h1>

          <div className="flex gap-9 text-3xl text-white">
            <FaLinkedin className="hover:text-red-500 hover:scale-110 transition-all" />
            <FaGithub className="hover:text-red-500 hover:scale-110 transition-all" />
            <FaEnvelope className="hover:text-red-500 hover:scale-110 transition-all" />
          </div>
        </div>

        <p className="text-white opacity-60 text-sm text-center font-['PT_Serif']">
          © 2026 Nikhil Singhal. All rights reserved.
        </p>
      </div>
      </div>
    </PageWrapper>

  );
};

export default Contact;