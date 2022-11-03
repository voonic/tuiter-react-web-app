import React from "react";
import TuitItem from "./TuitItem";
import { useSelector } from "react-redux";
const TuitList = () => {
  const tuitsArray = useSelector(state => state.tuits)
  return (
    <div>
      {tuitsArray.map(item => {
        return <TuitItem key={item._id} item={item} />
      })}
    </div>
  );
}

export default TuitList;