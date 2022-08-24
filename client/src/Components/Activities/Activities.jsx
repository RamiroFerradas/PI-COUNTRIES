import React from "react";
import { NavLink } from "react-router-dom";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";

export default function Activities() {
  return (
    <div>
      <div>
        <NavbarPrincipal />
      </div>
      <button>
        <NavLink to="/create"> ACTIVITIE CREATE </NavLink>
      </button>
    </div>
  );
}
