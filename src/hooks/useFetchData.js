// src/hooks/useFetchData.js
import { useQuery } from "react-query";

/**
 * Custom hook for fetching data using React Query
 * @param {Function} dataSource - Function that fetches data
 * @returns {Object} - Contains data, loading, error, and refetch function
 */
const useFetchData = (dataSource) => {
  const { data, error, isLoading, refetch } = useQuery("promoData", dataSource);
  return { data, error, isLoading, refetch };
};

export default useFetchData;
