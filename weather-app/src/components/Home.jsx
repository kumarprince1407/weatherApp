import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import { fetchData } from "../api/fetchWeatherData";

// const fetchData = () => {
//   return axios.get("https://freetestapi.com/api/v1/weathers", {});
// };

const DetailsButton = (params) => {
  console.log(params);

  return (
    <button
      onClick={() => DetailsButton(params)}
      style={{
        background: "#A1D8F4",
        color: "white",
        borderRadius: "2px",
        width: "80%",
        height: "80%",
        margin: "1%",
        display: "flex",
        justifyContent: "center", //Centers the content horizontally
        alignItems: "center", //Centers the content vertically
      }}
    >
      Click Me
    </button>
  );
};

const Home = () => {
  const { isLoading, data, isError, error } = useQuery(
    "weather-data", //unique key
    fetchData,
    {} //additional features from React query
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h4>{error.message}</h4>;
  }

  const columnDefs = [
    { headerName: "City", field: "city", cellStyle: { textAlign: "left" } },
    {
      headerName: "Temperature",
      field: "temperature",
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "Humidity",
      field: "humidity",
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "Condition",
      field: "weather_description",
      cellStyle: { textAlign: "left" },
    },
    {
      headerName: "Details",
      field: "details",
      cellRenderer: DetailsButton,
      width: 150,
    },
  ];

  return (
    <>
      <h3 className="text-center mb-2">Home</h3>
      <div className="mainContainer flex items-center justify-center min-h-screen">
        <div
          className="ag-theme-quartz"
          style={{ width: "55vw", height: "80vh" }}
        >
          <AgGridReact rowData={data.data} columnDefs={columnDefs} />
        </div>
      </div>
    </>
  );
};

export default Home;
