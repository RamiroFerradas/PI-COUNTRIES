import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import Searchbar from "../Searchbar/Searchbar";

export default function Home() {
  let dispatch = useDispatch();
  let allCountries = useSelector((state) => state.countries);
  let currentPage = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  let [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountrie = countriesPerPage * currentPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;

  const currentCountries = allCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );
  console.log(currentCountries, "current countries");

  return (
    <div>
      <div>
        <Searchbar />
      </div>
      <div>
        <Paginado allCountries={allCountries.length} />
      </div>
      {currentCountries?.map((ele) => {
        return (
          <div key={ele.id}>
            <Link to={`/countries/${ele.id}`}>
              <Card name={ele.name} flag={ele.flag} continent={ele.continent} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
