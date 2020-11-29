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

const SocialLinks = ({ styleClass }) => (
  <>
    <ul className={`social__links ${styleClass ? styleClass : ''}`}>
      {links.map((link) => (
        <li key={link.id} className='padding__modifier'>
          <a
            href={link.url}
            className='social__links--item'
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default SocialLinks;
