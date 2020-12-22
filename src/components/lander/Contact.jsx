import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => (
  <section className='contact__section' id='contact'>
    <article className='content__wrapper'>
      <div className='flex__container'>
        <div className='contact__text'>
          <div className='summary__title'>
            <h2 className='services__title'>Contact.</h2>
          </div>

          <div className='contact__description expertise__description flexible'>
            <p>Have some ideas you need help bringing to market?</p>
            <br />
            <p>Need help with something technology related?</p>
            <br />
            <p className='contact__cta--text'>
              <b>Drop me a line and let&apos;s get in touch.</b>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </article>
  </section>
);

export default Contact;
