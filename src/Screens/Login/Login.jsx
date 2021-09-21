import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/Constants";
import { loginFirebaseThunkAction } from "../../Store/Authenticated/actions";
import { errorSelector } from "../../Store/Authenticated/selectors";
import { Input } from "../../Components/Input";
import { Btn } from "../../Components/Btn";
import "./Login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const error = useSelector(errorSelector);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = useCallback(() => {
    dispatch(loginFirebaseThunkAction({ email, password }));
    setEmail("");
    setPassword("");
  }, [dispatch, email, password]);

  return (
    <div className="Login">
      <Input
        label={"Email"}
        placeholder={"Enter your email address"}
        variant={"outlined"}
        value={email}
        type={"email"}
        onChange={handleEmailChange}
      />
      <Input
        label={"Password"}
        placeholder={"Enter your password"}
        variant={"outlined"}
        type={"password"}
        value={password}
        onChange={handlePasswordChange}
      />
      <Btn onClick={handleLogin} label={"Login"} variant={"contained"} color={"primary"} />
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
