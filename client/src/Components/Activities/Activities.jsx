import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity, getActivities } from "../../redux/actions/activities";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";
import styles from "../Activities/Activities.module.css";
import { getCountries } from "../../redux/actions/countries";

export default function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.navYButton}>
        <div className={styles.navbarDetails}>
          <NavbarPrincipal />
        </div>
      </div>
      <div>
        {activities?.map((ele) => {
          return (
            <div className={styles.bodyActivities}>
              <div key={ele.id} className={styles.cajaActivitie}>
                <h4>
                  {ele.name && ele.name[0].toUpperCase() + ele.name.slice(1)}
                </h4>
                <p
                  className={
                    ele.difficulty === 1
                      ? styles.dif1
                      : ele.difficulty === 2
                      ? styles.dif2
                      : ele.difficulty === 3
                      ? styles.dif3
                      : ele.difficulty === 4
                      ? styles.dif4
                      : styles.dif5
                  }
                >
                  <strong className={styles.labelDif}>Difficulty: </strong>
                  {ele.difficulty === 1
                    ? "Beginner"
                    : ele.difficulty === 2
                    ? "Amateur"
                    : ele.difficulty === 3
                    ? "Intermediate"
                    : ele.difficulty === 4
                    ? "Advanced"
                    : "Expert"}
                </p>
                <p>
                  <strong className={styles.labelDif}>Duration: </strong>
                  {ele.duration} hs.
                </p>
                <p>
                  <strong className={styles.labelDif}>Season:</strong>
                  {ele.season?.join(", ")}
                </p>
                <p>
                  {" "}
                  <strong className={styles.labelDif}>Countries: </strong>
                </p>
                <div className={styles.cajaCountriesPP}>
                  {ele.countries?.map((ele) => {
                    const actualCountry = countries?.find(
                      (c) => c.name === ele
                    );
                    if (actualCountry) {
                      return (
                        <div className={styles.countriesAct}>
                          <img
                            src={actualCountry.flag}
                            alt={actualCountry.id}
                          />
                          <p>{actualCountry.name}</p>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className={styles.divButtonDelete}>
                  <button
                    className={styles.ButtonDelete}
                    onClick={() =>
                      dispatch(
                        deleteActivity(ele.id),
                        setTimeout(() => {
                          dispatch(getActivities());
                          alert("Activity is deleted!");
                        }, 300)
                      )
                    }
                  >
                    <span className={styles.text}>Delete</span>
                    <span className={styles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
