import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/actions/actions";
import styles from "../Filtro Axtividad Turistica/FiltroActividadTuristica.module.css";

export default function FiltroActividadTuristica({
  setActualFilter,
  selected,
  setSelected,
}) {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  const activitiesSet = Array.from(new Set(activities?.map((ele) => ele.name)));

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
    <div className={styles.contenedorAct}>
      <label htmlFor="">Filter By Activities</label>
      <select
        // selected value={selected}
        onChange={(e) => handleActivity(e)}
      >
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
