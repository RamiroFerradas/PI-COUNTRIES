import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCountries,
  searchCountrie,
  searchCountrieGlobal,
  setCurrentPage,
} from "../../redux/actions";

export default function Searchbar() {
  const countries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  // useEffect(() => {
  //   dispatch(searchCountrie(name));
  // }, [dispatch, name]);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    // dispatch(searchCountrieGlobal(name));
    dispatch(searchCountrie(name));
    setCurrentPage(1);
  };

  // const autoComplete = async () => {
  //   <ul>
  //     {await countries?.map((ele) => {
  //       return (
  //         <Link to={`countries/${ele.id}`}>
  //           <li list-style="none">{ele.name}</li>
  //         </Link>
  //       );
  //     })}
  //   </ul>;
  // };

  const handleChange = (e) => {
    const key = e.target.value;
    e.preventDefault();
    setName(e.target.value.toLowerCase());
    dispatch(searchCountrie(name));
    // dispatch(autoComplete());
    setCurrentPage(1);
  };

  return (
    <form onSubmit={(e) => hanldeSubmit(e)}>
      <input
        type="text"
        placeholder="Search Countrie . . . "
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}
