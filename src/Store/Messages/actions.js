import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const deleteMessageAction = (payload) => ({
  type: DELETE_MESSAGE_ACTION,
  payload,
});

export const addMessageThunkAction = (payload) => (dispatch) => {
  const { name, setNotice, message, chatId } = payload;
  dispatch(addMessageAction({ message, chatId }));
  const timer = setTimeout(() => {
    setNotice(`The message was sent to the contact: ${name}`);
  }, 1500);
  return () => clearTimeout(timer);
};
