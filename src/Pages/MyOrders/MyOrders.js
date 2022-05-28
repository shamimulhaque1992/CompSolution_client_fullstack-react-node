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
    fetch(`https://serene-shelf-91638.herokuapp.com/order?customeremail=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log("res", res);
      console.log(orders);
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
      fetch(`https://serene-shelf-91638.herokuapp.com/orders/${id}`, {
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
      fetch(`https://serene-shelf-91638.herokuapp.com/order?customeremail=${user.email}`, {
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
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
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
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>{index + 1}</td>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src={user.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">{user.displayName}</div>
                        <div class="text-sm opacity-50">{user.email}</div>
                        <div class="text-sm opacity-50">
                          {order?.customerPhone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order?.productName}
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      {order?.productDescription?.slice(0, 50)}
                    </span>
                  </td>
                  <td>{order?.productPrice}</td>
                  <td>{order?.porductQuantity}</td>
                  <td>{order?.paymentMethod}</td>
                  <td className="text-center">
                    {order?.paymentStatus} <br />
                    <span class="badge badge-ghost badge-sm">
                      {order?.transactionId ? order?.transactionId : "N/A"}
                    </span>
                  </td>
                  <th>
                    {order?.paymentStatus === "Unpaid" ? (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button
                          class="btn btn-success btn-sm tooltip"
                          data-tip="Pay"
                        >
                          <i class="fa-brands fa-amazon-pay text-white text-2xl"></i>
                        </button>
                      </Link>
                    ) : (
                      <button
                        class="btn btn-sm tooltip btn-disabled"
                        data-tip="Pay"
                      >
                        <i class="fa-brands fa-amazon-pay text-white text-2xl"></i>
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
                      <i class="fa-solid text-red fa-trash-can text-white text-2xl"></i>
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
