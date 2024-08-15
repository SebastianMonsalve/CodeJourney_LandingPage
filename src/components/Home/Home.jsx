import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "./Home.css";
import mockup from "/MockUp-Mano.png";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";

const Home = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "20px",
      duration: 500,
      delay: 100,
      reset: false,
    });

    sr.reveal(".home-box.box-purple", { origin: "left", delay: 100 });
    sr.reveal(".home-box.box-green", { origin: "right", delay: 200 });
    sr.reveal(".home-box.box-yellow", { origin: "top", delay: 300 });
    sr.reveal(".home-box.box-orange", { origin: "bottom", delay: 400 });
    sr.reveal(".home-box.box-sky", { origin: "left", delay: 500 });
    sr.reveal(".home-box.box-blue", { origin: "right", delay: 600 });
    sr.reveal(".home-info", { origin: "top", delay: 700 });
    sr.reveal(".home-image", { origin: "bottom", delay: 800 });
  }, []);

  return (
    <section className="home">
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
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
            <a href="/Code Journey v0.1.0.apk" download className="home-button">
              <p>{t("home-button")}</p>
            </a>
            <a
              className="home-button-play"
              onClick={() => setIsModalOpen(true)}
            >
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
