// Import React and useState, useEffect hooks
import React, { useEffect, useState } from "react";
// Import CSS file
import "./cart.css";
// Import useFetch custom hook
import useFetch from "../../hooks/useFetch";
import AddressForm from "../AddressForm/AddressForm";
import { encryptData } from "../../utils/cryptoUtils";

// Define CartPage component
function CartPage() {
  // Destructure methods from useFetch hook
  const { getData, getCartProducts } = useFetch();
  // Define state to store cart products
  const [cartProducts, setCartProducts] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  let totalBidAmount = 0;
  // Fetch cart products when component mounts
  useEffect(() => {
    getCartProducts();
  }, []);

  // Update cart products state when data is fetched
  useEffect(() => {
    if (getData && getData.data && getData.data.products) {
      setCartProducts(getData.data.products);
    }
  }, [getData]);

  // Update productIds state whenever cartProducts change
  useEffect(() => {
    const ids = cartProducts.map((product) => product._id);
    setProductIds(ids);
    sessionStorage.setItem("productIds", encryptData(JSON.stringify(ids)));
  }, [cartProducts]);

  // Function to calculate total bid amount
  const calculateTotalBidAmount = () => {
    cartProducts.forEach((product) => {
      if (product.bidders.length > 0) {
        totalBidAmount += product.bidders[0].bidAmount;
      }
    });
    return totalBidAmount;
  };

  const handlePlaceOrderClick = () => {
    setShowAddressForm(true); // Show AddressForm when Place Order button is clicked
  };

  // Render component JSX
  return (
    <>
      <div className="small-container cart-page">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Bid Amount</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className="cart-info">
                    <img
                      src={`http://localhost:5000/${product.avatar}`}
                      alt=""
                      className="cart-image"
                    />
                    <div>
                      <p>{product.title}</p> {/* Change to product.title */}
                      <small>Rs. {product.price}</small>
                      <br />
                    </div>
                  </div>
                </td>
                <td>1</td>
                <td>{product.price}</td>
                <td>
                  {product.bidders.length > 0
                    ? product.bidders[0].bidAmount
                    : "N/A"}
                </td>
                <td>
                  {product.bidders.length > 0
                    ? product.bidders[0].bidAmount
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
          <table className="subtotal-table">
            <tbody>
              <tr>
                <td>Total</td>
                <td>{calculateTotalBidAmount()}</td>
              </tr>
              <tr>
                <td className="place-order">
                  <button onClick={handlePlaceOrderClick}>Place Order</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        {showAddressForm && (
          <AddressForm
            cartProducts={cartProducts}
            totalBidAmount={totalBidAmount}
            setShowAddressForm={setShowAddressForm}
          />
        )}{" "}
        {/* Render AddressForm only if showAddressForm is true */}
      </div>
    </>
  );
}

// Export CartPage component
export default CartPage;
