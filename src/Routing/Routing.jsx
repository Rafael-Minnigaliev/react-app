import { Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { authenticatedSelector } from "../Store/Authenticated/selectors";
import { ROUTES } from "./Constants";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import loadable from "@loadable/component";
const Main = loadable(() => import("../Screens/Main"));
const Login = loadable(() => import("../Screens/Login"));
const Signup = loadable(() => import("../Screens/Signup"));
const Chats = loadable(() => import("../Screens/Chats"));
const Profile = loadable(() => import("../Screens/Profile"));
const Dogs = loadable(() => import("../Screens/Dogs"));
const NotFound = loadable(() => import("../Screens/NotFound"));

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
