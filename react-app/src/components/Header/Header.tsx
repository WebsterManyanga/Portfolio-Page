import './Header.css';
import { useState } from 'react';

interface Props {
  cardFlip: any
}

export default function Header ({cardFlip}: Props) {
  const [menuIcon, setMenuIcon] = useState('fa-house');

  return (
    <header>
      <button 
        className="menu-btn"
        onClick={() => menuIcon === 'fa-bars' ? setMenuIcon('fa-house') : setMenuIcon('fa-bars')}
      >
        <i className={`fa-solid ${menuIcon}`}></i>
      </button>
      <nav 
        className={`top-nav ${menuIcon === 'fa-house' ? 'show' : 'hide'}`}
      >
        <h1 className="top-nav__title">
          Front-End Dev<br/>Portfolio
        </h1>
        <ul className="top-nav__page">
        <li>
          <a 
            href="#"
            onClick={() => menuIcon === 'fa-bars' ? setMenuIcon('fa-house') : setMenuIcon('fa-bars')}
          >
            HOME
          </a>
        </li>
        <li>
          <a 
            href="#projects"
            onClick={() => menuIcon === 'fa-bars' ? setMenuIcon('fa-house') : setMenuIcon('fa-bars')}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a 
            href="#technologies"
            onClick={() => menuIcon === 'fa-bars' ? setMenuIcon('fa-house') : setMenuIcon('fa-bars')}
          >
            TECHNOLOGIES
          </a>
        </li>
        <li>
          <a 
            href="#about-me"
            onClick={() => menuIcon === 'fa-bars' ? setMenuIcon('fa-house') : setMenuIcon('fa-bars')}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a 
            href="#about-me"
            onClick={() => menuIcon === 'fa-bars' ? setMenuIcon('fa-house') : setMenuIcon('fa-bars')}
          >
            CONTACT
          </a>
        </li>
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
