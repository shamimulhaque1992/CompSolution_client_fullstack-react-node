import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const SingleTool = ({ tool }) => {
  const { _id, title, description, price, quantity, minimumquantity, img } =
    tool;
  const navigate = useNavigate();

  const navigateToUpdate = (toolId) => {
    navigate(`/purchase/${toolId}`);
  };
  return (
    <div className="mx-auto h-full shadow-lg">
      <div className="mx-auto flex flex-col h-full justify-evenly">
        <figure>
          <img
            className="w-5/12 mx-auto"
            src={img}
            alt="Album"
            alt=""
          />
        </figure>

        <div className="pl-5 pr-5 w-11/12 mx-auto">
          <h2 className="card-title sm:text-sm md:text-sm lg:text-lg xl:text-xl xxl:text-2xl">
            {title}
          </h2>
          <div className="sm:text-xs md:text-sm lg:text-sm xl:text-sm">
            <p className="text-left" title={description}>
              {description.slice(0, 100)}
            </p>
            <p className="text-left">
              <strong>Price:</strong> ৳{price} BDT
            </p>
            <p className="text-left">
              <strong>Available Quantity:</strong> {quantity}
            </p>
            <p className="text-left">
              <strong>Minumum Order Quantity:</strong> {minimumquantity}
            </p>
          </div>
        </div>

        <div className="">
          <button
            onClick={() => navigateToUpdate(_id)}
            className="btn sm:btn-xs md:btn-sm btn-primary sm:text-xs mx-auto"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
