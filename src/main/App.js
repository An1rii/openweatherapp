

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function GraphicWeather({ weatherData }) {

    if (!weatherData || !weatherData.main) {
        return <p>Loading or no weather data available...</p>;
    }

    const data = [
        {
            name: 'Temperature',
            value: weatherData.main.temp,
        },
    ];

    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default GraphicWeather;
