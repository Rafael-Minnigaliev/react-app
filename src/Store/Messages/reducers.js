import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants";

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
            {
              id: `${action.payload.chatId}-${currentList.length}`,
              text: action.payload.message,
              author: "author",
            },
          ],
        },
      };

    case DELETE_MESSAGE_ACTION:
      const { [action.payload.id]: messagesToDelete, ...restMessageList } = state.messageList;
      return {
        ...state,
        messageList: { ...restMessageList },
      };
    default:
      return state;
  }
};
