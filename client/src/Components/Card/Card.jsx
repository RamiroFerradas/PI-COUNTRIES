import React from "react";
import styles from "../Card/Card.module.css";

export default function Card({ name, flag, continent }) {
  return (
    <div className={styles.containerCard}>
      <p>{name}</p>
      <img width="150px" height="100px" src={flag} alt={name} />

      {!{ continent } ? <p></p> : <p>Continent: {continent}</p>}
      {/* <p>Continent: {continent}</p> */}
    </div>
  );
}
