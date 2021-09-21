import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";

const initialState = {
  chatList: [],
  //{id:*, name:*}
};

export const chatReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION:
      return {
        ...state,
        chatList: [...state.chatList, { id: action.payload.chatId, chatName: action.payload.chats[0] }],
      };
    case DELETE_CHAT_ACTION:
      return {
        ...state,
        chatList: [...state.chatList.filter((item) => item.id !== action.payload.chatId)],
      };
    default:
      return state;
  }
};
