import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountrie } from "../../../redux/actions/actions";
import { getCountries } from "../../../redux/actions/countries";
import styles from "../Selector Countries/SelectorCountries.module.css";

export default function SelectorCountries({
  setInput,
  input,
  setErrors,
  validate,
  countriesA,
  setCountriesA,
  errors,
}) {
  let countriesAux = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      {!errors.name && input.name && input.countries.length ? (
        <div className={styles.bodySelector}>
          {input.countries?.map((ele) => {
            const actualCountry = countriesAux?.find((c) => c.id === ele);
            if (actualCountry) {
              return (
                <div
                  key={actualCountry.id}
                  className={styles.SelectorCountries}
                >
                  <div>
                    <button
                      className={styles.buttonDelete}
                      onClick={() => {
                        const countriesId = input.countries.filter(
                          (c) => c !== ele
                        );

                        setInput((state) => {
                          return {
                            ...state,
                            countries: countriesId,
                          };
                        });
                        setErrors(
                          validate({
                            ...input,
                            countries: input.countries.filter((x) => ele !== x),
                          })
                        );

                        setCountriesA([...countriesA, actualCountry]);

                        // dispatch(addCountrie(actualCountry));
                        // dispatch(getCountries());
                      }}
                    >
                      ❌
                    </button>
                  </div>
                  <div className={styles.cardSelectorCountrie}>
                    <img
                      src={actualCountry.flag}
                      alt={`${actualCountry.countries} flag`}
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <span>{actualCountry.id}</span>
                </div>
              );
            }
            return <div></div>;
          })}
        </div>
      ) : (
        <p>None</p>
      )}
    </div>
  );
}
