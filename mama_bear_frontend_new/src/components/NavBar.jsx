import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
// import Button from 'react-bootstrap/esm/Button';
import Button from 'react-bootstrap/Button';


export const NavBar = () => {
  return (
    <>
      <Navbar 
        bg="dark"
        data-bs-theme="dark"
        expand="lg" 
        // className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">Mama Bear</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="signup/"> Sign Up</Nav.Link>
              <Nav.Link as={Link} to="login/">Log In</Nav.Link>
              <Nav.Link as={Link} to="dashboard/">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="gemini/">Gemini</Nav.Link>
              <Button variant="outline-danger">Log Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}



