import React from 'react';
import '../styles.css';

function TeamMemberOffcanvas({ id, name, description }) {
  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id={id} aria-labelledby="offcanvasScrollingLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">{name}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TeamMemberOffcanvas;