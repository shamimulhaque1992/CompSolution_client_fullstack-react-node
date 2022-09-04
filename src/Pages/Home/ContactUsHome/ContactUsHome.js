import React from "react";
import contact from '../../../assets/images/contact.gif'

const ContactUs = () => {
  return (
    <div className="w-11/12 shadow-xl mx-auto mb-10 p-10"
    style={{
        backgroundImage: `url(${contact})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "25vw 50vh",
      }}>
      <div className="">
        <div className="container mx-auto  hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Us!</h1>
            <p className="py-6">
              Stay connected with us.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className="textarea textarea-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
