import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";

const _ = require("lodash");

const initialState = {
  chatList: [
    { id: "01", name: "vasya" },
    { id: "02", name: "vitya" },
  ],
  //{id:*, name:*}
};

export const chatReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION:
      return {
        ...state,
        chatList: [...state.chatList, { id: _.uniqueId(), name: action.payload.newChat }],
      };
    case DELETE_CHAT_ACTION:
      return {
        ...state,
        chatList: [...state.chatList.filter((item) => item.id !== action.payload.id)],
      };

    default:
      return state;
  }
};
