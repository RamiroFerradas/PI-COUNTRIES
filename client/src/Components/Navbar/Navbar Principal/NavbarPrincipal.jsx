import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Navbar Principal/NavbarPrincipal.module.css";
import FiltrosResponsive from "../Responsive/Filtros Responsive/FiltrosResponsive";
import NavBarResponsive from "../Responsive/NavBar Responsive/NavBarResponsive";

export default function NavbarPrincipal() {
  return (
    <div className={styles.bodyNav}>
      <div className={styles.Titulo}>
        <div className={styles.divTitulo}>
          <div className={styles.navResponsive}>
            <NavBarResponsive />
          </div>
          <NavLink to="/home" className={styles.linkTitulo}>
            <h1>Countries App</h1>
          </NavLink>
        </div>
      </div>
      {/* <div className={styles.filtersResponsive}>
        <FiltrosResponsive />
      </div> */}

      <div>
        <nav className={styles.navMenu}>
          {/* <div> */}
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.Aa : styles.Aa2)}
          >
            COUNTRIES
          </NavLink>

          <NavLink
            to="/activities"
            className={({ isActive }) => (isActive ? styles.Aa : styles.Aa2)}
          >
            ACTIVITIES
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? styles.Aa : styles.Aa2)}
          >
            CREATE
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.Aa : styles.Aa2)}
          >
            ABOUT
          </NavLink>
          {/* </div> */}
          <div className={styles.dot}></div>
        </nav>
      </div>
    </div>
  );
}
