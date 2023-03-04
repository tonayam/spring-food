import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';

const Navbar = () => {
  const { setShowNavbar, showNavbar } = useGlobalContext();

  const closeNav = () => {
    setShowNavbar(false);
  };

  return (
    <nav>
      <Link to='/' className='logo'>
        Spring Food
      </Link>
      <ul className={`links ${showNavbar ? `show` : null}`}>
        <li>
          <Link to='/' onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/gallery' onClick={closeNav}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to='/services' onClick={closeNav}>
            Services
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={closeNav}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='hambugger'>
        {showNavbar ? (
          <FaTimes onClick={() => setShowNavbar(false)} />
        ) : (
          <FaBars onClick={() => setShowNavbar(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
