import React, { useState } from "react";
import "../css/asesories.css";
import { carouselImages } from "../../helpers/carouseldata";

const Asesories = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="container-main">
      <div className="asesories-description">
        <p>Las asesorías que doy son todas personalizadas, enfocándose en los resultados que buscan los alumnos.</p>
        <p>Mi experiencia como entrenador físico va desde preparar a un plantel superior de jugadores de rugby,</p>
        <p> competidores del Transmontaña, artistas marciales, fisiculturismo, jugadores de fútbol, jugadoras de hockey,</p>
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
              setCurrentImg(currentImg-1)
             } else  {
              setCurrentImg(carouselImages.length-1)
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
             if (currentImg < carouselImages.length-1) {
              setCurrentImg(currentImg+1);
             } else {setCurrentImg(0)};
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asesories;
