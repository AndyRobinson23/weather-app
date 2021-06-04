/* eslint-disable prettier/prettier */
import { PropTypes } from "prop-types";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App(props) {
  // eslint-disable-next-line no-unused-vars
  const { forecasts, location } = props;
  return (
    <div className="App">
      <LocationDetails
        // eslint-disable-next-line react/destructuring-assignment
        city={props.location.city}
        // eslint-disable-next-line react/destructuring-assignment
        country={props.location.country}
        className="location-details"
      />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
