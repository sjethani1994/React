import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
// import UserContext from '../contexts/UserContext'
import ProductContext from "../contexts/ProductContext";

export default function ProductComp({ id }) {
  const [singledata, setSingleData] = useState({});
  const ctx = useContext(ProductContext);
  console.log(ctx);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleData(response.data);
      ctx.setEnablebtn(false);
    };
    fetchdata();
  }, []);
  return (
    <>
      <Card element={singledata} enablebtn={ctx.enablebtn} />
    </>
  );
}
