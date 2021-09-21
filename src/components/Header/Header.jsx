import { Tab, Tabs, AppBar } from "@material-ui/core";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/Constants";
import { exitFirebaseThunkAction } from "../../Store/Authenticated/actions";
import { Btn } from "../Btn/Btn";
import "./Header.scss";

export const Header = () => {
  const dispatch = useDispatch();

  const handleExit = useCallback(() => {
    dispatch(exitFirebaseThunkAction());
  }, [dispatch]);

  return (
    <header>
      <AppBar position="static">
        <Tabs>
          <Link className="Header__link" to={ROUTES.MAIN}>
            <Tab label="Home" />
          </Link>
          <Link className="Header__link" to={ROUTES.PROFILES}>
            <Tab label="Profile" />
          </Link>
          <Link className="Header__link" to={ROUTES.CHATS}>
            <Tab label="Chats" />
          </Link>
          <Link className="Header__link" to={ROUTES.DOGS}>
            <Tab label="Dogs" />
          </Link>
          <Link className="Header__link" to={ROUTES.LOGIN}>
            <Tab label="Login" />
          </Link>
          <Link className="Header__link" to={ROUTES.SIGNUP}>
            <Tab label="Signup" />
          </Link>
          <Btn onClick={handleExit} label={"Exit"} variant={"text"} color={"secondary"} />
        </Tabs>
      </AppBar>
    </header>
  );
};
