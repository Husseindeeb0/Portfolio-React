import { useEffect, useState } from 'react'
import { SiExpress, SiMongodb } from 'react-icons/si'
import {
  faNode,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'

const AboutBackend = () => {
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
                'B',
                'a',
                'c',
                'k',
                'E',
                'n',
                'd',
              ]}
              idx={15}
            />
          </h1>
          <p>
            A dedicated backend developer skilled in Node.js, Express.js, and
            MongoDB, with expertise in authentication using JWT. I enjoy
            designing efficient APIs and building scalable server-side
            applications that power seamless user experiences.
          </p>
          <p align="LEFT">
            My journey into backend development was made smoother by my prior
            experience with Python, particularly in working with Pandas. The
            knowledge I once thought would be forgotten found its place, proving
            that everything connects in some way—no learning ever goes to waste.
            Handling structured data in Pandas gave me a strong foundation in
            understanding databases, query optimization, and efficient data
            manipulation—skills that translated well when working with MongoDB's
            document-based structure.
          </p>
          <p>
            I believe backend development is about more than just handling
            requests and responses; it’s about designing systems that are
            secure, scalable, and maintainable. Just as in frontend, I approach
            every backend challenge with curiosity and a drive to improve,
            constantly refining my skills to build robust web applications.
          </p>
        </div>

        <div className="stage-circular-mot">
          <div className="circular-spinner">
            <div className="side1">
              <FontAwesomeIcon icon={faNode} color="#339933" />
            </div>
            <div className="side2">
              <SiExpress />
            </div>
            <div className="side3">
              <SiMongodb />
            </div>
            <div className="side4">
              <img src={"jwt.svg"} alt="JWT Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutBackend
