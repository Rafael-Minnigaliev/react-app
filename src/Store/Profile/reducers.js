import { TOGGLE_NAME_ACTION, SET_NAME_ACTION } from "./constants";

const initialState = {
  name: "",
  showName: false,
};

export const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAME_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    case SET_NAME_ACTION:
      if (action.payload === undefined) {
        return state;
      } else {
        return {
          ...state,
          name: action.payload,
        };
      }
    default:
      return state;
  }
};
