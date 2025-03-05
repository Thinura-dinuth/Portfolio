import { Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Thinura-dinuth/E-Commerce-Page",
  },
  {
    title: "Plane Ticket Management App",
    description: "A collaborative ticket management check and reserve a plane ticket",
    image: "https://plus.unsplash.com/premium_photo-1684407617579-e94c51a5a545",
    technologies: ["Java"],
    githubUrl: "https://github.com/Thinura-dinuth/Plane-Ticket-Management-System",
  },
  {
    title: "University Progression Predictor",
    description: "A program to predict progression outcomes at the end of each academic year.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    technologies: ["Python"],
    githubUrl: "https://github.com/Thinura-dinuth/University-Progression-Outcome-Predictor",
  },
  {
    title: "Real Estate Web Application",
    description: "A client-side web application that enables users to search properties.",
    image: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6",
    technologies: ["React", "Javascript", "HTML", "CSS"],
    githubUrl: "https://github.com/Thinura-dinuth/Real-Estate-Web-Application",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-technology">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github className="project-icon" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;