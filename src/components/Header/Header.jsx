import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="nav">
      <div className="header-container">
        <img
          src="../../../public/Titulo.png"
          alt="logo"
          className="header-logo"
        />
        <div className="header-menu">
          <select name="language" className="header-select">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <button className="header-button">
            <a href="">Descargar APK</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
