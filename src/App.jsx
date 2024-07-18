import "./App.css";

// export default function App() {
//   return (
//     <main>
//       React ⚛️ + Vite ⚡ + Replit
//     </main>
//   )
// }
// src/App.js
import React from "react";
import MyComponent from "./components/MyComponent";

/**
 * Main App component
 * @returns {JSX.Element} - Rendered App component
 */
const App = () => {
  return (
    <main>
      <h1>Promo Offers Test</h1>
      <MyComponent />
    </main>
  );
};

export default App;
