import React from "react";
import { Link } from "react-router-dom";
import styles from "../Landing/Landing.module.css";
import image from "../../assets/images/cortado2.png";

export default function Landing() {
  return (
    <div>
      <Link to={"/home"}>
        <button className={styles.button}>INGRESS</button>
      </Link>
      <div>
        <h1 className={styles.text}>Welcome to my amazing countries App!</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.parpadeo}>
          <div></div>
          {/* <img src={image} alt="holaa" /> */}
        </div>
      </div>
    </div>
  );
}
