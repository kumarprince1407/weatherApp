//Details.jsx
import React from "react";
import { fetchCityData } from "../api/fetchWeatherData";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Forecast from "./Forecast";
import cloudImage from "../assets/cloudImage.jpg";
import weatherIcons from "../weatherIcons";
import "./style.css";

//Change
import { useCityData } from "../api/fetchWeatherData";
const Details = () => {
  const { id } = useParams();

  // const { isLoading, data, isError, error } = useQuery(
  //   ["city-data", id],
  //   () => {
  //     fetchCityData(id).then((res) => res.data);
  //   }
  // );

  // const { isLoading, data, isError, error } = useQuery(
  //   ["city-data", id],
  //   () => fetchCityData(id).then((res) => res.data) // Ensure this returns the data
  // );

  const { isLoading, data, isError, error } = useCityData(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!data) {
    return <h4>No data available</h4>;
  }

  if (isError) {
    return <h4>{error.message}</h4>;
  }
  console.log("Data", data);
  const cityData = data;

  //Accessing a property from the 'weatherIcons' object using the 'cityData.weather_description' string as the key
  const WeatherIcon = weatherIcons[cityData.weather_description];

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div
          // className="cityContainer rounded border border-black"
          className="cityContainer rounded "
          style={{
            width: "55vw",
            // height: "80vh",
            // backgroundImage: `url(${cloudImage})`,
            backgroundSize: "cover",
            //backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            margin: "4%",
          }}
        >
          <h1 style={{ fontSize: "25px", color: "white" }}>
            Detailed weather report
          </h1>
          <br />

          <div className="details">
            <div className="location" style={{ color: "#064B9D" }}>
              <span style={{ fontSize: "44px", fontFamily: "monospace" }}>
                {cityData.city}
              </span>
              <span style={{ fontSize: "32px", fontFamily: "monospace" }}>
                ,&nbsp;{cityData.country}
              </span>
            </div>
            <div
              className="temperature"
              style={{
                fontSize: "64px",
                fontFamily: "monospace",
                color: "#0C1697",
              }}
            >
              {cityData.temperature}°C
            </div>
            <div className="additional_details">
              <span style={{ fontSize: "20px", fontFamily: "monospace" }}>
                Humidity:
              </span>
              <span style={{ fontSize: "25px", fontFamily: "monospace" }}>
                {cityData.humidity}%
              </span>
              <span style={{ fontSize: "20px", fontFamily: "monospace" }}>
                &nbsp; &nbsp; Wind-speed:
              </span>
              <span style={{ fontSize: "28px", fontFamily: "monospace" }}>
                {cityData.wind_speed}
              </span>{" "}
              <span style={{ fontSize: "14px", fontFamily: "monospace" }}>
                kmph
              </span>
            </div>
            <div
              className="weather_icon"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {WeatherIcon && (
                <WeatherIcon
                  style={{
                    fontSize: "150px",
                    color: "#60A2F1",
                  }}
                />
              )}
            </div>
            <div className="description">
              <span style={{ fontSize: "28px", fontFamily: "monospace" }}>
                {cityData.weather_description}
              </span>
            </div>
          </div>
          <div
            className="secondary_container"
            style={{
              borderTop: "2px solid #F0F2E4", //Add white border
              marginTop: "10%", //To provide some spacing above the line
              // display: "flex",
            }}
          >
            <p
              style={{
                fontSize: "30px",
                fontFamily: "sans-serif",
                color: "#60A2F1",
              }}
            >
              Forecast:
            </p>
            <div
              className="forecast"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5%",
                marginRight: "5%",
                justifyContent: "space-evenly",
              }}
            >
              {cityData.forecast.map((item, index) => (
                <Forecast key={index} forecastData={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
