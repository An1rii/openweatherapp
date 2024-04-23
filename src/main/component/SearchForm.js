import React from "react";


const SearchForm = ({ search, setSearch, searchPressed }) => {
    return (
        <div className="container">
            <h1>Weather App</h1>
            <div className="custom_input">
                <svg xmlns="http://www.w3.org/2000/svg" className="svg_icon bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter city/town..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="button" onClick={searchPressed}>Search</button>
            </div>
        </div>
    );
};

export default SearchForm;