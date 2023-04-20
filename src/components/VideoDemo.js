import React from "react";

const VideoDemo = (props) => {
  return (
    <div className="demo-video-wrapper">
      <video
        src={`/images/projects/${props.match.params.video}`}
        width="750"
        height="500"
        controls
        autoPlay
      />
    </div>
  );
};

export default VideoDemo;
