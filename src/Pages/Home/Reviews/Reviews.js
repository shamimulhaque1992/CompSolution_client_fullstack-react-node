import React from "react";
import './Reviews.css'
const Reviews = () => {
  return (
    <div className="reviewContainer container mx-auto mt-20">
      <div className="sectionHeader mb-10">
        <h1 className="text-xl text-left text-cyan-400">Some Thoughts</h1>
        <h1 className="text-3xl text-left">What Our Consumers Think about us?</h1>
      </div>


      <div className="flex flex-col items-center justify-center md:flex-row gap-10 mb-20">

          
        <div className="cursor-pointer card w-11/12 lg:card-side bg-base-100 shadow-xl">
          <div className="card-body flex flex-col">
            <div className="">
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus dolor minus cupiditate quasi, ullam aut cum.
                Recusandae, sit laudantium. Facilis nulla natus impedit earum
                tempora?
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="avatar">
                <div className="w-10 border-4 border-slate-500 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" alt=""/>
                </div>
              </div>
              <div className="">
                <h2 className="card-title">Abdul Karim.</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer card w-11/12 lg:card-side bg-base-100 shadow-xl">
          <div className="card-body flex flex-col">
            <div className="">
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus dolor minus cupiditate quasi, ullam aut cum.
                Recusandae, sit laudantium. Facilis nulla natus impedit earum
                tempora?
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="avatar">
                <div className="w-10 border-4 border-slate-500 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" alt=""/>
                </div>
              </div>
              <div className="">
                <h2 className="card-title">Abdur Rahim</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer card w-11/12 lg:card-side bg-base-100 shadow-xl">
          <div className="card-body flex flex-col">
            <div className="">
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus dolor minus cupiditate quasi, ullam aut cum.
                Recusandae, sit laudantium. Facilis nulla natus impedit earum
                tempora?
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="avatar">
                <div className="w-10 border-4 border-slate-500 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" alt=""/>
                </div>
              </div>
              <div className="">
                <h2 className="card-title">Abdul Sattar</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
