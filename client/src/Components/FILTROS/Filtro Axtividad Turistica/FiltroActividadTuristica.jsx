import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  // filterActivity,
  setCurrentPage,
} from "../../../redux/actions/actions";
import { getActivities } from "../../../redux/actions/activities";
import { filterActivities } from "../../../redux/actions/filtros";
export default function FiltroActividadTuristica() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);

  const handleActivity = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    // dispatch(filterActivity(e.target.value));
    dispatch(filterActivities(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <select name="" id="" onChange={(e) => handleActivity(e)}>
        <option value="default">Default</option>
        {activities?.map((ele) => {
          return (
            <option key={ele.id} value={ele.name}>
              {ele.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
