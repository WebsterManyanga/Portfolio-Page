import './Header.css';

export default function Header () {
  return (
    <header>
      <button className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav className="top-nav">
        <h1 className="top-nav__title">
          Front-end<br/>Web Developer<br/>Portfolio
        </h1>
        <ul className="top-nav__page">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#about-me">About Me</a></li>
        </ul>
        <ul className="top-nav__social-media">
          <li>
            <a href="https://github.com/WebsterManyanga" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/webster-m-a4770a21b/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="mailto:strategywebstermanyanga@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          </li>
        </ul>
      </nav>
  </header>
  )
}