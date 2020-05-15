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
        <div>
            <h1>Women's World Cup Soccer</h1> 
            <h2>Top Google Searches | July 2019</h2>
        </div>
        <div className="dark-mode__toggle" data-testid='toggle'>
            <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            />
        </div>    
    </nav>
  );
};

export default Navbar;