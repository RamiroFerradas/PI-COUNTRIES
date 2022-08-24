import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/NavbarFiltOrd";
import { MdArrowBackIosNew } from "react-icons/md";
import NavbarPrincipal from "../Navbar/NavbarFiltOrd";

export default function ActivityCreate() {
  return (
    <div>
      <div>
        <NavLink to="/home">
          <div className="recarga">
            <button className="cssbuttons-io-button">
              <div className="icon">
                <MdArrowBackIosNew />
              </div>
            </button>
          </div>
        </NavLink>
      </div>
      <div>
        <NavbarPrincipal />
      </div>
      <form action="">
        <div></div>
      </form>
    </div>
  );
}
