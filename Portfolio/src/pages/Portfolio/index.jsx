import { useEffect, useState, useRef } from "react";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiTypescript,
  SiDaisyui,
  SiNextdotjs,
} from "react-icons/si";
import AnimatedLetters from "../../components/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faInfoCircle,
  faTimes,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import image_1 from "/assets/images/facebook.png";
import image_4 from "/assets/images/test_generator.png";
import image_6 from "/assets/images/bitwiseclub.png";
import image_5 from "/assets/images/litechat.png";
import image_3 from "/assets/images/shirtmod3d.png";
import image_7 from "/assets/images/aidea-home.png";
import image_2 from "/assets/images/econet.png"
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

  const projects = [
    {
      id: 8,
      image: image_2,
      title: "ECoNet",
      description:
        "ECoNet is a cutting-edge event management platform that bridges the gap between organizations and attendees. It provides a seamless environment for organizers to host, manage, and monetize events while offering users a rich discovery experience. From real-time interactions to AI-driven assistance, ECoNet redefines how communities connect through events.",
      features: [
        "Seamless Event Discovery & Booking",
        "Comprehensive Organization Dashboard",
        "Real-time Community Chat System",
        "AI-Powered Event Assistant",
        "Support for Paid & Online Events",
        "Integrated Live Streaming",
        "Interactive Event Rating System",
        "Detailed Speaker & Schedule Management",
      ],
      problemSolved:
        "Traditional event platforms often lack real-time engagement and unified booking systems. ECoNet centralizes management and community interaction in one place.",
      githubLink:
        "https://github.com/husseindeeb0/Portfolio-React/tree/main/Portfolio",
      liveLink: "https://econet-platform.com",
      tools: [
        { icon: <SiNextdotjs color="#FFFFFF" />, name: "Next.js" },
        { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
        {
          icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
          name: "React",
        },
        { icon: <SiTailwindcss color="#38b2ac" />, name: "Tailwind" },
        { icon: <SiSocketdotio color="#fff" />, name: "Socket.io" },
        { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
        {
          icon: <FontAwesomeIcon icon={faNodeJs} color="#8cc84b" />,
          name: "Node.js",
        },
        { icon: <SiExpress color="#ffff" />, name: "Express" },
      ],
    },
    {
      id: 1,
      image: image_6,
      title: "BitwiseClub",
      description:
        "AI designed and developed this full-stack web application independently for Bitwise Club, a university-based technology club, using the MERN stack (MongoDB, Express.js, React, and Node.js). The website introduces the club’s mission, goals, and activities, and includes a dynamic announcements page where administrators can upload, edit, and delete updates through an intuitive admin management interface. The site features a clean, responsive design that ensures a seamless user experience across all devices, with a strong focus on both usability and performance.",
      features: [
        "End-to-End Independent Development",
        "Admin Announcement Management",
        "Robust MERN Stack Architecture",
        "Professional Academic UI/UX",
        "Dynamic Content Updates",
      ],
      problemSolved:
        "Fragmented developer communities needed a centralized hub for MERN stack enthusiasts to showcase their work and find collaborators.",
      githubLink: "https://github.com/husseindeeb0/Bitwise",
      liveLink: "https://bitwiseclub.com",
      tools: [
        {
          icon: <FontAwesomeIcon icon={faHtml5} color="#e34c26" />,
          name: "HTML5",
        },
        {
          icon: <FontAwesomeIcon icon={faCss3Alt} color="#1572b6" />,
          name: "CSS3",
        },
        { icon: <SiTailwindcss color="#38b2ac" />, name: "Tailwind" },
        {
          icon: <FontAwesomeIcon icon={faJsSquare} color="#f7df1e" />,
          name: "JavaScript",
        },
        {
          icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
          name: "React",
        },
        { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
        {
          icon: <FontAwesomeIcon icon={faNodeJs} color="#8cc84b" />,
          name: "Node.js",
        },
        { icon: <SiExpress color="#ffff" />, name: "Express" },
      ],
    },
    {
      id: 2,
      image: image_7,
      title: "Aidea",
      description:
        "Built Aidea a modern web platform that includes AI-powered tools by real-world applications. We developed a full admin panel for managing categories and user access requests, ensuring organized and secure control. I focused on the responsive front-end and modern UI/UX, delivering a clean, engaging experience across all devices and meeting the client’s vision with high-quality results.",
      features: [
        "AI-Powered Brainstorming Tools",
        "Advanced Category Management",
        "Secure Access Request System",
        "Client-Focused Modern UI",
        "Scalable Admin Dashboard",
      ],
      problemSolved:
        "Overcoming writer's block and visualising complex project structures during the early stages of development.",
      githubLink: null,
      liveLink: "https://aidea-lb.com",
      tools: [
        {
          icon: <FontAwesomeIcon icon={faHtml5} color="#e34c26" />,
          name: "HTML5",
        },
        {
          icon: <FontAwesomeIcon icon={faCss3Alt} color="#1572b6" />,
          name: "CSS3",
        },
        { icon: <SiTailwindcss color="#38b2ac" />, name: "Tailwind" },
        { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
        {
          icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
          name: "React",
        },
        { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
        {
          icon: <FontAwesomeIcon icon={faNodeJs} color="#8cc84b" />,
          name: "Node.js",
        },
        { icon: <SiExpress color="#ffff" />, name: "Express" },
      ],
    },
    {
      id: 3,
      image: image_5,
      title: "LiteChat",
      description:
        "LiteChat is a full-stack real-time chat app with secure authentication, profile customization, and dynamic theme switching. Users can send text and images, view online/offline statuses, and update their profile with a custom image. Built with modern technologies, LiteChat delivers a fast, responsive, and user-friendly messaging experience.",
      features: [
        "Real-Time WebSocket Communication",
        "Secure User Authentication",
        "Dynamic Theme Customization",
        "Instant Status Tracking",
        "Media & Link Sharing",
      ],
      problemSolved:
        "The need for a lightweight, low-latency communication tool that doesn't compromise on core features like security and media sharing.",
      githubLink: "https://github.com/Husseindeeb0/LiteChat",
      liveLink: "https://litechat-70j2.onrender.com",
      tools: [
        { icon: <SiTailwindcss color="#38b2ac" />, name: "Tailwind" },
        { icon: <SiDaisyui color="#1ad1a5" />, name: "Daisy UI" },
        { icon: <SiSocketdotio color="#fff" />, name: "Socket.io" },
        { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
        {
          icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
          name: "React",
        },
        { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
        {
          icon: <FontAwesomeIcon icon={faNodeJs} color="#8cc84b" />,
          name: "Node.js",
        },
        { icon: <SiExpress color="#ffff" />, name: "Express" },
      ],
    },
    {
      id: 4,
      image: image_4,
      title: "Test Generator",
      description:
        "TestGenerator is a full-stack MERN app for creating and managing custom tests. Users can register, log in, and build tests by selecting question count, difficulty, and topics. They can also write and save their own questions to a secure database. With a responsive design and intuitive interface, TestGenerator is ideal for education, training, or any assessment needs—offering full control over test creation from frontend to backend.",
      features: [
        "Automated Test Variation Engine",
        "User-Generated Question Vault",
        "Multi-Difficulty Scaling",
        "Comprehensive Grading System",
        "Interactive Performance Analytics",
      ],
      problemSolved:
        "Manual grading and test creation are time-consuming for teachers. This tool automates the repetitive parts of educational assessment.",
      githubLink: "https://github.com/husseindeeb0/Test-Generator",
      liveLink: "https://test-generator-frontend.onrender.com",
      tools: [
        {
          icon: <FontAwesomeIcon icon={faHtml5} color="#e34c26" />,
          name: "HTML5",
        },
        {
          icon: <FontAwesomeIcon icon={faCss3Alt} color="#1572b6" />,
          name: "CSS3",
        },
        { icon: <SiTailwindcss color="#38b2ac" />, name: "Tailwind" },
        {
          icon: <FontAwesomeIcon icon={faJsSquare} color="#f7df1e" />,
          name: "JavaScript",
        },
        {
          icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
          name: "React",
        },
        { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
        {
          icon: <FontAwesomeIcon icon={faNodeJs} color="#8cc84b" />,
          name: "Node.js",
        },
        { icon: <SiExpress color="#ffff" />, name: "Express" },
      ],
    },
    {
      id: 5,
      image: image_3,
      title: "ShirtMod3D",
      description:
        "A React Three.js Fiber 3D shirt customizer that offers a fully interactive and immersive design experience. Users can change shirt colors, upload their own logos, or take advantage of an AI-powered logo generator to create unique, professional designs instantly. Beyond logos, users can apply full-shirt designs and see their creations in real-time 3D, ensuring every detail is perfect. Once satisfied, they can download their custom shirt design, making it a complete and innovative solution for personalized apparel.",
      features: [
        "Interactive 3D Configurator",
        "AI-Powered Logo Generation",
        "Real-Time Texture Mapping",
        "High-Resolution Exports",
        "Deep Three.js & Fiber Integration",
      ],
      problemSolved:
        "Flat 2D images often fail to give users a true sense of how a custom product will look. 3D visualization improves conversion and reduces returns.",
      githubLink: "https://github.com/husseindeeb0/ShirtMod3D",
      liveLink: "https://shirtmod3d-frontend.onrender.com",
      tools: [
        {
          icon: <FontAwesomeIcon icon={faHtml5} color="#e34c26" />,
          name: "HTML5",
        },
        { icon: <SiTailwindcss color="#38b2ac" />, name: "Tailwind" },
        { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
        {
          icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
          name: "React",
        },
        {
          icon: (
            <img
              src="threejs.png"
              alt="threejs Logo"
              style={{ width: "20px" }}
            />
          ),
          name: "Three.js",
        },
        {
          icon: <FontAwesomeIcon icon={faNodeJs} color="#8cc84b" />,
          name: "Node.js",
        },
        { icon: <SiExpress color="#ffff" />, name: "Express" },
      ],
    },
    {
      id: 7,
      image: image_1,
      title: "Facebook Clone",
      description:
        "Designed with a focus on replicating the Facebook experience, the clone features a fully responsive design, ensuring seamless functionality across all devices. Whether you’re testing social media features or exploring design patterns, this project provides a comprehensive look at how to build engaging and interactive interfaces.",
      features: [
        "Scalable News Feed Architecture",
        "Server-Side Rendering with Next.js",
        "Complex State Management",
        "Responsive Social UI Patterns",
        "Real-time Post Interactions",
      ],
      problemSolved:
        "Educational project to master complex state management and social graph data structures.",
      githubLink: "https://github.com/husseindeeb0/Facebook-Clone",
      liveLink: "https://social-clone0.netlify.app/",
      tools: [
        {
          icon: <FontAwesomeIcon icon={faHtml5} color="#e34c26" />,
          name: "HTML5",
        },
        {
          icon: <FontAwesomeIcon icon={faCss3Alt} color="#1572b6" />,
          name: "CSS3",
        },
        { icon: <SiTailwindcss color="#38b2ac" />, name: "Tailwind" },
        { icon: <SiNextdotjs color="#FFFFFF" />, name: "Next.js" },
        {
          icon: <FontAwesomeIcon icon={faJsSquare} color="#f7df1e" />,
          name: "JavaScript",
        },
        {
          icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
          name: "React",
        },
      ],
    },
  ];

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
