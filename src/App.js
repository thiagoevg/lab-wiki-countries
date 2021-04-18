import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList path="/" />
            <Route path="/:cca3" component={CountryDetails} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
