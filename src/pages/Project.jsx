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
      <div className="w-full h-auto flex flex-col items-center gap-14 px-4 md:px-10">
        <h1 className="text-white text-5xl sm:text-5xl md:text-6xl font-bold py-10 font-['Caveat']">
          My Projects
        </h1>

        <div className="w-full flex flex-col gap-12 lg:hidden mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full bg-[#111] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover"
              />

              {/* Content */}
              <div className="p-5 text-white flex flex-col gap-3">
                <span className="text-xs tracking-widest font-['Caveat'] opacity-60">
                  {project.id}
                </span>

                <h2 className="text-2xl font-semibold font-['PT_Serif'] leading-tight">
                  {project.title}
                </h2>

                <p className="text-sm font-['PT_Serif'] opacity-85 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-red-600 py-2 rounded-lg
                       text-sm hover:bg-red-500 active:scale-95 transition"
                  >
                    Live
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-700 py-2 rounded-lg
                       text-sm hover:bg-gray-600 active:scale-95 transition"
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
              <div
                className="w-1/2 overflow-hidden rounded-xl border-4 border-gray-600
                              hover:border-red-500/60 transition-all duration-500"
              >
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
