// src/components/ChildComponent.jsx
import React from "react";
import useData from "../hooks/useData";

/**
 * ChildComponent receives data from ParentComponent and uses useData hook
 * @param {Object} props - The props containing the data
 * @returns {JSX.Element} - Rendered component
 */
const ChildComponent = ({ data }) => {
  const { validOffer } = useData(data);

  return (
    <div>
      <h2>Child Component</h2>
      {validOffer ? (
        <div>
          <p>Offer ID: {validOffer.offer_id}</p>
          <p>Amount: {validOffer.amount}</p>
        </div>
      ) : (
        <p>No valid offers available</p>
      )}
    </div>
  );
};

export default ChildComponent;
