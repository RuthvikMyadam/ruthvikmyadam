import React, { useState, useEffect } from 'react';
import './header.css';
import Resume from './Resume';
import Ruthvik from '../../assets/Ruthvik.png';
import HS from './HS';

const Header = () => {
  const [theme, setTheme] = useState('night');

  useEffect(() => {
    if (theme === 'day') {
      document.documentElement.classList.add('day-mode');
    } else {
      document.documentElement.classList.remove('day-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'night' ? 'day' : 'night'));
  };

  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, This is</h5>
        <h1>Ruthvik Myadam</h1>
        <h5>Welcome to my portfolio . . . </h5>

        {/* Toggle Button */}
        <button id="theme-toggle" onClick={toggleTheme}>
          {theme === 'night' ? 'Day' : 'Night'}
        </button>

        <Resume />
        <HS />
        <div className="Ruthvik">
          <img src={Ruthvik} alt="Ruthvik" />
        </div>

        <a href="#contact" className='scroll__down'>---------- B R O W S E ---------- &gt;</a>
      </div>
    </header>
  );
}

export default Header;