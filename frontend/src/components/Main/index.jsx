import React, { useEffect, useState } from "react";
import styles from "./style.module.css"; // Import CSS module
import useFetch from "../../hooks/useFetch"; // Import the useFetch hook
import ProductList from "../productList/ProductList";
import OurPartner from "../OurPartner/OurPartner";
import NewNavbar from "../NewNavBar/NewNavbar";
const Main = ({ productData }) => {
  const { getData, getAllProducts } = useFetch(); // Call the useFetch hook

  const [apiData, setData] = useState([]);

  useEffect(() => {
    getAllProducts(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures it runs only once on component mount

  useEffect(() => {
    if (getData && productData.length <= getData.length) {
      setData(getData);
    } else {
      setData(productData);
    }
  }, [getData, productData]);

  return (
    <>
      <NewNavbar />
      <div className={styles.vic}>
        <div className={styles.foto}>
          <div class="row mt-3">
            {apiData &&
              apiData.map((product) => (
                <div
                  key={product._id}
                  class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                >
                  <ProductList product={product} />
                </div>
              ))}
          </div>
          <div class="row">
            <OurPartner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
