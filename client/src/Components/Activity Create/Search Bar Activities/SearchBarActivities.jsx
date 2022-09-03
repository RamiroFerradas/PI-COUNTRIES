import { useDispatch, useSelector } from "react-redux";
import {
  addCountrie,
  limpioUnCountrie,
  setCurrentPage,
} from "../../../redux/actions/actions";
import styles from "../Search Bar Activities/SearchBarActivities.module.css";
import CardCreateActivitie from "../Card Create Activitie/CardCreateActivitie";
import PaginadoActivitieCreate from "../Paginado Activitie Create/PaginadoActivitieCreate";
import { useState } from "react";
import { getCountries } from "../../../redux/actions/countries";

export default function SearchBarActivities({
  input,
  setInput,
  nameSearch,
  setErrors,
  validate,
  countriesA,
  setCountriesA,
  setNameSearch,
  errors,
}) {
  let searchCountries = useSelector((state) => state.countries);
  let dispatch = useDispatch();
  let currentPage = useSelector((state) => state.page);

  // let countriesPerPage = useSelector((state) => state.countriesPerPage);

  let [countriesPerPage, setCountriesPerPage] = useState(12);

  const indexOfLastCountrie = countriesPerPage * currentPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;

  const currentCountries = countriesA.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );

  // };
  const handleSearchCountries = (e) => {
    const filt = countriesA.filter((ele) =>
      ele.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(e.target.value);
    if (e.target.value === "") return setCountriesA(searchCountries);
    setNameSearch(e.target.value.toLowerCase());
    setCountriesA(filt);
    // dispatch(searchCountrie(nameSearch));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.bodySearchAct}>
      <div className={styles.boxSearch}>
        <form>
          <input
            className={`limpiarinput ${styles.inputSearch}`}
            type="search"
            placeholder="Search Countrie . . . "
            onChange={(e) => handleSearchCountries(e)}
            disabled={input.name.length < 3 ? true : false}
          />
        </form>
        <i className="fas fa-search"></i>
        <div className={styles.errorsSearch}>
          {errors.name && !input.name && (
            <p>First you need to enter a name for your activity {`⚠`} </p>
          )}
        </div>
      </div>
      <div className={styles.prueba}>
        {!errors.name && input.name && currentCountries.length
          ? currentCountries.map((ele) => {
              return (
                <div key={ele.id} className={styles.cardSearch}>
                  <button
                    className={styles.button}
                    onClick={() => {
                      if (
                        ele.activities
                          .map((ele) => ele.name)
                          .includes(input.name)
                      ) {
                        return alert(
                          "This country already has the selected activity "
                        );
                      }
                      const existsCountry = input.countries.find(
                        (c) => c === ele.id
                      );
                      if (existsCountry)
                        return alert("The country is already selected!!");
                      setInput((state) => ({
                        ...state,
                        countries: [...input.countries, ele.id],
                      }));

                      setErrors(
                        validate({
                          ...input,
                          countries: [...input.countries, ele.name],
                        })
                      );
                      let filtroCreate = countriesA.filter(
                        (c) => c.name !== ele.name
                      );

                      setCountriesA(filtroCreate);

                      // setCountriesA(searchCountriesAux);
                      document.getElementsByClassName("limpiarinput")[0].value =
                        "";
                      // dispatch(getCountries());
                      // dispatch(limpioUnCountrie(ele.name));
                    }}
                  >
                    <div className={styles.imageSearch}>
                      <img
                        width="70rem"
                        height="70rem"
                        src={ele.flag}
                        alt={ele.name}
                      />
                      <p>{ele.name}</p>
                    </div>
                  </button>
                </div>
              );
            })
          : setCountriesA(searchCountries)}
      </div>
    </div>
  );
}
