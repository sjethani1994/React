import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";
import Register from "./Pages/Register";
function App() {
  const ctx = useContext(UserContext);
  return (
    <>
      {ctx.login && <Header />}
      <Routes>
        {ctx.login &&  <Route path="/home" element={<HomePage />} />}
        {ctx.login && (
          <Route element={<ProductDetails />} path="/product/:id" />
        )}
        <Route element={<Login />} path="/" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
