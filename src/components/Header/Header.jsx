import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "/Titulo.png";
import i18next from "../../../services/i18next.js";
import { useTranslation } from "react-i18next";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = async (event) => {
    const lng = event.target.value;
    i18next.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="header-container">
        <img
          src={logo}
          alt="logo"
          className="header-logo"
          draggable="false"
          onClick={scrollToTop}
        />
        <div className="header-menu">
          <select
            name="language"
            className="header-select"
            onChange={changeLanguage}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <button className="header-button">
            <a href="" className="button-mobile">
              <i className="fa-solid fa-download" />
            </a>
            <a href="" className="button-web">
              {t("home-button")}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
