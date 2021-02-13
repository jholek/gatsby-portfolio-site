import React from 'react';
import resumeDownload from '../../../static/Jeff_Holek_Resume_2021.pdf';

import ServiceCard from './ServiceCard';
import services from '../../content/services';

const Services = () => (
  <section className='services'>
    <div className='content__wrapper'>
      <div className='summary text__color--invert'>
        <div className='summary__title'>
          <h2 className='services__title'>About.</h2>
        </div>

        <div className='summary__description'>
          <p>
            A passionate product manager with five years of experience
            delivering market changing products that delight users.
          </p>
          <br></br>
          <p>
            I unknowingly built my first software product in the sixth grade. As
            a child with excess energy and many questions, I was given a
            challenge to create the classroom website with the hope it could be
            where I—quietly—channeled my curiosity. Whether my teacher was
            tapping into an interest I didn’t yet know I had or saw it as an
            opportunity to keep me occupied, it had the makings of my future
            career. I was given a problem that needed solving, a market of
            interested users, and the resources to bring a concept to life.
          </p>
        </div>
        <div className='summary__cta push'>
          <a
            href={resumeDownload}
            className='btn btn__primary summary__cta--button'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Resume
          </a>
        </div>
      </div>
      <div className='flex__container expertise__container'>
        <div className='expertise s-card__wrap--inner text__color--invert'>
          <div className='expertise__title'>
            <h2 className='services__title'>Expertise.</h2>
          </div>
          <div className='expertise__description flexible'>
            <p>
              Today, I lean on my engineering and business background, in
              addition to my experience across a wide range of disciplines, to
              successfully launch B2C and B2B software products. In my approach,
              I strike the right balance between being pragmatic and
              results-driven, without neglecting team culture, technical quality
              and the end user’s needs.
            </p>
            <br></br>
            <p>
              I’ve worn many hats as an individual contributor and as a leader,
              influencing how I collect and interpret data, communicate
              requirements or mockups, and prepare the go-to-market strategies
              that rally cross-functional stakeholders behind a shared vision.
            </p>
          </div>
        </div>
        {services.map((service) => {
          const { id, title, description, offers } = service;
          return (
            <div key={id} className='s-card__wrap--inner card__padding'>
              <ServiceCard
                title={title}
                description={description}
                offers={offers}
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
