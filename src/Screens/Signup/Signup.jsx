import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/Constants";
import { submitFirebaseThunkAction } from "../../Store/Authenticated/actions";
import { errorSelector } from "../../Store/Authenticated/selectors";
import { Input } from "../../Components/Input";
import { Btn } from "../../Components/Btn/Btn";
import "./Signup.scss";

export const Signup = () => {
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

  const handleSubmit = useCallback(() => {
    dispatch(submitFirebaseThunkAction({ email, password }));
    setEmail("");
    setPassword("");
  }, [dispatch, email, password]);

  return (
    <div className="Signup">
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
      <Btn onClick={handleSubmit} label={"Submit"} variant={"contained"} color={"primary"} />
      <div className="Signup__link">
        <h3 className="Signup__title">Already registered?</h3>
        <Link to={ROUTES.LOGIN} className="Signup__btn">
          Login
        </Link>
      </div>
      {error && <h3 className="Signup__error">Error: {error}</h3>}
    </div>
  );
};
