import React from 'react';
import './CountryCard.css';

const CountryCard = ({ name, capital, population, nativeName, flag }) => {
  return (
    <li className="country-card">
      <div className="country-card__description-wrapper">
        <h3 className="country-card__title">{name}</h3>
        <p className="country-card__description">{`Capital: ${capital}`}</p>
        <p className="country-card__description">{`Population: ${population
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} people`}</p>
        <p className="country-card__description">{`Native name: ${nativeName}`}</p>
      </div>
      <img className="country-card__img" src={flag} alt={`${name} flag`} />
    </li>
  );
};

export default React.memo(CountryCard);
