import productive from "../assets/productive.png";
import recipe from "../assets/recipe.png";
import visitor from "../assets/visitor.png";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    id: "01",
    title: "Productive Dashboard",
    description:
      "A modern productivity dashboard that helps users manage daily tasks, set goals, and maintain focus through an integrated to-do list, planner, motivational quotes, and a Pomodoro timer — designed to improve consistency and time management.",
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
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-white text-6xl font-bold py-10 font-['Caveat']">
          My Projects
        </h1>

        <div className="w-full flex flex-col justify-center items-center gap-20 mb-10">
          {projects.map((project) => (
            <div key={project.id} className="flex gap-10 w-full">
              {project.id % 2 !== 0 && (
                <div className="w-1/2 overflow-hidden">
                  <img
                    className="object-contain border-8 border-gray-600 hover:scale-105 transition-transform duration-300"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              )}

              <div className="flex flex-col gap-3 w-1/2 justify-evenly">
                <h1 className="text-5xl text-white font-['Caveat']">
                  {project.id}
                </h1>
                <h1 className="text-white text-5xl font-['PT_Serif']">
                  {project.title}
                </h1>
                <p className="text-white font-light font-['PT_Serif']">
                  {project.description}
                </p>

                <div className="flex gap-5">
                  <a
                    className="bg-red-600 text-white w-fit px-4 py-1 text-xl mt-5 rounded-lg hover:bg-red-500 transition-all duration-300 font-['PT_Serif']"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    className="bg-gray-600 text-white w-fit px-4 py-1 text-xl mt-5 rounded-lg hover:bg-gray-500 transition-all duration-300 font-['PT_Serif']"
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {project.id % 2 === 0 && (
                <div className="w-1/2 overflow-hidden">
                  <img
                    className="object-contain border-8 border-gray-600 hover:scale-105 transition-transform duration-300"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Project;
