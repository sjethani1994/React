import "./App.css";
import "./registration.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import LoginPage from "./components/login";
import axios from "axios";
import Card from "./components/Card";
function App() {
  const [loginDetails, setloginDetails] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run the effect only once on mount

  console.log(products);
  return (
    <BrowserRouter>
      <Header username={loginDetails.username} />
      <Routes>
        <Route element={<Registration />} path="/" />
        <Route
          element={<LoginPage setloginDetails={setloginDetails} />}
          path="/login"
        />
        <Route element={<HomePage />} path="/home" />
        <Route
          element={products.map((data) => (
            <Card key={data.id} product={data} />
          ))}
          path="/products"
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
