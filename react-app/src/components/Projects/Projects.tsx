import './Projects.css';
import UniversityPreview from '../../images/university-page-preview.jpg';
import LibraryFormPreview from '../../images/library-form-preview.jpg';
import EminemTributePreview from '../../images/eminem-tribute-preview.jpg';
import PortfolioPreview from '../../images/portfolio-page-preview.jpg';
import LittleLemonPreview from '../../images/little-lemon.jpg';
import ProjectData from '../../Server/Projects';


export default function Projects() {
  return (
    <section className="main__section projects" id="projects">
    <h1>Projects</h1>
    <ul className="projects__list">
      {ProjectData.map(project => (
              <li className="projects__list-item">
              <img 
                src={project.image} 
                alt="website preview image"
              />
              <h2>{project.name}</h2>
              <div className="projects__line"></div>
              <ul className="projects__technologies">
                <li><i className="fa-brands fa-html5"></i></li>
                <li><i className="fa-brands fa-css3-alt"></i></li>
                <li><i className="fa-brands fa-js"></i></li>
              </ul>
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