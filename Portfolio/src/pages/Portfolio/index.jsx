import { useEffect, useState, useRef } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faInfoCircle,
  faTimes,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "../../constants";
import "./index.scss";

const ProjectCard = ({ project, onOpenModal }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowFullDesc(false);
        setShowAllTools(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="project-card" ref={cardRef}>
      <div className="card-image">
        <img src={project.image} alt={project.title} />
        <div className="card-overlay">
          <button className="details-btn" onClick={() => onOpenModal(project)}>
            <FontAwesomeIcon icon={faInfoCircle} /> Case Study
          </button>
        </div>
      </div>

      <div className="card-content">
        <h2 className="project-title">{project.title}</h2>

        <div
          className={`description-container ${showFullDesc ? "expanded" : ""}`}
        >
          <div className="description-wrapper">
            <p className="project-desc">{project.description}</p>
            {project.features && (
              <div className="card-features">
                <h4>Core Features</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button
            className="text-toggle-btn"
            onClick={() => setShowFullDesc(!showFullDesc)}
          >
            {showFullDesc ? "Show Less" : "Read More"}
          </button>
        </div>

        <div
          className={`tech-stack-container ${showAllTools ? "expanded" : ""}`}
        >
          <div
            className={`tech-stack ${showAllTools ? "grid-view" : "row-view"}`}
          >
            {project.tools.map((tool, index) => (
              <div
                className={`tool-tag ${index >= 4 ? "extra-tool" : ""}`}
                key={index}
                title={tool.name}
              >
                {tool.icon}
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
            {project.tools.length > 4 && (
              <button
                className={`tools-toggle-btn ${showAllTools ? "close" : ""}`}
                onClick={() => setShowAllTools(!showAllTools)}
              >
                {showAllTools ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  `+${project.tools.length - 4}`
                )}
              </button>
            )}
          </div>
        </div>

        <div className="card-actions">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="action-link github"
            >
              <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          )}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="action-link live"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedProject(null)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <h1>{selectedProject.title}</h1>
                <div className="modal-tech">
                  {selectedProject.tools.map((tool, index) => (
                    <div className="modal-tool-tag" key={index}>
                      {tool.icon}
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
                <div className="details-section">
                  <h3>Overview</h3>
                  <p>{selectedProject.description}</p>
                </div>
                <div className="details-section">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {selectedProject.features?.map((feature, index) => (
                      <div className="feature-item" key={index}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="details-section">
                  <h3>The Problem</h3>
                  <p>{selectedProject.problemSolved}</p>
                </div>
                <div className="modal-actions">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-btn github"
                    >
                      <FontAwesomeIcon icon={faGithub} /> Repository
                    </a>
                  )}
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-btn live"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
