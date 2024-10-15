// import React from "react";
import "../css/aboutme.css";
import BackgroundAbout1 from "/src/assets/_MG_9204.jpg";
import BackgroundAbout2 from "/src/assets/_MG_9106.jpg";
import BackgroundAbout3 from "/src/assets/_MG_9613.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="custom-hr text-center my-5"></div>
        </div>
        <h1 className="my-5">CONOCÉ A TU ENTRENADOR</h1>
        <div
          className="aboutme-bg"
          style={{ backgroundImage: `url(${BackgroundAbout1})` }}
        >
          <div className="description-container">
            <h2>Soy Carlos Adolfo Bosio</h2>
            <p className=" ">- Profesor de Educación física</p>
            <p className=" ">- Atleta multidisciplinario</p>
            <p className=" ">
              - Especialista en entrenamiento de fuerza y potencia
            </p>
            <p className=" ">- Musculación e Hipertrofia</p>
            <p className=" ">- Rehabilitación</p>
            <p className=" ">- Alimentación Deportiva</p>
          </div>
        </div>
        <div
          className="aboutme-bg2"
          style={{ backgroundImage: `url(${BackgroundAbout2})` }}
        >
          <div className="description-container2">
            <h2>Estilo de Entrenamiento</h2>
            <p>Transmito lo que predico.</p>
            <p>La forma en la que preparo</p>
            <p>a mis alumnos es la forma</p>
            <p>en la que me preparo día a día.</p>
          </div>
        </div>
        <div
          className="aboutme-bg3"
          style={{ backgroundImage: `url(${BackgroundAbout3})` }}
        >
          <div className="description-container3">
            <h2>Funcionalidad</h2>
            <p>Un cuerpo saludable</p>
            <p>es aquel que está preparado</p>
            <p>para actuar de forma óptima</p>
            <p>en todos los planos de movimientos</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-4 pt-5 bg-black bg-gradient">
        <h2>EMPEZÁ TU TRANSFORMACIÓN AHORA:</h2>
      </div>
      <div className="container text-center">
        <a
          href="https://wa.me/5493816755376"
          target="_blank"
          type="button"
          className="btn text-light btn-lg contact-btn"
        >
          <i className="bi bi-whatsapp"> </i>QUIERO UNIRME
        </a>
      </div>
      <div className="container">
        <div className="custom-hr text-center my-5"></div>
      </div>
      <div className="text-center" style={{ color: "rgb(160, 160, 160)" }}>
        <h4 className="py-0 my-0">
          La actividad física es un pilar fundamental de la vida.
        </h4>
        <h4 className="py-0 my-0">
          No sólo a nivel físico, sino también mental y emocional.
        </h4>
        <h4 className="py-0 my-0">
          Cada rutina y cada ejercicio, están pensados, no sólo para mejorar tu
          rendimiento deportivo,
        </h4>
        <h4 className="py-0 my-0">
          sino también, para mejorar tu calidad de vida.
        </h4>
        <h4 className="py-0 my-0">
          El cambio para alcanzar tu mejor versión empieza HOY!
        </h4>
      </div>
      <div className="container">
        <div className="custom-hr text-center my-5"></div>
      </div>
    </>
  );
};

export default AboutMe;
