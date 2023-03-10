import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  OverlayTrigger,
  Image,
  Popover,
  Button,
} from "react-bootstrap";
import ProfileToolTip from "./ProfileToolTip";
import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

// import { Cart } from "react-bootstrap-icons";

const Header = () => {
  const { currentUser, logout } = useAuth();

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">profile</Popover.Header>
      <Popover.Body>
        <Button
          onClick={() => {
            logout();
            console.log("logout");
          }}
        >
          Logout
        </Button>
      </Popover.Body>
    </Popover>
  );
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>BookStore</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {currentUser == null ? (
            <Nav>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/register">Register</Link>
              </Nav.Link>
            </Nav>
          ) : (
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Image
                roundedCircle
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETtEUw-If3qwF6J_Q73SwKHZHKcHMz5xjjaUFIIReYw&s"
                width={36}
                height={36}
              />
            </OverlayTrigger>
          )}
          {/* <Cart /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
