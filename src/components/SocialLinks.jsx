import React from 'react';
import { FaAddressCard, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import resumeDownload from '../../static/Jeff_Holek_Resume_2020.pdf';

const links = [
  {
    id: 1,
    icon: <FaAddressCard />,
    url: `${resumeDownload}`,
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/jeffholek/',
  },
  {
    id: 3,
    icon: <FaGithub />,
    url: 'https://www.github.com/jholek',
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
