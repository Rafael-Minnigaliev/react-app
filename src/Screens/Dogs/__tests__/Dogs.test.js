import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Dogs } from "../";
import { store } from "../../../Store";

it("renders Dogs component", () => {
  const dogs = render(
    <Provider store={store}>
      <Dogs />
    </Provider>
  );
  expect(dogs).toMatchSnapshot();
});
