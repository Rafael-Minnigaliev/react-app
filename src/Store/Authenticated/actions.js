import firebase from "firebase";
import {
  ADD_EMAIL_ACTION,
  ADD_PASSWORD_ACTION,
  SUBMIT_ERROR_ACTION,
  AUTHED_ACTION,
  NOT_AUTHED_ACTION,
  CURRENT_USER_ACTION,
} from "./constants";

export const addEmailAction = (payload) => ({
  type: ADD_EMAIL_ACTION,
  payload,
});

export const addPasswordAction = (payload) => ({
  type: ADD_PASSWORD_ACTION,
  payload,
});

export const submitErrorAction = (payload) => ({
  type: SUBMIT_ERROR_ACTION,
  payload,
});

export const authenticatedAction = () => ({
  type: AUTHED_ACTION,
});

export const currentUserAction = (payload) => ({
  type: CURRENT_USER_ACTION,
  payload,
});

export const notAuthedAction = () => ({
  type: NOT_AUTHED_ACTION,
});

export const authedThunkAction = (payload) => (dispatch) => {
  if (payload) {
    const uid = payload.uid;
    dispatch(authenticatedAction());
    dispatch(currentUserAction(uid));
  } else {
    dispatch(notAuthedAction());
  }
};

export const submitFirebaseThunkAction = (payload) => async (dispatch) => {
  const { email, password } = payload;
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    dispatch(submitErrorAction(error.message));
  }
};

export const enterFirebaseThunkAction = (payload) => async (dispatch) => {
  const { email, password } = payload;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    dispatch(submitErrorAction(error.message));
  }
};

export const exitFirebaseThunkAction = () => () => {
  firebase.auth().signOut();
};
