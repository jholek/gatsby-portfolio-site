import React from 'react';

import logo from '../assets/jh_logo.svg';

const Footer = () => (
  <footer>
    <div className='content__wrapper flex__container'>
      <div className='footer__logo'>
        <img src={logo} alt='logo' className='footer__logo--icon' />

        <p className='footer__copyright'>© 2020</p>
      </div>
    </div>
  </footer>
);

export default Footer;
