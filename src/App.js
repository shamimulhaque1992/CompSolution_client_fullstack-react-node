import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route
          path="/forgotpassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
