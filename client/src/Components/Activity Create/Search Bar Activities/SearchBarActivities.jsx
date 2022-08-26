import { useDispatch, useSelector } from "react-redux";
import { addCountrie, limpioUnCountrie } from "../../../redux/actions/actions";
import styles from "../Search Bar Activities/SearchBarActivities.module.css";
import CardCreateActivitie from "../Card Create Activitie/CardCreateActivitie";
import PaginadoActivitieCreate from "../Paginado Activitie Create/PaginadoActivitieCreate";
import { useState } from "react";

export default function SearchBarActivities({
  setInput,
  input,
  name,
  setErrors,
  validate,
}) {
  const dispatch = useDispatch();
  let searchCountries = useSelector((state) => state.countries);
  let [countriesNuevos, setCountriesNuevos] = useState(searchCountries);
  console.log(countriesNuevos, "PORQUEEE");

  let currentPage = useSelector((state) => state.page);

  let countriesPerPage = useSelector((state) => state.countriesPerPage);
  const indexOfLastCountrie = countriesPerPage * currentPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;

  const currentCountries = searchCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );

  return (
    <div>
      {name && (
        <div>
          <PaginadoActivitieCreate allCountries={searchCountries.length} />
        </div>
      )}
      <div>
        <div>
          <h1>Countries Selected:</h1>
          <div>
            {input.countriesName?.map((ele) => {
              return (
                <div key={ele}>
                  <button
                    onClick={() => {
                      setInput((prevState) => ({
                        ...prevState,
                        countriesName: input.countriesName.filter(
                          (x) => ele !== x
                        ),
                      }));

                      setErrors((prevState) =>
                        validate({
                          ...input,
                          countries: input.countriesName.filter(
                            (x) => ele !== x
                          ),
                        })
                      );
                      dispatch(addCountrie(ele));
                    }}
                  >
                    x
                  </button>
                  <p>{ele}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {name &&
        currentCountries.map((ele) => {
          return (
            <div key={ele.id} className={styles.cardSearch}>
              <button
                name={ele.name}
                flag={ele.flag}
                value={ele.id}
                onClick={() => {
                  setInput((prevState) => ({
                    ...prevState,
                    countriesName: [
                      ...input.countriesName,
                      ele.name && ele.name,
                    ],
                    flag: [...input.flag, ele.flag && ele.flag],

                    countries: [...input.countries, ele.id && ele.id],
                  }));

                  setErrors(
                    validate({
                      ...input,
                      countries: [...input.countriesName, ele.name],
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
