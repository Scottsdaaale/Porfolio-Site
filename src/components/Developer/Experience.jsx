import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Tooltip } from 'react-tooltip'
import saturo from "../../images/Saturo2.png";
import liquid from "../../images/Liquid2.png";
import flatiron from "../../images/Flatiron2.png";
import certificatePdf from "../../images/FlatironCertificate.pdf";

const jobData = [
  {
    company: "Saturo Sounds",
    position: "WordPress Engineer",
    duration: "Freelance | 07/2023 - 09/2023",
    responsibilities: [
      "Redesigned music label website, creating a modern and engaging design.",
      "Utilized Elementor Pro and custom coding for a dynamic and responsive user interface.",
      "Collaborated closely with the client's team to translate unique requirements into site features.",
      "Simplified site management for clients through intuitive interfaces and thorough documentation, ensuring smooth updates even post-departure.",
    ],
    image: saturo,
    link: "http://www.saturosounds.com",
  },
  {
    company: "LiquidXYZ",
    position: "Junior Fullstack Developer",
    duration: "Freelance | 7/2022 - 10/2022",
    responsibilities: [
      "Designed effective and user-friendly page layouts and navigation.",
      "Managed project priorities and timelines through clear communication.",
      "Implemented front-end code using JavaScript and Object-Oriented Programming.",
      "Utilized technologies like HTML, CSS, and XML for web development.",
    ],
    image: liquid,
    link: "https://www.linkedin.com/company/liquid-xyz/",
  },
  {
    company: "Flatiron School",
    position: "Fullstack Engineer Apprentice",
    duration: "02/2022 - 06/2022",
    responsibilities: [
      "Developed web applications using various programming languages.",
      "Maintained up-to-date knowledge of technology trends and products.",
      "Ensured accuracy and functionality of websites.",
      "Validated code for security and cross-browser compatibility. Designed websites and large-scale web applications, documenting test plans and procedures.",
    ],
    image: flatiron,
    link: certificatePdf,
  },
];

function Job({ position, company, duration, responsibilities, image, link }) {
  return (
    <Container>
      <Row>
        <Col xs={2} md={2} lg={2}>
          <a
            href={link}
            target="_blank"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content={link}
            data-tooltip-offset={30}
          >
            <img
              src={image}
              alt="Job"
              style={{ width: "100%" }}
              className="hoverable"
            />
          </a>
        </Col>
        <Col xs={9} md={7} lg={9}>
          <div className="mb-4">
            <h3>{position}</h3>
            <p>{company}</p>
            <p>{duration}</p>
            <ul>
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Experience() {
  return (
    <Container style={{ maxWidth: "500px", marginBottom: "30px" }}>
      <h2 style={{ marginBottom: "30px" }}>Experience</h2>

      {/* Initialize the tooltip */}
      <Tooltip id="my-tooltip"  />

      {jobData.map((job, index) => (
        <Job
          key={index}
          company={job.company}
          position={job.position}
          duration={job.duration}
          responsibilities={job.responsibilities}
          image={job.image}
          link={job.link}
        />
      ))}
    </Container>
  );
}

export default Experience;

