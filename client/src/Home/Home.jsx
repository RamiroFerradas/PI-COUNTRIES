import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { getCountries } from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries);

  return (
    <div>
      {countries?.map((ele) => {
        return (
          <div>
            <Link to={`/countries/${ele.id}`}>
              <Card name={ele.name} flag={ele.flag} continent={ele.continent} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
