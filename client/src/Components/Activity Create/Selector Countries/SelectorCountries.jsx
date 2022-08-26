import React from "react";
import CardCreateActivitie from "../Card Create Activitie/CardCreateActivitie";

export default function SelectorCountries({ localCountries }) {
  console.log(localCountries, "HOLAAAAAAAAA");

  return (
    <div>
      <h1>hola</h1>
      {localCountries &&
        localCountries.countries.map((ele) => {
          return (
            <div>
              <h1>{ele}</h1>
              {/* <CardCreateActivitie name={ele.name} flag={ele.flag} /> */}
            </div>
          );
        })}
    </div>
  );
}
