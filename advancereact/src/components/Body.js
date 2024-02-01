import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import ProductContext from "../contexts/ProductContext";
import API from "../connection/connection";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
export default function Body() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();
  console.log(ctx, "from body");
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const headers = {
          Authorization: localStorage.getItem("token"),
        };

        const response = await axios.get(`${API}/product/getAllProducts`, {
          headers,
        });

        console.log(response.data.allProducts);
        setproducts(response.data.allProducts);
        ctx.setEnablebtn(true);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/");
          ctx.setEnableHeader(false);
          ctx.setLogin(false);
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchdata();
  }, []);

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
            <Card element={element} enablebtn={ctx.enablebtn} />
          </Col>
        ))
      ) : (
        <div>No data available</div>
      )}
    </Row>
  );
}
