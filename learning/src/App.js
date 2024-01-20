import React from "react";
import "./App.css";
import "./registration.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Registration />} path="/registration" />
        </Routes>
      </BrowserRouter>
      <Header />
      <SubHeader />
      <Body />
    </>
  );
}

export default App;
