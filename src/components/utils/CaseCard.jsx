import React from 'react';

function CaseCard({ title, description, imageUrl, link }) {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary custom-button wow fadeInUp" data-wow-delay="0.4s">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;