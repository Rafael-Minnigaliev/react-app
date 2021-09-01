import { FormControlLabel, Checkbox } from "@material-ui/core";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNameAction } from "../../Store/Profile/actions";
import { nameSelector, showNameSelector } from "../../Store/Profile/selectors";
import "./Profile.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(nameSelector);
  const showName = useSelector(showNameSelector);

  const handleToggleName = useCallback(() => {
    dispatch(toggleNameAction());
  }, [dispatch]);

  return (
    <div>
      <h1 className="Profile">Profile</h1>
      <FormControlLabel
        control={<Checkbox checked={showName} onChange={handleToggleName} color="primary" />}
        label="Name"
      />
      {showName && <h4 className="Profile__name">{name}</h4>}
    </div>
  );
};
