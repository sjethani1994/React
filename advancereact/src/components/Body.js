import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import ProductContext from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import useApiCallHook from "../hooks/useApiCallHook";
export default function Body() {
  const productCtx = useContext(ProductContext);
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const { response, fetchData } = useApiCallHook(); // Call the custom hook
  useEffect(() => {
    const getProducts = async () => {
      try {
        const headers = {
          Authorization: localStorage.getItem("token"),
        };

        // Use response directly
        await fetchData(`product/getAllProducts`, "get", null, headers);

        setproducts(response?.data?.allProducts);
        productCtx.setEnablebtn(true);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/");
          productCtx.setLogin(false);
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };

    getProducts();
  }, []);

  return (
    <Row>
      {products?.length > 0 ? (
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
