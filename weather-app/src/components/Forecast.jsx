//Forecast.jsx
import React from "react";
import weatherIcons from "../weatherIcons";

const Forecast = ({ forecastData }) => {
  const WeatherIcon = weatherIcons[forecastData.weather_description];

  return (
    <>
      <div
        className="forecastItem"
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          textAlign: "center",
          width: "40%",
          height: "80%",
          margin: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          color: "#665CED",
        }}
      >
        <p style={{ fontSize: "25px", fontFamily: "monospace" }}>
          {forecastData.date}
        </p>
        <div
          className="forecast_icon"
          style={{
            display: "flex",
            justifyContent: "center",
            //alignItems: "center",
          }}
        >
          {WeatherIcon && (
            <WeatherIcon style={{ fontSize: "60px", color: "#60A2F1" }} />
          )}
        </div>

        <p style={{ fontSize: "30px", fontFamily: "monospace" }}>
          {forecastData.temperature}°C
        </p>
        <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
          {forecastData.weather_description}
        </p>

        <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
          Humidity:{forecastData.humidity}%
        </p>
        <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
          Wind-speed:{forecastData.wind_speed}kmph
        </p>
      </div>
    </>
  );
};

export default Forecast;
