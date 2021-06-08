/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__temperature">
        Min Temperature: {temperature.min} &deg;C Max Temperature:{" "}
        {temperature.max} &deg;C
      </div>
      <div className="forecast-summary__humidity">Humidity: {humidity}</div>
      <div className="forecast-summary__wind">
        Wind: {wind.speed}mph Wind Direction: {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
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

export default ForecastDetails;
