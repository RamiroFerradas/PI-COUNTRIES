import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/countries";
//components
import Card from "../Card/Card";
import NavbarFiltOrd from "../Navbar/NavbarFiltOrd";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";
import Paginado from "../Paginado/Paginado";
import { getActivities } from "../../redux/actions/activities";

export default function Home() {
  let dispatch = useDispatch();
  let allCountries = useSelector((state) => state.countries);
  let currentPage = useSelector((state) => state.page);

  useEffect(() => {
    // if (allCountries.length) {
    //   return allCountries;
    // } else {
    dispatch(getCountries());
    // }
  }, [dispatch]);

  let countriesPerPage = useSelector((state) => state.countriesPerPage);
  const indexOfLastCountrie = countriesPerPage * currentPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;

  const currentCountries = allCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );

  return (
    <div>
      <div>
        <NavbarPrincipal />
      </div>
      <div>
        <NavbarFiltOrd />
      </div>
      <div>
        {currentCountries?.map((ele) => {
          return (
            <div key={ele.id}>
              <Link to={`/countries/${ele.id}`}>
                <Card
                  name={ele.name}
                  flag={ele.flag}
                  continent={ele.continent}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <Paginado allCountries={allCountries.length} />
      </div>
    </div>
  );
}
