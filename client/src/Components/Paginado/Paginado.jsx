import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Paginado/Paginado.module.css";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { setCurrentPage } from "../../redux/actions/actions";

export default function Paginado({ allCountries }) {
  let dispatch = useDispatch();
  let currentPage = useSelector((state) => state.page);
  let countriesPerPage = useSelector((state) => state.countriesPerPage);
  let pageNumbers = [];
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
        <span>
          <GiPreviousButton />
        </span>
      </button>

      {pageNumbers?.map((num) => {
        return (
          <button
            key={num}
            disabled={num === currentPage}
            className={styles.button}
            onClick={() => dispatch(setCurrentPage(num))}
          >
            {num}
          </button>
        );
      })}

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
