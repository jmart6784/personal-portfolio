import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname, hash } = useLocation();
  let navLinks;
  let mobileLinks;

  if (pathname === "/") {
    navLinks = (
      <div id="inner-div">
        <button className="home-link nav-link">Home</button>
        <button className="about-link nav-link">About</button>
        <button className="skills-link nav-link">Skills</button>
        <button className="projects-link nav-link">Projects</button>
        <button className="contact-link nav-link">Contact</button>
      </div>
    );

    mobileLinks = (
      <div className="mobile-inner-div">
        <button className="home-link mob-nav-link">Home</button>
        <button className="about-link mob-nav-link">About</button>
        <button className="skills-link mob-nav-link">Skills</button>
        <button className="projects-link mob-nav-link">Projects</button>
        <button className="contact-link mob-nav-link">Contact</button>
      </div>
    );
  } else {
    navLinks = (
      <div id="inner-div">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/#about-me-div" className="nav-link">
          About
        </Link>
        <Link to="/#skills-container" className="nav-link">
          Skills
        </Link>
        <Link to="/#projects-container" className="nav-link">
          Projects
        </Link>
        <Link to="/#contact-container" className="nav-link">
          Contact
        </Link>
      </div>
    );

    mobileLinks = (
      <div className="mobile-inner-div">
        <Link to="/" className="mob-nav-link">
          Home
        </Link>
        <Link to="/#about-me-div" className="mob-nav-link">
          About
        </Link>
        <Link to="/#skills-container" className="mob-nav-link">
          Skills
        </Link>
        <Link to="/#projects-container" className="mob-nav-link">
          Projects
        </Link>
        <Link to="/#contact-container" className="mob-nav-link">
          Contact
        </Link>
      </div>
    );
  }

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + -200;
          // element.scrollIntoView();
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return (
    <div>
      <div id="nav-parent">
        <div id="nav-dark-blur"></div>

        <div id="nav-container">{navLinks}</div>
      </div>

      <div className="mobile-nav-parent">
        <div id="mobile-nav-container">
          <div className="mobile-header">
            <button id="mobile-ham">☰</button>
            <div className="dark-blur"></div>
          </div>

          {mobileLinks}
        </div>
      </div>
    </div>
  );
};

export default Nav;
