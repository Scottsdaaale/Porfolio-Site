import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useImageToggle from "../useImageToggle"; // Import the custom hook
import contactPng from "../../images/Contact.png";
import contactGif from "../../images/Contact.gif"; // Import the GIF image

const contactInfo = [
  { label: "Email", value: <a href="mailto:ScottPetersonSE@gmail.com">ScottPetersonSE@gmail.com</a> },
  {
    label: "LinkedIn",
    value: (
      <a
        href="https://www.linkedin.com/in/scotty-peterson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Scotty Peterson
      </a>
    ),
  },
];

function ContactItem({ label, value }) {
  return (
    <React.Fragment>
      <p className="m-0 p-2" style={{ color: "white" }}>{label}</p>
      <p className="m-0 p-2"> {value}</p>
    </React.Fragment>
  );
}

function Contact() {
  // Use the custom hook for the contact image
  const contactImage = useImageToggle(contactPng, contactGif);

  return (
    <Container style={{ maxWidth: "500px", marginBottom: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Contact</h2>
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={3} md={2} lg={2}>
            <img
              src={contactImage.currentImage}
              alt="Contact"
              className="img-fluid"
              onMouseEnter={contactImage.handleMouseEnter}
              onMouseLeave={contactImage.handleMouseLeave}
            />
          </Col>
          <Col xs={9} md={7} lg={9}>
            <Container>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  width: "250px",
                }}
              >
                {contactInfo.map((info, index) => (
                  <ContactItem key={index} label={info.label} value={info.value} />
                ))}
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
