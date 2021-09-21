import { DogPicturesURL } from "../../API/Constants";
import {
  GET_DATA_ERROR_ACTION,
  GET_DATA_FINALLY_ACTION,
  GET_DATA_REQUEST_ACTION,
  GET_DATA_SUCCESS_ACTION,
} from "./constants";

const getDataRequestAction = () => ({
  type: GET_DATA_REQUEST_ACTION,
});

const getDataSuccessAction = (payload) => ({
  type: GET_DATA_SUCCESS_ACTION,
  payload,
});

const getDataErrorAction = (payload) => ({
  type: GET_DATA_ERROR_ACTION,
  payload,
});

const getDataFinallyAction = () => ({
  type: GET_DATA_FINALLY_ACTION,
});

export const getDogsAction = () => async (dispatch) => {
  dispatch(getDataRequestAction());
  try {
    const response = await fetch(DogPicturesURL);
    if (!response.ok) {
      throw Error(`Error ${response.status}!`);
    }
    const result = await response.json();
    dispatch(getDataSuccessAction(result));
  } catch (error) {
    dispatch(getDataErrorAction(error.message));
  } finally {
    dispatch(getDataFinallyAction());
  }
};
