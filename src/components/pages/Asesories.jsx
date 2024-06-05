import React, { useState } from "react";
import "../css/asesories.css";
import { carouselImages } from "../../helpers/carouseldata";

const Asesories = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="container-main">
      <div className="asesories-description">
        <p>
          Las asesorías que doy son todas personalizadas, enfocándose en los
          resultados que buscan los alumnos.
        </p>
        <p>
          Mi experiencia como entrenador físico va desde preparar a un plantel
          superior de jugadores de rugby,
        </p>
        <p>
          {" "}
          competidores del Transmontaña, artistas marciales, fisiculturismo,
          jugadores de fútbol, jugadoras de hockey,
        </p>
        <p> a personas que quieren mejorar su salud y calidad de vida.</p>
      </div>
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${carouselImages[currentImg].img})` }}
        >
          <div
            className="left"
            style={{ fontSize: 30 }}
            onClick={() => {
              if (currentImg > 0) {
                setCurrentImg(currentImg - 1);
              } else {
                setCurrentImg(carouselImages.length - 1);
              }
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </div>
          <div className="center">
            <h2>{carouselImages[currentImg].title}</h2>
          </div>
          <div
            className="right"
            style={{ fontSize: 30 }}
            onClick={() => {
              if (currentImg < carouselImages.length - 1) {
                setCurrentImg(currentImg + 1);
              } else {
                setCurrentImg(0);
              }
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="form-title">
        <h3>Querés una asesoría personalizada?</h3>
        <h3>Envíame tus datos y voy a responder los antes posible</h3>
      </div>
      <div className="form-container">
        <form action="https://formsubmit.co/coachcaitobosio@gmail.com" method="POST">
          <div className="mb-3 mt-2">
            <label for="name&lastnameinput" className="form-label">
              Nombre y Apellido (campo requerido)
            </label>
            <input
              type="text"
              name="Nombre y Apellido"
              className="form-control"
              id="name&lastnameinput"
              placeholder="José Gómez"
              minLength={4}
              maxLength={30}
              required
            />
          </div>
          <div className="mb-3">
            <label for="cellphonenumberinput" className="form-label">
              Número de contacto (campo requerido, incluir código de provincia)
            </label>
            <input
              type="text"
              name="Número de contacto"
              className="form-control"
              id="cellphonenumberinput"
              placeholder="3816582134"
              minLength={4}
              maxLength={30}
              required
            />
          </div>
          <div className="mb-3">
            <label for="emailinput" className="form-label">
              Correo electrónico (campo requerido)
            </label>
            <input
              type="email"
              name="Correo electrónico"
              className="form-control"
              id="emailinput"
              placeholder="tuemail@gmail.com"
              minLength={10}
              maxLength={40}
              required
            />
          </div>
          <div className="mb-3">
            <label for="ageinput" className="form-label">
              Edad (campo requerido)
            </label>
            <input
              type="number"
              name="Edad"
              className="form-control"
              id="ageinput"
              placeholder="30"
              min={1}
              max={100}
              required
            />
          </div>
          <div className="mb-3">
            <label for="weightinput" className="form-label">
              Peso apróx. (campo requerido)
            </label>
            <input
              type="text"
              name="Peso aproximado"
              className="form-control"
              id="weightinput"
              placeholder="78 kg"
              minLength={4}
              maxLength={30}
              required
            />
          </div>
          <div className="mb-3">
            <label for="heightinput" className="form-label">
              Altura apróx. (campo requerido)
            </label>
            <input
              type="text"
              name="Altura aproximada"
              className="form-control"
              id="heightinput"
              placeholder="1,77 m"
              minLength={4}
              maxLength={30}
              required
            />
          </div>
          <div className="mb-3">
            <label for="conditioninput" className="form-label">
              Tenés alguna condición o lesión que deba conocer? (campo requerido)
            </label>
            <input
              type="text"
              name="Lesión o condición"
              className="form-control"
              id="conditioninput"
              placeholder="Tengo escoliosis/No tengo ninguna condición"
              minLength={2}
              maxLength={50}
              required
            />
          </div>
          <div className="mb-3">
            <label for="sportinput" className="form-label">
              Hacés algún deporte o disciplina? Competís? (campo requerido)
            </label>
            <input
              type="text"
              name="Deporte o disciplina"
              className="form-control"
              id="sportinput"
              placeholder="Jugador de rugby/Ejercicio eventual"
              minLength={4}
              maxLength={50}
              required
            />
          </div>
          <div className="mb-3">
            <label for="commentsectioninput" className="form-label">
              Comentame cuáles son tus objetivos. Te gustaría un seguimiento
              nutricional? (campo requerido)
            </label>
            <textarea
              className="form-control"
              name="Objetivos y seguimientos"
              id="commentsectioninput"
              rows="4"
              minLength={4}
              maxLength={300}
              required
            ></textarea>
          </div>
          <input type="hidden" name="_template" value="basic"></input>
          <input type="hidden" name="_next" value="https://caitobossiocoach.netlify.app/asesories"/>
          <div className="button-container">
            <button type="submit" value="Enviar" className="btn btn-light mb-2">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Asesories;
