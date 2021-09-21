import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import firebase from "firebase";
import { authedThunkAction } from "./Store/Authenticated/actions";
import { Header } from "./Components/Header";
import { Routing } from "./Routing/Routing";
import { persistor } from "./Store";
import "./App.scss";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(authedThunkAction(user));
    });
  }, [dispatch]);

  return (
    <PersistGate loading={<CircularProgress />} persistor={persistor}>
      <BrowserRouter>
        <Header />
        <div className="App-container">
          <Routing />
        </div>
      </BrowserRouter>
    </PersistGate>
  );
};
