import React from "react";
import "../Sandbox.css";
import Buttons from "./Sandbox/Buttons";
import SandboxPopup from "./SandboxPopup";
import ProgressBar from "./Sandbox/Widgets/ProgressBar";
import ColorChange from "./Sandbox/Widgets/ColorChange";
import Popup from "./Sandbox/Widgets/Popup";
import Clock from "./Sandbox/Widgets/Clock";
import Translator from "./Sandbox/Widgets/Translator/Translator";
import { Container, Row, Col } from "react-bootstrap";

function Sandbox() {
  return (
    <Container >
      <SandboxPopup />
      <Row>
        <Col className="mb-4">
          <ProgressBar />
        </Col>
        <Col className="mb-4">
          <ColorChange />
        </Col>
        <Col className="mb-4">
          <Translator />
        </Col>
      </Row>
      <Row>
        <Col className="mb-4">
          <Popup />
        </Col>
        <Col className="mb-4">
          <Clock />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Sandbox;
