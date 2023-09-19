import React from "react";
import "../Sandbox.css"
import Buttons from "./Sandbox/Buttons";
import ProgressBar from "./Sandbox/CSS Animations/ProgressBar";
import { Container, Row, Col } from "react-bootstrap";


function Sandbox() {
  return (
    <Container>
      <Row>
        <Col>
          <Buttons />
          <ProgressBar />
        </Col>
      </Row>
    </Container>
  );
}

export default Sandbox;
