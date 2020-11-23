import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const links = [
  {
    id: 1,
    icon: <FaGithubSquare />,
    url: 'https://www.github.com/jholek',
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/jeffholek/',
  },
];

const SocialLinks = () => (
  <>
    {links.map((link) => (
      <li key={link.id}>
        <a href={link.url} target='_blank' rel='noopener noreferrer'>
          {link.icon}
        </a>
      </li>
    ))}
  </>
);

export default SocialLinks;
