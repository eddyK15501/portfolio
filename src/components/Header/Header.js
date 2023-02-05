import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Header.css';
import { SiCoffeescript } from 'react-icons/si';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/darkTheme';

const Top = () => {
  const darkMode = useSelector((state) => state.darkTheme.bool);
  const dispatch = useDispatch();

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FRONTEND WEB DEVELOPER'],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 5000,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="header" className={`${darkMode && 'dark'}`}>
      <div className="container">
        <div className="img-container">
          <SiCoffeescript size={170} />
        </div>
        <div className="name-container">
          <h1>Edward Kim</h1>
        </div>

        <div className="dark-theme-mode">
          <input
            type="checkbox"
            id="darkmode-toggle"
            defaultChecked={darkMode}
            onClick={() => dispatch(toggle())}
          />
          <label htmlFor="darkmode-toggle">
            <HiOutlineSun className="sun" size={25} />
            <HiOutlineMoon className="moon" size={25} />
          </label>
        </div>

        <div className="contact-button">
          <a
            href="mailto:edk1231@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Let's Connect!</button>
          </a>
        </div>
      </div>
      <div className="script-container">
        <div className="title-container">
          <h2 ref={el}></h2>
        </div>
      </div>
    </div>
  );
};

export default Top;
