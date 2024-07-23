import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
  return axios.get("https://freetestapi.com/api/v1/weathers");
};

const Home = () => {
  //   const [loading, setIsLoading] = useState(true);
  //   const [data, setData] = useState([]);
  const { isLoading, data } = useQuery(
    "weather-data", //unique key
    fetchData,
    {}
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h4>Home</h4>
      {data?.data.map((weather) => {
        return <div key={weather.city}>{weather.city}</div>;
      })}
    </>
  );
};

export default Home;
