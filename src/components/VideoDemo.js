import React from "react";

const VideoDemo = (props) => {
  return (
    <div className="demo-video-wrapper">
      <video
        src={`/images/projects/${props.match.params.video}`}
        controls
        autoPlay
      />
    </div>
  );
};

export default VideoDemo;
