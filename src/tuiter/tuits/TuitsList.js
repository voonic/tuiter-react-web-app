import React, { useEffect } from "react";
import { useDispatch, useSelector }
  from "react-redux";
import TuitItem from "./TuitItem";
import { findTuitsThunk }
  from "../../services/tuits-thunks";

const TuitList = () => {
  const { tuits, loading } = useSelector(
    state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return (
    <div>
      {
        loading && <div>Loading... </div>
      }
      {tuits.map(item => {
        return <TuitItem key={item._id} item={item} />
      })}
    </div>
  );
}

export default TuitList;