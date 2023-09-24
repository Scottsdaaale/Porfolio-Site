import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import computer from "../images/Computer.gif";
import music from "../images/Speaker4.png";
import externalLink from "../images/ExternalLink.png";
import tool from "../images/Tool2.gif";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className={`sticky-top ${scrolling ? "scrolling" : ""}`}>
      <Nav className="ms-auto">
        <Navbar.Brand as={Link} to="/" className={`hoverable ${scrolling ? "scrolling" : ""}`}>
          <img
            src={computer}
            alt="Computer"
            width="40"
            height="40"
            className="hoverable-image"
            style={{ marginRight: "10px" }}
          />
        </Navbar.Brand>

        {/* <Navbar.Brand as={Link} to="/music" className={`hoverable ${scrolling ? "scrolling" : ""}`}>
          <img
            src={music}
            alt="Music"
            width="40"
            height="40"
            className="hoverable-image"
            style={{ marginRight: "10px" }}
          />
        </Navbar.Brand> */}
        <Navbar.Brand as={Link} to="/sandbox" className={`hoverable ${scrolling ? "scrolling" : ""}`}>
          <img
            src={tool}
            alt="Sandbox page"
            width="40"
            height="40"
            className="hoverable-image"
            style={{ marginRight: "10px" }}
          />
        </Navbar.Brand> 
        <Navbar.Brand as={Link} to="https://linktr.ee/scottsdaaale" target="_blank" className={`hoverable ${scrolling ? "scrolling" : ""}`}>
          <img
            src={externalLink}
            alt="External Link"
            width="40"
            height="40"
            className="hoverable-image"
            style={{ marginRight: "10px" }} 
          />
        </Navbar.Brand>
      </Nav>
    </Navbar>
  );
};

export default Header;