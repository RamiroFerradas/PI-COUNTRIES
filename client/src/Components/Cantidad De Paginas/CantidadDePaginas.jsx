import React from "react";
import { useDispatch } from "react-redux";
import { countriesPerPage, setCurrentPage } from "../../redux/actions/actions";

export default function CantidadDePaginas() {
  const dispatch = useDispatch();
  return (
    <div>
      <label> Pages</label>
      <select
        onChange={(e) =>
          dispatch(countriesPerPage(e.target.value), setCurrentPage(1))
        }
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
      {/* <input
        type="range"
        max="50"
        onChange={(e) => dispatch(countriesPerPage(e.target.value))}
      /> */}
      ;
    </div>
  );
}
