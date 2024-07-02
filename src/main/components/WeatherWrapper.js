
import React from 'react';
import WeatherInfo from './WeatherInfo';

const WeatherWrapper = ({ isLoading, isError, error, weather }) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p className="error-message">{error.message}</p>;
    }
    if (weather) {
        return <WeatherInfo weather={weather} />;
    }
    return null;
};

export default WeatherWrapper;




