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
    // <nav className={styles.naV}>
    //   <ul className={styles.uL}>
    //     <li className={styles.lI}>
    //       <NavLink
    //         to="/home"
    //         className={styles.navLink}
    //         // className={({ isActive }) => {
    //         //   return isActive ? "is-active" : undefined;
    //         // }}
    //       >
    //         COUNTRIES
    //       </NavLink>
    //     </li>
    //     <li className={styles.lI}>
    //       <NavLink
    //         to="/activities"
    //         // className={({ isActive }) => {
    //         //   return isActive ? "is-active" : undefined;
    //         // }}
    //         className={styles.navLink}
    //       >
    //         ACTIVITIES
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
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
