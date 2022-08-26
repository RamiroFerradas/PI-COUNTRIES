import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions/actions";
import { getActivities } from "../../redux/actions/activities";
import { filters } from "../../redux/actions/filtros";

export default function Filtros() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const countries = useSelector((state) => state.allCountries);

  const continent = countries.map((ele) => ele.continent);
  const set = Array.from(new Set(continent));

  const activities = useSelector((state) => state.activities);
  let activitiesMap = activities.map((ele) => ele.name);
  const activitiesSet = Array.from(new Set(activitiesMap));

  const [actualFilter, setActualFilter] = useState({
    continent: "",
    activities: "",
  });

  // const a = actualFilter;

  const handleContinent = (e) => {
    e.preventDefault();

    setActualFilter((state) => {
      return {
        ...state,
        continent: e.target.value,
      };
    });
    dispatch(setCurrentPage(1));
  };

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

  useEffect(() => {
    dispatch(filters(actualFilter));
  }, [dispatch, actualFilter]);

  return (
    <div>
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

      <div>
        <label htmlFor="">Filter By Continent</label>
        <select name="" id="" onChange={(e) => handleContinent(e)}>
          <option value="default">Default</option>
          {set?.map((ele) => {
            return (
              <option key={ele} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       <FiltroContinentAz handleContinent={handleContinent} />
  //     </div>
  //     <div>
  //       <FiltroActividadTuristica handleActivity={handleActivity} />
  //     </div>
  //   </div>
  // );
}
