import React from "react";

const WeatherInfo = ({ weather }) => {
    return (
        <div className="text-container-form">
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
        </div>
    );
};

export default WeatherInfo;