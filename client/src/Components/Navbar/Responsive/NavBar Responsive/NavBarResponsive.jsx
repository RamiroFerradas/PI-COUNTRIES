import React from "react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import styles from "./NavBarResponsive.module.css";

export default function NavBarResponsive() {
  const [dropdown, setDropDown] = useState(false);

  const handleDropDown = () => {
    console.log("holaa");
    setDropDown(!dropdown);
  };

  return (
    <div className={styles.bodyNavResp}>
      <Dropdown menuRole="menu" isOpen={dropdown} toggle={handleDropDown}>
        <div className={styles.menu}>
          <DropdownToggle className={styles.menuButton}>
            <BiMenu />
          </DropdownToggle>
        </div>
        <nav className={styles.navMenu}>
          <div className={styles.opciones}>
            <DropdownMenu className={styles.opciones2}>
              <DropdownItem className={styles.opciones3}>
                {" "}
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? styles.Aa : styles.Aa2
                  }
                >
                  COUNTRIES
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <NavLink
                  to="/activities"
                  className={({ isActive }) =>
                    isActive ? styles.Aa : styles.Aa2
                  }
                >
                  ACTIVITIES
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    isActive ? styles.Aa : styles.Aa2
                  }
                >
                  CREATE
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                {" "}
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? styles.Aa : styles.Aa2
                  }
                >
                  ABOUT
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </div>
        </nav>
      </Dropdown>
    </div>
  );
}
