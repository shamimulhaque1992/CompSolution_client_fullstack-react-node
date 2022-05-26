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
    fetch("https://serene-shelf-91638.herokuapp.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log("dsf", tools);

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
        toast.success("Your tool is recorded successfully!");
        refetch();
        console.log(data);
      });
  };
  return (
    <div>
      <h1>manage users{tools?.length}</h1>
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
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>{tool?._id}</td>
                
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={tool?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{tool?.title}</div>
                      <div class="text-sm opacity-50">
                        {tool?.description?tool?.description.slice(0,40):""}
                      </div>
                    </div>
                  </div>
                </td>

                <td>{tool?.minimumquantity}</td>
                <td>{tool?.quantity}</td>
                <td>{tool?.price}</td>

                <th>
                  <button
                    onClick={() => handleDelevered(tool._id)}
                    class="btn btn-success btn-outline btn-sm w-36 flex justify-between items-center"
                  >
                    <i class="fa-solid fa-lock-open text-green"></i>
                    <span>Make Paid</span>
                  </button>
                </th>
                <th>
                  <button class="btn btn-error btn-outline btn-sm w-36 flex justify-between items-center">
                    <i class="fa-solid text-red fa-trash-can"></i>
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
