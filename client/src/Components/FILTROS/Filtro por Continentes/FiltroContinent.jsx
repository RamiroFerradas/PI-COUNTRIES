import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/actions/actions";
import { filterContinent } from "../../../redux/actions/filtros";

export default function FiltroContinentAz({ handleContinent }) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const continent = countries.map((ele) => ele.continent);
  const set = Array.from(new Set(continent));
  console.log(continent, "ACAA");

  return (
    <div>
      <label htmlFor="">Filter By Continent</label>
      <select name="" id="" onChange={(e) => handleContinent(e)}>
        <option value="default">All</option>
        {/* {set?.map((ele) => {
          return (
            <option key={ele} value={ele}>
              {ele}
            </option>
          );
        })} */}
      </select>
    </div>
  );
}
