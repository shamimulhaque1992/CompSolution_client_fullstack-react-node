import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const ManageOrders = () => {
  const {
    data: orders,
    isloading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://serene-shelf-91638.herokuapp.com/order/availabel", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(orders);

  if (isloading) {
    return <Loading></Loading>;
  }
  const handleDelevered = (_id) => {
    const status = {
      paymentStatus: "Delevered",
    };
    fetch(`https://serene-shelf-91638.herokuapp.com/status/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your order is recorded successfully!");
        refetch();
        console.log(data);
      });
  };

  return (
    <div>
      <h1>manage users{orders?.length}</h1>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>S.NO</th>
              <th>Order ID.</th>
              <th>Product ID.</th>
              <th>User Info.</th>
              <th>Product Info.</th>
              <th>Order Quantity</th>
              <th>Price</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Transection Id</th>
              <th>Conferm Delevery</th>
              <th>Cancle Order</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>{order?._id}</td>
                <td>{order?.productID}</td>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={order?.productimg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{order?.customerName}</div>
                      <div class="text-sm opacity-50">
                        {order?.customerEmail}
                      </div>
                      <div class="text-sm opacity-50">
                        {order?.customerAddress}
                      </div>
                      <div class="text-sm opacity-50">
                        {order?.customerPhone}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex items-center space-x-3">
                    <div>
                      <div class="font-bold">{order?.productName}</div>
                      <div class="text-sm opacity-50">
                        {order?.productDescription.slice(0, 40)}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{order.porductQuantity}</td>
                <td>{order.productPrice}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.transactionId?order.transactionId:"N/A"}</td>

                <th>
                  {order.role !== "admin" && (
                    <button
                      onClick={() => handleDelevered(order._id)}
                      class="btn btn-success btn-outline btn-sm w-36 flex justify-between items-center"
                    >
                      <i class="fa-solid fa-lock-open text-green"></i>
                      <span>Make Paid</span>
                    </button>
                  )}
                </th>
                <th>
                  <button class="btn btn-error btn-outline btn-sm w-36 flex justify-between items-center">
                    <i class="fa-solid text-red fa-trash-can"></i>
                    <span>Cancle Order</span>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>S.NO</th>
              <th>Order ID.</th>
              <th>Product ID.</th>
              <th>User Info.</th>
              <th>Product Info.</th>
              <th>Order Quantity</th>
              <th>Price</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Transaction ID</th>
              <th>Conferm Order</th>
              <th>Cancle Order</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
