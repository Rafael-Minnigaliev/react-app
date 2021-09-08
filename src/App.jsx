import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@material-ui/core";
import { Provider } from "react-redux";
import { Header } from "./Components/Header";
import { Routing } from "./Routing/Routing";
import { persistor, store } from "./Store";
import "./App.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <div className="App">
            <Routing />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
