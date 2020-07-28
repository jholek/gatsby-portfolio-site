import React from 'react';
import { Link } from 'gatsby';

const links = [
  {
    id: 1,
    name: 'home',
    url: '/',
  },
  {
    id: 2,
    name: 'about',
    url: '/about/',
  },
  {
    id: 3,
    name: 'projects',
    url: '/projects/',
  },
  {
    id: 4,
    name: 'blog',
    url: '/blog/',
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
