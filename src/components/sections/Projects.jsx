import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import genrescope from "../../images/GenreScope.png";
import myclip from "../../images/MyClip.png";
import hypertyper from "../../images/HyperTyper.png";

function Project({ title, description, image }) {
  return (
    <Container>
      <Row className="">
        <Col xs={9} md={7} lg={9}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
        <Col xs={3} md={3} lg={2}>
          <img src={image} alt="Project" style={{ width: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
}

function Projects() {
  return (
    <Container style={{ maxWidth: "500px", marginBottom: "40px" }}>
      <h2 style={{ marginBottom: "30px" }}>Projects</h2>
      <Project
        title="GenreScope"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
        image={genrescope}
      />
      <Project
        title="MyClip"
        description="Consectetur adipiscing elit, sed do eiusmod tem et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
        image={myclip}
      />
      <Project
        title="HyperTyper"
        description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis o laboris nisi ut aliquip ex ea commodo."
        image={hypertyper}
      />
    </Container>
  );
}

export default Projects;