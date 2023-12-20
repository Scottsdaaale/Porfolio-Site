import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useImageToggle from "../useImageToggle";
import plantPng from "../../images/Plant.png";
import plantGif from "../../images/Plant.gif";

function About() {
  // Use the custom hook for the plant image
  const plantImage = useImageToggle(plantPng, plantGif);

  return (
    <Container style={{ marginBottom: "30px" }}>
      <Row className="d-flex align-items-center">
        <Col xs={9} md={7} lg={9}>
          <h2 style={{ marginBottom: "20px" }}>About</h2>
          <Container>
            <p>
              Creative web developer with 2 years of experience. Effective
              communicator and adept problem-solver. Spearheaded a startup from
              inception. Proficient in crafting innovative, user-friendly
              websites. Enthusiastic about designing visually captivating
              interfaces and optimizing user experiences. Eager to apply skills
              and expertise to drive success within a vibrant organization.
            </p>
          </Container>
        </Col>
        <Col xs={3} md={2} lg={2}>
          <img
            src={plantImage.currentImage}
            alt="Plant"
            style={{ width: "100%" }}
            className="mx-auto d-block"
            onMouseEnter={plantImage.handleMouseEnter}
            onMouseLeave={plantImage.handleMouseLeave}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
