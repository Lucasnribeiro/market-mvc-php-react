import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function ShopNavbar() {


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to={'/shop'}>Shop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as='div'><Link to={'/orders'}>Minhas Compras</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShopNavbar;