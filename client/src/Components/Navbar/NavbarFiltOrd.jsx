import React from "react";
import { NavLink } from "react-router-dom";
import CantidadDePaginas from "../Cantidad De Paginas/CantidadDePaginas";
import Filtros from "../FILTROS/Filtros";
import Ordenamientos from "../ORDENAMIENTOS/Ordenamientos";
import Searchbar from "../Searchbar/Searchbar";

export default function NavbarFiltOrd() {
  return (
    <div>
      <div>
        <Filtros />
      </div>
      <div>
        <Ordenamientos />
      </div>
      <div>
        <CantidadDePaginas />
      </div>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}
