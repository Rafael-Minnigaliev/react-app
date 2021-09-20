import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { LoadingError } from "../";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a Error", () => {
  act(() => {
    render(<LoadingError error="Error 404!" />, container);
  });
  expect(container.textContent).toEqual("Error 404!Update");

  act(() => {
    render(<LoadingError error="Error 501!" />, container);
  });
  expect(container.textContent).toEqual("Error 501!Update");
});
