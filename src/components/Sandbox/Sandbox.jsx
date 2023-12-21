import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setVisitedRoot } from "../../redux/visitedSlice";
import { Container, Row, Col } from "react-bootstrap";
import "./Sandbox.css";
import Buttons from "./Buttons";
import SandboxPopup from "./SandboxPopup";
import ProgressBar from "./Widgets/ProgressBar";
import ColorChange from "./Widgets/ColorChange";
import Popup from "./Widgets/Popup";
import Clock from "./Widgets/Clock";
import Translator from "./Widgets/Translator/Translator";
import WriteOutText from "./Widgets/WriteOutText";
import ColorWriteOutText from "./Widgets/ColorWriteOutText";
import RandomQuotes from "./Widgets/RandomQuotes/RandomQuotes";


import useDocumentTitle from "../Tools/useDocumentTitle";

function Sandbox() {
  useDocumentTitle("Sandbox");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setVisitedRoot(true));
  }, [dispatch]);

  return (
    <Container style={{ maxWidth: "500px" }}>
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
          <RandomQuotes />
        </Col>
        <Col className="mb-4">
          <Clock />
        </Col>
        <Row>
          <Col className="mb-4">
            <WriteOutText />
          </Col>
          <Col className="mb-4">
            <ColorWriteOutText />
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Sandbox;


