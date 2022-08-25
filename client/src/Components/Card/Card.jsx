import React from "react";

export default function Card({ name, flag, continent }) {
  return (
    <div>
      <p>{name}</p>
      <img width="150px" height="100px" src={flag} alt={name} />

      {!{ continent } ? <p></p> : <p>Continent: {continent}</p>}
      {/* <p>Continent: {continent}</p> */}
    </div>
  );
}
