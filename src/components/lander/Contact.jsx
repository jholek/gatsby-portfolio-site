import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => (
  <section className='contact__section'>
    <article className='content__wrapper'>
      <div className='flex__container'>
        <div className='contact__text'>
          <div className='summary__title'>
            <h2 className='services__title'>Contact.</h2>
          </div>

          <div className='expertise__description flexible'>
            <p>Have some ideas you need help fleshing out?</p>
            <br />
            <p>Drop me a line and let&apos;s get in touch.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </article>
  </section>
);

export default Contact;
