import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherInfo from "./components/WeatherInfo";
import useWeatherForecast from "../hooks/useWeatherForecast";
import "./style/style.css";

function App() {
    const [search, setSearch] = useState("");
    const { data: weather, error, isError, isLoading, refetch } = useWeatherForecast(search);

    const getWeatherForecast = () => {
        refetch();
    };

    return (
        <div className="App">
            <SearchForm search={search} setSearch={setSearch} searchPressed={getWeatherForecast} />
            <div className="error-message-container">
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p className="error-message">{error.message}</p>
                ) : (
                    weather && <WeatherInfo weather={weather} />
                )}
            </div>
        </div>
    );
}

export default App;


