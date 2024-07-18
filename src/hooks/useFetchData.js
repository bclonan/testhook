// src/hooks/useFetchData.js
import { useQuery } from "react-query";

/**
 * Custom hook for fetching data using React Query
 * @param {Function} dataSource - Function that fetches data
 * @param {string} queryKey - Unique key for the query
 * @returns {Object} - Contains data, loading, error, and refetch function
 */
const useFetchData = (dataSource, queryKey) => {
  const { data, error, isLoading, refetch } = useQuery(queryKey, dataSource);
  return { data, error, isLoading, refetch };
};

export default useFetchData;
