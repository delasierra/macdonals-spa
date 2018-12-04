import React from 'react';
// import { NavLink } from 'react-router-dom';

const ScrollNavigation = props => (
  <nav className="scroll-navigation">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      {/*<NavLink to={props.section1} className="nav-item nav-link">
        home
      </NavLink>*/}
      <a
        href="#"
        onClick={() => props.callback(props.sections.home)}
        className="nav-item nav-link"
      >
        Home
      </a>

      <a
        href="#"
        onClick={() => props.callback(props.sections.threeAnim)}
        className="nav-item nav-link"
      >
        Three Anim
      </a>

      <a
        href="#"
        onClick={() => props.callback(props.sections.threeModel)}
        className="nav-item nav-link"
      >
        Three Model
      </a>

      <a
        href="#"
        onClick={() => props.callback(props.sections.section1)}
        className="nav-item nav-link"
      >
        Section 1
      </a>
    </div>
  </nav>
);

export default ScrollNavigation;
