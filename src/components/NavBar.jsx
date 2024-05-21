import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="light" className="bg-body-tertiary fixed-top">
        <Container>
        <NavLink to="/">
            <img
              src="src/assets/CaitoBosio_logo2-removebg-preview.png"
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="Caito Bosio"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-4">
              <NavLink to="/" className={"nav-link"}>Inicio</NavLink>
              <NavLink to="/aboutme" className={"nav-link"}>Quién Soy</NavLink>
              <NavLink to="/asesories" className={"nav-link"}>Asesorías</NavLink>
              <NavLink to="/contactme" className={"nav-link"}>Contacto</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
