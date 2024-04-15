import { useState } from "react";
import toggle from "../../assets/icones/align-justify.png";
import "./header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    //TogglerIcon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <section className="banner" id="Início">
      <nav className="nav">
        <a href="#" className="nav__brand">
          <img src={toggle} alt="" className="logo" />
        </a>

        <a href="#" className="nav__brand">
          <img src="" alt="" className="logo" />
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#Início" className="nav link">
              Utilitários
            </a>
          </li>

          <li className="nav__item">
            <a href="#Contatos" className="nav link">
              Manager
            </a>
          </li>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
