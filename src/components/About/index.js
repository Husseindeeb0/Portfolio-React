import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { SiTailwindcss } from "react-icons/si";
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a highly ambitious front-end developer seeking a role in a dynamic company
            that offers opportunities to work with the latest technologies
            and engage in diverse projects. With a strong foundation in front-end development,
            I am eager to contribute to impactful applications.
          </p>
          <p align="LEFT">
            I am confident in my abilities, naturally curious,
            and constantly honing my problem-solving skills and critical thinking skills.
            My passion for technology drives me to stay updated
            with industry trends and continuously improve my craft.
          </p>
          <p style={{color: "#efd81d", fontSize: '18px'}}>Personal Information</p>
          <p>
            <u>Age:</u> 18 years old <br />
            <u>Address:</u> Lebanon <br />
            <u>Number:</u> +961 70 063 612
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <SiTailwindcss />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
