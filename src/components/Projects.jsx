import { Github} from "lucide-react";
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    technologies: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Thinura-dinuth/E-Commerce-Page",
  },
  {
    title: "Plane Ticket Management App",
    description:
      "A collaborative ticket management check and reserve a plane ticket",
    image: "https://plus.unsplash.com/premium_photo-1684407617579-e94c51a5a545?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Java"],
    githubUrl: "https://github.com/Thinura-dinuth/Plane-Ticket-Management-System",
  },
  {
    title: "University Progression Outcome Predictor",
    description:
      "A  program to predict progression outcomes at the end of each academic year.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python"],
    githubUrl: "https://github.com/Thinura-dinuth/University-Progression-Outcome-Predictor",
  },
];
const Projects = () => {
  return (
      <section id="projects" className="projects">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
              <div key={project.title} className="project-card">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                      <span key={tech} className="project-technology">
                  {tech}
                </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github className="w-4 h-4"/> Code
                  </a>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Projects;