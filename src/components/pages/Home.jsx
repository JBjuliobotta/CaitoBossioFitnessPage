import React from "react";
import "../css/home.css";
import Accordion from "react-bootstrap/Accordion";
import CardImage1 from "/src/assets/_MG_9566.jpg";
import CardImage2 from "/src/assets/_MG_9297.jpg";
import CardImage3 from "/src/assets/_MG_9493.jpg";
import BJJ from "/src/assets/Bjjphoto.jpg";
import Bodybuilding from "/src/assets/bodybuildingphoto.jpg";
import Boxing from "/src/assets/boxingphoto.jpg";
import Calistenics from "/src/assets/calistenicsphoto.jpg";
import Rugby from "/src/assets/rugbyphoto.jpg";
import Enduro from "/src/assets/endurophoto.jpg";
import Ciclyst from "/src/assets/ciclystsphoto.jpg";
import Weight from "/src/assets/olympicweightliftingphoto.jpg";

const Home = () => {
  return (
    <>
      <div className="title-phrase">
        <p>
          "El ejercicio es una celebración de lo que tu cuerpo es capaz de
          hacer"
        </p>
      </div>
      <div className="sport-photos">
        <div className="sport-photos-slider">
          <img src={BJJ} alt="BJJ" />
          <img src={Bodybuilding} alt="Bodybuilding" />
          <img src={Boxing} alt="Boxing" />
          <img src={Enduro} alt="Enduro" />
          <img src={Rugby} alt="Rugby" />
          <img src={Weight} alt="Weight" />
          <img src={Calistenics} alt="Calistenics" />
          <img src={Ciclyst} alt="Ciclyst" />
        </div>
        <div className="sport-photos-slider">
          <img src={BJJ} alt="BJJ" />
          <img src={Bodybuilding} alt="Bodybuilding" />
          <img src={Boxing} alt="Boxing" />
          <img src={Enduro} alt="Enduro" />
          <img src={Rugby} alt="Rugby" />
          <img src={Weight} alt="Weight" />
          <img src={Calistenics} alt="Calistenics" />
          <img src={Ciclyst} alt="Ciclyst" />
        </div>
      </div>
      <div className="description-phrase">
        <p>La actividad física es un pilar fundamental de la vida.</p>
        <p>No sólo a nivel físico, sino también mental y emocional.</p>
        <p>
          Cada rutina y cada ejercicio, están pensados, no sólo para mejorar tu
          rendimiento deportivo,
        </p>
        <p>sino también, para mejorar tu calidad de vida.</p>
        <p>El cambio para alcanzar tu mejor versión empieza HOY!</p>
      </div>
      <div className="container">
        <div className="card">
          <img
            className="card-image"
            style={{ backgroundImage: `url(${CardImage1})` }}
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
            className="card-image"
            style={{ backgroundImage: `url(${CardImage2})` }}
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
            className="card-image"
            style={{ backgroundImage: `url(${CardImage3})` }}
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
