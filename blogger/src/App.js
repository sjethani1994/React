import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import AboutUs from "./pages/AboutUs";
import Registration from "./components/Registration";
import AddBlog from "./components/AddBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  // Check if the current route is login or register
  const isLoginOrRegister =
    location.pathname === "/" || location.pathname === "/register";

  // Hide/show header and footer based on current route
  const handleShowHeaderFooter = () => {
    if (isLoginOrRegister) {
      setShowHeader(true);
      setShowFooter(true);
    } else {
      setShowHeader(false);
      setShowFooter(false);
    }
  };

  // Listen for route changes
  React.useEffect(() => {
    handleShowHeaderFooter();
  }, [location]);

  return (
    <>
      {!showHeader && <Header />}
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Registration />} path="/register" />
        <Route element={<Home />} path="/home" />
        <Route element={<AddBlog />} path="/addBlog" />
        <Route element={<EditBlog />} path="/editBlog/:id" />
        <Route element={<AboutUs />} path="/aboutUs" />
      </Routes>
      {!showFooter && <Footer />}
    </>
  );
}

export default App;
