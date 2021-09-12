import { CircularProgress } from "@material-ui/core";
import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="Loading">
      <h3 className="Loading__title">Loading...</h3>
      <CircularProgress />
    </div>
  );
};
