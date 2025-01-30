import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import image_1 from '../../assets/images/facebook.png'
import image_2 from '../../assets/images/recipe.jpg'
import image_3 from '../../assets/images/weather.jpg'
import image_4 from '../../assets/images/test.png'
import image_5 from '../../assets/images/test_generator.png'
import image_6 from '../../assets/images/freelancehub.png'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const projects = [
    {
      id: 1,
      image: image_6,
      title: 'FreelanceHub',
      githubLink: 'https://github.com/Kiritsu0/FreelanceHub',
      liveLink: 'https://freelancehub0.netlify.app/',
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
      ]
    },
    {
      id: 2,
      image: image_5,
      title: 'Test Generator',
      githubLink: 'https://github.com/Kiritsu0/Test-Generator',
      liveLink: 'https://test-generator-frontend.onrender.com',
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
        <SiMongodb key="mongoDb" color="#4DB33D" />,
        <FontAwesomeIcon icon={faNodeJs} key="node" color="#8cc84b" />,
        <SiExpress key="express" color="#ffff" />,
      ]
    },
    {
      id: 3,
      image: image_2,
      title: 'Food Recipe',
      githubLink: 'https://github.com/Kiritsu0/Food-Recipe-React',
      liveLink: 'https://kiritsu0.github.io/Food-Recipe-React/',
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
      ]
    },
    {
      id: 4,
      image: image_1,
      title: 'Facebook Clone',
      githubLink: 'https://github.com/Kiritsu0/Facebook-Clone',
      liveLink: 'https://social-clone0.netlify.app/',
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
      ]
    },
    {
      id: 5,
      image: image_3,
      title: 'Weather App',
      githubLink: 'https://github.com/Kiritsu0/React-Weather-App',
      liveLink: 'https://kiritsu0.github.io/React-Weather-App/',
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
      ]
    },
    {
      id: 6,
      image: image_4,
      title: 'Test Page',
      githubLink: 'https://github.com/Kiritsu0/React-Quiz-App',
      liveLink: 'https://kiritsu0.github.io/React-Quiz-App/',
      tools: [
        <FontAwesomeIcon icon={faHtml5} key="html" color="#e34c26" />,
        <FontAwesomeIcon icon={faCss3Alt} key="css" color="#1572b6" />,
        <SiTailwindcss key="tailwind" color="#38b2ac" />,
        <FontAwesomeIcon icon={faJsSquare} key="js" color="#f7df1e" />,
        <FontAwesomeIcon icon={faReact} key="react" color="#61dafb" />,
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
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
              <div className='tools'>
                {project.tools.map(tool => (
                  <span>{tool}</span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="icon"
                  title="Code source"
                >
                  <FontAwesomeIcon icon={faGithub} color="black" />
                </a>
                <a href={project.liveLink} target="_blank" className="button">
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
