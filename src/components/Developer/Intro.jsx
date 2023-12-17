import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoImage from "../../images/Me.gif";
import FadeInWrapper from "../FadeInWrapper";

function Intro() {

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
              className=""
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </FadeInWrapper>
        </Col>
        <Col xs={7} md={9} className="d-flex flex-column">
          <FadeInWrapper delay={1800}>
            <h1
              className=""
            >
              Hello, my name is Scotty Peterson...
            </h1>
          </FadeInWrapper>
          <FadeInWrapper delay={3000}>
            <p
              className=""
              style={{ margin: "0" }}
            >
              Developer, Musician, Plant and Cat Dad
            </p>
          </FadeInWrapper>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
