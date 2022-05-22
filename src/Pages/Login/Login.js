import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-3xl text-primary mb-5">Login!</h1>
      <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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

            <div className="form-control">
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
                    message: "Maximum 20 character, at least one numeric digit, one uppercase and one lowercase letter",
                  },
                  
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters or more",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
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

            <label className="label">
              <Link to="/register" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Login"
            ></input>
            <label className="label justify-end">
              <Link to="/register" className="label-text-alt link link-hover">
                New Here?Please Register...
              </Link>
            </label>
          </form>
          <div className="divider">OR</div>
          <div className="form-control">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-primary mb-3 d-flex justify-around items-center login border-0"
            >
              <i className="fa-brands fa-google googlelogo"></i>
              <span>Login With Google</span>
            </button>
          </div>
          <div className="form-control pt-2">
            <button className="btn btn-primary mb-3 d-flex justify-around items-center login border-0">
              <i className="fa-brands fa-facebook-f facebooklogo"></i>
              <span>Login With Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
