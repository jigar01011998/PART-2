import React from "react";
import "./Country.css";
import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <div className="country-container">
      <h2>{country?.name?.common}</h2>
      <div className="country-info">
        <p>
          <span>Capital: </span>
          {country?.capital}
        </p>
        <p>
          <span>Area: </span>
          {country?.area} km<sup>2</sup>
        </p>
      </div>
      <div className="languages">
        <h3>Languages:</h3>
        <ul>
          {Object.values(country?.languages)?.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
      </div>
      <div className="country-flag">
        <img src={country?.flags?.png} alt={country?.flags?.alt} height={180} />
      </div>
      <div className="weather-container">
        <Weather country={country} />
      </div>
    </div>
  );
};

export default Country;
