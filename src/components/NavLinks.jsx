import React from 'react';
import resumeDownload from '../../static/Jeff_Holek_Resume_2020.pdf';

const links = [
  {
    id: 1,
    name: 'resume',
    url: `${resumeDownload}`,
    target: '_blank',
    rel: 'noopener noreferrer',
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
          <a href={link.url} target={link.target} rel={link.rel}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default NavLinks;
