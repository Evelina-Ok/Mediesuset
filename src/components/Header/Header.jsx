import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"
import { Navbar } from "../Navbar/Navbar";

export function Header() {
  return (
    <header>
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      <h2>4 - 7. juli 2022</h2>
      <Navbar />
    </header>
  );
}
