import React from "react";
import GraphicWeather from "./GraphicWeather";

const WeatherInfo = ({ weather }) => {
    return (
        <div className="weather_info_container">
            <div className="text-container-form">
                <p>{weather.name}</p>
                <p>{weather.main.temp}°C</p>
                <p>{weather.weather[0].main}</p>
                <p>({weather.weather[0].description})</p>
            </div>
            <GraphicWeather weatherData={weather} />
        </div>
    );
};

export default WeatherInfo;



