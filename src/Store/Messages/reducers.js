import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants";

const _ = require("lodash");

const initialState = {
  messageList: {},
  //{[id]:[{ id: "*", text: "*", author: "*" }],}
};

export const messageReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      const currentList = state.messageList[action.payload.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.payload.chatId]: [
            ...currentList,
            { id: _.uniqueId(), text: action.payload.message, author: "author" },
          ],
        },
      };

    case DELETE_MESSAGE_ACTION:
      delete state.messageList[[action.payload.id]];
      return {
        ...state,
        messageList: { ...state.messageList },
      };
    default:
      return state;
  }
};
