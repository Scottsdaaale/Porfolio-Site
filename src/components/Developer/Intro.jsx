import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoImage from "../../images/Me3.png";

function Intro() {
  return (
    <Container
      style={{ maxWidth: "500px", marginTop: "", marginBottom: "50px" }}
    >
      <Row className="align-items-center justify-content-center">
        <Col xs={3} md={3} lg={3}>
          <img
            src={logoImage}
            alt="Logo"
            className="img"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </Col>
        <Col xs={9} md={9} className="d-flex flex-column">
          <h1>Hello, my name is Scotty Peterson...</h1>
          <p style={{ margin: "0" }}>Developer, Musician, Cat and Plant Dad</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
