import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container style={{ maxWidth: "500px", marginBottom: "30px" }}>
      <Row>
        <Col xs={9} md={7} lg={9}>
          <h2 style={{ marginBottom: "20px" }}>Contact</h2>
          <Container>
            <h3>
              Github: 
            </h3>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
