// src/components/ParentComponent.jsx
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ data, error, isLoading, refetch }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={refetch}>Refetch Data</button>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;
