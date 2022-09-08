import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { setCurrentPage } from "../../../redux/actions/actions";
import styles from "../Paginado Activitie Create/PaginadoActivitieCreate.module.css";

export default function PaginadoActivitieCreate({ allCountries }) {
  let dispatch = useDispatch();
  let currentPage = useSelector((state) => state.page);
  // let countriesPerPage = useSelector((state) => state.countriesPerPage);
  let pageNumbers = [];
  let [countriesPerPage, setCountriesPerPage] = useState(20);
  let totalPages = Math.ceil(allCountries / countriesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <button
        className={styles.buttonPaged2}
        disabled={currentPage - 1 === 0}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
      >
        <GiPreviousButton />
      </button>
      {/* {pageNumbers?.map((num) => {
        return (
          <button
            key={num}
            disabled={num === currentPage}
            onClick={() => dispatch(setCurrentPage(num))}
          >
            {num}
          </button>
        );
      })} */}
      <label
        className={styles.numeracion}
      >{`  ${currentPage}/${totalPages}  `}</label>
      <button
        className={styles.buttonPaged2}
        disabled={currentPage === totalPages}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
      >
        <GiNextButton />
      </button>
    </nav>
  );
}
