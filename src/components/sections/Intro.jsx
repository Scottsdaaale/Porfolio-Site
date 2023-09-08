import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoImage from "../../images/Me.png"; // Import the image

function Intro() {
  return (
    <Container style={{ maxWidth: "500px", marginTop: "",marginBottom: "50px" }}>
      <Row className="align-items-center justify-content-center">
        {/* Image */}
        <Col xs={3} sm={2} md={2} lg={3}>
          <img
            src={logoImage}
            alt="Logo"
            className="img"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </Col>
        <Col xs={9} sm={10} md={9}  className="d-flex flex-column">
          <h1 style={{ fontSize: "18px" }}>Hello, my name is Scotty...</h1>
          <p style={{ fontSize: "15px", color: "grey", margin: "0" }}>
            Developer, Musician, Cat and Plant Dad
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;