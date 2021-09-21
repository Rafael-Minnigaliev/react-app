import { FormControlLabel, Checkbox, TextField, Button } from "@material-ui/core";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exitFirebaseThunkAction } from "../../Store/Authenticated/actions";
import { uidSelector } from "../../Store/Authenticated/selectors";
import { changeNameWithFirebase, initNameTracking, toggleNameAction } from "../../Store/Profile/actions";
import { nameSelector, showNameSelector } from "../../Store/Profile/selectors";
import "./Profile.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(nameSelector);
  const showName = useSelector(showNameSelector);
  const uid = useSelector(uidSelector);

  useEffect(() => {
    dispatch(initNameTracking(uid));
  }, [dispatch, uid]);

  const handleToggleName = useCallback(() => {
    dispatch(toggleNameAction());
  }, [dispatch]);

  const handleExit = useCallback(() => {
    dispatch(exitFirebaseThunkAction());
  }, [dispatch]);

  const handleChangeName = (e) => {
    const changeName = e.target.value;
    dispatch(changeNameWithFirebase({ changeName, uid }));
  };

  return (
    <div className="Profile">
      <h1 className="Profile__title">Profile</h1>
      <div className="Profile__checkbox">
        <FormControlLabel
          control={<Checkbox checked={showName} onChange={handleToggleName} color="primary" />}
          label="Name"
        />
        {showName && <h4 className="Profile__name">{name}</h4>}
      </div>
      <TextField
        label="Name"
        placeholder="Enter a name"
        variant="outlined"
        onChange={handleChangeName}
        style={{ marginBottom: "100px" }}
      />
      <Button variant="contained" color="primary" onClick={handleExit}>
        Exit
      </Button>
    </div>
  );
};
