import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { Routing } from "./Routing/Routing";
import { Provider } from "react-redux";
import { store } from "./Store";
import "./App.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routing />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
