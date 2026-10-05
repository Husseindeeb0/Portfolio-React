import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { faRocket } from "@fortawesome/free-solid-svg-icons";
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
  SiPostgresql,
  SiPrisma,
  SiPhp,
  SiDotnet,
  SiMysql,
  SiMeta,
  SiCloudflare,
} from "react-icons/si";
import { TbBrandReactNative, TbSql } from "react-icons/tb";

import certificate1 from "/assets/images/techtalks_certificate.png";
import certificate2 from "/assets/images/algorithms_datastructure.png";
import certificate3 from "/assets/images/frontend_libraries.png";
import certificate4 from "/assets/images/responsive_design.png";

export const skills = {
  frontend: [
    { icon: <SiNextdotjs color="#FFFFFF" />, name: "Next.js" },
    {
      icon: <FontAwesomeIcon icon={faReact} color="#61DAFB" />,
      name: "React",
    },
    { icon: <TbBrandReactNative color="#61DAFB" />, name: "React Native" },
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
    { icon: <SiDotnet color="#512BD4" />, name: ".NET" },
    {
      icon: <FontAwesomeIcon icon={faNodeJs} color="#339933" />,
      name: "Node.js",
    },
    { icon: <SiExpress color="#FFFFFF" />, name: "Express" },
    { icon: <SiPhp color="#777BB4" />, name: "PHP" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
    { icon: <TbSql color="#00758F" />, name: "SQL" },
    { icon: <SiPrisma color="#FFFFFF" />, name: "Prisma" },
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
    { icon: <SiMeta color="#0866FF" />, name: "Meta" },
    { icon: <SiCloudflare color="#F38020" />, name: "Cloudflare R2" },
  ],
};

export const experiences = [
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

export const certificates = [
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
