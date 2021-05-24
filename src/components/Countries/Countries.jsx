import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from './../CountryCard/CountryCard';
import './Countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.countries.data);
  const [value, setValue] = useState('');
  const [isAutocompleteShow, setAutocompleteShow] = useState(true);

  const handleInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAutocompleteClick = (evt) => {
    setValue(evt.target.textContent);
    setAutocompleteShow(false);
  };

  const handleInputClick = () => {
    setAutocompleteShow(true);
  };

  const filteredCountries = countries.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="countries">
      <div className="countries__input-wrapper">
        <input
          className="countries__input"
          type="text"
          placeholder="Search..."
          value={value}
          onChange={handleInputChange}
          onClick={handleInputClick}
        />
        {value && isAutocompleteShow ? (
          <ul className="countries__autocomplete">
            {filteredCountries.map((item) => (
              <li
                className="countries__autocomplete-element"
                key={`li/${item.name}`}
                onClick={handleAutocompleteClick}
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <ul className="countries__list">
        {filteredCountries.map((item) => (
          <CountryCard
            name={item.name}
            capital={item.capital}
            population={item.population}
            nativeName={item.nativeName}
            flag={item.flag}
            key={item.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Countries);
