import React from "react";
import styles from "../Card/Card.module.css";

export default function Card({ name, flag, continent }) {
  return (
    <div className={styles.containerCard}>
      <h5>{name}</h5>
      <p> {continent}</p>
      {/* <p>Continent: {continent}</p> */}
      <img width="150px" height="100px" src={flag} alt={name} />
    </div>
  );
}
