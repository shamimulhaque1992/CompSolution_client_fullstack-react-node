import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import styles from "./basicInfo.module.css";
import basicbg from "../../../assets/images/office.gif";
import location from "../../../assets/images/locationbg.gif";
import { Keyboard, Pagination, Navigation } from "swiper";
import MovingComponent from "react-moving-text";
import GoogleMapContainer from "./GoogleMapContainer/GoogleMapContainer";

const BasicInfo = () => {
  return (
    <div className="w-11/12 shadow-xl mx-auto mt-10 mb-10">
      <MovingComponent
        className="sm:text-2xl md:text-3xl lg:text-4xl text-indigo-700"
        type="fadeIn"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none"
      >
        Visite Us
      </MovingComponent>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-around sm:items-center md:items-end sm:flex-col md:flex-row">
          <img className="w-96" src={basicbg} alt="" />
          <div class="card lg:w-5/12 bg-base-100 shadow-xl sm:mb-10 md:mb-0">
            <div class="card-body">
              <i class="fa-solid sm:text-sm md:text-lg lg:text-xl xl:text-4xl fa-door-open"></i>
              <h2 class="sm:text-lg lg:text-2xl font-bold text-center">Opening Hours</h2>
              <div className="text-left mx-auto">
                <p>Saturday: 9AM - 10PM</p>
                <p>Sunday: 9AM - 10PM</p>
                <p>Monday: 9AM - 10PM</p>
                <p>Tuesday: 9AM - 10PM</p>
                <p>Wednesday: 9AM - 10PM</p>
                <p>Thursday: 9AM - 10PM</p>
                <p className="text-error">Friday: Closed</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-around items-center sm:flex-col md:flex-row">
          <img className={styles.locationimg} src={location} alt="" />

          <div class="">
            <GoogleMapContainer></GoogleMapContainer>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BasicInfo;
