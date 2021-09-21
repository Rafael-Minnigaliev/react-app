import {
  ADD_EMAIL_ACTION,
  ADD_PASSWORD_ACTION,
  SUBMIT_ERROR_ACTION,
  AUTHED_ACTION,
  CURRENT_USER_ACTION,
  NOT_AUTHED_ACTION,
} from "./constants";

const initialState = {
  email: "",
  password: "",
  error: false,
  authenticated: false,
  uid: undefined,
};

export const authenticatedReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL_ACTION:
      return {
        ...state,
        email: action.payload,
        error: false,
      };
    case ADD_PASSWORD_ACTION:
      return {
        ...state,
        password: action.payload,
        error: false,
      };
    case SUBMIT_ERROR_ACTION:
      return {
        ...state,
        error: action.payload,
      };
    case AUTHED_ACTION:
      return {
        ...state,
        authenticated: true,
      };
    case CURRENT_USER_ACTION:
      return {
        ...state,
        uid: action.payload,
      };
    case NOT_AUTHED_ACTION:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};
