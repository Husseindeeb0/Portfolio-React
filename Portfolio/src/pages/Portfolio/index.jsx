import { useEffect, useState } from "react";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiTypescript,
  SiDaisyui,
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

import image_1 from "/assets/images/facebook.png";
import image_2 from "/assets/images/recipe.jpg";
import image_4 from "/assets/images/test_generator.png";
import image_6 from "/assets/images/bitwiseclub.png";
import image_5 from "/assets/images/litechat.png";
import image_3 from "/assets/images/shirtmod3d.png";
import image_7 from "/assets/images/aidea-home.png";
import "./index.scss";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const projects = [
    {
      id: 1,
      image: image_6,
      title: "BitwiseClub",
      githubLink: "https://github.com/husseindeeb0/Bitwise",
      liveLink: "https://aidea-lb.com",
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
        <SiMongodb key="mongoDb" color="#4DB33D" />,
        <FontAwesomeIcon icon={faNodeJs} key="node" color="#8cc84b" />,
        <SiExpress key="express" color="#ffff" />,
      ],
    },
    {
      id: 2,
      image: image_7,
      title: "Aidea",
      githubLink: null,
      liveLink: "https://bitwiseclub.com",
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <SiTypescript key="typescript" color="#3178C6" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
        <SiMongodb key="mongoDb" color="#4DB33D" />,
        <FontAwesomeIcon icon={faNodeJs} key="node" color="#8cc84b" />,
        <SiExpress key="express" color="#ffff" />,
      ],
    },
    {
      id: 3,
      image: image_5,
      title: "LiteChat",
      githubLink: "https://github.com/Husseindeeb0/LiteChat",
      liveLink: "https://litechat-70j2.onrender.com",
      tools: [
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <SiDaisyui key="daisyui" color="#1ad1a5" />,
        <SiSocketdotio key="socketio" color="#444444" />,
        <SiTypescript key="typescript" color="#3178C6" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
        <SiMongodb key="mongoDb" color="#4DB33D" />,
        <FontAwesomeIcon icon={faNodeJs} key="node" color="#8cc84b" />,
        <SiExpress key="express" color="#ffff" />,
      ],
    },
    {
      id: 4,
      image: image_4,
      title: "Test Generator",
      githubLink: "https://github.com/husseindeeb0/Test-Generator",
      liveLink: "https://test-generator-frontend.onrender.com",
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
        <SiMongodb key="mongoDb" color="#4DB33D" />,
        <FontAwesomeIcon icon={faNodeJs} key="node" color="#8cc84b" />,
        <SiExpress key="express" color="#ffff" />,
      ],
    },
    {
      id: 5,
      image: image_3,
      title: "ShirtMod3D",
      githubLink: "https://github.com/husseindeeb0/ShirtMod3D",
      liveLink: "https://shirtmod3d-frontend.onrender.com",
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <SiTypescript key="typescript" color="#3178C6" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
        <img src="threejs.png" alt="threejs Logo" style={{ width: "30px" }} />,
        <FontAwesomeIcon icon={faNodeJs} key="node" color="#8cc84b" />,
        <SiExpress key="express" color="#ffff" />,
      ],
    },
    {
      id: 6,
      image: image_2,
      title: "Food Recipe",
      githubLink: "https://github.com/husseindeeb0/Food-Recipe-React",
      liveLink: "https://husseindeeb0.github.io/Food-Recipe-React/",
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
      ],
    },
    {
      id: 7,
      image: image_1,
      title: "Facebook Clone",
      githubLink: "https://github.com/husseindeeb0/Facebook-Clone",
      liveLink: "https://social-clone0.netlify.app/",
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
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
  });

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
        <div className="projects">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <div className="image-box">
                <img src={project.image} alt={`${project.title} image`} />
              </div>
              <div className="project-title">
                <p>{project.title}</p>
              </div>
              <div className="tools">
                {project.tools.map((tool, index) => (
                  <span key={index}>{tool}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="icon"
                    title="Code source"
                  >
                    <FontAwesomeIcon icon={faGithub} color="black" />
                  </a>
                )}
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="button"
                  style={{ marginTop: project.githubLink ? "" : "5px" }}
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
