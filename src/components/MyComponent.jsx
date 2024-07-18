// src/components/MyComponent.jsx
import React from "react";
import useData from "../hooks/useData";

/**
 * Example function to simulate data fetching or subscription with a delay
 * @returns {Promise<Object>} - Mock data response
 */
const mockDataSource = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        all_active_promo_offers: [
          { offer_id: 1, amount: 10 },
          { offer_id: 2, amount: 20 },
          { offer_id: 3, amount: 5 },
        ],
      });
    }, 1000);
  });
};

/**
 * Functional React component demonstrating the use of the useData hook
 * @returns {JSX.Element} - Rendered component
 */
const MyComponent = () => {
  const { data, validOffer, loading, error, refetch } = useData(mockDataSource);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Highest Valid Offer</h1>
      {validOffer ? (
        <div>
          <p>Offer ID: {validOffer.offer_id}</p>
          <p>Amount: {validOffer.amount}</p>
        </div>
      ) : (
        <p>No valid offers available</p>
      )}
      <button onClick={refetch}>Refetch Data</button>
    </div>
  );
};

export default MyComponent;