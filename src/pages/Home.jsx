// src/pages/Home.jsx
import React from "react";
import ParentComponent from "../components/ParentComponent";

/**
 * Home page component
 * @returns {JSX.Element} - Rendered Home page component
 */
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ParentComponent />
    </div>
  );
};

export default Home;
