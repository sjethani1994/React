import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { socket } from "./hooks/socketSetup";

function App() {
  const [isValid, setisValid] = useState(false);
  const user = localStorage.getItem("token");
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    // Function to handle socket event and update state
    const handleSocketEvent = (productData) => {
      if (productData) {
        setproductData(productData);
        // Store bidders data in localStorage
        localStorage.setItem("biddersData", JSON.stringify(productData));
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
    <Routes>
      {/* If the user is logged in, render the Main component */}
      {isValid || user ? (
        <Route path="/" element={<Main />} />
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
    </Routes>
  );
}

export default App;
