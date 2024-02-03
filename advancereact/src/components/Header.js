import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const ctx = useContext(UserContext);

  function handleLogout() {
    ctx.setLogin(false);
    navigate("/");
  }

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary header-navbar"
      bg="light"
      sticky="top"
      data-bs-theme="light"
      style={{ height: "70px" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/home"
              className={({ isActive }) => {
                return `nav-link ${
                  isActive ? "orange" : "black"
                }`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => {
                return `nav-link ${
                  isActive ? "orange" : "black"
                }`;
              }}
            >
              About
            </NavLink>
          </Nav>
          <Form className="d-flex p-0 m-0 border-0">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{
                fontSize: "14px",
                height: "40px",
                display: "inline-block",
                marginTop: "6px",
                width: "300px",
              }}
            />
            <Button
              variant="outline-success"
              style={{ width: "100px", marginTop: "8px" }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
