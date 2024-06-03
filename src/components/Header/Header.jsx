import React from "react";
import "./Header.css";
import logo from "../../../public/Titulo.png";

const Header = () => {
  return (
    <section className="nav">
      <div className="header-container">
        <img src={logo} alt="logo" className="header-logo" draggable="false" />
        <div className="header-menu">
          <select name="language" className="header-select">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <button className="header-button">
            <a href="" className="button-mobile">
              <i className="fa-solid fa-download" />
            </a>
            <a href="" className="button-web">
              Descargar APK
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
