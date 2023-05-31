import './Projects.css';
import UniversityPreview from '../../images/university-page-preview.jpg';
import LibraryFormPreview from '../../images/library-form-preview.jpg';
import EminemTributePreview from '../../images/eminem-tribute-preview.jpg';
import PortfolioPreview from '../../images/portfolio-page-preview.jpg';
import LittleLemonPreview from '../../images/little-lemon.jpg';
import ProjectData from '../../Server/Projects';
import TechStack from '../TechStack';


export default function Projects() {
  return (
    <section className="main__section projects" id="projects">
    <h1>Projects</h1>
    <ul className="projects__list">
      {ProjectData.map((project, index) => (
              <li className="projects__list-item" key={index}>
              <img 
                src={project.image} 
                alt="website preview image"
              />
              <h2>{project.name}</h2>
              <div className="projects__line"></div>
              <TechStack project={project} />
              <div className="projects__links">
                <a href={project.site} className="button-link">
                  Visit Site
                </a>
                <a
                  href={project.github} 
                  className="button-link"
                  target="_blank"
                >
                  Github Repo
                </a>
              </div>
            </li>
      ))}
    </ul>
  </section>

  )
}
