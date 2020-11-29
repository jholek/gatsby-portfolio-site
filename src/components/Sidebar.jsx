import React from 'react';

import { FaTimes } from 'react-icons/fa';

import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar__show' : ''}`}>
      <button type='button' className='btn__close' onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className='sidebar__container'>
        <NavLinks styleClass='sidebar__links' />
        <SocialLinks styleClass='sidebar__icons' />
      </div>
    </aside>
  );
};

export default Sidebar;
