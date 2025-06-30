import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { SiTailwindcss } from 'react-icons/si'
import AnimatedLetters from '../../components/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const AboutFrontend = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'A',
                'b',
                'o',
                'u',
                't',
                ' ',
                'F',
                'r',
                'o',
                'n',
                't',
                'E',
                'n',
                'd',
              ]}
              idx={15}
            />
          </h1>
          <p>
            A passionate frontend developer skilled in React.js and Tailwind
            CSS, with advanced knowledge of JavaScript. I am driven by the
            thrill of solving problems and the endless potential to enhance and
            evolve websites.
          </p>
          <p align="LEFT">
            My strength lies in my determination to learn and adapt; even if I
            don’t know the solution to a problem right now, I’ll always find a
            way to learn and solve it. I live by the belief: "True ignorance
            lies in thinking you already know everything—growth begins with
            curiosity and humility." I’m constantly striving to learn, improve,
            and build exceptional web experiences. Even my prior experience with
            Python’s Tkinter library for GUI development, which I once thought
            would go to waste, ended up reinforcing my understanding of
            structuring user interfaces.
          </p>
          <p style={{ color: '#efd81d', fontSize: '18px' }}>
            Personal Information
          </p>
          <p>
            <u>Birth Date:</u> 2006-02-27 <br />
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
    </>
  )
}

export default AboutFrontend
