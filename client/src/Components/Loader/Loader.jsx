import React from "react";
import image from "../../assets/images/loaderPlaneta.gif";
import styles from "../Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.contenedorLoading}>
      <img src={image} alt="loading" />
    </div>
  );
}
