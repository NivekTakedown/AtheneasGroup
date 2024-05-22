import React, { useState } from 'react';
import TeamMemberCard from './utils/TeamMemberCard.jsx';
import TeamMemberOffcanvas from './utils/TeamMemberOffcanvas.jsx';
import sebasImg from './assets/Sebastian.png';
import kevinImg from './assets/kevin.jpg';

function Team() {
  const [showOffcanvas, setShowOffcanvas] = useState(null);

  const handleShowOffcanvas = (id) => {
    setShowOffcanvas(id);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(null);
  };

  const teamMembers = [
    {
      id: 'offcanvasScrolling3',
      name: 'Juan Sebastián Medina',
      role: 'Estudiante de ingeniería de sistemas de la Universidad Nacional de Colombia.',
      imageSrc: sebasImg,
      description: 'Ingeniero de Software y Fundador en el Campo de la Inteligencia Artificial, con experiencia destacada en el desarrollo utilizando frameworks como React, Next y Express. He liderado equipos exitosos en la implementación de soluciones innovadoras y participado en investigaciones pioneras en el ámbito de la computación cuántica y algoritmia. Mi enfoque se centra en la vanguardia de la innovación, colaborando con expertos en el desarrollo de tecnologías de próxima generación y abordando los desafíos más apasionantes del campo de la inteligencia artificial.',
    },
    {
      id: 'offcanvasScrolling5',
      name: 'Kevin Fabio Ramos',
      role: 'Apasionado por la tecnología y la innovación, es ingeniero de sistemas y computación de la Universidad Nacional de Colombia, con énfasis en aplicaciones en la nube, bases de datos y desarrollo backend.',
      imageSrc: kevinImg,
      description: 'Además, trabaja como desarrollador de software en esta universidad, donde pone en práctica sus habilidades en proyectos de interés público que involucran soluciones digitales.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#7299B0' }}>
      <div className="container" id="equipo">
        <h2 className="text-center text-white display-4 m-5">Equipo</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              onClick={() => handleShowOffcanvas(member.id)}
            />
          ))}
        </div>
      </div>

      {teamMembers.map((member) => (
        <TeamMemberOffcanvas
          key={member.id}
          id={member.id}
          name={member.name}
          description={member.description}
          show={showOffcanvas === member.id}
          onHide={handleCloseOffcanvas}
        />
      ))}
    </section>
  );
}

export default Team;