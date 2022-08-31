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

  let details = useSelector((state) => state.details);

  return (
    <div>
      <div className={styles.navYButton}>
        <div className={styles.divButton}>
          <button
            className={styles.buttonBack}
            onClick={(e) => cleanAndBack(e)}
          >
            <MdArrowBackIosNew />
          </button>
        </div>
        <div className={styles.navbarDetails}>
          <NavbarPrincipal />
        </div>
      </div>
      <div className={styles.divImg}>
        <img src={details.flag} alt={details.name} />
      </div>
      <div className={styles.divActivities}>
        <ul className={styles.ulActivitie}>
          <h2>Activities: </h2>
          {details.activities?.map((ele) => {
            return (
              <div key={ele.id}>
                <li>
                  <h4>{ele.name}:</h4>
                </li>
                <p>- Difficulty: {ele.difficulty}</p>
                <p>
                  Duration:
                  {ele.duration}
                </p>
              </div>
            );
          })}
        </ul>
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
  );
}
