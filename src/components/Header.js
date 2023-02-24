import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">BIPARD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='./first'>Registration</Nav.Link>
            <Nav.Link href="./login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;