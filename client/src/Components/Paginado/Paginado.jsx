import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { setCurrentPage } from "../../redux/actions/actions";

export default function Paginado({ allCountries }) {
  let dispatch = useDispatch();
  let currentPage = useSelector((state) => state.page);
  let pageNumbers = [];
  let [countriesPerPage, setCountriesPerPage] = useState(10);
  let totalPages = Math.ceil(allCountries / countriesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <button
        // className={
        //   currentPage - 1 === 0 ? styles.buttonPaged2 : styles.buttonPaged
        // }
        disabled={currentPage - 1 === 0}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
      >
        <GiPreviousButton />
      </button>

      {pageNumbers?.map((num) => {
        return (
          <button
            key={num}
            disabled={num === currentPage}
            onClick={() => dispatch(setCurrentPage(num))}
          >
            {num}
          </button>
        );
      })}

      <button
        // className={
        //   currentPage === totalPages ? styles.buttonPaged2 : styles.buttonPaged
        // }
        disabled={currentPage === totalPages}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
      >
        <GiNextButton />
      </button>
    </nav>
  );
}
