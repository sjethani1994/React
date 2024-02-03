import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import ProductContext from "../contexts/ProductContext";
import API from "../connection/connection";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import useApiCallHook from "../hooks/useApiCallHook";
export default function Body() {
  const productCtx = useContext(ProductContext);
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
        // const headers = {
        //   Authorization: localStorage.getItem("token"),
        // };

  //       const response = await axios.get(`${API}/product/getAllProducts`, {
  //         headers,
  //       });

  //       setproducts(response.data.allProducts);
  //       ctx.setEnablebtn(true);
  //     } catch (error) {
  //       if (error.response && error.response.status === 401) {
  //         navigate("/");
  //         ctx.setLogin(false);
  //       } else {
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  //   };

  //   fetchdata();
  // }, []);

  // Use the custom hook
  const { response, error } = useApiCallHook("/product/getAllProducts");

  // Extracting data from the response and handling errors
  const { allProducts } = response?.data || {};
  const enablebtn = !error;

  // Set the data to the context
  useEffect(() => {
    if (allProducts) {
      productCtx.setProducts(allProducts);
      productCtx.setEnablebtn(enablebtn);
      setproducts(response.data.allProducts);
    }
  }, [allProducts, enablebtn, productCtx, setproducts]);

  useEffect(() => {
    // Handle authentication errors
    if (error && error.response && error.response.status === 401) {
      navigate("/");
      productCtx.setLogin(false);
    }
  }, [error, navigate, productCtx]);

  return (
    <Row>
      {products.length > 0 ? (
        products.map((element, index) => (
          <Col
            key={index}
            lg={4}
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Card element={element} enablebtn={productCtx.enablebtn} />
          </Col>
        ))
      ) : (
        <div>No data available</div>
      )}
    </Row>
  );
}
