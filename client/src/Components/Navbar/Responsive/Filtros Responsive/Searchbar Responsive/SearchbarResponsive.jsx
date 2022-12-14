import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../../../redux/actions/actions";
import { searchCountrie } from "../../../../../redux/actions/countries";
import styles from "./SearchbarResponsive.module.css";

export default function SearchbarResponsive() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountrie(name));
    setCurrentPage(1);
  };

  const handleChange = (e) => {
    // e.preventDefault();
    setName(e.target.value.toLowerCase());
    console.log(e.target.value);
    dispatch(searchCountrie(name));
    setCurrentPage(1);
  };

  return (
    <div className={styles.boxSearch}>
      <div>
        <form name="search" onSubmit={(e) => hanldeSubmit(e)}>
          <input
            type="text"
            className={styles.inputSearch}
            name="txt"
            placeholder="Search Countrie . . . "
            onChange={(e) => handleChange(e)}
          ></input>
        </form>
        {/* <i className={styles.Isearch}></i> */}
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}
