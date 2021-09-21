import { Redirect, Switch } from "react-router-dom";

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
  return (
    <Switch>
      <PublicRoute exact path={ROUTES.MAIN}>
        <Main />
      </PublicRoute>
      <PublicRoute exact path={ROUTES.LOGIN}>
        <Login />
      </PublicRoute>
      <PublicRoute exact path={ROUTES.SIGNUP}>
        <Signup />
      </PublicRoute>
      <PrivateRoute exact path={ROUTES.CHATS}>
        <Chats />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.CHAT}>
        <Chats />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.PROFILES}>
        <Profile />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.DOGS}>
        <Dogs />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.NOT_FOUND}>
        <NotFound />
      </PrivateRoute>
      <PrivateRoute>
        <Redirect to={ROUTES.NOT_FOUND} />
      </PrivateRoute>
    </Switch>
  );
};
