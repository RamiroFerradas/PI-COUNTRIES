import { useDispatch, useSelector } from "react-redux";
import { addCountrie, limpioUnCountrie } from "../../../redux/actions/actions";
import styles from "../Search Bar Activities/SearchBarActivities.module.css";
import CardCreateActivitie from "../Card Create Activitie/CardCreateActivitie";
import PaginadoActivitieCreate from "../Paginado Activitie Create/PaginadoActivitieCreate";

export default function SearchBarActivities({
  input,
  setInput,
  nameSearch,
  setErrors,
  validate,
  countriesA,
  setCountriesA,
  setNameSearch,
}) {
  let searchCountries = useSelector((state) => state.countries);
  // let searchCountriesAux = useSelector((state) => state.allCountries);

  // let [countries, setCountries] = useState(searchCountries);
  let currentPage = useSelector((state) => state.page);

  let countriesPerPage = useSelector((state) => state.countriesPerPage);

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
    setNameSearch(e.target.value.toLowerCase());
    setCountriesA(filt);
    // dispatch(setCurrentPage(1));
  };

  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Search Countrie . . . "
          onChange={(e) => handleSearchCountries(e)}
          class="limpiarinput"
          disabled={input.name.length < 3 ? true : false}
        />
      </form>
      {nameSearch && (
        <div>
          <PaginadoActivitieCreate allCountries={searchCountries.length} />
        </div>
      )}

      {nameSearch.length > 1 && currentCountries.length
        ? currentCountries.map((ele) => {
            return (
              <div key={ele.id} className={styles.cardSearch}>
                <button
                  className={styles.button}
                  onClick={() => {
                    if (
                      ele.activities.map((ele) => ele.name).includes(input.name)
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
                    <p>{ele.name}</p>
                    <img
                      width="70rem"
                      height="70rem"
                      src={ele.flag}
                      alt={ele.name}
                    />
                  </div>
                </button>
              </div>
            );
          })
        : setCountriesA(searchCountries)}
    </div>
  );
}
