
import React, { useState } from "react";
import axios from "axios";

import SearchForm from "./component/SearchForm";
import WeatherInfo from "./component/WeatherInfo";
import "./style/App.css";

const api = {
    key: "d74b22e57d1cc1c90377f63de597234c",
    base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        axios
            .get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((response) => {
                setWeather(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div className="App">
            <SearchForm search={search} setSearch={setSearch} searchPressed={searchPressed} />
            {typeof weather.main !== "undefined" ? <WeatherInfo weather={weather} /> : null}
        </div>
    );
}

export default App;