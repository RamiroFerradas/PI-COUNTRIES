import React from "react";
import FiltroActividadTuristica from "./Filtro Axtividad Turistica/FiltroActividadTuristica";
import FiltroContinentAz from "./Filtro por Continentes/FiltroContinent";

export default function Filtros() {
  return (
    <div>
      <div>
        <FiltroContinentAz />
      </div>
      <div>
        <FiltroActividadTuristica />
      </div>
    </div>
  );
}
