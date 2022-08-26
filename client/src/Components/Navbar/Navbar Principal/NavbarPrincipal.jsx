import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
import style from "../Navbar Principal/NavbarPrincipal.module.css";

export default function NavbarPrincipal() {
  // const listRef = useRef(null);

  // const handleOnClick = () => {
  //   listRef.current.classList.toggle(style.visible);
  // };
  return (
    <div>
      <div>
        <button className={style.btn}>
          <NavLink to="/home">COUNTRIES</NavLink>
        </button>
      </div>
      <div>
        <button className={style.btn}>
          <NavLink to="/activities">ACTIVITIES</NavLink>
        </button>
      </div>
    </div>
  );
}
