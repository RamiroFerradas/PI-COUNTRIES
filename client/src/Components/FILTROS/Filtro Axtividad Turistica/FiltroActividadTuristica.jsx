import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/actions/actions";

export default function FiltroActividadTuristica({ setActualFilter }) {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  let activitiesMap = activities.map((ele) => ele.name);
  const activitiesSet = Array.from(new Set(activitiesMap));

  const handleActivity = (e) => {
    e.preventDefault();

    setActualFilter((state) => {
      return {
        ...state,
        activities: e.target.value,
      };
    });
    dispatch(setCurrentPage(1));
  };

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
