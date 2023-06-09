import './Projects.css';
import ProjectData from '../../Server/Projects';
import TechStack from '../TechStack';
import Card from 'react-bootstrap/Card';


export default function Projects() {
  return (
    <section className="main__section projects" id="projects">
    <h1>Projects</h1>
    <ul className="projects__list">
      {ProjectData.map((project, index) => (
          <Card>
            <Card.Img 
              variant='top' 
              src={project.image} 
              alt='website preview image'
            />     
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Body>
                <TechStack project={project}/>
              </Card.Body>
              <Card.Link href={project.site}>Visit Site</Card.Link>
              <Card.Link href={project.github}>Github Repo</Card.Link>
            </Card.Body>

          </Card>
      ))}
    </ul>
  </section>

  )
}
