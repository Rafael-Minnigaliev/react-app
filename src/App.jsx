import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { Routing } from "./Routing/Routing";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
};
