import axios from "axios";

//Call to get the weather data for the entire list of cities
export const fetchData = () => {
  return axios.get("https://freetestapi.com/api/v1/weathers", {});
};
