// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import OtherPage from "./pages/OtherPage";
import NavBar from "./components/NavBar";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/other" element={<OtherPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
