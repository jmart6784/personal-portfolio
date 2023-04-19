import React from "react";

const VideoDemo = (props) => {
  console.log(props);

  return (
    <div className="demo-video-wrapper">
      <video
        src={`/images/projects/${props.match.params.video}`}
        width="750"
        height="500"
        controls
      />
    </div>
  );
};

export default VideoDemo;
