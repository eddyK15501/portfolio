import React from 'react';
import './Projects.css';
import { useSelector } from 'react-redux';

const Projects = () => {
  const darkMode = useSelector((state) => state.darkTheme.bool)

  return (
    <div id="projects" className={`${darkMode && 'dark'}`}>
      <div className="main-container">
        <div className="header-container">
          <h1>PROJECTS</h1>
        </div>
        <div className="projects-main-container">
          <div className="project">
            <div className="project-container">
              <a href="https://eddyk15501.github.io/recipe-app-react/" target="_blank">
                <img
                  src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F11%2F17%2Farticle_291139_the-top-10-healthiest-foods-for-kids_-02.jpg&q=60"
                  alt="recipes"
                />
                <h1>RECIPES</h1>
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-container">
              <a href="https://eddyk15501.github.io/youtube-react/" target="_blank">
                <img
                  src="https://i.pcmag.com/imagery/roundups/023ml7kXBR166F68m7AW6E2-1.fit_lim.size_1028x578.v1627501166.jpg"
                  alt="youtube"
                />
                <h1>YOUTUBE</h1>
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-container">
              <a href="https://eddyk15501.github.io/todo-list-react/" target="_blank">
                <img
                  src="https://media.self.com/photos/582e3ae85950e5b245aca763/4:3/w_2560%2Cc_limit/subway-therapy.jpg"
                  alt="todo-list"
                />
                <h1>TODOLIST</h1>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
