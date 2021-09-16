import { Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { authenticatedSelector } from "../Store/Authenticated/selectors";
import { Main } from "../Screens/Main";
import { Profile } from "../Screens/Profile";
import { Chats } from "../Screens/Chats";
import { ROUTES } from "./Constants";
import { NotFound } from "../Screens/NotFound";
import { Dogs } from "../Screens/Dogs";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Signup } from "../Screens/Signup";
import { Login } from "../Screens/Login";

export const Routing = () => {
  const authenticated = useSelector(authenticatedSelector);

  return (
    <Switch>
      <PublicRoute exact path={ROUTES.MAIN} authenticated={authenticated}>
        <Main />
      </PublicRoute>
      <PublicRoute exact path={ROUTES.LOGIN} authenticated={authenticated}>
        <Login />
      </PublicRoute>
      <PublicRoute exact path={ROUTES.SIGNUP} authenticated={authenticated}>
        <Signup />
      </PublicRoute>
      <PrivateRoute exact path={ROUTES.CHATS} authenticated={authenticated}>
        <Chats />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.CHAT} authenticated={authenticated}>
        <Chats />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.PROFILES} authenticated={authenticated}>
        <Profile />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.DOGS} authenticated={authenticated}>
        <Dogs />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.NOT_FOUND} authenticated={authenticated}>
        <NotFound />
      </PrivateRoute>
      <PrivateRoute authenticated={authenticated}>
        <Redirect to={ROUTES.NOT_FOUND} />
      </PrivateRoute>
    </Switch>
  );
};
