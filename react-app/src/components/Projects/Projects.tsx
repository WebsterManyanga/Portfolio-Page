import './Projects.css';
import ProjectData from '../../Server/Projects';
import TechStack from '../TechStack';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from 'react-bootstrap';


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
                <Card.Title className='card-title p-3'>{project.name}</Card.Title>
                <TechStack project={project}/>
                <Container className='mt-4'>
                  <Row className='gy-3'>
                    <Col xs={12} md={6}>
                      <a href={project.site} className='button-link py-3'>Visit Site</a>
                    </Col>
                    <Col>
                      <a href={project.github} className='button-link py-3'>Github</a>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>

  )
}
