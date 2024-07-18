// src/components/ChildComponent.jsx
import React from "react";
import useValidOffer from "../hooks/useValidOffer";

/**
 * ChildComponent receives data from ParentComponent and uses useValidOffer hook
 * @param {Object} props - The props containing the data
 * @returns {JSX.Element} - Rendered component
 */
const ChildComponent = ({ data }) => {
  const { validOffer } = useValidOffer(data);

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
