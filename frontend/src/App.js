import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {/* If the user is logged in, render the Main component */}
      {user ? (
        <Route path="/" element={<Main />} />
      ) : (
        // If the user is not logged in, redirect to the login page
        <Route path="/" element={<Navigate replace to="/login" />} />
      )}
      {/* Always render the Signup and Login components */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
