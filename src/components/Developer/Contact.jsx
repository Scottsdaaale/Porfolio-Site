import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useImageToggle from "../useImageToggle"; // Import the custom hook
import contactPng from "../../images/Contact.png";
import contactGif from "../../images/Contact.gif"; // Import the GIF image

const contactInfo = [
  {
    label: "Email",
    value: (
      <a href="mailto:ScottPetersonSE@gmail.com">ScottPetersonSE@gmail.com</a>
    ),
  },
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
    <>
      <p className="m-0 pt-1 pt-1" style={{ color: "white" }}>
        {label}
      </p>
      <p className="m-0 pb-1 pt-1"> {value} </p>
    </>
  );
}

function Contact() {
  // Use the custom hook for the contact image
  const contactImage = useImageToggle(contactPng, contactGif);

  return (
    <Container style={{ marginBottom: "30px" }}>
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
            <Container className="p-0">
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  width: "240px",
                }}
              >
                {contactInfo.map((info, index) => (
                  <ContactItem
                    key={index}
                    label={info.label}
                    value={info.value}
                  />
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
