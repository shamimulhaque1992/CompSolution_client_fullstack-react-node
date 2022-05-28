import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const Reviews = () => {
  const {
    data: reviews,
    isloading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://serene-shelf-91638.herokuapp.com/reviews", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  // console.log(reviews);

  if (isloading) {
    return <Loading></Loading>;
  }

  // console.log(reviews);
  return (
    <div className="reviewContainer container mx-auto mt-20">
      <div className="sectionHeader mb-10">
        <h1 className="text-xl text-left text-cyan-400">Some Thoughts</h1>
        <h1 className="text-3xl text-left">
          What Our Consumers Think about us?
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-20">
        {reviews?.slice((reviews?.length-3),(reviews?.length+1)).reverse().map((review, index) => (
          <div key={index} className="cursor-pointer card w-11/12 lg:card-side bg-base-100 mx-auto shadow-xl">
            <div className="card-body flex flex-col">
              <div className="">
                <strong className="text-indigo-300">Comments: </strong>
                <p className="text-left">{review.comments}</p>
              </div>
              <p className="text-left">
                <strong>
                  Ratings: <span> {review.ratings}</span>
                </strong>
              </p>
              <p className="text-left">
                <strong>
                  Recomendation:
                  <span> {review.recomendation}</span>
                </strong>
              </p>
              <div className="flex items-center justify-center">
                <div className="avatar">
                  <div className="w-10 border-4 border-slate-500 rounded-full">
                    <img src={review.img} alt="" />
                  </div>
                </div>
                <div className="">
                  <h2 className="card-title">{review.name}</h2>
                  <p>
                    <strong>Profetion: </strong>
                    <span>{review.profetion}</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i>
                    <strong>Phone: </strong> 01779312970
                  </p>
                  <p>
                    <strong>U.Id: </strong>
                    {review._id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Reviews;
