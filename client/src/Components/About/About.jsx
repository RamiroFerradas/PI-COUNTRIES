import React from "react";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.bodyAbout}>
      <div>
        <NavbarPrincipal />
      </div>
    </div>
  );
}
