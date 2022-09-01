import React from "react";
import Filtros from "../../FILTROS/Filtros";
import Ordenamientos from "../../ORDENAMIENTOS/Ordenamientos";
import styles from "../NavbarFiltrosYOrdenamientos/NavbarFiltrosYOrdenamientos.module.css";
import { AiOutlineClear } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../../redux/actions/countries";

export default function NavbarFiltrosYOrdenamientos() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  let handleClear = (e) => {
    document.getElementById("selectActivities").selectedIndex = 0;
    document.getElementById("selectContinent").selectedIndex = 0;
    document.getElementById("selectAz").selectedIndex = 0;
    document.getElementById("selectPop").selectedIndex = 0;
    dispatch(getCountries());
  };

  return (
    <div>
      <div>
        <Filtros />
      </div>
      <div>
        <Ordenamientos />
      </div>
      <div>
        <button className={styles.buttonClear} onClick={handleClear}>
          <AiOutlineClear />
        </button>
      </div>
    </div>
  );
}
