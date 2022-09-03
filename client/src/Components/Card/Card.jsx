import React from "react";
import styles from "../Card/Card.module.css";

export default function Card({ name, flag, continent }) {
  return (
    <div className={styles.containerCard}>
      <h5>{name}</h5>
      <p> {continent}</p>
      {/* <p>Continent: {continent}</p> */}
      <img className={styles.imagen} src={flag} alt={name} />
    </div>
  );
}
