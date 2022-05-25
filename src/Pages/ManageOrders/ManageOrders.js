import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const ManageOrders = () => {
  const {
    data: orders,
    isloading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/order/availabel", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log("ok", orders);
  if (isloading) {
    return <Loading></Loading>;
  }
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
                        {order?.productDescription.slice(0,40)}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{order.porductQuantity}</td>
                <td>{order.productPrice}</td>
                <td>{order.paymentMethod}</td>

                <th>
                  {order.role !== "admin" && (
                    <button
                      /* onClick={()=>makeAdmin(order)} */ class="btn btn-success btn-outline btn-sm w-36 flex justify-between items-center"
                    >
                      <i class="fa-solid fa-lock-open text-green"></i>
                      <span>Make Paid</span>
                    </button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => order(order)}
                    class="btn btn-error btn-outline btn-sm w-36 flex justify-between items-center"
                  >
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
              <th>Cancle Order</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
