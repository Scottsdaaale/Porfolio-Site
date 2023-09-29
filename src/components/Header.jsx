import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useImageToggle from "./useImageToggle";
import computerPng from "../images/Computer2.png";
import computerGif from "../images/Computer.gif";
import externalLinkPng from "../images/ExternalLink.png";
import externalLinkGif from "../images/ExternalLink.gif";
import toolPng from "../images/Tool.png";
import toolGif from "../images/Tool2.gif";

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

  const computerImage = useImageToggle(computerPng, computerGif);
  const toolImage = useImageToggle(toolPng, toolGif);
  const externalLinkImage = useImageToggle(externalLinkPng, externalLinkGif);

  return (
    <Navbar className={`sticky-top ${scrolling ? "scrolling" : ""}`}>
      <Nav className="ms-auto">
        <Navbar.Brand
          as={Link}
          to="/"
          className={`hoverable ${scrolling ? "scrolling" : ""}`}
        >
          <img
            src={computerImage.currentImage}
            alt="Computer"
            width="40"
            height="40"
            className="hoverable-image"
            style={{ marginRight: "10px" }}
            onMouseEnter={computerImage.handleMouseEnter}
            onMouseLeave={computerImage.handleMouseLeave}
          />
        </Navbar.Brand>

        <Navbar.Brand
          as={Link}
          to="/sandbox"
          className={`hoverable ${scrolling ? "scrolling" : ""}`}
        >
          <img
            src={toolImage.currentImage}
            alt="Sandbox page"
            width="40"
            height="40"
            className="hoverable-image"
            style={{ marginRight: "10px" }}
            onMouseEnter={toolImage.handleMouseEnter}
            onMouseLeave={toolImage.handleMouseLeave}
          />
        </Navbar.Brand>
        <Navbar.Brand
          as="a"
          href="https://linktr.ee/scottsdaaale"
          target="_blank"
          className={`hoverable ${scrolling ? "scrolling" : ""}`}
        >
          <img
            src={externalLinkImage.currentImage}
            alt="External Link"
            width="40"
            height="40"
            className="hoverable-image"
            style={{ marginRight: "10px" }}
            onMouseEnter={externalLinkImage.handleMouseEnter}
            onMouseLeave={externalLinkImage.handleMouseLeave}
          />
        </Navbar.Brand>
      </Nav>
    </Navbar>
  );
};

export default Header;