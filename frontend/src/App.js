import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { socket } from "./hooks/socketSetup";
import Addproduct from "./components/Addproduct/Addproduct";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import "./App.css";
import CartPage from "./components/cart/CartPage";
import ThankyouPage from "./components/Thankyou/ThankyouPage";
import FailurePage from "./components/failure/FailurePage";
import Header from "./components/Header/Header";
function App() {
  const [isValid, setisValid] = useState(false);
  const user = sessionStorage.getItem("token");
  const [productData, setproductData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    // Function to handle socket event and update state
    const handleSocketEvent = (data) => {
      if (data) {
        // Retrieve previous product data from localStorage
        const prevProductData =
          JSON.parse(localStorage.getItem("biddersData")) || [];

        // Check if the new data's _id already exists
        const index = prevProductData.findIndex(
          (item) => item._id === data._id
        );

        if (data.isActive) {
          // If _id exists, update the record or add a new record if not found
          if (index !== -1) {
            prevProductData[index] = data;
          } else {
            prevProductData.push(data);
          }
        } else {
          // If the data is not active, remove it from localStorage if it exists
          if (index !== -1) {
            prevProductData.splice(index, 1);
          }
        }
        // Update productData state
        setproductData(prevProductData);

        // Update localStorage with the new data
        localStorage.setItem("biddersData", JSON.stringify(prevProductData));
      }
    };

    // Retrieve bidders data from localStorage on component mount
    const storedBiddersData = localStorage.getItem("biddersData");
    if (storedBiddersData) {
      setproductData(JSON.parse(storedBiddersData));
    }

    // Listen for "productBidders" event from the server
    socket.on("productBidders", handleSocketEvent);

    // Cleanup function to remove the socket event listener when the component unmounts
    return () => {
      socket.off("productBidders", handleSocketEvent);
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <>
    {user && location.pathname !== '/' && <Header />}
      <div className="body">
        <Routes>
          {/* If the user is logged in, render the Main component */}
          {isValid || user ? (
            <Route path="/" element={<Main productData={productData} />} />
          ) : (
            // If the user is not logged in, redirect to the login page
            <Route path="/" element={<Login setisValid={setisValid} />} />
          )}
          {/* Always render the Signup component */}
          <Route path="/signup" element={<Signup />} />
          {/* Always render the Login component */}
          <Route path="/login" element={<Login setisValid={setisValid} />} />
          <Route
            path="/productDetails/:id"
            element={<ProductDetails productData={productData} />}
          />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<ThankyouPage />} />
          <Route path="/failure" element={<FailurePage />} />
        </Routes>
      </div>
      {user && <Footer />}
    </>
  );
}

export default App;
