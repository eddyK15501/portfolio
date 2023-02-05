import React from 'react';
import NavbarTwo from '../../components/Navbar/NavbarTwo';
import './Resume.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Resume = () => {
  const darkMode = useSelector(state => state.darkTheme.bool)

  return (
    <div>
      <NavbarTwo />

      <div id="resume" className={`${darkMode && 'dark'}`}>
        <div className="main-container">
          <div className="header">
            <h1>RESUME</h1>
          </div>

          <div className="container">
            <div className="my-resume-header">
              <h2>Edward Kim</h2>
            </div>

            <div className="my-resume-objective">
              <p>Front-End Web Developer</p>
            </div>

            <div className="my-resume-experience">
              <h3>Projects/Experience</h3>
              <div className="my-resume-projects">
                <div className="project">
                  <ul>
                    <li>
                      <h4>Recipe App</h4>
                      <p>
                        Find different recipes by searching keywords and
                        fetching from Edemame API.
                      </p>
                      <div className="project-links">
                        <ul>
                          <li>
                            <a href="https://eddyk15501.github.io/Recipe_App_React/">
                              https://eddyk15501.github.io/Recipe_App_React/
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/eddyK15501/Recipe_App_React">
                              https://github.com/eddyK15501/Recipe_App_React
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <h4>Youtube Project</h4>
                      <p>
                        A simplified version of Youtube, made by calling Google
                        API with Axios.
                      </p>
                      <div className="project-links">
                        <ul>
                          <li>
                            <a href="https://eddyk15501.github.io/Youtube_React/">
                              https://eddyk15501.github.io/Youtube_React/
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/eddyK15501/Youtube_React">
                              https://github.com/eddyK15501/Youtube_React
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <h4>Todo-List</h4>
                      <p>
                        Add, remove, and check off daily tasks with everyone's
                        favorite, the Todo list.
                      </p>
                      <div className="project-links">
                        <ul>
                          <li>
                            <a href="https://eddyk15501.github.io/Todo_List_React/">
                              https://eddyk15501.github.io/Todo_List_React/
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/eddyK15501/Todo_List_React">
                              https://github.com/eddyK15501/Todo_List_React
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="my-resume-certifications">
              <h3>Certifications</h3>
              <div className="my-resume-certificates">
                <ul>
                  <li>
                    <h4>Codecademy</h4>
                    <div className="certificate">
                      <ul>
                        <li>Front-End Engineer</li>
                      </ul>
                    </div>
                  </li>
                </ul>

                <ul>
                  <li>
                    <h4>Udemy</h4>
                    <div className="certificate">
                      <ul>
                        <li>Modern React with Redux - Stephen Grider</li>
                        <li>
                          React Tutorial and Projects Course - John Smilga
                        </li>
                        <li>
                          The Modern Javascript Bootcamp Course - Colt Steele
                        </li>
                        <li>
                          50 Projects In 50 Days - HTML, CSS & JavaScript - Brad
                          Traversy
                        </li>
                        <li>
                          The Complete 2022 Web Development Bootcamp - Dr.
                          Angela Yu
                        </li>
                        <li>
                          Build Responsive Real-World Websites with HTML and CSS
                          - Jonas Schmedtmann
                        </li>
                        <li>
                          Data Structures and Algorithms: Deep Dive Using Java -
                          Tim Buchalka
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="my-resume-education">
              <h3>Education</h3>
              <div className="edu-container">
                <div className="edu-top">
                  <h4>Wake Technical Community College</h4>
                  <h6>Raleigh, North Carolina</h6>
                </div>
                <div className="edu-bottom">
                  <ul>
                    <li>
                      <h5>
                        <em>Associate in Science in Computer Science</em>
                      </h5>
                    </li>
                  </ul>
                  <h5>
                    <em>Aug. 2015 - Feb. 2017</em>
                  </h5>
                </div>
              </div>
            </div>

            <div className="my-resume-skills">
              <h3>Skills</h3>
              <div className="skills-container">
                <div className="languages">
                  <h4>Languages</h4>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Solidity</li>
                  </ul>
                </div>

                <div className="frameworks">
                  <h4>Frameworks</h4>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>

                <div className="others">
                  <h4>Others</h4>
                  <ul>
                    <li>Redux Toolkit</li>
                    <li>Sass</li>
                    <li>Jest</li>
                    <li>Docker</li>
                    <li>Github</li>
                    <li>VSCode</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link to="/" style={{ textDecoration: 'none' }}><button>Back to Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
