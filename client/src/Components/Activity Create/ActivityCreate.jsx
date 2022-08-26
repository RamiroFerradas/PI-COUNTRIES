import React, { useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import styles from "../Activity Create/ActivityCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  postCountrie,
  searchCountrieGlobal,
} from "../../redux/actions/countries";

import { NavLink, useNavigate } from "react-router-dom";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";

import { getActivities } from "../../redux/actions/activities";
import SearchBarActivities from "./Search Bar Activities/SearchBarActivities";

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountries());
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);

  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: [],

    countriesName: [],
    flag: [],
    countries: [],
  });

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerInputChek = (e) => {
    if (e.target.checked) {
      setInput((prevState) => ({
        ...prevState,
        season: input.season.concat(e.target.value),
      }));
      setErrors(
        validate({
          ...input,
          season: [...input.season, e.target.value],
        })
      );
    } else {
      setInput((prevState) => ({
        ...prevState,
        season: input.season.filter((x) => e.target.value !== x),
      }));

      setErrors(
        validate({
          ...input,
          season: input.season.filter((x) => e.target.value !== x),
        })
      );
    }
  };

  const handleSearchCountries = (e) => {
    setName(e.target.value.toLowerCase());
    dispatch(searchCountrieGlobal(name));
    // dispatch(setCurrentPage(1));
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(
      postCountrie({
        ...input,
        name: input.name.toLowerCase(),
      })
    );
    alert("Your activity has been successfully created!");
    setInput({
      name: "",
      difficulty: 0,
      duration: 0,
      season: [],
      countriesName: [],
      flag: [],
      countries: [],
    });

    setTimeout(() => {
      navigate("/activities");
    }, 200);
  };

  //validations
  function validate(input) {
    let errors = {};

    //name
    if (
      activities.find(
        (ele) => ele.name?.toLowerCase() === input.name?.toLowerCase()
      ) ||
      console.log(
        activities.find((ele) => ele.countries),
        "caca"
      )
    )
      errors.name =
        "Ya existe una actividad con este nombre en ese pais, escoge otra!";

    // if (activities.find((ele) => ele.countries === input.countriesName))
    // errors.name =
    // "Ya existe una actividad con este nombre en ese pais, escoge otra!";
    if (input.name === "") errors.name = "Tu actividad necesita un nombre!";

    if (/[^\w\s]/.test(input.name))
      errors.name =
        "El nombre de tu actividad no puede contener caracteres especiales";

    //difficulty
    if (input.difficulty === 0)
      errors.difficulty = "La dificultad debe ser mayor a 0!";
    if (
      input.difficulty > 10 ||
      input.difficulty < 1 ||
      !/\d/g.test(input.difficulty)
    )
      errors.difficulty = "El valor debe estar entre 1 y 10";

    //duration
    if (input.duration === 0)
      errors.duration = "La duration debe ser mayor a 0!";
    if (
      input.duration > 24 ||
      input.duration < 1 ||
      !/\d/g.test(input.duration)
    )
      errors.duration = "El valor debe estar entre 1 y 24";

    //Season
    if (!input.season?.length)
      errors.season = "Tu actividad necesita una temporada al menos!";

    // //genres
    if (!input.countries?.length)
      errors.countries = "Tu actividad necesita un countrie al menos!";

    return errors;
  }

  const [disabledButton, setDisabledButton] = useState(true);
  useEffect(() => {
    if (
      input.name === "" ||
      /[1-9]/.test(input.name) ||
      // /[\s]/.test(input.name) ||
      /[^\w\s]/.test(input.name) ||
      input.difficulty.length < 1 ||
      input.difficulty.length > 10 ||
      input.duration.length < 1 ||
      input.duration.length > 24 ||
      input.season.length < 1 ||
      input.season.length > 4 ||
      input.countriesName.length < 1 ||
      activities.find(
        (ele) => ele.name?.toLowerCase() === input.name?.toLowerCase()
      )
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [activities, errors, input, setDisabledButton]);

  return (
    <div>
      <div>
        <NavLink to="/home">
          <div className="recarga">
            <button className="cssbuttons-io-button">
              <div className="icon">
                <MdArrowBackIosNew />
              </div>
            </button>
          </div>
        </NavLink>
      </div>
      <div>
        <NavbarPrincipal />
      </div>
      <div>
        <h1>ACTIVITY CREATOR </h1>
      </div>
      <form action="">
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            placeholder="Name..."
            autoComplete="on"
            onChange={(e) => handleChangeInput(e)}
            value={input.name}
            name="name"
          />
          <div className={styles.errores}>
            {errors.name && <p>⚠ {errors.name}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="">Difficulty: </label>
          <input
            type="range"
            max="10"
            onChange={(e) => handleChangeInput(e)}
            value={input.difficulty}
            name="difficulty"
          />
          <p>{input.difficulty}</p>
          <div className={styles.errores}>
            {errors.difficulty && <p>⚠ {errors.difficulty}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="">Duration: </label>
          <input
            type="range"
            max="24"
            onChange={(e) => handleChangeInput(e)}
            value={input.duration}
            name="duration"
          />
          <p>{input.duration}</p>
          <label>hs.</label>
          <div className={styles.errores}>
            {errors.duration && <p>⚠ {errors.duration}</p>}
          </div>
        </div>
      </form>
      <div>
        <label htmlFor="">Season: </label>
        <form onChange={(e) => handlerInputChek(e)}>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              name="summer"
              id="summer"
              value="summer"
            />
            <label htmlFor="summer">Summer.</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              name="autumn"
              id="autumn"
              value="autumn"
            />
            <label htmlFor="autumn">Autumn.</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              name="winter"
              id="winter"
              value="winter"
            />
            <label htmlFor="winter">Winter.</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              name="spring"
              id="spring"
              value="spring"
            />
            <label htmlFor="spring">Spring.</label>
          </div>
        </form>
        <div className={styles.errores}>
          {errors.season && <p>⚠ {errors.season}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="">Countrie: </label>
        <form>
          <input
            type="search"
            placeholder="Search Countrie . . . "
            onChange={(e) => handleSearchCountries(e)}
          />
        </form>
        <div className={styles.errores}>
          {errors.countries && <p>⚠ {errors.countries}</p>}
        </div>
        <div>
          <SearchBarActivities
            validate={validate}
            setErrors={setErrors}
            input={input}
            setInput={setInput}
            name={name}
          />
        </div>
      </div>
      <div className={styles.buttonCreate}>
        <button
          className={styles.buttonCreated1}
          disabled={disabledButton}
          onClick={(e) => handleChange(e)}
        >
          CREATE
          <div className={styles.iconCreated}>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
