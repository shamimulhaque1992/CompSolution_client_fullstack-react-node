import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const AllReviews = () => {
  const {
    data: reviews,
    isloading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://serene-shelf-91638.herokuapp.com/reviews", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(reviews);

  if (isloading) {
    return <Loading></Loading>;
  }

  console.log(reviews);
  return (
    <div className="reviewContainer container mx-auto mt-20">
      <div className="sectionHeader mb-10">
        <h1 className="text-xl text-left text-cyan-400">Some Thoughts</h1>
        <h1 className="text-3xl text-left">
          What Our Consumers Think about us?
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {reviews?.map((review) => (
          <div className="cursor-pointer card w-11/12 lg:card-side bg-base-100 shadow-xl">
            <div className="card-body flex flex-col">
              <div className="">
                <p className="text-left">
                  {review.comments}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="avatar">
                  <div className="w-10 border-4 border-slate-500 rounded-full">
                    <img src={review.img} alt="" />
                  </div>
                </div>
                <div className="">
                  <h2 className="card-title">{review.name}</h2>
                  <p>{review.profetion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default AllReviews;
