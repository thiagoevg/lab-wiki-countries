import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

function CountryDetails(props) {
  const countryFound = countries.find((country) => {
    return country.cca3 === props.match.params.cca3;
  });

  function changeName(initials) {
    const country = countries.find((country) => {
      return country.cca3 === initials;
    });
    return country;
  }

  if (countryFound) {
    return (
      <div className="col-7">
        <h1>{countryFound.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countryFound.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryFound.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul style={{ listStyleType: 'none' }}>
                  {countryFound.borders.map((initials) => {
                    const commonName = changeName(initials).name.common;
                    return (
                      <li key={initials}>
                        <Link to={`/${initials}`}>{commonName}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: 'block',
          textAlign: 'center',
        }}
      >
        <h4>Select a valid country</h4>
      </div>
    );
  }
}

export default CountryDetails;
