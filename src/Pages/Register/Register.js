import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfermPassword, setShowConfermPassword] = useState(false);
  const navigate = useNavigate();
  let authError;
  let passworderror;
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (error || updateerror) {
    authError = (
      <small className="text-red-500">
        {error?.message || updateerror?.message}
      </small>
    );
  }
  if (user) {
    console.log(user);
  }
  const onSubmit = async (data) => {
    if (data.password !== data.confermpassword) {
      passworderror = (
        <small className="text-red-500">Password didn't match!</small>
      );
      return;
    }
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name,  photoURL: data.photoURL});
    console.log(`update done`);
    navigate("/about");
    reset();
  };
  return (
    <div>
      <h1 className="text-3xl text-primary mb-5">Register</h1>
      <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-20">
        <div className="card-body">
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  max: {
                    value: 20000,
                    message: "Too long name",
                  },
                })}
                type="text"
                placeholder="name"
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photoURL", {
                  required: {
                    value: true,
                    message: "photo URL is required",
                  },
                })}
                type="text"
                placeholder="photo URL"
                className="input input-bordered"
              />
              <label className="label">
                {errors.photoURL?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.photoURL.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                    message:
                      "Maximum 20 character, at least one numeric digit, one uppercase and one lowercase letter",
                  },

                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters or more",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-12 right-5 translate-middle-y"
                style={{ cursor: "pointer" }}
              >
                🗝
              </p>
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Conferm Password</span>
              </label>
              <input
                {...register("confermpassword", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                    message:
                      "Maximum 20 character, at least one numeric digit, one uppercase and one lowercase letter",
                  },

                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters or more",
                  },
                })}
                type={showConfermPassword ? "text" : "password"}
                placeholder="conferm password"
                className="input input-bordered"
              />
              <p
                onClick={() => setShowConfermPassword(!showConfermPassword)}
                className="absolute top-12 right-5 translate-middle-y"
                style={{ cursor: "pointer" }}
              >
                🗝
              </p>
              <label className="label">
                {errors.confermpassword?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confermpassword.message}
                  </span>
                )}
                {errors.confermpassword?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confermpassword.message}
                  </span>
                )}
                {errors.confermpassword?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confermpassword.message}
                  </span>
                )}
              </label>
            </div>

            {passworderror}
            {authError}
            <input
              className="btn btn-primary w-full max-w-xs mt-3 text-white"
              type="submit"
              value="Register"
            ></input>
            <label className="label justify-end">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account?Please Login...
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
