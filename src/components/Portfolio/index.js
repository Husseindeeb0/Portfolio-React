import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image_1 from '../../assets/images/facebook.png';
import image_2 from '../../assets/images/recipe.jpg';
import image_3 from '../../assets/images/shopping.jpg';
import image_4 from '../../assets/images/weather.jpg';
import image_5 from '../../assets/images/test.png';
import image_6 from '../../assets/images/drum.png';
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
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
                    <div className="project">
                        <div className="image-box">
                            <img src={image_1} alt="Project image" />
                        </div>
                        <div className="project-title">
                            <p>Facebook Clone</p>
                        </div>
                        <div className="project-actions">
                            <a href="https://github.com/Kiritsu0/Facebook-Clone" target="_blank" className="icon" title="Code source">
                                <FontAwesomeIcon icon={faGithub} color="black" />
                            </a>
                            <a href="https://kiritsu0.github.io/Facebook-Clone/" target="_blank" className="button">Visit</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="image-box">
                            <img src={image_2} alt="Project image" />
                        </div>
                        <div className="project-title">
                            <p>Food Recipe</p>
                        </div>
                        <div className="project-actions">
                            <a href="https://github.com/Kiritsu0/Food-Recipe-React" target="_blank" className="icon" title="Code source">
                                <FontAwesomeIcon icon={faGithub} color="black" />
                            </a>
                            <a href="https://kiritsu0.github.io/Food-Recipe-React/" target="_blank" className="button">Visit</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="image-box">
                            <img src={image_3} alt="Project image" />
                        </div>
                        <div className="project-title">
                            <p>Shopping Cart</p>
                        </div>
                        <div className="project-actions">
                            <a href="https://github.com/Kiritsu0/Shopping-Cart-React" target="_blank" className="icon" title="Code source">
                                <FontAwesomeIcon icon={faGithub} color="black" />
                            </a>
                            <a href="https://kiritsu0.github.io/Shopping-Cart-React/" target="_blank" className="button">Visit</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="image-box">
                            <img src={image_4} alt="Project image" />
                        </div>
                        <div className="project-title">
                            <p>Weather App</p>
                        </div>
                        <div className="project-actions">
                            <a href="https://github.com/Kiritsu0/React-Weather-App" target="_blank" className="icon" title="Code source">
                                <FontAwesomeIcon icon={faGithub} color="black" />
                            </a>
                            <a href="https://kiritsu0.github.io/React-Weather-App/" target="_blank" className="button">Visit</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="image-box">
                            <img src={image_5} alt="Project image" />
                        </div>
                        <div className="project-title">
                            <p>Test Page</p>
                        </div>
                        <div className="project-actions">
                            <a href="https://github.com/Kiritsu0/React-Quiz-App" target="_blank" className="icon" title="Code source">
                                <FontAwesomeIcon icon={faGithub} color="black" />
                            </a>
                            <a href="https://kiritsu0.github.io/React-Quiz-App/" target="_blank" className="button">Visit</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="image-box">
                            <img src={image_6} alt="Project image" />
                        </div>
                        <div className="project-title">
                            <p>Drum Machine</p>
                        </div>
                        <div className="project-actions">
                            <a href="https://github.com/Kiritsu0/React-Drum-Machine" target="_blank" className="icon" title="Code source">
                                <FontAwesomeIcon icon={faGithub} color="black" />
                            </a>
                            <a href="https://kiritsu0.github.io/React-Drum-Machine/" target="_blank" className="button">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;