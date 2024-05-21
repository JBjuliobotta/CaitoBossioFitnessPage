import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div className="title-phrase">
        <p>
          "El ejercicio es una celebración de lo que tu cuerpo es capaz de
          hacer"
        </p>
      </div>
      <div className="description-phrase">
        <p>La actividad física es un pilar fundamental de la vida.</p>
        <p>No sólo a nivel físico, sino también mental y emocional.</p>
        <p>Cada rutina y cada ejercicio, están pensados, no sólo para mejorar tu rendimiento deportivo,</p>
        <p>sino también, para mejorar tu calidad de vida.</p>
        <p>El cambio para alcanzar tu mejor versión empieza HOY!</p>
      </div>
      <div className="container">
        <div className="card">
          <img
            src="src/assets/_MG_9566.jpg"
            className="card-image"
            alt="Caito"
          />
          <div className="card-body">
            <h3 className="card-title">Seguimiento Continuo</h3>
            <p className="card-info">
              El control es fundamental dentro del entrenamiento, el constante
              seguimiento de progresos garantiza alcanzar los resultados
              propuestos.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="src/assets/_MG_9297.jpg"
            className="card-image"
            alt="Caito"
          />
          <div className="card-body">
            <h3 className="card-title">Rutinas A Tu Medida</h3>
            <p className="card-info">
              Cada persona es diferente, por eso cada entrenamiento va a tener
              estímulos diferentes de acuerdo a tu nivel de experiencia,
              objetivos y disponibilidad.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="src/assets/_MG_9493.jpg"
            className="card-image"
            alt="Caito"
          />
          <div className="card-body">
            <h3 className="card-title">Orientacion a Objetivos</h3>
            <p className="card-info">
              La planificación de cada entrenamiento se orienta para una
              disciplina específica, buscar mejorar tu salud o rehabilitación de
              una lesión.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
