import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const AddReviews = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.insertedId) {
          toast("Review is added successfully!");
        } else {
          toast("Something went wrong!");
        }
        console.log(info);
      });
    console.log(data);
    // navigate("/about");
    reset();
  };

  return (
    <div>
      <h1 className="text-3xl text-primary mb-5">Add A Review</h1>
      <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-20">
        <div className="card-body">
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Your Name is required",
                  },
                  max: {
                    value: 200000,
                    message: "Too long name",
                  },
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "maxLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Comments</span>
              </label>
              <textarea
                {...register("comments", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
                type="text"
                placeholder="Your comments"
                className="input input-bordered"
              />
              <label className="label">
                {errors.comments?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.comments.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Recmendation</span>
              </label>
              <select
                {...register("recomendation", {
                  required: {
                    value: true,
                    message: "recomendation is required",
                  },
                })}
                type="number"
                placeholder="payment method"
                className="input input-bordered"
              >
                <option value="Yes">Yes</option>
                <option value="NO">No</option>
                <option value="Nutral">Nutral</option>
              </select>
              <label className="label">
                {errors.paymentMethod?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.paymentMethod.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <select
                {...register("ratings", {
                  required: {
                    value: true,
                    message: "ratings is required",
                  },
                })}
                type="text"
                placeholder="ratings"
                className="input input-bordered"
              >
                <option value="Nutral">⭐⭐⭐⭐⭐</option>
                <option value="Nutral">⭐⭐⭐⭐</option>
                <option value="Nutral">⭐⭐⭐</option>
                <option value="NO">⭐⭐</option>
                <option value="Yes">⭐</option>
              </select>
              <label className="label">
                {errors.paymentMethod?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.paymentMethod.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phone", {
                  required: {
                    value: true,
                    message: "quantity is required",
                  },
                })}
                type="number"
                placeholder="Phone number"
                className="input input-bordered"
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profetion</span>
              </label>
              <input
                {...register("profetion", {
                  required: {
                    value: true,
                    message: "profetion is required",
                  },
                })}
                type="text"
                placeholder="profetion"
                className="input input-bordered"
              />
              <label className="label">
                {errors.profetion?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.profetion.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo URL</span>
              </label>
              <input
                {...register("img", {
                  required: {
                    value: true,
                    message: "photo URL is required",
                  },
                })}
                type="text"
                placeholder="photo URL of the product"
                className="input input-bordered"
              />
              <label className="label">
                {errors.img?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.img.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn btn-primary w-full max-w-xs mt-3 text-white"
              type="submit"
              value="Add Review to Database"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
