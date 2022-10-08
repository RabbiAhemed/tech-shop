import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="menu">
          <Navbar.Brand href="#">
            <img
              src="https://i.ibb.co/phynNKG/tech-star.png"
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Desktop</Nav.Link>
              <Nav.Link>Laptop</Nav.Link>
              <Nav.Link>Monitors & Drives</Nav.Link>
              <NavDropdown title="Fashion" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Women</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Jewelery</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
