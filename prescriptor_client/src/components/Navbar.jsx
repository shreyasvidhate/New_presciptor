import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { FaHistory } from "react-icons/fa";
import { SlNote } from "react-icons/sl";

function NavBar() {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
            PRESCRIPTOR
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{
                fontWeight: "bold",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SlNote
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  margin: "0 8px",
                }}
              />
              Prescription
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{
                fontWeight: "bold",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaHistory
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  margin: "0 8px",
                }}
              />
              History
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
