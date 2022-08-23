import React from "react";
import Filtros from "../FILTROS/Filtros";
import Ordenamientos from "../ORDENAMIENTOS/Ordenamientos";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  return (
    <div>
      <div>
        <Filtros />
      </div>
      <div>
        <Ordenamientos />
      </div>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}
