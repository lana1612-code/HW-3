import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {  Link} from "react-router-dom"
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="text-dark link-underline link-underline-opacity-0 px-5">Home</Link>
            <Link to="/resturant" className="text-dark link-underline link-underline-opacity-0 px-5">Resturant</Link>
            <Link to="/products" className="text-dark link-underline link-underline-opacity-0 px-5">Products</Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;