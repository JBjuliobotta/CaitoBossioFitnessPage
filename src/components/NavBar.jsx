import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavLogoCB from "/src/assets/CaitoBosio_logo2-removebg-preview.png"

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" className="bg-black bg-gradient fixed-top">
        <Container>
        <NavLink to="/">
            <img
              src={NavLogoCB}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="Caito Bosio"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-4 fw-bold">
              <a href="#index" className={"nav-link"}>Inicio</a>
              <a href="#method" className={"nav-link"}>Método</a>
              <a href="#about" className={"nav-link"}>Quién Soy</a>
              <a href="#asesorias" className={"nav-link"}>Asesorías</a>
              <a href="#contact" className={"nav-link"}>Contacto</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
