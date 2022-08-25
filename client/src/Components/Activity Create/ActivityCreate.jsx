import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../Navbar/NavbarFiltOrd";
import { MdArrowBackIosNew } from "react-icons/md";
import NavbarPrincipal from "../Navbar/NavbarFiltOrd";
import { useState } from "react";
import styles from "../Activity Create/ActivityCreate.module.css";
import Searchbar from "../Searchbar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { searchCountrie } from "../../redux/actions/countries";
import { setCurrentPage } from "../../redux/actions/actions";
import Card from "../Card/Card";
import CardCreateActivitie from "../Card/CardCreateActivitie";

export default function ActivityCreate() {
  const searchCountries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    difficulty: null,
    duration: null,
    season: [],
    countries: [],
    flag: [],
  });

  const [name, setName] = useState("");
  const [localCountries, setLocalCountries] = useState({
    name: [],
    flag: [],
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // setErrors(
    //   validate({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };

  const handlerInputChek = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setInput((prevState) => ({
        ...prevState,
        season: input.season.concat(e.target.value),
      }));
    } else {
      setInput((prevState) => ({
        ...prevState,
        season: input.season.filter((ele) => e.target.value !== ele),
      }));
    }
  };

  const handleSearchCountries = (e) => {
    setName(e.target.value.toLowerCase());
    console.log(e.target.value);
    dispatch(searchCountrie(name));
    // setCurrentPage(1);
  };

  const handleClickButton = (e) => {
    console.log(input);
    setInput({
      ...input,
      season: input.countries.concat(e.target.value),
    });
  };

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
      <form action="">
        <div>
          <h1>ACTIVITY CREATOR </h1>
        </div>
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
            max="100"
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
        <div>
          {name &&
            searchCountries.map((ele) => {
              return (
                <div key={ele.id}>
                  <button
                    name={ele.id}
                    value={ele.id}
                    onClick={(e) =>
                      setInput({
                        ...input,
                        countries: ele.name,
                        flag: ele.flag,
                      })
                    }
                  >
                    <CardCreateActivitie name={ele.name} flag={ele.flag} />
                  </button>
                </div>
              );
            })}
        </div>
        <div className={styles.errores}>
          {errors.countries && <p>⚠ {errors.countries}</p>}
        </div>
      </div>
    </div>
  );
}
