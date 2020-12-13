import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, offers }) => (
  <div className='card__container'>
    <h1 className='card__title'>{title}</h1>
    <p className='card__description'>{description}</p>
    <ul className='card__offers'>
      {offers.map((offer) => (
        <li key={offer.id}>{offer.value}</li>
      ))}
    </ul>
  </div>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ServiceCard;
