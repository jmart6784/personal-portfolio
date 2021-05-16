import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { homeScripts, unmountHomeScripts } from "./home-scripts";
import projectData from "./project-data";
import ProjectTile from "./ProjectTile";
import skillsData from "./skills-data";
import SkillCard from "./SkillCard";

const Home = () => {
  const skillsJsx = skillsData.map((skill) => {
    return <SkillCard skill={skill} key={skill.id} />;
  });

  const projectsJsx = projectData.slice(0, 6).map((project) => {
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

          <div className="skills-tile-div">{skillsJsx}</div>

          {/* <h1 id="skills-title" className="sec-title line-through">
            What I'm learning
          </h1>

          <div className="skills-tile-div">
            <div className="card-flip">
              <div
                id="name-tile"
                className="background-image card-front"
              ></div>

              <div className="card-back">name</div>

              <p className="bottom-label">name</p>
            </div>
          </div> */}
        </div>

        <div id="projects-container" className="content">
          <h1 id="projects-title" className="sec-title line-through">
            Projects
          </h1>

          <div id="project-grid">{projectsJsx}</div>

          <Link to="/projects" className="view-all-projects">
            View More
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
