import React, { useRef, useState } from "react";
import "./Banner.css";
import one from "../../../assets/images/1.jpg";
import two from "../../../assets/images/2.jpg";
import three from "../../../assets/images/3.jpg";
import four from "../../../assets/images/4.jpg";
import bannerbg from "../../../assets/images/banner-background.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  const totalImage = [{ id: one }, { id: two }, { id: three }, { id: four }];
  console.log(totalImage);
  return (
    <div
      className="w-11/12 mx-auto shadow-2xl mt-10
    pb-10"
    >
      
      <Swiper
        style={{ marginTop: "30px" }}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {totalImage.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="mx-auto rounded-md sm:w-20 md:w-32 lg:w-40 sm:h-20 md:h-32 lg:h-40"
              src={image.id}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
