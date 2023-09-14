import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import plantOne from "../../images/Plant1.png";

function About() {
  return (
    <Container style={{ maxWidth: "500px", marginBottom: "30px" }}>
      <Row className="d-flex align-items-center">
        <Col xs={9} md={7} lg={9}>
          <h2 style={{marginBottom: "20px"}}>About</h2>
          <Container>
            <p>
              Experienced developer with a strong customer service background.
              Excels in team collaboration, problem-solving, and achieving
              company objectives. Leveraging my customer service skills to
              resolve challenges and create websites.
            </p>
          </Container>
        </Col>
        <Col xs={3} md={3} lg={2}>
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