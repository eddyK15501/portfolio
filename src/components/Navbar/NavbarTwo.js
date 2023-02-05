import React, { useState } from 'react';
import { Link as LinkTo } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

const NavbarTwo = () => {
  const darkMode = useSelector((state) => state.darkTheme.bool)

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={`navbar ${darkMode && 'dark'}`}>
        <div className="nav-container">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <LinkTo
                exact="true"
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </LinkTo>
            </li>
            <li className="nav-item">
              <LinkTo
                exact="true"
                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </LinkTo>
            </li>
            <li className="nav-item">
              <LinkTo
                exact="true"
                to="/resume"
                className="nav-links"
                onClick={handleClick}
              >
                Resume
              </LinkTo>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                href="mailto:edk1231@gmail.com"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarTwo;
