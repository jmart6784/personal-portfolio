import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { homeScripts, unmountHomeScripts } from "./home-scripts";
import projectData from "./project-data";
import ProjectTile from "./ProjectTile";

const Home = () => {
  const projectsJsx = projectData.map((project) => {
    return <ProjectTile key={project.id} project={project} />;
  });

  useEffect(() => {
    homeScripts();

    return () => {
      unmountHomeScripts();
    };
  });

  return (
    <div>
      <div id="static-vid-div" className="video-container bg-static-index">
        <video
          src="../../images/vid1.mp4"
          className="static-index-video"
          playsInline
          autoPlay
          muted
          loop
        ></video>

        <div id="flip-parent-div">
          <div className="text">
            <p className="flip-p">Hello I am</p>
            <p className="flip-p">
              <span className="word">well_rounded</span>
              <span className="word">a_full_stack_developer</span>
              <span className="word">an_active_learner</span>
              <span className="word">a_problem_solver</span>
              <span className="word">passionate</span>
              <span className="word">open_minded</span>
            </p>
          </div>
        </div>
      </div>

      <div id="static-index-container">
        <div id="about-me-div" className="content">
          <div>
            <h1 className="sec-title line-through">About me</h1>

            <p className="about-me-txt">
              My name is Juan Martinez and I am full stack web developer. I
              started my web developement journey at{" "}
              <a href="https://www.theodinproject.com/" target="blank">
                The Odin Project
              </a>
              . There I learned the basics of HTML and CSS. As a result I found
              that I really enjoyed what I was doing and so I continued through
              the curriculum where I learned many new and exciting concepts.
              With that knowledge I created projects along the way to practice
              my programming knowledge and problem solving skills. My curiousity
              and desire to learn hasn't stopped. I am currently learning
              React.js and adding that to my growing skill set.
            </p>
          </div>

          <div id="am-code-div">
            <h1 id="am-code" className="am-text"></h1>
            <h1 id="text-blinker" className="am-text">
              |
            </h1>
          </div>
        </div>

        <div id="skills-container" className="content">
          <h1 id="skills-title" className="sec-title line-through">
            Skills
          </h1>

          <div className="skills-tile-div">
            <div className="card-flip">
              <div id="html-tile" className="background-image card-front"></div>

              <div className="card-back">HTML</div>

              <p className="bottom-label">HTML</p>
            </div>

            <div className="card-flip">
              <div id="css-tile" className="background-image card-front"></div>

              <div className="card-back">CSS</div>

              <p className="bottom-label">CSS</p>
            </div>

            <div className="card-flip">
              <div id="scss-tile" className="background-image card-front"></div>

              <div className="card-back">SCSS</div>

              <p className="bottom-label">SCSS</p>
            </div>

            <div className="card-flip">
              <div
                id="bootstrap-tile"
                className="background-image card-front"
              ></div>

              <div className="card-back">Bootstrap</div>

              <p className="bottom-label">Bootstrap</p>
            </div>

            <div className="card-flip">
              <div id="js-tile" className="background-image card-front"></div>

              <div className="card-back">Javascript</div>

              <p className="bottom-label">Javascript</p>
            </div>

            <div className="card-flip">
              <div id="ruby-tile" className="background-image card-front"></div>

              <div className="card-back">Ruby</div>

              <p className="bottom-label">Ruby</p>
            </div>

            <div className="card-flip">
              <div
                id="rails-tile"
                className="background-image card-front"
              ></div>

              <div className="card-back">Rails</div>

              <p className="bottom-label">Rails</p>
            </div>

            <div className="card-flip">
              <div id="jest-tile" className="background-image card-front"></div>

              <div className="card-back">Jest</div>

              <p className="bottom-label">Jest</p>
            </div>

            <div className="card-flip">
              <div id="git-tile" className="background-image card-front"></div>

              <div className="card-back">Git</div>

              <p className="bottom-label">Git</p>
            </div>

            <div className="card-flip">
              <div
                id="github-tile"
                className="background-image card-front"
              ></div>

              <div className="card-back">Github</div>

              <p className="bottom-label">Github</p>
            </div>

            <div className="card-flip">
              <div
                id="heroku-tile"
                className="background-image card-front"
              ></div>

              <div className="card-back">Heroku</div>

              <p className="bottom-label">Heroku</p>
            </div>

            <div className="card-flip">
              <div
                id="webpack-tile"
                className="background-image card-front"
              ></div>

              <div className="card-back">Webpack</div>

              <p className="bottom-label">Webpack</p>
            </div>

            <div className="card-flip">
              <div id="npm-tile" className="background-image card-front"></div>

              <div className="card-back">NPM</div>

              <p className="bottom-label">NPM</p>
            </div>

            <div className="card-flip">
              <div id="yarn-tile" className="background-image card-front"></div>

              <div className="card-back">Yarn</div>

              <p className="bottom-label">Yarn</p>
            </div>
          </div>

          <h1 id="skills-title" className="sec-title line-through">
            What I'm learning
          </h1>

          <div className="skills-tile-div">
            <div className="card-flip">
              <div
                id="react-tile"
                className="background-image card-front"
              ></div>

              <div className="card-back">React</div>

              <p className="bottom-label">React</p>
            </div>
          </div>
        </div>

        <div id="projects-container" className="content">
          <h1 id="projects-title" className="sec-title line-through">
            Projects
          </h1>

          <div id="project-grid">{projectsJsx}</div>

          <Link to="/projects" className="view-all-projects">
            View All
          </Link>
        </div>

        <div id="contact-container" className="content">
          <div className="dark-blur"></div>
          <h1 className="contact-title line-through">Contact me</h1>
          <p className="contact-text">
            Interested in working together or have questions?
          </p>
          <p className="contact-text">jmartinezdev6784@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
