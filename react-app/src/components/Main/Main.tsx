import './Main.scss';
import Logo from '../../images/logo.png';
import Projects from '../Projects';

export default function Main() {
  return (
  <main className="main">
    <section className="main__section introduction">
      <h1>Welcome
      </h1>
      <p>
      Welcome to my front-end web developer portfolio website! Here, you'll find a showcase of my skills, projects, and experiences as a professional front-end developer. My portfolio is designed to demonstrate my expertise in creating visually appealing and functional web pages and applications, as well as my commitment to staying up-to-date with the latest industry trends and technologies. <br /> ~Webster Manyanga </p>
      <a href="#projects" className="button-link">Let's begin</a>
      <img src={Logo} className='introduction__logo'/>
    </section> 
    <Projects />
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