// src/components/ExampleComponent.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExampleComponent from "./ExampleComponent";

test("renders the initial message", () => {
  render(<ExampleComponent />);
  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});

test("changes the message when the button is clicked", () => {
  render(<ExampleComponent />);
  fireEvent.click(screen.getByText("Click me"));
  expect(screen.getByText("Button clicked!")).toBeInTheDocument();
});
