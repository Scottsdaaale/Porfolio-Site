import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import plantOne from "../../images/Plant1.png";

function About() {
  return (
    <Container style={{ maxWidth: "500px" }}>
      <Row className="d-flex align-items-center">
        <Col xs={9} md={7} lg={9}>
          <p>About</p>
          <p style={{ color: "grey" }}>
            Experienced developer with a strong customer service background.
            Excels in team collaboration, problem-solving, and achieving company
            objectives. Leveraging my customer service skills to resolve
            challenges and create websites.
          </p>
        </Col>
        <Col xs={3} md={3} lg={3}>
          <img
            src={plantOne}
            alt="Plant"
            style={{ width: "100%" }}
            className="mx-auto d-block"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
