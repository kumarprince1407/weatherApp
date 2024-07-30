//fetchWeatherData.js
import axios from "axios";
import { useQuery } from "react-query";

//Call to get the weather data for the entire list of cities
const fetchData = () => {
  return axios.get("https://freetestapi.com/api/v1/weathers", {});
};

//Call to get the weather data for a specific city
const fetchCityData = (id) => {
  return axios.get(`https://freetestapi.com/api/v1/weathers/${id}`);
};

//Custom hook to use in Home.jsx
export const useWeatherData = () => {
  return useQuery("weather-data", fetchData);
};

//Custom hook to use in Details.jsx
export const useCityData = (id) => {
  return useQuery(["city-data", id], () =>
    fetchCityData(id).then((res) => res.data)
  );
};

export { fetchData, fetchCityData };
