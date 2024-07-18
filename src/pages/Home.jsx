// src/pages/Home.jsx
import React from "react";
import DataFetchingComponent from "../components/DataFetchingComponent";

/**
 * Home page component
 * @returns {JSX.Element} - Rendered Home page component
 */
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <DataFetchingComponent />
      <DataFetchingComponent />
    </div>
  );
};

export default Home;
