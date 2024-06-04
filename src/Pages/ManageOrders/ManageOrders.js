import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";
import "./ManageOrders.css";

const ManageOrders = () => {
  const {
    data: orders,
    isloading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://com-solution-server.vercel.app/order/availabel", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isloading) {
    return <Loading></Loading>;
  }
  const handleDelevered = (_id) => {
    const status = {
      paymentStatus: "Delevered",
    };
    fetch(`https://com-solution-server.vercel.app/status/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delevered Successfully!");
        refetch();
        console.log(data);
      });
  };

  const handleCancleOrder = (_id) => {
    const conferm = window.confirm(
      "Are you sure you want to remove this order?"
    );
    if (conferm) {
      fetch(`https://com-solution-server.vercel.app/orders/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("The order is deleted successfully!");
          refetch();
          console.log(data);
        });
    }
    /* fetch(`https://com-solution-server.vercel.app/status/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your order is recorded successfully!");
        refetch();
        console.log(data);
      }); */
  };

  return (
    <div>
      <h1 className="text-2xl">Total Orders: {orders?.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          <thead>
            <tr className="">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>S.NO</th>
              <th className="hideColumnSm hideColumnMd hideColumnLg">
                Order ID.
              </th>
              <th className="hideColumnSm hideColumnMd hideColumnLg">
                Product ID.
              </th>
              <th>User Info.</th>
              <th>Product Info.</th>
              <th className="hideColumnSm hideColumnMd">Order Quantity</th>
              <th className="hideColumnSm hideColumnMd">Price</th>
              <th className="hideColumnSm hideColumnMd hideColumnLg">
                Payment Method
              </th>
              <th>Payment Status</th>
              <th className="hideColumnSm">Transection Id</th>
              <th>Conferm Delevery</th>
              <th>Cancle Order</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td className="hideColumnSm hideColumnMd hideColumnLg">
                  {order?._id}
                </td>
                <td className="hideColumnSm hideColumnMd hideColumnLg">
                  {order?.productID}
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order?.productimg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order?.customerName}</div>
                      <div className="text-sm opacity-50">
                        {order?.customerEmail}
                      </div>
                      <div className="text-sm opacity-50">
                        {order?.customerAddress}
                      </div>
                      <div className="text-sm opacity-50">
                        {order?.customerPhone}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{order?.productName}</div>
                      <div className="text-sm opacity-50">
                        {order?.productDescription?.slice(0, 40)}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hideColumnSm hideColumnMd">
                  {order.porductQuantity}
                </td>
                <td className="hideColumnSm hideColumnMd">
                  {order.productPrice}
                </td>
                <td className="hideColumnSm hideColumnMd hideColumnLg">
                  {order.paymentMethod}
                </td>
                <td>{order.paymentStatus}</td>
                <td className="hideColumnSm">
                  {order.transactionId ? order.transactionId : "N/A"}
                </td>

                <th>
                  {order.role !== "admin" && (
                    <button
                      onClick={() => handleDelevered(order._id)}
                      className="btn btn-success btn-outline btn-sm w-48 flex justify-between items-center"
                    >
                      <i className="fa-solid fa-lock-open text-green"></i>
                      <span>Conferm Delevery</span>
                    </button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => handleCancleOrder(order._id)}
                    className="btn btn-error btn-outline btn-sm w-36 flex justify-between items-center"
                  >
                    <i className="fa-solid text-red fa-trash-can"></i>
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
              <th className="hideColumnSm hideColumnMd hideColumnLg">
                Order ID.
              </th>
              <th className="hideColumnSm hideColumnMd hideColumnLg">
                Product ID.
              </th>
              <th>User Info.</th>
              <th>Product Info.</th>
              <th className="hideColumnSm hideColumnMd">Order Quantity</th>
              <th className="hideColumnSm hideColumnMd">Price</th>
              <th className="hideColumnSm hideColumnMd hideColumnLg">
                Payment Method
              </th>
              <th>Payment Status</th>
              <th className="hideColumnSm">Transection Id</th>
              <th>Conferm Delevery</th>
              <th>Cancle Order</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
