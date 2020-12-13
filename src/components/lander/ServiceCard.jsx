import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, offers }) => (
  <>
    <div className='s-card__title'>
      <h3>{title}</h3>
    </div>
    <div className='s-card__description flexible'>
      <p>{description}</p>
    </div>
    <div className='s-card__offers'>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>{offer.value}</li>
        ))}
      </ul>
    </div>
  </>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ServiceCard;
