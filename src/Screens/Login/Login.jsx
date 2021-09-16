import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { ROUTES } from "../../Routing/Constants";
import { addEmailAction, addPasswordAction, enterFirebaseThunkAction } from "../../Store/Authenticated/actions";
import { passwordSelector, emailSelector, errorSelector } from "../../Store/Authenticated/selectors";
import "./Login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const password = useSelector(passwordSelector);
  const email = useSelector(emailSelector);
  const error = useSelector(errorSelector);

  const handleEmailChange = (e) => {
    dispatch(addEmailAction(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(addPasswordAction(e.target.value));
  };

  const handleEnter = useCallback(() => {
    dispatch(enterFirebaseThunkAction({ email, password }));
  }, [dispatch, email, password]);

  return (
    <div className="Login">
      <TextField
        label="Email"
        placeholder="Enter your email address"
        variant="outlined"
        value={email}
        type="email"
        onChange={handleEmailChange}
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Password"
        placeholder="Enter your password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={handleEnter}>
        Enter
      </Button>
      <div className="Login__link">
        <h3 className="Login__title">No account??</h3>
        <Link to={ROUTES.SIGNUP} className="Login__btn">
          Signup
        </Link>
      </div>
      {error && <h3 className="Login__error">Error: {error}</h3>}
    </div>
  );
};
