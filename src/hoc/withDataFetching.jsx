// src/hoc/withDataFetching.jsx
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const withDataFetching = (WrappedComponent, dataSource, queryKey) => {
  return (props) => {
    const queryClient = new QueryClient();

    const { data, error, isLoading, refetch } = useQuery(queryKey, dataSource);

    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent
          {...props}
          data={data}
          error={error}
          isLoading={isLoading}
          refetch={refetch}
        />
      </QueryClientProvider>
    );
  };
};

export default withDataFetching;
