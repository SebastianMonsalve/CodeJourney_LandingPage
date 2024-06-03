import React from "react";
import "./Home.css";
import mockup from "../../../public/MockUp-Mano.png";
import ColorBox from "../ColorBox";

const Home = () => {
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
