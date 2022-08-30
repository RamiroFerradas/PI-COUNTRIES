import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getCountriesDetails } from "../../redux/actions/countries";
import { MdArrowBackIosNew } from "react-icons/md";
import { cleanCache } from "../../redux/actions/actions";
import MapComponent from "./Map/MyComponent";
import NavbarFiltrosYOrdenamientos from "../Navbar/NavbarFiltrosYOrdenamientos/NavbarFiltrosYOrdenamientos";

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

  // console.log(details.latlng, "details");

  return (
    <div>
      <div>
        <button onClick={(e) => cleanAndBack(e)}>
          <div>
            <MdArrowBackIosNew />
          </div>
        </button>
      </div>
      <div>
        <NavbarFiltrosYOrdenamientos />
      </div>

      <div>
        <h1>Name: {details.name}</h1>
        <img
          width="100px"
          height="100px"
          src={details.flag}
          alt={details.name}
        />
        <p>Code: {details.id}</p>
        <p>Capital: {details.capital}</p>
        <p>Subregion: {details.subregion}</p>
        <p>Area: {details.area} m2</p>
        <p>Population: {details.population}</p>

        <ul>
          <h4>Activities: </h4>
          {details.activities?.map((ele) => {
            return (
              <div key={ele.id}>
                <li>{ele.name}</li>
                <p>- Difficulty: {ele.difficulty}</p>
                <p>- Duration: {ele.duration}</p>
                <p>- Season: {ele.season}</p>
              </div>
            );
          })}
          <div></div>
        </ul>
      </div>
      {
        <MapComponent
          lat={details.latlng && Number(details.latlng[0])}
          lng={details.latlng && Number(details.latlng[1])}
        />
      }
    </div>
  );
}
