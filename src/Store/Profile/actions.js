import firebase from "firebase";
import { TOGGLE_NAME_ACTION, SET_NAME_ACTION } from "./constants";

export const toggleNameAction = () => ({
  type: TOGGLE_NAME_ACTION,
});

export const setNameAction = (payload) => ({
  type: SET_NAME_ACTION,
  payload,
});

export const changeNameWithFirebase = (payload) => () => {
  const { changeName, uid } = payload;
  firebase.database().ref("profile").child(uid).child("name").set(changeName);
};

export const initNameTracking = (payload) => (dispatch) => {
  firebase
    .database()
    .ref("profile")
    .child(payload)
    .child("name")
    .on("value", (snapshot) => {
      dispatch(setNameAction(snapshot.val()));
    });
};
