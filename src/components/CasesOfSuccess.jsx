import React from 'react';
import CaseCard from './utils/CaseCard';
import Machine from './assets/Firefly-Machine-learning-61452-_1_-_1_.webp';
import mathematics from './assets/Firefly-mathematics-for-engineering-74475.webp';

const casesData = [
  {
    title: 'Empresa de tecnología',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    imageUrl: Machine,
    link: '#v1',
  },
  {
    title: 'Empresa de tecnología',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    imageUrl: mathematics,
    link: '#v2',
  },
];

function CasesOfSuccess() {
  return (
    <section>
      <div className="container" id="casos-exito">
        <h2 className="text-center display-4 m-5">
          Transformando datos en éxito, potenciando tu empresa en la era digital.
        </h2>
        <div className="row">
          {casesData.map((caseItem, index) => (
            <CaseCard key={index} {...caseItem} />
          ))}
        </div>
      </div>
      <div id="prueba" name="prueba"></div>
    </section>
  );
}

export default CasesOfSuccess;