import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useTools from "../../../hooks/useTools";
import SingleTool from "./SingleTool";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Tools.module.css";

import MovingComponent from "react-moving-text";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import Loading from "../../Shared/Loading/Loading";

const Tools = () => {
  const [tools] = useTools([]);
  return (
    <div className="w-11/12 shadow-xl mx-auto mt-32">
      <div className="packages mb-24">
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
          Some of our top selling products...
        </MovingComponent>
      </div>
      <Swiper
      style={{height:'60vh'}}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {tools.slice(0, 6).map((tool,index) => (
          <div key={index} className="h-20">
            <SwiperSlide
              style={{
                borderRadius: "5px",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
              className={styles.cardwidth}
            >
              <SingleTool key={tool._id} tool={tool}></SingleTool>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <Link to="/allproducts">
        <button className="btn sm:btn-xs md:btn-sm btn-primary sm:text-xs mx-auto mb-5 mt-4">
          View all Products
        </button>
      </Link>
    </div>
  );
};

export default Tools;
