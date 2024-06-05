import React, { useEffect, useState } from "react";
import "./Details.css";
import { InformationApp } from "./Data";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  const translateData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        title: item.title[i18n.language],
        text: item.text[i18n.language],
      };
    });
  };

  const Information = translateData(InformationApp);

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 10000);
  });

  const slideLeft = () => {
    setCurrent(current === 0 ? InformationApp.length - 1 : current - 1);
  };
  const slideRight = () => {
    setCurrent(current === InformationApp.length - 1 ? 0 : current + 1);
  };
  return (
    <section>
      <div className="details-container">
        <div
          className="details-carousel"
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          <div className="details-carousel-wrapper">
            {Information.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    index == current
                      ? "details-card details-card-active"
                      : "details-card"
                  }
                >
                  <div className="details-fondo">
                    <img
                      src={item.bg}
                      alt="background to stars"
                      draggable="false"
                    />
                  </div>
                  <div className="details-info">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                  <div className="details-image">
                    <img src={item.image} alt="Home screen" draggable="false" />
                  </div>
                </div>
              );
            })}
            <div className="details-carousel-arrow-left" onClick={slideLeft}>
              &lsaquo;
            </div>
            <div className="details-carousel-arrow-right" onClick={slideRight}>
              &rsaquo;
            </div>
            <div className="details-carousel-pagination">
              {InformationApp.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index == current
                        ? "pagination-dot pagination-dot-active"
                        : "pagination-dot"
                    }
                    onClick={() => setCurrent(index)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
