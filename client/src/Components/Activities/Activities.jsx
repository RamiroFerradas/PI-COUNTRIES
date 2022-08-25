import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";

export default function Activities() {
  const activities = useSelector((state) => state.activities);

  const activitiesSet = Array.from(new Set(activities));
  console.log(activities);

  return (
    <div>
      <div>
        <NavbarPrincipal />
      </div>
      <button>
        <NavLink to="/create"> ACTIVITIE CREATE </NavLink>
      </button>
      <div>
        {activities?.map((ele) => {
          return (
            <div key={ele.id}>
              <h4>Activity: {ele.name}</h4>
              <p>Difficulty{ele.difficulty}</p>
              <p>Duration: {ele.duration}</p>
              <p>Season: {ele.season}</p>
              <p>Countries: {ele.countries}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
