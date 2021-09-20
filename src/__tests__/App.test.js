import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { App } from "../App";
import "../Services/firebase";
import { store } from "../Store";

test("renders learn react App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
