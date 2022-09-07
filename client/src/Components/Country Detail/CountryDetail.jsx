import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getCountriesDetails } from "../../redux/actions/countries";
import { MdArrowBackIosNew } from "react-icons/md";
import { cleanCache } from "../../redux/actions/actions";
import MapComponent from "./Map/MyComponent";
import styles from "../Country Detail/CountryDetail.module.css";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";
import Loader from "../Loader/Loader";
import NavBarResponsive from "../Navbar/Responsive/NavBar Responsive/NavBarResponsive";

export default function CountryDetail() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getCountriesDetails(id));
  }, [dispatch, id]);

  const cleanAndBack = (e) => {
    e.preventDefault();
    navigate("/home");
    dispatch(cleanCache());
  };

  const loader = useSelector((state) => state.loader);

  let details = useSelector((state) => state.details);
  console.log(details);
  return loader ? (
    <Loader />
  ) : (
    <div>
      <div className={styles.navYButton}>
        <div className={styles.navbarDetails}>
          <NavbarPrincipal />
        </div>
      </div>

      <div className={styles.bodyDetails}>
        <div className={styles.buttonBack}>
          <button
            className={styles.buttonCreated1}
            onClick={(e) => cleanAndBack(e)}
          >
            <span className={styles.button_top}>
              <MdArrowBackIosNew /> BACK
            </span>
          </button>
        </div>
        <div className={styles.imgYmap}>
          <div className={styles.divImg}>
            <img src={details.flag} alt={details.name} />
          </div>
          <div className={styles.divMapa}>
            {
              <MapComponent
                className={styles.mapa}
                lat={details.latlng && Number(details.latlng[0])}
                lng={details.latlng && Number(details.latlng[1])}
              />
            }
          </div>
        </div>
        <div className={styles.CardDetails}>
          <h2> {details.name}</h2>
          <p>Code: {details.id}</p>
          <p>Capital: {details.capital}</p>
          <p>Subregion: {details.subregion}</p>
          <p>Area: {details.area} m2</p>
          <p>Population: {details.population}</p>
          <p>- Area: {details.area}</p>
          <p>- Onu Member: {details.unMember ? `✔` : `❌`}</p>
          <p>- Time zones: {details.timezones}</p>
        </div>
        <div className={styles.divActivities}>
          <ul className={styles.ulActivitie}>
            <h2>Activities: </h2>
            {details.activities?.length === 0 && (
              <p>Activities for this country not available</p>
            )}
            {details.activities?.map((ele) => {
              return (
                <div key={ele.id}>
                  <li>
                    <h4>{ele.name}:</h4>
                  </li>
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
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
