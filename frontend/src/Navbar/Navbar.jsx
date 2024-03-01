import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import eAuctionLogo from "../assests/eAutionLogo.png";
import usePost from "../hooks/usePost";
import Swal from "sweetalert2";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { data, getUserHighestBidCount, depositMoney } = usePost();
  useEffect(() => {
    getUserHighestBidCount();
  }, []); // Empty dependency array ensures it runs only once on component mount

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("biddersData");
    sessionStorage.removeItem("userData");
    window.location.reload();
  };

  const addMoneyToWallet = () => {
    Swal.fire({
      title: "Add Money to Wallet",
      input: "number",
      inputAttributes: {
        step: "any", // Allow decimal numbers
        min: 0, // Set minimum value to 0
      },
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const amount = result.value;
        if (amount !== "" && amount >= 0) {
          const response = await depositMoney(amount);
          try {
            if (response.status === 200) {
              Swal.fire("Saved!", `Added ${amount} Rs to wallet.`, "success");
            }
          } catch (error) {
            Swal.fire("Invalid Amount", "Amount adding failed.", "error");
          }
        } else {
          Swal.fire("Invalid Amount", "Please enter a valid amount.", "error");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <nav>
      <div style={{ flex: "1" }}>
        <NavLink exact="true" activeclassname="active" to={"/"}>
          <img
            src={eAuctionLogo}
            className="img-responsive"
            alt="eAuction"
            style={{ width: "200px", height: "100px" }}
          />
        </NavLink>
      </div>
      <div>
        <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
          <li>
            <NavLink exact="true" activeclassname="active" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to={"/addproduct"}>
              Add Product
            </NavLink>
          </li>
          <li>
            <Link activeclassname="active" onClick={addMoneyToWallet}>
              Add Money
            </Link>
          </li>
          <li>
            <NavLink activeclassname="active" to={"/aboutus"}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to={"/profile"}>
              Profile
            </NavLink>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <Link className="cart" to={"/cart"}>
              <span className="count">{data || 0}</span>
              <i className="fa-solid fa-cart-shopping material-icons"></i>
            </Link>
          </li>
          <li>
            <a href="#top" onClick={handleLogout}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
