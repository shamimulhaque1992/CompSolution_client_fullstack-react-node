import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const url = `https://com-solution-server.vercel.app/tools`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.insertedId) {
          toast("Product is added successfully!");
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
      <h1 className="text-3xl text-primary mb-5">Add A Product</h1>
      <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-20">
        <div className="card-body">
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                {...register("title", {
                  required: {
                    value: true,
                    message: "Product Name is required",
                  },
                  max: {
                    value: 200000,
                    message: "Too long name",
                  },
                })}
                type="text"
                placeholder="Product Name"
                className="input input-bordered"
              />
              <label className="label">
                {errors.title?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.title.message}
                  </span>
                )}
                {errors.title?.type === "maxLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.title.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
                type="text"
                placeholder="product description"
                className="input input-bordered"
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is required",
                  },
                })}
                type="number"
                placeholder="price"
                className="input input-bordered"
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "quantity is required",
                  },
                })}
                type="number"
                placeholder="available quantity"
                className="input input-bordered"
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum order quantity</span>
              </label>
              <input
                {...register("minimumquantity", {
                  required: {
                    value: true,
                    message: "minimum order quantity is required",
                  },
                })}
                type="number"
                placeholder="minimum order quantity"
                className="input input-bordered"
              />
              <label className="label">
                {errors.minimumquantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minimumquantity.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
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
              value="Add to Database"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
