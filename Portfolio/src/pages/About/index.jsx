import { useEffect, useState } from "react";
import {
  faBriefcase,
  faCertificate,
  faCode,
  faEye,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedLetters from "../../components/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills, experiences, certificates } from "../../constants";
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
              Full-Stack Developer experienced with scalable, user-friendly web
              applications. Skilled in structuring and maintaining clean,
              consistent codebases, implementing scalable state management with
              validators. Experienced in collaborating within teams, managing
              codebases and workflows with Git, GitHub, and Jira, and leveraging
              AI tools for productivity.
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
