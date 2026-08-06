import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiTypescript,
  SiDaisyui,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiDocker,
  SiBootstrap,
  SiPhp,
} from "react-icons/si";

import image_1 from "/assets/images/facebook.png";
import image_6 from "/assets/images/bitwiseclub.png";
import image_5 from "/assets/images/litechat.png";
import image_3 from "/assets/images/shirtmod3d.png";
import image_2 from "/assets/images/econet.png";
import image_8 from "/assets/images/transleb.png";
import image_10 from "/assets/images/pulsetrack.png";
import image_11 from "/assets/images/qr_digital_menu.png";

export const projects = [
  {
    id: 1,
    image: image_10,
    title: "PulseTrack",
    description:
      "PulseTrack is a full-stack healthcare management platform designed for clinicians to streamline patient care, test tracking, and risk assessment. It enables clinicians to securely sign in, add and track patient medical records, send custom assessments directly via email, automatically compute health scores and risk bands, visualize patient data through interactive charts, and bulk-import test results via CSV files.",
    features: [
      "Secure Clinician Authentication & Patient Management",
      "Automated Test Tracking & CSV File Import",
      "Dynamic Assessment Creation & Email Delivery",
      "Automated Risk Band & Health Score Engine",
      "Interactive Data Charts & Analytics Visualizations",
    ],
    problemSolved:
      "Eliminates manual data entry and fragmented patient tracking by providing clinicians with automated CSV test population, standardized risk assessment scoring, and direct email workflows.",
    githubLink: "https://github.com/Husseindeeb0/PulseTrack",
    liveLink: "https://pulsetrack-orcin.vercel.app/",
    tools: [
      {
        icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
        name: "React",
      },
      { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
      {
        icon: <FontAwesomeIcon icon={faNodeJs} color="#8cc84b" />,
        name: "Node.js",
      },
      { icon: <SiExpress color="#ffff" />, name: "Express" },
      { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
      { icon: <SiPrisma color="#FFFFFF" />, name: "Prisma" },
    ],
  },
  {
    id: 2,
    image: image_8,
    title: "TransLeb",
    description:
      "TransLeb is a full-stack SaaS platform developed to improve public transportation management by connecting passengers with transportation providers. The platform includes authentication, an admin dashboard, and a PostgreSQL-powered backend to support efficient route optimization and management.",
    features: [
      "Interactive Admin Dashboard",
      "Robust User Authentication",
      "Highly Scalable Backend Architecture",
      "Optimized Route Management",
      "Modern & Responsive UX/UI Design",
    ],
    problemSolved:
      "Inconvenient and uncoordinated public transport tracking by introducing a unified SaaS platform for real-time fleet coordination and passenger updates.",
    githubLink: null,
    liveLink: "https://transleb.vercel.app/",
    tools: [
      {
        icon: <FontAwesomeIcon icon={faReact} color="#61dafb" />,
        name: "React",
      },
      { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
      { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
      {
        icon: <FontAwesomeIcon icon={faNodeJs} color="#8cc84b" />,
        name: "Node.js",
      },
      { icon: <SiExpress color="#ffff" />, name: "Express" },
      { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
      { icon: <SiPrisma color="#FFFFFF" />, name: "Prisma" },
      { icon: <SiDocker color="#2496ED" />, name: "Docker" },
    ],
  },
  {
    id: 3,
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
    githubLink: "https://github.com/Husseindeeb0/ECoNet",
    liveLink: "https://econet-pearl-alpha.vercel.app/",
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
    id: 4,
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
    id: 5,
    image: image_11,
    title: "QR Digital Menu",
    description:
      "QR Digital Menu is a lightweight, web-based digital menu system designed specifically for contactless dining experiences. It includes a secure admin dashboard equipped with authentication and role-based authorization to manage menu categories and items (full CRUD), as well as generate and customize direct QR code links for instant customer scanning.",
    features: [
      "Secure Admin Dashboard with Auth & Authorization",
      "Full Category & Menu Item Management (CRUD)",
      "Dynamic & Editable QR Code Generation",
      "Mobile-Optimized Contactless Digital View",
      "Clean & Responsive Interface with Bootstrap",
    ],
    problemSolved:
      "Replaces traditional paper menus with an easily updated digital solution that enables instant real-time menu modifications and direct QR code scanning.",
    githubLink: "https://github.com/husseindeeb0/Qr_Digital_Menu",
    liveLink: "https://qrdigitalmenu.free.nf",
    tools: [
      { icon: <SiPhp color="#777BB4" />, name: "PHP" },
      { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
      {
        icon: <FontAwesomeIcon icon={faHtml5} color="#e34c26" />,
        name: "HTML5",
      },
      {
        icon: <FontAwesomeIcon icon={faCss3Alt} color="#1572b6" />,
        name: "CSS3",
      },
      {
        icon: <FontAwesomeIcon icon={faJsSquare} color="#f7df1e" />,
        name: "JavaScript",
      },
    ],
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
    image: image_1,
    title: "Facebook Clone",
    description:
      "What makes this project special is that I designed and built it entirely by myself long before the AI revolution. As a beginner developer, I crafted every component pixel-by-pixel, taking immense pride in tackling complex UI layouts and social media features completely on my own. Although it remains incomplete for now, it stands as a memorable milestone in my early growth as a developer.",
    features: [
      "Scalable News Feed Architecture",
      "Server-Side Rendering with Next.js",
      "Responsive Social UI Patterns",
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
