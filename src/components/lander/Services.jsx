import React from 'react';
import ServiceCard from './ServiceCard';

import services from '../../content/services';

const Services = () => (
  <section className='services'>
    <div className='content__wrapper'>
      <h1>Summary.</h1>
      <p>
        One paragraph description of my approach to work. Palo Santo chartreuse
        yr occupy, pug street art microdosing cronut green juice shaman irony
        Tumblr next level blue bottle. Cornhole green juice iceland, occupy
        direct trade vinyl crucifix keytar venmo chartreuse portland paleo
        gentrify flexitarian cloud bread.
      </p>
      <div className='flex__container services__expertise--highlights'>
        <div className='expertise'>
          <h1>Expertise.</h1>
          <p>
            One paragraph description of my approach to work. Palo Santo
            chartreuse yr occupy, pug street art microdosing cronut green juice
            shaman irony Tumblr next level blue bottle. Cornhole green juice
            iceland, occupy direct trade vinyl crucifix keytar venmo chartreuse
            portland paleo gentrify flexitarian cloud bread.
          </p>
        </div>
        {services.map((service) => {
          const { id, title, description, offers } = service;
          return (
            <article key={id} className='services__item--card'>
              <ServiceCard
                title={title}
                description={description}
                offers={offers}
              />
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
