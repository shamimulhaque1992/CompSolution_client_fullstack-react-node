import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";

import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/MyOrders/MyOrders";
import AddReviews from "./Pages/AddReviews/AddReviews";
import MyProfile from "./Pages/MyProfile/MyProfile";
import ManageUsers from "./Pages/ManageUsers/ManageUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import useAdmin from "./hooks/useAdmin";
import AddProduct from "./Pages/AddProduct/AddProduct";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import ManageProduct from "./Pages/ManageProduct/ManageProduct";
import Payment from "./Pages/Payment/Payment";
import Blog from "./Pages/Blog/Blog";
import AllReviews from "./Pages/AllReviews/AllReviews";
import Notfound from "./Pages/Notfound/Notfound";
import Portfolio from "./Pages/Portfolio/Portfolio";
import AllProducts from "./Pages/AllProducts/AllProducts";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          {admin ? (
            <Route index element={<ManageUsers></ManageUsers>}></Route>
          ) : (
            <Route index element={<MyOrders></MyOrders>}></Route>
          )}
          {/* <Route index element={<MyOrders></MyOrders>}></Route> */}
          <Route path="addreviews" element={<AddReviews></AddReviews>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <ManageUsers></ManageUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproduct"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route
          path="/forgotpassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/allreviews" element={<AllReviews></AllReviews>}></Route>
        <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
