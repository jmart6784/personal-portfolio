import React, { useEffect } from "react";
import projectData from "./project-data";
import ProjectTile from "./ProjectTile";
import globalScript from "./global-Script";

const Projects = () => {
  const projectsJsx = projectData.map((project) => {
    return <ProjectTile key={project.id} project={project} />;
  });

  useEffect(() => {
    globalScript();
  });

  return (
    <div>
      <div
        style={{ backgroundImage: "url(images/bg-proj.png)" }}
        id="static-vid-div"
        className="video-container"
      >
        <video
          src="images/vid2.vid"
          className="static-index-video"
          playinline="true"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div id="projects-parent-div">
        <div id="project-grid">{projectsJsx}</div>
      </div>
    </div>
  );
};

export default Projects;
