import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import CasesOfSuccess from './components/CasesOfSuccess.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Head from './components/Head.jsx';


function App() {
  return (
    <html>
      <Head />
      <body>
        {
        <div className="app">
        <Header />
        <main>
          <Hero />
          <Services />
          <CasesOfSuccess />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
      }
      </body>
    </html>
    
  );
}

export default App;