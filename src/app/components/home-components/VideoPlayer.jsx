import React from "react";

function VideoPlayer() {
  return (
    <div className="col-12 text-center">
      <div className="video-player">
        <div className="container">
          <video controls style={{ objectFit: "cover", borderRadius: "16px" }}>
            <source src="/assets/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
