import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const ManageProduct = () => {
  const {
    data: tools,
    isloading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://com-solution-server.vercel.app/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isloading) {
    return <Loading></Loading>;
  }

  const handleDeleteProduct = (_id) => {
    const conferm = window.confirm(
      "Are you sure you want to remove this order?"
    );
    if (conferm) {
      fetch(`https://com-solution-server.vercel.app/tools/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("The order is deleted successfully!");
          refetch();
        });
    }
  };
  return (
    <div>
      <h1 className="text-2xl">Total Products: {tools?.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>S.NO</th>
              <th>Product ID.</th>
              <th>Product Info.</th>
              <th>Minimum tool quantity</th>
              <th>Available quantity</th>
              <th>Price</th>
              <th>Remove Product</th>
              <th>Update Product info</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>{tool?._id}</td>

                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={tool?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{tool?.title}</div>
                      <div className="text-sm opacity-50">
                        {tool?.description
                          ? tool?.description.slice(0, 40)
                          : ""}
                      </div>
                    </div>
                  </div>
                </td>

                <td>{tool?.minimumquantity}</td>
                <td>{tool?.quantity}</td>
                <td>{tool?.price}</td>

                <th>
                  <button
                    onClick={() => handleDeleteProduct(tool._id)}
                    className="btn hover:text-white btn-error btn-outline btn-sm w-44 flex justify-between items-center"
                  >
                    <i className="fa-solid text-red fa-trash-can"></i>
                    <span>Remove Product</span>
                  </button>
                </th>
                <th>
                  <button className="btn btn-success btn-outline btn-sm w-44 flex justify-between items-center">
                    <i className="fa-solid text-red fa-trash-can"></i>
                    <span>Update tools</span>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>S.NO</th>
              <th>Product ID.</th>
              <th>Product Info.</th>
              <th>Minimum tool quantity</th>
              <th>Available quantity</th>
              <th>Price</th>
              <th>Remove Product</th>
              <th>Update Product info</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
