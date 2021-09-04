import { combineReducers, createStore } from "redux";
import { profileReducers } from "./Profile/reducers";
import { messageReducers } from "./Messages/reducers";
import { chatReducers } from "./Chats/reducers";

export const store = createStore(
  combineReducers({
    profile: profileReducers,
    messages: messageReducers,
    chats: chatReducers,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
