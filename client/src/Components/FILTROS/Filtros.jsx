import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities } from "../../redux/actions/activities";
import { filters } from "../../redux/actions/filtros";
import FiltroActividadTuristica from "./Filtro Axtividad Turistica/FiltroActividadTuristica";
import FiltroContinent from "./Filtro por Continentes/FiltroContinent";
import styles from "../FILTROS/Filtros.module.css";

export default function Filtros() {
  const dispatch = useDispatch();

  const [actualFilter, setActualFilter] = useState({
    continent: "",
    activities: "",
  });

  useEffect(() => {
    dispatch(getActivities());
    dispatch(filters(actualFilter));
  }, [dispatch, actualFilter]);

  return (
    <div className={styles.filtrosConteiner}>
      <div>
        <FiltroActividadTuristica setActualFilter={setActualFilter} />
      </div>

      <div>
        <FiltroContinent setActualFilter={setActualFilter} />
      </div>
    </div>
  );
}
