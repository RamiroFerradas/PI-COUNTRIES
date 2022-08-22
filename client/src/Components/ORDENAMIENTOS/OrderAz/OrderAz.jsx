import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/actions/actions";
import { OrderByAz } from "../../../redux/actions/filtros";

export default function OrderAz() {
  const dispatch = useDispatch();

  const handlerOrderAz = (e) => {
    e.preventDefault();
    dispatch(OrderByAz(e.target.value));
    console.log(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <p>Alphabetical Order</p>
      <select name="" id="" onChange={(e) => handlerOrderAz(e)}>
        <option value="default">All</option>
        <option value="asc">A-Z</option>
        <option value="dsc">D-Z</option>
      </select>
    </div>
  );
}
