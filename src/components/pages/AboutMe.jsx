import React from "react";
import "../css/aboutme.css";
import BackgroundAbout1 from "/src/assets/_MG_9204.jpg";
import BackgroundAbout2 from "/src/assets/_MG_9106.jpg";
import BackgroundAbout3 from "/src/assets/_MG_9613.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="container-body">
        <div
          className="aboutme-bg"
          style={{ backgroundImage: `url(${BackgroundAbout1})` }}
        >
          <div className="description-container">
            <h2>Soy Carlos Adolfo Bosio</h2>
            <p>Profesor de Educación física</p>
            <p>Atleta multidisciplinario</p>
            <p>Especialista en entrenamiento de fuerza y potencia</p>
            <p>Musculación e Hipertrofia</p>
            <p>Rehabilitación</p>
            <p>Alimentación Deportiva</p>
          </div>
        </div>
        <div
          className="aboutme-bg2"
          style={{ backgroundImage: `url(${BackgroundAbout2})` }}
        >
          <div className="description-container2">
            <h2>Estilo de Entrenamiento</h2>
            <p>Transmito lo que predico</p>
            <p>La forma en la que preparo</p>
            <p>a mis alumnos es la forma</p>
            <p>en la que me preparo día a día</p>
          </div>
        </div>
        <div
          className="aboutme-bg3"
          style={{ backgroundImage: `url(${BackgroundAbout3})` }}
        >
          <div className="description-container3">
            <h2>Funcionaliad</h2>
            <p>Un cuerpo saludable</p>
            <p>es aquel que está preparado</p>
            <p>para actuar de forma óptima</p>
            <p>en todos los planos de movimientos</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
