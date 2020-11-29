import React from 'react';
import { Link } from 'gatsby';

const links = [
  {
    id: 1,
    name: 'resume',
    url: '/resume/',
  },
  {
    id: 2,
    name: 'projects',
    url: '/projects/',
  },
  {
    id: 3,
    name: 'blog',
    url: '/blog/',
  },
  {
    id: 4,
    name: 'contact',
    url: '/#contact',
    mod: 'navbar__btn',
  },
];

const NavLinks = ({ styleClass }) => (
  <>
    <ul className={`${styleClass ? styleClass : ''}`}>
      {links.map((link) => (
        <li key={link.id} className={`${link.mod ? link.mod : ''}`}>
          <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default NavLinks;
