import React from "react";
import { useLocation, Link } from "react-router-dom";

const ProjectTile = (props) => {
  let tagsJsx = props.project.tags.split(", ").map((tag, i) => {
    if (tag === "Javascript") {
      return (
        <p
          key={`${props.project.title}-${i}`}
          className="project-tag"
          style={{ backgroundColor: "rgb(172, 152, 0)" }}
        >
          {tag}
        </p>
      );
    } else if (tag === "Rails" || tag === "Sinatra") {
      return (
        <p
          key={`${props.project.title}-${i}`}
          className="project-tag"
          style={{ backgroundColor: "rgb(143, 0, 10)" }}
        >
          {tag}
        </p>
      );
    } else if (tag === "React") {
      return (
        <p
          key={`${props.project.title}-${i}`}
          className="project-tag"
          style={{ backgroundColor: "rgb(0, 159, 199)" }}
        >
          {tag}
        </p>
      );
    } else if (tag === "SCSS") {
      return (
        <p
          key={`${props.project.title}-${i}`}
          className="project-tag"
          style={{ backgroundColor: "rgb(213, 111, 164)" }}
        >
          {tag}
        </p>
      );
    } else if (tag === "CSS") {
      return (
        <p
          key={`${props.project.title}-${i}`}
          className="project-tag"
          style={{ backgroundColor: "rgb(2, 119, 189)" }}
        >
          {tag}
        </p>
      );
    } else if (tag === "Jest") {
      return (
        <p
          key={`${props.project.title}-${i}`}
          className="project-tag"
          style={{ backgroundColor: "rgb(204, 70, 21)" }}
        >
          {tag}
        </p>
      );
    } else if (tag === "Bootstrap") {
      return (
        <p
          key={`${props.project.title}-${i}`}
          className="project-tag"
          style={{ backgroundColor: "rgb(86, 61, 124)" }}
        >
          {tag}
        </p>
      );
    } else if (tag === "C#") {
      return (
        <p
          key={`${props.project.title}-${i}`}
          className="project-tag"
          style={{ backgroundColor: "rgba(57,0,145,255)" }}
        >
          {tag}
        </p>
      );
    } else {
      return (
        <p key={`${props.project.title}-${i}`} className="project-tag">
          {tag}
        </p>
      );
    }
  });

  const location = useLocation();
  let divStyleClass;
  let divStyleId;

  if (location.pathname === "/") {
    divStyleClass = "project-div content";
    divStyleId = "";
  } else if (location.pathname === "/projects") {
    divStyleClass = "project-div";
    divStyleId = "proj-index-color";
  }

  let visitJsx = (
    <a href={props.project.live} target="blank" className="project-link">
      Visit
    </a>
  );

  if (props.project.status === "demo") {
    visitJsx = (
      <Link to={`/video-demo/${props.project.live}`} className="project-link">
        Demo
      </Link>
    );
  } else {
    if (props.project.live === "Soon") {
      visitJsx = <p className="project-soon">Soon</p>;
    } else if (props.project.live === null) {
      visitJsx = <p className="project-soon">N/A</p>;
    }
  }

  return (
    <div id={divStyleId} className={divStyleClass}>
      <div
        style={{
          backgroundImage: `url(images/projects/${props.project.image})`,
        }}
        className="project-image background-image"
      ></div>

      <div className="proj-txt-div">
        <h1 className="project-title line-through">{props.project.title}</h1>
        <p className="project-desc">{props.project.description}</p>

        <div className="tags-div">{tagsJsx}</div>

        <div className="project-links-div">
          <a
            href={props.project.github}
            target="blank"
            className="project-link"
          >
            Code
          </a>

          {visitJsx}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
