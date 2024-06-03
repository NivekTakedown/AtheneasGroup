import React from 'react';
import './styles.css';
import { ReactComponent as Atheneas } from './assets/Atheneas.svg'; // Import the SVG as a component

function Hero() {
  return (
    <section className="hero mt-5 mt-md-4 mt-lg-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-left">
            <h1 className="display-3 wow fadeInUp">Impulsamos la transformación <span className="text-primary">digital </span> de tu empresa</h1>
            <p className="lead wow fadeInUp" data-wow-delay="0.2s">Impulsamos la innovación con inteligencia a través de soluciones de ingeniería de datos e IA para maximizar el valor de tus datos.</p>
            <a href="#contacto" className="btn btn-primary custom-button wow fadeInUp" data-wow-delay="0.4s">Contáctanos</a>
          </div>
          <div className="col-md-6 text-center">
            <Atheneas className="img-fluid wow fadeInUp scale-in-hor-right" alt="Imagen de tecnología" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;