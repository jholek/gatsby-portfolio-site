import React from 'react';
import ServiceCard from './ServiceCard';

import services from '../../content/services';

const Services = () => (
  <section className='services'>
    <div className='content__wrapper'>
      <div className='summary text__color--invert'>
        <div className='summary__title'>
          <h2 className='services__title'>Summary.</h2>
        </div>

        <div className='summary__description'>
          <p>
            One paragraph description of my approach to work. Palo Santo
            chartreuse yr occupy, pug street art microdosing cronut green juice
            shaman irony Tumblr next level blue bottle. Cornhole green juice
            iceland, occupy direct trade vinyl crucifix keytar venmo chartreuse
            portland paleo gentrify flexitarian cloud bread.
          </p>
        </div>
        <div className='summary__cta push'>
          <button
            type='button'
            className='btn btn__outlined--white summary__cta--button'
          >
            View Resume
          </button>
        </div>
      </div>
      <div className='flex__container'>
        <div className='expertise s-card__wrap--inner text__color--invert'>
          <div className='expertise__title'>
            <h2 className='services__title'>Expertise.</h2>
          </div>
          <div className='expertise__description flexible'>
            <p>
              One paragraph description of my approach to work. Palo Santo
              chartreuse yr occupy, pug street art microdosing cronut green
              juice shaman irony Tumblr next level blue bottle. Cornhole green
              juice iceland, occupy direct trade vinyl crucifix keytar venmo
              chartreuse portland paleo gentrify flexitarian cloud bread.
            </p>
          </div>
        </div>
        {services.map((service) => {
          const { id, title, description, offers } = service;
          return (
            <div key={id} className='s-card s-card__wrap--inner'>
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
