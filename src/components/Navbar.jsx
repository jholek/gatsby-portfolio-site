import React from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import NavLinks from './NavLinks';
import logo from '../assets/logo.svg';

const Navbar = ({ toggleSidebar }) => (
  <nav className='navbar'>
    <div className='navbar__layout'>
      <div className='navbar__header'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <button type='button' className='btn__toggle' onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
      </div>
      <NavLinks styleClass='navbar__links' />
    </div>
  </nav>
);

export default Navbar;
