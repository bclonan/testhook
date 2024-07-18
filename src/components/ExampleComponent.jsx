// src/components/ExampleComponent.jsx
import React from "react";

/**
 * ExampleComponent demonstrates a simple component with a button and a message
 * @returns {JSX.Element} - Rendered component
 */
const ExampleComponent = () => {
  const [message, setMessage] = React.useState("Hello, world!");

  const handleClick = () => {
    setMessage("Button clicked!");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ExampleComponent;
