import React from "react";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Container, Row } from "react-bootstrap";

function Main() {
  return (
    <Container>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </Container>
  );
}

export default Main;
