import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions/countries";

import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import Paginado from "../Paginado/Paginado";
import Searchbar from "../Searchbar/Searchbar";

export default function Home() {
  let dispatch = useDispatch();
  let allCountries = useSelector((state) => state.countries);
  let currentPage = useSelector((state) => state.page);
  // const [order, setOrder] = useState("");

  useEffect(() => {
    if (allCountries.length) {
      return allCountries;
    } else {
      dispatch(getCountries());
    }
  }, [allCountries, dispatch]);

  let [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountrie = countriesPerPage * currentPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;

  const currentCountries = allCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Paginado allCountries={allCountries.length} />
      </div>
      <div>
        {currentCountries?.map((ele) => {
          return (
            <Link to={`/countries/${ele.id}`}>
              <div key={ele.id}>
                <Card
                  name={ele.name}
                  flag={ele.flag}
                  continent={ele.continent}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
