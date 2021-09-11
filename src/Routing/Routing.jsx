import { Redirect, Route, Switch } from "react-router-dom";
import { Main } from "../Screens/Main";
import { Profile } from "../Screens/Profile";
import { Chats } from "../Screens/Chats";
import { ROUTES } from "./Constants";
import { NotFound } from "../Screens/NotFound";
import { Dogs } from "../Screens/Dogs";

export const Routing = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.MAIN}>
        <Main />
      </Route>
      <Route exact path={ROUTES.CHATS}>
        <Chats />
      </Route>
      <Route path={ROUTES.CHAT}>
        <Chats />
      </Route>
      <Route path={ROUTES.PROFILES}>
        <Profile />
      </Route>
      <Route path={ROUTES.DOGS}>
        <Dogs />
      </Route>
      <Route path={ROUTES.NOT_FOUND}>
        <NotFound />
      </Route>
      <Route>
        <Redirect to={ROUTES.NOT_FOUND} />
      </Route>
    </Switch>
  );
};
