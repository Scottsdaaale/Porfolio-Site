import React from "react";
import Intro from "./Developer/Intro";
import About from "./Developer/About";
import Experience from "./Developer/Experience";
import Projects from "./Developer/Projects";
import Contact from "./Developer/Contact";
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
