// src/context/DataContext.jsx
import React, { createContext, useContext } from "react";
import useFetchData from "../hooks/useFetchData";

const DataContext = createContext();

export const DataProvider = ({ dataSource, queryKey, children }) => {
  const { data, error, isLoading, refetch } = useFetchData(
    dataSource,
    queryKey,
  );
  return (
    <DataContext.Provider value={{ data, error, isLoading, refetch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
