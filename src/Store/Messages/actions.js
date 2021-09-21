import firebase from "firebase";
import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const deleteMessageAction = (payload) => ({
  type: DELETE_MESSAGE_ACTION,
  payload,
});

export const addMessageThunkAction = (payload) => () => {
  const { name, setNotice } = payload;
  const timer = setTimeout(() => {
    setNotice(`The message was sent to the contact: ${name}`);
  }, 1500);
  return () => clearTimeout(timer);
};

const getMessagesPayloadFromSnapshot = (snapshot) => {
  const messages = [];
  snapshot.forEach((mes) => {
    messages.push(Object.entries(mes.val()));
  });
  return { chatId: snapshot.key, messages };
};

export const addMessageWithFirebase = (payload) => async () => {
  const { chatId, idMessage, message } = payload;
  firebase.database().ref("messages").child(chatId).child(idMessage).push(message);
};

export const deleteMessageWithFirebase = (id) => async () => {
  firebase.database().ref("messages").child(id).remove();
};

export const initMessageTracking = () => (dispatch) => {
  firebase
    .database()
    .ref("messages")
    .on("child_changed", (snapshot) => {
      const payload = getMessagesPayloadFromSnapshot(snapshot);
      if (payload !== []) dispatch(addMessageAction(payload));
    });

  firebase
    .database()
    .ref("messages")
    .on("child_added", (snapshot) => {
      const payload = getMessagesPayloadFromSnapshot(snapshot);
      if (payload !== []) dispatch(addMessageAction(payload));
    });

  firebase
    .database()
    .ref("messages")
    .on("child_removed", (snapshot) => {
      const payload = getMessagesPayloadFromSnapshot(snapshot);
      dispatch(deleteMessageAction(payload));
    });
};
