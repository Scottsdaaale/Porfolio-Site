import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Tooltip } from "react-tooltip";
import useImageToggle from "../useImageToggle";
import wooliePng from "../../images/Woolie.png"
import woolieGif from "../../images/Woolie.gif"
import saturoPng from "../../images/Saturo.png";
import saturoGif from "../../images/Saturo.gif";
import liquidPng from "../../images/Liquid2.png";
import liquidGif from "../../images/Liquid.gif";
import flatironPng from "../../images/Flatiron2.png";
import flatironGif from "../../images/Flatiron.gif";
import certificatePdf from "../../images/FlatironCertificate.pdf";

function Job({
  position,
  company,
  duration,
  responsibilities,
  png,
  gif,
  link,
  tooltipContent,
}) {

  const jobImage = useImageToggle(png, gif);

  return (
    <Container>
      <Row>
        <Col xs={3} md={2} lg={2}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content={tooltipContent}
            data-tooltip-offset={30}
          >
            <img
              src={jobImage.currentImage}
              alt="Job"
              style={{ width: "100%" }}
              className="hoverable"
              onMouseEnter={jobImage.handleMouseEnter}
              onMouseLeave={jobImage.handleMouseLeave}
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
  const jobData = [
    {
      company: "Woolie.tv",
      position: "Co-Founder/Lead Developer",
      duration: "10/2023-present",
      responsibilities: [
        "Pioneered the inception and development of a captivating relaxation platform from its conceptual stages to a fully realized, engaging experience.",
        "Drove engagement strategies leading to a substantial rise in platform adoption and retention rates through active cultivation and nurturing of the user base.",
        "Iteratively enhanced platform functionality and interface based on user feedback and analytics, ensuring a seamless experience for our expanding user community."

      ],
      png: wooliePng,
      gif: woolieGif,
      link: "https://www.woolie.tv",
      tooltipContent: "woolie.tv",

    },
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
      png: saturoPng,
      gif: saturoGif,
      link: "https://www.saturosounds.com",
      tooltipContent: "Saturosounds.com",
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
      png: liquidPng,
      gif: liquidGif,
      link: "https://www.linkedin.com/company/liquid-xyz/",
      tooltipContent: "LiquidXYZ LinkedIn",
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
      png: flatironPng,
      gif: flatironGif,
      link: certificatePdf,
      tooltipContent: "Flatiron Certificate",
    },
  ];
  return (
    <Container style={{ maxWidth: "500px", marginBottom: "30px" }}>
      <h2 style={{ marginBottom: "30px" }}>Experience</h2>

      <Tooltip id="my-tooltip" />

      {jobData.map((job, index) => (
        <Job
          key={index}
          company={job.company}
          position={job.position}
          duration={job.duration}
          responsibilities={job.responsibilities}
          png={job.png}
          gif={job.gif}
          link={job.link}
          tooltipContent={job.tooltipContent}
        />
      ))}
    </Container>
  );
}

export default Experience;
