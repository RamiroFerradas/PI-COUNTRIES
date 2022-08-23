import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/actions/actions";
import { filterContinent } from "../../../redux/actions/filtros";

export default function FiltroContinentAz() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const continent = countries.map((ele) => ele.continent);
  const set = Array.from(new Set(continent));

  // const arr = Array.from(set);
  // console.log(set, "SOY EL FILTRO DE CONTINENTS");
  const handleContinent = (e) => {
    e.preventDefault();
    dispatch(filterContinent(e.target.value));

    setCurrentPage(1);
  };
  return (
    <div>
      <select name="" id="" onChange={(e) => handleContinent(e)}>
        <option value="default">All</option>
        {set?.map((ele) => {
          return (
            <option key={ele} value={ele}>
              {ele}
            </option>
          );
        })}
      </select>
    </div>
  );
}
