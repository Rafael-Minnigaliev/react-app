// import { GET_DATA } from "./constants";
import { DogPicturesURL } from "../../URL/DogPicturesURL";
import {
  GET_DATA_ERROR_ACTION,
  GET_DATA_FINALLY_ACTION,
  GET_DATA_REQUEST_ACTION,
  GET_DATA_SUCCESS_ACTION,
} from "./constants";

const getDataRequest = () => ({
  type: GET_DATA_REQUEST_ACTION,
});

const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS_ACTION,
  payload,
});

const getDataError = (payload) => ({
  type: GET_DATA_ERROR_ACTION,
  payload,
});

const getDataFinally = () => ({
  type: GET_DATA_FINALLY_ACTION,
});

export const getData = () => async (dispatch) => {
  dispatch(getDataRequest());
  try {
    const response = await fetch(DogPicturesURL);
    if (!response.ok) {
      throw Error(`Error ${response.status}!`);
    }
    const result = await response.json();
    dispatch(getDataSuccess(result));
  } catch (error) {
    dispatch(getDataError(error.message));
  } finally {
    dispatch(getDataFinally());
  }
};
