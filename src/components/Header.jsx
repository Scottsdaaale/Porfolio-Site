import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useImageToggle from "./useImageToggle";
import computerPng from "../images/Computer2.png";
import computerGif from "../images/Computer.gif";
// import blogPng from "../images/Blog.png";
// import blogGif from "../images/Blog.gif";
import externalLinkPng from "../images/ExternalLink.png";
import externalLinkGif from "../images/ExternalLink.gif";
import toolPng from "../images/Tool.png";
import toolGif from "../images/Tool2.gif";
import FadeInWrapper from "./FadeInWrapper";

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
  // const blogImage = useImageToggle(blogPng, blogGif);
  const externalLinkImage = useImageToggle(externalLinkPng, externalLinkGif);

  return (
    <Navbar className={`sticky-top ${scrolling ? "scrolling" : ""}`}>
      <Nav className="ms-auto">
        <Navbar.Brand
          as={Link}
          to="/"
          className={`hoverable ${scrolling ? "scrolling" : ""}`}
        >
          <FadeInWrapper delay={5000}>
            <img
              src={computerImage.currentImage}
              alt="Porfolio Page"
              width="40"
              height="40"
              className="hoverable-image"
              style={{ marginRight: "10px" }}
              onMouseEnter={computerImage.handleMouseEnter}
              onMouseLeave={computerImage.handleMouseLeave}
            />
          </FadeInWrapper>
        </Navbar.Brand>
        <Navbar.Brand
          as={Link}
          to="/sandbox"
          className={`hoverable ${scrolling ? "scrolling" : ""}`}
        >
          <FadeInWrapper delay={5300}>
            <img
              src={toolImage.currentImage}
              alt="Sandbox Page"
              width="40"
              height="40"
              className="hoverable-image"
              style={{ marginRight: "10px" }}
              onMouseEnter={toolImage.handleMouseEnter}
              onMouseLeave={toolImage.handleMouseLeave}
            />
          </FadeInWrapper>
        </Navbar.Brand>
        <Navbar.Brand
          as={Link}
          to="/blog"
          className={`hoverable ${scrolling ? "scrolling" : ""}`}
        >
          <FadeInWrapper delay={5000}>
            <img
              src={computerImage.currentImage}
              alt="Blog Page"
              width="40"
              height="40"
              className="hoverable-image"
              style={{ marginRight: "10px" }}
              onMouseEnter={computerImage.handleMouseEnter}
              onMouseLeave={computerImage.handleMouseLeave}
            />
          </FadeInWrapper>
        </Navbar.Brand>
        <Navbar.Brand
          as="a"
          href="https://linktr.ee/scottsdaaale"
          target="_blank"
          className={`hoverable ${scrolling ? "scrolling" : ""}`}
        >
          <FadeInWrapper delay={5600}>
            <img
              src={externalLinkImage.currentImage}
              alt="Link Tree"
              width="40"
              height="40"
              className="hoverable-image"
              style={{ marginRight: "10px" }}
              onMouseEnter={externalLinkImage.handleMouseEnter}
              onMouseLeave={externalLinkImage.handleMouseLeave}
            />
          </FadeInWrapper>
        </Navbar.Brand>
        
      </Nav>
    </Navbar>
  );
};

export default Header;
