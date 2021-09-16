import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";

export const addChatAction = (payload) => ({
  type: ADD_CHAT_ACTION,
  payload,
});

export const deleteChatAction = (payload) => ({
  type: DELETE_CHAT_ACTION,
  payload,
});

const getChatPayloadFromSnapshot = (snapshot) => {
  const chats = [];
  snapshot.forEach((chat) => {
    chats.push(chat.val());
  });
  return { chatId: snapshot.key, chats };
};

export const addChatWithFirebase = (chatName) => async () => {
  firebase.database().ref("chats").child(uuidv4()).push(chatName);
};

export const deleteChatWithFirebase = (id) => async () => {
  firebase.database().ref("chats").child(id).remove();
};

export const initChatTracking = () => async (dispatch) => {
  firebase
    .database()
    .ref("chats")
    .on("child_removed", (snapshot) => {
      const payload = getChatPayloadFromSnapshot(snapshot);
      dispatch(deleteChatAction(payload));
    });

  firebase
    .database()
    .ref("chats")
    .on("child_added", (snapshot) => {
      const payload = getChatPayloadFromSnapshot(snapshot);
      if (payload.chats !== []) {
        dispatch(deleteChatAction(payload));
        dispatch(addChatAction(payload));
      }
    });
};
