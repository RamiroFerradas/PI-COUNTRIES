import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions/actions";
import { filterActivities, filterContinent } from "../../redux/actions/filtros";
import FiltroActividadTuristica from "./Filtro Axtividad Turistica/FiltroActividadTuristica";
import FiltroContinentAz from "./Filtro por Continentes/FiltroContinent";

export default function Filtros() {
  const dispatch = useDispatch();

  const handleContinent = (e) => {
    e.preventDefault();
    dispatch(filterContinent(e.target.value));
    setCurrentPage(1);
  };
  const handleActivity = (e) => {
    e.preventDefault();
    dispatch(filterActivities(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div>
      <div>
        <FiltroContinentAz handleContinent={handleContinent} />
      </div>
      <div>
        <FiltroActividadTuristica handleActivity={handleActivity} />
      </div>
    </div>
  );
}
