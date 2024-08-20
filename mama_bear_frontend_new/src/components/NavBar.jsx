import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { logOut } from '../utilities';

function NavBar({ user, setUser }) {

    const handleClick = async () => {
        setUser(await logOut());
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
            <Container>
                {user ? (
                    <>
                        <Navbar.Brand as={Link} to="/">Homepage</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/gemini">Nanny Genie</Nav.Link>
                        <Button onClick={handleClick} variant="light grey" className="ms-auto">Log Out</Button>
                        </Nav>
                    </>
                ) : (
                    <>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/signup/">Sign Up</Nav.Link>
                                <Nav.Link as={Link} to="/login/">Log In</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </>
                )}
            </Container>
        </Navbar>
    );
}

export default NavBar;




