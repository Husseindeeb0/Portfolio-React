import './index.scss'
import { useState, useRef, useEffect } from 'react'
import LogoS from '../../assets/images/coding-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  const [showAboutOptions, setShowAbout] = useState(false)
  const sidebarRef = useRef(null)

  // Close the aboutOptions menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowAbout(false) // Close sidebar
    }
  }

  useEffect(() => {
    if (showAboutOptions === true) {
      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [showAboutOptions])

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" className="sub-logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <div
          className={`about-link ${showAboutOptions ? 'active' : ''}`}
          onClick={() => setShowAbout((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </div>
        {showAboutOptions && (
          <div className="about-options" ref={sidebarRef}>
            <NavLink
              activeclassname=""
              className="about-option"
              to="/aboutFrontend"
              onClick={() => {
                setShowAbout(false)
                setShowNav(false)
              }}
            >
              About Frontend
            </NavLink>
            <NavLink
              activeclassname=""
              className="about-option"
              to="/aboutBackend"
              onClick={() => {
                setShowAbout(false)
                setShowNav(false)
              }}
            >
              About Backend
            </NavLink>
          </div>
        )}
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/hussein-deeb0/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Kiritsu0"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
