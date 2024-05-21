import React from 'react';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="col-md-6">
      <div className="card mb-4">
        <div className="card-body">
        <FontAwesomeIcon icon={icon} size="5x" />
          <h3 className="card-title">
            <a href={link}>{title}</a>
          </h3>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            Más información
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;