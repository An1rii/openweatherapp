import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import WeatherInfo from "./components/WeatherInfo";
import "./style/style.css";

const api = {
    key: "d74b22e57d1cc1c90377f63de597234c",
    base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getWeatherForecast = () => {
        setLoading(true);
        setError("");
        axios
            .get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((response) => {
                setWeather(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError("Enter city correctly try again");
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div className="App">
            <SearchForm search={search} setSearch={setSearch} searchPressed={getWeatherForecast} />
            <div className="error-message-container">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    typeof weather.main !== "undefined" && <WeatherInfo weather={weather} />
                )}
            </div>
        </div>
    );

}

export default App;
