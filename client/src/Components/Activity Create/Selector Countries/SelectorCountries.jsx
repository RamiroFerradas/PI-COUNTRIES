import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountrie } from "../../../redux/actions/actions";
import { getCountries } from "../../../redux/actions/countries";

export default function SelectorCountries({
  setInput,
  input,
  setErrors,
  validate,
  countriesA,
  setCountriesA,
}) {
  let countriesAux = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      {input.countries.length ? (
        <div>
          {input.countries?.map((ele) => {
            const actualCountry = countriesAux?.find((c) => c.id === ele);
            if (actualCountry) {
              return (
                <div key={actualCountry.id}>
                  <button
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
                    x
                  </button>
                  <img
                    src={actualCountry.flag}
                    alt={`${actualCountry.countries} flag`}
                    width="100px"
                    height="100px"
                  />
                  <span>{actualCountry.name}</span>
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
