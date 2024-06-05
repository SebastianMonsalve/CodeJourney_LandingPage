import React from "react";
import "./Home.css";
import mockup from "/MockUp-Mano.png";
import ColorBox from "../ColorBox";
import i18next from "../../../services/i18next.js";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="home">
      <div className="home-container">
        <ColorBox
          size="11vmin"
          color="var(--ElectricPurple)"
          top="15vmin"
          left="10vmin"
        />
        <ColorBox
          size="7vmin"
          color="var(--LimeGreen)"
          top="20vmin"
          right="15vmin"
        />
        <ColorBox
          size="9vmin"
          color="var(--GoldenYellow)"
          bottom="5vmin"
          left="45vmin"
        />
        <ColorBox
          size="6vmin"
          color="var(--Orange)"
          top="15vmin"
          right="100vmin"
        />
        <ColorBox
          size="12vmin"
          color="var(--SkyBlue)"
          top="38vmin"
          right="95vmin"
        />
        <ColorBox
          size="11vmin"
          color="var(--SlateBlue)"
          bottom="5vmin"
          right="10vmin"
        />
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
