import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles.css';
import logo from './assets/Atheneas.svg'; 

const navItems = [
  { href: '/AtheneasGroup', text: 'Inicio' },
]
const navItemsHome = [
  { href: '/AtheneasGroup', text: 'Inicio' },
  { href: "#servicios", text: "Servicios" },
  { href: "#articles", text: "Artículos"},
  { href: "#casos-exito", text: "Casos de éxito" },
  { href: "#equipo", text: "Equipo" },
  { href: "#contacto", text: "Contacto" }
];

function Header() {
  const currentNavItems = window.location.pathname === '/AtheneasGroup' ? navItemsHome : navItems;
  return (
    <header className="header mt-lg-3 mt-xl-5 mt-4">
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="collapse navbar-collapse justify-content-end">
            <Nav className="navbar-nav">
              {currentNavItems.map((item, index) => (
                <Nav.Link key={index} href={item.href} className={`nav-item ${item.href === '#' ? 'active' : ''}`}>{item.text}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;