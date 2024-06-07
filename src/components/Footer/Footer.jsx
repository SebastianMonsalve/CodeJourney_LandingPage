import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

const footer = () => {
  const { t } = useTranslation();
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-section1">
          <div className="footer-img">
            <img src="/Titulo.png" alt="CodeJourney logo" />
          </div>
          <p>{t("home-title")}</p>
        </div>
        <div className="footer-section2">
          <p>{t("footer-copyright")}</p>
          <p>Version 0.1.0</p>
        </div>
      </div>
    </section>
  );
};

export default footer;
