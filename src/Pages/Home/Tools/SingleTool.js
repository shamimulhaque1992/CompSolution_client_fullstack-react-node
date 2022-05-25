import React from "react";
import { useNavigate } from "react-router-dom";

const SingleTool = ({ tool }) => {
  const {
    _id,
    title,
    description,
    price,
    quantity,
    minimumquantity,
    img,
  } = tool;
  const navigate = useNavigate();

  const navigateToUpdate = (toolId) => {
    navigate(`/purchase/${toolId}`);
  };
  return (
    <div className="">
      <div className="card mx-auto sm:w-9/12 md:w-6/12 lg:w-11/12 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-48 w-9/12 rounded-md"
            src={img}
            alt="Album"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
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
          <div className="card-actions justify-center">
            <button
              onClick={() => navigateToUpdate(_id)}
              className="btn btn-primary w-full"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
