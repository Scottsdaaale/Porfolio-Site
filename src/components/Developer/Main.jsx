import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setVisitedRoot } from "../../redux/visitedSlice";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { Container } from "react-bootstrap";
import FadeInWrapper from "../FadeInWrapper";
import useDocumentTitle from "../Tools/useDocumentTitle";

function Main() {
  const dispatch = useDispatch();

  useDocumentTitle("Portfolio");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   dispatch(setVisitedRoot(false));
  // }, [dispatch]);
  return (
    <Container style={{maxWidth: "500px"}} >
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
