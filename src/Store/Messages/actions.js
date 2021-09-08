import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const deleteMessageAction = (payload) => ({
  type: DELETE_MESSAGE_ACTION,
  payload,
});
