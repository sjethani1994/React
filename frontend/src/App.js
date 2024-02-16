import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
function App() {
  const [isValid, setisValid] = useState(false);
  const user = localStorage.getItem("token");


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
      <Route path="/productDetails/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
