import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return (
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href="/home" eventKey="link-about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-education">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-work">Work Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-contacts">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    );
}

export default Navbar;