import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logoImage from '../images/pixil-frame-0 (1).png'; // Import your image here

function Header() {

  return (
    <Navbar>
      <Container>
        {/* Replace text brand with image */}
        <Navbar.Brand href="#">
          <img
            src={logoImage}
            alt="Cartoon Logo"
            height="70" 
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;