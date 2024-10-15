// import React from "react";
import "../css/home.css";
// import Accordion from "react-bootstrap/Accordion";
import CardImage1 from "/src/assets/_MG_9566.jpg";
import CardImage2 from "/src/assets/_MG_9297.jpg";
import CardImage3 from "/src/assets/_MG_9493.jpg";
// import BJJ from "/src/assets/Bjjphoto.jpg";
// import Bodybuilding from "/src/assets/bodybuildingphoto.jpg";
// import Boxing from "/src/assets/boxingphoto.jpg";
// import Calistenics from "/src/assets/calistenicsphoto.jpg";
// import Rugby from "/src/assets/rugbyphoto.jpg";
// import Enduro from "/src/assets/endurophoto.jpg";
// import Ciclyst from "/src/assets/ciclystsphoto.jpg";
// import Weight from "/src/assets/olympicweightliftingphoto.jpg";

const Home = () => {
  return (
    <>
      {/* TITULO */}
      <div className="container text-center mt-5 pt-5">
        <h6 className="pb-3" style={{ color: "rgb(160, 160, 160)" }}>
          <b style={{ color: "#94c120" }}>Caito Bosio</b> | Personal Trainer
        </h6>
        <h1>
          Logro que profesionales +30 años obtengan un cuerpo atlético
          entrenando efectivamente en 90 días
        </h1>
        <h6 className="mt-3" style={{ color: "rgb(160, 160, 160)" }}>
          (Sin necesidad de tener experiencia previa en entrenamientos ni de
          eliminar ningún tipo de alimento de tu dieta)
        </h6>
      </div>

      {/* CAROUSEL */}
      {/* <div className="sport-photos">
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
      </div> */}

      {/* VIDEO VSL */}
      <div className="container text-center my-5">
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/EAv3ivfQCcw?autoplay=1&mute=1"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="rounded border border-light"
        ></iframe>
      </div>

      {/* BOTON DE CONTACTO */}
      <div className="container text-center mb-5">
        <button
          href="https://wa.me/5493816755376"
          target="_blank"
          type="button"
          className="btn btn-primary btn-lg contact-btn"
        >
          <i className="bi bi-whatsapp"> </i>CONTACTAME AHORA
        </button>
      </div>

      {/* METODO */}
      <div className="">
        <div className="text-center bg-black bg-gradient pt-5">
          <h1 className="">
            CONOCE EL MÉTODO{" "}
            <b style={{ color: "#94c120" }}>"FITNESS DEVELOP"</b>
          </h1>
          {/* SEPARADOR */}
          <div className="container">
            <div className="custom-hr text-center my-5"></div>
          </div>
          <div className="mx-3">
            <h4 style={{ color: "rgb(160, 160, 160)" }} className="mb-0 pb-0">
              Llamado de esta manera porque en él vas a explorar todo tu
              potencial fitness,{" "}
            </h4>
            <h4 style={{ color: "rgb(160, 160, 160)" }} className="mb-0 pb-0">
              el desarrollo integro de tu aptitud ante tal situación,
            </h4>
            <h4 style={{ color: "rgb(160, 160, 160)" }} className="mb-0 pb-0">
              la misma que no te está permitiendo cumplir ese sueño, esa meta
              física.
            </h4>
          </div>
        </div>
        {/* SEPARADOR */}
        <div className="container">
          <div className="custom-hr text-center my-5"></div>
        </div>
        <div className="container">
          {/* 1. */}
          <div className="row align-items-center ">
            <div className="col-md-6 text-center">
              <img
                src="/src/assets/_MG_9566.jpg"
                alt=""
                height={540}
                className="rounded mb-5 border border-light"
              />
            </div>
            <div className="col-md-6">
              <h2 className="px-5" style={{ color: "#94c120" }}>
                1. ANÁLISIS
              </h2>
              <h4 className="px-5">
                Cada persona es diferente, por eso cada entrenamiento va a tener
                estímulos diferentes de acuerdo a tu nivel de experiencia,
                objetivos y disponibilidad.
              </h4>
            </div>
            <hr />
          </div>
          {/* 2 */}
          <div className="row align-items-center">
            <div className="col-md-6 text-center order-md-2">
              <img
                src="/src/assets/_MG_9297.jpg"
                alt=""
                height={540}
                className="rounded my-5 border border-light"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h2 className="px-5" style={{ color: "#94c120" }}>
                2. EJECUCIÓN
              </h2>
              <h4 className="px-5">
                Una vez tengamos definida tu idea, conozcamos tu punto de
                partida ahí empezamos a darle forma a tu visión, creamos tu plan
                y lo ponemos en marcha.
              </h4>
            </div>
          </div>
          {/* 3 */}
          <div className="row align-items-center ">
            <hr />
            <div className="col-md-6 text-center">
              <img
                src="/src/assets/_MG_9493.jpg"
                alt=""
                height={540}
                className="rounded my-5 border border-light"
              />
            </div>
            <div className="col-md-6">
              <h2 className="px-5" style={{ color: "#94c120" }}>
                3. AJUSTE
              </h2>
              <h4 className="px-5">
                Realizamos chequeos para ver como te va con el plan y lo
                ajustamos aún más a tus requerimientos, siempre trabajando con
                objetivos semanales y diarios
              </h4>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* BOTON DE CONTACTO */}
      <div className="text-center">
        <h1 className="mt-5">EMPEZÁ AHORA MISMO:</h1>
      </div>
      <div className="container text-center my-5">
        <button
          href="https://wa.me/5493816755376"
          target="_blank"
          type="button"
          className="btn btn-primary btn-lg contact-btn"
        >
          <i className="bi bi-whatsapp"> </i>CONTACTAME AHORA
        </button>
      </div>
      <hr />

      {/* CARDS */}
      {/* <div className="description-phrase">
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
      </div> */}

      {/* Boton de Whatsapp */}
      <a
        href="https://wa.me/5493816755376"
        target="_blank"
        className="btn-success whatsapp-btn"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
};

export default Home;
