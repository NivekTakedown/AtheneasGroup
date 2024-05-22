import React from 'react';
import '../styles.css';
import { Offcanvas } from 'react-bootstrap';

function TeamMemberOffcanvas({ id, name, description, show, onHide }) {
  return (
    <Offcanvas show={show} onHide={onHide} placement="start" scroll={true} backdrop={false} id={id} aria-labelledby="offcanvasScrollingLabel">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{name}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>{description}</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default TeamMemberOffcanvas;