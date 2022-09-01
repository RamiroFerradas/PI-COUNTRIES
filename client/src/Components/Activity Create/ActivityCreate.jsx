import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../Activity Create/ActivityCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postCountrie } from "../../redux/actions/countries";
import { useNavigate } from "react-router-dom";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";
import { getActivities } from "../../redux/actions/activities";
import SearchBarActivities from "./Search Bar Activities/SearchBarActivities";
import SelectorCountries from "./Selector Countries/SelectorCountries";
import PaginadoActivitieCreate from "./Paginado Activitie Create/PaginadoActivitieCreate";

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let countriesBusqueda = useSelector((state) => state.countries);

  let [countriesA, setCountriesA] = useState(countriesBusqueda);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountries());
  }, [dispatch]);

  let activities = useSelector((state) => state.activities);

  const [nameSearch, setNameSearch] = useState("");

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: "1",
    duration: "0",
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

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(
      postCountrie({
        ...input,
        name: input.name.toLowerCase(),
      })
    );
    alert("Your activity has been successfully created!");
    setTimeout(() => {
      navigate("/activities");
    }, 350);
    setInput({
      name: "",
      difficulty: 0,
      duration: 0,
      season: [],
      countriesName: [],
      flag: [],
      countries: [],
    });
  };

  //validations
  function validate(input) {
    let errors = {};

    console.log(activities.map((ele) => ele.name).includes(input.name));
    //name
    // if (activities?.map((ele) => ele.name).includes(input.name)) {
    //   errors.name = "This country already has the selected activity ";
    // }

    if (input.name === "") errors.name = "Tu actividad necesita un nombre!";

    if (/[^\w\s]/.test(input.name))
      errors.name =
        "El nombre de tu actividad no puede contener caracteres especiales";
    if (/[1-9]/.test(input.name))
      errors.name = "El nombre de tu actividad no puede contener numeros";

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
      /[^\w\s]/.test(input.name) ||
      /[1-9]/.test(input.name) ||
      // /[\s]/.test(input.name) ||
      input.difficulty.length < 1 ||
      input.difficulty.length > 10 ||
      input.duration.length < 1 ||
      input.duration.length > 24 ||
      input.season.length < 1 ||
      input.season.length > 4 ||
      !input.countries?.length ||
      activities.find(
        (ele) => ele.name?.toLowerCase() === input.name?.toLowerCase()
      )
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [activities, errors, input, setDisabledButton]);

  const handlerClear = () => {
    setInput({
      name: "",
      difficulty: "1",
      duration: 0,
      season: "",
      countriesName: [],
      flag: [],
      countries: [],
    });
    document.getElementsByClassName("form-check-input")[0].checked = false;
    document.getElementsByClassName("form-check-input")[1].checked = false;
    document.getElementsByClassName("form-check-input")[2].checked = false;
    document.getElementsByClassName("form-check-input")[3].checked = false;
  };

  return (
    <div>
      <div className={styles.navYButton}>
        {/* <div className={styles.divButton}>
          <button
            className={styles.buttonBack}
            onClick={(e) => cleanAndBack(e)}
          >
            <MdArrowBackIosNew />
          </button>
        </div> */}
        <div className={styles.navbarDetails}>
          <NavbarPrincipal />
        </div>
      </div>

      <div>
        <div className={styles.primeraColumna}>
          <form action="">
            <div className={styles.inputForm}>
              <input
                className={
                  !errors.name ? styles.inputFormInput : styles.errorInput
                }
                type="text"
                placeholder="Activitie Name..."
                autoComplete="off"
                onChange={(e) => handleChangeInput(e)}
                value={input.name}
                name="name"
              />
              <div>
                {errors.name && (
                  <p className={styles.errors}>⚠ {errors.name}</p>
                )}
              </div>
            </div>

            <div className={styles.inputDif}>
              <p htmlFor="">Difficulty: </p>
              <input
                type="range"
                min="1"
                max="5"
                onChange={(e) => handleChangeInput(e)}
                value={input.difficulty}
                name="difficulty"
                defaultValue="1"
              />
              <label
                className={
                  input.difficulty === "1"
                    ? styles.dif1
                    : input.difficulty === "2"
                    ? styles.dif2
                    : input.difficulty === "3"
                    ? styles.dif3
                    : input.difficulty === "4"
                    ? styles.dif4
                    : styles.dif5
                }
              >
                {input.difficulty === "1"
                  ? "Beginner"
                  : input.difficulty === "2"
                  ? "Amateur"
                  : input.difficulty === "3"
                  ? "Intermediate"
                  : input.difficulty === "4"
                  ? "Advanced"
                  : "Expert"}
              </label>

              <div className={styles.errores}>
                {errors.difficulty && <p>⚠ {errors.difficulty}</p>}
              </div>
            </div>

            <div className={styles.inputDur}>
              <p htmlFor="">Duration: </p>
              <input
                type="range"
                max="24"
                onChange={(e) => handleChangeInput(e)}
                value={input.duration}
                name="duration"
              />
              <p>{input.duration} hs.</p>

              <div className={styles.errores}>
                {errors.duration && (
                  <p className={styles.errors}>⚠ {errors.duration}</p>
                )}
              </div>
            </div>
          </form>
          <div className={styles.inputSeas}>
            <p htmlFor="">Season: </p>
            <form onChange={(e) => handlerInputChek(e)}>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  name="summer"
                  id="summer"
                  value="Summer"
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
                  value="Autumn"
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
                  value="Winter"
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
                  value="Spring"
                />
                <label htmlFor="spring">Spring.</label>
              </div>
            </form>
          </div>
          <div className={styles.errores}>
            {errors.season && (
              <p className={styles.errors}>⚠ {errors.season}</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.countries}>
        <div className={styles.h3}>
          <h3 htmlFor="">Select a country for your activity: </h3>
          <div className={styles.errores}>
            {errors.countries && (
              <p className={styles.errors}>⚠ {errors.countries}</p>
            )}
          </div>
        </div>
        <div className={styles.countriesSelected}>
          <h5>Countries Selected:</h5>
          <SelectorCountries
            validate={validate}
            errors={errors}
            setErrors={setErrors}
            input={input}
            setInput={setInput}
            nameSearch={nameSearch}
            setNameSearch={setNameSearch}
            countriesA={countriesA}
            setCountriesA={setCountriesA}
          />
        </div>
        <div className={styles.SearchCountries}>
          <SearchBarActivities
            validate={validate}
            errors={errors}
            setErrors={setErrors}
            input={input}
            setInput={setInput}
            nameSearch={nameSearch}
            setNameSearch={setNameSearch}
            countriesA={countriesA}
            setCountriesA={setCountriesA}
          />
        </div>
      </div>
      <div className={styles.paginadoCreate}>
        {<PaginadoActivitieCreate allCountries={countriesA.length} />}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.buttonCreated1}
          disabled={disabledButton}
          onClick={(e) => handleChange(e)}
        >
          <span className={styles.button_top}> Add activitie</span>
        </button>
        <button
          className={styles.buttonCreated2}
          onClick={(e) => handlerClear(e)}
        >
          <span className={styles.button_top}> RESET</span>
        </button>
      </div>
    </div>
  );
}
