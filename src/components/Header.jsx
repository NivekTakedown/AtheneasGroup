import React from 'react';
import './styles.css';

// Definición de los elementos de navegación
const navItems = [
  { href: "#", text: "Inicio" },
  { href: "#servicios", text: "Servicios" },
  { href: "#casos-exito", text: "Casos de éxito" },
  { href: "#equipo", text: "Equipo" },
  { href: "#contacto", text: "Contacto" },
];

// Componente Header
function Header() {
  return (
    <header className="header mt-lg-3 mt-xl-5 mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "#7299B0"}}>
        <div className="container">
          <a className="navbar-brand" href="#">Atheneas Group | Transformando datos en éxito, Potenciando tu empresa</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <li key={index} className={`nav-item ${item.href === '#' ? 'active' : ''}`}>
                  <a className="nav-link" href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;