import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Loading from "../Shared/Loading/Loading";

const stripePromise = loadStripe(
  "pk_test_51L3NHzHXTYysQmrZ1qrQhSMPb4kLtwAZoHyTef8L5f5Xi9h9wFftqQ17oLKva774LAnhE4Z8wgtZjfkWzRkTgwvT006FOZUSHU"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://com-solution-server.vercel.app/orders/${id}`;

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log("hellow", order);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {order.customerName}</p>
          <p className="text-2xl">Please Pay for Your Product: </p>
          <h2 className="text-primary card-title">{order.productName}</h2>
          <img className="w-5/12" src={order.productimg} alt="" />
          <p>
            Your Order Amount:{" "}
            <span className="text-orange-700">{order.porductQuantity}</span> unit
          </p>
          <p>Per unit Price: ৳ {order.productPrice} BDT</p>
          <p>Please pay total: ৳ {order.productPrice * order.porductQuantity} BDT</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto mb-20 p-5">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
