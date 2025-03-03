import projects from "./Projects.json";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div
      id="projects-container"
      className="projects-container px-10 py-20 bg-slate-950"
      style={{ zIndex: 100, position: "relative" }}
    >
      {/* Subtle Animated Glow Effect in Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-sky-500/20 rounded-full blur-[120px] animate-pulse absolute -top-20 left-1/2 -translate-x-1/2"></div>
      </div>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-sky-400 text-center text-4xl sm:text-5xl font-extrabold mb-14 drop-shadow-lg"
      >
      <span className="text-white">Projects </span>
      </motion.h3>


      <div className="project-list flex flex-wrap gap-x-10 gap-y-16 justify-center">
        {/* console.log(projects) */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            Name={project.Name}
            Desc={project.Desc}
            GithubLink={project.GithubLink}
            Demo={project.Demo}
            ImgSrc={project.ImgSrc}
          />
        ))}
      </div>
    </div>
  );
}
