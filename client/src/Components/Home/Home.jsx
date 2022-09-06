import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/countries";
//components
import Card from "../Card/Card";
import NavbarFiltrosYOrdenamientos from "../Navbar/NavbarFiltrosYOrdenamientos/NavbarFiltrosYOrdenamientos";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";
import Paginado from "../Paginado/Paginado";
import Loader from "../Loader/Loader";
import styles from "../Home/Home.module.css";
import CantidadDePaginas from "../Cantidad De Paginas/CantidadDePaginas";
import Searchbar from "../Searchbar/Searchbar";
import PaginadoActivitieCreate from "../Activity Create/Paginado Activitie Create/PaginadoActivitieCreate";

export default function Home() {
  let dispatch = useDispatch();
  let allCountries = useSelector((state) => state.countries);
  let currentPage = useSelector((state) => state.page);
  let load = useSelector((state) => state.loader);

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

  return load ? (
    <Loader />
  ) : (
    <div>
      <div className={styles.navBarPrincipal}>
        <NavbarPrincipal />
      </div>
      <div className={styles.home}>
        <div className={styles.filterContainer}>
          <NavbarFiltrosYOrdenamientos />
        </div>
        <div className={styles.container}>
          <div className={styles.searchBarHome}>
            <Searchbar />
          </div>
          {allCountries.length ? (
            currentCountries?.map((ele) => {
              return (
                <div className={styles.img} key={ele.id}>
                  <Link className={styles.Link} to={`/countries/${ele.id}`}>
                    <Card
                      name={ele.name}
                      flag={ele.flag}
                      continent={ele.continent}
                    />
                  </Link>
                </div>
              );
            })
          ) : (
            <div className={styles.noMatch}>
              <p>The search does not coincide with any country</p>
            </div>
          )}
        </div>
        <div className={styles.paginado}>
          <CantidadDePaginas className={styles.cantPage} />
          <Paginado allCountries={allCountries.length} />
        </div>
        <div className={styles.paginado2}>
          <PaginadoActivitieCreate allCountries={allCountries.length} />
        </div>
      </div>
      ;
    </div>
  );
}
