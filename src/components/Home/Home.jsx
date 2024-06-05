import React from "react";
import "./Home.css";
import mockup from "/MockUp-Mano.png";
import ColorBox from "../ColorBox";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-box box-purple"></div>
        <div className="home-box box-green"></div>
        <div className="home-box box-yellow"></div>
        <div className="home-box box-orange"></div>
        <div className="home-box box-sky"></div>
        <div className="home-box box-blue"></div>
        <div className="home-info">
          <h1 className="home-title">{t("home-title")}</h1>
          <p className="home-p">{t("home-description")}</p>
          <div className="home-buttons">
            <a href="" className="home-button">
              <p>{t("home-button")}</p>
            </a>
            <a className="home-button-play">
              <i className="fa-brands fa-google-play" />
              <div className="home-button-play-container">
                <p>{t("home-button2")}</p>
                <span>Google Play</span>
              </div>
            </a>
          </div>
        </div>
        <div className="home-image">
          <img
            src={mockup}
            alt="mockup"
            className="home-image"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
