import React from "react";

const SkillCard = (props) => {
  return (
    <div className="card-flip">
      <div
        style={{ backgroundImage: `url(images/${props.skill.image})` }}
        className="background-image card-front"
      ></div>

      <div className="card-back">{props.skill.name}</div>

      <p className="bottom-label">{props.skill.name}</p>
    </div>
  );
};

export default SkillCard;
