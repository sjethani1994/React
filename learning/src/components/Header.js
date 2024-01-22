import React, { useState } from "react";
import "../styles/header.css";
import Registration from "./Registration";
export default function Header({ username }) {
  const [toggle, setToggle] = useState(false);

  console.log(username)
  function OpenModal() {
    setToggle(true);
  }

  return (
    <>
      <div style={{}}>
        <h4 onClick={OpenModal}>This is header {username}</h4>
      </div>

      {toggle && (
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "grey",
            position: "fixed",
            top: "0",
            left: "0",
          }}
        >
          <Registration setToggle={setToggle} />
        </div>
      )}
    </>
  );
}
