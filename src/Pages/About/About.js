import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="content ">
        <div className="">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Kollanpur, Dhaka, Bangladesh</div>
            <div className="text-two">Mohammadpur Exchange-1207</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+880 1779312970</div>
            <div className="text-two">+880 1854669992</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">khandoker15-1992@diu.edu.bd</div>
            <div className="text-two">shamimulhaque162@gmail.com</div>
          </div>
        </div>
        <div className="">
          <div className="topic-text">Send us a message</div>
          <p>
            Share your suggestion with us or any types of quries related to our
            service, you can send us message from here. It's our duty to help
            you.
          </p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
