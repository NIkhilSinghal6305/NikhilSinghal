import productive from "../assets/productive.png";
import recipe from "../assets/recipe.png";
import visitor from "../assets/visitor.png";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    id: "01",
    title: "Productive Dashboard",
    description:
      "A modern productivity dashboard that helps users manage daily tasks, set goals, and maintain focus through an integrated to-do list, planner, motivational quotes, and a Pomodoro timer.",
    image: productive,
    live: "https://nikhil-productivity-dashboard.vercel.app/",
    code: "https://github.com/NIkhilSinghal6305/ProductiveDashboard",
  },
  {
    id: "02",
    title: "Visitor Management System",
    description:
      "A comprehensive visitor management system that allows users to register visitors, track their visits, and generate reports — designed to streamline visitor check-in processes and improve security.",
    image: visitor,
    live: "https://visitor-management-system-sandy.vercel.app/",
    code: "https://github.com/NIkhilSinghal6305/Visitor-management-System",
  },
  {
    id: "03",
    title: "Your Personal Recipe Book",
    description:
      "A simple and responsive recipe website that allows users to browse and explore recipes with an easy-to-use interface.",
    image: recipe,
    live: "https://recipes-bice-nu.vercel.app/",
    code: "https://github.com/NIkhilSinghal6305/Recipes",
  },
];

const Project = () => {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center gap-14 px-4 md:px-10">
        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold py-10 font-['Caveat']">
          My Projects
        </h1>

        {/* ================= MOBILE VIEW (BLUR ONLY) ================= */}
        <div className="w-full flex flex-col gap-16 lg:hidden mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden"
            >
              {/* BLURRED IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full scale-110 blur-[1px]"
              />

              {/* SHARP CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-['Caveat'] opacity-80">
                  {project.id}
                </span>

                <h2 className="text-2xl font-semibold font-['PT_Serif']">
                  {project.title}
                </h2>

                <p className="text-sm opacity-90 mt-2 line-clamp-3 font-['PT_Serif']">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 px-4 py-1.5 rounded-md text-sm hover:bg-red-500 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-1.5 rounded-md text-sm hover:bg-gray-600 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
        <div className="hidden lg:flex w-full flex-col gap-24 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex items-center gap-12 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2 overflow-hidden rounded-xl border-4 border-gray-600
                              hover:border-red-500/60 transition-all duration-500">
                <img
                  className="w-full h-auto object-contain rounded-lg
                             hover:scale-105 transition-transform duration-500"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="w-1/2 flex flex-col gap-4">
                <h1 className="text-4xl text-white font-['Caveat']">
                  {project.id}
                </h1>

                <h2 className="text-white text-4xl font-['PT_Serif']">
                  {project.title}
                </h2>

                <p className="text-white font-light text-base font-['PT_Serif'] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-4">
                  <a
                    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-500 transition"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition"
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Project;
