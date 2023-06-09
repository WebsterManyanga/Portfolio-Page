import { Container, Row, Col } from "react-bootstrap";
import ProjectData from "../../DataTypes/ProjectData";
import './TechStack.css';

interface Props {
  project: ProjectData
}

export default function TechStack({project} : Props) {
  return (
    <Container>
      <Row className="my-4">
      {project.techStack.map((technology, i) => {
        const icon = findIcon(technology);
        return (
        <Col xs={2}>
          <i className={`fa-brands ${icon}`}></i>
        </Col>
      )})}
      </Row>
  </Container>

  )
}

function findIcon(technology: string) {
  let iconClass = '';
  switch(technology) {
    case 'html': 
      iconClass = 'fa-html5';
      break;
    case 'css': 
      iconClass = 'fa-css3-alt';
      break;
    case 'javascript': 
      iconClass = 'fa-js';
      break;
    case 'typescript': 
      iconClass = 'typescript';
      break;
    case 'react': 
      iconClass = 'fa-react';
      break;
  }

  return iconClass;
}