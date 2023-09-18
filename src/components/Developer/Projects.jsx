import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import genrescope from "../../images/GenreScope.png";
import myclip from "../../images/MyClip.png";
import hypertyper from "../../images/HyperTyper.png";

function Project({ title, description, image, githubLink }) {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col xs={9} md={7} lg={9}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
        <Col xs={2} md={2} lg={2}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="Project" style={{ width: "100%" }} className="hoverable" />
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
      description: "Allows users to discover new music by searching through thousands of genres. Find artists, videos, songs, and playlists.",
      image: genrescope,
      githubLink: "https://github.com/Scottsdaaale/GenreScope",
    },
    {
      title: "MyClip",
      description: "A video game clip social media site. Features login, comment, and star rating systems.",
      image: myclip,
      githubLink: "https://github.com/Scottsdaaale/MyClip",
    },
    {
      title: "HyperTyper",
      description: "HyperTyper is a simple speed typing app made collaboratively during my time at Flatiron School.",
      image: hypertyper,
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
          image={info.image}
          githubLink={info.githubLink}
        />
      ))}
    </Container>
  );
}

export default Projects;
