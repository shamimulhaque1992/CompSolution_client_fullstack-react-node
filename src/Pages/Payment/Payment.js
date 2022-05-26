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
  const url = `http://localhost:5000/orders/${id}`;

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
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order.customerPhone}</p>
          <h2 class="card-title">Please Pay for {order.productName}</h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-700">{order.porductQuantity}</span> at{" "}
            {order.slot}
          </p>
          <p>Please pay: ${order.productPrice}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
