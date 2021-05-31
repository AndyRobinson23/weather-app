import { PropTypes } from "prop-types";
import React from "react";
import LocationDetails from "./LocationDetails";

function App(props) {
  // eslint-disable-next-line no-unused-vars
  const { location } = props;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails
        // eslint-disable-next-line react/destructuring-assignment
        city={props.location.city}
        // eslint-disable-next-line react/destructuring-assignment
        country={props.location.country}
        className="location-details"
      />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
