import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const ForgotPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const onSubmit = (data) => {
    // sendPasswordResetEmail(data.email);
    if (data) {
      // console.log(data);
      sendPasswordResetEmail(data.email);
      toast("Check your email");
      reset();
    } else {
      toast("Please enter email address");
    }
  };
  let authError;
  if (error) {
    authError = (
      <small className="text-red-500">
        {error?.message}
      </small>
    );
  }
  if (sending) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className="text-3xl text-primary mb-5">
        Forgot Password? Reset here!
      </h1>
      <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-20">
        <div className="card-body">
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Provide a valid email address",
                  },
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {authError}
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Reset"
            ></input>
            
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
