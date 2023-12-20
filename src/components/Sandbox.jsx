import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setVisitedRoot } from "../redux/visitedSlice";
import { Container, Row, Col } from "react-bootstrap";
import "../Sandbox.css";
import Buttons from "./Sandbox/Buttons";
import SandboxPopup from "./SandboxPopup";
import ProgressBar from "./Sandbox/Widgets/ProgressBar";
import ColorChange from "./Sandbox/Widgets/ColorChange";
import Popup from "./Sandbox/Widgets/Popup";
import Clock from "./Sandbox/Widgets/Clock";
import Translator from "./Sandbox/Widgets/Translator/Translator";
import WriteOutText from "./Sandbox/Widgets/WriteOutText";
import ColorWriteOutText from "./Sandbox/Widgets/ColorWriteOutText";
import RandomQuotes from "./Sandbox/Widgets/RandomQuotes/RandomQuotes";


import useDocumentTitle from "./useDocumentTitle";

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
    <Container>
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
        </Row>
        <Row>
          <Col className="mb-4">
            <WriteOutText />
          </Col>
          <Col className="mb-4">
            <ColorWriteOutText />
          </Col>
        </Row>
    </Container>
  );
}

export default Sandbox;


