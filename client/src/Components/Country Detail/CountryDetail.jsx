import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountriesDetails } from "../../redux/actions/countries";

export default function CountryDetail() {
  let dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getCountriesDetails(id));
  }, [dispatch, id]);

  let details = useSelector((state) => state.details);

  console.log(details, "details");

  return (
    <div>
      <div>
        <h1>Name: {details.name}</h1>
        <img
          width="100px"
          height="100px"
          src={details.flag}
          alt={details.name}
        />
        <p>Code: {details.id}</p>
        <p>Capital: {details.capital}</p>
        <p>Subregion: {details.subregion}</p>
        <p>Area: {details.area}</p>
        <p>Population: {details.population}</p>

        <ul>
          <h4>Activities: </h4>
          {details.activities?.map((ele) => {
            return (
              <div>
                <li>{ele.name}</li>
                <p>- Difficulty: {ele.difficulty}</p>
                <p>- Duration: {ele.duration}</p>
                <p>- Season: {ele.season}</p>

                {/* <p>- Countries: {console.log(ele.countries)}</p> */}
              </div>
            );
          })}
        </ul>
        {/* <iframe
          src={details.maps}
          frameborder="2px"
          width="200px"
          height="200px"
          title={details.maps}
        ></iframe> */}
      </div>

      {/* <iframe src={details.maps}></iframe> */}
      <div>
        <p>{}</p>
      </div>
    </div>
  );
}
