import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/actions/actions";

export default function FiltroContinent({ setActualFilter }) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const continent = countries.map((ele) => ele.continent);
  const set = Array.from(new Set(continent));

  const handleContinent = (e) => {
    e.preventDefault();
    setActualFilter((state) => {
      return {
        ...state,
        continent: e.target.value,
      };
    });
    dispatch(setCurrentPage(1));
  };

  return (
    <div>
      <label htmlFor="">Filter By Continent</label>
      <select name="" id="" onChange={(e) => handleContinent(e)}>
        <option value="default">Default</option>
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
