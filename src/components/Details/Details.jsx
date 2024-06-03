import React from "react";
import "./Details.css";
import home from "../../../public/MockUp (1).png";
import stars from "../../../public/bg_Stars.png";

const Details = () => {
  return (
    <section>
      <div className="details-container">
        <div className="details-fondo">
          <img src={stars} alt="background to stars" draggable="false" />
        </div>
        <div className="details-info">
          <h2>Tu Aventura en Code Journey</h2>
          <p>
            Al iniciar sesión en Code Journey, serás recibido con un listado de
            desafíos organizados en aventuras dentro de un curso específico. Si
            deseas explorar otros cursos, simplemente haz clic en la tarjeta de
            la aventura para cambiar. Al seleccionar un desafío, podrás empezar
            a aprender respondiendo preguntas interactivas. Los desafíos se
            desbloquean de manera progresiva a medida que los completes. En la
            pantalla de inicio, también podrás ver tu racha de días
            consecutivos, las oportunidades de error (compiladores) que tienes,
            y comenzarás con 200 monedas para incentivarte en tu aprendizaje.
          </p>
        </div>
        <div className="details-image">
          <img src={home} alt="Home screen" draggable="false" />
        </div>
      </div>
    </section>
  );
};

export default Details;
