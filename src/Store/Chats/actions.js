import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION, DELETE_CHAT_WITH_SAGA } from "./constants";

export const addChatAction = (payload) => ({
  type: ADD_CHAT_ACTION,
  payload,
});

export const deleteChatAction = (payload) => ({
  type: DELETE_CHAT_ACTION,
  payload,
});

export const deleteChatWithSaga = (payload) => ({
  type: DELETE_CHAT_WITH_SAGA,
  payload,
});
