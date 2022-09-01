import React, { useRef } from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "../Navbar Principal/NavbarPrincipal.module.css";
import { useState } from "react";

export default function NavbarPrincipal() {
  const [active, setActive] = useState("");
  // const match = useMatch();

  return (
    <div className={styles.bodyNav}>
      <nav className={styles.navMenu}>
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
        <div className={styles.dot}></div>
      </nav>
    </div>
  );
}
