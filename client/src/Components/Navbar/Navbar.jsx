import React from "react";
import Filtros from "../FILTROS/Filtros";
import Ordenamientos from "../ORDENAMIENTOS/Ordenamientos";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar({ setOrder }) {
  return (
    <div>
      <div>
        <Filtros />
      </div>
      <div>
        <Ordenamientos setOrder={setOrder} />
      </div>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}
