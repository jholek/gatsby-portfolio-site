import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FaAlignJustify } from 'react-icons/fa';

import NavLinks from './NavLinks';
import logo from '../assets/jh_logo.svg';

const Navbar = ({ isOpen, toggleSidebar }) => (
  <nav className='navbar'>
    <div className='navbar__layout'>
      <div className='navbar__header'>
        <Link to='/'>
          <img src={logo} alt='logo' className='navbar__logo' />
        </Link>
        <button type='button' className='btn__toggle' onClick={toggleSidebar}>
          <FaAlignJustify />
        </button>
      </div>
      <NavLinks
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        styleClass='navbar__links'
      />
    </div>
  </nav>
);

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
