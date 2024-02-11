import React, { useEffect } from "react";
import styles from "./style.module.css"; // Import CSS module
import useFetch from "../../hooks/useFetch"; // Import the useFetch hook
import ProductList from "../productList/ProductList";
const Main = () => {
  const { getData, getAllProducts } = useFetch(); // Call the useFetch hook

  useEffect(() => {
    getAllProducts();
    console.log(getData) // Fetch data when the component mounts
  }, []); // Empty dependency array ensures it runs only once on component mount

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.vic}>
      {" "}
      {/* Use styles.vic for applying CSS class */}
      <h2>Successful</h2>
      <nav>
        {" "}
        {/* Use <nav> instead of <navbar> */}
        <button className={styles.white_btn} onClick={handleLogout}>
          <h3>Logout</h3>
        </button>
      </nav>
      <div className={styles.foto}>
        {" "}
        {/* Use styles.foto for applying CSS class */}
        {getData &&
          getData.map((product) => (
            <ProductList key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Main;
