import React from "react";

export default function CardCreateActivitie({ name, flag }) {
  return (
    <div>
      <p>{name}</p>
      <img width="70rem" height="70rem" src={flag} alt={name} />

      {/* <p>Continent: {continent}</p> */}
    </div>
  );
}
