import React from "react";
import Intro from "./Developer/Intro";
import About from "./Developer/About";
import Experience from "./Developer/Experience";
import Projects from "./Developer/Projects";
import Contact from "./Developer/Contact";
import { Container } from "react-bootstrap";
import FadeInWrapper from "./FadeInWrapper";
import useDocumentTitle from "./useDocumentTitle";

function Main() {
  useDocumentTitle("Portfolio");
  return (
    <Container>
      <Intro />
      <FadeInWrapper delay={5000}>
        <About />
      </FadeInWrapper>
      <FadeInWrapper delay={5200}>
        <Experience />
      </FadeInWrapper>
      <FadeInWrapper delay={5400}>
        <Projects />
      </FadeInWrapper>
      <FadeInWrapper delay={5600}>
        <Contact />
      </FadeInWrapper>
    </Container>
  );
}

export default Main;
