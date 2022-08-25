import React from "react";

export default function CardCreateActivitie({ name, flag }) {
  return (
    <div>
      <p>{name}</p>
      <img width="150px" height="100px" src={flag} alt={name} />

      {/* <p>Continent: {continent}</p> */}
    </div>
  );
}
