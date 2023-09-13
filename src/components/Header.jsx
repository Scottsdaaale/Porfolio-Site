import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logoImage from '../images/Pixel-logo.png'; // Import your image here

function Header() {

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#">
          {/* <img
            src={logoImage}
            alt="Cartoon Logo"
            height="70" 
          /> */}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;