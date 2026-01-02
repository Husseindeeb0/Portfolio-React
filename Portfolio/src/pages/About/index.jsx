import { useEffect, useState } from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
  faSass,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCertificate,
  faCode,
  faRocket,
  faEye,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiPostman,
  SiNextdotjs,
  SiRedux,
  SiJira,
  SiJsonwebtokens,
  SiDocker,
  SiThreedotjs,
} from "react-icons/si";
import AnimatedLetters from "../../components/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import certificate1 from "/assets/images/techtalks_certificate.png";
import certificate2 from "/assets/images/algorithms_datastructure.png";
import certificate3 from "/assets/images/frontend_libraries.png"
import certificate4 from "/assets/images/responsive_design.png"
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const skills = {
    frontend: [
      { icon: <SiNextdotjs color="#FFFFFF" />, name: "Next.js" },
      {
        icon: <FontAwesomeIcon icon={faReact} color="#61DAFB" />,
        name: "React",
      },
      { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
      {
        icon: <FontAwesomeIcon icon={faJsSquare} color="#F7DF1E" />,
        name: "JavaScript",
      },
      {
        icon: <FontAwesomeIcon icon={faHtml5} color="#E34F26" />,
        name: "HTML5",
      },
      { icon: <FontAwesomeIcon icon={faCss3} color="#1572B6" />, name: "CSS3" },
      { icon: <FontAwesomeIcon icon={faSass} color="#CC6699" />, name: "Sass" },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind" },
      { icon: <SiRedux color="#764ABC" />, name: "Redux" },
      { icon: <SiThreedotjs color="#FFFFFF" />, name: "Three.js" },
    ],
    backend: [
      {
        icon: <FontAwesomeIcon icon={faNodeJs} color="#339933" />,
        name: "Node.js",
      },
      { icon: <SiExpress color="#FFFFFF" />, name: "Express" },
      { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
      { icon: <SiSocketdotio color="#FFFFFF" />, name: "Socket.io" },
      { icon: <SiJsonwebtokens color="#d63384" />, name: "JWT" },
    ],
    tools: [
      {
        icon: <FontAwesomeIcon icon={faGitAlt} color="#F05032" />,
        name: "Git",
      },
      {
        icon: <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />,
        name: "GitHub",
      },
      { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
      { icon: <SiJira color="#0052CC" />, name: "Jira" },
      {
        icon: <FontAwesomeIcon icon={faRocket} color="#00D4FF" />,
        name: "Antigravity",
      },
      { icon: <SiDocker color="#2496ED" />, name: "Docker" },
    ],
  };

  const experiences = [
    {
      title: "Full Stack Internship",
      company: "TechTalks",
      period: "Nov. 2025 - Dec. 2025",
      desc: "Led the development of ECoNet, a full-stack web platform that connects event-focused communities with organizers, simplifying event discovery and booking while fostering community engagement through a unified, user-centered experience.",
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "July 2025 - Present",
      desc: "Developing comprehensive web applications like Aiea, BitwiseClub for clients, focusing on production-ready web applications with real-time features, AI integration, and scalable architecture",
    },
  ];

  const certificates = [
    {
      name: "Full Stack Web Development",
      issuer: "TechTalks",
      date: "2025",
      image: certificate1,
    },
    {
      name: "Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: certificate2,
    },
    {
      name: "Frontend Libraries",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: certificate3,
    },
    {
      name: "Responsive Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: certificate4,
    },
  ];

  return (
    <>
      <div className="container about-page">
        <div className="intro-grid">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>
            <p>
              I am a versatile Full Stack Developer with a deep-rooted passion
              for building robust and interactive web applications. My expertise
              spans the entire development lifecycle, from crafting
              pixel-perfect frontend interfaces with React and Tailwind to
              architecting scalable backend systems using Node.js, Express, and
              MongoDB.
            </p>
            <p>
              I thrive on the challenge of bridging the gap between design and
              technology. My journey into development has been fueled by a
              belief that everything connects—my background in data manipulation
              with Python's Pandas gave me a structured foundation for database
              management, while my experience with UI libraries helped me refine
              my front-end intuition.
            </p>
            <p>
              I don't just write code; I design systems that are secure,
              maintainable, and built to evolve. Growth, to me, is a continuous
              process of curiosity and humility.
            </p>
          </div>

          <div className="skills-hub">
            <h2 className="section-title">
              <FontAwesomeIcon icon={faCode} /> Tech Stack
            </h2>
            <div className="skill-categories">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-grid">
                  {skills.frontend.map((s, i) => (
                    <div className="skill-item" key={i} title={s.name}>
                      {s.icon}
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-grid">
                  {skills.backend.map((s, i) => (
                    <div className="skill-item" key={i} title={s.name}>
                      {s.icon}
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skill-grid">
                  {skills.tools.map((s, i) => (
                    <div className="skill-item" key={i} title={s.name}>
                      {s.icon}
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="achievements-grid">
          <div className="experience-section">
            <h2 className="section-title">
              <FontAwesomeIcon icon={faBriefcase} /> Experience
            </h2>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div className="timeline-item" key={i}>
                  <div className="time-marker"></div>
                  <div className="exp-content">
                    <span className="period">{exp.period}</span>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certificates-section">
            <h2 className="section-title">
              <FontAwesomeIcon icon={faCertificate} /> Certificates
            </h2>
            <div className="cert-shelf">
              {certificates.map((cert, i) => (
                <div className="cert-tab" key={i}>
                  <div className="cert-info">
                    <span className="issuer">{cert.issuer}</span>
                    <h3>{cert.name}</h3>
                    <span className="date">{cert.date}</span>
                  </div>
                  <div
                    className="cert-preview"
                    onClick={() => cert.image && setSelectedCert(cert)}
                  >
                    <div className="glass-frame">
                      {cert.image ? (
                        <>
                          <img src={cert.image} alt={cert.name} />
                          <div className="hover-overlay">
                            <FontAwesomeIcon icon={faEye} />
                          </div>
                        </>
                      ) : (
                        <FontAwesomeIcon
                          icon={faCertificate}
                          className="placeholder-icon"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedCert && (
        <div className="image-modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCert(null)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img src={selectedCert.image} alt={selectedCert.name} />
            <div className="modal-info">
              <h3>{selectedCert.name}</h3>
              <p>
                {selectedCert.issuer} • {selectedCert.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
