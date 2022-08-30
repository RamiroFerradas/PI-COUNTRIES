import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
import style from "../Navbar Principal/NavbarPrincipal.module.css";

export default function NavbarPrincipal() {
  // const listRef = useRef(null);

  // const handleOnClick = () => {
  //   listRef.current.classList.toggle(style.visible);
  // };
  return (
    <div>
      <div>
        <button className={style.btn}>
          <NavLink to="/home">COUNTRIES</NavLink>
        </button>
      </div>
      <div>
        <button className={style.btn}>
          <NavLink to="/activities">ACTIVITIES</NavLink>
        </button>
      </div>
    </div>
  );
}
// import Nav from "react-bootstrap/Nav";

// export default function NavbarPrincipal() {
//   return (
//     <Nav justify variant="tabs" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link href="/home">COUNTRIES</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="/create">ACTIVITIES</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="disabled" disabled>
//           Disabled
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default JustifiedExample;
