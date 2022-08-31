import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions/actions";
import { searchCountrie } from "../../redux/actions/countries";
import styles from "../Searchbar/Searchbar.module.css";

export default function Searchbar() {
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
      <form name="search" onSubmit={(e) => hanldeSubmit(e)}>
        <input
          type="text"
          className={styles.inputSearch}
          name="txt"
          // onMouseOut="this.value = ''; this.blur();"
          // type="search"
          placeholder="Search Countrie . . . "
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
      {/* <i className={styles.Isearch}></i> */}
      <i className="fas fa-search"></i>
    </div>
  );
}
