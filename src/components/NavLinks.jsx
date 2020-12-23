import React from 'react';
import PropTypes from 'prop-types';
import resumeDownload from '../../static/Jeff_Holek_Resume_2020.pdf';

const links = [
  {
    id: 1,
    name: 'resume',
    url: `${resumeDownload}`,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  // {
  //   id: 2,
  //   name: 'projects',
  //   url: '/projects/',
  // },
  // {
  //   id: 3,
  //   name: 'blog',
  //   url: '/blog/',
  // },
  {
    id: 4,
    name: 'contact',
    url: '/#contact',
    mod: 'navbar__btn',
  },
];

const NavLinks = ({ styleClass, toggleSidebar, isOpen }) => (
  <>
    <ul className={`${styleClass || ''}`}>
      {links.map((link) => (
        <li key={link.id} className={`${link.mod ? link.mod : ''}`}>
          <a
            onClick={isOpen ? toggleSidebar : undefined}
            href={link.url}
            target={link.target}
            rel={link.rel}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </>
);

NavLinks.propTypes = {
  styleClass: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default NavLinks;
