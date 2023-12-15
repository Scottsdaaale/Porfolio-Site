import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useImageToggle from "../useImageToggle";
import genrescopePng from "../../images/GenreScope.png";
import genrescopeGif from "../../images/GenreScope.gif";
import myclipPng from "../../images/MyClip.png";
import myclipGif from "../../images/MyClip.gif";
import hypertyperPng from "../../images/HyperTyper.png";
import hypertyperGif from "../../images/HyperTyper.gif";
 
function Project({ title, description, png, gif, githubLink }) {
  const jobImage = useImageToggle(png, gif);
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col xs={9} md={7} lg={9}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
        <Col xs={3} md={2} lg={2}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img
              src={jobImage.currentImage}
              alt="Project"
              style={{ width: "100%" }}
              className="hoverable"
              onMouseEnter={jobImage.handleMouseEnter}
              onMouseLeave={jobImage.handleMouseLeave}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

function Projects() {
  const projectInfo = [
    {
      title: "GenreScope",
      description:
        "Allows users to discover new music by searching through thousands of genres. Find artists, videos, songs, and playlists.",
      png: genrescopePng,
      gif: genrescopeGif,
      githubLink: "https://github.com/Scottsdaaale/GenreScope",
    },
    {
      title: "MyClip",
      description:
        "A video game clip social media site. Features login, comment, and star rating systems.",
      png: myclipPng,
      gif: myclipGif,
      githubLink: "https://github.com/Scottsdaaale/MyClip",
    },
    {
      title: "HyperTyper",
      description:
        "A simple speed typing app made collaboratively during my time at Flatiron School.",
      png: hypertyperPng,
      gif: hypertyperGif,
      githubLink: "https://github.com/Scottsdaaale/HyperTyper",
    },
  ];

  return (
    <Container style={{ maxWidth: "500px", marginBottom: "40px" }}>
      <h2 style={{ marginBottom: "30px" }}>Projects</h2>
      {projectInfo.map((info, index) => (
        <Project
          key={index}
          title={info.title}
          description={info.description}
          png={info.png}
          gif={info.gif}
          githubLink={info.githubLink}
        />
      ))}
    </Container>
  );
}

export default Projects;
