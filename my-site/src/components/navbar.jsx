import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNavbar() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">Mark Hilliker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#aboutPage">About</Nav.Link>
                    <Nav.Link href="#educationPage">Education</Nav.Link>
                    <Nav.Link href="#workPage">Work Experience</Nav.Link>
                    <Nav.Link href="#projectsPage">Projects</Nav.Link>
                    <Nav.Link href="#contactPage">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default SiteNavbar;