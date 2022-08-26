import React from "react";
import { Link } from "react-router-dom";
import styles from "../Landing/Landing.module.css";
import image from "../../assets/images/cortado2.png";

export default function Landing() {
  return (
    <div className={styles.body}>
      <div className={styles.png}>
        <div className={styles.hola}>
          {/* <img src={image} alt="holaa" /> */}
          <Link to={"/home"}>
            <button>INGRESS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
