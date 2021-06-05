/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts }) => (
  <div className="forecast-summaries">
    {forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature}
      />
    ))}
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
    })
  ),
};

ForecastSummaries.defaultProps = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
    })
  ),
};

export default ForecastSummaries;
