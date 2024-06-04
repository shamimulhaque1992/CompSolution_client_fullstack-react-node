import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  /* 
  const [orders, setOrders] = useState([]); */
  const {
    data: orders,
    isloading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://com-solution-server.vercel.app/order?customeremail=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {/* 
      console.log("res", res);
      console.log(orders); */
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/home");
      }
      return res.json();
    })
  );
  if (isloading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    const conferm = window.confirm("Are you sure you want to delete?");
    if (conferm) {
      fetch(`https://com-solution-server.vercel.app/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("deleted successfully");
            refetch();
          }
        });
    }
  };

  /* useEffect(() => {
    if (user) {
      fetch(`https://com-solution-server.vercel.app/order?customeremail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((response) => {
          console.log("res", response);
          if (response.status === 401 || response.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
          return response.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate]); */

  return (
    <div>
      <h1>
        <strong>Your total Orders:</strong>{" "}
        <span className="text-secondery">{orders?.length}</span>
      </h1>

      {orders?.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>id</th>
                <th>Name</th>
                <th>Product</th>
                <th>Price</th>
                <th>Total Quantity</th>
                <th>Payment Method Selected</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {orders?.map((order, index) => (
                <tr key={order?._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.displayName}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                        <div className="text-sm opacity-50">
                          {order?.customerPhone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order?.productName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {order?.productDescription?.slice(0, 50)}
                    </span>
                  </td>
                  <td>{order?.productPrice}</td>
                  <td>{order?.porductQuantity}</td>
                  <td>{order?.paymentMethod}</td>
                  <td className="text-center">
                    {order?.paymentStatus} <br />
                    <span className="badge badge-ghost badge-sm">
                      {order?.transactionId ? order?.transactionId : "N/A"}
                    </span>
                  </td>
                  <th>
                    {order?.paymentStatus === "Unpaid" ? (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button
                          className="btn btn-success btn-sm tooltip"
                          data-tip="Pay"
                        >
                          <i className="fa-brands fa-amazon-pay text-white text-2xl"></i>
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="btn btn-sm tooltip btn-disabled"
                        data-tip="Pay"
                      >
                        <i className="fa-brands fa-amazon-pay text-white text-2xl"></i>
                      </button>
                    )}

                    <button
                      className={`${
                        order.paymentStatus === "Paid"
                          ? "btn-disabled btn btn-error ml-2 btn-sm tooltip"
                          : "btn btn-error ml-2 btn-sm tooltip"
                      }`}
                      onClick={() => handleDelete(order._id)}
                      data-tip="Delete"
                    >
                      <i className="fa-solid text-red fa-trash-can text-white text-2xl"></i>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* <!-- foot --> */}
            <tfoot>
              <tr className="text-center">
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Product</th>
                <th>Price</th>
                <th>Total Quantity</th>
                <th>Payment Method Selected</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <>
          <div className="text-3xl text-error">
            You havn't ordered anything yet!
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
