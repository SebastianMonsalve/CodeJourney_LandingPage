import React from "react";
import "./Home.css";
import ColorBox from "../ColorBox";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <ColorBox
          size="6.25rem"
          color="var(--ElectricPurple)"
          top="9rem"
          left="4rem"
        />
        <ColorBox
          size="4rem"
          color="var(--LimeGreen)"
          top="12rem"
          right="10rem"
        />
        <ColorBox
          size="5rem"
          color="var(--GoldenYellow)"
          bottom="5rem"
          left="24rem"
        />
        <ColorBox size="3rem" color="var(--Orange)" top="8rem" right="50rem" />
        <ColorBox
          size="7rem"
          color="var(--SkyBlue)"
          top="20rem"
          right="52rem"
        />
        <ColorBox
          size="6rem"
          color="var(--SlateBlue)"
          bottom="2rem"
          right="5rem"
        />
        <div className="home-info">
          <h1 className="home-title">
            Aprende a programar de forma interactiva
          </h1>
          <p className="home-p">
            Code Journey es tu compañero ideal para aprender programación.
            Diseñada para principiantes y expertos, nuestra app ofrece lecciones
            interactivas, ejercicios prácticos y herramientas de seguimiento de
            progreso. ¡Empieza tu viaje en el mundo de la programación con
            nosotros y alcanza tus metas educativas de manera efectiva y
            divertida!
          </p>
          <div className="home-buttons">
            <a href="" className="home-button">
              <p>Descargar APK</p>
            </a>
            <a className="home-button-play">
              <i className="fa-brands fa-google-play" />
              <div className="home-button-play-container">
                <p>Proximamente en</p>
                <span>Google Play</span>
              </div>
            </a>
          </div>
        </div>
        <div className="home-image">
          <img
            src="../../../public/MockUp-Mano.png"
            alt="mockup"
            className="home-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
