import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authenticatedSelector } from "../Store/Authenticated/selectors";
import { ROUTES } from "./Constants";

export const PublicRoute = ({ ...rest }) => {
  const authenticated = useSelector(authenticatedSelector);
  return !authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.PROFILES} />;
};
