import React from 'react';
import PropTypes from 'prop-types';
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
        <NavLinks
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          styleClass={`${isOpen ? 'sidebar__links' : ''}`}
        />
        <SocialLinks styleClass={`${isOpen ? 'sidebar__icons' : ''}`} />
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
