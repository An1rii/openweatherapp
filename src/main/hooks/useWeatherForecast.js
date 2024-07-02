
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const api = {
    key: "d74b22e57d1cc1c90377f63de597234c",
    base: "https://api.openweathermap.org/data/2.5/",
};

const fetchWeather = async (search) => {
    const { data } = await axios.get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`);
    return data;
};

const useWeatherForecast = (search) => {
    return useQuery({
        queryKey: ['weather', search],
        queryFn: () => fetchWeather(search),
        enabled: false,
    });
};

export default useWeatherForecast;
