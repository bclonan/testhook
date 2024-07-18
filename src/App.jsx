// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ParentComponent from "./components/ParentComponent";

/**
 * Main App component
 * @returns {JSX.Element} - Rendered App component
 */
const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Example App</h1>
        <ParentComponent />
      </div>
    </QueryClientProvider>
  );
};

export default App;
