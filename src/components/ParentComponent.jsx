// src/components/ParentComponent.jsx
import React from "react";
import { useQuery } from "react-query";
import ChildComponent from "./ChildComponent";

/**
 * Example function to simulate data fetching or subscription with a delay
 * @returns {Promise<Object>} - Mock data response
 */
const mockDataSource = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const shouldReturnData = Math.random() > 0.5;
      const hasTargetKey = Math.random() > 0.5;
      const deeplyNested = Math.random() > 0.5;

      if (!shouldReturnData) {
        resolve({});
        return;
      }

      const data = deeplyNested
        ? {
            level1: {
              level2: {
                level3: {
                  all_active_promo_offers: hasTargetKey
                    ? [
                        { offer_id: 1, amount: 10 },
                        { offer_id: 2, amount: 20 },
                        { offer_id: 3, amount: 5 },
                      ]
                    : [],
                },
              },
            },
          }
        : {
            all_active_promo_offers: hasTargetKey
              ? [
                  { offer_id: 1, amount: 10 },
                  { offer_id: 2, amount: 20 },
                  { offer_id: 3, amount: 5 },
                ]
              : [],
          };

      resolve(data);
    }, 1000);
  });
};

/**
 * ParentComponent fetches data and passes it to ChildComponent
 * @returns {JSX.Element} - Rendered component
 */
const ParentComponent = () => {
  const { data, error, isLoading, refetch } = useQuery(
    "promoData",
    mockDataSource,
  );

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
