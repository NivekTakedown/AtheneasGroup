import React from 'react';
import '../styles.css';

function TeamMemberCard({ name, role, imageSrc, offcanvasTarget }) {
  return (
    <div className="col mb-3">
      <div className="card h-100">
        <img src={imageSrc} className="card-img-top" alt="..." style={{ width: 'auto', height: '370px' }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{role}</p>
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target={offcanvasTarget} aria-controls="offcanvasScrolling">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;