import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyProfileCont = ({ userss, refetch }) => {
  const { _id, name, email, photo, phone, address, mstatus, role } = userss;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const orders = {
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phonenumber,
      mstatus: data.mstatus,
    };
    console.log(orders);

    fetch(`https://serene-shelf-91638.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orders),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Your order is recorded successfully!");
        refetch();
      });

    reset();
  };
  return (
    <div>
      <div className="mt-5">
        {role ? (
          <i class="fa-solid fa-user-gear text-5xl mb-5"></i>
        ) : (
          <i class="fa-solid fa-user text-5xl mb-5"></i>
        )}
      </div>

      <h1 className="text-2xl text-black bg-base-100 shadow-2xl w-6/12 mx-auto rounded-md p-4 mb-14">
        Hello, {name}! <br /> Welcome to your profile
      </h1>
      <div class="hero min-h-screen bg-">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-left border-2 rounded-md bg-base-100 shadow-2xl p-10">
            <img
              className="mx-auto mt-5 rounded-2xl w-5/12"
              src={photo}
              alt=""
            />
            <p className="text-center">Role: {role ? "Admin" : "User"}</p>
            <p class="py-6 w-11/12">
              <strong>User ID. {_id}</strong>
            </p>

            <p class="py-6 w-11/12">
              <strong>Name: {name}</strong>
            </p>
            <p class="py-6 w-11/12">
              <strong>Email: {email} </strong>
            </p>
            <p class="py-6 w-11/12">
              <strong>Address: {address} </strong>
            </p>
            <p class="py-6 w-11/12">
              <strong>Phone No: {phone} </strong>
            </p>
          </div>

          <div className="card flex-shrink-0 w-full bottom-2 mx-auto max-w-sm shadow-2xl bg-base-100">
            <div className="card-body w-full ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl mb-4">
                  <strong className="mt-4">
                    Update Your Profile: <br />{" "}
                    <h1 className="text-xl text-emerald-400 mt-4">{name}</h1>
                  </strong>{" "}
                  <span className="text-primary text-sm">
                    Email: <span className="text-sky-900">{email}</span>
                  </span>
                </h1>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    {...register("name")}
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
                    value={email}
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
                    <span className="label-text">Maritual status</span>
                  </label>
                  <select
                    {...register("mstatus", {
                      required: {
                        value: true,
                        message: "paymentMethod is required",
                      },
                    })}
                    type="number"
                    placeholder="Maritual status"
                    className="input input-bordered"
                  >
                    <option value="Marid">Marid</option>
                    <option value="Unmarid">Single</option>
                  </select>
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Update"
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

export default MyProfileCont;
