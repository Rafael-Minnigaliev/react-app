import { createStore } from "redux";
import { profileReducrs } from "./Profile/reducers";

export const store = createStore(
  profileReducrs,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
