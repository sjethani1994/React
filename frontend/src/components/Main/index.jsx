import React, { useEffect } from "react";
import styles from "./style.module.css"; // Import CSS module
import useFetch from "../../hooks/useFetch"; // Import the useFetch hook
import ProductList from "../productList/ProductList";
import Navbar from "../../Navbar/Navbar";
import Footer from "../footer/Footer";
import Carousel from "../Carousel/Carousel";
const Main = ({ productData }) => {
  const { getAllProducts } = useFetch(); // Call the useFetch hook

  useEffect(() => {
    getAllProducts(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures it runs only once on component mount

  return (
    <div className={styles.vic}>
      <Navbar />
      <div className={styles.foto}>
        <Carousel /> {/* Use styles.foto for applying CSS class */}
        <div class="row mt-3">
          {productData &&
            productData.map((product) => (
              <div
                key={product._id}
                class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
              >
                <ProductList product={product} />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
