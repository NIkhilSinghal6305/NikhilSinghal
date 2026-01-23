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

        {/* ================= MOBILE VIEW (Overlay on Image) ================= */}
        <div className="w-full flex flex-col gap-10 lg:hidden mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-full h-[280px] rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <span className="text-sm font-['Caveat'] opacity-80">
                  {project.id}
                </span>

                <h2 className="text-xl font-semibold font-['PT_Serif']">
                  {project.title}
                </h2>

                <p className="text-sm opacity-85 mt-2 line-clamp-3 font-['PT_Serif']">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 px-4 py-1 rounded-md text-sm"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-1 rounded-md text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW (OLD LAYOUT) ================= */}
        <div className="hidden lg:flex w-full flex-col gap-24 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex items-center gap-12 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-1/2 overflow-hidden rounded-xl">
                <img
                  className="w-full object-cover border-8 border-gray-600 rounded-xl
                             hover:scale-106 transition-all duration-500"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Content */}
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
