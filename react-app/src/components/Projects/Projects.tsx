import './Projects.css';
import ProjectData from '../../Server/Projects';
import TechStack from '../TechStack';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';


export default function Projects() {
  return (
    <section className="main__section projects" id="projects">
    <h1>Projects</h1>
    <Container >
      <Row>
        {ProjectData.map((project, index) => (
          <Col md={6} lg={4} className='my-4'>
            <Card>
              <Card.Img 
                variant='top' 
                src={project.image} 
                alt='website preview image'
              />     
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <TechStack project={project}/>
                <Card.Link href={project.site} className='button-link'>Visit Site</Card.Link>
                <Card.Link href={project.github} className='button-link'>Github Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>

  )
}
