import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className={style.navbar}>
     
      <nav>
        <ul>
          <li>
            <NavLink to="/">FORSIDE</NavLink>
          </li>
          <li>
            <NavLink to="/events">EVENTS</NavLink>
          </li>
          <li>
            <NavLink to="/camps">CAMPS</NavLink>
          </li>
          <li>
            <NavLink to="/billetter">BILLETTER</NavLink>
          </li>
          <li>
            <NavLink to="/info">PRAKTISK INFO</NavLink>
          </li>
          <li>
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
