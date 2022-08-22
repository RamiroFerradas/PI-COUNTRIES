import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPage } from "../../redux/actions/actions";
import { searchCountrie } from "../../redux/actions/countries";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountrie(name));
    setCurrentPage(1);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
    dispatch(searchCountrie(name));
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
