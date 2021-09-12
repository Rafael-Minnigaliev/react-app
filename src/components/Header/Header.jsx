import { Tab, Tabs, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/Constants";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Tabs>
          <Link className="Header__link" to={ROUTES.MAIN}>
            <Tab label="Home" />
          </Link>
          <Link className="Header__link" to={ROUTES.CHATS}>
            <Tab label="Chats" />
          </Link>
          <Link className="Header__link" to={ROUTES.PROFILES}>
            <Tab label="Profile" />
          </Link>
          <Link className="Header__link" to={ROUTES.DOGS}>
            <Tab label="Dogs" />
          </Link>
        </Tabs>
      </AppBar>
    </header>
  );
};
