import { Redirect, Route } from "react-router";
import { ROUTES } from "./Constants";

export const PrivateRoute = ({ authenticated, ...rest }) =>
  authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.LOGIN} />;
