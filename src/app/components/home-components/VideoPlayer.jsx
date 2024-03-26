"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const VideoPlayer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: "50px",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Left section */}
        <div className="slider-item left bg-dark">
          <video
            style={{ width: "90%", height: "100%" }}
            className="mx-auto d-block"
            controls
            autoPlay
            muted
          >
            <source src="/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Middle section */}
        <div className="slider-item middle"></div>
        {/* Right section */}
        <div className="slider-item right"></div>
      </Slider>
    </div>
  );
};

export default VideoPlayer;
