import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('');
  
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">  
        <h1>Women's World Cup Soccer | Top Google Searches | as of July 2019</h1> 
        <div className="dark-mode__toggle">
            <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            />
        </div>
    </nav>
  );
};

export default Navbar;