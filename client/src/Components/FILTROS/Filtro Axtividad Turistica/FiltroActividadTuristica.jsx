import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/actions/actions";
import { getActivities } from "../../../redux/actions/activities";
import { filterActivities } from "../../../redux/actions/filtros";

export default function FiltroActividadTuristica({ handleActivity }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);

  let activitiesMap = activities.map((ele) => ele.name);
  const activitiesSet = Array.from(new Set(activitiesMap));

  return (
    <div>
      <label htmlFor="">Filter By Activities</label>
      <select onChange={(e) => handleActivity(e)}>
        <option value="default">Default</option>
        {activitiesSet?.map((ele) => {
          return (
            <option key={ele} value={ele}>
              {ele}
            </option>
          );
        })}
      </select>
    </div>
  );
}
