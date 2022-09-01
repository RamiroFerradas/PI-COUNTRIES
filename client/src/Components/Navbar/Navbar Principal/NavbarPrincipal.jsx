import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
import styles from "../Navbar Principal/NavbarPrincipal.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarPrincipal() {
  return (
    <div className={styles.bodyNav}>
      <nav className={styles.navMenu}>
        <NavLink to="/home" className={styles.Aa}>
          COUNTRIES
        </NavLink>
        <NavLink to="/activities" className={styles.Aa}>
          ACTIVITIES
        </NavLink>
        <NavLink to="/create" className={styles.Aa}>
          CREATE
        </NavLink>
        <NavLink to="/about" className={styles.Aa}>
          ABOUT
        </NavLink>
        <div className={styles.dot}></div>
      </nav>
    </div>
  );
}
