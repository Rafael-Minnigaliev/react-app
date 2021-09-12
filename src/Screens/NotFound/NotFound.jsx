import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="NotFound">
      <h3 className="NotFound__title">404, Not found!</h3>
      <SentimentVeryDissatisfiedIcon fontSize="large" />
    </div>
  );
};
