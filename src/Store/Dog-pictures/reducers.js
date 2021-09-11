import {
  GET_DATA_ERROR_ACTION,
  GET_DATA_FINALLY_ACTION,
  GET_DATA_REQUEST_ACTION,
  GET_DATA_SUCCESS_ACTION,
} from "./constants";

const initialState = {
  data: [],
  loading: true,
  error: undefined,
};

export const dogPictureReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_DATA_SUCCESS_ACTION:
      return {
        ...state,
        data: action.payload,
      };
    case GET_DATA_ERROR_ACTION:
      return {
        ...state,
        error: [action.payload],
      };
    case GET_DATA_FINALLY_ACTION:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
