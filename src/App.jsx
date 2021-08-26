import "./App.scss";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { Routing } from "./Routing/Routing";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routing />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};
