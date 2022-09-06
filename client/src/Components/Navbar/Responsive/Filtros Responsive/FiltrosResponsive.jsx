import React from "react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getCountries } from "../../../../redux/actions/countries";
import Filtros from "../../../FILTROS/Filtros";
import Ordenamientos from "../../../ORDENAMIENTOS/Ordenamientos";
import styles from "./FiltrosResponsive.module.css";
import { AiOutlineClear, AiOutlineFilter } from "react-icons/ai";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import SearchbarResponsive from "./Searchbar Responsive/SearchbarResponsive";

export default function FiltrosResponsive() {
  const dispatch = useDispatch();

  const [dropdown, setDropDown] = useState(false);
  const handleDropDown = () => {
    console.log("holaa");
    setDropDown(!dropdown);
  };

  const handleClear = () => {
    document.getElementById("selectActivities").selectedIndex = 0;
    document.getElementById("selectContinent").selectedIndex = 0;
    document.getElementById("selectAz").selectedIndex = 0;
    document.getElementById("selectPop").selectedIndex = 0;
    dispatch(getCountries());
  };

  return (
    <div className={styles.bodyNavResp}>
      <Dropdown menuRole="menu" isOpen={dropdown} toggle={handleDropDown}>
        <div className={styles.menu}>
          <DropdownToggle className={styles.menuButton}>
            <AiOutlineFilter />
          </DropdownToggle>
        </div>

        <div className={styles.opciones}>
          <DropdownMenu className={styles.opciones2}>
            <div>
              <Filtros />
            </div>

            <div>
              <Ordenamientos />
            </div>

            <DropdownItem>
              <div>
                <button className={styles.buttonClear} onClick={handleClear}>
                  <AiOutlineClear />
                </button>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </div>
      </Dropdown>
      <div className={styles.divSearch}>
        <SearchbarResponsive />
      </div>
    </div>
  );
}
