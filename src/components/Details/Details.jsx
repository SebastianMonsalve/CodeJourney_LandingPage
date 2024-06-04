import React, { useEffect, useState } from "react";
import "./Details.css";
import stars from "/bg_Stars.png";
import { InformationApp } from "./Data";

const Details = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

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
        <div className="details-fondo">
          <img src={stars} alt="background to stars" draggable="false" />
        </div>
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
            {InformationApp.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    index == current
                      ? "details-card details-card-active"
                      : "details-card"
                  }
                >
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
