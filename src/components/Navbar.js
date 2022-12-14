import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GZS
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Početna
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/onama'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                O nama
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/projekti'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projekti
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/vesti' className='nav-links' onClick={closeMobileMenu}>
                Vesti
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/kontakt' className='nav-links' onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
