import { TOGGLE_NAME_ACTION } from "./constants";

const initialState = {
  name: "Igor",
  showName: false,
};

export const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAME_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
