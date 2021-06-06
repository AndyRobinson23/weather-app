/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = (forecast) => {
  return (
    <div className="forecast-details">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__temperature">
        {temperature.min} &deg;C
        {temperature.max} &deg;C
      </div>
      <div className="forecast-summary__humidity">{humidity}</div>
      <div className="forecast-summary__wind">
        {wind.speed}
        {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    humidity: PropTypes.number,
  }).isRequired,
};
