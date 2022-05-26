import React from "react";
import "./Banner.css";
import one from "../../../assets/images/1.jpg"
import two from "../../../assets/images/2.jpg"
import three from "../../../assets/images/3.jpg"
import four from "../../../assets/images/4.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full h-96 flex items-center">
                <div id="slide1" className="carousel-item relative  w-full h-96">
                    <img src={one} alt="carouselImg" className="items-center w-full" />{" "}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-60">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96">
                    <img src={two} alt="carouselImg" className="w-full" />{" "}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-60">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-96">
                    <img src={three} alt="carouselImg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-60">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-96">
                    <img src={four} alt="carouselImg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-60">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
  );
};

export default Banner;
