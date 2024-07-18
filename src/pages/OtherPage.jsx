// src/pages/OtherPage.jsx
import React from "react";
import withDataFetching from "../hoc/withDataFetching";
import ParentComponent from "../components/ParentComponent";

/**
 * Another mock data source function
 * @returns {Promise<Object>} - Mock data response
 */
const anotherMockDataSource = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        all_active_promo_offers: [
          { offer_id: 4, amount: 15 },
          { offer_id: 5, amount: 25 },
        ],
      });
    }, 1000);
  });
};

const OtherDataFetchingComponent = withDataFetching(
  ParentComponent,
  anotherMockDataSource,
  "anotherPromoData",
);

/**
 * OtherPage component
 * @returns {JSX.Element} - Rendered OtherPage component
 */
const OtherPage = () => {
  return (
    <div>
      <h1>Other Page</h1>
      <OtherDataFetchingComponent />
      <OtherDataFetchingComponent />
    </div>
  );
};

export default OtherPage;
