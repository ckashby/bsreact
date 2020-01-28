import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const NavigationBar = props => {
  const Styles = styled.div`
    .navbar {
      background-color: aqua;
    }
    .navbar-brand .navbar-nav .nav-link {
      color: #bbb;

      &:hover {
        color: #fff;
      }
    }
  `;

  return (
    <Styles>
      <Navbar expand="md">
        <Navbar.Brand href="/">{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/products">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
