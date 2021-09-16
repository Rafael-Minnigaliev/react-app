import { Redirect, Route } from "react-router";
import { ROUTES } from "./Constants";

export const PublicRoute = ({ authenticated, ...rest }) =>
  !authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.PROFILES} />;
