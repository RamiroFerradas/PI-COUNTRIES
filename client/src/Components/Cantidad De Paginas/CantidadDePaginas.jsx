import React from "react";
import { useDispatch } from "react-redux";
import { countriesPerPage, setCurrentPage } from "../../redux/actions/actions";
import styles from "../Cantidad De Paginas/CantidadDePaginas.module.css";

export default function CantidadDePaginas() {
  const dispatch = useDispatch();

  const handlerPage = (e) => {
    dispatch(countriesPerPage(e.target.value));
    dispatch(setCurrentPage(1));
  };
  return (
    <div className={styles.containerPages}>
      <label> Look</label>
      <select onChange={(e) => handlerPage(e)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      {/* <input
        type="range"
        max="50"
        onChange={(e) => dispatch(countriesPerPage(e.target.value))}
      /> */}
    </div>
  );
}
