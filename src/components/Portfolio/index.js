import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import image_1 from '../../assets/images/facebook.png'
import image_2 from '../../assets/images/recipe.jpg'
import image_3 from '../../assets/images/shopping.jpg'
import image_4 from '../../assets/images/weather.jpg'
import image_5 from '../../assets/images/test.png'
import image_6 from '../../assets/images/drum.png'
import image_7 from '../../assets/images/test_generator.png'
import image_8 from '../../assets/images/freelancehub.png'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const projects = [
    {
      id: 1,
      image: image_8,
      title: 'FreelanceHub',
      githubLink: 'https://github.com/Kiritsu0/FreelanceHub',
      liveLink: 'https://kiritsu0.github.io/FreelanceHub/',
    },
    {
      id: 2,
      image: image_7,
      title: 'Test Generator',
      githubLink: 'https://github.com/Kiritsu0/Test-Generator',
      liveLink: 'https://kiritsu0.github.io/Test-Generator/',
    },
    {
      id: 3,
      image: image_2,
      title: 'Food Recipe',
      githubLink: 'https://github.com/Kiritsu0/Food-Recipe-React',
      liveLink: 'https://kiritsu0.github.io/Food-Recipe-React/',
    },
    {
      id: 4,
      image: image_1,
      title: 'Facebook Clone',
      githubLink: 'https://github.com/Kiritsu0/Facebook-Clone',
      liveLink: 'https://kiritsu0.github.io/Facebook-Clone/',
    },

    {
      id: 5,
      image: image_3,
      title: 'Shopping Cart',
      githubLink: 'https://github.com/Kiritsu0/Shopping-Cart-React',
      liveLink: 'https://kiritsu0.github.io/Shopping-Cart-React/',
    },
    {
      id: 6,
      image: image_4,
      title: 'Weather App',
      githubLink: 'https://github.com/Kiritsu0/React-Weather-App',
      liveLink: 'https://kiritsu0.github.io/React-Weather-App/',
    },
    {
      id: 7,
      image: image_5,
      title: 'Test Page',
      githubLink: 'https://github.com/Kiritsu0/React-Quiz-App',
      liveLink: 'https://kiritsu0.github.io/React-Quiz-App/',
    },
    {
      id: 8,
      image: image_6,
      title: 'Drum Machine',
      githubLink: 'https://github.com/Kiritsu0/React-Drum-Machine',
      liveLink: 'https://kiritsu0.github.io/React-Drum-Machine/',
    },
  ]

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
