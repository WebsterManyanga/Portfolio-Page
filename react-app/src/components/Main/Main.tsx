import './Main.css';
import UniversityPreview from '../../images/university-page-preview.jpg';
import LibraryFormPreview from '../../images/library-form-preview.jpg';
import EminemTributePreview from '../../images/eminem-tribute-preview.jpg';
import PortfolioPreview from '../../images/portfolio-page-preview.jpg';
import LittleLemonPreview from '../../images/little-lemon.jpg';

export default function Main() {
  return (
  <main className="main">
    <section className="main__section introduction">
      <h1>Welcome
      </h1>
      <p>
        Welcome to my front end developer portfolio page! This is where you can find examples of my work and learn more about my experience in web development. I am passionate about creating beautiful and functional websites that provide a great user experience. Please take a look around and feel free to contact me if you have any questions or would like to discuss a potential project. Thank you for visiting! <br />~ Webster Manyanga
      </p>
      <a href="#projects" className="button-link">Let's begin</a>
    </section> 
    <section className="main__section projects" id="projects">
      <h1>Projects</h1>
      <ul className="projects__list">
        <li className="projects__list-item">
          <img 
            src={UniversityPreview} 
            alt="website preview image"
          />
          <h2>University Landing Page</h2>
          <div className="projects__line"></div>
          <ul className="projects__technologies">
            <li><i className="fa-brands fa-html5"></i></li>
            <li><i className="fa-brands fa-css3-alt"></i></li>
            <li><i className="fa-brands fa-js"></i></li>
          </ul>
          <div className="projects__links">
            <a href="https://webstermanyanga.github.io/Webster-University/" className="button-link">
              Visit Site
            </a>
            <a
              href="https://github.com/WebsterManyanga/Webster-University" 
              className="button-link"
              target="_blank"
            >
              Github Repo
            </a>
          </div>
        </li>
        <li className="projects__list-item">
          <img 
            src={LibraryFormPreview} 
            alt="website preview image"
          />
          <h2>Library Card Application Form</h2>
          <div className="projects__line"></div>
          <ul className="projects__technologies">
            <li><i className="fa-brands fa-html5"></i></li>
            <li><i className="fa-brands fa-css3-alt"></i></li>
            <li><i className="fa-brands fa-js"></i></li>
          </ul>
          <div className="projects__links">
            <a 
              href="https://webstermanyanga.github.io/Library-card-application-form/" className="button-link"
            >
              Visit Site
            </a>
            <a 
              href="https://github.com/WebsterManyanga/Library-card-application-form" className="button-link"
              target="_blank"
            >
              Github Repo
            </a>
          </div>
        </li>
        <li className="projects__list-item">
          <img 
            src={EminemTributePreview}
            alt="website preview image"
          />
          <h2>Eminem Tribute Page</h2>
          <div className="projects__line"></div>
          <ul className="projects__technologies">
            <li><i className="fa-brands fa-html5"></i></li>
            <li><i className="fa-brands fa-css3-alt"></i></li>
            <li><i className="fa-brands fa-js"></i></li>
          </ul>
          <div className="projects__links">
            <a 
              href="https://webstermanyanga.github.io/Eminem-Tribute-Page/" 
              className="button-link"
            >
              Visit Site
            </a>
            <a 
              href="https://github.com/WebsterManyanga/Eminem-Tribute-Page"
              className="button-link"
              target="_blank"
            >
              Github Repo
            </a>
          </div>
        </li>
        <li className="projects__list-item">
          <img 
            src={PortfolioPreview} 
            alt="website preview image"
          />
          <h2>Portfolio Web Page</h2>
          <div className="projects__line"></div>
          <ul className="projects__technologies">
            <li><i className="fa-brands fa-html5"></i></li>
            <li><i className="fa-brands fa-css3-alt"></i></li>
            <li><i className="fa-brands fa-js"></i></li>
          </ul>
          <div className="projects__links">
            <a href="#" className="button-link">Visit Site</a>
            <a 
              href="https://github.com/WebsterManyanga/Portfolio-Page" 
              className="button-link"
            >
              Github Repo
            </a>
          </div>
        </li>
        <li className="projects__list-item">
          <img 
            src={LittleLemonPreview} 
            alt="website preview image"
          />
          <h2>Little Lemon Landing Page</h2>
          <div className="projects__line"></div>
          <ul className="projects__technologies">
            <li><i className="fa-brands fa-html5"></i></li>
            <li><i className="fa-brands fa-css3-alt"></i></li>
          </ul>
          <div className="projects__links">
            <a 
              href="https://webstermanyanga.github.io/little-lemon/" 
              className="button-link"
            >
              Visit Site
            </a>
            <a 
              href="https://github.com/WebsterManyanga/little-lemon" 
              className="button-link"
              target="_blank"
            >
              Github Repo
            </a>
          </div>
        </li>

      </ul>
    </section>
    <section 
      className="main__section technologies" 
      id="technologies"
    >
      <h1>Technologies</h1>
      <ul className="technologies__list">
        <li className="technologies__list--advanced">
          <hgroup className="technologies__label">
            <h2>HTML</h2>
            <p>Advanced</p>
          </hgroup>
          <div className="slider-background">
            <div className="slider-foreground"></div>
          </div>
        </li>
        <li className="technologies__list--advanced">
          <hgroup className="technologies__label">
            <h2>CSS</h2>
            <p>Advanced</p>
          </hgroup>
          <div className="slider-background">
            <div className="slider-foreground"></div>
          </div>
        </li>

        <li className="technologies__list--advanced">
          <hgroup className="technologies__label">
            <h2>JavaScript</h2>
            <p>Advanced</p>
          </hgroup>
          <div className="slider-background">
            <div className="slider-foreground"></div>
          </div>
        </li>

        <li className="technologies__list--intermediate">
          <hgroup className="technologies__label">
            <h2>React</h2>
            <p>Intermediate</p>
          </hgroup>
          <div className="slider-background">
            <div className="slider-foreground"></div>
          </div>
        </li>

        <li className="technologies__list--intermediate">
          <hgroup className="technologies__label">
            <h2>TypeScript</h2>
            <p>Intermediate</p>
          </hgroup>
          <div className="slider-background">
            <div className="slider-foreground"></div>
          </div>
        </li>

        <li className="technologies__list--intermediate">
          <hgroup className="technologies__label">
            <h2>Bootstrap</h2>
            <p>Intermediate</p>
          </hgroup>
          <div className="slider-background">
            <div className="slider-foreground"></div>
          </div>
        </li>

        <li className="technologies__list--intermediate">
          <hgroup className="technologies__label">
            <h2>Git and Github</h2>
            <p>Intermediate</p>
          </hgroup>
          <div className="slider-background">
            <div className="slider-foreground"></div>
          </div>
        </li>

      </ul>
    </section>
  </main>
  )
}