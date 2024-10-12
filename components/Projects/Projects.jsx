import { projects } from "@/utils/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-dark py-24 md:py-section bg-project bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-2xl mx-auto px-container xl:px-5">
        <header className="text-center mb-16 flex items-center justify-center flex-col">
          <div data-aos="fade-up" className="flex mb-7  items-center gap-2">
            <div className="w-5 h-[2px]  bg-ash"></div>
            <div className="text-sm font-bold text-ash uppercase">
              OUR SHOWCASE
            </div>
            <div className="w-5 h-[2px] bg-ash"></div>
          </div>
          <h2
            data-aos="fade-up"
            className="text-4xl text-white sm:text-5xl max-w-2xl mb-9 font-bold font-space_grotesk sm:leading-snug"
          >
            Check Our Latest Projects
          </h2>
        </header>
        <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-8">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
