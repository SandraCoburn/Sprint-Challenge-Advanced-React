import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";
test("renders without crashing", () => {
  render(<App />);
});

test("World Cup in header found", () => {
  const { getByText } = render(<App />);
  getByText(/world/i);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
