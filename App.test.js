import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("renders header without crashing", () => {
  render(<Header />);
  const headerText = screen.getByText(/Emoji Search/i);
  expect(headerText).toBeInTheDocument();
});

test("renders emoji list without crashing", () => {
  render(<App />);
  const items = screen.getAllByTestId("row");
  expect(items.length).toEqual(20);
});

test("filters emoji list successfully", () => {
  render(<App />);
  const inputText = screen.getByText("1234");
  expect(inputText).toBeInTheDocument("1234");
});

test("copies emoji into clipboard", () => {
  render(<App />);
  const clicks = screen.getAllByTestId("row");
  expect(clicks[0]).toHaveAttribute("data-clipboard-text");
});

