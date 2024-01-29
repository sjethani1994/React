import React, { useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import ProductContext from "../contexts/ProductContext";
import HeaderContext from "../contexts/HeaderContext";
export default function ContextProvider({ children }) {
  const [enableHeader, setEnableHeader] = useState(false);
  const [enablebtn, setEnablebtn] = useState(true);

  const [login, setLogin] = useState(localStorage.getItem("login") === "true");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (login) {
      localStorage.setItem("login", "true");
    } else {
      localStorage.removeItem("login");
    }
  }, [login]);
  return (
    <UserContext.Provider
      value={{ enableHeader, setEnableHeader, setLogin, login }}
    >
      <ProductContext.Provider value={{ enablebtn, setEnablebtn }}>
        <HeaderContext.Provider value={{ username, setUsername }}>
          {children}
        </HeaderContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}
