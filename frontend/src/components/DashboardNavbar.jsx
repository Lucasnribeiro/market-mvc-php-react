import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function DashboardNavbar() {


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as='div'><Link to={'/dashboard'}>Dashboard</Link> </Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item  as='div'><Link to={'/users'}>Users</Link></NavDropdown.Item>
              <NavDropdown.Item  as='div'><Link to={'/products'}>Produtos</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DashboardNavbar;