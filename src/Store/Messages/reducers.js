import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants";

const initialState = {
  messageList: {},
  //{[id]:[[ 'key', 'message' ],],}
};

export const messageReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.payload.chatId]: action.payload.messages,
        },
      };
    case DELETE_MESSAGE_ACTION:
      const { [action.payload.chatId]: messagesToDelete, ...restMessageList } = state.messageList;
      return {
        ...state,
        messageList: { ...restMessageList },
      };
    default:
      return state;
  }
};
