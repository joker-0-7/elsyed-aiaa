"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function VideoPlayer() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="row row-gap-5">
          <div className="col-lg-5 col-sm-12">
            <SwiperSlide>Slide 1</SwiperSlide>
          </div>
          <div className="col-lg-5 col-sm-12">
            <SwiperSlide>Slide 2</SwiperSlide>
          </div>
          <div className="col-lg-5 col-sm-12">
            <SwiperSlide>Slide 3</SwiperSlide>
          </div>
        </div>
      </Swiper>
    </>
  );
}
