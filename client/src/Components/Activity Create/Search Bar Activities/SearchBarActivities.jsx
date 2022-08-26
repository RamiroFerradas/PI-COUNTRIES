import { useDispatch, useSelector } from "react-redux";
import { addCountrie, limpioUnCountrie } from "../../../redux/actions/actions";
import styles from "../Search Bar Activities/SearchBarActivities.module.css";
import CardCreateActivitie from "../Card Create Activitie/CardCreateActivitie";
import PaginadoActivitieCreate from "../Paginado Activitie Create/PaginadoActivitieCreate";
import { useState } from "react";
import {
  searchCountrie,
  searchCountrieGlobal,
} from "../../../redux/actions/countries";

export default function SearchBarActivities({
  setInput,
  input,
  name,
  setErrors,
  validate,
  setName,
}) {
  const dispatch = useDispatch();
  let searchCountries = useSelector((state) => state.countries);
  let searchCountriesAux = useSelector((state) => state.allCountries);

  let currentPage = useSelector((state) => state.page);

  let countriesPerPage = useSelector((state) => state.countriesPerPage);
  const indexOfLastCountrie = countriesPerPage * currentPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;

  const currentCountries = searchCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );
  const handleSearchCountries = (e) => {
    setName(e.target.value.toLowerCase());
    dispatch(searchCountrie(name));
    // dispatch(setCurrentPage(1));
  };

  // let map = searchCountriesAux.map((ele) => ele.id);

  // const existsCountry2 = searchCountries.filter(
  //   (ele) => ele.id !== input.countries.includes(ele.id)
  // );
  const existsCountry2 = searchCountries.filter(
    (ele) => ele !== input.countries.includes(ele.id)
  );

  console.log(input.AllCountries, "lcoal");
  console.log(
    searchCountries.map((ele) => ele.id),
    "global"
  );
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Search Countrie . . . "
          onChange={(e) => handleSearchCountries(e)}
        />
      </form>
      {input.countries && (
        <div>
          <PaginadoActivitieCreate allCountries={searchCountries.length} />
        </div>
      )}

      {name &&
        currentCountries.map((ele) => {
          return (
            <div key={ele.id} className={styles.cardSearch}>
              <button
                onClick={() => {
                  const existsCountry = input.countries.find(
                    (c) => c === ele.id
                  );
                  if (existsCountry) return alert("Error!");
                  setInput((state) => ({
                    ...state,
                    countries: [...input.countries, ele.id],
                  }));

                  setErrors((prevState) =>
                    validate({
                      ...input,
                      countries: [...input.countries, ele.name],
                    })
                  );

                  dispatch(limpioUnCountrie(ele.name));
                }}
              >
                <CardCreateActivitie name={ele.name} flag={ele.flag} />
              </button>
            </div>
          );
        })}
    </div>
  );
}
