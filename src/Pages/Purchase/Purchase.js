import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();
  const [user] = useAuthState(auth);
  // console.log(user);
  const { toolId } = useParams();

  const [tools, setTools] = useState({});
  const minimumOrder = tools.quantity;
  const toolsQuantity = tools.price;
  const url = `http://localhost:5000/tools/${toolId}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTools(data));
  }, [url]);

  const quantityControlar = () => {
    const q = document.getElementById("quantity");
    const x = parseInt(q.value);
    if (x > tools.price) {
      alert("No sufficient quantity available");
      return;
    } else if (x < tools.quantity) {
      alert("Minimum quantity not satisfied");
      return;
    } else if (x > tools.quantity && x < tools.price) {
      return q.value;
    }
  };

  const onSubmit = async (data) => {
    await console.log(data);

    reset();
  };

  return (
    <div>
      <h1>This is purchase</h1>

      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <img
              className="mx-auto mt-5 rounded-2xl w-5/12"
              src={tools.img}
              alt=""
            />
            <h1 class="text-5xl font-bold">{tools.title}</h1>
            <p class="py-6 w-11/12">{tools.description}</p>
            <p class="py-6 w-11/12">
              <strong>Price: ৳</strong>
              {tools.price} BDT
            </p>
            <p class="py-6 w-11/12">
              <strong>Available Quantity: </strong>
              {tools.quantity}
            </p>
            <p class="py-6 w-11/12">
              <strong>Minimum Order Quantity: </strong>
              {tools.quantity}
            </p>
          </div>

          <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl mb-4">
                  <strong>Order for:</strong>{" "}
                  <span className="text-primary">{tools.title}</span>
                </h1>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    {...register("name")}
                    value={user?.displayName}
                    type="text"
                    placeholder="full Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    value={user?.email}
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    {...register("address", {
                      required: {
                        value: true,
                        message: "address is required",
                      },
                    })}
                    type="text"
                    placeholder="address"
                    className="input input-bordered"
                  />
                  <label className="label">
                    {errors.address?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    {...register("phonenumber", {
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                      pattern: {
                        value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                        message: "Provide a valid Phone Number",
                      },
                    })}
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                  <label className="label">
                    {errors.phonenumber?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.phonenumber.message}
                      </span>
                    )}
                    {errors.phonenumber?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.phonenumber.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "quantity is required",
                      },
                    })}
                    onBlur={() => quantityControlar()}
                    id="quantity"
                    min={minimumOrder}
                    max={toolsQuantity}
                    type="number"
                    placeholder="quantity"
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

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Place Order"
                    className="btn btn-primary text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
