import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoImage from "../../images/Me.gif";
import FadeInWrapper from "../FadeInWrapper";

function Intro() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Use a state variable to trigger the fade-in effect
    setFadeIn(true);
  }, []);

  return (
    <Container
      style={{ maxWidth: "500px", marginTop: "", marginBottom: "50px" }}
    >
      <Row className="align-items-center justify-content-center">
        <Col xs={4} md={3} lg={3}>
          <FadeInWrapper delay={0}>
            <img
              src={logoImage}
              alt="Logo"
              className={`img-fade-in ${fadeIn ? "fade-in" : ""}`} // Apply the "img-fade-in" class conditionally
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </FadeInWrapper>
        </Col>
        <Col xs={7} md={9} className="d-flex flex-column">
          <FadeInWrapper delay={1800}>
            <h1
              className={`h1-fade-in ${fadeIn ? "fade-in" : ""}`} // Apply the "h1-fade-in" class conditionally
            >
              Hello, my name is Scotty Peterson...
            </h1>
          </FadeInWrapper>
          <FadeInWrapper delay={3000}>
            <p
              className={`p-fade-in ${fadeIn ? "fade-in" : ""}`} // Apply the "p-fade-in" class conditionally
              style={{ margin: "0" }}
            >
              Developer, Musician, Cat and Plant Dad
            </p>
          </FadeInWrapper>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
