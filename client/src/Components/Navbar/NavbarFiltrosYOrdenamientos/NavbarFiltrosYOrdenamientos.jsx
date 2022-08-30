import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CantidadDePaginas from "../../Cantidad De Paginas/CantidadDePaginas";
import Filtros from "../../FILTROS/Filtros";
import Ordenamientos from "../../ORDENAMIENTOS/Ordenamientos";
import Searchbar from "../../Searchbar/Searchbar";
import styles from "../NavbarFiltrosYOrdenamientos/NavbarFiltrosYOrdenamientos.module.css";

export default function NavbarFiltrosYOrdenamientos() {
  const [selected, setSelected] = useState("");
  let handleClear = (e) => {
    setSelected("Default");
  };
  return (
    <div>
      <div>
        <Filtros setSelected={setSelected} selected={selected} />
      </div>
      <div>
        <Ordenamientos />
      </div>
      <div>
        <button
          className={`btn btn-warning ${styles.buttonClear}`}
          onClick={(e) => handleClear(e)}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}
