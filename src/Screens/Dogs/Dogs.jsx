import { Button } from "@material-ui/core";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dogsSelector, errorSelector, loadingSelector } from "../../Store/Dog-pictures/selectors";
import { Loading } from "../../Components/Loading/Loading";
import { getDogsAction } from "../../Store/Dog-pictures/actions";
import { LoadingError } from "../../Components/loading-error";
import "./Dogs.scss";

export const Dogs = () => {
  const dispatch = useDispatch();

  const dogs = useSelector(dogsSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  const handleData = useCallback(() => {
    dispatch(getDogsAction());
  }, [dispatch]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError handleData={handleData} error={error} />;
  }

  return (
    <div className="Dogs">
      <Button className="Dogs__btn" variant="contained" color="primary" onClick={handleData}>
        The next dog
      </Button>
      <img className="Dogs__image" src={dogs.message} alt="dog" />
    </div>
  );
};
