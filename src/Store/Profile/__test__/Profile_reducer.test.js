import { setNameAction, toggleNameAction } from "../actions";
import { profileReducers } from "../reducers";

describe("Profile reducer test", () => {
  it("Toggle name", () => {
    const expected = {
      name: "",
      showName: true,
    };
    const received = profileReducers(undefined, toggleNameAction());
    expect(received).toEqual(expected);
  });

  it("Set name", () => {
    const expected = {
      name: "",
      showName: false,
    };
    const received = profileReducers(undefined, setNameAction());
    expect(received).toEqual(expected);
  });
});
