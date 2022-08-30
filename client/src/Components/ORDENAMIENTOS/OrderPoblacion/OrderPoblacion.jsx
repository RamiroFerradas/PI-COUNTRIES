import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/actions/actions";
import { orderPopulation } from "../../../redux/actions/ordenamientos";
import styles from "../OrderPoblacion/OrderPoblacion.module.css";

export default function OrderPoblacion() {
  const dispatch = useDispatch();
  const handlerPopulation = (e) => {
    dispatch(orderPopulation(e.target.value));
    dispatch(setCurrentPage(1));
  };
  return (
    <div className={styles.orderPop}>
      <label>Population Order</label>
      <select name="" id="" onChange={(e) => handlerPopulation(e)}>
        <option value="Default">Default</option>
        <option value="max">High Population</option>
        <option value="min">Low Population</option>
      </select>
    </div>
  );
}
