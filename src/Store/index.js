import storage from "redux-persist/lib/storage";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { profileReducers } from "./Profile/reducers";
import { messageReducers } from "./Messages/reducers";
import { chatReducers } from "./Chats/reducers";
import { middleware } from "../Middleware/middleware";
import mySaga from "../Middleware/sagas";
import { dogPictureReducers } from "./Dog-pictures/reducers";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
};

const rootReducer = combineReducers({
  profile: profileReducers,
  messages: messageReducers,
  chats: chatReducers,
  dogPicture: dogPictureReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(middleware, thunk, sagaMiddleware))
);

export let persistor = persistStore(store);

sagaMiddleware.run(mySaga);
